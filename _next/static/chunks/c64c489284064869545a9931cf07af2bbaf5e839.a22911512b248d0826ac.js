(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"2LNF":function(e){e.exports=JSON.parse('{"fileMap":{"content/statement-and-expression.json":{"title":"\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f","date":"2019-08-09T00:00:00.000Z","page":"post","paths":["/statement-and-expression"],"preview":"\u8bed\u53e5\\n\\nwiki","dir":"content","base":"statement-and-expression.json","ext":".json","sourceBase":"statement-and-expression.md","sourceExt":".md"},"content/index.json":{"title":"","herf":"","date":"2020-06-04","siteTitle":"zangbianxuegu","description":"","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css","static/css/common.css"],"topLinks":[{"text":"Home","href":"https://zangbianxuegu.github.io/"},{"text":"Github","href":"https://github.com/zangbianxuegu/"},{"text":"Twitter","href":"https://twitter.com/zangbianxuegu"},{"text":"\u8c46\u74e3","href":"https://www.douban.com/people/zangbianxuegu/"}],"backgroundClass":"bg-dark-gray","copyright":"Tim Scanlin","siteId":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"}},"sourceFileArray":["content/index.md","content/statement-and-expression.md"]}')},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),o=n("lwAK"),s=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var u=f[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],p=r[u]||new Set;p.has(l)?o=!1:(p.add(l),r[u]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,a.default)();function h(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||s()}},"XLj/":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),s=n.n(o),i=a.a.createElement;function c(e){return i(s.a,{href:"post?fullUrl=".concat(e.href),as:e.href},i("a",{className:"b black o-80 glow no-underline lh-solid ".concat(e.className)},e.children))}t.a=function(e){return i("div",{className:"mb4 pb2 bb b--light-gray"},i(c,{href:e.href,className:"f3"},e.title),e.preview&&i("p",{className:"mv1 o-60"},e.preview,i(c,{href:e.href},i("span",null," \xbb"))),e.date&&i("small",{className:"db ttu o-40"},i("time",{key:new Date(e.date).toISOString()},e.date)))}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),s=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){s(u,i);var c=l(u);function u(e){var o;return r(this,u),o=c.call(this,e),p&&(t.add(a(o)),n(a(o))),o}return o(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),s=n("a1gu"),i=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}var u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=u(n("nOHt")),v=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,b=window.IntersectionObserver,w={};function x(){return f||(b?f=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){o(n,e);var t=c(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var s=e(a,o);return t=a,n=o,r=s,s}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),s=o.href,i=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,d.resolve)(c,s),i=i?(0,d.resolve)(c,i):s,e.preventDefault();var u=a.props.scroll;null==u&&(u=i.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](s,i,{shallow:a.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,d.resolve)(e,n);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||r),p.default.cloneElement(o,s)}}]),n}(p.Component);t.default=k},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},uVCN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),s=n.n(o),i=a.a.createElement;var c=function(e){return i(s.a,null,i("title",null,e.siteTitle),i("meta",{name:"description",content:e.description}),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.stylesheets&&e.stylesheets.length>0&&e.stylesheets.map((function(e,t){return i("link",{key:t,rel:"stylesheet",href:e})})),i("style",null,"\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "))},u=n("YFqc"),l=n.n(u),f=a.a.createElement;function p(e){return f("div",{className:"relative tc header-bg ".concat(e.backgroundClass)},f("div",{className:"mw7 center white pv4"},f("div",{className:"pv4"},f("h1",{className:"f1 normal lh-title ma0 pa0"},f(l.a,{href:"/"},f("a",{className:"white no-underline",href:"/"},e.heroTitle))),f("h4",{className:"normal o-70 ma0 pt2 pb3 ph1"},e.subtitle),f("div",null,e.topLinks&&e.topLinks.length>0&&e.topLinks.map((function(e,t){return-1===e.href.indexOf("http")?f(l.a,{href:e.href,key:t},f("a",{className:"dib f6 white no-underline pa1 ma1",key:t},e.text)):f("a",{className:"dib f6 white no-underline pa1 ma1",href:e.href,key:t},e.text)}))))))}p.defaultProps={backgroundClass:"bg-mid-gray",topLinks:[],heroTitle:"",subtitle:""};var d=p,h=a.a.createElement;var m=function(e){var t=new Date;return h("footer",{className:"center w5 f6 tc mt4"},h("p",null,h("span",null,"\xa9 "),h("span",null,t.getFullYear()," "),h("span",null,e.copyright)))},v=a.a.createElement;function y(e){return v("div",null,v(c,{siteTitle:e.siteTitle,description:e.description,stylesheets:e.stylesheets}),v("main",{className:"lh-copy"},v(d,{heroTitle:e.heroTitle,subtitle:e.description,topLinks:e.topLinks,backgroundClass:e.backgroundClass}),e.body,v(m,{copyright:e.copyright})))}y.defaultProps={heroTitle:"",description:"",stylesheets:["https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"],backgroundClass:"bg-dark-gray"};t.a=y},vivp:function(e){e.exports=JSON.parse('{"title":"","herf":"","date":"2020-06-04","siteTitle":"zangbianxuegu","description":"","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css","static/css/common.css"],"topLinks":[{"text":"Home","href":"https://zangbianxuegu.github.io/"},{"text":"Github","href":"https://github.com/zangbianxuegu/"},{"text":"Twitter","href":"https://twitter.com/zangbianxuegu"},{"text":"\u8c46\u74e3","href":"https://www.douban.com/people/zangbianxuegu/"}],"backgroundClass":"bg-dark-gray","copyright":"Tim Scanlin","siteId":"","bodyContent":"","bodyHtml":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"}')},xGbm:function(e,t,n){"use strict";function r(e){return new Date(e).toUTCString().split(" ").slice(1,4).join(" ")}n.d(t,"a",(function(){return r}))}}]);