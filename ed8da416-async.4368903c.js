(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ed8da416"],{ed8da416:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("f23c9668");var a=l("5b220c3d"),d=l("a9d1a279");let i=[,,].fill(null).map((e,t)=>{let l=String(t+1);return{label:`Tab ${l}`,children:`Content of Tab Pane ${t+1}`,key:l};});var r=()=>{let[e,t]=(0,a.useState)(i[0].key),[l,r]=(0,a.useState)(i),s=(0,a.useRef)(0),u=()=>{let e=`newTab${s.current++}`;r([...l,{label:"New Tab",children:"New Tab Pane",key:e}]),t(e);},o=n=>{let a=l.findIndex(e=>e.key===n),d=l.filter(e=>e.key!==n);if(d.length&&n===e){let{key:e}=d[a===d.length?a-1:a];t(e);}r(d);};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{marginBottom:16},children:(0,n.jsx)(d.Button,{onClick:u,children:"ADD"})}),(0,n.jsx)(d.Tabs,{hideAdd:!0,onChange:e=>{t(e);},activeKey:e,type:"editable-card",onEdit:(e,t)=>{"add"===t?u():o(e);},items:l})]});};}}]);