import{a6 as f,a8 as t,b as u,S as _,dX as y,j as e,H as b,ad as C,ae as g,d$ as E,t as j,x as s,cK as F,y as i,B as h}from"./index-DwAumO4s.js";import{K as v}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{b as l,u as L}from"./chunk-MDIOSTKB-6EE6lyQn.js";import"./prompt-CYx1Z627.js";var S=f({email:t().email(),first_name:t().optional(),last_name:t().optional(),company_name:t().optional(),phone:t().optional()}),T=({customer:r})=>{const{t:a}=u(),{handleSuccess:c}=L(),o=C({defaultValues:{email:r.email||"",first_name:r.first_name||"",last_name:r.last_name||"",company_name:r.company_name||"",phone:r.phone||""},resolver:g(S)}),{mutateAsync:m,isPending:d}=E(r.id),p=o.handleSubmit(async n=>{await m({email:r.has_account?void 0:n.email,first_name:n.first_name||null,last_name:n.last_name||null,phone:n.phone||null,company_name:n.company_name||null},{onSuccess:({customer:x})=>{j.success(a("customers.edit.successToast",{email:x.email})),c()},onError:x=>{j.error(x.message)}})});return e.jsx(l.Form,{form:o,children:e.jsxs(v,{onSubmit:p,className:"flex flex-1 flex-col",children:[e.jsx(l.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:o.control,name:"email",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.email")}),e.jsx(s.Control,{children:e.jsx(F,{showTooltip:r.has_account,content:a("customers.edit.emailDisabledTooltip"),children:e.jsx(i,{...n,disabled:r.has_account})})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"first_name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.firstName")}),e.jsx(s.Control,{children:e.jsx(i,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"last_name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.lastName")}),e.jsx(s.Control,{children:e.jsx(i,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"company_name",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.company")}),e.jsx(s.Control,{children:e.jsx(i,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"phone",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:a("fields.phone")}),e.jsx(s.Control,{children:e.jsx(i,{...n})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(h,{variant:"secondary",size:"small",children:a("actions.cancel")})}),e.jsx(h,{isLoading:d,type:"submit",variant:"primary",size:"small",children:a("actions.save")})]})})]})})},B=()=>{const{t:r}=u(),{id:a}=_(),{customer:c,isLoading:o,isError:m,error:d}=y(a);if(m)throw d;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(b,{children:r("customers.edit.header")})}),!o&&c&&e.jsx(T,{customer:c})]})};export{B as Component};
