(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"VD/G":function(e,t,n){"use strict";n.r(t);n("miYZ");var a=n("tsqr"),r=n("d6i3"),c=n.n(r),s=n("1l/V"),l=n.n(s),i=n("qIgq"),u=n.n(i),o=n("q1tI"),m=n.n(o),p=n("wDBh"),d=n("It0s"),v=n("L0Pg"),f=n("WqwR"),b=n("anq4"),w=n.n(b),h=null;t["default"]=(e=>{var t=e.match.params.id,n=e.location.query.referrer||"0x265f971E702d6e539C849BC589c67aF2E53c284d",r=Object(o["useRef"])(null),s=Object(o["useState"])({balance:0}),i=u()(s,2),b=i[0],E=i[1],g=Object(o["useState"])(!1),k=u()(g,2),x=k[0],y=k[1],N=Object(o["useState"])({}),C=u()(N,2),j=C[0],O=C[1],S=function(){var e=l()(c.a.mark(function e(){var n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].getInstance();case 2:if(h=e.sent,!1!==h.isRightNetwork){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,h.getPool(t);case 7:n=e.sent,console.log("poolinfo",n),E(n);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(o["useEffect"])(()=>{S()},[]);var q=function(){var e=l()(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.approve(b.lpToken);case 2:S();case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=l()(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:O({title:"\u62b5\u62bc",symbol:b.symbol,amount:b.balance,onSubmit:function(){var e=l()(c.a.mark(function e(){var s,l,i;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(r.current.value>0)){e.next=9;break}return s=a["a"].loading("Action in progress..",0),l=p["a"].utils.parseUnits("".concat(r.current.value),b.decimals),e.next=5,h.deposit(t,l,n);case 5:i=e.sent,console.log("ret",i),s(),1==i.status?(S(),a["a"].success("\u5b58\u5165\u6210\u529f",2.5),y(!1)):a["a"].success("\u5b58\u5165\u5931\u8d25\uff01",2.5);case 9:case"end":return e.stop()}},e)}));function s(){return e.apply(this,arguments)}return s}()}),y(!0);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=l()(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:O({title:"\u89e3\u538b\u9000\u51fa",symbol:"niuniu",amount:null===b||void 0===b?void 0:b.deposited,onSubmit:function(){var e=l()(c.a.mark(function e(){var n,s,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(r.current.value>0)){e.next=8;break}return n=a["a"].loading("Action in progress..",0),s=p["a"].utils.parseUnits("".concat(r.current.value),18),e.next=5,h.withdraw(t,s);case 5:l=e.sent,1==l.status&&(S(),D(0),y(!1),a["a"].success("\u89e3\u538b\u6210\u529f",2.5)),n();case 8:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}()}),y(!0);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=l()(c.a.mark(function e(){var n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a["a"].loading("Action in progress..",0),e.next=3,h.withdraw(t,0);case 3:e.sent,D(0),a["a"].success("\u63d0\u53d6\u6210\u529f",2.5),n();case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),B=Object(o["useState"])(0),L=u()(B,2),R=L[0],D=L[1],J=Object(d["a"])(l()(c.a.mark(function e(){var n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.pendingHarvest(t);case 4:return n=e.sent,0==R&&D(n),e.abrupt("return",n);case 7:case"end":return e.stop()}},e)})),{wait:1500}),T=J.run,U=Object(o["useState"])(.001),V=u()(U,2),F=(V[0],V[1]),G=Object(d["a"])(l()(c.a.mark(function e(){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.getPrice();case 4:t=e.sent,F(t);case 6:case"end":return e.stop()}},e)})),{wait:3500}),H=G.run;return Object(v["a"])(()=>{T().then(e=>{var t=R+Math.round(1e-6*R,1e-5*R);D(e>t?e:t)}),H()},230),m.a.createElement("div",{id:"pool"},m.a.createElement("div",{className:"page-banner"},m.a.createElement("div",{className:"flex-banner"},m.a.createElement("div",{className:"left-msg"},m.a.createElement("h3",null,null===b||void 0===b?void 0:b.symbol),m.a.createElement("p",null,"\u6ce8\u610f\uff1a\u6211\u4eec\u73b0\u5728\u4ec5\u652f\u6301BSC\uff0c\u8bf7\u52ff\u8f6c\u8ba9\u4ee5\u592a",m.a.createElement("br",null),"\u574a\u4e3b\u7f51token")))),m.a.createElement("div",{className:"coin-list"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("h4",null," Earned\uff08niuniu)"),m.a.createElement("div",{className:"flex-img-div"},m.a.createElement("img",{src:w.a}),m.a.createElement("span",null,R)),m.a.createElement("div",{className:"buttons-div margin-top-50"},m.a.createElement("a",{className:R>0?"":"grey-btn",onClick:A},"\u6536\u5272\u6240\u6709Token"))),m.a.createElement("li",null,m.a.createElement("h4",null,"Pancake LP \u62b5\u62bc"),m.a.createElement("p",null,b.symbol),m.a.createElement("h3",null,null===b||void 0===b?void 0:b.deposited),m.a.createElement("div",{className:"buttons-div",style:{display:b.allowance>0?"":"none"}},m.a.createElement("a",{className:(null===b||void 0===b?void 0:b.deposited)>0?"":"grey-btn",onClick:I},"\u89e3\u62bc"),m.a.createElement("b",{onClick:P},"+")),m.a.createElement("div",{className:"buttons-div",style:{display:b.allowance>0?"none":""}},m.a.createElement("a",{href:"#!",onClick:q},"\u6388\u6743")))),m.a.createElement("div",{className:"btn-div"},m.a.createElement("a",{className:"right-btn ".concat((null===b||void 0===b?void 0:b.deposited)>0?"":"grey-btn"),onClick:I},"\u83b7\u53d6&\u89e3\u62bc"))),m.a.createElement("div",{className:"pledge-dialog",style:{display:x?"":"none"}},m.a.createElement("div",{className:"dialog-back"}),m.a.createElement("div",{className:"dialog-body"},m.a.createElement("h3",null,j.title),m.a.createElement("p",null," ",j.symbol,": ",j.amount),m.a.createElement("div",{className:"input-div"},m.a.createElement("input",{ref:r,type:"number",placeholder:"\u8d28\u62bc\u6570\u91cf"}),m.a.createElement("a",{href:"#!",onClick:()=>{r.current.value=j.amount}},"\u6700\u5927\u503c")),m.a.createElement("div",{className:"btns-div"},m.a.createElement("a",{onClick:()=>y(!1)},"\u53d6\u6d88"),m.a.createElement("a",{onClick:j.onSubmit,className:"right-btn"},"\u63d0\u4ea4")))))})},anq4:function(e,t,n){e.exports=n.p+"static/coinLogo.62a932f9.png"}}]);