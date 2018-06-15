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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(0);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./theme.js
var white = '#FFFFFF';
var black = '#000000';
var blue = '#01295f';
var darkblue = '#14213d';
var orange = '#fca311';
/* harmony default export */ var theme = ({
  white: white,
  black: black,
  blue: blue,
  darkblue: darkblue,
  orange: orange
});
// CONCATENATED MODULE: ./components/page.js





var page_Page = function Page(_ref) {
  var children = _ref.children;
  return external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["33768748", [theme.darkblue]]]) + " " + 'page-root'
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", {
    className: style__default.a.dynamic([["33768748", [theme.darkblue]]])
  }, "Josh Marchello"), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: style__default.a.dynamic([["33768748", [theme.darkblue]]])
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/static/marshmello.png",
    className: style__default.a.dynamic([["33768748", [theme.darkblue]]])
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "33768748",
    css: ["@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans.ttf\");}", "@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-Bold.ttf\");font-weight:bold;}", "@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-Oblique.ttf\");font-style:italic;}", "@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-BoldOblique.ttf\");font-weight:bold;font-style:italic;}", "@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-Oblique.ttf\");font-style:oblique;}", "@font-face{font-family:\"DejaVu Sans\";src:url(\"fonts/DejaVuSans-BoldOblique.ttf\");font-weight:bold;font-style:oblique;}", "*{box-sizing:border-box;}", "html,body,.page-root{background-color:".concat(theme.darkblue, ";padding:0;margin:0;height:100vh;font-size:1.25rem;font-family:\"DejaVu Sans\",\"Sans\";}")],
    dynamic: [theme.darkblue]
  }), children);
};

/* harmony default export */ var page = (page_Page);
// CONCATENATED MODULE: ./components/header.js




var header_Header = function Header() {
  return external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["680146376", [theme.orange]]]) + " " + 'header'
  }, external__react__default.a.createElement(style__default.a, {
    styleId: "680146376",
    css: [".header.__jsx-style-dynamic-selector{height:200px;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".title.__jsx-style-dynamic-selector{padding:.5rem 1rem;-webkit-flex:1;-ms-flex:1;flex:1;text-align:left;color:".concat(theme.orange, ";font-weight:bold;}")],
    dynamic: [theme.orange]
  }), external__react__default.a.createElement("span", {
    className: style__default.a.dynamic([["680146376", [theme.orange]]]) + " " + 'title'
  }, "Josh Marchello"));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./pages/index.js






var pages_Index = function Index() {
  return external__react__default.a.createElement(page, null, external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["3162286892", [theme.orange]]]) + " " + 'header-container'
  }, external__react__default.a.createElement("img", {
    src: "/static/marshmello.gif",
    className: style__default.a.dynamic([["3162286892", [theme.orange]]]) + " " + 'intro-image'
  }), external__react__default.a.createElement("img", {
    src: "/static/marshmello.png",
    className: style__default.a.dynamic([["3162286892", [theme.orange]]]) + " " + 'header-image'
  })), external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["3162286892", [theme.orange]]]) + " " + 'intro-container'
  }, external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["3162286892", [theme.orange]]]) + " " + 'typing-container'
  }, external__react__default.a.createElement("span", {
    className: style__default.a.dynamic([["3162286892", [theme.orange]]]) + " " + 'typing-text'
  }, "Hi! I'm Josh Marchello."))), external__react__default.a.createElement(style__default.a, {
    styleId: "3162286892",
    css: [".header-container.__jsx-style-dynamic-selector,.intro-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-container.__jsx-style-dynamic-selector{-webkit-animation:header-intro-__jsx-style-dynamic-selector 1s 3s ease forwards;animation:header-intro-__jsx-style-dynamic-selector 1s 3s ease forwards;}", ".intro-image.__jsx-style-dynamic-selector{width:200px;height:auto;margin:5rem 0;-webkit-animation:image-intro-__jsx-style-dynamic-selector 1s 3s linear forwards,disappear-__jsx-style-dynamic-selector 0s 4s forwards;animation:image-intro-__jsx-style-dynamic-selector 1s 3s linear forwards,disappear-__jsx-style-dynamic-selector 0s 4s forwards;}", ".header-image.__jsx-style-dynamic-selector{margin:1rem;width:50px;height:auto;opacity:0;position:absolute;-webkit-animation:appear-__jsx-style-dynamic-selector 0s 4s forwards;animation:appear-__jsx-style-dynamic-selector 0s 4s forwards;}", ".typing-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;white-space:nowrap;-webkit-animation:typing-__jsx-style-dynamic-selector 2s steps(23,end) forwards;animation:typing-__jsx-style-dynamic-selector 2s steps(23,end) forwards;}", ".intro-container.__jsx-style-dynamic-selector{-webkit-animation:disappear-__jsx-style-dynamic-selector 0s 3s forwards;animation:disappear-__jsx-style-dynamic-selector 0s 3s forwards;}", ".typing-text.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;color:".concat(theme.orange, ";font-size:1.5rem;font-weight:bold;text-align:center;}"), "@-webkit-keyframes typing-__jsx-style-dynamic-selector{from{width:0;}to{width:380px;}}", "@keyframes typing-__jsx-style-dynamic-selector{from{width:0;}to{width:380px;}}", "@-webkit-keyframes disappear-__jsx-style-dynamic-selector{from{opacity:1;position:static;}to{opacity:0;position:absolute;}}", "@keyframes disappear-__jsx-style-dynamic-selector{from{opacity:1;position:static;}to{opacity:0;position:absolute;}}", "@-webkit-keyframes header-intro-__jsx-style-dynamic-selector{0%{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}1%{padding-left:40vw;}5%{padding-left:40vw;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}100%{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0;}}", "@keyframes header-intro-__jsx-style-dynamic-selector{0%{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}1%{padding-left:40vw;}5%{padding-left:40vw;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}100%{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0;}}", "@-webkit-keyframes image-intro-__jsx-style-dynamic-selector{from{margin:5rem 0;width:200px;}to{margin:1rem;width:50px;}}", "@keyframes image-intro-__jsx-style-dynamic-selector{from{margin:5rem 0;width:200px;}to{margin:1rem;width:50px;}}", "@-webkit-keyframes appear-__jsx-style-dynamic-selector{from{position:absolute;opacity:0;}to{position:static;opacity:1;}}", "@keyframes appear-__jsx-style-dynamic-selector{from{position:absolute;opacity:0;}to{position:static;opacity:1;}}"],
    dynamic: [theme.orange]
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);