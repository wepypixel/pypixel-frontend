(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1261)}])},6276:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",i="navigate",a="restore",l="server-patch",s="prefetch",c="fast-refresh",u="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2278:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6878:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=r(1757),i=o._(r(5784)),a=n._(r(8316)),l=r(3371),s=r(1410),c=r(9677);r(9627);let u=n._(r(6633)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function d(e){return void 0!==e.default}function h(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function v(e,t,r,n,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function p(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:a,className:l,imgStyle:s,blurStyle:c,isLazy:u,fetchPriority:f,fill:d,placeholder:h,loading:g,srcString:m,config:_,unoptimized:b,loader:y,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:C,onLoad:N,onError:E,...O}=e;return g=u?"lazy":g,i.default.createElement("img",{...O,...p(f),loading:g,width:o,height:n,decoding:"async","data-nimg":d?"fill":"1",className:l,style:{...s,...c},...r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&v(e,m,h,x,j,w,b))},[m,h,x,j,w,E,b,t]),onLoad:e=>{let t=e.currentTarget;v(t,m,h,x,j,w,b)},onError:e=>{C(!0),"blur"===h&&w(!0),E&&E(e)}})}),m=(0,i.forwardRef)((e,t)=>{var r;let n,o,{src:v,sizes:m,unoptimized:_=!1,priority:b=!1,loading:y,className:x,quality:j,width:w,height:C,fill:N,style:E,onLoad:O,onLoadingComplete:P,placeholder:k="empty",blurDataURL:S,fetchPriority:R,layout:M,objectFit:I,objectPosition:T,lazyBoundary:L,lazyRoot:A,...z}=e,F=(0,i.useContext)(c.ImageConfigContext),B=(0,i.useMemo)(()=>{let e=f||F||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[F]),D=z.loader||u.default;delete z.loader;let U="__next_img_default"in D;if(U){if("custom"===B.loader)throw Error('Image with src "'+v+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!m&&(m=t)}let H="",W=h(w),V=h(C);if("object"==typeof(r=v)&&(d(r)||void 0!==r.src)){let e=d(v)?v.default:v;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,o=e.blurHeight,S=S||e.blurDataURL,H=e.src,!N){if(W||V){if(W&&!V){let t=W/e.width;V=Math.round(e.height*t)}else if(!W&&V){let t=V/e.height;W=Math.round(e.width*t)}}else W=e.width,V=e.height}}let K=!b&&("lazy"===y||void 0===y);(!(v="string"==typeof v?v:H)||v.startsWith("data:")||v.startsWith("blob:"))&&(_=!0,K=!1),B.unoptimized&&(_=!0),U&&v.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(_=!0),b&&(R="high");let[q,G]=(0,i.useState)(!1),[Y,Z]=(0,i.useState)(!1),X=h(j),J=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:T}:{},Y?{}:{color:"transparent"},E),Q="blur"===k&&S&&!q?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:W,heightInt:V,blurWidth:n,blurHeight:o,blurDataURL:S,objectFit:J.objectFit})+'")'}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:l({config:t,src:r,quality:i,width:s[u]})}}({config:B,src:v,unoptimized:_,width:W,quality:X,sizes:m,loader:D}),ee=v,et=(0,i.useRef)(O);(0,i.useEffect)(()=>{et.current=O},[O]);let er=(0,i.useRef)(P);(0,i.useEffect)(()=>{er.current=P},[P]);let en={isLazy:K,imgAttributes:$,heightInt:V,widthInt:W,qualityInt:X,className:x,imgStyle:J,blurStyle:Q,loading:y,config:B,fetchPriority:R,fill:N,unoptimized:_,placeholder:k,loader:D,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:G,setShowAltText:Z,...z};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...en,ref:t}),b?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imageSrcSet:$.srcSet,imageSizes:$.sizes,crossOrigin:z.crossOrigin,...p(R)})):null)}),_=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6703:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),o=n._(r(5784)),i=r(947),a=r(1901),l=r(242),s=r(6873),c=r(5116),u=r(7220),f=r(6102),d=r(8156),h=r(2278),v=r(4848),p=r(6276),g=new Set;function m(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(g.has(i))return;g.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function _(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:g,children:b,prefetch:y=null,passHref:x,replace:j,shallow:w,scroll:C,locale:N,onClick:E,onMouseEnter:O,onTouchStart:P,legacyBehavior:k=!1,...S}=e;r=b,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=!1!==y,M=null===y?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,I=o.default.useContext(u.RouterContext),T=o.default.useContext(f.AppRouterContext),L=null!=I?I:T,A=!I,{href:z,as:F}=o.default.useMemo(()=>{if(!I){let e=_(l);return{href:e,as:g?_(g):e}}let[e,t]=(0,i.resolveHref)(I,l,!0);return{href:e,as:g?(0,i.resolveHref)(I,g):t||e}},[I,l,g]),B=o.default.useRef(z),D=o.default.useRef(F);k&&(n=o.default.Children.only(r));let U=k?n&&"object"==typeof n&&n.ref:t,[H,W,V]=(0,d.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(D.current!==F||B.current!==z)&&(V(),D.current=F,B.current=z),H(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[F,U,z,V,H]);o.default.useEffect(()=>{L&&W&&R&&m(L,z,F,{locale:N},{kind:M},A)},[F,z,W,N,R,null==I?void 0:I.locale,L,A,M]);let q={ref:K,onClick(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,i,l,s,c,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:c,scroll:s}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?o.default.startTransition(v):v()}(e,L,z,F,j,w,C,N,A,R)},onMouseEnter(e){k||"function"!=typeof O||O(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(R||!A)&&m(L,z,F,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:M},A)},onTouchStart(e){k||"function"!=typeof P||P(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(R||!A)&&m(L,z,F,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:M},A)}};if((0,s.isAbsoluteUrl)(F))q.href=F;else if(!k||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==N?N:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);q.href=t||(0,v.addBasePath)((0,c.addLocale)(F,e,null==I?void 0:I.defaultLocale))}return k?o.default.cloneElement(n,q):o.default.createElement("a",{...S,...q},r)}),y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(5784),o=r(7027),i="function"==typeof IntersectionObserver,a=new Map,l=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!i,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(c||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,u,d.current]);let v=(0,n.useCallback)(()=>{f(!1)},[]);return[h,u,v]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3371:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n||t,s=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6633:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1261:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(1844);r(2016);var o=r(1664),i=r.n(o),a=r(7909),l=r.n(a),s=r(5784),c=r(1163),u=r(8193),f=r(5788),d=r(5675),h=r.n(d);function v(){let[e,t]=(0,s.useState)(""),[r,o]=(0,s.useState)(!1),a=()=>o(!r),d=(0,c.useRouter)(),v=t=>{t.preventDefault(),o(!r),window.open("/search-results/?search=".concat(e),"_self")};return(0,n.jsxs)("nav",{className:l().nav,children:[(0,n.jsxs)("div",{className:l().navItems,children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)(h(),{src:"/pypixelLogo.png",className:l()["nav-logo"],width:50,height:40})}),(0,n.jsxs)("ul",{className:r?l()["nav-list-ul-active"]:l()["nav-list-ul"],children:[(0,n.jsx)("form",{onSubmit:v,className:l()["mobile-form"],children:(0,n.jsxs)("div",{className:l().searchDivNavMobile,children:[(0,n.jsx)("input",{type:"text",value:e,className:l().searchBarNavMobile,placeholder:"Search",onChange:e=>t(e.target.value),required:!0}),(0,n.jsx)("button",{type:"submit",children:(0,n.jsx)(u.RB5,{className:l().searchIconNavMobile})})]})}),(0,n.jsxs)("div",{className:l()["li-div-mobile"],children:[(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/category/technology",className:"/category/technology"===d.asPath?l().activeLink:"",onClick:r?a:()=>{},children:"Technology"},"technology")}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/category/design",className:"/category/design"===d.asPath?l().activeLink:"",onClick:r?a:()=>{},children:"Design"},"design")}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/about-us",className:"/about-us"===d.asPath?l().activeLink:"",onClick:r?a:()=>{},children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/contact-us",className:"/contact-us"===d.asPath?l().activeLink:"",onClick:r?a:()=>{},children:"Contact Us"})})]})]})]}),(0,n.jsx)("form",{onSubmit:v,children:(0,n.jsxs)("div",{className:l().searchDivNav,children:[(0,n.jsx)("input",{type:"text",value:e,className:l().searchBarNav,placeholder:"Search",onChange:e=>t(e.target.value),required:!0}),(0,n.jsx)("button",{type:"submit",children:(0,n.jsx)(u.RB5,{className:l().searchIconNav})})]})}),r?(0,n.jsx)(f.ySC,{className:l()["nav-toggle-menu"],onClick:a}):(0,n.jsx)(u.qTj,{className:l()["nav-toggle-menu"],onClick:a})]})}var p=r(180),g=r.n(p);function m(){return(0,n.jsx)("footer",{className:g().footer,children:(0,n.jsxs)("div",{className:g()["footer-parent"],children:[(0,n.jsxs)("div",{className:g()["footer-div1"],children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("h1",{children:"PyPixel"})}),(0,n.jsx)("p",{className:g().footerPara,children:"PyPixel is a technology and design blog that aims to bring the latest insights and trends in the world of ML, AI, web development, Python, UI/UX design, and more."})]}),(0,n.jsxs)("div",{className:g()["footer-tagline"],children:["Sharing resources for tech and design.",(0,n.jsx)("span",{children:"\xa9 2023 PyPixel. All Rights Reserved"})]})]}),(0,n.jsxs)("div",{className:g()["footer-div2"],children:[(0,n.jsx)("h3",{children:"Overview"})," ",(0,n.jsx)(i(),{href:"/category/technology",children:(0,n.jsx)("p",{className:g()["footer-site-links"],children:"Technology"})}),(0,n.jsx)(i(),{href:"/category/design",children:(0,n.jsx)("p",{className:g()["footer-site-links"],children:"Design"})}),(0,n.jsx)(i(),{href:"/about-us",children:(0,n.jsx)("p",{className:g()["footer-site-links"],children:"About Us"})}),(0,n.jsx)(i(),{href:"/contact-us",children:(0,n.jsx)("p",{className:g()["footer-site-links"],children:"Contact Us"})})]}),(0,n.jsxs)("div",{className:g()["footer-div3"],children:[(0,n.jsx)("h3",{children:"Social Links"}),(0,n.jsx)(i(),{href:"https://www.instagram.com/wepypixel",target:"_blank",children:(0,n.jsx)("p",{className:g()["footer-social-links"],children:"Instagram"})}),(0,n.jsx)(i(),{href:"https://www.twitter.com/wepypixel",target:"_blank",children:(0,n.jsx)("p",{className:g()["footer-social-links"],children:"Twitter"})}),(0,n.jsx)(i(),{href:"mailto:wepypixel@gmail.com",target:"_blank",children:(0,n.jsx)("p",{className:g()["footer-social-links"],children:"Email"})})]})]})})}function _(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{}),(0,n.jsx)(t,{...r}),(0,n.jsx)(m,{})]})}},2016:function(){},180:function(e){e.exports={footer:"Footer_footer__pJUho","footer-div1":"Footer_footer-div1__VR4Hs","footer-tagline":"Footer_footer-tagline__lQsOm","footer-site-links":"Footer_footer-site-links__BvTnm","footer-social-links":"Footer_footer-social-links__8jw8m","footer-parent":"Footer_footer-parent__t2wdu","footer-div2":"Footer_footer-div2__KUzV8","footer-div3":"Footer_footer-div3__phg9b",footerPara:"Footer_footerPara__oOu27"}},7909:function(e){e.exports={nav:"navbar_nav__IeXs0","nav-logo":"navbar_nav-logo__BUY4c",navItems:"navbar_navItems__714Sp","nav-list-ul":"navbar_nav-list-ul__WK2z_",searchDivNav:"navbar_searchDivNav__cGWZp",searchBarNav:"navbar_searchBarNav__FRR7z",searchIconNav:"navbar_searchIconNav__cUDE2",activeLink:"navbar_activeLink__ofHte","toggle-icons":"navbar_toggle-icons__4LpnF","mobile-form":"navbar_mobile-form__eRWDg","nav-toggle-menu":"navbar_nav-toggle-menu__dQZPI","li-div-mobile":"navbar_li-div-mobile__QWVqy",logo:"navbar_logo__BOlHb",menu:"navbar_menu__Tnmyf","nav-toggle-search":"navbar_nav-toggle-search___yv_u",searchDivNavMobile:"navbar_searchDivNavMobile__FYDTi",searchBarNavMobile:"navbar_searchBarNavMobile__dTnsM",searchIconNavMobile:"navbar_searchIconNavMobile___laZp","nav-list-ul-active":"navbar_nav-list-ul-active__eIip_",slideFromRight:"navbar_slideFromRight__jBx25"}},9803:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(5784),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},1844:function(e,t,r){"use strict";e.exports=r(9803)},5675:function(e,t,r){e.exports=r(6878)},1664:function(e,t,r){e.exports=r(6703)},1163:function(e,t,r){e.exports=r(3598)},8193:function(e,t,r){"use strict";r.d(t,{Gtc:function(){return o},RB5:function(){return a},qTj:function(){return i}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(5784),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function s(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},5788:function(e,t,r){"use strict";r.d(t,{FuB:function(){return i},ySC:function(){return o}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:"currentColor"}}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],function(){return t(1118),t(3598)}),_N_E=e.O()}]);