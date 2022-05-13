"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ \"./components/Section.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tags */ \"./components/Tags.jsx\");\n/* harmony import */ var _components_UnSeen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UnSeen */ \"./components/UnSeen.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Home = function(param) {\n    var videos1 = param.videos, account = param.account, platform = param.platform;\n    // GET RANDOM IMAGE\n    var randomVideo = function(videos) {\n        return videos[Math.floor(Math.random() * videos.length)];\n    };\n    // FILTER VIDEOS\n    var filterVideos = function(videos, genre) {\n        return videos.filter(function(video) {\n            return video.tags.includes(genre);\n        });\n    };\n    // SEEN VIDEOS\n    var unSeenVideos = function(videos) {\n        return videos.filter(function(video) {\n            return video.seen == false || video.seen == null;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full] overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[100vw] pb-16 blur-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: randomVideo(videos1).thumbnail.url,\n                            alt: randomVideo(videos1).title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tags__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        videos: videos1,\n                        platform: platform\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-2 overflow-hidden p-8 gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Family\",\n                        videos: filterVideos(videos1, \"family\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Adventure\",\n                        videos: filterVideos(videos1, \"adventure\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Heroic\",\n                        videos: filterVideos(videos1, \"hero\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Star Wars\",\n                        videos: filterVideos(videos1, \"starwars\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Disney\",\n                        videos: filterVideos(videos1, \"disney\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFFa0I7QUFDRjtBQUNKO0FBQ0k7QUEyRXpDLElBQU1LLElBQUksR0FBRyxnQkFBbUM7UUFBaENDLE9BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBR3ZDLG1CQUFtQjtJQUNuQixJQUFNQyxXQUFXLEdBQUcsU0FBQ0gsTUFBTSxFQUFLO1FBQzlCLE9BQU9BLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdOLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUM7S0FDekQ7SUFFRCxnQkFBZ0I7SUFDaEIsSUFBTUMsWUFBWSxHQUFHLFNBQUNSLE1BQU0sRUFBRVMsS0FBSyxFQUFLO1FBQ3RDLE9BQU9ULE1BQU0sQ0FBQ1UsTUFBTSxDQUFDLFNBQUNDLEtBQUs7bUJBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUNKLEtBQUssQ0FBQztTQUFBLENBQUM7S0FDNUQ7SUFFRCxjQUFjO0lBQ2QsSUFBTUssWUFBWSxHQUFHLFNBQUNkLE1BQU0sRUFBSztRQUMvQixPQUFPQSxNQUFNLENBQUNVLE1BQU0sQ0FBQ0MsU0FBQUEsS0FBSzttQkFBSUEsS0FBSyxDQUFDSSxJQUFJLElBQUksS0FBSyxJQUFJSixLQUFLLENBQUNJLElBQUksSUFBSSxJQUFJO1NBQUEsQ0FBQztLQUN6RTtJQUVELHFCQUNFOzswQkFFRSw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7a0NBQ3RDLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMseUJBQXlCO2tDQUN0Qyw0RUFBQ0MsS0FBRzs0QkFBQ0MsR0FBRyxFQUFFaEIsV0FBVyxDQUFDSCxPQUFNLENBQUMsQ0FBQ29CLFNBQVMsQ0FBQ0MsR0FBRzs0QkFBRUMsR0FBRyxFQUFFbkIsV0FBVyxDQUFDSCxPQUFNLENBQUMsQ0FBQ3VCLEtBQUs7Ozs7O2lDQUFJOzs7Ozs2QkFDM0U7a0NBQ04sOERBQUMxQix3REFBSTt3QkFBQ0csTUFBTSxFQUFFQSxPQUFNO3dCQUFFRSxRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3hDOzBCQUVOLDhEQUFDYyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkRBQTJEOztrQ0FDeEUsOERBQUN0QiwyREFBTzt3QkFBQ2MsS0FBSyxFQUFFLFFBQVE7d0JBQUVULE1BQU0sRUFBRVEsWUFBWSxDQUFDUixPQUFNLEVBQUUsUUFBUSxDQUFDOzs7Ozs2QkFBSTtrQ0FDcEUsOERBQUNMLDJEQUFPO3dCQUFDYyxLQUFLLEVBQUUsV0FBVzt3QkFBRVQsTUFBTSxFQUFFUSxZQUFZLENBQUNSLE9BQU0sRUFBRSxXQUFXLENBQUM7Ozs7OzZCQUFJO2tDQUMxRSw4REFBQ0wsMkRBQU87d0JBQUNjLEtBQUssRUFBRSxRQUFRO3dCQUFFVCxNQUFNLEVBQUVRLFlBQVksQ0FBQ1IsT0FBTSxFQUFFLE1BQU0sQ0FBQzs7Ozs7NkJBQUk7a0NBQ2xFLDhEQUFDTCwyREFBTzt3QkFBQ2MsS0FBSyxFQUFFLFdBQVc7d0JBQUVULE1BQU0sRUFBRVEsWUFBWSxDQUFDUixPQUFNLEVBQUUsVUFBVSxDQUFDOzs7Ozs2QkFBSTtrQ0FDekUsOERBQUNMLDJEQUFPO3dCQUFDYyxLQUFLLEVBQUUsUUFBUTt3QkFBRVQsTUFBTSxFQUFFUSxZQUFZLENBQUNSLE9BQU0sRUFBRSxRQUFRLENBQUM7Ozs7OzZCQUFJOzs7Ozs7cUJBQ2hFOztvQkFDTCxDQUNKO0NBQ0Y7QUFyQ0tELEtBQUFBLElBQUk7O0FBdUNWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBUYWdzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFncydcbmltcG9ydCBVblNlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9VblNlZW4nXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVFxuXG4gIGNvbnN0IGdyYXBoUUxDTGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5NWV9UT0tFTn1gXG4gICAgfVxuICB9KVxuXG5cbiAgY29uc3QgdmlkZW9zUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICB2aWRlb3Mge1xuICAgICAgY3JlYXRlZEF0LFxuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgc2VlbixcbiAgICAgIHNsdWcsXG4gICAgICB0YWdzLFxuICAgICAgdGh1bWJuYWlse1xuICAgICAgICB1cmxcbiAgICAgIH0sXG4gICAgICBtcDQge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuICBjb25zdCBhY2NvdW50UXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBhY2NvdW50KHdoZXJlOiB7XG4gICAgICBpZDogXCJjbDMxZnpvMDRnbW9nMGJpcTM4bXZtbnd4XCIgfSkge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGF2YXRhciB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG4gIGNvbnN0IHBsYXRmb3JtUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBwbGF0Zm9ybXMge1xuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIHNsdWcsXG4gICAgICBsb2dvIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cblxuICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KHZpZGVvc1F1ZXJ5KVxuICBjb25zdCB2aWRlb3MgPSBkYXRhLnZpZGVvc1xuICBjb25zdCBhY2NvdW50RGF0YSA9IGF3YWl0IGdyYXBoUUxDTGllbnQucmVxdWVzdChhY2NvdW50UXVlcnkpXG4gIGNvbnN0IGFjY291bnQgPSBhY2NvdW50RGF0YS5hY2NvdW50XG4gIGNvbnN0IHBsYXRmb3Jtc0RhdGEgPSBhd2FpdCBncmFwaFFMQ0xpZW50LnJlcXVlc3QocGxhdGZvcm1RdWVyeSlcbiAgY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybXNEYXRhLnBsYXRmb3Jtc1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpZGVvcyxcbiAgICAgIGFjY291bnQsXG4gICAgICBwbGF0Zm9ybVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBIb21lID0gKHsgdmlkZW9zLCBhY2NvdW50LCBwbGF0Zm9ybSB9KSA9PiB7XG5cblxuICAvLyBHRVQgUkFORE9NIElNQUdFXG4gIGNvbnN0IHJhbmRvbVZpZGVvID0gKHZpZGVvcykgPT4ge1xuICAgIHJldHVybiB2aWRlb3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmlkZW9zLmxlbmd0aCldXG4gIH1cblxuICAvLyBGSUxURVIgVklERU9TXG4gIGNvbnN0IGZpbHRlclZpZGVvcyA9ICh2aWRlb3MsIGdlbnJlKSA9PiB7XG4gICAgcmV0dXJuIHZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PiB2aWRlby50YWdzLmluY2x1ZGVzKGdlbnJlKSlcbiAgfVxuXG4gIC8vIFNFRU4gVklERU9TXG4gIGNvbnN0IHVuU2VlblZpZGVvcyA9ICh2aWRlb3MpID0+IHtcbiAgICByZXR1cm4gdmlkZW9zLmZpbHRlcih2aWRlbyA9PiB2aWRlby5zZWVuID09IGZhbHNlIHx8IHZpZGVvLnNlZW4gPT0gbnVsbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8TmF2YmFyIGFjY291bnQ9e2FjY291bnR9IC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbF0gb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMDB2d10gcGItMTYgYmx1ci1zbVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtyYW5kb21WaWRlbyh2aWRlb3MpLnRodW1ibmFpbC51cmx9IGFsdD17cmFuZG9tVmlkZW8odmlkZW9zKS50aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWdzIHZpZGVvcz17dmlkZW9zfSBwbGF0Zm9ybT17cGxhdGZvcm19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8VW5TZWVuIGdlbnJlPXsnUmVjb21tZW5kZWQgZm9yIHlvdSd9IHZpZGVvcz17dW5TZWVuVmlkZW9zKHZpZGVvcyl9IC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIG92ZXJmbG93LWhpZGRlbiBwLTggZ2FwLThcIj5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydGYW1pbHknfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdmYW1pbHknKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydBZHZlbnR1cmUnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdhZHZlbnR1cmUnKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydIZXJvaWMnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdoZXJvJyl9IC8+XG4gICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnU3RhciBXYXJzJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnc3RhcndhcnMnKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydEaXNuZXknfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdkaXNuZXknKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlY3Rpb24iLCJOYXZiYXIiLCJUYWdzIiwiVW5TZWVuIiwiSG9tZSIsInZpZGVvcyIsImFjY291bnQiLCJwbGF0Zm9ybSIsInJhbmRvbVZpZGVvIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZmlsdGVyVmlkZW9zIiwiZ2VucmUiLCJmaWx0ZXIiLCJ2aWRlbyIsInRhZ3MiLCJpbmNsdWRlcyIsInVuU2VlblZpZGVvcyIsInNlZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJhbHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});