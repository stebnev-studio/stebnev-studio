import{a as g,c as m,b as S,_ as k}from"./entry.D_ny8HTx.js";import{u as d}from"./index.CXVCIj8V.js";import{d as M,a as L,B as T,n as I,G as a,R as r,U as e,a3 as l,J as u,I as $,a4 as _,$ as B,u as p,N as v,X as D,Y as E}from"./swiper-vue.BGf882uR.js";const N=v(()=>m(()=>import("./nuxt-link.B5fbHNff.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(t=>t.default||t)),P=v(()=>m(()=>import("./StebnevStudioOffer.DeY-k0pi.js"),__vite__mapDeps([5,2,3,1,4,6]),import.meta.url).then(t=>t.default||t)),z=t=>(D("data-v-5fe579b1"),t=t(),E(),t),A={class:"offer"},C={class:"offer__wrapper wrapper"},O={key:0,class:"offer__container container"},V={class:"offer__description"},R={class:"offer__text text-med"},H=z(()=>e("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0 6H14M14 6L8.68966 1M14 6L8.68966 11",stroke:"#0D0D0D"})],-1)),Y={class:"offer__container container stebnev-container"},j={class:"offer__back"},q=["poster"],G=["src"],J=["src"],Q=M({__name:"Offer",props:{to:{type:String},video:{type:String},poster:{type:String},title_stebnev:{type:String},subtitle:{type:String}},setup(t){const{$gsap:n}=S(),{to:U,video:X,poster:F,title_stebnev:h,subtitle:K}=t;console.log(h);const c=L(null),b=d("(min-width: 340px) and (max-width: 767.5px)"),y=g();return T(async()=>{if(!d("(min-width: 340px) and (max-width: 767.5px)").value&&!document.querySelector(".offer__stebnev")){await I(),c.value=f(c);const s=n.utils.toArray(".offer__title span");n.fromTo(s,{clipPath:"inset(100% 0% 0% 0%)",transform:"translateY(-25px)"},{stagger:.065,clipPath:"inset(0% 0% 0% 0%)",transform:"translateY(0)"}),n.set(".offer__text",{opacity:0,blur:100}),n.to(".offer__text",{opacity:1,blur:0,duration:.2},"+=0.025")}function f(s){let i=s.value,x=i.innerHTML;return i.innerHTML=x.split(" ").map(w=>`<span>${w}</span>`).join(" ")}}),(o,f)=>{const s=N,i=P;return a(),r("div",A,[e("div",{class:B(["offer__front",{mix:p(y).fullPath=="/about"}])},[e("div",C,[t.to?(a(),r("div",O,[e("h1",{class:"offer__title t1",ref_key:"title",ref:c},[l(o.$slots,"offerTitle",{},void 0,!0)],512),e("div",V,[e("span",R,[l(o.$slots,"offerDescription",{},void 0,!0)]),u(s,{to:t.to,class:"offer__link btn-text-big"},{default:$(()=>[t.to?l(o.$slots,"offerButton",{key:0},void 0,!0):_("",!0),H]),_:3},8,["to"])])])):_("",!0),t.to?_("",!0):l(o.$slots,"StebnevStudio",{key:1},()=>[e("div",Y,[u(i,{class:"offer__stebnev",title_stebnev:t.title_stebnev,subtitle:t.subtitle},null,8,["title_stebnev","subtitle"])])],!0)])],2),e("div",j,[p(b)?(a(),r("img",{key:1,src:t.poster},null,8,J)):(a(),r("video",{key:0,autoplay:"",muted:"",loop:"",poster:t.poster},[e("source",{src:t.video,type:"video/mp4"},null,8,G)],8,q))])])}}}),et=k(Q,[["__scopeId","data-v-5fe579b1"]]);export{et as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./nuxt-link.B5fbHNff.js","./entry.D_ny8HTx.js","./swiper-vue.BGf882uR.js","./swiper-vue.C8kddlLw.css","./entry.GI64rjja.css","./StebnevStudioOffer.DeY-k0pi.js","./StebnevStudioOffer.iwd8lbpX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
