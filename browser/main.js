(self["webpackChunkreference_storefront"] = self["webpackChunkreference_storefront"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/graphql/documents.graphql */ 98469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/providers/state/state.service */ 33426);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _core_components_cart_toggle_cart_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/cart-toggle/cart-toggle.component */ 16088);
/* harmony import */ var _core_components_account_link_account_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/account-link/account-link.component */ 15639);
/* harmony import */ var _core_components_cart_drawer_cart_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/cart-drawer/cart-drawer.component */ 6664);
/* harmony import */ var _core_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/layout/layout.component */ 69358);
/* harmony import */ var _core_components_layout_layout_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/layout/layout-header.component */ 56731);
/* harmony import */ var _core_components_layout_layout_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/layout/layout-footer.component */ 68241);
/* harmony import */ var _core_components_collections_menu_collections_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/collections-menu/collections-menu.component */ 14600);
/* harmony import */ var _core_components_collections_menu_mobile_collections_menu_mobile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/collections-menu-mobile/collections-menu-mobile.component */ 17906);
/* harmony import */ var _core_components_mobile_menu_toggle_mobile_menu_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/mobile-menu-toggle/mobile-menu-toggle.component */ 22449);
/* harmony import */ var _core_components_product_search_bar_product_search_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/product-search-bar/product-search-bar.component */ 68310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/home-page/home-page.component */ 14222);




















function AppComponent_vsf_home_page_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "vsf-home-page");
  }
}
function AppComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "router-outlet");
  }
}
const _c0 = function (a1) {
  return ["/category", a1];
};
function AppComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c0, item_r6.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
  }
}
function AppComponent_li_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("href", item_r7.href, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
  }
}
function AppComponent_li_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("href", item_r8.href, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
  }
}
const _c1 = function () {
  return ["/"];
};
class AppComponent {
  constructor(router, stateService, dataService) {
    this.router = router;
    this.stateService = stateService;
    this.dataService = dataService;
    this.navigation = {
      support: [{
        name: 'Help',
        href: '#'
      }, {
        name: 'Track order',
        href: '#'
      }, {
        name: 'Shipping',
        href: '#'
      }, {
        name: 'Returns',
        href: '#'
      }],
      company: [{
        name: 'About',
        href: '#'
      }, {
        name: 'Blog',
        href: '#'
      }, {
        name: 'Corporate responsibility',
        href: '#'
      }, {
        name: 'Press',
        href: '#'
      }]
    };
  }
  ngOnInit() {
    this.cartDrawerVisible$ = this.stateService.select(state => state.cartDrawerOpen);
    this.mobileNavVisible$ = this.stateService.select(state => state.mobileNavMenuIsOpen);
    this.isHomePage$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterEvent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(event => event.url === '/'));
    this.topCollections$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_COLLECTIONS, {
      options: {
        take: 25,
        topLevelOnly: true
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(({
      collections
    }) => collections.items));
  }
  openCartDrawer() {
    this.stateService.setState('cartDrawerOpen', true);
  }
  closeCartDrawer() {
    this.stateService.setState('cartDrawerOpen', false);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["vsf-root"]],
  decls: 71,
  vars: 17,
  consts: [[1, "bg-gradient-to-r", "from-zinc-600", "to-zinc-800", "shadow-lg", "transform", "shadow-xl"], [1, "bg-zinc-100", "text-gray-600", "shadow-inner", "text-center", "text-sm", "py-2", "px-2", "xl:px-0"], [1, "max-w-6xl", "mx-2", "md:mx-auto", "flex", "items-center", "justify-between"], [1, "hidden", "sm:block"], ["href", "https://github.com/vendure-ecommerce/storefront-angular-starter", "target", "_blank", 1, "underline"], [1, ""], [1, "max-w-6xl", "mx-2", "py-2", "md:mx-auto", "flex", "items-center", "space-x-4"], [1, "md:hidden"], [1, "l", 3, "routerLink"], ["alt", "Vendure Storefront", "src", "assets/cube-logo-small.webp", 1, "w-10"], [1, "hidden", "md:block", "text-white"], [1, "flex-1"], [3, "toggle"], [1, "z-10", 3, "visible"], [3, "visible", "close"], [1, "contents"], [4, "ngIf", "ngIfElse"], ["main", ""], ["aria-labelledby", "footer-heading", 1, "mt-24", "border-t", "bg-gray-50"], ["id", "footer-heading", 1, "sr-only"], [1, "max-w-7xl", "mx-auto", "py-12", "px-4", "sm:px-6", "lg:py-16", "lg:px-8"], [1, "xl:grid", "xl:grid-cols-3", "xl:gap-8"], [1, "grid", "grid-cols-2", "gap-8", "xl:col-span-2"], [1, "md:grid", "md:grid-cols-2", "md:gap-8"], [1, "text-sm", "font-semibold", "text-gray-500", "tracking-wider", "uppercase"], ["role", "list", 1, "mt-4", "space-y-4"], [4, "ngFor", "ngForOf"], [1, "mt-12", "md:mt-0"], [1, "mt-8", "xl:mt-0"], [1, "mt-4", "text-base", "text-gray-500"], [1, "mt-4", "sm:flex", "sm:max-w-md"], ["htmlFor", "email-address", 1, "sr-only"], ["autoComplete", "email", "id", "email-address", "name", "email-address", "placeholder", "Enter your email", "required", "", "type", "email", 1, "appearance-none", "min-w-0", "w-full", "bg-white", "border", "border-gray-300", "rounded-md", "py-2", "px-4", "text-base", "text-gray-900", "placeholder-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-offset-gray-800", "focus:ring-white", "focus:border-white", "focus:placeholder-gray-400"], [1, "mt-3", "rounded-md", "sm:mt-0", "sm:ml-3", "sm:flex-shrink-0"], ["type", "submit", 1, "w-full", "bg-primary-500", "border", "border-transparent", "rounded-md", "py-2", "px-4", "flex", "items-center", "justify-center", "text-base", "font-medium", "text-white", "hover:bg-primary-600", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-offset-gray-800", "focus:ring-primary-500"], [1, "mt-8", "border-t", "pt-8"], ["href", "https://github.com/vendure-ecommerce/storefront-angular-starter", 1, "flex", "gap-1", "w-fit", "font-medium", "text-gray-500", "hover:text-gray-700"], ["aria-hidden", "true", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["d", "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"], [1, "text-base", "text-gray-500", "hover:text-gray-600", 3, "routerLink"], [1, "text-base", "text-gray-500", "hover:text-gray-600", 3, "href"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "vsf-layout")(1, "vsf-layout-header")(2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div")(6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " Exclusive: Get your own ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " FREE storefront starter kit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "vsf-account-link", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "vsf-mobile-menu-toggle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "vsf-collections-menu", 10)(17, "vsf-product-search-bar", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "vsf-cart-toggle", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("toggle", function AppComponent_Template_vsf_cart_toggle_toggle_18_listener() {
        return ctx.openCartDrawer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "vsf-collections-menu-mobile", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "vsf-cart-drawer", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("close", function AppComponent_Template_vsf_cart_drawer_close_21_listener() {
        return ctx.closeCartDrawer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, AppComponent_vsf_home_page_24_Template, 1, 0, "vsf-home-page", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, AppComponent_ng_template_26_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "vsf-layout-footer")(29, "footer", 18)(30, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Footer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "div")(37, "h3", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, " Shop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "ul", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, AppComponent_li_40_Template, 3, 4, "li", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](41, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 27)(43, "h3", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, " Support ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "ul", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, AppComponent_li_46_Template, 3, 2, "li", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 23)(48, "div")(49, "h3", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, " Company ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "ul", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, AppComponent_li_52_Template, 3, 2, "li", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 28)(54, "h3", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, " Subscribe to our newsletter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, " Be the first to know about exclusive offers & deals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "form", 30)(59, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, " Email address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](61, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 33)(63, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64, " Subscribe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 35)(66, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "svg", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](68, "path", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "github.com/vendure-ecommerce/storefront-angular-starter");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](16, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 8, ctx.mobileNavVisible$));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 10, ctx.cartDrawerVisible$));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](25, 12, ctx.isHomePage$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](41, 14, ctx.topCollections$));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.navigation.support);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.navigation.company);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _core_components_cart_toggle_cart_toggle_component__WEBPACK_IMPORTED_MODULE_3__.CartToggleComponent, _core_components_account_link_account_link_component__WEBPACK_IMPORTED_MODULE_4__.AccountLinkComponent, _core_components_cart_drawer_cart_drawer_component__WEBPACK_IMPORTED_MODULE_5__.CartDrawerComponent, _core_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__.LayoutComponent, _core_components_layout_layout_header_component__WEBPACK_IMPORTED_MODULE_7__.LayoutHeaderComponent, _core_components_layout_layout_footer_component__WEBPACK_IMPORTED_MODULE_8__.LayoutFooterComponent, _core_components_collections_menu_collections_menu_component__WEBPACK_IMPORTED_MODULE_9__.CollectionsMenuComponent, _core_components_collections_menu_mobile_collections_menu_mobile_component__WEBPACK_IMPORTED_MODULE_10__.CollectionsMenuMobileComponent, _core_components_mobile_menu_toggle_mobile_menu_toggle_component__WEBPACK_IMPORTED_MODULE_11__.MobileMenuToggleComponent, _core_components_product_search_bar_product_search_bar_component__WEBPACK_IMPORTED_MODULE_12__.ProductSearchBarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__.HomePageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 48693);
/* harmony import */ var _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/home-page/home-page.component */ 14222);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);












class AppModule {
  constructor(router, urlSerializer, platformId, document) {
    this.router = router;
    this.urlSerializer = urlSerializer;
    this.platformId = platformId;
    this.document = document;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      this.handleScrollOnNavigations();
    }
  }
  /**
   * A work-around for undesirable scoll behaviour caused by the router's `scrollPositionRestoration` setting.
   * When set to 'enabled', it correctly handles scrolling to the top on navigation, and preserving scroll position
   * on "back" navigation. However, it _also_ causes the page to scroll to the top when changing search facet value filters,
   * which is very undesirable. Since there seems to be currently no way to disable the scrolling on a per-navigation basis,
   * we are manually implementing scroll-to-top-on-nav and adding an exception for when the "facets" param of the "category"
   * routes change.
   */
  handleScrollOnNavigations() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe(event => {
      if (this.document?.defaultView) {
        const parsed = this.urlSerializer.parse(event.urlAfterRedirects);
        const primaryRoot = parsed.root.children.primary;
        const isFacetFilterNavigation = primaryRoot?.segments[0]?.path === 'category' && primaryRoot?.segments[1]?.parameterMap.has('facets');
        if (!isFacetFilterNavigation) {
          this.document.defaultView.scrollTo({
            top: 0
          });
        }
      }
    });
  }
}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.UrlSerializer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes, {
    scrollPositionRestoration: 'disabled',
    initialNavigation: 'enabledBlocking'
  }), _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__.HomePageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 48693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _core_components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/product-detail/product-detail.component */ 2768);
/* harmony import */ var _core_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/product-list/product-list.component */ 25778);


const routes = [{
  path: 'category/:slug',
  component: _core_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent,
  pathMatch: 'full'
}, {
  path: 'search',
  component: _core_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'product/:slug',
  component: _core_components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailComponent
}, {
  path: 'account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 63879)).then(m => m.AccountModule)
}, {
  path: 'checkout',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_checkout_checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 28400)).then(m => m.CheckoutModule)
}];

/***/ }),

/***/ 98469:
/*!*****************************************************!*\
  !*** ./src/app/common/graphql/documents.graphql.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ACTIVE_CUSTOMER": () => (/* binding */ GET_ACTIVE_CUSTOMER),
/* harmony export */   "GET_AVAILABLE_COUNTRIES": () => (/* binding */ GET_AVAILABLE_COUNTRIES),
/* harmony export */   "GET_COLLECTIONS": () => (/* binding */ GET_COLLECTIONS),
/* harmony export */   "GET_CUSTOMER_ADDRESSES": () => (/* binding */ GET_CUSTOMER_ADDRESSES)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragments.graphql */ 43976);


const GET_CUSTOMER_ADDRESSES = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetCustomerAddresses {
        activeCustomer {
            id
            addresses {
                ...Address
            }
        }
    }
    ${_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_FRAGMENT}
`;
const GET_AVAILABLE_COUNTRIES = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetAvailableCountries {
        availableCountries {
            ...Country
        }
    }
    ${_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.COUNTRY_FRAGMENT}
`;
const GET_ACTIVE_CUSTOMER = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetActiveCustomer {
        activeCustomer {
            id
            firstName
            lastName
            emailAddress
            phoneNumber
        }
    }
`;
const GET_COLLECTIONS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetCollections($options: CollectionListOptions) {
        collections(options: $options) {
            items {
                id
                name
                slug
                parent {
                    id
                    name
                    slug
                }
                featuredAsset {
                    ...Asset
                }
            }
        }
    }
    ${_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ASSET_FRAGMENT}
`;

/***/ }),

/***/ 43976:
/*!*****************************************************!*\
  !*** ./src/app/common/graphql/fragments.graphql.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADDRESS_FRAGMENT": () => (/* binding */ ADDRESS_FRAGMENT),
/* harmony export */   "ASSET_FRAGMENT": () => (/* binding */ ASSET_FRAGMENT),
/* harmony export */   "CART_FRAGMENT": () => (/* binding */ CART_FRAGMENT),
/* harmony export */   "COUNTRY_FRAGMENT": () => (/* binding */ COUNTRY_FRAGMENT),
/* harmony export */   "ERROR_RESULT_FRAGMENT": () => (/* binding */ ERROR_RESULT_FRAGMENT),
/* harmony export */   "ORDER_ADDRESS_FRAGMENT": () => (/* binding */ ORDER_ADDRESS_FRAGMENT)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const ASSET_FRAGMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment Asset on Asset {
        id
        width
        height
        name
        preview
        focalPoint {
            x
            y
        }
    }
`;
const CART_FRAGMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment Cart on Order {
        id
        code
        state
        active
        updatedAt
        orderPlacedAt
        lines {
            id
            featuredAsset {
                ...Asset
            }
            unitPrice
            unitPriceWithTax
            quantity
            linePriceWithTax
            discountedLinePriceWithTax
            productVariant {
                id
                name
            }
            discounts {
                amount
                amountWithTax
                description
                adjustmentSource
                type
            }
        }
        totalQuantity
        subTotal
        subTotalWithTax
        total
        totalWithTax
        shipping
        shippingWithTax
        shippingLines {
            priceWithTax
            shippingMethod {
                id
                code
                name
                description
            }
        }
        discounts {
            amount
            amountWithTax
            description
            adjustmentSource
            type
        }
    }
    ${ASSET_FRAGMENT}
`;
const COUNTRY_FRAGMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment Country on Country {
        id
        code
        name
        enabled
    }
`;
const ORDER_ADDRESS_FRAGMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment OrderAddress on OrderAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        phoneNumber
    }
`;
const ADDRESS_FRAGMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment Address on Address {
        id
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
            id
            code
            name
        }
        phoneNumber
        defaultShippingAddress
        defaultBillingAddress
    }
`;
const ERROR_RESULT_FRAGMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment ErrorResult on ErrorResult {
        errorCode
        message
    }
`;

/***/ }),

/***/ 91864:
/*!*************************************************!*\
  !*** ./src/app/common/introspection-results.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const result = {
  "possibleTypes": {
    "ActiveOrderResult": ["NoActiveOrderError", "Order"],
    "AddPaymentToOrderResult": ["IneligiblePaymentMethodError", "NoActiveOrderError", "Order", "OrderPaymentStateError", "OrderStateTransitionError", "PaymentDeclinedError", "PaymentFailedError"],
    "ApplyCouponCodeResult": ["CouponCodeExpiredError", "CouponCodeInvalidError", "CouponCodeLimitError", "Order"],
    "AuthenticationResult": ["CurrentUser", "InvalidCredentialsError", "NotVerifiedError"],
    "CustomField": ["BooleanCustomFieldConfig", "DateTimeCustomFieldConfig", "FloatCustomFieldConfig", "IntCustomFieldConfig", "LocaleStringCustomFieldConfig", "LocaleTextCustomFieldConfig", "RelationCustomFieldConfig", "StringCustomFieldConfig", "TextCustomFieldConfig"],
    "CustomFieldConfig": ["BooleanCustomFieldConfig", "DateTimeCustomFieldConfig", "FloatCustomFieldConfig", "IntCustomFieldConfig", "LocaleStringCustomFieldConfig", "LocaleTextCustomFieldConfig", "RelationCustomFieldConfig", "StringCustomFieldConfig", "TextCustomFieldConfig"],
    "ErrorResult": ["AlreadyLoggedInError", "CouponCodeExpiredError", "CouponCodeInvalidError", "CouponCodeLimitError", "EmailAddressConflictError", "GuestCheckoutError", "IdentifierChangeTokenExpiredError", "IdentifierChangeTokenInvalidError", "IneligiblePaymentMethodError", "IneligibleShippingMethodError", "InsufficientStockError", "InvalidCredentialsError", "MissingPasswordError", "NativeAuthStrategyError", "NegativeQuantityError", "NoActiveOrderError", "NotVerifiedError", "OrderLimitError", "OrderModificationError", "OrderPaymentStateError", "OrderStateTransitionError", "PasswordAlreadySetError", "PasswordResetTokenExpiredError", "PasswordResetTokenInvalidError", "PasswordValidationError", "PaymentDeclinedError", "PaymentFailedError", "VerificationTokenExpiredError", "VerificationTokenInvalidError"],
    "NativeAuthenticationResult": ["CurrentUser", "InvalidCredentialsError", "NativeAuthStrategyError", "NotVerifiedError"],
    "Node": ["Address", "Asset", "AuthenticationMethod", "Channel", "Collection", "Country", "Customer", "CustomerGroup", "Facet", "FacetValue", "Fulfillment", "HistoryEntry", "Order", "OrderLine", "Payment", "PaymentMethod", "Product", "ProductOption", "ProductOptionGroup", "ProductVariant", "Promotion", "Province", "Refund", "Role", "Seller", "ShippingMethod", "Surcharge", "Tag", "TaxCategory", "TaxRate", "User", "Zone"],
    "PaginatedList": ["AssetList", "CollectionList", "CountryList", "CustomerList", "FacetList", "HistoryEntryList", "OrderList", "ProductList", "ProductVariantList", "PromotionList", "ProvinceList", "RoleList", "ShippingMethodList", "TagList", "TaxRateList"],
    "RefreshCustomerVerificationResult": ["NativeAuthStrategyError", "Success"],
    "Region": ["Country", "Province"],
    "RegisterCustomerAccountResult": ["MissingPasswordError", "NativeAuthStrategyError", "PasswordValidationError", "Success"],
    "RemoveOrderItemsResult": ["Order", "OrderModificationError"],
    "RequestPasswordResetResult": ["NativeAuthStrategyError", "Success"],
    "RequestUpdateCustomerEmailAddressResult": ["EmailAddressConflictError", "InvalidCredentialsError", "NativeAuthStrategyError", "Success"],
    "ResetPasswordResult": ["CurrentUser", "NativeAuthStrategyError", "NotVerifiedError", "PasswordResetTokenExpiredError", "PasswordResetTokenInvalidError", "PasswordValidationError"],
    "SearchResultPrice": ["PriceRange", "SinglePrice"],
    "SetCustomerForOrderResult": ["AlreadyLoggedInError", "EmailAddressConflictError", "GuestCheckoutError", "NoActiveOrderError", "Order"],
    "SetOrderShippingMethodResult": ["IneligibleShippingMethodError", "NoActiveOrderError", "Order", "OrderModificationError"],
    "TransitionOrderToStateResult": ["Order", "OrderStateTransitionError"],
    "UpdateCustomerEmailAddressResult": ["IdentifierChangeTokenExpiredError", "IdentifierChangeTokenInvalidError", "NativeAuthStrategyError", "Success"],
    "UpdateCustomerPasswordResult": ["InvalidCredentialsError", "NativeAuthStrategyError", "PasswordValidationError", "Success"],
    "UpdateOrderItemsResult": ["InsufficientStockError", "NegativeQuantityError", "Order", "OrderLimitError", "OrderModificationError"],
    "VerifyCustomerAccountResult": ["CurrentUser", "MissingPasswordError", "NativeAuthStrategyError", "PasswordAlreadySetError", "PasswordValidationError", "VerificationTokenExpiredError", "VerificationTokenInvalidError"]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);

/***/ }),

