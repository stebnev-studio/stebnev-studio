import{d,G as s,R as _,U as t,W as w,V as o,J as h,u as a,a0 as f,a1 as x,H as b,a4 as $,I as N,a5 as k,a6 as y,X as B,Y as V}from"./swiper-vue.BGf882uR.js";import{_ as u}from"./entry.D_ny8HTx.js";import{u as j}from"./index.CXVCIj8V.js";const E={class:"number-item"},M={class:"number-item__first numeral-big"},O={class:"number-item__title t3"},C={class:"number-item__description ts"},F=d({__name:"ElementsFirstNumberItem",props:{item:{type:Object}},setup(e){return(n,m)=>{var i,r,c;return s(),_("div",E,[t("div",M,[w(o((i=e.item)==null?void 0:i.number)+" ",1),t("div",O,o((r=e.item)==null?void 0:r.title),1),t("div",C,o((c=e.item)==null?void 0:c.description),1)])])}}}),G=u(F,[["__scopeId","data-v-96cb04d6"]]),H={class:"number-item"},L={class:"number-item__first numeral-small"},T={class:"number-item__title t3"},D={class:"number-item__description ts"},J=d({__name:"NumbersItem",props:{item:{type:Object||void 0}},setup(e){return(n,m)=>{var i,r,c;return s(),_("div",H,[t("div",L,[w(o((i=e.item)==null?void 0:i.number)+" ",1),t("div",T,o((r=e.item)==null?void 0:r.title),1),t("div",D,o((c=e.item)==null?void 0:c.description),1)])])}}}),Q=u(J,[["__scopeId","data-v-ee6cc79d"]]),R={class:"numbers-grid"},U={class:"numbers-grid__first"},W={key:1,class:"numbers-grid__slider"},X=d({__name:"NumbersGrid",props:{numbers:Object},setup(e){const{numbers:n}=e,m=j("(min-width: 340px) and (max-width: 767.5px)"),i=n==null?void 0:n[0],r=n==null?void 0:n.slice(1);return(c,te)=>{const g=G,v=Q,I=k,S=y;return s(),_("div",R,[t("div",U,[h(g,{item:a(i)},null,8,["item"])]),a(m)?$("",!0):(s(!0),_(f,{key:0},x(a(r),(l,p)=>(s(),b(v,{class:"numbers-grid__item",item:l,key:p},null,8,["item"]))),128)),a(m)?(s(),_("div",W,[h(S,{class:"numbers-grid__swiper","space-between":"40px"},{default:N(()=>[(s(!0),_(f,null,x(a(r),(l,p)=>(s(),b(I,{class:"numbers-grid__swiper"},{default:N(()=>[(s(),b(v,{class:"numbers-grid__item",item:l,key:p},null,8,["item"]))]),_:2},1024))),256))]),_:1})])):$("",!0)])}}}),Y=u(X,[["__scopeId","data-v-2e442d2b"]]),q=e=>(B("data-v-954d6dee"),e=e(),V(),e),z={class:"numbers"},A={class:"numbers__wrapper wrapper"},K={class:"numbers__container container"},P=q(()=>t("span",{class:"numbers__subtitle ts"},"/ Цифры",-1)),Z=["innerHTML"],ee=d({__name:"Numbers",props:{numbers:Object,title:String},setup(e){return(n,m)=>{const i=Y;return s(),_("div",z,[t("div",A,[t("div",K,[P,t("h2",{class:"numbers__title t2",innerHTML:e.title},null,8,Z),h(i,{class:"numbers__grid",numbers:e.numbers},null,8,["numbers"])])])])}}}),re=u(ee,[["__scopeId","data-v-954d6dee"]]);export{re as default};
