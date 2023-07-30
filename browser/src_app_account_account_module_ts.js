"use strict";
(self["webpackChunkreference_storefront"] = self["webpackChunkreference_storefront"] || []).push([["src_app_account_account_module_ts"],{

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _account_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.routes */ 66018);
/* harmony import */ var _components_account_address_book_account_address_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account-address-book/account-address-book.component */ 75709);
/* harmony import */ var _components_account_address_detail_account_address_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-address-detail/account-address-detail.component */ 89859);
/* harmony import */ var _components_account_change_credentials_account_change_credentials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account-change-credentials/account-change-credentials.component */ 66267);
/* harmony import */ var _components_account_customer_details_account_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account-customer-details/account-customer-details.component */ 41453);
/* harmony import */ var _components_account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account-dashboard/account-dashboard.component */ 97205);
/* harmony import */ var _components_account_order_detail_account_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account-order-detail/account-order-detail.component */ 89115);
/* harmony import */ var _components_account_order_list_account_order_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account-order-list/account-order-list.component */ 47435);
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/account/account.component */ 72523);
/* harmony import */ var _components_change_email_address_change_email_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-email-address/change-email-address.component */ 7611);
/* harmony import */ var _components_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forgotten-password/forgotten-password.component */ 38659);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ 2634);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 14049);
/* harmony import */ var _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/verify/verify.component */ 85697);
/* harmony import */ var _providers_account_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/account.guard */ 69817);
/* harmony import */ var _providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./providers/sign-in.guard */ 90380);
/* harmony import */ var _components_account_sign_in_account_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/account-sign-in/account-sign-in.component */ 24417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 86839);





















const DECLARATIONS = [_components_account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.AccountDashboardComponent, _components_account_order_list_account_order_list_component__WEBPACK_IMPORTED_MODULE_8__.AccountOrderListComponent, _components_account_order_detail_account_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.AccountOrderDetailComponent, _components_account_address_book_account_address_book_component__WEBPACK_IMPORTED_MODULE_2__.AccountAddressBookComponent, _components_account_address_detail_account_address_detail_component__WEBPACK_IMPORTED_MODULE_3__.AccountAddressDetailComponent, _components_account_customer_details_account_customer_details_component__WEBPACK_IMPORTED_MODULE_5__.AccountCustomerDetailsComponent, _components_account_change_credentials_account_change_credentials_component__WEBPACK_IMPORTED_MODULE_4__.AccountChangeCredentialsComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__.RegisterComponent, _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__.AccountComponent, _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_14__.VerifyComponent, _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__.ResetPasswordComponent, _components_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_11__.ForgottenPasswordComponent, _components_change_email_address_change_email_address_component__WEBPACK_IMPORTED_MODULE_10__.ChangeEmailAddressComponent, _components_account_sign_in_account_sign_in_component__WEBPACK_IMPORTED_MODULE_17__.AccountSignInComponent];
class AccountModule {}
AccountModule.ɵfac = function AccountModule_Factory(t) {
  return new (t || AccountModule)();
};
AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: AccountModule
});
AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  providers: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_15__.AccountGuard, _providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_16__.SignInGuard],
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(_account_routes__WEBPACK_IMPORTED_MODULE_1__.routes)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_components_account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.AccountDashboardComponent, _components_account_order_list_account_order_list_component__WEBPACK_IMPORTED_MODULE_8__.AccountOrderListComponent, _components_account_order_detail_account_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.AccountOrderDetailComponent, _components_account_address_book_account_address_book_component__WEBPACK_IMPORTED_MODULE_2__.AccountAddressBookComponent, _components_account_address_detail_account_address_detail_component__WEBPACK_IMPORTED_MODULE_3__.AccountAddressDetailComponent, _components_account_customer_details_account_customer_details_component__WEBPACK_IMPORTED_MODULE_5__.AccountCustomerDetailsComponent, _components_account_change_credentials_account_change_credentials_component__WEBPACK_IMPORTED_MODULE_4__.AccountChangeCredentialsComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__.RegisterComponent, _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__.AccountComponent, _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_14__.VerifyComponent, _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__.ResetPasswordComponent, _components_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_11__.ForgottenPasswordComponent, _components_change_email_address_change_email_address_component__WEBPACK_IMPORTED_MODULE_10__.ChangeEmailAddressComponent, _components_account_sign_in_account_sign_in_component__WEBPACK_IMPORTED_MODULE_17__.AccountSignInComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ }),

/***/ 66018:
/*!*******************************************!*\
  !*** ./src/app/account/account.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_account_address_book_account_address_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/account-address-book/account-address-book.component */ 75709);
/* harmony import */ var _components_account_address_detail_account_address_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/account-address-detail/account-address-detail.component */ 89859);
/* harmony import */ var _components_account_change_credentials_account_change_credentials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account-change-credentials/account-change-credentials.component */ 66267);
/* harmony import */ var _components_account_customer_details_account_customer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-customer-details/account-customer-details.component */ 41453);
/* harmony import */ var _components_account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account-dashboard/account-dashboard.component */ 97205);
/* harmony import */ var _components_account_order_detail_account_order_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account-order-detail/account-order-detail.component */ 89115);
/* harmony import */ var _components_account_order_list_account_order_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account-order-list/account-order-list.component */ 47435);
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account/account.component */ 72523);
/* harmony import */ var _components_change_email_address_change_email_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/change-email-address/change-email-address.component */ 7611);
/* harmony import */ var _components_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forgotten-password/forgotten-password.component */ 38659);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ 2634);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 14049);
/* harmony import */ var _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/verify/verify.component */ 85697);
/* harmony import */ var _providers_account_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/account.guard */ 69817);
/* harmony import */ var _providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/sign-in.guard */ 90380);
/* harmony import */ var _components_account_sign_in_account_sign_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/account-sign-in/account-sign-in.component */ 24417);
















const routes = [{
  path: '',
  component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_7__.AccountComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.AccountDashboardComponent
  }, {
    path: 'orders',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_order_list_account_order_list_component__WEBPACK_IMPORTED_MODULE_6__.AccountOrderListComponent
  }, {
    path: 'orders/:code',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_order_detail_account_order_detail_component__WEBPACK_IMPORTED_MODULE_5__.AccountOrderDetailComponent
  }, {
    path: 'address-book',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_address_book_account_address_book_component__WEBPACK_IMPORTED_MODULE_0__.AccountAddressBookComponent
  }, {
    path: 'address-book/:id',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_address_detail_account_address_detail_component__WEBPACK_IMPORTED_MODULE_1__.AccountAddressDetailComponent
  }, {
    path: 'details',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_customer_details_account_customer_details_component__WEBPACK_IMPORTED_MODULE_3__.AccountCustomerDetailsComponent
  }, {
    path: 'change-credentials',
    canActivate: [_providers_account_guard__WEBPACK_IMPORTED_MODULE_13__.AccountGuard],
    component: _components_account_change_credentials_account_change_credentials_component__WEBPACK_IMPORTED_MODULE_2__.AccountChangeCredentialsComponent
  }, {
    path: 'sign-in',
    canActivate: [_providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__.SignInGuard],
    component: _components_account_sign_in_account_sign_in_component__WEBPACK_IMPORTED_MODULE_15__.AccountSignInComponent
  }, {
    path: 'register',
    canActivate: [_providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__.SignInGuard],
    component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__.RegisterComponent
  }, {
    path: 'verify',
    canActivate: [_providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__.SignInGuard],
    component: _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_12__.VerifyComponent
  }, {
    path: 'reset-password',
    canActivate: [_providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__.SignInGuard],
    component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__.ResetPasswordComponent
  }, {
    path: 'forgotten-password',
    canActivate: [_providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__.SignInGuard],
    component: _components_forgotten_password_forgotten_password_component__WEBPACK_IMPORTED_MODULE_9__.ForgottenPasswordComponent
  }, {
    path: 'change-email-address',
    canActivate: [_providers_sign_in_guard__WEBPACK_IMPORTED_MODULE_14__.SignInGuard],
    component: _components_change_email_address_change_email_address_component__WEBPACK_IMPORTED_MODULE_8__.ChangeEmailAddressComponent
  }]
}];

/***/ }),

/***/ 75709:
/*!*******************************************************************************************!*\
  !*** ./src/app/account/components/account-address-book/account-address-book.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountAddressBookComponent": () => (/* binding */ AccountAddressBookComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/address-card/address-card.component */ 40246);







const _c0 = function (a1) {
  return ["./", a1];
};
function AccountAddressBookComponent_vsf_address_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "vsf-address-card", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const address_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("address", address_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, address_r1.id));
  }
}
class AccountAddressBookComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.addresses$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_CUSTOMER_ADDRESSES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.activeCustomer && data.activeCustomer.addresses));
  }
}
AccountAddressBookComponent.ɵfac = function AccountAddressBookComponent_Factory(t) {
  return new (t || AccountAddressBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService));
};
AccountAddressBookComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AccountAddressBookComponent,
  selectors: [["vsf-account-address-book"]],
  decls: 3,
  vars: 3,
  consts: [[1, "flex", "flex-wrap", "space-x-6"], ["class", "w-64", 3, "address", 4, "ngFor", "ngForOf"], [1, "w-64", 3, "address"], [1, "block", "hover:text-primary-600", "border-t", "mt-2", "pt-2", 3, "routerLink"]],
  template: function AccountAddressBookComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountAddressBookComponent_vsf_address_card_1_Template, 3, 4, "vsf-address-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.addresses$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_2__.AddressCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 89859:
/*!***********************************************************************************************!*\
  !*** ./src/app/account/components/account-address-detail/account-address-detail.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountAddressDetailComponent": () => (/* binding */ AccountAddressDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _account_address_detail_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-address-detail.graphql */ 40651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/address-form/address-form.component */ 74990);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);









