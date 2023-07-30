"use strict";
(self["webpackChunkreference_storefront"] = self["webpackChunkreference_storefront"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 28400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutModule": () => (/* binding */ CheckoutModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _checkout_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.routes */ 90864);
/* harmony import */ var _components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkout-confirmation/checkout-confirmation.component */ 4218);
/* harmony import */ var _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkout-payment/checkout-payment.component */ 43587);
/* harmony import */ var _components_checkout_process_checkout_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkout-process/checkout-process.component */ 31966);
/* harmony import */ var _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checkout-shipping/checkout-shipping.component */ 888);
/* harmony import */ var _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkout-sign-in/checkout-sign-in.component */ 66508);
/* harmony import */ var _components_checkout_stage_indicator_checkout_stage_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/checkout-stage-indicator/checkout-stage-indicator.component */ 56236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);











const DECLARATIONS = [_components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutConfirmationComponent, _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_3__.CheckoutPaymentComponent, _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutShippingComponent, _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutSignInComponent, _components_checkout_process_checkout_process_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutProcessComponent, _components_checkout_stage_indicator_checkout_stage_indicator_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutStageIndicatorComponent];
class CheckoutModule {}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) {
  return new (t || CheckoutModule)();
};
CheckoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: CheckoutModule
});
CheckoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_checkout_routes__WEBPACK_IMPORTED_MODULE_1__.routes)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CheckoutModule, {
    declarations: [_components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutConfirmationComponent, _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_3__.CheckoutPaymentComponent, _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutShippingComponent, _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutSignInComponent, _components_checkout_process_checkout_process_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutProcessComponent, _components_checkout_stage_indicator_checkout_stage_indicator_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutStageIndicatorComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 90864:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/checkout-confirmation/checkout-confirmation.component */ 4218);
/* harmony import */ var _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/checkout-payment/checkout-payment.component */ 43587);
/* harmony import */ var _components_checkout_process_checkout_process_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkout-process/checkout-process.component */ 31966);
/* harmony import */ var _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkout-shipping/checkout-shipping.component */ 888);
/* harmony import */ var _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkout-sign-in/checkout-sign-in.component */ 66508);
/* harmony import */ var _providers_checkout_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/checkout-resolver */ 13591);
/* harmony import */ var _providers_checkout_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/checkout.guard */ 98705);







const routes = [{
  path: '',
  component: _components_checkout_process_checkout_process_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutProcessComponent,
  resolve: {
    activeOrder: _providers_checkout_resolver__WEBPACK_IMPORTED_MODULE_5__.CheckoutResolver
  },
  children: [{
    path: '',
    pathMatch: 'full',
    component: _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutSignInComponent,
    canActivate: [_providers_checkout_guard__WEBPACK_IMPORTED_MODULE_6__.CheckoutGuard]
  }, {
    path: 'shipping',
    component: _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_3__.CheckoutShippingComponent,
    canActivate: [_providers_checkout_guard__WEBPACK_IMPORTED_MODULE_6__.CheckoutGuard]
  }, {
    path: 'payment',
    component: _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutPaymentComponent,
    canActivate: [_providers_checkout_guard__WEBPACK_IMPORTED_MODULE_6__.CheckoutGuard]
  }, {
    path: 'confirmation/:code',
    component: _components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutConfirmationComponent,
    canActivate: [_providers_checkout_guard__WEBPACK_IMPORTED_MODULE_6__.CheckoutGuard]
  }]
}];

/***/ }),

/***/ 4218:
/*!**********************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-confirmation/checkout-confirmation.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutConfirmationComponent": () => (/* binding */ CheckoutConfirmationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var _account_components_register_register_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../account/components/register/register.graphql */ 61502);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _checkout_confirmation_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-confirmation.graphql */ 86429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/cart-contents/cart-contents.component */ 58593);
/* harmony import */ var _shared_components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/cart-totals/cart-totals.component */ 76407);












