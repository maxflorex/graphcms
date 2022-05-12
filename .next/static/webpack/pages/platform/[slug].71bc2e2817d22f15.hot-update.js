"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/platform/[slug]",{

/***/ "./pages/platform/[slug].js":
/*!**********************************!*\
  !*** ./pages/platform/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PlatformHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PlatformHero */ \"./components/PlatformHero.jsx\");\nvar _this = undefined;\n\n\nvar Platform = function(param) {\n    var videos1 = param.videos, PlatformId = param.PlatformId, pageSlug = param.pageSlug, logoUrl = param.logoUrl;\n    var _this1 = _this;\n    // FUNCTION - FILTER VIDEOS\n    var filterVideos = function(videos, id) {\n        return videos.filter(function(video) {\n            return video.platform.id.includes(id);\n        });\n    };\n    // FILTER ITEMS\n    var filtered = filterVideos(videos1, PlatformId);\n    console.log(logoUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlatformHero__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                data: filtered,\n                pageSlug: pageSlug,\n                logo: logoUrl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 px-8 mb-16 cursor-pointer\",\n                children: filtered.map(function(data, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/platform/\".concat(data.slug),\n                        className: \"py-8 bg-slate-800/60 rounded-lg justify-self-center w-full flex items-center justify-center hover:scale-105 duration-300 hover:bg-slate-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.logo.url,\n                            alt: data.title,\n                            className: \"w-40 h-32\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                            lineNumber: 97,\n                            columnNumber: 25\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this);\n};\n_c = Platform;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);\nvar _c;\n$RefreshReg$(_c, \"Platform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF0Zm9ybS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUN3RDtBQTJFeEQsSUFBTUMsUUFBUSxHQUFHLGdCQUErQztRQUE1Q0MsT0FBTSxTQUFOQSxNQUFNLEVBQUVDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsT0FBTyxTQUFQQSxPQUFPOztJQUVyRCwyQkFBMkI7SUFDM0IsSUFBTUMsWUFBWSxHQUFHLFNBQUNKLE1BQU0sRUFBRUssRUFBRSxFQUFLO1FBQUUsT0FBT0wsTUFBTSxDQUFDTSxNQUFNLENBQUMsU0FBQ0MsS0FBSzttQkFBS0EsS0FBSyxDQUFDQyxRQUFRLENBQUNILEVBQUUsQ0FBQ0ksUUFBUSxDQUFDSixFQUFFLENBQUM7U0FBQSxDQUFDO0tBQUU7SUFFeEcsZUFBZTtJQUNmLElBQU1LLFFBQVEsR0FBR04sWUFBWSxDQUFDSixPQUFNLEVBQUVDLFVBQVUsQ0FBQztJQUVqRFUsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU8sQ0FBQztJQUVwQixxQkFDSSw4REFBQ1UsS0FBRzs7MEJBQ0EsOERBQUNmLGdFQUFZO2dCQUFDZ0IsSUFBSSxFQUFFSixRQUFRO2dCQUFFUixRQUFRLEVBQUVBLFFBQVE7Z0JBQUVhLElBQUksRUFBRVosT0FBTzs7Ozs7cUJBQUk7MEJBQ25FLDhEQUFDVSxLQUFHO2dCQUFDRyxTQUFTLEVBQUMseUZBQXlGOzBCQUNuR04sUUFBUSxDQUFDTyxHQUFHLENBQUMsU0FBQ0gsSUFBSSxFQUFFSSxLQUFLO3lDQUN0Qiw4REFBQ0MsR0FBQzt3QkFFRUMsSUFBSSxFQUFFLFlBQVcsQ0FBWSxPQUFWTixJQUFJLENBQUNPLElBQUksQ0FBRTt3QkFDOUJMLFNBQVMsRUFBQyw2SUFBNkk7a0NBRXZKLDRFQUFDTSxLQUFHOzRCQUNBQyxHQUFHLEVBQUVULElBQUksQ0FBQ0MsSUFBSSxDQUFDUyxHQUFHOzRCQUNsQkMsR0FBRyxFQUFFWCxJQUFJLENBQUNZLEtBQUs7NEJBQ2ZWLFNBQVMsRUFBQyxXQUFXOzs7OztrQ0FDdkI7dUJBUkdFLEtBQUs7Ozs7OEJBU1Y7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0E7Ozs7OzthQUNKLENBQ1Q7Q0FDSjtBQTlCS25CLEtBQUFBLFFBQVE7O0FBZ0NkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BsYXRmb3JtL1tzbHVnXS5qcz84MmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IFBsYXRmb3JtSGVybyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BsYXRmb3JtSGVybydcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHBhZ2VDb250ZXh0KSA9PiB7XHJcblxyXG4gICAgLy8gQ09OTkVDVCBUTyBHUkFQSENNU1xyXG4gICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRU5EUE9JTlRcclxuXHJcbiAgICBjb25zdCBncmFwaFFMQ0xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5NWV9UT0tFTn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBHRVQgUEFHRSBTTFVHIE5BTUVcclxuICAgIGNvbnN0IHBhZ2VTbHVnID0gcGFnZUNvbnRleHQucXVlcnkuc2x1Z1xyXG5cclxuICAgIC8vIEdFVCBBTEwgVklERU9TXHJcbiAgICBjb25zdCBxdWVyeSA9IGdxbGBcclxuICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICAgIHZpZGVvcyB7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBzZWVuXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICBwbGF0Zm9ybSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1wNCB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAvLyBHRVQgQ1VSUkVOVCBQTEFURk9STVxyXG4gICAgY29uc3QgcXVlcnlQbGF0Zm9ybSA9IGdxbGBcclxuICAgICBxdWVyeSgkcGFnZVNsdWc6IFN0cmluZyEpIHtcclxuICAgIHBsYXRmb3JtKHdoZXJlOiB7XHJcbiAgICAgICAgc2x1ZzogJHBhZ2VTbHVnXHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgcGFnZVNsdWcsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDTGllbnQucmVxdWVzdChxdWVyeSlcclxuICAgIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zXHJcbiAgICBjb25zdCBkYXRhUGxhdCA9IGF3YWl0IGdyYXBoUUxDTGllbnQucmVxdWVzdChxdWVyeVBsYXRmb3JtLCB2YXJpYWJsZXMpXHJcbiAgICBjb25zdCB2aWRlb1BsYXQgPSBkYXRhUGxhdC5wbGF0Zm9ybVxyXG4gICAgY29uc3QgUGxhdGZvcm1JZCA9IHZpZGVvUGxhdC5pZFxyXG4gICAgY29uc3QgbG9nb1VybCA9IHZpZGVvUGxhdC5sb2dvLnVybFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmlkZW9zLFxyXG4gICAgICAgICAgICBQbGF0Zm9ybUlkLFxyXG4gICAgICAgICAgICBwYWdlU2x1ZyxcclxuICAgICAgICAgICAgbG9nb1VybFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUGxhdGZvcm0gPSAoeyB2aWRlb3MsIFBsYXRmb3JtSWQsIHBhZ2VTbHVnLCBsb2dvVXJsIH0pID0+IHtcclxuXHJcbiAgICAvLyBGVU5DVElPTiAtIEZJTFRFUiBWSURFT1NcclxuICAgIGNvbnN0IGZpbHRlclZpZGVvcyA9ICh2aWRlb3MsIGlkKSA9PiB7IHJldHVybiB2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8ucGxhdGZvcm0uaWQuaW5jbHVkZXMoaWQpKSB9XHJcblxyXG4gICAgLy8gRklMVEVSIElURU1TXHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGZpbHRlclZpZGVvcyh2aWRlb3MsIFBsYXRmb3JtSWQpXHJcblxyXG4gICAgY29uc29sZS5sb2cobG9nb1VybClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQbGF0Zm9ybUhlcm8gZGF0YT17ZmlsdGVyZWR9IHBhZ2VTbHVnPXtwYWdlU2x1Z30gbG9nbz17bG9nb1VybH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IGdhcC00IGxnOmdhcC04IHB4LTggbWItMTYgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wbGF0Zm9ybS8ke2RhdGEuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS04IGJnLXNsYXRlLTgwMC82MCByb3VuZGVkLWxnIGp1c3RpZnktc2VsZi1jZW50ZXIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi0zMDAgaG92ZXI6Ymctc2xhdGUtODAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5sb2dvLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgaC0zMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybSJdLCJuYW1lcyI6WyJQbGF0Zm9ybUhlcm8iLCJQbGF0Zm9ybSIsInZpZGVvcyIsIlBsYXRmb3JtSWQiLCJwYWdlU2x1ZyIsImxvZ29VcmwiLCJmaWx0ZXJWaWRlb3MiLCJpZCIsImZpbHRlciIsInZpZGVvIiwicGxhdGZvcm0iLCJpbmNsdWRlcyIsImZpbHRlcmVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImRhdGEiLCJsb2dvIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJhIiwiaHJlZiIsInNsdWciLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/platform/[slug].js\n");

/***/ })

});