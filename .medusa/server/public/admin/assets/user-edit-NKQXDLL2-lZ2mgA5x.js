import{a6 as f,a8 as c,b as u,S as h,eq as p,j as s,H as y,ad as b,ae as g,ef as v,x as e,y as m,B as x}from"./index-DwAumO4s.js";import{K as F}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{b as n,u as _}from"./chunk-MDIOSTKB-6EE6lyQn.js";import"./prompt-CYx1Z627.js";var E=f({first_name:c().optional(),last_name:c().optional()}),S=({user:t})=>{const{t:r}=u(),{handleSuccess:i}=_(),a=b({defaultValues:{first_name:t.first_name||"",last_name:t.last_name||""},resolver:g(E)}),{mutateAsync:l,isPending:d}=v(t.id),j=a.handleSubmit(async o=>{await l(o,{onSuccess:()=>{i()}})});return s.jsx(n.Form,{form:a,children:s.jsxs(F,{onSubmit:j,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(n.Body,{className:"flex max-w-full flex-1 flex-col gap-y-8 overflow-y-auto",children:[s.jsx(e.Field,{control:a.control,name:"first_name",render:({field:o})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.firstName")}),s.jsx(e.Control,{children:s.jsx(m,{...o})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:a.control,name:"last_name",render:({field:o})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("fields.lastName")}),s.jsx(e.Control,{children:s.jsx(m,{...o})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(x,{size:"small",variant:"secondary",children:r("actions.cancel")})}),s.jsx(x,{size:"small",type:"submit",isLoading:d,children:r("actions.save")})]})})]})})},L=()=>{const{t}=u(),{id:r}=h(),{user:i,isPending:a,isError:l,error:d}=p(r);if(l)throw d;return s.jsxs(n,{children:[s.jsx(n.Header,{children:s.jsx(y,{children:t("users.editUser")})}),!a&&i&&s.jsx(S,{user:i})]})};export{L as Component};
