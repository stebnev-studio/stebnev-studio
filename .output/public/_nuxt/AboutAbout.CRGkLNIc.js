import p from"./nuxt-img.B3xkUJb-.js";import{a as m,_ as b}from"./entry.D_ny8HTx.js";import{u as h}from"./index.CXVCIj8V.js";import{d as l,G as n,R as a,U as e,u as o,a4 as c,H as d,V as u,J as x}from"./swiper-vue.BGf882uR.js";import"./vue.f36acd1f.CDiEBgF1.js";const f={class:"about-content"},v={class:"about-content__wrapper wrapper"},k={class:"about-content__container container"},y={key:0,class:"about-content__subtitle ts"},A={class:"about-content__wrapper wrapper"},g={class:"about-content__container container"},w={key:0,class:"about-content__subtitle ts"},B={class:"about-content__title t2"},C={class:"about-content__desc text-med"},N={class:"about-content__desc-additional text-med"},V=l({__name:"AboutContentAbout",props:{content:{type:Object,required:!0}},setup(t){const _=m(),s=h("(min-width: 340px) and (max-width: 767.5px)");return(i,q)=>{const r=p;return n(),a("div",f,[e("div",v,[e("div",k,[o(s)?(n(),a("span",y," / О нас ")):c("",!0)])]),o(_).path=="/about"&&o(s)?(n(),d(r,{key:0,class:"about-content__img",src:t.content.image},null,8,["src"])):c("",!0),e("div",A,[e("div",g,[o(s)?c("",!0):(n(),a("span",w," / О нас ")),o(_).path=="/about"&&!o(s)?(n(),d(r,{key:1,class:"about-content__img",src:t.content.image},null,8,["src"])):c("",!0),e("h2",B,u(t.content.title),1),e("div",C,u(t.content.first_description),1),e("div",N,u(t.content.second_description),1)])])])}}}),I=b(V,[["__scopeId","data-v-a390431b"]]),$={class:"about"},j=l({__name:"AboutAbout",props:{about:{type:Object,required:!0}},setup(t){return(_,s)=>{const i=I;return n(),a("div",$,[x(i,{class:"about__content",content:t.about},null,8,["content"])])}}}),G=b(j,[["__scopeId","data-v-0ebe9bd7"]]);export{G as default};