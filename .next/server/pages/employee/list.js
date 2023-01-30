"use strict";
(() => {
var exports = {};
exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ list),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Layout.tsx + 1 modules
var Layout = __webpack_require__(5131);
// EXTERNAL MODULE: ./components/ActionButton.tsx
var ActionButton = __webpack_require__(8721);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ViewComfy"
const ViewComfy_namespaceObject = require("@mui/icons-material/ViewComfy");
var ViewComfy_default = /*#__PURE__*/__webpack_require__.n(ViewComfy_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ViewList"
const ViewList_namespaceObject = require("@mui/icons-material/ViewList");
var ViewList_default = /*#__PURE__*/__webpack_require__.n(ViewList_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Delete"
const Delete_namespaceObject = require("@mui/icons-material/Delete");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Edit"
const Edit_namespaceObject = require("@mui/icons-material/Edit");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(4028);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/IconButton.tsx








function IcnButton(props) {
  const {
    view,
    changeDisplay,
    color,
    src
  } = props;
  const {
    0: statues,
    1: setStatues
  } = (0,external_react_.useState)( /*#__PURE__*/jsx_runtime_.jsx((ViewList_default()), {}));
  (0,external_react_.useEffect)(() => {
    switch (view.viewType) {
      case 'list':
        setStatues( /*#__PURE__*/jsx_runtime_.jsx((ViewComfy_default()), {}));
        break;

      case 'grid':
        setStatues( /*#__PURE__*/jsx_runtime_.jsx((ViewList_default()), {}));
        break;

      case 'delete':
        setStatues( /*#__PURE__*/jsx_runtime_.jsx((Delete_default()), {}));
        break;

      case 'edit':
        setStatues( /*#__PURE__*/jsx_runtime_.jsx((Edit_default()), {}));
        break;

      default:
        setStatues( /*#__PURE__*/jsx_runtime_.jsx((Edit_default()), {}));
    }
  }, [view]);
  return /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
    href: src,
    underline: "none",
    children: /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
      color: color,
      "aria-label": "displayView",
      component: "label",
      onClick: changeDisplay,
      children: statues
    })
  });
}
// EXTERNAL MODULE: ./components/Card.tsx
var Card = __webpack_require__(1521);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./imageLoader.ts
const imageLoader = ({
  src
}) => {
  return src;
};

/* harmony default export */ const imageLoader_0 = (imageLoader);
;// CONCATENATED MODULE: ./components/Pagination.tsx


function usePagination(data, itemsPerPage) {
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage
  };
}

/* harmony default export */ const Pagination = (usePagination);
;// CONCATENATED MODULE: ./components/GridView.tsx








