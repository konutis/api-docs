"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2237:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(7462),s=(a(7294),a(3905));const r={},l="Shared assets",i={unversionedId:"assets/shared-assets",id:"assets/shared-assets",isDocsHomePage:!1,title:"Shared assets",description:"Visual Composer elements have an ability to include JavaScript and CSS libraries out of the box. These libraries are called shared assets.",source:"@site/docs/assets/shared-assets.md",sourceDirName:"assets",slug:"/assets/shared-assets",permalink:"/assets/shared-assets",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/assets/shared-assets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3rd party assets",permalink:"/assets/3rd-party-assets"},next:{title:"Dynamic Content",permalink:"/dynamic-content/dynamic-content"}},o=[{value:"Include assets via settings.json",id:"include-assets-via-settingsjson",children:[]},{value:"Download assets via manifest.json",id:"download-assets-via-manifestjson",children:[]},{value:"Available shared asset list",id:"available-shared-asset-list",children:[]}],p={toc:o};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"shared-assets"},"Shared assets"),(0,s.kt)("p",null,"Visual Composer elements have an ability to include JavaScript and CSS libraries out of the box. These libraries are called ",(0,s.kt)("strong",{parentName:"p"},"shared assets"),"."),(0,s.kt)("p",null,"Assets are included to an element via the ",(0,s.kt)("em",{parentName:"p"},"settings.json")," file. But it will only enqueue an asset if it is already available within a Visual Composer plugin. For instance, some other elements may contain assets, like Icon element. The Icon element contains multiple various icon libraries or assets, but these assets are available within a plugin only if the Icon element is downloaded."),(0,s.kt)("p",null,"A fresh installation of Visual Composer plugin comes only with a few basic elements, so some of the assets can only be available once particular elements are downloaded."),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"manifest.json")," file allows to specify a particular asset and it will a download it without downloading an element."),(0,s.kt)("h2",{id:"include-assets-via-settingsjson"},"Include assets via settings.json"),(0,s.kt)("p",null,"To include an asset inside ",(0,s.kt)("em",{parentName:"p"},"settings.json")," file a ",(0,s.kt)("inlineCode",{parentName:"p"},"sharedAssetsLibrary")," meta attribute should be used."),(0,s.kt)("p",null,"Include assets via ",(0,s.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sharedAssetsLibrary": {\n    "access": "protected",\n    "type": "string",\n    "value": {\n      "libraries": [\n        {\n          "libsNames": [\n            "slickSlider",\n            "animate"\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"download-assets-via-manifestjson"},"Download assets via manifest.json"),(0,s.kt)("p",null,"To download an asset inside the ",(0,s.kt)("em",{parentName:"p"},"manifest.json")," file a ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsDependencies")," property name should be used. This property accepts an array type value, where multiple assets can be specified."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsDependencies")," property may store a particular asset or an element. Which means that if an element is specified as a dependency, this element will be downloaded along with all of its assets. Whereas the specified asset will download this particular asset."),(0,s.kt)("p",null,"In the example below there are two items listed under the ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsDependencies")," property. One is the asset and another is an element."),(0,s.kt)("p",null,"To download only a single asset ",(0,s.kt)("inlineCode",{parentName:"p"},"\u201casset/assetName\u201d")," value has to be specified."),(0,s.kt)("p",null,"To download only an element ",(0,s.kt)("inlineCode",{parentName:"p"},"\u201celement/elementName\u201d")," value has to be specified."),(0,s.kt)("p",null,"Download assets via ",(0,s.kt)("em",{parentName:"p"},"manifest.json")," example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "elements": {\n    "textTest": {\n      "settings": {\n        "name": "Text Test",\n        "metaThumbnailUrl": "[publicPath]/thumbnail-text-block.png",\n        "metaPreviewUrl": "[publicPath]/preview-text-block.jpg",\n        "metaDescription": "Simple (TEST) text editor for working with static text, including paragraphs, titles, bullets and even media. Simple text block is a copy of default WordPress editor."\n      }\n    }\n  },\n  "categories": {\n    "Misc": {\n      "elements": [\n        "textTest"\n      ]\n    }\n  },\n  "assetsDependencies": [\n    "asset/iconpicker",\n    "element/Icon"\n  ]\n}\n')),(0,s.kt)("h2",{id:"available-shared-asset-list"},"Available shared asset list"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Library name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Element dependant"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"waypoints"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"http://imakewebthings.com/waypoints/"},"waypoints")," library. Included in the Design Options attribute"),(0,s.kt)("td",{parentName:"tr",align:null},"No")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"animate"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"https://daneden.github.io/animate.css/"},"animate.css")," library. Included in the Design Options attribute"),(0,s.kt)("td",{parentName:"tr",align:null},"No")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"iconpicker"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses a set of multiple various icon sets. Typicons, Material, Font Awesome, Entypo, etc. Bundled with an Icon element."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"imageFilter"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"https://una.im/CSSgram/"},"CSSgram")," library. Bundled with image type elements like Single Image."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"lightbox"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"https://lokeshdhakar.com/projects/lightbox2/"},"lightbox")," library. Bundled with image type elements like Single Image."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"photoswipe"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"http://photoswipe.com/"},"photoswipe")," library. Bundled with image type elements like Single Image"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"slickSlider"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"http://kenwheeler.github.io/slick/"},"Slick")," slider library. Bundled with elements that have a sliding option like Simple Image Slider."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"zoom"),(0,s.kt)("td",{parentName:"tr",align:null},"Uses ",(0,s.kt)("a",{parentName:"td",href:"http://www.jacklmoore.com/zoom/"},"jQuery zoom")," library. Bundled with image type elements like Single Image"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")))))}d.isMDXComponent=!0}}]);