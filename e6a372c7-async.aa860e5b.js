(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e6a372c7"],{e6a372c7:function(e,n,o){"use strict";o.d(n,"__esModule",{value:!0}),o.d(n,"default",{enumerable:!0,get:function(){return c;}});var l=o("777fffbe"),t=o("f19d2b93");o("36a4159e");var i=l._(o("5b220c3d")),d=o("e22febe0"),s=o("a9d1a279");let u=e=>{s.message.info("Click on left button."),console.log("click left button",e);},r=[{label:"1st menu item",key:"1",icon:(0,t.jsx)(d.UserOutlined,{})},{label:"2nd menu item",key:"2",icon:(0,t.jsx)(d.UserOutlined,{})},{label:"3rd menu item",key:"3",icon:(0,t.jsx)(d.UserOutlined,{}),danger:!0},{label:"4rd menu item",key:"4",icon:(0,t.jsx)(d.UserOutlined,{}),danger:!0,disabled:!0}],a={items:r,onClick:e=>{s.message.info("Click on menu item."),console.log("click",e);}};var c=()=>(0,t.jsxs)(s.Space,{wrap:!0,children:[(0,t.jsx)(s.Dropdown.Button,{menu:a,onClick:u,children:"Dropdown"}),(0,t.jsx)(s.Dropdown.Button,{menu:a,placement:"bottom",icon:(0,t.jsx)(d.UserOutlined,{}),children:"Dropdown"}),(0,t.jsx)(s.Dropdown.Button,{menu:a,onClick:u,disabled:!0,children:"Dropdown"}),(0,t.jsx)(s.Dropdown.Button,{menu:a,buttonsRender:([e,n])=>[(0,t.jsx)(s.Tooltip,{title:"tooltip",children:e},"leftButton"),i.default.cloneElement(n,{loading:!0})],children:"With Tooltip"}),(0,t.jsx)(s.Dropdown,{menu:a,children:(0,t.jsx)(s.Button,{children:(0,t.jsxs)(s.Space,{children:["Button",(0,t.jsx)(d.DownOutlined,{})]})})}),(0,t.jsx)(s.Dropdown.Button,{menu:a,onClick:u,danger:!0,children:"Danger"})]});}}]);