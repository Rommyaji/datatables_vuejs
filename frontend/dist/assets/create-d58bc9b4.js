import{_ as v,k as b,r as f,u as h,a as g,b as e,d as r,e as t,f as x,w as p,j as S,g as n,v as l,t as i,l as d,i as y}from"./index-a7b32e44.js";import{a as k}from"./axios-21b846bc.js";const N={setup(){const c=b({No:"",Surat:"",Tanggal:"",IsiSurat:""}),a=f([]),u=h();return{surat:c,validation:a,router:u,store:()=>{k.post("http://localhost:3500/surat/create",c).then(()=>{u.push({name:"surat.index"})}).catch(_=>{a.value=res.response.data})}}}},w={class:"container my-5"},T={class:"row justify-control-center"},V={class:"box box-primary col-sm-8"},I={class:"box-header with-border"},q=t("div",{class:"box-title"}," Create Surat ",-1),B={class:"card-body"},C={class:"mb-3"},D=t("label",{for:"",class:"form-label"},"No",-1),M={key:0,class:"text-danger"},U={class:"mb-3"},Y=t("label",{for:"",class:"form-label"},"Tanggal",-1),j={key:0,class:"text-danger"},E={class:"mb-3"},R=t("label",{for:"",class:"form-label"},"Surat",-1),z={key:0,class:"text-danger"},A={class:"form-group"},F=t("label",{for:"",class:"form-label"},"Isi Surat",-1),G={key:0,class:"text-danger"},H=t("button",{class:"btn btn-outline-primary"},"Submit",-1);function J(c,a,u,o,_,K){const m=g("router-link");return e(),r("div",w,[t("div",T,[t("div",V,[x(m,{to:{name:"surat.index"},class:"btn btn-primary btn-sm rounded shadow mb-3"},{default:p(()=>[y("Back")]),_:1},8,["to"]),t("div",I,[q,t("div",B,[t("form",{onSubmit:a[4]||(a[4]=S(s=>o.store(),["prevent"]))},[t("div",C,[D,n(t("input",{type:"number",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=s=>o.surat.No=s),required:""},null,512),[[l,o.surat.No]]),o.validation.No?(e(),r("div",M,i(o.validation.No[0]),1)):d("",!0)]),t("div",U,[Y,n(t("input",{type:"date",class:"form-control",placeholder:"DD-MM-YYYY","onUpdate:modelValue":a[1]||(a[1]=s=>o.surat.Tanggal=s),required:""},null,512),[[l,o.surat.Tanggal]]),o.validation.Tanggal?(e(),r("div",j,i(o.validation.Tanggal[0]),1)):d("",!0)]),t("div",E,[R,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[2]||(a[2]=s=>o.surat.Surat=s),required:""},null,512),[[l,o.surat.Surat]]),o.validation.Surat?(e(),r("div",z,i(o.validation.Surat[0]),1)):d("",!0)]),t("div",A,[F,n(t("textarea",{class:"form-control",rows:"3",placeholder:"Enter ...","onUpdate:modelValue":a[3]||(a[3]=s=>o.surat.IsiSurat=s),required:""},null,512),[[l,o.surat.IsiSurat]]),o.validation.IsiSurat?(e(),r("div",G,i(o.validation.IsiSurat[0]),1)):d("",!0)]),H],32)])])])])])}const P=v(N,[["render",J]]);export{P as default};