/***/ 32797:
/*!*******************************************************!*\
  !*** ./src/app/common/utils/get-route-array-param.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRouteArrayParam": () => (/* binding */ getRouteArrayParam)
/* harmony export */ });
/**
 * Reads the paramName array from the current route. The rather convoluted
 * logic is in place due to an apparent bug in the Angular router.
 * See https://github.com/angular/angular/issues/19179
 */
function getRouteArrayParam(paramMap, paramName) {
  const existing = paramMap.getAll(paramName);
  if (!existing) {
    return [];
  }
  let result = existing;
  if (existing.length === 1) {
    const value = existing[0];
    if (value.indexOf(',') > -1) {
      result = value.split(',');
    } else {
      result = [value];
    }
  }
  return result.filter(x => !!x);
}

/***/ }),

/***/ 38:
/*!*******************************************************!*\
  !*** ./src/app/common/utils/not-null-or-undefined.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notNullOrUndefined": () => (/* binding */ notNullOrUndefined)
/* harmony export */ });
/**
 * Predicate with type guard, used to filter out null or undefined values
 * in a filter operation.
 */
function notNullOrUndefined(val) {
  return val !== undefined && val !== null;
}

/***/ }),

/***/ 38059:
/*!************************************************!*\
  !*** ./src/app/core/apollo-client-provider.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APOLLO_CLIENT_PROVIDER": () => (/* binding */ APOLLO_CLIENT_PROVIDER),
/* harmony export */   "apolloOptionsFactory": () => (/* binding */ apolloOptionsFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client/core */ 27156);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client/core */ 14000);
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ 34611);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular/http */ 63551);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _common_introspection_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/introspection-results */ 91864);










const STATE_KEY = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.makeStateKey)('apollo.state');
let apolloCache;
const APOLLO_CLIENT_PROVIDER = {
  provide: apollo_angular__WEBPACK_IMPORTED_MODULE_4__.APOLLO_OPTIONS,
  useFactory: apolloOptionsFactory,
  deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__.HttpLink, _angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.TransferState, [new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional(), _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__.REQUEST]]
};
function mergeFields(existing, incoming) {
  return {
    ...existing,
    ...incoming
  };
}
function relaceFields(existing, incoming) {
  return incoming;
}
// Trying to debug why sessions won't work in Safari 13.1
// but only on the live prod version.
function logInterceptorData(on) {
  localStorage.setItem('_logInterceptorData', on ? 'true' : 'false');
}
if (typeof window !== 'undefined') {
  window.logInterceptorData = logInterceptorData;
}
function apolloOptionsFactory(httpLink, platformId, transferState, req) {
  const AUTH_TOKEN_KEY = 'auth_token';
  apolloCache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache({
    possibleTypes: _common_introspection_results__WEBPACK_IMPORTED_MODULE_2__["default"].possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          eligibleShippingMethods: {
            merge: relaceFields
          }
        }
      },
      Product: {
        fields: {
          customFields: {
            merge: mergeFields
          }
        }
      },
      Collection: {
        fields: {
          customFields: {
            merge: mergeFields
          }
        }
      },
      Order: {
        fields: {
          lines: {
            merge: relaceFields
          },
          shippingLines: {
            merge: relaceFields
          },
          discounts: {
            merge: relaceFields
          },
          shippingAddress: {
            merge: relaceFields
          },
          billingAddress: {
            merge: relaceFields
          }
        }
      },
      Customer: {
        fields: {
          addresses: {
            merge: relaceFields
          },
          customFields: {
            merge: mergeFields
          }
        }
      }
    }
  });
  const {
    apiHost,
    apiPort,
    shopApiPath
  } = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
  const uri = `${apiHost}:${apiPort}/${shopApiPath}`;
  const options = {
    uri,
    withCredentials: false
  };
  const http = httpLink.create(options);
  const afterware = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_8__.ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      const context = operation.getContext();
      const authHeader = context.response.headers.get('vendure-auth-token');
      if (authHeader && (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(platformId)) {
        // If the auth token has been returned by the Vendure
        // server, we store it in localStorage
        localStorage.setItem(AUTH_TOKEN_KEY, authHeader);
      }
      return response;
    });
  });
  const middleware = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_8__.ApolloLink((operation, forward) => {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(platformId)) {
      operation.setContext({
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY) || null}`)
      });
    }
    return forward(operation);
  });
  const isBrowser = transferState.hasKey(STATE_KEY);
  if (isBrowser) {
    const state = transferState.get(STATE_KEY, null);
    apolloCache.restore(state);
  } else {
    transferState.onSerialize(STATE_KEY, () => {
      return apolloCache.extract();
    });
    // Reset apolloCache after extraction to avoid sharing between requests
    apolloCache.reset();
  }
  return {
    cache: apolloCache,
    ssrMode: true,
    ssrForceFetchDelay: 500,
    link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_8__.ApolloLink.from([middleware, afterware, http])
  };
}

/***/ }),

/***/ 15639:
/*!************************************************************************!*\
  !*** ./src/app/core/components/account-link/account-link.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountLinkComponent": () => (/* binding */ AccountLinkComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);








const _c0 = function () {
  return ["/account"];
};
function AccountLinkComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const customer_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.userName(customer_r3));
  }
}
const _c1 = function () {
  return ["account/sign-in"];
};
function AccountLinkComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
  }
}
class AccountLinkComponent {
  constructor(dataService, stateService) {
    this.dataService = dataService;
    this.stateService = stateService;
  }
  ngOnInit() {
    const getActiveCustomer$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_ACTIVE_CUSTOMER, {}, 'network-only');
    getActiveCustomer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => {
      if (data.activeCustomer) {
        this.stateService.setState('signedIn', true);
      }
    });
    this.activeCustomer$ = this.stateService.select(state => state.signedIn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => getActiveCustomer$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data && data.activeCustomer));
  }
  userName(customer) {
    const {
      firstName,
      lastName,
      emailAddress
    } = customer;
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return emailAddress;
    }
  }
}
AccountLinkComponent.ɵfac = function AccountLinkComponent_Factory(t) {
  return new (t || AccountLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService));
};
AccountLinkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AccountLinkComponent,
  selectors: [["vsf-account-link"]],
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], ["notLoggedIn", ""], [1, "btn", "btn-light", "text-muted", 3, "routerLink"], ["icon", "user-circle"], [1, "d-none", "d-sm-inline", "ml-1"]],
  template: function AccountLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AccountLinkComponent_div_0_Template, 5, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountLinkComponent_ng_template_2_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.activeCustomer$))("ngIfElse", _r1);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 77931:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/asset-gallery/asset-gallery.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetGalleryComponent": () => (/* binding */ AssetGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe/lightbox */ 14350);
/* harmony import */ var _types_d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.d */ 99127);
/* harmony import */ var _types_d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types_d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/asset-preview.pipe */ 55280);







const _c0 = ["mainPreview"];
function AssetGalleryComponent_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetGalleryComponent_img_0_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openImage(ctx_r3.selectedAsset == null ? null : ctx_r3.selectedAsset.id));
    })("load", function AssetGalleryComponent_img_0_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "assetPreview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, ctx_r0.selectedAsset, 540), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function AssetGalleryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 4);
  }
}
function AssetGalleryComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetGalleryComponent_div_2_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const asset_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.selectImage(asset_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "assetPreview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const asset_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, asset_r7, "thumb"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function AssetGalleryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetGalleryComponent_div_2_div_1_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.assets);
  }
}
class AssetGalleryComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.assets = [];
    this.featuredAssetLoaded = false;
  }
  ngOnInit() {
    this.selectImage(this.selectedAssetId);
  }
  ngOnChanges() {
    if (this.assets) {
      this.initPhotoswipe();
      this.selectImage(this.selectedAssetId);
    }
  }
  ngAfterViewInit() {
    if (this.assets) {
      this.initPhotoswipe();
    }
  }
  onLoad() {
    console.log(`loaded`);
    this.featuredAssetLoaded = true;
  }
  initPhotoswipe() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      const items = this.assets?.map(asset => ({
        src: asset.preview,
        msrc: asset.preview + '?preset=medium',
        width: asset.width || 1000,
        height: asset.height || 1000
      }));
      this.gallery = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"]({
        dataSource: items,
        pswpModule: () => __webpack_require__.e(/*! import() */ "node_modules_photoswipe_dist_photoswipe_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! photoswipe */ 87448)),
        showHideOpacity: true
      });
      this.gallery.init();
    }
  }
  selectImage(assetId) {
    if (assetId != null) {
      this.selectedAsset = this.assets?.find(a => a.id === assetId);
    } else {
      this.selectedAsset = this.assets?.[0];
    }
  }
  openImage(assetId) {
    if (!this.assets) {
      return;
    }
    const index = this.assets.findIndex(a => a.id === assetId);
    this.gallery.loadAndOpen(index);
  }
}
AssetGalleryComponent.ɵfac = function AssetGalleryComponent_Factory(t) {
  return new (t || AssetGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
};
AssetGalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AssetGalleryComponent,
  selectors: [["vsf-asset-gallery"]],
  viewQuery: function AssetGalleryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.featuredAssetLoaded = _t.first);
    }
  },
  inputs: {
    assets: "assets",
    selectedAssetId: "selectedAssetId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 3,
  consts: [["alt", "", "class", "w-full h-full object-center object-cover rounded-lg cursor-zoom-in", 3, "src", "click", "load", 4, "ngIf"], ["class", "rounded-lg bg-gray-200 animate-pulse aspect-video w-full", 4, "ngIf"], ["class", "flex flex-wrap space-x-2 mt-2", 4, "ngIf"], ["alt", "", 1, "w-full", "h-full", "object-center", "object-cover", "rounded-lg", "cursor-zoom-in", 3, "src", "click", "load"], [1, "rounded-lg", "bg-gray-200", "animate-pulse", "aspect-video", "w-full"], [1, "flex", "flex-wrap", "space-x-2", "mt-2"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "rounded-lg", "select-none", "h-24", "w-full", "object-cover", 3, "src"]],
  template: function AssetGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AssetGalleryComponent_img_0_Template, 2, 4, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetGalleryComponent_div_1_Template, 1, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetGalleryComponent_div_2_Template, 2, 1, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedAsset);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedAsset || !ctx.featuredAssetLoaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 < (ctx.assets == null ? null : ctx.assets.length));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_2__.AssetPreviewPipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NldC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Fzc2V0LWdhbGxlcnkvYXNzZXQtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 99127:
/*!**********************************************************!*\
  !*** ./src/app/core/components/asset-gallery/types.d.ts ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ 6664:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/cart-drawer/cart-drawer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDrawerComponent": () => (/* binding */ CartDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _cart_drawer_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-drawer.graphql */ 69778);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _providers_active_active_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/active/active.service */ 44378);
/* harmony import */ var _providers_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/notification/notification.service */ 44497);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/cart-contents/cart-contents.component */ 58593);
/* harmony import */ var _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/format-price.pipe */ 84234);














const _c0 = ["overlay"];
function CartDrawerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "vsf-cart-contents", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setQuantity", function CartDrawerComponent_div_14_Template_vsf_cart_contents_setQuantity_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.setQuantity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cart", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r1.cart$))("canAdjustQuantities", true);
  }
}
function CartDrawerComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Your cart is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return ["/checkout"];
};
function CartDrawerComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "formatPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Shipping will be calculated at checkout. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 22)(10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CartDrawerComponent_div_18_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.close.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cart_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 2, cart_r7.subTotalWithTax), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
  }
}
const _c2 = function (a0, a1) {
  return {
    "translate-x-full": a0,
    "translate-x-0": a1
  };
};
class CartDrawerComponent {
  constructor(dataService, stateService, activeService, notificationService) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.activeService = activeService;
    this.notificationService = notificationService;
    this.visible = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  ngOnInit() {
    this.cart$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.stateService.select(state => state.activeOrderId), this.stateService.select(state => state.signedIn)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.activeService.activeOrder$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    this.isEmpty$ = this.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(cart => !cart || cart.lines.length === 0));
  }
  setQuantity(event) {
    if (0 < event.quantity) {
      this.adjustItemQuantity(event.itemId, event.quantity);
    } else {
      this.removeItem(event.itemId);
    }
  }
  overlayClick(event) {
    if (event.target === this.overlayRef.nativeElement) {
      this.close.emit();
    }
  }
  adjustItemQuantity(id, qty) {
    this.dataService.mutate(_cart_drawer_graphql__WEBPACK_IMPORTED_MODULE_0__.ADJUST_ITEM_QUANTITY, {
      id,
      qty
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(({
      adjustOrderLine
    }) => {
      switch (adjustOrderLine.__typename) {
        case 'Order':
          break;
        case 'InsufficientStockError':
        case 'NegativeQuantityError':
        case 'OrderLimitError':
        case 'OrderModificationError':
          this.notificationService.error(adjustOrderLine.message).subscribe();
          break;
      }
    });
  }
  removeItem(id) {
    this.dataService.mutate(_cart_drawer_graphql__WEBPACK_IMPORTED_MODULE_0__.REMOVE_ITEM_FROM_CART, {
      id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe();
  }
}
CartDrawerComponent.ɵfac = function CartDrawerComponent_Factory(t) {
  return new (t || CartDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_providers_active_active_service__WEBPACK_IMPORTED_MODULE_3__.ActiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_providers_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService));
};
CartDrawerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CartDrawerComponent,
  selectors: [["vsf-cart-drawer"]],
  viewQuery: function CartDrawerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.overlayRef = _t.first);
    }
  },
  inputs: {
    visible: "visible"
  },
  outputs: {
    close: "close"
  },
  decls: 20,
  vars: 13,
  consts: [["aria-labelledby", "slide-over-title", "role", "dialog", "aria-modal", "true", 1, "relative", "z-10"], [1, "fixed", "inset-0", "bg-gray-500", "bg-opacity-75", "transition-opacity", "ease-in-out", "duration-500", 3, "ngClass"], [1, "fixed", "inset-0", "overflow-hidden", "overlay-container", 3, "ngClass"], [1, "absolute", "inset-0", "overflow-hidden", 3, "click"], ["overlay", ""], [1, "pointer-events-none", "fixed", "inset-y-0", "right-0", "flex", "max-w-full", "pl-10"], [1, "pointer-events-auto", "w-screen", "max-w-md", "transform", "transition", "ease-in-out", "duration-300", 3, "ngClass"], [1, "flex", "h-full", "flex-col", "bg-white", "shadow-xl"], [1, "flex-1", "height-full", "flex", "flex-col", "overflow-y-hidden", "py-6", "px-4", "sm:px-6"], [1, "flex", "items-center", "justify-between", "px-4"], [1, "text-lg", "font-medium", "text-gray-900"], [1, "btn", 3, "click"], ["icon", "times", 1, "text-gray-400"], ["class", "mt-8 px-4 overflow-y-auto", 4, "ngIf", "ngIfElse"], ["empty", ""], ["class", "border-t border-gray-200 py-6 px-4 sm:px-6", 4, "ngIf"], [1, "mt-8", "px-4", "overflow-y-auto"], [3, "cart", "canAdjustQuantities", "setQuantity"], [1, "flex", "items-center", "justify-center", "h-48", "text-xl", "text-gray-400"], [1, "border-t", "border-gray-200", "py-6", "px-4", "sm:px-6"], [1, "flex", "justify-between", "text-base", "font-medium", "text-gray-900"], [1, "mt-0.5", "text-sm", "text-gray-500"], [1, "mt-6"], [1, "btn-primary", "flex", "w-full", 3, "routerLink", "click"]],
  template: function CartDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CartDrawerComponent_Template_div_click_3_listener($event) {
        return ctx.overlayClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Shopping Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CartDrawerComponent_Template_button_click_12_listener() {
        return ctx.close.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, CartDrawerComponent_div_14_Template, 3, 4, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CartDrawerComponent_ng_template_16_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CartDrawerComponent_div_18_Template, 12, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.visible ? "visible opacity-100" : "invisible opacity-0");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.visible ? "visible" : "invisible");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c2, !ctx.visible, ctx.visible));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 6, ctx.isEmpty$))("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 8, ctx.cart$));
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_5__.CartContentsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_6__.FormatPricePipe],
  styles: [".overlay-container.invisible[_ngcontent-%COMP%] {\n  transition: visibility 0s 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksOEJBQUE7QUFGUiIsImZpbGUiOiJjYXJ0LWRyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICAmLmludmlzaWJsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhcnQtZHJhd2VyL2NhcnQtZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksOEJBQUE7QUFGUjtBQUNBLG9hQUFvYSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICAmLmludmlzaWJsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 69778:
/*!********************************************************************!*\
  !*** ./src/app/core/components/cart-drawer/cart-drawer.graphql.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADJUST_ITEM_QUANTITY": () => (/* binding */ ADJUST_ITEM_QUANTITY),
/* harmony export */   "REMOVE_ITEM_FROM_CART": () => (/* binding */ REMOVE_ITEM_FROM_CART)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const ADJUST_ITEM_QUANTITY = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation AdjustItemQuantity($id: ID!, $qty: Int!) {
        adjustOrderLine(orderLineId: $id, quantity: $qty){
            ...Cart
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;
const REMOVE_ITEM_FROM_CART = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation RemoveItemFromCart($id: ID!) {
        removeOrderLine(orderLineId: $id){
            ...Cart
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 16088:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/cart-toggle/cart-toggle.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartToggleComponent": () => (/* binding */ CartToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 49727);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var _cart_toggle_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-toggle.graphql */ 99040);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);









function CartToggleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartToggleComponent_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggle.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("empty", cart_r1.quantity === 0)("cart-changed", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, ctx_r0.cartChangeIndication$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cart_r1.quantity);
  }
}
class CartToggleComponent {
  constructor(dataService, stateService) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {
    this.cart$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.stateService.select(state => state.activeOrderId), this.stateService.select(state => state.signedIn)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.dataService.query(_cart_toggle_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_CART_TOTALS, {}, 'network-only')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({
      activeOrder
    }) => {
      return {
        total: activeOrder ? activeOrder.totalWithTax : 0,
        quantity: activeOrder ? activeOrder.totalQuantity : 0
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
    this.cartChangeIndication$ = this.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(cart => cart.quantity), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.zip)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)([true, false]), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(0, 1000), val => val)));
  }
}
CartToggleComponent.ɵfac = function CartToggleComponent_Factory(t) {
  return new (t || CartToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService));
};
CartToggleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CartToggleComponent,
  selectors: [["vsf-cart-toggle"]],
  outputs: {
    toggle: "toggle"
  },
  decls: 2,
  vars: 3,
  consts: [["class", "mr-4", 4, "ngIf"], [1, "mr-4"], ["title", "cart", 1, "text-white", "relative", "hover:text-primary-100", 3, "click"], ["icon", "shopping-cart", 1, "mr-1"], [1, "absolute", "-top-2", "-right-4", "bg-primary-600", "rounded-full", "w-5", "h-5", "flex", "items-center", "justify-center", "text-xs"]],
  template: function CartToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CartToggleComponent_div_0_Template, 6, 7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.cart$));
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXRvZ2dsZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhcnQtdG9nZ2xlL2NhcnQtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 99040:
/*!********************************************************************!*\
  !*** ./src/app/core/components/cart-toggle/cart-toggle.graphql.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_CART_TOTALS": () => (/* binding */ GET_CART_TOTALS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const GET_CART_TOTALS = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCartTotals {
        activeOrder {
            id
            active
            totalQuantity
            totalWithTax
        }
    }
`;

/***/ }),

