import{S as t,i as s,s as e,e as l,t as n,a as r,c as o,b as a,d as h,f as c,g as f,h as i,k as u,m as p,A as g,n as m,I as d}from"./index.28856312.js";function v(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,m,d,v,b=t[1].title+"";return{c(){s=l("li"),e=l("a"),m=n(b),v=r(),this.h()},l(t){s=o(t,"LI",{});var l=a(s);e=o(l,"A",{rel:!0,href:!0});var n=a(e);m=h(n,b),n.forEach(c),v=f(l),l.forEach(c),this.h()},h(){i(e,"rel","prefetch"),i(e,"href",d="blog/"+t[1].slug)},m(t,l){u(t,s,l),p(s,e),p(e,m),p(s,v)},p(t,s){1&s&&b!==(b=t[1].title+"")&&g(m,b),1&s&&d!==(d="blog/"+t[1].slug)&&i(e,"href",d)},d(t){t&&c(s)}}}function x(t){let s,e,g,x,E,j=t[0],k=[];for(let s=0;s<j.length;s+=1)k[s]=b(v(t,j,s));return{c(){s=r(),e=l("h1"),g=n("Recent posts"),x=r(),E=l("ul");for(let t=0;t<k.length;t+=1)k[t].c();this.h()},l(t){s=f(t),e=o(t,"H1",{});var l=a(e);g=h(l,"Recent posts"),l.forEach(c),x=f(t),E=o(t,"UL",{class:!0});var n=a(E);for(let t=0;t<k.length;t+=1)k[t].l(n);n.forEach(c),this.h()},h(){document.title="Blog",i(E,"class","svelte-1uzksw3")},m(t,l){u(t,s,l),u(t,e,l),p(e,g),u(t,x,l),u(t,E,l);for(let t=0;t<k.length;t+=1)k[t].m(E,null)},p(t,[s]){if(1&s){let e;for(j=t[0],e=0;e<j.length;e+=1){const l=v(t,j,e);k[e]?k[e].p(l,s):(k[e]=b(l),k[e].c(),k[e].m(E,null))}for(;e<k.length;e+=1)k[e].d(1);k.length=j.length}},i:m,o:m,d(t){t&&c(s),t&&c(e),t&&c(x),t&&c(E),d(k,t)}}}function E({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function j(t,s,e){let{posts:l}=s;return t.$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,j,x,e,{posts:0})}}export{E as preload};