(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{167:function(t,e,i){},168:function(t,e,i){"use strict";var s=i(167);i.n(s).a},169:function(t,e,i){"use strict";i(26),i(27);var s={props:{image:{type:String,required:!1}},mounted:function(){var t=this,e=this.$refs["lazy-image"],i=(document.querySelector(".card"),new IntersectionObserver((function(e,s){e.forEach((function(e){e.isIntersecting&&(e.target.src=t.image,i.unobserve(e.target))}))})));i.observe(e)}},n=(i(168),i(18)),a=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.image?e("figure",[e("g-image",{ref:"lazy-image",attrs:{src:this.image,alt:"Granite Setts Direct Ltd Website"}})],1):this._e(),this._t("default")],2)}),[],!1,null,"656841c1",null);e.a=a.exports},173:function(t,e){},190:function(t,e,i){"use strict";var s=i(173),n=i.n(s);e.default=n.a},200:function(t,e,i){"use strict";i.r(e);var s=i(169),n={name:"Website",metaInfo:{title:"Website Projects - Portfolio",meta:[{key:"description",name:"description",content:"A selection of fast, responsive website projects, including static sites, content management systems and PWA's"}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.com","/portfolio/website/")}]},components:{Card:s.a},data:function(){return{hostname:"https://forbesg.github.com"}}},a=i(18),o=i(190),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container"},[i("div",{staticClass:"breadcrumbs"},[i("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+t.hostname}},[i("span",{attrs:{itemprop:"name"}},[t._v("Home")]),i("meta",{attrs:{itemprop:"position",content:"1"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/portfolio/",itemprop:"item",itemid:t.hostname+"/portfolio/"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Portfolio")]),i("meta",{attrs:{itemprop:"position",content:"2"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Websites")]),i("meta",{attrs:{itemprop:"position",content:"3"}})])])]),i("h1",{staticClass:"highlight-overline"},[t._v("Website Projects")]),i("h2",[t._v("Websites")]),i("div",{staticClass:"cards"},t._l(t.$page.website_projects.edges,(function(e){return i("card",{key:e.id,attrs:{image:e.node.image}},[i("h3",[t._v(t._s(e.node.title))]),i("p",{staticClass:"description"},[t._v(t._s(e.node.description))]),i("g-link",{staticClass:"button small",attrs:{to:e.node.path}},[t._v("View")])],1)})),1)])])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(r);e.default=r.exports}}]);