(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1806:function(e,t,l){"use strict";l.d(t,"a",(function(){return s})),l.d(t,"b",(function(){return p}));var n=l(0),r=l.n(n);function b(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(l),O=n,p=s["".concat(c,".").concat(O)]||s[O]||d[O]||b;return l?r.a.createElement(p,a(a({ref:t},o),{},{components:l})):r.a.createElement(p,a({ref:t},o))}));function p(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=l.length,c=new Array(b);c[0]=O;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var o=2;o<b;o++)c[o]=l[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"},528:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return s}));var n=l(3),r=l(7),b=(l(0),l(1806)),c=["components"],a={title:"Taro.saveFile(option)",sidebar_label:"saveFile"},i={unversionedId:"apis/files/saveFile",id:"version-2.x/apis/files/saveFile",isDocsHomePage:!1,title:"Taro.saveFile(option)",description:"\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u3002\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528",source:"@site/versioned_docs/version-2.x/apis/files/saveFile.md",slug:"/apis/files/saveFile",permalink:"/taro/docs/2.x/apis/files/saveFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/files/saveFile.md",version:"2.x",sidebar_label:"saveFile",sidebar:"version-2.x/API",previous:{title:"RenderingContext",permalink:"/taro/docs/2.x/apis/canvas/RenderingContext"},next:{title:"Taro.removeSavedFile(option)",permalink:"/taro/docs/2.x/apis/files/removeSavedFile"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function s(e){var t=e.components,l=Object(r.a)(e,c);return Object(b.b)("wrapper",Object(n.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u3002",Object(b.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"tempFilePath"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u4e34\u65f6\u5b58\u50a8\u6587\u4ef6\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: FailCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"filePath"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u8981\u5b58\u50a8\u7684\u6587\u4ef6\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u9519\u8bef\u4fe1\u606f",Object(b.b)("br",null),Object(b.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(b.b)("br",null),"- 'fail tempFilePath file not exist': \u6307\u5b9a\u7684 tempFilePath \u627e\u4e0d\u5230\u6587\u4ef6;",Object(b.b)("br",null),"- 'fail permission denied, open \"filePath\"': \u6307\u5b9a\u7684 filePath \u8def\u5f84\u6ca1\u6709\u5199\u6743\u9650;",Object(b.b)("br",null),"- 'fail no such file or directory \"dirPath\"': \u4e0a\u7ea7\u76ee\u5f55\u4e0d\u5b58\u5728;",Object(b.b)("br",null),"- 'fail the maximum size of the file storage limit is exceeded': \u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3;")))),Object(b.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"savedFilePath"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u5b58\u50a8\u540e\u7684\u6587\u4ef6\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseImage({\n  success: function (res) {\n    var tempFilePaths = res.tempFilePaths\n    Taro.saveFile({\n      tempFilePath: tempFilePaths[0],\n      success: function (res) {\n        var savedFilePath = res.savedFilePath\n      }\n    })\n  }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Taro.saveFile"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);