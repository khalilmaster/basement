/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-hasevent-mq !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,r,a,s;for(var u in l)if(l.hasOwnProperty(u)){if(e=[],n=l[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)a=e[r],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),d.push((i?"":"no-")+s.join("-"))}}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):c?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=r(c?"svg":"body"),e.fake=!0),e}function s(e,t,o,i){var s,l,u,d,c="modernizr",p=r("div"),m=a();if(parseInt(o,10))for(;o--;)u=r("div"),u.id=i?i[o]:c+(o+1),p.appendChild(u);return s=r("style"),s.type="text/css",s.id="s"+c,(m.fake?m:p).appendChild(s),m.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",d=f.style.overflow,f.style.overflow="hidden",f.appendChild(m)),l=t(p,e),m.fake?(m.parentNode.removeChild(m),f.style.overflow=d,f.offsetHeight):p.parentNode.removeChild(p),!!l}var l=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){l.push({name:e,fn:n,options:t})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var d=[],f=n.documentElement,c="svg"===f.nodeName.toLowerCase(),p=function(){function e(e,n){var i;return e?(n&&"string"!=typeof n||(n=r(n||"div")),e="on"+e,i=e in n,!i&&o&&(n.setAttribute||(n=r("div")),n.setAttribute(e,""),i="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),i):!1}var o=!("onblur"in n.documentElement);return e}();u.hasEvent=p;var m=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return s("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();u.mq=m,i(),delete u.addTest,delete u.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);