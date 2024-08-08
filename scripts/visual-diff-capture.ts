/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable compat/compat */
import fs from 'fs';
import path from 'path';

import minimist from 'minimist';
import fse from 'fs-extra';
import { createServer } from 'http-server';
import { chromium } from 'playwright-chromium';
import type { Browser, BrowserContext, Page } from 'playwright-chromium';
import loglevel from 'loglevel';
import type { LogLevelNames } from 'loglevel';

interface VisualDiffConfig {
  id: string;
  skip?: boolean | string[];
  onlyViewport?: boolean | string[];
  /** Open Trigger to check the popup render */
  openTriggerClassName?: string;
}

const themes = ['default', 'dark', 'compact'];

async function retrieveDemoUrl(mdPath: string) {
  // ~demos/button-demo-basic
  return mdPath
    .replace(/^components\//, '')
    .replace('.md', '')
    .replace(/\//g, '-');
}

async function retrieveConfig(mdPath: string): Promise<VisualDiffConfig> {
  const mdDir = path.dirname(mdPath);
  const configDir = path.join(mdDir, '..', '__tests__');
  const configPath = path.join(configDir, 'visual-diff.config.ts');
  // handle the case that the config file does not exist
  if (!fs.existsSync(configPath)) {
    return { id: path.basename(mdDir) };
  }

  const { default: configModule } = await import(configPath);
  return configModule;
}

async function getAllComponentMds(componentName?: string) {
  const { glob } = await import('glob');
  const globStr = componentName
    ? `components/${componentName}/demo/*.md`
    : 'components/!(overview|_util)/demo/*.md';
  const mds = await glob(globStr, {
    cwd: path.join(process.cwd()),
    dot: false,
  });

  return mds.sort();
}

const port = 3001;
async function createSiteServer() {
  const server = createServer({ root: path.join(process.cwd(), '_site') });
  server.listen(port);
  return server;
}

interface PageVisitConfig {
  mdPath: string;
  theme: string;
  enableCssVar: boolean;
}

class BrowserAuto {
  private browser: Browser | null = null;

  private context: BrowserContext | null = null;

  private outputDir = './imageSnapshots';

  async init() {
    this.browser = await chromium.launch({
      headless: true,
    });
    this.context = await this.browser.newContext({
      viewport: { width: 800, height: 600 },
      deviceScaleFactor: 2,
    });

    // 要截屏 6 张，需要测试一下要不要拆分为独立任务，还是按照 demoPath 一次性截屏 6 张
    this.context.setDefaultTimeout(5000 * 6);

    await fse.ensureDir(this.outputDir);
    await fse.emptyDir(this.outputDir);

    const errorFilePath = path.join(this.outputDir, 'error.jsonl');
    await fse.ensureFile(errorFilePath);
    await fse.writeFile(errorFilePath, '');
  }

  async appendErrorLog(errorData: any) {
    const errorFilePath = path.join(this.outputDir, 'error.jsonl');
    const errorLine = JSON.stringify({
      ...errorData,
      timestamp: new Date().toISOString(),
    });
    await fs.promises.writeFile(errorFilePath, `${errorLine}\n`);
  }

  // 执行截屏
  async captureScreenshots(config: PageVisitConfig) {
    if (!this.context) return;
    const { mdPath, theme, enableCssVar } = config;

    const page = await this.context.newPage();

    await this.visitDemoPage(page, mdPath, theme, enableCssVar);

    return page?.close();
  }

  private async visitDemoPage(page: Page, mdPath: string, theme: string, enableCssVar: boolean) {
    const demoUrl = await retrieveDemoUrl(mdPath);
    const options = await retrieveConfig(mdPath);

    const skip =
      Array.isArray(options.skip) &&
      options.skip.some((c) => path.basename(mdPath, '.md').endsWith(c));
    if (skip) {
      loglevel.info('Skip for: %s', mdPath);
      return;
    }

    const query = new URLSearchParams();
    query.set('theme', theme);
    if (enableCssVar) {
      query.set('enable-css-var', '1');
    }

    // breadcrumb-withIcon -> ~demos/breadcrumb-demo-withicon
    const pageUrl = `http://localhost:${port}/~demos/${demoUrl.toLowerCase()}?${query.toString()}`;

    await page.goto(pageUrl);
    // TODO: 需要禁用掉页面中的各种采集和埋点请求，避免干扰
    await page.waitForLoadState('networkidle');

    // 禁用掉所有的动画
    await page.addStyleTag({
      content: '*{animation: none!important;}',
    });

    await page.waitForSelector('.dumi-antd-demo-layout');

    const onlyViewport =
      options.onlyViewport === true ||
      (Array.isArray(options.onlyViewport) &&
        options.onlyViewport.some((c) => path.basename(mdPath, '.md').endsWith(c)));

    loglevel.info(
      'visit: %s, onlyViewport: %s, openTriggerClassName: %s',
      pageUrl,
      onlyViewport,
      options.openTriggerClassName,
    );
    if (!onlyViewport) {
      // Get scroll height of the rendered page and set viewport
      const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
      await page.setViewportSize({ width: 800, height: bodyHeight });
    }

    // Click trigger element
    // if (options.openTriggerClassName) {
    //   await page.click(`.${options.openTriggerClassName}`);
    // }

    // ~demos/button-demo-basic -> button-basic
    const imgName = `${demoUrl.replace('-demo', '')}.${theme}${enableCssVar ? '.css-var' : ''}.png`;

    // 保存截图到 ./result 目录
    await page.screenshot({
      path: path.join(this.outputDir, imgName),
      animations: 'disabled',
      scale: 'css',
      type: 'png',
      fullPage: !options.onlyViewport,
      timeout: 3000,
    });
  }

  // 关闭浏览器
  async close() {
    await this.browser?.close();
  }
}

function parseArgs(): {
  serverOnly?: boolean;
  component?: string;
  logLevel?: LogLevelNames;
  shard: { current: number; total: number };
  maxWorkers: number;
} {
  // parse args from
  // `-- --server-only=1 --component=button --loglevel=info --shard=1/2 --max-workers=2`
  const argv = minimist(process.argv.slice(2));

  let shard = { current: 1, total: 1 };
  if (argv.shard) {
    const [current, total] = argv.shard.split('/').map(Number);
    shard = { current, total };
  }

  return {
    logLevel: argv.loglevel as LogLevelNames,
    serverOnly: !!argv['server-only'],
    component: argv.component || '',
    shard,
    maxWorkers: argv['max-workers'] || 1,
  };
}

// npm run visual-diff:capture -- --component=space --loglevel=info --server-only --shard=1/2 --max-workers=2
(async () => {
  const args = parseArgs();
  const { serverOnly, component, logLevel = 'error', shard } = args;
  loglevel.setLevel(logLevel);

  loglevel.info(`Args: ${JSON.stringify(args)}`);

  const server = await createSiteServer();
  if (serverOnly) {
    return;
  }

  loglevel.info(`Debug mode: ${!!process.env.DEBUG}`);

  const handler = new BrowserAuto();
  await handler.init();
  let mdPaths = await getAllComponentMds(component);

  const { current, total } = shard;
  if (total > 1) {
    const mdsPerShard = Math.ceil(mdPaths.length / total);
    const start = (current - 1) * mdsPerShard;
    const end = start + mdsPerShard;
    const originLens = mdPaths.length;
    mdPaths = mdPaths.slice(start, end);
    loglevel.info(`Shard ${current}/${total}: ${mdPaths.length}/${originLens} mds`);
  }

  const task = async (visitConfig: PageVisitConfig) => {
    try {
      await handler.captureScreenshots(visitConfig);
    } catch (err) {
      const errorData = {
        filename: visitConfig.mdPath,
        error: (err as Error).message,
      };
      await handler.appendErrorLog(errorData);
      loglevel.error(`Error: ${errorData.error}`);
    }
  };

  const { default: pAll } = await import('p-all');

  const visitConfigs: Array<PageVisitConfig> = [];
  for (const mdPath of mdPaths) {
    for (const theme of themes) {
      visitConfigs.push({ mdPath, theme, enableCssVar: false });
      visitConfigs.push({ mdPath, theme, enableCssVar: true });
    }
  }

  // 增加并发
  await pAll(
    visitConfigs.map((visitConfig, i) => async () => {
      loglevel.info(
        `处理 ${i + 1}/${visitConfigs.length}: ${visitConfig.mdPath} / ${visitConfig.theme} / ${visitConfig.enableCssVar}`,
      );
      return task(visitConfig);
    }),
    { concurrency: 10 },
  );
  await handler.close();

  server.close();
})();
