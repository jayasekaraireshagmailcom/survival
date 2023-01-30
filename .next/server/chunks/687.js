"use strict";
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1874);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(517);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8035);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4028);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
 // import Stack from '@mui/material/Stack';

 // import IconButton from '@mui/material/IconButton';
// import ViewComfyIcon from '@mui/icons-material/ViewComfy';
// import ViewListIcon from '@mui/icons-material/ViewList';





function ActionButton(props) {
  const {
    title,
    customStyles,
    colorface,
    src,
    vlidateData
  } = props;
  const [btnColor, setBtnColor] = react__WEBPACK_IMPORTED_MODULE_0__.useState(colorface);
  const ColorButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()))(({
    theme
  }) => ({
    color: theme.palette.getContrastText(_mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.purple[500]),
    backgroundColor: '#fff',
    borderColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.purple[500],
    '&:hover': {
      backgroundColor: '#fff',
      color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.purple[700]
    }
  }));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ColorButton, {
    onClick: vlidateData,
    variant: "contained",
    sx: customStyles,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: src,
      underline: "none",
      children: title
    })
  });
}

/***/ }),

/***/ 1521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6102);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Card(props) {
  const {
    spacing,
    direction,
    justifyContent,
    alignItems,
    children,
    customStyles
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1___default()), {
    spacing: spacing,
    direction: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    sx: customStyles,
    children: children
  });
}

/***/ }),

/***/ 5131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8035);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1562);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(2675);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/TopHeader.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Item = (0,styles_.styled)((Paper_default()))(({
  theme
}) => _objectSpread(_objectSpread({
  backgroundColor: "#4d4dff"
}, theme.typography.body2), {}, {
  padding: theme.spacing(2),
  textAlign: 'left',
  color: "#fff",
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '0 0'
}));
function TopHeader(props) {
  const {
    title
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
    container: true,
    spacing: 0,
    children: /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
      item: true,
      xs: 12,
      children: /*#__PURE__*/jsx_runtime_.jsx(Item, {
        children: title
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Layout.tsx





function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(TopHeader, {
      title: "Employee Manager"
    }), children]
  });
}

/* harmony default export */ const components_Layout = (Layout);

/***/ })

};
;