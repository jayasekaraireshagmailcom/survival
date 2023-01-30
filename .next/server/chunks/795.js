"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 4795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Form)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Label.tsx


function Label(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(material_.InputLabel, {
    children: children
  });
}
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(8258);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(3845);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: ./components/Input.tsx





const BasicTextFields = props => {
  const {
    inputid,
    label,
    fieldColor,
    valueChange,
    recordValue,
    errorField,
    helperMsg
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx((FormControl_default()), {
    fullWidth: true,
    children: /*#__PURE__*/jsx_runtime_.jsx((TextField_default()), {
      helperText: helperMsg,
      error: errorField,
      value: recordValue,
      id: inputid,
      label: label,
      variant: fieldColor,
      onChange: valueChange
    })
  });
};


// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(1320);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(5318);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/FormHelperText"
var FormHelperText_ = __webpack_require__(6684);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_);
;// CONCATENATED MODULE: ./components/DropDown.tsx







function BasicSelect(props) {
  const {
    labelId,
    id,
    value,
    label,
    dataSource,
    validation,
    fieldColor
  } = props;
  const {
    0: gender,
    1: setGender
  } = (0,external_react_.useState)(value);
  const {
    0: genderError,
    1: setGenderError
  } = (0,external_react_.useState)(false);
  const {
    0: genderErrorMsg,
    1: setGenderErrorMsg
  } = (0,external_react_.useState)('');

  const handleChange = event => {
    setGender(event.target.value);

    if (!validation.includes(event.target.value)) {
      setGenderError(true);
      setGenderErrorMsg('Invalied Gender Option !');
    } else {
      setGenderError(false);
      setGenderErrorMsg('');
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((FormControl_default()), {
    fullWidth: true,
    variant: fieldColor,
    error: genderError,
    children: [/*#__PURE__*/jsx_runtime_.jsx((Select_default()), {
      labelId: labelId,
      id: id,
      value: gender,
      label: label,
      onChange: handleChange,
      children: dataSource.map(option => {
        return /*#__PURE__*/jsx_runtime_.jsx((MenuItem_default()), {
          value: option.value,
          children: option.label
        }, option.value);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((FormHelperText_default()), {
      children: genderErrorMsg
    })]
  });
}
// EXTERNAL MODULE: ./components/ActionButton.tsx
var ActionButton = __webpack_require__(8721);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(1586);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./utils/validations.tsx
const checkUndefined = value => {
  return value.length === 0;
};

const checkOnlyLetters = value => {
  const letters = /^[A-Za-z]+$/;
  return !value.match(letters);
};

const checkTextLength = value => {
  return !(value.length >= 6 && value.length <= 10);
};

const checkEmail = value => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !value.match(emailRegex);
};

const checkPhoneSL = value => {
  const phoneRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
  return !value.match(phoneRegex);
};


;// CONCATENATED MODULE: ./components/Form.tsx










function Form(props) {
  const {
    btnTittle
  } = props;
  const {
    0: firstName,
    1: setFirstName
  } = (0,external_react_.useState)('');
  const {
    0: firstNameError,
    1: setFirstNameError
  } = (0,external_react_.useState)(false);
  const {
    0: firstNameErrorMsg,
    1: setFirstNameErrorMsg
  } = (0,external_react_.useState)('');
  const {
    0: lastName,
    1: setLastName
  } = (0,external_react_.useState)('');
  const {
    0: lastNameError,
    1: setLastNameError
  } = (0,external_react_.useState)(false);
  const {
    0: lastNameErrorMsg,
    1: setLastNameErrorMsg
  } = (0,external_react_.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: emailError,
    1: setEmailError
  } = (0,external_react_.useState)(false);
  const {
    0: emailErrorMsg,
    1: setEmailErrorMsg
  } = (0,external_react_.useState)('');
  const {
    0: phone,
    1: setPhone
  } = (0,external_react_.useState)('');
  const {
    0: phoneError,
    1: setPhoneError
  } = (0,external_react_.useState)(false);
  const {
    0: phoneErrorMsg,
    1: setPhoneErrorMsg
  } = (0,external_react_.useState)('');
  const {
    0: gender,
    1: setGender
  } = (0,external_react_.useState)('male');

  const validateRecord = () => {
    if (checkUndefined(firstName) || checkOnlyLetters(firstName) || checkTextLength(firstName)) {
      setFirstNameError(true);
      setFirstNameErrorMsg('Invalidate First Name Input !');
    } else {
      setFirstNameError(false);
      setFirstNameErrorMsg('');
    }

    if (checkUndefined(lastName) || checkOnlyLetters(lastName) || checkTextLength(lastName)) {
      setLastNameError(true);
      setLastNameErrorMsg('Invalidate Last Name Input !');
    } else {
      setLastNameError(false);
      setLastNameErrorMsg('');
    }

    if (checkEmail(email)) {
      setEmailError(true);
      setEmailErrorMsg('Invalidate Email Input !');
    } else {
      setEmailError(false);
      setEmailErrorMsg('');
    }

    if (checkPhoneSL(phone)) {
      setPhoneError(true);
      setPhoneErrorMsg('Invalidate Phone Input !');
    } else {
      setPhoneError(false);
      setPhoneErrorMsg('');
    }
  };

  const recordChange = (e, id) => {
    switch (id) {
      case 'firstName':
        setFirstName(e.target.value);
        break;

      case 'lastName':
        setLastName(e.target.value);
        break;

      case 'email':
        setEmail(e.target.value);
        break;

      case 'phone':
        setPhone(e.target.value);
        break;

      case 'gender':
        setGender(e.target.value);
        break;

      default:
        return;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
    sx: {
      flexGrow: 1
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 0,
      sx: {
        paddingTop: '2em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 2,
        alignItems: "center",
        sx: {
          position: 'relative',
          top: '1em'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Label, {
          children: "First Name"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 8,
        children: /*#__PURE__*/jsx_runtime_.jsx(BasicTextFields, {
          fieldColor: "filled",
          valueChange: e => recordChange(e, 'firstName'),
          errorField: firstNameError,
          helperMsg: firstNameErrorMsg
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 0,
      sx: {
        paddingTop: '1em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 2,
        sx: {
          position: 'relative',
          top: '1em'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Label, {
          sx: {
            padding: '2em'
          },
          children: "Last Name"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 8,
        children: /*#__PURE__*/jsx_runtime_.jsx(BasicTextFields, {
          fieldColor: "filled",
          valueChange: e => recordChange(e, 'lastName'),
          errorField: lastNameError,
          helperMsg: lastNameErrorMsg
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 0,
      sx: {
        paddingTop: '1em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 2,
        sx: {
          position: 'relative',
          top: '1em'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Label, {
          sx: {
            padding: '2em'
          },
          children: "Email"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 8,
        children: /*#__PURE__*/jsx_runtime_.jsx(BasicTextFields, {
          fieldColor: "filled",
          valueChange: e => recordChange(e, 'email'),
          errorField: emailError,
          helperMsg: emailErrorMsg
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 0,
      sx: {
        paddingTop: '1em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 2,
        sx: {
          position: 'relative',
          top: '1em'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Label, {
          sx: {
            padding: '2em'
          },
          children: "Phone"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 8,
        children: /*#__PURE__*/jsx_runtime_.jsx(BasicTextFields, {
          fieldColor: "filled",
          valueChange: e => recordChange(e, 'phone'),
          errorField: phoneError,
          helperMsg: phoneErrorMsg
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 0,
      sx: {
        paddingTop: '1em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 2,
        sx: {
          position: 'relative',
          top: '1em'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Label, {
          sx: {
            padding: '2em'
          },
          children: "Gender"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 8,
        children: /*#__PURE__*/jsx_runtime_.jsx(BasicSelect, {
          fieldColor: "filled",
          dataSource: [{
            id: 1,
            value: 'male',
            label: 'M'
          }, {
            id: 2,
            value: 'female',
            label: 'F'
          }, {
            id: 3,
            value: 'bysex',
            label: 'NA'
          }],
          value: gender,
          validation: ['male', 'female']
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      spacing: 0,
      sx: {
        padding: '2em 0 2em 2em'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 11,
        children: /*#__PURE__*/jsx_runtime_.jsx(ActionButton/* default */.Z, {
          vlidateData: validateRecord,
          title: btnTittle,
          customStyles: {
            marginTop: '2em',
            borderRadius: '5px',
            fontWeight: '600',
            width: '20%',
            background: '#fff',
            color: 'purple',
            float: 'right',
            border: 1
          },
          colorface: "blue"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 1
      })]
    })]
  });
}

/***/ })

};
;