/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpeg */ "./src/images/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Niconne&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --blue-gray: #dbd8e3;
  --black: #1a1c1e;
  --white: #f2f2f2;
  --purple: #5c5470;
  --darkest-purple: #2a2438;
  --light-pink: #ffcbcb;
  --pink: #f76b8a;
  --bluish: #66bfbf;
  --true-navy: #132743;
  --translucent-gray: rgba(219, 216, 227, 0.7);
  --bg-cover-color: rgba(0, 0, 0, 0.6);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

*:not(i) {
  font-family: 'Lato', sans-serif;
}

body {
  font-size: 1.7rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  background-size: cover;
  color: var(--darkest-purple);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Header */

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background-color: var(--translucent-gray);
}

h1.name {
  text-align: center;
  padding-bottom: 15px;
}

.button-nav::before,
.button-nav::after {
  position: absolute;
  content: '';
}

.button-nav {
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 25px 15px;
  min-width: 150px;
}

.button-nav span {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.button-nav::before {
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
}

.button-nav span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

.hover-filled-slide-down::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}

.hover-filled-slide-down:hover::before,
.hover-filled-slide-down.active::before {
  height: 0%;
}

.button-nav.hover-filled-slide-down.active span {
  color: rgb(28, 31, 30);
}

/* Home */
.home {
  min-height: 90vh;
  padding: 2rem 10rem;
  text-align: center;
  display: grid;
  place-content: center;
  gap: 2rem;
  background-color: var(--bg-cover-color);
  color: var(--white);
  animation: fadeIn 1.5s;
}

.welcome {
  font-family: 'Niconne', cursive;
  font-size: 2rem;
}

.tagline {
  font-weight: 900;
  font-size: 3rem;
}

.message {
  font-weight: 300;
  font-size: 1.5rem;
}

.actionButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}

main button:first-child {
  background-color: var(--pink);
  border: 2px solid var(--pink);
}

main button {
  padding: 0.7rem 1.5rem;
  background-color: var(--bg-cover-color);
}

button {
  width: 10rem;
  border-radius: 3px;
  border: 2px solid var(--white);
  text-transform: uppercase;
  color: var(--white);
  cursor: pointer;
}

/* Menu */
.menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-content: center;
  gap: 1rem;
  padding: 2rem 10rem;
  animation: fadeIn 1.5s;
}

.card {
  color: var(--white);
  width: 100%;
  height: 100%;
  place-self: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--bg-cover-color);
}

.meal-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.meal-description {
  font-size: 0.9rem;
}

.meal-price {
  font-size: 1rem;
  width: 30%;
  color: var(--darkest-purple);
  background-color: var(--pink);
  align-self: center;
  border-radius: 3px 4px 4px 3px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 60%;
}

/* Contact */
.contact {
  grid-template-areas:
    'contact contact'
    'form map';
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2rem auto;
  min-height: 90vh;
  padding: 2rem 10rem;
  text-align: center;
  display: grid;
  place-content: center;
  animation: fadeIn 1.5s;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--bg-cover-color);
  gap: 1rem;
}

.contact img {
  grid-area: map;
  width: 300px;
  height: 350px;
  align-self: center;
}

.contactDetails {
  grid-area: contact;
  padding: 2rem;
}

.contactForm {
  grid-area: form;
  display: grid;
  padding: 5rem 2rem;
}

.form-field {
  display: grid;
  grid-template-areas: 'label field';
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  margin-bottom: 1rem;
}

label {
  min-width: 4rem;
  text-align: right;
  grid-area: label;
}

input {
  height: 2rem;
}

textarea {
  height: 15rem;
  resize: none;
}

input,
textarea {
  grid-area: field;
  padding: 1rem 1rem;
  outline: none;
  border-radius: 3px;
}

.contactUsButton {
  background-color: var(--pink);
  border: none;
  border-radius: 3px;
  justify-self: end;
}

/* Footer */
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--translucent-gray);
  color: var(--darkest-purple);
  font-size: 1.2rem;
}

.fa-github {
  font-size: 1.3rem;
  color: var(--darkest-purple);
}

