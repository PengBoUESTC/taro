(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{1806:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,O=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},715:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(1806)),i=["components"],c={title:"Taro.createVideoContext(videoId, componentInstance)",sidebar_label:"createVideoContext"},l={unversionedId:"apis/multimedia/video/createVideoContext",id:"version-1.x/apis/multimedia/video/createVideoContext",isDocsHomePage:!1,title:"Taro.createVideoContext(videoId, componentInstance)",description:"\u521b\u5efa video \u4e0a\u4e0b\u6587 VideoContext \u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/video/createVideoContext.md",slug:"/apis/multimedia/video/createVideoContext",permalink:"/taro/docs/1.x/apis/multimedia/video/createVideoContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/video/createVideoContext.md",version:"1.x",sidebar_label:"createVideoContext",sidebar:"version-1.x/API",previous:{title:"Taro.saveVideoToPhotosAlbum(OBJECT)",permalink:"/taro/docs/1.x/apis/multimedia/video/saveVideoToPhotosAlbum"},next:{title:"Taro.uploadFile(param)",permalink:"/taro/docs/1.x/apis/network/fileTransfer/uploadFile"}},b=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"string videoId",id:"string-videoid",children:[]},{value:"Component componentInstance",id:"component-componentinstance",children:[]}]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"object VideoContext",id:"object-videocontext",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],d={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u521b\u5efa video \u4e0a\u4e0b\u6587 VideoContext \u5bf9\u8c61\u3002"),Object(o.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.createVideoContext.html"},Object(o.b)("inlineCode",{parentName:"a"},"wx.createVideoContext")),"\u3002"),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"string-videoid"},"string videoId"),Object(o.b)("p",null,"<","Video",">"," \u7ec4\u4ef6\u7684 id"),Object(o.b)("h3",{id:"component-componentinstance"},"Component componentInstance"),Object(o.b)("p",null,"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ","<","Video",">"," \u7ec4\u4ef6"),Object(o.b)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),Object(o.b)("h3",{id:"object-videocontext"},"object VideoContext"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"play()"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u64ad\u653e\u89c6\u9891")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"pause()"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u6682\u505c\u89c6\u9891")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"stop()"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u505c\u6b62\u89c6\u9891")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"seek(number position)"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sendDanmu(object data)"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5f39\u5e55")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"playbackRate(number rate)"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u500d\u901f\u64ad\u653e")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestFullScreen(object object)"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u5168\u5c4f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"exitFullScreen()"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5168\u5c4f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"showStatusBar()"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u663e\u793a\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"hideStatusBar()"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"\u9690\u85cf\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548")))),Object(o.b)("p",null,"\u6ce8: IOS\u7cfb\u7edf\u4e0b\uff0ch5\u7aef\u90e8\u5206VideoContext\u7684\u5c5e\u6027\u672a\u5b8c\u5168\u5b9e\u73b0\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nconst videoContext = Taro.createVideoContext('myVideo')\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.createVideoContext"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);