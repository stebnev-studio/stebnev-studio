import{d as b,G as c,R as r,U as t,V as i,X as f,Y as x,J as u,H as p,a4 as h}from"./swiper-vue.BGf882uR.js";import{_ as d}from"./entry.D_ny8HTx.js";import S from"./Ticker.C1MfvWfj.js";import $ from"./nuxt-img.B3xkUJb-.js";import"./vue.f36acd1f.CDiEBgF1.js";const g=e=>(f("data-v-ba7b19b3"),e=e(),x(),e),k={class:"about-service-header"},w={class:"about-service-header__wrapper wrapper"},B={class:"about-service-header__container container"},I=g(()=>t("span",{class:"about-service-header__subtitle ts"},"/ Об услуге",-1)),A={class:"about-service-header__title t2"},C=["innerHTML"],H=b({__name:"AboutServiceHeader",props:{title:String,description:String},setup(e){return(l,v)=>(c(),r("div",k,[t("div",w,[t("div",B,[I,t("h2",A,i(e.title),1),t("p",{class:"about-service-header__description text-med",innerHTML:e.description},null,8,C)])])]))}}),j=d(H,[["__scopeId","data-v-ba7b19b3"]]),y={class:"stebnev-cite"},N={class:"stebnev-cite__description text-med"},O={class:"stebnev-cite__content"},V={class:"stebnev-cite__photo"},T={class:"stebnev-cite__bio"},L={class:"stebnev-cite__name t3"},M={class:"stebnev-cite__owner"},q=b({__name:"StebnevCite",props:{stebnev:String,fio:String,text:String,img:String||void 0},setup(e){return(l,v)=>{const s=$;return c(),r("div",y,[t("div",N,i(e.text),1),t("div",O,[t("div",V,[u(s,{class:"stebnev-cite__img",src:e.img},null,8,["src"])]),t("div",T,[t("span",L,i(e.fio),1),t("span",M,i(e.stebnev),1)])])])}}}),D=d(q,[["__scopeId","data-v-187a804b"]]),E={class:"about-service-content"},G={class:"about-service-content__wrapper wrapper"},J={class:"about-service-content__container container"},R={class:"about-service-content__title t2"},U=b({__name:"AboutServiceContent",props:{cite:{type:Object,required:!0}},setup(e){return(l,v)=>{var _,a,n,o,m;const s=D;return c(),r("div",E,[t("div",G,[t("div",J,[t("h2",R,i((_=e.cite)==null?void 0:_.title),1),u(s,{class:"about-service-content__cite",text:(a=e.cite)==null?void 0:a.text,fio:(n=e.cite)==null?void 0:n.fio,stebnev:(o=e.cite)==null?void 0:o.stebnev,img:(m=e.cite)==null?void 0:m.image},null,8,["text","fio","stebnev","img"])])])])}}}),X=d(U,[["__scopeId","data-v-1f5cf0c8"]]),Y={class:"about-service"},z={__name:"AboutService",props:{ticker:Object,stebnev:Boolean,info:Object,cite:Object},setup(e){return(l,v)=>{var n,o;const s=j,_=S,a=X;return c(),r("div",Y,[u(s,{title:(n=e.info)==null?void 0:n.title,description:(o=e.info)==null?void 0:o.description},null,8,["title","description"]),e.ticker.enabled?(c(),p(_,{key:0,class:"about-service__ticker",words:e.ticker.words},null,8,["words"])):h("",!0),e.stebnev?(c(),p(a,{key:1,class:"about-service__content",cite:e.cite},null,8,["cite"])):h("",!0)])}}},Z=d(z,[["__scopeId","data-v-f55b1e4e"]]);export{Z as default};
