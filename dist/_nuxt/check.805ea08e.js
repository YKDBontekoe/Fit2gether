import{a as s,j as g,r,o as a,b as d,e as u,c as l,k as t,h as U}from"./entry.892effff.js";const $={id:"msform"};function h(e,o,p,i,v,f){const m=r("VCheckProgressBar"),k=r("VCheckExplanation"),C=r("VCheckPersonalForm"),V=r("VCheckGeneralInfo"),F=r("VCheckHealthForm"),M=r("VCheckResult");return a(),d("form",$,[u(m,{"current-form":e.currentForm,"onUpdate:current-form":o[0]||(o[0]=n=>e.currentForm=n)},null,8,["current-form"]),e.isExplanationFormName?(a(),l(k,{key:0,"next-model-value":e.nextModel,"onUpdate:next-model-value":o[1]||(o[1]=n=>e.nextModel=n)},null,8,["next-model-value"])):t("",!0),e.isPersonalFormName?(a(),l(C,{key:1,"next-model-value":e.nextModel,"onUpdate:next-model-value":o[2]||(o[2]=n=>e.nextModel=n),"previous-model-value":e.previousModel,"onUpdate:previous-model-value":o[3]||(o[3]=n=>e.previousModel=n),"form-data":e.formData,"onUpdate:form-data":o[4]||(o[4]=n=>e.formData=n)},null,8,["next-model-value","previous-model-value","form-data"])):t("",!0),e.isGeneralFormName?(a(),l(V,{key:2,"form-data":e.formData,"onUpdate:form-data":o[5]||(o[5]=n=>e.formData=n),"next-model-value":e.nextModel,"onUpdate:next-model-value":o[6]||(o[6]=n=>e.nextModel=n),"previous-model-value":e.previousModel,"onUpdate:previous-model-value":o[7]||(o[7]=n=>e.previousModel=n)},null,8,["form-data","next-model-value","previous-model-value"])):t("",!0),e.isHealthFormName?(a(),l(F,{key:3,"form-data":e.formData,"next-model-value":e.nextModel,"onUpdate:next-model-value":o[8]||(o[8]=n=>e.nextModel=n),"previous-model-value":e.previousModel,"onUpdate:previous-model-value":o[9]||(o[9]=n=>e.previousModel=n)},null,8,["form-data","next-model-value","previous-model-value"])):t("",!0),e.isResultFormName?(a(),l(M,{key:4,"form-data":e.formData},null,8,["form-data"])):t("",!0)])}const c=s(g,[["render",h]]),N=""+new URL("check-page-background.4f23574d.jpg",import.meta.url).href,y={name:"CheckPage",components:{VCheckForm:c}},B={class:"container"},D=U("img",{class:"img-fluid",src:N,style:{display:"block","margin-left":"auto","margin-right":"auto",width:"20%"}},null,-1);function P(e,o,p,i,v,f){const m=r("VCheckForm");return a(),d("div",B,[D,u(m)])}const R=s(y,[["render",P]]);export{R as default};