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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ \"./components/Section.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tags */ \"./components/Tags.jsx\");\n/* harmony import */ var _components_UnSeen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UnSeen */ \"./components/UnSeen.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Home = function(param) {\n    var videos1 = param.videos, account = param.account, platform = param.platform;\n    // GET RANDOM IMAGE\n    var randomVideo = function(videos) {\n        return videos[Math.floor(Math.random() * videos.length)];\n    };\n    // FILTER VIDEOS\n    var filterVideos = function(videos, genre) {\n        return videos.filter(function(video) {\n            return video.tags.includes(genre);\n        });\n    };\n    // SEEN VIDEOS\n    var unSeenVideos = function(videos) {\n        return videos.filter(function(video) {\n            return video.seen == false || video.seen == null;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                account: account\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main-video\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: randomVideo(videos1).thumbnail.url,\n                            alt: randomVideo(videos1).title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tags__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        videos: videos1,\n                        platform: platform\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFFa0I7QUFDRjtBQUNKO0FBQ0k7QUEyRXpDLElBQU1LLElBQUksR0FBRyxnQkFBbUM7UUFBaENDLE9BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBR3ZDLG1CQUFtQjtJQUNuQixJQUFNQyxXQUFXLEdBQUcsU0FBQ0gsTUFBTSxFQUFLO1FBQzlCLE9BQU9BLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdOLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUM7S0FDekQ7SUFFRCxnQkFBZ0I7SUFDaEIsSUFBTUMsWUFBWSxHQUFHLFNBQUNSLE1BQU0sRUFBRVMsS0FBSyxFQUFLO1FBQ3RDLE9BQU9ULE1BQU0sQ0FBQ1UsTUFBTSxDQUFDLFNBQUNDLEtBQUs7bUJBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUNKLEtBQUssQ0FBQztTQUFBLENBQUM7S0FDNUQ7SUFFRCxjQUFjO0lBQ2QsSUFBTUssWUFBWSxHQUFHLFNBQUNkLE1BQU0sRUFBSztRQUMvQixPQUFPQSxNQUFNLENBQUNVLE1BQU0sQ0FBQ0MsU0FBQUEsS0FBSzttQkFBSUEsS0FBSyxDQUFDSSxJQUFJLElBQUksS0FBSyxJQUFJSixLQUFLLENBQUNJLElBQUksSUFBSSxJQUFJO1NBQUEsQ0FBQztLQUN6RTtJQUVELHFCQUNFOzswQkFDRSw4REFBQ25CLDBEQUFNO2dCQUFDSyxPQUFPLEVBQUVBLE9BQU87Ozs7O3FCQUFJOzBCQUM1Qiw4REFBQ2UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7O2tDQUNsQiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFlBQVk7a0NBQ3pCLDRFQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVoQixXQUFXLENBQUNILE9BQU0sQ0FBQyxDQUFDb0IsU0FBUyxDQUFDQyxHQUFHOzRCQUFFQyxHQUFHLEVBQUVuQixXQUFXLENBQUNILE9BQU0sQ0FBQyxDQUFDdUIsS0FBSzs7Ozs7aUNBQUk7Ozs7OzZCQUMzRTtrQ0FDTiw4REFBQzFCLHdEQUFJO3dCQUFDRyxNQUFNLEVBQUVBLE9BQU07d0JBQUVFLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7Ozs7OztxQkFDeEM7O29CQUNMLENBQ0o7Q0FDRjtBQTdCS0gsS0FBQUEsSUFBSTs7QUErQlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncWwsIEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24nXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IFRhZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9UYWdzJ1xuaW1wb3J0IFVuU2VlbiBmcm9tICcuLi9jb21wb25lbnRzL1VuU2VlbidcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkVORFBPSU5UXG5cbiAgY29uc3QgZ3JhcGhRTENMaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHVybCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk1ZX1RPS0VOfWBcbiAgICB9XG4gIH0pXG5cblxuICBjb25zdCB2aWRlb3NRdWVyeSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHZpZGVvcyB7XG4gICAgICBjcmVhdGVkQXQsXG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzZWVuLFxuICAgICAgc2x1ZyxcbiAgICAgIHRhZ3MsXG4gICAgICB0aHVtYm5haWx7XG4gICAgICAgIHVybFxuICAgICAgfSxcbiAgICAgIG1wNCB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG4gIGNvbnN0IGFjY291bnRRdWVyeSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGFjY291bnQod2hlcmU6IHtcbiAgICAgIGlkOiBcImNsMzFmem8wNGdtb2cwYmlxMzhtdm1ud3hcIiB9KSB7XG4gICAgICB1c2VybmFtZVxuICAgICAgYXZhdGFyIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbiAgY29uc3QgcGxhdGZvcm1RdWVyeSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHBsYXRmb3JtcyB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgc2x1ZyxcbiAgICAgIGxvZ28ge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaFFMQ0xpZW50LnJlcXVlc3QodmlkZW9zUXVlcnkpXG4gIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zXG4gIGNvbnN0IGFjY291bnREYXRhID0gYXdhaXQgZ3JhcGhRTENMaWVudC5yZXF1ZXN0KGFjY291bnRRdWVyeSlcbiAgY29uc3QgYWNjb3VudCA9IGFjY291bnREYXRhLmFjY291bnRcbiAgY29uc3QgcGxhdGZvcm1zRGF0YSA9IGF3YWl0IGdyYXBoUUxDTGllbnQucmVxdWVzdChwbGF0Zm9ybVF1ZXJ5KVxuICBjb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3Jtc0RhdGEucGxhdGZvcm1zXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdmlkZW9zLFxuICAgICAgYWNjb3VudCxcbiAgICAgIHBsYXRmb3JtXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEhvbWUgPSAoeyB2aWRlb3MsIGFjY291bnQsIHBsYXRmb3JtIH0pID0+IHtcblxuXG4gIC8vIEdFVCBSQU5ET00gSU1BR0VcbiAgY29uc3QgcmFuZG9tVmlkZW8gPSAodmlkZW9zKSA9PiB7XG4gICAgcmV0dXJuIHZpZGVvc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2aWRlb3MubGVuZ3RoKV1cbiAgfVxuXG4gIC8vIEZJTFRFUiBWSURFT1NcbiAgY29uc3QgZmlsdGVyVmlkZW9zID0gKHZpZGVvcywgZ2VucmUpID0+IHtcbiAgICByZXR1cm4gdmlkZW9zLmZpbHRlcigodmlkZW8pID0+IHZpZGVvLnRhZ3MuaW5jbHVkZXMoZ2VucmUpKVxuICB9XG5cbiAgLy8gU0VFTiBWSURFT1NcbiAgY29uc3QgdW5TZWVuVmlkZW9zID0gKHZpZGVvcykgPT4ge1xuICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKHZpZGVvID0+IHZpZGVvLnNlZW4gPT0gZmFsc2UgfHwgdmlkZW8uc2VlbiA9PSBudWxsKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi12aWRlb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtyYW5kb21WaWRlbyh2aWRlb3MpLnRodW1ibmFpbC51cmx9IGFsdD17cmFuZG9tVmlkZW8odmlkZW9zKS50aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWdzIHZpZGVvcz17dmlkZW9zfSBwbGF0Zm9ybT17cGxhdGZvcm19IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTZWN0aW9uIiwiTmF2YmFyIiwiVGFncyIsIlVuU2VlbiIsIkhvbWUiLCJ2aWRlb3MiLCJhY2NvdW50IiwicGxhdGZvcm0iLCJyYW5kb21WaWRlbyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImZpbHRlclZpZGVvcyIsImdlbnJlIiwiZmlsdGVyIiwidmlkZW8iLCJ0YWdzIiwiaW5jbHVkZXMiLCJ1blNlZW5WaWRlb3MiLCJzZWVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwidXJsIiwiYWx0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});