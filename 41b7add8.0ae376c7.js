(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{1806:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(n),O=r,m=s["".concat(o,".").concat(O)]||s[O]||d[O]||c;return n?a.a.createElement(m,b(b({ref:t},i),{},{components:n})):a.a.createElement(m,b({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},519:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(1806)),o=["components"],b={title:"Taro.connectSocket(OBJECT)",sidebar_label:"connectSocket"},l={unversionedId:"apis/network/socket/connectSocket",id:"version-1.x/apis/network/socket/connectSocket",isDocsHomePage:!1,title:"Taro.connectSocket(OBJECT)",description:"\u521b\u5efa\u4e00\u4e2a WebSocket \u94fe\u63a5\u3002",source:"@site/versioned_docs/version-1.x/apis/network/socket/connectSocket.md",slug:"/apis/network/socket/connectSocket",permalink:"/taro/docs/1.x/apis/network/socket/connectSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/network/socket/connectSocket.md",version:"1.x",sidebar_label:"connectSocket",sidebar:"version-1.x/API",previous:{title:"Taro.addInterceptor(function func)",permalink:"/taro/docs/1.x/apis/network/request/addInterceptor"},next:{title:"Taro.sendSocketMessage",permalink:"/taro/docs/1.x/apis/network/socket/sendSocketMessage"}},i=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u521b\u5efa\u4e00\u4e2a ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket"},"WebSocket")," \u94fe\u63a5\u3002"),Object(c.b)("p",null,"\u652f\u6301\u5b58\u5728\u6700\u591a",Object(c.b)("strong",{parentName:"p"},"\u4e24\u4e2a")," WebSocket \u94fe\u63a5\uff0c\u6bcf\u6b21\u6210\u529f\u8c03\u7528 Taro.connectSocket \u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",Object(c.b)("a",{parentName:"p",href:"/taro/docs/1.x/apis/network/socket/SocketTask"},"SocketTask"),"\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(c.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(c.b)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),Object(c.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"url"),Object(c.b)("td",{parentName:"tr",align:"left"},"String"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u662f"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\uff0c\u5fc5\u987b\u662f wss \u534f\u8bae")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"header"),Object(c.b)("td",{parentName:"tr",align:"left"},"Object"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(c.b)("td",{parentName:"tr",align:"left"},"HTTP Header , header \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"method"),Object(c.b)("td",{parentName:"tr",align:"left"},"String"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u662f GET\uff0c\u6709\u6548\u503c\uff1aOPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"protocols"),Object(c.b)("td",{parentName:"tr",align:"left"},"StringArray"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5b50\u534f\u8bae\u6570\u7ec4")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"success"),Object(c.b)("td",{parentName:"tr",align:"left"},"Function"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"fail"),Object(c.b)("td",{parentName:"tr",align:"left"},"Function"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"complete"),Object(c.b)("td",{parentName:"tr",align:"left"},"Function"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.connectSocket({\n  url: 'ws://echo.websocket.org/echo',\n  success: function () {\n    console.log('connect success')\n  }\n}).then(task => {\n  task.onOpen(function () {\n    console.log('onOpen')\n    task.send({ data: 'xxx' })\n  })\n  task.onMessage(function (msg) {\n    console.log('onMessage: ', msg)\n    task.close()\n  })\n  task.onError(function () {\n    console.log('onError')\n  })\n  task.onClose(function (e) {\n    console.log('onClose: ', e)\n  })\n})\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Taro.connectSocket"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);