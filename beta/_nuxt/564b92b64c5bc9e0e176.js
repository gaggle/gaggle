(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=122},138:function(t,e,n){"use strict";var r=n(40);n.n(r).a},139:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},140:function(t,e,n){"use strict";var r=n(41);n.n(r).a},141:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},162:function(t,e,n){"use strict";n.r(e);n(63),n(49),n(50);var r=n(21),o=n.n(r),i=(n(34),n(35),n(102),n(4)),a=n.n(i),s=(n(104),n(105),n(78),n(28),n(57),n(79),n(109),n(121),n(0)),u=(n(59),n(122)),c=u.keys();function p(t){var e=u(t);return e.default||e}var l={},f=!0,h=!1,d=void 0;try{for(var m,x=c[Symbol.iterator]();!(f=(m=x.next()).done);f=!0){var g=m.value;l[g.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(g)}}catch(t){h=!0,d=t}finally{try{f||null==x.return||x.return()}finally{if(h)throw d}}var v=l,y=(n(123),n(124),n(125),n(127),n(129),n(130),n(133),n(22)),b=n.n(y),w=function(){return{}};function _(t,e){var n=t.options.data||w;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function k(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function R(t){return Promise.all(k(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=C(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function E(t){return T.apply(this,arguments)}function T(){return(T=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",b()({},e,{meta:$(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function j(t,e){return S.apply(this,arguments)}function S(){return(S=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/beta/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=Q(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,E(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,E(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function q(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function O(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?D:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=i[c.name||"pathMatch"],l=void 0;if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=P.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var l=t[i],f=n[2],h=n[3],d=n[4],m=n[5],x=n[6],g=n[7];a&&(r.push(a),a="");var v=null!=f&&null!=l&&l!==f,y="+"===x||"*"===x,b="?"===x||"*"===x,w=n[2]||s,_=d||m;r.push({name:h||o++,prefix:f||"",delimiter:w,optional:b,repeat:y,partial:v,asterisk:!!g,pattern:_?B(_):g?".*":"[^"+L(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function M(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Q(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var U=n(90),z=n.n(U),I=n(61),V=function(){return n.e(2).then(n.bind(null,177)).then(function(t){return t.default||t})};s.a.use(I.a),window.history.scrollRestoration="manual";var J=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var H=n(91),K=n.n(H).a,W={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,p={};F.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};X.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(i))});var f=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(i,t)};var h=[t("router-view",r)];return o.keepAlive&&(h=[t("keep-alive",{props:o.keepAliveProps},h)]),t("transition",{props:p,on:l},h)}},F=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],X=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],G={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},Y={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Z=(n(138),n(15)),tt=Object(Z.a)(Y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,et={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||O(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:W,NuxtError:tt}},nt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},rt=(n(140),Object(Z.a)(nt,void 0,void 0,!1,null,null,null).exports),ot=(n(142),{_default:Object(Z.a)({},function(){var t=this.$createElement;return(this._self._c||t)("nuxt")},[],!1,null,null,null).exports}),it={head:{title:"gaggle",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no"},{hid:"description",name:"description",content:"Website for jonlauridsen.com"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"gaggle"},{hid:"author",name:"author",content:"Jon Lauridsen"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"gaggle"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"gaggle"},{hid:"og:description",name:"og:description",property:"og:description",content:"Website for jonlauridsen.com"}],link:[{rel:"icon",type:"image/x-icon",href:"/beta/favicon.ico"},{rel:"manifest",href:"/beta/_nuxt/manifest.e2f46414.json"},{rel:"shortcut icon",href:"/beta/_nuxt/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/beta/_nuxt/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],style:[],script:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ot["_"+t]||(t="default"),this.layoutName=t,this.layout=ot["_"+t],this.layout},loadLayout:function(t){return t&&ot["_"+t]||(t="default"),Promise.resolve(ot["_"+t])}},components:{NuxtLoading:rt}},at=n(62),st=n.n(at),ut=function(t,e){return ct.apply(this,arguments)};function ct(){return(ct=a()(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n((r={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/beta/_nuxt/icons/icon_64.9mld2VBMsQ$.png",120:"/beta/_nuxt/icons/icon_120.9mld2VBMsQ$.png",144:"/beta/_nuxt/icons/icon_144.9mld2VBMsQ$.png",152:"/beta/_nuxt/icons/icon_152.9mld2VBMsQ$.png",192:"/beta/_nuxt/icons/icon_192.9mld2VBMsQ$.png",384:"/beta/_nuxt/icons/icon_384.9mld2VBMsQ$.png",512:"/beta/_nuxt/icons/icon_512.9mld2VBMsQ$.png"}}).iconProperty.replace("$",""),pt(r.icons));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}for(var pt=function(t){return function(e){return t[e]||""}},lt=n(92),ft=n.n(lt),ht={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,i=void 0;try{for(var a,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},dt=["request","delete","get","head","options","post","put","patch"],mt=function(){var t=dt[xt];ht["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},xt=0;xt<dt.length;xt++)mt();var gt=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=ft.a.create(n);!function(t){for(var e in ht)t[e]=ht[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var i=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=i,t.defaults.onDownloadProgress=i}(r),t.$axios=r,e("axios",r)};s.a.component(K.name,K),s.a.component(W.name,W),s.a.component(G.name,G),s.a.component(et.name,et),s.a.use(z.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var vt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function yt(){return(yt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new I.a({mode:"history",base:"/beta/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:J,routes:[{path:"/",component:V,name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:vt,transitions:[vt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},vt,{name:t}):Object.assign({},vt,t):vt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?N(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},it),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=q(n.options.base),i=n.resolve(a).route),t.next=8,j(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof ut){t.next=12;break}return t.next=12,ut(r.context,u);case 12:if("function"!=typeof gt){t.next=15;break}return t.next=15,gt(r.context,u);case 15:if("function"!=typeof st.a){t.next=19;break}return t.next=19,st()(r.context,u);case 19:t.next=22;break;case 22:return t.abrupt("return",{app:r,router:n});case 23:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var bt,wt,_t=[],Ct=window.__NUXT__||{};function $t(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function kt(t,e,n){return Rt.apply(this,arguments)}function Rt(){return(Rt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!bt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?M(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,R(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Et(t,e){return Ct.serverRendered&&e&&_(t,e),t._Ctor=t,t}function Tt(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof v[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),v[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():A(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function jt(t,e,n){return St.apply(this,arguments)}function St(){return(St=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,p,l,f,h,d,m,x,g,v,y,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return _t=e===n?[]:$(n,o=[]).map(function(t,e){return O(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),i||(i=!0,r(t))},t.next=7,j(bt,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=bt.nuxt.dateErr,this._hadError=!!bt.nuxt.err,(c=$(e,u=[])).length){t.next=25;break}return t.next=14,Tt.call(this,c,bt.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof tt.layout?tt.layout(bt.context):tt.layout);case 18:return p=t.sent,t.next=21,Tt.call(this,c,bt.context,p);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return bt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions($t(c,e,n)),t.prev=27,t.next=30,Tt.call(this,c,bt.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!bt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(bt.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,Tt.call(this,c,bt.context,l);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!bt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,m=void 0,t.prev=50,x=c[Symbol.iterator]();case 52:if(h=(g=x.next()).done){t.next=64;break}if("function"==typeof(v=g.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,v.options.validate(bt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,h||null==x.return||x.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=O(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==_t[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=A(t.options.asyncData,bt.context).then(function(e){_(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var p=t.options.fetch(bt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(y=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,y));case 97:return _t=[],C=y,s.a.config.errorHandler&&s.a.config.errorHandler(C),"function"==typeof(b=tt.layout)&&(b=b(bt.context)),t.next=103,this.loadLayout(b);case 103:this.error(y),this.$nuxt.$emit("routeChanged",e,n,y),r(!1);case 106:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function At(t,e){k(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function qt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?tt.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(bt.context)),this.setLayout(e)}function Ot(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=$(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),qt.call(n,t)})}function Mt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),wt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Nt(){return(Nt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return bt=e.app,wt=e.router,t.next=4,Promise.all((c=void 0,c=q((u=wt).options.base,u.options.mode),k(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=Et(C(e),Ct.data?Ct.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(bt),o=Ct.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Mt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions($t(n,wt.currentRoute)),_t=wt.currentRoute.matched.map(function(t){return O(t.path)(wt.currentRoute.params)})),r.$loading={},Ct.error&&r.error(Ct.error),wt.beforeEach(kt.bind(r)),wt.beforeEach(jt.bind(r)),wt.afterEach(At),wt.afterEach(Ot.bind(r)),!Ct.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:jt.call(r,wt.currentRoute,wt.currentRoute,function(t){if(!t)return At(wt.currentRoute,wt.currentRoute),qt.call(r,wt.currentRoute),void i();wt.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return yt.apply(this,arguments)}().then(function(t){return Nt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},40:function(t,e,n){var r=n(139);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(43).default)("45b1ddea",r,!0,{})},41:function(t,e,n){var r=n(141);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(43).default)("fd547dac",r,!0,{})},62:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/beta/sw.js",{scope:"/beta/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},93:function(t,e,n){t.exports=n(162)}},[[93,3,1,4]]]);