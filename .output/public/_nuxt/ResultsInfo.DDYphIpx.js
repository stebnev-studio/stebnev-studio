import{c as n,_ as w}from"./entry.D_ny8HTx.js";import{d as v,i as I,G as o,R as r,U as t,V as a,J as _,I as l,a0 as y,a1 as C,H as E,u as c,a8 as L,a9 as R,N as i,X as z,Y as N}from"./swiper-vue.BGf882uR.js";const V=i(()=>n(()=>import("./ResultsContent.Trzwgy8c.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>e.default||e)),g=i(()=>n(()=>import("./swiper-vue.BGf882uR.js").then(e=>e.af),__vite__mapDeps([1,2]),import.meta.url).then(e=>e.SwiperSlide||e)),k=i(()=>n(()=>import("./swiper-vue.BGf882uR.js").then(e=>e.af),__vite__mapDeps([1,2]),import.meta.url).then(e=>e.Swiper||e)),B=e=>(z("data-v-1742b28a"),e=e(),N(),e),b={class:"results-info"},x={class:"results-info__wrapper wrapper"},A={class:"results-info__container container"},D={class:"results-info__header"},O=B(()=>t("span",{class:"results-info__subtitle ts"}," / Результаты ",-1)),P={class:"results-info__title t2"},T={class:"results-info__footer"},j={class:"results-info__description text-med"},F=v({__name:"ResultsInfo",props:{results:Object},setup(e){const p=I("riSwiper");function u(s){p.value=s}return(s,G)=>{const d=V,m=g,f=k;return o(),r("div",b,[t("div",x,[t("div",A,[t("div",D,[O,t("h2",P,a(e.results.title),1)]),_(f,{modules:["SwiperNavigation"in s?s.SwiperNavigation:c(L),"SwiperController"in s?s.SwiperController:c(R)],"free-mode":!0,class:"results-info__swiper",loop:!0,onInit:u},{default:l(()=>[(o(!0),r(y,null,C(e.results.slides,(h,S)=>(o(),E(m,{class:"results-info__content",key:S},{default:l(()=>[_(d,{item:h},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["modules"]),t("div",T,[t("p",j,a(e.results.description),1)])])])])}}}),U=w(F,[["__scopeId","data-v-1742b28a"]]);export{U as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ResultsContent.Trzwgy8c.js","./swiper-vue.BGf882uR.js","./swiper-vue.C8kddlLw.css","./entry.D_ny8HTx.js","./entry.GI64rjja.css","./ResultsContent.BsYI6x8Q.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}