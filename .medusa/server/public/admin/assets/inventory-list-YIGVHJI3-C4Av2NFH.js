import{j as s,O as v,b as p,e5 as x,C as b,H as g,T as k,B as j,L as _,r as N,ba as w,e7 as q,A as S}from"./index-DwAumO4s.js";import{P as m}from"./chunk-P3UUX2T6-Bh1hfEeX.js";import{u as T,D as I}from"./chunk-XVFA73MY-2wn5oaa0.js";import"./lodash-izaU7qdk.js";import{u as P}from"./chunk-C76H5USB-Czk9z7F7.js";import"./chunk-5AU4DI7M-CpyI9ckD.js";import"./chunk-E3YGDIJC-B2axzREc.js";import{P as z}from"./pencil-square-Bi2c-pS8.js";import{T as C}from"./trash-CHGjMP8t.js";import{u as O}from"./use-prompt-CSTn0lsI.js";import{c as L}from"./index-DTjMCBLZ.js";import"./chunk-YEDAFXMB-yC38kXsx.js";import"./chunk-AOFGTNG6-B60NYXgG.js";import"./chunk-WX2SMNCD-C6IClXei.js";import"./plus-mini-BEIseT0I.js";import"./command-bar-CoF7zpoQ.js";import"./index-DAdyAzjh.js";import"./chunk-QAF7PVQE-CPuqIPzv.js";import"./format-CktQ0SPk.js";import"./date-picker-v8FvKVYS.js";import"./popover-C1GpxxvS.js";import"./x-mark-mini-BVLOBz1V.js";import"./triangle-left-mini-DYy1FE26.js";import"./prompt-CYx1Z627.js";var A=({item:e})=>{const{t:i}=p(),t=O(),{mutateAsync:l}=q(e.id),a=async()=>{await t({title:i("general.areYouSure"),description:i("inventory.deleteWarning"),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await l()};return s.jsx(S,{groups:[{actions:[{icon:s.jsx(z,{}),label:i("actions.edit"),to:`${e.id}/edit`}]},{actions:[{icon:s.jsx(C,{}),label:i("actions.delete"),onClick:a}]}]})},o=L(),D=()=>{const{t:e}=p();return N.useMemo(()=>[o.accessor("title",{header:e("fields.title"),cell:({getValue:i})=>{const t=i();return t?s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})}):s.jsx(m,{})}}),o.accessor("sku",{header:e("fields.sku"),cell:({getValue:i})=>{const t=i();return t?s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})}):s.jsx(m,{})}}),o.accessor("reserved_quantity",{header:e("inventory.reserved"),cell:({getValue:i})=>{const t=i();return Number.isNaN(t)?s.jsx(m,{}):s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})})}}),o.accessor("stocked_quantity",{header:e("fields.inStock"),cell:({getValue:i})=>{const t=i();return Number.isNaN(t)?s.jsx(m,{}):s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t})})}}),o.display({id:"actions",cell:({row:i})=>s.jsx(A,{item:i.original})})],[e])},E=()=>{const{t:e}=p(),{stock_locations:i}=w({limit:1e3}),t=[];if(i){const l={type:"select",options:i.map(a=>({label:a.name,value:a.id})),key:"location_id",searchable:!0,label:e("fields.location")};t.push(l)}return t.push({type:"string",key:"material",label:e("fields.material")}),t.push({type:"string",key:"sku",label:e("fields.sku")}),t.push({type:"string",key:"mid_code",label:e("fields.midCode")}),t.push({type:"number",key:"height",label:e("fields.height")}),t.push({type:"number",key:"width",label:e("fields.width")}),t.push({type:"number",key:"length",label:e("fields.length")}),t.push({type:"number",key:"weight",label:e("fields.weight")}),t.push({type:"select",options:[{label:e("fields.true"),value:"true"},{label:e("fields.false"),value:"false"}],key:"requires_shipping",multiple:!1,label:e("fields.requiresShipping")}),t},J=({pageSize:e=20,prefix:i})=>{const t=P(["id","location_id","q","order","requires_shipping","offset","sku","origin_country","material","mid_code","hs_code","order","weight","width","length","height"],i),{offset:l,weight:a,width:n,length:c,height:d,requires_shipping:u,...r}=t;return{searchParams:{limit:e,offset:l?parseInt(l):void 0,weight:a?JSON.parse(a):void 0,width:n?JSON.parse(n):void 0,length:c?JSON.parse(c):void 0,height:d?JSON.parse(d):void 0,requires_shipping:u?JSON.parse(u):void 0,q:r.q,sku:r.sku,order:r.order,mid_code:r.mid_code,hs_code:r.hs_code,material:r.material,location_levels:{location_id:r.location_id||[]},id:r.id?r.id.split(","):void 0},raw:t}},f=20,H=()=>{const{t:e}=p(),{searchParams:i,raw:t}=J({pageSize:f}),{inventory_items:l,count:a,isPending:n,isError:c,error:d}=x({...i}),u=E(),r=D(),{table:y}=T({data:l??[],columns:r,count:a,enablePagination:!0,getRowId:h=>h.id,pageSize:f});if(c)throw d;return s.jsxs(b,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(g,{children:e("inventory.domain")}),s.jsx(k,{className:"text-ui-fg-subtle",size:"small",children:e("inventory.subtitle")})]}),s.jsx(j,{size:"small",variant:"secondary",asChild:!0,children:s.jsx(_,{to:"create",children:e("actions.create")})})]}),s.jsx(I,{table:y,columns:r,pageSize:f,count:a,isLoading:n,pagination:!0,search:!0,filters:u,queryObject:t,orderBy:[{key:"title",label:e("fields.title")},{key:"sku",label:e("fields.sku")},{key:"stocked_quantity",label:e("fields.inStock")},{key:"reserved_quantity",label:e("inventory.reserved")}],navigateTo:h=>`${h.id}`})]})},de=()=>s.jsxs("div",{className:"flex flex-col gap-y-2",children:[s.jsx(H,{}),s.jsx(v,{})]});export{de as Component};
