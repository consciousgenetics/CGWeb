import{r as A}from"./chunk-K7S5TX6I-oKg1ce5C.js";import{r as n,aN as D,a6 as C,a8 as F,j as r,b as _,ad as L,ae as R,w as U,H as w,T as H,x as p,y as z,B as q,C as B,Z as h,W as y,A as $}from"./index-DwAumO4s.js";import{u as K}from"./chunk-C76H5USB-Czk9z7F7.js";import{u as V,a as W,b as J,c as Q}from"./chunk-RL26MEZE-BM7Onocq.js";import{u as Z,D as G}from"./chunk-XVFA73MY-2wn5oaa0.js";import"./lodash-izaU7qdk.js";import"./chunk-5AU4DI7M-CpyI9ckD.js";import"./chunk-E3YGDIJC-B2axzREc.js";import{K as X}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{R as f}from"./chunk-MDIOSTKB-6EE6lyQn.js";import{T as Y}from"./Trans-D3HnFL2W.js";import{A as ee}from"./arrow-path-CYu3A-qj.js";import{T as re}from"./trash-CHGjMP8t.js";import{u as te}from"./use-prompt-CSTn0lsI.js";import{A as ae}from"./alert-CkETWLHI.js";import{f as u}from"./format-CktQ0SPk.js";import{c as se}from"./index-DTjMCBLZ.js";import"./chunk-YEDAFXMB-yC38kXsx.js";import"./chunk-AOFGTNG6-B60NYXgG.js";import"./chunk-WX2SMNCD-C6IClXei.js";import"./plus-mini-BEIseT0I.js";import"./command-bar-CoF7zpoQ.js";import"./index-DAdyAzjh.js";import"./chunk-QAF7PVQE-CPuqIPzv.js";import"./date-picker-v8FvKVYS.js";import"./popover-C1GpxxvS.js";import"./x-mark-mini-BVLOBz1V.js";import"./triangle-left-mini-DYy1FE26.js";import"./prompt-CYx1Z627.js";var ie=Object.defineProperty,x=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ne=(e,t)=>{for(var a in t||(t={}))N.call(t,a)&&I(e,a,t[a]);if(x)for(var a of x(t))P.call(t,a)&&I(e,a,t[a]);return e},oe=(e,t)=>{var a={};for(var s in e)N.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&x)for(var s of x(e))t.indexOf(s)<0&&P.call(e,s)&&(a[s]=e[s]);return a};const S=n.forwardRef((e,t)=>{var a=e,{color:s="currentColor"}=a,i=oe(a,["color"]);return n.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},i),n.createElement("g",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},n.createElement("path",{d:"m6.44 3.965 1.59-1.591a3.25 3.25 0 1 1 4.597 4.596l-1.591 1.59M3.964 6.44l-1.59 1.59a3.25 3.25 0 1 0 4.596 4.597l1.59-1.591M5.909 9.09 9.091 5.91"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});S.displayName="Link";var le=({prefix:e,pageSize:t=20})=>{const a=K(["offset","q","order","created_at","updated_at"],e),{offset:s,created_at:i,updated_at:o,q:l,order:c}=a;return{searchParams:{limit:t,offset:s?Number(s):0,order:c,created_at:i?JSON.parse(i):void 0,updated_at:o?JSON.parse(o):void 0,q:l},raw:a}},ce=D(A()),de=C({email:F().email()}),j=10,M="usr_invite",me=`${window.location.origin}/app/invite?token=`,pe=()=>{const{t:e}=_(),t=L({defaultValues:{email:""},resolver:R(de)}),{raw:a,searchParams:s}=le({prefix:M,pageSize:j}),{invites:i,count:o,isPending:l,isError:c,error:d}=V(s),b=fe(),{table:E}=Z({data:i??[],columns:b,count:o,enablePagination:!0,getRowId:m=>m.id,pageSize:j,prefix:M}),{mutateAsync:O,isPending:T}=W(),k=t.handleSubmit(async m=>{try{await O({email:m.email}),t.reset()}catch(v){if(U(v)&&v.status===400){t.setError("root",{type:"manual",message:v.message});return}}});if(c)throw d;return r.jsx(f.Form,{form:t,children:r.jsxs(X,{onSubmit:k,className:"flex h-full flex-col overflow-hidden",children:[r.jsx(f.Header,{}),r.jsx(f.Body,{className:"flex flex-1 flex-col overflow-hidden",children:r.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:r.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[r.jsxs("div",{children:[r.jsx(w,{children:e("users.inviteUser")}),r.jsx(H,{size:"small",className:"text-ui-fg-subtle",children:e("users.inviteUserHint")})]}),t.formState.errors.root&&r.jsx(ae,{variant:"error",dismissible:!1,className:"text-balance",children:t.formState.errors.root.message}),r.jsxs("div",{className:"flex flex-col gap-y-4",children:[r.jsx("div",{className:"grid grid-cols-2 gap-4",children:r.jsx(p.Field,{control:t.control,name:"email",render:({field:m})=>r.jsxs(p.Item,{children:[r.jsx(p.Label,{children:e("fields.email")}),r.jsx(p.Control,{children:r.jsx(z,{...m})}),r.jsx(p.ErrorMessage,{})]})})}),r.jsx("div",{className:"flex items-center justify-end",children:r.jsx(q,{size:"small",variant:"secondary",type:"submit",isLoading:T,children:e("users.sendInvite")})})]}),r.jsxs("div",{className:"flex flex-col gap-y-4",children:[r.jsx(w,{level:"h2",children:e("users.pendingInvites")}),r.jsx(B,{className:"overflow-hidden p-0",children:r.jsx(G,{table:E,columns:b,count:o,pageSize:j,pagination:!0,search:"autofocus",isLoading:l,queryObject:a,orderBy:[{key:"email",label:e("fields.email")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})})]})]})})})]})})},ue=({invite:e})=>{const{mutateAsync:t}=J(e.id),{mutateAsync:a}=Q(e.id),s=te(),{t:i}=_(),o=async()=>{await s({title:i("general.areYouSure"),description:i("users.deleteInviteWarning",{email:e.email}),cancelText:i("actions.cancel"),confirmText:i("actions.delete")})&&await t()},l=async()=>{await a()},c=()=>{const d=`${me}${e.token}`;(0,ce.default)(d)};return r.jsx($,{groups:[{actions:[{icon:r.jsx(ee,{}),label:i("users.resendInvite"),onClick:l}]},{actions:[{icon:r.jsx(S,{}),label:i("users.copyInviteLink"),onClick:c}]},{actions:[{icon:r.jsx(re,{}),label:i("actions.delete"),onClick:o}]}]})},g=se(),fe=()=>{const{t:e}=_();return n.useMemo(()=>[g.accessor("email",{header:e("fields.email"),cell:({getValue:t})=>t()}),g.accessor("accepted",{header:e("fields.status"),cell:({getValue:t,row:a})=>{const s=t(),i=new Date(a.original.expires_at)<new Date;return s?r.jsx(h,{content:e("users.acceptedOnDate",{date:u(new Date(a.original.updated_at),"dd MMM, yyyy")}),children:r.jsx(y,{color:"green",children:e("users.inviteStatus.accepted")})}):i?r.jsx(h,{content:e("users.expiredOnDate",{date:u(new Date(a.original.expires_at),"dd MMM, yyyy")}),children:r.jsx(y,{color:"red",children:e("users.inviteStatus.expired")})}):r.jsx(h,{content:r.jsx(Y,{i18nKey:"users.validFromUntil",components:[r.jsx("span",{className:"font-medium"},"from"),r.jsx("span",{className:"font-medium"},"untill")],values:{from:u(new Date(a.original.created_at),"dd MMM, yyyy"),until:u(new Date(a.original.expires_at),"dd MMM, yyyy")}}),children:r.jsx(y,{color:"orange",children:e("users.inviteStatus.pending")})})}}),g.display({id:"actions",cell:({row:t})=>r.jsx(ue,{invite:t.original})})],[e])},$e=()=>r.jsx(f,{children:r.jsx(pe,{})});export{$e as Component};
