(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4Brf":function(t,e,i){"use strict";var r=i("I+eb"),n=i("g6v/"),o=i("2oRo"),s=i("UTVS"),a=i("hh1v"),c=i("m/L8").f,p=i("6JNq"),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};p(l,u);var m=l.prototype=u.prototype;m.constructor=l;var g=m.toString,d="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=g.call(t);if(s(f,t))return"";var i=d?e.slice(7,-1):e.replace(h,"$1");return""===i?void 0:i}}),r({global:!0,forced:!0},{Symbol:l})}},"5Tg+":function(t,e,i){var r=i("tiKp");e.f=r},"9Z62":function(t,e,i){"use strict";i.r(e);i("pNMO"),i("4Brf");var r={name:"Website",components:{Card:i("ro2s").a},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{key:"og:title",property:"og:title",content:this.title},{key:"og:description",property:"og:description",content:this.description},{key:"og:url",property:"og:url",content:"".concat("https://forbesg.github.io","/portfolio/website/")},{key:"twitter:title",name:"twitter:title",content:this.title},{key:"twitter:description",name:"twitter:description",content:this.description}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.io","/portfolio/website/")}]}},data:function(){return{title:"Website Projects | Portfolio | Forbes Gray",description:"A selection of fast, responsive website projects, including static sites, content management systems and PWA's",hostname:"https://forbesg.github.io"}}},n=i("KHd+"),o=null,s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container"},[i("div",{staticClass:"breadcrumbs"},[i("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+t.hostname}},[i("span",{attrs:{itemprop:"name"}},[t._v("Home")]),i("meta",{attrs:{itemprop:"position",content:"1"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/portfolio/",itemprop:"item",itemid:t.hostname+"/portfolio/"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Portfolio")]),i("meta",{attrs:{itemprop:"position",content:"2"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Websites")]),i("meta",{attrs:{itemprop:"position",content:"3"}})])])]),i("h1",{staticClass:"highlight-overline"},[t._v("Website Projects")]),i("h2",[t._v("Websites")]),i("div",{staticClass:"cards"},t._l(t.$page.website_projects.edges,(function(e){return i("card",{key:e.id,attrs:{image:e.node.image,imageAlt:e.node.imageAlt}},[i("h3",[t._v(t._s(e.node.title))]),i("p",{staticClass:"description"},[t._v(t._s(e.node.description))]),i("g-link",{staticClass:"button small",attrs:{to:e.node.path}},[t._v("View")])],1)})),1)])])}),[],!1,null,null,null);"function"==typeof o&&o(s);e.default=s.exports},"BX/b":function(t,e,i){var r=i("/GqU"),n=i("JBy8").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?function(t){try{return n(t)}catch(t){return s.slice()}}(t):n(r(t))}},RnYb:function(t,e,i){"use strict";i("g6Zu")},"dG/n":function(t,e,i){var r=i("Qo9l"),n=i("UTVS"),o=i("5Tg+"),s=i("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});n(e,t)||s(e,t,{value:o.f(t)})}},g6Zu:function(t,e,i){},pNMO:function(t,e,i){"use strict";var r=i("I+eb"),n=i("2oRo"),o=i("0GbY"),s=i("xDBR"),a=i("g6v/"),c=i("STAE"),p=i("/b8u"),u=i("0Dky"),f=i("UTVS"),l=i("6LWA"),m=i("hh1v"),g=i("glrk"),d=i("ewvW"),h=i("/GqU"),y=i("wE6v"),b=i("XGwC"),v=i("fHMY"),w=i("33Wh"),S=i("JBy8"),O=i("BX/b"),k=i("dBg+"),_=i("Bs8V"),j=i("m/L8"),P=i("0eef"),E=i("kRJp"),B=i("busE"),L=i("VpIT"),C=i("93I0"),I=i("0BK2"),W=i("kOOl"),T=i("tiKp"),A=i("5Tg+"),J=i("dG/n"),N=i("1E5z"),G=i("afO8"),R=i("tycR").forEach,q=C("hidden"),V=T("toPrimitive"),$=G.set,x=G.getterFor("Symbol"),K=Object.prototype,U=n.Symbol,F=o("JSON","stringify"),H=_.f,Y=j.f,Z=O.f,z=P.f,D=L("symbols"),M=L("op-symbols"),Q=L("string-to-symbol-registry"),X=L("symbol-to-string-registry"),tt=L("wks"),et=n.QObject,it=!et||!et.prototype||!et.prototype.findChild,rt=a&&u((function(){return 7!=v(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=H(K,e);r&&delete K[e],Y(t,e,i),r&&t!==K&&Y(K,e,r)}:Y,nt=function(t,e){var i=D[t]=v(U.prototype);return $(i,{type:"Symbol",tag:t,description:e}),a||(i.description=e),i},ot=p?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,i){t===K&&st(M,e,i),g(t);var r=y(e,!0);return g(i),f(D,r)?(i.enumerable?(f(t,q)&&t[q][r]&&(t[q][r]=!1),i=v(i,{enumerable:b(0,!1)})):(f(t,q)||Y(t,q,b(1,{})),t[q][r]=!0),rt(t,r,i)):Y(t,r,i)},at=function(t,e){g(t);var i=h(e),r=w(i).concat(ft(i));return R(r,(function(e){a&&!ct.call(i,e)||st(t,e,i[e])})),t},ct=function(t){var e=y(t,!0),i=z.call(this,e);return!(this===K&&f(D,e)&&!f(M,e))&&(!(i||!f(this,e)||!f(D,e)||f(this,q)&&this[q][e])||i)},pt=function(t,e){var i=h(t),r=y(e,!0);if(i!==K||!f(D,r)||f(M,r)){var n=H(i,r);return!n||!f(D,r)||f(i,q)&&i[q][r]||(n.enumerable=!0),n}},ut=function(t){var e=Z(h(t)),i=[];return R(e,(function(t){f(D,t)||f(I,t)||i.push(t)})),i},ft=function(t){var e=t===K,i=Z(e?M:h(t)),r=[];return R(i,(function(t){!f(D,t)||e&&!f(K,t)||r.push(D[t])})),r};(c||(B((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=W(t),i=function(t){this===K&&i.call(M,t),f(this,q)&&f(this[q],e)&&(this[q][e]=!1),rt(this,e,b(1,t))};return a&&it&&rt(K,e,{configurable:!0,set:i}),nt(e,t)}).prototype,"toString",(function(){return x(this).tag})),B(U,"withoutSetter",(function(t){return nt(W(t),t)})),P.f=ct,j.f=st,_.f=pt,S.f=O.f=ut,k.f=ft,A.f=function(t){return nt(T(t),t)},a&&(Y(U.prototype,"description",{configurable:!0,get:function(){return x(this).description}}),s||B(K,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),R(w(tt),(function(t){J(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Q,e))return Q[e];var i=U(e);return Q[e]=i,X[i]=e,i},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(X,t))return X[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?v(t):at(v(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(d(t))}}),F)&&r({target:"JSON",stat:!0,forced:!c||u((function(){var t=U();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,i){for(var r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e,(m(e)||void 0!==t)&&!ot(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),n[1]=e,F.apply(null,n)}});U.prototype[V]||E(U.prototype,V,U.prototype.valueOf),N(U,"Symbol"),I[q]=!0},ro2s:function(t,e,i){"use strict";i("QWBl"),i("FZtP");var r={props:{image:{type:String,required:!1},imageAlt:{type:String,required:!1}},mounted:function(){var t=this,e=this.$refs["lazy-image"],i=(document.querySelector(".card"),new IntersectionObserver((function(e,r){e.forEach((function(e){e.isIntersecting&&(e.target.src=t.image,i.unobserve(e.target))}))})));i.observe(e)}},n=(i("RnYb"),i("KHd+")),o=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.image?e("figure",[e("img",{ref:"lazy-image",attrs:{src:this.image,alt:this.imageAlt,width:"530",height:"299"}})]):this._e(),e("div",{staticClass:"card--content"},[this._t("default")],2)])}),[],!1,null,"3d63dd24",null);e.a=o.exports}}]);