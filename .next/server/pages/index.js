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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst getStaticProps = async ()=>{\n    const url = process.env.ENDPOINT;\n    const graphQLCLient = new graphql_request__WEBPACK_IMPORTED_MODULE_2__.GraphQLClient(url, {\n        headers: {\n            \"Authorization\": `Bearer ${process.env.MY_TOKEN}`\n        }\n    });\n    const query = graphql_request__WEBPACK_IMPORTED_MODULE_2__.gql`\n  query {\n    videos {\n      createdAt,\n      id,\n      title,\n      description,\n      seen,\n      slug,\n      tags,\n      thumbnail{\n        url\n      },\n      mp4 {\n        url\n      }\n    }\n  }\n`;\n    const data = await graphQLCLient.request(query);\n    const videos = data.videos;\n    return {\n        props: {\n            videos\n        }\n    };\n};\nconst Home = ({ videos: videos1  })=>{\n    const randomVideo = (videos)=>{\n        return videos[Math.floor(Math.random() * videos.length)];\n    };\n    console.log(videos1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"app\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-video\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: randomVideo(videos1).thumbnail.url,\n                    alt: randomVideo(videos1).title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\index.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQzJCO0FBRTdDLE1BQU1HLGNBQWMsR0FBRyxVQUFZO0lBRXhDLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVE7SUFFaEMsTUFBTUMsYUFBYSxHQUFHLElBQUlOLDBEQUFhLENBQUNFLEdBQUcsRUFBRTtRQUMzQ0ssT0FBTyxFQUFFO1lBQ1AsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7U0FDbEQ7S0FDRixDQUFDO0lBR0YsTUFBTUMsS0FBSyxHQUFHVixnREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnBCLENBQUM7SUFDQyxNQUFNVyxJQUFJLEdBQUcsTUFBTUosYUFBYSxDQUFDSyxPQUFPLENBQUNGLEtBQUssQ0FBQztJQUMvQyxNQUFNRyxNQUFNLEdBQUdGLElBQUksQ0FBQ0UsTUFBTTtJQUUxQixPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMRCxNQUFNO1NBQ1A7S0FDRjtDQUNGO0FBRUQsTUFBTUUsSUFBSSxHQUFHLENBQUMsRUFBRUYsTUFBTSxFQUFOQSxPQUFNLEdBQUUsR0FBSztJQUUzQixNQUFNRyxXQUFXLEdBQUcsQ0FBQ0gsTUFBTSxHQUFLO1FBQzlCLE9BQU9BLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdOLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUM7S0FDekQ7SUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU0sQ0FBQztJQUNuQixxQkFDRTtrQkFDRSw0RUFBQ1UsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDbEIsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOzBCQUN6Qiw0RUFBQ0MsS0FBRztvQkFBQ0MsR0FBRyxFQUFFVixXQUFXLENBQUNILE9BQU0sQ0FBQyxDQUFDYyxTQUFTLENBQUN4QixHQUFHO29CQUFFeUIsR0FBRyxFQUFFWixXQUFXLENBQUNILE9BQU0sQ0FBQyxDQUFDZ0IsS0FBSzs7Ozs7NkJBQUk7Ozs7O3lCQUMzRTs7Ozs7cUJBQ0Y7cUJBQ0wsQ0FDSjtDQUNGO0FBRUQsaUVBQWVkLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRU5EUE9JTlRcblxuICBjb25zdCBncmFwaFFMQ0xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTVlfVE9LRU59YFxuICAgIH1cbiAgfSlcblxuXG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdmlkZW9zIHtcbiAgICAgIGNyZWF0ZWRBdCxcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHNlZW4sXG4gICAgICBzbHVnLFxuICAgICAgdGFncyxcbiAgICAgIHRodW1ibmFpbHtcbiAgICAgICAgdXJsXG4gICAgICB9LFxuICAgICAgbXA0IHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaFFMQ0xpZW50LnJlcXVlc3QocXVlcnkpXG4gIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdmlkZW9zLFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBIb21lID0gKHsgdmlkZW9zIH0pID0+IHtcblxuICBjb25zdCByYW5kb21WaWRlbyA9ICh2aWRlb3MpID0+IHtcbiAgICByZXR1cm4gdmlkZW9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZpZGVvcy5sZW5ndGgpXVxuICB9XG5cbiAgY29uc29sZS5sb2codmlkZW9zKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZGVvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3JhbmRvbVZpZGVvKHZpZGVvcykudGh1bWJuYWlsLnVybH0gYWx0PXtyYW5kb21WaWRlbyh2aWRlb3MpLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdxbCIsIkdyYXBoUUxDbGllbnQiLCJnZXRTdGF0aWNQcm9wcyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJFTkRQT0lOVCIsImdyYXBoUUxDTGllbnQiLCJoZWFkZXJzIiwiTVlfVE9LRU4iLCJxdWVyeSIsImRhdGEiLCJyZXF1ZXN0IiwidmlkZW9zIiwicHJvcHMiLCJIb21lIiwicmFuZG9tVmlkZW8iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();