function CheckoutConfirmationComponent_div_0_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Great! Now check your email (", order_r2.customer.emailAddress, ") to complete registration. ");
  }
}
function CheckoutConfirmationComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Create an account to enjoy faster checkouts, order tracking, order history and more!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckoutConfirmationComponent_div_0_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Create account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CheckoutConfirmationComponent_div_0_div_16_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.registrationSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.registrationSent);
  }
}
function CheckoutConfirmationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Thank you for your order!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 3)(5, "li", 4)(6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Order code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "li", 4)(11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Placed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CheckoutConfirmationComponent_div_0_div_16_Template, 6, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "vsf-cart-contents", 9)(19, "vsf-cart-totals", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](order_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 6, order_r2.updatedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !order_r2.customer.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cart", order_r2)("canAdjustQuantities", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cart", order_r2);
  }
}
function CheckoutConfirmationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Page not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
class CheckoutConfirmationComponent {
  constructor(stateService, dataService, changeDetector, route) {
    this.stateService = stateService;
    this.dataService = dataService;
    this.changeDetector = changeDetector;
    this.route = route;
    this.registrationSent = false;
  }
  ngOnInit() {
    const orderRequest$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(paramMap => paramMap.get('code')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(code => this.dataService.query(_checkout_confirmation_graphql__WEBPACK_IMPORTED_MODULE_2__.GET_ORDER_BY_CODE, {
      code
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(data => data.orderByCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this.order$ = orderRequest$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined));
    this.notFound$ = orderRequest$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(res => !res));
  }
  register() {
    this.order$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.mergeMap)(order => {
      const customer = order?.customer;
      if (customer) {
        return this.dataService.mutate(_account_components_register_register_graphql__WEBPACK_IMPORTED_MODULE_0__.REGISTER, {
          input: {
            emailAddress: customer.emailAddress,
            firstName: customer.firstName,
            lastName: customer.lastName
          }
        });
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)({});
      }
    })).subscribe(() => {
      this.registrationSent = true;
      this.changeDetector.markForCheck();
    });
  }
}
CheckoutConfirmationComponent.ɵfac = function CheckoutConfirmationComponent_Factory(t) {
  return new (t || CheckoutConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
};
CheckoutConfirmationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CheckoutConfirmationComponent,
  selectors: [["vsf-checkout-confirmation"]],
  decls: 4,
  vars: 6,
  consts: [[4, "ngIf"], [1, "text-center"], [1, "text-3xl"], [1, "mt-4"], [1, "space-x-2"], [1, ""], [1, "text-gray-600", "font-medium"], ["class", "border rounded bg-white max-w-md mx-auto p-4 my-4", 4, "ngIf"], [1, "mt-12"], [3, "cart", "canAdjustQuantities"], [3, "cart"], [1, "border", "rounded", "bg-white", "max-w-md", "mx-auto", "p-4", "my-4"], [1, "lead"], [1, "btn-primary", "mx-auto", "mt-6", "block", 3, "disabled", "click"], ["class", "mt-4 border-green-200 bg-green-50 p-4 text-sm text-green-700", 4, "ngIf"], [1, "mt-4", "border-green-200", "bg-green-50", "p-4", "text-sm", "text-green-700"], [1, "display-4"]],
  template: function CheckoutConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CheckoutConfirmationComponent_div_0_Template, 20, 9, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CheckoutConfirmationComponent_ng_container_2_Template, 3, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.order$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx.notFound$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_5__.CartContentsComponent, _shared_components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_6__.CartTotalsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 86429:
/*!********************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-confirmation/checkout-confirmation.graphql.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ORDER_BY_CODE": () => (/* binding */ GET_ORDER_BY_CODE)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_ORDER_BY_CODE = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetOrderByCode($code: String!) {
        orderByCode(code: $code) {
            ...Cart
            updatedAt
            customer {
                id
                emailAddress
                firstName
                lastName
                user {
                    id
                    identifier
                    verified
                }
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
`;

/***/ }),

/***/ 43587:
/*!************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-payment/checkout-payment.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPaymentComponent": () => (/* binding */ CheckoutPaymentComponent)
/* harmony export */ });
/* harmony import */ var _Users_triton_Desktop_ecommerce_store_front_tohol_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _checkout_payment_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-payment.graphql */ 30221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);










function CheckoutPaymentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.paymentErrorMessage, "\n");
  }
}
function CheckoutPaymentComponent_ng_container_1_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", month_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", month_r6, " ");
  }
}
function CheckoutPaymentComponent_ng_container_1_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", year_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", year_r7, " ");
  }
}
function CheckoutPaymentComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " This is an example payment form. Do not use real card details! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function CheckoutPaymentComponent_ng_container_1_Template_form_submit_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const paymentMethod_r2 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.completeOrder(paymentMethod_r2.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CheckoutPaymentComponent_ng_container_1_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.cardNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CheckoutPaymentComponent_ng_container_1_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.expMonth = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CheckoutPaymentComponent_ng_container_1_option_17_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CheckoutPaymentComponent_ng_container_1_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.expYear = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CheckoutPaymentComponent_ng_container_1_option_21_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Complete order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const paymentMethod_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Pay with method \"", paymentMethod_r2.code, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", true)("ngModel", ctx_r1.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.expMonth)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getMonths());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.expYear)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getYears());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r3.pristine || _r3.invalid);
  }
}
class CheckoutPaymentComponent {
  constructor(dataService, stateService, router, route) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.paymentMethods$ = this.dataService.query(_checkout_payment_graphql__WEBPACK_IMPORTED_MODULE_1__.GET_ELIGIBLE_PAYMENT_METHODS).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => res.eligiblePaymentMethods));
  }
  getMonths() {
    return Array.from({
      length: 12
    }).map((_, i) => i + 1);
  }
  getYears() {
    const year = new Date().getFullYear();
    return Array.from({
      length: 10
    }).map((_, i) => year + i);
  }
  completeOrder(paymentMethodCode) {
    var _this = this;
    this.dataService.mutate(_checkout_payment_graphql__WEBPACK_IMPORTED_MODULE_1__.ADD_PAYMENT, {
      input: {
        method: paymentMethodCode,
        metadata: {}
      }
    }).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_triton_Desktop_ecommerce_store_front_tohol_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
        addPaymentToOrder
      }) {
        switch (addPaymentToOrder?.__typename) {
          case 'Order':
            const order = addPaymentToOrder;
            if (order && (order.state === 'PaymentSettled' || order.state === 'PaymentAuthorized')) {
              yield new Promise(resolve => setTimeout(() => {
                _this.stateService.setState('activeOrderId', null);
                resolve();
              }, 500));
              _this.router.navigate(['../confirmation', order.code], {
                relativeTo: _this.route
              });
            }
            break;
          case 'OrderPaymentStateError':
          case 'PaymentDeclinedError':
          case 'PaymentFailedError':
          case 'OrderStateTransitionError':
            _this.paymentErrorMessage = addPaymentToOrder.message;
            break;
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
}
CheckoutPaymentComponent.ɵfac = function CheckoutPaymentComponent_Factory(t) {
  return new (t || CheckoutPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
CheckoutPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CheckoutPaymentComponent,
  selectors: [["vsf-checkout-payment"]],
  decls: 3,
  vars: 4,
  consts: [["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "font-medium"], ["role", "alert", 1, "alert", "alert-info", "my-4"], [1, "border", "bg-white", "rounded", "p-4", "max-w-sm", 3, "submit"], ["paymentForm", "ngForm"], [1, "flex", "items-center", "space-x-2"], [1, "w-16", "text-gray-600"], ["icon", "credit-card"], ["type", "text", "name", "cardNumber", "placeholder", "Credit card #", 1, "block", "flex-1", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm", 3, "required", "ngModel", "ngModelChange"], [1, "flex", "items-center", "mt-4", "space-x-2"], ["for", "month", 1, "w-16", "text-gray-600"], ["id", "month", "name", "expMonth", 1, "block", "flex-1", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm", 3, "ngModel", "required", "ngModelChange"], ["selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "year", "name", "expYear", 1, "block", "flex-1", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm", 3, "ngModel", "required", "ngModelChange"], [1, "btn-primary", "w-full", "mt-6", 3, "disabled"], [3, "ngValue"]],
  template: function CheckoutPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CheckoutPaymentComponent_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CheckoutPaymentComponent_ng_container_1_Template, 24, 12, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.paymentErrorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.paymentMethods$));
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 30221:
/*!**********************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-payment/checkout-payment.graphql.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PAYMENT": () => (/* binding */ ADD_PAYMENT),
/* harmony export */   "GET_ELIGIBLE_PAYMENT_METHODS": () => (/* binding */ GET_ELIGIBLE_PAYMENT_METHODS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_ELIGIBLE_PAYMENT_METHODS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetEligiblePaymentMethods {
        eligiblePaymentMethods {
            id
            code
            eligibilityMessage
            isEligible
        }
    }
`;
const ADD_PAYMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation AddPayment($input: PaymentInput!) {
        addPaymentToOrder(input: $input) {
            ...Cart
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 31966:
/*!************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-process/checkout-process.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutProcessComponent": () => (/* binding */ CheckoutProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var _checkout_process_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-process.graphql */ 55183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/cart-contents/cart-contents.component */ 58593);
/* harmony import */ var _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/address-card/address-card.component */ 40246);
/* harmony import */ var _shared_components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/cart-totals/cart-totals.component */ 76407);
/* harmony import */ var _checkout_stage_indicator_checkout_stage_indicator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkout-stage-indicator/checkout-stage-indicator.component */ 56236);












function CheckoutProcessComponent_div_0_div_9_vsf_address_card_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CheckoutProcessComponent_div_0_div_9_vsf_address_card_3_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.changeShippingAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Change ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CheckoutProcessComponent_div_0_div_9_vsf_address_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "vsf-address-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CheckoutProcessComponent_div_0_div_9_vsf_address_card_3_button_1_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cart_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("address", cart_r3.shippingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r4.activeStage$) === 3);
  }
}
function CheckoutProcessComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "vsf-cart-contents", 9)(2, "vsf-cart-totals", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CheckoutProcessComponent_div_0_div_9_vsf_address_card_3_Template, 3, 4, "vsf-address-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cart_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cart", cart_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cart", cart_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", cart_r3.shippingAddress == null ? null : cart_r3.shippingAddress.streetLine1);
  }
}
function CheckoutProcessComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "vsf-checkout-stage-indicator", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CheckoutProcessComponent_div_0_div_9_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const activeStage_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeStage", activeStage_r1)("signedIn", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, ctx_r0.signedIn$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", activeStage_r1 === 4 ? "max-w-2xl mx-auto" : "lg:grid lg:grid-cols-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 6, ctx_r0.cart$));
  }
}
class CheckoutProcessComponent {
  constructor(dataService, stateService, route, router) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.signedIn$ = this.stateService.select(state => state.signedIn);
    this.cart$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(data => data.activeOrder));
    this.nextStates$ = this.dataService.query(_checkout_process_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_NEXT_ORDER_STATES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => data.nextOrderStates));
    this.activeStage$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => {
      const firstChild = this.route.snapshot.firstChild;
      if (firstChild && firstChild.routeConfig) {
        switch (firstChild.routeConfig.path) {
          case '':
            return 1;
          case 'shipping':
            return 2;
          case 'payment':
            return 3;
          case 'confirmation/:code':
            return 4;
        }
      }
      return 1;
    }));
  }
  changeShippingAddress() {
    this.dataService.mutate(_checkout_process_graphql__WEBPACK_IMPORTED_MODULE_0__.TRANSITION_TO_ADDING_ITEMS).subscribe(() => {
      this.router.navigate(['./shipping'], {
        relativeTo: this.route
      });
    });
  }
}
CheckoutProcessComponent.ɵfac = function CheckoutProcessComponent_Factory(t) {
  return new (t || CheckoutProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
CheckoutProcessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CheckoutProcessComponent,
  selectors: [["vsf-checkout-process"]],
  decls: 2,
  vars: 3,
  consts: [["class", "bg-gray-50", 4, "ngIf"], [1, "bg-gray-50"], [1, "lg:max-w-7xl", "max-w-2xl", "mx-auto", "pt-8", "pb-24", "px-4", "sm:px-6", "lg:px-8"], [1, "sr-only"], [3, "activeStage", "signedIn"], [1, "lg:grid-cols-2", "lg:gap-x-12", "xl:gap-x-16", 3, "ngClass"], [1, "main"], ["class", "summary", 4, "ngIf"], [1, "summary"], [1, "mb-3", 3, "cart"], [3, "cart"], ["class", "w-48 block", "title", "Shipping address", 3, "address", 4, "ngIf"], ["title", "Shipping address", 1, "w-48", "block", 3, "address"], ["class", "border px-2 py-1 mt-2 rounded text-sm hover:bg-gray-100", 3, "click", 4, "ngIf"], [1, "border", "px-2", "py-1", "mt-2", "rounded", "text-sm", "hover:bg-gray-100", 3, "click"]],
  template: function CheckoutProcessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CheckoutProcessComponent_div_0_Template, 11, 8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.activeStage$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_3__.CartContentsComponent, _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_4__.AddressCardComponent, _shared_components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_5__.CartTotalsComponent, _checkout_stage_indicator_checkout_stage_indicator_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutStageIndicatorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 55183:
/*!**********************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-process/checkout-process.graphql.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_NEXT_ORDER_STATES": () => (/* binding */ GET_NEXT_ORDER_STATES),
/* harmony export */   "TRANSITION_TO_ADDING_ITEMS": () => (/* binding */ TRANSITION_TO_ADDING_ITEMS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_NEXT_ORDER_STATES = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetNextOrderStates {
        nextOrderStates
    }
`;
const TRANSITION_TO_ADDING_ITEMS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation TransitionToAddingItems {
        transitionOrderToState(state: "AddingItems") {
            ...Cart
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 888:
/*!**************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-shipping/checkout-shipping.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutShippingComponent": () => (/* binding */ CheckoutShippingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _shared_components_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/address-modal/address-modal.component */ 49844);
/* harmony import */ var _checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-shipping.graphql */ 79100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _core_providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/providers/modal/modal.service */ 86687);
/* harmony import */ var _core_providers_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/providers/notification/notification.service */ 44497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/address-form/address-form.component */ 74990);
/* harmony import */ var _shared_components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/radio-card/radio-card.component */ 81758);
/* harmony import */ var _shared_components_radio_card_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/radio-card/radio-card-fieldset.component */ 56620);
/* harmony import */ var _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/format-price.pipe */ 84234);




















const _c0 = ["addressForm"];
function CheckoutShippingComponent_div_0_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", line_r7, " ");
  }
}
function CheckoutShippingComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CheckoutShippingComponent_div_0_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const address_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r8.setShippingAddress(address_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CheckoutShippingComponent_div_0_div_6_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r4.getLines(address_r5));
  }
}
function CheckoutShippingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CheckoutShippingComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r10.step = "selectAddress");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Select Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 15)(5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, CheckoutShippingComponent_div_0_div_6_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 18)(9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CheckoutShippingComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.createAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Add new address");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r0.step === "selectAddress" ? "block" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 2, ctx_r0.customerAddresses$));
  }
}
function CheckoutShippingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 23)(1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Contact information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focusout", function CheckoutShippingComponent_div_3_Template_form_focusout_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.onCustomerFormBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 25)(5, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 8)(10, "div")(11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " First name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div")(16, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, " Last name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
  }
}
function CheckoutShippingComponent_vsf_radio_card_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vsf-radio-card", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "formatPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const method_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("item", method_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", method_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 3, method_r15.priceWithTax), " ");
  }
}
class CheckoutShippingComponent {
  constructor(dataService, stateService, changeDetector, modalService, notificationService, formBuilder, route, router) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.changeDetector = changeDetector;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
  }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.email]
    });
    this.signedIn$ = this.stateService.select(state => state.signedIn);
    this.customerAddresses$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_CUSTOMER_ADDRESSES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => data.activeCustomer ? data.activeCustomer.addresses || [] : []));
    this.availableCountries$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_AVAILABLE_COUNTRIES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => data.availableCountries));
    const shippingData$ = this.dataService.query(_checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__.GET_ORDER_SHIPPING_DATA);
    this.shippingAddress$ = shippingData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => data.activeOrder && data.activeOrder.shippingAddress));
    this.eligibleShippingMethods$ = this.shippingAddress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(() => this.dataService.query(_checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__.GET_ELIGIBLE_SHIPPING_METHODS)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => data.eligibleShippingMethods));
    shippingData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => data.activeOrder && data.activeOrder.customer), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(customer => {
      if (customer) {
        this.contactForm.patchValue({
          firstName: customer.firstName,
          lastName: customer.lastName,
          emailAddress: customer.emailAddress
        }, {
          emitEvent: false
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getLines(address) {
    return [address.fullName, address.company, address.streetLine1, address.streetLine2, address.province, address.postalCode, address.country.name].filter(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined);
  }
  createAddress() {
    this.modalService.fromComponent(_shared_components_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_2__.AddressModalComponent, {
      locals: {
        title: 'Create new address'
      },
      closable: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(() => this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_CUSTOMER_ADDRESSES, {}, 'network-only'))).subscribe();
  }
  editAddress(address) {
    this.addressForm.addressForm.patchValue({
      ...address,
      countryCode: address.country.code
    });
  }
  onCustomerFormBlur() {
    this.setCustomerForOrder()?.subscribe();
  }
  onAddressFormBlur(addressForm) {
    if (addressForm.dirty && addressForm.valid) {
      this.setShippingAddress(addressForm.value);
    }
  }
  setShippingAddress(value) {
    const input = this.valueToAddressInput(value);
    this.dataService.mutate(_checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__.SET_SHIPPING_ADDRESS, {
      input
    }).subscribe(data => {
      this.changeDetector.markForCheck();
    });
  }
  setShippingMethod(id) {
    this.shippingMethodId = id;
  }
  proceedToPayment() {
    const shippingMethodId = this.shippingMethodId;
    if (shippingMethodId) {
      this.stateService.select(state => state.signedIn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.mergeMap)(signedIn => !signedIn ? this.setCustomerForOrder() || (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)({}) : (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)({})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.mergeMap)(() => this.dataService.mutate(_checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__.SET_SHIPPING_METHOD, {
        id: shippingMethodId
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.mergeMap)(() => this.dataService.mutate(_checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__.TRANSITION_TO_ARRANGING_PAYMENT))).subscribe(data => {
        this.router.navigate(['../payment'], {
          relativeTo: this.route
        });
      });
    }
  }
  getId(method) {
    return method.id;
  }
  setCustomerForOrder() {
    if (this.contactForm.valid) {
      return this.dataService.mutate(_checkout_shipping_graphql__WEBPACK_IMPORTED_MODULE_3__.SET_CUSTOMER_FOR_ORDER, {
        input: this.contactForm.value
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(({
        setCustomerForOrder
      }) => {
        if (setCustomerForOrder && setCustomerForOrder.__typename !== 'Order') {
          this.notificationService.error(setCustomerForOrder.message).subscribe();
        }
      }));
    }
  }
  valueToAddressInput(value) {
    return {
      city: value.city || '',
      company: value.company || '',
      countryCode: this.isFormValue(value) ? value.countryCode : value.country.code,
      defaultBillingAddress: value.defaultBillingAddress,
      defaultShippingAddress: value.defaultShippingAddress,
      fullName: value.fullName || '',
      phoneNumber: value.phoneNumber || '',
      postalCode: value.postalCode || '',
      province: value.province || '',
      streetLine1: value.streetLine1 || '',
      streetLine2: value.streetLine2 || ''
    };
  }
  isFormValue(input) {
    return typeof input.countryCode === 'string';
  }
}
CheckoutShippingComponent.ɵfac = function CheckoutShippingComponent_Factory(t) {
  return new (t || CheckoutShippingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_providers_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_providers_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router));
};
CheckoutShippingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CheckoutShippingComponent,
  selectors: [["vsf-checkout-shipping"]],
  viewQuery: function CheckoutShippingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.addressForm = _t.first);
    }
  },
  decls: 24,
  vars: 20,
  consts: [["class", "card", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mt-10", "border-t", "border-gray-200", "pt-10"], [1, "text-lg", "font-medium", "text-gray-900"], [1, "card-body"], [3, "address", "availableCountries", "focusout"], ["addressForm", ""], [3, "idFn", "selectedItemId", "selectItem"], [1, "mt-4", "grid", "grid-cols-1", "gap-y-6", "sm:grid-cols-2", "sm:gap-x-4"], [3, "item", 4, "ngFor", "ngForOf"], [1, "btn-primary", "mt-6", "w-full", "space-x-2", 3, "disabled", "click"], ["icon", "credit-card"], [1, "card"], [1, "card-header"], [1, "btn", "btn-light", 3, "click"], [1, "", 3, "ngClass"], [1, "d-flex", "flex-wrap"], ["class", "customer-address", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-end", "ml-3", "mb-3"], [1, "btn", "btn-secondary", 3, "click"], [1, "customer-address", 3, "click"], ["class", "address-line", 4, "ngFor", "ngForOf"], [1, "address-line"], [1, ""], [3, "formGroup", "focusout"], [1, "mt-4"], ["htmlFor", "emailAddress", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1"], ["type", "email", "id", "emailAddress", "name", "emailAddress", "autoComplete", "email", "formControlName", "emailAddress", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "firstName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "id", "firstName", "name", "firstName", "autoComplete", "given-name", "formControlName", "firstName", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], ["htmlFor", "lastName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "id", "lastName", "name", "lastName", "autoComplete", "family-name", "formControlName", "lastName", 1, "block", "w-full", "border-gray-300", "rounded-md", "shadow-sm", "focus:ring-primary-500", "focus:border-primary-500", "sm:text-sm"], [3, "item"], [1, "block", "text-sm", "font-medium", "text-gray-900"], [1, "mt-6", "text-sm", "font-medium", "text-gray-900"]],
  template: function CheckoutShippingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CheckoutShippingComponent_div_0_Template, 11, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, CheckoutShippingComponent_div_3_Template, 20, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 2)(6, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Shipping Address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 4)(9, "vsf-address-form", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focusout", function CheckoutShippingComponent_Template_vsf_address_form_focusout_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onAddressFormBlur(_r2.addressForm));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 2)(14, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " Shipping Method ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "vsf-radio-card-fieldset", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectItem", function CheckoutShippingComponent_Template_vsf_radio_card_fieldset_selectItem_16_listener($event) {
        return ctx.setShippingMethod($event.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, CheckoutShippingComponent_vsf_radio_card_18_Template, 6, 5, "vsf-radio-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CheckoutShippingComponent_Template_button_click_20_listener() {
        return ctx.proceedToPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "fa-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Proceed to payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 8, ctx.signedIn$) && ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 10, ctx.customerAddresses$)) == null ? null : tmp_0_0.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 12, ctx.signedIn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("address", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 14, ctx.shippingAddress$))("availableCountries", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 16, ctx.availableCountries$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("idFn", ctx.getId)("selectedItemId", ctx.shippingMethodId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 18, ctx.eligibleShippingMethods$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.shippingMethodId || _r2.invalid);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_8__.AddressFormComponent, _shared_components_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_9__.RadioCardComponent, _shared_components_radio_card_radio_card_fieldset_component__WEBPACK_IMPORTED_MODULE_10__.RadioCardFieldsetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_11__.FormatPricePipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 79100:
/*!************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-shipping/checkout-shipping.graphql.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ELIGIBLE_SHIPPING_METHODS": () => (/* binding */ GET_ELIGIBLE_SHIPPING_METHODS),
/* harmony export */   "GET_ORDER_SHIPPING_DATA": () => (/* binding */ GET_ORDER_SHIPPING_DATA),
/* harmony export */   "SET_CUSTOMER_FOR_ORDER": () => (/* binding */ SET_CUSTOMER_FOR_ORDER),
/* harmony export */   "SET_SHIPPING_ADDRESS": () => (/* binding */ SET_SHIPPING_ADDRESS),
/* harmony export */   "SET_SHIPPING_METHOD": () => (/* binding */ SET_SHIPPING_METHOD),
/* harmony export */   "TRANSITION_TO_ARRANGING_PAYMENT": () => (/* binding */ TRANSITION_TO_ARRANGING_PAYMENT)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_ORDER_SHIPPING_DATA = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetOrderShippingData {
        activeOrder {
            id
            customer {
                id
                firstName
                lastName
                emailAddress
            }
            shippingAddress {
                ...OrderAddress
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADDRESS_FRAGMENT}
`;
const SET_SHIPPING_ADDRESS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation SetShippingAddress($input: CreateAddressInput!) {
        setOrderShippingAddress(input: $input) {
            ...Cart
            ...on Order {
                shippingAddress {
                    ...OrderAddress
                }
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADDRESS_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;
const GET_ELIGIBLE_SHIPPING_METHODS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetEligibleShippingMethods {
        eligibleShippingMethods {
            id
            name
            description
            price
            priceWithTax
            metadata
        }
    }
`;
const SET_SHIPPING_METHOD = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation SetShippingMethod($id: [ID!]!) {
        setOrderShippingMethod(shippingMethodId: $id) {
            ...Cart
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;
const SET_CUSTOMER_FOR_ORDER = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation SetCustomerForOrder($input: CreateCustomerInput!) {
        setCustomerForOrder(input: $input) {
            ...on Order {
                id
                customer {
                    id
                    emailAddress
                    firstName
                    lastName
                }
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;
const TRANSITION_TO_ARRANGING_PAYMENT = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation TransitionToArrangingPayment {
        transitionOrderToState(state: "ArrangingPayment") {
            ...Cart
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 66508:
/*!************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-sign-in/checkout-sign-in.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutSignInComponent": () => (/* binding */ CheckoutSignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/sign-in/sign-in.component */ 80117);



const _c0 = function () {
  return ["/checkout", "shipping"];
};
const _c1 = function () {
  return ["./shipping"];
};
class CheckoutSignInComponent {}
CheckoutSignInComponent.ɵfac = function CheckoutSignInComponent_Factory(t) {
  return new (t || CheckoutSignInComponent)();
};
CheckoutSignInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CheckoutSignInComponent,
  selectors: [["vsf-checkout-sign-in"]],
  decls: 12,
  vars: 5,
  consts: [[1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "bg-white", "py-8", "px-4", "shadow", "sm:rounded-lg", "sm:px-10"], [3, "navigateToOnSuccess", "displayRegisterLink"], [1, "mt-6"], [1, "relative"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-gray-300"], [1, "relative", "flex", "justify-center", "text-sm"], [1, "bg-white", "px-2", "text-gray-500"], [1, "block", "mt-6", "text-center", "w-full", "justify-center", "rounded-md", "border", "border-transparent", "bg-primary-600", "py-2", "px-4", "text-sm", "font-medium", "text-white", "shadow-sm", "hover:bg-primary-700", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500", "focus:ring-offset-2", "disabled:bg-gray-300", 3, "routerLink"]],
  template: function CheckoutSignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "vsf-sign-in", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Or");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Continue as guest");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navigateToOnSuccess", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("displayRegisterLink", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _shared_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC1zaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1zaWduLWluL2NoZWNrb3V0LXNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 56236:
/*!****************************************************************************************************!*\
  !*** ./src/app/checkout/components/checkout-stage-indicator/checkout-stage-indicator.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutStageIndicatorComponent": () => (/* binding */ CheckoutStageIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 12162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);



function CheckoutStageIndicatorComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-primary-600", ctx_r0.activeStage === 1);
  }
}
class CheckoutStageIndicatorComponent {
  constructor() {
    this.signedIn = false;
    this.activeStage = 1;
  }
}
CheckoutStageIndicatorComponent.ɵfac = function CheckoutStageIndicatorComponent_Factory(t) {
  return new (t || CheckoutStageIndicatorComponent)();
};
CheckoutStageIndicatorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CheckoutStageIndicatorComponent,
  selectors: [["vsf-checkout-stage-indicator"]],
  inputs: {
    signedIn: "signedIn",
    activeStage: "activeStage"
  },
  decls: 14,
  vars: 9,
  consts: [["aria-label", "Progress", 1, "hidden", "sm:block", "pb-8", "mb-8", "border-b"], ["role", "list", 1, "flex", "space-x-4", "justify-center"], ["class", "flex items-center", 4, "ngIf"], [1, "flex", "items-center"], [1, "mr-4"], ["icon", "chevron-right", 1, "text-gray-300"]],
  template: function CheckoutStageIndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutStageIndicatorComponent_li_2_Template, 4, 2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3)(8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3)(12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Complete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-primary-600", ctx.activeStage === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-primary-600", ctx.activeStage === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-primary-600", ctx.activeStage === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-primary-600", ctx.activeStage === 3);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 55899:
/*!*****************************************************************!*\
  !*** ./src/app/checkout/providers/checkout-resolver.graphql.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ORDER_FOR_CHECKOUT": () => (/* binding */ GET_ORDER_FOR_CHECKOUT)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/graphql/fragments.graphql */ 43976);


const GET_ORDER_FOR_CHECKOUT = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetOrderForCheckout {
        activeOrder {
            ...Cart
            shippingAddress {
                ...OrderAddress
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADDRESS_FRAGMENT}
`;

/***/ }),

/***/ 13591:
/*!*********************************************************!*\
  !*** ./src/app/checkout/providers/checkout-resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutResolver": () => (/* binding */ CheckoutResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _checkout_resolver_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-resolver.graphql */ 55899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/providers/data/data.service */ 61199);




class CheckoutResolver {
  constructor(dataService) {
    this.dataService = dataService;
  }
  resolve(route, state) {
    const activeOrder$ = this.dataService.query(_checkout_resolver_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_ORDER_FOR_CHECKOUT).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.activeOrder));
    const stream = activeOrder$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
    return stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => stream));
  }
}
CheckoutResolver.ɵfac = function CheckoutResolver_Factory(t) {
  return new (t || CheckoutResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService));
};
CheckoutResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CheckoutResolver,
  factory: CheckoutResolver.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 98705:
