import{_ as O}from"./index.eb11029b.js";import{s as Q,C as $,w as I,x as W,y as q,D as G,F as H,I as J}from"./element-plus.b75f72d9.js";import{d as v,e as K,o as p,c as f,V as e,u as h,k as U,M as o,T as b,a0 as X,ag as Y,a as l,W as Z,a8 as ee,$ as te,U as oe,Q as le,L as S,S as ae,O as se,t as ne,b9 as ue,b8 as re}from"./@vue.cab01781.js";import{_ as de}from"./index.9454cc81.js";import{_ as ie}from"./picker.687893e2.js";import{_ as ce}from"./picker.0157ae18.js";import{f as y,b as me,d as pe}from"./index.9cc99eba.js";import{b as _e,c as fe}from"./decoration.bbdab5be.js";import{D as be}from"./vuedraggable.5917840d.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.83590b02.js";import"./index.be347b8d.js";import"./usePaging.0756ad8e.js";import"./index.1fb7a03d.js";import"./index.vue_vue_type_script_setup_true_lang.f20a4aac.js";import"./vue3-video-play.05975c53.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./vue.a15b7233.js";import"./sortablejs.c69601cb.js";const xe={class:"color-picker flex flex-1"},Fe=b("\u91CD\u7F6E"),ge=v({__name:"index",props:{modelValue:{type:String},defaultColor:{type:String}},emits:["update:modelValue"],setup(i,{emit:D}){const x=i,t=K({get(){return x.modelValue},set(_){D("update:modelValue",_)}}),F=["#409EFF","#28C76F","#EA5455","#FF9F43","#01CFE8","#4A5DFF"],g=()=>{t.value=x.defaultColor};return(_,d)=>{const V=Q,a=$,n=I;return p(),f("div",xe,[e(V,{modelValue:h(t),"onUpdate:modelValue":d[0]||(d[0]=c=>U(t)?t.value=c:null),predefine:F},null,8,["modelValue"]),e(a,{modelValue:h(t),"onUpdate:modelValue":d[1]||(d[1]=c=>U(t)?t.value=c:null),class:"mx-[10px] flex-1",type:"text",readonly:""},null,8,["modelValue"]),e(n,{type:"text",onClick:g},{default:o(()=>[Fe]),_:1})])}}}),E=i=>(ue("data-v-7391482c"),i=i(),re(),i),Ve={class:"decoration-tabbar min-w-[800px]"},Ce={class:"flex h-full items-start"},ye={class:"pages-preview mx-[30px]"},he={class:"tabbar flex"},ve=["src"],Ee={class:"leading-3 text-[12px] mt-[4px]"},De={class:"flex-1"},Be=E(()=>l("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2"},[b(" \u5E95\u90E8\u5BFC\u822A\u8BBE\u7F6E "),l("span",{class:"form-tips ml-[10px] !mt-0"}," \u81F3\u5C11\u6DFB\u52A02\u4E2A\u5BFC\u822A\uFF0C\u6700\u591A\u6DFB\u52A05\u4E2A\u5BFC\u822A ")],-1)),ke={class:"mb-[18px]"},Ae={class:"bg-fill-light w-full p-4 mt-4"},we={class:"upload-btn w-[60px] h-[60px]"},Ue=E(()=>l("span",{class:"text-xs leading-5"}," \u672A\u9009\u4E2D ",-1)),Se={class:"upload-btn w-[60px] h-[60px]"},$e=E(()=>l("span",{class:"text-xs leading-5"}," \u9009\u4E2D ",-1)),Ie=b(" \u6DFB\u52A0\u5BFC\u822A "),Te=b("\u4FDD\u5B58"),ze=v({name:"decorationTabbar"}),Ne=v({...ze,setup(i){const t=X({style:{defaultColor:"",selectedColor:""},list:[{name:"",selected:"",unselected:"",link:{}},{name:"",selected:"",unselected:"",link:{}}]}),F=()=>{var a;((a=t.list)==null?void 0:a.length)<5?t.list.push({name:"",selected:"",unselected:"",link:{}}):y.msgError(`\u6700\u591A\u6DFB\u52A0${5}\u4E2A`)},g=a=>{var n;if(((n=t.list)==null?void 0:n.length)<=2)return y.msgError(`\u6700\u5C11\u4FDD\u7559${2}\u4E2A`);t.list.splice(a,1)},_=a=>a.relatedContext.index!=0,d=async()=>{const a=await _e();t.list=a.list,t.style=a.style},V=async()=>{await fe(ne(t)),d(),y.msgSuccess("\u4FDD\u5B58\u6210\u529F")};return d(),(a,n)=>{const c=me,B=ce,m=G,T=$,z=ie,N=de,k=I,A=W,w=ge,P=q,L=H,M=J,R=O,j=Y("perms");return p(),f("div",Ve,[e(M,{shadow:"never",class:"!border-none flex-1","body-style":{height:"100%"}},{default:o(()=>[l("div",Ce,[l("div",ye,[l("div",he,[(p(!0),f(Z,null,ee(t.list,(u,s)=>(p(),f("div",{class:"tabbar-item flex flex-col justify-center items-center flex-1",key:s,style:te({color:t.style.defaultColor})},[l("img",{class:"w-[22px] h-[22px]",src:u.unselected,alt:""},null,8,ve),l("div",Ee,oe(u.name),1)],4))),128))])]),l("div",De,[Be,e(L,{"label-width":"70px"},{default:o(()=>[e(P,{"model-value":"content"},{default:o(()=>[e(A,{label:"\u5BFC\u822A\u56FE\u7247",name:"content"},{default:o(()=>{var u;return[l("div",ke,[e(h(be),{class:"draggable",modelValue:t.list,"onUpdate:modelValue":n[0]||(n[0]=s=>t.list=s),animation:"300",draggable:".draggable",move:_},{item:o(({element:s,index:C})=>[e(N,{onClose:r=>g(C),class:le(["max-w-[400px]",{draggable:C!=0}])},{default:o(()=>[l("div",Ae,[e(m,{label:"\u5BFC\u822A\u56FE\u6807"},{default:o(()=>[e(B,{modelValue:s.unselected,"onUpdate:modelValue":r=>s.unselected=r,"upload-class":"bg-body",size:"60px"},{upload:o(()=>[l("div",we,[e(c,{name:"el-icon-Plus",size:16}),Ue])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(B,{modelValue:s.selected,"onUpdate:modelValue":r=>s.selected=r,"upload-class":"bg-body",size:"60px"},{upload:o(()=>[l("div",Se,[e(c,{name:"el-icon-Plus",size:16}),$e])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(m,{label:"\u5BFC\u822A\u540D\u79F0"},{default:o(()=>[e(T,{modelValue:s.name,"onUpdate:modelValue":r=>s.name=r,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(m,{label:"\u94FE\u63A5\u5730\u5740"},{default:o(()=>[e(z,{modelValue:s.link,"onUpdate:modelValue":r=>s.link=r,disabled:C==0},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)])]),_:2},1032,["onClose","class"])]),_:1},8,["modelValue"])]),((u=t.list)==null?void 0:u.length)<5?(p(),S(m,{key:0,"label-width":"0"},{default:o(()=>[e(k,{type:"primary",onClick:F},{default:o(()=>[Ie]),_:1})]),_:1})):ae("",!0)]}),_:1}),e(A,{label:"\u6837\u5F0F\u8BBE\u7F6E",name:"styles"},{default:o(()=>[e(m,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:o(()=>[e(w,{class:"max-w-[400px]",modelValue:t.style.defaultColor,"onUpdate:modelValue":n[1]||(n[1]=u=>t.style.defaultColor=u),"default-color":"#999999"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u9009\u4E2D\u989C\u8272"},{default:o(()=>[e(w,{class:"max-w-[400px]",modelValue:t.style.selectedColor,"onUpdate:modelValue":n[2]||(n[2]=u=>t.style.selectedColor=u),"default-color":"#4173ff"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}),se((p(),S(R,{class:"mt-4",fixed:!1},{default:o(()=>[e(k,{type:"primary",onClick:V},{default:o(()=>[Te]),_:1})]),_:1})),[[j,["decorate:tabbar:save"]]])])}}});const kt=pe(Ne,[["__scopeId","data-v-7391482c"]]);export{kt as default};
