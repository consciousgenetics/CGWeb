import{u as O,a as H,b as L}from"./chunk-QIWEFQ5Y-BEMtN2YG.js";import{b as M,r as l,dP as N,k as _,j as o,B as k}from"./index-DwAumO4s.js";import{u as q,D as Q}from"./chunk-XVFA73MY-2wn5oaa0.js";import{S as X,c as Z}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{C as y}from"./checkbox-DOq5axzy.js";import{c as J}from"./index-DTjMCBLZ.js";var u=50,m="cg",j=t=>t.reduce((e,r)=>(e[r.id]=!0,e),{}),se=({state:t,setState:e,type:r})=>{const{t:a}=M(),[c,p]=l.useState(j(t)),[f,h]=l.useState(t);l.useEffect(()=>{p(j(t)),h(t)},[t]);const{searchParams:w,raw:P}=O({pageSize:u,prefix:m}),{customer_groups:i,count:S,isLoading:v,isError:I,error:R}=N({...w,fields:"id,name,customers.id"},{placeholderData:_}),E=n=>{const g=typeof n=="function"?n(c):n,x=Object.keys(c),b=Object.keys(g),T=b.filter(s=>!x.includes(s)),A=x.filter(s=>!b.includes(s)),F=(i==null?void 0:i.filter(s=>T.includes(s.id)).map(s=>({id:s.id,name:s.name})))||[],B=f.filter(s=>!A.includes(s.id));h([...B,...F]),p(g)},G=()=>{e(f)},z=H(),C=U(),{table:D}=q({data:i||[],columns:C,count:S,enablePagination:!0,enableRowSelection:!0,getRowId:n=>n.id,rowSelection:{state:c,updater:E},pageSize:u,prefix:m}),d=r==="focus"?X:Z;if(I)throw R;return o.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[o.jsx(d.Body,{className:"min-h-0 p-0",children:o.jsx(Q,{table:D,columns:C,pageSize:u,count:S,isLoading:v,filters:z,orderBy:[{key:"name",label:a("fields.name")},{key:"created_at",label:a("fields.createdAt")},{key:"updated_at",label:a("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:m,queryObject:P})}),o.jsxs(d.Footer,{children:[o.jsx(d.Close,{asChild:!0,children:o.jsx(k,{variant:"secondary",size:"small",type:"button",children:a("actions.cancel")})}),o.jsx(k,{type:"button",size:"small",onClick:G,children:a("actions.save")})]})]})},K=J(),U=()=>{const t=L();return l.useMemo(()=>[K.display({id:"select",header:({table:e})=>o.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>o.jsx(y,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...t],[t])};export{se as P};
