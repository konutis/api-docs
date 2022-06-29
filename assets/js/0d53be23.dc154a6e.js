"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1191:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Element Component Methods",o={unversionedId:"element-component/element-component-methods",id:"element-component/element-component-methods",isDocsHomePage:!1,title:"Element Component Methods",description:"Each custom element extends a Visual Composer elementComponent class which itself is a React component. There is default React lifecycle methods that can be used to render and update the elementComponent.",source:"@site/docs/element-component/element-component-methods.md",sourceDirName:"element-component",slug:"/element-component/element-component-methods",permalink:"/element-component/element-component-methods",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/element-component/element-component-methods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inner Elements",permalink:"/inner-elements/inner-elements"},next:{title:"Render Custom Content",permalink:"/element-component/render-custom-content"}},p=[{value:"Component methods",id:"component-methods",children:[{value:"spinnerHTML",id:"spinnerhtml",children:[]},{value:"getShortcodesRegexp",id:"getshortcodesregexp",children:[]},{value:"updateShortcodeToHtml",id:"updateshortcodetohtml",children:[]},{value:"updateInlineHtml",id:"updateinlinehtml",children:[]},{value:"updateInlineScript",id:"updateinlinescript",children:[]},{value:"getDomNode",id:"getdomnode",children:[]},{value:"getBackgroundClass",id:"getbackgroundclass",children:[]},{value:"applyDO",id:"applydo",children:[]},{value:"getAnimationData",id:"getanimationdata",children:[]},{value:"getMixinData",id:"getmixindata",children:[]},{value:"getImageUrl",id:"getimageurl",children:[]},{value:"getPublicImage",id:"getpublicimage",children:[]}]},{value:"Container specific methods",id:"container-specific-methods",children:[{value:"getContainerDivider",id:"getcontainerdivider",children:[]},{value:"getStickyAttributes",id:"getstickyattributes",children:[]},{value:"getBackgroundTypeContent",id:"getbackgroundtypecontent",children:[]}]}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"element-component-methods"},"Element Component Methods"),(0,r.kt)("p",null,"Each custom element extends a Visual Composer ",(0,r.kt)("inlineCode",{parentName:"p"},"elementComponent")," class which itself is a ",(0,r.kt)("a",{href:"https://reactjs.org/docs/react-component.html",target:"_blank"},"React component"),". There is default ",(0,r.kt)("a",{href:"https://reactjs.org/docs/state-and-lifecycle.html",target:"_blank"},"React lifecycle methods")," that can be used to render and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"elementComponent"),"."),(0,r.kt)("p",null,"However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"elementComponent")," has some additional methods available, to ease the development process and provide additional functionality. Each of these methods can be overridden if necessary."),(0,r.kt)("p",null,"These methods can be called within an ",(0,r.kt)("inlineCode",{parentName:"p"},"elementComponet")," class by using ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," keyword, e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"this.applyDO('all')"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note: Some of these methods accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," as an argument, this ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," usually is a ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React ref")," of an HTML tag."))),(0,r.kt)("h2",{id:"component-methods"},"Component methods"),(0,r.kt)("h3",{id:"spinnerhtml"},"spinnerHTML"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Creates a loading spinner which can be used when loading content like shortcode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),": No."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": An HTML of a spinner."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"componentDidMount () {\n  if (loading) {\n    this.elementRef.current = this.spinnerHTML()\n  }\n}\n")),(0,r.kt)("h3",{id:"getshortcodesregexp"},"getShortcodesRegexp"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Gets the Regular Expression of a shortcode, can be used to match a shortcode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),": No."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Regular expression."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getShortcodesRegexp()\n")),(0,r.kt)("h3",{id:"updateshortcodetohtml"},"updateShortcodeToHtml"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Updates the shortcode to HTML code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content"),": shortcode;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref"),": a reference to an HTML tag;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback"),": callback function.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": -."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.updateShortcodeToHtml(`[contact-form-7 id='${formId}']`, this.ref)\n")),(0,r.kt)("h3",{id:"updateinlinehtml"},"updateInlineHtml"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Updates the HTML code inside a tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref"),": a reference to an HTML tag;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"html"),": raw HTML code;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": a string of HTML code, thats is stored in a data attribute.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": -."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const htmlCode = `<b>Hello World!</b>`\nthis.updateInlineHtml(this.ref, htmlCode)\n")),(0,r.kt)("h3",{id:"updateinlinescript"},"updateInlineScript"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Updates the JavaScript code inside a tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref"),": a reference to an HTML tag;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"js"),": raw JavaScript code.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": -."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const jsCode = `console.log(Date())`\nthis.updateInlineScript(this.ref, jsCode)\n")),(0,r.kt)("h3",{id:"getdomnode"},"getDomNode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Uses ReactDOM to get current element's DOM node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": A DOM node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getDomNode()\n")),(0,r.kt)("h3",{id:"getbackgroundclass"},"getBackgroundClass"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Gets the background class ",(0,r.kt)("inlineCode",{parentName:"p"},"vce-element\u2013has-background")," of an element, if no background color or background image is selected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"designOption"),": Design Options object that can be accessed from the this.props.atts")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": A string containing background class or empty string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getBackgroundClass(this.props.atts.designOptions)\n")),(0,r.kt)("h3",{id:"applydo"},"applyDO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get the Design Options styles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prop"),": a string that represents one or multiple options from Design Options.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": An object of Design Option props."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// get all Design Options\nthis.applyDO('all')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// get just the margin\nthis.applyDO('margin')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// get multiple options (in this example all available options are listed)\nthis.applyDO('margin border padding background animation')\n")),(0,r.kt)("h3",{id:"getanimationdata"},"getAnimationData"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get animation classes as a string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": a string of applied animation classes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getAnimationData()\n")),(0,r.kt)("h3",{id:"getmixindata"},"getMixinData"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get mixin data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mixinName"),": a string with a name of the mixin.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": an object with mixin value and selector."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getMixinData('color')\n")),(0,r.kt)("h3",{id:"getimageurl"},"getImageUrl"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get the URL of the image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image"),": an object that contains the image URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size"),": a string with the image size.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": a string with a path to an image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getImageUrl(this.props.atts.imageSrc, 'large')\n")),(0,r.kt)("h3",{id:"getpublicimage"},"getPublicImage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get the public path of the image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filename"),": a string containing an image path.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": a string with a path to an image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getPublicImage('my-image.png')\n")),(0,r.kt)("h2",{id:"container-specific-methods"},"Container specific methods"),(0,r.kt)("p",null,"The below methods are specific to a container type elements like row, column, section and such:"),(0,r.kt)("h3",{id:"getcontainerdivider"},"getContainerDivider"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get the divider container depending on the selected divider in Design Options."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),": No."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": a JSX markup."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getContainerDivider()\n")),(0,r.kt)("h3",{id:"getstickyattributes"},"getStickyAttributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get the sticky attributes of an element (currently available only for container type elements)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sticky"),": an object containing device list.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": an object containing element sticky attributes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getStickyAttributes(this.props.atts.sticky)\n")),(0,r.kt)("h3",{id:"getbackgroundtypecontent"},"getBackgroundTypeContent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Get the background container depending on the selected background in Design Options."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),": No."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": a JSX markup."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"this.getBackgroundTypeContent()\n")))}m.isMDXComponent=!0}}]);