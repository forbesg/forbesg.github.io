(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4Brf":function(t,e,i){"use strict";var o=i("I+eb"),n=i("g6v/"),r=i("2oRo"),s=i("UTVS"),a=i("hh1v"),c=i("m/L8").f,p=i("6JNq"),l=r.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(u[e]=!0),e};p(f,l);var m=f.prototype=l.prototype;m.constructor=f;var g=m.toString,d="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=g.call(t);if(s(u,t))return"";var i=d?e.slice(7,-1):e.replace(h,"$1");return""===i?void 0:i}}),o({global:!0,forced:!0},{Symbol:f})}},"5Tg+":function(t,e,i){var o=i("tiKp");e.f=o},"BX/b":function(t,e,i){var o=i("/GqU"),n=i("JBy8").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?function(t){try{return n(t)}catch(t){return s.slice()}}(t):n(o(t))}},RnYb:function(t,e,i){"use strict";i("g6Zu")},WnqQ:function(t,e,i){"use strict";i.r(e);i("pNMO"),i("4Brf");var o={name:"WebApplications",components:{Card:i("ro2s").a},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{key:"og:title",property:"og:title",content:this.title},{key:"og:description",property:"og:description",content:this.description},{key:"og:url",property:"og:url",content:"".concat("https://forbesg.github.io","/portfolio/web-application/")},{key:"twitter:title",name:"twitter:title",content:this.title},{key:"twitter:description",name:"twitter:description",content:this.description}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.io","/portfolio/web-application/")}]}},data:function(){return{title:"Web Applications | Portfolio | Forbes Gray",description:"A selection of Web Application projects, including headless e-commerce webites and online booking system applications.",hostname:"https://forbesg.github.io"}}},n=i("KHd+"),r=null,s=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container"},[i("div",{staticClass:"breadcrumbs"},[i("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+t.hostname}},[i("span",{attrs:{itemprop:"name"}},[t._v("Home")]),i("meta",{attrs:{itemprop:"position",content:"1"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/portfolio/",itemprop:"item",itemid:t.hostname+"/portfolio/"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Portfolio")]),i("meta",{attrs:{itemprop:"position",content:"2"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Web Application")]),i("meta",{attrs:{itemprop:"position",content:"3"}})])])]),i("h1",{staticClass:"highlight-overline"},[t._v("Web Application Projects")]),i("div",{staticClass:"cards"},t._l(t.$page.webapp_projects.edges,(function(e){return i("card",{key:e.id,attrs:{image:e.node.image,imageAlt:e.node.imageAlt}},[i("h3",[t._v(t._s(e.node.title))]),i("p",{staticClass:"description"},[t._v(t._s(e.node.description))]),i("g-link",{staticClass:"button small",attrs:{to:e.node.path}},[t._v("View")])],1)})),1)])])}),[],!1,null,null,null);"function"==typeof r&&r(s);e.default=s.exports},"dG/n":function(t,e,i){var o=i("Qo9l"),n=i("UTVS"),r=i("5Tg+"),s=i("m/L8").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});n(e,t)||s(e,t,{value:r.f(t)})}},g6Zu:function(t,e,i){},pNMO:function(t,e,i){"use strict";var o=i("I+eb"),n=i("2oRo"),r=i("0GbY"),s=i("xDBR"),a=i("g6v/"),c=i("STAE"),p=i("/b8u"),l=i("0Dky"),u=i("UTVS"),f=i("6LWA"),m=i("hh1v"),g=i("glrk"),d=i("ewvW"),h=i("/GqU"),y=i("wE6v"),b=i("XGwC"),v=i("fHMY"),w=i("33Wh"),S=i("JBy8"),O=i("BX/b"),k=i("dBg+"),_=i("Bs8V"),j=i("m/L8"),E=i("0eef"),P=i("kRJp"),A=i("busE"),B=i("VpIT"),L=i("93I0"),C=i("0BK2"),I=i("kOOl"),W=i("tiKp"),T=i("5Tg+"),J=i("dG/n"),N=i("1E5z"),q=i("afO8"),G=i("tycR").forEach,R=L("hidden"),V=W("toPrimitive"),$=q.set,x=q.getterFor("Symbol"),K=Object.prototype,U=n.Symbol,F=r("JSON","stringify"),H=_.f,Q=j.f,Y=O.f,z=E.f,D=B("symbols"),M=B("op-symbols"),X=B("string-to-symbol-registry"),Z=B("symbol-to-string-registry"),tt=B("wks"),et=n.QObject,it=!et||!et.prototype||!et.prototype.findChild,ot=a&&l((function(){return 7!=v(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,i){var o=H(K,e);o&&delete K[e],Q(t,e,i),o&&t!==K&&Q(K,e,o)}:Q,nt=function(t,e){var i=D[t]=v(U.prototype);return $(i,{type:"Symbol",tag:t,description:e}),a||(i.description=e),i},rt=p?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,i){t===K&&st(M,e,i),g(t);var o=y(e,!0);return g(i),u(D,o)?(i.enumerable?(u(t,R)&&t[R][o]&&(t[R][o]=!1),i=v(i,{enumerable:b(0,!1)})):(u(t,R)||Q(t,R,b(1,{})),t[R][o]=!0),ot(t,o,i)):Q(t,o,i)},at=function(t,e){g(t);var i=h(e),o=w(i).concat(ut(i));return G(o,(function(e){a&&!ct.call(i,e)||st(t,e,i[e])})),t},ct=function(t){var e=y(t,!0),i=z.call(this,e);return!(this===K&&u(D,e)&&!u(M,e))&&(!(i||!u(this,e)||!u(D,e)||u(this,R)&&this[R][e])||i)},pt=function(t,e){var i=h(t),o=y(e,!0);if(i!==K||!u(D,o)||u(M,o)){var n=H(i,o);return!n||!u(D,o)||u(i,R)&&i[R][o]||(n.enumerable=!0),n}},lt=function(t){var e=Y(h(t)),i=[];return G(e,(function(t){u(D,t)||u(C,t)||i.push(t)})),i},ut=function(t){var e=t===K,i=Y(e?M:h(t)),o=[];return G(i,(function(t){!u(D,t)||e&&!u(K,t)||o.push(D[t])})),o};(c||(A((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),i=function(t){this===K&&i.call(M,t),u(this,R)&&u(this[R],e)&&(this[R][e]=!1),ot(this,e,b(1,t))};return a&&it&&ot(K,e,{configurable:!0,set:i}),nt(e,t)}).prototype,"toString",(function(){return x(this).tag})),A(U,"withoutSetter",(function(t){return nt(I(t),t)})),E.f=ct,j.f=st,_.f=pt,S.f=O.f=lt,k.f=ut,T.f=function(t){return nt(W(t),t)},a&&(Q(U.prototype,"description",{configurable:!0,get:function(){return x(this).description}}),s||A(K,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),G(w(tt),(function(t){J(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(X,e))return X[e];var i=U(e);return X[e]=i,Z[i]=e,i},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(u(Z,t))return Z[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?v(t):at(v(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:pt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ut}),o({target:"Object",stat:!0,forced:l((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(d(t))}}),F)&&o({target:"JSON",stat:!0,forced:!c||l((function(){var t=U();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,i){for(var o,n=[t],r=1;arguments.length>r;)n.push(arguments[r++]);if(o=e,(m(e)||void 0!==t)&&!rt(t))return f(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!rt(e))return e}),n[1]=e,F.apply(null,n)}});U.prototype[V]||P(U.prototype,V,U.prototype.valueOf),N(U,"Symbol"),C[R]=!0},ro2s:function(t,e,i){"use strict";i("QWBl"),i("FZtP");var o={props:{image:{type:String,required:!1},imageAlt:{type:String,required:!1}},mounted:function(){var t=this,e=this.$refs["lazy-image"],i=(document.querySelector(".card"),new IntersectionObserver((function(e,o){e.forEach((function(e){e.isIntersecting&&(e.target.src=t.image,i.unobserve(e.target))}))})));i.observe(e)}},n=(i("RnYb"),i("KHd+")),r=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.image?e("figure",[e("img",{ref:"lazy-image",attrs:{src:this.image,alt:this.imageAlt,width:"530",height:"299"}})]):this._e(),e("div",{staticClass:"card--content"},[this._t("default")],2)])}),[],!1,null,"3d63dd24",null);e.a=r.exports}}]);