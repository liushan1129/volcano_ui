import{O as L,P as G,Z as P,$,D as K,C as Z,v as j,F as z}from"./element-plus.b75f72d9.js";import{_ as H}from"./picker.vue_vue_type_script_setup_true_lang.701cabc0.js";import{m as J,a as Q,b as W,c as X}from"./menu.7c41dae2.js";import{p as Y,M as n,q as uu,t as eu,f as lu}from"./index.9cc99eba.js";import{P as ou}from"./index.83590b02.js";import{d as au,s as y,r as B,e as tu,a0 as su,o as i,c as nu,V as l,M as o,u as r,L as p,S as F,a as t,T as c}from"./@vue.cab01781.js";const du={class:"edit-popup"},mu=c("\u76EE\u5F55"),ru=c("\u83DC\u5355"),iu=c("\u6309\u94AE"),pu={class:"flex-1"},Fu=t("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`admin`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),cu={class:"flex-1"},Eu=t("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`permission/admin/index`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),_u={class:"flex-1"},fu=t("div",{class:"form-tips"}," \u8BBF\u95EE\u8BE6\u60C5\u9875\u9762\uFF0C\u7F16\u8F91\u9875\u9762\u65F6\uFF0C\u83DC\u5355\u9AD8\u4EAE\u663E\u793A\uFF0C\u5982`/consumer/lists` ",-1),Cu={class:"flex-1"},Bu=t("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`system:admin:list`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),Du={class:"flex-1"},bu=t("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),Vu=c("\u7F13\u5B58"),Au=c("\u4E0D\u7F13\u5B58"),vu=t("div",{class:"form-tips"},"\u9009\u62E9\u7F13\u5B58\u5219\u4F1A\u88AB`keep-alive`\u7F13\u5B58",-1),yu=c("\u663E\u793A"),Tu=c("\u9690\u85CF"),hu=t("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),Uu=c("\u6B63\u5E38"),Nu=c("\u505C\u7528"),ku=t("div",{class:"form-tips"},"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",-1),gu=t("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),Ru=au({__name:"edit",emits:["success","close"],setup(wu,{expose:T,emit:D}){const b=y(),f=y(),C=B("add"),h=tu(()=>C.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),V=B(Y()),U=(s,u)=>{const d=s?V.value.filter(E=>E.toLowerCase().includes(s.toLowerCase())):V.value;u(d.map(E=>({value:E})))},e=su({id:"",pid:0,menuType:n.CATALOGUE,menuIcon:"",menuName:"",menuSort:0,paths:"",perms:"",component:"",selected:"",params:"",isCache:0,isShow:1,isDisable:0}),N={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],menuName:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},A=B([]),k=async()=>{const s=await J(),u={id:0,menuName:"\u9876\u7EA7",children:[]};u.children=uu(eu(s).filter(d=>d.menuType!=n.BUTTON)),A.value.push(u)},g=async()=>{var s,u;await((s=b.value)==null?void 0:s.validate()),C.value=="edit"?await Q(e):await W(e),(u=f.value)==null||u.close(),lu.msgSuccess("\u64CD\u4F5C\u6210\u529F"),D("success")},w=(s="add")=>{var u;C.value=s,(u=f.value)==null||u.open()},v=s=>{for(const u in e)s[u]!=null&&s[u]!=null&&(e[u]=s[u])},x=async s=>{const u=await X({id:s.id});v(u)},O=()=>{D("close")};return k(),T({open:w,setFormData:v,getDetail:x}),(s,u)=>{const d=L,E=G,m=K,S=P,_=Z,M=H,q=$,I=j,R=z;return i(),nu("div",du,[l(ou,{ref_key:"popupRef",ref:f,title:r(h),async:!0,width:"550px",onConfirm:g,onClose:O},{default:o(()=>[l(R,{ref_key:"formRef",ref:b,model:e,"label-width":"80px",rules:N},{default:o(()=>[l(m,{label:"\u83DC\u5355\u7C7B\u578B",prop:"menuType",required:""},{default:o(()=>[l(E,{modelValue:e.menuType,"onUpdate:modelValue":u[0]||(u[0]=a=>e.menuType=a)},{default:o(()=>[l(d,{label:r(n).CATALOGUE},{default:o(()=>[mu]),_:1},8,["label"]),l(d,{label:r(n).MENU},{default:o(()=>[ru]),_:1},8,["label"]),l(d,{label:r(n).BUTTON},{default:o(()=>[iu]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(m,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:o(()=>[l(S,{class:"flex-1",modelValue:e.pid,"onUpdate:modelValue":u[1]||(u[1]=a=>e.pid=a),data:A.value,clearable:"","node-key":"id",props:{label:"menuName"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(m,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:o(()=>[l(_,{modelValue:e.menuName,"onUpdate:modelValue":u[2]||(u[2]=a=>e.menuName=a),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),e.menuType!=r(n).BUTTON?(i(),p(m,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"menuIcon"},{default:o(()=>[l(M,{class:"flex-1",modelValue:e.menuIcon,"onUpdate:modelValue":u[3]||(u[3]=a=>e.menuIcon=a)},null,8,["modelValue"])]),_:1})):F("",!0),e.menuType!=r(n).BUTTON?(i(),p(m,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:o(()=>[t("div",pu,[l(_,{modelValue:e.paths,"onUpdate:modelValue":u[4]||(u[4]=a=>e.paths=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),Fu])]),_:1})):F("",!0),e.menuType==r(n).MENU?(i(),p(m,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:o(()=>[t("div",cu,[l(q,{class:"w-full",modelValue:e.component,"onUpdate:modelValue":u[5]||(u[5]=a=>e.component=a),"fetch-suggestions":U,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),Eu])]),_:1})):F("",!0),e.menuType==r(n).MENU?(i(),p(m,{key:3,label:"\u9009\u4E2D\u83DC\u5355",prop:"selected"},{default:o(()=>[t("div",_u,[l(_,{modelValue:e.selected,"onUpdate:modelValue":u[6]||(u[6]=a=>e.selected=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),fu])]),_:1})):F("",!0),e.menuType!=r(n).CATALOGUE?(i(),p(m,{key:4,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:o(()=>[t("div",Cu,[l(_,{modelValue:e.perms,"onUpdate:modelValue":u[7]||(u[7]=a=>e.perms=a),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",clearable:""},null,8,["modelValue"]),Bu])]),_:1})):F("",!0),e.menuType==r(n).MENU?(i(),p(m,{key:5,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:o(()=>[t("div",null,[t("div",Du,[l(_,{modelValue:e.params,"onUpdate:modelValue":u[8]||(u[8]=a=>e.params=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570",clearable:""},null,8,["modelValue"])]),bu])]),_:1})):F("",!0),e.menuType==r(n).MENU?(i(),p(m,{key:6,label:"\u662F\u5426\u7F13\u5B58",prop:"isCache",required:""},{default:o(()=>[t("div",null,[l(E,{modelValue:e.isCache,"onUpdate:modelValue":u[9]||(u[9]=a=>e.isCache=a)},{default:o(()=>[l(d,{label:1},{default:o(()=>[Vu]),_:1}),l(d,{label:0},{default:o(()=>[Au]),_:1})]),_:1},8,["modelValue"]),vu])]),_:1})):F("",!0),e.menuType!=r(n).BUTTON?(i(),p(m,{key:7,label:"\u662F\u5426\u663E\u793A",prop:"isShow",required:""},{default:o(()=>[t("div",null,[l(E,{modelValue:e.isShow,"onUpdate:modelValue":u[10]||(u[10]=a=>e.isShow=a)},{default:o(()=>[l(d,{label:1},{default:o(()=>[yu]),_:1}),l(d,{label:0},{default:o(()=>[Tu]),_:1})]),_:1},8,["modelValue"]),hu])]),_:1})):F("",!0),e.menuType!=r(n).BUTTON?(i(),p(m,{key:8,label:"\u83DC\u5355\u72B6\u6001",prop:"isDisable",required:""},{default:o(()=>[t("div",null,[l(E,{modelValue:e.isDisable,"onUpdate:modelValue":u[11]||(u[11]=a=>e.isDisable=a)},{default:o(()=>[l(d,{label:0},{default:o(()=>[Uu]),_:1}),l(d,{label:1},{default:o(()=>[Nu]),_:1})]),_:1},8,["modelValue"]),ku])]),_:1})):F("",!0),l(m,{label:"\u83DC\u5355\u6392\u5E8F",prop:"menuSort"},{default:o(()=>[t("div",null,[l(I,{modelValue:e.menuSort,"onUpdate:modelValue":u[12]||(u[12]=a=>e.menuSort=a),max:9999},null,8,["modelValue"]),gu])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Ru as _};
