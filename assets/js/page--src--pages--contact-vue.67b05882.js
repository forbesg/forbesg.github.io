(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4Brf":function(t,e,r){"use strict";var o=r("I+eb"),n=r("g6v/"),i=r("2oRo"),a=r("UTVS"),s=r("hh1v"),c=r("m/L8").f,l=r("6JNq"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(m,u);var p=m.prototype=u.prototype;p.constructor=m;var d=p.toString,g="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=d.call(t);if(a(f,t))return"";var r=g?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),o({global:!0,forced:!0},{Symbol:m})}},"5Tg+":function(t,e,r){var o=r("tiKp");e.f=o},"BX/b":function(t,e,r){var o=r("/GqU"),n=r("JBy8").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return n(t)}catch(t){return a.slice()}}(t):n(o(t))}},"dG/n":function(t,e,r){var o=r("Qo9l"),n=r("UTVS"),i=r("5Tg+"),a=r("m/L8").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});n(e,t)||a(e,t,{value:i.f(t)})}},kUJL:function(t,e,r){},pNMO:function(t,e,r){"use strict";var o=r("I+eb"),n=r("2oRo"),i=r("0GbY"),a=r("xDBR"),s=r("g6v/"),c=r("STAE"),l=r("/b8u"),u=r("0Dky"),f=r("UTVS"),m=r("6LWA"),p=r("hh1v"),d=r("glrk"),g=r("ewvW"),h=r("/GqU"),v=r("wE6v"),b=r("XGwC"),y=r("fHMY"),w=r("33Wh"),S=r("JBy8"),_=r("BX/b"),C=r("dBg+"),O=r("Bs8V"),k=r("m/L8"),x=r("0eef"),P=r("kRJp"),j=r("busE"),N=r("VpIT"),B=r("93I0"),E=r("0BK2"),L=r("kOOl"),A=r("tiKp"),T=r("5Tg+"),I=r("dG/n"),J=r("1E5z"),q=r("afO8"),G=r("tycR").forEach,M=B("hidden"),z=A("toPrimitive"),F=q.set,K=q.getterFor("Symbol"),$=Object.prototype,D=n.Symbol,R=i("JSON","stringify"),U=O.f,Y=k.f,W=_.f,Q=x.f,V=N("symbols"),H=N("op-symbols"),Z=N("string-to-symbol-registry"),X=N("symbol-to-string-registry"),tt=N("wks"),et=n.QObject,rt=!et||!et.prototype||!et.prototype.findChild,ot=s&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,r){var o=U($,e);o&&delete $[e],Y(t,e,r),o&&t!==$&&Y($,e,o)}:Y,nt=function(t,e){var r=V[t]=y(D.prototype);return F(r,{type:"Symbol",tag:t,description:e}),s||(r.description=e),r},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof D},at=function(t,e,r){t===$&&at(H,e,r),d(t);var o=v(e,!0);return d(r),f(V,o)?(r.enumerable?(f(t,M)&&t[M][o]&&(t[M][o]=!1),r=y(r,{enumerable:b(0,!1)})):(f(t,M)||Y(t,M,b(1,{})),t[M][o]=!0),ot(t,o,r)):Y(t,o,r)},st=function(t,e){d(t);var r=h(e),o=w(r).concat(ft(r));return G(o,(function(e){s&&!ct.call(r,e)||at(t,e,r[e])})),t},ct=function(t){var e=v(t,!0),r=Q.call(this,e);return!(this===$&&f(V,e)&&!f(H,e))&&(!(r||!f(this,e)||!f(V,e)||f(this,M)&&this[M][e])||r)},lt=function(t,e){var r=h(t),o=v(e,!0);if(r!==$||!f(V,o)||f(H,o)){var n=U(r,o);return!n||!f(V,o)||f(r,M)&&r[M][o]||(n.enumerable=!0),n}},ut=function(t){var e=W(h(t)),r=[];return G(e,(function(t){f(V,t)||f(E,t)||r.push(t)})),r},ft=function(t){var e=t===$,r=W(e?H:h(t)),o=[];return G(r,(function(t){!f(V,t)||e&&!f($,t)||o.push(V[t])})),o};(c||(j((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===$&&r.call(H,t),f(this,M)&&f(this[M],e)&&(this[M][e]=!1),ot(this,e,b(1,t))};return s&&rt&&ot($,e,{configurable:!0,set:r}),nt(e,t)}).prototype,"toString",(function(){return K(this).tag})),j(D,"withoutSetter",(function(t){return nt(L(t),t)})),x.f=ct,k.f=at,O.f=lt,S.f=_.f=ut,C.f=ft,T.f=function(t){return nt(A(t),t)},s&&(Y(D.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),a||j($,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:D}),G(w(tt),(function(t){I(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Z,e))return Z[e];var r=D(e);return Z[e]=r,X[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(X,t))return X[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(t,e){return void 0===e?y(t):st(y(t),e)},defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:lt}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ut,getOwnPropertySymbols:ft}),o({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(g(t))}}),R)&&o({target:"JSON",stat:!0,forced:!c||u((function(){var t=D();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}))},{stringify:function(t,e,r){for(var o,n=[t],i=1;arguments.length>i;)n.push(arguments[i++]);if(o=e,(p(e)||void 0!==t)&&!it(t))return m(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!it(e))return e}),n[1]=e,R.apply(null,n)}});D.prototype[z]||P(D.prototype,z,D.prototype.valueOf),J(D,"Symbol"),E[M]=!0},w981:function(t,e,r){"use strict";r.r(e);r("pNMO"),r("4Brf"),r("QWBl"),r("sMBO"),r("07d7");var o={metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{key:"og:title",property:"og:title",content:this.title},{key:"og:description",property:"og:description",content:this.description},{key:"og:url",property:"og:url",content:"".concat("https://forbesg.github.io","/contact/")},{key:"twitter:title",name:"twitter:title",content:this.title},{key:"twitter:description",name:"twitter:description",content:this.description}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.io","/contact/")}],script:[{src:"https://www.google.com/recaptcha/api.js?render=6LfAtbQZAAAAALIFif4qLLmJc-Khmg4iKxMm6F6G",body:!0}]}},data:function(){return{title:"Contact - Freelance Web Developer Edinburgh",description:"If you're looking for a freelance web developer in Scotland please do get in touch. You can find contact details here.",form:{name:"",email:"",phone_number:"",message:"",error:"",loading:!1},formSuccess:!1,path:this.$route.fullPath}},methods:{handleSubmitForm:function(){var t=this;this.form.loading=!0,this.form.error="";var e=this.form,r=e.name,o=e.email,n=e.phone_number,i=e.message;if(["name","email","message"].forEach((function(e){t.form[e]||document.querySelector("#".concat(e)).classList.add("highlight")})),!r||!o||!i)return this.form.error="Please complete all the required fields above",void(this.form.loading=!1);grecaptcha.execute("6LfAtbQZAAAAALIFif4qLLmJc-Khmg4iKxMm6F6G",{action:"submit"}).then((function(t){return document.getElementById("captchaResponse").value=t,fetch("https://getform.io/f/ce537464-4e11-4163-b480-35d3fd2b7305",{method:"POST",body:JSON.stringify({name:r,email:o,phone_number:n,message:i}),headers:{"Content-Type":"application/json",Accept:"application/json"}})})).then((function(t){if(200===t.status)return t.json();throw"New Error"})).then((function(e){t.form.loading=!1,t.formSuccess=!!e.success})).catch((function(t){console.log(t)}))}}},n=(r("xDaZ"),r("KHd+")),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"container"},[r("h1",{staticClass:"highlight-overline"},[t._v("Get in touch")]),r("div",{staticClass:"flex-container"},[r("div",{staticClass:"left"},[r("g-image",{attrs:{src:"/images/me.jpg",alt:"Forbes Gray"}}),r("h4",[t._v("Contact Information")]),r("address",{staticClass:"address"},[r("span",[t._v("Forbes Gray")]),r("span",[t._v("Edinburgh")]),r("span",[t._v("EH6 4LB")])]),r("ul",{staticClass:"social-links"},[r("li",[r("a",{attrs:{href:"https://www.github.com/forbesg",rel:"noopener",target:"_blank"}},[r("svg",{attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[t._v("GitHub icon")]),r("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})]),t._v("\n              forbesg\n            ")])]),r("li",[r("a",{attrs:{href:"https://www.twitter.com/4beez",rel:"noopener",target:"_blank"}},[r("svg",{attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[t._v("Twitter icon")]),r("path",{attrs:{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}})]),t._v("\n              @4beez\n            ")])]),r("li",[r("a",{attrs:{href:"https://www.instagram.com/4beeeez",rel:"noopener",target:"_blank"}},[r("svg",{attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[t._v("Instagram icon")]),r("path",{attrs:{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}})]),t._v("\n              @4beeeez\n            ")])])])],1),r("div",{staticClass:"right"},[t.formSuccess?r("div",{staticClass:"success-message"},[r("p",{staticClass:"title"},[t._v("Thank you")]),r("p",{staticClass:"sub-title"},[t._v("Your message has been sent")]),r("p",[t._v("\n            I will be intouch shortly regarding your enquiry.\n          ")])]):r("div",[r("form",{ref:"contact_form",attrs:{action:"https://getform.io/f/ce537464-4e11-4163-b480-35d3fd2b7305",method:"post",enctype:"json"},on:{submit:function(e){return e.preventDefault(),t.handleSubmitForm(e)}}},[r("input",{attrs:{type:"hidden",id:"captchaResponse",name:"g-recaptcha-response"}}),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",name:"name",id:"name",placeholder:"Your Name - required"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email Address: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",name:"email",id:"email",placeholder:"Your Email - required"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone_number"}},[t._v("Phone Number: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone_number,expression:"form.phone_number"}],attrs:{type:"tel",name:"phone_number",id:"phone_number",placeholder:"Your Number"},domProps:{value:t.form.phone_number},on:{input:function(e){e.target.composing||t.$set(t.form,"phone_number",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"message"}},[t._v("Message: ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],attrs:{name:"message",id:"message",rows:"8",placeholder:"Message - required"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t.form.error?r("div",{staticClass:"error"},[r("p",[t._v("Please complete all required fields")])]):t._e(),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"submit"}}),r("input",{staticClass:"button",class:{loading:t.form.loading},attrs:{type:"submit"},domProps:{value:t.form.loading?"Sending...":"Send"}})])])])])])])])}),[],!1,null,"f5808532",null);e.default=i.exports},xDaZ:function(t,e,r){"use strict";r("kUJL")}}]);