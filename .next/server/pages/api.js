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
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.tsx":
/*!*****************************!*\
  !*** ./pages/api/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst prettier = __webpack_require__(/*! prettier */ \"prettier\");\n\nconst handler = async (req, res) => {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'employees.json');\n  const jsonData = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(filePath, 'utf-8');\n  const data = JSON.parse(jsonData);\n\n  if (req.method === 'GET') {\n    res.status(200).json(jsonData);\n  }\n\n  if (req.method === 'POST') {\n    const employee = req.body;\n    employee['id'] = Date.now();\n    employee['photo'] = 'https://i.pravatar.cc/200';\n    data.push(employee);\n    fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile('employees.json', prettier.format(JSON.stringify(data), {\n      parser: \"json\"\n    }));\n    res.status(200).json(employee);\n  }\n\n  if (req.method === 'PUT') {\n    const employee = req.body;\n    console.log(employee);\n    const {\n      id,\n      first_name,\n      last_name,\n      gender,\n      email,\n      number\n    } = employee;\n    data.map(raw => {\n      if (raw.id == id) {\n        raw.first_name = first_name;\n        raw.last_name = last_name;\n        raw.email = email;\n        raw.number = number;\n        raw.gender = gender;\n      }\n    });\n    fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile('employees.json', prettier.format(JSON.stringify(data), {\n      parser: \"json\"\n    }));\n    res.status(200).json(employee);\n  }\n\n  if (req.method === 'DELETE') {\n    const {\n      id\n    } = req.body;\n    const empIndex = data.findIndex(obj => obj.id === id);\n\n    if (empIndex > -1) {\n      data.splice(empIndex, 1);\n    }\n\n    fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile('employees.json', prettier.format(JSON.stringify(data), {\n      parser: \"json\"\n    }));\n    res.status(200).json('delete');\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUd6QixJQUFJLENBQUMwQixTQUFMLENBQWdCQyxHQUFELElBQWFBLEdBQUcsQ0FBQ1YsRUFBSixLQUFXQSxFQUF2QyxDQUFqQjs7QUFFQSxRQUFJUSxRQUFRLEdBQUcsQ0FBQyxDQUFoQixFQUFtQjtBQUNqQnpCLE1BQUFBLElBQUksQ0FBQzRCLE1BQUwsQ0FBWUgsUUFBWixFQUFzQixDQUF0QjtBQUNEOztBQUVEckMsSUFBQUEsa0RBQUEsQ0FBYSxnQkFBYixFQUE4QkMsUUFBUSxDQUFDdUIsTUFBVCxDQUFnQlgsSUFBSSxDQUFDWSxTQUFMLENBQWViLElBQWYsQ0FBaEIsRUFBc0M7QUFBRWMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBdEMsQ0FBOUI7QUFDQXJCLElBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLFFBQXJCO0FBQ0Q7QUFFRixDQS9DRDs7QUFnREEsaUVBQWVkLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWd1aWRlLy4vcGFnZXMvYXBpL2luZGV4LnRzeD9jNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5jb25zdCBwcmV0dGllciA9IHJlcXVpcmUoXCJwcmV0dGllclwiKTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6YW55LCByZXM6YW55KT0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2VtcGxveWVlcy5qc29uJyk7XG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsJ3V0Zi04Jyk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKVxuXG4gIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKXtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihqc29uRGF0YSlcbiAgfVxuXG4gIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgY29uc3QgZW1wbG95ZWUgPSByZXEuYm9keVxuICAgIGVtcGxveWVlWydpZCddID0gRGF0ZS5ub3coKVxuICAgIGVtcGxveWVlWydwaG90byddID0gJ2h0dHBzOi8vaS5wcmF2YXRhci5jYy8yMDAnXG4gICAgZGF0YS5wdXNoKGVtcGxveWVlKVxuICAgIGZzLndyaXRlRmlsZSgnZW1wbG95ZWVzLmpzb24nLHByZXR0aWVyLmZvcm1hdChKU09OLnN0cmluZ2lmeShkYXRhKSwgeyBwYXJzZXI6IFwianNvblwiIH0pKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihlbXBsb3llZSlcbiAgfVxuXG4gIGlmKHJlcS5tZXRob2QgPT09ICdQVVQnKXtcbiAgICBjb25zdCBlbXBsb3llZSA9IHJlcS5ib2R5XG4gICAgY29uc29sZS5sb2coZW1wbG95ZWUpXG4gICAgY29uc3Qge2lkLGZpcnN0X25hbWUsbGFzdF9uYW1lLGdlbmRlcixlbWFpbCxudW1iZXJ9ID0gZW1wbG95ZWVcbiAgICBkYXRhLm1hcCgocmF3OmFueSk9PntcbiAgICAgIGlmKHJhdy5pZD09aWQpe1xuICAgICAgICByYXcuZmlyc3RfbmFtZT1maXJzdF9uYW1lXG4gICAgICAgIHJhdy5sYXN0X25hbWU9bGFzdF9uYW1lXG4gICAgICAgIHJhdy5lbWFpbD1lbWFpbFxuICAgICAgICByYXcubnVtYmVyPW51bWJlclxuICAgICAgICByYXcuZ2VuZGVyPWdlbmRlclxuICAgICAgfVxuICAgIH0pXG4gICAgZnMud3JpdGVGaWxlKCdlbXBsb3llZXMuanNvbicscHJldHRpZXIuZm9ybWF0KEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7IHBhcnNlcjogXCJqc29uXCIgfSkpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGVtcGxveWVlKVxuICB9XG5cbiAgaWYocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpe1xuICAgIGNvbnN0IHtpZH0gPSByZXEuYm9keVxuICAgIGNvbnN0IGVtcEluZGV4ID0gZGF0YS5maW5kSW5kZXgoKG9iajphbnkpID0+IG9iai5pZCA9PT0gaWQpO1xuXG4gICAgaWYgKGVtcEluZGV4ID4gLTEpIHtcbiAgICAgIGRhdGEuc3BsaWNlKGVtcEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBmcy53cml0ZUZpbGUoJ2VtcGxveWVlcy5qc29uJyxwcmV0dGllci5mb3JtYXQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHsgcGFyc2VyOiBcImpzb25cIiB9KSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oJ2RlbGV0ZScpXG4gIH1cbiBcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJwcmV0dGllciIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwicmVhZEZpbGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVtcGxveWVlIiwiYm9keSIsIkRhdGUiLCJub3ciLCJwdXNoIiwid3JpdGVGaWxlIiwiZm9ybWF0Iiwic3RyaW5naWZ5IiwicGFyc2VyIiwiY29uc29sZSIsImxvZyIsImlkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImdlbmRlciIsImVtYWlsIiwibnVtYmVyIiwibWFwIiwicmF3IiwiZW1wSW5kZXgiLCJmaW5kSW5kZXgiLCJvYmoiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.tsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "prettier":
/*!***************************!*\
  !*** external "prettier" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("prettier");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.tsx"));
module.exports = __webpack_exports__;

})();