const _c0 = ["addressForm"];
class AccountAddressDetailComponent {
  constructor(route, dataService) {
    this.route = route;
    this.dataService = dataService;
  }
  ngOnInit() {
    this.address$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(pm => pm.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(id => this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_CUSTOMER_ADDRESSES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.activeCustomer && data.activeCustomer.addresses), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(addresses => addresses.find(address => address.id === id)))));
    this.availableCountries$ = this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_AVAILABLE_COUNTRIES).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.availableCountries));
  }
  updateAddress() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    const formValue = this.addressForm.addressForm.value;
    const input = {
      id,
      city: formValue.city,
      company: formValue.company,
      countryCode: formValue.countryCode,
      customFields: formValue.customFields,
      defaultBillingAddress: formValue.defaultBillingAddress,
      defaultShippingAddress: formValue.defaultShippingAddress,
      fullName: formValue.fullName,
      phoneNumber: formValue.phoneNumber,
      postalCode: formValue.postalCode,
      province: formValue.province,
      streetLine1: formValue.streetLine1,
      streetLine2: formValue.streetLine2
    };
    this.dataService.mutate(_account_address_detail_graphql__WEBPACK_IMPORTED_MODULE_2__.UPDATE_ADDRESS, {
      input
    }).subscribe(() => {
      this.addressForm.addressForm.markAsPristine();
    });
  }
}
AccountAddressDetailComponent.ɵfac = function AccountAddressDetailComponent_Factory(t) {
  return new (t || AccountAddressDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService));
};
AccountAddressDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AccountAddressDetailComponent,
  selectors: [["vsf-account-address-detail"]],
  viewQuery: function AccountAddressDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.addressForm = _t.first);
    }
  },
  decls: 6,
  vars: 7,
  consts: [[3, "address", "availableCountries"], ["addressForm", ""], [1, "btn-primary", "mt-3", 3, "disabled", "click"]],
  template: function AccountAddressDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "vsf-address-form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AccountAddressDetailComponent_Template_button_click_4_listener() {
        return ctx.updateAddress();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Update Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("address", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx.address$))("availableCountries", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, ctx.availableCountries$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r0.addressForm.invalid || _r0.addressForm.pristine);
    }
  },
  dependencies: [_shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_4__.AddressFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 40651:
/*!*********************************************************************************************!*\
  !*** ./src/app/account/components/account-address-detail/account-address-detail.graphql.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UPDATE_ADDRESS": () => (/* binding */ UPDATE_ADDRESS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const UPDATE_ADDRESS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation UpdateAddress($input: UpdateAddressInput!) {
        updateCustomerAddress(input: $input) {
            ...Address
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_FRAGMENT}
`;

/***/ }),

/***/ 66267:
/*!*******************************************************************************************************!*\
  !*** ./src/app/account/components/account-change-credentials/account-change-credentials.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountChangeCredentialsComponent": () => (/* binding */ AccountChangeCredentialsComponent)
/* harmony export */ });
/* harmony import */ var _account_change_credentials_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-change-credentials.graphql */ 89126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/centered-card/centered-card.component */ 1513);






function AccountChangeCredentialsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", null, 11)(3, "div", 3)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountChangeCredentialsComponent_ng_container_15_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "New email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountChangeCredentialsComponent_ng_container_15_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.emailAddress = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountChangeCredentialsComponent_ng_container_15_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.changeEmailAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Verify new email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r3.invalid || _r3.pristine);
  }
}
function AccountChangeCredentialsComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.changeEmailAddressMessage, " ");
  }
}
class AccountChangeCredentialsComponent {
  constructor(dataService, changeDetectorRef) {
    this.dataService = dataService;
    this.changeDetectorRef = changeDetectorRef;
    this.currentPassword = '';
    this.newPassword = '';
    this.password = '';
    this.emailAddress = '';
    this.changeEmailAddressMessage = '';
  }
  changePassword() {
    this.dataService.mutate(_account_change_credentials_graphql__WEBPACK_IMPORTED_MODULE_0__.CHANGE_PASSWORD, {
      old: this.currentPassword,
      new: this.newPassword
    }).subscribe(() => {
      this.currentPassword = '';
      this.newPassword = '';
      this.changeDetectorRef.markForCheck();
    });
  }
  changeEmailAddress() {
    this.dataService.mutate(_account_change_credentials_graphql__WEBPACK_IMPORTED_MODULE_0__.CHANGE_EMAIL_ADDRESS, {
      password: this.password,
      emailAddress: this.emailAddress
    }).subscribe(() => {
      this.changeEmailAddressMessage = `To complete the process, please check your email (${this.emailAddress}) to verify the address.`;
      this.password = '';
      this.emailAddress = '';
      this.changeDetectorRef.markForCheck();
    });
  }
}
AccountChangeCredentialsComponent.ɵfac = function AccountChangeCredentialsComponent_Factory(t) {
  return new (t || AccountChangeCredentialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
AccountChangeCredentialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AccountChangeCredentialsComponent,
  selectors: [["vsf-account-change-credentials"]],
  decls: 17,
  vars: 5,
  consts: [[1, "flex", "flex-col", "space-y-6", "md:space-y-0", "md:space-x-12", "md:flex-row"], ["title", "Change password"], ["passwordForm", "ngForm"], [1, "text-left"], ["for", "currentPassword", 1, "text-sm", "text-gray-600"], ["name", "currentPassword", "type", "password", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["for", "newPassword", 1, "text-sm", "text-gray-600"], ["name", "newPassword", "type", "password", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], [1, "btn-primary", "mt-3", 3, "disabled", "click"], ["title", "Change email address"], [4, "ngIf"], ["emailForm", "ngForm"], ["for", "password", 1, "text-sm", "text-gray-600"], ["name", "password", "type", "password", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["for", "emailAddress", 1, "text-sm", "text-gray-600"], ["name", "emailAddress", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["role", "alert", 1, "alert", "alert-primary"]],
  template: function AccountChangeCredentialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "vsf-centered-card", 1)(2, "form", null, 2)(4, "div", 3)(5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Current password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountChangeCredentialsComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.currentPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "New password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountChangeCredentialsComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.newPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountChangeCredentialsComponent_Template_button_click_12_listener() {
        return ctx.changePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Set password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "vsf-centered-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AccountChangeCredentialsComponent_ng_container_15_Template, 13, 3, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AccountChangeCredentialsComponent_ng_container_16_Template, 3, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.currentPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.changeEmailAddressMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changeEmailAddressMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_2__.CenteredCardComponent],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 89126:
/*!*****************************************************************************************************!*\
  !*** ./src/app/account/components/account-change-credentials/account-change-credentials.graphql.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_EMAIL_ADDRESS": () => (/* binding */ CHANGE_EMAIL_ADDRESS),
/* harmony export */   "CHANGE_PASSWORD": () => (/* binding */ CHANGE_PASSWORD)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const CHANGE_PASSWORD = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation ChangePassword($old: String! $new: String!) {
        updateCustomerPassword(currentPassword: $old newPassword: $new) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;
const CHANGE_EMAIL_ADDRESS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation ChangeEmailAddress($password: String! $emailAddress: String!) {
        requestUpdateCustomerEmailAddress(password: $password newEmailAddress: $emailAddress) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 41453:
/*!***************************************************************************************************!*\
  !*** ./src/app/account/components/account-customer-details/account-customer-details.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCustomerDetailsComponent": () => (/* binding */ AccountCustomerDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _account_customer_details_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-customer-details.graphql */ 35268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/centered-card/centered-card.component */ 1513);









function AccountCustomerDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "vsf-centered-card", 1)(2, "form", 2)(3, "div", 3)(4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3)(9, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3)(14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountCustomerDetailsComponent_ng_container_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Update Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.form.invalid || ctx_r0.form.pristine);
  }
}
class AccountCustomerDetailsComponent {
  constructor(dataService, formBuilder, changeDetectorRef) {
    this.dataService = dataService;
    this.formBuilder = formBuilder;
    this.changeDetectorRef = changeDetectorRef;
  }
  ngOnInit() {
    this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_ACTIVE_CUSTOMER, {}, 'network-only').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.activeCustomer), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__.notNullOrUndefined)).subscribe(customer => {
      this.form = this.formBuilder.group({
        firstName: customer.firstName,
        lastName: customer.lastName,
        phoneNumber: customer.phoneNumber
      });
      this.changeDetectorRef.markForCheck();
    });
  }
  updateDetails() {
    const formValue = this.form.value;
    const input = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      phoneNumber: formValue.phoneNumber
    };
    this.dataService.mutate(_account_customer_details_graphql__WEBPACK_IMPORTED_MODULE_2__.UPDATE_CUSTOMER_DETAILS, {
      input
    }).subscribe(() => {
      this.form.markAsPristine();
    });
  }
}
AccountCustomerDetailsComponent.ɵfac = function AccountCustomerDetailsComponent_Factory(t) {
  return new (t || AccountCustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
};
AccountCustomerDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AccountCustomerDetailsComponent,
  selectors: [["vsf-account-customer-details"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "block", "max-w-sm"], [3, "formGroup"], [1, "text-left", "mb-2"], ["for", "firstName", 1, "text-sm", "text-gray-600"], [1, "col-sm-9"], ["formControlName", "firstName", "id", "firstName", 1, "input-text"], ["for", "lastName", 1, "text-sm", "text-gray-600"], ["formControlName", "lastName", "id", "lastName", 1, "input-text"], ["for", "phoneNumber", 1, "text-sm", "text-gray-600"], ["formControlName", "phoneNumber", "id", "phoneNumber", 1, "input-text"], [1, "btn-primary", "mt-3", 3, "disabled", "click"]],
  template: function AccountCustomerDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AccountCustomerDetailsComponent_ng_container_0_Template, 20, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_4__.CenteredCardComponent],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 35268:
/*!*************************************************************************************************!*\
  !*** ./src/app/account/components/account-customer-details/account-customer-details.graphql.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UPDATE_CUSTOMER_DETAILS": () => (/* binding */ UPDATE_CUSTOMER_DETAILS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const UPDATE_CUSTOMER_DETAILS = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation UpdateCustomerDetails($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
            id
            firstName
            lastName
            emailAddress
            phoneNumber
        }
    }
`;

/***/ }),

/***/ 97205:
/*!*************************************************************************************!*\
  !*** ./src/app/account/components/account-dashboard/account-dashboard.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountDashboardComponent": () => (/* binding */ AccountDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _account_dashboard_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-dashboard.graphql */ 92241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);








function AccountDashboardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const customer_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", customer_r1.firstName, " ", customer_r1.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](customer_r1.emailAddress);
  }
}
class AccountDashboardComponent {
  constructor(dataService, stateService, router) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.router = router;
  }
  ngOnInit() {
    this.activeCustomer$ = this.dataService.query(_account_dashboard_graphql__WEBPACK_IMPORTED_MODULE_1__.GET_ACCOUNT_OVERVIEW).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.activeCustomer), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined));
  }
}
AccountDashboardComponent.ɵfac = function AccountDashboardComponent_Factory(t) {
  return new (t || AccountDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
AccountDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AccountDashboardComponent,
  selectors: [["vsf-account-dashboard"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "text-3xl"], [1, "lead"]],
  template: function AccountDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AccountDashboardComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.activeCustomer$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 92241:
/*!***********************************************************************************!*\
  !*** ./src/app/account/components/account-dashboard/account-dashboard.graphql.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ACCOUNT_OVERVIEW": () => (/* binding */ GET_ACCOUNT_OVERVIEW)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const GET_ACCOUNT_OVERVIEW = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetAccountOverview {
        activeCustomer {
            id
            title
            firstName
            lastName
            emailAddress
        }
    }
`;

/***/ }),

/***/ 89115:
/*!*******************************************************************************************!*\
  !*** ./src/app/account/components/account-order-detail/account-order-detail.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountOrderDetailComponent": () => (/* binding */ AccountOrderDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/utils/not-null-or-undefined */ 38);
/* harmony import */ var _account_order_detail_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-order-detail.graphql */ 13396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/cart-contents/cart-contents.component */ 58593);
/* harmony import */ var _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/address-card/address-card.component */ 40246);
/* harmony import */ var _shared_components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/cart-totals/cart-totals.component */ 76407);










function AccountOrderDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Placed on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4)(11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "vsf-cart-contents", 6)(13, "vsf-cart-totals", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "vsf-address-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 5, order_r1.orderPlacedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cart", order_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cart", order_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("address", order_r1.shippingAddress);
  }
}
class AccountOrderDetailComponent {
  constructor(dataService, route) {
    this.dataService = dataService;
    this.route = route;
  }
  ngOnInit() {
    this.order$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(pm => pm.get('code')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(_common_utils_not_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__.notNullOrUndefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(code => {
      return this.dataService.query(_account_order_detail_graphql__WEBPACK_IMPORTED_MODULE_1__.GET_ORDER, {
        code
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.orderByCode));
  }
}
AccountOrderDetailComponent.ɵfac = function AccountOrderDetailComponent_Factory(t) {
  return new (t || AccountOrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
};
AccountOrderDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AccountOrderDetailComponent,
  selectors: [["vsf-account-order-detail"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "text-2xl", "mb-2"], [1, "font-medium"], [1, "mb-4", "text-gray-600"], [1, "md:grid", "grid-cols-3"], [1, "col-span-2"], [3, "cart"], [1, "pl-6"], ["title", "Shipping address", 3, "address"]],
  template: function AccountOrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AccountOrderDetailComponent_ng_container_0_Template, 16, 8, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.order$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_cart_contents_cart_contents_component__WEBPACK_IMPORTED_MODULE_3__.CartContentsComponent, _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_4__.AddressCardComponent, _shared_components_cart_totals_cart_totals_component__WEBPACK_IMPORTED_MODULE_5__.CartTotalsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2FjY291bnQtb3JkZXItZGV0YWlsL2FjY291bnQtb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});


/***/ }),

/***/ 13396:
/*!*****************************************************************************************!*\
  !*** ./src/app/account/components/account-order-detail/account-order-detail.graphql.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ORDER": () => (/* binding */ GET_ORDER)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const GET_ORDER = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    query GetOrder($code: String!) {
        orderByCode(code: $code) {
            ...Cart
            shippingAddress {
                ...OrderAddress
            }
            billingAddress {
                ...OrderAddress
            }
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.CART_FRAGMENT}
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ORDER_ADDRESS_FRAGMENT}
`;

/***/ }),

/***/ 47435:
/*!***************************************************************************************!*\
  !*** ./src/app/account/components/account-order-list/account-order-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountOrderListComponent": () => (/* binding */ AccountOrderListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_generated_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/generated-types */ 10149);
/* harmony import */ var _account_order_list_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-order-list.graphql */ 35888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/format-price.pipe */ 84234);








const _c0 = function (a1) {
  return ["./", a1];
};
function AccountOrderListComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "formatPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, order_r1.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", order_r1.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](order_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, order_r1.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 7, order_r1.updatedAt, "short"));
  }
}
class AccountOrderListComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.orders$ = this.dataService.query(_account_order_list_graphql__WEBPACK_IMPORTED_MODULE_1__.GET_ORDER_LIST, {
      options: {
        filter: {
          active: {
            eq: false
          }
        },
        sort: {
          createdAt: _common_generated_types__WEBPACK_IMPORTED_MODULE_0__.SortOrder.DESC
        }
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.activeCustomer && data.activeCustomer.orders.items));
  }
}
AccountOrderListComponent.ɵfac = function AccountOrderListComponent_Factory(t) {
  return new (t || AccountOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
AccountOrderListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AccountOrderListComponent,
  selectors: [["vsf-account-order-list"]],
  decls: 14,
  vars: 3,
  consts: [[1, "min-w-full", "divide-y", "divide-gray-300"], [1, "bg-gray-50"], ["scope", "col", 1, "px-3", "py-3.5", "text-left", "text-sm", "font-semibold", "text-gray-900"], [1, "bg-white"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "text-left", "pl-4", "font-medium", "text-gray-700", "hover:text-primary-600"], [3, "routerLink"], [1, "whitespace-nowrap", "px-3", "py-4", "text-sm", "text-gray-600"]],
  template: function AccountOrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr")(3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Order code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Last updated");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AccountOrderListComponent_tr_12_Template, 12, 12, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 1, ctx.orders$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _shared_pipes_format_price_pipe__WEBPACK_IMPORTED_MODULE_3__.FormatPricePipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 35888:
/*!*************************************************************************************!*\
  !*** ./src/app/account/components/account-order-list/account-order-list.graphql.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ORDER_LIST": () => (/* binding */ GET_ORDER_LIST)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const GET_ORDER_LIST = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetOrderList($options: OrderListOptions) {
        activeCustomer {
            id
            orders(options: $options) {
                items {
                    id
                    updatedAt
                    code
                    state
                    currencyCode
                    total
                }
                totalItems
            }
        }
    }
`;

/***/ }),

/***/ 24417:
/*!*********************************************************************************!*\
  !*** ./src/app/account/components/account-sign-in/account-sign-in.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSignInComponent": () => (/* binding */ AccountSignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/sign-in/sign-in.component */ 80117);


const _c0 = function () {
  return ["/account"];
};
class AccountSignInComponent {
  constructor() {}
  ngOnInit() {}
}
AccountSignInComponent.ɵfac = function AccountSignInComponent_Factory(t) {
  return new (t || AccountSignInComponent)();
};
AccountSignInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AccountSignInComponent,
  selectors: [["vsf-account-sign-in"]],
  decls: 2,
  vars: 3,
  consts: [[1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [3, "navigateToOnSuccess", "displayRegisterLink"]],
  template: function AccountSignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "vsf-sign-in", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navigateToOnSuccess", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0))("displayRegisterLink", true);
    }
  },
  dependencies: [_shared_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXNpZ24taW4uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2FjY291bnQtc2lnbi1pbi9hY2NvdW50LXNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 72523:
/*!*****************************************************************!*\
  !*** ./src/app/account/components/account/account.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _account_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.graphql */ 62498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);






const _c0 = function () {
  return ["./"];
};
const _c1 = function () {
  return {
    exact: true
  };
};
const _c2 = function () {
  return ["./", "orders"];
};
const _c3 = function () {
  return ["./", "address-book"];
};
const _c4 = function () {
  return ["./", "details"];
};
const _c5 = function () {
  return ["./", "change-credentials"];
};
function AccountComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Address book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Personal details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Change credentials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountComponent_div_3_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.signOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c5));
  }
}
class AccountComponent {
  constructor(dataService, stateService, router) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.router = router;
    this.isSignedIn$ = this.stateService.select(state => state.signedIn);
  }
  signOut() {
    this.dataService.mutate(_account_graphql__WEBPACK_IMPORTED_MODULE_0__.SIGN_OUT).subscribe({
      next: () => {
        this.stateService.setState('signedIn', false);
        this.router.navigate(['/']);
      }
    });
  }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) {
  return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AccountComponent,
  selectors: [["vsf-account"]],
  decls: 8,
  vars: 11,
  consts: [[1, "lg:max-w-7xl", "max-w-2xl", "mx-auto", "pt-8", "pb-24", "px-4", "sm:px-6", "lg:px-8"], [1, "md:grid"], ["class", "bg-gray-50 rounded-lg p-4", 4, "ngIf"], [1, "px-6"], [1, "bg-gray-50", "rounded-lg", "p-4"], [1, "flex", "flex-wrap", "md:flex-col", "md:space-y-2"], ["routerLinkActive", "bg-primary-50 border-primary-100 text-primary-600", 1, "text-gray-600", "hover:bg-primary-50", "hover:text-gray-900", "border", "border-transparent", "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "rounded-md", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "bg-primary-50 border-primary-100 text-primary-600", 1, "text-gray-600", "hover:bg-primary-50", "hover:text-gray-900", "border", "border-transparent", "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "rounded-md", 3, "routerLink"], [1, "px-3", "py-2", "mt-12", "border-t"], [1, "text-gray-700", "hover:text-primary-600", "text-sm", 3, "click"]],
  template: function AccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AccountComponent_div_3_Template, 15, 12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("md:grid-cols-4", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx.isSignedIn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, ctx.isSignedIn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("col-span-3", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, ctx.isSignedIn$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 62498:
/*!***************************************************************!*\
  !*** ./src/app/account/components/account/account.graphql.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIGN_OUT": () => (/* binding */ SIGN_OUT)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 36238);

const SIGN_OUT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation SignOut {
        logout {
            success
        }
    }
`;

/***/ }),

/***/ 7611:
/*!*******************************************************************************************!*\
  !*** ./src/app/account/components/change-email-address/change-email-address.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailAddressComponent": () => (/* binding */ ChangeEmailAddressComponent)
/* harmony export */ });
/* harmony import */ var _change_email_address_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email-address.graphql */ 75358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);






const _c0 = function (a0, a1, a2) {
  return {
    "alert-secondary": a0,
    "alert-danger": a1,
    "alert-success": a2
  };
};
class ChangeEmailAddressComponent {
  constructor(route, router, dataService, stateService) {
    this.route = route;
    this.router = router;
    this.dataService = dataService;
    this.stateService = stateService;
    this.message = 'Verifying new email address...';
    this.state = 'pending';
  }
  ngOnInit() {
    this.verify();
  }
  verify() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.dataService.mutate(_change_email_address_graphql__WEBPACK_IMPORTED_MODULE_0__.VERIFY_CHANGE_EMAIL_ADDRESS, {
        token
      }).subscribe(() => {
        this.message = 'Your new email address has been verified!';
        this.state = 'success';
      }, err => {
        this.state = 'error';
        this.message = err.message;
      });
    } else {
      this.message = 'No token provided! Cannot verify email address.';
      this.state = 'error';
    }
  }
}
ChangeEmailAddressComponent.ɵfac = function ChangeEmailAddressComponent_Factory(t) {
  return new (t || ChangeEmailAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService));
};
ChangeEmailAddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ChangeEmailAddressComponent,
  selectors: [["vsf-change-email-address"]],
  decls: 2,
  vars: 6,
  consts: [["role", "alert", 1, "alert", "mt-3", 3, "ngClass"]],
  template: function ChangeEmailAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, ctx.state === "pending", ctx.state === "error", ctx.state === "success"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  encapsulation: 2
});


/***/ }),

