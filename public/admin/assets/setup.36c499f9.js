import{_ as v}from"./index.eb11029b.js";import{D,F as B,I as E,w as g}from"./element-plus.b75f72d9.js";import{_ as h}from"./picker.0157ae18.js";import{a as A,b}from"./user.1d5daff1.js";import{f as k}from"./index.9cc99eba.js";import{d as p,a0 as w,ag as y,o as s,c as V,V as e,M as r,a as u,O as x,L as S,T as N}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.83590b02.js";import"./index.be347b8d.js";import"./usePaging.0756ad8e.js";import"./index.9454cc81.js";import"./index.1fb7a03d.js";import"./index.vue_vue_type_script_setup_true_lang.f20a4aac.js";import"./vue3-video-play.05975c53.js";import"./vuedraggable.5917840d.js";import"./vue.a15b7233.js";import"./sortablejs.c69601cb.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";const U={class:"user-setup"},j=u("div",{class:"font-medium mb-7"},"\u57FA\u672C\u8BBE\u7F6E",-1),I=u("div",null,[u("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),T=N("\u4FDD\u5B58"),L=p({name:"userSetup"}),yt=p({...L,setup(M){const t=w({defaultAvatar:""}),a=async()=>{try{const o=await A();for(const m in t)t[m]=o[m]}catch(o){console.log("\u83B7\u53D6=>",o)}},n=async()=>{try{await b(t),k.msgSuccess("\u64CD\u4F5C\u6210\u529F"),a()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return a(),(o,m)=>{const l=h,i=D,c=B,_=E,d=g,f=v,F=y("perms");return s(),V("div",U,[e(_,{shadow:"never",class:"!border-none"},{default:r(()=>[j,e(c,{ref:"formRef",model:t,"label-width":"120px"},{default:r(()=>[e(i,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF"},{default:r(()=>[u("div",null,[e(l,{modelValue:t.defaultAvatar,"onUpdate:modelValue":m[0]||(m[0]=C=>t.defaultAvatar=C),limit:1},null,8,["modelValue"])])]),_:1}),e(i,null,{default:r(()=>[I]),_:1})]),_:1},8,["model"])]),_:1}),x((s(),S(f,null,{default:r(()=>[e(d,{type:"primary",onClick:n},{default:r(()=>[T]),_:1})]),_:1})),[[F,["setting:user:save"]]])])}}});export{yt as default};
