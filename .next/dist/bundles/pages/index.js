module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("./theme.js");
var _jsxFileName = "/Users/jmarchello/dev/mystuff/jmarchello/components/header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["680146376", [__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* default */].orange]]]) + " " + 'header'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "680146376",
    css: ".header.__jsx-style-dynamic-selector{height:200px;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.title.__jsx-style-dynamic-selector{padding:.5rem 1rem;-webkit-flex:1;-ms-flex:1;flex:1;text-align:left;color:".concat(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* default */].orange, ";font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtPLEFBR3dCLEFBTU0sYUFMUCxNQU1MLE1BTE0sMkJBTUcsZ0JBQ21CLCtCQU5yQyxJQU9tQixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptYXJjaGVsbG8vZGV2L215c3R1ZmYvam1hcmNoZWxsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLm9yYW5nZX07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlJz5Kb3NoIE1hcmNoZWxsbzwvc3Bhbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=components/header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* default */].orange]
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["680146376", [__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* default */].orange]]]) + " " + 'title'
  }, "Josh Marchello"));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Header);

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme__ = __webpack_require__("./theme.js");
var _jsxFileName = "/Users/jmarchello/dev/mystuff/jmarchello/components/page.js";





var Page = function Page(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["33768748", [__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* default */].darkblue]]]) + " " + 'page-root'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["33768748", [__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* default */].darkblue]]])
  }, "Josh Marchello"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["33768748", [__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* default */].darkblue]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "33768748",
    css: "@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans.ttf\");}@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-Bold.ttf\");font-weight:bold;}@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-Oblique.ttf\");font-style:italic;}@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-BoldOblique.ttf\");font-weight:bold;font-style:italic;}@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-Oblique.ttf\");font-style:oblique;}@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-BoldOblique.ttf\");font-weight:bold;font-style:oblique;}*{box-sizing:border-box;}html,body,.page-root{background-color:".concat(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* default */].darkblue, ";padding:0;margin:0;height:100vh;font-size:1.25rem;font-family:\"DejaVu Sans\",\"Sans\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVUyxBQUd5QyxBQUlBLEFBS0EsQUFLQSxBQU1BLEFBS0EsQUFPTixBQUl3QixzQkFIaEQsSUFoQ29DLEFBSUssQUFLRyxBQUtJLEFBTUosQUFLSSxvQkFXcEMsVUFDRCxFQXBDWCxLQUlxQixFQWlDTixDQTVCTyxBQVdDLElBTkYsQUFXQSxRQWFELEVBakNwQixJQUtBLENBV0EsRUFOc0IsQUFXQyxTQWFhLFNBdkJwQyxDQVdBLHVCQWFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1hcmNoZWxsby9kZXYvbXlzdHVmZi9qbWFyY2hlbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmNvbnN0IFBhZ2UgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BhZ2Utcm9vdCc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkpvc2ggTWFyY2hlbGxvPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRlamFWdSBTYW5zXCI7XG4gICAgICAgICAgICAgIHNyYzogdXJsKFwiZm9udHMvRGVqYVZ1U2Fucy50dGZcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJEZWphVnUgU2Fuc1wiO1xuICAgICAgICAgICAgICBzcmM6IHVybChcImZvbnRzL0RlamFWdVNhbnMtQm9sZC50dGZcIik7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRGVqYVZ1IFNhbnNcIjtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoXCJmb250cy9EZWphVnVTYW5zLU9ibGlxdWUudHRmXCIpO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJEZWphVnUgU2Fuc1wiO1xuICAgICAgICAgICAgICBzcmM6IHVybChcImZvbnRzL0RlamFWdVNhbnMtQm9sZE9ibGlxdWUudHRmXCIpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRGVqYVZ1IFNhbnNcIjtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoXCJmb250cy9EZWphVnVTYW5zLU9ibGlxdWUudHRmXCIpO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRGVqYVZ1IFNhbnNcIjtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoXCJmb250cy9EZWphVnVTYW5zLUJvbGRPYmxpcXVlLnR0ZlwiKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsIGJvZHksIC5wYWdlLXJvb3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5kYXJrYmx1ZX07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRlamFWdSBTYW5zXCIsIFwiU2Fuc1wiO1xuICAgICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXX0= */\n/*@ sourceURL=components/page.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* default */].darkblue]
  }), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header__ = __webpack_require__("./components/header.js");
var _jsxFileName = "/Users/jmarchello/dev/mystuff/jmarchello/pages/index.js";





var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_page__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1712779119" + " " + 'marshmello-container'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/marshmello.gif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1712779119"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1712779119",
    css: ".marshmello-container.jsx-1712779119{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBR3dCLDBFQUNVLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1hcmNoZWxsby9kZXYvbXlzdHVmZi9qbWFyY2hlbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPFBhZ2U+XG4gICAgPGRpdiBjbGFzc05hbWU9J21hcnNobWVsbG8tY29udGFpbmVyJz5cbiAgICAgIDxpbWcgc3JjPScvc3RhdGljL21hcnNobWVsbG8uZ2lmJyAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5tYXJzaG1lbGxvLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUGFnZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=pages/index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var white = '#FFFFFF';
var black = '#000000';
var blue = '#01295f';
var darkblue = '#14213d';
var orange = '#fca311';
/* harmony default export */ __webpack_exports__["a"] = ({
  white: white,
  black: black,
  blue: blue,
  darkblue: darkblue,
  orange: orange
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map