"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[28],{830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},9754:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(7462),r=n(7294),l=n(3935),o=n(2263),c=n(5977),s=n(4996),i=n(6742),m=n(9105),u=n(2644);function d(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(830),f=["translations"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g="Ctrl";var E=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=b(e,f),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,m=(0,r.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return r.createElement("button",v({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(h.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==m&&r.createElement(r.Fragment,null,r.createElement("kbd",{className:"DocSearch-Button-Key"},m===g?r.createElement(d,null):m),r.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),p=n(907),k=n(941);function Z(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,p._r)(),n=(0,p.WS)(),a=(0,k.Oh)(),r=[k.HX,...Object.keys(t).map((function(e){var r,l;const o=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],s=t[e].versions.find((e=>e.isLast)),i=null!=(l=null!=o?o:c)?l:s;return(0,k.os)(e,i.name)}))];return{locale:e.currentLocale,tags:r}}();return["language:"+e,t.map((e=>"docusaurus_tag:"+e))]}var _=n(4973);const w="searchBox_Bc3W";let y=null;function C(e){let{hit:t,children:n}=e;return r.createElement(i.Z,{to:t.url},n)}function N(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,u.Z)();return r.createElement(i.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function S(e){var t,i;let{contextualSearch:u,...d}=e;const{siteMetadata:h}=(0,o.Z)(),f=Z(),v=null!=(t=null==(i=d.searchParameters)?void 0:i.facetFilters)?t:[],b=u?[...f,...v]:v,g={...d.searchParameters,facetFilters:b},{withBaseUrl:p}=(0,s.C)(),k=(0,c.k6)(),S=(0,r.useRef)(null),L=(0,r.useRef)(null),[D,I]=(0,r.useState)(!1),[T,B]=(0,r.useState)(null),M=(0,r.useCallback)((()=>y?Promise.resolve():Promise.all([n.e(431).then(n.bind(n,2431)),Promise.all([n.e(532),n.e(945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(40)]).then(n.bind(n,5040))]).then((e=>{let[{DocSearchModal:t}]=e;y=t}))),[]),x=(0,r.useCallback)((()=>{M().then((()=>{S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),I(!0)}))}),[M,I]),P=(0,r.useCallback)((()=>{I(!1),S.current.remove()}),[I]),A=(0,r.useCallback)((e=>{M().then((()=>{I(!0),B(e.key)}))}),[M,I,B]),R=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;k.push(t)}}).current,O=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:p(""+t.pathname+t.hash)}})))).current,U=(0,r.useMemo)((()=>e=>r.createElement(N,(0,a.Z)({},e,{onClose:P}))),[P]),V=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",h.docusaurusVersion),e)),[h.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:D,onOpen:x,onClose:P,onInput:A,searchButtonRef:L});const H=(0,_.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+d.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:w},r.createElement(E,{onTouchStart:M,onFocus:M,onMouseOver:M,onClick:x,ref:L,translations:{buttonText:H,buttonAriaLabel:H}})),D&&(0,l.createPortal)(r.createElement(y,(0,a.Z)({onClose:P,initialScrollY:window.scrollY,initialQuery:T,navigator:R,transformItems:O,hitComponent:C,resultsFooterComponent:U,transformSearchClient:V},d,{searchParameters:g})),S.current))}const L=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(S,e.themeConfig.algolia)}},2644:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5977),r=n(412),l=n(2263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}}},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},6028:(e,t,n)=>{n.d(t,{Z:()=>_e});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),c=n(941);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(7462);function d(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_axC9",f="announcementBarPlaceholder_xYHE",v="announcementBarClose_A3A1",b="announcementBarContent_6uhP";const g=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:f}),a.createElement("div",{className:b,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",v),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14})):null)};var E=n(9754),p=n(2389);const k={toggle:"toggle_iYfV"},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{var t;"Enter"===e.key&&(null==(t=d.current)||t.click())}}))}));function y(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(w,(0,u.Z)({disabled:!o,icons:{checked:a.createElement(Z,{icon:t,style:n}),unchecked:a.createElement(_,{icon:r,style:l})}},e))}var C=n(5350),N=n(7898);const S=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,N.Z)(((t,n)=>{const a=t.scrollY,l=null==n?void 0:n.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const L=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var D=n(3783),I=n(907),T=n(7819),B=n(5537);const M=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function x(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const P="toggle_2i4l",A="navbarHideable_RReh",R="navbarHidden_FBwS",O="navbarSidebarToggle_AVbO",U="navbarSidebarCloseSvg_+9jJ",V="right";function H(){return(0,c.LU)().navbar.items}function z(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,C.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function W(e){let{sidebarShown:t,toggleSidebar:n}=e;L(t);const l=H(),s=z(),i=function(e){var t;let{sidebarShown:n,toggleSidebar:r}=e;const l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),[s,i]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{l&&!o&&i(!0)}),[l,o]);const m=!!l;return(0,a.useEffect)((()=>{m?n||i(!0):i(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((()=>{i(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(y,{className:O,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(x,{width:20,height:20,className:U}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const F=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,D.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{n&&r(!1)}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=z(),o=(0,I.gA)(),{navbarRef:s,isNavbarVisible:i}=S(e),m=H(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:f}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!=(t=e.position)?t:V)})),rightItems:e.filter((e=>{var t;return"right"===(null!=(t=e.position)?t:V)}))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[A]:e,[R]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==m?void 0:m.length)>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(M,null)),a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},f.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t})))),!l.disabled&&a.createElement(y,{className:P,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(W,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var j=n(6742),K=n(4996),q=n(3919);const Y="footerLogoLink_SRtH";var G=n(8465),X=n(8617);function J(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,K.Z)(t),s=(0,K.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(j.Z,(0,u.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,q.Z)(n)?a.createElement("span",null,r,a.createElement(X.Z,null)):r)}const Q=e=>{let{sources:t,alt:n}=e;return a.createElement(G.Z,{className:"footer__logo",alt:n,sources:t})};const $=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,K.Z)(l.src),dark:(0,K.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(J,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(j.Z,{href:l.href,className:Y},a.createElement(Q,{alt:l.alt,sources:o})):a.createElement(Q,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var ee=n(412);const te=(0,c.WA)("theme"),ne="light",ae="dark",re=e=>e===ae?ae:ne,le=e=>{(0,c.WA)("theme").set(re(e))},oe=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>ee.Z.canUseDOM?re(document.documentElement.getAttribute("data-theme")):re(e))(e)),o=(0,a.useCallback)((()=>{l(ne),le(ne)}),[]),s=(0,a.useCallback)((()=>{l(ae),le(ae)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",re(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=te.get();null!==e&&l(re(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?ae:ne)}))}),[]),{isDarkTheme:r===ae,setLightTheme:o,setDarkTheme:s}};var ce=n(2924);const se=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=oe();return a.createElement(ce.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ie="docusaurus.tab.",me=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ie)){const n=t.substring(ie.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ue=(0,a.createContext)(void 0);const de=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=me();return a.createElement(ue.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function he(e){let{children:t}=e;return a.createElement(se,null,a.createElement(c.pl,null,a.createElement(de,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var fe=n(9105),ve=n(2263);function be(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(fe.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var ge=n(1217);function Ee(){const{i18n:{defaultLocale:e,locales:t}}=(0,ve.Z)(),n=(0,c.l5)();return a.createElement(fe.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function pe(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,ve.Z)(),r=function(){const{siteConfig:{url:e}}=(0,ve.Z)(),{pathname:t}=(0,l.TH)();return e+(0,K.Z)(t)}(),o=t?""+n+t:r;return a.createElement(fe.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ke(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,ve.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,f=(0,K.Z)(t),v=(0,c.pe)(s),b=n,g=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(fe.Z,null,a.createElement("html",{lang:b,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:f}),a.createElement("title",null,v),a.createElement("meta",{property:"og:title",content:v}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(ge.Z,{image:o}),m&&a.createElement(ge.Z,{image:m}),a.createElement(ge.Z,{description:i,keywords:d}),a.createElement(pe,null),a.createElement(Ee,null),a.createElement(be,(0,u.Z)({tag:c.HX,locale:n},h)),a.createElement(fe.Z,null,l.map(((e,t)=>a.createElement("meta",(0,u.Z)({key:"metadata_"+t},e))))))}const Ze=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const _e=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return Ze(),a.createElement(he,null,a.createElement(ke,e),a.createElement(m,null),a.createElement(g,null),a.createElement(F,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement($,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263),i=n(941);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:d,...h}=e,f=(0,c.Z)(m.href||"/"),v={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,m.target&&{target:m.target}),m.src&&r.createElement(o.Z,{className:u,sources:v,alt:m.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>u,Z:()=>f});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919),m=n(7819);function u(e){var t;let{activeBasePath:n,activeBaseRegex:l,to:m,href:u,label:d,activeClassName:h="",prependBaseUrlToHref:f,...v}=e;const b=(0,c.Z)(m),g=(0,c.Z)(n),E=(0,c.Z)(u,{forcePrependBaseUrl:!0}),p=d&&u&&!(0,i.Z)(u),k="dropdown__link--active"===h;return r.createElement(o.Z,(0,a.Z)({},u?{href:f?E:u}:{isNavLink:!0,activeClassName:null!=(t=v.className)&&t.includes(h)?"":h,to:b,...n||l?{isActive:(e,t)=>l?new RegExp(l).test(t.pathname):t.pathname.startsWith(g)}:null},v),p?r.createElement("span",null,d,r.createElement(s.Z,k&&{width:12,height:12})):d)}function d(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(u,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function h(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(u,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const f=function(e){var t;let{mobile:n=!1,position:l,...o}=e;const c=n?h:d;return r.createElement(c,(0,a.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,m.E)(n)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(7819),i=n(941),m=n(8780);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.Iw)(u),{preferredVersion:v}=(0,i.J)(u),b=(0,o.yW)(u),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((e=>e.name)).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return a}((0,m.uniq)([h,v,b].filter(Boolean)),t),E=(0,s.E)(d.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[E]:(null==f?void 0:f.sidebar)&&f.sidebar===g.sidebar}),activeClassName:E,label:null!=n?n:g.id,to:g.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(941),i=n(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){var t,n;let{mobile:u,docsPluginId:d,dropdownActiveClassDisabled:h,dropdownItemsBefore:f,dropdownItemsAfter:v,...b}=e;const g=(0,c.Iw)(d),E=(0,c.gB)(d),p=(0,c.yW)(d),{preferredVersion:k,savePreferredVersionName:Z}=(0,s.J)(d);const _=function(){const e=E.map((e=>{const t=(null==g?void 0:g.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==g?void 0:g.activeVersion),onClick:()=>{Z(e.name)}}}));return[...f,...e,...v]}(),w=null!=(t=null!=(n=g.activeVersion)?n:k)?t:p,y=u&&_?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):w.label,C=u&&_?void 0:m(w).path;return _.length<=1?r.createElement(l.Z,(0,a.Z)({},b,{mobile:u,label:y,to:C,isActive:h?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},b,{mobile:u,label:y,to:C,items:_,isActive:h?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(941);function s(e){var t;let{label:n,to:s,docsPluginId:i,...m}=e;const u=(0,o.zu)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.yW)(i),f=null!=(t=null!=u?u:d)?t:h,v=null!=n?n:f.label,b=null!=s?s:(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return r.createElement(l.Z,(0,a.Z)({},m,{label:v,to:b}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(941),c=n(5525),s=n(7819);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){var t;let{items:n,position:o,className:i,...m}=e;const u=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]),r.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",i)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!h))}}),null!=(t=m.children)?t:m.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},n.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),f(!1);const t=u.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))))))}function u(e){var t;let{items:n,className:m,position:u,...d}=e;const h=(0,o.be)(),f=i(n,h),{collapsed:v,toggleCollapsed:b,setCollapsed:g}=(0,o.uR)({initialState:()=>!f});return(0,r.useEffect)((()=>{f&&g(!f)}),[h,f]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",m)},d,{onClick:e=>{e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},n.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...n}=e;const a=t?u:m;return r.createElement(a,n)}},7819:(e,t,n)=>{n.d(t,{Z:()=>b,E:()=>v});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(941);const m="iconLanguage_EbrZ";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:f}}=(0,s.Z)(),v=(0,i.l5)();function b(e){return f[e].label}const g=[...n,...h.map((e=>{const t="pathname://"+v.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":b(d);return a.createElement(l.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:g}))}var d=n(9754);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.Z,null)}const f={default:()=>r.Z,localeDropdown:()=>u,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};const v=e=>e?"menu__link--active":"navbar__link--active";function b(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=(e=>{const t=f[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(r);return a.createElement(l,n)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],m)},d)))))}},7898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);