(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b38b8af7"],{b38b8af7:function(e,n,l){"use strict";l.d(n,"__esModule",{value:!0}),l.d(n,"default",{enumerable:!0,get:function(){return p;}});var a=l("777fffbe"),d=l("f19d2b93"),r=a._(l("769c016e")),i=a._(l("b622e337")),s=a._(l("67074e5d")),c=a._(l("97c488ea")),t=a._(l("676a306f")),o=a._(l("bb43bfa2")),u=a._(l("c96b0d01")),h=l("5b220c3d"),x=l("9c86e52a");function j(){let{texts:e}=(0,x.useRouteMeta)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsx)("p",{children:e[0].value}),(0,d.jsx)("p",{children:e[1].value}),(0,d.jsxs)("ol",{children:[(0,d.jsx)("li",{children:e[2].value}),(0,d.jsx)("li",{children:e[3].value}),(0,d.jsx)("li",{children:e[4].value}),(0,d.jsx)("li",{children:e[5].value})]}),(0,d.jsxs)("h2",{id:"\u914D\u7F6E\u4E3B\u9898",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E\u4E3B\u9898",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E\u4E3B\u9898"]}),(0,d.jsxs)("p",{children:[e[6].value,(0,d.jsx)("strong",{children:e[7].value}),e[8].value,(0,d.jsx)("code",{children:e[9].value}),e[10].value,(0,d.jsx)("code",{children:e[11].value}),e[12].value]})]}),(0,d.jsxs)(r.default,{type:"warning",children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("code",{children:e[13].value}),e[14].value,(0,d.jsx)("code",{children:e[15].value}),e[16].value,(0,d.jsx)("code",{children:e[17].value}),e[18].value,(0,d.jsx)("code",{children:e[19].value}),e[20].value,(0,d.jsx)("code",{children:e[21].value}),e[22].value]}),(0,d.jsxs)("p",{children:[e[23].value,(0,d.jsx)("code",{children:e[24].value}),e[25].value,(0,d.jsx)(c.default,{to:"/components/app-cn",sourceType:"Link",children:e[26].value}),e[27].value]})]}),(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsxs)("h3",{id:"\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF"]}),(0,d.jsxs)("p",{children:[e[28].value,(0,d.jsx)("code",{children:e[29].value}),e[30].value,(0,d.jsx)("code",{children:e[31].value}),e[32].value]}),(0,d.jsx)(t.default,{autorun:!0,children:"import { Button, ConfigProvider, Space } from 'antd';\nimport React from 'react';\n\nconst App: React.FC = () => (\n  <ConfigProvider\n    theme={{\n      token: {\n        // Seed Token\uFF0C\u5F71\u54CD\u8303\u56F4\u5927\n        colorPrimary: '#00b96b',\n        borderRadius: 2,\n\n        // \u6D3E\u751F\u53D8\u91CF\uFF0C\u5F71\u54CD\u8303\u56F4\u5C0F\n        colorBgContainer: '#f6ffed',\n      },\n    }}\n  >\n    <Space>\n      <Button type=\"primary\">Primary</Button>\n      <Button>Default</Button>\n    </Space>\n  </ConfigProvider>\n);\n\nexport default App;"}),(0,d.jsxs)("h3",{id:"\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5"]}),(0,d.jsx)("p",{children:e[34].value}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[e[35].value,(0,d.jsx)("code",{children:e[36].value})]}),(0,d.jsxs)("li",{children:[e[37].value,(0,d.jsx)("code",{children:e[38].value})]}),(0,d.jsxs)("li",{children:[e[39].value,(0,d.jsx)("code",{children:e[40].value})]})]}),(0,d.jsxs)("p",{children:[e[41].value,(0,d.jsx)("code",{children:e[42].value}),e[43].value,(0,d.jsx)("code",{children:e[44].value}),e[45].value]}),(0,d.jsx)(t.default,{dark:!0,children:"import React from 'react';\nimport { Button, ConfigProvider, Input, Space, theme } from 'antd';\n\nconst App: React.FC = () => (\n  <ConfigProvider\n    theme={{\n      // 1. \u5355\u72EC\u4F7F\u7528\u6697\u8272\u7B97\u6CD5\n      algorithm: theme.darkAlgorithm,\n\n      // 2. \u7EC4\u5408\u4F7F\u7528\u6697\u8272\u7B97\u6CD5\u4E0E\u7D27\u51D1\u7B97\u6CD5\n      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],\n    }}\n  >\n    <Space>\n      <Input placeholder=\"Please Input\" />\n      <Button type=\"primary\">Submit</Button>\n    </Space>\n  </ConfigProvider>\n);\n\nexport default App;"}),(0,d.jsxs)("h3",{id:"\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF"]}),(0,d.jsx)("p",{children:e[47].value})]}),(0,d.jsxs)(r.default,{type:"info",title:"\u7EC4\u4EF6\u7EA7\u522B\u7684\u4E3B\u9898\u7B97\u6CD5",children:[(0,d.jsx)("p",{children:e[48].value}),(0,d.jsxs)("p",{children:[e[49].value,(0,d.jsx)("code",{children:e[50].value}),e[51].value,(0,d.jsx)("code",{children:e[52].value}),e[53].value]})]}),(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsx)(t.default,{children:"import React from 'react';\nimport { ConfigProvider, Button, Space, Input, Divider } from 'antd';\n\nconst App: React.FC = () => (\n  <>\n    <ConfigProvider\n      theme={{\n        components: {\n          Button: {\n            colorPrimary: '#00b96b',\n            algorithm: true, // \u542F\u7528\u7B97\u6CD5\n          },\n          Input: {\n            colorPrimary: '#eb2f96',\n            algorithm: true, // \u542F\u7528\u7B97\u6CD5\n          }\n        },\n      }}\n    >\n      <Space>\n        <div style={{ fontSize: 14 }}>\u5F00\u542F\u7B97\u6CD5\uFF1A</div>\n        <Input placeholder=\"Please Input\" />\n        <Button type=\"primary\">Submit</Button>\n      </Space>\n    </ConfigProvider>\n    <Divider />\n    <ConfigProvider\n      theme={{\n        components: {\n          Button: {\n            colorPrimary: '#00b96b',\n          },\n          Input: {\n            colorPrimary: '#eb2f96',\n          }\n        },\n      }}\n    >\n      <Space>\n        <div style={{ fontSize: 14 }}>\u7981\u7528\u7B97\u6CD5\uFF1A</div>\n        <Input placeholder=\"Please Input\" />\n        <Button type=\"primary\">Submit</Button>\n      </Space>\n    </ConfigProvider>\n  </>\n);\n\nexport default App;"}),(0,d.jsxs)("h3",{id:"\u7981\u7528\u52A8\u753B",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u7981\u7528\u52A8\u753B",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u7981\u7528\u52A8\u753B"]}),(0,d.jsxs)("p",{children:[e[55].value,(0,d.jsx)("code",{children:e[56].value}),e[57].value,(0,d.jsx)("code",{children:e[58].value}),e[59].value,(0,d.jsx)("code",{children:e[60].value}),e[61].value]}),(0,d.jsx)(t.default,{children:"import React from 'react';\nimport { Checkbox, Col, ConfigProvider, Flex, Radio, Row, Switch } from 'antd';\n\nconst App: React.FC = () => {\n  const [checked, setChecked] = React.useState<boolean>(false);\n  const timerRef = React.useRef<ReturnType<typeof setInterval>>();\n  React.useEffect(() => {\n    timerRef.current = setInterval(() => {\n      setChecked((prev) => !prev);\n    }, 500);\n    return () => {\n      if (timerRef.current) {\n        clearInterval(timerRef.current);\n      }\n    };\n  }, []);\n\n  const nodes = (\n    <Flex gap=\"small\">\n      <Checkbox checked={checked}>Checkbox</Checkbox>\n      <Radio checked={checked}>Radio</Radio>\n      <Switch checked={checked} />\n    </Flex>\n  );\n\n  return (\n    <Row gutter={[24, 24]}>\n      <Col span={24}>{nodes}</Col>\n      <Col span={24}>\n        <ConfigProvider theme={{ token: { motion: false } }}>{nodes}</ConfigProvider>\n      </Col>\n    </Row>\n  );\n};\n\nexport default App;"}),(0,d.jsxs)("h2",{id:"\u8FDB\u9636\u4F7F\u7528",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8FDB\u9636\u4F7F\u7528",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u8FDB\u9636\u4F7F\u7528"]}),(0,d.jsxs)("h3",{id:"\u52A8\u6001\u5207\u6362",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u52A8\u6001\u5207\u6362",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u52A8\u6001\u5207\u6362"]}),(0,d.jsxs)("p",{children:[e[63].value,(0,d.jsx)("code",{children:e[64].value}),e[65].value,(0,d.jsx)("code",{children:e[66].value}),e[67].value]}),(0,d.jsx)(t.default,{children:"import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';\nimport React from 'react';\n\nconst App: React.FC = () => {\n  const [primary, setPrimary] = React.useState('#1677ff');\n\n  return (\n    <>\n      <ColorPicker showText value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} />\n      <Divider />\n      <ConfigProvider\n        theme={{\n          token: {\n            colorPrimary: primary,\n          },\n        }}\n      >\n        <Space>\n          <Input placeholder=\"Please Input\" />\n          <Button type=\"primary\">Submit</Button>\n        </Space>\n      </ConfigProvider>\n    </>\n  );\n}\n\nexport default App;"}),(0,d.jsxs)("h3",{id:"\u5C40\u90E8\u4E3B\u9898\u5D4C\u5957\u4E3B\u9898",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5C40\u90E8\u4E3B\u9898\u5D4C\u5957\u4E3B\u9898",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u5C40\u90E8\u4E3B\u9898\uFF08\u5D4C\u5957\u4E3B\u9898\uFF09"]}),(0,d.jsxs)("p",{children:[e[69].value,(0,d.jsx)("code",{children:e[70].value}),e[71].value]}),(0,d.jsx)(t.default,{children:"import React from 'react';\nimport { Button, ConfigProvider, Space } from 'antd';\n\nconst App: React.FC = () => (\n  <ConfigProvider\n    theme={{\n      token: {\n        colorPrimary: '#1677ff',\n      },\n    }}\n  >\n    <Space>\n      <Button type=\"primary\">Theme 1</Button>\n      <ConfigProvider\n        theme={{\n          token: {\n            colorPrimary: '#00b96b',\n          },\n        }}\n      >\n        <Button type=\"primary\">Theme 2</Button>\n      </ConfigProvider>\n    </Space>\n  </ConfigProvider>\n);\n\nexport default App;"}),(0,d.jsxs)("h3",{id:"\u4F7F\u7528-design-token",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-design-token",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 Design Token"]}),(0,d.jsxs)("p",{children:[e[73].value,(0,d.jsx)("code",{children:e[74].value}),e[75].value]}),(0,d.jsx)(t.default,{children:"import React from 'react';\nimport { Button, theme } from 'antd';\n\nconst { useToken } = theme;\n\nconst App: React.FC = () => {\n  const { token } = useToken();\n\n  return (\n    <div\n      style={{\n        backgroundColor: token.colorPrimaryBg,\n        padding: token.padding,\n        borderRadius: token.borderRadius,\n        color: token.colorPrimaryText,\n        fontSize: token.fontSize,\n      }}\n    >\n      \u4F7F\u7528 Design Token\n    </div>\n  );\n};\n\nexport default App;"}),(0,d.jsxs)("h3",{id:"\u9759\u6001\u6D88\u8D39\u5982-less",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u6D88\u8D39\u5982-less",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u9759\u6001\u6D88\u8D39\uFF08\u5982 less\uFF09"]}),(0,d.jsxs)("p",{children:[e[77].value,(0,d.jsx)("code",{children:e[78].value}),e[79].value]}),(0,d.jsx)(i.default,{lang:"jsx",children:e[80].value}),(0,d.jsxs)("p",{children:[(0,d.jsx)("code",{children:e[81].value}),e[82].value,(0,d.jsx)("code",{children:e[83].value}),e[84].value]}),(0,d.jsx)(i.default,{lang:"tsx",children:e[85].value}),(0,d.jsx)("p",{children:e[86].value}),(0,d.jsx)(i.default,{lang:"jsx",children:e[87].value}),(0,d.jsxs)("p",{children:[e[88].value,(0,d.jsx)(c.default,{to:"/docs/react/migration-v5",sourceType:"Link",children:e[89].value}),e[90].value]}),(0,d.jsxs)("h3",{id:"\u8C03\u8BD5\u4E3B\u9898",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8C03\u8BD5\u4E3B\u9898",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u8C03\u8BD5\u4E3B\u9898"]}),(0,d.jsxs)("p",{children:[e[91].value,(0,d.jsx)(c.default,{to:"/theme-editor-cn",sourceType:"Link",children:e[92].value})]}),(0,d.jsx)("p",{children:e[93].value}),(0,d.jsxs)("h2",{id:"\u57FA\u672C\u6982\u5FF5",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u6982\u5FF5",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u6982\u5FF5"]}),(0,d.jsx)("p",{children:e[94].value}),(0,d.jsxs)("h3",{id:"\u6F14\u53D8\u8FC7\u7A0B",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u6F14\u53D8\u8FC7\u7A0B",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u6F14\u53D8\u8FC7\u7A0B"]}),(0,d.jsx)("p",{children:(0,d.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*uF3kTrY4InUAAAAAAAAAAAAAARQnAQ",alt:"token"})}),(0,d.jsxs)("h3",{id:"\u57FA\u7840\u53D8\u91CFseed-token",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u53D8\u91CFseed-token",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u53D8\u91CF\uFF08Seed Token\uFF09"]}),(0,d.jsxs)("p",{children:[e[95].value,(0,d.jsx)("code",{children:e[96].value}),e[97].value]}),(0,d.jsx)(i.default,{lang:"tsx",children:e[98].value}),(0,d.jsxs)("h3",{id:"\u68AF\u5EA6\u53D8\u91CFmap-token",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u68AF\u5EA6\u53D8\u91CFmap-token",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u68AF\u5EA6\u53D8\u91CF\uFF08Map Token\uFF09"]}),(0,d.jsxs)("p",{children:[e[99].value,(0,d.jsx)("code",{children:e[100].value}),e[101].value,(0,d.jsx)("code",{children:e[102].value}),e[103].value]}),(0,d.jsx)(i.default,{lang:"tsx",children:e[104].value}),(0,d.jsxs)("h3",{id:"\u522B\u540D\u53D8\u91CFalias-token",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u522B\u540D\u53D8\u91CFalias-token",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u522B\u540D\u53D8\u91CF\uFF08Alias Token\uFF09"]}),(0,d.jsx)("p",{children:e[105].value}),(0,d.jsx)(i.default,{lang:"tsx",children:e[106].value}),(0,d.jsxs)("h3",{id:"\u57FA\u672C\u7B97\u6CD5algorithm",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u7B97\u6CD5algorithm",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7B97\u6CD5\uFF08algorithm)"]}),(0,d.jsx)("p",{children:e[107].value}),(0,d.jsx)(i.default,{lang:"tsx",children:e[108].value}),(0,d.jsxs)("h2",{id:"api",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,d.jsxs)("h3",{id:"theme",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#theme",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"Theme"]}),(0,d.jsxs)(s.default,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:e[109].value}),(0,d.jsx)("th",{children:e[110].value}),(0,d.jsx)("th",{children:e[111].value}),(0,d.jsx)("th",{children:e[112].value})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e[113].value}),(0,d.jsx)("td",{children:e[114].value}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:e[115].value})}),(0,d.jsx)("td",{children:e[116].value})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e[117].value}),(0,d.jsx)("td",{children:e[118].value}),(0,d.jsx)("td",{children:e[119].value}),(0,d.jsx)("td",{children:e[120].value})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e[121].value}),(0,d.jsx)("td",{children:e[122].value}),(0,d.jsxs)("td",{children:[(0,d.jsx)("code",{children:e[123].value}),e[124].value,(0,d.jsx)("code",{children:e[125].value})]}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:e[126].value})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e[127].value}),(0,d.jsx)("td",{children:e[128].value}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:e[129].value})}),(0,d.jsx)("td",{children:e[130].value})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e[131].value}),(0,d.jsxs)("td",{children:[e[132].value,(0,d.jsx)(c.default,{to:"/docs/react/css-variables-cn#api",sourceType:"Link",children:e[133].value})]}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:e[134].value})}),(0,d.jsx)("td",{children:e[135].value})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e[136].value}),(0,d.jsxs)("td",{children:[e[137].value,(0,d.jsx)(c.default,{to:"/docs/react/css-variables-cn#%E5%85%B3%E9%97%AD-hash",sourceType:"Link",children:e[138].value})]}),(0,d.jsx)("td",{children:e[139].value}),(0,d.jsx)("td",{children:e[140].value})]})]})]}),(0,d.jsxs)("h3",{id:"componentsconfig",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#componentsconfig",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"ComponentsConfig"]}),(0,d.jsxs)(s.default,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:e[141].value}),(0,d.jsx)("th",{children:e[142].value}),(0,d.jsx)("th",{children:e[143].value}),(0,d.jsx)("th",{children:e[144].value})]})}),(0,d.jsx)("tbody",{children:(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{children:[(0,d.jsx)("code",{children:e[145].value}),e[146].value,(0,d.jsx)("code",{children:e[147].value}),e[148].value]}),(0,d.jsx)("td",{children:e[149].value}),(0,d.jsxs)("td",{children:[(0,d.jsx)("code",{children:e[150].value}),e[151].value,(0,d.jsx)("code",{children:e[152].value})]}),(0,d.jsx)("td",{children:e[153].value})]})})]}),(0,d.jsx)("blockquote",{children:(0,d.jsxs)("p",{children:[e[154].value,(0,d.jsx)("code",{children:e[155].value}),e[156].value,(0,d.jsx)("code",{children:e[157].value}),e[158].value,(0,d.jsx)("code",{children:e[159].value}),e[160].value,(0,d.jsx)("code",{children:e[161].value}),e[162].value]})}),(0,d.jsxs)("h3",{id:"seedtoken",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#seedtoken",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"SeedToken"]})]}),(0,d.jsx)(o.default,{type:"seed"}),(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsxs)("h3",{id:"maptoken",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#maptoken",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"MapToken"]}),(0,d.jsx)("blockquote",{children:(0,d.jsx)("p",{children:e[163].value})})]}),(0,d.jsx)(o.default,{type:"map"}),(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsxs)("h3",{id:"aliastoken",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#aliastoken",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"AliasToken"]}),(0,d.jsx)("blockquote",{children:(0,d.jsx)("p",{children:e[164].value})})]}),(0,d.jsx)(o.default,{type:"alias"}),(0,d.jsxs)("div",{className:"markdown",children:[(0,d.jsxs)("h2",{id:"faq",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,d.jsxs)("h3",{id:"\u4E3A\u4EC0\u4E48-theme-\u4ECE-undefined-\u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A-undefined-\u65F6\u7EC4\u4EF6\u91CD\u65B0-mount-\u4E86",children:[(0,d.jsx)(c.default,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-theme-\u4ECE-undefined-\u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A-undefined-\u65F6\u7EC4\u4EF6\u91CD\u65B0-mount-\u4E86",sourceType:"a",children:(0,d.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48 ",(0,d.jsx)("code",{children:e[165].value})," \u4ECE ",(0,d.jsx)("code",{children:e[166].value})," \u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A ",(0,d.jsx)("code",{children:e[167].value})," \u65F6\u7EC4\u4EF6\u91CD\u65B0 mount \u4E86\uFF1F"]}),(0,d.jsxs)("p",{children:[e[168].value,(0,d.jsx)("code",{children:e[169].value}),e[170].value,(0,d.jsx)("code",{children:e[171].value}),e[172].value,(0,d.jsx)("code",{children:e[173].value}),e[174].value,(0,d.jsx)("code",{children:e[175].value}),e[176].value,(0,d.jsx)("code",{children:e[177].value}),e[178].value]})]})]});}var p=function(){return(0,d.jsx)(x.DumiPage,{children:(0,d.jsx)(h.Suspense,{fallback:(0,d.jsx)(u.default,{}),children:(0,d.jsx)(j,{})})});};}}]);