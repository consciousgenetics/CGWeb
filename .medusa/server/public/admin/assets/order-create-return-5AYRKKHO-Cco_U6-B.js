import{R as Me,C as Te}from"./chunk-P3DRE4IY-DCOmrrlw.js";import{M as De}from"./chunk-LHJ6JQGA-CB91qRq8.js";import{g as me}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{D as He}from"./chunk-AMJSV3NG-DPKI1Y1t.js";import{m as Le,c as Fe,n as ze,u as Ve,o as Be,p as Oe,q as Ue,s as $e,t as Qe,v as Ge,w as Xe}from"./chunk-HCTCEIT6-Ce1Cq3Ls.js";import{a as z}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{aa as q,S as Je,u as Ke,b as L,aQ as We,aR as Ye,r as _,j as e,ba as Ze,ad as et,ae as tt,z as st,t as J,H as ne,B as X,x as m,T as V,I as Z,ag as nt,df as it,b1 as rt,y as ie,A as at,X as re,s as ot}from"./index-DwAumO4s.js";import{P as lt,a as dt}from"./chunk-FTXJRXMD-BVIleqGw.js";import{C as ee}from"./chunk-BNH57GBH-Bk2DXWgq.js";import{c as ct}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{u as ut}from"./chunk-VDODP7YI-wfUELBcQ.js";import{u as mt,D as pt}from"./chunk-XVFA73MY-2wn5oaa0.js";import"./lodash-izaU7qdk.js";import{u as ft}from"./chunk-C76H5USB-Czk9z7F7.js";import"./chunk-5AU4DI7M-CpyI9ckD.js";import"./chunk-E3YGDIJC-B2axzREc.js";import{K as xt}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{R as A,u as ht,a as gt,S as F}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{P as bt}from"./pencil-square-Bi2c-pS8.js";import{C as jt}from"./currency-input-DtEf0l0a.js";import{D as _t}from"./document-text-CCwDVtbk.js";import{X as yt}from"./x-circle-CmcyleNp.js";import{u as vt}from"./use-prompt-CSTn0lsI.js";import{A as Nt}from"./alert-CkETWLHI.js";import{C as ae}from"./checkbox-DOq5axzy.js";import{c as It}from"./index-DTjMCBLZ.js";import"./Trans-D3HnFL2W.js";import"./chunk-P3UUX2T6-Bh1hfEeX.js";import"./x-mark-mini-BVLOBz1V.js";import"./triangles-mini-BKt9ZCCg.js";import"./plus-mini-BEIseT0I.js";import"./chunk-YEDAFXMB-yC38kXsx.js";import"./chunk-AOFGTNG6-B60NYXgG.js";import"./chunk-WX2SMNCD-C6IClXei.js";import"./command-bar-CoF7zpoQ.js";import"./index-DAdyAzjh.js";import"./chunk-QAF7PVQE-CPuqIPzv.js";import"./format-CktQ0SPk.js";import"./date-picker-v8FvKVYS.js";import"./popover-C1GpxxvS.js";import"./triangle-left-mini-DYy1FE26.js";import"./prompt-CYx1Z627.js";import"./index.esm-B4vcOU-v.js";var H=It(),St=o=>{const{t:d}=L();return _.useMemo(()=>[H.display({id:"select",header:({table:r})=>e.jsx(ae,{checked:r.getIsSomePageRowsSelected()?"indeterminate":r.getIsAllPageRowsSelected(),onCheckedChange:t=>r.toggleAllPageRowsSelected(!!t)}),cell:({row:r})=>{const t=r.getCanSelect();return e.jsx(ae,{disabled:!t,checked:r.getIsSelected(),onCheckedChange:l=>r.toggleSelected(!!l),onClick:l=>{l.stopPropagation()}})}}),H.display({id:"product",header:()=>e.jsx(lt,{}),cell:({row:r})=>e.jsx(dt,{product:r.original.variant.product})}),H.accessor("variant.sku",{header:d("fields.sku"),cell:({getValue:r})=>r()||"-"}),H.accessor("variant.title",{header:d("fields.variant")}),H.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:d("fields.quantity")})}),cell:({getValue:r,row:t})=>me(t.original)}),H.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:d("fields.price")})}),cell:({getValue:r})=>{const t=r()||0,l=z(t,o);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l})})}})],[d,o])},Ct=()=>{const{t:o}=L();return[{key:"returnable_quantity",label:o("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:o("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:o("fields.createdAt"),type:"date"},{key:"updated_at",label:o("fields.updatedAt"),type:"date"}]},Rt=({pageSize:o=50,prefix:d})=>{const r=ft(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],d),{offset:t,created_at:l,updated_at:u,refundable_amount:c,returnable_quantity:h,...j}=r;return{searchParams:{...j,limit:o,offset:t?Number(t):0,created_at:l?JSON.parse(l):void 0,updated_at:u?JSON.parse(u):void 0,refundable_amount:c?JSON.parse(c):void 0,returnable_quantity:h?JSON.parse(h):void 0},raw:r}},W=50,oe="rit",wt=({onSelectionChange:o,selectedItems:d,items:r,currencyCode:t})=>{const{t:l}=L(),[u,c]=_.useState(d.reduce((f,v)=>(f[v]=!0,f),{})),h=f=>{const v=typeof f=="function"?f(u):f;c(v),o(Object.keys(v))},{searchParams:j,raw:p}=Rt({pageSize:W,prefix:oe}),y=_.useMemo(()=>{const{order:f,offset:v,limit:k,q:E,created_at:B,updated_at:O,refundable_amount:U,returnable_quantity:$}=j;let N=r;if(E&&(N=N.filter(P=>{var M;return P.variant.product.title.toLowerCase().includes(E.toLowerCase())||P.variant.title.toLowerCase().includes(E.toLowerCase())||((M=P.variant.sku)==null?void 0:M.toLowerCase().includes(E.toLowerCase()))})),f){const P=f[0]==="-"?"desc":"asc",M=f.replace("-","");N=qt(N,M,P)}return B&&(N=le(N,B,"created_at")),O&&(N=le(N,O,"updated_at")),$&&(N=ce(N,$,"returnable_quantity",t)),U&&(N=ce(N,U,"refundable_amount",t)),N.slice(v,v+k)},[r,t,j]),w=St(t),I=Ct(),{table:b}=mt({data:y,columns:w,count:y.length,enablePagination:!0,getRowId:f=>f.id,pageSize:W,enableRowSelection:f=>me(f.original)>0,rowSelection:{state:u,updater:h}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(pt,{table:b,columns:w,pageSize:W,count:y.length,filters:I,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:l("fields.product")},{key:"variant_title",label:l("fields.variant")},{key:"sku",label:l("fields.sku")},{key:"returnable_quantity",label:l("orders.fields.returnableQuantity")},{key:"refundable_amount",label:l("orders.fields.refundableAmount")}],prefix:oe,queryObject:p})})},qt=(o,d,r)=>o.sort((t,l)=>{let u,c;return d==="product_title"?(u=t.variant.product.title,c=l.variant.product.title):d==="variant_title"?(u=t.variant.title,c=l.variant.title):d==="sku"?(u=t.variant.sku,c=l.variant.sku):d==="returnable_quantity"?(u=t.quantity-(t.returned_quantity||0),c=l.quantity-(l.returned_quantity||0)):d==="refundable_amount"&&(u=t.refundable||0,c=l.refundable||0),u<c?r==="asc"?-1:1:u>c?r==="asc"?1:-1:0}),le=(o,d,r)=>{const{gt:t,gte:l,lt:u,lte:c}=d;return o.filter(h=>{const j=new Date(h[r]);let p=!0;return t&&(p=p&&j>new Date(t)),l&&(p=p&&j>=new Date(l)),u&&(p=p&&j<new Date(u)),c&&(p=p&&j<=new Date(c)),p})},de={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},ce=(o,d,r,t)=>{const{eq:l,gt:u,lt:c,gte:h,lte:j}=typeof d=="object"?{...de,...d}:{...de,eq:d};return o.filter(p=>{const y=p.quantity-(p.returned_quantity||0),w=z(p.refundable||0,t),I=r==="returnable_quantity"?y:w;if(l)return I===l;let b=!0;return u&&(b=b&&I>u),h&&(b=b&&I>=h),c&&(b=b&&I<c),j&&(b=b&&I<=j),b})};function kt({item:o,previewItem:d,currencyCode:r,form:t,onRemove:l,onUpdate:u,index:c}){const{t:h}=L(),{return_reasons:j=[]}=it({fields:"+label"}),p=t.watch(`items.${c}`),y=typeof p.reason_id=="string",w=typeof p.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(rt,{src:o.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(V,{className:"txt-small",as:"span",weight:"plus",children:[o.title," "]}),o.variant.sku&&e.jsxs("span",{children:["(",o.variant.sku,")"]})]}),e.jsx(V,{as:"div",className:"text-ui-fg-subtle txt-small",children:o.variant.product.title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(m.Field,{control:t.control,name:`items.${c}.quantity`,render:({field:I})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ie,{className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:o.quantity,type:"number",...I,onChange:b=>{const f=b.target.value,v=f===""?null:Number(f);I.onChange(v),v&&u({quantity:v})}})}),e.jsx(m.ErrorMessage,{})]})}),e.jsx(V,{className:"txt-small text-ui-fg-subtle",children:h("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(De,{currencyCode:r,amount:d.return_requested_total})}),e.jsx(at,{groups:[{actions:[!y&&{label:h("actions.addReason"),onClick:()=>t.setValue(`items.${c}.reason_id`,""),icon:e.jsx(Te,{})},!w&&{label:h("actions.addNote"),onClick:()=>t.setValue(`items.${c}.note`,""),icon:e.jsx(_t,{})},{label:h("actions.remove"),onClick:l,icon:e.jsx(yt,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[y&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:h("orders.returns.reason")}),e.jsx(m.Hint,{className:"!mt-1",children:h("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(m.Field,{control:t.control,name:`items.${c}.reason_id`,render:({field:{ref:I,value:b,onChange:f,...v}})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ee,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:b,onChange:k=>{u({reason_id:k}),f(k)},...v,options:j.map(k=>({label:k.label,value:k.id}))})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(Z,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{u({reason_id:null}),t.setValue(`items.${c}.reason_id`,null)},children:e.jsx(re,{className:"text-ui-fg-muted"})})]})]}),w&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:h("orders.returns.note")}),e.jsx(m.Hint,{className:"!mt-1",children:h("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(m.Field,{control:t.control,name:`items.${c}.note`,render:({field:{ref:I,onChange:b,...f}})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ie,{onChange:b,...f,onBlur:()=>u({internal_note:f.value}),className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(Z,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{t.setValue(`items.${c}.note`,{shouldDirty:!0,shouldTouch:!0}),u({internal_note:null})},children:e.jsx(re,{className:"text-ui-fg-muted"})})]})]})]})]})}var Pt=q.object({items:q.array(q.object({item_id:q.string(),quantity:q.number(),reason_id:q.string().optional().nullable(),note:q.string().optional().nullable()})),location_id:q.string().optional(),option_id:q.string(),send_notification:q.boolean().optional(),receive_now:q.boolean().optional()}),ue=[],At=({order:o,preview:d,activeReturn:r})=>{const{t}=L(),{handleSuccess:l}=ht(),u=_.useMemo(()=>new Map((o.items||[]).map(s=>[s.id,s])),[o.items]),c=_.useMemo(()=>d.items.filter(s=>{var n;return!!((n=s.actions)!=null&&n.find(i=>i.return_id===r.id))}),[d.items]),h=_.useMemo(()=>new Map(c.map(s=>[s.id,s])),[c]),{setIsOpen:j}=gt(),[p,y]=_.useState(!1),[w,I]=_.useState(0),[b,f]=_.useState({}),{stock_locations:v=[]}=Ze({limit:999}),{shipping_options:k=[]}=ut({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:E,isPending:B}=ze(r.id,o.id),{mutateAsync:O,isPending:U}=Ve(r.id,o.id),{mutateAsync:$,isPending:N}=Be(r.id,o.id),{mutateAsync:P,isPending:M}=Oe(r.id,o.id),{mutateAsync:pe,isPending:fe}=Ue(r.id,o.id),{mutateAsync:xe,isPending:he}=$e(r.id,o.id),{mutateAsync:ge,isPending:be}=Qe(r.id,o.id),{mutateAsync:je,isPending:_e}=Ge(r.id,o.id),{mutateAsync:ye,isPending:ve}=Xe(r.id,o.id),Ne=B||U||M||fe||he||be||_e||ve||N,C=et({defaultValues:()=>{const s=d.shipping_methods.find(n=>{var i;return!!((i=n.actions)!=null&&i.find(a=>a.action==="SHIPPING_ADD"))});return Promise.resolve({items:c.map(n=>{var i,a,x,g,S;return{item_id:n.id,quantity:n.detail.return_requested_quantity,note:(a=(i=n.actions)==null?void 0:i.find(D=>D.action==="RETURN_ITEM"))==null?void 0:a.internal_note,reason_id:(S=(g=(x=n.actions)==null?void 0:x.find(D=>D.action==="RETURN_ITEM"))==null?void 0:g.details)==null?void 0:S.reason_id}}),option_id:s?s.shipping_option_id:"",location_id:r==null?void 0:r.location_id,send_notification:!1})},resolver:tt(Pt)}),{fields:R,append:Ie,remove:Se,update:Ce}=st({name:"items",control:C.control});_.useEffect(()=>{const s={};c.forEach(n=>{var a,x;const i=R.findIndex(g=>g.item_id===n.id);if(n.detail.return_requested_quantity)if(s[n.id]=!0,i>-1){if(R[i].quantity!==n.detail.return_requested_quantity){const g=(a=n.actions)==null?void 0:a.find(S=>S.action==="RETURN_ITEM");Ce(i,{...R[i],quantity:n.detail.return_requested_quantity,note:g==null?void 0:g.internal_note,reason_id:(x=g==null?void 0:g.details)==null?void 0:x.reason_id})}}else Ie({item_id:n.id,quantity:n.detail.return_requested_quantity})}),R.forEach((n,i)=>{n.item_id in s||Se(i)})},[c]),_.useEffect(()=>{var n;const s=(n=d.shipping_methods)==null?void 0:n.find(i=>{var a;return!!((a=i.actions)!=null&&a.find(x=>x.action==="SHIPPING_ADD"))});s?C.setValue("option_id",s.shipping_option_id):C.setValue("option_id","")},[d.shipping_methods]);const Q=!R.length,T=C.watch("location_id"),Re=C.watch("option_id"),we=vt(),qe=C.handleSubmit(async s=>{try{if(!await we({title:t("general.areYouSure"),description:t("orders.returns.confirmText"),confirmText:t("actions.continue"),cancelText:t("actions.cancel"),variant:"confirmation"}))return;await E({no_notification:!s.send_notification}),l()}catch(n){J.error(t("general.error"),{description:n.message,dismissLabel:t("actions.close")})}}),ke=()=>{ge({items:ue.map(s=>({id:s,quantity:1}))}),j("items",!1)},Pe=async s=>{await $({location_id:s})},Ae=async s=>{const n=d.shipping_methods.map(i=>{var a,x;return(x=(a=i.actions)==null?void 0:a.find(g=>g.action==="SHIPPING_ADD"))==null?void 0:x.id}).filter(Boolean).map(xe);await Promise.all(n),await P({shipping_option_id:s})};_.useEffect(()=>{p&&document.getElementById("js-shipping-input").focus()},[p]),_.useEffect(()=>{C.setValue("location_id",(r==null?void 0:r.location_id)||"")},[r]);const Ee=_.useMemo(()=>T?!R.map(n=>{var a;const i=u.get(n.item_id);return!(i!=null&&i.variant_id)||!i.variant.manage_inventory?!0:(a=b[i.variant_id])==null?void 0:a.find(x=>x.location_id===T)}).every(Boolean):!1,[R,b,T]);_.useEffect(()=>{(async()=>{const n={};return R.length&&(await Promise.all(R.map(async i=>{const a=u.get(i.item_id);if(a.variant_id)return await ot.admin.product.retrieveVariant(a.variant.product.id,a.variant_id,{fields:"*inventory,*inventory.location_levels"})}))).filter(i=>i==null?void 0:i.variant).forEach(i=>{var g;const{variant:a}=i,x=(g=a.inventory[0])==null?void 0:g.location_levels;x&&(n[a.id]=x)}),n})().then(n=>{f(n)})},[R]);const G=d.return_requested_total,te=_.useMemo(()=>{const s=d.shipping_methods.find(n=>{var i;return!!((i=n.actions)!=null&&i.find(a=>a.action==="SHIPPING_ADD"))});return(s==null?void 0:s.total)||0},[d.shipping_methods]),K=G-te;return e.jsx(A.Form,{form:C,onClose:s=>{s||O()},children:e.jsxs(xt,{onSubmit:qe,className:"flex h-full flex-col",children:[e.jsx(A.Header,{}),e.jsx(A.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(ne,{level:"h1",children:t("orders.returns.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ne,{level:"h2",children:t("orders.returns.inbound")}),e.jsxs(F,{id:"items",children:[e.jsx(F.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:t("actions.addItems")})}),e.jsxs(F.Content,{children:[e.jsx(F.Header,{}),e.jsx(wt,{items:o.items,selectedItems:R.map(s=>s.item_id),currencyCode:o.currency_code,onSelectionChange:s=>ue=s}),e.jsx(F.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(A.Close,{asChild:!0,children:e.jsx(X,{type:"button",variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(X,{type:"submit",variant:"primary",size:"small",role:"button",onClick:()=>ke(),children:t("actions.save")},"submit-button")]})})})]})]})]}),Q&&e.jsx("div",{style:{background:"repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"},className:"bg-ui-bg-field mt-4 block h-[56px] w-full rounded-lg border border-dashed"}),R.filter(s=>!!h.get(s.item_id)).map((s,n)=>e.jsx(kt,{item:u.get(s.item_id),previewItem:h.get(s.item_id),currencyCode:o.currency_code,form:C,onRemove:()=>{var a,x,g;const i=(g=(x=(a=c.find(S=>S.id===s.item_id))==null?void 0:a.actions)==null?void 0:x.find(S=>S.action==="RETURN_ITEM"))==null?void 0:g.id;i&&je(i)},onUpdate:i=>{var x,g;const a=(g=(x=c.find(S=>S.id===s.item_id))==null?void 0:x.actions)==null?void 0:g.find(S=>S.action==="RETURN_ITEM");a&&ye({...i,actionId:a.id},{onError:S=>{var D,se;(D=a.details)!=null&&D.quantity&&i.quantity&&C.setValue(`items.${n}.quantity`,(se=a.details)==null?void 0:se.quantity),J.error(S.message)}})},index:n},s.id)),!Q&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:t("orders.returns.location")}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.locationHint")})]}),e.jsx(m.Field,{control:C.control,name:"location_id",render:({field:{value:s,onChange:n,...i}})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(ee,{value:s,onChange:a=>{n(a),Pe(a)},...i,options:(v??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(m.Label,{children:[t("orders.returns.inboundShipping"),e.jsxs(V,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",t("fields.optional"),")"]})]}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.inboundShippingHint")})]}),e.jsx(m.Field,{control:C.control,name:"option_id",render:({field:{value:s,onChange:n,...i}})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(ee,{value:s,onChange:a=>{n(a),Ae(a)},...i,options:(k??[]).filter(a=>(T?a.service_zone.fulfillment_set.location.id===T:!0)&&!!a.rules.find(x=>x.attribute==="is_return"&&x.value==="true")).map(a=>({label:a.name,value:a.id})),disabled:!T,noResultsPlaceholder:e.jsx(Me,{})})})})})]})]}),Ee&&e.jsxs(Nt,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:t("orders.returns.noInventoryLevel")}),e.jsx(V,{className:"text-ui-fg-subtle txt-small leading-normal",children:t("orders.returns.noInventoryLevelDesc")})]}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("orders.returns.returnTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:z(G&&-1*G,o.currency_code)})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!p&&e.jsx(Z,{onClick:()=>y(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:Q||!Re,children:e.jsx(bt,{})}),p?e.jsx(jt,{id:"js-shipping-input",onBlur:()=>{let s;d.shipping_methods.forEach(n=>{if(n.actions)for(const i of n.actions)i.action==="SHIPPING_ADD"&&(s=i.id)}),s&&pe({actionId:s,custom_amount:typeof w=="string"?null:w}),y(!1)},symbol:ct[o.currency_code.toUpperCase()].symbol_native,code:o.currency_code,onValueChange:s=>I(s?parseFloat(s):""),value:w,disabled:Q}):z(te,o.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:t("orders.returns.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:z(K&&-1*K,o.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(m.Field,{control:C.control,name:"send_notification",render:({field:{onChange:s,value:n,...i}})=>e.jsxs(m.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m.Control,{className:"mr-4 self-start",children:e.jsx(nt,{className:"mt-[2px]",checked:!!n,onCheckedChange:s,...i})}),e.jsxs("div",{className:"block",children:[e.jsx(m.Label,{children:t("orders.returns.sendNotification")}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.sendNotificationHint")})]})]}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(A.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(A.Close,{asChild:!0,children:e.jsx(X,{type:"button",variant:"secondary",size:"small",children:t("orders.returns.cancel.title")})}),e.jsx(X,{type:"submit",variant:"primary",size:"small",isLoading:Ne,children:t("orders.returns.confirm")},"submit-button")]})})})]})})},Y=!1,vs=()=>{const{id:o}=Je(),d=Ke(),{t:r}=L(),{order:t}=We(o,{fields:He}),{order:l}=Ye(o,void 0,{}),[u,c]=_.useState(),{mutateAsync:h}=Le(t.id),{return:j}=Fe(u,void 0,{enabled:!!u});return _.useEffect(()=>{async function p(){if(!(Y||!l)){if(l.order_change){l.order_change.change_type==="return_request"?c(l.order_change.return_id):(d(`/orders/${t.id}`,{replace:!0}),J.error(r("orders.returns.activeChangeError")));return}Y=!0;try{const y=await h({order_id:t.id});c(y.id)}catch(y){d(`/orders/${t.id}`,{replace:!0}),J.error(y.message)}finally{Y=!1}}}p()},[l]),e.jsx(A,{children:j&&l&&t&&e.jsx(At,{order:t,activeReturn:j,preview:l})})};export{vs as Component};