/***/ 75358:
/*!*****************************************************************************************!*\
  !*** ./src/app/account/components/change-email-address/change-email-address.graphql.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERIFY_CHANGE_EMAIL_ADDRESS": () => (/* binding */ VERIFY_CHANGE_EMAIL_ADDRESS)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const VERIFY_CHANGE_EMAIL_ADDRESS = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation VerifyChangeEmailAddress($token: String!) {
        updateCustomerEmailAddress(token: $token) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 38659:
/*!***************************************************************************************!*\
  !*** ./src/app/account/components/forgotten-password/forgotten-password.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPasswordComponent": () => (/* binding */ ForgottenPasswordComponent)
/* harmony export */ });
/* harmony import */ var _forgotten_password_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotten-password.graphql */ 10339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/centered-card/centered-card.component */ 1513);







function ForgottenPasswordComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ForgottenPasswordComponent_ng_container_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.emailAddress = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Reset password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || ctx_r1.submitted);
  }
}
function ForgottenPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " An email has been sent to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, ". Please check and follow the included instructions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.emailAddress);
  }
}
class ForgottenPasswordComponent {
  constructor(dataService, route) {
    this.dataService = dataService;
    this.route = route;
    this.emailAddress = '';
    this.submitted = false;
    this.emailAddress = this.route.snapshot.paramMap.get('email') ?? '';
  }
  resetPassword() {
    this.dataService.mutate(_forgotten_password_graphql__WEBPACK_IMPORTED_MODULE_0__.REQUEST_PASSWORD_RESET, {
      emailAddress: this.emailAddress
    }).subscribe(() => {
      this.submitted = true;
    });
  }
}
ForgottenPasswordComponent.ɵfac = function ForgottenPasswordComponent_Factory(t) {
  return new (t || ForgottenPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
ForgottenPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ForgottenPasswordComponent,
  selectors: [["vsf-forgotten-password"]],
  decls: 6,
  vars: 2,
  consts: [[1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [3, "submit"], ["resetForm", "ngForm"], [4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["placeholder", "Email address", "name", "emailAddress", "type", "email", "email", "", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-primary", "mt-3", 3, "disabled"], ["role", "alert", 1, "alert", "alert-success"]],
  template: function ForgottenPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ForgottenPasswordComponent_Template_form_submit_1_listener() {
        return ctx.resetPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "vsf-centered-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ForgottenPasswordComponent_ng_container_4_Template, 4, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ForgottenPasswordComponent_div_5_Template, 5, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_2__.CenteredCardComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3R0ZW4tcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2ZvcmdvdHRlbi1wYXNzd29yZC9mb3Jnb3R0ZW4tcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 10339:
/*!*************************************************************************************!*\
  !*** ./src/app/account/components/forgotten-password/forgotten-password.graphql.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_PASSWORD_RESET": () => (/* binding */ REQUEST_PASSWORD_RESET)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const REQUEST_PASSWORD_RESET = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation RequestPasswordReset($emailAddress: String!) {
        requestPasswordReset(emailAddress: $emailAddress) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 2634:
/*!*******************************************************************!*\
  !*** ./src/app/account/components/register/register.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _register_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.graphql */ 61502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/centered-card/centered-card.component */ 1513);






function RegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Great! Now check your email (", ctx_r1.emailAddress, ") to complete registration. ");
  }
}
class RegisterComponent {
  constructor(dataService, changeDetector) {
    this.dataService = dataService;
    this.changeDetector = changeDetector;
    this.registrationSent = false;
  }
  register() {
    this.dataService.mutate(_register_graphql__WEBPACK_IMPORTED_MODULE_0__.REGISTER, {
      input: {
        emailAddress: this.emailAddress,
        firstName: this.firstName,
        lastName: this.lastName
      }
    }).subscribe(() => {
      this.registrationSent = true;
      this.changeDetector.markForCheck();
    });
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["vsf-register"]],
  decls: 10,
  vars: 8,
  consts: [[1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [3, "submit"], ["registerForm", "ngForm"], ["placeholder", "First name", "name", "firstName", "required", "", 1, "input-text", 3, "disabled", "ngModel", "ngModelChange"], ["placeholder", "Last name", "name", "lastName", "required", "", 1, "input-text", "mt-1", 3, "disabled", "ngModel", "ngModelChange"], ["placeholder", "Email address", "name", "emailAddress", "required", "", "type", "email", "email", "", 1, "input-text", "mt-1", 3, "disabled", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mt-3", 3, "disabled"], ["class", "registration-sent", 4, "ngIf"], [1, "registration-sent"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_1_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "vsf-centered-card")(4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.firstName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.lastName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.emailAddress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registrationSent)("ngModel", ctx.firstName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registrationSent)("ngModel", ctx.lastName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registrationSent)("ngModel", ctx.emailAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || ctx.registrationSent);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.registrationSent);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_2__.CenteredCardComponent],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 14049:
/*!*******************************************************************************!*\
  !*** ./src/app/account/components/reset-password/reset-password.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _reset_password_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.graphql */ 18985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/centered-card/centered-card.component */ 1513);








function ResetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Reset password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
  }
}
function ResetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
  }
}
class ResetPasswordComponent {
  constructor(dataService, stateService, route, router) {
    this.dataService = dataService;
    this.stateService = stateService;
    this.route = route;
    this.router = router;
    this.password = '';
    this.error = '';
    this.token = this.route.snapshot.queryParamMap.get('token') || undefined;
    if (!this.token) {
      this.error = 'No token provided! Cannot reset password.';
    }
  }
  confirmPasswordReset() {
    if (this.token) {
      this.dataService.mutate(_reset_password_graphql__WEBPACK_IMPORTED_MODULE_0__.RESET_PASSWORD, {
        token: this.token,
        password: this.password
      }).subscribe(() => {
        this.stateService.setState('signedIn', true);
        this.router.navigate(['/account']);
      });
    }
  }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["vsf-reset-password"]],
  decls: 6,
  vars: 2,
  consts: [[1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "mt-3", 3, "submit"], ["resetForm", "ngForm"], ["title", "Reset password", "subTitle", "Choose a new password"], ["class", "input-group mb-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "input-group", "mb-3"], ["placeholder", "Password", "type", "password", "name", "password", "aria-describedby", "button-verify", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["id", "button-verify", "type", "submit", 1, "btn-primary", "mt-3", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ResetPasswordComponent_Template_form_submit_1_listener() {
        return ctx.confirmPasswordReset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "vsf-centered-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_Template, 4, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ResetPasswordComponent_div_5_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_3__.CenteredCardComponent],
  encapsulation: 2,
  changeDetection: 0
});


/***/ }),

/***/ 18985:
/*!*****************************************************************************!*\
  !*** ./src/app/account/components/reset-password/reset-password.graphql.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESET_PASSWORD": () => (/* binding */ RESET_PASSWORD)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const RESET_PASSWORD = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation ResetPassword($token: String! $password: String!) {
        resetPassword(token: $token password: $password) {
            ...on CurrentUser {
                id
                identifier
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 85697:
/*!***************************************************************!*\
  !*** ./src/app/account/components/verify/verify.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyComponent": () => (/* binding */ VerifyComponent)
/* harmony export */ });
/* harmony import */ var _verify_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.graphql */ 45581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/providers/data/data.service */ 61199);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/providers/state/state.service */ 33426);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/centered-card/centered-card.component */ 1513);







class VerifyComponent {
  constructor(route, router, dataService, stateService) {
    this.route = route;
    this.router = router;
    this.dataService = dataService;
    this.stateService = stateService;
    this.password = '';
  }
  verify() {
    const password = this.password;
    const token = this.route.snapshot.queryParamMap.get('token');
    if (password && token) {
      this.dataService.mutate(_verify_graphql__WEBPACK_IMPORTED_MODULE_0__.VERIFY, {
        password,
        token
      }).subscribe(() => {
        this.stateService.setState('signedIn', true);
        this.router.navigate(['/account']);
      });
    }
  }
}
VerifyComponent.ɵfac = function VerifyComponent_Factory(t) {
  return new (t || VerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService));
};
VerifyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VerifyComponent,
  selectors: [["vsf-verify"]],
  decls: 6,
  vars: 2,
  consts: [[1, "mt-3", "max-w-md", "mx-auto", "block", 3, "submit"], ["verifyForm", "ngForm"], ["title", "Almost done!", "subTitle", "Now just choose a password to complete the process"], ["placeholder", "Password", "type", "password", "name", "password", "aria-describedby", "button-verify", "required", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["id", "button-verify", "type", "submit", 1, "btn-primary", "mt-3", 3, "disabled"]],
  template: function VerifyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function VerifyComponent_Template_form_submit_0_listener() {
        return ctx.verify();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "vsf-centered-card", 2)(3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VerifyComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Create account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_centered_card_centered_card_component__WEBPACK_IMPORTED_MODULE_3__.CenteredCardComponent],
  encapsulation: 2
});


/***/ }),

/***/ 45581:
/*!*************************************************************!*\
  !*** ./src/app/account/components/verify/verify.graphql.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERIFY": () => (/* binding */ VERIFY)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const VERIFY = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation Verify($password: String!, $token: String!) {
        verifyCustomerAccount(password: $password, token: $token) {
            ...on CurrentUser {
                id
                identifier
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ }),

/***/ 69817:
/*!****************************************************!*\
  !*** ./src/app/account/providers/account.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountGuard": () => (/* binding */ AccountGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/graphql/documents.graphql */ 98469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/providers/state/state.service */ 33426);
/* harmony import */ var _core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/providers/data/data.service */ 61199);






class AccountGuard {
  constructor(stateService, dataService) {
    this.stateService = stateService;
    this.dataService = dataService;
  }
  canActivate(route) {
    return this.stateService.select(state => state.signedIn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(signedIn => {
      if (signedIn) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
      } else {
        return this.dataService.query(_common_graphql_documents_graphql__WEBPACK_IMPORTED_MODULE_0__.GET_ACTIVE_CUSTOMER).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => !!data.activeCustomer));
      }
    }));
  }
}
AccountGuard.ɵfac = function AccountGuard_Factory(t) {
  return new (t || AccountGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_providers_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
AccountGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AccountGuard,
  factory: AccountGuard.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 90380:
/*!****************************************************!*\
  !*** ./src/app/account/providers/sign-in.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInGuard": () => (/* binding */ SignInGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/providers/state/state.service */ 33426);



class SignInGuard {
  constructor(stateService) {
    this.stateService = stateService;
  }
  canActivate(route) {
    return this.stateService.select(state => state.signedIn).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(signedIn => !signedIn));
  }
}
SignInGuard.ɵfac = function SignInGuard_Factory(t) {
  return new (t || SignInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_providers_state_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService));
};
SignInGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SignInGuard,
  factory: SignInGuard.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 10149:
/*!*******************************************!*\
  !*** ./src/app/common/generated-types.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdjustmentType": () => (/* binding */ AdjustmentType),
