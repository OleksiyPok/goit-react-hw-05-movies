/*! For license information please see 535.94606314.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[535],{3535:function(t,r,e){e.r(r),e.d(r,{default:function(){return Z}});var n,o,i,a,u,c,s=e(5861),l=e(9439),h=e(2791),f=e(1087),p=e(3443),d=e(1413),v=e(8174),y=(e(5462),e(168)),g=e(5867),m=g.ZP.button(n||(n=(0,y.Z)(["\n  margin: 20px;\n  margin-left: 0px;\n  width: 80px;\n  color: white;\n  font-weight: 700;\n  background-color: darkblue;\n  border: 2px solid darkblue;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n"]))),b=g.ZP.input(o||(o=(0,y.Z)(["\n  color: darkblue;\n  border: 2px solid darkblue;\n  border-radius: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding-left: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]))),x=e(184),w=function(t){var r=t.getSearchQuery,e=t.prevSeachQuery,n=(0,h.useState)(null!==e?e:""),o=(0,l.Z)(n,2),i=o[0],a=o[1];return(0,x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(i),i||v.Am.error("Enter a search string")},children:[(0,x.jsx)(b,{type:"text",name:"search",value:i,autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(t){a(t.target.value)}}),(0,x.jsx)(m,{type:"submit",children:"Search"}),(0,x.jsx)(v.Ix,(0,d.Z)({},{position:"top-left",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,pauseOnHover:!0}))]})},L=e(9728),k=e(8929),E=(g.ZP.div(i||(i=(0,y.Z)([""]))),g.ZP.h1(a||(a=(0,y.Z)([""]))));g.ZP.input(u||(u=(0,y.Z)(["\n  color: darkblue;\n  border: 2px solid darkblue;\n  border-radius: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding-left: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]))),g.ZP.button(c||(c=(0,y.Z)(["\n  margin: 20px;\n  margin-left: 0px;\n  width: 80px;\n  color: white;\n  font-weight: 700;\n  background-color: darkblue;\n  border: 2px solid darkblue;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n"])));function _(){_=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(O){c=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),u=new j(o||[]);return n(a,"_invoke",{value:w(t,e,u)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var v={};c(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(Z([])));g&&g!==r&&e.call(g,i)&&(v=g);var m=d.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(n,i,a,u){var c=l(t[n],t,i);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function w(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=L(a,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function Z(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=c(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),c(m,u,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:Z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var j=function(){var t=(0,h.useState)(!1),r=(0,l.Z)(t,2),e=r[0],n=r[1],o=(0,f.lr)(""),i=(0,l.Z)(o,2),a=i[0],u=i[1],c=(0,h.useState)([]),d=(0,l.Z)(c,2),v=d[0],y=d[1],g=a.get("search");return(0,h.useEffect)((function(){n(!0);var t=function(){var t=(0,s.Z)(_().mark((function t(r){var e,o;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.on)(r);case 3:e=t.sent,o=e.results,y(o),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:return t.prev=11,n(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(r){return t.apply(this,arguments)}}();t(g)}),[g]),(0,x.jsxs)(h.Suspense,{children:[e&&(0,x.jsx)(k.Z,{}),(0,x.jsx)(E,{children:"Movie search"}),(0,x.jsx)(w,{getSearchQuery:function(t){u(""!==t?{search:t}:{})},prevSeachQuery:g}),(0,x.jsx)(L.Z,{movies:v})]})},Z=j}}]);
//# sourceMappingURL=535.94606314.chunk.js.map