webpackJsonp([3],{108:function(t,i,a){var e=a(11),n=a(20),o={};o.jumpProduct=function(){n(this.$refs.title2,{y:55})},o.onPlay=function(t){this.$refs.productVideo.play(t.name)},o.initView=function(){e.query().name&&this.jumpProduct()},o.initVideo=function(){var t=e.query().name;t&&this.$refs.productVideo.play(t)};var r={},s={},c=function(){},l=function(){this.$nextTick(this.initVideo),setTimeout(this.initView,100)},p=function(){},d=function(){return{}};t.exports={data:d,created:c,methods:o,computed:r,watch:s,props:[],mounted:l,mixins:[a(12)],beforeDestroy:p,components:{"pro-list":a(177),"all-video":a(176),"video-layer":a(26)}}},126:function(t,i,a){i=t.exports=a(0)(),i.push([t.i,".all-video[data-v-35d44f7a]{height:758px;position:relative}.all-video .fa-play-circle[data-v-35d44f7a]{top:335px}",""])},129:function(t,i,a){i=t.exports=a(0)(),i.push([t.i,".product-list>li[data-v-41a5cd43]{width:33.3%;display:inline-block;margin-bottom:20px}.product-list>li[data-v-41a5cd43]:nth-child(3n+1){padding-right:14px}.product-list>li[data-v-41a5cd43]:nth-child(3n+2){padding-left:7px;padding-right:7px}.product-list>li[data-v-41a5cd43]:nth-child(3n+3){padding-left:14px}.product-list .li-wrapper[data-v-41a5cd43]{background-color:#fff;padding-bottom:5px;position:relative}.product-list .li-wrapper>img[data-v-41a5cd43]{width:100%;height:245px;cursor:pointer}.product-list .li-wrapper .v-title[data-v-41a5cd43]{padding:8px 16px}.product-list .li-wrapper .v-title h4[data-v-41a5cd43]{font-size:18px;font-weight:700}.product-list .li-wrapper .v-title a[data-v-41a5cd43]{float:right;display:inline-block;background-color:#f25a15;color:#fff;padding:6px 12px;font-size:14px;border-radius:4px;margin-top:2px;margin-left:12px}.product-list .li-wrapper .v-title a.v-link.disabled[data-v-41a5cd43]{background-color:#bbb;cursor:default}.product-list .li-wrapper .v-title .v-link-2[data-v-41a5cd43]{background-color:#fff;color:#f25a15;border:1px solid #f25a15}.product-list .li-wrapper .v-desc[data-v-41a5cd43]{padding:4px 16px 12px;font-size:16px;line-height:28px;height:76px;overflow:hidden}.product-list .li-wrapper>.fa-play-circle[data-v-41a5cd43]{top:86.5px}",""])},145:function(t,i,a){i=t.exports=a(0)(),i.push([t.i,"",""])},176:function(t,i,a){function e(t){a(259)}var n=a(2)(a(81),a(213),e,"data-v-35d44f7a",null);t.exports=n.exports},177:function(t,i,a){function e(t){a(262)}var n=a(2)(a(82),a(216),e,"data-v-41a5cd43",null);t.exports=n.exports},213:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"all-video video-wrapper"},[a("video",{ref:"v",attrs:{controls:"controls",loop:"loop",poster:t.getImageUrl("/product/bigshow_poster.png"),src:t.src},on:{canplay:t.onCanplay,play:t.onPlay,playing:t.onPlaying,pause:t.onPause,ended:t.onEnd,error:t.onError}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.iconVisible,expression:"iconVisible"}],staticClass:"fa fa-play-circle product-play-icon pos-center",attrs:{title:"播放"},on:{click:t.vPlay}})])},staticRenderFns:[]}},216:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ul",{staticClass:"product-list"},t._l(t.products,function(i,e){return a("li",[a("div",{staticClass:"li-wrapper"},[a("img",{attrs:{src:t.getProductImg(i),title:"播放视频"},on:{click:function(a){t.play(i)}}}),t._v(" "),a("div",{staticClass:"v-title "},[i.needlogin?t._e():[a("a",{directives:[{name:"show",rawName:"v-show",value:i.url,expression:"v.url"}],staticClass:"v-link",attrs:{href:"javascript:;"},on:{click:t.onLoginClick}},[t._v("立即体验")]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!i.url,expression:"!v.url"}],staticClass:"v-link disabled",attrs:{href:"javascript:;"}},[t._v("即将开放")])],t._v(" "),i.needlogin?[a("a",{staticClass:"v-link-1",attrs:{href:"javascript:;"},on:{click:t.onLoginClick}},[t._v("立即登录")]),t._v(" "),a("a",{staticClass:"v-link-2",attrs:{href:t.getPageUrl("/apply"),target:"_blank",title:"该产品需要申请账号才能体验"}},[t._v("申请账号")])]:t._e(),t._v(" "),a("h4",{domProps:{textContent:t._s(i.name)}})],2),t._v(" "),a("div",{staticClass:"v-desc do-wrap",domProps:{textContent:t._s(i.desc)}}),t._v(" "),a("i",{staticClass:"fa fa-play-circle product-play-icon pos-center",attrs:{title:"播放视频"},on:{click:function(a){t.play(i)}}})])])}),0)},staticRenderFns:[]}},230:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"page-product"},[a("v-header",{attrs:{active:"2"},on:{"jump-product":t.jumpProduct}}),t._v(" "),a("div",{staticClass:"page-banner"},[a("img",{staticClass:"page-banner-img",attrs:{src:t.getImageUrl("/product/banner.png")}}),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"inner-main"},[t._m(1),t._v(" "),a("all-video"),t._v(" "),a("h3",{ref:"title2",staticClass:"section-title"},[a("img",{attrs:{src:t.getImageUrl("/index/product.png")}}),t._v("\r\n            产品案例\r\n        ")]),t._v(" "),a("pro-list",{on:{play:t.onPlay}})],1),t._v(" "),a("video-layer",{ref:"productVideo"}),t._v(" "),a("v-backtop"),t._v(" "),a("v-copyright")],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"text-content"},[a("h3",[t._v("大数据产品案例")]),t._v(" "),a("h5",[t._v("Bigdata Online Product Case")]),t._v(" "),a("p",[t._v("依托内蒙古移动大数据六大核心能力，打造一系列成熟的小而美的大数据产品，为企业运营决策提供权威大数据支撑！")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("h3",{staticClass:"section-title"},[a("i",{staticClass:"fa fa-video-camera"}),t._v("\r\n            视频介绍\r\n        ")])}]}},259:function(t,i,a){var e=a(126);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(1)("5e840f39",e,!0,{})},262:function(t,i,a){var e=a(129);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(1)("59f3c1c2",e,!0,{})},278:function(t,i,a){var e=a(145);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(1)("11368f06",e,!0,{})},31:function(t,i,a){function e(t){a(278)}var n=a(2)(a(108),a(230),e,"data-v-8a882eaa",null);t.exports=n.exports},38:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(3),n=a(31),o=a.n(n);new e.Vue({el:"#main",components:{"v-main":o.a}})},6:function(t,i){t.exports=dll},81:function(t,i,a){var e={},n={};n.src=function(){return this.vConfig.mock?"http://"+location.hostname+"/videos/bigshow_music.mp4":this.vConfig.staticSourceUrlPrefix+"/staticSourceApp/videos/bigshow_music.mp4"};var o={},r=function(){},s=function(){},c=function(){},l=function(){return{}};t.exports={data:l,created:r,methods:e,computed:n,watch:o,props:[],mounted:s,mixins:[a(22)],beforeDestroy:c,components:{}}},82:function(t,i,a){var e={};e.play=function(t){this.$emit("play",t)},e.onLoginClick=function(){this.$msg("页面跳转")};var n={},o={},r=function(){},s=function(){},c=function(){},l=function(){return{}};t.exports={data:l,created:r,methods:e,computed:n,watch:o,props:[],mounted:s,mixins:[a(15)],beforeDestroy:c,components:{}}}},[38]);