function DisplayGrid(props) {
  const [spacing, setSpacing] = external_react_default().useState(1);
  const {
    0: deletebtn,
    1: setDeleteBtn
  } = (0,external_react_.useState)({
    viewType: 'delete'
  });
  const {
    0: editbtn,
    1: setEditBtn
  } = (0,external_react_.useState)({
    viewType: 'edit'
  });
  const {
    dataSource
  } = props;
  const text = {
    fontSize: '10px',
    marginBottom: '-2em'
  };
  let {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1);
  const PER_PAGE = 5;
  const count = Math.ceil(dataSource.length / PER_PAGE);

  const _DATA = Pagination(dataSource, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);

    _DATA.jump(p);
  };

  const Item = (0,material_.styled)(material_.Paper)(({
    theme
  }) => ({
    backgroundColor: 'transparent',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'transparent',
    height: '10em'
  }));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
    sx: {
      flexGrow: 1
    },
    container: true,
    spacing: 2,
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        container: true,
        justifyContent: "center",
        spacing: spacing,
        children: _DATA.currentData().map(value => /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Paper, {
            sx: {
              height: 200,
              width: 200,
              backgroundColor: theme => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              boxShadow: 2
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              loader: imageLoader_0,
              unoptimized: true,
              src: value.photo,
              alt: value.first_name + ' ' + value.last_name,
              width: "200",
              height: "200"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.List, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
                disablePadding: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemButton, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                    primary: value.first_name + ' ' + value.last_name,
                    primaryTypographyProps: {
                      style: text
                    }
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
                disablePadding: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemButton, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                    primary: value.email,
                    primaryTypographyProps: {
                      style: text
                    }
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
                disablePadding: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemButton, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                    primary: value.number,
                    primaryTypographyProps: {
                      style: text
                    }
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(material_.ListItem, {
                disablePadding: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
                    primary: value.gender,
                    primaryTypographyProps: {
                      style: text
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx(IcnButton, {
                    view: deletebtn,
                    color: "error"
                  }), /*#__PURE__*/jsx_runtime_.jsx(IcnButton, {
                    view: editbtn,
                    color: "success",
                    src: `/employee/edit/${value.id}`
                  })]
                })
              })]
            })]
          })
        }, value.id))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        justifyContent: "center",
        spacing: 0,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(Item, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Pagination, {
          count: count,
          size: "large",
          page: page,
          variant: "outlined",
          shape: "rounded",
          onChange: handleChange,
          color: "primary"
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/TableView.tsx









function DisplayTable(props) {
  const {
    dataSource
  } = props;
  const {
    0: deletebtn,
    1: setDeleteBtn
  } = (0,external_react_.useState)({
    viewType: 'delete'
  });
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/jsx_runtime_.jsx(material_.TableContainer, {
    component: material_.Paper,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Table, {
      "aria-label": "simple table",
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableHead, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "Image"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "First Name"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "Last Name"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "Email"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "Phone"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "Gender"
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: "Action"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableBody, {
        children: dataSource.map(row => /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.TableRow, {
          sx: {
            '&:last-child td, &:last-child th': {
              border: 0
            }
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            component: "th",
            scope: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              loader: imageLoader_0,
              unoptimized: true,
              src: row.photo,
              alt: row.first_name + ' ' + row.last_name,
              width: "50",
              height: "50"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: row.first_name
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: row.last_name
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: row.email
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: row.number
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: row.gender
          }), /*#__PURE__*/jsx_runtime_.jsx(material_.TableCell, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
              spacing: "0",
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              children: [/*#__PURE__*/jsx_runtime_.jsx(ActionButton/* default */.Z, {
                title: 'Edit',
                colorface: "grey",
                src: `/employee/edit/${row.id}`
              }), /*#__PURE__*/jsx_runtime_.jsx(IcnButton, {
                view: deletebtn,
                color: "error"
              })]
            })
          })]
        }, row.id))
      })]
    })
  });
}
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
;// CONCATENATED MODULE: ./pages/employee/list/index.tsx












const Page = ({
  employees
}) => {
  const {
    0: view,
    1: setView
  } = (0,external_react_.useState)({
    viewType: 'list'
  });

  const change = () => {
    view.viewType == 'list' ? setView({
      viewType: 'grid'
    }) : setView({
      viewType: 'list'
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      spacing: "4",
      direction: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      customStyles: {
        marginTop: '2em',
        marginRight: '2em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(ActionButton/* default */.Z, {
        src: "/employee/add",
        title: "add employee",
        customStyles: {
          borderRadius: '5em',
          fontWeight: '600'
        },
        colorface: "blue"
      }), /*#__PURE__*/jsx_runtime_.jsx(IcnButton, {
        view: view,
        changeDisplay: change,
        color: "primary"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Card/* default */.Z, {
      spacing: "1",
      direction: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      customStyles: {
        marginTop: '3em'
      },
      children: view.viewType == 'grid' ? /*#__PURE__*/jsx_runtime_.jsx(DisplayGrid, {
        dataSource: employees
      }) : /*#__PURE__*/jsx_runtime_.jsx(DisplayTable, {
        dataSource: employees
      })
    })]
  });
};

const getStaticProps = async context => {
  const filePath = external_path_default().join(process.cwd(), 'employees.json');
  const jsonData = await external_fs_.promises.readFile(filePath, 'utf-8');
  const results = JSON.parse(jsonData);
  return {
    props: {
      employees: results
    }
  };
};

Page.getLayout = function getLayout(page) {
  return page;
};

/* harmony default export */ const list = (Page);

/***/ }),

/***/ 7949:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 1874:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 2675:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 4028:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 1562:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 6102:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 517:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8035:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,675,687], () => (__webpack_exec__(619)));
module.exports = __webpack_exports__;

})();