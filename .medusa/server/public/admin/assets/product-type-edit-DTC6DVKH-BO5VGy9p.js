import{aa as m,S as j,b as h,eT as y,j as e,H as v,ad as f,ae as T,eV as b,t as x,x as o,y as g,B as p}from"./index-DwAumO4s.js";import{K as P}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{b as r,u as E}from"./chunk-MDIOSTKB-6EE6lyQn.js";import"./prompt-CYx1Z627.js";var F=m.object({value:m.string().min(1)}),S=({productType:t})=>{const{t:s}=h(),{handleSuccess:n}=E(),a=f({defaultValues:{value:t.value},resolver:T(F)}),{mutateAsync:l,isPending:c}=b(t.id),d=a.handleSubmit(async i=>{await l({value:i.value},{onSuccess:({product_type:u})=>{x.success(s("productTypes.edit.successToast",{value:u.value})),n()},onError:u=>{x.error(u.message)}})});return e.jsx(r.Form,{form:a,children:e.jsxs(P,{onSubmit:d,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(r.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsx(o.Field,{control:a.control,name:"value",render:({field:i})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:s("productTypes.fields.value")}),e.jsx(o.Control,{children:e.jsx(g,{...i})}),e.jsx(o.ErrorMessage,{})]})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:c,children:s("actions.save")})]})})]})})},H=()=>{const{id:t}=j(),{t:s}=h(),{product_type:n,isPending:a,isError:l,error:c}=y(t),d=!a&&!!n;if(l)throw c;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(v,{children:s("productTypes.edit.header")})}),d&&e.jsx(S,{productType:n})]})};export{H as Component};
