import{a as t,b as s,c as n,d as a,i as e,e as r,S as i,s as o,g as c,f as u,t as f,m as l,h,j as p,k as m,l as d,o as v,r as x,u as j,E as b,n as g}from"./index.67a3f833.js";import{_ as w}from"./slicedToArray.f13a096f.js";import{_ as y}from"./index.a23be6fe.js";function E(t){var s,n,a,e,r,i,o=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c:function(){n=c(),a=u("h1"),e=f(o),r=c(),i=u("div"),this.h()},l:function(t){n=l(t),a=h(t,"H1",{});var s=p(a);e=m(s,o),s.forEach(d),r=l(t),i=h(t,"DIV",{class:!0}),p(i).forEach(d),this.h()},h:function(){v(i,"class","content svelte-gnxal1")},m:function(t,s){x(t,n,s),x(t,a,s),j(a,e),x(t,r,s),x(t,i,s),i.innerHTML=y},p:function(t,n){var a=w(n,1)[0];1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&o!==(o=t[0].title+"")&&b(e,o),1&a&&y!==(y=t[0].html+"")&&(i.innerHTML=y)},i:g,o:g,d:function(t){t&&d(n),t&&d(a),t&&d(r),t&&d(i)}}}function H(t){var s,n,a;return y.async(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.params,t.query,e.next=3,y.awrap(this.fetch("blog/".concat(s.slug,".json")));case 3:return n=e.sent,e.next=6,y.awrap(n.json());case 6:if(a=e.sent,200!==n.status){e.next=11;break}return e.abrupt("return",{post:a});case 11:this.error(n.status,a.message);case 12:case"end":return e.stop()}},null,this)}function T(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n(0,a=t.post)},[a]}export default(function(c){function u(t){var i;return s(this,u),i=n(this,a(u).call(this)),e(r(i),t,T,E,o,{post:0}),i}return t(u,i),u}());export{H as preload};
