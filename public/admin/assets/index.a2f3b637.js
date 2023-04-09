import{C as J,D as H,w as Q,F as W,I as X,J as Y,p as Z,q as ee,r as oe,K as te,L as ne}from"./element-plus.b75f72d9.js";import{u as ae,_ as le}from"./usePaging.0756ad8e.js";import{j as se,f as h,b as ie}from"./index.9cc99eba.js";import{d as N,a0 as U,r as de,b2 as ue,a5 as me,ag as re,o as s,c as F,V as e,M as o,aa as L,u,O as m,L as b,a as y,k as ce,S as pe,T as d}from"./@vue.cab01781.js";import{b as _e,c as fe,e as be,f as ge,h as Ce,s as we}from"./code.cc790f70.js";import{_ as he}from"./data-table.vue_vue_type_script_setup_true_lang.860d42b8.js";import{_ as Fe}from"./code-preview.vue_vue_type_script_setup_true_lang.12bd35d9.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.83590b02.js";function ye(D,p="\u6587\u4EF6\u540D\u79F0.zip"){const _=new Blob([D],{type:"application/octet-stream;charset=UTF-8"}),f=window.URL.createObjectURL(_),l=document.createElement("a");l.style.display="none",l.href=f,l.setAttribute("download",p),document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(f)}const ve={class:"code-generation"},ke=d("\u67E5\u8BE2"),Ee=d("\u91CD\u7F6E"),De={class:"flex"},Te=d(" \u5BFC\u5165\u6570\u636E\u8868 "),Ve=d(" \u5220\u9664 "),Be=d(" \u751F\u6210\u4EE3\u7801 "),xe={class:"mt-4"},Se={class:"flex items-center"},Ue=d(" \u9884\u89C8 "),Le=d(" \u7F16\u8F91 "),Ne=d(" \u66F4\u591A "),Ae=d(" \u751F\u6210\u4EE3\u7801 "),Pe=d(" \u540C\u6B65 "),$e=d(" \u5220\u9664 "),Ke={class:"flex justify-end mt-4"},Re=N({name:"codeGenerate"}),yo=N({...Re,setup(D){const p=U({tableName:"",tableComment:""}),_=U({show:!1,loading:!1,code:{}}),{pager:f,getLists:l,resetParams:A,resetPage:v}=ae({fetchFun:Ce,params:p}),C=de([]),P=n=>{C.value=n},$=async n=>{await h.confirm("\u786E\u5B9A\u8981\u540C\u6B65\u8868\u7ED3\u6784\uFF1F"),await we({id:n}),h.msgSuccess("\u64CD\u4F5C\u6210\u529F")},T=async n=>{n||(n=C.value.map(({id:t})=>t)),await h.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await _e({ids:n}),h.msgSuccess("\u5220\u9664\u6210\u529F"),l()},K=async n=>{const t=await fe({id:n});_.code=t,_.show=!0},V=async n=>{const t=B(n,0),r=B(n,1);if(t){const w=await be({tables:t});ye(w,"likeadmin-curd.zip")}r&&(await ge({tables:r}),h.msgSuccess("\u751F\u6210\u6210\u529F"))},B=(n,t)=>n.filter(({genType:r})=>r==t).map(({tableName:r})=>r).join(),R=(n,t)=>{switch(n){case"generate":V([t]);break;case"sync":$(t.id);break;case"delete":T([t.id])}};return ue(()=>{l()}),l(),(n,t)=>{const r=J,w=H,i=Q,j=W,x=X,k=ie,g=Y,z=me("router-link"),E=Z,I=ee,O=oe,q=te,G=le,c=re("perms"),M=ne;return s(),F("div",ve,[e(x,{class:"!border-none",shadow:"never"},{default:o(()=>[e(j,{class:"mb-[-16px]",model:p,inline:""},{default:o(()=>[e(w,{label:"\u8868\u540D\u79F0"},{default:o(()=>[e(r,{class:"w-[280px]",modelValue:p.tableName,"onUpdate:modelValue":t[0]||(t[0]=a=>p.tableName=a),clearable:"",onKeyup:L(u(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,{label:"\u8868\u63CF\u8FF0"},{default:o(()=>[e(r,{class:"w-[280px]",modelValue:p.tableComment,"onUpdate:modelValue":t[1]||(t[1]=a=>p.tableComment=a),clearable:"",onKeyup:L(u(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,null,{default:o(()=>[e(i,{type:"primary",onClick:u(v)},{default:o(()=>[ke]),_:1},8,["onClick"]),e(i,{onClick:u(A)},{default:o(()=>[Ee]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),m((s(),b(x,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[y("div",De,[m((s(),b(he,{class:"inline-block mr-[10px]",onSuccess:u(l)},{default:o(()=>[e(i,{type:"primary"},{icon:o(()=>[e(k,{name:"el-icon-Plus"})]),default:o(()=>[Te]),_:1})]),_:1},8,["onSuccess"])),[[c,["gen:importTable"]]]),m((s(),b(i,{disabled:!C.value.length,onClick:t[2]||(t[2]=a=>T()),type:"danger"},{icon:o(()=>[e(k,{name:"el-icon-Delete"})]),default:o(()=>[Ve]),_:1},8,["disabled"])),[[c,["gen:delTable"]]]),m((s(),b(i,{disabled:!C.value.length,onClick:t[3]||(t[3]=a=>V(C.value))},{default:o(()=>[Be]),_:1},8,["disabled"])),[[c,["gen:genCode","gen:downloadCode"]]])]),y("div",xe,[e(q,{data:u(f).lists,size:"large",onSelectionChange:P},{default:o(()=>[e(g,{type:"selection",width:"55"}),e(g,{label:"\u8868\u540D\u79F0",prop:"tableName","min-width":"180"}),e(g,{label:"\u8868\u63CF\u8FF0",prop:"tableComment","min-width":"180"}),e(g,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime","min-width":"180"}),e(g,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(g,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:o(({row:a})=>[y("div",Se,[m((s(),b(i,{type:"primary",link:"",onClick:S=>K(a.id)},{default:o(()=>[Ue]),_:2},1032,["onClick"])),[[c,["gen:previewCode"]]]),m((s(),b(i,{type:"primary",link:""},{default:o(()=>[e(z,{to:{path:u(se)("gen:editTable"),query:{id:a.id}}},{default:o(()=>[Le]),_:2},1032,["to"])]),_:2},1024)),[[c,["gen:editTable"]]]),m((s(),b(O,{class:"ml-2",onCommand:S=>R(S,a)},{dropdown:o(()=>[e(I,null,{default:o(()=>[m((s(),F("div",null,[e(E,{command:"generate"},{default:o(()=>[e(i,{type:"primary",link:""},{default:o(()=>[Ae]),_:1})]),_:1})])),[[c,["gen:genCode","gen:downloadCode"]]]),m((s(),F("div",null,[e(E,{command:"sync"},{default:o(()=>[e(i,{type:"primary",link:""},{default:o(()=>[Pe]),_:1})]),_:1})])),[[c,["gen:syncTable"]]]),m((s(),F("div",null,[e(E,{command:"delete"},{default:o(()=>[e(i,{type:"danger",link:""},{default:o(()=>[$e]),_:1})]),_:1})])),[[c,["gen:delTable"]]])]),_:1})]),default:o(()=>[e(i,{type:"primary",link:""},{default:o(()=>[Ne,e(k,{name:"el-icon-ArrowDown",size:14})]),_:1})]),_:2},1032,["onCommand"])),[[c,["gen:genCode","gen:downloadCode","gen:syncTable","gen:delTable"]]])])]),_:1})]),_:1},8,["data"])]),y("div",Ke,[e(G,{modelValue:u(f),"onUpdate:modelValue":t[4]||(t[4]=a=>ce(f)?f.value=a:null),onChange:u(l)},null,8,["modelValue","onChange"])])]),_:1})),[[M,u(f).loading]]),_.show?(s(),b(Fe,{key:0,modelValue:_.show,"onUpdate:modelValue":t[5]||(t[5]=a=>_.show=a),code:_.code},null,8,["modelValue","code"])):pe("",!0)])}}});export{yo as default};
