(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["69b980bc"],{"69b980bc":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return i;}});var s=n("f19d2b93");n("b4310f30");var a=n("e22febe0"),t=n("a9d1a279"),i=()=>{let[e]=t.Form.useForm();return(0,s.jsxs)(t.Form,{labelCol:{span:6},wrapperCol:{span:18},form:e,name:"dynamic_form_complex",style:{maxWidth:600},autoComplete:"off",initialValues:{items:[{}]},children:[(0,s.jsx)(t.Form.List,{name:"items",children:(e,{add:l,remove:n})=>(0,s.jsxs)("div",{style:{display:"flex",rowGap:16,flexDirection:"column"},children:[e.map(e=>(0,s.jsxs)(t.Card,{size:"small",title:`Item ${e.name+1}`,extra:(0,s.jsx)(a.CloseOutlined,{onClick:()=>{n(e.name);}}),children:[(0,s.jsx)(t.Form.Item,{label:"Name",name:[e.name,"name"],children:(0,s.jsx)(t.Input,{})}),(0,s.jsx)(t.Form.Item,{label:"List",children:(0,s.jsx)(t.Form.List,{name:[e.name,"list"],children:(e,l)=>(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[e.map(e=>(0,s.jsxs)(t.Space,{children:[(0,s.jsx)(t.Form.Item,{noStyle:!0,name:[e.name,"first"],children:(0,s.jsx)(t.Input,{placeholder:"first"})}),(0,s.jsx)(t.Form.Item,{noStyle:!0,name:[e.name,"second"],children:(0,s.jsx)(t.Input,{placeholder:"second"})}),(0,s.jsx)(a.CloseOutlined,{onClick:()=>{l.remove(e.name);}})]},e.key)),(0,s.jsx)(t.Button,{type:"dashed",onClick:()=>l.add(),block:!0,children:"+ Add Sub Item"})]})})})]},e.key)),(0,s.jsx)(t.Button,{type:"dashed",onClick:()=>l(),block:!0,children:"+ Add Item"})]})}),(0,s.jsx)(t.Form.Item,{noStyle:!0,shouldUpdate:!0,children:()=>(0,s.jsx)(t.Typography,{children:(0,s.jsx)("pre",{children:JSON.stringify(e.getFieldsValue(),null,2)})})})]});};}}]);