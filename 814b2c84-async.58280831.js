(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["814b2c84"],{"814b2c84":function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"default",{enumerable:!0,get:function(){return r;}});var t=n("f19d2b93");n("86251019");var s=n("5b220c3d"),i=n("e22febe0"),l=n("a9d1a279");let o=e=>new Promise((a,n)=>{let t=new FileReader;t.readAsDataURL(e),t.onload=()=>a(t.result),t.onerror=e=>n(e);});var r=()=>{let[e,a]=(0,s.useState)(!1),[n,r]=(0,s.useState)(""),[u,p]=(0,s.useState)([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]),d=async e=>{e.url||e.preview||(e.preview=await o(e.originFileObj)),r(e.url||e.preview),a(!0);},g=(0,t.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,t.jsx)(i.PlusOutlined,{}),(0,t.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Upload,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-card",fileList:u,onPreview:d,onChange:({fileList:e})=>p(e),children:u.length>=8?null:g}),n&&(0,t.jsx)(l.Image,{wrapperStyle:{display:"none"},preview:{visible:e,onVisibleChange:e=>a(e),afterOpenChange:e=>!e&&r("")},src:n})]});};}}]);