(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[699],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=s,h=u["".concat(o,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5996:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=n(2122),s=n(9756),r=(n(7294),n(3905)),l={},i="Assets management",o={unversionedId:"assets/assets-management",id:"assets/assets-management",isDocsHomePage:!1,title:"Assets management",description:"Visual Composer elements have an ability to include JavaScript and CSS libraries out of the box. These libraries are called shared assets.",source:"@site/docs/assets/assets-management.md",sourceDirName:"assets",slug:"/assets/assets-management",permalink:"/assets/assets-management",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/assets/assets-management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Render Custom Content",permalink:"/element-component/render-custom-content"},next:{title:"Dynamic Content",permalink:"/dynamic-content/dynamic-content"}},p=[{value:"Include assets via settings.json",id:"include-assets-via-settingsjson",children:[]},{value:"Download assets via manifest.json",id:"download-assets-via-manifestjson",children:[]},{value:"Available shared asset list",id:"available-shared-asset-list",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assets-management"},"Assets management"),(0,r.kt)("p",null,"Visual Composer elements have an ability to include JavaScript and CSS libraries out of the box. These libraries are called ",(0,r.kt)("strong",{parentName:"p"},"shared assets"),"."),(0,r.kt)("p",null,"Assets are included to an element via the ",(0,r.kt)("em",{parentName:"p"},"settings.json")," file. But it will only enqueue an asset if it is already available within a Visual Composer plugin. For instance, some other elements may contain assets, like Icon element. The Icon element contains multiple various icon libraries or assets, but these assets are available within a plugin only if the Icon element is downloaded."),(0,r.kt)("p",null,"A fresh installation of Visual Composer plugin comes only with a few basic elements, so some of the assets can only be available once particular elements are downloaded."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"manifest.json")," file allows to specify a particular asset and it will a download it without downloading an element."),(0,r.kt)("h2",{id:"include-assets-via-settingsjson"},"Include assets via settings.json"),(0,r.kt)("p",null,"To include an asset inside ",(0,r.kt)("em",{parentName:"p"},"settings.json")," file a ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedAssetsLibrary")," meta attribute should be used."),(0,r.kt)("p",null,"Include assets via ",(0,r.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sharedAssetsLibrary": {\n    "access": "protected",\n    "type": "string",\n    "value": {\n      "libraries": [\n        {\n          "libsNames": [\n            "slickSlider",\n            "animate"\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"download-assets-via-manifestjson"},"Download assets via manifest.json"),(0,r.kt)("p",null,"To download an asset inside the ",(0,r.kt)("em",{parentName:"p"},"manifest.json")," file a ",(0,r.kt)("inlineCode",{parentName:"p"},"assetsDependencies")," property name should be used. This property accepts an array type value, where multiple assets can be specified."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assetsDependencies")," property may store a particular asset or an element. Which means that if an element is specified as a dependency, this element will be downloaded along with all of its assets. Whereas the specified asset will download this particular asset."),(0,r.kt)("p",null,"In the example below there are two items listed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"assetsDependencies")," property. One is the asset and another is an element."),(0,r.kt)("p",null,"To download only a single asset ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201casset/assetName\u201d")," value has to be specified."),(0,r.kt)("p",null,"To download only an element ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201celement/elementName\u201d")," value has to be specified."),(0,r.kt)("p",null,"Download assets via ",(0,r.kt)("em",{parentName:"p"},"manifest.json")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "elements": {\n    "textTest": {\n      "settings": {\n        "name": "Text Test",\n        "metaThumbnailUrl": "[publicPath]/thumbnail-text-block.png",\n        "metaPreviewUrl": "[publicPath]/preview-text-block.jpg",\n        "metaDescription": "Simple (TEST) text editor for working with static text, including paragraphs, titles, bullets and even media. Simple text block is a copy of default WordPress editor."\n      }\n    }\n  },\n  "categories": {\n    "Misc": {\n      "elements": [\n        "textTest"\n      ]\n    }\n  },\n  "assetsDependencies": [\n    "asset/iconpicker",\n    "element/Icon"\n  ]\n}\n')),(0,r.kt)("h2",{id:"available-shared-asset-list"},"Available shared asset list"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Library name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Element dependant"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waypoints"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"http://imakewebthings.com/waypoints/"},"waypoints")," library. Included in the Design Options attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"animate"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"https://daneden.github.io/animate.css/"},"animate.css")," library. Included in the Design Options attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iconpicker"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses a set of multiple various icon sets. Typicons, Material, Font Awesome, Entypo, etc. Bundled with an Icon element."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"imageFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"https://una.im/CSSgram/"},"CSSgram")," library. Bundled with image type elements like Single Image."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lightbox"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"https://lokeshdhakar.com/projects/lightbox2/"},"lightbox")," library. Bundled with image type elements like Single Image."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"photoswipe"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"http://photoswipe.com/"},"photoswipe")," library. Bundled with image type elements like Single Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slickSlider"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"http://kenwheeler.github.io/slick/"},"Slick")," slider library. Bundled with elements that have a sliding option like Simple Image Slider."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoom"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"http://www.jacklmoore.com/zoom/"},"jQuery zoom")," library. Bundled with image type elements like Single Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))))}d.isMDXComponent=!0}}]);