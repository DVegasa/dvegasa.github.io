import{_ as m,o as c,c as d,n as b,q as u,s as v,a as l,t as s,b as a,w as n,d as g,u as p,v as y}from"./D1atq9-z.js";import{_ as h}from"./BnOMvso1.js";import{_ as x}from"./BwpdsOHb.js";import{E as f}from"./CqG4hWE2.js";const k={},L={class:"UiAllScreen"};function C(t,e){return c(),d("div",L,[b(t.$slots,"default",{class:"slot"})])}const B=m(k,[["render",C]]);var $=(t=>(t.default="default",t.primary="primary",t.text="text",t))($||{});const N=u({__name:"UiButton",props:{type:{type:String,default:$.default},icon:{type:String,default:null}},setup(t){const e=t;return(o,i)=>(c(),d("button",{class:v(["UiButton",`_type-${e.type}`,e.icon&&`_icon-${e.icon}`])},[b(o.$slots,"default",{},void 0,!0)],2))}}),r=m(N,[["__scopeId","data-v-53c30f48"]]),w={class:"LandingName"},S={class:"top"},U={class:"name"},M={class:"subtitle"},E=u({__name:"LandingName",setup(t){return(e,o)=>{const i=h;return c(),d("div",w,[l("div",S,[l("div",U,s(e.$t("landing.profile.name")),1),l("div",M,s(e.$t("landing.profile.subtitle")),1),a(i,{id:"link-cv",to:"/cv","aria-label":e.$t("landing.profile.ariaCv")},{default:n(()=>[a(r,{type:"primary",role:"none",tabindex:"-1","aria-labelledby":"link-cv"},{default:n(()=>[g(s(e.$t("landing.profile.cv")),1)]),_:1})]),_:1},8,["aria-label"])])])}}}),I=m(E,[["__scopeId","data-v-d415a68c"]]),V={class:"LandingContactMe"},A={class:"contactMe"},H={class:"contactButtons"},P=u({__name:"LandingContactMe",setup(t){return(e,o)=>{const i=x,_=h;return c(),d("div",V,[l("div",A,s(e.$t("landing.profile.contactMe")),1),l("div",H,[a(_,{id:"btn-telegram",to:p(f).telegram,external:"","aria-label":e.$t("landing.profile.ariaContactByTelegram")},{default:n(()=>[a(r,{icon:"only",role:"none",tabindex:"-1","aria-labelledby":"btn-telegram"},{default:n(()=>[a(i,{name:"telegram"})]),_:1})]),_:1},8,["to","aria-label"]),a(_,{id:"btn-linkedin",to:p(f).linkedin,external:"","aria-label":e.$t("landing.profile.ariaContactByLinkedin")},{default:n(()=>[a(r,{icon:"only",role:"none",tabindex:"-1","aria-labelledby":"btn-linkedin"},{default:n(()=>[a(i,{name:"linkedin"})]),_:1})]),_:1},8,["to","aria-label"]),a(_,{id:"btn-github",to:p(f).github,external:"","aria-label":e.$t("landing.profile.ariaContactByGithub")},{default:n(()=>[a(r,{icon:"only",role:"none",tabindex:"-1","aria-labelledby":"btn-github"},{default:n(()=>[a(i,{name:"github"})]),_:1})]),_:1},8,["to","aria-label"])])])}}}),q={class:"LandingPageHome"},z={class:"wrapper"},J=u({__name:"PageHome",setup(t){const e=y();function o(){e.locale.value==="ru"?e.locale.value="en":e.locale.value="ru"}return(i,_)=>(c(),d("div",q,[a(B,null,{default:n(()=>[l("div",z,[a(I),a(P),a(r,{type:"text",class:"switchLang",onClick:o},{default:n(()=>[g(s(i.$t("landing.switchLang")),1)]),_:1})])]),_:1})]))}});export{J as default};