/* harmony export */   "AssetType": () => (/* binding */ AssetType),
/* harmony export */   "CurrencyCode": () => (/* binding */ CurrencyCode),
/* harmony export */   "DeletionResult": () => (/* binding */ DeletionResult),
/* harmony export */   "ErrorCode": () => (/* binding */ ErrorCode),
/* harmony export */   "GlobalFlag": () => (/* binding */ GlobalFlag),
/* harmony export */   "HistoryEntryType": () => (/* binding */ HistoryEntryType),
/* harmony export */   "LanguageCode": () => (/* binding */ LanguageCode),
/* harmony export */   "LogicalOperator": () => (/* binding */ LogicalOperator),
/* harmony export */   "OrderType": () => (/* binding */ OrderType),
/* harmony export */   "Permission": () => (/* binding */ Permission),
/* harmony export */   "SortOrder": () => (/* binding */ SortOrder)
/* harmony export */ });
var AdjustmentType;
(function (AdjustmentType) {
  AdjustmentType["DISTRIBUTED_ORDER_PROMOTION"] = "DISTRIBUTED_ORDER_PROMOTION";
  AdjustmentType["OTHER"] = "OTHER";
  AdjustmentType["PROMOTION"] = "PROMOTION";
})(AdjustmentType || (AdjustmentType = {}));
var AssetType;
(function (AssetType) {
  AssetType["BINARY"] = "BINARY";
  AssetType["IMAGE"] = "IMAGE";
  AssetType["VIDEO"] = "VIDEO";
})(AssetType || (AssetType = {}));
/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
var CurrencyCode;
(function (CurrencyCode) {
  /** United Arab Emirates dirham */
  CurrencyCode["AED"] = "AED";
  /** Afghan afghani */
  CurrencyCode["AFN"] = "AFN";
  /** Albanian lek */
  CurrencyCode["ALL"] = "ALL";
  /** Armenian dram */
  CurrencyCode["AMD"] = "AMD";
  /** Netherlands Antillean guilder */
  CurrencyCode["ANG"] = "ANG";
  /** Angolan kwanza */
  CurrencyCode["AOA"] = "AOA";
  /** Argentine peso */
  CurrencyCode["ARS"] = "ARS";
  /** Australian dollar */
  CurrencyCode["AUD"] = "AUD";
  /** Aruban florin */
  CurrencyCode["AWG"] = "AWG";
  /** Azerbaijani manat */
  CurrencyCode["AZN"] = "AZN";
  /** Bosnia and Herzegovina convertible mark */
  CurrencyCode["BAM"] = "BAM";
  /** Barbados dollar */
  CurrencyCode["BBD"] = "BBD";
  /** Bangladeshi taka */
  CurrencyCode["BDT"] = "BDT";
  /** Bulgarian lev */
  CurrencyCode["BGN"] = "BGN";
  /** Bahraini dinar */
  CurrencyCode["BHD"] = "BHD";
  /** Burundian franc */
  CurrencyCode["BIF"] = "BIF";
  /** Bermudian dollar */
  CurrencyCode["BMD"] = "BMD";
  /** Brunei dollar */
  CurrencyCode["BND"] = "BND";
  /** Boliviano */
  CurrencyCode["BOB"] = "BOB";
  /** Brazilian real */
  CurrencyCode["BRL"] = "BRL";
  /** Bahamian dollar */
  CurrencyCode["BSD"] = "BSD";
  /** Bhutanese ngultrum */
  CurrencyCode["BTN"] = "BTN";
  /** Botswana pula */
  CurrencyCode["BWP"] = "BWP";
  /** Belarusian ruble */
  CurrencyCode["BYN"] = "BYN";
  /** Belize dollar */
  CurrencyCode["BZD"] = "BZD";
  /** Canadian dollar */
  CurrencyCode["CAD"] = "CAD";
  /** Congolese franc */
  CurrencyCode["CDF"] = "CDF";
  /** Swiss franc */
  CurrencyCode["CHF"] = "CHF";
  /** Chilean peso */
  CurrencyCode["CLP"] = "CLP";
  /** Renminbi (Chinese) yuan */
  CurrencyCode["CNY"] = "CNY";
  /** Colombian peso */
  CurrencyCode["COP"] = "COP";
  /** Costa Rican colon */
  CurrencyCode["CRC"] = "CRC";
  /** Cuban convertible peso */
  CurrencyCode["CUC"] = "CUC";
  /** Cuban peso */
  CurrencyCode["CUP"] = "CUP";
  /** Cape Verde escudo */
  CurrencyCode["CVE"] = "CVE";
  /** Czech koruna */
  CurrencyCode["CZK"] = "CZK";
  /** Djiboutian franc */
  CurrencyCode["DJF"] = "DJF";
  /** Danish krone */
  CurrencyCode["DKK"] = "DKK";
  /** Dominican peso */
  CurrencyCode["DOP"] = "DOP";
  /** Algerian dinar */
  CurrencyCode["DZD"] = "DZD";
  /** Egyptian pound */
  CurrencyCode["EGP"] = "EGP";
  /** Eritrean nakfa */
  CurrencyCode["ERN"] = "ERN";
  /** Ethiopian birr */
  CurrencyCode["ETB"] = "ETB";
  /** Euro */
  CurrencyCode["EUR"] = "EUR";
  /** Fiji dollar */
  CurrencyCode["FJD"] = "FJD";
  /** Falkland Islands pound */
  CurrencyCode["FKP"] = "FKP";
  /** Pound sterling */
  CurrencyCode["GBP"] = "GBP";
  /** Georgian lari */
  CurrencyCode["GEL"] = "GEL";
  /** Ghanaian cedi */
  CurrencyCode["GHS"] = "GHS";
  /** Gibraltar pound */
  CurrencyCode["GIP"] = "GIP";
  /** Gambian dalasi */
  CurrencyCode["GMD"] = "GMD";
  /** Guinean franc */
  CurrencyCode["GNF"] = "GNF";
  /** Guatemalan quetzal */
  CurrencyCode["GTQ"] = "GTQ";
  /** Guyanese dollar */
  CurrencyCode["GYD"] = "GYD";
  /** Hong Kong dollar */
  CurrencyCode["HKD"] = "HKD";
  /** Honduran lempira */
  CurrencyCode["HNL"] = "HNL";
  /** Croatian kuna */
  CurrencyCode["HRK"] = "HRK";
  /** Haitian gourde */
  CurrencyCode["HTG"] = "HTG";
  /** Hungarian forint */
  CurrencyCode["HUF"] = "HUF";
  /** Indonesian rupiah */
  CurrencyCode["IDR"] = "IDR";
  /** Israeli new shekel */
  CurrencyCode["ILS"] = "ILS";
  /** Indian rupee */
  CurrencyCode["INR"] = "INR";
  /** Iraqi dinar */
  CurrencyCode["IQD"] = "IQD";
  /** Iranian rial */
  CurrencyCode["IRR"] = "IRR";
  /** Icelandic króna */
  CurrencyCode["ISK"] = "ISK";
  /** Jamaican dollar */
  CurrencyCode["JMD"] = "JMD";
  /** Jordanian dinar */
  CurrencyCode["JOD"] = "JOD";
  /** Japanese yen */
  CurrencyCode["JPY"] = "JPY";
  /** Kenyan shilling */
  CurrencyCode["KES"] = "KES";
  /** Kyrgyzstani som */
  CurrencyCode["KGS"] = "KGS";
  /** Cambodian riel */
  CurrencyCode["KHR"] = "KHR";
  /** Comoro franc */
  CurrencyCode["KMF"] = "KMF";
  /** North Korean won */
  CurrencyCode["KPW"] = "KPW";
  /** South Korean won */
  CurrencyCode["KRW"] = "KRW";
  /** Kuwaiti dinar */
  CurrencyCode["KWD"] = "KWD";
  /** Cayman Islands dollar */
  CurrencyCode["KYD"] = "KYD";
  /** Kazakhstani tenge */
  CurrencyCode["KZT"] = "KZT";
  /** Lao kip */
  CurrencyCode["LAK"] = "LAK";
  /** Lebanese pound */
  CurrencyCode["LBP"] = "LBP";
  /** Sri Lankan rupee */
  CurrencyCode["LKR"] = "LKR";
  /** Liberian dollar */
  CurrencyCode["LRD"] = "LRD";
  /** Lesotho loti */
  CurrencyCode["LSL"] = "LSL";
  /** Libyan dinar */
  CurrencyCode["LYD"] = "LYD";
  /** Moroccan dirham */
  CurrencyCode["MAD"] = "MAD";
  /** Moldovan leu */
  CurrencyCode["MDL"] = "MDL";
  /** Malagasy ariary */
  CurrencyCode["MGA"] = "MGA";
  /** Macedonian denar */
  CurrencyCode["MKD"] = "MKD";
  /** Myanmar kyat */
  CurrencyCode["MMK"] = "MMK";
  /** Mongolian tögrög */
  CurrencyCode["MNT"] = "MNT";
  /** Macanese pataca */
  CurrencyCode["MOP"] = "MOP";
  /** Mauritanian ouguiya */
  CurrencyCode["MRU"] = "MRU";
  /** Mauritian rupee */
  CurrencyCode["MUR"] = "MUR";
  /** Maldivian rufiyaa */
  CurrencyCode["MVR"] = "MVR";
  /** Malawian kwacha */
  CurrencyCode["MWK"] = "MWK";
  /** Mexican peso */
  CurrencyCode["MXN"] = "MXN";
  /** Malaysian ringgit */
  CurrencyCode["MYR"] = "MYR";
  /** Mozambican metical */
  CurrencyCode["MZN"] = "MZN";
  /** Namibian dollar */
  CurrencyCode["NAD"] = "NAD";
  /** Nigerian naira */
  CurrencyCode["NGN"] = "NGN";
  /** Nicaraguan córdoba */
  CurrencyCode["NIO"] = "NIO";
  /** Norwegian krone */
  CurrencyCode["NOK"] = "NOK";
  /** Nepalese rupee */
  CurrencyCode["NPR"] = "NPR";
  /** New Zealand dollar */
  CurrencyCode["NZD"] = "NZD";
  /** Omani rial */
  CurrencyCode["OMR"] = "OMR";
  /** Panamanian balboa */
  CurrencyCode["PAB"] = "PAB";
  /** Peruvian sol */
  CurrencyCode["PEN"] = "PEN";
  /** Papua New Guinean kina */
  CurrencyCode["PGK"] = "PGK";
  /** Philippine peso */
  CurrencyCode["PHP"] = "PHP";
  /** Pakistani rupee */
  CurrencyCode["PKR"] = "PKR";
  /** Polish złoty */
  CurrencyCode["PLN"] = "PLN";
  /** Paraguayan guaraní */
  CurrencyCode["PYG"] = "PYG";
  /** Qatari riyal */
  CurrencyCode["QAR"] = "QAR";
  /** Romanian leu */
  CurrencyCode["RON"] = "RON";
  /** Serbian dinar */
  CurrencyCode["RSD"] = "RSD";
  /** Russian ruble */
  CurrencyCode["RUB"] = "RUB";
  /** Rwandan franc */
  CurrencyCode["RWF"] = "RWF";
  /** Saudi riyal */
  CurrencyCode["SAR"] = "SAR";
  /** Solomon Islands dollar */
  CurrencyCode["SBD"] = "SBD";
  /** Seychelles rupee */
  CurrencyCode["SCR"] = "SCR";
  /** Sudanese pound */
  CurrencyCode["SDG"] = "SDG";
  /** Swedish krona/kronor */
  CurrencyCode["SEK"] = "SEK";
  /** Singapore dollar */
  CurrencyCode["SGD"] = "SGD";
  /** Saint Helena pound */
  CurrencyCode["SHP"] = "SHP";
  /** Sierra Leonean leone */
  CurrencyCode["SLL"] = "SLL";
  /** Somali shilling */
  CurrencyCode["SOS"] = "SOS";
  /** Surinamese dollar */
  CurrencyCode["SRD"] = "SRD";
  /** South Sudanese pound */
  CurrencyCode["SSP"] = "SSP";
  /** São Tomé and Príncipe dobra */
  CurrencyCode["STN"] = "STN";
  /** Salvadoran colón */
  CurrencyCode["SVC"] = "SVC";
  /** Syrian pound */
  CurrencyCode["SYP"] = "SYP";
  /** Swazi lilangeni */
  CurrencyCode["SZL"] = "SZL";
  /** Thai baht */
  CurrencyCode["THB"] = "THB";
  /** Tajikistani somoni */
  CurrencyCode["TJS"] = "TJS";
  /** Turkmenistan manat */
  CurrencyCode["TMT"] = "TMT";
  /** Tunisian dinar */
  CurrencyCode["TND"] = "TND";
  /** Tongan paʻanga */
  CurrencyCode["TOP"] = "TOP";
  /** Turkish lira */
  CurrencyCode["TRY"] = "TRY";
  /** Trinidad and Tobago dollar */
  CurrencyCode["TTD"] = "TTD";
  /** New Taiwan dollar */
  CurrencyCode["TWD"] = "TWD";
  /** Tanzanian shilling */
  CurrencyCode["TZS"] = "TZS";
  /** Ukrainian hryvnia */
  CurrencyCode["UAH"] = "UAH";
  /** Ugandan shilling */
  CurrencyCode["UGX"] = "UGX";
  /** United States dollar */
  CurrencyCode["USD"] = "USD";
  /** Uruguayan peso */
  CurrencyCode["UYU"] = "UYU";
  /** Uzbekistan som */
  CurrencyCode["UZS"] = "UZS";
  /** Venezuelan bolívar soberano */
  CurrencyCode["VES"] = "VES";
  /** Vietnamese đồng */
  CurrencyCode["VND"] = "VND";
  /** Vanuatu vatu */
  CurrencyCode["VUV"] = "VUV";
  /** Samoan tala */
  CurrencyCode["WST"] = "WST";
  /** CFA franc BEAC */
  CurrencyCode["XAF"] = "XAF";
  /** East Caribbean dollar */
  CurrencyCode["XCD"] = "XCD";
  /** CFA franc BCEAO */
  CurrencyCode["XOF"] = "XOF";
  /** CFP franc (franc Pacifique) */
  CurrencyCode["XPF"] = "XPF";
  /** Yemeni rial */
  CurrencyCode["YER"] = "YER";
  /** South African rand */
  CurrencyCode["ZAR"] = "ZAR";
  /** Zambian kwacha */
  CurrencyCode["ZMW"] = "ZMW";
  /** Zimbabwean dollar */
  CurrencyCode["ZWL"] = "ZWL";
})(CurrencyCode || (CurrencyCode = {}));
var DeletionResult;
(function (DeletionResult) {
  /** The entity was successfully deleted */
  DeletionResult["DELETED"] = "DELETED";
  /** Deletion did not take place, reason given in message */
  DeletionResult["NOT_DELETED"] = "NOT_DELETED";
})(DeletionResult || (DeletionResult = {}));
var ErrorCode;
(function (ErrorCode) {
  ErrorCode["ALREADY_LOGGED_IN_ERROR"] = "ALREADY_LOGGED_IN_ERROR";
  ErrorCode["COUPON_CODE_EXPIRED_ERROR"] = "COUPON_CODE_EXPIRED_ERROR";
  ErrorCode["COUPON_CODE_INVALID_ERROR"] = "COUPON_CODE_INVALID_ERROR";
  ErrorCode["COUPON_CODE_LIMIT_ERROR"] = "COUPON_CODE_LIMIT_ERROR";
  ErrorCode["EMAIL_ADDRESS_CONFLICT_ERROR"] = "EMAIL_ADDRESS_CONFLICT_ERROR";
  ErrorCode["GUEST_CHECKOUT_ERROR"] = "GUEST_CHECKOUT_ERROR";
  ErrorCode["IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR"] = "IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR";
  ErrorCode["IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR"] = "IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR";
  ErrorCode["INELIGIBLE_PAYMENT_METHOD_ERROR"] = "INELIGIBLE_PAYMENT_METHOD_ERROR";
  ErrorCode["INELIGIBLE_SHIPPING_METHOD_ERROR"] = "INELIGIBLE_SHIPPING_METHOD_ERROR";
  ErrorCode["INSUFFICIENT_STOCK_ERROR"] = "INSUFFICIENT_STOCK_ERROR";
  ErrorCode["INVALID_CREDENTIALS_ERROR"] = "INVALID_CREDENTIALS_ERROR";
  ErrorCode["MISSING_PASSWORD_ERROR"] = "MISSING_PASSWORD_ERROR";
  ErrorCode["NATIVE_AUTH_STRATEGY_ERROR"] = "NATIVE_AUTH_STRATEGY_ERROR";
  ErrorCode["NEGATIVE_QUANTITY_ERROR"] = "NEGATIVE_QUANTITY_ERROR";
  ErrorCode["NOT_VERIFIED_ERROR"] = "NOT_VERIFIED_ERROR";
  ErrorCode["NO_ACTIVE_ORDER_ERROR"] = "NO_ACTIVE_ORDER_ERROR";
  ErrorCode["ORDER_LIMIT_ERROR"] = "ORDER_LIMIT_ERROR";
  ErrorCode["ORDER_MODIFICATION_ERROR"] = "ORDER_MODIFICATION_ERROR";
  ErrorCode["ORDER_PAYMENT_STATE_ERROR"] = "ORDER_PAYMENT_STATE_ERROR";
  ErrorCode["ORDER_STATE_TRANSITION_ERROR"] = "ORDER_STATE_TRANSITION_ERROR";
  ErrorCode["PASSWORD_ALREADY_SET_ERROR"] = "PASSWORD_ALREADY_SET_ERROR";
  ErrorCode["PASSWORD_RESET_TOKEN_EXPIRED_ERROR"] = "PASSWORD_RESET_TOKEN_EXPIRED_ERROR";
  ErrorCode["PASSWORD_RESET_TOKEN_INVALID_ERROR"] = "PASSWORD_RESET_TOKEN_INVALID_ERROR";
  ErrorCode["PASSWORD_VALIDATION_ERROR"] = "PASSWORD_VALIDATION_ERROR";
  ErrorCode["PAYMENT_DECLINED_ERROR"] = "PAYMENT_DECLINED_ERROR";
  ErrorCode["PAYMENT_FAILED_ERROR"] = "PAYMENT_FAILED_ERROR";
  ErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  ErrorCode["VERIFICATION_TOKEN_EXPIRED_ERROR"] = "VERIFICATION_TOKEN_EXPIRED_ERROR";
  ErrorCode["VERIFICATION_TOKEN_INVALID_ERROR"] = "VERIFICATION_TOKEN_INVALID_ERROR";
})(ErrorCode || (ErrorCode = {}));
var GlobalFlag;
(function (GlobalFlag) {
  GlobalFlag["FALSE"] = "FALSE";
  GlobalFlag["INHERIT"] = "INHERIT";
  GlobalFlag["TRUE"] = "TRUE";
})(GlobalFlag || (GlobalFlag = {}));
var HistoryEntryType;
(function (HistoryEntryType) {
  HistoryEntryType["CUSTOMER_ADDED_TO_GROUP"] = "CUSTOMER_ADDED_TO_GROUP";
  HistoryEntryType["CUSTOMER_ADDRESS_CREATED"] = "CUSTOMER_ADDRESS_CREATED";
  HistoryEntryType["CUSTOMER_ADDRESS_DELETED"] = "CUSTOMER_ADDRESS_DELETED";
  HistoryEntryType["CUSTOMER_ADDRESS_UPDATED"] = "CUSTOMER_ADDRESS_UPDATED";
  HistoryEntryType["CUSTOMER_DETAIL_UPDATED"] = "CUSTOMER_DETAIL_UPDATED";
  HistoryEntryType["CUSTOMER_EMAIL_UPDATE_REQUESTED"] = "CUSTOMER_EMAIL_UPDATE_REQUESTED";
  HistoryEntryType["CUSTOMER_EMAIL_UPDATE_VERIFIED"] = "CUSTOMER_EMAIL_UPDATE_VERIFIED";
  HistoryEntryType["CUSTOMER_NOTE"] = "CUSTOMER_NOTE";
  HistoryEntryType["CUSTOMER_PASSWORD_RESET_REQUESTED"] = "CUSTOMER_PASSWORD_RESET_REQUESTED";
  HistoryEntryType["CUSTOMER_PASSWORD_RESET_VERIFIED"] = "CUSTOMER_PASSWORD_RESET_VERIFIED";
  HistoryEntryType["CUSTOMER_PASSWORD_UPDATED"] = "CUSTOMER_PASSWORD_UPDATED";
  HistoryEntryType["CUSTOMER_REGISTERED"] = "CUSTOMER_REGISTERED";
  HistoryEntryType["CUSTOMER_REMOVED_FROM_GROUP"] = "CUSTOMER_REMOVED_FROM_GROUP";
  HistoryEntryType["CUSTOMER_VERIFIED"] = "CUSTOMER_VERIFIED";
  HistoryEntryType["ORDER_CANCELLATION"] = "ORDER_CANCELLATION";
  HistoryEntryType["ORDER_COUPON_APPLIED"] = "ORDER_COUPON_APPLIED";
  HistoryEntryType["ORDER_COUPON_REMOVED"] = "ORDER_COUPON_REMOVED";
  HistoryEntryType["ORDER_FULFILLMENT"] = "ORDER_FULFILLMENT";
  HistoryEntryType["ORDER_FULFILLMENT_TRANSITION"] = "ORDER_FULFILLMENT_TRANSITION";
  HistoryEntryType["ORDER_MODIFIED"] = "ORDER_MODIFIED";
  HistoryEntryType["ORDER_NOTE"] = "ORDER_NOTE";
  HistoryEntryType["ORDER_PAYMENT_TRANSITION"] = "ORDER_PAYMENT_TRANSITION";
  HistoryEntryType["ORDER_REFUND_TRANSITION"] = "ORDER_REFUND_TRANSITION";
  HistoryEntryType["ORDER_STATE_TRANSITION"] = "ORDER_STATE_TRANSITION";
})(HistoryEntryType || (HistoryEntryType = {}));
/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
var LanguageCode;
(function (LanguageCode) {
  /** Afrikaans */
  LanguageCode["af"] = "af";
  /** Akan */
  LanguageCode["ak"] = "ak";
  /** Amharic */
  LanguageCode["am"] = "am";
  /** Arabic */
  LanguageCode["ar"] = "ar";
  /** Assamese */
  LanguageCode["as"] = "as";
  /** Azerbaijani */
  LanguageCode["az"] = "az";
  /** Belarusian */
  LanguageCode["be"] = "be";
  /** Bulgarian */
  LanguageCode["bg"] = "bg";
  /** Bambara */
  LanguageCode["bm"] = "bm";
  /** Bangla */
  LanguageCode["bn"] = "bn";
  /** Tibetan */
  LanguageCode["bo"] = "bo";
  /** Breton */
  LanguageCode["br"] = "br";
  /** Bosnian */
  LanguageCode["bs"] = "bs";
  /** Catalan */
  LanguageCode["ca"] = "ca";
  /** Chechen */
  LanguageCode["ce"] = "ce";
  /** Corsican */
  LanguageCode["co"] = "co";
  /** Czech */
  LanguageCode["cs"] = "cs";
  /** Church Slavic */
  LanguageCode["cu"] = "cu";
  /** Welsh */
  LanguageCode["cy"] = "cy";
  /** Danish */
  LanguageCode["da"] = "da";
  /** German */
  LanguageCode["de"] = "de";
  /** Austrian German */
  LanguageCode["de_AT"] = "de_AT";
  /** Swiss High German */
  LanguageCode["de_CH"] = "de_CH";
  /** Dzongkha */
  LanguageCode["dz"] = "dz";
  /** Ewe */
  LanguageCode["ee"] = "ee";
  /** Greek */
  LanguageCode["el"] = "el";
  /** English */
  LanguageCode["en"] = "en";
  /** Australian English */
  LanguageCode["en_AU"] = "en_AU";
  /** Canadian English */
  LanguageCode["en_CA"] = "en_CA";
  /** British English */
  LanguageCode["en_GB"] = "en_GB";
  /** American English */
  LanguageCode["en_US"] = "en_US";
  /** Esperanto */
  LanguageCode["eo"] = "eo";
  /** Spanish */
  LanguageCode["es"] = "es";
  /** European Spanish */
  LanguageCode["es_ES"] = "es_ES";
  /** Mexican Spanish */
  LanguageCode["es_MX"] = "es_MX";
  /** Estonian */
  LanguageCode["et"] = "et";
  /** Basque */
  LanguageCode["eu"] = "eu";
  /** Persian */
  LanguageCode["fa"] = "fa";
  /** Dari */
  LanguageCode["fa_AF"] = "fa_AF";
  /** Fulah */
  LanguageCode["ff"] = "ff";
  /** Finnish */
  LanguageCode["fi"] = "fi";
  /** Faroese */
  LanguageCode["fo"] = "fo";
  /** French */
  LanguageCode["fr"] = "fr";
  /** Canadian French */
  LanguageCode["fr_CA"] = "fr_CA";
  /** Swiss French */
  LanguageCode["fr_CH"] = "fr_CH";
  /** Western Frisian */
  LanguageCode["fy"] = "fy";
  /** Irish */
  LanguageCode["ga"] = "ga";
  /** Scottish Gaelic */
  LanguageCode["gd"] = "gd";
  /** Galician */
  LanguageCode["gl"] = "gl";
  /** Gujarati */
  LanguageCode["gu"] = "gu";
  /** Manx */
  LanguageCode["gv"] = "gv";
  /** Hausa */
  LanguageCode["ha"] = "ha";
  /** Hebrew */
  LanguageCode["he"] = "he";
  /** Hindi */
  LanguageCode["hi"] = "hi";
  /** Croatian */
  LanguageCode["hr"] = "hr";
  /** Haitian Creole */
  LanguageCode["ht"] = "ht";
  /** Hungarian */
  LanguageCode["hu"] = "hu";
  /** Armenian */
  LanguageCode["hy"] = "hy";
  /** Interlingua */
  LanguageCode["ia"] = "ia";
  /** Indonesian */
  LanguageCode["id"] = "id";
  /** Igbo */
  LanguageCode["ig"] = "ig";
  /** Sichuan Yi */
  LanguageCode["ii"] = "ii";
  /** Icelandic */
  LanguageCode["is"] = "is";
  /** Italian */
  LanguageCode["it"] = "it";
  /** Japanese */
  LanguageCode["ja"] = "ja";
  /** Javanese */
  LanguageCode["jv"] = "jv";
  /** Georgian */
  LanguageCode["ka"] = "ka";
  /** Kikuyu */
  LanguageCode["ki"] = "ki";
  /** Kazakh */
  LanguageCode["kk"] = "kk";
  /** Kalaallisut */
  LanguageCode["kl"] = "kl";
  /** Khmer */
  LanguageCode["km"] = "km";
  /** Kannada */
  LanguageCode["kn"] = "kn";
  /** Korean */
  LanguageCode["ko"] = "ko";
  /** Kashmiri */
  LanguageCode["ks"] = "ks";
  /** Kurdish */
  LanguageCode["ku"] = "ku";
  /** Cornish */
  LanguageCode["kw"] = "kw";
  /** Kyrgyz */
  LanguageCode["ky"] = "ky";
  /** Latin */
  LanguageCode["la"] = "la";
  /** Luxembourgish */
  LanguageCode["lb"] = "lb";
  /** Ganda */
  LanguageCode["lg"] = "lg";
  /** Lingala */
  LanguageCode["ln"] = "ln";
  /** Lao */
  LanguageCode["lo"] = "lo";
  /** Lithuanian */
  LanguageCode["lt"] = "lt";
  /** Luba-Katanga */
  LanguageCode["lu"] = "lu";
  /** Latvian */
  LanguageCode["lv"] = "lv";
  /** Malagasy */
  LanguageCode["mg"] = "mg";
  /** Maori */
  LanguageCode["mi"] = "mi";
  /** Macedonian */
  LanguageCode["mk"] = "mk";
  /** Malayalam */
  LanguageCode["ml"] = "ml";
  /** Mongolian */
  LanguageCode["mn"] = "mn";
  /** Marathi */
  LanguageCode["mr"] = "mr";
  /** Malay */
  LanguageCode["ms"] = "ms";
  /** Maltese */
  LanguageCode["mt"] = "mt";
  /** Burmese */
  LanguageCode["my"] = "my";
  /** Norwegian Bokmål */
  LanguageCode["nb"] = "nb";
  /** North Ndebele */
  LanguageCode["nd"] = "nd";
  /** Nepali */
  LanguageCode["ne"] = "ne";
  /** Dutch */
  LanguageCode["nl"] = "nl";
  /** Flemish */
  LanguageCode["nl_BE"] = "nl_BE";
  /** Norwegian Nynorsk */
  LanguageCode["nn"] = "nn";
  /** Nyanja */
  LanguageCode["ny"] = "ny";
  /** Oromo */
  LanguageCode["om"] = "om";
  /** Odia */
  LanguageCode["or"] = "or";
  /** Ossetic */
  LanguageCode["os"] = "os";
  /** Punjabi */
  LanguageCode["pa"] = "pa";
  /** Polish */
  LanguageCode["pl"] = "pl";
  /** Pashto */
  LanguageCode["ps"] = "ps";
  /** Portuguese */
  LanguageCode["pt"] = "pt";
  /** Brazilian Portuguese */
  LanguageCode["pt_BR"] = "pt_BR";
  /** European Portuguese */
  LanguageCode["pt_PT"] = "pt_PT";
  /** Quechua */
  LanguageCode["qu"] = "qu";
  /** Romansh */
  LanguageCode["rm"] = "rm";
  /** Rundi */
  LanguageCode["rn"] = "rn";
  /** Romanian */
  LanguageCode["ro"] = "ro";
  /** Moldavian */
  LanguageCode["ro_MD"] = "ro_MD";
  /** Russian */
  LanguageCode["ru"] = "ru";
  /** Kinyarwanda */
  LanguageCode["rw"] = "rw";
  /** Sanskrit */
  LanguageCode["sa"] = "sa";
  /** Sindhi */
  LanguageCode["sd"] = "sd";
  /** Northern Sami */
  LanguageCode["se"] = "se";
  /** Sango */
  LanguageCode["sg"] = "sg";
  /** Sinhala */
  LanguageCode["si"] = "si";
  /** Slovak */
  LanguageCode["sk"] = "sk";
  /** Slovenian */
  LanguageCode["sl"] = "sl";
  /** Samoan */
  LanguageCode["sm"] = "sm";
  /** Shona */
  LanguageCode["sn"] = "sn";
  /** Somali */
  LanguageCode["so"] = "so";
  /** Albanian */
  LanguageCode["sq"] = "sq";
  /** Serbian */
  LanguageCode["sr"] = "sr";
  /** Southern Sotho */
  LanguageCode["st"] = "st";
  /** Sundanese */
  LanguageCode["su"] = "su";
  /** Swedish */
  LanguageCode["sv"] = "sv";
  /** Swahili */
  LanguageCode["sw"] = "sw";
  /** Congo Swahili */
  LanguageCode["sw_CD"] = "sw_CD";
  /** Tamil */
  LanguageCode["ta"] = "ta";
  /** Telugu */
  LanguageCode["te"] = "te";
  /** Tajik */
  LanguageCode["tg"] = "tg";
  /** Thai */
  LanguageCode["th"] = "th";
  /** Tigrinya */
  LanguageCode["ti"] = "ti";
  /** Turkmen */
  LanguageCode["tk"] = "tk";
  /** Tongan */
  LanguageCode["to"] = "to";
  /** Turkish */
  LanguageCode["tr"] = "tr";
  /** Tatar */
  LanguageCode["tt"] = "tt";
  /** Uyghur */
  LanguageCode["ug"] = "ug";
  /** Ukrainian */
  LanguageCode["uk"] = "uk";
  /** Urdu */
  LanguageCode["ur"] = "ur";
  /** Uzbek */
  LanguageCode["uz"] = "uz";
  /** Vietnamese */
  LanguageCode["vi"] = "vi";
  /** Volapük */
  LanguageCode["vo"] = "vo";
  /** Wolof */
  LanguageCode["wo"] = "wo";
  /** Xhosa */
  LanguageCode["xh"] = "xh";
  /** Yiddish */
  LanguageCode["yi"] = "yi";
  /** Yoruba */
  LanguageCode["yo"] = "yo";
  /** Chinese */
  LanguageCode["zh"] = "zh";
  /** Simplified Chinese */
  LanguageCode["zh_Hans"] = "zh_Hans";
  /** Traditional Chinese */
  LanguageCode["zh_Hant"] = "zh_Hant";
  /** Zulu */
  LanguageCode["zu"] = "zu";
})(LanguageCode || (LanguageCode = {}));
var LogicalOperator;
(function (LogicalOperator) {
  LogicalOperator["AND"] = "AND";
  LogicalOperator["OR"] = "OR";
})(LogicalOperator || (LogicalOperator = {}));
var OrderType;
(function (OrderType) {
  OrderType["Aggregate"] = "Aggregate";
  OrderType["Regular"] = "Regular";
  OrderType["Seller"] = "Seller";
})(OrderType || (OrderType = {}));
/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 * const userId = ctx.activeUserId;
 * if (userId) {
 * return this.customerService.findOneByUserId(ctx, userId);
 * }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
