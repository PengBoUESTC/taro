(window.webpackJsonp=window.webpackJsonp||[]).push([[1018],{1086:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(1806)),o=["components"],p={title:"Children \u4e0e\u7ec4\u5408"},c={unversionedId:"children",id:"version-2.x/children",isDocsHomePage:!1,title:"Children \u4e0e\u7ec4\u5408",description:"\u7ecf\u6d4b\u8bd5\uff0c\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 `` \u65e0\u6cd5\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\uff0c\u56e0\u6b64 Children \u548c\u7ec4\u5408\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u4e5f\u65e0\u6cd5\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\u3002\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001H5\u3001React Native \u90fd\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\u6b64\u529f\u80fd\u3002",source:"@site/versioned_docs/version-2.x/children.md",slug:"/children",permalink:"/taro/docs/2.x/children",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/children.md",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"Context",permalink:"/taro/docs/2.x/context"},next:{title:"Render Props",permalink:"/taro/docs/2.x/render-props"}},l=[{value:"Children",id:"children",children:[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"\u7ec4\u5408",id:"\u7ec4\u5408",children:[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",children:[]}]}],b={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7ecf\u6d4b\u8bd5\uff0c\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"<slot />")," \u65e0\u6cd5\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\uff0c\u56e0\u6b64 Children \u548c\u7ec4\u5408\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u4e5f\u65e0\u6cd5\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\u3002\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001H5\u3001React Native \u90fd\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\u6b64\u529f\u80fd\u3002")),Object(i.b)("h2",{id:"children"},"Children"),Object(i.b)("p",null,"\u5728\u6211\u4eec\u8bbe\u8ba1\u7ec4\u4ef6\u65f6\uff0c\u6709\u4e9b\u7ec4\u4ef6\u901a\u5e38\u4e0d\u77e5\u9053\u81ea\u5df1\u7684\u5b50\u7ec4\u4ef6\u4f1a\u6709\u4ec0\u4e48\u5185\u5bb9\uff0c\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"Sidebar")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog"),"  \u8fd9\u6837\u7684\u5bb9\u5668\u7ec4\u4ef6\u3002"),Object(i.b)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728\u8fd9\u6837\u7684\u60c5\u51b5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u6765\u4f20\u9012\u5b50\u5143\u7d20\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"class Dialog extends Component {\n  render () {\n    return (\n      <View className='dialog'>\n        <View className='header'>Welcome!</View>\n        <View className='body'>\n          {this.props.children}\n        </View>\n        <View className='footer'>-- divider --</View>\n      </View>\n    )\n  }\n}\n")),Object(i.b)("p",null,"\u8fd9\u6837\u5c31\u80fd\u5141\u8bb8\u5176\u5b83\u7ec4\u4ef6\u5728 JSX \u4e2d\u5d4c\u5957\u4efb\u610f\u5b50\u7ec4\u4ef6\u4f20\u9012\u7ed9 ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"class App extends Component {\n  render () {\n    return (\n      <View className='container'>\n        <Dialog>\n          <View className=\"dialog-message\">\n            Thank you for using Taro.\n          </View>\n        </Dialog>\n      </View>\n    )\n  }\n}\n")),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"<Dialog />")," JSX \u6807\u7b7e\u5185\u7684\u4efb\u4f55\u5185\u5bb9\u90fd\u4f1a\u4f5c\u4e3a\u5b83\u7684\u5b50\u5143\u7d20(Children)\u90fd\u4f1a\u4f20\u9012\u5230\u5b83\u7684\u7ec4\u4ef6\u3002"),Object(i.b)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8bf7\u4e0d\u8981\u5bf9 ",Object(i.b)("inlineCode",{parentName:"strong"},"this.props.children")," \u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c"),"\u3002Taro \u5728\u5c0f\u7a0b\u5e8f\u4e2d\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u4f7f\u7528\u7684\u662f\u5c0f\u7a0b\u5e8f\u7684 ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html"},Object(i.b)("inlineCode",{parentName:"a"},"slot"))," \u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u53ef\u4ee5\u628a ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u7406\u89e3\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"slot")," \u7684\u8bed\u6cd5\u7cd6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u5728 Taro \u4e2d\u5e76\u4e0d\u662f React \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"ReactElement")," \u5bf9\u8c61\uff0c\u56e0\u6b64\u5f62\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children && this.props.children"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children[0]")," \u5728 Taro \u4e2d\u90fd\u662f\u975e\u6cd5\u7684\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"this.props.children")," \u65e0\u6cd5\u7528 ",Object(i.b)("inlineCode",{parentName:"strong"},"defaultProps")," \u8bbe\u7f6e\u9ed8\u8ba4\u5185\u5bb9"),"\u3002\u7531\u4e8e\u5c0f\u7a0b\u5e8f\u7684\u9650\u5236\uff0cTaro \u4e5f\u65e0\u6cd5\u77e5\u9053\u7ec4\u4ef6\u7684\u6d88\u8d39\u8005\u662f\u5426\u4f20\u5165\u5185\u5bb9\uff0c\u6240\u4ee5\u65e0\u6cd5\u5e94\u7528\u9ed8\u8ba4\u5185\u5bb9\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u4e0d\u80fd\u628a ",Object(i.b)("inlineCode",{parentName:"strong"},"this.props.children")," \u5206\u89e3\u4e3a\u53d8\u91cf\u518d\u4f7f\u7528"),"\u3002\u7531\u4e8e\u666e\u901a\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"props")," \u6709\u4e00\u4e2a\u786e\u5207\u7684\u503c\uff0c\u6240\u4ee5\u5f53\u4f60\u628a\u5b83\u4eec\u5206\u89e3\u4e3a\u53d8\u91cf\u8fd0\u884c\u65f6\u53ef\u4ee5\u5904\u7406\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u5219\u4e0d\u80fd\u8fd9\u6837\u64cd\u4f5c\uff0c\u4f60\u5fc5\u987b\u663e\u6027\u5730\u628a ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u5168\u90e8\u90fd\u5199\u5b8c\u6574\u624d\u80fd\u5b9e\u73b0\u5b83\u7684\u529f\u80fd\u3002"),Object(i.b)("h2",{id:"\u7ec4\u5408"},"\u7ec4\u5408"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u81ea ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.9")," \u5f00\u59cb\u652f\u6301")),Object(i.b)("p",null,"\u6709\u4e9b\u60c5\u51b5\u4f60\u4e0d\u4ec5\u4ec5\u9700\u8981\u53ea\u4f20\u9012\u4e00\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u53ef\u80fd\u4f1a\u9700\u8981\u5f88\u591a\u4e2a\u300c\u5360\u4f4d\u7b26\u300d\u3002\u4f8b\u5982\u5728\u8fd9\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," \u7ec4\u4ef6\u4e2d\uff0c\u4f60\u4e0d\u4ec5\u9700\u8981\u81ea\u5b9a\u4e49\u5b83\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"body"),"\uff0c\u4f60\u5e0c\u671b\u5b83\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"header")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"footer")," \u90fd\u662f\u7ed9 ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," \u7ec4\u4ef6\u7684\u4f7f\u7528\u8005\u81ea\u7531\u5b9a\u5236\u3002\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"class Dialog extends Component {\n  render () {\n    return (\n      <View className='dialog'>\n        <View className='header'>\n          {this.props.renderHeader}\n        </View>\n        <View className='body'>\n          {this.props.children}\n        </View>\n        <View className='footer'>\n          {this.props.renderFooter}\n        </View>\n      </View>\n    )\n  }\n}\n\nclass App extends Component {\n  render () {\n    return (\n      <View className='container'>\n        <Dialog\n          renderHeader={\n            <View className='welcome-message'>Welcome!</View>\n          }\n          renderFooter={\n            <Button className='close'>Close</Button>\n          }\n        >\n          <View className=\"dialog-message\">\n            Thank you for using Taro.\n          </View>\n        </Dialog>\n      </View>\n    )\n  }\n}\n")),Object(i.b)("p",null,"\u5728\u6211\u4eec\u58f0\u660e ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," \u7ec4\u4ef6\u65f6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"header")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"footer")," \u90e8\u5206\u6211\u4eec\u5206\u522b\u589e\u52a0\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.renderHeader")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.renderFooter")," \u4f5c\u4e3a\u5360\u4f4d\u7b26\u3002\u76f8\u5e94\u5730\uff0c\u6211\u4eec\u5728\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," \u7ec4\u4ef6\u65f6\uff0c\u5c31\u53ef\u4ee5\u7ed9 ",Object(i.b)("inlineCode",{parentName:"p"},"renderHeader")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"renderFooter")," \u4f20\u5165 JSX \u5143\u7d20\uff0c\u8fd9\u4e24\u4e2a\u5206\u522b\u4f20\u5165\u7684 JSX \u5143\u7d20\u5c06\u4f1a\u586b\u5145\u5b83\u4eec\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," \u7ec4\u4ef6\u4e2d\u7684\u4f4d\u7f6e\u2014\u2014\u5c31\u50cf\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," JSX \u6807\u7b7e\u91cc\u5199\u5165\u7684\u5185\u5bb9\uff0c\u4f1a\u586b\u5145\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u7684\u4f4d\u7f6e\u4e00\u6837\u3002"),Object(i.b)("h3",{id:"\u6ce8\u610f\u4e8b\u9879-1"},"\u6ce8\u610f\u4e8b\u9879"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u7ec4\u4ef6\u7684\u7ec4\u5408\u9700\u8981\u9075\u5b88 ",Object(i.b)("inlineCode",{parentName:"strong"},"this.props.children")," \u7684\u6240\u6709\u89c4\u5219"),"\u3002\u7ec4\u5408\u8fd9\u4e2a\u529f\u80fd\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u4e00\u6837\u662f\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"slot")," \u5b9e\u73b0\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4 ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.children")," \u7684\u9650\u5236\u5bf9\u4e8e\u7ec4\u4ef6\u7ec4\u5408\u4e5f\u90fd\u540c\u6837\u9002\u7528\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u6240\u6709\u7ec4\u5408\u90fd\u5fc5\u987b\u7528 ",Object(i.b)("inlineCode",{parentName:"strong"},"render")," \u5f00\u5934\uff0c\u4e14\u9075\u5b88\u9a7c\u5cf0\u5f0f\u547d\u540d\u6cd5"),"\u3002\u548c\u6211\u4eec\u7684\u4e8b\u4ef6\u89c4\u8303\u4ee5 ",Object(i.b)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\u4e00\u6837\uff0c\u7ec4\u4ef6\u7ec4\u5408\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"render")," \u5f00\u5934\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u7ec4\u5408\u53ea\u80fd\u4f20\u5165\u5355\u4e2a JSX \u5143\u7d20\uff0c\u4e0d\u80fd\u4f20\u5165\u5176\u5b83\u4efb\u4f55\u7c7b\u578b"),"\u3002\u5f53\u4f60\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u6761\u4ef6\u5224\u65ad\u6216\u590d\u6742\u903b\u8f91\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Block")," \u5143\u7d20\u5305\u88f9\u4f4f\uff0c\u7136\u540e\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Block")," \u5143\u7d20\u7684\u91cc\u9762\u586b\u5145\u5176\u5b83\u590d\u6742\u7684\u903b\u8f91\u3002"))}s.isMDXComponent=!0},1806:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,O=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return t?a.a.createElement(O,p(p({ref:n},l),{},{components:t})):a.a.createElement(O,p({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);