/***/ 71180:
/*!********************************************************************************************!*\
  !*** ./src/app/core/components/collection-breadcrumbs/collection-breadcrumbs.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionBreadcrumbsComponent": () => (/* binding */ CollectionBreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);




function CollectionBreadcrumbsComponent_ng_container_8_li_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const breadcrumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r4.name);
  }
}
const _c0 = function (a1) {
  return ["/category", a1];
};
function CollectionBreadcrumbsComponent_ng_container_8_li_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const breadcrumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, breadcrumb_r4.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r4.name);
  }
}
function CollectionBreadcrumbsComponent_ng_container_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CollectionBreadcrumbsComponent_ng_container_8_li_1_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CollectionBreadcrumbsComponent_ng_container_8_li_1_ng_template_6_Template, 2, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const isLast_r5 = ctx.last;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r5 && !ctx_r3.linkLast)("ngIfElse", _r8);
  }
}
function CollectionBreadcrumbsComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionBreadcrumbsComponent_ng_container_8_li_1_Template, 8, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tail(ctx_r0.breadcrumbs));
  }
}
function CollectionBreadcrumbsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 14);
  }
}
const _c1 = function () {
  return ["/"];
};
class CollectionBreadcrumbsComponent {
  constructor() {
    this.breadcrumbs = [];
    this.linkLast = false;
  }
  tail(arr) {
    return arr ? arr.slice(1) : [];
  }
}
CollectionBreadcrumbsComponent.ɵfac = function CollectionBreadcrumbsComponent_Factory(t) {
  return new (t || CollectionBreadcrumbsComponent)();
};
CollectionBreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CollectionBreadcrumbsComponent,
  selectors: [["vsf-collection-breadcrumbs"]],
  inputs: {
    breadcrumbs: "breadcrumbs",
    linkLast: "linkLast"
  },
  decls: 11,
  vars: 4,
  consts: [["aria-label", "Breadcrumb", 1, "flex"], ["role", "list", 1, "flex", "items-center", "space-x-1", "md:space-x-4"], [1, "text-gray-400", "hover:text-gray-500", 3, "routerLink"], ["icon", "home", "aria-hidden", "true", 1, "mr-2"], [1, "sr-only"], [4, "ngIf", "ngIfElse"], ["placeholder", ""], [4, "ngFor", "ngForOf"], [1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 20 20", "aria-hidden", "true", 1, "flex-shrink-0", "h-5", "w-5", "text-gray-300"], ["d", "M5.555 17.776l8-16 .894.448-8 16-.894-.448z"], [1, "ml-2", "md:ml-4", "text-xs", "md:text-sm", "font-medium", "text-gray-500", "hover:text-gray-700"], ["link", ""], [3, "routerLink"], [1, "h-6", "rounded", "bg-gray-200", "animate-pulse", "w-64"]],
  template: function CollectionBreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1)(2, "li")(3, "div")(4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CollectionBreadcrumbsComponent_ng_container_8_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CollectionBreadcrumbsComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breadcrumbs)("ngIfElse", _r1);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0aW9uLWJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbGxlY3Rpb24tYnJlYWRjcnVtYnMvY29sbGVjdGlvbi1icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0xBQXdMIiwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 17906:
/*!**********************************************************************************************!*\
  !*** ./src/app/core/components/collections-menu-mobile/collections-menu-mobile.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionsMenuMobileComponent": () => (/* binding */ CollectionsMenuMobileComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _collections_menu_array_to_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collections-menu/array-to-tree */ 51306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);









const _c0 = function (a1) {
  return ["/category", a1];
};
function CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 26)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_ul_3_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const level2_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, level2_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](level2_r10.name);
  }
}
function CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_ul_3_li_1_Template, 3, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level1_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded", ctx_r8.selected1 === level1_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", level1_r7.children);
  }
}
function CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const level1_r7 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.onL1Click($event, level1_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_ul_3_Template, 2, 3, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level1_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](level1_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", level1_r7.children.length);
  }
}
function CollectionsMenuMobileComponent_ul_14_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionsMenuMobileComponent_ul_14_li_1_ul_3_li_1_Template, 4, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.selected0 === collection_r4.id ? "block" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", collection_r4.children);
  }
}
function CollectionsMenuMobileComponent_ul_14_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CollectionsMenuMobileComponent_ul_14_li_1_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const collection_r4 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.onL0Click($event, collection_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CollectionsMenuMobileComponent_ul_14_li_1_ul_3_Template, 2, 2, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](collection_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", collection_r4.children.length);
  }
}
function CollectionsMenuMobileComponent_ul_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionsMenuMobileComponent_ul_14_li_1_Template, 4, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tree_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", tree_r2.children);
  }
}
const _c1 = function (a0, a1) {
  return {
    "-translate-x-full": a0,
    "translate-x-0": a1
  };
};
const _c2 = function () {
  return ["/"];
};
class CollectionsMenuMobileComponent {
  constructor(router, stateService, dataService) {
    this.router = router;
    this.stateService = stateService;
    this.dataService = dataService;
    this.visible = false;
    this.selected0 = null;
    this.selected1 = null;
  }
  ngOnInit() {
    this.collectionTree$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_COLLECTIONS, {
      options: {
        take: 50
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => (0,_collections_menu_array_to_tree__WEBPACK_IMPORTED_MODULE_1__.arrayToTree)(data.collections.items)));
  }
  onL0Click(event, collection) {
    this.expandOrNavigate(0, event, collection);
  }
  onL1Click(event, collection) {
    this.expandOrNavigate(1, event, collection);
  }
  close() {
    this.stateService.setState('mobileNavMenuIsOpen', false);
  }
  expandOrNavigate(level, event, collection) {
    if (collection.children.length && this.selected1 !== collection.id) {
      if (level === 0) {
        this.selected0 = collection.id;
        this.selected1 = null;
      } else {
        this.selected1 = collection.id;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
    } else {
      this.router.navigate(['/category/', collection.slug]);
      this.close();
    }
  }
}
CollectionsMenuMobileComponent.ɵfac = function CollectionsMenuMobileComponent_Factory(t) {
  return new (t || CollectionsMenuMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService));
};
CollectionsMenuMobileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CollectionsMenuMobileComponent,
  selectors: [["vsf-collections-menu-mobile"]],
  hostVars: 2,
  hostBindings: function CollectionsMenuMobileComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("visible", ctx.visible);
    }
  },
  inputs: {
    visible: "visible"
  },
  decls: 16,
  vars: 11,
  consts: [["aria-labelledby", "slide-over-title", "role", "dialog", "aria-modal", "true", 1, "relative", "z-10"], [1, "fixed", "inset-0", "bg-gray-500", "bg-opacity-75", "transition-opacity", "ease-in-out", "duration-500", 3, "ngClass"], [1, "fixed", "inset-0", "overflow-hidden", "overlay-container", 3, "ngClass"], [1, "absolute", "inset-0", "overflow-hidden"], ["overlay", ""], [1, "pointer-events-none", "fixed", "inset-y-0", "left-0", "flex", "max-w-full"], [1, "pointer-events-auto", "w-screen", "transform", "transition", "ease-in-out", "duration-300", 3, "ngClass"], [1, "flex", "h-full", "flex-col", "bg-white", "shadow-xl"], [1, "flex-1", "height-full", "flex", "flex-col", "overflow-y-hidden", "py-6", "px-4", "sm:px-6"], [1, "flex", "items-center", "justify-between", "px-4"], [1, "logo-link", "ml-3", "mb-3", 3, "routerLink", "click"], ["src", "assets/cube-logo-small.webp", "alt", "Vendure Storefront", 1, "logo"], [1, "btn", 3, "click"], ["icon", "times", 1, "text-gray-400"], ["class", "", 4, "ngIf"], [1, ""], ["class", "", 4, "ngFor", "ngForOf"], [1, "block", "cursor-pointer", "w-full", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "group", "items-center", "px-3", "py-2", "font-medium", "rounded-md", 3, "click"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "level1", 4, "ngFor", "ngForOf"], [1, "level1"], [1, "block", "cursor-pointer", "w-full", "pl-8", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "group", "items-center", "px-3", "py-2", "font-medium", "rounded-md", 3, "click"], ["class", "expandable", 3, "expanded", 4, "ngIf"], [1, "expandable"], ["class", "level2", 4, "ngFor", "ngForOf"], [1, "level2"], [1, "", 3, "routerLink", "click"]],
  template: function CollectionsMenuMobileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3, 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CollectionsMenuMobileComponent_Template_a_click_10_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CollectionsMenuMobileComponent_Template_button_click_12_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "fa-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CollectionsMenuMobileComponent_ul_14_Template, 2, 1, "ul", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.visible ? "visible opacity-100" : "invisible opacity-0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.visible ? "visible" : "invisible");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c1, !ctx.visible, ctx.visible));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 5, ctx.collectionTree$));
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: fixed;\n  height: 100vh;\n  width: calc(100vw - 3rem);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transform: translateX(-102vw) translateX(3rem);\n  transition: transform 0.3s;\n  overflow: auto;\n}\n.visible[_nghost-%COMP%] {\n  transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zLW1lbnUtbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0ksd0JBQUE7QUFEUiIsImZpbGUiOiJjb2xsZWN0aW9ucy1tZW51LW1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMnZ3KSB0cmFuc2xhdGVYKDNyZW0pO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgJi52aXNpYmxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbGxlY3Rpb25zLW1lbnUtbW9iaWxlL2NvbGxlY3Rpb25zLW1lbnUtbW9iaWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0ksd0JBQUE7QUFEUjtBQUNBLG8vQkFBby9CIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gM3JlbSk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAydncpIHRyYW5zbGF0ZVgoM3JlbSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 51306:
/*!*******************************************************************!*\
  !*** ./src/app/core/components/collections-menu/array-to-tree.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayToTree": () => (/* binding */ arrayToTree)
/* harmony export */ });
/**
 * Builds a tree from an array of nodes which have a parent.
 * Based on https://stackoverflow.com/a/31247960/772859, modified to preserve ordering.
 */
function arrayToTree(nodes) {
  const topLevelNodes = [];
  const mappedArr = {};
  // First map the nodes of the array to an object -> create a hash table.
  for (const node of nodes) {
    mappedArr[node.id] = {
      ...node,
      children: []
    };
  }
  for (const id of nodes.map(n => n.id)) {
    if (mappedArr.hasOwnProperty(id)) {
      const mappedElem = mappedArr[id];
      const parent = mappedElem.parent;
      if (!parent) {
        continue;
      }
      // If the element is not at the root level, add it to its parent array of children.
      const parentIsRoot = !mappedArr[parent.id];
      if (!parentIsRoot) {
        if (mappedArr[parent.id]) {
          mappedArr[parent.id].children.push(mappedElem);
        } else {
          mappedArr[parent.id] = {
            children: [mappedElem]
          };
        }
      } else {
        topLevelNodes.push(mappedElem);
      }
    }
  }
  const rootId = topLevelNodes.length ? topLevelNodes[0].parent.id : undefined;
  return {
    id: rootId,
    children: topLevelNodes
  };
}

/***/ }),

/***/ 14600:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/collections-menu/collections-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionsMenuComponent": () => (/* binding */ CollectionsMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 12778);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ 12035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _array_to_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-to-tree */ 51306);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/collection-card/collection-card.component */ 54468);














const _c0 = ["menuTemplate"];
const _c1 = function (a1) {
  return ["/category", a1];
};
function CollectionsMenuComponent_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function CollectionsMenuComponent_ul_1_li_1_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const collection_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onMouseEnter(collection_r5));
    })("mouseleave", function CollectionsMenuComponent_ul_1_li_1_Template_li_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("touchstart", function CollectionsMenuComponent_ul_1_li_1_Template_a_touchstart_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const collection_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.onTopLevelClick($event, collection_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const collection_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, ctx_r4.setActiveCollection$)) == null ? null : tmp_0_0.id) === collection_r5.id && ctx_r4.overlayIsOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, collection_r5.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](collection_r5.name);
  }
}
function CollectionsMenuComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionsMenuComponent_ul_1_li_1_Template, 5, 10, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tree_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", tree_r3.children);
  }
}
function CollectionsMenuComponent_ng_template_3_div_0_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CollectionsMenuComponent_ng_template_3_div_0_div_2_ng_container_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const level2_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, level2_r14.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", level2_r14.name, " ");
  }
}
function CollectionsMenuComponent_ng_template_3_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "vsf-collection-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CollectionsMenuComponent_ng_template_3_div_0_div_2_ng_container_2_Template, 3, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level1_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collection", level1_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", level1_r12.children);
  }
}
function CollectionsMenuComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("touchstart", function CollectionsMenuComponent_ng_template_3_div_0_Template_div_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.captureTouchStart($event));
    })("mouseenter", function CollectionsMenuComponent_ng_template_3_div_0_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.onMouseEnter(ctx_r19.activeCollection));
    })("mouseleave", function CollectionsMenuComponent_ng_template_3_div_0_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CollectionsMenuComponent_ng_template_3_div_0_div_2_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.activeCollection.children);
  }
}
function CollectionsMenuComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CollectionsMenuComponent_ng_template_3_div_0_Template, 3, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeCollection == null ? null : ctx_r2.activeCollection.children == null ? null : ctx_r2.activeCollection.children.length);
  }
}
class CollectionsMenuComponent {
  constructor(document, dataService, overlay, viewContainerRef) {
    this.document = document;
    this.dataService = dataService;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.closeFn = null;
    this.overlayIsOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.setActiveCollection$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.registerDocumentTouchHandler = () => {
      const handler = () => {
        this.closeOverlay();
        this.document.removeEventListener('touchstart', handler);
      };
      this.document.addEventListener('touchstart', handler);
    };
  }
  ngOnInit() {
    this.collectionTree$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_COLLECTIONS, {
      options: {
        take: 50
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => (0,_array_to_tree__WEBPACK_IMPORTED_MODULE_1__.arrayToTree)(data.collections.items)));
    this.overlayIsOpen$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(val => {
      if (val) {
        this.openOverlay();
      } else {
        this.closeOverlay();
      }
    });
    this.setActiveCollection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(val => {
      this.activeCollection = val;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onTopLevelClick(event, collection) {
    if (collection.children.length) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.onMouseEnter(collection);
      this.registerDocumentTouchHandler();
    } else {
      this.closeOverlay();
    }
  }
  captureTouchStart(event) {
    event.stopPropagation();
  }
  onMouseEnter(collection) {
    // this.setActiveCollection$.next(collection);
    // this.overlayIsOpen$.next(true);
    // TODO: re-enable this
  }
  close(event) {
    this.overlayIsOpen$.next(false);
  }
  openOverlay() {
    if (this.closeFn) {
      return;
    }
    const positionStrategy = this.overlay.position().flexibleConnectedTo(this.viewContainerRef.element).withPositions([{
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }]).withPush(false);
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const overlayRef = this.overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayConfig({
      scrollStrategy,
      positionStrategy,
      minWidth: '100vw',
      maxHeight: 500
    }));
    this.closeFn = () => {
      overlayRef.dispose();
      this.closeFn = null;
    };
    const dropdown = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.TemplatePortal(this.menuTemplate, this.viewContainerRef));
  }
  closeOverlay() {
    if (typeof this.closeFn === 'function') {
      this.closeFn();
    }
  }
}
CollectionsMenuComponent.ɵfac = function CollectionsMenuComponent_Factory(t) {
  return new (t || CollectionsMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef));
};
CollectionsMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CollectionsMenuComponent,
  selectors: [["vsf-collections-menu"]],
  viewQuery: function CollectionsMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menuTemplate = _t.first);
    }
  },
  decls: 5,
  vars: 3,
  consts: [[1, "max-w-6xl", "mx-auto", "p-4", "flex", "items-center"], ["class", "flex space-x-4", 4, "ngIf"], ["menuTemplate", ""], [1, "flex", "space-x-4"], ["class", "nav-item", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "mouseenter", "mouseleave"], [1, "nav-link", 3, "routerLink", "touchstart"], ["class", "collections-menu-sub-collections", 3, "touchstart", "mouseenter", "mouseleave", 4, "ngIf"], [1, "collections-menu-sub-collections", 3, "touchstart", "mouseenter", "mouseleave"], [1, "container", "d-flex", "flex-wrap"], ["class", "level-1-block", 4, "ngFor", "ngForOf"], [1, "level-1-block"], [3, "collection"], [4, "ngFor", "ngForOf"], [1, "level-2-link", 3, "routerLink", "click"]],
  template: function CollectionsMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionsMenuComponent_ul_1_Template, 2, 1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CollectionsMenuComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.collectionTree$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _shared_components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_3__.CollectionCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 14222:
/*!******************************************************************!*\
  !*** ./src/app/core/components/home-page/home-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/collection-card/collection-card.component */ 54468);







