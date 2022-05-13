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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ \"./components/Section.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tags */ \"./components/Tags.jsx\");\n/* harmony import */ var _components_UnSeen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UnSeen */ \"./components/UnSeen.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Home = function(param) {\n    var videos1 = param.videos, account = param.account, platform = param.platform;\n    // GET RANDOM IMAGE\n    var randomVideo = function(videos) {\n        return videos[Math.floor(Math.random() * videos.length)];\n    };\n    // FILTER VIDEOS\n    var filterVideos = function(videos, genre) {\n        return videos.filter(function(video) {\n            return video.tags.includes(genre);\n        });\n    };\n    // SEEN VIDEOS\n    var unSeenVideos = function(videos) {\n        return videos.filter(function(video) {\n            return video.seen == false || video.seen == null;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                account: account\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-video\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: randomVideo(videos1).thumbnail.url,\n                            alt: randomVideo(videos1).title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tags__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        videos: videos1,\n                        platform: platform\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UnSeen__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                genre: \"Recommended for you\",\n                videos: unSeenVideos(videos1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Family\",\n                        videos: filterVideos(videos1, \"Family\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Thriller\",\n                        videos: filterVideos(videos1, \"Thriller\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Clasic\",\n                        videos: filterVideos(videos1, \"Classic\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Star Wars\",\n                        videos: filterVideos(videos1, \"Star Wars\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Disney\",\n                        videos: filterVideos(videos1, \"Disney\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"National Geographic\",\n                        videos: filterVideos(videos1, \"National Geographic\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Marvel\",\n                        videos: filterVideos(videos1, \"Marvel\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        genre: \"Pixar\",\n                        videos: filterVideos(videos1, \"Pixar\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixPQUFNLEVBQUUscUJBQXFCLENBQUM7Ozs7OzZCQUFJO2tDQUM5Riw4REFBQ0wsMkRBQU87d0JBQUNjLEtBQUssRUFBRSxRQUFRO3dCQUFFVCxNQUFNLEVBQUVRLFlBQVksQ0FBQ1IsT0FBTSxFQUFFLFFBQVEsQ0FBQzs7Ozs7NkJBQUk7a0NBQ3BFLDhEQUFDTCwyREFBTzt3QkFBQ2MsS0FBSyxFQUFFLE9BQU87d0JBQUVULE1BQU0sRUFBRVEsWUFBWSxDQUFDUixPQUFNLEVBQUUsT0FBTyxDQUFDOzs7Ozs2QkFBSTs7Ozs7O3FCQUM5RDs7b0JBQ0wsQ0FDSjtDQUNGO0FBeENLRCxLQUFBQSxJQUFJOztBQTBDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgVGFncyBmcm9tICcuLi9jb21wb25lbnRzL1RhZ3MnXG5pbXBvcnQgVW5TZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvVW5TZWVuJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRU5EUE9JTlRcblxuICBjb25zdCBncmFwaFFMQ0xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTVlfVE9LRU59YFxuICAgIH1cbiAgfSlcblxuXG4gIGNvbnN0IHZpZGVvc1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdmlkZW9zIHtcbiAgICAgIGNyZWF0ZWRBdCxcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHNlZW4sXG4gICAgICBzbHVnLFxuICAgICAgdGFncyxcbiAgICAgIHRodW1ibmFpbHtcbiAgICAgICAgdXJsXG4gICAgICB9LFxuICAgICAgbXA0IHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbiAgY29uc3QgYWNjb3VudFF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgYWNjb3VudCh3aGVyZToge1xuICAgICAgaWQ6IFwiY2wzMWZ6bzA0Z21vZzBiaXEzOG12bW53eFwiIH0pIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgICBhdmF0YXIge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuICBjb25zdCBwbGF0Zm9ybVF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgcGxhdGZvcm1zIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBzbHVnLFxuICAgICAgbG9nbyB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDTGllbnQucmVxdWVzdCh2aWRlb3NRdWVyeSlcbiAgY29uc3QgdmlkZW9zID0gZGF0YS52aWRlb3NcbiAgY29uc3QgYWNjb3VudERhdGEgPSBhd2FpdCBncmFwaFFMQ0xpZW50LnJlcXVlc3QoYWNjb3VudFF1ZXJ5KVxuICBjb25zdCBhY2NvdW50ID0gYWNjb3VudERhdGEuYWNjb3VudFxuICBjb25zdCBwbGF0Zm9ybXNEYXRhID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KHBsYXRmb3JtUXVlcnkpXG4gIGNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1zRGF0YS5wbGF0Zm9ybXNcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aWRlb3MsXG4gICAgICBhY2NvdW50LFxuICAgICAgcGxhdGZvcm1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgSG9tZSA9ICh7IHZpZGVvcywgYWNjb3VudCwgcGxhdGZvcm0gfSkgPT4ge1xuXG5cbiAgLy8gR0VUIFJBTkRPTSBJTUFHRVxuICBjb25zdCByYW5kb21WaWRlbyA9ICh2aWRlb3MpID0+IHtcbiAgICByZXR1cm4gdmlkZW9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZpZGVvcy5sZW5ndGgpXVxuICB9XG5cbiAgLy8gRklMVEVSIFZJREVPU1xuICBjb25zdCBmaWx0ZXJWaWRlb3MgPSAodmlkZW9zLCBnZW5yZSkgPT4ge1xuICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8udGFncy5pbmNsdWRlcyhnZW5yZSkpXG4gIH1cblxuICAvLyBTRUVOIFZJREVPU1xuICBjb25zdCB1blNlZW5WaWRlb3MgPSAodmlkZW9zKSA9PiB7XG4gICAgcmV0dXJuIHZpZGVvcy5maWx0ZXIodmlkZW8gPT4gdmlkZW8uc2VlbiA9PSBmYWxzZSB8fCB2aWRlby5zZWVuID09IG51bGwpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIGFjY291bnQ9e2FjY291bnR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZGVvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3JhbmRvbVZpZGVvKHZpZGVvcykudGh1bWJuYWlsLnVybH0gYWx0PXtyYW5kb21WaWRlbyh2aWRlb3MpLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRhZ3MgdmlkZW9zPXt2aWRlb3N9IHBsYXRmb3JtPXtwbGF0Zm9ybX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFVuU2VlbiBnZW5yZT17J1JlY29tbWVuZGVkIGZvciB5b3UnfSB2aWRlb3M9e3VuU2VlblZpZGVvcyh2aWRlb3MpfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yXCI+XG4gICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnRmFtaWx5J30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnRmFtaWx5Jyl9IC8+XG4gICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnVGhyaWxsZXInfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdUaHJpbGxlcicpfSAvPlxuICAgICAgICA8U2VjdGlvbiBnZW5yZT17J0NsYXNpYyd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ0NsYXNzaWMnKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydTdGFyIFdhcnMnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdTdGFyIFdhcnMnKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydEaXNuZXknfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdEaXNuZXknKX0gLz5cbiAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydOYXRpb25hbCBHZW9ncmFwaGljJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnTmF0aW9uYWwgR2VvZ3JhcGhpYycpfSAvPlxuICAgICAgICA8U2VjdGlvbiBnZW5yZT17J01hcnZlbCd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ01hcnZlbCcpfSAvPlxuICAgICAgICA8U2VjdGlvbiBnZW5yZT17J1BpeGFyJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnUGl4YXInKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlY3Rpb24iLCJOYXZiYXIiLCJUYWdzIiwiVW5TZWVuIiwiSG9tZSIsInZpZGVvcyIsImFjY291bnQiLCJwbGF0Zm9ybSIsInJhbmRvbVZpZGVvIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZmlsdGVyVmlkZW9zIiwiZ2VucmUiLCJmaWx0ZXIiLCJ2aWRlbyIsInRhZ3MiLCJpbmNsdWRlcyIsInVuU2VlblZpZGVvcyIsInNlZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJhbHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});