(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[22],{155:function(e,n,t){e.exports={row:"index_row_58126",active:"index_active_a50f8",inputContainer:"index_inputContainer_89f19",input:"index_input_8974c",cursorInput:"index_cursorInput_6a24a",clearIcon:"index_clearIcon_26a9c",noShow:"index_noShow_bf72d",overlayClass:"index_overlayClass_8eab1",treeContainer:"index_treeContainer_40223"}},156:function(e,n,t){e.exports={star:"index_star_df2dd"}},177:function(e,n,t){"use strict";t.r(n);var a=t(34),i=t(33),r=t(65),c=t(66),o=t(67),d=t(155),s=t.n(d),l=t(71),u=t(62),f=t(58),h=t(0),p=t(69),v=t(1),x=function(e,n){var t=[];return function(e,n){if(e)for(var t=Object(o.a)(e);t.length;){var a=t.pop();a&&(n(a),a.array&&a.array.length&&(t=t.concat(Object(o.a)(a.array))))}}(e,(function(e){n.includes(e.id)&&t.push({key:e.id,content:e.id})})),t},j=function(e){var n=e.value,t=void 0===n?[]:n,a=e.data,r=void 0===a?[]:a,c=e.nodeProps,o=void 0===c?function(){}:c,d=e.renderNode,j=e.onCheck,b=Object(h.useState)(!1),m=Object(i.a)(b,2),y=m[0],g=m[1];return Object(v.jsx)(f.a,{content:Object(v.jsx)("div",{className:s.a.container,children:Object(v.jsx)(p.a,{renderNode:d,nodeProps:o,data:r,isMulti:!0,type:"parent",className:s.a.treeContainer,onCheck:function(e){var n=e.map((function(e){return e.id}));j(n)}})}),placeholder:"BL",visible:y,trigged:"popover",isArrow:!1,onVisibleChange:function(){g(!1)},overlayClass:s.a.overlayClass,children:Object(v.jsxs)("div",{className:s.a.cursorInput,onClick:function(){g(!0)},children:[Object(v.jsx)(l.a,{selectedOptions:x(r,t),setSelectedOptions:function(e){var n=e.map((function(e){return e.key}));j(n)},placeHolder:"\u8bf7\u70b9\u51fb\u9009\u62e9"}),Object(v.jsx)("span",{className:t.length?s.a.clearIcon:s.a.noShow,onClick:function(){return j([])},children:Object(v.jsx)(u.a,{})})]})})},b=t(156),m=t.n(b),y=[{id:"1-0",array:[{id:"1-0-1",array:[{id:"1-0-1-1",array:void 0}]},{id:"1-0-2",array:void 0},{id:"1-0-3",array:void 0}]},{id:"1-1",array:[{id:"1-1-1",array:[{id:"1-1-1-1",array:void 0}]},{id:"1-1-2",array:void 0},{id:"1-1-3",array:void 0}]},{id:"1-2",array:[{id:"1-2-1",array:[{id:"1-2-1-1",array:void 0}]},{id:"1-2-2",array:void 0},{id:"1-2-3",array:void 0}]}],g=function(){var e=Object(h.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(v.jsx)("div",{children:Object(v.jsx)(j,{data:y,nodeProps:function(e){return{key:e.id,children:e.array,isChecked:t.some((function(n){return n===e.id}))}},renderNode:function(e){return{content:Object(v.jsx)("span",{className:m.a.content,children:e.value.id}),icon:e.value.array?Object(v.jsx)(r.a,{className:m.a.folder}):Object(v.jsx)(c.a,{className:m.a.star})}},onCheck:a,value:t})})},O=t(38),k=t(51);n.default=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(a.a,{level:"h1",children:"\u6811\u9009\u62e9\u5668"}),Object(v.jsx)(a.a,{style:{margin:"20px 0"},children:"\u4e0b\u62c9\u9009\u62e9\u5668\uff0c\u5f39\u51fa\u4e00\u4e2a\u6811\u9009\u62e9\u7ec4\u4ef6\u7ed9\u7528\u6237\u64cd\u4f5c"}),Object(v.jsx)("section",{children:Object(v.jsx)(O.a,{title:"\u6811\u9009\u62e9\u5668",demo:Object(v.jsx)(g,{}),codes:[{name:"index.tsx",type:"tsx",code:"import Fold from \"component/Icon/Fold\";\nimport Star from \"component/Icon/Start\";\nimport TreeSelect from \"component/TreeSelect\";\nimport { useState } from \"react\";\nimport styles from './index.less'\nconst data = [\n    {\n        id: '1-0',\n        array: [\n            {\n                id: '1-0-1',\n                array: [\n                    {\n                        id: '1-0-1-1',\n                        array: undefined,\n                    },\n                ],\n            },\n            {\n                id: '1-0-2',\n                array: undefined,\n            },\n            {\n                id: '1-0-3',\n                array: undefined,\n            },\n        ],\n\n    },\n\n    {\n        id: '1-1',\n        array: [\n            {\n                id: '1-1-1',\n                array: [\n                    {\n                        id: '1-1-1-1',\n                        array: undefined,\n                    },\n                ],\n            },\n            {\n                id: '1-1-2',\n                array: undefined,\n            },\n            {\n                id: '1-1-3',\n                array: undefined,\n            },\n        ],\n\n    },\n\n    {\n        id: '1-2',\n        array: [\n            {\n                id: '1-2-1',\n                array: [\n                    {\n                        id: '1-2-1-1',\n                        array: undefined,\n                    },\n                ],\n            },\n            {\n                id: '1-2-2',\n                array: undefined,\n            },\n            {\n                id: '1-2-3',\n                array: undefined,\n            },\n        ],\n\n    },\n];\nconst TreeSelectBaseView = () => {\n    const [checkedItems, setCheckedItems] = useState([]);\n    const nodeProps = ((item: any) => ({\n        key: item.id,\n        children: item.array,\n        isChecked: checkedItems.some((i: any) => i === item.id),\n    }));\n\n    const renderNode = (item: { value: { id: boolean; array: any; }; }) => ({\n        content: <span className={styles.content}>{item.value.id}</span>,\n        icon: item.value.array ? <Fold className={styles.folder} /> : <Star className={styles.star} />,\n    })\n    return (\n        <div>\n            <TreeSelect\n                data={data}\n                nodeProps={nodeProps}\n                renderNode={renderNode}\n                onCheck={setCheckedItems}\n                value={checkedItems}\n             />\n        </div>\n    )\n}\n\nexport default TreeSelectBaseView;"},{name:"index.tsx",type:"tsx",code:".star {\n    fill: #fa6300;\n    height: 14px;\n    width: 14px;\n    margin-right: 4px;\n}"}]})}),Object(v.jsx)("section",{children:Object(v.jsx)(k.a,{title:"TreeSelect",desc:"\u6811\u5f62\u9009\u62e9",list:[{name:"value",desc:"\u4f20\u5165\u9009\u4e2d\u7684id",type:"[]",default:"-"},{name:"data",desc:"\u5fc5\u9009\uff0c\u6570\u636e\u6e90\uff0c\u4ee5\u4e0b\u5c5e\u6027\u7684\u6cdb\u578bT\u4e3a\u6b64\u6570\u636e\u6e90\u9879\u7c7b\u578b",type:"T[]",defValue:"-"},{name:"nodeProps",desc:"\u5fc5\u9009\uff0c\u63d0\u4f9b\u8282\u70b9\u8f85\u52a9\u6570\u636e,,\u6ce8\u610f\u4fdd\u6301\u5f15\u7528\uff0c\u4ee5\u514d\u6027\u80fd\u95ee\u9898",type:["(node:T)=>({","//\u8282\u70b9key\u7528\u4e8e\u552f\u4e00\u6307\u5b9a","key:string, ","//\u8282\u70b9\u7684\u5b50\u8282\u70b9,\u7a7a\u6570\u7ec4\u6307\u6b64\u8282\u70b9\u6709\u5b50\u8282\u70b9\uff0c","//undefined \u6307\u6b64\u8282\u70b9\u662f\u53f6\u5b50\u8282\u70b9","children?:T[] ,","//\u6b64\u8282\u70b9\u662f\u5426\u7981\u7528\u9009\u4e2d\uff0c\u591a\u9009\u6a21\u5f0f\u4e0b\u4f7f\u7528","isDisabled?:boolean, ","//\u6b64\u8282\u70b9\u7684\u5b50\u8282\u70b9\u662f\u5426\u5df2\u52a0\u8f7d\u5b8c\u6210\uff0c","//\u914d\u5408\u5f02\u6b65\u52a0\u8f7d\u529f\u80fd\u4f7f\u7528","isLoaded?:boolean,","//\u6b64\u8282\u70b9\u662f\u5426\u88ab\u9009\u4e2d","isChecked?:boolean,})"].join("\n"),defValue:"-"},{name:"renderNode",desc:"\u5fc5\u9009\uff0c\u81ea\u5b9a\u4e49\u6e32\u67d3\u8282\u70b9",type:["(node:T)=>({","//\u8282\u70b9\u56fe\u6807","icon?:ReactElement","//\u8282\u70b9\u5185\u5bb9","content:ReactElement,})"].join("\n"),defValue:"-"},{name:"type",desc:"\u53ef\u9009\uff0c\u8282\u70b9\u9009\u62e9\u6a21\u5f0f\uff0c\u591a\u9009\u529f\u80fd\u4e0b\u53ef\u7528\uff0cparent\uff1a\u9009\u62e9\u8282\u70b9\u4f1a\u5411\u4e0a\u6298\u53e0\u4e0a\u62a5\uff0cleaf\uff1a\u53ea\u9009\u4e2d\u5b50\u8282\u70b9",type:["parent","leaf"],defValue:"leaf"},{name:"onCheck",desc:"\u53ef\u9009\uff0c\u9009\u4e2d\u7684\u56de\u8c03",type:"(node:T[])=>void",defValue:"undefined"},{name:"isMulti",desc:"\u53ef\u9009\uff0c\u662f\u5426\u591a\u9009",type:"boolean",defValue:"true"},{name:"className",desc:"\u53ef\u9009\uff0cTree\u7684\u6837\u5f0f\uff0c\u9700\u8981\u901a\u8fc7\u6837\u5f0f\u8bbe\u7f6eTree\u5927\u5c0f\uff08flex\u6216width\uff09",type:"string",defValue:"undefined"}]})})]})}},58:function(e,n,t){"use strict";var a=t(33),i=t(32),r=t.n(i),c=t(0),o=t(15),d=t(166),s=t(60),l=t.n(s),u=t(1);n.a=function(e){var n=e.children,t=e.content,i=e.placeholder,s=e.trigged,f=void 0===s?"hover":s,h=e.visible,p=e.onVisibleChange,v=e.isArrow,x=void 0===v||v,j=e.overlayClass,b=Object(c.useState)(!1),m=Object(a.a)(b,2),y=m[0],g=m[1],O=Object(c.useRef)(null),k=Object(c.useRef)(null),C=Object(c.useState)(),w=Object(a.a)(C,2),T=w[0],_=w[1],N=Object(c.useState)(),E=Object(a.a)(N,2),L=E[0],S=E[1];Object(c.useEffect)((function(){void 0!==h&&g(h)}),[h]),Object(c.useEffect)((function(){if(O.current&&k.current&&y){var e=document.body.scrollTop||document.documentElement.scrollTop,n=function(e,n,t,a,i){switch(e){case"TOP":var r=t.left-n.width/2+t.width/2,c=t.top-n.height-(i?10:0);return{top:c<0?68:c,left:r<0?0:r};case"TR":return{top:t.top-n.height-10,left:t.left+(t.width-n.width)};case"TL":return{top:t.top-n.height-10,left:t.left};case"BOTTOM":var o=t.left-n.width/2+t.width/2;return{top:t.top+t.height+(i?10:2),left:o};case"BL":var d=t.top+t.height+(i?10:2);return{left:t.left,top:d};case"BR":return{top:t.top+t.height+10,left:t.left+t.width-n.width};case"LT":return{top:t.top-4,left:t.left-n.width-12};case"L":return{top:t.top+t.height/2-n.height/2,left:t.left-10-n.width-2};case"LB":return{top:t.top+t.height-n.height+4,left:t.left-10-n.width-2};case"R":var s=t.top+t.height/2-n.height/2,l=t.left+t.width+10;return console.log(l,"rrr",t.left),{top:s,left:l};case"RT":return{top:t.top-4,left:t.left+t.width+10};case"RB":return{top:t.top+t.height-n.height+4,left:t.left+t.width+10}}}(i,k.current.getBoundingClientRect(),O.current.getBoundingClientRect(),0,x);_(n);var t=function(e,n,t){var a=Math.sqrt(200);switch(e){case"TOP":case"TR":case"TL":return{top:n.top+t-a-2,left:n.left+n.width/2-a/2-4};case"BOTTOM":return{left:n.left+n.width/2-a/2,top:n.top+n.height+a/2-5+2,transform:"rotate(225deg)"};case"BL":case"BR":return{top:n.top+n.height+a/2-5+2,left:n.left+n.width/2-2,transform:"rotate(225deg)"};case"LT":case"L":case"LB":return{left:n.left-a-3,top:n.top+n.height/2-a/2,transform:"rotate(-45deg)"};case"R":case"RT":case"RB":return{top:n.top+n.height/2-a/2,left:n.left+n.width+a/2-5+3,transform:"rotate(135deg)"}}}(i,O.current.getBoundingClientRect(),e);S(t)}return function(){}}),[O,k,y]),Object(c.useEffect)((function(){var e=function(e){console.log(O.current),console.log(e.target),k.current&&O.current&&(e.target==O.current||e.target==k.current||k.current.contains(e.target)||O.current.contains(e.target)?console.log("0iiii"):(g(!1),p&&p()))};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[y]);var I=Object(c.useMemo)((function(){return Object(o.createPortal)(Object(u.jsx)(d.a,{in:y,timeout:200,classNames:"fade",unmountOnExit:!0,onEnter:function(e){},onExit:function(e){},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:r()(j,l.a.popoverContainer),style:T,ref:k,children:Object(u.jsx)("div",{className:l.a.popoverContent,children:t})}),x?Object(u.jsx)("div",{className:l.a.arrow,style:L}):null]})}),document.body)}),[T,y,L,t]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{style:{display:"inline-block"},onClick:function(){"click"===f&&g(!y)},onMouseOver:function(){"hover"===f&&g(!0)},onMouseLeave:function(){"hover"===f&&g(!1)},ref:O,children:n}),I]})}},60:function(e,n,t){e.exports={popoverContainer:"index_popoverContainer_8c3cb",arrow:"index_arrow_7de7a"}},62:function(e,n,t){"use strict";var a=t(1);n.a=function(e){var n=e.className;return Object(a.jsx)("svg",{id:"icon-delete-filled-14",viewBox:"0 0 1024 1024",width:"16px",height:"16px",className:n,children:Object(a.jsx)("path",{d:"M512 73.142857a438.857143 438.857143 0 1 1 0 877.714286A438.857143 438.857143 0 0 1 512 73.142857z m110.811429 283.721143L512 467.602286 401.188571 356.864l-44.324571 44.324571 110.738286 110.738286L356.937143 622.811429l44.324571 44.324571 110.738286-110.884571 110.884571 110.884571 44.324572-44.324571L556.324571 512l110.811429-110.738286-44.324571-44.324571z"})})}},65:function(e,n,t){"use strict";var a=t(1);n.a=function(e){var n=e.className;return Object(a.jsx)("svg",{id:"icon-folder-filled-14",viewBox:"0 0 1024 1024",width:"12px",height:"12px",className:n,children:Object(a.jsx)("path",{d:"M0 146.285714h486.4l107.52 166.546286H1024V950.857143H0z"})})}},66:function(e,n,t){"use strict";var a=t(1);n.a=function(e){var n=e.className;return Object(a.jsx)("svg",{id:"icon-star",viewBox:"0 0 1024 1024",width:"12px",height:"12px",className:n,children:Object(a.jsx)("path",{d:"M512 812.8c6.4 0 12.864 1.472 18.752 4.608l297.664 156.48-56.832-331.52a40.32 40.32 0 0 1 11.584-35.648L1024 371.968l-332.8-48.32a40.32 40.32 0 0 1-30.336-22.08L512 0 363.136 301.568a40.32 40.32 0 0 1-30.336 22.08L0 371.968 240.832 606.72a40.32 40.32 0 0 1 11.584 35.712l-56.832 331.456 297.664-156.48A40.32 40.32 0 0 1 512 812.736z"})})}},67:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(47);var i=t(46);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},69:function(e,n,t){"use strict";var a=t(13),i=t(33),r=t(32),c=t.n(r),o=t(68),d=t(1),s=function(e){var n=e.className;return Object(d.jsx)("svg",{id:"icon-right-arrow-filled-6",viewBox:"0 0 1024 1024",width:"12px",height:"12px",className:n,children:Object(d.jsx)("path",{d:"M938.666667 512l-853.333334-512v1024z"})})},l=t(82),u=t(14),f=t(59),h=t(0),p=t(80),v=t.n(p),x=function e(n,t){t(n),n.child&&e(n.child,t),n.next&&e(n.next,t)},j=function e(n,t){t(n),n.parent&&e(n.parent,t)},b=function e(n,t){n.isChecked?(t(n),n.next&&e(n.next,t)):(n.child&&e(n.child,t),n.next&&e(n.next,t))},m=function e(n,t){!n.canExpand&&n.isChecked&&t(n),n.child&&e(n.child,t),n.next&&e(n.next,t)};n.a=function(e){var n=e.data,t=e.isMulti,r=e.type,p=void 0===r?"leaf":r,y=e.nodeProps,g=e.renderNode,O=e.onCheck,k=e.onLoad,C=e.className,w=Object(h.useRef)(),T=Object(h.useState)([]),_=Object(i.a)(T,2),N=_[0],E=_[1],L=Object(h.useMemo)((function(){if(!(n.length<=0)){for(var e=function e(n,t,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=y(n),c=r.children,o=r.key,d=r.isChecked,s=void 0!==d&&d,l=r.isDisabled,u=void 0!==l&&l,h=r.isLoaded,p=void 0===h||h,v={value:n,key:o,level:i,isExpand:!1,canExpand:void 0!==c,isLoaded:p,isChecked:s,isDisabled:u,isIndeterminate:!1,loading:!1,parent:a};if(t&&t.key===v.key&&(v.isExpand=t.isExpand,!1===v.isLoaded&&(v.loading=t.loading)),a&&a.isChecked&&(v.isChecked=!0),Object(f.isArray)(c)&&c.length>0)for(var x,b=t?t.child:void 0,m=0,g=0;g<c.length;g+=1){var O=e(c[g],b,v,i+1);void 0===x?(x=O,v.child=x):(x.next=O,x=O),b=b?b.next:void 0,x.isChecked&&(v.isIndeterminate=!0,m+=1),v.isIndeterminate&&v.parent&&j(v.parent,(function(e){e.isIndeterminate=!0})),m===c.length&&(v.isChecked=!0)}return v},t=w.current,a=e(n[0],t),i=a,r=1;r<n.length;r++){var c=n[r];c&&(t=t?t.next:void 0,i.next=e(c,t),i=i.next)}return w.current=a,a}}),[y]),S=function(){if(L){var e=[];x(L,(function(n){(!n.parent||n.parent&&n.parent.isExpand)&&e.push(n)})),E(e)}};Object(h.useEffect)((function(){S()}),[L]);return Object(d.jsx)(l.a,{list:N,render:function(e){var n,i=N[e],r=g(i);(i.child&&r.icon||void 0===i.child)&&(n=Object(d.jsx)("span",{className:v.a.placeholder,children:r.icon}));var l=function(e){!1===i.canExpand||i.loading||(i.isExpand?(i.isExpand=!1,i.child&&x(i.child,(function(e){e.isExpand=!1}))):(k&&!1===i.isLoaded&&(i.loading=!0,k(i.value)),i.isExpand=!0),e&&e.stopPropagation(),S())},f=function(e){var n=!i.isChecked;!function(e,n){if(e.isChecked=n,t||!O){e.child&&x(e.child,(function(e){e.isChecked=n})),e.parent&&!n&&j(e.parent,(function(e){e.isChecked=!1})),e.parent&&n&&j(e.parent,(function(e){for(var n=e.child,t=!0;n&&(t=n.isChecked&&t,n.isChecked);)n=n.next;e.isChecked=t}));var a=[],i=L;"leaf"===p?m(i,(function(e){a.push(e)})):b(i,(function(e){a.push(e)})),O&&O([].concat(a).map((function(e){return e.value}))),S()}else O([e.value])}(i,n),e.stopPropagation()};return Object(d.jsxs)("div",{className:c()(v.a.row,{}),onClick:function(e){t?l():f(e)},style:{paddingLeft:20*i.level},children:[i.canExpand?Object(d.jsx)("span",{className:v.a.iconContainer,onClick:l,children:i.loading?Object(d.jsx)(u.a,{className:v.a.loading}):Object(d.jsx)(s,{className:c()(v.a.expandIcon,Object(a.a)({},v.a.rotate,i.isExpand))})}):null,n,r.content,t?Object(d.jsx)("span",{className:v.a.checkbox,children:Object(d.jsx)(o.a,{options:void 0,checked:i.isChecked,onClick:f})}):null]})},className:c()(v.a.listContainer,C)})}},71:function(e,n,t){"use strict";var a,i=t(0),r=t(72),c=t.n(r),o=t(1);!function(e){e.DELETE="Backspace",e.LEFT="ArrowLeft",e.RIGHT="ArrowRight"}(a||(a={}));n.a=function(e){var n=e.selectedOptions,t=e.setSelectedOptions,r=e.placeHolder,d=void 0===r?"\u8bf7\u9009\u62e9":r,s=Object(i.useMemo)((function(){var e="";return n.forEach((function(n){e+="".concat(n.content,";")})),e}),[n]);return Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",value:s,onKeyDown:function(e){if(e.key===a.DELETE){for(var i=e.currentTarget,r=i.selectionStart||0,c=0,o=0,d=-1,s=0;s<n.length;s++){var l=n[s].content.length+1;if(c+=l,r>o&&r<=c){d=s;break}o+=l}if(d>-1){var u=n.filter((function(e,n){return d!==n}));t(u),setTimeout((function(){i.setSelectionRange(o,o)}),0)}}if(e.key===a.LEFT||e.key===a.RIGHT){for(var f=e.currentTarget,h=f.selectionStart||0,p=0,v=0,x=0,j=0;j<n.length;j++){var b=n[j].content.length+1;if(p+=b,0===h&&e.key===a.LEFT){x=n.reduce((function(e,n){return e+n.content.length+1}),0);break}if(0===h&&e.key===a.RIGHT){x=p,console.log(x,"ppp");break}if(h>=v&&h<p){x=e.key===a.LEFT?v:p;break}if(h===p){if(e.key===a.LEFT)x=v;else{var m=n[j+1];m&&(x=p+m.content.length+1)}break}v+=b}var y=x;f.setSelectionRange(y,y),f.blur(),f.focus()}e.preventDefault()},className:c.a.input,onChange:function(){},placeholder:d})})}},72:function(e,n,t){e.exports={input:"index_input_d216f"}},80:function(e,n,t){e.exports={expandIcon:"index_expandIcon_372d6",row:"index_row_7a1af",rotate:"index_rotate_77060",checkbox:"index_checkbox_81577",placeholder:"index_placeholder_1dbae",iconContainer:"index_iconContainer_e55e7",listContainer:"index_listContainer_417ec",loading:"index_loading_efcf4"}}}]);
//# sourceMappingURL=22.ba86d732.chunk.js.map