(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["6d772aa3"],{"6d772aa3":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return y;}});var i=n("f19d2b93");n("9db5f1e3");var t=n("5b220c3d"),a=n("e22febe0"),o=n("a9d1a279");let d=[{key:"1",icon:(0,i.jsx)(a.MailOutlined,{}),label:"Navigation One",children:[{key:"11",label:"Option 1"},{key:"12",label:"Option 2"},{key:"13",label:"Option 3"},{key:"14",label:"Option 4"}]},{key:"2",icon:(0,i.jsx)(a.AppstoreOutlined,{}),label:"Navigation Two",children:[{key:"21",label:"Option 1"},{key:"22",label:"Option 2"},{key:"23",label:"Submenu",children:[{key:"231",label:"Option 1"},{key:"232",label:"Option 2"},{key:"233",label:"Option 3"}]},{key:"24",label:"Submenu 2",children:[{key:"241",label:"Option 1"},{key:"242",label:"Option 2"},{key:"243",label:"Option 3"}]}]},{key:"3",icon:(0,i.jsx)(a.SettingOutlined,{}),label:"Navigation Three",children:[{key:"31",label:"Option 1"},{key:"32",label:"Option 2"},{key:"33",label:"Option 3"},{key:"34",label:"Option 4"}]}],b=(e=>{let l={},n=(e,i=1)=>{e.forEach(e=>{e.key&&(l[e.key]=i),e.children&&n(e.children,i+1);});};return n(e),l;})(d);var y=()=>{let[e,l]=(0,t.useState)(["2","23"]);return(0,i.jsx)(o.Menu,{mode:"inline",defaultSelectedKeys:["231"],openKeys:e,onOpenChange:n=>{let i=n.find(l=>-1===e.indexOf(l));if(void 0!==i){let e=n.filter(e=>e!==i).findIndex(e=>b[e]===b[i]);l(n.filter((l,n)=>n!==e).filter(e=>b[e]<=b[i]));}else l(n);},style:{width:256},items:d});};}}]);