function HomePageComponent_vsf_collection_card_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "vsf-collection-card", 16);
  }
  if (rf & 2) {
    const collection_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collection", collection_r1);
  }
}
class HomePageComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.collections$ = this.dataService.query(GET_COLLECTIONS, {
      options: {
        take: 50
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      collections
    }) => collections.items));
    this.heroImage = this.getHeroImageUrl();
  }
  getHeroImageUrl() {
    const {
      apiHost,
      apiPort
    } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    return `${apiHost}:${apiPort}/assets/preview/a2/thomas-serer-420833-unsplash__preview.jpg`;
  }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService));
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["vsf-home-page"]],
  decls: 27,
  vars: 4,
  consts: [[1, "relative"], ["aria-hidden", "true", 1, "absolute", "inset-0", "overflow-hidden"], ["alt", "header", 1, "absolute", "inset-0", "w-full", "object-cover", "h-full", 3, "src"], ["aria-hidden", "true", 1, "absolute", "inset-0", "bg-gray-900", "opacity-80"], [1, "relative", "max-w-3xl", "mx-auto", "py-16", "px-6", "flex", "flex-col", "items-center", "text-center", "sm:pt-72", "sm:pb-72", "lg:px-0"], [1, "relative", "bg-zinc-800", "bg-opacity-0", "rounded-lg", "p-0"], [1, "text-6xl", "text-transparent", "bg-clip-text", "font-extrabold", "tracking-normal", "lg:text-6xl", "bg-gradient-to-r", "from-white", "to-gray-200"], [1, "text-[#aa2d2f]", "glow"], [1, "mt-4", "text-2xl", "text-white"], [1, "whitespace-nowrap"], ["href", "https://www.vendure.io", 1, "text-blue-300", "hover:text-blue-500"], ["href", "https://angular.io/", 1, "text-red-700", "hover:text-red-500"], [1, "max-w-6xl", "mx-auto", "px-4", "pt-12"], [1, "box-content", "py-2", "px-2", "relative", "overflow-x-auto", "xl:overflow-visible"], [1, "grid", "justify-items-center", "grid-cols-2", "md:grid-cols-3", "gap-y-8", "gap-x-8", "sm:px-6", "lg:px-8", "xl:relative", "xl:px-0", "xl:space-x-0", "xl:gap-x-8"], [3, "collection", 4, "ngFor", "ngForOf"], [3, "collection"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Vendure ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Starter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "A headless commerce ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "starter kit built with");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p")(17, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Vendure");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " & ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12)(23, "div", 13)(24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, HomePageComponent_vsf_collection_card_25_Template, 1, 1, "vsf-collection-card", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.heroImage + "?w=800&format=webp", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 2, ctx.collections$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_2__.CollectionCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".glow[_ngcontent-%COMP%] {\n  text-shadow: 0 0 7px rgba(255, 67, 67, 0.6), 0 0 13px rgba(30, 9, 9, 0.56);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdsb3cge1xuICAgIHRleHQtc2hhZG93OiAwIDAgN3B4IHJnYigyNTUgNjcgNjcgLyA2MCUpLCAwIDAgMTNweCByZ2IoMzAgOSA5IC8gNTYlKVxufVxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtBQUNKO0FBQ0Esd1hBQXdYIiwic291cmNlc0NvbnRlbnQiOlsiLmdsb3cge1xuICAgIHRleHQtc2hhZG93OiAwIDAgN3B4IHJnYigyNTUgNjcgNjcgLyA2MCUpLCAwIDAgMTNweCByZ2IoMzAgOSA5IC8gNTYlKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

const GET_COLLECTIONS = apollo_angular__WEBPACK_IMPORTED_MODULE_6__.gql`
    query GetCollections($options: CollectionListOptions) {
        collections(options: $options) {
            items {
                id
                name
                slug
                parent {
                    id
                    slug
                    name
                }
                featuredAsset {
                    id
                    preview
                }
            }
        }
    }
`;

/***/ }),

/***/ 68241:
/*!*******************************************************************!*\
  !*** ./src/app/core/components/layout/layout-footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutFooterComponent": () => (/* binding */ LayoutFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

const _c0 = ["*"];
class LayoutFooterComponent {}
LayoutFooterComponent.ɵfac = function LayoutFooterComponent_Factory(t) {
  return new (t || LayoutFooterComponent)();
};
LayoutFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LayoutFooterComponent,
  selectors: [["vsf-layout-footer"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function LayoutFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 56731:
/*!*******************************************************************!*\
  !*** ./src/app/core/components/layout/layout-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutHeaderComponent": () => (/* binding */ LayoutHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 64514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59151);





const _c0 = ["floatingContainer"];
const _c1 = ["*"];
class LayoutHeaderComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.floating = false;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      this.setUpScrollHandler(window);
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  setUpScrollHandler(_window) {
    this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(_window, 'scroll', {
      passive: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => _window.scrollY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.bufferTime)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(val => 1 < val.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(val => val[val.length - 1] - val[0])).subscribe(val => {
      if (_window.scrollY === 0) {
        this.setFloating(false);
      } else if (0 < val) {
        this.setFloating(false);
      } else if (val < -50 && 300 < _window.scrollY) {
        this.setFloating(true);
      }
    });
  }
  setFloating(isFloating) {
    this.floating = isFloating;
    this.headerHeight = this.floatingContainer.nativeElement.offsetHeight;
  }
}
LayoutHeaderComponent.ɵfac = function LayoutHeaderComponent_Factory(t) {
  return new (t || LayoutHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
};
LayoutHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LayoutHeaderComponent,
  selectors: [["vsf-layout-header"]],
  viewQuery: function LayoutHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.floatingContainer = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function LayoutHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.headerHeight, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("floating", ctx.floating);
    }
  },
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [[1, "floating-container"], ["floatingContainer", ""]],
  template: function LayoutHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .floating-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.floating[_nghost-%COMP%]   .floating-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  right: 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFHUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFEWjs7QUFNQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0VBSE47RUFLRTtJQUNJLHdCQUFBO0lBQ0EsVUFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIC5mbG9hdGluZy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgJi5mbG9hdGluZyB7XG4gICAgICAgIC5mbG9hdGluZy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2xheW91dC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBR1E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBRFo7O0FBTUE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsVUFBQTtFQUhOO0VBS0U7SUFDSSx3QkFBQTtJQUNBLFVBQUE7RUFITjtBQUNGO0FBQ0Esb3BDQUFvcEMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuZmxvYXRpbmctY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICYuZmxvYXRpbmcge1xuICAgICAgICAuZmxvYXRpbmctY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 69358:
/*!************************************************************!*\
  !*** ./src/app/core/components/layout/layout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

const _c0 = [[["vsf-layout-header"]], "*", [["vsf-layout-footer"]]];
const _c1 = ["vsf-layout-header", "*", "vsf-layout-footer"];
class LayoutComponent {}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["vsf-layout"]],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 0,
  consts: [[1, "header"], [1, "content"], [1, "footer"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 22449:
/*!************************************************************************************!*\
  !*** ./src/app/core/components/mobile-menu-toggle/mobile-menu-toggle.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileMenuToggleComponent": () => (/* binding */ MobileMenuToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);



class MobileMenuToggleComponent {
  constructor(stateService) {
    this.stateService = stateService;
  }
  toggle() {
    this.stateService.setState('mobileNavMenuIsOpen', true);
  }
}
MobileMenuToggleComponent.ɵfac = function MobileMenuToggleComponent_Factory(t) {
  return new (t || MobileMenuToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService));
};
MobileMenuToggleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MobileMenuToggleComponent,
  selectors: [["vsf-mobile-menu-toggle"]],
  decls: 2,
  vars: 0,
  consts: [[1, "border", "border-gray-600", "rounded", "bg-gray-600", "text-white", "px-2", "py-1", 3, "click"], ["icon", "bars"]],
  template: function MobileMenuToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileMenuToggleComponent_Template_button_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 18104:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/modal-dialog/dialog-buttons.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogButtonsDirective": () => (/* binding */ DialogButtonsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-dialog.component */ 19406);


/**
 * A helper directive used to correctly embed the modal buttons in the {@link ModalDialogComponent}.
 */
class DialogButtonsDirective {
  constructor(modal, templateRef) {
    this.modal = modal;
    this.templateRef = templateRef;
  }
  ngOnInit() {
    this.modal.registerButtonsTemplate(this.templateRef);
  }
}
DialogButtonsDirective.ɵfac = function DialogButtonsDirective_Factory(t) {
  return new (t || DialogButtonsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ModalDialogComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};
DialogButtonsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DialogButtonsDirective,
  selectors: [["", "vsfDialogButtons", ""]]
});


/***/ }),

/***/ 16046:
/*!***********************************************************************************!*\
  !*** ./src/app/core/components/modal-dialog/dialog-component-outlet.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponentOutletComponent": () => (/* binding */ DialogComponentOutletComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);


/**
 * A helper component used to embed a component instance into the {@link ModalDialogComponent}
 */
class DialogComponentOutletComponent {
  constructor(viewContainerRef, componentFactoryResolver) {
    this.viewContainerRef = viewContainerRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const componentRef = this.viewContainerRef.createComponent(factory);
    this.create.emit(componentRef.instance);
  }
}
DialogComponentOutletComponent.ɵfac = function DialogComponentOutletComponent_Factory(t) {
  return new (t || DialogComponentOutletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver));
};
DialogComponentOutletComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DialogComponentOutletComponent,
  selectors: [["vsf-dialog-component-outlet"]],
  inputs: {
    component: "component"
  },
  outputs: {
    create: "create"
  },
  decls: 0,
  vars: 0,
  template: function DialogComponentOutletComponent_Template(rf, ctx) {},
  encapsulation: 2
});


/***/ }),

/***/ 14915:
/*!************************************************************************!*\
  !*** ./src/app/core/components/modal-dialog/dialog-title.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogTitleDirective": () => (/* binding */ DialogTitleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-dialog.component */ 19406);


/**
 * A helper directive used to correctly embed the modal title in the {@link ModalDialogComponent}.
 */
class DialogTitleDirective {
  constructor(modal, templateRef) {
    this.modal = modal;
    this.templateRef = templateRef;
  }
  ngOnInit() {
    this.modal.registerTitleTemplate(this.templateRef);
  }
}
DialogTitleDirective.ɵfac = function DialogTitleDirective_Factory(t) {
  return new (t || DialogTitleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ModalDialogComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};
DialogTitleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DialogTitleDirective,
  selectors: [["", "vsfDialogTitle", ""]]
});


/***/ }),

/***/ 19406:
/*!************************************************************************!*\
  !*** ./src/app/core/components/modal-dialog/modal-dialog.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDialogComponent": () => (/* binding */ ModalDialogComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _providers_modal_modal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/modal/modal-types */ 93959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _dialog_component_outlet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-component-outlet.component */ 16046);





function ModalDialogComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function ModalDialogComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalDialogComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ModalDialogComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
/**
 * This component should only be instatiated dynamically by the ModalService. It should not be used
 * directly in templates. See {@link ModalService.fromComponent} method for more detail.
 */
class ModalDialogComponent {
  constructor(childComponentType, options) {
    this.childComponentType = childComponentType;
    this.options = options;
    this.titleTemplateRef$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.buttonsTemplateRef$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  /**
   * This callback is invoked when the childComponentType is instantiated in the
   * template by the {@link DialogComponentOutletComponent}.
   * Once we have the instance, we can set the resolveWith function and any
   * locals which were specified in the config.
   */
  onCreate(componentInstance) {
    componentInstance.resolveWith = result => {
      this.closeModal(result);
    };
    if (this.options && this.options.locals) {
      for (const key in this.options.locals) {
        componentInstance[key] = this.options.locals[key];
      }
    }
  }
  /**
   * This should be called by the {@link DialogTitleDirective} only
   */
  registerTitleTemplate(titleTemplateRef) {
    this.titleTemplateRef$.next(titleTemplateRef);
  }
  /**
   * This should be called by the {@link DialogButtonsDirective} only
   */
  registerButtonsTemplate(buttonsTemplateRef) {
    this.buttonsTemplateRef$.next(buttonsTemplateRef);
  }
  /**
   * Called when the modal is closed by clicking the X or the mask.
   */
  modalOpenChange(status) {
    if (status === false) {
      this.closeModal();
    }
  }
}
ModalDialogComponent.ɵfac = function ModalDialogComponent_Factory(t) {
  return new (t || ModalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_modal_modal_types__WEBPACK_IMPORTED_MODULE_0__.DIALOG_COMPONENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_modal_modal_types__WEBPACK_IMPORTED_MODULE_0__.MODAL_OPTIONS));
};
ModalDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ModalDialogComponent,
  selectors: [["vsf-modal-dialog"]],
  decls: 11,
  vars: 8,
  consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [4, "ngTemplateOutlet"], ["type", "button", "class", "close", "data-dismiss", "modal", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "component", "create"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
  template: function ModalDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ModalDialogComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ModalDialogComponent_button_5_Template, 3, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "vsf-dialog-component-outlet", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function ModalDialogComponent_Template_vsf_dialog_component_outlet_create_7_listener($event) {
        return ctx.onCreate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ModalDialogComponent_ng_container_9_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.titleTemplateRef$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.options == null ? null : ctx.options.closable);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("component", ctx.childComponentType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, ctx.buttonsTemplateRef$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _dialog_component_outlet_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponentOutletComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 89819:
/*!************************************************************************!*\
  !*** ./src/app/core/components/notification/notification.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _providers_notification_notification_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/notification/notification-types */ 98338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);




function NotificationComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.options.message, " ");
  }
}
function NotificationComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function NotificationComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotificationComponent_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.options.templateRef)("ngTemplateOutletContext", ctx_r1.options.templateContext);
  }
}
class NotificationComponent {
  constructor(options) {
    this.options = options;
    this.close = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
  return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_notification_notification_types__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_OPTIONS));
};
NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NotificationComponent,
  selectors: [["vsf-notification"]],
  decls: 11,
  vars: 4,
  consts: [[1, "pointer-events-auto", "w-full", "max-w-sm", "overflow-hidden", "rounded-lg", "bg-white", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5"], [1, "p-4"], [1, "flex", "justify-between", "items-center", 3, "ngClass"], [1, "font-bold", "text-gray-600"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "ml-2", "mb-1", "close", 3, "click"], ["aria-hidden", "true"], [1, "mt-2"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_5_listener() {
        return ctx.close.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NotificationComponent_ng_container_9_Template, 2, 1, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NotificationComponent_ng_container_10_Template, 2, 2, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.options.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.options.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.templateRef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
  styles: ["[_nghost-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out forwards;\n}\n.remove[_nghost-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOut 0.2s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdDQUFBO0FBREo7QUFFSTtFQUNJLHlDQUFBO0FBQVI7O0FBSUE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQUROO0VBR0U7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUFETjtBQUNGO0FBR0E7RUFDSTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQUROO0VBR0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUFETjtBQUNGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgJi5yZW1vdmUge1xuICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3Q0FBQTtBQURKO0FBRUk7RUFDSSx5Q0FBQTtBQUFSOztBQUlBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUFETjtFQUdFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VBRE47QUFDRjtBQUdBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUFETjtFQUdFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBRE47QUFDRjtBQUNBLG9wQ0FBb3BDIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICAmLnJlbW92ZSB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 71746:
/*!************************************************************************!*\
  !*** ./src/app/core/components/product-card/product-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCardComponent": () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/pipes/format-price.pipe */ 84234);
/* harmony import */ var _shared_pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/asset-preview.pipe */ 55280);





function ProductCardComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "formatPrice");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r1.product.priceWithTax.min), " ");
  }
}
function ProductCardComponent_ng_template_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "formatPrice");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" From ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r3.product.priceWithTax.min), " ");
  }
}
const _c0 = function (a1) {
  return ["/product", a1];
};
function ProductCardComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "assetPreview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductCardComponent_ng_template_0_ng_template_7_Template, 2, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductCardComponent_ng_template_0_ng_template_8_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx_r0.product.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 5, ctx_r0.product.productAsset, 300, 400), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.product.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.product.priceWithTax.min === ctx_r0.product.priceWithTax.max)("ngIfElse", _r2);
  }
}
class ProductCardComponent {}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) {
  return new (t || ProductCardComponent)();
};
ProductCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductCardComponent,
  selectors: [["vsf-product-card"]],
  inputs: {
    product: "product"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngIf"], ["prefetch", "intent", 1, "flex", "flex-col", 3, "routerLink"], ["alt", "", 1, "rounded-xl", "flex-grow", "object-cover", "aspect-[7/8]", 3, "src"], [1, "h-2"], [1, "text-sm", "text-gray-700"], [1, "text-sm", "font-medium", "text-gray-900"], [3, "ngIf", "ngIfElse"], ["range", ""]],
  template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductCardComponent_ng_template_0_Template, 10, 11, "ng-template", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatPricePipe, _shared_pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_1__.AssetPreviewPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 2768:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/product-detail/product-detail.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 61745);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _product_detail_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.graphql */ 31903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _providers_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/notification/notification.service */ 44497);
/* harmony import */ var _providers_active_active_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/active/active.service */ 44378);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../collection-breadcrumbs/collection-breadcrumbs.component */ 71180);
/* harmony import */ var _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asset-gallery/asset-gallery.component */ 77931);
/* harmony import */ var _top_reviews_top_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../top-reviews/top-reviews.component */ 41778);
/* harmony import */ var _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/format-price.pipe */ 84234);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 75940);

















