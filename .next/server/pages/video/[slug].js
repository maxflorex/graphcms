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
exports.id = "pages/video/[slug]";
exports.ids = ["pages/video/[slug]"];
exports.modules = {

/***/ "./pages/video/[slug].js":
/*!*******************************!*\
  !*** ./pages/video/[slug].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getServerSideProps = async (pageContext)=>{\n    const url = process.env.ENDPOINT;\n    const graphQLCLient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(url, {\n        headers: {\n            \"Authorization\": `Bearer ${process.env.MY_TOKEN}`\n        }\n    });\n    const pageSlug = pageContext.query.slug;\n    const query = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`\r\n        query($pageSlug: String!) {\r\n            video(where: {\r\n            slug : $pageSlug\r\n            }) {\r\n                createdAt,\r\n            id,\r\n            title,\r\n            description,\r\n            seen,\r\n            slug,\r\n            tags,\r\n            thumbnail{\r\n                url\r\n            },\r\n            mp4 {\r\n                url\r\n            }\r\n            }\r\n        }\r\n      `;\n    const variables = {\n        pageSlug\n    };\n    const data = await graphQLCLient.request(query, variables);\n    const video = data.video;\n    return {\n        props: {\n            video\n        }\n    };\n};\nconst Video = ({ video  })=>{\n    console.log(video);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"My video\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maxaf\\\\OneDrive\\\\Desktop\\\\GRAPH\\\\graph\\\\pages\\\\video\\\\[slug].js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlby9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFFN0MsTUFBTUUsa0JBQWtCLEdBQUcsT0FBT0MsV0FBVyxHQUFLO0lBRXJELE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVE7SUFFaEMsTUFBTUMsYUFBYSxHQUFHLElBQUlQLDBEQUFhLENBQUNHLEdBQUcsRUFBRTtRQUN6Q0ssT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7U0FDcEQ7S0FDSixDQUFDO0lBRUYsTUFBTUMsUUFBUSxHQUFHUixXQUFXLENBQUNTLEtBQUssQ0FBQ0MsSUFBSTtJQUV2QyxNQUFNRCxLQUFLLEdBQUdaLGdEQUFHLENBQUM7SUFzQmxCLE1BQU1jLFNBQVMsR0FBRztRQUNkSCxRQUFRO0tBQ1g7SUFHRCxNQUFNSSxJQUFJLEdBQUc7SUFDYixNQUFNRSxLQUFLLEdBQUdGLElBQUksQ0FBQ0U7SUFHbkIsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFDSEQsS0FBSztTQUNSO0tBQ0o7Q0FFSjtBQUVELE1BQU1FLEtBQUssR0FBRyxDQUFDLEVBQUVGLEtBQUs7SUFFbEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSjtJQUVaO2tCQUNTOzs7Ozs7Q0FFWjtBQUVELGVBQWVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGgvLi9wYWdlcy92aWRlby9bc2x1Z10uanM/OTJmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHBhZ2VDb250ZXh0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRU5EUE9JTlRcclxuXHJcbiAgICBjb25zdCBncmFwaFFMQ0xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5NWV9UT0tFTn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwYWdlU2x1ZyA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWdcclxuXHJcbiAgICBjb25zdCBxdWVyeSA9IGdxbGBcclxuICAgICAgICBxdWVyeSgkcGFnZVNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgdmlkZW8od2hlcmU6IHtcclxuICAgICAgICAgICAgc2x1ZyA6ICRwYWdlU2x1Z1xyXG4gICAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHNlZW4sXHJcbiAgICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgICAgIHRhZ3MsXHJcbiAgICAgICAgICAgIHRodW1ibmFpbHtcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtcDQge1xyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG5cclxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgICBwYWdlU2x1ZyxcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDTGllbnQucmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKVxyXG4gICAgY29uc3QgdmlkZW8gPSBkYXRhLnZpZGVvXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmlkZW9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBWaWRlbyA9ICh7IHZpZGVvIH0pID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2aWRlbylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+TXkgdmlkZW88L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW8iXSwibmFtZXMiOlsiZ3FsIiwiR3JhcGhRTENsaWVudCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhZ2VDb250ZXh0IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkVORFBPSU5UIiwiZ3JhcGhRTENMaWVudCIsImhlYWRlcnMiLCJNWV9UT0tFTiIsInBhZ2VTbHVnIiwicXVlcnkiLCJzbHVnIiwidmFyaWFibGVzIiwiZGF0YSIsInJlcXVlc3QiLCJ2aWRlbyIsInByb3BzIiwiVmlkZW8iLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/video/[slug].js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/video/[slug].js"));
module.exports = __webpack_exports__;

})();