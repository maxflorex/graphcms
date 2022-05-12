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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card */ \"./components/Card.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_PlatformHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PlatformHero */ \"./components/PlatformHero.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Platform = function(param) {\n    var videos1 = param.videos, PlatformId = param.PlatformId, pageSlug = param.pageSlug, logoUrl = param.logoUrl;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), watching = ref[0], setWatching = ref[1];\n    // FUNCTION - FILTER VIDEOS\n    var filterVideos = function(videos, id) {\n        return videos.filter(function(video) {\n            return video.platform.id.includes(id);\n        });\n    };\n    // FILTER ITEMS\n    var filtered = filterVideos(videos1, PlatformId);\n    console.log(filtered);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlatformHero__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: filtered,\n                pageSlug: pageSlug,\n                logo: logoUrl,\n                setWatching: setWatching,\n                watching: watching\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-4 xl-grid-cols-6 2xl:grid-cols-6 gap-4 xl:gap-8 rounded-full p-4 md:p-8\",\n                children: filtered.map(function(video) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/video/\".concat(video.slug),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            thumbnail: video.thumbnail,\n                            title: video.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                            lineNumber: 98,\n                            columnNumber: 25\n                        }, _this1)\n                    }, video.id, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, _this),\n            watching && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        width: \"100%\",\n                        controls: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            src: filtered.mp4.url,\n                            type: \"video/mp4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                            lineNumber: 105,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-semibold text-2xl px-3 py-2 cursor-pointer mt-16 hover:text-amber-500 duration-300\",\n                        onClick: function() {\n                            return setWatching(!watching);\n                        },\n                        children: \"Go back \\uD83C\\uDFC3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                        lineNumber: 107,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\platform\\\\[slug].js\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, _this);\n};\n_s(Platform, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = Platform;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);\nvar _c;\n$RefreshReg$(_c, \"Platform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF0Zm9ybS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ2dDO0FBQ1E7QUFDSTtBQUNBO0FBQ1k7O0FBMkV4RCxJQUFNSyxRQUFRLEdBQUcsZ0JBQStDO1FBQTVDQyxPQUFNLFNBQU5BLE1BQU0sRUFBRUMsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87OztJQUNyRCxJQUFnQ1QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWpGaEQsUUFpRm1CLEdBQWlCQSxHQUFZLEdBQTdCLEVBakZuQixXQWlGZ0MsR0FBSUEsR0FBWSxHQUFoQjtJQUU1QiwyQkFBMkI7SUFDM0IsSUFBTVksWUFBWSxHQUFHLFNBQUNOLE1BQU0sRUFBRU8sRUFBRSxFQUFLO1FBQUUsT0FBT1AsTUFBTSxDQUFDUSxNQUFNLENBQUMsU0FBQ0MsS0FBSzttQkFBS0EsS0FBSyxDQUFDQyxRQUFRLENBQUNILEVBQUUsQ0FBQ0ksUUFBUSxDQUFDSixFQUFFLENBQUM7U0FBQSxDQUFDO0tBQUU7SUFFeEcsZUFBZTtJQUNmLElBQU1LLFFBQVEsR0FBR04sWUFBWSxDQUFDTixPQUFNLEVBQUVDLFVBQVUsQ0FBQztJQUVqRFksT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztJQUVyQixxQkFDSSw4REFBQ0csS0FBRzs7MEJBQ0EsOERBQUNqQixnRUFBWTtnQkFBQ2tCLElBQUksRUFBRUosUUFBUTtnQkFBRVYsUUFBUSxFQUFFQSxRQUFRO2dCQUFFZSxJQUFJLEVBQUVkLE9BQU87Z0JBQUVFLFdBQVcsRUFBRUEsV0FBVztnQkFBRUQsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSTswQkFDakgsOERBQUNXLEtBQUc7Z0JBQUNHLFNBQVMsRUFBQyx1R0FBdUc7MEJBQ2pITixRQUFRLENBQUNPLEdBQUcsQ0FBQyxTQUFDVixLQUFLO3lDQUNoQiw4REFBQ1csR0FBQzt3QkFBZ0JDLElBQUksRUFBRSxTQUFRLENBQWEsT0FBWFosS0FBSyxDQUFDYSxJQUFJLENBQUU7a0NBQzFDLDRFQUFDM0Isd0RBQUk7NEJBQUM0QixTQUFTLEVBQUVkLEtBQUssQ0FBQ2MsU0FBUzs0QkFBRUMsS0FBSyxFQUFFZixLQUFLLENBQUNlLEtBQUs7Ozs7O2tDQUFJO3VCQURwRGYsS0FBSyxDQUFDRixFQUFFOzs7OzhCQUVaO2lCQUNQLENBQUM7Ozs7O3FCQUNBO1lBRUZILFFBQVEsa0JBQUs7O2tDQUNULDhEQUFDSyxPQUFLO3dCQUFDZ0IsS0FBSyxFQUFFLE1BQU07d0JBQUVDLFFBQVE7a0NBQzFCLDRFQUFDQyxRQUFNOzRCQUFDQyxHQUFHLEVBQUVoQixRQUFRLENBQUNpQixHQUFHLENBQUNDLEdBQUc7NEJBQUVDLElBQUksRUFBQyxXQUFXOzs7OztpQ0FBRzs7Ozs7NkJBQzlDO2tDQUNSLDhEQUFDaEIsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLHFHQUFxRzt3QkFDaEhjLE9BQU8sRUFBRTttQ0FBTTNCLFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUM7eUJBQUE7a0NBQ3hDLHNCQUFTOzs7Ozs2QkFBTTs7NEJBQ2pCOzBCQUdQLDhEQUFDUiwwREFBTTs7OztxQkFBRzs7Ozs7O2FBQ1IsQ0FDVDtDQUNKO0dBbkNLRyxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7O0FBcUNkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BsYXRmb3JtL1tzbHVnXS5qcz84MmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xyXG5pbXBvcnQgUGxhdGZvcm1IZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGxhdGZvcm1IZXJvJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAocGFnZUNvbnRleHQpID0+IHtcclxuXHJcbiAgICAvLyBDT05ORUNUIFRPIEdSQVBIQ01TXHJcbiAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVFxyXG5cclxuICAgIGNvbnN0IGdyYXBoUUxDTGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk1ZX1RPS0VOfWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEdFVCBQQUdFIFNMVUcgTkFNRVxyXG4gICAgY29uc3QgcGFnZVNsdWcgPSBwYWdlQ29udGV4dC5xdWVyeS5zbHVnXHJcblxyXG4gICAgLy8gR0VUIEFMTCBWSURFT1NcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdmlkZW9zIHtcclxuICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIHNlZW5cclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgIHBsYXRmb3JtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXA0IHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIC8vIEdFVCBDVVJSRU5UIFBMQVRGT1JNXHJcbiAgICBjb25zdCBxdWVyeVBsYXRmb3JtID0gZ3FsYFxyXG4gICAgIHF1ZXJ5KCRwYWdlU2x1ZzogU3RyaW5nISkge1xyXG4gICAgcGxhdGZvcm0od2hlcmU6IHtcclxuICAgICAgICBzbHVnOiAkcGFnZVNsdWdcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBsb2dvIHtcclxuICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYFxyXG5cclxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgICBwYWdlU2x1ZyxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KHF1ZXJ5KVxyXG4gICAgY29uc3QgdmlkZW9zID0gZGF0YS52aWRlb3NcclxuICAgIGNvbnN0IGRhdGFQbGF0ID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KHF1ZXJ5UGxhdGZvcm0sIHZhcmlhYmxlcylcclxuICAgIGNvbnN0IHZpZGVvUGxhdCA9IGRhdGFQbGF0LnBsYXRmb3JtXHJcbiAgICBjb25zdCBQbGF0Zm9ybUlkID0gdmlkZW9QbGF0LmlkXHJcbiAgICBjb25zdCBsb2dvVXJsID0gdmlkZW9QbGF0LmxvZ28udXJsXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2aWRlb3MsXHJcbiAgICAgICAgICAgIFBsYXRmb3JtSWQsXHJcbiAgICAgICAgICAgIHBhZ2VTbHVnLFxyXG4gICAgICAgICAgICBsb2dvVXJsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBQbGF0Zm9ybSA9ICh7IHZpZGVvcywgUGxhdGZvcm1JZCwgcGFnZVNsdWcsIGxvZ29VcmwgfSkgPT4ge1xyXG4gICAgY29uc3QgW3dhdGNoaW5nLCBzZXRXYXRjaGluZ10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICAvLyBGVU5DVElPTiAtIEZJTFRFUiBWSURFT1NcclxuICAgIGNvbnN0IGZpbHRlclZpZGVvcyA9ICh2aWRlb3MsIGlkKSA9PiB7IHJldHVybiB2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8ucGxhdGZvcm0uaWQuaW5jbHVkZXMoaWQpKSB9XHJcblxyXG4gICAgLy8gRklMVEVSIElURU1TXHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGZpbHRlclZpZGVvcyh2aWRlb3MsIFBsYXRmb3JtSWQpXHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UGxhdGZvcm1IZXJvIGRhdGE9e2ZpbHRlcmVkfSBwYWdlU2x1Zz17cGFnZVNsdWd9IGxvZ289e2xvZ29Vcmx9IHNldFdhdGNoaW5nPXtzZXRXYXRjaGluZ30gd2F0Y2hpbmc9e3dhdGNoaW5nfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgeGwtZ3JpZC1jb2xzLTYgMnhsOmdyaWQtY29scy02IGdhcC00IHhsOmdhcC04IHJvdW5kZWQtZnVsbCBwLTQgbWQ6cC04XCI+XHJcbiAgICAgICAgICAgICAgICB7ZmlsdGVyZWQubWFwKCh2aWRlbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGtleT17dmlkZW8uaWR9IGhyZWY9e2AvdmlkZW8vJHt2aWRlby5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aHVtYm5haWw9e3ZpZGVvLnRodW1ibmFpbH0gdGl0bGU9e3ZpZGVvLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2F0Y2hpbmcgJiYgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPXsnMTAwJSd9IGNvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17ZmlsdGVyZWQubXA0LnVybH0gdHlwZT0ndmlkZW8vbXA0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgcHgtMyBweS0yIGN1cnNvci1wb2ludGVyIG10LTE2IGhvdmVyOnRleHQtYW1iZXItNTAwIGR1cmF0aW9uLTMwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0V2F0Y2hpbmcoIXdhdGNoaW5nKX1cclxuICAgICAgICAgICAgICAgICAgICA+R28gYmFjayDwn4+DPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FyZCIsIkZvb3RlciIsIk5hdmJhciIsIlBsYXRmb3JtSGVybyIsIlBsYXRmb3JtIiwidmlkZW9zIiwiUGxhdGZvcm1JZCIsInBhZ2VTbHVnIiwibG9nb1VybCIsIndhdGNoaW5nIiwic2V0V2F0Y2hpbmciLCJmaWx0ZXJWaWRlb3MiLCJpZCIsImZpbHRlciIsInZpZGVvIiwicGxhdGZvcm0iLCJpbmNsdWRlcyIsImZpbHRlcmVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImRhdGEiLCJsb2dvIiwiY2xhc3NOYW1lIiwibWFwIiwiYSIsImhyZWYiLCJzbHVnIiwidGh1bWJuYWlsIiwidGl0bGUiLCJ3aWR0aCIsImNvbnRyb2xzIiwic291cmNlIiwic3JjIiwibXA0IiwidXJsIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/platform/[slug].js\n");

/***/ })

});