var Permission;
(function (Permission) {
  /** Authenticated means simply that the user is logged in */
  Permission["Authenticated"] = "Authenticated";
  /** Grants permission to create Administrator */
  Permission["CreateAdministrator"] = "CreateAdministrator";
  /** Grants permission to create Asset */
  Permission["CreateAsset"] = "CreateAsset";
  /** Grants permission to create Products, Facets, Assets, Collections */
  Permission["CreateCatalog"] = "CreateCatalog";
  /** Grants permission to create Channel */
  Permission["CreateChannel"] = "CreateChannel";
  /** Grants permission to create Collection */
  Permission["CreateCollection"] = "CreateCollection";
  /** Grants permission to create Country */
  Permission["CreateCountry"] = "CreateCountry";
  /** Grants permission to create Customer */
  Permission["CreateCustomer"] = "CreateCustomer";
  /** Grants permission to create CustomerGroup */
  Permission["CreateCustomerGroup"] = "CreateCustomerGroup";
  /** Grants permission to create Facet */
  Permission["CreateFacet"] = "CreateFacet";
  /** Grants permission to create Order */
  Permission["CreateOrder"] = "CreateOrder";
  /** Grants permission to create PaymentMethod */
  Permission["CreatePaymentMethod"] = "CreatePaymentMethod";
  /** Grants permission to create Product */
  Permission["CreateProduct"] = "CreateProduct";
  /** Grants permission to create Promotion */
  Permission["CreatePromotion"] = "CreatePromotion";
  /** Grants permission to create Seller */
  Permission["CreateSeller"] = "CreateSeller";
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  Permission["CreateSettings"] = "CreateSettings";
  /** Grants permission to create ShippingMethod */
  Permission["CreateShippingMethod"] = "CreateShippingMethod";
  /** Grants permission to create StockLocation */
  Permission["CreateStockLocation"] = "CreateStockLocation";
  /** Grants permission to create System */
  Permission["CreateSystem"] = "CreateSystem";
  /** Grants permission to create Tag */
  Permission["CreateTag"] = "CreateTag";
  /** Grants permission to create TaxCategory */
  Permission["CreateTaxCategory"] = "CreateTaxCategory";
  /** Grants permission to create TaxRate */
  Permission["CreateTaxRate"] = "CreateTaxRate";
  /** Grants permission to create Zone */
  Permission["CreateZone"] = "CreateZone";
  /** Grants permission to delete Administrator */
  Permission["DeleteAdministrator"] = "DeleteAdministrator";
  /** Grants permission to delete Asset */
  Permission["DeleteAsset"] = "DeleteAsset";
  /** Grants permission to delete Products, Facets, Assets, Collections */
  Permission["DeleteCatalog"] = "DeleteCatalog";
  /** Grants permission to delete Channel */
  Permission["DeleteChannel"] = "DeleteChannel";
  /** Grants permission to delete Collection */
  Permission["DeleteCollection"] = "DeleteCollection";
  /** Grants permission to delete Country */
  Permission["DeleteCountry"] = "DeleteCountry";
  /** Grants permission to delete Customer */
  Permission["DeleteCustomer"] = "DeleteCustomer";
  /** Grants permission to delete CustomerGroup */
  Permission["DeleteCustomerGroup"] = "DeleteCustomerGroup";
  /** Grants permission to delete Facet */
  Permission["DeleteFacet"] = "DeleteFacet";
  /** Grants permission to delete Order */
  Permission["DeleteOrder"] = "DeleteOrder";
  /** Grants permission to delete PaymentMethod */
  Permission["DeletePaymentMethod"] = "DeletePaymentMethod";
  /** Grants permission to delete Product */
  Permission["DeleteProduct"] = "DeleteProduct";
  /** Grants permission to delete Promotion */
  Permission["DeletePromotion"] = "DeletePromotion";
  /** Grants permission to delete Seller */
  Permission["DeleteSeller"] = "DeleteSeller";
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  Permission["DeleteSettings"] = "DeleteSettings";
  /** Grants permission to delete ShippingMethod */
  Permission["DeleteShippingMethod"] = "DeleteShippingMethod";
  /** Grants permission to delete StockLocation */
  Permission["DeleteStockLocation"] = "DeleteStockLocation";
  /** Grants permission to delete System */
  Permission["DeleteSystem"] = "DeleteSystem";
  /** Grants permission to delete Tag */
  Permission["DeleteTag"] = "DeleteTag";
  /** Grants permission to delete TaxCategory */
  Permission["DeleteTaxCategory"] = "DeleteTaxCategory";
  /** Grants permission to delete TaxRate */
  Permission["DeleteTaxRate"] = "DeleteTaxRate";
  /** Grants permission to delete Zone */
  Permission["DeleteZone"] = "DeleteZone";
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Permission["Owner"] = "Owner";
  /** Public means any unauthenticated user may perform the operation */
  Permission["Public"] = "Public";
  /** Grants permission to read Administrator */
  Permission["ReadAdministrator"] = "ReadAdministrator";
  /** Grants permission to read Asset */
  Permission["ReadAsset"] = "ReadAsset";
  /** Grants permission to read Products, Facets, Assets, Collections */
  Permission["ReadCatalog"] = "ReadCatalog";
  /** Grants permission to read Channel */
  Permission["ReadChannel"] = "ReadChannel";
  /** Grants permission to read Collection */
  Permission["ReadCollection"] = "ReadCollection";
  /** Grants permission to read Country */
  Permission["ReadCountry"] = "ReadCountry";
  /** Grants permission to read Customer */
  Permission["ReadCustomer"] = "ReadCustomer";
  /** Grants permission to read CustomerGroup */
  Permission["ReadCustomerGroup"] = "ReadCustomerGroup";
  /** Grants permission to read Facet */
  Permission["ReadFacet"] = "ReadFacet";
  /** Grants permission to read Order */
  Permission["ReadOrder"] = "ReadOrder";
  /** Grants permission to read PaymentMethod */
  Permission["ReadPaymentMethod"] = "ReadPaymentMethod";
  /** Grants permission to read Product */
  Permission["ReadProduct"] = "ReadProduct";
  /** Grants permission to read Promotion */
  Permission["ReadPromotion"] = "ReadPromotion";
  /** Grants permission to read Seller */
  Permission["ReadSeller"] = "ReadSeller";
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  Permission["ReadSettings"] = "ReadSettings";
  /** Grants permission to read ShippingMethod */
  Permission["ReadShippingMethod"] = "ReadShippingMethod";
  /** Grants permission to read StockLocation */
  Permission["ReadStockLocation"] = "ReadStockLocation";
  /** Grants permission to read System */
  Permission["ReadSystem"] = "ReadSystem";
  /** Grants permission to read Tag */
  Permission["ReadTag"] = "ReadTag";
  /** Grants permission to read TaxCategory */
  Permission["ReadTaxCategory"] = "ReadTaxCategory";
  /** Grants permission to read TaxRate */
  Permission["ReadTaxRate"] = "ReadTaxRate";
  /** Grants permission to read Zone */
  Permission["ReadZone"] = "ReadZone";
  /** SuperAdmin has unrestricted access to all operations */
  Permission["SuperAdmin"] = "SuperAdmin";
  /** Grants permission to update Administrator */
  Permission["UpdateAdministrator"] = "UpdateAdministrator";
  /** Grants permission to update Asset */
  Permission["UpdateAsset"] = "UpdateAsset";
  /** Grants permission to update Products, Facets, Assets, Collections */
  Permission["UpdateCatalog"] = "UpdateCatalog";
  /** Grants permission to update Channel */
  Permission["UpdateChannel"] = "UpdateChannel";
  /** Grants permission to update Collection */
  Permission["UpdateCollection"] = "UpdateCollection";
  /** Grants permission to update Country */
  Permission["UpdateCountry"] = "UpdateCountry";
  /** Grants permission to update Customer */
  Permission["UpdateCustomer"] = "UpdateCustomer";
  /** Grants permission to update CustomerGroup */
  Permission["UpdateCustomerGroup"] = "UpdateCustomerGroup";
  /** Grants permission to update Facet */
  Permission["UpdateFacet"] = "UpdateFacet";
  /** Grants permission to update GlobalSettings */
  Permission["UpdateGlobalSettings"] = "UpdateGlobalSettings";
  /** Grants permission to update Order */
  Permission["UpdateOrder"] = "UpdateOrder";
  /** Grants permission to update PaymentMethod */
  Permission["UpdatePaymentMethod"] = "UpdatePaymentMethod";
  /** Grants permission to update Product */
  Permission["UpdateProduct"] = "UpdateProduct";
  /** Grants permission to update Promotion */
  Permission["UpdatePromotion"] = "UpdatePromotion";
  /** Grants permission to update Seller */
  Permission["UpdateSeller"] = "UpdateSeller";
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  Permission["UpdateSettings"] = "UpdateSettings";
  /** Grants permission to update ShippingMethod */
  Permission["UpdateShippingMethod"] = "UpdateShippingMethod";
  /** Grants permission to update StockLocation */
  Permission["UpdateStockLocation"] = "UpdateStockLocation";
  /** Grants permission to update System */
  Permission["UpdateSystem"] = "UpdateSystem";
  /** Grants permission to update Tag */
  Permission["UpdateTag"] = "UpdateTag";
  /** Grants permission to update TaxCategory */
  Permission["UpdateTaxCategory"] = "UpdateTaxCategory";
  /** Grants permission to update TaxRate */
  Permission["UpdateTaxRate"] = "UpdateTaxRate";
  /** Grants permission to update Zone */
  Permission["UpdateZone"] = "UpdateZone";
})(Permission || (Permission = {}));
var SortOrder;
(function (SortOrder) {
  SortOrder["ASC"] = "ASC";
  SortOrder["DESC"] = "DESC";
})(SortOrder || (SortOrder = {}));

/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map