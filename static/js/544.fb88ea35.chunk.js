"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{212:function(n,t,e){e.d(t,{Bt:function(){return d},Ml:function(){return f},Tg:function(){return s},Y5:function(){return p},wL:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(340),o="https://api.themoviedb.org/3/",i="62144ae074e6d6ae76b1ff5ee4b62990",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},491:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,c,u=e(689),o=e(766),i=e(867),s=e(87),f=i.ZP.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),p=i.ZP.li(a||(a=(0,o.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,i.ZP)(s.rU)(c||(c=(0,o.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: #f52c08;\n  }\n"]))),d=e(184),v=function(n){var t=n.films,e=(0,u.TH)();return(0,d.jsx)(f,{children:t.map((function(n){return(0,d.jsx)(p,{children:(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},544:function(n,t,e){e.r(t);var r=e(439),a=e(791),c=e(491),u=e(212),o=e(478),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0);(0,u.Tg)().then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(c.Z,{films:e}),l&&(0,i.jsx)(o.Z,{})]})}}}]);
//# sourceMappingURL=544.fb88ea35.chunk.js.map