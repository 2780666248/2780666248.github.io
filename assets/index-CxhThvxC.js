import{N as Y,M as J,r as M,a6 as H,U as P,b9 as Z,ct as ee,bc as te,u as ne,cu as re,$ as B,C as x,z as F,ay as le,ac as ue}from"./index-DsoBdpPh.js";function W(e){return ee()?(te(e),!0):!1}function O(e){return typeof e=="function"?e():ne(e)}const I=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ae=Object.prototype.toString,se=e=>ae.call(e)==="[object Object]",$=()=>{};function ie(e,r){function t(...s){return new Promise((n,u)=>{Promise.resolve(e(()=>r.apply(this,s),{fn:r,thisArg:this,args:s})).then(n).catch(u)})}return t}const G=e=>e();function oe(e=G){const r=M(!0);function t(){r.value=!1}function s(){r.value=!0}const n=(...u)=>{r.value&&e(...u)};return{isActive:J(r),pause:t,resume:s,eventFilter:n}}function ce(e){return B()}function fe(...e){if(e.length!==1)return Y(...e);const r=e[0];return typeof r=="function"?J(re(()=>({get:r,set:$}))):M(r)}function de(e,r,t={}){const{eventFilter:s=G,...n}=t;return x(e,ie(s,r),n)}function ve(e,r,t={}){const{eventFilter:s,...n}=t,{eventFilter:u,pause:c,resume:i,isActive:o}=oe(s);return{stop:de(e,r,{...n,eventFilter:u}),pause:c,resume:i,isActive:o}}function K(e,r=!0,t){ce()?H(e,t):r?e():P(e)}function ke(e=!1,r={}){const{truthyValue:t=!0,falsyValue:s=!1}=r,n=Z(e),u=M(e);function c(i){if(arguments.length)return u.value=i,u.value;{const o=O(t);return u.value=u.value===o?O(s):o,u.value}}return n?c:[u,c]}function z(e){var r;const t=O(e);return(r=t==null?void 0:t.$el)!=null?r:t}const D=I?window:void 0,me=I?window.document:void 0;function j(...e){let r,t,s,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,s,n]=e,r=D):[r,t,s,n]=e,!r)return $;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const u=[],c=()=>{u.forEach(v=>v()),u.length=0},i=(v,d,S,m)=>(v.addEventListener(d,S,m),()=>v.removeEventListener(d,S,m)),o=x(()=>[z(r),O(n)],([v,d])=>{if(c(),!v)return;const S=se(d)?{...d}:d;u.push(...t.flatMap(m=>s.map(w=>i(v,m,w,S))))},{immediate:!0,flush:"post"}),f=()=>{o(),c()};return W(f),f}function pe(){const e=M(!1),r=B();return r&&H(()=>{e.value=!0},r),e}function Q(e){const r=pe();return F(()=>(r.value,!!e()))}function ge(e,r={}){const{window:t=D}=r,s=Q(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let n;const u=M(!1),c=f=>{u.value=f.matches},i=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",c):n.removeListener(c))},o=ue(()=>{s.value&&(i(),n=t.matchMedia(O(e)),"addEventListener"in n?n.addEventListener("change",c):n.addListener(c),u.value=n.matches)});return W(()=>{o(),i(),n=void 0}),u}const R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__",he=we();function we(){return T in R||(R[T]=R[T]||{}),R[T]}function U(e,r){return he[e]||r}function ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Se={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},V="vueuse-storage";function be(e,r,t,s={}){var n;const{flush:u="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:o=!0,mergeDefaults:f=!1,shallow:v,window:d=D,eventFilter:S,onError:m=a=>{console.error(a)},initOnMounted:w}=s,h=(v?le:M)(typeof r=="function"?r():r);if(!t)try{t=U("getDefaultStorage",()=>{var a;return(a=D)==null?void 0:a.localStorage})()}catch(a){m(a)}if(!t)return h;const y=O(r),l=ye(y),E=(n=s.serializer)!=null?n:Se[l],{pause:L,resume:p}=ve(h,()=>_(h.value),{flush:u,deep:c,eventFilter:S});d&&i&&K(()=>{j(d,"storage",b),j(d,V,N),w&&b()}),w||b();function k(a,g){d&&d.dispatchEvent(new CustomEvent(V,{detail:{key:e,oldValue:a,newValue:g,storageArea:t}}))}function _(a){try{const g=t.getItem(e);if(a==null)k(g,null),t.removeItem(e);else{const C=E.write(a);g!==C&&(t.setItem(e,C),k(g,C))}}catch(g){m(g)}}function A(a){const g=a?a.newValue:t.getItem(e);if(g==null)return o&&y!=null&&t.setItem(e,E.write(y)),y;if(!a&&f){const C=E.read(g);return typeof f=="function"?f(C,y):l==="object"&&!Array.isArray(C)?{...y,...C}:C}else return typeof g!="string"?g:E.read(g)}function b(a){if(!(a&&a.storageArea!==t)){if(a&&a.key==null){h.value=y;return}if(!(a&&a.key!==e)){L();try{(a==null?void 0:a.newValue)!==E.write(h.value)&&(h.value=A(a))}catch(g){m(g)}finally{a?P(p):p()}}}}function N(a){b(a.detail)}return h}function X(e){return ge("(prefers-color-scheme: dark)",e)}function Fe(e={}){const{selector:r="html",attribute:t="class",initialValue:s="auto",window:n=D,storage:u,storageKey:c="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:o,emitAuto:f,disableTransition:v=!0}=e,d={auto:"",light:"light",dark:"dark",...e.modes||{}},S=X({window:n}),m=F(()=>S.value?"dark":"light"),w=o||(c==null?fe(s):be(c,s,u,{window:n,listenToStorageChanges:i})),h=F(()=>w.value==="auto"?m.value:w.value),y=U("updateHTMLAttrs",(p,k,_)=>{const A=typeof p=="string"?n==null?void 0:n.document.querySelector(p):z(p);if(!A)return;let b;if(v&&(b=n.document.createElement("style"),b.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),n.document.head.appendChild(b)),k==="class"){const N=_.split(/\s/g);Object.values(d).flatMap(a=>(a||"").split(/\s/g)).filter(Boolean).forEach(a=>{N.includes(a)?A.classList.add(a):A.classList.remove(a)})}else A.setAttribute(k,_);v&&(n.getComputedStyle(b).opacity,document.head.removeChild(b))});function l(p){var k;y(r,t,(k=d[p])!=null?k:p)}function E(p){e.onChanged?e.onChanged(p,l):l(p)}x(h,E,{flush:"post",immediate:!0}),K(()=>E(h.value));const L=F({get(){return f?w.value:h.value},set(p){w.value=p}});try{return Object.assign(L,{store:w,system:m,state:h})}catch{return L}}function Ce(e={}){const{valueDark:r="dark",valueLight:t="",window:s=D}=e,n=Fe({...e,onChanged:(i,o)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,i==="dark",o,i):o(i)},modes:{dark:r,light:t}}),u=F(()=>n.system?n.system.value:X({window:s}).value?"dark":"light");return F({get(){return n.value==="dark"},set(i){const o=i?"dark":"light";u.value===o?n.value="auto":n.value=o}})}const q=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Me(e,r={}){const{document:t=me,autoExit:s=!1}=r,n=F(()=>{var l;return(l=z(e))!=null?l:t==null?void 0:t.querySelector("html")}),u=M(!1),c=F(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(l=>t&&l in t||n.value&&l in n.value)),i=F(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(l=>t&&l in t||n.value&&l in n.value)),o=F(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(l=>t&&l in t||n.value&&l in n.value)),f=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(l=>t&&l in t),v=Q(()=>n.value&&t&&c.value!==void 0&&i.value!==void 0&&o.value!==void 0),d=()=>f?(t==null?void 0:t[f])===n.value:!1,S=()=>{if(o.value){if(t&&t[o.value]!=null)return t[o.value];{const l=n.value;if((l==null?void 0:l[o.value])!=null)return!!l[o.value]}}return!1};async function m(){if(!(!v.value||!u.value)){if(i.value)if((t==null?void 0:t[i.value])!=null)await t[i.value]();else{const l=n.value;(l==null?void 0:l[i.value])!=null&&await l[i.value]()}u.value=!1}}async function w(){if(!v.value||u.value)return;S()&&await m();const l=n.value;c.value&&(l==null?void 0:l[c.value])!=null&&(await l[c.value](),u.value=!0)}async function h(){await(u.value?m():w())}const y=()=>{const l=S();(!l||l&&d())&&(u.value=l)};return j(t,q,y,!1),j(()=>z(n),q,y,!1),s&&W(m),{isSupported:v,isFullscreen:u,enter:w,exit:m,toggle:h}}export{Ce as a,ke as b,Me as u};
