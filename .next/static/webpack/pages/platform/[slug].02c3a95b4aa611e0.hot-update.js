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

/***/ "./components/PlatformHero.jsx":
/*!*************************************!*\
  !*** ./components/PlatformHero.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar PlatformHero = function(param) {\n    var data = param.data;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), random = ref1[0], setRandom = ref1[1];\n    // GET RANDOM IMAGE    \n    var length = Math.random() * data.length;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var rounded = Math.floor(length);\n        setRandom(data[rounded]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full w-full relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (ref = random.thumbnail) === null || ref === void 0 ? void 0 : ref.url,\n                    alt: random.title,\n                    className: \"w-full h-[50vh] object-cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\PlatformHero.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[100vw] h-full absolute bg-slate-800/60 backdrop-blur-sm top-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl\",\n                        children: random.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\PlatformHero.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\PlatformHero.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\PlatformHero.jsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(PlatformHero, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = PlatformHero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlatformHero);\nvar _c;\n$RefreshReg$(_c, \"PlatformHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXRmb3JtSGVyby5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBbUQ7O0FBRW5ELElBQU1HLFlBQVksR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7UUFlSEMsR0FBZ0I7O0lBZHJDLElBQTRCSCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBSDVDLE1BR2lCLEdBQWVBLElBQVksR0FBM0IsRUFIakIsU0FHNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUV4Qix1QkFBdUI7SUFDdkIsSUFBTUssTUFBTSxHQUFHQyxJQUFJLENBQUNILE1BQU0sRUFBRSxHQUFHRCxJQUFJLENBQUNHLE1BQU07SUFFMUNOLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1RLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNILE1BQU0sQ0FBQztRQUNsQ0QsU0FBUyxDQUFDRixJQUFJLENBQUNLLE9BQU8sQ0FBQyxDQUFDO0tBQzNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSTtrQkFDSSw0RUFBQ0UsS0FBRztZQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzs4QkFDbkMsOERBQUNDLEtBQUc7b0JBQ0FDLEdBQUcsRUFBRVQsQ0FBQUEsR0FBZ0IsR0FBaEJBLE1BQU0sQ0FBQ1UsU0FBUyxjQUFoQlYsR0FBZ0IsV0FBSyxHQUFyQkEsS0FBQUEsQ0FBcUIsR0FBckJBLEdBQWdCLENBQUVXLEdBQUc7b0JBQzFCQyxHQUFHLEVBQUVaLE1BQU0sQ0FBQ2EsS0FBSztvQkFDakJOLFNBQVMsRUFBQyw4QkFBOEI7Ozs7O3lCQUMxQzs4QkFDRiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtFQUFrRTs4QkFDN0UsNEVBQUNPLElBQUU7d0JBQUNQLFNBQVMsRUFBQyxnRkFBZ0Y7a0NBQ3pGUCxNQUFNLENBQUNhLEtBQUs7Ozs7OzZCQUNaOzs7Ozt5QkFDSDs7Ozs7O2lCQUNKO3FCQUNQLENBQ0w7Q0FDTDtHQTNCS2YsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBNkJsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxhdGZvcm1IZXJvLmpzeD9iODczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGxhdGZvcm1IZXJvID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBbcmFuZG9tLCBzZXRSYW5kb21dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vIEdFVCBSQU5ET00gSU1BR0UgICAgXHJcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGg7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByb3VuZGVkID0gTWF0aC5mbG9vcihsZW5ndGgpO1xyXG4gICAgICAgIHNldFJhbmRvbShkYXRhW3JvdW5kZWRdKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyYW5kb20udGh1bWJuYWlsPy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtyYW5kb20udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzUwdmhdIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMDB2d10gaC1mdWxsIGFic29sdXRlIGJnLXNsYXRlLTgwMC82MCBiYWNrZHJvcC1ibHVyLXNtIHRvcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmFuZG9tLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm1IZXJvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBsYXRmb3JtSGVybyIsImRhdGEiLCJyYW5kb20iLCJzZXRSYW5kb20iLCJsZW5ndGgiLCJNYXRoIiwicm91bmRlZCIsImZsb29yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwidXJsIiwiYWx0IiwidGl0bGUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PlatformHero.jsx\n");

/***/ })

});