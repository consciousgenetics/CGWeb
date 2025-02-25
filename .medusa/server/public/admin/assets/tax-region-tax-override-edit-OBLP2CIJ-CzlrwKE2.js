import{T as S,c as k,a as le,b as ne}from"./chunk-4UP7SFVU-CsaVq2tS.js";import{aa as i,b as J,S as ce,j as e,H as U,ad as ie,ae as de,t as $,z as E,v as ue,x as c,y as K,E as pe,T as me,J as ge,B as P,m as xe,bK as he,D as fe,e as be,dE as _e,bc as je,bb as ye,dP as ve}from"./index-DwAumO4s.js";import{P as Re}from"./chunk-YRY2CZ6I-BiFKsUeZ.js";import{c as Te,d as Ce}from"./chunk-66JYR4ST-CDsmH8gp.js";import"./chunk-XVFA73MY-2wn5oaa0.js";import"./lodash-izaU7qdk.js";import"./chunk-5AU4DI7M-CpyI9ckD.js";import"./chunk-E3YGDIJC-B2axzREc.js";import{S as Ne}from"./chunk-PBUST3XI-BMCXMGpL.js";import{K as we}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{b as f,u as Se,a as ke,c as j}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{S as D}from"./select-WzGNAZlw.js";import"./chunk-VNYVDWWH-aQIGveY2.js";import"./chunk-U36KR32O-D-oOHaLF.js";import"./chunk-B4FQDBC3-DuLMR_QL.js";import"./chunk-P3UUX2T6-Bh1hfEeX.js";import"./format-CktQ0SPk.js";import"./chunk-OI7BBNYW-W2qG8b5b.js";import"./index-DTjMCBLZ.js";import"./chunk-UUDR5EKI-Bko4zOP1.js";import"./chunk-C76H5USB-Czk9z7F7.js";import"./chunk-W7625H47-D561eOWg.js";import"./chunk-QIWEFQ5Y-BEMtN2YG.js";import"./chunk-Y35YD3YU-DdRjWITW.js";import"./chunk-VWNSX5WA-CFVsaC8d.js";import"./chunk-FTXJRXMD-BVIleqGw.js";import"./chunk-ADOCJB6L-CCw2ikJN.js";import"./chunk-5R4UGQUP-D6wZNH8W.js";import"./chunk-IRV425DP-OXqQvIsc.js";import"./chunk-B5GTMFNM-jQSJ2LV5.js";import"./x-mark-mini-BVLOBz1V.js";import"./checkbox-DOq5axzy.js";import"./index.esm-B4vcOU-v.js";import"./chunk-YEDAFXMB-yC38kXsx.js";import"./chunk-AOFGTNG6-B60NYXgG.js";import"./chunk-WX2SMNCD-C6IClXei.js";import"./plus-mini-BEIseT0I.js";import"./command-bar-CoF7zpoQ.js";import"./index-DAdyAzjh.js";import"./chunk-QAF7PVQE-CPuqIPzv.js";import"./date-picker-v8FvKVYS.js";import"./popover-C1GpxxvS.js";import"./triangle-left-mini-DYy1FE26.js";import"./prompt-CYx1Z627.js";import"./triangles-mini-BKt9ZCCg.js";var Ee="tr",q=u=>`${Ee}-${u}`,Pe=i.object({name:i.string().min(1),code:i.string().min(1),rate:i.object({float:i.number().optional(),value:i.string().optional()}),is_combinable:i.boolean().optional(),enabled_rules:i.object({products:i.boolean(),product_collections:i.boolean(),product_tags:i.boolean(),product_types:i.boolean(),customer_groups:i.boolean()}),products:i.array(S).optional(),product_collections:i.array(S).optional(),product_tags:i.array(S).optional(),product_types:i.array(S).optional(),customer_groups:i.array(S).optional()}),De=({taxRate:u,isCombinable:R=!1,initialValues:l})=>{var V;const{t}=J(),{handleSuccess:x}=Se(),{setIsOpen:b}=ke(),a=ie({defaultValues:{name:u.name,code:u.code,rate:{value:((V=u.rate)==null?void 0:V.toString())||""},is_combinable:u.is_combinable,enabled_rules:{products:l.products.length>0,product_collections:l.product_collections.length>0,product_tags:l.product_tags.length>0,product_types:l.product_types.length>0,customer_groups:l.customer_groups.length>0},products:l.products,product_collections:l.product_collections,product_tags:l.product_tags,product_types:l.product_types,customer_groups:l.customer_groups},resolver:de(Pe)}),{mutateAsync:o,isPending:r}=Ce(u.id),g=a.handleSubmit(async s=>{var w;const{products:d,customer_groups:n,product_collections:h,product_tags:_,product_types:m}=s,T=k({reference_type:"products",references:d||[]}),C=k({reference_type:"customer_groups",references:n||[]}),p=k({reference_type:"product_collections",references:h||[]}),N=k({reference_type:"product_tags",references:_||[]}),A=k({reference_type:"product_types",references:m||[]}),L=[T,C,p,N,A].filter(y=>!!y).flatMap(y=>y);await o({name:s.name,code:s.code||null,rate:(w=s.rate)==null?void 0:w.float,is_combinable:s.is_combinable,rules:L},{onSuccess:()=>{$.success(t("taxRegions.taxRates.edit.successToast")),x()},onError:y=>{$.error(y.message)}})}),I=E({control:a.control,name:"products"}),W=E({control:a.control,name:"product_collections"}),Q=E({control:a.control,name:"product_tags"}),X=E({control:a.control,name:"product_types"}),Y=E({control:a.control,name:"customer_groups"}),z=s=>{switch(s){case"products":return I;case"product_collections":return W;case"product_tags":return Q;case"product_types":return X;case"customer_groups":return Y}},B=[{value:"products",label:t("taxRegions.fields.targets.options.product")},{value:"product_collections",label:t("taxRegions.fields.targets.options.productCollection")},{value:"product_tags",label:t("taxRegions.fields.targets.options.productTag")},{value:"product_types",label:t("taxRegions.fields.targets.options.productType")},{value:"customer_groups",label:t("taxRegions.fields.targets.options.customerGroup")}],Z={products:t("taxRegions.fields.targets.placeholders.product"),product_collections:t("taxRegions.fields.targets.placeholders.productCollection"),product_tags:t("taxRegions.fields.targets.placeholders.productTag"),product_types:t("taxRegions.fields.targets.placeholders.productType"),customer_groups:t("taxRegions.fields.targets.placeholders.customerGroup")},ee=s=>{const{fields:d,remove:n,append:h}=z(s),_=q(s);return m=>{if(!m.length){a.setValue(s,[],{shouldDirty:!0}),b(_,!1);return}const T=m.map(p=>p.value),C=m.filter(p=>!d.some(N=>N.value===p.value));for(const p of d)T.includes(p.value)||n(d.indexOf(p));h(C),b(_,!1)}},O=new Set(["products"]),H=s=>{a.setValue(s,[],{shouldDirty:!0}),a.setValue(`enabled_rules.${s}`,!1,{shouldDirty:!0}),O.delete(s)},G=s=>{a.setValue(`enabled_rules.${s}`,!0,{shouldDirty:!0}),a.setValue(s,[],{shouldDirty:!0}),O.add(s)},F=ue({control:a.control,name:"enabled_rules"}),se=()=>{const s=Object.keys(F).find(d=>!F[d]);s&&G(s)},M=B.filter(s=>F[s.value]).sort((s,d)=>{const n=Array.from(O);return n.indexOf(s.value)-n.indexOf(d.value)}),te=s=>B.filter(d=>!M.some(n=>n.value===d.value)||d.value===s),re=Object.values(F).some(s=>!s);return e.jsx(f.Form,{form:a,children:e.jsxs(we,{className:"flex flex-1 flex-col overflow-hidden",onSubmit:g,children:[e.jsxs(f.Body,{className:"flex flex-1 flex-col gap-y-6 overflow-auto",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(c.Field,{control:a.control,name:"name",render:({field:s})=>e.jsxs(c.Item,{children:[e.jsx(c.Label,{children:t("fields.name")}),e.jsx(c.Control,{children:e.jsx(K,{...s})}),e.jsx(c.ErrorMessage,{})]})}),e.jsx(c.Field,{control:a.control,name:"code",render:({field:s})=>e.jsxs(c.Item,{children:[e.jsx(c.Label,{children:t("taxRegions.fields.taxCode")}),e.jsx(c.Control,{children:e.jsx(K,{...s})}),e.jsx(c.ErrorMessage,{})]})}),e.jsx(c.Field,{control:a.control,name:"rate",render:({field:{value:s,onChange:d,...n}})=>e.jsxs(c.Item,{children:[e.jsx(c.Label,{children:t("taxRegions.fields.taxRate")}),e.jsx(c.Control,{children:e.jsx(Re,{...n,value:s==null?void 0:s.value,onValueChange:(h,_,m)=>d({value:h,float:m==null?void 0:m.float})})}),e.jsx(c.ErrorMessage,{})]})})]}),R&&e.jsx(Ne,{control:a.control,name:"is_combinable",label:t("taxRegions.fields.isCombinable.label"),description:t("taxRegions.fields.isCombinable.hint")}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-x-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(pe,{id:"tax_region_rules_label",htmlFor:"tax_region_rules",children:t("taxRegions.fields.targets.label")}),e.jsxs(me,{size:"small",leading:"compact",className:"text-ui-fg-muted",children:["(",t("fields.optional"),")"]})]}),e.jsx(ge,{id:"tax_region_rules_description",className:"text-pretty",children:t("taxRegions.fields.targets.hint")})]}),re&&e.jsx(P,{onClick:se,type:"button",size:"small",variant:"transparent",className:"text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex-shrink-0",children:t("taxRegions.fields.targets.action")})]}),e.jsx("div",{id:"tax_region_rules","aria-labelledby":"tax_region_rules_label","aria-describedby":"tax_region_rules_description",role:"application",className:"flex flex-col gap-y-3",children:M.map((s,d)=>{const n=s.value,h=s.label,_=d===M.length-1,m=Z[n],T=te(n),C=q(n),{fields:p,remove:N}=z(n),A=ee(n),L=w=>{H(n),G(w)};return e.jsx("div",{children:e.jsx(c.Field,{control:a.control,name:s.value,render:({field:{value:w,onChange:y,...oe}})=>e.jsxs(c.Item,{className:"space-y-0",children:[e.jsx(c.Label,{className:"sr-only",children:h}),e.jsxs("div",{className:xe("bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5","aria-[invalid='true']:shadow-borders-error"),role:"application",...oe,children:[e.jsxs("div",{className:"text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2",children:[_?e.jsxs(D,{value:n,onValueChange:L,children:[e.jsx(D.Trigger,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",children:e.jsx(D.Value,{})}),e.jsx(D.Content,{children:T.map(v=>e.jsx(D.Item,{value:v.value,children:v.label},v.value))})]}):e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:h}),e.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:t("taxRegions.fields.targets.operators.in")})]}),e.jsxs("div",{className:"flex items-center gap-1.5 px-1.5",children:[e.jsxs(j,{id:C,children:[e.jsx(j.Trigger,{asChild:!0,children:e.jsxs("button",{type:"button",className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover shadow-borders-base txt-compact-small text-ui-fg-muted transition-fg focus-visible:shadow-borders-interactive-with-active flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5 outline-none",children:[e.jsx(he,{}),m]})}),e.jsx(j.Trigger,{asChild:!0,children:e.jsx(P,{variant:"secondary",children:t("actions.browse")})}),e.jsxs(j.Content,{children:[e.jsxs(j.Header,{children:[e.jsx(j.Title,{asChild:!0,children:e.jsx(U,{children:t("taxRegions.fields.targets.modal.header")})}),e.jsx(j.Description,{className:"sr-only",children:t("taxRegions.fields.targets.hint")})]}),e.jsx(le,{type:"drawer",referenceType:n,state:p,setState:A})]})]}),e.jsx(P,{variant:"secondary",onClick:()=>H(n),type:"button",children:t("actions.delete")})]}),p.length>0?e.jsxs("div",{className:"flex flex-col gap-y-1.5",children:[e.jsx(fe,{variant:"dashed"}),e.jsx("div",{className:"flex flex-col gap-y-1.5 px-1.5",children:p.map((v,ae)=>e.jsx(ne,{index:ae,label:v.label,onRemove:N},v.id))})]}):null]}),e.jsx(c.ErrorMessage,{className:"mt-2"})]})})},n)})})]})]}),e.jsx(f.Footer,{className:"shrink-0",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(f.Close,{asChild:!0,children:e.jsx(P,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(P,{size:"small",type:"submit",isLoading:r,children:t("actions.save")})]})})]})})},Cs=()=>{const{t:u}=J(),{tax_rate_id:R}=ce(),{tax_rate:l,isPending:t,isError:x,error:b}=Te(R),{initialValues:a,isPending:o}=Ie(l),r=!t&&!!l&&!o&&!!a;if(x)throw b;return e.jsxs(f,{children:[e.jsxs(f.Header,{children:[e.jsx(f.Title,{asChild:!0,children:e.jsx(U,{children:u("taxRegions.taxOverrides.edit.header")})}),e.jsx(f.Description,{className:"sr-only",children:u("taxRegions.taxOverrides.edit.hint")})]}),r&&e.jsx(De,{taxRate:l,isCombinable:!0,initialValues:a})]})},Ie=u=>{const R=(u==null?void 0:u.rules)||[],l={products:[],product_collections:[],product_tags:[],product_types:[],customer_groups:[]};R.forEach(o=>{var g;const r=o.reference;(g=l[r])==null||g.push(o.reference_id)});const t=[{ids:l.products,hook:be,key:"products",getResult:o=>o.products.map(r=>({label:r.title,value:r.id}))},{ids:l.product_collections,hook:_e,key:"product_collections",getResult:o=>o.collections.map(r=>({label:r.title,value:r.id}))},{ids:l.product_tags,hook:je,key:"product_tags",getResult:o=>o.tags.map(r=>({label:r.value,value:r.id}))},{ids:l.product_types,hook:ye,key:"product_types",getResult:o=>o.product_types.map(r=>({label:r.value,value:r.id}))},{ids:l.customer_groups,hook:ve,key:"customer_groups",getResult:o=>o.customer_groups.map(r=>({label:r.name,value:r.id}))}],x=t.map(({ids:o,hook:r})=>{const g=o.length>0;return{result:r({id:o,limit:o.length},{enabled:g}),enabled:g}});if(!u)return{isPending:!0};const b=x.some(({result:o,enabled:r})=>r&&o.isPending);return b?{isPending:b}:(x.forEach(({result:o,enabled:r})=>{if(r&&o.isError)throw o.error}),{initialValues:t.reduce((o,{key:r,getResult:g},I)=>({...o,[r]:x[I].enabled?g(x[I].result):[]}),{}),isPending:!1})};export{Cs as Component};
