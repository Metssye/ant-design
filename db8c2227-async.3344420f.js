(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["db8c2227"],{db8c2227:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return s;}});var n=o("777fffbe"),a=o("f19d2b93");o("8f75fd04");var d=n._(o("5b220c3d")),l=o("a9d1a279");function i(e,t){let o=document.createElement("a");o.download=t,o.href=e,document.body.appendChild(o),o.click(),document.body.removeChild(o);}let c=()=>{var e;let t=null===(e=document.getElementById("myqrcode"))||void 0===e?void 0:e.querySelector("canvas");if(t){let e=t.toDataURL();i(e,"QRCode.png");}},r=()=>{var e;let t=null===(e=document.getElementById("myqrcode"))||void 0===e?void 0:e.querySelector("svg"),o=new XMLSerializer().serializeToString(t),n=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(n);i(a,"QRCode.svg");};var s=()=>{let[e,t]=d.default.useState("canvas");return(0,a.jsxs)(l.Space,{id:"myqrcode",direction:"vertical",children:[(0,a.jsx)(l.Segmented,{options:["canvas","svg"],onChange:e=>t(e)}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.QRCode,{type:e,value:"https://ant.design/",bgColor:"#fff",style:{marginBottom:16},icon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),(0,a.jsx)(l.Button,{type:"primary",onClick:"canvas"===e?c:r,children:"Download"})]})]});};}}]);