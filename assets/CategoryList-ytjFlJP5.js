import{g as c}from"./category-CGfsMdnP.js";import{ai as g,r as h,c as s,b as e,f as d,ag as n,Z as u,a1 as m,aj as p,o,n as f}from"./index-DsoBdpPh.js";import"./request-DHRn8lua.js";import"./index-jCYurZL7.js";import"./config-provider-BOKV_tex.js";const b={class:"col-span-4"},k={class:"w-full p-5 pb-7 mb-3 bg-white/75 border border-gray-200 rounded-lg dark:bg-gray-800/75 dark:border-gray-700/75"},v={class:"flex items-center mb-5 font-bold text-gray-900 uppercase dark:text-white"},x=e("svg",{t:"1698998570037",class:"inline icon w-5 h-5 mr-2",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"21572",width:"200",height:"200"},[e("path",{d:"M938.666667 464.592593h-853.333334v-265.481482c0-62.577778 51.2-113.777778 113.777778-113.777778h128.948148c15.17037 0 28.444444 3.792593 41.718519 11.377778l98.607407 64.474074h356.503704c62.577778 0 113.777778 51.2 113.777778 113.777778v189.62963z",fill:"#3A69DD","p-id":"21573"}),e("path",{d:"M805.925926 398.222222h-587.851852v-125.155555c0-24.651852 20.859259-45.511111 45.511111-45.511111h496.82963c24.651852 0 45.511111 20.859259 45.511111 45.511111V398.222222z",fill:"#D9E3FF","p-id":"21574"}),e("path",{d:"M843.851852 417.185185h-663.703704v-98.607407c0-28.444444 22.755556-53.096296 53.096296-53.096297h559.407408c28.444444 0 53.096296 22.755556 53.096296 53.096297V417.185185z",fill:"#FFFFFF","p-id":"21575"}),e("path",{d:"M786.962963 938.666667h-549.925926c-83.437037 0-151.703704-68.266667-151.703704-151.703704V341.333333s316.681481 37.925926 430.45926 37.925926c189.62963 0 422.874074-37.925926 422.874074-37.925926v445.62963c0 83.437037-68.266667 151.703704-151.703704 151.703704z",fill:"#5F7CF9","p-id":"21576"}),e("path",{d:"M559.407407 512h-75.851851c-20.859259 0-37.925926-17.066667-37.925926-37.925926s17.066667-37.925926 37.925926-37.925926h75.851851c20.859259 0 37.925926 17.066667 37.925926 37.925926s-17.066667 37.925926-37.925926 37.925926z",fill:"#F9D523","p-id":"21577"})],-1),y={key:0,class:"ml-2 text-gray-600 font-normal dark:text-gray-300"},_={class:"text-sm flex flex-wrap gap-3 font-medium text-gray-600 rounded-lg dark:border-gray-600 dark:text-white"},w=["href"],F={class:"inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-sky-800 bg-sea-blue/75 rounded-full dark:bg-dark-green/75"},L={__name:"CategoryList",setup(z){const i=g().params.userId,r=h([]);return c(i).then(t=>{r.value=t.data}),(t,C)=>(o(),s("div",b,[e("div",k,[e("h2",v,[x,d(" 分类 "),r.value&&r.value.length>0?(o(),s("span",y,"( "+n(r.value.length)+" )",1)):u("",!0)]),e("div",_,[(o(!0),s(m,null,p(r.value,(a,l)=>(o(),s("a",{href:`/${t.$route.params.userId}/category/article/list?name=${a.name}`,key:l,class:f(["cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-600 dark:hover:text-white",{"bg-sea-blue/25 hover:bg-sea-blue/50 dark:bg-dark-green/50 dark:hover:bg-dark-green/25 ":t.$route.query.name===a.name,"bg-white/75 hover:bg-white/50":t.$route.query.name!==a.name}])},[d(n(a.name)+" ",1),e("span",F,n(a.articlesTotal),1)],10,w))),128))])])]))}};export{L as default};
