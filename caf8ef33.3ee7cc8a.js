(window.webpackJsonp=window.webpackJsonp||[]).push([[1405],{1473:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(1806)),i=["components"],c={title:"\u8f6c\u6362\u6210 React"},p={unversionedId:"convert-to-react",id:"convert-to-react",isDocsHomePage:!1,title:"\u8f6c\u6362\u6210 React",description:"\u4e8c\u6b21\u5f00\u53d1",source:"@site/docs/convert-to-react.md",slug:"/convert-to-react",permalink:"/taro/docs/next/convert-to-react",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/convert-to-react.md",version:"current",sidebar:"docs",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro",permalink:"/taro/docs/next/taroize"},next:{title:"Troubleshooting",permalink:"/taro/docs/next/taroize-troubleshooting"}},b=[{value:"\u4e8c\u6b21\u5f00\u53d1",id:"\u4e8c\u6b21\u5f00\u53d1",children:[{value:"<code>this.setData</code>",id:"thissetdata",children:[]},{value:"<code>this.data</code> \u548c <code>this.properties</code>",id:"thisdata-\u548c-thisproperties",children:[]},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[]}]}],l={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u4e8c\u6b21\u5f00\u53d1"},"\u4e8c\u6b21\u5f00\u53d1"),Object(o.b)("p",null,"\u539f\u751f\u5c0f\u7a0b\u5e8f\u4ee3\u7801\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Page({\n  data: {\n    text: 'Hello World'\n  }\n})\n\n<view class=\"container\">\n  {{ text }}\n</view>\n")),Object(o.b)("p",null,"\u8f6c\u6362\u540e\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { Block, View } from '@tarojs/components'\nimport React from 'react'\nimport Taro from '@tarojs/taro'\nimport withWeapp from '@tarojs/with-weapp'\nimport Title from '../../components/title/index'\nimport './index.scss'\n\n@withWeapp({\n  data: {\n    text: 'Hello World'\n  }\n})\nclass _C extends React.Component {\n  render() {\n    const { text } = this.data\n    return <View className=\"container\">{text}</View>\n  }\n}\n\nexport default _C\n")),Object(o.b)("p",null,"\u5b83\u770b\u8d77\u6765\u5c31\u50cf\u666e\u901a\u7684 Taro \u7ec4\u4ef6\uff0c\u6700\u91cd\u8981\u7684\u533a\u522b\u5c31\u5728\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"@withWeapp()")," \u8fd9\u4e2a\u88c5\u9970\u5668\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u7406\u89e3\u4e3a\u8f6c\u6362\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"@withWeapp()")," \u4f1a\u589e\u52a0\u4e00\u4e9b\u539f\u6765 Taro \u6ca1\u6709\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("h3",{id:"thissetdata"},Object(o.b)("inlineCode",{parentName:"h3"},"this.setData")),Object(o.b)("p",null,"\u8f6c\u6362\u540e\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"this.setData")," \u7684 API \u76f8\u5f53\u4e8e\u5c0f\u7a0b\u5e8f\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"this.setData")," \u7684 polyfill\uff0c\u4ed6\u548c ",Object(o.b)("inlineCode",{parentName:"p"},"this.setState")," \u6700\u5927\u7684\u533a\u522b\u5c31\u5728\u4e8e\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"this.setData")," \u4e4b\u540e ",Object(o.b)("inlineCode",{parentName:"p"},"data")," \u7684\u6570\u636e\u662f\u540c\u6b65\u66f4\u65b0\uff0c\u800c\u6e32\u67d3\u662f\u5f02\u6b65\u66f4\u65b0\uff0c\u800c ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," \u4e24\u8005\u90fd\u662f\u5f02\u6b65\u7684\u3002"),Object(o.b)("h3",{id:"thisdata-\u548c-thisproperties"},Object(o.b)("inlineCode",{parentName:"h3"},"this.data")," \u548c ",Object(o.b)("inlineCode",{parentName:"h3"},"this.properties")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"this.data")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"this.properties")," \u76f8\u5f53\u4e8e Taro \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"this.state")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"this.props")," \u7684 alias\uff0c\u5f53\u5b83\u4eec\u7684\u6570\u636e\u66f4\u65b0\u65f6\uff0c\u5bf9\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"state")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"props")," \u4e5f\u4f1a\u540c\u6b65\u66f4\u65b0\u3002"),Object(o.b)("h3",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),Object(o.b)("p",null,"Taro \u4f1a\u5c06\u539f\u751f\u5c0f\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u8f6c\u6362\u4e3a Taro \u7684\u751f\u547d\u5468\u671f\uff0c\u5b8c\u6574\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f"),Object(o.b)("th",{parentName:"tr",align:"left"},"Taro \u751f\u547d\u5468\u671f"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"onShow"),Object(o.b)("td",{parentName:"tr",align:"left"},"componentDidShow")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"onHide"),Object(o.b)("td",{parentName:"tr",align:"left"},"componentDidHide")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"App.onLaunch"),Object(o.b)("td",{parentName:"tr",align:"left"},"onLaunch")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Page.onLoad"),Object(o.b)("td",{parentName:"tr",align:"left"},"onLoad")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Page.onReady"),Object(o.b)("td",{parentName:"tr",align:"left"},"onReady")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Page.onUnload"),Object(o.b)("td",{parentName:"tr",align:"left"},"componentWillUnmount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Component.created"),Object(o.b)("td",{parentName:"tr",align:"left"},"componentWillMount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Component.attached"),Object(o.b)("td",{parentName:"tr",align:"left"},"componentDidMount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Component.ready"),Object(o.b)("td",{parentName:"tr",align:"left"},"Page.onReady")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Component.detached"),Object(o.b)("td",{parentName:"tr",align:"left"},"componentWillUnmount")))))}d.isMDXComponent=!0},1806:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=l(n),s=a,O=d["".concat(i,".").concat(s)]||d[s]||m[s]||o;return n?r.a.createElement(O,c(c({ref:t},b),{},{components:n})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);