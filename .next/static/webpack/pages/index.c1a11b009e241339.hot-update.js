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

/***/ "./components/Section.jsx":
/*!********************************!*\
  !*** ./components/Section.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardSection */ \"./components/CardSection.jsx\");\nvar _this = undefined;\n\n\n\nvar Section = function(param) {\n    var genre = param.genre, videos = param.videos;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-4\",\n            children: videos.map(function(video) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/video/\".concat(video.slug),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        thumbnail: video.thumbnail\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\Section.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 25\n                    }, _this1)\n                }, video.id, false, {\n                    fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\Section.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 21\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\Section.jsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\components\\\\Section.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, _this);\n};\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUNjO0FBRXhDLElBQU1FLE9BQU8sR0FBRyxnQkFBdUI7UUFBcEJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxNQUFNLFNBQU5BLE1BQU07O0lBQzVCLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7a0JBQzVCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxZQUFZO3NCQUN0QkYsTUFBTSxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsS0FBSztxQ0FDZCw4REFBQ0MsR0FBQztvQkFBZ0JDLElBQUksRUFBRSxTQUFRLENBQWEsT0FBWEYsS0FBSyxDQUFDRyxJQUFJLENBQUU7OEJBQzFDLDRFQUFDVixvREFBVzt3QkFBQ1csU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBQVM7Ozs7OzhCQUFJO21CQUR2Q0osS0FBSyxDQUFDSyxFQUFFOzs7OzBCQUVaO2FBQ1AsQ0FBQzs7Ozs7aUJBQ0E7Ozs7O2FBQ0osQ0FDUjtDQUNMO0FBWktYLEtBQUFBLE9BQU87QUFjYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VjdGlvbi5qc3g/NDFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSAnLi9DYXJkU2VjdGlvbic7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgZ2VucmUsIHZpZGVvcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAge3ZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEga2V5PXt2aWRlby5pZH0gaHJlZj17YC92aWRlby8ke3ZpZGVvLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU2VjdGlvbiB0aHVtYm5haWw9e3ZpZGVvLnRodW1ibmFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZFNlY3Rpb24iLCJTZWN0aW9uIiwiZ2VucmUiLCJ2aWRlb3MiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ2aWRlbyIsImEiLCJocmVmIiwic2x1ZyIsInRodW1ibmFpbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Section.jsx\n");

/***/ })

});