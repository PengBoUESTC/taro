(window.webpackJsonp=window.webpackJsonp||[]).push([[1021],{1089:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1806)),c=["components"],i={slug:"2021-04-22-Taro-3.3-alpha",title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png",tags:["v3"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 **WEUI**\u3001**Ant Design Mobile**\u3001**VantUI** \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002"},l={permalink:"/taro/blog/2021-04-22-Taro-3.3-alpha",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-04-22-Taro-3.3-alpha.md",source:"@site/blog/2021-04-22-Taro-3.3-alpha.md",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 **WEUI**\u3001**Ant Design Mobile**\u3001**VantUI** \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002",date:"2021-04-22T00:00:00.000Z",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",readingTime:2.295,truncated:!0,prevItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.3 \u7248\u672c\uff1a\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u4e0e\u6846\u67b6 DevTools",permalink:"/taro/blog/2021-08-13-Taro-3.3"},nextItem:{title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",permalink:"/taro/blog/2021-04-08-taro-3.2"}},p=[{value:"\u4e00\u3001\u5b9e\u73b0\u601d\u8def",id:"\u4e00\u3001\u5b9e\u73b0\u601d\u8def",children:[]}],u={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5c0f\u7a0b\u5e8f\u7684\u8bbe\u8ba1\u5e76\u6ca1\u6709\u5b8c\u5168\u9075\u5faa Web \u89c4\u8303\uff0c\u5bfc\u81f4\u5c0f\u7a0b\u5e8f\u751f\u6001\u548c\u4f20\u7edf Web \u5f00\u53d1\u751f\u6001\u4e4b\u95f4\u7684\u5272\u88c2\uff0c\u6d77\u91cf\u4f18\u79c0\u7684 Web \u7269\u6599\u5e76\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u3002\u56e0\u800c Taro \u5728\u76f8\u5f53\u4e00\u6bb5\u65f6\u95f4\u5185\u751f\u6001\u90fd\u76f8\u5bf9\u8584\u5f31\uff0cUI \u6846\u67b6\u9009\u62e9\u4e0d\u591a\u7684\u95ee\u9898\u66f4\u662f\u6df1\u6df1\u56f0\u6270\u7740\u5f00\u53d1\u8005\u3002"),Object(o.b)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u4e1a\u754c\u6709\u7740\u5b58\u91cf\u7684 H5 \u5e94\u7528\uff0c\u4e2d\u77ed\u671f\u5185 H5 \u5e94\u7528\u9002\u914d\u5230\u5c0f\u7a0b\u5e8f\u7aef\u7684\u9700\u8981\u8fd8\u4f1a\u5b58\u5728\u3002\u6211\u4eec\u5e0c\u671b\u80fd\u51cf\u5c11 H5 \u5e94\u7528\u8fc1\u79fb\u5230\u5c0f\u7a0b\u5e8f\u7aef\u7684\u6210\u672c\uff0c\u751a\u81f3\u80fd\u591f\u76f4\u63a5\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7aef\u3002"),Object(o.b)("p",null,"Taro \u56e2\u961f\u4e00\u76f4\u5728\u601d\u8003\u5982\u4f55\u6700\u5927\u9650\u5ea6\u5730\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u590d\u7528 Web \u751f\u6001\uff0c\u76f4\u5230 Taro 3.0 \u8bde\u751f\u540e\uff0c\u8fd9\u79cd\u60f3\u6cd5\u6709\u4e86\u843d\u5730\u7684\u53ef\u80fd\u3002\u4e0b\u6587\u5c06\u4ecb\u7ecd\u57fa\u4e8e Taro 3.0 \u5b9e\u73b0 H5 \u540c\u6784\u7684\u601d\u8def\u4e0e\u95ee\u9898\uff0c\u4ee5\u53ca\u6211\u4eec\u5c1d\u8bd5\u9002\u914d\u4e86\u4e09\u5927\u79fb\u52a8\u7aef UI \u6846\u67b6 ",Object(o.b)("strong",{parentName:"p"},"WEUI"),"\u3001",Object(o.b)("strong",{parentName:"p"},"Ant Design Mobile"),"\u3001",Object(o.b)("strong",{parentName:"p"},"VantUI")," \u7684\u5b9e\u9a8c\u7ed3\u679c\u3002"),Object(o.b)("h2",{id:"\u4e00\u3001\u5b9e\u73b0\u601d\u8def"},"\u4e00\u3001\u5b9e\u73b0\u601d\u8def"),Object(o.b)("p",null,"Taro 3.0 \u662f\u4e00\u6b3e\u91cd\u8fd0\u884c\u65f6\u7684\u8de8\u7aef\u6846\u67b6\uff0c\u5b83\u901a\u8fc7\u6a21\u62df\u5b9e\u73b0\u6d4f\u89c8\u5668\u7684 BOM \u548c DOM API \u5b9e\u73b0\u4e86\u5bf9 React\u3001Vue \u7b49 Web \u5f00\u53d1\u6846\u67b6\u7684\u517c\u5bb9\u3002"),Object(o.b)("p",null,"\u65e2\u7136\u5df2\u7ecf\u6709\u4e86\u6d4f\u89c8\u5668\u73af\u5883\u7684 BOM \u548c DOM API\uff0cTaro \u5e94\u7528\u548c Web \u5e94\u7528\u4e4b\u95f4\u7684\u9e3f\u6c9f\u5728\u4e8e\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u548c HTML \u6807\u7b7e\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"))}b.isMDXComponent=!0},1806:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);