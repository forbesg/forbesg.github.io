(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3/5O":function(t,e,i){"use strict";i("ZEAs")},"4Brf":function(t,e,i){"use strict";var n=i("I+eb"),o=i("g6v/"),r=i("2oRo"),s=i("UTVS"),a=i("hh1v"),c=i("m/L8").f,p=i("6JNq"),l=r.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(u[e]=!0),e};p(f,l);var m=f.prototype=l.prototype;m.constructor=f;var d=m.toString,g="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(u,t))return"";var i=g?e.slice(7,-1):e.replace(y,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:f})}},"5Tg+":function(t,e,i){var n=i("tiKp");e.f=n},"BX/b":function(t,e,i){var n=i("/GqU"),o=i("JBy8").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(n(t))}},WnqQ:function(t,e,i){"use strict";i.r(e);i("pNMO"),i("4Brf");var n={name:"WebApplications",components:{Card:i("ro2s").a},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{key:"og:title",property:"og:title",content:this.title},{key:"og:description",property:"og:description",content:this.description},{key:"og:url",property:"og:url",content:"".concat("https://forbesg.github.io","/portfolio/web-application/")},{key:"twitter:title",name:"twitter:title",content:this.title},{key:"twitter:description",name:"twitter:description",content:this.description}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.io","/portfolio/web-application/")}]}},data:function(){return{title:"Web Applications | Portfolio | Forbes Gray",description:"A selection of Web Application projects, including headless e-commerce webites and online booking system applications.",hostname:"https://forbesg.github.io"}}},o=i("KHd+"),r=null,s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container"},[i("div",{staticClass:"breadcrumbs"},[i("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+t.hostname}},[i("span",{attrs:{itemprop:"name"}},[t._v("Home")]),i("meta",{attrs:{itemprop:"position",content:"1"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/portfolio/",itemprop:"item",itemid:t.hostname+"/portfolio/"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Portfolio")]),i("meta",{attrs:{itemprop:"position",content:"2"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Web Application")]),i("meta",{attrs:{itemprop:"position",content:"3"}})])])]),i("h1",{staticClass:"highlight-overline"},[t._v("Web Application Projects")]),i("div",{staticClass:"cards"},t._l(t.$page.webapp_projects.edges,(function(e){return i("card",{key:e.id,attrs:{image:e.node.image,imageAlt:e.node.imageAlt,link:{path:e.node.path,text:"View",class:"button small"}}},[i("h3",[t._v(t._s(e.node.title))]),i("p",{staticClass:"description"},[t._v(t._s(e.node.description))])])})),1)])])}),[],!1,null,null,null);"function"==typeof r&&r(s);e.default=s.exports},ZEAs:function(t,e,i){},"dG/n":function(t,e,i){var n=i("Qo9l"),o=i("UTVS"),r=i("5Tg+"),s=i("m/L8").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||s(e,t,{value:r.f(t)})}},pNMO:function(t,e,i){"use strict";var n=i("I+eb"),o=i("2oRo"),r=i("0GbY"),s=i("xDBR"),a=i("g6v/"),c=i("STAE"),p=i("/b8u"),l=i("0Dky"),u=i("UTVS"),f=i("6LWA"),m=i("hh1v"),d=i("glrk"),g=i("ewvW"),y=i("/GqU"),h=i("wE6v"),b=i("XGwC"),v=i("fHMY"),w=i("33Wh"),S=i("JBy8"),O=i("BX/b"),k=i("dBg+"),_=i("Bs8V"),j=i("m/L8"),E=i("0eef"),A=i("kRJp"),P=i("busE"),B=i("VpIT"),C=i("93I0"),L=i("0BK2"),I=i("kOOl"),W=i("tiKp"),T=i("5Tg+"),q=i("dG/n"),J=i("1E5z"),N=i("afO8"),x=i("tycR").forEach,G=C("hidden"),V=W("toPrimitive"),$=N.set,K=N.getterFor("Symbol"),R=Object.prototype,U=o.Symbol,F=r("JSON","stringify"),H=_.f,Q=j.f,z=O.f,D=E.f,M=B("symbols"),X=B("op-symbols"),Z=B("string-to-symbol-registry"),Y=B("symbol-to-string-registry"),tt=B("wks"),et=o.QObject,it=!et||!et.prototype||!et.prototype.findChild,nt=a&&l((function(){return 7!=v(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=H(R,e);n&&delete R[e],Q(t,e,i),n&&t!==R&&Q(R,e,n)}:Q,ot=function(t,e){var i=M[t]=v(U.prototype);return $(i,{type:"Symbol",tag:t,description:e}),a||(i.description=e),i},rt=p?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,i){t===R&&st(X,e,i),d(t);var n=h(e,!0);return d(i),u(M,n)?(i.enumerable?(u(t,G)&&t[G][n]&&(t[G][n]=!1),i=v(i,{enumerable:b(0,!1)})):(u(t,G)||Q(t,G,b(1,{})),t[G][n]=!0),nt(t,n,i)):Q(t,n,i)},at=function(t,e){d(t);var i=y(e),n=w(i).concat(ut(i));return x(n,(function(e){a&&!ct.call(i,e)||st(t,e,i[e])})),t},ct=function(t){var e=h(t,!0),i=D.call(this,e);return!(this===R&&u(M,e)&&!u(X,e))&&(!(i||!u(this,e)||!u(M,e)||u(this,G)&&this[G][e])||i)},pt=function(t,e){var i=y(t),n=h(e,!0);if(i!==R||!u(M,n)||u(X,n)){var o=H(i,n);return!o||!u(M,n)||u(i,G)&&i[G][n]||(o.enumerable=!0),o}},lt=function(t){var e=z(y(t)),i=[];return x(e,(function(t){u(M,t)||u(L,t)||i.push(t)})),i},ut=function(t){var e=t===R,i=z(e?X:y(t)),n=[];return x(i,(function(t){!u(M,t)||e&&!u(R,t)||n.push(M[t])})),n};(c||(P((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),i=function(t){this===R&&i.call(X,t),u(this,G)&&u(this[G],e)&&(this[G][e]=!1),nt(this,e,b(1,t))};return a&&it&&nt(R,e,{configurable:!0,set:i}),ot(e,t)}).prototype,"toString",(function(){return K(this).tag})),P(U,"withoutSetter",(function(t){return ot(I(t),t)})),E.f=ct,j.f=st,_.f=pt,S.f=O.f=lt,k.f=ut,T.f=function(t){return ot(W(t),t)},a&&(Q(U.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),s||P(R,"propertyIsEnumerable",ct,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),x(w(tt),(function(t){q(t)})),n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var i=U(e);return Z[e]=i,Y[i]=e,i},keyFor:function(t){if(!rt(t))throw TypeError(t+" is not a symbol");if(u(Y,t))return Y[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?v(t):at(v(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ut}),n({target:"Object",stat:!0,forced:l((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(g(t))}}),F)&&n({target:"JSON",stat:!0,forced:!c||l((function(){var t=U();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,i){for(var n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e,(m(e)||void 0!==t)&&!rt(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!rt(e))return e}),o[1]=e,F.apply(null,o)}});U.prototype[V]||A(U.prototype,V,U.prototype.valueOf),J(U,"Symbol"),L[G]=!0},ro2s:function(t,e,i){"use strict";i("QWBl"),i("FZtP");var n={props:{image:{type:String,required:!1},imageAlt:{type:String,required:!1},link:{type:Object,required:!1}},mounted:function(){var t=this,e=this.$refs["lazy-image"],i=(document.querySelector(".card"),new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(e.target.src=t.image,i.unobserve(e.target))}))})));i.observe(e)}},o=(i("3/5O"),i("KHd+")),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[t.image?i("figure",[i("img",{ref:"lazy-image",attrs:{src:t.image,alt:t.imageAlt,width:"530",height:"299"}})]):t._e(),i("div",{staticClass:"card--content"},[i("div",{staticClass:"card--content--body"},[t._t("default")],2),t.link?i("footer",{staticClass:"card--content-footer"},[i("g-link",{class:t.link.class,attrs:{to:t.link.path}},[t._v(t._s(t.link.text))])],1):t._e()])])}),[],!1,null,"a66bf1be",null);e.a=r.exports}}]);