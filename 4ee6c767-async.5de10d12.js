(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4ee6c767"],{"4ee6c767":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return c;}});var l=n("777fffbe"),u=n("f19d2b93");n("d35c52e0");var s=n("5b220c3d"),a=n("a9d1a279"),o=l._(n("57eb61c5"));function r({fetchOptions:e,debounceTimeout:t=800,...n}){let[l,r]=(0,s.useState)(!1),[i,c]=(0,s.useState)([]),f=(0,s.useRef)(0),d=(0,s.useMemo)(()=>(0,o.default)(t=>{f.current+=1;let n=f.current;c([]),r(!0),e(t).then(e=>{n===f.current&&(c(e),r(!1));});},t),[e,t]);return(0,u.jsx)(a.Select,{labelInValue:!0,filterOption:!1,onSearch:d,notFoundContent:l?(0,u.jsx)(a.Spin,{size:"small"}):null,...n,options:i});}async function i(e){return console.log("fetching user",e),fetch("https://randomuser.me/api/?results=5").then(e=>e.json()).then(e=>e.results.map(e=>({label:`${e.name.first} ${e.name.last}`,value:e.login.username})));}var c=()=>{let[e,t]=(0,s.useState)([]);return(0,u.jsx)(r,{mode:"multiple",value:e,placeholder:"Select users",fetchOptions:i,onChange:e=>{t(e);},style:{width:"100%"}});};}}]);