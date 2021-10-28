(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[543],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3178:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a={},l="Inner Elements",s={unversionedId:"inner-elements/inner-elements",id:"inner-elements/inner-elements",isDocsHomePage:!1,title:"Inner Elements",description:"For advanced custom elements, Visual Composer allows you to integrate elements within other elements. Such an approach allows you to create a more flexible element with better structure and keep components less dependent.",source:"@site/docs/inner-elements/inner-elements.md",sourceDirName:"inner-elements",slug:"/inner-elements/inner-elements",permalink:"/inner-elements/inner-elements",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/inner-elements/inner-elements.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Element CSS Mixins",permalink:"/css-mixins/element-css-mixins"},next:{title:"Element Component Methods",permalink:"/element-component/element-component-methods"}},c=[{value:"Child Elements",id:"child-elements",children:[]},{value:"Nested Elements",id:"nested-elements",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inner-elements"},"Inner Elements"),(0,o.kt)("p",null,"For advanced custom elements, Visual Composer allows you to integrate elements within other elements. Such an approach allows you to create a more flexible element with better structure and keep components less dependent."),(0,o.kt)("p",null,"Visual Composer API allows defining inner elements as child elements or nested elements."),(0,o.kt)("h2",{id:"child-elements"},"Child Elements"),(0,o.kt)("p",null,"A child element is a part of a parent element it can be replaced by another element of its category. It cannot be moved or removed, however, it can be hidden if such option exists in the parent element."),(0,o.kt)("p",null,"A child element can be edited and has its own section with attribute fields in the Edit Form. To include a child element inside the parent, an ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," attribute should be used."),(0,o.kt)("p",null,"In the example, the Basic Button element is included as a child element. The value of element attribute must contain the tag of the child element. Optional properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"category")," to which element belongs (can be replaced by the elements of the same category);"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabLabel")," title of the Edit Form section;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"merge")," a set of attributes values that are merged upon element replace;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onChange")," will react to ",(0,o.kt)("inlineCode",{parentName:"li"},"addButton")," attribute change by showing/hiding child element section in the Edit Form and inside the element.\nThe button property must be then listed in the ",(0,o.kt)("inlineCode",{parentName:"li"},"metaEditFormTabs")," attribute property to display in the Edit Form.")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("em",{parentName:"p"},"component.js")," file import Cook service, use it to get and render an element like in the example below."),(0,o.kt)("p",null,"Child Element ",(0,o.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "button": {\n    "type": "element",\n    "access": "public",\n    "value": {\n      "tag": "basicButton",\n      "alignment": "center"\n    },\n    "options": {\n      "category": "Button",\n      "tabLabel": "Button",\n      "merge": {\n        "attributes": [\n          {\n            "key": "alignment",\n            "type": "string"\n          },\n          {\n            "key": "buttonText",\n            "type": "string"\n          },\n          {\n            "key": "buttonUrl",\n            "type": "object"\n          }\n        ]\n      },\n      "onChange": {\n        "rules": {\n          "addButton": {\n            "rule": "toggle"\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleSectionVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "addButton": {\n    "type": "toggle",\n    "access": "public",\n    "value": true,\n    "options": {\n      "label": "Add button"\n    }\n  },\n  "metaEditFormTabs": {\n    "type": "group",\n    "access": "protected",\n    "value": [\n      "editFormTab1",\n      "button",\n      "designOptions"\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Child Element ",(0,o.kt)("em",{parentName:"p"},"component.js")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport vcCake from 'vc-cake'\n\nconst Cook = vcCake.getService('cook')\nconst vcvAPI = vcCake.getService('api')\n\nexport default class SectionElement extends vcvAPI.elementComponent {\n  render () {\n    const { id, atts, editor } = this.props\n    const { addButton, button } = atts\n    ...\n    let buttonOutput = ''\n    if (addButton) {\n      let Button = Cook.get(button)\n      buttonOutput = Button ? Button.render(null, false) : null\n    }\n    return <div className='vce-section-container' id={'el-' + id} {...editor}>\n      {buttonOutput}\n    </div>\n  }\n}\n")),(0,o.kt)("h2",{id:"nested-elements"},"Nested Elements"),(0,o.kt)("p",null,"A nested element is an independent element which can be instantiated inside the parent element. This element can be removed, cloned, moved outside the parent element (via the ",(0,o.kt)("em",{parentName:"p"},"Drag and Drop"),"). Other elements of the same category can be added to the parent element. Nested elements are displayed as Tree View inside Edit Form. To include nested element ",(0,o.kt)("inlineCode",{parentName:"p"},"initChildren")," attribute must be used."),(0,o.kt)("p",null,"In the example below, Icon elements are included as nested elements. The value of an ",(0,o.kt)("inlineCode",{parentName:"p"},"initChildren")," attribute is an array with the corresponding number of nested element objects, each element must contain a tag property. Other properties corresponding to nested element ",(0,o.kt)("em",{parentName:"p"},"settings.json")," properties may be passed. Optional properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iconPicker")," is icon element\u2019s property with ",(0,o.kt)("inlineCode",{parentName:"li"},"iconPicker")," attribute type.\nProperties like icons with attribute type ",(0,o.kt)("inlineCode",{parentName:"li"},"treeView")," and meta attribute ",(0,o.kt)("inlineCode",{parentName:"li"},"containerFor")," must also be set.")),(0,o.kt)("p",null,"Nested elements will be available in element component\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props")," object under ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," property as an array of elements."),(0,o.kt)("p",null,"Nested Element ",(0,o.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "icons": {\n    "type": "treeView",\n    "access": "public",\n    "value": {},\n    "options": {\n      "label": "Icons"\n    }\n  },\n  "containerFor": {\n    "type": "group",\n    "access": "protected",\n    "value": [\n      "Icon"\n    ]\n  },\n  "initChildren": {\n    "access": "protected",\n    "type": "object",\n    "value": [\n      {\n        "tag": "icon",\n        "iconPicker": {\n          "icon": "vcv-ui-icon-feather vcv-ui-icon-feather-clipboard",\n          "iconSet": "feather"\n        }\n      },\n      {\n        "tag": "icon",\n        "iconPicker": {\n          "icon": "vcv-ui-icon-feather vcv-ui-icon-feather-cog",\n          "iconSet": "feather"\n        }\n      },\n      {\n        "tag": "icon",\n        "iconPicker": {\n          "icon": "vcv-ui-icon-feather vcv-ui-icon-feather-home",\n          "iconSet": "feather"\n        }\n      }\n    ]\n  },\n  "editFormTab1": {\n    "type": "group",\n    "access": "protected",\n    "value": [\n      "gap",\n      "alignment",\n      "verticalAlignment",\n      "icons",\n      "metaCustomId",\n      "customClass"\n    ],\n    "options": {\n      "label": "General"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Nested Element ",(0,o.kt)("em",{parentName:"p"},"component.js")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport vcCake from 'vc-cake'\nconst vcvAPI = vcCake.getService('api')\nexport default class IconGroup extends vcvAPI.elementComponent {\n  render () {\n    const { id, editor, children } = this.props\n    \n    // Your code goes here ...\n    return <div className='vce-icon-group-container' id={'el-' + id} {...editor}>\n      <div className='vce-icon-group'>\n        {children}\n      </div>\n    </div>\n  }\n}\n")))}m.isMDXComponent=!0}}]);