/*!******************************************************!*\
  !*** ./src/app/checkout/providers/checkout.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutGuard": () => (/* binding */ CheckoutGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/checkout-confirmation/checkout-confirmation.component */ 4218);
/* harmony import */ var _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/checkout-payment/checkout-payment.component */ 43587);
/* harmony import */ var _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/checkout-shipping/checkout-shipping.component */ 888);
/* harmony import */ var _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/checkout-sign-in/checkout-sign-in.component */ 66508);
/* harmony import */ var _checkout_resolver_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout-resolver.graphql */ 55899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/providers/state/state.service */ 33426);











class CheckoutGuard {
  constructor(router, dataService, stateService) {
    this.router = router;
    this.dataService = dataService;
    this.stateService = stateService;
  }
  canActivate(route) {
    const orderState$ = this.dataService.query(_checkout_resolver_graphql__WEBPACK_IMPORTED_MODULE_4__.GET_ORDER_FOR_CHECKOUT, undefined, 'cache-first').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.activeOrder ? data.activeOrder.state : 'AddingItems'));
    const signedIn$ = this.stateService.select(state => state.signedIn);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)(orderState$, signedIn$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([orderState, signedIn]) => {
      const component = route.component;
      if (component === _components_checkout_sign_in_checkout_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.CheckoutSignInComponent) {
        if (signedIn) {
          this.router.navigate(['/checkout', 'shipping']);
          return false;
        } else {
          if (orderState === 'AddingItems') {
            return true;
          } else if (orderState === 'ArrangingPayment') {
            this.router.navigate(['/checkout', 'payment']);
            return false;
          } else {
            return false;
          }
        }
      } else if (component === _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutShippingComponent) {
        if (orderState === 'AddingItems') {
          return true;
        } else if (orderState === 'ArrangingPayment') {
          this.router.navigate(['/checkout', 'payment']);
          return false;
        } else {
          return false;
        }
      } else if (component === _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutPaymentComponent) {
        if (orderState === 'ArrangingPayment') {
          return true;
        } else if (orderState === 'AddingItems') {
          this.router.navigate(['/checkout']);
          return false;
        } else {
          return false;
        }
      } else if (component === _components_checkout_confirmation_checkout_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutConfirmationComponent) {
        return true;
      }
      return true;
    }));
  }
}
CheckoutGuard.ɵfac = function CheckoutGuard_Factory(t) {
  return new (t || CheckoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService));
};
CheckoutGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: CheckoutGuard,
  factory: CheckoutGuard.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 86687:
