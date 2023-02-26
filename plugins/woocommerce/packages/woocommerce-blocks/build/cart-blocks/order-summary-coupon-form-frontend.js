(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[20],{22:function(e,t,o){"use strict";var n=o(0),c=o(4),a=o.n(c);t.a=e=>{let t,{label:o,screenReaderLabel:c,wrapperElement:r,wrapperProps:s={}}=e;const l=null!=o,i=null!=c;return!l&&i?(t=r||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,c)):(t=r||n.Fragment,l&&i&&o!==c?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},o),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,s,o))}},264:function(e,t){},265:function(e,t){},266:function(e,t,o){"use strict";var n=o(12),c=o.n(n),a=o(0),r=o(42),s=o(4),l=o.n(s),i=o(135);o(267),t.a=e=>{let{className:t,showSpinner:o=!1,children:n,variant:s="contained",...u}=e;const p=l()("wc-block-components-button",t,s,{"wc-block-components-button--loading":o});return Object(a.createElement)(r.a,c()({className:p},u),o&&Object(a.createElement)(i.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},n))}},267:function(e,t){},274:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(1),c=o(7),a=o(6),r=o(17),s=o(32),l=o(199);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:o}=Object(s.a)(),{createErrorNotice:i}=Object(c.useDispatch)("core/notices"),{createNotice:u}=Object(c.useDispatch)("core/notices"),{setValidationErrors:p}=Object(l.b)(),{applyCoupon:b,removeCoupon:d,isApplyingCoupon:m,isRemovingCoupon:g}=Object(c.useSelect)((e,t)=>{let{dispatch:o}=t;const n=e(a.CART_STORE_KEY),c=o(a.CART_STORE_KEY);return{applyCoupon:c.applyCoupon,removeCoupon:c.removeCoupon,isApplyingCoupon:n.isApplyingCoupon(),isRemovingCoupon:n.isRemovingCoupon(),receiveApplyingCoupon:c.receiveApplyingCoupon}},[i,u]),O=t=>{b(t).then(o=>{!0===o&&u("info",Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been applied to your cart.',"woocommerce"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(e=>{p({coupon:{message:Object(r.decodeEntities)(e.message),hidden:!1}}),receiveApplyingCoupon("")})},j=t=>{d(t).then(o=>{!0===o&&u("info",Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been removed from your cart.',"woocommerce"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(t=>{i(t.message,{id:"coupon-form",context:e}),receiveApplyingCoupon("")})};return{appliedCoupons:t,isLoading:o,applyCoupon:O,removeCoupon:j,isApplyingCoupon:m,isRemovingCoupon:g}}},277:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o(0),c=o(199);o(264);const a=e=>{let{errorMessage:t="",propertyName:o="",elementId:a=""}=e;const{getValidationError:r,getValidationErrorId:s}=Object(c.b)();if(!t||"string"!=typeof t){const e=r(o)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:s(a)},t))}},302:function(e,t,o){"use strict";var n=o(12),c=o.n(n),a=o(0),r=o(1),s=o(5),l=o(4),i=o.n(l),u=o(199),p=o(277),b=o(9),d=o(45),m=o(22);o(265);var g=Object(s.forwardRef)((e,t)=>{let{className:o,id:n,type:r="text",ariaLabel:s,ariaDescribedBy:l,label:u,screenReaderLabel:p,disabled:b,help:d,autoCapitalize:g="off",autoComplete:O="off",value:j="",onChange:f,required:E=!1,onBlur:v=(()=>{}),feedback:h,...w}=e;const[C,_]=Object(a.useState)(!1);return Object(a.createElement)("div",{className:i()("wc-block-components-text-input",o,{"is-active":C||j})},Object(a.createElement)("input",c()({type:r,id:n,value:j,ref:t,autoCapitalize:g,autoComplete:O,onChange:e=>{f(e.target.value)},onFocus:()=>_(!0),onBlur:e=>{v(e.target.value),_(!1)},"aria-label":s||u,disabled:b,"aria-describedby":d&&!l?n+"__help":l,required:E},w)),Object(a.createElement)(m.a,{label:u,screenReaderLabel:p||u,wrapperElement:"label",wrapperProps:{htmlFor:n},htmlFor:n}),!!d&&Object(a.createElement)("p",{id:n+"__help",className:"wc-block-components-text-input__help"},d),h)});t.a=Object(b.withInstanceId)(e=>{let{className:t,instanceId:o,id:n,ariaDescribedBy:l,errorId:b,focusOnMount:m=!1,onChange:O,showError:j=!0,errorMessage:f="",value:E="",...v}=e;const[h,w]=Object(s.useState)(!0),C=Object(s.useRef)(null),{getValidationError:_,hideValidationError:y,setValidationErrors:k,clearValidationError:N,getValidationErrorId:R}=Object(u.b)(),I=void 0!==n?n:"textinput-"+o,A=void 0!==b?b:I,S=Object(s.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=C.current||null;if(!t)return;t.value=t.value.trim();const o=t.checkValidity();o?N(A):k({[A]:{message:t.validationMessage||Object(r.__)("Invalid value.","woocommerce"),hidden:e}})}),[N,A,k]);Object(s.useEffect)(()=>{var e;h&&m&&(null===(e=C.current)||void 0===e||e.focus()),w(!1)},[m,h,w]),Object(s.useEffect)(()=>{var e,t;(null===(e=C.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==C.current&&S(!0)},[E,S]),Object(s.useEffect)(()=>()=>{N(A)},[N,A]);const L=_(A)||{};Object(d.a)(f)&&""!==f&&(L.message=f);const V=L.message&&!L.hidden,x=j&&V&&R(A)?R(A):l;return Object(a.createElement)(g,c()({className:i()(t,{"has-error":V}),"aria-invalid":!0===V,id:I,onBlur:()=>{S(!1)},feedback:j&&Object(a.createElement)(p.a,{errorMessage:f,propertyName:A}),ref:C,onChange:e=>{y(A),O(e)},ariaDescribedBy:x,value:E},v))})},317:function(e,t){},381:function(e,t,o){"use strict";var n=o(0),c=o(1),a=o(266),r=o(302),s=o(22),l=o(136),i=o(9),u=o(199),p=o(277),b=o(10);o(317),t.a=Object(i.withInstanceId)(e=>{let{instanceId:t,isLoading:o=!1,initialOpen:i=!1,onSubmit:d=(()=>{})}=e;const[m,g]=Object(n.useState)(""),O=Object(n.useRef)(!1),{getValidationError:j,getValidationErrorId:f}=Object(u.b)(),E=j("coupon");Object(n.useEffect)(()=>{O.current!==o&&(o||!m||E||g(""),O.current=o)},[o,m,E]);const v="wc-block-components-totals-coupon__input-"+t;return Object(n.createElement)(b.Panel,{className:"wc-block-components-totals-coupon",hasBorder:!1,initialOpen:i,title:Object(n.createElement)(s.a,{label:Object(c.__)("Coupon code","woocommerce"),screenReaderLabel:Object(c.__)("Apply a coupon code","woocommerce"),htmlFor:v})},Object(n.createElement)(l.a,{screenReaderLabel:Object(c.__)("Applying coupon…","woocommerce"),isLoading:o,showSpinner:!1},Object(n.createElement)("div",{className:"wc-block-components-totals-coupon__content"},Object(n.createElement)("form",{className:"wc-block-components-totals-coupon__form"},Object(n.createElement)(r.a,{id:v,errorId:"coupon",className:"wc-block-components-totals-coupon__input",label:Object(c.__)("Enter code","woocommerce"),value:m,ariaDescribedBy:f(v),onChange:e=>{g(e)},focusOnMount:!0,showError:!1}),Object(n.createElement)(a.a,{className:"wc-block-components-totals-coupon__button",disabled:o||!m,showSpinner:o,onClick:e=>{e.preventDefault(),d(m)},type:"submit"},Object(c.__)("Apply","woocommerce"))),Object(n.createElement)(p.a,{propertyName:"coupon",elementId:v}))))})},456:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(381),a=o(274),r=o(2),s=o(10);t.default=e=>{let{className:t}=e;const o=Object(r.getSetting)("couponsEnabled",!0),{applyCoupon:l,isApplyingCoupon:i}=Object(a.a)("wc/cart");return o?Object(n.createElement)(s.TotalsWrapper,{className:t},Object(n.createElement)(c.a,{onSubmit:l,isLoading:i})):null}}}]);