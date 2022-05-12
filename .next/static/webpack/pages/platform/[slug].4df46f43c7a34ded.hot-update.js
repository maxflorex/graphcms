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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PlatformHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PlatformHero */ \"./components/PlatformHero.jsx\");\nvar _this = undefined;\n\n\nvar Platform = function(param) {\n    var videos1 = param.videos, PlatformId = param.PlatformId, pageSlug = param.pageSlug, logoUrl = param.logoUrl;\n    var _this1 = _this;\n    // FUNCTION - FILTER VIDEOS\n    var filterVideos = function(videos, id) {\n        return videos.filter(function(video) {\n            return video.platform.id.includes(id);\n        });\n    };\n    // FILTER ITEMS\n    var filtered = filterVideos(videos1, PlatformId);\n    console.log(logoUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlatformHero__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                data: filtered,\n                pageSlug: pageSlug,\n                logo: logoUrl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 px-8 mb-16 cursor-pointer\",\n                children: filtered.map(function(data, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/platform/\".concat(data.slug),\n                        className: \"py-8 bg-slate-800/60 rounded-lg justify-self-center w-full flex items-center justify-center hover:scale-105 duration-300 hover:bg-slate-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                            lineNumber: 97,\n                            columnNumber: 46\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this);\n};\n_c = Platform;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);\nvar _c;\n$RefreshReg$(_c, \"Platform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF0Zm9ybS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUN3RDtBQTJFeEQsSUFBTUMsUUFBUSxHQUFHLGdCQUErQztRQUE1Q0MsT0FBTSxTQUFOQSxNQUFNLEVBQUVDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsT0FBTyxTQUFQQSxPQUFPOztJQUVyRCwyQkFBMkI7SUFDM0IsSUFBTUMsWUFBWSxHQUFHLFNBQUNKLE1BQU0sRUFBRUssRUFBRSxFQUFLO1FBQUUsT0FBT0wsTUFBTSxDQUFDTSxNQUFNLENBQUMsU0FBQ0MsS0FBSzttQkFBS0EsS0FBSyxDQUFDQyxRQUFRLENBQUNILEVBQUUsQ0FBQ0ksUUFBUSxDQUFDSixFQUFFLENBQUM7U0FBQSxDQUFDO0tBQUU7SUFFeEcsZUFBZTtJQUNmLElBQU1LLFFBQVEsR0FBR04sWUFBWSxDQUFDSixPQUFNLEVBQUVDLFVBQVUsQ0FBQztJQUVqRFUsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU8sQ0FBQztJQUVwQixxQkFDSSw4REFBQ1UsS0FBRzs7MEJBQ0EsOERBQUNmLGdFQUFZO2dCQUFDZ0IsSUFBSSxFQUFFSixRQUFRO2dCQUFFUixRQUFRLEVBQUVBLFFBQVE7Z0JBQUVhLElBQUksRUFBRVosT0FBTzs7Ozs7cUJBQUk7MEJBQ25FLDhEQUFDVSxLQUFHO2dCQUFDRyxTQUFTLEVBQUMseUZBQXlGOzBCQUNuR04sUUFBUSxDQUFDTyxHQUFHLENBQUMsU0FBQ0gsSUFBSSxFQUFFSSxLQUFLO3lDQUN0Qiw4REFBQ0MsR0FBQzt3QkFFRUMsSUFBSSxFQUFFLFlBQVcsQ0FBWSxPQUFWTixJQUFJLENBQUNPLElBQUksQ0FBRTt3QkFDOUJMLFNBQVMsRUFBQyw2SUFBNkk7a0NBRWxJLDRFQUFDTSxJQUFFO3NDQUFFUixJQUFJLENBQUNTLEtBQUs7Ozs7O2tDQUFNO3VCQUpyQ0wsS0FBSzs7Ozs4QkFLVjtpQkFDUCxDQUFDOzs7OztxQkFDQTs7Ozs7O2FBQ0osQ0FDVDtDQUNKO0FBMUJLbkIsS0FBQUEsUUFBUTs7QUE0QmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxhdGZvcm0vW3NsdWddLmpzPzgyZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xyXG5pbXBvcnQgUGxhdGZvcm1IZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGxhdGZvcm1IZXJvJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAocGFnZUNvbnRleHQpID0+IHtcclxuXHJcbiAgICAvLyBDT05ORUNUIFRPIEdSQVBIQ01TXHJcbiAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVFxyXG5cclxuICAgIGNvbnN0IGdyYXBoUUxDTGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk1ZX1RPS0VOfWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEdFVCBQQUdFIFNMVUcgTkFNRVxyXG4gICAgY29uc3QgcGFnZVNsdWcgPSBwYWdlQ29udGV4dC5xdWVyeS5zbHVnXHJcblxyXG4gICAgLy8gR0VUIEFMTCBWSURFT1NcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdmlkZW9zIHtcclxuICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIHNlZW5cclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgIHBsYXRmb3JtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXA0IHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIC8vIEdFVCBDVVJSRU5UIFBMQVRGT1JNXHJcbiAgICBjb25zdCBxdWVyeVBsYXRmb3JtID0gZ3FsYFxyXG4gICAgIHF1ZXJ5KCRwYWdlU2x1ZzogU3RyaW5nISkge1xyXG4gICAgcGxhdGZvcm0od2hlcmU6IHtcclxuICAgICAgICBzbHVnOiAkcGFnZVNsdWdcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYFxyXG5cclxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgICBwYWdlU2x1ZyxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KHF1ZXJ5KVxyXG4gICAgY29uc3QgdmlkZW9zID0gZGF0YS52aWRlb3NcclxuICAgIGNvbnN0IGRhdGFQbGF0ID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KHF1ZXJ5UGxhdGZvcm0sIHZhcmlhYmxlcylcclxuICAgIGNvbnN0IHZpZGVvUGxhdCA9IGRhdGFQbGF0LnBsYXRmb3JtXHJcbiAgICBjb25zdCBQbGF0Zm9ybUlkID0gdmlkZW9QbGF0LmlkXHJcbiAgICBjb25zdCBsb2dvVXJsID0gdmlkZW9QbGF0LmxvZ28udXJsXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2aWRlb3MsXHJcbiAgICAgICAgICAgIFBsYXRmb3JtSWQsXHJcbiAgICAgICAgICAgIHBhZ2VTbHVnLFxyXG4gICAgICAgICAgICBsb2dvVXJsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBQbGF0Zm9ybSA9ICh7IHZpZGVvcywgUGxhdGZvcm1JZCwgcGFnZVNsdWcsIGxvZ29VcmwgfSkgPT4ge1xyXG5cclxuICAgIC8vIEZVTkNUSU9OIC0gRklMVEVSIFZJREVPU1xyXG4gICAgY29uc3QgZmlsdGVyVmlkZW9zID0gKHZpZGVvcywgaWQpID0+IHsgcmV0dXJuIHZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PiB2aWRlby5wbGF0Zm9ybS5pZC5pbmNsdWRlcyhpZCkpIH1cclxuXHJcbiAgICAvLyBGSUxURVIgSVRFTVNcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyVmlkZW9zKHZpZGVvcywgUGxhdGZvcm1JZClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsb2dvVXJsKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBsYXRmb3JtSGVybyBkYXRhPXtmaWx0ZXJlZH0gcGFnZVNsdWc9e3BhZ2VTbHVnfSBsb2dvPXtsb2dvVXJsfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTQgbGc6Z2FwLTggcHgtOCBtYi0xNiBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3BsYXRmb3JtLyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTggYmctc2xhdGUtODAwLzYwIHJvdW5kZWQtbGcganVzdGlmeS1zZWxmLWNlbnRlciB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1zbGF0ZS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybSJdLCJuYW1lcyI6WyJQbGF0Zm9ybUhlcm8iLCJQbGF0Zm9ybSIsInZpZGVvcyIsIlBsYXRmb3JtSWQiLCJwYWdlU2x1ZyIsImxvZ29VcmwiLCJmaWx0ZXJWaWRlb3MiLCJpZCIsImZpbHRlciIsInZpZGVvIiwicGxhdGZvcm0iLCJpbmNsdWRlcyIsImZpbHRlcmVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImRhdGEiLCJsb2dvIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJhIiwiaHJlZiIsInNsdWciLCJoMSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/platform/[slug].js\n");

/***/ })

});