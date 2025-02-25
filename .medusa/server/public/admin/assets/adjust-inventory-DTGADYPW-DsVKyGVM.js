import{S as q,b as _,e6 as L,aX as w,j as e,H as S,a6 as F,aj as I,ad as N,ae as A,ed as T,t as f,x as r,y as z,B as p,T as g}from"./index-DwAumO4s.js";import{K as C}from"./chunk-CEEYZHMN-BKk6bsNv.js";import{b as i,u as E}from"./chunk-MDIOSTKB-6EE6lyQn.js";import"./prompt-CYx1Z627.js";var d=({title:a,value:t})=>e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(g,{className:"px-2 py-1.5",size:"small",leading:"compact",children:a}),e.jsx(g,{className:"px-2 py-1.5",size:"small",leading:"compact",children:t})]}),R=({item:a,level:t,location:m})=>{const{t:s}=_(),{handleSuccess:l}=E(),x=F({stocked_quantity:I().min(t.reserved_quantity)}),o=N({defaultValues:{stocked_quantity:t.stocked_quantity},resolver:A(x)}),c=o.watch("stocked_quantity"),{mutateAsync:u,isPending:y}=T(a.id,t.location_id),v=o.handleSubmit(async n=>{if(n.stocked_quantity===t.stocked_quantity)return l();await u({stocked_quantity:n.stocked_quantity},{onSuccess:()=>{f.success(s("inventory.toast.updateLevel")),l()},onError:j=>{f.error(j.message)}})});return e.jsx(i.Form,{form:o,children:e.jsxs(C,{onSubmit:v,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(i.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-4 divide-y rounded-lg border",children:[e.jsx(d,{title:s("fields.title"),value:a.title??"-"}),e.jsx(d,{title:s("fields.sku"),value:a.sku}),e.jsx(d,{title:s("locations.domain"),value:m.name}),e.jsx(d,{title:s("inventory.reserved"),value:t.reserved_quantity}),e.jsx(d,{title:s("inventory.available"),value:c-t.reserved_quantity})]}),e.jsx(r.Field,{control:o.control,name:"stocked_quantity",render:({field:{onChange:n,value:j,...b}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s("fields.inStock")}),e.jsx(r.Control,{children:e.jsx(z,{type:"number",min:t.reserved_quantity,value:j||"",onChange:k=>{const h=k.target.value;n(h===""?null:parseFloat(h))},...b})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(i.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(i.Close,{asChild:!0,children:e.jsx(p,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(p,{type:"submit",size:"small",isLoading:y,children:s("actions.save")})]})})]})})},K=()=>{const{id:a,location_id:t}=q(),{t:m}=_(),{inventory_item:s,isPending:l,isError:x,error:o}=L(a),c=s==null?void 0:s.location_levels.find(n=>n.location_id===t),{stock_location:u,isLoading:y}=w(t),v=!l&&s&&c&&!y&&u;if(x)throw o;return e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx(S,{children:m("inventory.manageLocations")})}),v&&e.jsx(R,{item:s,level:c,location:u})]})};export{K as Component};
