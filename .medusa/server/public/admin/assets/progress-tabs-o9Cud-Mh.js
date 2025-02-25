import{r as o,bZ as $,cW as w,cX as z,cc as H,j as u,ce as K,c1 as v,cY as B,cZ as W,c2 as T,c3 as Z,m,aO as q,c_ as X}from"./index-DwAumO4s.js";var Y=Object.defineProperty,p=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,J=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&_(e,a,t[a]);if(p)for(var a of p(t))E.call(t,a)&&_(e,a,t[a]);return e},Q=(e,t)=>{var a={};for(var r in e)C.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&p)for(var r of p(e))t.indexOf(r)<0&&E.call(e,r)&&(a[r]=e[r]);return a};const x=o.forwardRef((e,t)=>{var a=e,{color:r="currentColor"}=a,s=Q(a,["color"]);return o.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},s),o.createElement("g",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},o.createElement("path",{d:"M3.933 2.132a6.4 6.4 0 0 1 2.322-.956M1.17 6.283a6.4 6.4 0 0 1 .97-2.362M3.933 12.868c.691.46 1.477.791 2.322.956M1.17 8.717c.165.86.5 1.66.97 2.362M8.745 1.176c.845.165 1.63.496 2.322.956M12.86 3.921a6.4 6.4 0 0 1 .97 2.362M8.745 13.824a6.4 6.4 0 0 0 2.322-.956M12.86 11.079c.47-.703.805-1.502.97-2.362"})),o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});x.displayName="CircleDottedLine";var h="Tabs",[U,ne]=$(h,[w]),y=w(),[ee,P]=U(h),I=o.forwardRef((e,t)=>{const{__scopeTabs:a,value:r,onValueChange:s,defaultValue:l,orientation:n="horizontal",dir:d,activationMode:g="automatic",...b}=e,c=z(d),[i,f]=H({prop:r,onChange:s,defaultProp:l});return u.jsx(ee,{scope:a,baseId:K(),value:i,onValueChange:f,orientation:n,dir:c,activationMode:g,children:u.jsx(v.div,{dir:c,"data-orientation":n,...b,ref:t})})});I.displayName=h;var N="TabsList",M=o.forwardRef((e,t)=>{const{__scopeTabs:a,loop:r=!0,...s}=e,l=P(N,a),n=y(a);return u.jsx(B,{asChild:!0,...n,orientation:l.orientation,dir:l.dir,loop:r,children:u.jsx(v.div,{role:"tablist","aria-orientation":l.orientation,...s,ref:t})})});M.displayName=N;var R="TabsTrigger",j=o.forwardRef((e,t)=>{const{__scopeTabs:a,value:r,disabled:s=!1,...l}=e,n=P(R,a),d=y(a),g=A(n.baseId,r),b=L(n.baseId,r),c=r===n.value;return u.jsx(W,{asChild:!0,...d,focusable:!s,active:c,children:u.jsx(v.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":b,"data-state":c?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:g,...l,ref:t,onMouseDown:T(e.onMouseDown,i=>{!s&&i.button===0&&i.ctrlKey===!1?n.onValueChange(r):i.preventDefault()}),onKeyDown:T(e.onKeyDown,i=>{[" ","Enter"].includes(i.key)&&n.onValueChange(r)}),onFocus:T(e.onFocus,()=>{const i=n.activationMode!=="manual";!c&&!s&&i&&n.onValueChange(r)})})})});j.displayName=R;var S="TabsContent",O=o.forwardRef((e,t)=>{const{__scopeTabs:a,value:r,forceMount:s,children:l,...n}=e,d=P(S,a),g=A(d.baseId,r),b=L(d.baseId,r),c=r===d.value,i=o.useRef(c);return o.useEffect(()=>{const f=requestAnimationFrame(()=>i.current=!1);return()=>cancelAnimationFrame(f)},[]),u.jsx(Z,{present:s||c,children:({present:f})=>u.jsx(v.div,{"data-state":c?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":g,hidden:!f,id:b,tabIndex:0,...n,ref:t,style:{...e.style,animationDuration:i.current?"0s":void 0},children:f&&l})})});O.displayName=S;function A(e,t){return`${e}-trigger-${t}`}function L(e,t){return`${e}-content-${t}`}var te=I,ae=M,re=j,oe=O;const D=e=>o.createElement(te,{...e});D.displayName="ProgressTabs";const F=({status:e,className:t,...a})=>{const r=o.useMemo(()=>{switch(e){case"not-started":return x;case"in-progress":return X;case"completed":return q;default:return x}},[e]);return o.createElement("span",{className:m("text-ui-fg-muted group-data-[state=active]/trigger:text-ui-fg-interactive",t),...a},o.createElement(r,null))};F.displayName="ProgressTabs.ProgressIndicator";const V=o.forwardRef(({className:e,children:t,status:a="not-started",...r},s)=>o.createElement(re,{ref:s,className:m("txt-compact-small-plus transition-fg text-ui-fg-muted bg-ui-bg-subtle border-r-ui-border-base inline-flex h-[52px] w-full max-w-[200px] flex-1 items-center gap-x-2 border-r px-4 text-left outline-none","group/trigger overflow-hidden text-ellipsis whitespace-nowrap","disabled:bg-ui-bg-disabled disabled:text-ui-fg-muted","hover:bg-ui-bg-subtle-hover","focus-visible:bg-ui-bg-base focus:z-[1]","data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base",e),...r},o.createElement(F,{status:a}),t));V.displayName="ProgressTabs.Trigger";const k=o.forwardRef(({className:e,...t},a)=>o.createElement(ae,{ref:a,className:m("flex items-center",e),...t}));k.displayName="ProgressTabs.List";const G=o.forwardRef(({className:e,...t},a)=>o.createElement(oe,{ref:a,className:m("outline-none",e),...t}));G.displayName="ProgressTabs.Content";const ie=Object.assign(D,{Trigger:V,List:k,Content:G});export{ie as P};
