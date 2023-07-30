"use strict";
(self["webpackChunkreference_storefront"] = self["webpackChunkreference_storefront"] || []).push([["common"],{

/***/ 61502:
/*!*****************************************************************!*\
  !*** ./src/app/account/components/register/register.graphql.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGISTER": () => (/* binding */ REGISTER)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 36238);
/* harmony import */ var _common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/graphql/fragments.graphql */ 43976);


const REGISTER = apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
    mutation Register($input: RegisterCustomerInput!) {
        registerCustomerAccount(input: $input) {
            ... on Success {
                success
            }
            ...ErrorResult
        }
    }
    ${_common_graphql_fragments_graphql__WEBPACK_IMPORTED_MODULE_0__.ERROR_RESULT_FRAGMENT}
`;

/***/ })

}]);
//# sourceMappingURL=common.js.map