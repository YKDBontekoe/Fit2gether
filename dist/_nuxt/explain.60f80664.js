import{_ as n}from"./v-accordion.517a559e.js";import{a as c,o as r,e as s,h as a,p as d,j as h,f as o}from"./entry.eb2cdd95.js";const l=""+new URL("faq-image.ebe019cb.jpg",import.meta.url).href;const p={name:"ExplainPage",components:{VAccordion:n}},i=e=>(d("data-v-235d30a5"),e=e(),h(),e),_={class:"container"},u=i(()=>o("h1",{class:"text-center text-primary"},"FAQ",-1)),m=i(()=>o("div",{class:"text-center"},[o("img",{src:l,alt:"privacy",class:"faq-image"})],-1));function y(e,f,b,v,w,g){const t=n;return r(),s("div",_,[u,a(t,{title:"How do we make our prediction?",content:`We use an AI to make our prediction. The model is trained on data from the
      Behavioral Risk Factor Surveillance System survey that is collected
      annually by the CDC. The prediction is based on the data you enter in the
      form.

      The final prediction is based on 254.000 people who filled in the survey
      provided by the CDC.`}),a(t,{title:"How do we calculate the risk?",content:` When you have entered the data we will process the data on your local
      machine and run the data through our AI model. The model will then
      calculate a probability of you having a heart attack in the next 10 years.
      The higher the probability the higher the risk. The probability is a
      number between 0 - 1. We multiply the probability with 100 to get a
      percentage.`}),a(t,{title:"How do we calculate the tips?",content:`The tips are based on the data you entered in the form. The tips are not
      based on the prediction.`}),a(t,{title:"How accurate is the prediction?",content:`The prediction has an accuracy of 91% and thus
      should not be used as medical advice or as a replacement
      for a medical professional.`}),m])}const k=c(p,[["render",y],["__scopeId","data-v-235d30a5"]]);export{k as default};
