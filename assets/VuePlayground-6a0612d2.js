import{d as p,i as v,r as c,s as n,e as g,f,g as y,h as a,k as m,_ as w}from"./app-004ee316.js";const R=e=>JSON.parse(decodeURIComponent(e));var V=p({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=v(),s=c(!0),t=n(),l=n(),o=g(()=>f({},i,R(e.settings))),u=async()=>{const{ReplStore:r,Repl:d}=await w(()=>import("./vue-repl-0d90d7ae.js"),["assets/vue-repl-0d90d7ae.js","assets/app-004ee316.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-87174ba5.js"]);t.value=d,l.value=new r({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return y(async()=>{await u(),s.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[s.value?a(m,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};