import{_ as I}from"./index.eb11029b.js";import{H as g,I as x,C as k,D as y,w as U,F as q}from"./element-plus.b75f72d9.js";import{_ as S}from"./picker.0157ae18.js";import{r as f,f as N}from"./index.9cc99eba.js";import{d as C,a0 as j,ag as E,o as i,c as T,V as o,M as l,a as u,O as F,L as m,T as p}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.83590b02.js";import"./index.be347b8d.js";import"./usePaging.0756ad8e.js";import"./index.9454cc81.js";import"./index.1fb7a03d.js";import"./index.vue_vue_type_script_setup_true_lang.f20a4aac.js";import"./vue3-video-play.05975c53.js";import"./vuedraggable.5917840d.js";import"./vue.a15b7233.js";import"./sortablejs.c69601cb.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";function W(_){return f.post({url:"/channel/mp/save",params:_})}function H(){return f.get({url:"/channel/mp/detail"})}const L=u("div",{class:"font-medium mb-7"},"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",-1),M={class:"w-80"},O={class:"w-80"},R=u("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A\u5BBD400px*\u9AD8400px\u3002jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),z=u("div",{class:"font-medium mb-7"},"\u5F00\u53D1\u8005ID",-1),G={class:"w-80"},J={class:"w-80"},K=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u5F00\u53D1\u8005ID\uFF0C\u8BBE\u7F6EAppID\u548CAppSecret ",-1),P=u("div",{class:"font-medium mb-7"},"\u670D\u52A1\u5668\u57DF\u540D",-1),Q={class:"flex"},X={class:"mr-4 w-80"},Y=p("\u590D\u5236"),Z=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199https\u534F\u8BAE\u57DF\u540D ",-1),$={class:"flex"},uu={class:"mr-4 w-80"},eu=p("\u590D\u5236"),ou=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199wss\u534F\u8BAE\u57DF\u540D ",-1),lu={class:"flex"},tu={class:"mr-4 w-80"},su=p("\u590D\u5236"),au=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199https\u534F\u8BAE\u57DF\u540D ",-1),du={class:"flex"},iu={class:"mr-4 w-80"},nu=p("\u590D\u5236"),Fu=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199https\u534F\u8BAE\u57DF\u540D ",-1),mu={class:"flex"},pu={class:"mr-4 w-80"},ru=p("\u590D\u5236"),Du=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199udp\u534F\u8BAE\u57DF\u540D ",-1),_u=u("div",{class:"font-medium mb-7"},"\u4E1A\u52A1\u57DF\u540D",-1),cu={class:"flex"},Bu={class:"mr-4 w-80"},Eu=p("\u590D\u5236"),fu=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u4E1A\u52A1\u57DF\u540D\uFF0C\u586B\u5199\u4E1A\u52A1\u57DF\u540D ",-1),Cu=p("\u4FDD\u5B58"),Au=C({name:"weappConfig"}),Fe=C({...Au,setup(_){const e=j({name:"",primaryId:"",qrCode:"",appId:"",appSecret:"",businessDomain:"",downloadFileDomain:"",requestDomain:"",socketDomain:"",tcpDomain:"",udpDomain:"",uploadFileDomain:""}),c=async()=>{const B=await H();for(const t in e)e[t]=B[t]},A=async()=>{await W(e),c(),N.msgSuccess("\u64CD\u4F5C\u6210\u529F")};return c(),(B,t)=>{const v=g,D=x,d=k,a=y,V=S,n=U,b=q,h=I,r=E("copy"),w=E("perms");return i(),T("div",null,[o(D,{class:"!border-none",shadow:"never"},{default:l(()=>[o(v,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u7533\u8BF7\u5C0F\u7A0B\u5E8F\u5E76\u5B8C\u6210\u8BA4\u8BC1",closable:!1,"show-icon":""})]),_:1}),o(b,{ref:"formRef",model:e,"label-width":"160px"},{default:l(()=>[o(D,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[L,o(a,{label:"\u5C0F\u7A0B\u5E8F\u540D\u79F0",prop:"name"},{default:l(()=>[u("div",M,[o(d,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.name=s),placeholder:"\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8F\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),o(a,{label:"\u539F\u59CBID",prop:"primaryId"},{default:l(()=>[u("div",O,[o(d,{modelValue:e.primaryId,"onUpdate:modelValue":t[1]||(t[1]=s=>e.primaryId=s),placeholder:"\u8BF7\u8F93\u5165\u539F\u59CBID"},null,8,["modelValue"])])]),_:1}),o(a,{label:"\u5C0F\u7A0B\u5E8F\u7801",prop:"qrCode"},{default:l(()=>[u("div",null,[u("div",null,[o(V,{modelValue:e.qrCode,"onUpdate:modelValue":t[2]||(t[2]=s=>e.qrCode=s),limit:1},null,8,["modelValue"])]),R])]),_:1})]),_:1}),o(D,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[z,o(a,{label:"AppID",prop:"appId"},{default:l(()=>[u("div",G,[o(d,{modelValue:e.appId,"onUpdate:modelValue":t[3]||(t[3]=s=>e.appId=s),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),o(a,{label:"AppSecret",prop:"appSecret"},{default:l(()=>[u("div",null,[u("div",J,[o(d,{modelValue:e.appSecret,"onUpdate:modelValue":t[4]||(t[4]=s=>e.appSecret=s),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])])]),_:1}),o(a,null,{default:l(()=>[K]),_:1})]),_:1}),o(D,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[P,o(a,{label:"request\u5408\u6CD5\u57DF\u540D",prop:"appId"},{default:l(()=>[u("div",null,[u("div",Q,[u("div",X,[o(d,{modelValue:e.requestDomain,"onUpdate:modelValue":t[5]||(t[5]=s=>e.requestDomain=s),disabled:""},null,8,["modelValue"])]),F((i(),m(n,null,{default:l(()=>[Y]),_:1})),[[r,e.requestDomain]])]),Z])]),_:1}),o(a,{label:"socket\u5408\u6CD5\u57DF\u540D"},{default:l(()=>[u("div",null,[u("div",$,[u("div",uu,[o(d,{modelValue:e.socketDomain,"onUpdate:modelValue":t[6]||(t[6]=s=>e.socketDomain=s),disabled:""},null,8,["modelValue"])]),F((i(),m(n,null,{default:l(()=>[eu]),_:1})),[[r,e.socketDomain]])]),ou])]),_:1}),o(a,{label:"uploadFile\u5408\u6CD5\u57DF\u540D"},{default:l(()=>[u("div",null,[u("div",lu,[u("div",tu,[o(d,{modelValue:e.uploadFileDomain,"onUpdate:modelValue":t[7]||(t[7]=s=>e.uploadFileDomain=s),disabled:""},null,8,["modelValue"])]),F((i(),m(n,null,{default:l(()=>[su]),_:1})),[[r,e.uploadFileDomain]])]),au])]),_:1}),o(a,{label:"downloadFile\u5408\u6CD5\u57DF\u540D"},{default:l(()=>[u("div",null,[u("div",du,[u("div",iu,[o(d,{modelValue:e.downloadFileDomain,"onUpdate:modelValue":t[8]||(t[8]=s=>e.downloadFileDomain=s),disabled:""},null,8,["modelValue"])]),F((i(),m(n,null,{default:l(()=>[nu]),_:1})),[[r,e.downloadFileDomain]])]),Fu])]),_:1}),o(a,{label:"udp\u5408\u6CD5\u57DF\u540D"},{default:l(()=>[u("div",null,[u("div",mu,[u("div",pu,[o(d,{modelValue:e.udpDomain,"onUpdate:modelValue":t[9]||(t[9]=s=>e.udpDomain=s),disabled:""},null,8,["modelValue"])]),F((i(),m(n,null,{default:l(()=>[ru]),_:1})),[[r,e.udpDomain]])]),Du])]),_:1})]),_:1}),o(D,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[_u,o(a,{label:"\u4E1A\u52A1\u57DF\u540D"},{default:l(()=>[u("div",null,[u("div",cu,[u("div",Bu,[o(d,{modelValue:e.businessDomain,"onUpdate:modelValue":t[10]||(t[10]=s=>e.businessDomain=s),disabled:""},null,8,["modelValue"])]),F((i(),m(n,null,{default:l(()=>[Eu]),_:1})),[[r,e.businessDomain]])]),fu])]),_:1})]),_:1})]),_:1},8,["model"]),F((i(),m(h,null,{default:l(()=>[o(n,{type:"primary",onClick:A},{default:l(()=>[Cu]),_:1})]),_:1})),[[w,["channel:mp:save"]]])])}}});export{Fe as default};
