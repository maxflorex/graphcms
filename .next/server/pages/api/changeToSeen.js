"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/changeToSeen";
exports.ids = ["pages/api/changeToSeen"];
exports.modules = {

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "(api)/./pages/api/changeToSeen.js":
/*!***********************************!*\
  !*** ./pages/api/changeToSeen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({ body  }, res)=>{\n    const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(process.send.ENDPOINT, {\n        headers: {\n            \"Authorization\": process.env.MY_TOKEN\n        }\n    });\n    await graphcms.request(`\r\n        mutation($slug: String!) {\r\n            updateVideo(where:\r\n              {slug: $slug,\r\n            data: {seen: false}\r\n            ) {\r\n                id,\r\n                title,\r\n                seen, \r\n            }\r\n        }\r\n        `, {\n        slug: body.slug\n    });\n    await graphcms.request(`mutation publishVideo($slug: String) {\r\n                publishVideo(where: {\r\n                    slug: $slug\r\n                }, to:PUBLISHED)\r\n                slug\r\n            }`, {\n        slug: body.slug\n    });\n    res.status(201).json({\n        slug: body.slug\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhbmdlVG9TZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4RDtBQUU5RCxpRUFBZSxPQUFPLEVBQUVFLElBQUksR0FBRSxFQUFFQyxHQUFHLEdBQUs7SUFDcEMsTUFBTUMsUUFBUSxHQUFHLElBQUlKLDBEQUFhLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLEVBQUU7UUFDdERDLE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRUgsT0FBTyxDQUFDSSxHQUFHLENBQUNDLFFBQVE7U0FDeEM7S0FDSixDQUFDO0lBRUYsTUFBTU4sUUFBUSxDQUFDTyxPQUFPLENBQ2xCLENBQUM7UUFZQ0MsSUFBSSxFQUFFVixJQUFJLENBQUNVLElBQUk7S0FBRSxDQUN0QjtJQUVELE1BQU1SLFFBQVEsQ0FBQ08sT0FBTyxDQUNsQixDQUFDO1FBTUtDLElBQUksRUFBRVYsSUFBSSxDQUFDVSxJQUFJO0tBQUUsQ0FDMUI7SUFFRFQsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDO1FBQU9GLElBQUksRUFBRVYsSUFBSSxDQUFDVSxJQUFJO0tBQUUsQ0FBQztDQUU1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBoLy4vcGFnZXMvYXBpL2NoYW5nZVRvU2Vlbi5qcz9mY2E4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBib2R5IH0sIHJlcykgPT4ge1xyXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudChwcm9jZXNzLnNlbmQuRU5EUE9JTlQsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBwcm9jZXNzLmVudi5NWV9UT0tFTlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcclxuICAgICAgICBgXHJcbiAgICAgICAgbXV0YXRpb24oJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgdXBkYXRlVmlkZW8od2hlcmU6XHJcbiAgICAgICAgICAgICAge3NsdWc6ICRzbHVnLFxyXG4gICAgICAgICAgICBkYXRhOiB7c2VlbjogZmFsc2V9XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIHNlZW4sIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgeyBzbHVnOiBib2R5LnNsdWcgfVxyXG4gICAgKVxyXG5cclxuICAgIGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXHJcbiAgICAgICAgYG11dGF0aW9uIHB1Ymxpc2hWaWRlbygkc2x1ZzogU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBwdWJsaXNoVmlkZW8od2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbHVnOiAkc2x1Z1xyXG4gICAgICAgICAgICAgICAgfSwgdG86UFVCTElTSEVEKVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB9YCxcclxuICAgICAgICAgICAgeyBzbHVnOiBib2R5LnNsdWcgfVxyXG4gICAgKVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc2x1ZzogYm9keS5zbHVnIH0pXHJcblxyXG59Il0sIm5hbWVzIjpbIkdyYXBoUUxDbGllbnQiLCJncmFwaFFMQ2xpZW50IiwiYm9keSIsInJlcyIsImdyYXBoY21zIiwicHJvY2VzcyIsInNlbmQiLCJFTkRQT0lOVCIsImhlYWRlcnMiLCJlbnYiLCJNWV9UT0tFTiIsInJlcXVlc3QiLCJzbHVnIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/changeToSeen.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/changeToSeen.js"));
module.exports = __webpack_exports__;

})();