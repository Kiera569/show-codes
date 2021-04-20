(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./components/SelectionEditor.js":
/*!***************************************!*\
  !*** ./components/SelectionEditor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_limengyu_Desktop_private_code_project_show_codes_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_limengyu_Desktop_private_code_project_show_codes_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var actionsack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actionsack */ \"./node_modules/actionsack/dist/index.esm.js\");\n/* harmony import */ var _Popout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Popout */ \"./components/Popout.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ColorPicker */ \"./components/ColorPicker.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/limengyu/Desktop/private/code/project/show-codes/components/SelectionEditor.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_limengyu_Desktop_private_code_project_show_codes_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction ModifierButton(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    flex: 0,\n    padding: \"0\",\n    center: true,\n    margin: \"0 8px 0 0\",\n    style: {\n      borderBottom: \"1px solid \".concat(props.selected ? 'white' : 'transparent')\n    },\n    onClick: props.onClick,\n    color: props.color,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ModifierButton;\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'BOLD':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          bold: !state.bold\n        });\n      }\n\n    case 'ITALICS':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          italics: !state.italics\n        });\n      }\n\n    case 'UNDERLINE':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          underline: Number(state.underline + 1) % 3\n        });\n      }\n\n    case 'COLOR':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          color: action.color\n        });\n      }\n  }\n\n  throw new Error('Invalid action');\n}\n\nfunction SelectionEditor(_ref) {\n  _s();\n\n  var onChange = _ref.onChange;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),\n      _React$useState2 = Object(_Users_limengyu_Desktop_private_code_project_show_codes_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  Object(actionsack__WEBPACK_IMPORTED_MODULE_5__[\"useKeyboardListener\"])('Escape', function () {\n    return setOpen(false);\n  });\n\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_4___default.a.useReducer(reducer, {\n    bold: null,\n    italics: null,\n    underline: null,\n    color: null\n  }),\n      _React$useReducer2 = Object(_Users_limengyu_Desktop_private_code_project_show_codes_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n      state = _React$useReducer2[0],\n      dispatch = _React$useReducer2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    onChange(state);\n  }, [onChange, state]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: 'relative'\n    },\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]) + \" \" + \"colorizer\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]) + \" \" + \"modifier\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ModifierButton, {\n          selected: state.bold,\n          onClick: function onClick() {\n            return dispatch({\n              type: 'BOLD'\n            });\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"b\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]),\n            children: \"B\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ModifierButton, {\n          selected: state.italics,\n          onClick: function onClick() {\n            return dispatch({\n              type: 'ITALICS'\n            });\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"i\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]),\n            children: \"I\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ModifierButton, {\n          selected: state.underline,\n          onClick: function onClick() {\n            return dispatch({\n              type: 'UNDERLINE'\n            });\n          },\n          color: state.underline === 2 ? _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].RED : undefined,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"u\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]),\n            children: \"U\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setOpen(function (o) {\n              return !o;\n            });\n          },\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]) + \" \" + \"color-square\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Popout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        hidden: !open,\n        pointerLeft: \"16px\",\n        style: {\n          left: 82\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1818633230\", [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY]]]) + \" \" + \"color-picker-container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ColorPicker__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            color: state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY,\n            disableAlpha: true,\n            onChange: function onChange(d) {\n              return dispatch({\n                type: 'COLOR',\n                color: d.hex\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1818633230\",\n      dynamic: [state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY],\n      children: \".modifier.__jsx-style-dynamic-selector{padding:0px 8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.colorizer.__jsx-style-dynamic-selector b.__jsx-style-dynamic-selector{font-weight:bold;}.colorizer.__jsx-style-dynamic-selector i.__jsx-style-dynamic-selector{font-style:italic;}.colorizer.__jsx-style-dynamic-selector button{min-width:20px;}.color-square.__jsx-style-dynamic-selector{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;border-radius:3px;padding:12px;margin:4px 0 4px auto;background:\".concat(state.color || _lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].PRIMARY, \";box-shadow:\", \"inset 0px 0px 0px \".concat(open ? 2 : 1, \"px \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY), \";}.color-picker-container.__jsx-style-dynamic-selector{width:218px;border-top:2px solid \").concat(_lib_constants__WEBPACK_IMPORTED_MODULE_9__[\"COLORS\"].SECONDARY, \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW1lbmd5dS9EZXNrdG9wL3ByaXZhdGUvY29kZS9wcm9qZWN0L3Nob3ctY29kZXMvY29tcG9uZW50cy9TZWxlY3Rpb25FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdTLEFBRzZCLEFBSUMsQUFHQyxBQUdILEFBR0EsQUFXSCxZQUNzQyxHQWRwRCxBQUdrQixDQWJILENBSWYsQ0FHQSw0Q0FrQkEsY0FYZSxhQUNELENBZGQsV0Flb0Isa0JBQ0wsYUFDUyxzQkFDa0Isd0NBQ0Esd0NBQzFDIiwiZmlsZSI6Ii9Vc2Vycy9saW1lbmd5dS9EZXNrdG9wL3ByaXZhdGUvY29kZS9wcm9qZWN0L3Nob3ctY29kZXMvY29tcG9uZW50cy9TZWxlY3Rpb25FZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VLZXlib2FyZExpc3RlbmVyIH0gZnJvbSAnYWN0aW9uc2FjaydcbmltcG9ydCBQb3BvdXQgZnJvbSAnLi9Qb3BvdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gJy4vQ29sb3JQaWNrZXInXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5mdW5jdGlvbiBNb2RpZmllckJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGZsZXg9ezB9XG4gICAgICBwYWRkaW5nPVwiMFwiXG4gICAgICBjZW50ZXJcbiAgICAgIG1hcmdpbj1cIjAgOHB4IDAgMFwiXG4gICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtwcm9wcy5zZWxlY3RlZCA/ICd3aGl0ZScgOiAndHJhbnNwYXJlbnQnfWAgfX1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQnV0dG9uPlxuICApXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQk9MRCc6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBib2xkOiAhc3RhdGUuYm9sZCxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnSVRBTElDUyc6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGFsaWNzOiAhc3RhdGUuaXRhbGljcyxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnVU5ERVJMSU5FJzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVuZGVybGluZTogTnVtYmVyKHN0YXRlLnVuZGVybGluZSArIDEpICUgMyxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnQ09MT1InOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29sb3I6IGFjdGlvbi5jb2xvcixcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFjdGlvbicpXG59XG5cbmZ1bmN0aW9uIFNlbGVjdGlvbkVkaXRvcih7IG9uQ2hhbmdlIH0pIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlS2V5Ym9hcmRMaXN0ZW5lcignRXNjYXBlJywgKCkgPT4gc2V0T3BlbihmYWxzZSkpXG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICBib2xkOiBudWxsLFxuICAgIGl0YWxpY3M6IG51bGwsXG4gICAgdW5kZXJsaW5lOiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICB9KVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25DaGFuZ2Uoc3RhdGUpXG4gIH0sIFtvbkNoYW5nZSwgc3RhdGVdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JpemVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kaWZpZXJcIj5cbiAgICAgICAgICA8TW9kaWZpZXJCdXR0b24gc2VsZWN0ZWQ9e3N0YXRlLmJvbGR9IG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0JPTEQnIH0pfT5cbiAgICAgICAgICAgIDxiPkI8L2I+XG4gICAgICAgICAgPC9Nb2RpZmllckJ1dHRvbj5cbiAgICAgICAgICA8TW9kaWZpZXJCdXR0b24gc2VsZWN0ZWQ9e3N0YXRlLml0YWxpY3N9IG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0lUQUxJQ1MnIH0pfT5cbiAgICAgICAgICAgIDxpPkk8L2k+XG4gICAgICAgICAgPC9Nb2RpZmllckJ1dHRvbj5cbiAgICAgICAgICA8TW9kaWZpZXJCdXR0b25cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzdGF0ZS51bmRlcmxpbmV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdVTkRFUkxJTkUnIH0pfVxuICAgICAgICAgICAgY29sb3I9e3N0YXRlLnVuZGVybGluZSA9PT0gMiA/IENPTE9SUy5SRUQgOiB1bmRlZmluZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHU+VTwvdT5cbiAgICAgICAgICA8L01vZGlmaWVyQnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29sb3Itc3F1YXJlXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihvID0+ICFvKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQb3BvdXQgaGlkZGVuPXshb3Blbn0gcG9pbnRlckxlZnQ9XCIxNnB4XCIgc3R5bGU9e3sgbGVmdDogODIgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgY29sb3I9e3N0YXRlLmNvbG9yIHx8IENPTE9SUy5QUklNQVJZfVxuICAgICAgICAgICAgICBkaXNhYmxlQWxwaGE9e3RydWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtkID0+IGRpc3BhdGNoKHsgdHlwZTogJ0NPTE9SJywgY29sb3I6IGQuaGV4IH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3BvdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1vZGlmaWVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sb3JpemVyIGIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2xvcml6ZXIgaSB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2xvcml6ZXIgOmdsb2JhbChidXR0b24pIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbG9yLXNxdWFyZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW46IDRweCAwIDRweCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtzdGF0ZS5jb2xvciB8fCBDT0xPUlMuUFJJTUFSWX07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAke2BpbnNldCAwcHggMHB4IDBweCAke29wZW4gPyAyIDogMX1weCAke0NPTE9SUy5TRUNPTkRBUll9YH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2xvci1waWNrZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMThweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke0NPTE9SUy5TRUNPTkRBUll9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uRWRpdG9yXG4iXX0= */\\n/*@ sourceURL=/Users/limengyu/Desktop/private/code/project/show-codes/components/SelectionEditor.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SelectionEditor, \"F/FnL/5eCGB4VlRYIdqDnjx+f54=\", false, function () {\n  return [actionsack__WEBPACK_IMPORTED_MODULE_5__[\"useKeyboardListener\"]];\n});\n\n_c2 = SelectionEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectionEditor);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ModifierButton\");\n$RefreshReg$(_c2, \"SelectionEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3Rpb25FZGl0b3IuanM/MjZhZSJdLCJuYW1lcyI6WyJNb2RpZmllckJ1dHRvbiIsInByb3BzIiwiYm9yZGVyQm90dG9tIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwiY29sb3IiLCJjaGlsZHJlbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJib2xkIiwiaXRhbGljcyIsInVuZGVybGluZSIsIk51bWJlciIsIkVycm9yIiwiU2VsZWN0aW9uRWRpdG9yIiwib25DaGFuZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJ1c2VLZXlib2FyZExpc3RlbmVyIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwicG9zaXRpb24iLCJDT0xPUlMiLCJQUklNQVJZIiwiU0VDT05EQVJZIiwiUkVEIiwidW5kZWZpbmVkIiwibyIsImxlZnQiLCJkIiwiaGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0Isc0JBQ0UscUVBQUMsK0NBQUQ7QUFDRSxRQUFJLEVBQUUsQ0FEUjtBQUVFLFdBQU8sRUFBQyxHQUZWO0FBR0UsVUFBTSxNQUhSO0FBSUUsVUFBTSxFQUFDLFdBSlQ7QUFLRSxTQUFLLEVBQUU7QUFBRUMsa0JBQVksc0JBQWVELEtBQUssQ0FBQ0UsUUFBTixHQUFpQixPQUFqQixHQUEyQixhQUExQztBQUFkLEtBTFQ7QUFNRSxXQUFPLEVBQUVGLEtBQUssQ0FBQ0csT0FOakI7QUFPRSxTQUFLLEVBQUVILEtBQUssQ0FBQ0ksS0FQZjtBQUFBLGNBU0dKLEtBQUssQ0FBQ0s7QUFUVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7S0FkUU4sYzs7QUFnQlQsU0FBU08sT0FBVCxDQUFpQkMsS0FB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O0FBQUE7QUFBQSxnQkFtRHNCM0IsS0FBSyxDQUFDSCxLQUFOLElBQWVzQixxREFBTSxDQUFDQyxPQW5ENUMsOEJBb0QyQ1IsSUFBSSxHQUFHLENBQUgsR0FBTyxDQXBEdEQsZ0JBb0Q2RE8scURBQU0sQ0FBQ0UsU0FwRHBFLEdBd0RnQ0YscURBQU0sQ0FBQ0UsU0F4RHZDO0FBQUEsOGxCQW1Ec0JyQixLQUFLLENBQUNILEtBQU4sSUFBZXNCLHFEQUFNLENBQUNDLE9BbkQ1Qyw4Q0FvRDJDUixJQUFJLEdBQUcsQ0FBSCxHQUFPLENBcER0RCxnQkFvRDZETyxxREFBTSxDQUFDRSxTQXBEcEUsc0dBd0RnQ0YscURBQU0sQ0FBQ0UsU0F4RHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErREQ7O0dBL0VRYixlO1VBR1BNLDhEOzs7TUFIT04sZTtBQWlGTUEsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdGlvbkVkaXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUtleWJvYXJkTGlzdGVuZXIgfSBmcm9tICdhY3Rpb25zYWNrJ1xuaW1wb3J0IFBvcG91dCBmcm9tICcuL1BvcG91dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSAnLi9Db2xvclBpY2tlcidcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5cbmZ1bmN0aW9uIE1vZGlmaWVyQnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgZmxleD17MH1cbiAgICAgIHBhZGRpbmc9XCIwXCJcbiAgICAgIGNlbnRlclxuICAgICAgbWFyZ2luPVwiMCA4cHggMCAwXCJcbiAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3Byb3BzLnNlbGVjdGVkID8gJ3doaXRlJyA6ICd0cmFuc3BhcmVudCd9YCB9fVxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgIGNvbG9yPXtwcm9wcy5jb2xvcn1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gIClcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdCT0xEJzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJvbGQ6ICFzdGF0ZS5ib2xkLFxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdJVEFMSUNTJzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0YWxpY3M6ICFzdGF0ZS5pdGFsaWNzLFxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdVTkRFUkxJTkUnOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdW5kZXJsaW5lOiBOdW1iZXIoc3RhdGUudW5kZXJsaW5lICsgMSkgJSAzLFxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdDT0xPUic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb2xvcjogYWN0aW9uLmNvbG9yLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWN0aW9uJylcbn1cblxuZnVuY3Rpb24gU2VsZWN0aW9uRWRpdG9yKHsgb25DaGFuZ2UgfSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICB1c2VLZXlib2FyZExpc3RlbmVyKCdFc2NhcGUnLCAoKSA9PiBzZXRPcGVuKGZhbHNlKSlcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGJvbGQ6IG51bGwsXG4gICAgaXRhbGljczogbnVsbCxcbiAgICB1bmRlcmxpbmU6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gIH0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkNoYW5nZShzdGF0ZSlcbiAgfSwgW29uQ2hhbmdlLCBzdGF0ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvcml6ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RpZmllclwiPlxuICAgICAgICAgIDxNb2RpZmllckJ1dHRvbiBzZWxlY3RlZD17c3RhdGUuYm9sZH0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnQk9MRCcgfSl9PlxuICAgICAgICAgICAgPGI+QjwvYj5cbiAgICAgICAgICA8L01vZGlmaWVyQnV0dG9uPlxuICAgICAgICAgIDxNb2RpZmllckJ1dHRvbiBzZWxlY3RlZD17c3RhdGUuaXRhbGljc30gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnSVRBTElDUycgfSl9PlxuICAgICAgICAgICAgPGk+STwvaT5cbiAgICAgICAgICA8L01vZGlmaWVyQnV0dG9uPlxuICAgICAgICAgIDxNb2RpZmllckJ1dHRvblxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXRlLnVuZGVybGluZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1VOREVSTElORScgfSl9XG4gICAgICAgICAgICBjb2xvcj17c3RhdGUudW5kZXJsaW5lID09PSAyID8gQ09MT1JTLlJFRCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dT5VPC91PlxuICAgICAgICAgIDwvTW9kaWZpZXJCdXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb2xvci1zcXVhcmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKG8gPT4gIW8pfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBvcG91dCBoaWRkZW49eyFvcGVufSBwb2ludGVyTGVmdD1cIjE2cHhcIiBzdHlsZT17eyBsZWZ0OiA4MiB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXBpY2tlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17c3RhdGUuY29sb3IgfHwgQ09MT1JTLlBSSU1BUll9XG4gICAgICAgICAgICAgIGRpc2FibGVBbHBoYT17dHJ1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2QgPT4gZGlzcGF0Y2goeyB0eXBlOiAnQ09MT1InLCBjb2xvcjogZC5oZXggfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BvcG91dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubW9kaWZpZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2xvcml6ZXIgYiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbG9yaXplciBpIHtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbG9yaXplciA6Z2xvYmFsKGJ1dHRvbikge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sb3Itc3F1YXJlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDAgNHB4IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3N0YXRlLmNvbG9yIHx8IENPTE9SUy5QUklNQVJZfTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7YGluc2V0IDBweCAwcHggMHB4ICR7b3BlbiA/IDIgOiAxfXB4ICR7Q09MT1JTLlNFQ09OREFSWX1gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbG9yLXBpY2tlci1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDIxOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR7Q09MT1JTLlNFQ09OREFSWX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb25FZGl0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SelectionEditor.js\n");

/***/ })

}]);