/* Animations */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Media Queries */
@media (max-width: 700px) {
  nav {
    display: flex;
  }

  .button-nav {
    min-width: 0px;
    margin: 0px 10px 15px;
  }

  .button-nav span {
    display: flex;
    justify-content: center;
  }

  .home {
    gap: 5rem;
  }

  .contact {
    grid-template-areas:
      'contact contact'
      'form form'
      'map map';
  }
}
@media (max-width: 500px) {
  html {
    font-size: 57%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');\n\n:root {\n  --blue-gray: #dbd8e3;\n  --black: #1a1c1e;\n  --white: #f2f2f2;\n  --purple: #5c5470;\n  --darkest-purple: #2a2438;\n  --light-pink: #ffcbcb;\n  --pink: #f76b8a;\n  --bluish: #66bfbf;\n  --true-navy: #132743;\n  --translucent-gray: rgba(219, 216, 227, 0.7);\n  --bg-cover-color: rgba(0, 0, 0, 0.6);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n*:not(i) {\n  font-family: 'Lato', sans-serif;\n}\n\nbody {\n  font-size: 1.7rem;\n  background-image: url('./images/background.jpeg');\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--darkest-purple);\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 1rem;\n  background-color: var(--translucent-gray);\n}\n\nh1.name {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.button-nav::before,\n.button-nav::after {\n  position: absolute;\n  content: '';\n}\n\n.button-nav {\n  position: relative;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin: 0px 25px 15px;\n  min-width: 150px;\n}\n\n.button-nav span {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px 20px;\n  color: rgb(255, 255, 255);\n  border: 1px solid rgb(28, 31, 30);\n  transition: 0.2s 0.1s;\n}\n.button-nav::before {\n  background-color: rgb(28, 31, 30);\n  transition: 0.3s ease-out;\n}\n\n.button-nav span:hover {\n  color: rgb(28, 31, 30);\n  transition: 0.2s 0.1s;\n}\n\n.hover-filled-slide-down::before {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.hover-filled-slide-down:hover::before,\n.hover-filled-slide-down.active::before {\n  height: 0%;\n}\n\n.button-nav.hover-filled-slide-down.active span {\n  color: rgb(28, 31, 30);\n}\n\n/* Home */\n.home {\n  min-height: 90vh;\n  padding: 2rem 10rem;\n  text-align: center;\n  display: grid;\n  place-content: center;\n  gap: 2rem;\n  background-color: var(--bg-cover-color);\n  color: var(--white);\n  animation: fadeIn 1.5s;\n}\n\n.welcome {\n  font-family: 'Niconne', cursive;\n  font-size: 2rem;\n}\n\n.tagline {\n  font-weight: 900;\n  font-size: 3rem;\n}\n\n.message {\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.actionButtons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.2rem;\n}\n\nmain button:first-child {\n  background-color: var(--pink);\n  border: 2px solid var(--pink);\n}\n\nmain button {\n  padding: 0.7rem 1.5rem;\n  background-color: var(--bg-cover-color);\n}\n\nbutton {\n  width: 10rem;\n  border-radius: 3px;\n  border: 2px solid var(--white);\n  text-transform: uppercase;\n  color: var(--white);\n  cursor: pointer;\n}\n\n/* Menu */\n.menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  place-content: center;\n  gap: 1rem;\n  padding: 2rem 10rem;\n  animation: fadeIn 1.5s;\n}\n\n.card {\n  color: var(--white);\n  width: 100%;\n  height: 100%;\n  place-self: center;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--bg-cover-color);\n}\n\n.meal-name {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.meal-description {\n  font-size: 0.9rem;\n}\n\n.meal-price {\n  font-size: 1rem;\n  width: 30%;\n  color: var(--darkest-purple);\n  background-color: var(--pink);\n  align-self: center;\n  border-radius: 3px 4px 4px 3px;\n  text-align: center;\n}\n\n.card img {\n  width: 100%;\n  height: 60%;\n}\n\n/* Contact */\n.contact {\n  grid-template-areas:\n    'contact contact'\n    'form map';\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 2rem auto;\n  min-height: 90vh;\n  padding: 2rem 10rem;\n  text-align: center;\n  display: grid;\n  place-content: center;\n  animation: fadeIn 1.5s;\n  font-size: 1rem;\n  color: var(--white);\n  background-color: var(--bg-cover-color);\n  gap: 1rem;\n}\n\n.contact img {\n  grid-area: map;\n  width: 300px;\n  height: 350px;\n  align-self: center;\n}\n\n.contactDetails {\n  grid-area: contact;\n  padding: 2rem;\n}\n\n.contactForm {\n  grid-area: form;\n  display: grid;\n  padding: 5rem 2rem;\n}\n\n.form-field {\n  display: grid;\n  grid-template-areas: 'label field';\n  grid-template-columns: 1fr 3fr;\n  gap: 2rem;\n  margin-bottom: 1rem;\n}\n\nlabel {\n  min-width: 4rem;\n  text-align: right;\n  grid-area: label;\n}\n\ninput {\n  height: 2rem;\n}\n\ntextarea {\n  height: 15rem;\n  resize: none;\n}\n\ninput,\ntextarea {\n  grid-area: field;\n  padding: 1rem 1rem;\n  outline: none;\n  border-radius: 3px;\n}\n\n.contactUsButton {\n  background-color: var(--pink);\n  border: none;\n  border-radius: 3px;\n  justify-self: end;\n}\n\n/* Footer */\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n  width: 100%;\n  padding: 1rem;\n  background-color: var(--translucent-gray);\n  color: var(--darkest-purple);\n  font-size: 1.2rem;\n}\n\n.fa-github {\n  font-size: 1.3rem;\n  color: var(--darkest-purple);\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media Queries */\n@media (max-width: 700px) {\n  nav {\n    display: flex;\n  }\n\n  .button-nav {\n    min-width: 0px;\n    margin: 0px 10px 15px;\n  }\n\n  .button-nav span {\n    display: flex;\n    justify-content: center;\n  }\n\n  .home {\n    gap: 5rem;\n  }\n\n  .contact {\n    grid-template-areas:\n      'contact contact'\n      'form form'\n      'map map';\n  }\n}\n@media (max-width: 500px) {\n  html {\n    font-size: 57%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map.png */ "./src/images/map.png");


const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactDetails = document.createElement('div');
  contactDetails.classList.add('contactDetails');
  const phone = document.createElement('p');
  phone.textContent = '📞 (044) 1234-5678';
  const address = document.createElement('p');
  address.textContent = '🏠 Sunshine Falls, Pandi, Bulacan';
  contactDetails.append(phone, address);

  const map = document.createElement('img');
  map.src = _images_map_png__WEBPACK_IMPORTED_MODULE_0__;
  map.alt = 'Cafe San Diego restaurant location';

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.classList.add('contactForm');
  const nameFormField = document.createElement('div');
  const emailFormField = document.createElement('div');
  const messageFormField = document.createElement('div');
  nameFormField.className = 'form-field';
  emailFormField.className = 'form-field';
  messageFormField.className = 'form-field';

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.classList.add('contactUsButton');
  submitBtn.textContent = 'Send';

  const nameLabel = document.createElement('label');
  const emailLabel = document.createElement('label');
  const messageLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name';
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Email';
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Message';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('required', 'required');

  const emailInput = document.createElement('input');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('required', 'required');

  const messageTextarea = document.createElement('textarea');
  messageTextarea.setAttribute('id', 'message');
  messageTextarea.setAttribute('type', 'textarea');

  nameFormField.append(nameLabel, nameInput);
  emailFormField.append(emailLabel, emailInput);
  messageFormField.append(messageLabel, messageTextarea);

  form.append(nameFormField, emailFormField, messageFormField, submitBtn);

  contact.append(contactDetails, form, map);

  return contact;
};

const loadContact = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const welcome = createParagraph('Welcome to Cafe San Diego');
  welcome.classList.add('welcome');

  const tagline = createParagraph('Where flavor meets tradition');
  tagline.classList.add('tagline');

  const message = createParagraph(
    'Explore our best menu and taste the difference of our Asian comfort food.'
  );
  message.classList.add('message');

  const actionButtons = document.createElement('div');
  actionButtons.classList.add('actionButtons');
  const menuButton = createButton('Our Menu');
  menuButton.setAttribute('id', 'menu-button');
  const contactButton = createButton('Contact Us');
  actionButtons.append(menuButton, contactButton);

  home.append(welcome, tagline, message, actionButtons);

  return home;
};

const loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
};

const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
};

const createButton = (text) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  return btn;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant_project_src_components_createMealCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../restaurant-project/src/components/createMealCard */ "../restaurant-project/src/components/createMealCard.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");



const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((menuItem) => {
    const card = createCard(menuItem);
    menu.appendChild(card);
  });

  return menu;
};

const createCard = (menuItem) => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = new Image();
  img.src = menuItem.image;

  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';

  const mealName = document.createElement('p');
  mealName.className = 'meal-name';
  mealName.textContent = menuItem.name;

  const description = document.createElement('p');
  description.className = 'meal-description';
  description.textContent = menuItem.description;

  infoDiv.append(mealName, description);

  const price = document.createElement('span');
  price.className = 'meal-price';
  price.textContent = menuItem.price;

  card.append(img, infoDiv, price);
  return card;
};

const loadMenu = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_menu_items_bacon_fried_chicken_steaks_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu-items/bacon-fried-chicken-steaks.jpeg */ "./src/images/menu-items/bacon-fried-chicken-steaks.jpeg");
/* harmony import */ var _images_menu_items_blueberry_pancakes_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu-items/blueberry-pancakes.jpeg */ "./src/images/menu-items/blueberry-pancakes.jpeg");
/* harmony import */ var _images_menu_items_caesar_fillet_sandwich_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu-items/caesar-fillet-sandwich.jpeg */ "./src/images/menu-items/caesar-fillet-sandwich.jpeg");
/* harmony import */ var _images_menu_items_chicken_empanada_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu-items/chicken-empanada.jpeg */ "./src/images/menu-items/chicken-empanada.jpeg");
/* harmony import */ var _images_menu_items_dark_chocolate_tiramisu_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu-items/dark-chocolate-tiramisu.jpeg */ "./src/images/menu-items/dark-chocolate-tiramisu.jpeg");
/* harmony import */ var _images_menu_items_lasagna_roll_ups_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu-items/lasagna-roll-ups.jpeg */ "./src/images/menu-items/lasagna-roll-ups.jpeg");
/* harmony import */ var _images_menu_items_sirloin_garlic_beef_tapa_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu-items/sirloin-garlic-beef-tapa.jpeg */ "./src/images/menu-items/sirloin-garlic-beef-tapa.jpeg");
/* harmony import */ var _images_menu_items_trio_of_sausages_pasta_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu-items/trio-of-sausages-pasta.jpeg */ "./src/images/menu-items/trio-of-sausages-pasta.jpeg");









const menuItems = [
  {
    name: 'Bacon Fried Chicken Steaks with Milk’shroom Gravy',
    description:
      'crisp chicken fillets smothered in a creamy milk and mushroom gravy, topped with yummy bacon pieces; served with corn relish',
    price: '₱629',
    image: _images_menu_items_bacon_fried_chicken_steaks_jpeg__WEBPACK_IMPORTED_MODULE_0__,
  },
  {
    name: 'Awesome Blueberry Pancakes',
    description:
      'the perfect combination of buttermilk pancakes with thick stewed blueberries',
    price: '₱329',
    image: _images_menu_items_blueberry_pancakes_jpeg__WEBPACK_IMPORTED_MODULE_1__,
  },
  {
    name: 'Crunchy Chicken Caesar Fillet Sandwich',
    description:
      'crisp and juicy chicken breast fillet layered on crisp lettuce and melted mozzarella cheese, drizzled with garlic caesar dressing served with potato chips',
    price: '₱375',
    image: _images_menu_items_caesar_fillet_sandwich_jpeg__WEBPACK_IMPORTED_MODULE_2__,
  },
  {
    name: 'Baked Creamy Chicken Empanada',
    description: 'buttery pie crust with creamy chicken fillings',
    price: '₱95',
    image: _images_menu_items_chicken_empanada_jpeg__WEBPACK_IMPORTED_MODULE_3__,
  },
  {
    name: 'Dark Chocolate Tiramisu Cheesecake',
    description:
      'dark chocolate and coffee flavored cheesecake on a chocolate cookie crust with coffee flavored whipped cream, topped with crushed butter cookies and dark chocolate curls',
    price: '₱228',
    image: _images_menu_items_dark_chocolate_tiramisu_jpeg__WEBPACK_IMPORTED_MODULE_4__,
  },
  {
    name: 'Lasagna Roll-ups',
    description:
      'herbed cream and parmesan cheese fill al dente lasagna strips, rolled up and smothered in our classic tomato meat sauce and mozarella cheese',
    price: '₱469',
    image: _images_menu_items_lasagna_roll_ups_jpeg__WEBPACK_IMPORTED_MODULE_5__,
  },
  {
    name: 'Sirloin Garlic Beef Tapa',
    description:
      'sweet and tender sirloin beef tapa topped with fried garlic pieces',
    price: '₱429',
    image: _images_menu_items_sirloin_garlic_beef_tapa_jpeg__WEBPACK_IMPORTED_MODULE_6__,
  },
  {
    name: 'Trio of Sausages Pasta',
    description:
      'protein-packed pasta of crumbled chorizo, garlic longanisa, and hungarian sausage tossed in garlic, parmesan cheese, and a very light cream sauce',
    price: '₱435',
    image: _images_menu_items_trio_of_sausages_pasta_jpeg__WEBPACK_IMPORTED_MODULE_7__,
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const name = document.createElement('h1');
  name.classList.add('name');
  name.textContent = 'Cafe San Diego';

  header.appendChild(name);
  header.appendChild(createNav());
  return header;
};

const createNav = () => {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('button-nav', 'hover-filled-slide-down');
  const homeSpan = document.createElement('span');
  homeSpan.textContent = 'Home';
  homeButton.appendChild(homeSpan);
  homeButton.addEventListener('click', (e) => {
    setActiveButton(homeButton);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-nav', 'hover-filled-slide-down');
  const menuSpan = document.createElement('span');
  menuSpan.textContent = 'Menu';
  menuButton.appendChild(menuSpan);
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const contactButton = document.createElement('button');
  contactButton.classList.add('button-nav', 'hover-filled-slide-down');
  const contactSpan = document.createElement('span');
  contactSpan.textContent = 'Contact';
  contactButton.appendChild(contactSpan);
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
};

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const content = document.createElement('p');
  content.textContent = '© Annie San Diego';

  const ghLink = document.createElement('a');
  ghLink.href = 'https://github.com/amsandiego/restaurant-page';
  ghLink.setAttribute('target', '_blank');

  const ghIcon = document.createElement('i');
  ghIcon.classList.add('fab', 'fa-github');

  ghLink.appendChild(ghIcon);
  footer.appendChild(content);
  footer.appendChild(ghLink);

  return footer;
};

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if (button !== undefined) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
};

const initialize = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.button-nav'));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);


/***/ }),

