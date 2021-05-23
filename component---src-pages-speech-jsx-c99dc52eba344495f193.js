(self.webpackChunkpolitical_atlas=self.webpackChunkpolitical_atlas||[]).push([[142],{2616:function(e,t,r){"use strict";var o=r(6156),n=r(9756),a=r(2122),i=r(7294),c=r(5505),l=r(7643),s=r(4434),d=r(2010),u=r(6383),m=r(2020),p=r(6776),f=r(5383),Z=r(8209),h=r(5893),g=(0,f.ZP)("label",{},{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return(0,l.Z)((0,a.Z)({},"secondary"===r.color&&t.colorSecondary,r.filled&&t.filled,(0,o.Z)({},"& .".concat(Z.Z.asterisk),(0,a.Z)({},t.asterisk))),t.root||{})}})((function(e){var t,r=e.theme,n=e.styleProps;return(0,a.Z)({color:r.palette.text.secondary},r.typography.body1,(t={lineHeight:"1.4375em",padding:0},(0,o.Z)(t,"&.".concat(Z.Z.focused),{color:r.palette[n.color].main}),(0,o.Z)(t,"&.".concat(Z.Z.disabled),{color:r.palette.text.disabled}),(0,o.Z)(t,"&.".concat(Z.Z.error),{color:r.palette.error.main}),t))})),v=(0,f.ZP)("span",{},{name:"MuiFormLabel",slot:"Asterisk"})((function(e){var t=e.theme;return(0,o.Z)({},"&.".concat(Z.Z.error),{color:t.palette.error.main})})),b=i.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiFormLabel"}),o=r.children,i=r.className,l=r.component,f=void 0===l?"label":l,b=(0,n.Z)(r,["children","className","color","component","disabled","error","filled","focused","required"]),x=(0,u.Z)(),w=(0,d.Z)({props:r,muiFormControl:x,states:["color","required","focused","disabled","error","filled"]}),y=(0,a.Z)({},r,{color:w.color||"primary",component:f,disabled:w.disabled,error:w.error,filled:w.filled,focused:w.focused,required:w.required}),k=function(e){var t=e.classes,r=e.color,o=e.focused,n=e.disabled,a=e.error,i=e.filled,c=e.required,l={root:["root","color".concat((0,m.Z)(r)),n&&"disabled",a&&"error",i&&"filled",o&&"focused",c&&"required"],asterisk:["asterisk",a&&"error"]};return(0,s.Z)(l,Z.M,t)}(y);return(0,h.jsxs)(g,(0,a.Z)({as:f,styleProps:y,className:(0,c.Z)(k.root,i),ref:t},b,{children:[o,w.required&&(0,h.jsxs)(v,{styleProps:y,"aria-hidden":!0,className:k.asterisk,children:[" ","*"]})]}))}));t.ZP=b},8209:function(e,t,r){"use strict";r.d(t,{M:function(){return n}});var o=r(4973);function n(e){return(0,o.Z)("MuiFormLabel",e)}var a=(0,r(5540).Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);t.Z=a},1058:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(6156),n=r(9756),a=r(2122),i=r(7294),c=r(5505),l=r(7643),s=r(5336),d=r(4434),u=r(5383),m=r(6776);var p=i.createContext(),f=r(7329),Z=r(4973);function h(e){return(0,Z.Z)("MuiGrid",e)}var g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=(0,r(5540).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,f.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,f.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,f.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,f.Z)(g.map((function(e){return"grid-xs-".concat(String(e))}))),(0,f.Z)(g.map((function(e){return"grid-sm-".concat(String(e))}))),(0,f.Z)(g.map((function(e){return"grid-md-".concat(String(e))}))),(0,f.Z)(g.map((function(e){return"grid-lg-".concat(String(e))}))),(0,f.Z)(g.map((function(e){return"grid-xl-".concat(String(e))}))))),b=r(5893);function x(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}var w=(0,u.ZP)("div",{},{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps,o=r.container,n=r.direction,i=r.item,c=r.lg,s=r.md,d=r.sm,u=r.spacing,m=r.wrap,p=r.xl,f=r.xs,Z=r.zeroMinWidth;return(0,l.Z)((0,a.Z)({},o&&t.container,i&&t.item,Z&&t.zeroMinWidth,o&&0!==u&&t["spacing-xs-".concat(String(u))],"row"!==n&&t["direction-xs-".concat(String(n))],"wrap"!==m&&t["wrap-xs-".concat(String(m))],!1!==f&&t["grid-xs-".concat(String(f))],!1!==d&&t["grid-sm-".concat(String(d))],!1!==s&&t["grid-md-".concat(String(s))],!1!==c&&t["grid-lg-".concat(String(c))],!1!==p&&t["grid-xl-".concat(String(p))]),t.root||{})}})((function(e){var t=e.styleProps;return(0,a.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"column"===t.direction&&(0,o.Z)({flexDirection:"column"},"& > .".concat(v.item),{maxWidth:"none"}),"column-reverse"===t.direction&&(0,o.Z)({flexDirection:"column-reverse"},"& > .".concat(v.item),{maxWidth:"none"}),"row-reverse"===t.direction&&{flexDirection:"row-reverse"},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var t=e.theme,r=e.styleProps,n=r.container,a=r.spacing,i={};if(n&&0!==a){var c=t.spacing(a);"0px"!==c&&(i=(0,o.Z)({width:"calc(100% + ".concat(x(c),")"),marginTop:"-".concat(x(c)),marginLeft:"-".concat(x(c))},"& > .".concat(v.item),{paddingTop:x(c),paddingLeft:x(c)}))}return i}),(function(e){var t=e.theme,r=e.styleProps;return t.breakpoints.keys.reduce((function(e,o){return function(e,t,r,o){var n=o[r];if(n){var i={};if(!0===n)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)i={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else{var c="".concat(Math.round(n/o.columns*1e8)/1e6,"%"),l={};if(o.container&&o.item&&0!==o.spacing){var s=t.spacing(o.spacing);if("0px"!==s){var d="calc(".concat(c," + ").concat(x(s),")");l={flexBasis:d,maxWidth:d}}}i=(0,a.Z)({flexBasis:c,flexGrow:0,maxWidth:c},l)}0===t.breakpoints.values[r]?Object.assign(e,i):e[t.breakpoints.up(r)]=i}}(e,t,o,r),e}),{})})),y=i.forwardRef((function(e,t){var r,o=(0,m.Z)({props:e,name:"MuiGrid"}),l=(0,s.Z)(o),u=l.className,f=l.columns,Z=void 0===f?12:f,g=l.component,v=void 0===g?"div":g,x=l.container,y=void 0!==x&&x,k=l.direction,P=void 0===k?"row":k,E=l.item,S=void 0!==E&&E,M=l.lg,z=void 0!==M&&M,C=l.md,R=void 0!==C&&C,B=l.sm,N=void 0!==B&&B,F=l.spacing,W=void 0===F?0:F,L=l.wrap,I=void 0===L?"wrap":L,j=l.xl,q=void 0!==j&&j,G=l.xs,D=void 0!==G&&G,O=l.zeroMinWidth,T=void 0!==O&&O,_=(0,n.Z)(l,["className","columns","component","container","direction","item","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=i.useContext(p)||Z,H=(0,a.Z)({},l,{columns:A,container:y,direction:P,item:S,lg:z,md:R,sm:N,spacing:W,wrap:I,xl:q,xs:D,zeroMinWidth:T}),U=function(e){var t=e.classes,r=e.container,o=e.direction,n=e.item,a=e.lg,i=e.md,c=e.sm,l=e.spacing,s=e.wrap,u=e.xl,m=e.xs,p={root:["root",r&&"container",n&&"item",e.zeroMinWidth&&"zeroMinWidth",r&&0!==l&&"spacing-xs-".concat(String(l)),"row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==s&&"wrap-xs-".concat(String(s)),!1!==m&&"grid-xs-".concat(String(m)),!1!==c&&"grid-sm-".concat(String(c)),!1!==i&&"grid-md-".concat(String(i)),!1!==a&&"grid-lg-".concat(String(a)),!1!==u&&"grid-xl-".concat(String(u))]};return(0,d.Z)(p,h,t)}(H);return r=(0,b.jsx)(w,(0,a.Z)({styleProps:H,className:(0,c.Z)(U.root,u),as:v,ref:t},_)),12!==A?(0,b.jsx)(p.Provider,{value:A,children:r}):r}))},1947:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(6156),n=r(9756),a=r(2122),i=r(7294),c=r(5505),l=r(7643),s=r(4434),d=r(5383),u=r(6776),m=r(6095),p=r(3996),f=r(2020),Z=r(4973);function h(e){return(0,Z.Z)("MuiIconButton",e)}var g=(0,r(5540).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","label"]),v=r(5893),b=(0,d.ZP)(p.Z,{},{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return(0,l.Z)((0,a.Z)({},"default"!==r.color&&t["color".concat((0,f.Z)(r.color))],r.edge&&t["edge".concat((0,f.Z)(r.edge))],t["size".concat((0,f.Z)(r.size))],(0,o.Z)({},"& .".concat(g.label),t.label)),t.root||{})}})((function(e){var t=e.theme,r=e.styleProps;return(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:t.palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,m.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(e){var t=e.theme,r=e.styleProps;return(0,a.Z)({},"inherit"===r.color&&{color:"inherit"},"primary"===r.color&&{color:t.palette.primary.main,"&:hover":{backgroundColor:(0,m.Fq)(t.palette.primary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"secondary"===r.color&&{color:t.palette.secondary.main,"&:hover":{backgroundColor:(0,m.Fq)(t.palette.secondary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"small"===r.size&&{padding:3,fontSize:t.typography.pxToRem(18)},(0,o.Z)({},"&.".concat(g.disabled),{backgroundColor:"transparent",color:t.palette.action.disabled}))})),x=(0,d.ZP)("span",{},{name:"MuiIconButton",slot:"Label"})({width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}),w=i.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiIconButton"}),o=r.edge,i=void 0!==o&&o,l=r.children,d=r.className,m=r.color,p=void 0===m?"default":m,Z=r.disabled,g=void 0!==Z&&Z,w=r.disableFocusRipple,y=void 0!==w&&w,k=r.size,P=void 0===k?"medium":k,E=(0,n.Z)(r,["edge","children","className","color","disabled","disableFocusRipple","size"]),S=(0,a.Z)({},r,{edge:i,color:p,disabled:g,disableFocusRipple:y,size:P}),M=function(e){var t=e.classes,r=e.disabled,o=e.color,n=e.edge,a=e.size,i={root:["root",r&&"disabled","default"!==o&&"color".concat((0,f.Z)(o)),n&&"edge".concat((0,f.Z)(n)),"size".concat((0,f.Z)(a))],label:["label"]};return(0,s.Z)(i,h,t)}(S);return(0,v.jsx)(b,(0,a.Z)({className:(0,c.Z)(M.root,d),centerRipple:!0,focusRipple:!y,disabled:g,ref:t,styleProps:S},E,{children:(0,v.jsx)(x,{className:M.label,styleProps:S,children:l})}))}))},4917:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return pe}});var o=r(2137),n=r(7757),a=r.n(n),i=r(7294),c=r(5313),l=r(9339),s=r(2785),d=r(4695),u=r(9026),m=r(3477),p=r(1887),f=r(9410),Z=function(e){var t=e.src,r=(0,p.Z)(),o=[900,450];return(0,f.Z)(r.breakpoints.down("md"))&&(o=[600,300]),(0,f.Z)(r.breakpoints.down("sm"))&&(o=[400,200]),(0,f.Z)("(max-width:500px)")&&(o=[350,150]),(0,f.Z)("(max-width:400px)")&&(o=[275,150]),i.createElement("video",{width:o[0],height:o[1],controls:!0},i.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag.")},h=function(){return i.createElement(i.Fragment,null,"[Legend]")},g=r(656),v=r(7329),b=r(5505),x=r(4014),w=r(4820),y=r(1058),k=r(2616),P=r(8295),E=r(9756),S=r(2122),M=r(7643),z=r(4434),C=r(5383),R=r(6776),B=r(4973),N=r(5540);function F(e){return(0,B.Z)("MuiFormGroup",e)}(0,N.Z)("MuiFormGroup",["root","row"]);var W=r(5893),L=(0,C.ZP)("div",{},{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return(0,M.Z)((0,S.Z)({},r.row&&t.row),t.root||{})}})((function(e){var t=e.styleProps;return(0,S.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),I=i.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiFormGroup"}),o=r.className,n=r.row,a=void 0!==n&&n,i=(0,E.Z)(r,["className","row"]),c=(0,S.Z)({},r,{row:a}),l=function(e){var t=e.classes,r={root:["root",e.row&&"row"]};return(0,z.Z)(r,F,t)}(c);return(0,W.jsx)(L,(0,S.Z)({className:(0,b.Z)(l.root,o),styleProps:c,ref:t},i))})),j=r(6156),q=r(6383),G=r(2020);function D(e){return(0,B.Z)("MuiFormControlLabel",e)}var O=(0,N.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),T=(0,C.ZP)("label",{},{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return(0,M.Z)((0,S.Z)({},t["labelPlacement".concat((0,G.Z)(r.labelPlacement))],(0,j.Z)({},"& .".concat(O.label),t.label)),t.root||{})}})((function(e){var t=e.theme,r=e.styleProps;return(0,S.Z)((0,j.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(O.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,j.Z)({},"& .".concat(O.label),(0,j.Z)({},"&.".concat(O.disabled),{color:t.palette.text.disabled})))})),_=i.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiFormControlLabel"}),o=r.className,n=r.control,a=r.disabled,c=r.label,l=r.labelPlacement,d=void 0===l?"end":l,u=(0,E.Z)(r,["checked","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"]),m=(0,q.Z)(),p=a;void 0===p&&void 0!==n.props.disabled&&(p=n.props.disabled),void 0===p&&m&&(p=m.disabled);var f={disabled:p};["checked","name","onChange","value","inputRef"].forEach((function(e){void 0===n.props[e]&&void 0!==r[e]&&(f[e]=r[e])}));var Z=(0,S.Z)({},r,{disabled:p,label:c,labelPlacement:d}),h=function(e){var t=e.classes,r=e.disabled,o=e.labelPlacement,n={root:["root",r&&"disabled","labelPlacement".concat((0,G.Z)(o))],label:["label",r&&"disabled"]};return(0,z.Z)(n,D,t)}(Z);return(0,W.jsxs)(T,(0,S.Z)({className:(0,b.Z)(h.root,o),styleProps:Z,ref:t},u,{children:[i.cloneElement(n,f),(0,W.jsx)(s.Z,{component:"span",className:h.label,children:c})]}))})),A=r(6095),H=r(4699),U=(r(5697),r(4852)),V=r(1947);function X(e){return(0,B.Z)("PrivateSwitchBase",e)}(0,N.Z)("PrivateSwitchBase",["root","checked","disabled","input"]);var J=(0,C.ZP)(V.Z)({padding:9}),Y=(0,C.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),$=i.forwardRef((function(e,t){var r=e.autoFocus,o=e.checked,n=e.checkedIcon,a=e.className,i=e.defaultChecked,c=e.disabled,l=e.icon,s=e.id,d=e.inputProps,u=e.inputRef,m=e.name,p=e.onBlur,f=e.onChange,Z=e.onFocus,h=e.readOnly,g=e.required,v=e.tabIndex,x=e.type,w=e.value,y=(0,E.Z)(e,["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),k=(0,U.Z)({controlled:o,default:Boolean(i),name:"SwitchBase",state:"checked"}),P=(0,H.Z)(k,2),M=P[0],C=P[1],R=(0,q.Z)(),B=c;R&&void 0===B&&(B=R.disabled);var N="checkbox"===x||"radio"===x,F=(0,S.Z)({},e,{checked:M,disabled:B}),L=function(e){var t=e.classes,r={root:["root",e.checked&&"checked",e.disabled&&"disabled"],input:["input"]};return(0,z.Z)(r,X,t)}(F);return(0,W.jsxs)(J,(0,S.Z)({component:"span",className:(0,b.Z)(L.root,a),disabled:B,tabIndex:null,role:void 0,onFocus:function(e){Z&&Z(e),R&&R.onFocus&&R.onFocus(e)},onBlur:function(e){p&&p(e),R&&R.onBlur&&R.onBlur(e)},styleProps:F,ref:t},y,{children:[(0,W.jsx)(Y,(0,S.Z)({autoFocus:r,checked:o,defaultChecked:i,className:L.input,disabled:B,id:N&&s,name:m,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;C(t),f&&f(e,t)}},readOnly:h,ref:u,required:g,styleProps:F,tabIndex:v,type:x,value:w},d)),M?n:l]}))}));function K(e){return(0,B.Z)("MuiSwitch",e)}var Q=(0,N.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ee=(0,C.ZP)("span",{},{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r,o=e.styleProps;return(0,M.Z)((0,S.Z)({},o.edge&&t["edge".concat((0,G.Z)(o.edge))],t["size".concat((0,G.Z)(o.size))],(r={},(0,j.Z)(r,"& .".concat(Q.switchBase),(0,S.Z)({},t.switchBase,t.input,"default"!==o.color&&t["color".concat((0,G.Z)(o.color))])),(0,j.Z)(r,"& .".concat(Q.thumb),t.thumb),(0,j.Z)(r,"& .".concat(Q.track),t.track),r)),t.root||{})}})((function(e){var t,r=e.styleProps;return(0,S.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},(0,j.Z)(t,"& .".concat(Q.thumb),{width:16,height:16}),(0,j.Z)(t,"& .".concat(Q.switchBase),(0,j.Z)({padding:4},"&.".concat(Q.checked),{transform:"translateX(16px)"})),t))})),te=(0,C.ZP)($,{},{name:"MuiSwitch",slot:"SwitchBase"})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===r.palette.mode?r.palette.common.white:r.palette.grey[300],transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},(0,j.Z)(t,"&.".concat(Q.checked),{transform:"translateX(20px)"}),(0,j.Z)(t,"&.".concat(Q.disabled),{color:"light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600]}),(0,j.Z)(t,"&.".concat(Q.checked," + .").concat(Q.track),{opacity:.5}),(0,j.Z)(t,"&.".concat(Q.disabled," + .").concat(Q.track),{opacity:"light"===r.palette.mode?.12:.2}),(0,j.Z)(t,"& .".concat(Q.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,o=e.styleProps;return(0,S.Z)({},"default"!==o.color&&(t={},(0,j.Z)(t,"&.".concat(Q.checked),(0,j.Z)({color:r.palette[o.color].main,"&:hover":{backgroundColor:(0,A.Fq)(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Q.disabled),{color:"light"===r.palette.mode?(0,A.$n)(r.palette[o.color].main,.62):(0,A._j)(r.palette[o.color].main,.55)})),(0,j.Z)(t,"&.".concat(Q.checked," + .").concat(Q.track),{backgroundColor:r.palette[o.color].main}),t))})),re=(0,C.ZP)("span",{},{name:"MuiSwitch",slot:"Track"})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),oe=(0,C.ZP)("span",{},{name:"MuiSwitch",slot:"Thumb"})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),ne=i.forwardRef((function(e,t){var r=(0,R.Z)({props:e,name:"MuiSwitch"}),o=r.className,n=r.color,a=void 0===n?"secondary":n,i=r.edge,c=void 0!==i&&i,l=r.size,s=void 0===l?"medium":l,d=(0,E.Z)(r,["className","color","edge","size"]),u=(0,S.Z)({},r,{color:a,edge:c,size:s}),m=function(e){var t=e.classes,r=e.edge,o=e.size,n=e.color,a=e.checked,i=e.disabled,c={root:["root",r&&"edge".concat((0,G.Z)(r)),"size".concat((0,G.Z)(o))],switchBase:["switchBase","color".concat((0,G.Z)(n)),a&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,z.Z)(c,K,t);return(0,S.Z)({},t,l)}(u),p=(0,W.jsx)(oe,{className:m.thumb,styleProps:u});return(0,W.jsxs)(ee,{className:(0,b.Z)(m.root,o),styleProps:u,children:[(0,W.jsx)(te,(0,S.Z)({className:m.switchBase,type:"checkbox",icon:p,checkedIcon:p,ref:t,styleProps:u},d,{classes:m})),(0,W.jsx)(re,{className:m.track,styleProps:u})]})})),ae=r(8363),ie=r(3997),ce=function(e){var t=e.handleOnChange;return e.downMd?i.createElement(i.Fragment,null,i.createElement(k.ZP,{component:"legend"},"Choose Emotion"),ae.lz.map((function(e,r){return i.createElement(_,{key:r,control:i.createElement(ne,{onChange:t,name:e}),label:(0,ie.kC)(e)})}))):i.createElement(P.Z,{component:"fieldset"},i.createElement(k.ZP,{component:"legend"},"Choose Emotion"),i.createElement(I,null,ae.lz.map((function(e,r){return i.createElement(_,{key:r,control:i.createElement(ne,{onChange:t,name:e}),label:(0,ie.kC)(e)})}))))},le=r(1035),se=(0,x.Z)((function(e){return{hoverUnderline:{"&:hover":{textDecoration:"underline #000000"}}}})),de=function(e){var t=e.sentences,r=e.emotions,o=se();return i.createElement(s.Z,{variant:"body1",gutterBottom:!0},t.map((function(e,t){var n=e.tones,a=e.text,c=0,l="neutral",s=function(e){return e.filter((function(e){var t=e.tone_id;return r.includes(t)})).sort((function(e,t){return t.score-e.score}))}(n);0!==s.length&&(c=s[0].score,l=s[0].tone_id);var d=ae.FE[l],u=(0,ae.By)(d.color,c),m=u[0],p=u[1];return i.createElement("span",{key:t},i.createElement(le.Z,{title:l+": "+(0,ie.H9)(100*c)+"%",placement:"top",interactive:"true"},i.createElement("span",{className:o.hoverUnderline,style:{backgroundColor:m,color:p}},a))," ")})))},ue=(0,x.Z)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary},center:{textAlign:"center"}}})),me=function(e){var t=e.sentences,r=ue(),o=(0,p.Z)(),n=(0,f.Z)(o.breakpoints.down("xm")),a=(0,f.Z)(o.breakpoints.down("md")),c=(0,i.useState)([]),l=c[0],s=c[1],d=function(e){var t=e.target.name,r=l.includes(t)?l.filter((function(e){return e!==t})):[].concat((0,v.Z)(l),[t]);s(r)};return i.createElement("div",{className:r.root},i.createElement(y.Z,{container:!0,spacing:a?12:2},i.createElement(y.Z,{item:!0,xs:a?12:2},i.createElement(w.Z,{className:(0,b.Z)(r.paper,!n&&r.center)},a?i.createElement(ce,{handleOnChange:d,downMd:a}):i.createElement(y.Z,{container:!0,spacing:1},i.createElement(y.Z,{item:!0,xs:12},i.createElement(ce,{handleOnChange:d,downMd:a}))))),i.createElement(y.Z,{item:!0,xs:a?12:10},i.createElement(w.Z,{className:r.paper},i.createElement(de,{sentences:t,emotions:l})))))},pe=function(){var e=(0,l.Wd)("id",l.yz)[0],t=(0,i.useState)(null!=e&&!Number.isNaN(e))[0],r=(0,i.useState)(null),n=r[0],p=r[1],f=(0,i.useState)(null),v=f[0],b=f[1],x=(0,i.useState)(null),w=x[0],y=x[1];return(0,i.useEffect)((function(){t&&function(){var t=(0,o.Z)(a().mark((function t(){var r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.oJ)(e);case 2:return r=t.sent,p(r),t.next=6,(0,d.Gn)(e);case 6:o=t.sent,y((0,u.W)(o));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[t,e]),(0,i.useEffect)((function(){t&&null!=n&&function(){var t=(0,o.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Ed)(e);case 2:r=t.sent,b((0,u.q)(r));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e,t,n]),t?null==n?i.createElement(m.Z,null,"Loading."):i.createElement(m.Z,{title:n.title},i.createElement(s.Z,{variant:"h5",gutterBottom:!0},"Speaker"),i.createElement(s.Z,{variant:"body1",gutterBottom:!0},i.createElement(c.Link,{to:"/speaker?speaker="+n.politician},n.politician)),i.createElement(s.Z,{variant:"h5",gutterBottom:!0},"Description"),i.createElement(s.Z,{variant:"body1",gutterBottom:!0},n.description),i.createElement(s.Z,{variant:"h5",gutterBottom:!0},"Speech Video"),i.createElement("center",null,i.createElement(Z,{src:n.video_link}),i.createElement("br",null),i.createElement(h,null)),i.createElement("br",null),i.createElement(s.Z,{variant:"h5",gutterBottom:!0},"Data Visualization"),i.createElement(g.Z,{ibm:v,da:w}),i.createElement(s.Z,{variant:"h5",gutterBottom:!0},"Transcript"),null!=v&&i.createElement(me,{sentences:v.sentences_tone})):i.createElement(m.Z,null,i.createElement("center",null,"Invalid or no id provided."))}}}]);
//# sourceMappingURL=component---src-pages-speech-jsx-c99dc52eba344495f193.js.map