const _c0 = ["addedToCartTemplate"];
function ProductDetailComponent_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r0.product == null ? null : ctx_r0.product.name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : " ", " ");
  }
}
function ProductDetailComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r2.product == null ? null : ctx_r2.product.name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : " ", " ");
  }
}
function ProductDetailComponent_div_14_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variant_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", variant_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](variant_r11.name);
  }
}
function ProductDetailComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 30)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Select option ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_14_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.selectedVariant = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ProductDetailComponent_div_14_option_4_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r4.selectedVariant);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.product == null ? null : ctx_r4.product.variants);
  }
}
function ProductDetailComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductDetailComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r7.qtyInCart[ctx_r7.selectedVariant.id], " in cart");
  }
}
function ProductDetailComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 40)(6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_46_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const close_r16 = restoredCtx.closeFn;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.viewCartFromNotification(close_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " View cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const variant_r14 = ctx.variant;
    const quantity_r15 = ctx.quantity;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ((variant_r14.featuredAsset == null ? null : variant_r14.featuredAsset.preview) || (ctx_r9.product == null ? null : ctx_r9.product.featuredAsset == null ? null : ctx_r9.product.featuredAsset.preview)) + "?preset=tiny", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", quantity_r15, " x ", variant_r14.name, "");
  }
}
const _c1 = function (a0, a1) {
  return {
    "bg-gray-400": a0,
    "bg-primary-600 hover:bg-primary-700": a1
  };
};
class ProductDetailComponent {
  constructor(dataService, stateService, notificationService, activeService, route) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.notificationService = notificationService;
    this.activeService = activeService;
    this.route = route;
    this.qtyInCart = {};
    this.qty = 1;
    this.breadcrumbs = null;
    this.inFlight = false;
  }
  ngOnInit() {
    const lastCollectionSlug$ = this.stateService.select(state => state.lastCollectionSlug);
    const productSlug$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(paramMap => paramMap.get('slug')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined));
    this.sub = productSlug$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(slug => {
      return this.dataService.query(_product_detail_graphql__WEBPACK_IMPORTED_MODULE_1__.GET_PRODUCT_DETAIL, {
        slug
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.product), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)(lastCollectionSlug$)).subscribe(([product, lastCollectionSlug]) => {
      this.product = product;
      if (this.product.featuredAsset) {
        this.selectedAsset = this.product.featuredAsset;
      }
      this.selectedVariant = product.variants[0];
      const collection = this.getMostRelevantCollection(product.collections, lastCollectionSlug);
      this.breadcrumbs = collection ? collection.breadcrumbs : [];
    });
    this.activeService.activeOrder$.subscribe(order => {
      this.qtyInCart = {};
      for (const line of order?.lines ?? []) {
        this.qtyInCart[line.productVariant.id] = line.quantity;
      }
    });
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  addToCart(variant, qty) {
    this.inFlight = true;
    this.dataService.mutate(_product_detail_graphql__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART, {
      variantId: variant.id,
      qty
    }).subscribe(({
      addItemToOrder
    }) => {
      this.inFlight = false;
      switch (addItemToOrder.__typename) {
        case 'Order':
          this.stateService.setState('activeOrderId', addItemToOrder ? addItemToOrder.id : null);
          if (variant) {
            this.notificationService.notify({
              title: 'Added to cart',
              type: 'info',
              duration: 3000,
              templateRef: this.addToCartTemplate,
              templateContext: {
                variant,
                quantity: qty
              }
            }).subscribe();
          }
          break;
        case 'OrderModificationError':
        case 'OrderLimitError':
        case 'NegativeQuantityError':
        case 'InsufficientStockError':
          this.notificationService.error(addItemToOrder.message).subscribe();
          break;
      }
    });
  }
  viewCartFromNotification(closeFn) {
    this.stateService.setState('cartDrawerOpen', true);
    closeFn();
  }
  /**
   * If there is a collection matching the `lastCollectionId`, return that. Otherwise return the collection
   * with the longest `breadcrumbs` array, which corresponds to the most specific collection.
   */
  getMostRelevantCollection(collections, lastCollectionSlug) {
    const lastCollection = collections.find(c => c.slug === lastCollectionSlug);
    if (lastCollection) {
      return lastCollection;
    }
    return collections.slice().sort((a, b) => {
      if (a.breadcrumbs.length < b.breadcrumbs.length) {
        return 1;
      }
      if (a.breadcrumbs.length > b.breadcrumbs.length) {
        return -1;
      }
      return 0;
    })[0];
  }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
  return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_providers_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_providers_active_active_service__WEBPACK_IMPORTED_MODULE_5__.ActiveService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute));
};
ProductDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ProductDetailComponent,
  selectors: [["vsf-product-detail"]],
  viewQuery: function ProductDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.addToCartTemplate = _t.first);
    }
  },
  decls: 48,
  vars: 20,
  consts: [[1, "max-w-6xl", "mx-auto", "px-4"], ["class", "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", 4, "ngIf", "ngIfElse"], ["titlePlaceholder", ""], [1, "mb-2", 3, "breadcrumbs", "linkLast"], [1, "lg:grid", "lg:grid-cols-2", "lg:gap-x-8", "lg:items-start", "mt-4", "md:mt-12"], [3, "assets", "selectedAssetId"], [1, "mt-10", "px-4", "sm:px-0", "sm:mt-16", "lg:mt-0"], ["zoomPreviewArea", ""], [1, ""], [1, "sr-only"], [1, "text-base", "text-gray-700", 3, "innerHTML"], ["class", "mt-4", 4, "ngIf"], [1, "mt-10", "flex", "flex-col", "sm:flex-row", "sm:items-center"], [1, "text-3xl", "text-gray-900", "mr-4"], [1, "flex", "sm:flex-col1", "align-baseline"], ["type", "submit", 1, "max-w-xs", "flex-1", "transition-colors", "border", "border-transparent", "rounded-md", "py-3", "px-8", "flex", "items-center", "justify-center", "text-base", "font-medium", "text-white", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-offset-gray-50", "focus:ring-primary-500", "sm:w-full", 3, "ngClass", "click"], [4, "ngIf", "ngIfElse"], ["inCartCount", ""], ["type", "button", 1, "ml-4", "py-3", "px-3", "rounded-md", "flex", "items-center", "justify-center", "text-gray-400", "hover:bg-gray-100", "hover:text-gray-500"], ["icon", "heart"], [1, "mt-2", "flex", "items-center", "space-x-2"], [1, "text-gray-500"], [1, "mt-12", "pt-12", "border-t", "text-xs"], [1, "text-gray-600", "font-bold", "mb-2"], [1, "text-gray-500", "space-y-1"], [1, "underline"], ["className", "mt-24"], ["addedToCartTemplate", ""], [1, "text-3xl", "sm:text-5xl", "font-light", "tracking-tight", "text-gray-900", "my-8"], [1, "h-8", "w-72", "bg-gray-200", "animate-pulse", "my-8"], [1, "mt-4"], ["htmlFor", "option", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1", "block", "w-full", "pl-3", "pr-10", "py-2", "text-base", "border-gray-300", "focus:outline-none", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm", "rounded-md", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["icon", "check", 1, "mr-2"], [1, "flex"], [1, "mr-8"], ["alt", "product thumbnail", 1, "rounded", 3, "src"], [1, "text-sm"], [1, "flex", "justify-end"], ["type", "button", 1, "inline-flex", "items-center", "rounded", "border", "border-transparent", "bg-primary-100", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-primary-700", "hover:bg-primary-200", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "focus:ring-offset-2", 3, "click"]],
  template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductDetailComponent_h2_1_Template, 2, 1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProductDetailComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "vsf-collection-breadcrumbs", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "vsf-asset-gallery", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6, 7)(9, "div", 8)(10, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ProductDetailComponent_div_14_Template, 5, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 12)(16, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "formatPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 14)(20, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_20_listener() {
        return ctx.addToCart(ctx.selectedVariant, ctx.qty);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ProductDetailComponent_div_21_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ProductDetailComponent_ng_template_22_Template, 3, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "fa-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Add to favorites");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 20)(29, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "section", 22)(32, "h3", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " Shipping & Returns ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 24)(35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, " Standard shipping: 3 - 5 working days. Express shipping: 1 - 3 working days. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Shipping costs depend on delivery address and will be calculated during checkout. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Returns are subject to terms. Please see the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "returns page");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " for further information. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "vsf-top-reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, ProductDetailComponent_ng_template_46_Template, 8, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.product)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs)("linkLast", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("assets", ctx.product == null ? null : ctx.product.assets)("selectedAssetId", ctx.product == null ? null : ctx.product.featuredAsset == null ? null : ctx.product.featuredAsset.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 13, ctx.product == null ? null : ctx.product.description), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.variants.length) > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 15, ctx.selectedVariant == null ? null : ctx.selectedVariant.priceWithTax), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](17, _c1, ctx.inFlight, !ctx.inFlight));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.product || !ctx.qtyInCart[ctx.selectedVariant.id])("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.selectedVariant == null ? null : ctx.selectedVariant.sku, " ");
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.CollectionBreadcrumbsComponent, _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_7__.AssetGalleryComponent, _top_reviews_top_reviews_component__WEBPACK_IMPORTED_MODULE_8__.TopReviewsComponent, _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_9__.FormatPricePipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__.SafeHtmlPipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 31903:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/product-detail/product-detail.graphql.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TO_CART": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "GET_PRODUCT_DETAIL": () => (/* binding */ GET_PRODUCT_DETAIL)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_PRODUCT_DETAIL = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetProductDetail($slug: String!) {
        product(slug: $slug) {
            id
            name
            description
            variants {
                id
                name
                options {
                    code
                    name
                }
                price
                priceWithTax
                sku
            }
            featuredAsset {
                ...Asset
            }
            assets {
                ...Asset
            }
            collections {
                id
                slug
                breadcrumbs {
                    id
                    name
                    slug
                }
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ASSET_FRAGMENT}
`;
const ADD_TO_CART = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation AddToCart($variantId: ID!, $qty: Int!) {
        addItemToOrder(productVariantId: $variantId, quantity: $qty) {
            ...Cart
            ...ErrorResult
            ...on InsufficientStockError {
                order {
                    ...Cart
                }
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 27518:
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/product-list-controls/product-list-controls.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListControlsComponent": () => (/* binding */ ProductListControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);




function ProductListControlsComponent_div_5_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "label", 9)(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListControlsComponent_div_5_li_5_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const value_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.toggleFacetValueIdInRoute(value_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const value_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.isActive(value_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.isActive(value_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r3.name);
  }
}
function ProductListControlsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductListControlsComponent_div_5_li_5_Template, 5, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facet_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("enabled", ctx_r0.activeFacetValueIds.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, facet_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", facet_r1.values)("ngForTrackBy", ctx_r0.trackById);
  }
}
class ProductListControlsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.activeFacetValueIds = [];
    this.totalResults = 0;
    this.manuallyExpanded = false;
  }
  get filtersExpanded() {
    return this.manuallyExpanded || this.activeFacetValueIds.length > 0;
  }
  ngOnChanges(changes) {
    if ('facetValues' in changes) {
      this.facets = this.groupFacetValues(this.facetValues);
    }
  }
  isActive(facetValueId) {
    return this.activeFacetValueIds.includes(facetValueId);
  }
  toggleFacetValueIdInRoute(id) {
    this.router.navigate(['./', {
      facets: this.toggleFacetValueId(id)
    }], {
      queryParamsHandling: 'merge',
      relativeTo: this.route,
      state: {
        noScroll: true
      }
    });
  }
  toggleFacetValueId(id) {
    const existing = this.activeFacetValueIds;
    return existing.includes(id) ? existing.filter(x => x !== id) : existing.concat(id);
  }
  trackById(index, item) {
    return item.id;
  }
  groupFacetValues(facetValues) {
    if (!facetValues) {
      return [];
    }
    const activeFacetValueIds = this.activeFacetValueIds;
    const facetMap = new Map();
    for (const {
      count,
      facetValue: {
        id,
        name,
        facet
      }
    } of facetValues) {
      if (count === this.totalResults && !activeFacetValueIds.includes(id)) {
        // skip FacetValues that do not have any effect on the
        // result set and are not active
        continue;
      }
      const facetFromMap = facetMap.get(facet.id);
      if (facetFromMap) {
        facetFromMap.values.push({
          id,
          name,
          count
        });
      } else {
        facetMap.set(facet.id, {
          id: facet.id,
          name: facet.name,
          values: [{
            id,
            name,
            count
          }]
        });
      }
    }
    return Array.from(facetMap.values());
  }
}
ProductListControlsComponent.ɵfac = function ProductListControlsComponent_Factory(t) {
  return new (t || ProductListControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
ProductListControlsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductListControlsComponent,
  selectors: [["vsf-product-list-controls"]],
  inputs: {
    activeFacetValueIds: "activeFacetValueIds",
    facetValues: "facetValues",
    totalResults: "totalResults"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 6,
  vars: 3,
  consts: [[1, "lg:hidden"], [1, "border", "border-primary-100", "rounded", "bg-primary-50", "p-2", "text-sm", "text-primary-700", 3, "click"], ["icon", "filter", 1, "mr-2"], [1, "mb-4", "lg:block", 3, "ngClass"], ["class", "text-sm", 3, "enabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-sm"], [1, "py-3", "font-medium", "text-gray-900", "uppercase"], [1, "space-y-4"], [3, "active", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, ""], ["type", "checkbox", 1, "h-4", "w-4", "border-gray-300", "rounded", "text-primary-600", "focus:ring-primary-500", 3, "checked", "change"], [1, "ml-3", "text-sm", "text-gray-600"]],
  template: function ProductListControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListControlsComponent_Template_button_click_1_listener() {
        return ctx.manuallyExpanded = !ctx.manuallyExpanded;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Filters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductListControlsComponent_div_5_Template, 6, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filtersExpanded ? "block" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.facets)("ngForTrackBy", ctx.trackById);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 25778:
/*!************************************************************************!*\
  !*** ./src/app/core/components/product-list/product-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 16276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 24514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 32647);
/* harmony import */ var _common_utils_get_route_array_param__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/utils/get-route-array-param */ 32797);
/* harmony import */ var _shared_pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/asset-preview.pipe */ 55280);
/* harmony import */ var _product_list_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.graphql */ 1577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/data/data.service */ 61199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _providers_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/state/state.service */ 33426);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/collection-card/collection-card.component */ 54468);
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-card/product-card.component */ 71746);
/* harmony import */ var _collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../collection-breadcrumbs/collection-breadcrumbs.component */ 71180);
/* harmony import */ var _product_list_controls_product_list_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-list-controls/product-list-controls.component */ 27518);
















function ProductListComponent_ng_container_1_ng_container_6_vsf_collection_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vsf-collection-card", 18);
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collection", child_r11);
  }
}
function ProductListComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 14)(2, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Collections ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProductListComponent_ng_container_1_ng_container_6_vsf_collection_card_5_Template, 1, 1, "vsf-collection-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", collection_r8.children);
  }
}
function ProductListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 11)(2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "vsf-collection-breadcrumbs", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ProductListComponent_ng_container_1_ng_container_6_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const collection_r8 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", collection_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 3, ctx_r0.breadcrumbs$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", collection_r8.children.length);
  }
}
function ProductListComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Results for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const term_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\"", term_r13, "\"");
  }
}
function ProductListComponent_ng_container_10_vsf_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vsf-product-card", 21);
  }
  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("product", product_r15);
  }
}
function ProductListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductListComponent_ng_container_10_vsf_product_card_1_Template, 1, 1, "vsf-product-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r2.products$))("ngForTrackBy", ctx_r2.trackByProductId);
  }
}
function ProductListComponent_ng_template_12_vsf_product_card_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vsf-product-card", 21);
  }
  if (rf & 2) {
    const product_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("product", product_r17);
  }
}
function ProductListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ProductListComponent_ng_template_12_vsf_product_card_0_Template, 1, 1, "vsf-product-card", 22);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.placeholderProducts);
  }
}
function ProductListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Load more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 3, ctx_r5.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 5, ctx_r5.loading$));
  }
}
function ProductListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "No results");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
class ProductListComponent {
  constructor(dataService, route, stateService, sanitizer) {
    this.dataService = dataService;
    this.route = route;
    this.stateService = stateService;
    this.sanitizer = sanitizer;
    this.unfilteredTotalItems = 0;
    this.currentPage = 0;
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(undefined);
    this.placeholderProducts = Array.from({
      length: 12
    }).map(() => null);
  }
  ngOnInit() {
    const perPage = 24;
    const collectionSlug$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(pm => pm.get('slug')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(slug => {
      this.stateService.setState('lastCollectionSlug', slug || null);
      this.currentPage = 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.activeFacetValueIds$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(pm => (0,_common_utils_get_route_array_param__WEBPACK_IMPORTED_MODULE_0__.getRouteArrayParam)(pm, 'facets')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)((x, y) => x.toString() === y.toString()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => {
      this.currentPage = 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.searchTerm$ = this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(pm => pm.get('search') || ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.collection$ = collectionSlug$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(slug => {
      if (slug) {
        return this.dataService.query(_product_list_graphql__WEBPACK_IMPORTED_MODULE_2__.GET_COLLECTION, {
          slug
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.collection));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(undefined);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    const assetPreviewPipe = new _shared_pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_1__.AssetPreviewPipe();
    this.mastheadBackground$ = this.collection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(c => 'url(' + assetPreviewPipe.transform(c?.featuredAsset || undefined, 1000, 300) + ')'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(style => this.sanitizer.bypassSecurityTrustStyle(style)));
    this.breadcrumbs$ = this.collection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(collection => {
      if (collection) {
        return collection.breadcrumbs;
      } else {
        return [{
          id: '',
          name: 'Home'
        }, {
          id: '',
          name: 'Search'
        }];
      }
    }));
    const triggerFetch$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.collection$, this.activeFacetValueIds$, this.searchTerm$, this.refresh);
    const getInitialFacetValueIds = () => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.collection$, this.searchTerm$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([collection, term]) => {
        return this.dataService.query(_product_list_graphql__WEBPACK_IMPORTED_MODULE_2__.SEARCH_PRODUCTS, {
          input: {
            term,
            groupByProduct: true,
            collectionId: collection?.id,
            take: perPage,
            skip: this.currentPage * perPage
          }
        });
      })).subscribe(data => {
        this.facetValues = data.search.facetValues;
        this.unfilteredTotalItems = data.search.totalItems;
      });
    };
    this.loading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(triggerFetch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mapTo)(true)));
    const queryResult$ = triggerFetch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([collection, facetValueIds, term]) => {
      return this.dataService.query(_product_list_graphql__WEBPACK_IMPORTED_MODULE_2__.SEARCH_PRODUCTS, {
        input: {
          term,
          groupByProduct: true,
          collectionId: collection?.id,
          facetValueFilters: facetValueIds.map(id => ({
            and: id
          })),
          take: perPage,
          skip: this.currentPage * perPage
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(data => {
        if (facetValueIds.length === 0) {
          this.facetValues = data.search.facetValues;
          this.unfilteredTotalItems = data.search.totalItems;
        } else if (!this.facetValues) {
          getInitialFacetValueIds();
        } else {
          this.facetValues = this.facetValues.map(fv => fv);
        }
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.loading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(triggerFetch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mapTo)(true)), queryResult$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mapTo)(false)));
    const RESET = 'RESET';
    const items$ = this.products$ = queryResult$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.search.items));
    const reset$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(collectionSlug$, this.activeFacetValueIds$, this.searchTerm$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mapTo)(RESET), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.share)());
    this.products$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(items$, reset$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.scan)((acc, val) => {
      if (typeof val === 'string') {
        return [];
      } else {
        return acc.concat(val);
      }
    }, []));
    this.totalResults$ = queryResult$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.search.totalItems));
    this.displayLoadMore$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.products$, this.totalResults$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([products, totalResults]) => {
      return 0 < products.length && products.length < totalResults;
    }));
  }
  trackByProductId(index, item) {
    return item.productId;
  }
  loadMore() {
    this.currentPage++;
    this.refresh.next();
  }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_providers_state_state_service__WEBPACK_IMPORTED_MODULE_4__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.DomSanitizer));
};
ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["vsf-product-list"]],
  decls: 18,
  vars: 18,
  consts: [[1, "max-w-6xl", "mx-auto", "px-4"], [4, "ngIf"], ["class", "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", 4, "ngIf"], [1, "mt-6", "grid", "sm:grid-cols-5", "gap-x-4"], [1, "mb-4", 3, "facetValues", "activeFacetValueIds", "totalResults"], [1, "sm:col-span-5", "lg:col-span-4"], [1, "grid", "grid-cols-1", "gap-y-10", "gap-x-6", "sm:grid-cols-2", "lg:grid-cols-4", "xl:gap-x-8"], [4, "ngIf", "ngIfElse"], ["placeholders", ""], ["class", "load-more flex-fill", 4, "ngIf"], ["noResults", ""], [1, "flex", "justify-between", "items-center"], [1, "text-3xl", "sm:text-5xl", "font-light", "tracking-tight", "text-gray-900", "my-8"], [3, "breadcrumbs"], [1, "max-w-2xl", "mx-auto", "py-16", "sm:py-16", "lg:max-w-none", "border-b", "mb-16"], [1, "text-2xl", "font-light", "text-gray-900"], [1, "mt-6", "grid", "max-w-xs", "sm:max-w-none", "mx-auto", "sm:grid-cols-2", "lg:grid-cols-3", "gap-x-6", "gap-y-4"], [3, "collection", 4, "ngFor", "ngForOf"], [3, "collection"], [1, "font-medium"], [3, "product", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "product"], [3, "product", 4, "ngFor", "ngForOf"], [1, "load-more", "flex-fill"], [1, "btn", "btn-light", "btn-lg", "d-inline-flex", "align-items-center", 3, "disabled", "click"], ["role", "status", "aria-hidden", "true", 1, "loading-indicator", "spinner-grow", "spinner-grow-sm"], [1, "no-results", "col-12"], [1, "h1"], ["icon", "sad-cry", "size", "10x"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductListComponent_ng_container_1_Template, 7, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProductListComponent_h2_3_Template, 4, 1, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "vsf-product-list-controls", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ProductListComponent_ng_container_10_Template, 3, 4, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ProductListComponent_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ProductListComponent_div_14_Template, 6, 7, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ProductListComponent_ng_template_16_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 8, ctx.collection$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 10, ctx.searchTerm$));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("facetValues", ctx.facetValues)("activeFacetValueIds", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 12, ctx.activeFacetValueIds$))("totalResults", ctx.unfilteredTotalItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 14, ctx.totalResults$) !== null)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 16, ctx.displayLoadMore$));
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _shared_components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_5__.CollectionCardComponent, _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__.ProductCardComponent, _collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.CollectionBreadcrumbsComponent, _product_list_controls_product_list_controls_component__WEBPACK_IMPORTED_MODULE_8__.ProductListControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 1577:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/product-list/product-list.graphql.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_COLLECTION": () => (/* binding */ GET_COLLECTION),
/* harmony export */   "SEARCH_PRODUCTS": () => (/* binding */ SEARCH_PRODUCTS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const SEARCH_PRODUCTS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query SearchProducts($input: SearchInput!) {
        search(input: $input) {
            items {
                productId
                slug
                productName
                description
                priceWithTax {
                    ... on PriceRange {
                        min
                        max
                    }
                }
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
            }
            totalItems
            facetValues {
                count
                facetValue {
                    id
                    name
                    facet {
                        id
                        name
                    }
                }
            }
        }
    }
`;
const GET_COLLECTION = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetCollection($id: ID, $slug: String) {
        collection(id: $id, slug: $slug) {
            id
            name
            slug
            description
            featuredAsset {
                ...Asset
            }
            breadcrumbs {
                id
                slug
                name
            }
            children {
                id
                slug
                featuredAsset {
                    ...Asset
                }
                name
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ASSET_FRAGMENT}
`;

/***/ }),

/***/ 68310:
/*!************************************************************************************!*\
  !*** ./src/app/core/components/product-search-bar/product-search-bar.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSearchBarComponent": () => (/* binding */ ProductSearchBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);





class ProductSearchBarComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    /** If true, searches as you type */
    this.autoSearch = false;
    this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('');
  }
  ngOnInit() {
    if (this.autoSearch) {
      this.subscription = this.searchTerm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(250)).subscribe(term => this.doSearch(term));
    }
  }
  doSearch(term) {
    this.router.navigate(['/search'], {
      queryParams: {
        search: term
      },
      relativeTo: this.route,
      queryParamsHandling: 'merge'
    });
    this.searchTerm.setValue('', {
      emitEvent: false
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
ProductSearchBarComponent.ɵfac = function ProductSearchBarComponent_Factory(t) {
  return new (t || ProductSearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ProductSearchBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductSearchBarComponent,
  selectors: [["vsf-product-search-bar"]],
  inputs: {
    autoSearch: "autoSearch"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "input-group"], ["type", "text", "placeholder", "Search...", "aria-label", "Search input", 1, "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "block", "w-full", "sm:text-sm", "border-gray-300", "rounded-md", 3, "formControl", "keydown.enter"]],
  template: function ProductSearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function ProductSearchBarComponent_Template_input_keydown_enter_1_listener() {
        return ctx.doSearch(ctx.searchTerm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchTerm);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 41778:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/top-reviews/top-reviews.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopReviewsComponent": () => (/* binding */ TopReviewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);



function TopReviewsComponent_div_5_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 18);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const review_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r3 <= review_r1.rating ? "text-yellow-400" : "text-gray-200");
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function TopReviewsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopReviewsComponent_div_5_fa_icon_4_Template, 1, 1, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "out of 5 stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12)(10, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15)(14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "time", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r1.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", review_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r1.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r1.date, " ");
  }
}
class TopReviewsComponent {
  constructor() {
    this.reviews = [{
      id: 1,
      title: 'I love it!',
      rating: 5,
      content: `
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                `,
      author: 'Minko G.',
      date: 'May 25, 2022',
      datetime: '2022-05-25'
    }, {
      id: 2,
      title: 'Awesome product',
      rating: 5,
      content: `
                  <p>Ornare quam viverra orci sagittis eu volutpat odio. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Ultrices tincidunt arcu non sodales neque.</p>
                  <p>Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sodales ut etiam sit amet nisl purus in mollis nunc. Turpis egestas integer eget aliquet nibh praesent tristique magna. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Justo laoreet sit amet cursus sit amet.</p>
                `,
      author: 'Igor M.',
      date: 'May 24, 2022',
      datetime: '2022-05-24'
    }, {
      id: 3,
      title: 'Really happy with this purchase',
      rating: 5,
      content: `
                  <p>Nisi est sit amet facilisis magna etiam tempor orci eu.</p>
                  <p>Elit duis tristique sollicitudin nibh sit amet commodo. Dolor sit amet consectetur adipiscing elit. Lorem dolor sed viverra ipsum nunc. Accumsan tortor posuere ac ut consequat semper. Augue mauris augue neque gravida in fermentum et sollicitudin ac.</p>
                `,
      author: 'Misko H.',
      date: 'May 24, 2022',
      datetime: '2022-05-24'
    }];
  }
}
TopReviewsComponent.ɵfac = function TopReviewsComponent_Factory(t) {
  return new (t || TopReviewsComponent)();
};
TopReviewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TopReviewsComponent,
  selectors: [["vsf-top-reviews"]],
  decls: 6,
  vars: 1,
  consts: [[1, ""], [1, "max-w-2xl", "mx-auto", "py-16", "px-4", "sm:py-24", "sm:px-6", "lg:max-w-6xl", "lg:px-8"], [1, "text-lg", "font-medium", "text-gray-900"], [1, "mt-6", "pb-10", "border-t", "border-gray-200", "divide-y", "divide-gray-200", "space-y-10"], ["class", "pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8", 4, "ngFor", "ngForOf"], [1, "pt-10", "lg:grid", "lg:grid-cols-12", "lg:gap-x-8"], [1, "lg:col-start-5", "lg:col-span-8", "xl:col-start-4", "xl:col-span-9", "xl:grid", "xl:grid-cols-3", "xl:gap-x-8", "xl:items-start"], [1, "flex", "items-center", "xl:col-span-1"], [1, "flex", "items-center"], ["icon", "star", "class", "text-yellow-400", "aria-hidden", "true", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ml-3", "text-sm", "text-gray-700"], [1, "sr-only"], [1, "mt-4", "lg:mt-6", "xl:mt-0", "xl:col-span-2"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "mt-3", "space-y-6", "text-sm", "text-gray-500", 3, "innerHTML"], [1, "mt-6", "flex", "items-center", "text-sm", "lg:mt-0", "lg:col-start-1", "lg:col-span-4", "lg:row-start-1", "lg:flex-col", "lg:items-start", "xl:col-span-3"], [1, "font-medium", "text-gray-900"], ["dateTime", "{review.datetime}", 1, "ml-4", "border-l", "border-gray-200", "pl-4", "text-gray-500", "lg:ml-0", "lg:mt-2", "lg:border-0", "lg:pl-0"], ["icon", "star", "aria-hidden", "true", 1, "text-yellow-400", 3, "ngClass"]],
  template: function TopReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Recent reviews ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopReviewsComponent_div_5_Template, 18, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtcmV2aWV3cy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3RvcC1yZXZpZXdzL3RvcC1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _apollo_client_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apollo-client-provider */ 38059);
/* harmony import */ var _components_account_link_account_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-link/account-link.component */ 15639);
/* harmony import */ var _components_asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/asset-gallery/asset-gallery.component */ 77931);
/* harmony import */ var _components_cart_drawer_cart_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart-drawer/cart-drawer.component */ 6664);
/* harmony import */ var _components_cart_toggle_cart_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart-toggle/cart-toggle.component */ 16088);
/* harmony import */ var _components_collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/collection-breadcrumbs/collection-breadcrumbs.component */ 71180);
/* harmony import */ var _components_collections_menu_mobile_collections_menu_mobile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/collections-menu-mobile/collections-menu-mobile.component */ 17906);
/* harmony import */ var _components_collections_menu_collections_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collections-menu/collections-menu.component */ 14600);
/* harmony import */ var _components_layout_layout_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/layout-footer.component */ 68241);
/* harmony import */ var _components_layout_layout_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/layout-header.component */ 56731);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout/layout.component */ 69358);
/* harmony import */ var _components_mobile_menu_toggle_mobile_menu_toggle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mobile-menu-toggle/mobile-menu-toggle.component */ 22449);
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-card/product-card.component */ 71746);
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ 2768);
/* harmony import */ var _components_product_list_controls_product_list_controls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-list-controls/product-list-controls.component */ 27518);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 25778);
/* harmony import */ var _components_product_search_bar_product_search_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/product-search-bar/product-search-bar.component */ 68310);
/* harmony import */ var _components_top_reviews_top_reviews_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/top-reviews/top-reviews.component */ 41778);
/* harmony import */ var _icon_library__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icon-library */ 34790);
/* harmony import */ var _providers_data_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./providers/data/interceptor */ 52209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);




























const CORE_COMPONENTS = [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_17__.ProductListComponent, _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__.ProductDetailComponent, _components_cart_toggle_cart_toggle_component__WEBPACK_IMPORTED_MODULE_6__.CartToggleComponent, _components_account_link_account_link_component__WEBPACK_IMPORTED_MODULE_3__.AccountLinkComponent, _components_cart_drawer_cart_drawer_component__WEBPACK_IMPORTED_MODULE_5__.CartDrawerComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__.LayoutComponent, _components_layout_layout_header_component__WEBPACK_IMPORTED_MODULE_11__.LayoutHeaderComponent, _components_layout_layout_footer_component__WEBPACK_IMPORTED_MODULE_10__.LayoutFooterComponent, _components_collections_menu_collections_menu_component__WEBPACK_IMPORTED_MODULE_9__.CollectionsMenuComponent, _components_collections_menu_mobile_collections_menu_mobile_component__WEBPACK_IMPORTED_MODULE_8__.CollectionsMenuMobileComponent, _components_mobile_menu_toggle_mobile_menu_toggle_component__WEBPACK_IMPORTED_MODULE_13__.MobileMenuToggleComponent, _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_14__.ProductCardComponent, _components_collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.CollectionBreadcrumbsComponent, _components_product_list_controls_product_list_controls_component__WEBPACK_IMPORTED_MODULE_16__.ProductListControlsComponent, _components_product_search_bar_product_search_bar_component__WEBPACK_IMPORTED_MODULE_18__.ProductSearchBarComponent, _components_asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_4__.AssetGalleryComponent];
class CoreModule {
  constructor(library) {
    (0,_icon_library__WEBPACK_IMPORTED_MODULE_20__.buildIconLibrary)(library);
  }
}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__.FaIconLibrary));
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
    useClass: _providers_data_interceptor__WEBPACK_IMPORTED_MODULE_21__.DefaultInterceptor,
    multi: true
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_25__.APP_BASE_HREF,
    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseHref
  }, _apollo_client_provider__WEBPACK_IMPORTED_MODULE_2__.APOLLO_CLIENT_PROVIDER],
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, apollo_angular__WEBPACK_IMPORTED_MODULE_27__.ApolloModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_17__.ProductListComponent, _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__.ProductDetailComponent, _components_cart_toggle_cart_toggle_component__WEBPACK_IMPORTED_MODULE_6__.CartToggleComponent, _components_account_link_account_link_component__WEBPACK_IMPORTED_MODULE_3__.AccountLinkComponent, _components_cart_drawer_cart_drawer_component__WEBPACK_IMPORTED_MODULE_5__.CartDrawerComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__.LayoutComponent, _components_layout_layout_header_component__WEBPACK_IMPORTED_MODULE_11__.LayoutHeaderComponent, _components_layout_layout_footer_component__WEBPACK_IMPORTED_MODULE_10__.LayoutFooterComponent, _components_collections_menu_collections_menu_component__WEBPACK_IMPORTED_MODULE_9__.CollectionsMenuComponent, _components_collections_menu_mobile_collections_menu_mobile_component__WEBPACK_IMPORTED_MODULE_8__.CollectionsMenuMobileComponent, _components_mobile_menu_toggle_mobile_menu_toggle_component__WEBPACK_IMPORTED_MODULE_13__.MobileMenuToggleComponent, _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_14__.ProductCardComponent, _components_collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.CollectionBreadcrumbsComponent, _components_product_list_controls_product_list_controls_component__WEBPACK_IMPORTED_MODULE_16__.ProductListControlsComponent, _components_product_search_bar_product_search_bar_component__WEBPACK_IMPORTED_MODULE_18__.ProductSearchBarComponent, _components_asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_4__.AssetGalleryComponent, _components_top_reviews_top_reviews_component__WEBPACK_IMPORTED_MODULE_19__.TopReviewsComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, apollo_angular__WEBPACK_IMPORTED_MODULE_27__.ApolloModule],
    exports: [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_17__.ProductListComponent, _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__.ProductDetailComponent, _components_cart_toggle_cart_toggle_component__WEBPACK_IMPORTED_MODULE_6__.CartToggleComponent, _components_account_link_account_link_component__WEBPACK_IMPORTED_MODULE_3__.AccountLinkComponent, _components_cart_drawer_cart_drawer_component__WEBPACK_IMPORTED_MODULE_5__.CartDrawerComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__.LayoutComponent, _components_layout_layout_header_component__WEBPACK_IMPORTED_MODULE_11__.LayoutHeaderComponent, _components_layout_layout_footer_component__WEBPACK_IMPORTED_MODULE_10__.LayoutFooterComponent, _components_collections_menu_collections_menu_component__WEBPACK_IMPORTED_MODULE_9__.CollectionsMenuComponent, _components_collections_menu_mobile_collections_menu_mobile_component__WEBPACK_IMPORTED_MODULE_8__.CollectionsMenuMobileComponent, _components_mobile_menu_toggle_mobile_menu_toggle_component__WEBPACK_IMPORTED_MODULE_13__.MobileMenuToggleComponent, _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_14__.ProductCardComponent, _components_collection_breadcrumbs_collection_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.CollectionBreadcrumbsComponent, _components_product_list_controls_product_list_controls_component__WEBPACK_IMPORTED_MODULE_16__.ProductListControlsComponent, _components_product_search_bar_product_search_bar_component__WEBPACK_IMPORTED_MODULE_18__.ProductSearchBarComponent, _components_asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_4__.AssetGalleryComponent]
  });
})();

/***/ }),

/***/ 34790:
/*!**************************************!*\
  !*** ./src/app/core/icon-library.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildIconLibrary": () => (/* binding */ buildIconLibrary)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 72257);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);


/**
 * All the icons used in the library are declared here. This allows us to
 * ship only the needed icons so that the bundle does not get bloated.
 */
function buildIconLibrary(library) {
  library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTwitter, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFacebook, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInstagram, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faYoutube, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMinus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faShoppingCart, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUserCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCreditCard, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSearch, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSadCry, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFilter, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBars, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faHome, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faHeart, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStar, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faChevronRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCheck);
}

/***/ }),

/***/ 26695:
/*!*****************************************************************!*\
  !*** ./src/app/core/providers/active/active.service.graphql.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ACTIVE_ORDER": () => (/* binding */ GET_ACTIVE_ORDER)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_ACTIVE_ORDER = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetActiveOrder {
        activeOrder {
            ...Cart
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
`;

/***/ }),

/***/ 44378:
/*!*********************************************************!*\
  !*** ./src/app/core/providers/active/active.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveService": () => (/* binding */ ActiveService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _active_service_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active.service.graphql */ 26695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.service */ 61199);




class ActiveService {
  constructor(dataService) {
    this.dataService = dataService;
    this.activeOrder$ = this.dataService.query(_active_service_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_ACTIVE_ORDER).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      activeOrder
    }) => activeOrder));
  }
}
ActiveService.ɵfac = function ActiveService_Factory(t) {
  return new (t || ActiveService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService));
};
ActiveService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ActiveService,
  factory: ActiveService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 61199:
