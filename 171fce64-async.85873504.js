(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["171fce64"],{"171fce64":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return d;}});var l=t("f19d2b93");t("2273351b");var o=t("e22febe0"),a=t("a9d1a279");let i=e=>{fetch(e).then(e=>e.blob()).then(e=>{let n=URL.createObjectURL(new Blob([e])),t=document.createElement("a");t.href=n,t.download="image.png",document.body.appendChild(t),t.click(),URL.revokeObjectURL(n),t.remove();});};var d=()=>(0,l.jsx)(a.Image,{width:200,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",preview:{toolbarRender:(e,{image:{url:n},transform:{scale:t},actions:{onFlipY:d,onFlipX:s,onRotateLeft:c,onRotateRight:u,onZoomOut:r,onZoomIn:b,onReset:f}})=>(0,l.jsxs)(a.Space,{size:12,className:"toolbar-wrapper",children:[(0,l.jsx)(o.DownloadOutlined,{onClick:()=>i(n)}),(0,l.jsx)(o.SwapOutlined,{rotate:90,onClick:d}),(0,l.jsx)(o.SwapOutlined,{onClick:s}),(0,l.jsx)(o.RotateLeftOutlined,{onClick:c}),(0,l.jsx)(o.RotateRightOutlined,{onClick:u}),(0,l.jsx)(o.ZoomOutOutlined,{disabled:1===t,onClick:r}),(0,l.jsx)(o.ZoomInOutlined,{disabled:50===t,onClick:b}),(0,l.jsx)(o.UndoOutlined,{onClick:f})]})}});}}]);