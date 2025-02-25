import{t as T}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{S as I}from"./chunk-PBUST3XI-BMCXMGpL.js";import{K as L}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{b as n,u as N}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{a6 as P,a7 as w,a8 as i,a9 as D,S as M,b,U as z,j as e,H as B,a as H,n as R,Y as U,x as s,y as x,T as V,F as A,B as f,a1 as K}from"./index-DwAumO4s.js";import{S as d}from"./select-WzGNAZlw.js";import{T as _}from"./textarea-qR5wjs38.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-CYx1Z627.js";import"./triangles-mini-BKt9ZCCg.js";var O=P({status:w(["draft","published","proposed","rejected"]),title:i().min(1),subtitle:i().optional(),handle:i().min(1),material:i().optional(),description:i().optional(),discountable:D()}),Y=({product:l})=>{const{t}=b(),{handleSuccess:c}=N(),{getFormFields:m,getFormConfigs:u}=H(),j=m("product","edit"),g=u("product","edit"),a=R({defaultValues:{status:l.status,title:l.title,material:l.material||"",subtitle:l.subtitle||"",handle:l.handle||"",description:l.description||"",discountable:l.discountable},schema:O,configs:g,data:l}),{mutateAsync:F,isPending:y}=U(l.id),E=a.handleSubmit(async r=>{const{title:h,discountable:p,handle:o,status:v,...C}=r,S=T(C);await F({title:h,discountable:p,handle:o,status:v,...S},{onSuccess:()=>{c()}})});return e.jsx(n.Form,{form:a,children:e.jsxs(L,{onSubmit:E,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(n.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:a.control,name:"status",render:({field:{onChange:r,ref:h,...p}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.status")}),e.jsx(s.Control,{children:e.jsxs(d,{...p,onValueChange:r,children:[e.jsx(d.Trigger,{ref:h,children:e.jsx(d.Value,{})}),e.jsx(d.Content,{children:["draft","published","proposed","rejected"].map(o=>e.jsx(d.Item,{value:o,children:t(`products.productStatus.${o}`)},o))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"title",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.title")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"subtitle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.subtitle")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"handle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.handle")}),e.jsx(s.Control,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(V,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"/"})}),e.jsx(x,{...r,className:"pl-10"})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"material",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.material")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"description",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.description")}),e.jsx(s.Control,{children:e.jsx(_,{...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(I,{control:a.control,name:"discountable",label:t("fields.discountable"),description:t("products.discountableHint")}),e.jsx(A,{fields:j,form:a})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(f,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(f,{size:"small",type:"submit",isLoading:y,children:t("actions.save")})]})})]})})},se=()=>{const{id:l}=M(),{t}=b(),{product:c,isLoading:m,isError:u,error:j}=z(l,{fields:K});if(u)throw j;return e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(n.Title,{asChild:!0,children:e.jsx(B,{children:t("products.editProduct")})})}),!m&&c&&e.jsx(Y,{product:c})]})};export{se as Component};