/***/ "../restaurant-project/src/components/createMealCard.js":
/*!**************************************************************!*\
  !*** ../restaurant-project/src/components/createMealCard.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMealCard)
/* harmony export */ });
function createMealCard(meal) {
  const card = document.createElement("div");
  card.className = "card";

  const img = new Image();
  img.src = meal.image;

  const infosDiv = document.createElement("div");
  infosDiv.className = "infos";

  const foodName = document.createElement("p");
  foodName.className = "food-name";
  foodName.textContent = meal.name;

  const foodIngredients = document.createElement("p");
  foodIngredients.className = "food-ingredients";
  meal.ingredients.forEach((ingredient, index) => {
    foodIngredients.textContent += ingredient;
    foodIngredients.textContent +=
      index != meal.ingredients.length - 1 ? ", " : ".";
  });

  infosDiv.append(foodName, foodIngredients);

  const priceTag = document.createElement("span");
  priceTag.className = "price-tag";
  priceTag.textContent = meal.price;

  card.append(img, infosDiv, priceTag);
  return card;
}


/***/ }),

/***/ "./src/images/background.jpeg":
/*!************************************!*\
  !*** ./src/images/background.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c62a458f20616d37076f.jpeg";

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8860f110749e08f20ae1.png";

/***/ }),

/***/ "./src/images/menu-items/bacon-fried-chicken-steaks.jpeg":
/*!***************************************************************!*\
  !*** ./src/images/menu-items/bacon-fried-chicken-steaks.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb739578d954aae1f60a.jpeg";

/***/ }),

/***/ "./src/images/menu-items/blueberry-pancakes.jpeg":
/*!*******************************************************!*\
  !*** ./src/images/menu-items/blueberry-pancakes.jpeg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e2f4ab53ef3f5a9591e.jpeg";

/***/ }),

/***/ "./src/images/menu-items/caesar-fillet-sandwich.jpeg":
/*!***********************************************************!*\
  !*** ./src/images/menu-items/caesar-fillet-sandwich.jpeg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09e0f5f5aee376466e9c.jpeg";

/***/ }),

/***/ "./src/images/menu-items/chicken-empanada.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/menu-items/chicken-empanada.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0914d84642483b8f076a.jpeg";

/***/ }),

/***/ "./src/images/menu-items/dark-chocolate-tiramisu.jpeg":
/*!************************************************************!*\
  !*** ./src/images/menu-items/dark-chocolate-tiramisu.jpeg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e909c76b7b15b7f0b22.jpeg";

/***/ }),

/***/ "./src/images/menu-items/lasagna-roll-ups.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/menu-items/lasagna-roll-ups.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6fc741fbd50023d2239.jpeg";

/***/ }),

/***/ "./src/images/menu-items/sirloin-garlic-beef-tapa.jpeg":
/*!*************************************************************!*\
  !*** ./src/images/menu-items/sirloin-garlic-beef-tapa.jpeg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "440912297a998885e6af.jpeg";

/***/ }),

