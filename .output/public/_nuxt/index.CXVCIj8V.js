import{c as u,q as p,x as m,u as v,a as c,E as h,B as w,g as y}from"./swiper-vue.BGf882uR.js";function M(e){return p()?(m(e),!0):!1}function d(e){return typeof e=="function"?e():v(e)}const g=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function N(e,o={}){const{method:r="parseFloat",radix:a,nanToZero:n}=o;return u(()=>{let t=d(e);return typeof t=="string"&&(t=Number[r](t,a)),n&&Number.isNaN(t)&&(t=0),t})}const S=g?window:void 0;function b(){const e=c(!1),o=y();return o&&w(()=>{e.value=!0},o),e}function E(e){const o=b();return u(()=>(o.value,!!e()))}function W(e,o={}){const{window:r=S}=o,a=E(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let n;const t=c(!1),s=l=>{t.value=l.matches},i=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",s):n.removeListener(s))},f=h(()=>{a.value&&(i(),n=r.matchMedia(d(e)),"addEventListener"in n?n.addEventListener("change",s):n.addListener(s),t.value=n.matches)});return M(()=>{f(),i(),n=void 0}),t}export{N as a,W as u};
