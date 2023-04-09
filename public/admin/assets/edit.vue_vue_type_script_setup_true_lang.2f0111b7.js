import{O,P as x,D as w,C as U,F as N}from"./element-plus.b75f72d9.js";import{r as F,f as Y}from"./index.9cc99eba.js";import{P as I}from"./index.83590b02.js";import{d as T,s as B,a0 as G,e as P,o as m,c as g,V as t,M as o,a as r,T as E,U as C,u as A,L,S}from"./@vue.cab01781.js";function lu(){return F.get({url:"/setting/storage/list"})}function M(i){return F.post({url:"/setting/storage/edit",params:i})}function j(i){return F.get({url:"/setting/storage/detail",params:i})}const z={class:"edit-popup"},H={class:"form-tips"},J={key:0},Q={class:"flex-1"},W={class:"flex-1"},X=r("div",{class:"form-tips"}," \u8BF7\u8865\u5168http://\u6216https://\uFF0C\u4F8B\u5982https://static.cloud.com ",-1),Z=E("\u5173\u95ED"),$=E("\u5F00\u542F"),ou=T({__name:"edit",emits:["success"],setup(i,{expose:b,emit:D}){const d=B(),c=B(),e=G({alias:"",bucket:"",accessKey:"",secretKey:"",domain:"",region:"",status:0}),y=[{name:"\u672C\u5730\u5B58\u50A8",type:"local",tips:"\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u4E0D\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u53C2\u6570"},{name:"\u4E03\u725B\u4E91\u5B58\u50A8",type:"qiniu",tips:"\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91"},{name:"\u963F\u91CC\u4E91OSS",type:"aliyun",tips:"\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS"},{name:"\u817E\u8BAF\u4E91OSS",type:"qcloud",tips:"\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS"}],V={bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],accessKey:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secretKey:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}]},_=P(()=>y.find(l=>l.type==e.alias)),K=async()=>{var l,u;await((l=d.value)==null?void 0:l.validate()),await M(e),Y.msgSuccess("\u64CD\u4F5C\u6210\u529F"),(u=c.value)==null||u.close(),D("success")},k=async()=>{const l=await j({alias:e.alias});for(const u in l)e[u]=l[u]},v=l=>{var u;e.alias=l,(u=c.value)==null||u.open(),k()},R=()=>{var l;(l=d.value)==null||l.resetFields()};return b({open:v}),(l,u)=>{const p=O,s=w,n=U,h=x,q=N;return m(),g("div",z,[t(I,{ref_key:"popupRef",ref:c,title:"\u8BBE\u7F6E\u5B58\u50A8",async:!0,width:"550px",onConfirm:K,onClose:R},{default:o(()=>[t(q,{ref_key:"formRef",ref:d,model:e,"label-width":"120px",rules:V},{default:o(()=>[t(s,{label:"\u5B58\u50A8\u65B9\u5F0F",prop:"alias"},{default:o(()=>{var a;return[r("div",null,[t(p,{"model-value":""},{default:o(()=>{var f;return[E(C((f=A(_))==null?void 0:f.name),1)]}),_:1}),r("div",H,C((a=A(_))==null?void 0:a.tips),1)])]}),_:1}),e.alias!=="local"?(m(),g("div",J,[t(s,{label:" \u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",prop:"bucket"},{default:o(()=>[r("div",Q,[t(n,{modelValue:e.bucket,"onUpdate:modelValue":u[0]||(u[0]=a=>e.bucket=a),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",clearable:""},null,8,["modelValue"])])]),_:1}),t(s,{label:"ACCESS_KEY",prop:"accessKey"},{default:o(()=>[t(n,{modelValue:e.accessKey,"onUpdate:modelValue":u[1]||(u[1]=a=>e.accessKey=a),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY(AK)",clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"SECRET_KEY",prop:"secretKey"},{default:o(()=>[t(n,{modelValue:e.secretKey,"onUpdate:modelValue":u[2]||(u[2]=a=>e.secretKey=a),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY(SK)",clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"\u7A7A\u95F4\u57DF\u540D",prop:"domain"},{default:o(()=>[r("div",W,[r("div",null,[t(n,{modelValue:e.domain,"onUpdate:modelValue":u[3]||(u[3]=a=>e.domain=a),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D(Domain)",clearable:""},null,8,["modelValue"])]),X])]),_:1}),e.alias=="qcloud"?(m(),L(s,{key:0,label:"REGION",prop:"region"},{default:o(()=>[t(n,{modelValue:e.region,"onUpdate:modelValue":u[4]||(u[4]=a=>e.region=a),placeholder:"\u8BF7\u8F93\u5165region",clearable:""},null,8,["modelValue"])]),_:1})):S("",!0)])):S("",!0),t(s,{label:"\u72B6\u6001",prop:"status"},{default:o(()=>[t(h,{modelValue:e.status,"onUpdate:modelValue":u[5]||(u[5]=a=>e.status=a)},{default:o(()=>[t(p,{label:0},{default:o(()=>[Z]),_:1}),t(p,{label:1},{default:o(()=>[$]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{ou as _,lu as s};
