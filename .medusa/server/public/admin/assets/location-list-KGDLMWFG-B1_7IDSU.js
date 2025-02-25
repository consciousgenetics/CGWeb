import{I as S}from"./chunk-EQTBJSBZ-dq_4WnpU.js";import{B as P}from"./chunk-BKJC5BGQ-DF-FsA5N.js";import{L as O}from"./chunk-6WKBBTKM-CgLnzKDN.js";import{r as d,q as h,d as T,ba as E,a as z,j as e,b as r,C as p,H as y,dg as C,s as B,ex as A,T as l,B as D,L as b,an as I,ey as q,a4 as K,A as M,W as F,t as g}from"./index-DwAumO4s.js";import{a as H}from"./chunk-OIAPXGI2-C8FlIY4Q.js";import{T as m}from"./chunk-UR2E444G-DqVmhkyK.js";import"./chunk-3IW4HYUP-CCzWpj_m.js";import{P as Q}from"./pencil-square-Bi2c-pS8.js";import{T as R}from"./trash-CHGjMP8t.js";import{u as W}from"./use-prompt-CSTn0lsI.js";import"./Trans-D3HnFL2W.js";import"./x-mark-mini-BVLOBz1V.js";import"./prompt-CYx1Z627.js";var V=Object.defineProperty,f=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,j=(s,t,i)=>t in s?V(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,$=(s,t)=>{for(var i in t||(t={}))w.call(t,i)&&j(s,i,t[i]);if(f)for(var i of f(t))L.call(t,i)&&j(s,i,t[i]);return s},J=(s,t)=>{var i={};for(var a in s)w.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&f)for(var a of f(s))t.indexOf(a)<0&&L.call(s,a)&&(i[a]=s[a]);return i};const N=d.forwardRef((s,t)=>{var i=s,{color:a="currentColor"}=i,n=J(i,["color"]);return d.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},n),d.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5.625 4.16V2.7a1.875 1.875 0 1 1 3.75 0V4.16"}),d.createElement("path",{stroke:a,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.445 4.16h6.11c.865 0 1.587.66 1.66 1.522l.544 6.25a1.666 1.666 0 0 1-1.66 1.811H3.901a1.666 1.666 0 0 1-1.66-1.81l.543-6.25A1.667 1.667 0 0 1 4.445 4.16"}))});N.displayName="ShoppingBag";var _="name,*sales_channels,*address,*fulfillment_sets,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options,*fulfillment_sets.service_zones.shipping_options.shipping_profile",Y=()=>({queryKey:C.lists(),queryFn:async()=>await B.admin.stockLocation.list({fields:_}).catch(s=>{throw s.status===401?A("/login"):s})}),ue=async s=>{const t=Y();return h.getQueryData(t.queryKey)??await h.fetchQuery(t)};function G(s){const{t}=r(),{salesChannels:i}=s;return e.jsx("div",{className:"flex flex-col px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-subtle flex-1",as:"div",children:t("stockLocations.salesChannels.label")}),e.jsx("div",{className:"flex-1 text-left",children:i!=null&&i.length?e.jsx(P,{rounded:!0,inline:!0,n:3,list:i.map(a=>a.name)}):"-"})]})})}function v(s){const{t}=r(),{fulfillmentSet:i,type:a}=s,n=!!i;return e.jsx("div",{className:"flex flex-col px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-subtle flex-1",as:"div",children:t(`stockLocations.fulfillmentSets.${a}.header`)}),e.jsx("div",{className:"flex-1 text-left",children:e.jsx(F,{color:n?"green":"grey",children:t(n?"statuses.enabled":"statuses.disabled")})})]})})}function U(s){var x,u;const{location:t}=s,{t:i}=r(),a=W(),{mutateAsync:n}=q(t.id),o=async()=>{await a({title:i("general.areYouSure"),description:i("stockLocations.delete.confirmation",{name:t.name}),confirmText:i("actions.remove"),cancelText:i("actions.cancel")})&&await n(void 0,{onSuccess:()=>{g.success(i("shippingProfile.delete.successToast",{name:t.name}))},onError:k=>{g.error(k.message)}})};return e.jsxs(p,{className:"flex flex-col divide-y p-0",children:[e.jsx("div",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex flex-row items-center justify-between gap-x-4",children:[e.jsx("div",{className:"shadow-borders-base flex size-7 items-center justify-center rounded-md",children:e.jsx("div",{className:"bg-ui-bg-field flex size-6 items-center justify-center rounded-[4px]",children:e.jsx(K,{className:"text-ui-fg-subtle"})})}),e.jsxs("div",{className:"grow-1 flex flex-1 flex-col",children:[e.jsx(l,{weight:"plus",children:t.name}),e.jsx(l,{className:"text-ui-fg-subtle txt-small",children:H({address:t.address}).join(", ")})]}),e.jsxs("div",{className:"flex grow-0 items-center gap-4",children:[e.jsx(M,{groups:[{actions:[{label:i("actions.edit"),icon:e.jsx(Q,{}),to:`/settings/locations/${t.id}/edit`}]},{actions:[{label:i("actions.delete"),icon:e.jsx(R,{}),onClick:o}]}]}),e.jsx("div",{className:"bg-ui-border-strong h-[12px] w-[1px]"}),e.jsx(O,{to:`/settings/locations/${t.id}`,children:i("actions.viewDetails")})]})]})}),e.jsx(G,{salesChannels:t.sales_channels}),e.jsx(v,{type:"pickup",fulfillmentSet:(x=t.fulfillment_sets)==null?void 0:x.find(c=>c.type==="pickup")}),e.jsx(v,{type:"shipping",fulfillmentSet:(u=t.fulfillment_sets)==null?void 0:u.find(c=>c.type==="shipping")})]})}var X=U,Z=()=>{const{t:s}=r();return e.jsxs(p,{className:"flex h-fit items-center justify-between gap-x-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(y,{children:s("stockLocations.domain")}),e.jsx(l,{className:"text-ui-fg-subtle txt-small",children:s("stockLocations.list.description")})]}),e.jsx(D,{size:"small",className:"shrink-0",variant:"secondary",asChild:!0,children:e.jsx(b,{to:"create",children:s("actions.create")})})]})};function he(){const s=T(),{stock_locations:t=[],isError:i,error:a}=E({fields:_},{initialData:s}),{getWidgets:n}=z();if(i)throw a;return e.jsxs(m,{widgets:{after:n("location.details.after"),before:n("location.details.before"),sideAfter:n("location.details.side.after"),sideBefore:n("location.details.side.before")},showJSON:!0,children:[e.jsxs(m.Main,{children:[e.jsx(Z,{}),e.jsx("div",{className:"flex flex-col gap-3 lg:col-span-2",children:t.map(o=>e.jsx(X,{location:o},o.id))})]}),e.jsx(m.Sidebar,{children:e.jsx(se,{})})]})}var ee=({to:s,labelKey:t,descriptionKey:i,icon:a})=>e.jsx(b,{to:s,className:"group outline-none",children:e.jsx("div",{className:"flex flex-col gap-2 px-2 pb-2",children:e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component transition-fg hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed group-focus-visible:shadow-borders-interactive-with-active rounded-md px-4 py-2",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(S,{children:a}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx(l,{size:"small",leading:"compact",weight:"plus",children:t}),e.jsx(l,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:i})]}),e.jsx("div",{className:"flex size-7 items-center justify-center",children:e.jsx(I,{className:"text-ui-fg-muted"})})]})})})}),se=()=>{const{t:s}=r();return e.jsxs(p,{className:"p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(y,{level:"h2",children:s("stockLocations.sidebar.header")})}),e.jsx(ee,{to:"/settings/locations/shipping-profiles",labelKey:s("stockLocations.sidebar.shippingProfiles.label"),descriptionKey:s("stockLocations.sidebar.shippingProfiles.description"),icon:e.jsx(N,{})})]})};export{he as Component,ue as loader};
