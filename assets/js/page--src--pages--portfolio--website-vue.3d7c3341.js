(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1xdW":function(t,e,i){"use strict";i("8l7e")},"4Brf":function(t,e,i){"use strict";var r=i("I+eb"),o=i("g6v/"),n=i("2oRo"),s=i("UTVS"),a=i("hh1v"),c=i("m/L8").f,p=i("6JNq"),u=n.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};p(f,u);var m=f.prototype=u.prototype;m.constructor=f;var g=m.toString,d="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=g.call(t);if(s(l,t))return"";var i=d?e.slice(7,-1):e.replace(h,"$1");return""===i?void 0:i}}),r({global:!0,forced:!0},{Symbol:f})}},"5Tg+":function(t,e,i){var r=i("tiKp");e.f=r},"8l7e":function(t,e,i){},"9Z62":function(t,e,i){"use strict";i.r(e);i("pNMO"),i("4Brf");var r={name:"Website",components:{Card:i("ro2s").a},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{key:"og:title",property:"og:title",content:this.title},{key:"og:description",property:"og:description",content:this.description},{key:"og:url",property:"og:url",content:"".concat("https://forbesg.github.io","/portfolio/website/")},{key:"twitter:title",name:"twitter:title",content:this.title},{key:"twitter:description",name:"twitter:description",content:this.description}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.io","/portfolio/website/")}]}},data:function(){return{title:"Website Projects - Portfolio - Forbes Gray",description:"A selection of fast, responsive website projects, including static sites, content management systems and PWA's",hostname:"https://forbesg.github.io"}}},o=i("KHd+"),n=null,s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container"},[i("div",{staticClass:"breadcrumbs"},[i("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+t.hostname}},[i("span",{attrs:{itemprop:"name"}},[t._v("Home")]),i("meta",{attrs:{itemprop:"position",content:"1"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/portfolio/",itemprop:"item",itemid:t.hostname+"/portfolio/"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Portfolio")]),i("meta",{attrs:{itemprop:"position",content:"2"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Websites")]),i("meta",{attrs:{itemprop:"position",content:"3"}})])])]),i("h1",{staticClass:"highlight-overline"},[t._v("Website Projects")]),i("h2",[t._v("Websites")]),i("div",{staticClass:"cards"},t._l(t.$page.website_projects.edges,(function(e){return i("card",{key:e.id,attrs:{image:e.node.image,imageAlt:e.node.imageAlt}},[i("h3",[t._v(t._s(e.node.title))]),i("p",{staticClass:"description"},[t._v(t._s(e.node.description))]),i("g-link",{staticClass:"button small",attrs:{to:e.node.path}},[t._v("View")])],1)})),1)])])}),[],!1,null,null,null);"function"==typeof n&&n(s);e.default=s.exports},"BX/b":function(t,e,i){var r=i("/GqU"),o=i("JBy8").f,n={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==n.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(r(t))}},"dG/n":function(t,e,i){var r=i("Qo9l"),o=i("UTVS"),n=i("5Tg+"),s=i("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:n.f(t)})}},pNMO:function(t,e,i){"use strict";var r=i("I+eb"),o=i("2oRo"),n=i("0GbY"),s=i("xDBR"),a=i("g6v/"),c=i("STAE"),p=i("/b8u"),u=i("0Dky"),l=i("UTVS"),f=i("6LWA"),m=i("hh1v"),g=i("glrk"),d=i("ewvW"),h=i("/GqU"),y=i("wE6v"),b=i("XGwC"),v=i("fHMY"),w=i("33Wh"),S=i("JBy8"),O=i("BX/b"),k=i("dBg+"),_=i("Bs8V"),j=i("m/L8"),P=i("0eef"),E=i("kRJp"),W=i("busE"),B=i("VpIT"),L=i("93I0"),C=i("0BK2"),I=i("kOOl"),T=i("tiKp"),A=i("5Tg+"),J=i("dG/n"),N=i("1E5z"),x=i("afO8"),G=i("tycR").forEach,q=L("hidden"),V=T("toPrimitive"),$=x.set,K=x.getterFor("Symbol"),R=Object.prototype,U=o.Symbol,F=n("JSON","stringify"),H=_.f,z=j.f,D=O.f,M=P.f,Q=B("symbols"),X=B("op-symbols"),Y=B("string-to-symbol-registry"),Z=B("symbol-to-string-registry"),tt=B("wks"),et=o.QObject,it=!et||!et.prototype||!et.prototype.findChild,rt=a&&u((function(){return 7!=v(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=H(R,e);r&&delete R[e],z(t,e,i),r&&t!==R&&z(R,e,r)}:z,ot=function(t,e){var i=Q[t]=v(U.prototype);return $(i,{type:"Symbol",tag:t,description:e}),a||(i.description=e),i},nt=p?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,i){t===R&&st(X,e,i),g(t);var r=y(e,!0);return g(i),l(Q,r)?(i.enumerable?(l(t,q)&&t[q][r]&&(t[q][r]=!1),i=v(i,{enumerable:b(0,!1)})):(l(t,q)||z(t,q,b(1,{})),t[q][r]=!0),rt(t,r,i)):z(t,r,i)},at=function(t,e){g(t);var i=h(e),r=w(i).concat(lt(i));return G(r,(function(e){a&&!ct.call(i,e)||st(t,e,i[e])})),t},ct=function(t){var e=y(t,!0),i=M.call(this,e);return!(this===R&&l(Q,e)&&!l(X,e))&&(!(i||!l(this,e)||!l(Q,e)||l(this,q)&&this[q][e])||i)},pt=function(t,e){var i=h(t),r=y(e,!0);if(i!==R||!l(Q,r)||l(X,r)){var o=H(i,r);return!o||!l(Q,r)||l(i,q)&&i[q][r]||(o.enumerable=!0),o}},ut=function(t){var e=D(h(t)),i=[];return G(e,(function(t){l(Q,t)||l(C,t)||i.push(t)})),i},lt=function(t){var e=t===R,i=D(e?X:h(t)),r=[];return G(i,(function(t){!l(Q,t)||e&&!l(R,t)||r.push(Q[t])})),r};(c||(W((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),i=function(t){this===R&&i.call(X,t),l(this,q)&&l(this[q],e)&&(this[q][e]=!1),rt(this,e,b(1,t))};return a&&it&&rt(R,e,{configurable:!0,set:i}),ot(e,t)}).prototype,"toString",(function(){return K(this).tag})),W(U,"withoutSetter",(function(t){return ot(I(t),t)})),P.f=ct,j.f=st,_.f=pt,S.f=O.f=ut,k.f=lt,A.f=function(t){return ot(T(t),t)},a&&(z(U.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),s||W(R,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),G(w(tt),(function(t){J(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(Y,e))return Y[e];var i=U(e);return Y[e]=i,Z[i]=e,i},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?v(t):at(v(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ut,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(d(t))}}),F)&&r({target:"JSON",stat:!0,forced:!c||u((function(){var t=U();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,i){for(var r,o=[t],n=1;arguments.length>n;)o.push(arguments[n++]);if(r=e,(m(e)||void 0!==t)&&!nt(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!nt(e))return e}),o[1]=e,F.apply(null,o)}});U.prototype[V]||E(U.prototype,V,U.prototype.valueOf),N(U,"Symbol"),C[q]=!0},ro2s:function(t,e,i){"use strict";i("QWBl"),i("FZtP");var r={props:{image:{type:String,required:!1},imageAlt:{type:String,required:!1}},mounted:function(){var t=this,e=this.$refs["lazy-image"],i=(document.querySelector(".card"),new IntersectionObserver((function(e,r){e.forEach((function(e){e.isIntersecting&&(e.target.src=t.image,i.unobserve(e.target))}))})));i.observe(e)}},o=(i("1xdW"),i("KHd+")),n=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.image?e("figure",[e("img",{ref:"lazy-image",attrs:{src:this.image,alt:this.imageAlt,width:"530",height:"299"}})]):this._e(),e("div",{staticClass:"card--content"},[this._t("default")],2)])}),[],!1,null,"36d21086",null);e.a=n.exports}}]);