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
  background-color: var(--bg-cover-color);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');\n\n:root {\n  --blue-gray: #dbd8e3;\n  --black: #1a1c1e;\n  --white: #f2f2f2;\n  --purple: #5c5470;\n  --darkest-purple: #2a2438;\n  --light-pink: #ffcbcb;\n  --pink: #f76b8a;\n  --bluish: #66bfbf;\n  --true-navy: #132743;\n  --translucent-gray: rgba(219, 216, 227, 0.7);\n  --bg-cover-color: rgba(0, 0, 0, 0.6);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n*:not(i) {\n  font-family: 'Lato', sans-serif;\n}\n\nbody {\n  font-size: 1.7rem;\n  background-image: url('./images/background.jpeg');\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--darkest-purple);\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 1rem;\n  background-color: var(--translucent-gray);\n}\n\nh1.name {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.button-nav::before,\n.button-nav::after {\n  position: absolute;\n  content: '';\n}\n\n.button-nav {\n  position: relative;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin: 0px 25px 15px;\n  min-width: 150px;\n}\n\n.button-nav span {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px 20px;\n  color: rgb(255, 255, 255);\n  border: 1px solid rgb(28, 31, 30);\n  transition: 0.2s 0.1s;\n}\n.button-nav::before {\n  background-color: rgb(28, 31, 30);\n  transition: 0.3s ease-out;\n}\n\n.button-nav span:hover {\n  color: rgb(28, 31, 30);\n  transition: 0.2s 0.1s;\n}\n\n.hover-filled-slide-down::before {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.hover-filled-slide-down:hover::before,\n.hover-filled-slide-down.active::before {\n  height: 0%;\n}\n\n.button-nav.hover-filled-slide-down.active span {\n  color: rgb(28, 31, 30);\n}\n\n/* Home */\n.home {\n  min-height: 90vh;\n  padding: 2rem 10rem;\n  text-align: center;\n  display: grid;\n  place-content: center;\n  gap: 2rem;\n  background-color: var(--bg-cover-color);\n  color: var(--white);\n  animation: fadeIn 1.5s;\n}\n\n.welcome {\n  font-family: 'Niconne', cursive;\n  font-size: 2rem;\n}\n\n.tagline {\n  font-weight: 900;\n  font-size: 3rem;\n}\n\n.message {\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.actionButtons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.2rem;\n}\n\nmain button:first-child {\n  background-color: var(--pink);\n  border: 2px solid var(--pink);\n}\n\nmain button {\n  padding: 0.7rem 1.5rem;\n  background-color: var(--bg-cover-color);\n}\n\nbutton {\n  width: 10rem;\n  border-radius: 3px;\n  border: 2px solid var(--white);\n  text-transform: uppercase;\n  color: var(--white);\n  cursor: pointer;\n}\n\n/* Menu */\n.menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  place-content: center;\n  gap: 1rem;\n  padding: 2rem 10rem;\n  animation: fadeIn 1.5s;\n  background-color: var(--bg-cover-color);\n}\n\n.card {\n  color: var(--white);\n  width: 100%;\n  height: 100%;\n  place-self: center;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--bg-cover-color);\n}\n\n.meal-name {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.meal-description {\n  font-size: 0.9rem;\n}\n\n.meal-price {\n  font-size: 1rem;\n  width: 30%;\n  color: var(--darkest-purple);\n  background-color: var(--pink);\n  align-self: center;\n  border-radius: 3px 4px 4px 3px;\n  text-align: center;\n}\n\n.card img {\n  width: 100%;\n  height: 60%;\n}\n\n/* Contact */\n.contact {\n  grid-template-areas:\n    'contact contact'\n    'form map';\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 2rem auto;\n  min-height: 90vh;\n  padding: 2rem 10rem;\n  text-align: center;\n  display: grid;\n  place-content: center;\n  animation: fadeIn 1.5s;\n  font-size: 1rem;\n  color: var(--white);\n  background-color: var(--bg-cover-color);\n  gap: 1rem;\n}\n\n.contact img {\n  grid-area: map;\n  width: 300px;\n  height: 350px;\n  align-self: center;\n}\n\n.contactDetails {\n  grid-area: contact;\n  padding: 2rem;\n}\n\n.contactForm {\n  grid-area: form;\n  display: grid;\n  padding: 5rem 2rem;\n}\n\n.form-field {\n  display: grid;\n  grid-template-areas: 'label field';\n  grid-template-columns: 1fr 3fr;\n  gap: 2rem;\n  margin-bottom: 1rem;\n}\n\nlabel {\n  min-width: 4rem;\n  text-align: right;\n  grid-area: label;\n}\n\ninput {\n  height: 2rem;\n}\n\ntextarea {\n  height: 15rem;\n  resize: none;\n}\n\ninput,\ntextarea {\n  grid-area: field;\n  padding: 1rem 1rem;\n  outline: none;\n  border-radius: 3px;\n}\n\n.contactUsButton {\n  background-color: var(--pink);\n  border: none;\n  border-radius: 3px;\n  justify-self: end;\n}\n\n/* Footer */\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n  width: 100%;\n  padding: 1rem;\n  background-color: var(--translucent-gray);\n  color: var(--darkest-purple);\n  font-size: 1.2rem;\n}\n\n.fa-github {\n  font-size: 1.3rem;\n  color: var(--darkest-purple);\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media Queries */\n@media (max-width: 700px) {\n  nav {\n    display: flex;\n  }\n\n  .button-nav {\n    min-width: 0px;\n    margin: 0px 10px 15px;\n  }\n\n  .button-nav span {\n    display: flex;\n    justify-content: center;\n  }\n\n  .home {\n    gap: 5rem;\n  }\n\n  .contact {\n    grid-template-areas:\n      'contact contact'\n      'form form'\n      'map map';\n  }\n}\n@media (max-width: 500px) {\n  html {\n    font-size: 57%;\n  }\n}\n"],"sourceRoot":""}]);
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../restaurant-project/src/components/createMealCard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFIQUFxSDtBQUNySCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEs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O1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7O0FBRW5DLG9EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OaWNvbm5lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1ibHVlLWdyYXk6ICNkYmQ4ZTM7XG4gIC0tYmxhY2s6ICMxYTFjMWU7XG4gIC0td2hpdGU6ICNmMmYyZjI7XG4gIC0tcHVycGxlOiAjNWM1NDcwO1xuICAtLWRhcmtlc3QtcHVycGxlOiAjMmEyNDM4O1xuICAtLWxpZ2h0LXBpbms6ICNmZmNiY2I7XG4gIC0tcGluazogI2Y3NmI4YTtcbiAgLS1ibHVpc2g6ICM2NmJmYmY7XG4gIC0tdHJ1ZS1uYXZ5OiAjMTMyNzQzO1xuICAtLXRyYW5zbHVjZW50LWdyYXk6IHJnYmEoMjE5LCAyMTYsIDIyNywgMC43KTtcbiAgLS1iZy1jb3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qOm5vdChpKSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogdmFyKC0tZGFya2VzdC1wdXJwbGUpO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdWNlbnQtZ3JheSk7XG59XG5cbmgxLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uYnV0dG9uLW5hdjo6YmVmb3JlLFxuLmJ1dHRvbi1uYXY6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbn1cblxuLmJ1dHRvbi1uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDBweCAyNXB4IDE1cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5idXR0b24tbmF2IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjgsIDMxLCAzMCk7XG4gIHRyYW5zaXRpb246IDAuMnMgMC4xcztcbn1cbi5idXR0b24tbmF2OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDMxLCAzMCk7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5idXR0b24tbmF2IHNwYW46aG92ZXIge1xuICBjb2xvcjogcmdiKDI4LCAzMSwgMzApO1xuICB0cmFuc2l0aW9uOiAwLjJzIDAuMXM7XG59XG5cbi5ob3Zlci1maWxsZWQtc2xpZGUtZG93bjo6YmVmb3JlIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhvdmVyLWZpbGxlZC1zbGlkZS1kb3duOmhvdmVyOjpiZWZvcmUsXG4uaG92ZXItZmlsbGVkLXNsaWRlLWRvd24uYWN0aXZlOjpiZWZvcmUge1xuICBoZWlnaHQ6IDAlO1xufVxuXG4uYnV0dG9uLW5hdi5ob3Zlci1maWxsZWQtc2xpZGUtZG93bi5hY3RpdmUgc3BhbiB7XG4gIGNvbG9yOiByZ2IoMjgsIDMxLCAzMCk7XG59XG5cbi8qIEhvbWUgKi9cbi5ob21lIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgcGFkZGluZzogMnJlbSAxMHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY292ZXItY29sb3IpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xufVxuXG4ud2VsY29tZSB7XG4gIGZvbnQtZmFtaWx5OiAnTmljb25uZScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhZ2xpbmUge1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5hY3Rpb25CdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4ycmVtO1xufVxuXG5tYWluIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1waW5rKTtcbn1cblxubWFpbiBidXR0b24ge1xuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb3Zlci1jb2xvcik7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTWVudSAqL1xuLm1lbnUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDJyZW0gMTByZW07XG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcbn1cblxuLmNhcmQge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcbn1cblxuLm1lYWwtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1lYWwtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLm1lYWwtcHJpY2Uge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXB1cnBsZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweCA0cHggNHB4IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi8qIENvbnRhY3QgKi9cbi5jb250YWN0IHtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnY29udGFjdCBjb250YWN0J1xuICAgICdmb3JtIG1hcCc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIHBhZGRpbmc6IDJyZW0gMTByZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY29udGFjdCBpbWcge1xuICBncmlkLWFyZWE6IG1hcDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb250YWN0RGV0YWlscyB7XG4gIGdyaWQtYXJlYTogY29udGFjdDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNvbnRhY3RGb3JtIHtcbiAgZ3JpZC1hcmVhOiBmb3JtO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA1cmVtIDJyZW07XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xhYmVsIGZpZWxkJztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmxhYmVsIHtcbiAgbWluLXdpZHRoOiA0cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZ3JpZC1hcmVhOiBsYWJlbDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgcmVzaXplOiBub25lO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgZ3JpZC1hcmVhOiBmaWVsZDtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jb250YWN0VXNCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4vKiBGb290ZXIgKi9cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1Y2VudC1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mYS1naXRodWIge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiBNZWRpYSBRdWVyaWVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmJ1dHRvbi1uYXYge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHggMTVweDtcbiAgfVxuXG4gIC5idXR0b24tbmF2IHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaG9tZSB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnY29udGFjdCBjb250YWN0J1xuICAgICAgJ2Zvcm0gZm9ybSdcbiAgICAgICdtYXAgbWFwJztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNTclO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFx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OztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFOzs7ZUFHVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5pY29ubmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1ibHVlLWdyYXk6ICNkYmQ4ZTM7XFxuICAtLWJsYWNrOiAjMWExYzFlO1xcbiAgLS13aGl0ZTogI2YyZjJmMjtcXG4gIC0tcHVycGxlOiAjNWM1NDcwO1xcbiAgLS1kYXJrZXN0LXB1cnBsZTogIzJhMjQzODtcXG4gIC0tbGlnaHQtcGluazogI2ZmY2JjYjtcXG4gIC0tcGluazogI2Y3NmI4YTtcXG4gIC0tYmx1aXNoOiAjNjZiZmJmO1xcbiAgLS10cnVlLW5hdnk6ICMxMzI3NDM7XFxuICAtLXRyYW5zbHVjZW50LWdyYXk6IHJnYmEoMjE5LCAyMTYsIDIyNywgMC43KTtcXG4gIC0tYmctY292ZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKjpub3QoaSkge1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYmFja2dyb3VuZC5qcGVnJyk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXB1cnBsZSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVjZW50LWdyYXkpO1xcbn1cXG5cXG5oMS5uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uYnV0dG9uLW5hdjo6YmVmb3JlLFxcbi5idXR0b24tbmF2OjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMHB4IDI1cHggMTVweDtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcblxcbi5idXR0b24tbmF2IHNwYW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjgsIDMxLCAzMCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIDAuMXM7XFxufVxcbi5idXR0b24tbmF2OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAzMSwgMzApO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1uYXYgc3Bhbjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI4LCAzMSwgMzApO1xcbiAgdHJhbnNpdGlvbjogMC4ycyAwLjFzO1xcbn1cXG5cXG4uaG92ZXItZmlsbGVkLXNsaWRlLWRvd246OmJlZm9yZSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhvdmVyLWZpbGxlZC1zbGlkZS1kb3duOmhvdmVyOjpiZWZvcmUsXFxuLmhvdmVyLWZpbGxlZC1zbGlkZS1kb3duLmFjdGl2ZTo6YmVmb3JlIHtcXG4gIGhlaWdodDogMCU7XFxufVxcblxcbi5idXR0b24tbmF2LmhvdmVyLWZpbGxlZC1zbGlkZS1kb3duLmFjdGl2ZSBzcGFuIHtcXG4gIGNvbG9yOiByZ2IoMjgsIDMxLCAzMCk7XFxufVxcblxcbi8qIEhvbWUgKi9cXG4uaG9tZSB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgcGFkZGluZzogMnJlbSAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb3Zlci1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgZm9udC1mYW1pbHk6ICdOaWNvbm5lJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRhZ2xpbmUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWN0aW9uQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjJyZW07XFxufVxcblxcbm1haW4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGluayk7XFxufVxcblxcbm1haW4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb3Zlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTWVudSAqL1xcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMTByZW07XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY292ZXItY29sb3IpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcXG59XFxuXFxuLm1lYWwtbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubWVhbC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm1lYWwtcHJpY2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrZXN0LXB1cnBsZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCA0cHggNHB4IDNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG4uY29udGFjdCB7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnY29udGFjdCBjb250YWN0J1xcbiAgICAnZm9ybSBtYXAnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIGF1dG87XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgcGFkZGluZzogMnJlbSAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvdmVyLWNvbG9yKTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QgaW1nIHtcXG4gIGdyaWQtYXJlYTogbWFwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3REZXRhaWxzIHtcXG4gIGdyaWQtYXJlYTogY29udGFjdDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5jb250YWN0Rm9ybSB7XFxuICBncmlkLWFyZWE6IGZvcm07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogNXJlbSAycmVtO1xcbn1cXG5cXG4uZm9ybS1maWVsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xhYmVsIGZpZWxkJztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIG1pbi13aWR0aDogNHJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZ3JpZC1hcmVhOiBsYWJlbDtcXG59XFxuXFxuaW5wdXQge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBncmlkLWFyZWE6IGZpZWxkO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmNvbnRhY3RVc0J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuOHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVjZW50LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmtlc3QtcHVycGxlKTtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBRdWVyaWVzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmJ1dHRvbi1uYXYge1xcbiAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweCAxNXB4O1xcbiAgfVxcblxcbiAgLmJ1dHRvbi1uYXYgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWUge1xcbiAgICBnYXA6IDVyZW07XFxuICB9XFxuXFxuICAuY29udGFjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgJ2NvbnRhY3QgY29udGFjdCdcXG4gICAgICAnZm9ybSBmb3JtJ1xcbiAgICAgICdtYXAgbWFwJztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1NyU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE1hcCBmcm9tICcuL2ltYWdlcy9tYXAucG5nJztcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICBjb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjb250YWN0RGV0YWlscycpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmUudGV4dENvbnRlbnQgPSAn8J+TniAoMDQ0KSAxMjM0LTU2NzgnO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ/Cfj6AgU3Vuc2hpbmUgRmFsbHMsIFBhbmRpLCBCdWxhY2FuJztcbiAgY29udGFjdERldGFpbHMuYXBwZW5kKHBob25lLCBhZGRyZXNzKTtcblxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWFwLnNyYyA9IE1hcDtcbiAgbWFwLmFsdCA9ICdDYWZlIFNhbiBEaWVnbyByZXN0YXVyYW50IGxvY2F0aW9uJztcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Rm9ybScpO1xuICBjb25zdCBuYW1lRm9ybUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVtYWlsRm9ybUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lc3NhZ2VGb3JtRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZUZvcm1GaWVsZC5jbGFzc05hbWUgPSAnZm9ybS1maWVsZCc7XG4gIGVtYWlsRm9ybUZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkJztcbiAgbWVzc2FnZUZvcm1GaWVsZC5jbGFzc05hbWUgPSAnZm9ybS1maWVsZCc7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdjb250YWN0VXNCdXR0b24nKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NlbmQnO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9ICdFbWFpbCc7XG4gIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJyk7XG4gIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlJztcblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cbiAgY29uc3QgbWVzc2FnZVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbWVzc2FnZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICBtZXNzYWdlVGV4dGFyZWEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG5cbiAgbmFtZUZvcm1GaWVsZC5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQpO1xuICBlbWFpbEZvcm1GaWVsZC5hcHBlbmQoZW1haWxMYWJlbCwgZW1haWxJbnB1dCk7XG4gIG1lc3NhZ2VGb3JtRmllbGQuYXBwZW5kKG1lc3NhZ2VMYWJlbCwgbWVzc2FnZVRleHRhcmVhKTtcblxuICBmb3JtLmFwcGVuZChuYW1lRm9ybUZpZWxkLCBlbWFpbEZvcm1GaWVsZCwgbWVzc2FnZUZvcm1GaWVsZCwgc3VibWl0QnRuKTtcblxuICBjb250YWN0LmFwcGVuZChjb250YWN0RGV0YWlscywgZm9ybSwgbWFwKTtcblxuICByZXR1cm4gY29udGFjdDtcbn07XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZVBhcmFncmFwaCgnV2VsY29tZSB0byBDYWZlIFNhbiBEaWVnbycpO1xuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuICBjb25zdCB0YWdsaW5lID0gY3JlYXRlUGFyYWdyYXBoKCdXaGVyZSBmbGF2b3IgbWVldHMgdHJhZGl0aW9uJyk7XG4gIHRhZ2xpbmUuY2xhc3NMaXN0LmFkZCgndGFnbGluZScpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVQYXJhZ3JhcGgoXG4gICAgJ0V4cGxvcmUgb3VyIGJlc3QgbWVudSBhbmQgdGFzdGUgdGhlIGRpZmZlcmVuY2Ugb2Ygb3VyIEFzaWFuIGNvbWZvcnQgZm9vZC4nXG4gICk7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0aW9uQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25CdXR0b25zJyk7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ091ciBNZW51Jyk7XG4gIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ1dHRvbicpO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdDb250YWN0IFVzJyk7XG4gIGFjdGlvbkJ1dHRvbnMuYXBwZW5kKG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b24pO1xuXG4gIGhvbWUuYXBwZW5kKHdlbGNvbWUsIHRhZ2xpbmUsIG1lc3NhZ2UsIGFjdGlvbkJ1dHRvbnMpO1xuXG4gIHJldHVybiBob21lO1xufTtcblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBhcmFncmFwaCA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gYnRuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgY3JlYXRlTWVhbENhcmQgZnJvbSAnLi4vLi4vcmVzdGF1cmFudC1wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NyZWF0ZU1lYWxDYXJkJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9tZW51SXRlbXMnO1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKG1lbnVJdGVtKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcblxuICByZXR1cm4gbWVudTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAobWVudUl0ZW0pID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IG1lbnVJdGVtLmltYWdlO1xuXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0Rpdi5jbGFzc05hbWUgPSAnaW5mbyc7XG5cbiAgY29uc3QgbWVhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lYWxOYW1lLmNsYXNzTmFtZSA9ICdtZWFsLW5hbWUnO1xuICBtZWFsTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLm5hbWU7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdtZWFsLWRlc2NyaXB0aW9uJztcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZW51SXRlbS5kZXNjcmlwdGlvbjtcblxuICBpbmZvRGl2LmFwcGVuZChtZWFsTmFtZSwgZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcmljZS5jbGFzc05hbWUgPSAnbWVhbC1wcmljZSc7XG4gIHByaWNlLnRleHRDb250ZW50ID0gbWVudUl0ZW0ucHJpY2U7XG5cbiAgY2FyZC5hcHBlbmQoaW1nLCBpbmZvRGl2LCBwcmljZSk7XG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiaW1wb3J0IEJhY29uRnJpZWRDaGlja2VuIGZyb20gJy4vaW1hZ2VzL21lbnUtaXRlbXMvYmFjb24tZnJpZWQtY2hpY2tlbi1zdGVha3MuanBlZyc7XG5pbXBvcnQgQmx1ZWJlcnJ5UGFuY2FrZXMgZnJvbSAnLi9pbWFnZXMvbWVudS1pdGVtcy9ibHVlYmVycnktcGFuY2FrZXMuanBlZyc7XG5pbXBvcnQgQ2Flc2FyRmlsbGV0U2FuZHdpY2ggZnJvbSAnLi9pbWFnZXMvbWVudS1pdGVtcy9jYWVzYXItZmlsbGV0LXNhbmR3aWNoLmpwZWcnO1xuaW1wb3J0IENoaWNrZW5FbXBhbmFkYSBmcm9tICcuL2ltYWdlcy9tZW51LWl0ZW1zL2NoaWNrZW4tZW1wYW5hZGEuanBlZyc7XG5pbXBvcnQgRGFya0Nob2NvbGF0ZVRpcmFtaXN1IGZyb20gJy4vaW1hZ2VzL21lbnUtaXRlbXMvZGFyay1jaG9jb2xhdGUtdGlyYW1pc3UuanBlZyc7XG5pbXBvcnQgTGFzYWduYVJvbGxVcHMgZnJvbSAnLi9pbWFnZXMvbWVudS1pdGVtcy9sYXNhZ25hLXJvbGwtdXBzLmpwZWcnO1xuaW1wb3J0IFNpcmxvaW5HYXJsaWNCZWVmVGFwYSBmcm9tICcuL2ltYWdlcy9tZW51LWl0ZW1zL3NpcmxvaW4tZ2FybGljLWJlZWYtdGFwYS5qcGVnJztcbmltcG9ydCBUcmlvT2ZTYXVzYWdlc1Bhc3RhIGZyb20gJy4vaW1hZ2VzL21lbnUtaXRlbXMvdHJpby1vZi1zYXVzYWdlcy1wYXN0YS5qcGVnJztcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogJ0JhY29uIEZyaWVkIENoaWNrZW4gU3RlYWtzIHdpdGggTWlsa+KAmXNocm9vbSBHcmF2eScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnY3Jpc3AgY2hpY2tlbiBmaWxsZXRzIHNtb3RoZXJlZCBpbiBhIGNyZWFteSBtaWxrIGFuZCBtdXNocm9vbSBncmF2eSwgdG9wcGVkIHdpdGggeXVtbXkgYmFjb24gcGllY2VzOyBzZXJ2ZWQgd2l0aCBjb3JuIHJlbGlzaCcsXG4gICAgcHJpY2U6ICfigrE2MjknLFxuICAgIGltYWdlOiBCYWNvbkZyaWVkQ2hpY2tlbixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBd2Vzb21lIEJsdWViZXJyeSBQYW5jYWtlcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAndGhlIHBlcmZlY3QgY29tYmluYXRpb24gb2YgYnV0dGVybWlsayBwYW5jYWtlcyB3aXRoIHRoaWNrIHN0ZXdlZCBibHVlYmVycmllcycsXG4gICAgcHJpY2U6ICfigrEzMjknLFxuICAgIGltYWdlOiBCbHVlYmVycnlQYW5jYWtlcyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDcnVuY2h5IENoaWNrZW4gQ2Flc2FyIEZpbGxldCBTYW5kd2ljaCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnY3Jpc3AgYW5kIGp1aWN5IGNoaWNrZW4gYnJlYXN0IGZpbGxldCBsYXllcmVkIG9uIGNyaXNwIGxldHR1Y2UgYW5kIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgZHJpenpsZWQgd2l0aCBnYXJsaWMgY2Flc2FyIGRyZXNzaW5nIHNlcnZlZCB3aXRoIHBvdGF0byBjaGlwcycsXG4gICAgcHJpY2U6ICfigrEzNzUnLFxuICAgIGltYWdlOiBDYWVzYXJGaWxsZXRTYW5kd2ljaCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCYWtlZCBDcmVhbXkgQ2hpY2tlbiBFbXBhbmFkYScsXG4gICAgZGVzY3JpcHRpb246ICdidXR0ZXJ5IHBpZSBjcnVzdCB3aXRoIGNyZWFteSBjaGlja2VuIGZpbGxpbmdzJyxcbiAgICBwcmljZTogJ+KCsTk1JyxcbiAgICBpbWFnZTogQ2hpY2tlbkVtcGFuYWRhLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RhcmsgQ2hvY29sYXRlIFRpcmFtaXN1IENoZWVzZWNha2UnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ2RhcmsgY2hvY29sYXRlIGFuZCBjb2ZmZWUgZmxhdm9yZWQgY2hlZXNlY2FrZSBvbiBhIGNob2NvbGF0ZSBjb29raWUgY3J1c3Qgd2l0aCBjb2ZmZWUgZmxhdm9yZWQgd2hpcHBlZCBjcmVhbSwgdG9wcGVkIHdpdGggY3J1c2hlZCBidXR0ZXIgY29va2llcyBhbmQgZGFyayBjaG9jb2xhdGUgY3VybHMnLFxuICAgIHByaWNlOiAn4oKxMjI4JyxcbiAgICBpbWFnZTogRGFya0Nob2NvbGF0ZVRpcmFtaXN1LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xhc2FnbmEgUm9sbC11cHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ2hlcmJlZCBjcmVhbSBhbmQgcGFybWVzYW4gY2hlZXNlIGZpbGwgYWwgZGVudGUgbGFzYWduYSBzdHJpcHMsIHJvbGxlZCB1cCBhbmQgc21vdGhlcmVkIGluIG91ciBjbGFzc2ljIHRvbWF0byBtZWF0IHNhdWNlIGFuZCBtb3phcmVsbGEgY2hlZXNlJyxcbiAgICBwcmljZTogJ+KCsTQ2OScsXG4gICAgaW1hZ2U6IExhc2FnbmFSb2xsVXBzLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NpcmxvaW4gR2FybGljIEJlZWYgVGFwYScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnc3dlZXQgYW5kIHRlbmRlciBzaXJsb2luIGJlZWYgdGFwYSB0b3BwZWQgd2l0aCBmcmllZCBnYXJsaWMgcGllY2VzJyxcbiAgICBwcmljZTogJ+KCsTQyOScsXG4gICAgaW1hZ2U6IFNpcmxvaW5HYXJsaWNCZWVmVGFwYSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUcmlvIG9mIFNhdXNhZ2VzIFBhc3RhJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdwcm90ZWluLXBhY2tlZCBwYXN0YSBvZiBjcnVtYmxlZCBjaG9yaXpvLCBnYXJsaWMgbG9uZ2FuaXNhLCBhbmQgaHVuZ2FyaWFuIHNhdXNhZ2UgdG9zc2VkIGluIGdhcmxpYywgcGFybWVzYW4gY2hlZXNlLCBhbmQgYSB2ZXJ5IGxpZ2h0IGNyZWFtIHNhdWNlJyxcbiAgICBwcmljZTogJ+KCsTQzNScsXG4gICAgaW1hZ2U6IFRyaW9PZlNhdXNhZ2VzUGFzdGEsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbXM7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gIG5hbWUudGV4dENvbnRlbnQgPSAnQ2FmZSBTYW4gRGllZ28nO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnLCAnaG92ZXItZmlsbGVkLXNsaWRlLWRvd24nKTtcbiAgY29uc3QgaG9tZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvbWVTcGFuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lQnV0dG9uLmFwcGVuZENoaWxkKGhvbWVTcGFuKTtcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdXR0b24pO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2JywgJ2hvdmVyLWZpbGxlZC1zbGlkZS1kb3duJyk7XG4gIGNvbnN0IG1lbnVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZW51U3Bhbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51U3Bhbik7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2JywgJ2hvdmVyLWZpbGxlZC1zbGlkZS1kb3duJyk7XG4gIGNvbnN0IGNvbnRhY3RTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb250YWN0U3Bhbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdEJ1dHRvbi5hcHBlbmRDaGlsZChjb250YWN0U3Bhbik7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgcmV0dXJuIG5hdjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJ8KpIEFubmllIFNhbiBEaWVnbyc7XG5cbiAgY29uc3QgZ2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaExpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vYW1zYW5kaWVnby9yZXN0YXVyYW50LXBhZ2UnO1xuICBnaExpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgY29uc3QgZ2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBnaEljb24uY2xhc3NMaXN0LmFkZCgnZmFiJywgJ2ZhLWdpdGh1YicpO1xuXG4gIGdoTGluay5hcHBlbmRDaGlsZChnaEljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaExpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYnV0dG9uKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW5hdicpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbmF2JykpO1xuICBsb2FkSG9tZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL3dlYnNpdGUnO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=