/*!*****************************************************!*\
  !*** ./src/app/core/providers/data/data.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ 52216);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 36238);




class DataService {
  constructor(apollo) {
    this.apollo = apollo;
    this.context = {
      headers: {}
    };
  }
  query(query, variables, fetchPolicy) {
    return this.apollo.watchQuery({
      query,
      variables,
      context: this.context,
      fetchPolicy: fetchPolicy || 'cache-first'
    }).valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(result => result.networkStatus === _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__.NetworkStatus.ready), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
  }
  mutate(mutation, variables) {
    return this.apollo.mutate({
      mutation,
      variables,
      context: this.context
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data));
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__.Apollo));
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 52209:
/*!****************************************************!*\
  !*** ./src/app/core/providers/data/interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultInterceptor": () => (/* binding */ DefaultInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification/notification.service */ 44497);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 61199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);







/**
 * The default interceptor examines all HTTP requests & responses and dislays any error notifications.
 */
class DefaultInterceptor {
  constructor(dataService, injector, router, platformId) {
    this.dataService = dataService;
    this.injector = injector;
    this.router = router;
    this.platformId = platformId;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
        this.notifyOnError(event);
      }
    }, err => {
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
        this.notifyOnError(err);
      } else {
        this.displayErrorNotification(err.message);
      }
    }));
  }
  notifyOnError(response) {
    if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
      if (response.status === 0) {
        this.displayErrorNotification('Could not connect to server!');
      } else {
        this.displayErrorNotification(response.toString());
      }
    } else {
      // GraphQL errors still return 200 OK responses, but have the actual error message
      // inside the body of the response.
      const graqhQLErrors = response.body.errors;
      if (graqhQLErrors && Array.isArray(graqhQLErrors)) {
        const firstCode = graqhQLErrors[0].extensions.code;
        if (firstCode === 'FORBIDDEN') {
          // auto logout needed?
        } else if (firstCode === 'CHANNEL_NOT_FOUND') {
          const message = graqhQLErrors.map(err => err.message).join('\n');
          this.displayErrorNotification(message);
        } else {
          const message = graqhQLErrors.map(err => err.message).join('\n');
          this.displayErrorNotification(message);
        }
      }
    }
  }
  /**
   * We need to lazily inject the NotificationService since it depends on the I18nService which
   * eventually depends on the HttpClient (used to load messages from json files). If we were to
   * directly inject NotificationService into the constructor, we get a cyclic dependency.
   */
  displayErrorNotification(message) {
    const notificationService = this.injector.get(_notification_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService);
    notificationService.error(message).subscribe();
  }
}
DefaultInterceptor.ɵfac = function DefaultInterceptor_Factory(t) {
  return new (t || DefaultInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
};
DefaultInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DefaultInterceptor,
  factory: DefaultInterceptor.ɵfac
});


/***/ }),

/***/ 93959:
/*!*****************************************************!*\
  !*** ./src/app/core/providers/modal/modal-types.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIALOG_COMPONENT": () => (/* binding */ DIALOG_COMPONENT),
/* harmony export */   "MODAL_OPTIONS": () => (/* binding */ MODAL_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

const DIALOG_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('DIALOG_COMPONENT');
const MODAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MODAL_OPTIONS');

/***/ }),

/***/ 98338:
/*!*******************************************************************!*\
  !*** ./src/app/core/providers/notification/notification-types.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NOTIFICATION_OPTIONS": () => (/* binding */ NOTIFICATION_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

const NOTIFICATION_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NOTIFICATION_OPTIONS');

/***/ }),

/***/ 44497:
/*!*********************************************************************!*\
  !*** ./src/app/core/providers/notification/notification.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 12778);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 12035);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 65763);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/notification/notification.component */ 89819);
/* harmony import */ var _notification_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-types */ 98338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);








/**
 * This service is responsible for instantiating a ModalDialog component and
 * embedding the specified component within.
 */
