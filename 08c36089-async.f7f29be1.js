(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["08c36089"],{"08c36089":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return n;}});var l=t("f19d2b93");t("239e5624");var d=t("5b220c3d"),s=t("e22febe0"),i=t("a9d1a279");let r=(e,a)=>{let t=new FileReader;t.addEventListener("load",()=>a(t.result)),t.readAsDataURL(e);},o=e=>{let a="image/jpeg"===e.type||"image/png"===e.type;a||i.message.error("You can only upload JPG/PNG file!");let t=e.size/1024/1024<2;return t||i.message.error("Image must smaller than 2MB!"),a&&t;};var n=()=>{let[e,a]=(0,d.useState)(!1),[t,n]=(0,d.useState)(),u=e=>{if("uploading"===e.file.status){a(!0);return;}"done"===e.file.status&&r(e.file.originFileObj,e=>{a(!1),n(e);});},p=(0,l.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[e?(0,l.jsx)(s.LoadingOutlined,{}):(0,l.jsx)(s.PlusOutlined,{}),(0,l.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,l.jsxs)(i.Flex,{gap:"middle",wrap:!0,children:[(0,l.jsx)(i.Upload,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",beforeUpload:o,onChange:u,children:t?(0,l.jsx)("img",{src:t,alt:"avatar",style:{width:"100%"}}):p}),(0,l.jsx)(i.Upload,{name:"avatar",listType:"picture-circle",className:"avatar-uploader",showUploadList:!1,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",beforeUpload:o,onChange:u,children:t?(0,l.jsx)("img",{src:t,alt:"avatar",style:{width:"100%"}}):p})]});};}}]);