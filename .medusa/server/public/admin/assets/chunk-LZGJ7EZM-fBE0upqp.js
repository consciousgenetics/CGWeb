import{C as x}from"./chunk-R5JRVDJW-YQDNMtqR.js";import{V as l}from"./chunk-F6ZOHZVB-CmG4keok.js";import{a6 as c,a8 as n,dt as o,aj as y,a7 as f,b as j,du as _,ad as b,ae as C,t as m,j as e,B as d}from"./index-DwAumO4s.js";import{K as v}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{u as F,R as a}from"./chunk-MDIOSTKB-6EE6lyQn.js";var T={name:"",description:"",campaign_identifier:"",starts_at:null,ends_at:null,budget:{type:"usage",currency_code:null,limit:null}},S=c({name:n().min(1),description:n().optional(),campaign_identifier:n().min(1),starts_at:o().nullable(),ends_at:o().nullable(),budget:c({limit:y().min(0).nullish(),type:f(["spend","usage"]),currency_code:n().nullish()})}),V=()=>{const{t:i}=j(),{handleSuccess:u}=F(),{mutateAsync:p,isPending:g}=_(),r=b({defaultValues:T,resolver:C(S)}),h=r.handleSubmit(async s=>{await p({name:s.name,description:s.description,campaign_identifier:s.campaign_identifier,starts_at:s.starts_at,ends_at:s.ends_at,budget:{type:s.budget.type,limit:s.budget.limit?s.budget.limit:void 0,currency_code:s.budget.currency_code}},{onSuccess:({campaign:t})=>{m.success(i("campaigns.create.successToast",{name:t.name})),u(`/campaigns/${t.id}`)},onError:t=>{m.error(t.message)}})});return e.jsx(a.Form,{form:r,children:e.jsxs(v,{onSubmit:h,className:"flex size-full flex-col overflow-hidden",children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{asChild:!0,children:e.jsx(l,{children:i("campaigns.create.title")})}),e.jsx(a.Description,{asChild:!0,children:e.jsx(l,{children:i("campaigns.create.description")})})]}),e.jsx(a.Body,{className:"flex size-full flex-col items-center overflow-auto py-16",children:e.jsx(x,{form:r})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(d,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(d,{size:"small",variant:"primary",type:"submit",isLoading:g,children:i("actions.create")})]})})]})})};export{S as C,T as D,V as a};
