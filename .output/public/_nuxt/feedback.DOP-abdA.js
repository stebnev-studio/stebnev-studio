import{b as _,c as d,_ as p}from"./entry.D_ny8HTx.js";import{u as i}from"./asyncData.CUuF9oys.js";import{d as l,Z as m,B as u,n as f,G as k,R as b,J as g,u as y,N as h}from"./swiper-vue.BGf882uR.js";const x=h(()=>d(()=>import("./Feedback.D5HgvyCu.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(a=>a.default||a)),v={class:"main bgBlack"},w=l({__name:"feedback",async setup(a){let e,t;const{$ScrollTrigger:n}=_(),{data:c}=([e,t]=m(async()=>i("page",async()=>{const[o]=await Promise.all([$fetch("https://stebnev-studio.ru/api/wp-json/wp/v2/pages?slug=form")]);return{data:o}})),e=await e,t(),e),s=c.value.data[0];return console.log(s),u(()=>{f(()=>{n.refresh()})}),(o,A)=>{const r=x;return k(),b("main",v,[g(r,{feedback:y(s).acf.feedback},null,8,["feedback"])])}}}),N=p(w,[["__scopeId","data-v-79dd6a8f"]]);export{N as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Feedback.D5HgvyCu.js","./entry.D_ny8HTx.js","./swiper-vue.BGf882uR.js","./swiper-vue.C8kddlLw.css","./entry.GI64rjja.css","./Feedback.qIi0i1hV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
