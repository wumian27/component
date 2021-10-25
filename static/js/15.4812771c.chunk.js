/*! For license information please see 15.4812771c.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[15],{180:function(e,t,n){"use strict";n.r(t);var a=n(38),c=n(34),r=n(33),i=n(71),s=n(0),l=n(1),o=function(){var e=Object(s.useState)([{key:1,content:"\u674e\u767d"},{key:2,content:"\u8d75\u4e91"},{key:3,content:"\u738b\u662d\u541b"}]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{selectedOptions:n,setSelectedOptions:a})})},d=n(51);t.default=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(c.a,{level:"h1",children:"CursorInput \u63a7\u5236\u5220\u9664\u4e00\u4e2a\u9879"}),Object(l.jsx)(c.a,{style:{margin:"20px 0"},children:"\u901a\u8fc7\u63a7\u5236\u5149\u6807\u7684\u4f4d\u7f6e\u5220\u9664\u4e00\u4e2a\u9879"}),Object(l.jsx)("section",{children:Object(l.jsx)(a.a,{title:"\u57fa\u672c\u4f7f\u7528",demo:Object(l.jsx)(o,{}),codes:[{name:"index.tsx",type:"tsx",code:"\nimport CursorInput from 'component/CursorInput'\nimport { useState } from 'react'\nimport styles from './index.less'\nconst CursorInputBaseView = () => {\n    const [selectedOptions, setSelectedOptions] = useState([\n        {\n            key: 1,\n            content: '\u674e\u767d'\n        },\n        {\n            key: 2,\n            content: '\u8d75\u4e91',\n        },\n        {\n            key: 3,\n            content: '\u738b\u662d\u541b',\n        }\n    ])\n    \n    return (\n        <div>\n            <CursorInput  selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />\n        </div>\n    )\n}\n\nexport default CursorInputBaseView;"}]})}),Object(l.jsx)("section",{children:Object(l.jsx)(d.a,{title:"CursorInput",desc:"\u63a7\u5236\u5149\u6807\u7684\u4f4d\u7f6e\u5220\u9664\u4e00\u4e2a\u9879",list:[{name:"selectedOptions",desc:"\u5fc5\u9009\uff0c\u8f93\u5165\u6846\u7684\u503c",type:["{content:string,","key:(number|string),}[]"].join("\n"),defValue:"-"},{name:"setSelectedOptions",desc:"\u5fc5\u9009\uff0c\u5220\u9664\u56de\u8c03",type:"(selected:(T[])[])=>void",defValue:"-"}]})})]})}},32:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var i=c.apply(null,a);i&&e.push(i)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a)}()},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(46);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(c)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},34:function(e,t,n){"use strict";var a=n(13),c=(n(0),n(32)),r=n.n(c),i=n(39),s=n.n(i),l=n(1);t.a=function(e){var t,n=e.level,c=void 0===n?"text":n,i=e.ellipsis,o=e.className,d=e.children,u=e.pre,x=e.style;return Object(l.jsx)("div",{className:r()(o,(t={},Object(a.a)(t,s.a.h1,"h1"===c),Object(a.a)(t,s.a.h2,"h2"===c),Object(a.a)(t,s.a.h3,"h3"===c),Object(a.a)(t,s.a.main,"importent"===c),Object(a.a)(t,s.a.text,"text"===c),Object(a.a)(t,s.a.tips,"tips"===c),Object(a.a)(t,s.a.ellipsis,i),Object(a.a)(t,s.a.pre,u),t)),style:x,children:d})}},35:function(e,t,n){"use strict";var a=n(13),c=n(0),r=n(32),i=n.n(r),s=n(40),l=n.n(s),o=n(1),d=function(e,t){var n,c=e.flex,r=e.children,s=e.className,d=e.onClick,u=e.style,x=e.title;return Object(o.jsx)("div",{className:i()((n={},Object(a.a)(n,l.a.vCenter,"vertical-center"===c),Object(a.a)(n,l.a.hCenter,"horizontal-center"===c),Object(a.a)(n,l.a.center,"center"===c),Object(a.a)(n,l.a.vFull,"vertical-full"===c),Object(a.a)(n,l.a.hFull,"horizontal-full"===c),Object(a.a)(n,l.a.hWarp,"horizontal-warp"===c),n),s),onClick:d,ref:t,style:u,title:x,children:r})};t.a=Object(c.forwardRef)(d)},36:function(e,t,n){"use strict";var a=n(13),c=n(7),r=n(0),i=n(32),s=n.n(i),l=n(41),o=n.n(l),d=n(1),u=function(e,t){var n,i=e.children,l=e.className,u=e.grow,x=void 0!==u&&u,j=e.basis,b=e.onClick,f=e.scroll,p=e.onScroll,h=e.style,O=void 0===h?{}:h,_=Object(r.useMemo)((function(){var e=Object(c.a)({},O);return j&&(e.flexBasis=j),e}),[O,j]);return Object(d.jsx)("div",{className:s()(o.a.item,(n={},Object(a.a)(n,o.a.grow,x),Object(a.a)(n,o.a.scroll,f),n),l),style:_,onClick:b,onScroll:p,ref:t,children:i})};t.a=Object(r.forwardRef)(u)},37:function(e,t,n){"use strict";var a=n(13),c=n(45),r=n.n(c),i=n(32),s=n.n(i),l=n(14),o=n(1);t.a=function(e){var t,n=e.type,c=void 0===n?"solid":n,i=e.size,d=void 0===i?"m":i,u=e.danger,x=void 0!==u&&u,j=e.children,b=e.primary,f=e.loading,p=e.className,h=e.prefix,O=e.suffix,_=e.block,m=void 0!==_&&_,v=e.onClick,y=e.style,g=e.disabled;return Object(o.jsxs)("button",{className:s()(r.a.button,(t={},Object(a.a)(t,r.a.contained,"contained"===c),Object(a.a)(t,r.a.solid,"solid"===c),Object(a.a)(t,r.a.dashed,"dashed"===c),Object(a.a)(t,r.a.link,"link"===c),Object(a.a)(t,r.a.text,"text"===c),Object(a.a)(t,r.a.primary,b),Object(a.a)(t,r.a.danger,x),Object(a.a)(t,r.a.s,"s"===d),Object(a.a)(t,r.a.m,"m"===d),Object(a.a)(t,r.a.l,"l"===d),Object(a.a)(t,r.a.xl,"xl"===d),Object(a.a)(t,r.a.block,m),Object(a.a)(t,r.a.loading,f),t),p),onClick:v,style:y,disabled:g,children:[f?Object(o.jsx)(l.a,{className:r.a.spin}):null,Object(o.jsxs)("span",{className:r.a.content,children:[h," ",j,O]})]})}},38:function(e,t,n){"use strict";var a=n(33),c=n(0),r=n(44),i=n.n(r),s=n(35),l=n(36),o=n(37),d=n(34),u=n(42),x=n(1);t.a=function(e){var t=e.demo,n=e.codes,r=e.title,j=Object(c.useState)(-1),b=Object(a.a)(j,2),f=b[0],p=b[1];return Object(x.jsxs)("section",{children:[Object(x.jsx)(d.a,{level:"h2",className:i.a.title,children:r}),Object(x.jsx)("div",{className:i.a.demo,children:t}),Object(x.jsxs)(s.a,{flex:"horizontal-center",className:i.a.demoAction,children:[Object(x.jsx)(l.a,{grow:!0}),Object(x.jsx)(x.Fragment,{children:n.map((function(e,t){return Object(x.jsxs)(o.a,{type:"link",onClick:function(){p(f===t?-1:t)},className:i.a.action,children:[f===t?"\u6536\u8d77":"\u67e5\u770b",e.name]},e.name)}))})]}),n[f]?Object(x.jsx)(u.a,{className:i.a.code,code:n[f].code,type:n[f].type}):null]})}},39:function(e,t,n){e.exports={h1:"index_h1_5d1c5",h2:"index_h2_f255e",h3:"index_h3_01320",main:"index_main_9946c",text:"index_text_a4c9a",tips:"index_tips_1914d",ellipsis:"index_ellipsis_efe41",pre:"index_pre_9f3f6"}},40:function(e,t,n){e.exports={flex:"index_flex_85f39",vCenter:"index_vCenter_4c0b4",hCenter:"index_hCenter_53135",vFull:"index_vFull_c5b48",hFull:"index_hFull_82c3d",center:"index_center_92806",hWarp:"index_hWarp_9b27e"}},41:function(e,t,n){e.exports={scroll:"index_scroll_5c72f",item:"index_item_11a2d",grow:"index_grow_dd20f"}},42:function(e,t,n){"use strict";n(0);var a=n(32),c=n.n(a),r=n(43),i=n.n(r),s=n(1);t.a=function(e){var t=e.code,n=e.className,a=e.type,r=void 0===a?"less":a;return Object(s.jsx)("pre",{className:c()(n,i.a.code,{"language-typescript":"ts"===r||"tsx"===r,"language-less":"less"===r,"language-powershell":"powershell"===r}),children:Object(s.jsx)("code",{className:c()({"language-typescript":"ts"===r||"tsx"===r,"language-less":"less"===r,"language-powershell":"powershell"===r}),children:t})})}},43:function(e,t,n){e.exports={code:"index_code_f44a7"}},44:function(e,t,n){e.exports={demoAction:"index_demoAction_c986c",action:"index_action_a91d7",demo:"index_demo_35819",title:"index_title_705a2",icon:"index_icon_03ac6"}},45:function(e,t,n){e.exports={button:"index_button_73f27",content:"index_content_ab8ed",loading:"index_loading_1462d",spin:"index_spin_4b9b9",textContent:"index_textContent_4433e",block:"index_block_c1451",prefix:"index_prefix_681a6",suffix:"index_suffix_427e0",s:"index_s_133f2",m:"index_m_c2d86",l:"index_l_8d9a0",xl:"index_xl_3be91",contained:"index_contained_af634",primary:"index_primary_4e560",danger:"index_danger_2a66b",solid:"index_solid_0c27f",dashed:"index_dashed_2b111",link:"index_link_b46a0",text:"index_text_6208b"}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(47);function c(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},47:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},51:function(e,t,n){"use strict";var a=n(34),c=n(57),r=n.n(c),i=n(35),s=n(36),l=n(1);t.a=function(e){var t=e.title,n=e.desc,c=e.list;return Object(l.jsxs)("section",{children:[Object(l.jsx)(a.a,{level:"h2",className:r.a.header,children:t}),Object(l.jsx)(a.a,{children:n}),Object(l.jsxs)(i.a,{flex:"horizontal-full",className:r.a.tableHead,children:[Object(l.jsx)(s.a,{basis:"20%",children:Object(l.jsx)(a.a,{className:r.a.text,children:"\u53c2\u6570"})}),Object(l.jsx)(s.a,{basis:"35%",children:Object(l.jsx)(a.a,{className:r.a.text,children:"\u8bf4\u660e"})}),Object(l.jsx)(s.a,{basis:"30%",children:Object(l.jsx)(a.a,{className:r.a.text,children:"\u7c7b\u578b"})}),Object(l.jsx)(s.a,{basis:"15%",children:Object(l.jsx)(a.a,{className:r.a.text,children:"\u9ed8\u8ba4\u503c"})})]}),c.map((function(e){return Object(l.jsxs)(i.a,{flex:"horizontal-full",className:r.a.rowContainer,children:[Object(l.jsx)(s.a,{basis:"20%",className:r.a.rowCenter,children:Object(l.jsx)(a.a,{className:r.a.row,children:e.name})}),Object(l.jsx)(s.a,{basis:"35%",className:r.a.rowCenter,children:Object(l.jsx)(a.a,{className:r.a.row,children:e.desc})}),Object(l.jsx)(s.a,{basis:"30%",className:r.a.rowCenter,children:Object(l.jsx)(a.a,{className:r.a.row,children:Array.isArray(e.type)?e.type.map((function(e){return Object(l.jsx)("span",{className:r.a.cicleItem,children:e},e)})):e.type})}),Object(l.jsx)(s.a,{basis:"15%",className:r.a.rowCenter,children:Object(l.jsx)(a.a,{className:r.a.row,children:e.defValue})})]},e.name)}))]})}},57:function(e,t,n){e.exports={header:"index_header_aced0",tableHead:"index_tableHead_9679a",text:"index_text_e2dd5",row:"index_row_d945c",rowContainer:"index_rowContainer_a6d06",rowCenter:"index_rowCenter_8671e",cicleItem:"index_cicleItem_2988e"}},71:function(e,t,n){"use strict";var a,c=n(0),r=n(72),i=n.n(r),s=n(1);!function(e){e.DELETE="Backspace",e.LEFT="ArrowLeft",e.RIGHT="ArrowRight"}(a||(a={}));t.a=function(e){var t=e.selectedOptions,n=e.setSelectedOptions,r=e.placeHolder,l=void 0===r?"\u8bf7\u9009\u62e9":r,o=Object(c.useMemo)((function(){var e="";return t.forEach((function(t){e+="".concat(t.content,";")})),e}),[t]);return Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",value:o,onKeyDown:function(e){if(e.key===a.DELETE){for(var c=e.currentTarget,r=c.selectionStart||0,i=0,s=0,l=-1,o=0;o<t.length;o++){var d=t[o].content.length+1;if(i+=d,r>s&&r<=i){l=o;break}s+=d}if(l>-1){var u=t.filter((function(e,t){return l!==t}));n(u),setTimeout((function(){c.setSelectionRange(s,s)}),0)}}if(e.key===a.LEFT||e.key===a.RIGHT){for(var x=e.currentTarget,j=x.selectionStart||0,b=0,f=0,p=0,h=0;h<t.length;h++){var O=t[h].content.length+1;if(b+=O,0===j&&e.key===a.LEFT){p=t.reduce((function(e,t){return e+t.content.length+1}),0);break}if(0===j&&e.key===a.RIGHT){p=b,console.log(p,"ppp");break}if(j>=f&&j<b){p=e.key===a.LEFT?f:b;break}if(j===b){if(e.key===a.LEFT)p=f;else{var _=t[h+1];_&&(p=b+_.content.length+1)}break}f+=O}var m=p;x.setSelectionRange(m,m),x.blur(),x.focus()}e.preventDefault()},className:i.a.input,onChange:function(){},placeholder:l})})}},72:function(e,t,n){e.exports={input:"index_input_d216f"}}}]);
//# sourceMappingURL=15.4812771c.chunk.js.map