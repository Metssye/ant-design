(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a4393fb3"],{a4393fb3:function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"default",{enumerable:!0,get:function(){return o;}});var t=n("f19d2b93");n("1705d06c");var i=n("5b220c3d"),l=n("e22febe0"),s=n("a9d1a279");let r=e=>new Promise((a,n)=>{let t=new FileReader;t.readAsDataURL(e),t.onload=()=>a(t.result),t.onerror=e=>n(e);});var o=()=>{let[e,a]=(0,i.useState)(!1),[n,o]=(0,i.useState)(""),[u,d]=(0,i.useState)([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]),p=async e=>{e.url||e.preview||(e.preview=await r(e.originFileObj)),o(e.url||e.preview),a(!0);},g=(0,t.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,t.jsx)(l.PlusOutlined,{}),(0,t.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-circle",fileList:u,onPreview:p,onChange:({fileList:e})=>d(e),children:u.length>=8?null:g}),n&&(0,t.jsx)(s.Image,{wrapperStyle:{display:"none"},preview:{visible:e,onVisibleChange:e=>a(e),afterOpenChange:e=>!e&&o("")},src:n})]});};}}]);