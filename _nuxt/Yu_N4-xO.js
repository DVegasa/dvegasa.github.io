import{q as m,r as f,P as p,f as d,o as h,c as v,s as g,u as _,Q as n}from"./BKu-_mEQ.js";const E=["innerHTML"],x=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,a;const i=u,r=f("");let c=!1;async function l(){try{const s=await Object.assign({"/assets/icons/github.svg":()=>n(()=>import("./DfEI_V0O.js"),[],import.meta.url).then(e=>e.default),"/assets/icons/linkedin.svg":()=>n(()=>import("./C1mIvkUk.js"),[],import.meta.url).then(e=>e.default),"/assets/icons/telegram.svg":()=>n(()=>import("./BX-iQtFo.js"),[],import.meta.url).then(e=>e.default)})[`/assets/icons/${i.name}.svg`]();s.includes("stroke")&&(c=!0),r.value=s}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[o,a]=p(()=>l()),await o,a(),d(l),(t,s)=>(h(),v("span",{class:g(["nuxt-icon",{"nuxt-icon--fill":!t.filled,"nuxt-icon--stroke":_(c)&&!t.filled}]),innerHTML:_(r)},null,10,E))}});export{x as _};
