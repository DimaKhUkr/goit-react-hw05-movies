"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{344:function(e,n,t){t.d(n,{s:function(){return i}});var r=t(689),c=t(87),a=t(184),i=function(e){var n=e.films,t=(0,r.TH)();return n.map((function(e){return(0,a.jsx)("ul",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title?(0,a.jsxs)("li",{children:[" ",e.title]}):(0,a.jsx)("li",{children:e.name})})},e.id)}))}},295:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(531),c=t(439),a=t(687),i=t.n(a),s=t(344),u=t(85),o="edf9b0cc9ad38910cb90dc25085b494b";function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/trending/all/day?".concat(n));case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("\u041a\u0430\u043a\u0430\u044f \u0442\u043e \u0431\u0435\u0434\u0430 404");case 7:return e.next=9,t.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(1),u.Am.error(e.t0.message,{autoClose:3e3,hideProgressBar:!0});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var h=t(791),p=t(184),d=function(){var e=(0,h.useState)(""),n=(0,c.Z)(e,2),t=n[0],a=n[1];return(0,h.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,a(n.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Welcome"}),t&&(0,p.jsx)(s.s,{films:t})]})}},531:function(e,n,t){function r(e,n,t,r,c,a,i){try{var s=e[a](i),u=s.value}catch(o){return void t(o)}s.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var i=e.apply(n,t);function s(e){r(i,c,a,s,u,"next",e)}function u(e){r(i,c,a,s,u,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=295.8a1b8f34.chunk.js.map