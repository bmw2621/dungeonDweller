var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e,n,o){if(t){const s=a(t,e,n,o);return t[0](s)}}function a(t,e,o,s){return t[1]&&s?n(o.ctx.slice(),t[1](s(e))):o.ctx}function d(t,e,n,o,s,r,i){const l=function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(e,o,s,r);if(l){const s=a(e,n,o,i);t.p(s,l)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const $="undefined"!=typeof window;let p=$?()=>window.performance.now():()=>Date.now(),m=$?t=>requestAnimationFrame(t):t;const g=new Set;function h(t){g.forEach((e=>{e.c(t)||(g.delete(e),e.f())})),0!==g.size&&m(h)}function v(t){let e;return 0===g.size&&m(h),{promise:new Promise((n=>{g.add(e={c:t,f:n})})),abort(){g.delete(e)}}}function b(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function M(){return k(" ")}function B(){return k("")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){for(const n in e)E(t,n,e[n])}function R(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const j=new Set;let L,N=0;function z(t,e,n,o,s,r,i,l=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*r(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,f=t.ownerDocument;j.add(f);const $=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(x("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,$.insertRule(`@keyframes ${d} ${a}`,$.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${s}ms 1 both`,N+=1,d}function T(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),N-=s,N||m((()=>{N||(j.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),j.clear())})))}function D(t){L=t}function O(){const t=function(){if(!L)throw new Error("Function called outside component initialization");return L}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=S(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function H(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const Y=[],P=[],q=[],F=[],G=Promise.resolve();let J=!1;function I(t){q.push(t)}let U=!1;const K=new Set;function Q(){if(!U){U=!0;do{for(let t=0;t<Y.length;t+=1){const e=Y[t];D(e),V(e.$$)}for(D(null),Y.length=0;P.length;)P.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];K.has(e)||(K.add(e),e())}q.length=0}while(Y.length);for(;F.length;)F.pop()();J=!1,U=!1,K.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}let W;function X(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function Z(t,e,n){t.dispatchEvent(S(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function ot(){et.r||r(et.c),et=et.p}function st(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function rt(t,e,n,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const it={duration:0};function lt(n,o,s){let r,l,c=o(n,s),u=!1,a=0;function d(){r&&T(n,r)}function f(){const{delay:o=0,duration:s=300,easing:i=e,tick:f=t,css:$}=c||it;$&&(r=z(n,0,1,s,o,i,$,a++)),f(0,1);const m=p()+o,g=m+s;l&&l.abort(),u=!0,I((()=>Z(n,!0,"start"))),l=v((t=>{if(u){if(t>=g)return f(1,0),Z(n,!0,"end"),d(),u=!1;if(t>=m){const e=i((t-m)/s);f(e,1-e)}}return u}))}let $=!1;return{start(){$||(T(n),i(c)?(c=c(),X().then(f)):f())},invalidate(){$=!1},end(){u&&(d(),u=!1)}}}function ct(n,o,s){let l,c=o(n,s),u=!0;const a=et;function d(){const{delay:o=0,duration:s=300,easing:i=e,tick:d=t,css:f}=c||it;f&&(l=z(n,1,0,s,o,i,f));const $=p()+o,m=$+s;I((()=>Z(n,!1,"start"))),v((t=>{if(u){if(t>=m)return d(0,1),Z(n,!1,"end"),--a.r||r(a.c),!1;if(t>=$){const e=i((t-$)/s);d(1-e,e)}}return u}))}return a.r+=1,i(c)?X().then((()=>{c=c(),d()})):d(),{end(t){t&&c.tick&&c.tick(1,0),u&&(l&&T(n,l),u=!1)}}}function ut(t,e){const n={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],l=e[r];if(l){for(const t in i)t in l||(o[t]=1);for(const t in l)s[t]||(n[t]=l[t],s[t]=1);t[r]=l}else for(const t in i)s[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function at(t){t&&t.c()}function dt(t,e,n,s){const{fragment:l,on_mount:c,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,n),s||I((()=>{const e=c.map(o).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(I)}function ft(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(Y.push(t),J||(J=!0,G.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,o,i,l,c,u=[-1]){const a=L;D(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1};let f=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),f&&$t(e,t)),n})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&st(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),Q()}D(a)}class mt{$destroy(){ft(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function gt(t,{delay:n=0,duration:o=400,easing:s=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*r}}function ht(t){let e,n;return{c(){e=_("title"),n=k(t[2])},m(t,o){y(t,e,o),b(e,n)},p(t,e){4&e&&R(n,t[2])},d(t){t&&w(e)}}}function vt(t){let e,o,s,i,l;const c=t[11].default,a=u(c,t,t[10],null),f=a||function(t){let e,n=t[2]&&ht(t);return{c(){n&&n.c(),e=B()},m(t,o){n&&n.m(t,o),y(t,e,o)},p(t,o){t[2]?n?n.p(t,o):(n=ht(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&w(e)}}}(t);let $=[{"data-carbon-icon":"ChevronLeft32"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"32"},{height:"32"},{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},{style:t[3]},{id:t[1]},t[4]],p={};for(let t=0;t<$.length;t+=1)p=n(p,$[t]);return{c(){e=_("svg"),o=_("path"),f&&f.c(),E(o,"d","M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"),A(e,p)},m(n,r){y(n,e,r),b(e,o),f&&f.m(e,null),s=!0,i||(l=[C(e,"click",t[12]),C(e,"mouseover",t[13]),C(e,"mouseenter",t[14]),C(e,"mouseleave",t[15]),C(e,"keyup",t[16]),C(e,"keydown",t[17])],i=!0)},p(t,[n]){a?a.p&&(!s||1024&n)&&d(a,c,t,t[10],n,null,null):f&&f.p&&4&n&&f.p(t,n),A(e,p=ut($,[{"data-carbon-icon":"ChevronLeft32"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"32"},{height:"32"},(!s||1&n)&&{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},(!s||8&n)&&{style:t[3]},(!s||2&n)&&{id:t[1]},16&n&&t[4]]))},i(t){s||(st(f,t),s=!0)},o(t){rt(f,t),s=!1},d(t){t&&w(e),f&&f.d(t),i=!1,r(l)}}}function bt(t,e,o){let s,r,i,l,{$$slots:c={},$$scope:u}=e,{class:a}=e,{id:d}=e,{tabindex:$}=e,{focusable:p=!1}=e,{title:m}=e,{style:g}=e;return t.$$set=t=>{o(18,e=n(n({},e),f(t))),"class"in t&&o(0,a=t.class),"id"in t&&o(1,d=t.id),"tabindex"in t&&o(5,$=t.tabindex),"focusable"in t&&o(6,p=t.focusable),"title"in t&&o(2,m=t.title),"style"in t&&o(3,g=t.style),"$$scope"in t&&o(10,u=t.$$scope)},t.$$.update=()=>{o(7,s=e["aria-label"]),o(8,r=e["aria-labelledby"]),388&t.$$.dirty&&o(9,i=s||r||m),992&t.$$.dirty&&o(4,l={"aria-label":s,"aria-labelledby":r,"aria-hidden":!i||void 0,role:i?"img":void 0,focusable:"0"===$||p,tabindex:$})},e=f(e),[a,d,m,g,l,$,p,s,r,i,u,c,function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)}]}class yt extends mt{constructor(t){super(),pt(this,t,bt,vt,l,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}}function wt(e){let n,o,s,r,i,l,c,u;return i=new yt({props:{id:"leftBarArrow"}}),{c(){n=x("div"),o=x("div"),o.innerHTML='<button class="svelte-t7k2v6">Add Map</button> \n        <button class="svelte-t7k2v6">Button 2</button> \n        <button class="svelte-t7k2v6">Button 3</button> \n        <button class="svelte-t7k2v6">Button 4</button>',s=M(),r=x("div"),at(i.$$.fragment),E(o,"id","leftBar"),E(o,"class","svelte-t7k2v6"),E(r,"id","toggle"),E(r,"class","svelte-t7k2v6"),E(n,"id","leftBarContainer"),E(n,"class","svelte-t7k2v6")},m(t,e){y(t,n,e),b(n,o),b(n,s),b(n,r),dt(i,r,null),u=!0},p:t,i(t){u||(st(i.$$.fragment,t),I((()=>{c&&c.end(1),l||(l=lt(n,gt,{delay:400})),l.start()})),u=!0)},o(t){rt(i.$$.fragment,t),l&&l.invalidate(),c=ct(n,gt,{}),u=!1},d(t){t&&w(n),ft(i),t&&c&&c.end()}}}class xt extends mt{constructor(t){super(),pt(this,t,null,wt,l,{})}}function _t(t){let e,n;return{c(){e=_("title"),n=k(t[2])},m(t,o){y(t,e,o),b(e,n)},p(t,e){4&e&&R(n,t[2])},d(t){t&&w(e)}}}function kt(t){let e,o,s,i,l;const c=t[11].default,a=u(c,t,t[10],null),f=a||function(t){let e,n=t[2]&&_t(t);return{c(){n&&n.c(),e=B()},m(t,o){n&&n.m(t,o),y(t,e,o)},p(t,o){t[2]?n?n.p(t,o):(n=_t(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&w(e)}}}(t);let $=[{"data-carbon-icon":"ChevronRight32"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"32"},{height:"32"},{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},{style:t[3]},{id:t[1]},t[4]],p={};for(let t=0;t<$.length;t+=1)p=n(p,$[t]);return{c(){e=_("svg"),o=_("path"),f&&f.c(),E(o,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),A(e,p)},m(n,r){y(n,e,r),b(e,o),f&&f.m(e,null),s=!0,i||(l=[C(e,"click",t[12]),C(e,"mouseover",t[13]),C(e,"mouseenter",t[14]),C(e,"mouseleave",t[15]),C(e,"keyup",t[16]),C(e,"keydown",t[17])],i=!0)},p(t,[n]){a?a.p&&(!s||1024&n)&&d(a,c,t,t[10],n,null,null):f&&f.p&&4&n&&f.p(t,n),A(e,p=ut($,[{"data-carbon-icon":"ChevronRight32"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"32"},{height:"32"},(!s||1&n)&&{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},(!s||8&n)&&{style:t[3]},(!s||2&n)&&{id:t[1]},16&n&&t[4]]))},i(t){s||(st(f,t),s=!0)},o(t){rt(f,t),s=!1},d(t){t&&w(e),f&&f.d(t),i=!1,r(l)}}}function Mt(t,e,o){let s,r,i,l,{$$slots:c={},$$scope:u}=e,{class:a}=e,{id:d}=e,{tabindex:$}=e,{focusable:p=!1}=e,{title:m}=e,{style:g}=e;return t.$$set=t=>{o(18,e=n(n({},e),f(t))),"class"in t&&o(0,a=t.class),"id"in t&&o(1,d=t.id),"tabindex"in t&&o(5,$=t.tabindex),"focusable"in t&&o(6,p=t.focusable),"title"in t&&o(2,m=t.title),"style"in t&&o(3,g=t.style),"$$scope"in t&&o(10,u=t.$$scope)},t.$$.update=()=>{o(7,s=e["aria-label"]),o(8,r=e["aria-labelledby"]),388&t.$$.dirty&&o(9,i=s||r||m),992&t.$$.dirty&&o(4,l={"aria-label":s,"aria-labelledby":r,"aria-hidden":!i||void 0,role:i?"img":void 0,focusable:"0"===$||p,tabindex:$})},e=f(e),[a,d,m,g,l,$,p,s,r,i,u,c,function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)},function(e){H(t,e)}]}class Bt extends mt{constructor(t){super(),pt(this,t,Mt,kt,l,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}}const Ct=[];function Et(e,n=t){let o;const s=[];function r(t){if(l(e,t)&&(e=t,o)){const t=!Ct.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Ct.push(n,e)}if(t){for(let t=0;t<Ct.length;t+=2)Ct[t][0](Ct[t+1]);Ct.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,l=t){const c=[i,l];return s.push(c),1===s.length&&(o=n(r)||t),i(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const At=Et(null),Rt=Et(null),St=Et([]);function jt(e){let n,o,s,r,i,l,c,u,a,d,f,$,p;return u=new Bt({props:{id:"rightBarArrow"}}),{c(){n=x("div"),o=x("div"),s=x("div"),s.innerHTML='<button class="svelte-11uga5d">Button 1</button> \n            <button class="svelte-11uga5d">Button 2</button> \n            <button class="svelte-11uga5d">Button 3</button>',r=M(),i=x("button"),i.textContent="Exit",l=M(),c=x("div"),at(u.$$.fragment),E(s,"id","gameButtons"),E(s,"class","svelte-11uga5d"),E(i,"id","exit"),E(i,"class","svelte-11uga5d"),E(o,"id","rightBar"),E(o,"class","svelte-11uga5d"),E(c,"id","toggle"),E(c,"class","svelte-11uga5d"),E(n,"id","rightBarContainer"),E(n,"class","svelte-11uga5d")},m(t,a){y(t,n,a),b(n,o),b(o,s),b(o,r),b(o,i),b(n,l),b(n,c),dt(u,c,null),f=!0,$||(p=C(i,"click",e[0]),$=!0)},p:t,i(t){f||(st(u.$$.fragment,t),I((()=>{d&&d.end(1),a||(a=lt(n,gt,{delay:400})),a.start()})),f=!0)},o(t){rt(u.$$.fragment,t),a&&a.invalidate(),d=ct(n,gt,{}),f=!1},d(t){t&&w(n),ft(u),t&&d&&d.end(),$=!1,p()}}}function Lt(t){return[()=>{At.set(null),Rt.set(null),St.set([])}]}class Nt extends mt{constructor(t){super(),pt(this,t,Lt,jt,l,{})}}function zt(t){let e,n,o,s,r,i;n=new xt({}),s=new Nt({});const l=t[1].default,c=u(l,t,t[0],null);return{c(){e=x("div"),at(n.$$.fragment),o=M(),at(s.$$.fragment),r=M(),c&&c.c()},m(t,l){y(t,e,l),dt(n,e,null),b(e,o),dt(s,e,null),b(e,r),c&&c.m(e,null),i=!0},p(t,[e]){c&&c.p&&(!i||1&e)&&d(c,l,t,t[0],e,null,null)},i(t){i||(st(n.$$.fragment,t),st(s.$$.fragment,t),st(c,t),i=!0)},o(t){rt(n.$$.fragment,t),rt(s.$$.fragment,t),rt(c,t),i=!1},d(t){t&&w(e),ft(n),ft(s),c&&c.d(t)}}}function Tt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class Dt extends mt{constructor(t){super(),pt(this,t,Tt,zt,l,{})}}function Ot(e){let n,o,s,r,i,l,c,u,a,d,f,$=e[0].title+"",p=e[0].gameMaster+"",m=e[1](e[0].createdAt)+"";return{c(){var t,e,d;n=x("tr"),o=x("td"),s=k($),r=M(),i=x("td"),l=k(p),c=M(),u=x("td"),a=k(m),E(o,"class","padRight svelte-15fnm6r"),E(i,"class","padRight svelte-15fnm6r"),t="text-align",e="right",u.style.setProperty(t,e,d?"important":""),E(n,"class","svelte-15fnm6r")},m(t,$){y(t,n,$),b(n,o),b(o,s),b(n,r),b(n,i),b(i,l),b(n,c),b(n,u),b(u,a),d||(f=C(n,"click",e[2]),d=!0)},p(t,[e]){1&e&&$!==($=t[0].title+"")&&R(s,$),1&e&&p!==(p=t[0].gameMaster+"")&&R(l,p),1&e&&m!==(m=t[1](t[0].createdAt)+"")&&R(a,m)},i:t,o:t,d(t){t&&w(n),d=!1,f()}}}function Ht(t,e,n){let{campaign:o}=e;const s=O();return t.$$set=t=>{"campaign"in t&&n(0,o=t.campaign)},[o,t=>new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"}),()=>{s("campaignSelected",o)}]}class Yt extends mt{constructor(t){super(),pt(this,t,Ht,Ot,l,{campaign:0})}}function Pt(t,e,n){const o=t.slice();return o[2]=e[n],o}function qt(e){let n,o;return n=new Yt({props:{campaign:e[2]}}),n.$on("campaignSelected",e[1]),{c(){at(n.$$.fragment)},m(t,e){dt(n,t,e),o=!0},p:t,i(t){o||(st(n.$$.fragment,t),o=!0)},o(t){rt(n.$$.fragment,t),o=!1},d(t){ft(n,t)}}}function Ft(t){let e,n,o,s,r,i,l,c,u=t[0],a=[];for(let e=0;e<u.length;e+=1)a[e]=qt(Pt(t,u,e));const d=t=>rt(a[t],1,1,(()=>{a[t]=null}));return{c(){e=x("h2"),e.textContent="Select Campaign",n=M(),o=x("table"),s=x("tr"),s.innerHTML='<th class="padRight svelte-1tjek3p">Campaign</th> \n        <th class="padRight svelte-1tjek3p">GameMaster</th> \n        <th style="text-align: right" class="svelte-1tjek3p">Start Date</th>',r=M();for(let t=0;t<a.length;t+=1)a[t].c();i=M(),l=x("div"),l.innerHTML='<button class="svelte-1tjek3p">New</button>',E(e,"class","svelte-1tjek3p"),E(o,"class","svelte-1tjek3p"),E(l,"id","campaignButtons"),E(l,"class","svelte-1tjek3p")},m(t,u){y(t,e,u),y(t,n,u),y(t,o,u),b(o,s),b(o,r);for(let t=0;t<a.length;t+=1)a[t].m(o,null);y(t,i,u),y(t,l,u),c=!0},p(t,[e]){if(1&e){let n;for(u=t[0],n=0;n<u.length;n+=1){const s=Pt(t,u,n);a[n]?(a[n].p(s,e),st(a[n],1)):(a[n]=qt(s),a[n].c(),st(a[n],1),a[n].m(o,null))}for(nt(),n=u.length;n<a.length;n+=1)d(n);ot()}},i(t){if(!c){for(let t=0;t<u.length;t+=1)st(a[t]);c=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)rt(a[t]);c=!1},d(t){t&&w(e),t&&w(n),t&&w(o),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(a,t),t&&w(i),t&&w(l)}}}function Gt(t){return[[{title:"Battle of IcewindDale",gameMaster:"Drizzt Do'herden",createdAt:"Fri Jun 18 2021 22:44:34 GMT-0400"}],function(e){H(t,e)}]}class Jt extends mt{constructor(t){super(),pt(this,t,Gt,Ft,l,{})}}function It(t){let e,n,o,s;const r=t[1].default,i=u(r,t,t[0],null);return{c(){e=x("div"),i&&i.c(),E(e,"id","modal"),E(e,"class","svelte-7toc0z")},m(t,n){y(t,e,n),i&&i.m(e,null),s=!0},p(t,[e]){i&&i.p&&(!s||1&e)&&d(i,r,t,t[0],e,null,null)},i(t){s||(st(i,t),I((()=>{o&&o.end(1),n||(n=lt(e,gt,{delay:400})),n.start()})),s=!0)},o(t){rt(i,t),n&&n.invalidate(),o=ct(e,gt,{}),s=!1},d(t){t&&w(e),i&&i.d(t),t&&o&&o.end()}}}function Ut(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class Kt extends mt{constructor(t){super(),pt(this,t,Ut,It,l,{})}}function Qt(e){let n,o;return n=new Jt({}),n.$on("campaignSelected",e[1]),{c(){at(n.$$.fragment)},m(t,e){dt(n,t,e),o=!0},p:t,i(t){o||(st(n.$$.fragment,t),o=!0)},o(t){rt(n.$$.fragment,t),o=!1},d(t){ft(n,t)}}}function Vt(t){let e,n,o,s,r;return s=new Kt({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){e=x("div"),n=x("video"),n.innerHTML='<track kind="captions"/><source src="bg.webm" type="video/webm"/>\n        Your browser does not support the video tag.',o=M(),at(s.$$.fragment),n.loop=!0,n.autoplay=!0,E(n,"class","svelte-ji1nhq"),E(e,"id","container")},m(t,i){y(t,e,i),b(e,n),b(e,o),dt(s,e,null),r=!0},p(t,[e]){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){r||(st(s.$$.fragment,t),r=!0)},o(t){rt(s.$$.fragment,t),r=!1},d(t){t&&w(e),ft(s)}}}function Wt(t){const e=t=>{alert(JSON.stringify(t.detail,null,2))};return[e,t=>e(t)]}class Xt extends mt{constructor(t){super(),pt(this,t,Wt,Vt,l,{})}}function Zt(t){let e,n;return e=new Xt({}),{c(){at(e.$$.fragment)},m(t,o){dt(e,t,o),n=!0},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ft(e,t)}}}function te(e){return{c:t,m:t,i:t,o:t,d:t}}function ee(t){let e,n,o,s;const r=[te,Zt],i=[];function l(t,e){return t[0]?0:1}return e=l(t),n=i[e]=r[e](t),{c(){n.c(),o=B()},m(t,n){i[e].m(t,n),y(t,o,n),s=!0},p(t,s){let c=e;e=l(t),e!==c&&(nt(),rt(i[c],1,1,(()=>{i[c]=null})),ot(),n=i[e],n||(n=i[e]=r[e](t),n.c()),st(n,1),n.m(o.parentNode,o))},i(t){s||(st(n),s=!0)},o(t){rt(n),s=!1},d(t){i[e].d(t),t&&w(o)}}}function ne(t){let e,n;return e=new Dt({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){at(e.$$.fragment)},m(t,o){dt(e,t,o),n=!0},p(t,[n]){const o={};3&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(st(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ft(e,t)}}}function oe(t,e,n){let o;return c(t,At,(t=>n(0,o=t))),[o]}return new class extends mt{constructor(t){super(),pt(this,t,oe,ne,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
