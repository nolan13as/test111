(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0442":function(t,e,i){"use strict";i("9047")},1965:function(t,e,i){"use strict";i("1a11")},"1a11":function(t,e,i){},"1ec2":function(t,e,i){},"1f09":function(t,e,i){"use strict";i("650e")},"51ad":function(t,e,i){t.exports=i.p+"img/toggler.52dc259f.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=i("7591"),s=i.n(a),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"py-3 h-100",attrs:{id:"app"}},[i("div",{staticClass:"row h-100 mx-3"},[i("div",{staticClass:"h-100 d-flex flex-column",class:t.isMobile?"col-12":"col-9"},[i("left-top-block",{on:{newBg:function(e){t.bgImg=e},openSidebar:function(e){return t.sidebarjs.open()}}}),i("left-center-block",{attrs:{bgImg:t.bgImg}}),i("left-bottom-block"),i("toast")],1),i("div",{staticClass:"h-100",class:t.isMobile?"mobile-sidebar":"col-3",attrs:{sidebarjs:t.isMobile||null}},[i("right-block",{class:t.isMobile?"pt-3":"",on:{imageDragstart:function(e){t.isMobile&&t.sidebarjs.close()}}})],1)])])},o=[],c=i("7b17"),l=i("0268"),d=i("bd3f"),u=(i("b771"),i("ab8b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container position-relative left-top-block d-flex"},[n("div",{staticClass:"row align-items-center w-100",class:"gx-0 justify-content-center gx-xl-3"},[n("div",{staticClass:"col-8 col-md-auto mb-2 mb-md-0 order-0"},[n("button",{staticClass:"btn btn-primary main-btns me-5",on:{click:function(e){return t.$refs.file.click()}}},[t._v(" Изменить фон ")]),n("input",{ref:"file",staticClass:" d-none",attrs:{type:"file"},on:{change:t.openFile}})]),n("div",{staticClass:"col-4 mb-2 d-xl-none text-end order-1 order-md-4 col-md-auto ms-md-4 mb-md-0"},[n("button",{staticClass:"navbar-toggler border-1 border-secondary px-2 end-0 top-0",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown"},on:{click:function(e){return t.$emit("openSidebar")}}},[n("img",{staticClass:"toggler-img",attrs:{src:i("51ad")}})])]),n("div",{staticClass:"col-6 col-md-auto order-2"},[n("div",{staticClass:"form-check form-switch d-inline-block ps-0"},[n("input",{staticClass:"form-check-input float-end ms-2",attrs:{type:"checkbox",id:"switchOnlyMarkers"},on:{change:function(e){return t.check_imgaes_exist(t.onlyMarkers)}}}),t._m(0)])]),n("div",{staticClass:"col-6 col-md-auto order-3"},[n("div",{staticClass:"row gx-2 justify-content-end ms-md-3"},[t._m(1),n("div",{staticClass:"col-auto"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.markerSize,expression:"markerSize"}],staticClass:"form-select w-auto",attrs:{id:"changeMarkerSize"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.markerSize=e.target.multiple?i:i[0]}}},[n("option",{domProps:{value:1}},[t._v("1")]),n("option",{domProps:{value:2}},[t._v("2")]),n("option",{domProps:{value:4}},[t._v("4")]),n("option",{domProps:{value:8}},[t._v("8")])])])])])])])}),f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"form-check-label",attrs:{for:"switchOnlyMarkers"}},[i("span",{staticClass:"d-md-none"},[t._v("Разметка")]),i("span",{staticClass:"d-none d-md-inline"},[t._v("Только разметка")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"col-auto col-form-label",attrs:{for:"changeMarkerSize"}},[i("span",{staticClass:"d-md-none"},[t._v("Маркер")]),i("span",{staticClass:"d-none d-md-inline"},[t._v("Размер маркера")])])}],m=(i("99af"),i("fb6a"),i("ac1f"),i("466d"),i("841c"),i("1276"),i("bc3a")),g=i.n(m),h={data:function(){return{markerSize:2}},watch:{markerSize:function(t){this.$store.commit("setMarkerSize",t)}},computed:{images:function(){return this.$store.state.clearListImages},onlyMarkers:function(){return this.$store.state.onlyMarkers}},mounted:function(){var t=this;function e(){if(history.pushState){var t="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname);history.pushState(null,null,t)}else console.warn("History API не поддерживает ваш браузер")}e(),console.log(location),console.log(window),console.log(baseUrl);var i=location.search.slice(1).split(",")[0].split(":")[1],n=location.search.slice(1).split(",")[1].split(":")[1],a=location.search.slice(1).split(",")[2].split(":")[1];console.log(i),console.log(n),console.log(a),g.a.get("/ajax/room_img.php?room_id=".concat(n,"&type=").concat(a)).then((function(e){console.log(e),t.load_file_auto(e),t.$store.commit("setDownloadTrigger")}))},methods:{check_imgaes_exist:function(t){if(console.log(t),this.images.length){var e=confirm("нажимая ок, Вы удалите все с рабочей области");e?(this.$store.commit("clear_images",[]),this.$store.commit("toggleOnlyMarkers")):document.getElementById("switchOnlyMarkers").checked=Boolean(t)}else this.$store.commit("toggleOnlyMarkers")},openFile:function(t){var e=this,i=t.target.files;if(i.length)if(i[0].type.match(/jpeg|gif|bmp|png|jpg/i)){var n=new FileReader;n.onload=function(){var t=n.result;e.loadImage(t)},n.readAsDataURL(i[0]),t.target.value=null}else{var a="Выбранный файл не является изображением";this.$store.commit("addToast",{text:a,type:"warning"})}},load_file_auto:function(t){var e=this,i=t.files,n=new FileReader;n.onload=function(){var t=n.result;e.loadImage(t)},n.readAsDataURL(i[0])},loadImage:function(t){var e=this,i=new Image;i.onload=function(t){e.$emit("newBg",t.target);var i=t.target,n=i.width,a=i.height;if(n>a){var s=n/a;e.markerSize=s>4?1:s>2?2:4}else e.markerSize=4},i.src=t}}},p=h,v=(i("6174"),i("2877")),b=Object(v["a"])(p,u,f,!1,null,"80cebace",null),w=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"workingArea",staticClass:"row align-content-center left-center-block"},[i("div",{staticClass:"col d-flex justify-content-center"},[i("context-menu",{attrs:{contextMenuEvent:t.contextMenuEvent},on:{reset:function(e){t.contextMenuEvent=null},moveItem:t.moveItem}}),i("v-stage",{ref:"stage",attrs:{config:t.stageConfig},nativeOn:{drop:function(e){return e.preventDefault(),t.droppedItem(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[i("v-layer",{ref:"layer"},[t.bgImg?i("v-image",{attrs:{config:t.bgImgConfig},on:{click:function(e){t.activeItemId=null},touchstart:t.onTouchBg}}):i("v-rect",{attrs:{config:t.bgConfig},on:{click:function(e){t.activeItemId=null},touchstart:t.onTouchBg}}),t._l(t.images,(function(e){return i("item",{key:e.id,attrs:{data:e,activeItemId:t.activeItemId},on:{newTransform:function(e){t.activeItemId=e},"set-context-menu-event":function(e){t.contextMenuEvent=e}}})}))],2)],1),i("output-file",{attrs:{image:t.outputImage,items:t.outputItems},on:{reset:function(e){t.outputImage=null}}})],1)])},k=[],C=(i("4de4"),i("7db0"),i("c740"),i("4160"),i("d81d"),i("a434"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-image",{ref:"image",attrs:{config:t.data.config},on:{click:function(e){return t.enableTransformer(e,"click")},touchstart:function(e){return t.enableTransformer(e,"touch")},touchend:t.resetTouchTimer,contextmenu:t.setCtx,dragend:t.resetTouchTimer}}),i("v-transformer",{ref:"transformer",attrs:{config:t.transformerConfig}})],1)}),_=[],x={props:["data","activeItemId"],data:function(){return{transformerConfig:{resizeEnabled:"item"===this.data.type,rotateEnabled:!1,centeredScaling:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"],boundBoxFunc:function(t,e){return e.width<5||e.height<5?t:e}},touchTimer:null}},computed:{},watch:{activeItemId:function(t){t!==this.data.id&&this.$refs.transformer.getNode().nodes([])}},methods:{enableTransformer:function(t,e){var i=this;"touch"===e&&(this.touchTimer=setTimeout((function(){i.setCtx(t)}),1e3));var n=this.$refs.image.getNode();this.$refs.transformer.getNode().nodes([n]),this.$emit("newTransform",this.data.id)},setCtx:function(t){t.evt.preventDefault(),t.evt.stopPropagation();var e=t.currentTarget.getStage().content,i=t.evt.clientY-e.offsetTop,n=t.evt.clientX-e.offsetLeft;this.$emit("set-context-menu-event",{coords:{top:i,left:n},id:this.data.id})},resetTouchTimer:function(){clearTimeout(this.touchTimer)}}},I=x,S=Object(v["a"])(I,C,_,!1,null,null,null),$=S.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown"},[i("button",{ref:"toggle",staticClass:"dropdown-toggle border-0 position-absolute overflow-hidden",style:t.coords,attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}}),i("ul",{ref:"menu",staticClass:"dropdown-menu",attrs:{role:"menu"}},[i("li",t._l(t.items,(function(e,n){return i("a",{key:n,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0),t._m(0),i("li",[i("a",{staticClass:"dropdown-item text-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleClick({action:"remove"})}}},[t._v(" Удалить ")])])])])},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("hr",{staticClass:"dropdown-divider"})])}],T={props:["contextMenuEvent"],data:function(){return{dropdown:null,coords:{top:0,left:0},itemId:null}},computed:{items:function(){return[{name:"Переместить назад",action:"moveBack"},{name:"Переместить вперед",action:"moveForward"}]}},watch:{contextMenuEvent:function(t){var e=this;"forceHide"===t?this.dropdown.hide():t&&(this.coords.top="".concat(t.coords.top,"px"),this.coords.left="".concat(t.coords.left,"px"),this.itemId=t.id,this.dropdown.hide(),this.dropdown.show(),setTimeout((function(){e.$emit("reset")}),0))}},mounted:function(){this.dropdown=new c["a"](this.$refs.toggle)},methods:{handleClick:function(t){var e=this;this.$emit("moveItem",{id:this.itemId,action:t.action}),setTimeout((function(){e.dropdown.hide()}),0)}}},z=T,E=(i("9789"),Object(v["a"])(z,M,j,!1,null,null,null)),O=E.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" d-none"},[i("svg",{ref:"svg",attrs:{"xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:t.width,height:t.height}},[i("g",[i("image",{ref:"image",attrs:{"xlink:href":t.image,width:"100%",height:"100%"}})]),t._l(t.items,(function(e){return i("a",{key:e.id,attrs:{href:"https://yandex.ru?id="+e.finalId,target:"_blank"}},[i("info",{attrs:{coords:e,width:t.markerSize+"%",height:e.height+"%",id:e.finalId}})],1)}))],2)])},L=[],A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{"xmlns:d":"https://loading.io/stock/","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"17 17 54.589806 52.330627",x:t.coords.x+"%",y:t.coords.y+"%",version:"1.1",id:"svg57"}},[i("metadata",{attrs:{id:"metadata63"}},[i("rdf:RDF",[i("cc:Work",{attrs:{"rdf:about":""}},[i("dc:format",[t._v("image/svg+xml")]),i("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),i("dc:title")],1)],1)],1),i("title",[t._v(t._s("id: "+t.id))]),i("defs",{attrs:{id:"defs61"}}),i("g",{staticClass:"ldl-scale",attrs:{id:"g55",transform:"matrix(0.68236768,0,0,0.65412678,10.176334,10.458551)"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g53"}},[i("linearGradient",{attrs:{y2:"79.426003",x2:"68.331001",y1:"31.426001",x1:"22.830999",gradientUnits:"userSpaceOnUse",id:"a"}},[i("stop",{staticStyle:{"stop-color":"rgb(160, 200, 215)",fill:"rgb(0, 0, 0)"},attrs:{"stop-color":"#a0c8d7",offset:"0",id:"stop4"}}),i("stop",{staticStyle:{"stop-color":"rgb(118, 164, 189)",fill:"rgb(0, 0, 0)"},attrs:{"stop-color":"#76a4bd",offset:"1",id:"stop6"}})],1),i("g",{staticClass:"ldl-layer",attrs:{id:"g13"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g11"}},[i("path",{staticStyle:{fill:"url(#a)"},attrs:{fill:"url(#a)",d:"m 47.962,10.051 c -20.276,1.006 -36.785,17.429 -37.9,37.699 -0.482,8.762 1.87,16.943 6.206,23.736 l -4.889,14.443 c -0.564,1.667 1.027,3.258 2.693,2.693 l 14.443,-4.889 c 6.793,4.336 14.974,6.688 23.736,6.206 C 72.521,88.824 88.944,72.315 89.95,52.039 91.125,28.338 71.662,8.874 47.962,10.051 Z",id:"path9"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g31"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g29"}},[i("g",{attrs:{id:"g27"}},[i("g",{staticClass:"ldl-layer",attrs:{id:"g19"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g17"}},[i("path",{staticStyle:{fill:"#ffffff"},attrs:{fill:"#fff",d:"m 54.435,71.5 h -8.87 A 1.565,1.565 0 0 1 44,69.935 V 49.065 C 44,48.201 44.701,47.5 45.565,47.5 h 8.87 c 0.864,0 1.565,0.701 1.565,1.565 v 20.87 c 0,0.864 -0.701,1.565 -1.565,1.565 z",id:"path15"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g25"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g23"}},[i("path",{staticStyle:{fill:"#ffffff"},attrs:{fill:"#fff",d:"M 50,28 A 7.25,7.25 0 0 0 50,42.5 7.25,7.25 0 0 0 50,28 Z",id:"path21"}})])])])])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g37"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g35"}},[i("path",{staticStyle:{fill:"#000000"},attrs:{opacity:"0.1",d:"m 77.639,21.103 c 0.011,0.603 0.04,1.201 0.04,1.808 0,27.323 -11.319,51.604 -28.865,67.069 1.135,0.033 2.28,0.022 3.437,-0.042 20.27,-1.115 36.693,-17.624 37.699,-37.9 0.603,-12.174 -4.247,-23.22 -12.311,-30.935 z",id:"path33"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g43"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g41"}},[i("path",{staticStyle:{stroke:"#ffffff"},attrs:{"stroke-miterlimit":"10","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"3",stroke:"#fff",fill:"none",d:"m 17.676,38.688 a 41.09,41.09 0 0 0 -0.542,1.781",id:"path39"}})])]),i("g",{staticClass:"ldl-layer",attrs:{id:"g49"}},[i("g",{staticClass:"ldl-ani",attrs:{id:"g47"}},[i("path",{staticStyle:{stroke:"#ffffff"},attrs:{"stroke-miterlimit":"10","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"3",stroke:"#fff",fill:"none",d:"m 29.237,22.583 c -3.656,2.599 -6.62,5.91 -8.857,9.908",id:"path45"}})])]),i("metadata",{attrs:{id:"metadata51"}},[i("d:name",[t._v("message")]),i("d:tags",[t._v("message,sns,msg,texting,information,communication,mention,hint,notify")]),i("d:license",[t._v("by")]),i("d:slug",[t._v("hcp9qw")])],1)],1)])],1)},B=[],P={props:["coords","id"]},N=P,R=Object(v["a"])(N,A,B,!1,null,null,null),U=R.exports,W={props:["image","items"],components:{Info:U},data:function(){return{width:null,height:null}},computed:{markerSize:function(){return this.$store.state.markerSize}},watch:{image:function(t){var e=this;if(t){var i=document.createElement("img");i.onload=function(){e.width=i.width,e.height=i.height,setTimeout((function(){e.updateSvg()}),0)},i.src=this.image}}},methods:{download:function(){var t=this,e=document.createElement("a");e.download="img.svg";var i=(new XMLSerializer).serializeToString(this.$refs.svg),n=unescape(encodeURIComponent(i));e.href="data:image/svg+xml;base64,".concat(btoa(n)),e.click(),setTimeout((function(){t.$emit("reset")}),0)},updateSvg:function(){var t=(new XMLSerializer).serializeToString(this.$refs.svg),e=unescape(encodeURIComponent(t));window.parent.postMessage({type:"updateSvg",svgBase64:"data:image/svg+xml;base64,".concat(btoa(e))},"*")}}},X=W,F=Object(v["a"])(X,D,L,!1,null,null,null),Y=F.exports,H=i("d915"),J=i.n(H),q={props:["bgImg"],components:{Item:$,ContextMenu:O,OutputFile:Y},data:function(){return{stageConfig:{width:0,height:0,visible:!1,type:"stage"},bgConfig:{x:0,y:0,width:0,height:0,fill:"#efefef",type:"bgRect"},bgImgConfig:{},activeItemId:null,contextMenuEvent:null,outputImage:null,outputItems:[]}},computed:{images:function(){return this.$store.state.clearListImages},downloadTrigger:function(){return this.$store.state.downloadTrigger},onlyMarkers:function(){return this.$store.state.onlyMarkers},markerSize:function(){return this.$store.state.markerSize},outputWidth:function(){return this.$store.state.outputWidth},bgSize:function(){var t=this.bgImg?this.bgImgConfig:this.bgConfig,e=t.width,i=t.height;return{width:e,height:i}}},watch:{bgImg:function(t){var e,i,n=this.$refs.workingArea.offsetWidth/this.$refs.workingArea.offsetHeight,a=t.width/t.height;n>a?(i=.9*this.$refs.workingArea.offsetHeight,e=i*a):(e=this.$refs.workingArea.offsetWidth,i=e*a),Object.assign(this.stageConfig,{width:e,height:i}),Object.assign(this.bgConfig,{width:e,height:i}),this.bgImgConfig={width:e,height:i,image:t},this.resizeMarkers()},downloadTrigger:function(){this.download()},markerSize:function(){this.resizeMarkers()}},mounted:function(){var t=this,e=.8*this.$refs.workingArea.offsetWidth,i=this.$refs.workingArea.offsetHeight;this.stageConfig.width=e,this.stageConfig.height=i,this.bgConfig.width=e,this.bgConfig.height=i,this.stageConfig.visible=!0,window.addEventListener("keypress",(function(e){"Delete"===e.key&&t.activeItemId&&t.removeItem()}))},methods:{droppedItem:function(t){var e=this,i=JSON.parse(t.dataTransfer.getData("text/plain")),n=i.src,a=i.offsetX,s=i.offsetY,r=i.id,o=i.finalId,c=new Image;c.onload=function(i){var n,c,l=i.target,d=e.bgSize.width/e.bgSize.height,u=l.width/l.height;e.onlyMarkers?(n=e.bgSize.width*(e.markerSize/100),c=e.bgSize.width*(e.markerSize/100)):d>u?(c=.2*e.bgSize.height,n=c*u):(n=.2*e.bgSize.width,c=n/u);var f="layerX"in t?t.layerX:t.offsetX,m="layerY"in t?t.layerY:t.offsetY;e.images.push({config:{image:i.target,width:n,height:c,draggable:!0,x:f-n*a,y:m-c*s,id:r},id:r,type:e.onlyMarkers?"marker":"item",finalId:o})},c.crossOrigin="Anonymous",c.src=this.onlyMarkers?J.a:n},moveItem:function(t){if("remove"!==t.action){var e=this.images.findIndex((function(e){return e.id===t.id})),i="moveBack"===t.action?e-1:e+1;i<0||i>=this.images.length||this.images.splice(i,0,this.images.splice(e,1)[0])}else this.removeItem()},removeItem:function(){var t=this;if(this.activeItemId){var e=this.images.findIndex((function(e){return e.id===t.activeItemId}));this.images.splice(e,1)}},download:function(){var t=this;this.activeItemId=null,this.outputItems=this.$refs.layer.getNode().getChildren().filter((function(t){return"Image"===t.getClassName()&&t.id()})).map((function(e){var i=t.images.find((function(t){return t.id===e.id()})),n="item"===i.type?t.markerSize/2:0,a="item"===i.type?e.width()*e.scaleX():0;return{x:(e.x()+a)/t.stageConfig.width*100-n,y:e.y()/t.stageConfig.height*100-n,id:e.id(),height:t.bgSize.width/t.bgSize.height*t.markerSize,finalId:i.finalId}})),this.images.forEach((function(e,i){"marker"===e.type&&t.$set(t.images[i].config,"visible",!1)})),setTimeout((function(){var e={pixelRatio:t.outputWidth/t.stageConfig.width,mimeType:"image/jpeg"},i=t.$refs.stage.getNode().toDataURL(e);t.outputImage=i,t.images.forEach((function(e,i){"marker"===e.type&&t.$set(t.images[i].config,"visible",!0)}))}),0)},resizeMarkers:function(){var t=this;this.images.forEach((function(e,i){"marker"===e.type&&t.$set(t.images[i],"config",Object.assign(e.config,{width:t.bgSize.width*(t.markerSize/100),height:t.bgSize.width*(t.markerSize/100)}))}))},onTouchBg:function(){this.activeItemId=null,this.contextMenuEvent="forceHide"}}},G=q,Z=(i("1f09"),Object(v["a"])(G,y,k,!1,null,"1b4ecaf0",null)),Q=Z.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container left-bottom-block d-flex"},[i("div",{staticClass:"row align-content-center w-100 gx-0"},[i("div",{staticClass:"col"},[i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"col text-start text-md-center"},[i("button",{staticClass:"btn btn-outline-danger main-btns",on:{click:function(e){return t.clear_images()}}},[t._v(" Очистить ")])]),i("div",{staticClass:"col text-end text-md-center"},[i("button",{staticClass:"btn btn-primary main-btns",on:{click:function(e){return t.$store.commit("setDownloadTrigger")}}},[t._v(" Сохранить ")])])])])])])},K=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col text-start text-md-center"},[i("button",{staticClass:"btn btn-secondary main-btns"},[t._v(" Назад ")])])}],tt={methods:{clear_images:function(){this.$store.commit("clear_images",[])}}},et=tt,it=(i("e3b1"),Object(v["a"])(et,V,K,!1,null,"6e796ab5",null)),nt=it.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" h-100 items-block"},[i("div",{staticClass:"row justify-content-center mb-2 mt-1"},[i("div",{staticClass:"col-6"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.brand,expression:"brand"}],staticClass:"form-select",attrs:{hidden:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.brand=e.target.multiple?i:i[0]}}},[i("option",{domProps:{value:null}},[t._v("Все бренды")]),t._l(t.brands,(function(e,n){return i("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])]),i("div",{staticClass:"row justify-content-center mb-2"},[i("div",{staticClass:"col-6"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?i:i[0]}}},[i("option",{domProps:{value:null}},[t._v("Тип")]),t._v(" "+t._s(t.types)+" "),t._l(t.types,(function(e,n){return i("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"поиск..."},domProps:{value:t.search},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),i("button",{staticClass:"btn btn-outline-secondary px-2",attrs:{type:"button"},on:{click:t.goSearch}},[i("search-icon",{staticStyle:{width:"1rem"}})],1)])])]),t._m(0),i("div",t._l(t.items,(function(e,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:(!t.brand||e.brand===t.brand)&&(!t.type||e.section_name===t.type)&&!e.hidden,expression:"(!brand || item.brand === brand) && (!type || item.section_name === type) &&\n       !item.hidden"}],key:n,staticClass:"row justify-content-center"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"card mb-3"},[i("img",{staticClass:"card-img-top",attrs:{src:e.preview_img,alt:"Фото",draggable:"true"},on:{dragstart:function(i){return t.dragImg(e,i)}}}),i("div",{staticClass:"card-body"},[i("small",[t._v(t._s(e.type))]),i("h6",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" ")]),e.brand.length?i("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" "+t._s(e.brand)+" ")]):t._e(),i("h4",[t._v(t._s("₽ "+e.price))])])])])])})),0)])},st=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-lg-around"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{id:"favorite",type:"checkbox"}}),i("label",{staticClass:"form-check-label",attrs:{for:"favorite"}},[t._v(" Избранное ")])])])])}],rt=(i("caad"),i("b0c0"),i("d3b7"),i("4d63"),i("25f0"),i("6062"),i("2532"),i("3ca3"),i("5319"),i("ddb0"),i("2909")),ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}})])},ct=[],lt={},dt=Object(v["a"])(lt,ot,ct,!1,null,null,null),ut=dt.exports;g.a.defaults.baseURL="/";var ft={components:{SearchIcon:ut},data:function(){return{items:[],brand:null,type:null,search:""}},computed:{brands:function(){var t=this.items.filter((function(t){return t.brand.length})).map((function(t){return t.brand}));return Object(rt["a"])(new Set(t))},types:function(){var t=this.items.filter((function(t){return null!=t.section_name&&t.section_name.length})).map((function(t){return t.section_name}));return Object(rt["a"])(new Set(t))}},created:function(){var t=this;g.a.get("".concat(window.QUERY_ORIGIN,"/ajax/flatfeed.php")).then((function(e){t.items=e.data.map((function(t){return Object.assign(t,{name:t.name.replace(/&quot;/g,'"')})})),t.items.forEach((function(e){e.section_name&&!t.types.includes(e.section_name)&&t.types.push(e.section_name)}))}))},methods:{dragImg:function(t,e){return e.dataTransfer.setData("text/plain",JSON.stringify({offsetX:e.offsetX/e.target.width,offsetY:e.offsetY/e.target.height,src:t.detail_img,id:"".concat(t.id,".").concat(Math.random()),finalId:t.id})),this.$emit("imageDragstart"),!1},goSearch:function(){var t=this,e=this.search.length?RegExp(this.search,"i"):null;this.items.forEach((function(i,n){e&&!e.test(i.name)?t.$set(t.items[n],"hidden",!0):t.$set(t.items[n],"hidden",!1)}))}}},mt=ft,gt=(i("1965"),Object(v["a"])(mt,at,st,!1,null,"86d52d26",null)),ht=gt.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"aria-live":"polite","aria-atomic":"true"}},[i("div",{staticClass:"toast-container position-absolute"},t._l(t.toasts,(function(e){return i("div",{key:e.id,ref:e.id,refInFor:!0,staticClass:"toast qwe",class:"bg-"+e.message.type,attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[i("div",{staticClass:"toast-body d-flex"},[t._v(" "+t._s(e.message.text)+" "),i("button",{staticClass:"btn-close ms-auto",attrs:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"}})])])})),0)])},vt=[],bt={data:function(){return{toasts:[]}},computed:{message:function(){return this.$store.state.toast}},watch:{message:function(t){t.text&&this.addToast(t)}},beforeDestroy:function(){var t=this;this.toasts.forEach((function(e){t.$refs[e.id][0].removeEventListener("hidden.bs.toast",(function(){}))}))},methods:{addToast:function(t){var e=this,i=Math.random();this.toasts.push({message:t,id:i}),this.$nextTick((function(){var t=new c["b"](e.$refs[i][0],{delay:5e3});t.show(),e.$refs[i][0].addEventListener("hidden.bs.toast",(function(){var t=e.toasts.findIndex((function(t){return t.id===i}));e.toasts.splice(t,1)}))}))}}},wt=bt,yt=(i("0442"),Object(v["a"])(wt,pt,vt,!1,null,"7d469e54",null)),kt=yt.exports,Ct={name:"App",components:{LeftTopBlock:w,LeftCenterBlock:Q,LeftBottomBlock:nt,RightBlock:ht,Toast:kt},data:function(){return{bgImg:null,sidebarjs:null,isMobile:window.innerWidth<1200}},created:function(){Object(l["polyfill"])()},mounted:function(){var t=this;this.enableSidebar(),window.addEventListener("orientationchange",(function(){t.isMobile=window.innerWidth<1200,t.enableSidebar()}))},beforeDestroy:function(){this.sidebarjs&&this.sidebarjs.destroy()},methods:{enableSidebar:function(){this.isMobile?this.sidebarjs=new d["SidebarElement"]({position:"right",nativeSwipe:!1}):this.sidebarjs&&(this.sidebarjs.destroy(),this.sidebarjs=null)}}},_t=Ct,xt=(i("5c0b"),Object(v["a"])(_t,r,o,!1,null,null,null)),It=xt.exports,St=i("2f62");n["default"].use(St["a"]);var $t=new St["a"].Store({state:{toast:{},downloadTrigger:null,info:null,onlyMarkers:!1,markerSize:2,outputWidth:1600,clearListImages:[]},mutations:{addToast:function(t,e){n["default"].set(t,"toast",e)},setDownloadTrigger:function(t){t.downloadTrigger=Math.random()},setInfo:function(t,e){t.info=e},toggleOnlyMarkers:function(t){n["default"].set(t,"onlyMarkers",!t.onlyMarkers)},setMarkerSize:function(t,e){t.markerSize=e},clear_images:function(t,e){n["default"].set(t,"clearListImages",e)}},actions:{},modules:{}});n["default"].config.productionTip=!1,n["default"].use(s.a),new n["default"]({store:$t,render:function(t){return t(It)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},6174:function(t,e,i){"use strict";i("7e03")},"650e":function(t,e,i){},"7e03":function(t,e,i){},9047:function(t,e,i){},9789:function(t,e,i){"use strict";i("1ec2")},"9c0c":function(t,e,i){},ab98:function(t,e,i){},d915:function(t,e,i){t.exports=i.p+"img/info_t.c998f702.svg"},e3b1:function(t,e,i){"use strict";i("ab98")}});