import{d as l,G as a,R as n,U as e,V as _,X as r,Y as f,a3 as v,J as q,I as x,a0 as A,a1 as w,u as $,H as I,$ as F}from"./swiper-vue.BGf882uR.js";import{_ as i}from"./entry.D_ny8HTx.js";const p=t=>(r("data-v-866a1183"),t=t(),f(),t),g={class:"faq-item"},S={class:"faq-item__header"},k={class:"faq-item__title tex-med"},B=p(()=>e("svg",{class:"faq-item__close",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4.68555 16.0002H27.313M15.9993 4.68652V27.3139",stroke:"#FAFAFA"})],-1)),C=p(()=>e("div",{class:"faq-item__line"},null,-1)),Q={class:"faq-item__content"},V={class:"faq-item__text"},b=l({__name:"FAQItem",props:{title:String,text:String,isActive:Boolean},setup(t){return(o,d)=>(a(),n("div",g,[e("div",S,[e("p",k,_(t.title),1),B,C]),e("div",Q,[e("p",V,_(t.text),1)])]))}}),y=i(b,[["__scopeId","data-v-866a1183"]]),E={},H={class:"faq-content"};function M(t,o){return a(),n("div",H,[v(t.$slots,"default",{},void 0,!0)])}const N=i(E,[["render",M],["__scopeId","data-v-5fe8c261"]]),j=t=>(r("data-v-dafa23f4"),t=t(),f(),t),z={class:"faq"},D={class:"faq__wrapper wrapper"},G={class:"faq__container container"},J=j(()=>e("span",{class:"faq__subtitle ts"}," / Вопросы ",-1)),L={class:"faq__title t2"},O=l({__name:"FAQ",props:{faq:{type:Object}},setup(t){const{faq:o}=t,d=o.list;function h(c){return c.isActive=!c.isActive}return(c,R)=>{const u=y,m=N;return a(),n("div",z,[e("div",D,[e("div",G,[J,e("h2",L,_(t.faq.title),1),q(m,{class:"faq__content"},{default:x(()=>[(a(!0),n(A,null,w($(d),(s,U)=>(a(),I(u,{title:s.question,text:s.answer,onClick:X=>h(s),class:F({open:s.isActive}),isActive:s.isActive},null,8,["title","text","onClick","class","isActive"]))),256))]),_:1})])])])}}}),P=i(O,[["__scopeId","data-v-dafa23f4"]]);export{P as default};