/*!*******************************************************!*\
  !*** ./src/app/core/providers/modal/modal.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 12778);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 12035);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 65763);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal-dialog/modal-dialog.component */ 19406);
/* harmony import */ var _modal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-types */ 93959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);








/**
 * This service is responsible for instantiating a ModalDialog component and
 * embedding the specified component within.
 */
class ModalService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  /**
   * Create a modal from a component. The component must implement the {@link Dialog} interface.
   * Additionally, the component should include templates for the title and the buttons to be
   * displayed in the modal dialog. See example:
   *
   * @example
   * ```
   * class MyDialog implements Dialog {
   *  resolveWith: (result?: any) => void;
   *
   *  okay() {
   *    doSomeWork().subscribe(result => {
   *      this.resolveWith(result);
   *    })
   *  }
   *
   *  cancel() {
   *    this.resolveWith(false);
   *  }
   * }
   * ```
   *
   * ```
   * <ng-template vsfDialogTitle>Title of the modal</ng-template>
   *
   * <p>
   *     My Content
   * </p>
   *
   * <ng-template vsfDialogButtons>
   *     <button type="button"
   *             class="btn"
   *             (click)="cancel()">Cancel</button>
   *     <button type="button"
   *             class="btn btn-primary"
   *             (click)="okay()">Okay</button>
   * </ng-template>
   * ```
   */
  fromComponent(component, options) {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const scrollStrategy = this.overlay.scrollStrategies.block();
    const overlayRef = this.overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayConfig({
      scrollStrategy,
      positionStrategy,
      hasBackdrop: true
    }));
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.ComponentPortal(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ModalDialogComponent, null, this.createInjector(component, options));
    const modal = overlayRef.attach(portal);
    setTimeout(() => modal.changeDetectorRef.markForCheck());
    const close$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscriber => {
      modal.instance.closeModal = result => {
        subscriber.next(result);
        subscriber.complete();
      };
    });
    const backdropClick$ = overlayRef.backdropClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mapTo)(undefined));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.race)(close$, backdropClick$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => overlayRef.dispose()));
  }
  createInjector(component, options) {
    const weakMap = new WeakMap([[_modal_types__WEBPACK_IMPORTED_MODULE_1__.DIALOG_COMPONENT, component], [_modal_types__WEBPACK_IMPORTED_MODULE_1__.MODAL_OPTIONS, options]]);
    return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.PortalInjector(this.injector, weakMap);
  }
}
ModalService.ɵfac = function ModalService_Factory(t) {
  return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injector));
};
ModalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: ModalService,
  factory: ModalService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map