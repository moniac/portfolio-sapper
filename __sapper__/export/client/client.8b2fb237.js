import{n as e,s as t,S as s,i as r,e as n,t as o,a,c,b as l,d as i,f as u,g as f,h as p,j as h,l as m,k as d,m as g,o as $,p as v,q as b,r as y,u as w,v as S,w as E,x,y as _,z as L,A as R,B as j,C as P,D as k,E as A,F as C,G as I,H as N}from"./index.28856312.js";const U=[];function q(s,r=e){let n;const o=[];function a(e){if(t(s,e)&&(s=e,n)){const e=!U.length;for(let e=0;e<o.length;e+=1){const t=o[e];t[1](),U.push(t,s)}if(e){for(let e=0;e<U.length;e+=2)U[e][0](U[e+1]);U.length=0}}}return{set:a,update:function(e){a(e(s))},subscribe:function(t,c=e){const l=[t,c];return o.push(l),1===o.length&&(n=r(a)||e),t(s),()=>{const e=o.indexOf(l);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}const M={},O=()=>({});function z(t){let s,r,$,v,b,y,w,S,E,x,_,L,R,j;return{c(){s=n("nav"),r=n("ul"),$=n("li"),v=n("a"),b=o("Home"),y=a(),w=n("li"),S=n("a"),E=o("Blog"),x=a(),_=n("li"),L=n("button"),R=o("🌓"),this.h()},l(e){s=c(e,"NAV",{class:!0});var t=l(s);r=c(t,"UL",{class:!0});var n=l(r);$=c(n,"LI",{class:!0});var o=l($);v=c(o,"A",{href:!0,class:!0});var a=l(v);b=i(a,"Home"),a.forEach(u),o.forEach(u),y=f(n),w=c(n,"LI",{class:!0});var p=l(w);S=c(p,"A",{rel:!0,href:!0,class:!0});var h=l(S);E=i(h,"Blog"),h.forEach(u),p.forEach(u),x=f(n),_=c(n,"LI",{class:!0});var m=l(_);L=c(m,"BUTTON",{class:!0});var d=l(L);R=i(d,"🌓"),d.forEach(u),m.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){p(v,"href","."),p(v,"class","svelte-zjmb21"),h(v,"selected",void 0===t[0]),p($,"class","svelte-zjmb21"),p(S,"rel","prefetch"),p(S,"href","blog"),p(S,"class","svelte-zjmb21"),h(S,"selected","blog"===t[0]),p(w,"class","svelte-zjmb21"),p(L,"class","svelte-zjmb21"),p(_,"class","toggle svelte-zjmb21"),p(r,"class","max-w-6xl mx-auto svelte-zjmb21"),p(s,"class","svelte-zjmb21"),j=m(L,"click",H)},m(e,t){d(e,s,t),g(s,r),g(r,$),g($,v),g(v,b),g(r,y),g(r,w),g(w,S),g(S,E),g(r,x),g(r,_),g(_,L),g(L,R)},p(e,[t]){1&t&&h(v,"selected",void 0===e[0]),1&t&&h(S,"selected","blog"===e[0])},i:e,o:e,d(e){e&&u(s),j()}}}function H(){const e=localStorage.getItem("colorMode");"dark"===e&&localStorage.setItem("colorMode","light"),"light"===e&&localStorage.setItem("colorMode","dark"),window.document.body.classList.toggle("dark-mode")}function B(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment)}),[r]}class D extends s{constructor(e){super(),r(this,e,B,z,t,{segment:0})}}function T(e){let t,s,r;const o=new D({props:{segment:e[0]}}),i=e[2].default,h=$(i,e,e[1],null);return{c(){v(o.$$.fragment),t=a(),s=n("main"),h&&h.c(),this.h()},l(e){b(o.$$.fragment,e),t=f(e),s=c(e,"MAIN",{class:!0});var r=l(s);h&&h.l(r),r.forEach(u),this.h()},h(){p(s,"class","container max-w-6xl mx-auto py-16")},m(e,n){y(o,e,n),d(e,t,n),d(e,s,n),h&&h.m(s,null),r=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),o.$set(s),h&&h.p&&2&t&&h.p(w(i,e,e[1],null),S(i,e[1],t,null))},i(e){r||(E(o.$$.fragment,e),E(h,e),r=!0)},o(e){x(o.$$.fragment,e),x(h,e),r=!1},d(e){_(o,e),e&&u(t),e&&u(s),h&&h.d(e)}}}function J(){document.body.className="dark-mode",localStorage.setItem("colorMode","dark")}function V(){document.body.className="",localStorage.setItem("colorMode","light")}function K(e,t,s){let{segment:r}=t;L(()=>{!function(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=window.matchMedia("(prefers-color-scheme: light)").matches,s=window.matchMedia("(prefers-color-scheme: no-preference)").matches,r=localStorage.getItem("colorMode");if("dark"===r)return void J();if("light"===r)return void V();const n=!e&&!t&&!s;window.matchMedia("(prefers-color-scheme: dark)").addListener(e=>e.matches&&J()),window.matchMedia("(prefers-color-scheme: light)").addListener(e=>e.matches&&V()),e&&J(),t&&V(),(s||n)&&(console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time."),now=new Date,hour=now.getHours(),(hour<4||hour>=16)&&J())}()});let{$$slots:n={},$$scope:o}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,o=e.$$scope)}),[r,o,n]}class G extends s{constructor(e){super(),r(this,e,K,T,t,{segment:0})}}function Y(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=o(r)},l(e){t=c(e,"PRE",{});var n=l(t);s=i(n,r),n.forEach(u)},m(e,r){d(e,t,r),g(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&R(s,r)},d(e){e&&u(t)}}}function F(t){let s,r,h,m,$,v,b,y,w,S=t[1].message+"";document.title=s=t[0];let E=t[2]&&t[1].stack&&Y(t);return{c(){r=a(),h=n("h1"),m=o(t[0]),$=a(),v=n("p"),b=o(S),y=a(),E&&E.c(),w=j(),this.h()},l(e){r=f(e),h=c(e,"H1",{class:!0});var s=l(h);m=i(s,t[0]),s.forEach(u),$=f(e),v=c(e,"P",{class:!0});var n=l(v);b=i(n,S),n.forEach(u),y=f(e),E&&E.l(e),w=j(),this.h()},h(){p(h,"class","svelte-8od9u6"),p(v,"class","svelte-8od9u6")},m(e,t){d(e,r,t),d(e,h,t),g(h,m),d(e,$,t),d(e,v,t),g(v,b),d(e,y,t),E&&E.m(e,t),d(e,w,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&R(m,e[0]),2&t&&S!==(S=e[1].message+"")&&R(b,S),e[2]&&e[1].stack?E?E.p(e,t):((E=Y(e)).c(),E.m(w.parentNode,w)):E&&(E.d(1),E=null)},i:e,o:e,d(e){e&&u(r),e&&u(h),e&&u($),e&&u(v),e&&u(y),E&&E.d(e),e&&u(w)}}}function W(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)}),[r,n,!1]}class X extends s{constructor(e){super(),r(this,e,W,F,t,{status:0,error:1})}}function Q(e){let t,s;const r=[e[4].props];var n=e[4].component;function o(e){let t={};for(let e=0;e<r.length;e+=1)t=P(t,r[e]);return{props:t}}if(n)var a=new n(o());return{c(){a&&v(a.$$.fragment),t=j()},l(e){a&&b(a.$$.fragment,e),t=j()},m(e,r){a&&y(a,e,r),d(e,t,r),s=!0},p(e,s){const c=16&s?k(r,[A(e[4].props)]):{};if(n!==(n=e[4].component)){if(a){I();const e=a;x(e.$$.fragment,1,0,()=>{_(e,1)}),N()}n?(a=new n(o()),v(a.$$.fragment),E(a.$$.fragment,1),y(a,t.parentNode,t)):a=null}else n&&a.$set(c)},i(e){s||(a&&E(a.$$.fragment,e),s=!0)},o(e){a&&x(a.$$.fragment,e),s=!1},d(e){e&&u(t),a&&_(a,e)}}}function Z(e){let t;const s=new X({props:{error:e[0],status:e[1]}});return{c(){v(s.$$.fragment)},l(e){b(s.$$.fragment,e)},m(e,r){y(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(E(s.$$.fragment,e),t=!0)},o(e){x(s.$$.fragment,e),t=!1},d(e){_(s,e)}}}function ee(e){let t,s,r,n;const o=[Z,Q],a=[];function c(e,t){return e[0]?0:1}return t=c(e),s=a[t]=o[t](e),{c(){s.c(),r=j()},l(e){s.l(e),r=j()},m(e,s){a[t].m(e,s),d(e,r,s),n=!0},p(e,n){let l=t;(t=c(e))===l?a[t].p(e,n):(I(),x(a[l],1,1,()=>{a[l]=null}),N(),(s=a[t])||(s=a[t]=o[t](e)).c(),E(s,1),s.m(r.parentNode,r))},i(e){n||(E(s),n=!0)},o(e){x(s),n=!1},d(e){a[t].d(e),e&&u(r)}}}function te(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[ee]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=P(r,s[e]);const n=new G({props:r});return{c(){v(n.$$.fragment)},l(e){b(n.$$.fragment,e)},m(e,s){y(n,e,s),t=!0},p(e,[t]){const r=12&t?k(s,[4&t&&{segment:e[2][0]},8&t&&A(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(E(n.$$.fragment,e),t=!0)},o(e){x(n.$$.fragment,e),t=!1},d(e){_(n,e)}}}function se(e,t,s){let{stores:r}=t,{error:n}=t,{status:o}=t,{segments:a}=t,{level0:c}=t,{level1:l=null}=t;return C(M,r),e.$set=(e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,o=e.status),"segments"in e&&s(2,a=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,l=e.level1)}),[n,o,a,c,l,r]}class re extends s{constructor(e){super(),r(this,e,se,te,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const ne=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],oe=[{js:()=>import("./index.a0265029.js"),css:["index.a0265029.css"]},{js:()=>import("./index.4cadfbc0.js"),css:["index.4cadfbc0.css"]},{js:()=>import("./[slug].da224e5f.js"),css:["[slug].da224e5f.css"]}],ae=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/blog\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const ce="undefined"!=typeof __SAPPER__&&__SAPPER__;let le,ie,ue,fe=!1,pe=[],he="{}";const me={page:q({}),preloading:q(null),session:q(ce&&ce.session)};let de,ge;me.session.subscribe(async e=>{if(de=e,!fe)return;ge=!0;const t=xe(new URL(location.href)),s=ie={},{redirect:r,props:n,branch:o}=await je(t);s===ie&&await Re(r,o,n,t.page)});let $e,ve=null;let be,ye=1;const we="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},Se={};function Ee(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function xe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ce.baseUrl))return null;let t=e.pathname.slice(ce.baseUrl.length);if(""===t&&(t="/"),!ne.some(e=>e.test(t)))for(let s=0;s<ae.length;s+=1){const r=ae[s],n=r.pattern.exec(t);if(n){const s=Ee(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(n):{},c={host:location.host,path:t,query:s,params:a};return{href:e.href,route:r,match:n,page:c}}}}function _e(){return{x:pageXOffset,y:pageYOffset}}async function Le(e,t,s,r){if(t)be=t;else{const e=_e();Se[be]=e,t=be=++ye,Se[be]=s?e:{x:0,y:0}}be=t,le&&me.preloading.set(!0);const n=ve&&ve.href===e.href?ve.promise:je(e);ve=null;const o=ie={},{redirect:a,props:c,branch:l}=await n;if(o===ie&&(await Re(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=Se[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}Se[be]=e,e&&scrollTo(e.x,e.y)}}async function Re(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=xe(new URL(e,document.baseURI));return s?(we[t.replaceState?"replaceState":"pushState"]({id:be},"",e),Le(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(me.page.set(r),me.preloading.set(!1),le)le.$set(s);else{s.stores={page:{subscribe:me.page.subscribe},preloading:{subscribe:me.preloading.subscribe},session:me.session},s.level0={props:await ue};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)ke(e.nextSibling);ke(e),ke(t)}le=new re({target:$e,props:s,hydrate:!0})}pe=t,he=JSON.stringify(r.query),fe=!0,ge=!1}async function je(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;ue||(ue=ce.preloaded[0]||O.call(a,{host:s.host,path:s.path,query:s.query,params:{}},de));let l=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,s,r){if(r!==he)return!0;const n=pe[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(c,f,i,n)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:f};const p=l++;if(!ge&&!u&&pe[c]&&pe[c].part===t.i)return pe[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Pe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(oe[t.i]);let d;return d=fe||!ce.preloaded[c+1]?m?await m.call(a,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},de):{}:ce.preloaded[c+1],o[`level${p}`]={component:h,props:d,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:n,props:o,branch:c}}function Pe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function ke(e){e.parentNode.removeChild(e)}function Ae(e){const t=xe(new URL(e,document.baseURI));if(t)return ve&&e===ve.href||function(e,t){ve={href:e,promise:t}}(e,je(t)),ve.promise}let Ce;function Ie(e){clearTimeout(Ce),Ce=setTimeout(()=>{Ne(e)},20)}function Ne(e){const t=qe(e.target);t&&"prefetch"===t.rel&&Ae(t.href)}function Ue(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=qe(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const o=xe(n);if(o){Le(o,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),we.pushState({id:be},"",n.href)}}function qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Me(e){if(Se[be]=_e(),e.state){const t=xe(new URL(location.href));t?Le(t,e.state.id):location.href=location.href}else(function(e){be=e})(ye=ye+1),we.replaceState({id:be},"",location.href)}!function(e){var t;"scrollRestoration"in we&&(we.scrollRestoration="manual"),t=e.target,$e=t,addEventListener("click",Ue),addEventListener("popstate",Me),addEventListener("touchstart",Ne),addEventListener("mousemove",Ie),Promise.resolve().then(()=>{const{hash:e,href:t}=location;we.replaceState({id:ye},"",t);const s=new URL(location.href);if(ce.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:o,status:a,error:c}=ce;ue||(ue=o&&o[0]),Re(null,[],{error:c,status:a,session:n,level0:{props:ue},level1:{props:{status:a,error:c},component:X},segments:o},{host:t,path:s,query:Ee(r),params:{}})}();const r=xe(s);return r?Le(r,ye,!0,e):void 0})}({target:document.querySelector("#sapper")});
