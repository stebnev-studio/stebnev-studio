import{u as B,s as y,a as g,b as h,c as i,_ as A}from"./entry.D_ny8HTx.js";import{u as w}from"./asyncData.CUuF9oys.js";import{d as b,Z as x,B as E,n as u,_ as L,G as S,R as z,J as c,u as o,$ as H,N as l}from"./swiper-vue.BGf882uR.js";import{u as C}from"./index.CXVCIj8V.js";const P=l(()=>i(()=>import("./CasesOffer.CDnqC860.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(t=>t.default||t)),R=l(()=>i(()=>import("./CasesPortfolio.CH6kc_gA.js"),__vite__mapDeps([9,10,11,3,4,5,6,12,13,14,15]),import.meta.url).then(t=>t.default||t)),T=l(()=>i(()=>import("./Brief.CAq3fAG1.js"),__vite__mapDeps([16,2,3,4,5,6,12,17]),import.meta.url).then(t=>t.default||t)),D=b({__name:"cases",async setup(t){let s,_;const e=B();let{isBlack:f}=y(e);const p=C("(min-width: 340px) and (max-width: 767.5px)"),{$ScrollTrigger:a}=h(),{data:m}=([s,_]=x(async()=>w("page",async()=>{const[n]=await Promise.all([$fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=cases")]);return{data:n}})),s=await s,_(),s),r=m.value.data[0];return console.log(r),E(async()=>{await e.setIsBlack(!1),await u(),await a.refresh(),document.querySelector(".cases-offer")&&a.create({trigger:".cases-offer",start:"top center",end:"bottom center",onEnterBack(){e.setIsHeaderActive(!0),e.setIsBlack(!1)},onLeave(){e.setIsHeaderActive(!1),e.setIsBlack(!0)}}),document.querySelector(".portfolio")&&a.create({trigger:".portfolio",start:"top center",end:"bottom center",onEnter(){e.setIsBlack(!1)},onEnterBack(){e.setIsBlack(!1)},onLeaveBack(){e.setIsBlack(!0)},onLeave(){e.setIsBlack(!0)}}),document.querySelector(".brief")&&a.create({trigger:".brief",start:"top center",end:"bottom center",onEnter(){e.setIsHeaderActive(!0),e.setIsBlack(!0)},onLeave(){e.setIsBlack(!0),e.setIsHeaderActive(!0)},onLeaveBack(){e.setIsHeaderActive(!1),g().path=="/contact"?e.setIsHeaderActive(!0):e.setIsHeaderActive(!1)}})}),L(async()=>{await u(),await a.killAll(),await a.refresh()}),(n,d)=>{const v=P,I=R,k=T;return S(),z("main",{class:H(["main",{bgBlack:o(f),bgWhite:o(p)}])},[c(v,{class:"section-cases-offer",offer:o(r).acf.offer},null,8,["offer"]),c(I,{class:"section-cases-portfolio",cases:o(r).acf.cases.repeater},null,8,["cases"]),c(k,{class:"section-brief"})],2)}}}),N=A(D,[["__scopeId","data-v-19ea930d"]]);export{N as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CasesOffer.CDnqC860.js","./LinkAdditional.B9dt_DIj.js","./nuxt-link.B5fbHNff.js","./entry.D_ny8HTx.js","./swiper-vue.BGf882uR.js","./swiper-vue.C8kddlLw.css","./entry.GI64rjja.css","./LinkAdditional.BBhVKLje.css","./CasesOffer.DnIwg7eE.css","./CasesPortfolio.CH6kc_gA.js","./PortfolioContent.CsBxP5Uv.js","./PortfolioContentItem.DC4XzhuL.js","./index.CXVCIj8V.js","./PortfolioContentItem.Dla5Nofk.css","./PortfolioContent.DbewEHom.css","./CasesPortfolio.DtEDYlGJ.css","./Brief.CAq3fAG1.js","./Brief.DRqArQuC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
