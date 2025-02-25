import{bZ as G,b_ as m,r as i,j as u,b$ as O,c0 as _,c1 as E,c2 as P,c3 as b,c4 as H,c5 as $,c6 as K,c7 as Z,c8 as U,c9 as V,ca as W,cb as q,cc as z,cd as B,ce as J,cf as Q}from"./index-DwAumO4s.js";var R="Popover",[w,ae]=G(R,[m]),g=m(),[X,d]=w(R),j=e=>{const{__scopePopover:n,children:t,open:s,defaultOpen:o,onOpenChange:r,modal:a=!1}=e,c=g(n),p=i.useRef(null),[l,h]=i.useState(!1),[C=!1,f]=z({prop:s,defaultProp:o,onChange:r});return u.jsx(B,{...c,children:u.jsx(X,{scope:n,contentId:J(),triggerRef:p,open:C,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(x=>!x),[f]),hasCustomAnchor:l,onCustomAnchorAdd:i.useCallback(()=>h(!0),[]),onCustomAnchorRemove:i.useCallback(()=>h(!1),[]),modal:a,children:t})})};j.displayName=R;var F="PopoverAnchor",N=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(F,t),r=g(t),{onCustomAnchorAdd:a,onCustomAnchorRemove:c}=o;return i.useEffect(()=>(a(),()=>c()),[a,c]),u.jsx(O,{...r,...s,ref:n})});N.displayName=F;var y="PopoverTrigger",S=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(y,t),r=g(t),a=_(n,o.triggerRef),c=u.jsx(E.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":L(o.open),...s,ref:a,onClick:P(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?c:u.jsx(O,{asChild:!0,...r,children:c})});S.displayName=y;var A="PopoverPortal",[Y,ee]=w(A,{forceMount:void 0}),D=e=>{const{__scopePopover:n,forceMount:t,children:s,container:o}=e,r=d(A,n);return u.jsx(Y,{scope:n,forceMount:t,children:u.jsx(b,{present:t||r.open,children:u.jsx(Q,{asChild:!0,container:o,children:s})})})};D.displayName=A;var v="PopoverContent",M=i.forwardRef((e,n)=>{const t=ee(v,e.__scopePopover),{forceMount:s=t.forceMount,...o}=e,r=d(v,e.__scopePopover);return u.jsx(b,{present:s||r.open,children:r.modal?u.jsx(oe,{...o,ref:n}):u.jsx(re,{...o,ref:n})})});M.displayName=v;var oe=i.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),s=i.useRef(null),o=_(n,s),r=i.useRef(!1);return i.useEffect(()=>{const a=s.current;if(a)return H(a)},[]),u.jsx($,{as:K,allowPinchZoom:!0,children:u.jsx(T,{...e,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,a=>{var c;a.preventDefault(),r.current||(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,p=c.button===0&&c.ctrlKey===!0,l=c.button===2||p;r.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:P(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})})}),re=i.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),s=i.useRef(!1),o=i.useRef(!1);return u.jsx(T,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var a,c;(a=e.onCloseAutoFocus)==null||a.call(e,r),r.defaultPrevented||(s.current||(c=t.triggerRef.current)==null||c.focus(),r.preventDefault()),s.current=!1,o.current=!1},onInteractOutside:r=>{var p,l;(p=e.onInteractOutside)==null||p.call(e,r),r.defaultPrevented||(s.current=!0,r.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const a=r.target;((l=t.triggerRef.current)==null?void 0:l.contains(a))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&o.current&&r.preventDefault()}})}),T=i.forwardRef((e,n)=>{const{__scopePopover:t,trapFocus:s,onOpenAutoFocus:o,onCloseAutoFocus:r,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:p,onFocusOutside:l,onInteractOutside:h,...C}=e,f=d(v,t),x=g(t);return Z(),u.jsx(U,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:o,onUnmountAutoFocus:r,children:u.jsx(V,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:h,onEscapeKeyDown:c,onPointerDownOutside:p,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),children:u.jsx(W,{"data-state":L(f.open),role:"dialog",id:f.contentId,...x,...C,ref:n,style:{...C.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),k="PopoverClose",I=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(k,t);return u.jsx(E.button,{type:"button",...s,ref:n,onClick:P(e.onClick,()=>o.onOpenChange(!1))})});I.displayName=k;var te="PopoverArrow",ne=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=g(t);return u.jsx(q,{...o,...s,ref:n})});ne.displayName=te;function L(e){return e?"open":"closed"}var ce=j,ie=N,ue=S,pe=D,le=M,de=I;export{ie as A,le as C,pe as P,ce as R,ue as T,de as a};