/***/ "./src/images/menu-items/trio-of-sausages-pasta.jpeg":
/*!***********************************************************!*\
  !*** ./src/images/menu-items/trio-of-sausages-pasta.jpeg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da4a558585e24e12efea.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");



(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFIQUFxSDtBQUNySCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8s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QUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7O0FBRW5DLG9EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi4vcmVzdGF1cmFudC1wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NyZWF0ZU1lYWxDYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5pY29ubmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsdWUtZ3JheTogI2RiZDhlMztcbiAgLS1ibGFjazogIzFhMWMxZTtcbiAgLS13aGl0ZTogI2YyZjJmMjtcbiAgLS1wdXJwbGU6ICM1YzU0NzA7XG4gIC0tZGFya2VzdC1wdXJwbGU6ICMyYTI0Mzg7XG4gIC0tbGlnaHQtcGluazogI2ZmY2JjYjtcbiAgLS1waW5rOiAjZjc2YjhhO1xuICAtLWJsdWlzaDogIzY2YmZiZjtcbiAgLS10cnVlLW5hdnk6ICMxMzI3NDM7XG4gIC0tdHJhbnNsdWNlbnQtZ3JheTogcmdiYSgyMTksIDIxNiwgMjI3LCAwLjcpO1xuICAtLWJnLWNvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbio6bm90KGkpIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXB1cnBsZSk7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi8qIEhlYWRlciAqL1xuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1Y2VudC1ncmF5KTtcbn1cblxuaDEubmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5idXR0b24tbmF2OjpiZWZvcmUsXG4uYnV0dG9uLW5hdjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG4uYnV0dG9uLW5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMHB4IDI1cHggMTVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLmJ1dHRvbi1uYXYgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOCwgMzEsIDMwKTtcbiAgdHJhbnNpdGlvbjogMC4ycyAwLjFzO1xufVxuLmJ1dHRvbi1uYXY6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMzEsIDMwKTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cblxuLmJ1dHRvbi1uYXYgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjgsIDMxLCAzMCk7XG4gIHRyYW5zaXRpb246IDAuMnMgMC4xcztcbn1cblxuLmhvdmVyLWZpbGxlZC1zbGlkZS1kb3duOjpiZWZvcmUge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG92ZXItZmlsbGVkLXNsaWRlLWRvd246aG92ZXI6OmJlZm9yZSxcbi5ob3Zlci1maWxsZWQtc2xpZGUtZG93bi5hY3RpdmU6OmJlZm9yZSB7XG4gIGhlaWdodDogMCU7XG59XG5cbi5idXR0b24tbmF2LmhvdmVyLWZpbGxlZC1zbGlkZS1kb3duLmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6IHJnYigyOCwgMzEsIDMwKTtcbn1cblxuLyogSG9tZSAqL1xuLmhvbWUge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBwYWRkaW5nOiAycmVtIDEwcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb3Zlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC1mYW1pbHk6ICdOaWNvbm5lJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4udGFnbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFjdGlvbkJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjJyZW07XG59XG5cbm1haW4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBpbmspO1xufVxuXG5tYWluIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBNZW51ICovXG4ubWVudSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbSAxMHJlbTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcbn1cblxuLmNhcmQge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcbn1cblxuLm1lYWwtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1lYWwtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLm1lYWwtcHJpY2Uge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXB1cnBsZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweCA0cHggNHB4IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi8qIENvbnRhY3QgKi9cbi5jb250YWN0IHtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnY29udGFjdCBjb250YWN0J1xuICAgICdmb3JtIG1hcCc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIHBhZGRpbmc6IDJyZW0gMTByZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY29udGFjdCBpbWcge1xuICBncmlkLWFyZWE6IG1hcDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb250YWN0RGV0YWlscyB7XG4gIGdyaWQtYXJlYTogY29udGFjdDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNvbnRhY3RGb3JtIHtcbiAgZ3JpZC1hcmVhOiBmb3JtO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA1cmVtIDJyZW07XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xhYmVsIGZpZWxkJztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmxhYmVsIHtcbiAgbWluLXdpZHRoOiA0cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZ3JpZC1hcmVhOiBsYWJlbDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgcmVzaXplOiBub25lO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgZ3JpZC1hcmVhOiBmaWVsZDtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jb250YWN0VXNCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4vKiBGb290ZXIgKi9cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1Y2VudC1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mYS1naXRodWIge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBNZWRpYSBRdWVyaWVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmJ1dHRvbi1uYXYge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHggMTVweDtcbiAgfVxuXG4gIC5idXR0b24tbmF2IHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaG9tZSB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnY29udGFjdCBjb250YWN0J1xuICAgICAgJ2Zvcm0gZm9ybSdcbiAgICAgICdtYXAgbWFwJztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNTclO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw0Q0FBNEM7RUFDNUMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseURBQWlEO0VBQ2pELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxx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O0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQSxlQUFlOztBQUVmO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0U7OztlQUdXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tmljb25uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJsdWUtZ3JheTogI2RiZDhlMztcXG4gIC0tYmxhY2s6ICMxYTFjMWU7XFxuICAtLXdoaXRlOiAjZjJmMmYyO1xcbiAgLS1wdXJwbGU6ICM1YzU0NzA7XFxuICAtLWRhcmtlc3QtcHVycGxlOiAjMmEyNDM4O1xcbiAgLS1saWdodC1waW5rOiAjZmZjYmNiO1xcbiAgLS1waW5rOiAjZjc2YjhhO1xcbiAgLS1ibHVpc2g6ICM2NmJmYmY7XFxuICAtLXRydWUtbmF2eTogIzEzMjc0MztcXG4gIC0tdHJhbnNsdWNlbnQtZ3JheTogcmdiYSgyMTksIDIxNiwgMjI3LCAwLjcpO1xcbiAgLS1iZy1jb3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qOm5vdChpKSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZWcnKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdWNlbnQtZ3JheSk7XFxufVxcblxcbmgxLm5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5idXR0b24tbmF2OjpiZWZvcmUsXFxuLmJ1dHRvbi1uYXY6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4uYnV0dG9uLW5hdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwcHggMjVweCAxNXB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmJ1dHRvbi1uYXYgc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOCwgMzEsIDMwKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgMC4xcztcXG59XFxuLmJ1dHRvbi1uYXY6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDMxLCAzMCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4uYnV0dG9uLW5hdiBzcGFuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjgsIDMxLCAzMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIDAuMXM7XFxufVxcblxcbi5ob3Zlci1maWxsZWQtc2xpZGUtZG93bjo6YmVmb3JlIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaG92ZXItZmlsbGVkLXNsaWRlLWRvd246aG92ZXI6OmJlZm9yZSxcXG4uaG92ZXItZmlsbGVkLXNsaWRlLWRvd24uYWN0aXZlOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwJTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYuaG92ZXItZmlsbGVkLXNsaWRlLWRvd24uYWN0aXZlIHNwYW4ge1xcbiAgY29sb3I6IHJnYigyOCwgMzEsIDMwKTtcXG59XFxuXFxuLyogSG9tZSAqL1xcbi5ob21lIHtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBwYWRkaW5nOiAycmVtIDEwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBmb250LWZhbWlseTogJ05pY29ubmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFnbGluZSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hY3Rpb25CdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMnJlbTtcXG59XFxuXFxubWFpbiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1waW5rKTtcXG59XFxuXFxubWFpbiBidXR0b24ge1xcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbSAxMHJlbTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi5jYXJkIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY292ZXItY29sb3IpO1xcbn1cXG5cXG4ubWVhbC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubWVhbC1wcmljZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMzAlO1xcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDRweCA0cHggM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcbi5jb250YWN0IHtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdjb250YWN0IGNvbnRhY3QnXFxuICAgICdmb3JtIG1hcCc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBwYWRkaW5nOiAycmVtIDEwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY292ZXItY29sb3IpO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdCBpbWcge1xcbiAgZ3JpZC1hcmVhOiBtYXA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdERldGFpbHMge1xcbiAgZ3JpZC1hcmVhOiBjb250YWN0O1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3RGb3JtIHtcXG4gIGdyaWQtYXJlYTogZm9ybTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiA1cmVtIDJyZW07XFxufVxcblxcbi5mb3JtLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbGFiZWwgZmllbGQnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgbWluLXdpZHRoOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBncmlkLWFyZWE6IGxhYmVsO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMTVyZW07XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGdyaWQtYXJlYTogZmllbGQ7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uY29udGFjdFVzQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC44cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdWNlbnQtZ3JheSk7XFxuICBjb2xvcjogdmFyKC0tZGFya2VzdC1wdXJwbGUpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tZGFya2VzdC1wdXJwbGUpO1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuYnV0dG9uLW5hdiB7XFxuICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICBtYXJnaW46IDBweCAxMHB4IDE1cHg7XFxuICB9XFxuXFxuICAuYnV0dG9uLW5hdiBzcGFuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaG9tZSB7XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAnY29udGFjdCBjb250YWN0J1xcbiAgICAgICdmb3JtIGZvcm0nXFxuICAgICAgJ21hcCBtYXAnO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU3JTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTWFwIGZyb20gJy4vaW1hZ2VzL21hcC5wbmcnO1xuXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gIGNvbnN0IGNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3REZXRhaWxzJyk7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9ICfwn5OeICgwNDQpIDEyMzQtNTY3OCc7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAn8J+PoCBTdW5zaGluZSBGYWxscywgUGFuZGksIEJ1bGFjYW4nO1xuICBjb250YWN0RGV0YWlscy5hcHBlbmQocGhvbmUsIGFkZHJlc3MpO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtYXAuc3JjID0gTWFwO1xuICBtYXAuYWx0ID0gJ0NhZmUgU2FuIERpZWdvIHJlc3RhdXJhbnQgbG9jYXRpb24nO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RGb3JtJyk7XG4gIGNvbnN0IG5hbWVGb3JtRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZW1haWxGb3JtRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVzc2FnZUZvcm1GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lRm9ybUZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkJztcbiAgZW1haWxGb3JtRmllbGQuY2xhc3NOYW1lID0gJ2Zvcm0tZmllbGQnO1xuICBtZXNzYWdlRm9ybUZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkJztcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RVc0J1dHRvbicpO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VuZCc7XG5cbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsJztcbiAgbWVzc2FnZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKTtcbiAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gJ01lc3NhZ2UnO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblxuICBjb25zdCBtZXNzYWdlVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBtZXNzYWdlVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG4gIG1lc3NhZ2VUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcblxuICBuYW1lRm9ybUZpZWxkLmFwcGVuZChuYW1lTGFiZWwsIG5hbWVJbnB1dCk7XG4gIGVtYWlsRm9ybUZpZWxkLmFwcGVuZChlbWFpbExhYmVsLCBlbWFpbElucHV0KTtcbiAgbWVzc2FnZUZvcm1GaWVsZC5hcHBlbmQobWVzc2FnZUxhYmVsLCBtZXNzYWdlVGV4dGFyZWEpO1xuXG4gIGZvcm0uYXBwZW5kKG5hbWVGb3JtRmllbGQsIGVtYWlsRm9ybUZpZWxkLCBtZXNzYWdlRm9ybUZpZWxkLCBzdWJtaXRCdG4pO1xuXG4gIGNvbnRhY3QuYXBwZW5kKGNvbnRhY3REZXRhaWxzLCBmb3JtLCBtYXApO1xuXG4gIHJldHVybiBjb250YWN0O1xufTtcblxuY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICBjb25zdCB3ZWxjb21lID0gY3JlYXRlUGFyYWdyYXBoKCdXZWxjb21lIHRvIENhZmUgU2FuIERpZWdvJyk7XG4gIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gIGNvbnN0IHRhZ2xpbmUgPSBjcmVhdGVQYXJhZ3JhcGgoJ1doZXJlIGZsYXZvciBtZWV0cyB0cmFkaXRpb24nKTtcbiAgdGFnbGluZS5jbGFzc0xpc3QuYWRkKCd0YWdsaW5lJyk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAnRXhwbG9yZSBvdXIgYmVzdCBtZW51IGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSBvZiBvdXIgQXNpYW4gY29tZm9ydCBmb29kLidcbiAgKTtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG5cbiAgY29uc3QgYWN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb25CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbkJ1dHRvbnMnKTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignT3VyIE1lbnUnKTtcbiAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnV0dG9uJyk7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oJ0NvbnRhY3QgVXMnKTtcbiAgYWN0aW9uQnV0dG9ucy5hcHBlbmQobWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbik7XG5cbiAgaG9tZS5hcHBlbmQod2VsY29tZSwgdGFnbGluZSwgbWVzc2FnZSwgYWN0aW9uQnV0dG9ucyk7XG5cbiAgcmV0dXJuIGhvbWU7XG59O1xuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufTtcblxuY29uc3QgY3JlYXRlUGFyYWdyYXBoID0gKHRleHQpID0+IHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcGFyYWdyYXBoO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBidG47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBjcmVhdGVNZWFsQ2FyZCBmcm9tICcuLi8uLi9yZXN0YXVyYW50LXByb2plY3Qvc3JjL2NvbXBvbmVudHMvY3JlYXRlTWVhbENhcmQnO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL21lbnVJdGVtcyc7XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQobWVudUl0ZW0pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChtZW51SXRlbSkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gbWVudUl0ZW0uaW1hZ2U7XG5cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvRGl2LmNsYXNzTmFtZSA9ICdpbmZvJztcblxuICBjb25zdCBtZWFsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVhbE5hbWUuY2xhc3NOYW1lID0gJ21lYWwtbmFtZSc7XG4gIG1lYWxOYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW0ubmFtZTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ21lYWwtZGVzY3JpcHRpb24nO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1lbnVJdGVtLmRlc2NyaXB0aW9uO1xuXG4gIGluZm9EaXYuYXBwZW5kKG1lYWxOYW1lLCBkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaWNlLmNsYXNzTmFtZSA9ICdtZWFsLXByaWNlJztcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBtZW51SXRlbS5wcmljZTtcblxuICBjYXJkLmFwcGVuZChpbWcsIGluZm9EaXYsIHByaWNlKTtcbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCJpbXBvcnQgQmFjb25GcmllZENoaWNrZW4gZnJvbSAnLi9pbWFnZXMvbWVudS1pdGVtcy9iYWNvbi1mcmllZC1jaGlja2VuLXN0ZWFrcy5qcGVnJztcbmltcG9ydCBCbHVlYmVycnlQYW5jYWtlcyBmcm9tICcuL2ltYWdlcy9tZW51LWl0ZW1zL2JsdWViZXJyeS1wYW5jYWtlcy5qcGVnJztcbmltcG9ydCBDYWVzYXJGaWxsZXRTYW5kd2ljaCBmcm9tICcuL2ltYWdlcy9tZW51LWl0ZW1zL2NhZXNhci1maWxsZXQtc2FuZHdpY2guanBlZyc7XG5pbXBvcnQgQ2hpY2tlbkVtcGFuYWRhIGZyb20gJy4vaW1hZ2VzL21lbnUtaXRlbXMvY2hpY2tlbi1lbXBhbmFkYS5qcGVnJztcbmltcG9ydCBEYXJrQ2hvY29sYXRlVGlyYW1pc3UgZnJvbSAnLi9pbWFnZXMvbWVudS1pdGVtcy9kYXJrLWNob2NvbGF0ZS10aXJhbWlzdS5qcGVnJztcbmltcG9ydCBMYXNhZ25hUm9sbFVwcyBmcm9tICcuL2ltYWdlcy9tZW51LWl0ZW1zL2xhc2FnbmEtcm9sbC11cHMuanBlZyc7XG5pbXBvcnQgU2lybG9pbkdhcmxpY0JlZWZUYXBhIGZyb20gJy4vaW1hZ2VzL21lbnUtaXRlbXMvc2lybG9pbi1nYXJsaWMtYmVlZi10YXBhLmpwZWcnO1xuaW1wb3J0IFRyaW9PZlNhdXNhZ2VzUGFzdGEgZnJvbSAnLi9pbWFnZXMvbWVudS1pdGVtcy90cmlvLW9mLXNhdXNhZ2VzLXBhc3RhLmpwZWcnO1xuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnQmFjb24gRnJpZWQgQ2hpY2tlbiBTdGVha3Mgd2l0aCBNaWxr4oCZc2hyb29tIEdyYXZ5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdjcmlzcCBjaGlja2VuIGZpbGxldHMgc21vdGhlcmVkIGluIGEgY3JlYW15IG1pbGsgYW5kIG11c2hyb29tIGdyYXZ5LCB0b3BwZWQgd2l0aCB5dW1teSBiYWNvbiBwaWVjZXM7IHNlcnZlZCB3aXRoIGNvcm4gcmVsaXNoJyxcbiAgICBwcmljZTogJ+KCsTYyOScsXG4gICAgaW1hZ2U6IEJhY29uRnJpZWRDaGlja2VuLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0F3ZXNvbWUgQmx1ZWJlcnJ5IFBhbmNha2VzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICd0aGUgcGVyZmVjdCBjb21iaW5hdGlvbiBvZiBidXR0ZXJtaWxrIHBhbmNha2VzIHdpdGggdGhpY2sgc3Rld2VkIGJsdWViZXJyaWVzJyxcbiAgICBwcmljZTogJ+KCsTMyOScsXG4gICAgaW1hZ2U6IEJsdWViZXJyeVBhbmNha2VzLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NydW5jaHkgQ2hpY2tlbiBDYWVzYXIgRmlsbGV0IFNhbmR3aWNoJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdjcmlzcCBhbmQganVpY3kgY2hpY2tlbiBicmVhc3QgZmlsbGV0IGxheWVyZWQgb24gY3Jpc3AgbGV0dHVjZSBhbmQgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCBkcml6emxlZCB3aXRoIGdhcmxpYyBjYWVzYXIgZHJlc3Npbmcgc2VydmVkIHdpdGggcG90YXRvIGNoaXBzJyxcbiAgICBwcmljZTogJ+KCsTM3NScsXG4gICAgaW1hZ2U6IENhZXNhckZpbGxldFNhbmR3aWNoLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Jha2VkIENyZWFteSBDaGlja2VuIEVtcGFuYWRhJyxcbiAgICBkZXNjcmlwdGlvbjogJ2J1dHRlcnkgcGllIGNydXN0IHdpdGggY3JlYW15IGNoaWNrZW4gZmlsbGluZ3MnLFxuICAgIHByaWNlOiAn4oKxOTUnLFxuICAgIGltYWdlOiBDaGlja2VuRW1wYW5hZGEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGFyayBDaG9jb2xhdGUgVGlyYW1pc3UgQ2hlZXNlY2FrZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnZGFyayBjaG9jb2xhdGUgYW5kIGNvZmZlZSBmbGF2b3JlZCBjaGVlc2VjYWtlIG9uIGEgY2hvY29sYXRlIGNvb2tpZSBjcnVzdCB3aXRoIGNvZmZlZSBmbGF2b3JlZCB3aGlwcGVkIGNyZWFtLCB0b3BwZWQgd2l0aCBjcnVzaGVkIGJ1dHRlciBjb29raWVzIGFuZCBkYXJrIGNob2NvbGF0ZSBjdXJscycsXG4gICAgcHJpY2U6ICfigrEyMjgnLFxuICAgIGltYWdlOiBEYXJrQ2hvY29sYXRlVGlyYW1pc3UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGFzYWduYSBSb2xsLXVwcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnaGVyYmVkIGNyZWFtIGFuZCBwYXJtZXNhbiBjaGVlc2UgZmlsbCBhbCBkZW50ZSBsYXNhZ25hIHN0cmlwcywgcm9sbGVkIHVwIGFuZCBzbW90aGVyZWQgaW4gb3VyIGNsYXNzaWMgdG9tYXRvIG1lYXQgc2F1Y2UgYW5kIG1vemFyZWxsYSBjaGVlc2UnLFxuICAgIHByaWNlOiAn4oKxNDY5JyxcbiAgICBpbWFnZTogTGFzYWduYVJvbGxVcHMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU2lybG9pbiBHYXJsaWMgQmVlZiBUYXBhJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdzd2VldCBhbmQgdGVuZGVyIHNpcmxvaW4gYmVlZiB0YXBhIHRvcHBlZCB3aXRoIGZyaWVkIGdhcmxpYyBwaWVjZXMnLFxuICAgIHByaWNlOiAn4oKxNDI5JyxcbiAgICBpbWFnZTogU2lybG9pbkdhcmxpY0JlZWZUYXBhLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RyaW8gb2YgU2F1c2FnZXMgUGFzdGEnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ3Byb3RlaW4tcGFja2VkIHBhc3RhIG9mIGNydW1ibGVkIGNob3Jpem8sIGdhcmxpYyBsb25nYW5pc2EsIGFuZCBodW5nYXJpYW4gc2F1c2FnZSB0b3NzZWQgaW4gZ2FybGljLCBwYXJtZXNhbiBjaGVlc2UsIGFuZCBhIHZlcnkgbGlnaHQgY3JlYW0gc2F1Y2UnLFxuICAgIHByaWNlOiAn4oKxNDM1JyxcbiAgICBpbWFnZTogVHJpb09mU2F1c2FnZXNQYXN0YSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVJdGVtcztcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9ICdDYWZlIFNhbiBEaWVnbyc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicsICdob3Zlci1maWxsZWQtc2xpZGUtZG93bicpO1xuICBjb25zdCBob21lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG9tZVNwYW4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWVCdXR0b24uYXBwZW5kQ2hpbGQoaG9tZVNwYW4pO1xuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnLCAnaG92ZXItZmlsbGVkLXNsaWRlLWRvd24nKTtcbiAgY29uc3QgbWVudVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG1lbnVTcGFuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKG1lbnVTcGFuKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnLCAnaG92ZXItZmlsbGVkLXNsaWRlLWRvd24nKTtcbiAgY29uc3QgY29udGFjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnRhY3RTcGFuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb250YWN0QnV0dG9uLmFwcGVuZENoaWxkKGNvbnRhY3RTcGFuKTtcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnwqkgQW5uaWUgU2FuIERpZWdvJztcblxuICBjb25zdCBnaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdoTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbXNhbmRpZWdvL3Jlc3RhdXJhbnQtcGFnZSc7XG4gIGdoTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBjb25zdCBnaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGdoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYWInLCAnZmEtZ2l0aHViJyk7XG5cbiAgZ2hMaW5rLmFwcGVuZENoaWxkKGdoSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdoTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tbmF2Jyk7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1uYXYnKSk7XG4gIGxvYWRIb21lKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVhbENhcmQobWVhbCkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcblxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IG1lYWwuaW1hZ2U7XG5cbiAgY29uc3QgaW5mb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvc0Rpdi5jbGFzc05hbWUgPSBcImluZm9zXCI7XG5cbiAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vZE5hbWUuY2xhc3NOYW1lID0gXCJmb29kLW5hbWVcIjtcbiAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBtZWFsLm5hbWU7XG5cbiAgY29uc3QgZm9vZEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb2RJbmdyZWRpZW50cy5jbGFzc05hbWUgPSBcImZvb2QtaW5ncmVkaWVudHNcIjtcbiAgbWVhbC5pbmdyZWRpZW50cy5mb3JFYWNoKChpbmdyZWRpZW50LCBpbmRleCkgPT4ge1xuICAgIGZvb2RJbmdyZWRpZW50cy50ZXh0Q29udGVudCArPSBpbmdyZWRpZW50O1xuICAgIGZvb2RJbmdyZWRpZW50cy50ZXh0Q29udGVudCArPVxuICAgICAgaW5kZXggIT0gbWVhbC5pbmdyZWRpZW50cy5sZW5ndGggLSAxID8gXCIsIFwiIDogXCIuXCI7XG4gIH0pO1xuXG4gIGluZm9zRGl2LmFwcGVuZChmb29kTmFtZSwgZm9vZEluZ3JlZGllbnRzKTtcblxuICBjb25zdCBwcmljZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmljZVRhZy5jbGFzc05hbWUgPSBcInByaWNlLXRhZ1wiO1xuICBwcmljZVRhZy50ZXh0Q29udGVudCA9IG1lYWwucHJpY2U7XG5cbiAgY2FyZC5hcHBlbmQoaW1nLCBpbmZvc0RpdiwgcHJpY2VUYWcpO1xuICByZXR1cm4gY2FyZDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL3dlYnNpdGUnO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=