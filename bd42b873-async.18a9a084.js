(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["bd42b873"],{bd42b873:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}});var l=a("f19d2b93");a("da5b0a74");var s=a("5b220c3d"),r=a("a9d1a279");let{Paragraph:d}=r.Typography,i=({onChange:e,fields:n})=>(0,l.jsx)(r.Form,{name:"global_state",layout:"inline",fields:n,onFieldsChange:(n,a)=>{e(a);},children:(0,l.jsx)(r.Form.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Username is required!"}],children:(0,l.jsx)(r.Input,{})})});var t=()=>{let[e,n]=(0,s.useState)([{name:["username"],value:"Ant Design"}]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{fields:e,onChange:e=>{n(e);}}),(0,l.jsx)(d,{style:{maxWidth:440,marginTop:24},children:(0,l.jsx)("pre",{style:{border:"none"},children:JSON.stringify(e,null,2)})})]});};}}]);