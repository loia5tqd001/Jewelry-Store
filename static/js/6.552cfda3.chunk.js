(this["webpackJsonpjquery-store"]=this["webpackJsonpjquery-store"]||[]).push([[6],{121:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(3),c=t(21),o=t(2),u=t(1);function l(){var e=Object(o.a)(["\n  ",";\n  ","\n  --aspect-ratio: 1;\n\n  &:hover {\n    "," {\n      opacity: 0;\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return l=function(){return e},e}function m(){var e=Object(o.a)(["\n  ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n"]);return m=function(){return e},e}function s(){var e=Object(o.a)(["\n  ",";\n  opacity: 1;\n"]);return s=function(){return e},e}function f(){var e=Object(o.a)(["\n  transition: ",";\n"]);return f=function(){return e},e}var d=Object(u.d)(f(),(function(e){return e.theme.styles.transSlow1})),h=u.e.img(s(),d),p=u.e.img(m(),d),b=u.e.div(l(),(function(e){return e.theme.mixins.imageFrame}),(function(e){return e.theme.mixins.preventReflow}),h,p);var g=function(e){var n=e.srcImage,t=e.srcOnHover,r=e.alt;return a.a.createElement(b,null,a.a.createElement(h,{src:n,alt:r}),a.a.createElement(p,{src:t,alt:r}))};function v(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")+"\u0111"}function E(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;console.assert("number"===typeof e);var t=Math.pow(10,n);return e-e%t}function O(){var e=Object(o.a)(["\n  text-decoration: line-through;\n  margin-left: 1rem;\n  opacity: 0.6;\n"]);return O=function(){return e},e}function j(){var e=Object(o.a)(["\n  color: ",";\n  font-weight: ",";\n"]);return j=function(){return e},e}function y(){var e=Object(o.a)(["\n    letter-spacing: 0;\n    font-size: 0.9em;\n  "]);return y=function(){return e},e}function w(){var e=Object(o.a)(["\n  font-weight: ",";\n  letter-spacing: 0.1rem;\n\n  ","\n"]);return w=function(){return e},e}function x(){var e=Object(o.a)(["\n  font-weight: ",";\n  ",";\n"]);return x=function(){return e},e}function k(){var e=Object(o.a)(["\n    padding: 1.5rem 3%;\n  "]);return k=function(){return e},e}function T(){var e=Object(o.a)(["\n  text-align: center;\n  padding: 1em 10%;\n\n  ","\n"]);return T=function(){return e},e}function C(){var e=Object(o.a)(["\n  position: relative;\n"]);return C=function(){return e},e}function z(){var e=Object(o.a)(["\n  display: block;\n  position: absolute;\n  z-index: 10;\n  top: 5%;\n  left: 5%;\n  padding: 0.5rem 1rem;\n  color: ",";\n  box-shadow: ",";\n  font-weight: ",";\n  background: ",";\n"]);return z=function(){return e},e}function S(){var e=Object(o.a)(["\n  padding: 0.5em;\n"]);return S=function(){return e},e}var F=u.e.div(S()),L=u.e.span(z(),(function(e){return e.theme.colors.red}),(function(e){return e.theme.styles.shadowSubtle1}),(function(e){return e.theme.fw.semiBold}),(function(e){return e.theme.styles.background})),I=u.e.div(C()),D=u.e.div(T(),(function(e){return e.theme.media.lessThan("tiny")(k())})),P=u.e.h3(x(),(function(e){return e.theme.fw.normal}),(function(e){return e.theme.mixins.ellipsisTextOverflow})),R=u.e.p(w(),(function(e){return e.theme.fw.thin}),(function(e){return e.theme.media.lessThan("tiny")(y())})),A=u.e.span(j(),(function(e){return e.theme.colors.red}),(function(e){return e.theme.fw.light})),B=u.e.span(O());function G(e){var n=e.id,t=e.name,r=e.image,o=e.image2,u=e.price,l=e.sale,m="".concat(i.d.productDetail.path,"/").concat(n);return a.a.createElement(F,null,a.a.createElement(I,{title:t},a.a.createElement(i.a,{to:m},l?a.a.createElement(L,null,"-".concat(l,"%")):"",a.a.createElement(g,{srcImage:r,srcOnHover:o,alt:t}))),a.a.createElement(D,null,a.a.createElement(P,{title:t},a.a.createElement(c.a,{to:m},t)),a.a.createElement(R,null,l?a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null,v(E(u*(1-l/100)))),a.a.createElement(B,null,v(E(u)))):a.a.createElement("span",null,v(u)))))}G.defaultProps={sale:0};n.a=G},127:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(3),c=t(2),o=t(1);function u(){var e=Object(c.a)(["\n  &:not(:last-child)::after {\n    content: '/';\n    margin: 1rem;\n    color: ",";\n  }\n"]);return u=function(){return e},e}function l(){var e=Object(c.a)(["\n  padding: 1rem 2rem;\n  background: ",";\n  font-weight: ",";\n  font-size: 0.9em;\n  user-select: none;\n"]);return l=function(){return e},e}var m=o.e.div(l(),(function(e){return e.theme.styles.backgroundSecondary}),(function(e){return e.theme.fw.thin})),s=o.e.span(u(),(function(e){return e.theme.colors.greyLight3}));n.a=function(e){var n=e.paths;return a.a.createElement(m,null,n.map((function(e,n){return a.a.createElement(s,{key:n},"string"===typeof e?a.a.createElement("span",null,e):a.a.createElement(i.c,{to:e.path},e.display))})))}},242:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(11),c=t(29),o=t(5),u=t(10),l=t(238),m=t(13),s={control:function(e){return Object(m.a)({},e,{borderColor:"#ccc",boxShadow:"none","&:hover":{borderColor:"#aaa"}})},container:function(e){return Object(m.a)({},e,{width:"14em",fontSize:"1.1em",zIndex:"20"})},option:function(e){return Object(m.a)({},e,{padding:"0.15em 0.5em"})},menuList:function(e){return Object(m.a)({},e,{padding:2})}},f=[{value:"featured-products",label:"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"},{value:"price-ascending",label:"Gi\xe1: T\u0103ng d\u1ea7n"},{value:"price-descending",label:"Gi\xe1: Gi\u1ea3m d\u1ea7n"},{value:"name-a-z",label:"T\xean: A-Z"},{value:"name-z-a",label:"T\xean: Z-A"}];var d=function(){var e=Object(r.useState)(f[0]),n=Object(u.a)(e,2),t=n[0],i=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{options:f,styles:s,value:t,onChange:i,isSearchable:!1}))},h=t(27),p=t(2),b=t(1);function g(){var e=Object(p.a)(["\n  visibility: hidden;\n  width: 0;\n  height: 0;\n\n  &:checked + ","::after {\n    display: block;\n  }\n  &:checked + ","::before {\n    border-color: ",";\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(p.a)(["\n  --checkbox-size: 1.4rem;\n  font-weight: ",";\n  position: relative;\n  padding-left: calc(var(--checkbox-size) + 0.5rem);\n  ","\n  transition: color ",";\n  user-select: none;\n  font-size: 1.1em;\n\n  &::before, &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: calc(50% - var(--checkbox-size) * 0.5);\n    width: var(--checkbox-size);\n    height: var(--checkbox-size);\n  }\n\n  &::before {\n    border-radius: 2px;\n    border: 1px solid ",";\n    transition: border ",";\n  }\n  &:hover::before {\n    border-color: ",";\n  }\n\n  &::after {\n    color: ",";\n    width: calc(var(--checkbox-size) * 0.5);\n    height: calc(var(--checkbox-size) * 0.7);\n    transform: translate(50%, 10%) rotate(45deg);\n    border-bottom: 2px solid currentColor;\n    border-right: 2px solid currentColor;\n    display: none;\n    /* How to draw a checkmark css: https://stackoverflow.com/a/60322224/9787887 */\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(p.a)(["\n  text-transform: uppercase;\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-top: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  user-select: none;\n  font-weight: ",";\n\n  ion-icon {\n    font-size: 1.1em;\n  }\n"]);return E=function(){return e},e}function O(){var e=Object(p.a)(["\n  .ReactCollapse--collapse {\n    transition: height ",";\n    margin-bottom: 0.5rem;\n  }\n"]);return O=function(){return e},e}var j=b.e.div(O(),(function(e){return e.theme.styles.transSlow1})),y=b.e.h3(E(),(function(e){return e.theme.fw.semiBold})),w=b.e.label(v(),(function(e){return e.theme.fw.light}),(function(e){return e.theme.mixins.hoverColorPrimary}),(function(e){return e.theme.styles.transFast1}),(function(e){return e.theme.colors.greyLight4}),(function(e){return e.theme.styles.transSlow1}),(function(e){return e.theme.colors.greyLight2}),(function(e){return e.theme.colors.blueDarker3})),x=b.e.input(g(),w,w,(function(e){return e.theme.colors.greyLight2})),k=function(e){var n=e.heading,t=e.children,i=Object(r.useState)(!0),c=Object(u.a)(i,2),o=c[0],l=c[1];return a.a.createElement(j,null,a.a.createElement(y,{onClick:function(){return l(!o)}},a.a.createElement("span",null,n)," ",a.a.createElement("ion-icon",{name:o?"remove":"add"})),a.a.createElement(h.Collapse,{isOpened:o},t))};function T(){return a.a.createElement(k,{heading:"Gi\xe1 s\u1ea3n ph\u1ea9m"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"price1"}),a.a.createElement(w,{htmlFor:"price1"},a.a.createElement("small",null,"D\u01b0\u1edbi")," 500,000\u0111")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"price2"}),a.a.createElement(w,{htmlFor:"price2"},"500,000\u0111 - 1,000,000\u0111")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"price3"}),a.a.createElement(w,{htmlFor:"price3"},"1,000,000\u0111 - 1,500,000\u0111")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"price4"}),a.a.createElement(w,{htmlFor:"price4"},"2,000,000\u0111 - 5,000,000\u0111")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"price5"}),a.a.createElement(w,{htmlFor:"price5"},a.a.createElement("small",null,"Tr\xean")," 5,000,000\u0111"))))}function C(){return a.a.createElement(k,{heading:"Nh\xe3n hi\u1ec7u"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"brand1"}),a.a.createElement(w,{htmlFor:"brand1"},"D'ORO")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"brand2"}),a.a.createElement(w,{htmlFor:"brand2"},"PAVE CLASSICA")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"brand3"}),a.a.createElement(w,{htmlFor:"brand3"},"TRIO")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"brand4"}),a.a.createElement(w,{htmlFor:"brand4"},"PAVE ROSE")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"brand5"}),a.a.createElement(w,{htmlFor:"brand5"},"BOUQUET")),a.a.createElement("li",null,a.a.createElement(x,{type:"checkbox",id:"brand6"}),a.a.createElement(w,{htmlFor:"brand6"},"DUO"))))}var z=t(57);function S(){var e=Object(p.a)(["\n    padding: 0.7em 1em;\n  "]);return S=function(){return e},e}function F(){var e=Object(p.a)(["\n  padding: 1em;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n  font-weight: ",";\n\n  ","\n"]);return F=function(){return e},e}function L(){var e=Object(p.a)(["\n  .ReactCollapse--collapse {\n    transition: height ",";\n    font-size: 0.95em;\n    margin-left: 1.5em;\n  }\n"]);return L=function(){return e},e}var I=b.e.div(L(),(function(e){return e.theme.styles.transSlow5})),D=b.e.p(F(),(function(e){return e.theme.styles.backgroundSecondary}),(function(e){return e.theme.fw.semiBold}),(function(e){return e.theme.media.lessThan("smedium")(S())}));var P=function(){var e=Object(r.useCallback)((function(e){return e.width>992}),[]),n=Object(z.a)(!1,e),t=n.isOpen,i=n.toggleIsOpen;return a.a.createElement(I,null,a.a.createElement(D,{onClick:i},a.a.createElement("span",null,"B\u1ed9 l\u1ecdc s\u1ea3n ph\u1ea9m"),!e({width:window.innerWidth})&&a.a.createElement("ion-icon",{name:"chevron-".concat(t?"up":"down","-outline")})),a.a.createElement(h.Collapse,{isOpened:t},a.a.createElement(C,null),a.a.createElement(T,null)))},R=t(234),A=t.n(R),B=t(121);function G(){var e=Object(p.a)(["\n  .pagination {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1em 30% 2em;\n    user-select: none;\n    font-size: 1.3em;\n  }\n\n  ion-icon {\n    font-size: 1.5em;\n    margin-top: 0.1rem;\n  }\n\n  li:not(.selected) {\n    &.disabled {\n      color: ",";\n    }\n\n    &:not(.disabled) {\n      ","\n    }\n  }\n\n  .selected {\n    font-weight: ",";\n\n    border-bottom: 2px solid currentColor;\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(p.a)(["\n    --no-columns: 2;\n  "]);return H=function(){return e},e}function U(){var e=Object(p.a)(["\n    --no-columns: 3;\n  "]);return U=function(){return e},e}function q(){var e=Object(p.a)(["\n    --no-columns: 4;\n  "]);return q=function(){return e},e}function J(){var e=Object(p.a)(["\n  ","\n  grid-template-rows: repeat(3, auto);\n  grid-auto-rows: 0;\n  overflow-y: hidden;\n  /* How to hide implicit css-grid rows: https://stackoverflow.com/a/49100132/9787887 */\n\n  ","\n  ","\n  ","\n"]);return J=function(){return e},e}var N=b.e.div(J(),(function(e){return e.theme.mixins.gridDivideIntoColumns(5)}),(function(e){return e.theme.media.lessThan("huge")(q())}),(function(e){return e.theme.media.lessThan("large")(U())}),(function(e){return e.theme.media.lessThan("smedium")(H())})),V=b.e.div(G(),(function(e){return e.theme.colors.greyLight2}),(function(e){return e.theme.mixins.hoverColorPrimary}),(function(e){return e.theme.fw.bold}));var Z=function(e){var n=e.items,t=Object(r.useState)(0),i=Object(u.a)(t,2),c=i[0],o=i[1],l=Object(r.useCallback)((function(e){var n=e.selected;return o(n)}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,n[c].map((function(e){return a.a.createElement(B.a,Object.assign({key:e.id},e))}))),a.a.createElement(V,null,a.a.createElement(A.a,{previousLabel:a.a.createElement("ion-icon",{name:"return-down-back"}),nextLabel:a.a.createElement("ion-icon",{name:"return-down-forward"}),pageCount:n.length,marginPagesDisplayed:0,pageRangeDisplayed:0,containerClassName:"pagination",onPageChange:l})))},_=t(3),M=t(116),Q=t(127);function W(){var e=Object(p.a)(["\n  ","\n  ","\n  --aspect-ratio: 300/1500;\n  max-height: 22em;\n  overflow: hidden;\n  opacity: 0.95;\n"]);return W=function(){return e},e}var $=b.e.figure(W(),(function(e){return e.theme.mixins.imageFrame}),(function(e){return e.theme.mixins.preventReflow}));function K(e){var n=e.collection,t=[_.d.home,_.d.products],r={src:"https://file.hstatic.net/1000327411/collection/landingpage_banner_rings.jpg"};return n?(t.push(n.collection),r.src=n.image,r.alt=n.collection):t.push("T\u1ea5t c\u1ea3"),a.a.createElement(a.a.Fragment,null,a.a.createElement(Q.a,{paths:t}),a.a.createElement($,null,a.a.createElement(M.LazyLoadImage,Object.assign({alt:"banner"},r))))}K.defaultProps={collection:null};var X=K;function Y(){var e=Object(p.a)(["\n  grid-area: products;\n"]);return Y=function(){return e},e}function ee(){var e=Object(p.a)(["\n    margin-bottom: 0.5em;\n  "]);return ee=function(){return e},e}function ne(){var e=Object(p.a)(["\n    margin: 0;\n  "]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  font-weight: ",";\n  text-align: center;\n\n  ","\n\n  ","\n"]);return te=function(){return e},e}function re(){var e=Object(p.a)(["\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 1em 0 0.5em -1.5em;\n  "]);return re=function(){return e},e}function ae(){var e=Object(p.a)(["\n    margin: 1em 0 0 -1em;\n  "]);return ae=function(){return e},e}function ie(){var e=Object(p.a)(["\n    margin-right: 1em;\n    margin-top: 1em;\n  "]);return ie=function(){return e},e}function ce(){var e=Object(p.a)(["\n  grid-area: heading;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1em 0 2em;\n\n  ","\n\n  ","\n\n  ","\n"]);return ce=function(){return e},e}function oe(){var e=Object(p.a)(["\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  "]);return oe=function(){return e},e}function ue(){var e=Object(p.a)(["\n    position: static;\n    margin: 0.5em 2em 0;\n    padding: 0 0 1em 0;\n  "]);return ue=function(){return e},e}function le(){var e=Object(p.a)(["\n  grid-area: aside;\n  padding: 2em 1.5em 1em 0.5em;\n  position: sticky;\n  top: 3em;\n  margin-top: 10em;\n  align-self: flex-start;\n\n  ","\n\n  ","\n"]);return le=function(){return e},e}function me(){var e=Object(p.a)(["\n    padding: 0.5em;\n  "]);return me=function(){return e},e}function se(){var e=Object(p.a)(["\n    grid-template-areas:\n      'heading heading'\n      'aside aside'\n      'products products';\n  "]);return se=function(){return e},e}function fe(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n    'aside heading'\n    'aside products';\n  padding: 0.5em 1em;\n\n  ","\n\n  ","\n"]);return fe=function(){return e},e}function de(){var e=Object(p.a)(["\n  position: relative;\n  z-index: 1;\n"]);return de=function(){return e},e}var he=b.e.section(de()),pe=b.e.main(fe(),(function(e){return e.theme.media.lessThan("regular")(se())}),(function(e){return e.theme.media.lessThan("small")(me())})),be=b.e.aside(le(),(function(e){return e.theme.media.lessThan("regular")(ue())}),(function(e){return e.theme.media.lessThan("medium")(oe())})),ge=b.e.div(ce(),(function(e){return e.theme.media.lessThan("regular")(ie())}),(function(e){return e.theme.media.lessThan("medium")(ae())}),(function(e){return e.theme.media.lessThan("smedium")(re())})),ve=b.e.h2(te(),(function(e){return e.theme.fw.semiBold}),(function(e){return e.theme.media.lessThan("regular")(ne())}),(function(e){return e.theme.media.lessThan("smedium")(ee())})),Ee=b.e.div(Y());n.default=function(){var e=Object(i.g)().collectionId,n=c.a.find((function(n){return n.id===e}));return a.a.createElement(he,null,a.a.createElement(X,{collection:n}),a.a.createElement(pe,null,a.a.createElement(be,null,a.a.createElement(P,null)),a.a.createElement(ge,null,a.a.createElement(ve,null,n?"S\u1ea3n ph\u1ea9m ".concat(n.collection.toLowerCase()):"T\u1ea5t c\u1ea3 s\u1ea3n ph\u1ea9m"),a.a.createElement(d,null)),a.a.createElement(Ee,null,a.a.createElement(Z,{items:n?n.items:o.a}))))}}}]);
//# sourceMappingURL=6.552cfda3.chunk.js.map