class NotificationService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  /**
   * Display a "toast" notification.
   */
  notify(options) {
    const positionStrategy = this.overlay.position().global().top('16px').right('16px');
    const scrollStrategy = this.overlay.scrollStrategies.noop();
    const overlayRef = this.overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayConfig({
      scrollStrategy,
      positionStrategy,
      hasBackdrop: false
    }));
    const closeFn = () => {
      if (overlayRef.hasAttached()) {
        const notificationEl = overlayRef.overlayElement.querySelector('vsf-notification');
        if (notificationEl) {
          notificationEl.classList.add('remove');
        }
        setTimeout(() => overlayRef.dispose(), 250);
      }
    };
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.ComponentPortal(_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent, null, this.createInjector(options, closeFn));
    const notificationRef = overlayRef.attach(portal);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.race)(notificationRef.instance.close, (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(options.duration)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => closeFn()));
  }
  error(message) {
    return this.notify({
      title: 'An error occurred',
      message,
      duration: 10000,
      type: 'error'
    });
  }
  success(message) {
    return this.notify({
      title: 'Success',
      message,
      duration: 5000,
      type: 'error'
    });
  }
  info(message) {
    return this.notify({
      title: 'Information',
      message,
      duration: 5000,
      type: 'info'
    });
  }
  createInjector(options, closeFn) {
    options.templateContext = {
      ...options.templateContext,
      closeFn
    };
    const weakMap = new WeakMap([[_notification_types__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_OPTIONS, options]]);
    return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.PortalInjector(this.injector, weakMap);
  }
}
NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector));
};
NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: NotificationService,
  factory: NotificationService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 33426:
/*!*******************************************************!*\
  !*** ./src/app/core/providers/state/state.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);



const initialState = {
  signedIn: false,
  activeOrderId: null,
  lastCollectionSlug: null,
  mobileNavMenuIsOpen: false,
  cartDrawerOpen: false
};
/**
 * A simple, observable store of global app state.
 */
class StateService {
  constructor() {
    this.state = initialState;
    this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(initialState);
    if (typeof window !== 'undefined') {
      Object.defineProperty(window, 'appState', {
        get: () => this.stateSubject.value
      });
    }
  }
  setState(key, value) {
    this.state[key] = value;
    this.stateSubject.next(this.state);
  }
  select(selector) {
    return this.stateSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(selector), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  }
}
StateService.ɵfac = function StateService_Factory(t) {
  return new (t || StateService)();
};
StateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StateService,
  factory: StateService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 40246:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/address-card/address-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressCardComponent": () => (/* binding */ AddressCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);


function AddressCardComponent_h6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
const _c0 = ["*"];
class AddressCardComponent {
  constructor() {
    this.title = '';
  }
  getCountryName() {
    if (!this.address.country) {
      return '';
    }
    if (typeof this.address.country === 'string') {
      return this.address.country;
    } else {
      return this.address.country.name;
    }
  }
}
AddressCardComponent.ɵfac = function AddressCardComponent_Factory(t) {
  return new (t || AddressCardComponent)();
};
AddressCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AddressCardComponent,
  selectors: [["vsf-address-card"]],
  inputs: {
    address: "address",
    title: "title"
  },
  ngContentSelectors: _c0,
  decls: 12,
  vars: 5,
  consts: [[1, "border", "rounded", "bg-white", "p-4", "text-sm"], ["class", "font-medium text-gray-600", 4, "ngIf"], [1, ""], [1, "font-medium", "text-gray-600"]],
  template: function AddressCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddressCardComponent_h6_1_Template, 2, 1, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2)(3, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address.streetLine1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address.postalCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCountryName());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 74990:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/address-form/address-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressFormComponent": () => (/* binding */ AddressFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);




function AddressFormComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", country_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r1.name, " ");
  }
}
class AddressFormComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.addressForm = this.formBuilder.group({
      fullName: '',
      company: '',
      streetLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      streetLine2: '',
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      province: '',
      postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      countryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      phoneNumber: ''
    });
  }
  ngOnChanges(changes) {
    if ('address' in changes && this.addressForm && this.address) {
      this.addressForm.patchValue(this.address, {});
    }
    const country = this.address && this.address.country;
    if (country && this.availableCountries) {
      if (country && typeof country !== 'string') {
        this.addressForm.patchValue({
          countryCode: country.code
        });
      } else {
        const matchingCountry = this.availableCountries.find(c => c.name === country);
        if (matchingCountry) {
          this.addressForm.patchValue({
            countryCode: matchingCountry.code
          });
        }
      }
    }
  }
}
AddressFormComponent.ɵfac = function AddressFormComponent_Factory(t) {
  return new (t || AddressFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
};
AddressFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AddressFormComponent,
  selectors: [["vsf-address-form"]],
  inputs: {
    availableCountries: "availableCountries",
    address: "address"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 48,
  vars: 2,
  consts: [[3, "formGroup"], [1, "mt-4", "grid", "grid-cols-1", "gap-y-6", "sm:grid-cols-2", "sm:gap-x-4"], ["htmlFor", "fullName", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1"], ["type", "text", "id", "fullName", "name", "fullName", "formControlName", "fullName", "autoComplete", "given-name", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], [1, "sm:col-span-2"], ["htmlFor", "company", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "company", "id", "company", "formControlName", "company", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "streetLine1", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "streetLine1", "id", "streetLine1", "formControlName", "streetLine1", "autoComplete", "street-address", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "streetLine2", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "streetLine2", "id", "streetLine2", "formControlName", "streetLine2", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "city", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "city", "id", "city", "autoComplete", "address-level2", "formControlName", "city", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "countryCode", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["formControlName", "countryCode", "id", "countryCode", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["htmlFor", "province", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "province", "id", "province", "formControlName", "province", "autoComplete", "address-level1", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "postalCode", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "postalCode", "id", "postalCode", "formControlName", "postalCode", "autoComplete", "postal-code", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "phoneNumber", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "name", "phoneNumber", "id", "phoneNumber", "formControlName", "phoneNumber", "autoComplete", "tel", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], [3, "ngValue"]],
  template: function AddressFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div")(3, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " First name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Company ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5)(13, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5)(18, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Apartment, suite, etc. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div")(23, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div")(28, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3)(31, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddressFormComponent_option_32_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div")(34, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " State / Province ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div")(39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Postal code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5)(44, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Phone ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableCountries);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 49844:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/address-modal/address-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressModalComponent": () => (/* binding */ AddressModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _address_modal_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-modal.graphql */ 18181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../address-form/address-form.component */ 74990);
/* harmony import */ var _core_components_modal_dialog_dialog_buttons_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/components/modal-dialog/dialog-buttons.directive */ 18104);
/* harmony import */ var _core_components_modal_dialog_dialog_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/components/modal-dialog/dialog-title.directive */ 14915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);









function AddressModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function AddressModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddressModalComponent_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.save(_r1.addressForm.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Okay");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _r1.addressForm.invalid);
  }
}
class AddressModalComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.availableCountries$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_AVAILABLE_COUNTRIES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.availableCountries));
  }
  save(value) {
    this.dataService.mutate(_address_modal_graphql__WEBPACK_IMPORTED_MODULE_1__.CREATE_ADDRESS, {
      input: value
    }).subscribe(data => {
      this.resolveWith(data.createCustomerAddress);
    });
  }
}
AddressModalComponent.ɵfac = function AddressModalComponent_Factory(t) {
  return new (t || AddressModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
AddressModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddressModalComponent,
  selectors: [["vsf-address-modal"]],
  decls: 5,
  vars: 4,
  consts: [["vsfDialogTitle", ""], [3, "address", "availableCountries"], ["addressFormComponent", ""], ["vsfDialogButtons", ""], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]],
  template: function AddressModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddressModalComponent_ng_template_0_Template, 1, 1, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "vsf-address-form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AddressModalComponent_ng_template_4_Template, 2, 1, "ng-template", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("address", ctx.address)("availableCountries", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx.availableCountries$));
    }
  },
  dependencies: [_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_3__.AddressFormComponent, _core_components_modal_dialog_dialog_buttons_directive__WEBPACK_IMPORTED_MODULE_4__.DialogButtonsDirective, _core_components_modal_dialog_dialog_title_directive__WEBPACK_IMPORTED_MODULE_5__.DialogTitleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  encapsulation: 2
});


/***/ }),

/***/ 18181:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/address-modal/address-modal.graphql.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_ADDRESS": () => (/* binding */ CREATE_ADDRESS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const CREATE_ADDRESS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation CreateAddress($input: CreateAddressInput!) {
        createCustomerAddress(input: $input) {
            ...Address
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_FRAGMENT}
`;

/***/ }),

/***/ 58593:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/cart-contents/cart-contents.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartContentsComponent": () => (/* binding */ CartContentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/format-price.pipe */ 84234);
/* harmony import */ var _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/asset-preview.pipe */ 55280);







function CartContentsComponent_div_0_ng_container_2_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartContentsComponent_div_0_ng_container_2_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const line_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.decrement(line_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartContentsComponent_div_0_ng_container_2_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartContentsComponent_div_0_ng_container_2_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const line_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.increment(line_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/products", a1];
};
function CartContentsComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "assetPreview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "div")(7, "div", 8)(8, "h3")(9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "formatPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CartContentsComponent_div_0_ng_container_2_button_16_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CartContentsComponent_div_0_ng_container_2_button_19_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15)(21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "formatPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 9, line_r2.featuredAsset, "thumb"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", line_r2.productVariant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, line_r2.productVariant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", line_r2.productVariant.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 12, line_r2.linePriceWithTax), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.canAdjustQuantities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](line_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.canAdjustQuantities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 14, line_r2.unitPriceWithTax), " ");
  }
}
function CartContentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CartContentsComponent_div_0_ng_container_2_Template, 24, 18, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.cart.lines)("ngForTrackBy", ctx_r0.trackByFn);
  }
}
class CartContentsComponent {
  constructor() {
    this.canAdjustQuantities = false;
    this.setQuantity = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  increment(item) {
    this.setQuantity.emit({
      itemId: item.id,
      quantity: item.quantity + 1
    });
  }
  decrement(item) {
    this.setQuantity.emit({
      itemId: item.id,
      quantity: item.quantity - 1
    });
  }
  trackByFn(index, line) {
    return line.id;
  }
  trackByDiscount(index, discount) {
    return discount.adjustmentSource;
  }
  isDiscounted(line) {
    return line.discountedLinePriceWithTax < line.linePriceWithTax;
  }
  /**
   * Filters out the Promotion adjustments for an OrderLine and aggregates the discount.
   */
  getLinePromotions(adjustments) {
    const groupedPromotions = adjustments.filter(a => a.type === 'PROMOTION').reduce((groups, promotion) => {
      if (!groups[promotion.description]) {
        groups[promotion.description] = promotion.amount;
      } else {
        groups[promotion.description] += promotion.amount;
      }
      return groups;
    }, {});
    return Object.entries(groupedPromotions).map(([key, value]) => ({
      description: key,
      amount: value
    }));
  }
}
CartContentsComponent.ɵfac = function CartContentsComponent_Factory(t) {
  return new (t || CartContentsComponent)();
};
CartContentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CartContentsComponent,
  selectors: [["vsf-cart-contents"]],
  inputs: {
    cart: "cart",
    canAdjustQuantities: "canAdjustQuantities"
  },
  outputs: {
    setQuantity: "setQuantity"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "flow-root", 4, "ngIf"], [1, "flow-root"], ["role", "list", 1, "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "py-6", "flex"], [1, "flex-shrink-0", "w-24", "h-24", "border", "border-gray-200", "rounded-md", "overflow-hidden"], [1, "rounded", 3, "src", "alt"], [1, "ml-4", "flex-1", "flex", "flex-col"], [1, "flex", "justify-between", "text-base", "font-medium", "text-gray-900"], [3, "routerLink"], [1, "ml-4"], [1, "flex-1", "flex", "items-center", "justify-between", "text-sm", "text-gray-600"], [1, "flex", "space-x-4"], ["class", "btn btn-sm", 3, "click", 4, "ngIf"], [1, "qty"], [1, "total"], [1, ""], [1, "btn", "btn-sm", 3, "click"], ["aria-label", "Remove 1", "icon", "minus"], ["aria-label", "Add 1", "icon", "plus"]],
  template: function CartContentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CartContentsComponent_div_0_Template, 3, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cart);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatPricePipe, _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_1__.AssetPreviewPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 76407:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/cart-totals/cart-totals.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartTotalsComponent": () => (/* binding */ CartTotalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/format-price.pipe */ 84234);



function CartTotalsComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](line_r1.shippingMethod.name);
  }
}
class CartTotalsComponent {
  constructor() {}
  ngOnInit() {}
}
CartTotalsComponent.ɵfac = function CartTotalsComponent_Factory(t) {
  return new (t || CartTotalsComponent)();
};
CartTotalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartTotalsComponent,
  selectors: [["vsf-cart-totals"]],
  inputs: {
    cart: "cart"
  },
  decls: 23,
  vars: 10,
  consts: [[1, "border-t", "mt-6", "border-gray-200", "py-6", "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-sm"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-gray-600"], ["class", "", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-200", "pt-6"], [1, "text-base", "font-medium"], [1, "text-base", "font-medium", "text-gray-900"], [1, ""]],
  template: function CartTotalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dl", 0)(1, "div", 1)(2, "dt", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Subtotal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "dd", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "formatPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "dt", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Shipping ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "(");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CartTotalsComponent_span_12_Template, 2, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "dd", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "formatPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6)(18, "dt", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "dd", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "formatPrice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.cart.subTotalWithTax));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cart.shippingLines);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, ctx.cart.shippingWithTax), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 8, ctx.cart.totalWithTax), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatPricePipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXRvdGFscy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FydC10b3RhbHMvY2FydC10b3RhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 1513:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/centered-card/centered-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CenteredCardComponent": () => (/* binding */ CenteredCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);


function CenteredCardComponent_div_1_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function CenteredCardComponent_div_1_h6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.subTitle);
  }
}
function CenteredCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CenteredCardComponent_div_1_h5_1_Template, 2, 1, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CenteredCardComponent_div_1_h6_2_Template, 2, 1, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.subTitle);
  }
}
const _c0 = ["*"];
class CenteredCardComponent {}
CenteredCardComponent.ɵfac = function CenteredCardComponent_Factory(t) {
  return new (t || CenteredCardComponent)();
};
CenteredCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CenteredCardComponent,
  selectors: [["vsf-centered-card"]],
  inputs: {
    title: "title",
    subTitle: "subTitle"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [[1, "border", "rounded", "bg-white", "shadow", "p-4"], ["class", "mb-4", 4, "ngIf"], [1, "text-center"], [1, "mb-4"], ["class", "text-lg", 4, "ngIf"], ["class", "text-gray-600", 4, "ngIf"], [1, "text-lg"], [1, "text-gray-600"]],
  template: function CenteredCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CenteredCardComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title || ctx.subTitle);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW50ZXJlZC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2VudGVyZWQtY2FyZC9jZW50ZXJlZC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});


/***/ }),

/***/ 54468:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/collection-card/collection-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionCardComponent": () => (/* binding */ CollectionCardComponent)
/* harmony export */ });
/* harmony import */ var _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/asset-preview.pipe */ 55280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);





const _c0 = function (a1) {
  return ["/category/", a1];
};
class CollectionCardComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  ngOnChanges() {
    if (this.collection.featuredAsset) {
      const assetPreviewPipe = new _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_0__.AssetPreviewPipe();
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url('${assetPreviewPipe.transform(this.collection.featuredAsset, 400, 150)}')`);
    }
  }
}
CollectionCardComponent.ɵfac = function CollectionCardComponent_Factory(t) {
  return new (t || CollectionCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
CollectionCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CollectionCardComponent,
  selectors: [["vsf-collection-card"]],
  inputs: {
    collection: "collection"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 9,
  consts: [[1, "block", "max-w-[300px]", "relative", "rounded-lg", "overflow-hidden", "hover:opacity-75", "xl:w-auto", 3, "routerLink"], ["aria-hidden", "true", 1, ""], [1, "w-full", "h-full", "object-center", "object-cover"], [3, "src"], ["aria-hidden", "true", 1, "absolute", "w-full", "bottom-x-0", "bottom-0", "h-2/3", "bg-gradient-to-t", "from-gray-800", "opacity-50"], [1, "absolute", "w-full", "bottom-2", "mt-auto", "text-center", "text-xl", "font-bold", "text-white"]],
  template: function CollectionCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0)(1, "span", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "assetPreview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.collection.slug));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](4, 3, ctx.collection.featuredAsset, 300, 300), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.collection.name, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_0__.AssetPreviewPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 765:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown-content.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownContentDirective": () => (/* binding */ DropdownContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class DropdownContentDirective {}
DropdownContentDirective.ɵfac = function DropdownContentDirective_Factory(t) {
  return new (t || DropdownContentDirective)();
};
DropdownContentDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DropdownContentDirective,
  selectors: [["", "vsfDropdownContent", ""]]
});


/***/ }),

/***/ 95427:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown-trigger.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownTriggerDirective": () => (/* binding */ DropdownTriggerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class DropdownTriggerDirective {}
DropdownTriggerDirective.ɵfac = function DropdownTriggerDirective_Factory(t) {
  return new (t || DropdownTriggerDirective)();
};
DropdownTriggerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DropdownTriggerDirective,
  selectors: [["", "vsfDropdownTrigger", ""]]
});


/***/ }),

/***/ 61875:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 12778);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 12035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-trigger.directive */ 95427);








const _c0 = ["contentTemplate"];
const _c1 = ["contentElement"];
function DropdownComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownComponent_ng_template_2_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.stopEventPropagation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c2 = [[["", "vsfDropdownTrigger", ""]], [["", "vsfDropdownContent", ""]]];
const _c3 = ["[vsfDropdownTrigger]", "[vsfDropdownContent]"];
/**
 * A generic dropdown component.
 *
 * @example
 * ```
 * <vsf-dropdown #dropdown [position]="['top']">
 *
 *     <button vsfDropdownTrigger class="btn btn-secondary">Open it!</button>
 *
 *     <div class="card" vsfDropdownContent>
 *         <p>Here's the dropdown content!</p>
 *         <button class="btn" (click)="dropdown.close()">Close</button>
 *     </div>
 *
 * </vsf-dropdown>
 * ```
 */
