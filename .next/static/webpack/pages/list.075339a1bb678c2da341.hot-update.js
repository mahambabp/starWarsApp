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

 // import Pictures from "./Pictures";

var StarWarsCharacterLists = function StarWarsCharacterLists(props) {
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
      lineNumber: 6,
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
                  lineNumber: 18,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
                    children: swc.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 17
              }, _this),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
                children: ["@", swc.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, {
                image: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
                  name: swc.name,
                  picSize: "avatar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Description, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
                    children: swc.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: [" Average Height: ", swc.average_height]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Classification: ", swc.classification]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Hair Color: ", swc.hair_colors]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Skin Color: ", swc.skin_colors]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Eye Color: ", swc.eye_colors]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Homeworld: ", swc.homeworld]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
                      children: ["Films: ", swc.films]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 21
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, _this)
      }, swc.name, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = StarWarsCharacterLists;
/* harmony default export */ __webpack_exports__["default"] = (StarWarsCharacterLists);

var _c;

$RefreshReg$(_c, "StarWarsCharacterLists");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGFyV2Fyc0NoYXJhY3Rlckxpc3RzLmpzIl0sIm5hbWVzIjpbIlN0YXJXYXJzQ2hhcmFjdGVyTGlzdHMiLCJwcm9wcyIsIm1hcmdpblRvcCIsInN3YyIsInJlc3VsdHMiLCJtYXAiLCJtYXJnaW4iLCJuYW1lIiwiYXZlcmFnZV9oZWlnaHQiLCJjbGFzc2lmaWNhdGlvbiIsImhhaXJfY29sb3JzIiwic2tpbl9jb2xvcnMiLCJleWVfY29sb3JzIiwiaG9tZXdvcmxkIiwiZmlsbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFDLEtBQUs7QUFBQSxzQkFDbEMscUVBQUMsMkRBQUQ7QUFBVyxhQUFTLEVBQUMsUUFBckI7QUFBOEIsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQXJDO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxRQUFFLEVBQUMsSUFETDtBQUVFLGFBQU8sRUFBQyxvQkFGVjtBQUdFLGVBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU1HRCxLQUFLLENBQUNFLEdBQU4sQ0FBVUMsT0FBVixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQUYsR0FBRztBQUFBLDBCQUN4QixxRUFBQyxzREFBRDtBQUFNLGtCQUFVLE1BQWhCO0FBQWlCLGVBQU8sTUFBeEI7QUFBQSwrQkFDRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSxpQ0FDRSxxRUFBQyxzREFBRCxDQUFNLE9BQU47QUFBQSxtQ0FDRSxxRUFBQyx1REFBRDtBQUNFLHFCQUFPLGVBQ0wscUVBQUMsc0RBQUQ7QUFBTSxxQkFBSyxFQUFFO0FBQUVHLHdCQUFNLEVBQUU7QUFBVixpQkFBYjtBQUFBLHdDQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLHNCQUFJLEVBQUVILEdBQUcsQ0FBQ0k7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLHFFQUFDLHNEQUFELENBQU0sT0FBTjtBQUFBLHlDQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBLDhCQUFjSixHQUFHLENBQUNJO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBLHNDQVVFLHFFQUFDLHVEQUFELENBQU8sTUFBUDtBQUFBLGdDQUFnQkosR0FBRyxDQUFDSSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkYsZUFXRSxxRUFBQyx1REFBRCxDQUFPLE9BQVA7QUFBZSxxQkFBSyxNQUFwQjtBQUFBLHdDQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLHNCQUFJLEVBQUVKLEdBQUcsQ0FBQ0ksSUFBdkI7QUFBNkIseUJBQU8sRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUscUVBQUMsdURBQUQsQ0FBTyxXQUFQO0FBQUEsMENBQ0UscUVBQUMsd0RBQUQ7QUFBQSw4QkFBU0osR0FBRyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFBLDRDQUNFLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFBLHNEQUE2QkosR0FBRyxDQUFDSyxjQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSxxREFBNEJMLEdBQUcsQ0FBQ00sY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLGVBR0UscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEsaURBQXdCTixHQUFHLENBQUNPLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRixlQUlFLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFBLGlEQUF3QlAsR0FBRyxDQUFDUSxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkYsZUFLRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSxnREFBdUJSLEdBQUcsQ0FBQ1MsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGLGVBTUUscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUEsZ0RBQXVCVCxHQUFHLENBQUNVLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORixlQU9FLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFBLDRDQUFtQlYsR0FBRyxDQUFDVyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUE4QlgsR0FBRyxDQUFDSSxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCO0FBQUEsS0FBekIsQ0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0M7QUFBQSxDQUFwQzs7S0FBTVAsc0I7QUE2Q1NBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpc3QuMDc1MzM5YTFiYjY3OGMyZGEzNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QsIENvbnRhaW5lciwgSGVhZGVyLCBNb2RhbCwgQ2FyZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG4vLyBpbXBvcnQgUGljdHVyZXMgZnJvbSBcIi4vUGljdHVyZXNcIjtcclxuXHJcbmNvbnN0IFN0YXJXYXJzQ2hhcmFjdGVyTGlzdHMgPSBwcm9wcyA9PiAoXHJcbiAgPENvbnRhaW5lciB0ZXh0QWxpZ249XCJjZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiN2VtXCIgfX0+XHJcbiAgICA8SGVhZGVyXHJcbiAgICAgIGFzPVwiaDFcIlxyXG4gICAgICBjb250ZW50PVwiU3RhciBXYXJzIFNwZWNpZXMgXCJcclxuICAgICAgc3ViaGVhZGVyPVwiQ2xpY2sgb24gYnV0dG9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblwiXHJcbiAgICAvPlxyXG4gICAge3Byb3BzLnN3Yy5yZXN1bHRzLm1hcChzd2MgPT4gKFxyXG4gICAgICA8TGlzdCBob3Jpem9udGFsIHJlbGF4ZWQga2V5PXtzd2MubmFtZX0+XHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgbmFtZT17c3djLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPntzd2MubmFtZX08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyPkB7c3djLm5hbWV9PC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgbmFtZT17c3djLm5hbWV9IHBpY1NpemU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyPntzd2MubmFtZX08L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT4gQXZlcmFnZSBIZWlnaHQ6IHtzd2MuYXZlcmFnZV9oZWlnaHQgfTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+Q2xhc3NpZmljYXRpb246IHtzd2MuY2xhc3NpZmljYXRpb24gfTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+SGFpciBDb2xvcjoge3N3Yy5oYWlyX2NvbG9yc308L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlNraW4gQ29sb3I6IHtzd2Muc2tpbl9jb2xvcnN9PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5FeWUgQ29sb3I6IHtzd2MuZXllX2NvbG9yc308L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPkhvbWV3b3JsZDoge3N3Yy5ob21ld29ybGQgfTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+RmlsbXM6IHtzd2MuZmlsbXMgfTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICApKX1cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJXYXJzQ2hhcmFjdGVyTGlzdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=