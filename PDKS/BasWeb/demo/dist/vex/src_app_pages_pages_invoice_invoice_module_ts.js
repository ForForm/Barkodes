(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_invoice_invoice_module_ts"],{

/***/ 82793:
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-mail.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path opacity=\".3\" d=\"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z\" fill=\"currentColor\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 78182:
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-phone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
	"body": "<path opacity=\".3\" d=\"M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z\" fill=\"currentColor\"/><path d=\"M9.07 7.57A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5a13 13 0 0 0 .46 2.59L5.79 8.8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports["default"] = data;


/***/ }),

/***/ 84309:
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUpAnimation": () => (/* binding */ fadeInUpAnimation),
/* harmony export */   "fadeInUp400ms": () => (/* binding */ fadeInUp400ms)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);

function fadeInUpAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ 42945:
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceRoutingModule": () => (/* binding */ InvoiceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.component */ 57130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceComponent,
        data: {
            toolbarShadowEnabled: true,
            containerEnabled: true
        }
    }
];
class InvoiceRoutingModule {
}
InvoiceRoutingModule.??fac = function InvoiceRoutingModule_Factory(t) { return new (t || InvoiceRoutingModule)(); };
InvoiceRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: InvoiceRoutingModule });
InvoiceRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](InvoiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 57130:
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceComponent": () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ 82793);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ 78182);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);






class InvoiceComponent {
    constructor() {
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
    }
}
InvoiceComponent.??fac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(); };
InvoiceComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: InvoiceComponent, selectors: [["vex-invoice"]], decls: 138, vars: 3, consts: [[1, "p-gutter", "container"], [1, "card", "p-16"], ["fxLayout", "row"], ["fxFlex", "50%"], ["src", "assets/img/demo/logo.svg", 1, "h-40"], [1, "mt-12"], [1, "body-2", "text-secondary", "mt-0"], [1, "title", "m-0"], [1, "text-secondary"], [1, "m-0"], ["fxFlex", "50%", "fxLayout", "column", "fxLayoutAlign", "start end", 1, "text-right", "body-1"], [1, "display-2", "m-0"], [1, "mt-6"], [1, "text-secondary", "body-2"], [1, "text-left", "pl-4"], [1, "m-0", "mt-3"], ["inline", "true", "size", "1.25em", 1, "mr-2", 3, "icon"], [1, "table", "w-full", "mt-24"], [1, "body-2", "text-secondary"], [1, "body-2", "text-secondary", "text-right"], [1, "py-6", "border-b"], [1, "py-6", "border-b", "font-medium", "text-right"], ["fxLayout", "column", "fxLayoutAlign", "start end", 1, "mt-8"], [1, "subheading-2", "font-medium", "pr-6"], [1, "text-secondary", "text-right"], [1, "pl-12"], [1, "headline", "font-medium", "text-right", "pt-6"], [1, "headline", "font-medium", "pl-12", "pt-6"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "RECIPIENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "David Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "712 Clarkson Ave");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Brooklyn, NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "11203, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "INVOICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "INVOICE NO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "2019/0592");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "INVOICE DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "10/04/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](34, "PROJECT NO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "D-23-44");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "COMPANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](41, "IceCold Tech Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "907 Eastern Pkwy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "Brooklyn, NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](48, "11213, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](50, "ic-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "hello@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](54, "ic-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "+1 (961) 400-3535");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, "SERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](63, "PRICE PER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "UNIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](67, "QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](73, "New Dashboard Prototype, Design & Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "$35.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](79, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "$1,400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](84, "Graphic Pack - Monthly Subscription (includes Updates)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](86, "$49.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](88, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](90, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](92, "$249.95");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](95, "Logo & Branding Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](96, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](97, "$499.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](98, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](99, "Piece");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](100, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](101, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](103, "$499.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](106, "Bug Fixes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](107, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](108, "$15.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](109, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](110, "Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](111, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](112, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](113, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](114, "$150.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](116, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](120, "SUBTOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](122, "$2,299.94\u202C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](123, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](125, "TAX (19%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](127, "$436.99\u202C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](129, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](130, "DISCOUNT (5%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](131, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](132, "-$114.99\u202C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](133, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](135, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](136, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](137, "$2,621.94\u202C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("icon", ctx.icMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("icon", ctx.icPhone);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective], styles: ["@media print {\n  .p-gutter[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHFCQUFBO0VBQ0Y7O0VBRUE7SUFDRSwyQkFBQTtFQUNGO0FBQ0Y7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBRkoiLCJmaWxlIjoiaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBwcmludCB7XHJcbiAgLnAtZ3V0dGVyIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 10416:
/*!*******************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-routing.module */ 42945);
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.component */ 57130);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);






class InvoiceModule {
}
InvoiceModule.??fac = function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); };
InvoiceModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: InvoiceModule });
InvoiceModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](InvoiceModule, { declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_invoice_invoice_module_ts.js.map