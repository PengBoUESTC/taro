(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1806:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,g=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return r?n.a.createElement(g,b(b({ref:t},l),{},{components:r})):n.a.createElement(g,b({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},604:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),o=(r(0),r(1806)),c=["components"],b={title:"Taro.removeStorage(OBJECT)",sidebar_label:"removeStorage"},i={unversionedId:"apis/storage/removeStorage",id:"version-1.x/apis/storage/removeStorage",isDocsHomePage:!1,title:"Taro.removeStorage(OBJECT)",description:"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u79fb\u9664\u6307\u5b9a key\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/storage/removeStorage.md",slug:"/apis/storage/removeStorage",permalink:"/taro/docs/1.x/apis/storage/removeStorage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/storage/removeStorage.md",version:"1.x",sidebar_label:"removeStorage",sidebar:"version-1.x/API",previous:{title:"Taro.getStorageInfoSync()",permalink:"/taro/docs/1.x/apis/storage/getStorageInfoSync"},next:{title:"Taro.removeStorageSync(KEY)",permalink:"/taro/docs/1.x/apis/storage/removeStorageSync"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:l};function m(e){var t=e.components,r=Object(n.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u79fb\u9664\u6307\u5b9a key\uff0c\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(o.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(o.b)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),Object(o.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"key"),Object(o.b)("td",{parentName:"tr",align:"left"},"String"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u662f"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u672c\u5730\u7f13\u5b58\u4e2d\u7684\u6307\u5b9a\u7684 key")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"success"),Object(o.b)("td",{parentName:"tr",align:"left"},"Function"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"fail"),Object(o.b)("td",{parentName:"tr",align:"left"},"Function"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"complete"),Object(o.b)("td",{parentName:"tr",align:"left"},"Function"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(o.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.removeStorage({ key: 'key' })\n  .then(res => console.log(res))\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.removeStorage"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.removeStorageSync"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);