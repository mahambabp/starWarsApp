webpackHotUpdate_N_E("pages/list",{

/***/ "./components/StarWarsCharacterLists.js":
/*!**********************************************!*\
  !*** ./components/StarWarsCharacterLists.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "C:\\Users\\BafanaMahamba\\Downloads\\Playground\\starWarsApi\\components\\StarWarsCharacterLists.js",
    _this = undefined;

 //Species characteristics

var StarWarsSpeciesLists = function StarWarsSpeciesLists(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: "center",
    style: {
      marginTop: "7em"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h1",
      content: "Star Wars Species ",
      subheader: "Click on button for detailed information"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this), props.swc.results.map(function (swc) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
        horizontal: true,
        relaxed: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
              trigger: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
                style: {
                  margin: "5px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
                  name: swc.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
                    children: swc.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, _this),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
                children: ["@", swc.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
                image: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
                  name: swc.name,
                  picSize: "avatar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Description, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
                    children: swc.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: [" Average Height: ", swc.average_height]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Classification: ", swc.classification]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Hair Color: ", swc.hair_colors]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Skin Color: ", swc.skin_colors]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Eye Color: ", swc.eye_colors]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Homeworld: ", swc.homeworld]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Films: ", swc.films]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 21
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this)
      }, swc.name, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

_c = StarWarsSpeciesLists;
/* harmony default export */ __webpack_exports__["default"] = (StarWarsSpeciesLists);

var _c;

$RefreshReg$(_c, "StarWarsSpeciesLists");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGFyV2Fyc0NoYXJhY3Rlckxpc3RzLmpzIl0sIm5hbWVzIjpbIlN0YXJXYXJzU3BlY2llc0xpc3RzIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJzd2MiLCJyZXN1bHRzIiwibWFwIiwibWFyZ2luIiwibmFtZSIsImF2ZXJhZ2VfaGVpZ2h0IiwiY2xhc3NpZmljYXRpb24iLCJoYWlyX2NvbG9ycyIsInNraW5fY29sb3JzIiwiZXllX2NvbG9ycyIsImhvbWV3b3JsZCIsImZpbG1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBR0E7O0FBQ0EsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsc0JBQ2hDLHFFQUFDLDJEQUFEO0FBQVcsYUFBUyxFQUFDLFFBQXJCO0FBQThCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFyQztBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsUUFBRSxFQUFDLElBREw7QUFFRSxhQUFPLEVBQUMsb0JBRlY7QUFHRSxlQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFNR0QsS0FBSyxDQUFDRSxHQUFOLENBQVVDLE9BQVYsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFGLEdBQUc7QUFBQSwwQkFDeEIscUVBQUMsc0RBQUQ7QUFBTSxrQkFBVSxNQUFoQjtBQUFpQixlQUFPLE1BQXhCO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEsaUNBQ0UscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQUEsbUNBQ0UscUVBQUMsdURBQUQ7QUFDRSxxQkFBTyxlQUNMLHFFQUFDLHNEQUFEO0FBQU0scUJBQUssRUFBRTtBQUFFRyx3QkFBTSxFQUFFO0FBQVYsaUJBQWI7QUFBQSx3Q0FDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxzQkFBSSxFQUFFSCxHQUFHLENBQUNJO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSxxRUFBQyxzREFBRCxDQUFNLE9BQU47QUFBQSx5Q0FDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQSw4QkFBY0osR0FBRyxDQUFDSTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQSxzQ0FVRSxxRUFBQyx1REFBRCxDQUFPLE1BQVA7QUFBQSxnQ0FBZ0JKLEdBQUcsQ0FBQ0ksSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGLGVBV0UscUVBQUMsdURBQUQsQ0FBTyxPQUFQO0FBQWUscUJBQUssTUFBcEI7QUFBQSx3Q0FDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxzQkFBSSxFQUFFSixHQUFHLENBQUNJLElBQXZCO0FBQTZCLHlCQUFPLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLHFFQUFDLHVEQUFELENBQU8sV0FBUDtBQUFBLDBDQUNFLHFFQUFDLHdEQUFEO0FBQUEsOEJBQVNKLEdBQUcsQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUUscUVBQUMsc0RBQUQ7QUFBQSw0Q0FDRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSxzREFBNkJKLEdBQUcsQ0FBQ0ssY0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUUscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEscURBQTRCTCxHQUFHLENBQUNNLGNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRixlQUdFLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFBLGlEQUF3Qk4sR0FBRyxDQUFDTyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEYsZUFJRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSxpREFBd0JQLEdBQUcsQ0FBQ1EsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGLGVBS0UscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEsZ0RBQXVCUixHQUFHLENBQUNTLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFMRixlQU1FLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFBLGdEQUF1QlQsR0FBRyxDQUFDVSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkYsZUFPRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSw0Q0FBbUJWLEdBQUcsQ0FBQ1csS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBOEJYLEdBQUcsQ0FBQ0ksSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QjtBQUFBLEtBQXpCLENBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdDO0FBQUEsQ0FBbEM7O0tBQU1QLG9CO0FBNkNTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saXN0LmMxZjk2NmU0OTQ4ZmIyMDMwN2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0LCBDb250YWluZXIsIEhlYWRlciwgTW9kYWwsIENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcblxyXG4vL1NwZWNpZXMgY2hhcmFjdGVyaXN0aWNzXHJcbmNvbnN0IFN0YXJXYXJzU3BlY2llc0xpc3RzID0gcHJvcHMgPT4gKFxyXG4gIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjdlbVwiIH19PlxyXG4gICAgPEhlYWRlclxyXG4gICAgICBhcz1cImgxXCJcclxuICAgICAgY29udGVudD1cIlN0YXIgV2FycyBTcGVjaWVzIFwiXHJcbiAgICAgIHN1YmhlYWRlcj1cIkNsaWNrIG9uIGJ1dHRvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cIlxyXG4gICAgLz5cclxuICAgIHtwcm9wcy5zd2MucmVzdWx0cy5tYXAoc3djID0+IChcclxuICAgICAgPExpc3QgaG9yaXpvbnRhbCByZWxheGVkIGtleT17c3djLm5hbWV9PlxyXG4gICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIG5hbWU9e3N3Yy5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj57c3djLm5hbWV9PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5Ae3N3Yy5uYW1lfTwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50IGltYWdlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyIG5hbWU9e3N3Yy5uYW1lfSBwaWNTaXplPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlcj57c3djLm5hbWV9PC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+IEF2ZXJhZ2UgSGVpZ2h0OiB7c3djLmF2ZXJhZ2VfaGVpZ2h0IH08L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPkNsYXNzaWZpY2F0aW9uOiB7c3djLmNsYXNzaWZpY2F0aW9uIH08L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPkhhaXIgQ29sb3I6IHtzd2MuaGFpcl9jb2xvcnN9PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5Ta2luIENvbG9yOiB7c3djLnNraW5fY29sb3JzfTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+RXllIENvbG9yOiB7c3djLmV5ZV9jb2xvcnN9PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5Ib21ld29ybGQ6IHtzd2MuaG9tZXdvcmxkIH08L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPkZpbG1zOiB7c3djLmZpbG1zIH08L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgKSl9XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyV2Fyc1NwZWNpZXNMaXN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==