class DropdownComponent {
  constructor(overlay, viewContainerRef) {
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    /** If true, the dropdown will close when the user clicks anywhere on the document */
    this.closeOnDocumentClick = true;
    /** If true, the dropdown will open when the trigger element is hovered with the mouse */
    this.openOnHover = false;
    /** Sets the preferred position of the dropdown. Actual position depends on available space */
    this.position = ['bottom'];
    this.minWidth = 0;
    this.closeFn = null;
  }
  onTriggerClick() {
    this.open();
  }
  onTriggerMouseEnter() {
    if (this.openOnHover && this.closeFn == null) {
      this.open();
    }
  }
  onTriggerMouseLeave() {
    if (this.openOnHover) {
      // this.close();
    }
  }
  /**
   * Stop the click event bubbling up from the dropdown content so as not to cause it to close.
   */
  stopEventPropagation(e) {
    e.stopPropagation();
  }
  open() {
    this.close();
    const positionStrategy = this.getPositionStrategy();
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const overlayRef = this.overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayConfig({
      scrollStrategy,
      positionStrategy,
      minWidth: this.minWidth,
      maxHeight: 500
    }));
    this.closeFn = () => {
      overlayRef.dispose();
      this.closeFn = null;
    };
    const dropdown = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this.contentTemplate, this.viewContainerRef));
    if (this.closeOnDocumentClick) {
      this.registerClickSubscriber();
    }
    if (this.openOnHover) {
      this.registerMouseoverSubscriber();
    }
  }
  close() {
    if (typeof this.closeFn === 'function') {
      this.closeFn();
    }
    if (this.clickSubscriber) {
      this.clickSubscriber.unsubscribe();
    }
    if (this.mouseoverSubscriber) {
      this.mouseoverSubscriber.unsubscribe();
    }
  }
  registerClickSubscriber() {
    this.clickSubscriber = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => {
      const clickTarget = event.target;
      return clickTarget !== this.trigger.nativeElement;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(() => {
      this.close();
    });
  }
  registerMouseoverSubscriber() {
    this.mouseoverSubscriber = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'mouseover').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => {
      const contentEl = this.contentElement.nativeElement;
      const triggerEl = this.trigger.nativeElement;
      // In a server context, the .contains method would not exist.
      if (contentEl && typeof contentEl.contains === 'function') {
        return !(contentEl.contains(e.target) || triggerEl.contains(e.target));
      }
      return true;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(e => {
      this.close();
    });
  }
  getPositionStrategy() {
    const position = {
      top: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      },
      right: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center'
      },
      bottom: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      },
      left: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center'
      },
      ['top-left']: {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      },
      ['top-right']: {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      },
      ['bottom-left']: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      },
      ['bottom-right']: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }
    };
    return this.overlay.position().flexibleConnectedTo(this.trigger).withPositions([...this.position.map(p => position[p]), ...Object.values(position)]).withPush(false);
  }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
  return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
};
DropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DropdownComponent,
  selectors: [["vsf-dropdown"]],
  contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownTriggerDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    }
  },
  viewQuery: function DropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElement = _t.first);
    }
  },
  inputs: {
    closeOnDocumentClick: "closeOnDocumentClick",
    openOnHover: "openOnHover",
    position: "position",
    minWidth: "minWidth"
  },
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "trigger", 3, "click", "mouseenter"], ["contentTemplate", ""], [1, "dropdown-content", 3, "click"], ["contentElement", ""]],
  template: function DropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownComponent_Template_div_click_0_listener() {
        return ctx.onTriggerClick();
      })("mouseenter", function DropdownComponent_Template_div_mouseenter_0_listener() {
        return ctx.onTriggerMouseEnter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DropdownComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 56620:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/radio-card/radio-card-fieldset.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioCardFieldsetComponent": () => (/* binding */ RadioCardFieldsetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 64398);




const _c0 = ["*"];
class RadioCardFieldsetComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectedIdChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.focussedId = undefined;
    this.idChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.subscription = this.idChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(250)).subscribe(item => this.selectItem.emit(item));
  }
  ngOnChanges(changes) {
    if ('selectedItemId' in changes) {
      this.selectedIdChange$.next(this.selectedItemId);
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  isSelected(item) {
    return this.selectedItemId === this.idFn(item);
  }
  isFocussed(item) {
    return this.focussedId === this.idFn(item);
  }
  selectChanged(item) {
    this.idChange$.next(item);
  }
  setFocussedId(item) {
    this.focussedId = item && this.idFn(item);
  }
}
RadioCardFieldsetComponent.ɵfac = function RadioCardFieldsetComponent_Factory(t) {
  return new (t || RadioCardFieldsetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
RadioCardFieldsetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RadioCardFieldsetComponent,
  selectors: [["vsf-radio-card-fieldset"]],
  inputs: {
    selectedItemId: "selectedItemId",
    idFn: "idFn"
  },
  outputs: {
    selectItem: "selectItem"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  template: function RadioCardFieldsetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 81758:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/radio-card/radio-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioCardComponent": () => (/* binding */ RadioCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-card-fieldset.component */ 56620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);





const _c0 = function (a0, a1, a2) {
  return {
    "border-gray-300": a0,
    "border-transparent": a1,
    "ring-2 ring-primary-500": a2
  };
};
const _c1 = function (a0, a1) {
  return {
    "border-transparent": a0,
    "border-primary-500": a1
  };
};
const _c2 = ["*"];
class RadioCardComponent {
  constructor(fieldset, changeDetector) {
    this.fieldset = fieldset;
    this.changeDetector = changeDetector;
    this.idChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.subscription = this.fieldset.selectedIdChange$.subscribe(() => this.changeDetector.markForCheck());
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  isSelected(item) {
    return this.fieldset.isSelected(item);
  }
  isFocussed(item) {
    return this.fieldset.isFocussed(item);
  }
  selectChanged(item) {
    this.fieldset.selectChanged(item);
  }
  setFocussedId(item) {
    this.fieldset.setFocussedId(item);
  }
  getItemId(item) {
    return this.fieldset.idFn(item);
  }
}
RadioCardComponent.ɵfac = function RadioCardComponent_Factory(t) {
  return new (t || RadioCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_0__.RadioCardFieldsetComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
RadioCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RadioCardComponent,
  selectors: [["vsf-radio-card"]],
  contentQueries: function RadioCardComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    }
  },
  inputs: {
    item: "item"
  },
  exportAs: ["KbRadioCard"],
  ngContentSelectors: _c2,
  decls: 8,
  vars: 13,
  consts: [[1, "relative", "bg-white", "border", "rounded-lg", "shadow-sm", "p-4", "flex", "cursor-pointer", "focus:outline-none", 3, "ngClass"], ["type", "radio", "name", "delivery-method", 1, "sr-only", 3, "value", "focus", "blur", "change"], [1, "flex-1", "flex"], [1, "flex", "flex-col"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-primary-600"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], ["aria-hidden", "true", 1, "absolute", "-inset-px", "rounded-lg", "border-2", "pointer-events-none", 3, "ngClass"]],
  template: function RadioCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function RadioCardComponent_Template_input_focus_1_listener() {
        return ctx.setFocussedId(ctx.item);
      })("blur", function RadioCardComponent_Template_input_blur_1_listener() {
        return ctx.setFocussedId(undefined);
      })("change", function RadioCardComponent_Template_input_change_1_listener() {
        return ctx.selectChanged(ctx.item);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](6, _c0, !ctx.isSelected(ctx.item), ctx.isSelected(ctx.item), ctx.isFocussed(ctx.item)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.getItemId(ctx.item));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", !ctx.isSelected(ctx.item));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", !ctx.isSelected(ctx.item));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c1, !ctx.isSelected(ctx.item), ctx.isSelected(ctx.item)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmFkaW8tY2FyZC9yYWRpby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});


/***/ }),

/***/ 80117:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sign-in/sign-in.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _sign_in_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.graphql */ 38467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);







const _c0 = function () {
  return ["/account/register"];
};
function SignInComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No account? Register here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function (a0) {
  return {
    email: a0
  };
};
const _c2 = function (a1) {
  return ["/account/forgotten-password", a1];
};
class SignInComponent {
  constructor(dataService, stateService, router, changeDetector) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.router = router;
    this.changeDetector = changeDetector;
    this.displayRegisterLink = true;
    this.rememberMe = false;
    this.invalidCredentials = false;
  }
  signIn() {
    this.dataService.mutate(_sign_in_graphql__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN, {
      emailAddress: this.emailAddress,
      password: this.password,
      rememberMe: this.rememberMe
    }).subscribe({
      next: ({
        login
      }) => {
        switch (login.__typename) {
          case 'CurrentUser':
            this.stateService.setState('signedIn', true);
            const commands = this.navigateToOnSuccess || ['/'];
            this.router.navigate(commands);
            break;
          case 'NativeAuthStrategyError':
          case 'InvalidCredentialsError':
            this.displayCredentialsError();
            break;
        }
      }
    });
  }
  displayCredentialsError() {
    this.invalidCredentials = false;
    this.changeDetector.markForCheck();
    setTimeout(() => {
      this.invalidCredentials = true;
      this.changeDetector.markForCheck();
    }, 50);
  }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) {
  return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
SignInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SignInComponent,
  selectors: [["vsf-sign-in"]],
  inputs: {
    navigateToOnSuccess: "navigateToOnSuccess",
    displayRegisterLink: "displayRegisterLink"
  },
  decls: 23,
  vars: 10,
  consts: [[1, "space-y-6", 3, "submit"], ["signInForm", "ngForm"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1"], ["id", "email", "name", "email", "type", "email", "autocomplete", "email", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "password", "name", "password", "type", "password", "autocomplete", "current-password", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center"], ["id", "remember-me", "name", "remember-me", "type", "checkbox", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-primary-600", "focus:ring-primary-500", 3, "ngModel", "ngModelChange"], ["for", "remember-me", 1, "ml-2", "block", "text-sm", "text-gray-900"], [1, "text-sm"], [1, "font-medium", "text-primary-600", "hover:text-primary-500", 3, "routerLink"], ["type", "submit", 1, "w-full", "btn-primary", 3, "disabled"], ["class", "text-sm font-medium text-primary-600 hover:text-primary-500 mx-auto", 4, "ngIf"], [1, "text-sm", "font-medium", "text-primary-600", "hover:text-primary-500", "mx-auto"], [3, "routerLink"]],
  template: function SignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_0_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div")(3, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3)(11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.rememberMe = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Remember me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Forgot your password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SignInComponent_div_22_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.emailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.rememberMe);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, (tmp_3_0 = ctx.emailAddress) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "")));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.displayRegisterLink);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});


/***/ }),

/***/ 38467:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/sign-in/sign-in.graphql.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIGN_IN": () => (/* binding */ SIGN_IN)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const SIGN_IN = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation SignIn($emailAddress: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $emailAddress, password: $password, rememberMe: $rememberMe) {
            ...on CurrentUser {
                id
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 55280:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/asset-preview.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetPreviewPipe": () => (/* binding */ AssetPreviewPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class AssetPreviewPipe {
  transform(asset, ...args) {
    if (!asset) {
      return '';
    }
    if (!asset.preview || typeof asset.preview !== 'string') {
      throw new Error(`Expected an Asset, got ${JSON.stringify(asset)}`);
    }
    const previewUrl = asset.preview.replace(/\\/g, '/');
    const fp = asset.focalPoint ? `&fpx=${asset.focalPoint.x}&fpy=${asset.focalPoint.y}` : '';
    const query = this.getSizeQuery(args);
    return `${previewUrl}?${query}${fp}&format=webp`;
  }
  getSizeQuery(args) {
    if (!args) {
      return `preset=thumb`;
    }
    if (args.length === 1) {
      if (typeof args[0] === 'string') {
        return `preset=${args[0]}`;
      } else {
        return `w=${args[0]}`;
      }
    } else {
      return `w=${args[0]}&h=${args[1]}`;
    }
  }
}
AssetPreviewPipe.ɵfac = function AssetPreviewPipe_Factory(t) {
  return new (t || AssetPreviewPipe)();
};
AssetPreviewPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "assetPreview",
  type: AssetPreviewPipe,
  pure: true
});


/***/ }),

/***/ 84234:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/format-price.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatPricePipe": () => (/* binding */ FormatPricePipe)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _get_active_channel_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-active-channel.graphql */ 52757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/providers/data/data.service */ 61199);




/**
 * Cache the resolved promise so that the activeChannel only needs
 * to be fetched once on the first invocation of the pipe.
 */
let channelDataPromise;
/**
 * A pipe which formats a price (always given as an integer by Venure) according
 * to the currencyCode of the current Channel.
 */
class FormatPricePipe {
  constructor(changeDetector, dataService) {
    this.changeDetector = changeDetector;
    this.dataService = dataService;
    this.latestValue = null;
    this.latestReturnedValue = null;
  }
  transform(value) {
    if (this.latestValue !== value) {
      this.latestValue = value;
      this.formatCurrency(value);
    }
    return this.latestReturnedValue;
  }
  formatCurrency(value) {
    this.getActiveChannel().then(channel => {
      const formatter = Intl.NumberFormat(channel.defaultLanguageCode, {
        style: 'currency',
        currency: channel.currencyCode
      });
      this.latestReturnedValue = formatter.format(value / 100);
      this.changeDetector.markForCheck();
    });
  }
  getActiveChannel() {
    if (!channelDataPromise) {
      channelDataPromise = this.dataService.query(_get_active_channel_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_ACTIVE_CHANNEL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.activeChannel)).toPromise();
    }
    return channelDataPromise;
  }
}
FormatPricePipe.ɵfac = function FormatPricePipe_Factory(t) {
  return new (t || FormatPricePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService, 16));
};
FormatPricePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
  name: "formatPrice",
  type: FormatPricePipe,
  pure: false
});


/***/ }),

/***/ 52757:
/*!************************************************************!*\
  !*** ./src/app/shared/pipes/get-active-channel.graphql.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ACTIVE_CHANNEL": () => (/* binding */ GET_ACTIVE_CHANNEL)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const GET_ACTIVE_CHANNEL = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetActiveChannel {
        activeChannel {
            id
            code
            currencyCode
            defaultLanguageCode
        }
    }
`;

/***/ }),

/***/ 50028:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/product-url.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUrlPipe": () => (/* binding */ ProductUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class ProductUrlPipe {
  transform(value) {
    const {
      id,
      productId,
      slug
    } = value;
    return slug;
  }
}
ProductUrlPipe.ɵfac = function ProductUrlPipe_Factory(t) {
  return new (t || ProductUrlPipe)();
};
ProductUrlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "productUrl",
  type: ProductUrlPipe,
  pure: true
});


/***/ }),

/***/ 75940:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 42512);


class SafeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafeHtmlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true
});


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ 12778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _core_components_modal_dialog_dialog_buttons_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/components/modal-dialog/dialog-buttons.directive */ 18104);
/* harmony import */ var _core_components_modal_dialog_dialog_component_outlet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/components/modal-dialog/dialog-component-outlet.component */ 16046);
/* harmony import */ var _core_components_modal_dialog_dialog_title_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/components/modal-dialog/dialog-title.directive */ 14915);
/* harmony import */ var _core_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/components/modal-dialog/modal-dialog.component */ 19406);
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/components/notification/notification.component */ 89819);
/* harmony import */ var _components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/address-card/address-card.component */ 40246);
/* harmony import */ var _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/address-form/address-form.component */ 74990);
/* harmony import */ var _components_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/address-modal/address-modal.component */ 49844);
/* harmony import */ var _components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cart-contents/cart-contents.component */ 58593);
/* harmony import */ var _components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart-totals/cart-totals.component */ 76407);
/* harmony import */ var _components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/centered-card/centered-card.component */ 1513);
/* harmony import */ var _components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/collection-card/collection-card.component */ 54468);
/* harmony import */ var _components_dropdown_dropdown_content_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dropdown/dropdown-content.directive */ 765);
/* harmony import */ var _components_dropdown_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dropdown/dropdown-trigger.directive */ 95427);
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ 61875);
/* harmony import */ var _components_radio_card_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/radio-card/radio-card-fieldset.component */ 56620);
/* harmony import */ var _components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/radio-card/radio-card.component */ 81758);
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ 80117);
/* harmony import */ var _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/asset-preview.pipe */ 55280);
/* harmony import */ var _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/format-price.pipe */ 84234);
/* harmony import */ var _pipes_product_url_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/product-url.pipe */ 50028);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ 75940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 86839);




























const SHARED_DECLARATIONS = [_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_8__.CartContentsComponent, _components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_5__.AddressCardComponent, _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__.SignInComponent, _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_6__.AddressFormComponent, _components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_10__.CenteredCardComponent, _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.DropdownComponent, _components_dropdown_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_13__.DropdownTriggerDirective, _components_dropdown_dropdown_content_directive__WEBPACK_IMPORTED_MODULE_12__.DropdownContentDirective, _core_components_modal_dialog_dialog_buttons_directive__WEBPACK_IMPORTED_MODULE_0__.DialogButtonsDirective, _core_components_modal_dialog_dialog_title_directive__WEBPACK_IMPORTED_MODULE_2__.DialogTitleDirective, _core_components_modal_dialog_dialog_component_outlet_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponentOutletComponent, _core_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, _components_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_7__.AddressModalComponent, _components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_11__.CollectionCardComponent, _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__.NotificationComponent, _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_19__.FormatPricePipe, _pipes_product_url_pipe__WEBPACK_IMPORTED_MODULE_20__.ProductUrlPipe, _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_18__.AssetPreviewPipe, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_21__.SafeHtmlPipe, _components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_16__.RadioCardComponent, _components_radio_card_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_15__.RadioCardFieldsetComponent, _components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_9__.CartTotalsComponent];
const IMPORTS = [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule];
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
  imports: [IMPORTS, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_8__.CartContentsComponent, _components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_5__.AddressCardComponent, _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__.SignInComponent, _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_6__.AddressFormComponent, _components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_10__.CenteredCardComponent, _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.DropdownComponent, _components_dropdown_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_13__.DropdownTriggerDirective, _components_dropdown_dropdown_content_directive__WEBPACK_IMPORTED_MODULE_12__.DropdownContentDirective, _core_components_modal_dialog_dialog_buttons_directive__WEBPACK_IMPORTED_MODULE_0__.DialogButtonsDirective, _core_components_modal_dialog_dialog_title_directive__WEBPACK_IMPORTED_MODULE_2__.DialogTitleDirective, _core_components_modal_dialog_dialog_component_outlet_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponentOutletComponent, _core_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, _components_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_7__.AddressModalComponent, _components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_11__.CollectionCardComponent, _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__.NotificationComponent, _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_19__.FormatPricePipe, _pipes_product_url_pipe__WEBPACK_IMPORTED_MODULE_20__.ProductUrlPipe, _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_18__.AssetPreviewPipe, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_21__.SafeHtmlPipe, _components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_16__.RadioCardComponent, _components_radio_card_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_15__.RadioCardFieldsetComponent, _components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_9__.CartTotalsComponent],
    imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule],
    exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, _components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_8__.CartContentsComponent, _components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_5__.AddressCardComponent, _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__.SignInComponent, _components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_6__.AddressFormComponent, _components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_10__.CenteredCardComponent, _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.DropdownComponent, _components_dropdown_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_13__.DropdownTriggerDirective, _components_dropdown_dropdown_content_directive__WEBPACK_IMPORTED_MODULE_12__.DropdownContentDirective, _core_components_modal_dialog_dialog_buttons_directive__WEBPACK_IMPORTED_MODULE_0__.DialogButtonsDirective, _core_components_modal_dialog_dialog_title_directive__WEBPACK_IMPORTED_MODULE_2__.DialogTitleDirective, _core_components_modal_dialog_dialog_component_outlet_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponentOutletComponent, _core_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, _components_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_7__.AddressModalComponent, _components_collection_card_collection_card_component__WEBPACK_IMPORTED_MODULE_11__.CollectionCardComponent, _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__.NotificationComponent, _pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_19__.FormatPricePipe, _pipes_product_url_pipe__WEBPACK_IMPORTED_MODULE_20__.ProductUrlPipe, _pipes_asset_preview_pipe__WEBPACK_IMPORTED_MODULE_18__.AssetPreviewPipe, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_21__.SafeHtmlPipe, _components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_16__.RadioCardComponent, _components_radio_card_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_15__.RadioCardFieldsetComponent, _components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_9__.CartTotalsComponent]
  });
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiHost: 'http://localhost',
  apiPort: 3000,
  shopApiPath: 'shop-api',
  baseHref: '/',
  tokenMethod: 'bearer'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => {
  console.log(err);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map