(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"04DF":function(t,e,r){},"1Lyz":function(t,e,r){"use strict";var i={props:{article:{type:Object,required:!0}}},n=(r("K1Wi"),r("KHd+")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-card"},[r("figure",[r("img",{attrs:{src:t.article.image,alt:t.article.imageAlt,width:"522",height:"294",loading:"lazy"}})]),r("div",{staticClass:"article-card--content"},[r("div",{staticClass:"tag-container"},t._l(t.article.tags,(function(e,i){return r("g-link",{key:i,staticClass:"tag",attrs:{to:e.path}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),1),r("h2",[r("g-link",{attrs:{to:t.article.path}},[t._v(t._s(t.article.title))])],1),r("p",[t._v(t._s(t.article.excerpt||t.article.description))]),r("g-link",{staticClass:"arrow",attrs:{to:t.article.path}},[t._v("Read More")])],1)])}),[],!1,null,null,null);e.a=o.exports},"4Brf":function(t,e,r){"use strict";var i=r("I+eb"),n=r("g6v/"),o=r("2oRo"),s=r("UTVS"),c=r("hh1v"),a=r("m/L8").f,l=r("6JNq"),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(p[e]=!0),e};l(f,u);var g=f.prototype=u.prototype;g.constructor=f;var h=g.toString,m="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;a(g,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(s(p,t))return"";var r=m?e.slice(7,-1):e.replace(y,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:f})}},"5Tg+":function(t,e,r){var i=r("tiKp");e.f=i},"BX/b":function(t,e,r){var i=r("/GqU"),n=r("JBy8").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?function(t){try{return n(t)}catch(t){return s.slice()}}(t):n(i(t))}},K1Wi:function(t,e,r){"use strict";r("uo1b")},SPSv:function(t,e,r){"use strict";r("04DF")},"dG/n":function(t,e,r){var i=r("Qo9l"),n=r("UTVS"),o=r("5Tg+"),s=r("m/L8").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||s(e,t,{value:o.f(t)})}},iEXD:function(t,e,r){"use strict";r.r(e);r("pNMO"),r("4Brf");var i={components:{ArticleCard:r("1Lyz").a},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{key:"og:title",property:"og:title",content:this.title},{key:"og:description",property:"og:description",content:this.description},{key:"og:url",property:"og:url",content:"".concat("https://forbesg.github.io","/blog/")},{key:"twitter:title",name:"twitter:title",content:this.title},{key:"twitter:description",name:"twitter:description",content:this.description}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.io","/blog/")}]}},data:function(){return{title:"Blog | Forbes Gray | Freelance Web Developer",description:"Some of my experiences, thoughts and recommendations about all things web related.",hostname:"https://forbesg.github.io"}}},n=(r("SPSv"),r("KHd+")),o=null,s=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumbs"},[e("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[e("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+this.hostname}},[e("span",{attrs:{itemprop:"name"}},[this._v("Home")]),e("meta",{attrs:{itemprop:"position",content:"1"}})])],1),e("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("span",{attrs:{itemprop:"name"}},[this._v("Blog")]),e("meta",{attrs:{itemprop:"position",content:"2"}})])])]),e("h1",{staticClass:"highlight-overline"},[this._v("Blog")]),e("div",{staticClass:"articles"},this._l(this.$page.articles.edges,(function(t){return e("article-card",{key:t.id,attrs:{article:t.node}})})),1)])])}),[],!1,null,"22760410",null);"function"==typeof o&&o(s);e.default=s.exports},pNMO:function(t,e,r){"use strict";var i=r("I+eb"),n=r("2oRo"),o=r("0GbY"),s=r("xDBR"),c=r("g6v/"),a=r("STAE"),l=r("/b8u"),u=r("0Dky"),p=r("UTVS"),f=r("6LWA"),g=r("hh1v"),h=r("glrk"),m=r("ewvW"),y=r("/GqU"),d=r("wE6v"),b=r("XGwC"),v=r("fHMY"),S=r("33Wh"),w=r("JBy8"),O=r("BX/b"),k=r("dBg+"),_=r("Bs8V"),j=r("m/L8"),B=r("0eef"),E=r("kRJp"),C=r("busE"),L=r("VpIT"),P=r("93I0"),T=r("0BK2"),I=r("kOOl"),J=r("tiKp"),N=r("5Tg+"),x=r("dG/n"),D=r("1E5z"),G=r("afO8"),K=r("tycR").forEach,W=P("hidden"),F=J("toPrimitive"),R=G.set,U=G.getterFor("Symbol"),V=Object.prototype,$=n.Symbol,q=o("JSON","stringify"),z=_.f,A=j.f,H=O.f,M=B.f,X=L("symbols"),Q=L("op-symbols"),Y=L("string-to-symbol-registry"),Z=L("symbol-to-string-registry"),tt=L("wks"),et=n.QObject,rt=!et||!et.prototype||!et.prototype.findChild,it=c&&u((function(){return 7!=v(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=z(V,e);i&&delete V[e],A(t,e,r),i&&t!==V&&A(V,e,i)}:A,nt=function(t,e){var r=X[t]=v($.prototype);return R(r,{type:"Symbol",tag:t,description:e}),c||(r.description=e),r},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof $},st=function(t,e,r){t===V&&st(Q,e,r),h(t);var i=d(e,!0);return h(r),p(X,i)?(r.enumerable?(p(t,W)&&t[W][i]&&(t[W][i]=!1),r=v(r,{enumerable:b(0,!1)})):(p(t,W)||A(t,W,b(1,{})),t[W][i]=!0),it(t,i,r)):A(t,i,r)},ct=function(t,e){h(t);var r=y(e),i=S(r).concat(pt(r));return K(i,(function(e){c&&!at.call(r,e)||st(t,e,r[e])})),t},at=function(t){var e=d(t,!0),r=M.call(this,e);return!(this===V&&p(X,e)&&!p(Q,e))&&(!(r||!p(this,e)||!p(X,e)||p(this,W)&&this[W][e])||r)},lt=function(t,e){var r=y(t),i=d(e,!0);if(r!==V||!p(X,i)||p(Q,i)){var n=z(r,i);return!n||!p(X,i)||p(r,W)&&r[W][i]||(n.enumerable=!0),n}},ut=function(t){var e=H(y(t)),r=[];return K(e,(function(t){p(X,t)||p(T,t)||r.push(t)})),r},pt=function(t){var e=t===V,r=H(e?Q:y(t)),i=[];return K(r,(function(t){!p(X,t)||e&&!p(V,t)||i.push(X[t])})),i};(a||(C(($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===V&&r.call(Q,t),p(this,W)&&p(this[W],e)&&(this[W][e]=!1),it(this,e,b(1,t))};return c&&rt&&it(V,e,{configurable:!0,set:r}),nt(e,t)}).prototype,"toString",(function(){return U(this).tag})),C($,"withoutSetter",(function(t){return nt(I(t),t)})),B.f=at,j.f=st,_.f=lt,w.f=O.f=ut,k.f=pt,N.f=function(t){return nt(J(t),t)},c&&(A($.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),s||C(V,"propertyIsEnumerable",at,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:$}),K(S(tt),(function(t){x(t)})),i({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(p(Y,e))return Y[e];var r=$(e);return Y[e]=r,Z[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(p(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,e){return void 0===e?v(t):ct(v(t),e)},defineProperty:st,defineProperties:ct,getOwnPropertyDescriptor:lt}),i({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ut,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),q)&&i({target:"JSON",stat:!0,forced:!a||u((function(){var t=$();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t,e,r){for(var i,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(i=e,(g(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),n[1]=e,q.apply(null,n)}});$.prototype[F]||E($.prototype,F,$.prototype.valueOf),D($,"Symbol"),T[W]=!0},uo1b:function(t,e,r){}}]);