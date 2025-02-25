import{V as I}from"./chunk-EUTK2A3J-CZpwcbuN.js";import{u as F}from"./chunk-6CNRNROJ-BoSNICcv.js";import{C}from"./chunk-BNH57GBH-Bk2DXWgq.js";import{K as E}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{R as m,u as V}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{a6 as f,ah as M,a8 as S,as as h,aj as P,S as w,ay as z,j as e,b as T,ad as B,ae as L,z as k,aB as A,t as _,B as x,H as R,x as a,E as g,y as $,I as H,s as K}from"./index-DwAumO4s.js";import{X as D}from"./x-mark-mini-BVLOBz1V.js";import"./triangles-mini-BKt9ZCCg.js";import"./plus-mini-BEIseT0I.js";import"./prompt-CYx1Z627.js";var X=f({inventory:M(f({inventory_item_id:S().min(1,h.t("products.variant.inventory.validation.itemId")),required_quantity:P({errorMap:()=>({message:h.t("products.variant.inventory.validation.quantity")})}).min(0,h.t("products.variant.inventory.validation.quantity"))}))});function O({variant:r}){const{t:i}=T(),{handleSuccess:u}=V(),l=B({defaultValues:{inventory:r.inventory_items.length?r.inventory_items.map(s=>({required_quantity:s.required_quantity,inventory_item_id:s.inventory.id})):[{inventory_item_id:"",required_quantity:""}]},resolver:L(X)}),c=k({control:l.control,name:"inventory"}),y=c.fields.length>1,p=F({queryKey:["inventory_items"],queryFn:s=>K.admin.inventoryItem.list(s),getOptions:s=>s.inventory_items.map(n=>({label:n.title,value:n.id}))}),{mutateAsync:j,isPending:q}=A(r.product_id),b=l.handleSubmit(async s=>{const n={},d={};r.inventory_items.forEach(t=>n[t.inventory.id]=t.required_quantity),s.inventory.forEach(t=>d[t.inventory_item_id]=!0);const o={create:[],update:[],delete:[]};s.inventory.forEach(t=>{t.inventory_item_id in n?t.required_quantity!==n[t.inventory_item_id]&&o.update.push({required_quantity:t.required_quantity,inventory_item_id:t.inventory_item_id,variant_id:r.id}):o.create.push({required_quantity:t.required_quantity,inventory_item_id:t.inventory_item_id,variant_id:r.id})}),r.inventory_items.forEach(t=>{t.inventory.id in d||o.delete.push({inventory_item_id:t.inventory.id,variant_id:r.id})});for(const t in o)o[t].length||delete o[t];await j(o,{onSuccess:()=>{_.success(i("products.variant.inventory.toast.itemsManageSuccess")),u()},onError:t=>{_.error(t.message)}})});return e.jsx(m.Form,{form:l,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:b,children:[e.jsx(m.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:q,children:i("actions.save")})]})}),e.jsx(m.Body,{className:"flex justify-center",children:e.jsxs("div",{className:"flex w-full flex-col gap-y-8 px-6 pt-12 md:w-[720px] md:pt-24",children:[e.jsx(R,{children:i(y?"products.create.inventory.heading":"fields.inventoryItems")}),e.jsxs("div",{className:"grid gap-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-x-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(a.Label,{children:r.title}),e.jsx(a.Hint,{children:i(y?"products.create.inventory.label":"fields.inventoryItem")})]}),e.jsx(x,{size:"small",variant:"secondary",type:"button",onClick:()=>{c.append({inventory_item_id:"",required_quantity:""})},children:i("actions.add")})]}),c.fields.map((s,n)=>e.jsxs("li",{className:"bg-ui-bg-component shadow-elevation-card-rest grid grid-cols-[1fr_28px] items-center gap-1.5 rounded-xl p-1.5",children:[e.jsxs("div",{className:"grid grid-cols-[min-content,1fr] items-center gap-1.5",children:[e.jsx("div",{className:"flex items-center px-2 py-1.5",children:e.jsx(g,{size:"xsmall",weight:"plus",className:"text-ui-fg-subtle",htmlFor:`inventory.${n}.inventory_item_id`,children:i("fields.item")})}),e.jsx(a.Field,{control:l.control,name:`inventory.${n}.inventory_item_id`,render:({field:d})=>e.jsxs(a.Item,{children:[e.jsx(a.Control,{children:e.jsx(C,{...d,options:p.options,searchValue:p.searchValue,onSearchValueChange:p.onSearchValueChange,fetchNextPage:p.fetchNextPage,className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",placeholder:i("products.create.inventory.itemPlaceholder")})}),e.jsx(a.ErrorMessage,{})]})}),e.jsx("div",{className:"flex items-center px-2 py-1.5",children:e.jsx(g,{size:"xsmall",weight:"plus",className:"text-ui-fg-subtle",htmlFor:`inventory.${n}.required_quantity`,children:i("fields.quantity")})}),e.jsx(a.Field,{control:l.control,name:`inventory.${n}.required_quantity`,render:({field:{onChange:d,value:o,...t}})=>e.jsxs(a.Item,{children:[e.jsx(a.Control,{children:e.jsx($,{type:"number",className:"bg-ui-bg-field-component",min:0,value:o,onChange:N=>{const v=N.target.value;d(v===""?null:Number(v))},...t,placeholder:i("products.create.inventory.quantityPlaceholder")})}),e.jsx(a.ErrorMessage,{})]})})]}),e.jsx(H,{type:"button",size:"small",variant:"transparent",className:"text-ui-fg-muted",onClick:()=>c.remove(n),children:e.jsx(D,{})})]},s.id))]})]})})]})})}function ne(){const{id:r,variant_id:i}=w(),{variant:u,isPending:l,isError:c,error:y}=z(r,i,{fields:I});if(c)throw y;return e.jsx(m,{children:!l&&u&&e.jsx(O,{variant:u})})}export{ne as Component};
