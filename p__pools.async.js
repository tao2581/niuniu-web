(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{EYZe:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),r=a.n(n),l=a("1l/V"),c=a.n(l),s=a("qIgq"),o=a.n(s),i=a("q1tI"),u=a.n(i),m=a("WqwR"),p=a("wY1l"),E=a.n(p),d=a("It0s"),v=a("L0Pg"),w=null;t["default"]=(()=>{var e=Object(i["useState"])([]),t=o()(e,2),a=t[0],n=t[1],l=function(){var e=c()(r.a.mark(function e(){var t;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("pools init"),e.next=3,m["a"].getInstance();case 3:if(w=e.sent,!1!==w.isRightNetwork){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,w.getSimplePools();case 8:return t=e.sent,n(t),e.next=12,w.getPools();case 12:t=e.sent,console.log("loadPools",t),n(t);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(i["useEffect"])(()=>{l()},[]);var s=Object(i["useState"])(.001),p=o()(s,2),b=(p[0],p[1]),N=Object(d["a"])(c()(r.a.mark(function e(){var t;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,w.getPrice();case 4:t=e.sent,b(t);case 6:case"end":return e.stop()}},e)})),{wait:3500}),f=N.run;Object(v["a"])(()=>{f()},1500);var h=0;return a.map((e,t)=>{h+=parseInt(e.worth)}),u.a.createElement("div",{id:"poolIndex"},u.a.createElement("div",{className:"page-banner"},u.a.createElement("div",{className:"flex-banner"},u.a.createElement("div",{className:"left-msg"},u.a.createElement("h3",null,"\u901a\u8fc7\u8d28\u62bcHSwap LP\u548cTokens\u8d5a\u53d6NIUNIU Tokens")))),u.a.createElement("div",{className:"center-div"},u.a.createElement("p",null,"\u9501\u5b9a\u603b\u503c ",h.toFixed(2)," USDT")),u.a.createElement("div",{className:"coin-list"},u.a.createElement("ul",null,a.map((e,t)=>u.a.createElement("li",{key:e.symbol},u.a.createElement("h2",null,e.symbol)," ",u.a.createElement("h3",{style:{margin:"0px",opacity:"0"}},"PancakeSwap"),u.a.createElement("div",{className:"info-div"},u.a.createElement("p",null,"\u8d5a\u53d6 ",e.amountPerDay," NIUNIU(\u6bcf\u5929)"),u.a.createElement("p",null,"\u8d5a\u53d6 ",30*e.amountPerDay," NIUNIU",u.a.createElement("br",null),"(\u6bcf\u6708)")),u.a.createElement("h3",{style:{display:"none"}},"NaN USDT")," ",u.a.createElement("h3",null,e.worth," USDT"),u.a.createElement("div",{className:"process-div"},u.a.createElement("span",null,"APR ")," ",u.a.createElement("b",{style:{display:"none"}},"0%")," ",u.a.createElement("b",null,Math.round(150*e.poolApr),"%")),u.a.createElement(E.a,{to:"/pool/"+t},"\u9009\u62e9"))))))})}}]);