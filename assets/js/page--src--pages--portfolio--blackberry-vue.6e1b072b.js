(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L5Ur:function(t,e,i){"use strict";i("iubp")},iubp:function(t,e,i){},"k4W/":function(t,e,i){"use strict";i.r(e);var s=i("ro2s"),r={name:"BlackberryApplications",metaInfo:{title:"Blackberry Projects - Portfolio",meta:[{key:"description",name:"description",content:"A selection of my early Blackberry Applications, built using modern web technologies."}],link:[{key:"canonical",rel:"canonical",href:"".concat("https://forbesg.github.com/","/portfolio/blackberry/")}]},components:{Card:s.a},data:function(){return{hostname:"https://forbesg.github.com/"}}},o=i("KHd+"),a=null,n=Object(o.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container"},[i("div",{staticClass:"breadcrumbs"},[i("ol",{attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/",itemprop:"item",itemid:""+t.hostname}},[i("span",{attrs:{itemprop:"name"}},[t._v("Home")]),i("meta",{attrs:{itemprop:"position",content:"1"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("g-link",{attrs:{to:"/portfolio/",itemprop:"item",itemid:t.hostname+"/portfolio/"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Portfolio")]),i("meta",{attrs:{itemprop:"position",content:"2"}})])],1),i("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[i("span",{attrs:{itemprop:"name"}},[t._v("Blackberry")]),i("meta",{attrs:{itemprop:"position",content:"3"}})])])]),i("h1",{staticClass:"highlight-overline"},[t._v("Blackberry Projects")]),i("div",{staticClass:"cards"},t._l(t.$page.blackberry_projects.edges,(function(e){return i("card",{key:e.id,attrs:{image:e.node.image,imageAlt:e.node.imageAlt}},[i("h3",[t._v(t._s(e.node.title))]),i("p",{staticClass:"description"},[t._v(t._s(e.node.description))]),i("g-link",{staticClass:"button small",attrs:{to:e.node.path}},[t._v("View")])],1)})),1)])])}),[],!1,null,null,null);"function"==typeof a&&a(n);e.default=n.exports},ro2s:function(t,e,i){"use strict";i("QWBl"),i("FZtP");var s={props:{image:{type:String,required:!1},imageAlt:{type:String,required:!1}},mounted:function(){var t=this,e=this.$refs["lazy-image"],i=(document.querySelector(".card"),new IntersectionObserver((function(e,s){e.forEach((function(e){e.isIntersecting&&(e.target.src=t.image,i.unobserve(e.target))}))})));i.observe(e)}},r=(i("L5Ur"),i("KHd+")),o=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[this.image?e("figure",[e("img",{ref:"lazy-image",attrs:{src:this.image,alt:this.imageAlt,width:"530",height:"299"}})]):this._e(),this._t("default")],2)}),[],!1,null,"344393ed",null);e.a=o.exports}}]);