(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["eebd1533"],{eebd1533:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return u;}});var a=t("852bbaa9"),l=t("f19d2b93"),r=a._(t("5b220c3d"));t("78f20a15");var o=t("915a4463"),d=t("9944ffaa"),i=t("7f663da5"),s=t("a9d1a279");let b=({className:e,...n})=>{let{attributes:t,listeners:a,setNodeRef:l,transform:o,transition:s}=(0,d.useSortable)({id:n["data-node-key"]}),b={...n.style,transform:i.CSS.Translate.toString(o),transition:s,cursor:"move"};return r.default.cloneElement(n.children,{ref:l,style:b,...t,...a});};var u=()=>{let[e,n]=(0,r.useState)([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),t=(0,o.useSensor)(o.PointerSensor,{activationConstraint:{distance:10}}),a=({active:e,over:t})=>{e.id!==(null==t?void 0:t.id)&&n(n=>{let a=n.findIndex(n=>n.key===e.id),l=n.findIndex(e=>e.key===(null==t?void 0:t.id));return(0,d.arrayMove)(n,a,l);});};return(0,l.jsx)(s.Tabs,{items:e,renderTabBar:(n,i)=>(0,l.jsx)(o.DndContext,{sensors:[t],onDragEnd:a,collisionDetection:o.closestCenter,children:(0,l.jsx)(d.SortableContext,{items:e.map(e=>e.key),strategy:d.horizontalListSortingStrategy,children:(0,l.jsx)(i,{...n,children:e=>(0,r.createElement)(b,{...e.props,key:e.key},e)})})})});};}}]);