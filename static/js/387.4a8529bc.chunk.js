"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{212:function(n,t,e){e.d(t,{Bt:function(){return h},Ml:function(){return f},Tg:function(){return s},Y5:function(){return p},wL:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(340),o="https://api.themoviedb.org/3/",i="62144ae074e6d6ae76b1ff5ee4b62990",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(439),c=e(689),u=e(791),o=e(212),i=e(766),s=e(867).ZP.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),f=e(478),p=e(184),l=function(){var n=(0,c.UO)().movieId,t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],i=e[1],l=(0,u.useState)(!1),h=(0,a.Z)(l,2),d=h[0],v=h[1];return(0,u.useEffect)((function(){if(n){v(!0),(0,o.Bt)(n).then((function(n){i(n)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}}),[n]),(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)(f.Z,{}),0!==r.length&&(0,p.jsx)("div",{children:(0,p.jsx)(s,{children:r.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})}),0===r.length&&(0,p.jsx)("div",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=387.4a8529bc.chunk.js.map