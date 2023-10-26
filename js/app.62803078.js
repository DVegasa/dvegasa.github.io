(function(){"use strict";var t={7982:function(t,e,n){var o=n(9242),r=n(3396);function a(t,e,n,o,a,s){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i,{id:"router-view"})}var s={mounted(){document.title="dvegasa"},watch:{$route:{immediate:!0,handler(t){let e="";"~errorLabel"===t.meta.title?e=t.meta.errorLabel:t.meta.title&&(e=t.meta.title),document.title=e+" | dvegasa"}}}},i=n(89);const c=(0,i.Z)(s,[["render",a]]);var l=c,u=n(678);const d=t=>((0,r.dD)("data-v-d38a4060"),t=t(),(0,r.Cn)(),t),p={class:"main"},v={class:"center"},h={class:"screen-1"},f={class:"content"},m={class:"left"},g=["src"],b={class:"right"},w=d((()=>(0,r._)("div",{class:"prodDev"},"Продуктовый full-stack разработчик",-1))),x=d((()=>(0,r._)("div",{class:"name"},"Эдуард Халтурин",-1))),y=d((()=>(0,r._)("div",{class:"shortDesc"},[(0,r.Uk)(" Работаю с системным подходом. Проявляю разумную инициативу. "),(0,r._)("br"),(0,r.Uk)(" Люблю своё дело. ")],-1))),_={class:"buttons"};function k(t,e,o,a,s,i){const c=(0,r.up)("Button");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("div",v,[(0,r._)("div",h,[(0,r._)("div",f,[(0,r._)("div",m,[(0,r._)("img",{alt:"My photo",src:n(3862),height:"220"},null,8,g)]),(0,r._)("div",b,[w,x,y,(0,r._)("div",_,[(0,r.Wm)(c,{link:"cv",text:"Скачать резюме",type:"primary",id:"downloadCv",external:"true"}),(0,r.Wm)(c,{icon:"akar-icons:github-fill",type:"secondary",link:"https://github.com/DVegasa",newTab:"true",external:"true"}),(0,r.Wm)(c,{link:"https://telegram.me/dvegasa",newTab:"true",icon:"bxl:telegram",type:"secondary",external:"true"}),(0,r.Wm)(c,{link:"mailto:ed.khalturin@gmail.com",icon:"ic:outline-alternate-email",type:"secondary",external:"true"})])])])])])])}var C=n(7139);const O=["href","target"];function L(t,e,n,o,a,s){const i=(0,r.up)("Icon"),c=(0,r.up)("router-link");return n.external?((0,r.wg)(),(0,r.iD)("a",{key:0,class:(0,C.C_)(["button",s.typeClass]),onMouseover:e[0]||(e[0]=t=>a.isHovered=!0),onMouseleave:e[1]||(e[1]=t=>a.isHovered=!1),href:n.link,target:n.newTab?"_blank":""},[n.icon?((0,r.wg)(),(0,r.j4)(i,{key:0,class:"icon",icon:n.icon},null,8,["icon"])):(0,r.kq)("",!0),s.showText?((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,C.C_)(["text",s.textClass])},(0,C.zw)(n.text),3)):(0,r.kq)("",!0)],42,O)):((0,r.wg)(),(0,r.j4)(c,{key:1,class:(0,C.C_)(["button",s.typeClass]),onMouseover:e[2]||(e[2]=t=>a.isHovered=!0),onMouseleave:e[3]||(e[3]=t=>a.isHovered=!1),to:n.link,target:n.newTab?"_blank":""},{default:(0,r.w5)((()=>[n.icon?((0,r.wg)(),(0,r.j4)(i,{key:0,class:"icon",icon:n.icon},null,8,["icon"])):(0,r.kq)("",!0),s.showText?((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,C.C_)(["text",s.textClass])},(0,C.zw)(n.text),3)):(0,r.kq)("",!0)])),_:1},8,["class","to","target"]))}var T=n(6088),j={components:{Icon:T.JO},data(){return{isHovered:!1}},props:["text","icon","type","link","newTab","external"],computed:{typeClass(){return"type-"+this.type},textClass(){let t=[];return this.text&&!this.icon&&t.push("textOnly"),this.text&&this.icon&&t.push("textWithIcon"),t.push("text-"+this.type),t},expandable(){return!1},showText(){return!(this.expandable||!this.text)||!(!this.expandable||!this.isHovered)}}};const D=(0,i.Z)(j,[["render",L],["__scopeId","data-v-9f8cd71a"]]);var I=D,M={components:{Button:I},methods:{scrollDown(){console.log("clicked"),document.getElementById("scrollPoint").scrollIntoView()}}};const Z=(0,i.Z)(M,[["render",k],["__scopeId","data-v-d38a4060"]]);var P=Z;const U={class:"errorPage"},H={class:"center"},B={class:"number noselect"};function W(t,e,n,o,a,s){const i=(0,r.up)("Button");return(0,r.wg)(),(0,r.iD)("div",U,[(0,r._)("div",H,[(0,r._)("div",B,(0,C.zw)(s.getLabel),1),(0,r.Wm)(i,{text:"Вернуться на главную",type:"secondary",link:"/"})])])}var q={components:{Button:I},props:["label","title"],mounted(){document.title=this.getLabel+" | dvegasa"},computed:{getLabel(){return this.label?this.label:this.$route.meta.errorLabel??""}}};const E=(0,i.Z)(q,[["render",W],["__scopeId","data-v-bc19071c"]]);var R=E;const V={CV_URL:"https://drive.google.com/file/d/1HKAtFmZcGReYVL7Q8sNidvGesTF1IZNS/view",XP_URL:"https://docs.google.com/document/d/15PEcB9D5pG8sAzj43YspY0YUkq9fwFi1xno7ZY3ZZUM/edit?usp=sharing"};console.log(void 0);const Y=[{path:"/",component:P,meta:{title:"Главная"}},{path:"/cv",beforeEnter(){window.location.href=V.CV_URL}},{path:"/xp",beforeEnter(){window.location.href=V.XP_URL}},{path:"/:pathMatch(.*)*",component:R,meta:{title:"~errorLabel",errorLabel:"404"}}],z=(0,u.p7)({history:(0,u.PO)("/"),routes:Y});var F=z,G=n(65),A=(0,G.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(l).use(A).use(F).mount("#app")},3862:function(t,e,n){t.exports=n.p+"img/eduard.d62d14fe.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,s=o[0],i=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var u=c(n)}for(e&&e(o);l<s.length;l++)a=s[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkdvegasa_ru"]=self["webpackChunkdvegasa_ru"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7982)}));o=n.O(o)})();
//# sourceMappingURL=app.62803078.js.map