import{T as U}from"./chunk-VNYVDWWH-aQIGveY2.js";import{u as q}from"./chunk-U36KR32O-D-oOHaLF.js";import{u as Q,a as N,b as Y}from"./chunk-UUDR5EKI-Bko4zOP1.js";import{u as Z,a as J,b as K}from"./chunk-QIWEFQ5Y-BEMtN2YG.js";import{u as V}from"./chunk-Y35YD3YU-DdRjWITW.js";import{u as W}from"./chunk-VWNSX5WA-CFVsaC8d.js";import{u as $,a as ee}from"./chunk-5R4UGQUP-D6wZNH8W.js";import{u as te,a as se}from"./chunk-IRV425DP-OXqQvIsc.js";import{u as ae,a as re}from"./chunk-B5GTMFNM-jQSJ2LV5.js";import{aa as _,b as O,r as S,j as r,B as H,dP as oe,k as A,e as le,dE as ne,bb as ce,bc as ie,ab as de,T as ue,I as pe}from"./index-DwAumO4s.js";import{u as z,D as E}from"./chunk-XVFA73MY-2wn5oaa0.js";import{S as me,c as ge}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{X as fe}from"./x-mark-mini-BVLOBz1V.js";import{C as y}from"./checkbox-DOq5axzy.js";import{c as D}from"./index-DTjMCBLZ.js";function be(a){return a.reduce((e,s)=>(e[s.value]=!0,e),{})}var Je=({referenceType:a,type:e,setState:s,state:n})=>{const{t:c}=O(),f=e==="focus"?me:ge,[b,h]=S.useState(n),l=()=>{s(b)};return r.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[r.jsx(f.Body,{className:"min-h-0 p-0",children:r.jsx(Se,{referenceType:a,initialRowState:be(n),intermediate:b,setIntermediate:h})}),r.jsxs(f.Footer,{children:[r.jsx(f.Close,{asChild:!0,children:r.jsx(H,{variant:"secondary",size:"small",type:"button",children:c("actions.cancel")})}),r.jsx(H,{type:"button",size:"small",onClick:l,children:c("actions.save")})]})]})},Se=({referenceType:a,...e})=>{switch(a){case"customer_groups":return r.jsx(he,{...e});case"products":return r.jsx(Pe,{...e});case"product_collections":return r.jsx(ke,{...e});case"product_types":return r.jsx(Ie,{...e});case"product_tags":return r.jsx(_e,{...e});default:return null}},i=50,G="cg",he=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=O(),[c,f]=S.useState(a);F();const{searchParams:b,raw:h}=Z({pageSize:i,prefix:G}),{customer_groups:l,count:d,isLoading:C,isError:P,error:w}=oe(b,{placeholderData:A}),x=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),g=Object.keys(p),j=g.filter(t=>!m.includes(t)),I=m.filter(t=>!g.includes(t)),R=(l==null?void 0:l.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.name})))||[],v=e.filter(t=>!I.includes(t.value));s([...v,...R]),f(p)},k=J(),u=Ce(),{table:T}=z({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:G});if(P)throw w;return r.jsx(E,{table:T,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"name",label:n("fields.name")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:G,queryObject:h})},ye=D(),Ce=()=>{const a=K();return S.useMemo(()=>[ye.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},B="p",Pe=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=O(),[c,f]=S.useState(a);F();const{searchParams:b,raw:h}=ae({pageSize:i,prefix:B}),{products:l,count:d,isLoading:C,isError:P,error:w}=le(b,{placeholderData:A}),x=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),g=Object.keys(p),j=g.filter(t=>!m.includes(t)),I=m.filter(t=>!g.includes(t)),R=(l==null?void 0:l.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.title})))||[],v=e.filter(t=>!I.includes(t.value));s([...v,...R]),f(p)},k=re(),u=xe(),{table:T}=z({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:B});if(P)throw w;return r.jsx(E,{table:T,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"title",label:n("fields.title")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:B,queryObject:h})},we=D(),xe=()=>{const a=W();return S.useMemo(()=>[we.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},M="pc",ke=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=O(),[c,f]=S.useState(a);F();const{searchParams:b,raw:h}=$({pageSize:i,prefix:M}),{collections:l,count:d,isLoading:C,isError:P,error:w}=ne(b,{placeholderData:A}),x=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),g=Object.keys(p),j=g.filter(t=>!m.includes(t)),I=m.filter(t=>!g.includes(t)),R=(l==null?void 0:l.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.title})))||[],v=e.filter(t=>!I.includes(t.value));s([...v,...R]),f(p)},k=te(),u=je(),{table:T}=z({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:M});if(P)throw w;return r.jsx(E,{table:T,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"title",label:n("fields.title")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:M,queryObject:h})},Te=D(),je=()=>{const a=V();return S.useMemo(()=>[Te.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},L="pt",Ie=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=O(),[c,f]=S.useState(a);F();const{searchParams:b,raw:h}=Q({pageSize:i,prefix:L}),{product_types:l,count:d,isLoading:C,isError:P,error:w}=ce(b,{placeholderData:A}),x=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),g=Object.keys(p),j=g.filter(t=>!m.includes(t)),I=m.filter(t=>!g.includes(t)),R=(l==null?void 0:l.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.value})))||[],v=e.filter(t=>!I.includes(t.value));s([...v,...R]),f(p)},k=N(),u=ve(),{table:T}=z({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:L});if(P)throw w;return r.jsx(E,{table:T,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"value",label:n("fields.value")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:L,queryObject:h})},Re=D(),ve=()=>{const a=Y();return S.useMemo(()=>[Re.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},X="ptag",_e=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=O(),[c,f]=S.useState(a);F();const{searchParams:b,raw:h}=ee({pageSize:i,prefix:X}),{product_tags:l,count:d,isLoading:C,isError:P,error:w}=ie(b,{placeholderData:A}),x=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),g=Object.keys(p),j=g.filter(t=>!m.includes(t)),I=m.filter(t=>!g.includes(t)),R=(l==null?void 0:l.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.value})))||[],v=e.filter(t=>!I.includes(t.value));s([...v,...R]),f(p)},k=se(),u=Ae(),{table:T}=z({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:X});if(P)throw w;return r.jsx(E,{table:T,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"value",label:n("fields.value")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:X,queryObject:h})},Oe=D(),Ae=()=>{const a=q();return S.useMemo(()=>[Oe.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},F=()=>{const[a,e]=de();S.useEffect(()=>()=>{e({})},[])},Ke=({index:a,label:e,onRemove:s})=>r.jsxs("div",{className:"bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5",children:[r.jsx(ue,{size:"small",leading:"compact",children:e}),r.jsx(pe,{size:"small",variant:"transparent",type:"button",onClick:()=>s(a),children:r.jsx(fe,{})})]}),ze=_.object({value:_.string(),label:_.string()});_.object({reference_type:_.nativeEnum(U),references:_.array(ze)});var Ve=a=>a.references.map(e=>({reference:a.reference_type,reference_id:e.value}));export{ze as T,Je as a,Ke as b,Ve as c};
