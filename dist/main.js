/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/1714629714395561.jpg */ \"./src/assets/1714629714395561.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General */\r\n:root {\r\n  --taka-gradient: linear-gradient(\r\n    90deg,\r\n    rgba(161, 161, 189, 1) 0%,\r\n    rgba(0, 0, 0, 1) 50%,\r\n    rgba(199, 198, 217, 1) 100%\r\n  );\r\n}\r\nbody {\r\n  height: 100vh;\r\n  background: transparent url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat\r\n    center;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* Player Screen */\r\n\r\n/* Containers */\r\n.player-ui {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.game-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n.player-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.board-container {\r\n  display: flex;\r\n}\r\n\r\n/* Title */\r\n.title {\r\n  border-radius: 8px;\r\n  background: var(--taka-gradient);\r\n  color: white;\r\n  padding: 5px 10px;\r\n}\r\n.player-name {\r\n  grid-area: 1 / 1 / 2 / 3;\r\n  text-align: center;\r\n}\r\n.player-name h2 {\r\n  padding: 5px 10px;\r\n  margin: 0;\r\n  display: inline-block;\r\n  border-radius: 8px;\r\n  background: var(--taka-gradient);\r\n  color: white;\r\n}\r\n\r\n/* Ship List */\r\n.ship-list {\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n  margin-right: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  grid-area: 2 / 1 / 3 / 2;\r\n  border: none;\r\n  font-size: 2em;\r\n}\r\n.ship-icon {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border-radius: 8px;\r\n  padding: 3px;\r\n}\r\n\r\n/* Board */\r\n.board {\r\n  border: 10px solid;\r\n  border-image: var(--taka-gradient) 1;\r\n  grid-area: 2 / 2 / 3 / 3;\r\n}\r\n.board-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/* Coordinates */\r\n.coordinate {\r\n  width: 45px;\r\n  height: 45px;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 1.4em;\r\n}\r\n.coordinate:hover {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n/* Prompt */\r\n.prompt {\r\n  padding: 5px;\r\n  width: 100%;\r\n  color: white;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  font-size: 2em;\r\n  text-align: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battleship: () => (/* binding */ Battleship)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinate */ \"./src/coordinate.js\");\n\r\n\r\n\r\nclass Battleship {\r\n  constructor(type, startPos, direction = _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.HORIZONTAL) {\r\n    this._name = type.name;\r\n    this._startPos = new _coordinate__WEBPACK_IMPORTED_MODULE_1__.Coordinate(parseInt(startPos.x), parseInt(startPos.y));\r\n    this._length = type.length;\r\n    this._direction = direction;\r\n    this._coordinates = [];\r\n    this._hitPoints = type.length;\r\n    this._isSunk = false;\r\n  }\r\n\r\n  // Getters and Setters\r\n  get name() {\r\n    return this._name;\r\n  }\r\n  get startPos() {\r\n    return this._startPos;\r\n  }\r\n  get length() {\r\n    return this._length;\r\n  }\r\n  get direction() {\r\n    return this._direction;\r\n  }\r\n  get coordinates() {\r\n    return this._coordinates;\r\n  }\r\n  get hitPoints() {\r\n    return this._hitPoints;\r\n  }\r\n  set hitPoints(value) {\r\n    this._hitPoints = value;\r\n  }\r\n  get isSunk() {\r\n    return this._isSunk;\r\n  }\r\n  set isSunk(value) {\r\n    this._isSunk = value;\r\n  }\r\n\r\n  // Actions\r\n  shipInfo() {\r\n    console.log(\r\n      `Ship: ${this.name} | Size: ${this.length} | HP: ${\r\n        this.hitPoints\r\n      } Coords: ${JSON.stringify(this.coordinates)} | Status: ${\r\n        this.isSunk ? \"Sunk\" : \"Floating\"\r\n      }`\r\n    );\r\n  }\r\n  generateCoordinates() {    \r\n    for (let i = 0; i < this.length; i++) {\r\n      if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.HORIZONTAL) {\r\n        this._coordinates.push(\r\n          new _coordinate__WEBPACK_IMPORTED_MODULE_1__.Coordinate(this.startPos.x, this.startPos.y + i, _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP)\r\n        );\r\n      } else if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.VERTICAL) {\r\n        this._coordinates.push(\r\n          new _coordinate__WEBPACK_IMPORTED_MODULE_1__.Coordinate(this.startPos.x + i, this.startPos.y, _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP)\r\n        );\r\n      }\r\n    }    \r\n  }\r\n  getHit(x, y) {\r\n    \r\n    this.coordinates.forEach((coord) => {\r\n      // // Here's the problem\r\n      // console.log(`Checking (${coord.x},${coord.y})`);\r\n      // console.log(`(${typeof coord.x},${typeof coord.y})`);\r\n      // console.log(`(${typeof x},${typeof y})`);\r\n            \r\n      if (coord.x === Number(x) && coord.y === Number(y)) {\r\n        this.hitPoints = this.hitPoints - 1;\r\n        coord.mark = _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.HIT;\r\n        if (this.hitPoints <= 0) this.isSunk = true;\r\n        return true;\r\n      } else return false;\r\n    });\r\n  }\r\n  showHP() {\r\n    console.log(`${this.name}'s hit points are ${this.hitPoints}`);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Computer: () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\n\r\n\r\nclass Computer extends _player__WEBPACK_IMPORTED_MODULE_2__.Player {\r\n  // You have to create a list of stored moves and then for every attack store the last two moves\r\n  // If the attack hit a ship then:\r\n  // You will check nearby coordinates (elaborate on this)\r\n  constructor() {\r\n    super(\"Computer\");\r\n    this.moveList = [];\r\n  }\r\n  setupBattleShips() {\r\n    while (this.ships.length < 5) {\r\n      let randomShipPosition = this.randomizeData();\r\n      let shipToAdd = Object.values(_constants__WEBPACK_IMPORTED_MODULE_1__.SHIPS)[this.ships.length];\r\n      let newShip = new _battleship__WEBPACK_IMPORTED_MODULE_0__.Battleship(\r\n        shipToAdd,\r\n        { x: randomShipPosition.x, y: randomShipPosition.y },\r\n        randomShipPosition.direction\r\n      );\r\n\r\n      super.addBattleship(newShip);\r\n    }\r\n  }\r\n  randomizeData() {\r\n    let randX = Math.floor(Math.random() * 9);\r\n    let randY = Math.floor(Math.random() * 9);\r\n    let randDirection = Math.floor(Math.random() * 2)\r\n      ? _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.HORIZONTAL\r\n      : _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.VERTICAL;\r\n    return {\r\n      x: randX,\r\n      y: randY,\r\n      direction: randDirection,\r\n    };\r\n  }\r\n  autoAttack() {\r\n    let result = false;\r\n\r\n    if (this.moveList.length == 0) {\r\n      result = this.randomAttack();\r\n    } else {\r\n      result = this.areaAttack();\r\n    }\r\n    return result;\r\n  }\r\n  showGame() {\r\n    super.showGame();\r\n    console.log(this.moveList);\r\n  }\r\n\r\n  // Attack Functions\r\n  randomAttack() {\r\n    let attackCoordinate = {\r\n      x: this.randomizeData().x,\r\n      y: this.randomizeData().y,\r\n    };\r\n    let attackResult = super.attack(attackCoordinate.x, attackCoordinate.y);\r\n    if (attackResult !== false) {\r\n      attackCoordinate.result = attackResult;\r\n      this.moveList.push(attackCoordinate);\r\n    }\r\n    return attackResult;\r\n  }\r\n  areaAttack() {\r\n    let attackResult = false;\r\n    let movesLength = this.moveList.length;\r\n    let lastAttack =\r\n      this.moveList.length > 0 ? this.moveList[movesLength - 1] : null;\r\n\r\n    // Code for later\r\n\r\n    if (lastAttack.result.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.HIT) {\r\n      let attackCoordinate = {\r\n        x: lastAttack.x - 1,\r\n        y: lastAttack.y,\r\n      };\r\n\r\n      attackResult = super.attack(attackCoordinate.x, attackCoordinate.y);\r\n      attackCoordinate.result = attackResult;\r\n      this.moveList.push(attackCoordinate);\r\n      return attackResult;\r\n    } else {\r\n      attackResult = this.randomAttack();\r\n      return attackResult;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/computer.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DIRECTIONS: () => (/* binding */ DIRECTIONS),\n/* harmony export */   GAMEMODES: () => (/* binding */ GAMEMODES),\n/* harmony export */   MARKS: () => (/* binding */ MARKS),\n/* harmony export */   PLAYERS: () => (/* binding */ PLAYERS),\n/* harmony export */   SHIPS: () => (/* binding */ SHIPS)\n/* harmony export */ });\nconst MARKS = (() => {\r\n  return {\r\n    FREE: 'F',\r\n    SHIP: 'S',\r\n    MARKED: 'M',\r\n    HIT: 'H'\r\n  }\r\n})();\r\n\r\nconst DIRECTIONS = (() => {\r\n  return {\r\n    VERTICAL: 'vertical',\r\n    HORIZONTAL: 'horizontal'\r\n  }\r\n})();\r\n\r\nconst SHIPS = (() => {\r\n  return {\r\n    CARRIER: {name: 'Carrier', length: 5},\r\n    BATTLESHIP: {name: 'Battleship', length: 4},\r\n    CRUISER: {name: 'Cruiser', length: 3},\r\n    SUBMARINE: {name: 'Submarine', length: 3},\r\n    DESTROYER: {name: 'Destroyer', length: 2},\r\n  }\r\n})();\r\n\r\nconst PLAYERS = (() => {\r\n  return {\r\n    PLAYER: 'Player',\r\n    OPPONENT: 'Opponnent'\r\n  }\r\n})();\r\n\r\nconst GAMEMODES = (() => {\r\n  return {\r\n    HUMAN: 'Human',\r\n    COMPUTER: 'Computer'\r\n  }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/constants.js?");

/***/ }),

/***/ "./src/coordinate.js":
/*!***************************!*\
  !*** ./src/coordinate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Coordinate: () => (/* binding */ Coordinate)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\nclass Coordinate {\r\n  constructor(x, y, mark = _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.FREE) {\r\n    this._x = x;\r\n    this._y = y;\r\n    this._mark = mark;\r\n  }\r\n  get x() {\r\n    return this._x;\r\n  }\r\n  get y() {\r\n    return this._y;\r\n  }\r\n  get mark() {\r\n    return this._mark;\r\n  }\r\n  set mark(value) {\r\n    this._mark = value;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/coordinate.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ui_player_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/player_ui */ \"./src/ui/player_ui.js\");\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\n\r\nfunction Game(player1, player2, container, gamemode) {\r\n  // Create both player screens for rendering\r\n  // Get UI containers\r\n  let player1Screen = (0,_ui_player_ui__WEBPACK_IMPORTED_MODULE_0__.playerUI)(container, player1);\r\n  let player2Screen = (0,_ui_player_ui__WEBPACK_IMPORTED_MODULE_0__.playerUI)(container, player2);\r\n  return {\r\n    initializePlayers() {\r\n      player1.opponent = player2;\r\n      player2.opponent = player1;\r\n    },\r\n    setupPhase() {\r\n      return new Promise((resolve) => {\r\n        // Renders player 1 screen\r\n        player1Screen.renderUI();\r\n        this.activateBoardForSetup(player1, player1Screen, (p1) => {\r\n          // After first player finished positioning ships\r\n          // Renders second screen\r\n          console.log(`${p1.name} ready`);\r\n          if (gamemode === _constants__WEBPACK_IMPORTED_MODULE_2__.GAMEMODES.HUMAN) {\r\n            player2Screen.renderUI();\r\n            this.activateBoardForSetup(player2, player2Screen, (p2) => {\r\n              // After second player finished positioning ships\r\n              console.log(`${p2.name} ready`);\r\n              player1Screen.renderUI();\r\n            });\r\n          } else if (gamemode === _constants__WEBPACK_IMPORTED_MODULE_2__.GAMEMODES.COMPUTER) {\r\n            console.log(`Setting up Computer`);\r\n            player2.setupBattleShips();\r\n            console.log(`${player2.name} ready`);\r\n            player2Screen.renderUI();\r\n          }\r\n          resolve();\r\n        });\r\n      });\r\n    },\r\n    activateBoardForSetup(player, playerScreen, onShipsReady) {\r\n      // Get UI containers\r\n      let board = container.querySelector(\".player-board\");\r\n      let coordinateList = board.querySelectorAll(\".coordinate\");\r\n\r\n      coordinateList.forEach((coord) => {\r\n        playerScreen.renderPrompt(\"Setting up boards...\");\r\n        coord.addEventListener(\"click\", () => {\r\n          if (player.ships.length < 5) {\r\n            let shipToAdd = Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__.SHIPS)[player.ships.length];\r\n            let newShip = new _battleship__WEBPACK_IMPORTED_MODULE_1__.Battleship(\r\n              shipToAdd,\r\n              { x: coord.dataset.x, y: coord.dataset.y },\r\n              _constants__WEBPACK_IMPORTED_MODULE_2__.DIRECTIONS.VERTICAL\r\n            );\r\n            player.addBattleship(newShip);\r\n            playerScreen.renderUI();\r\n\r\n            if (player.ships.length === 5) {\r\n              onShipsReady(player);\r\n            } else {\r\n              // Use bind to ensure proper context if needed\r\n              this.activateBoardForSetup.bind(this)(\r\n                player,\r\n                playerScreen,\r\n                onShipsReady\r\n              );\r\n            }\r\n          }\r\n        });\r\n      });\r\n    },\r\n    attackPhase() {\r\n      return new Promise((resolve) => {\r\n        player1Screen.renderUI();\r\n        player1Screen.renderPrompt(`${player1.name} Turn`);\r\n        this.activateBoardForAttacking(player1, player1Screen, (p1) => {\r\n          player1Screen.renderUI();          \r\n          console.log(`Is ${player1.name} opponent defeated? ${player2.isDefeated}`);\r\n          if (player2.isDefeated) {\r\n            player1Screen.renderPrompt(`Game Over!`);\r\n            resolve();\r\n          } else {\r\n            if (gamemode === _constants__WEBPACK_IMPORTED_MODULE_2__.GAMEMODES.HUMAN) {\r\n              this.activateBoardForAttacking(player2, player2Screen, (p2) => {\r\n                console.log(`${p2.name} attack finished`);\r\n                if (player1.isDefeated) {\r\n                  player1Screen.renderPrompt(`Game Over!`);\r\n                  console.log(`Game Over!`);\r\n                  resolve();\r\n                } else this.attackPhase();\r\n              });\r\n            } else if (gamemode === _constants__WEBPACK_IMPORTED_MODULE_2__.GAMEMODES.COMPUTER) {\r\n              player1Screen.renderPrompt(`Computer Turn`)\r\n              this.computerTimerAttack(player2, 1000, (p2) => {\r\n                console.log(`${p2.name} attack finished`);\r\n                if (player1.isDefeated) {\r\n                  player1Screen.renderPrompt(`Game Over!`);\r\n                  console.log(`Game Over!`);\r\n                  resolve();\r\n                } else this.attackPhase();\r\n              });\r\n            }\r\n          }\r\n        });\r\n      });\r\n    },\r\n    activateBoardForAttacking(player, playerScreen, onAttackSuccessful) {\r\n      // Get UI containers\r\n      let board = container.querySelector(\".opponent-board\");\r\n      let coordinateList = board.querySelectorAll(\".coordinate\");\r\n\r\n      coordinateList.forEach((coord) => {\r\n        coord.addEventListener(\"click\", () => {\r\n          if (player.attack(coord.dataset.x, coord.dataset.y) !== false)\r\n            onAttackSuccessful(player);\r\n          else\r\n            this.activateBoardForAttacking(\r\n              player,\r\n              playerScreen,\r\n              onAttackSuccessful\r\n            );\r\n        });\r\n      });\r\n    },\r\n    computerTimerAttack(player, time, onAttackSuccessful) {\r\n      window.setTimeout(() => {\r\n        if (player.autoAttack() !== false) onAttackSuccessful(player);\r\n        else this.computerTimerAttack(player, 0, onAttackSuccessful);\r\n      }, time);\r\n    },\r\n  };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ \"./src/coordinate.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n    this._board = this.buildBoard();\r\n  }\r\n  get board() {\r\n    return this._board;\r\n  }\r\n  buildBoard() {\r\n    let board = [];\r\n    for (let i = 0; i < 10; i++) {\r\n      board.push([]);\r\n      for (let j = 0; j < 10; j++) {\r\n        board[i].push(new _coordinate__WEBPACK_IMPORTED_MODULE_0__.Coordinate(i, j));\r\n      }\r\n    }\r\n    return board;\r\n  }\r\n  placeBattleship(ship) {\r\n    let startX = parseInt(ship.startPos.x);\r\n    let startY = parseInt(ship.startPos.y);\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (ship.direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.HORIZONTAL) {\r\n        if (startY + ship.length > 9) {\r\n          console.log(\"Out of bounds!\");\r\n          return false;\r\n        } else if (\r\n          this.verifyIfFree(\r\n            startX,\r\n            startY + i,\r\n            ship.length - i,\r\n            ship.direction,\r\n            ship.name\r\n          )\r\n        )\r\n          this._board[startX][startY + i].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP;\r\n        else {\r\n          return false;\r\n        }\r\n      } else if (ship.direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.VERTICAL) {\r\n        if (startX + (ship.length - 1) > 9) {\r\n          // console.log(`Out of bounds! ${startX + ship.length}`);\r\n          return false;\r\n        } else if (\r\n          this.verifyIfFree(\r\n            startX + i,\r\n            startY,\r\n            ship.length - i,\r\n            ship.direction,\r\n            ship.name\r\n          )\r\n        )\r\n          this._board[startX + i][startY].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP;\r\n        else {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n    ship.generateCoordinates();\r\n    return true;\r\n  }\r\n  receiveHit(x, y) {\r\n    let target = this._board[parseInt(x)][parseInt(y)]\r\n    if (target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.HIT || target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.MARKED) return false;\r\n    else {\r\n      if (target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.FREE) this._board[x][y].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.MARKED;\r\n      if (target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP) this._board[x][y].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.HIT;\r\n      return this._board[x][y];      \r\n    }\r\n  }\r\n  renderBoard() {\r\n    this._board.forEach((row) => {\r\n      let rowString = \"| \";\r\n      for (let i = 0; i < row.length; i++) {\r\n        rowString += `${row[i].mark} | `;\r\n      }\r\n      console.log(rowString);\r\n      console.log(\"- - - - - - - - - - - - - - - - - - - - -\");\r\n    });\r\n  }\r\n  // Validators\r\n  verifyIfFree(x, y, length, direction, name = \"ship\") {\r\n    for (let j = 0; j < length; j++) {\r\n      if (direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.HORIZONTAL) {\r\n        if (this._board[x][y + j].mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP) {\r\n          return false;\r\n        }\r\n      } else if (direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.VERTICAL) {\r\n        if (this._board[x + j][y].mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computer.js */ \"./src/computer.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction render() {\r\n  let gameContainer = document.querySelector(\"body\");\r\n  const myPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(\"Player\");\r\n  const computerPlayer = new _computer_js__WEBPACK_IMPORTED_MODULE_3__.Computer(\"XLR8\");\r\n\r\n  let currentGame = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.Game)(\r\n    myPlayer,\r\n    computerPlayer,\r\n    gameContainer,\r\n    _constants_js__WEBPACK_IMPORTED_MODULE_4__.GAMEMODES.COMPUTER\r\n  );\r\n  currentGame.initializePlayers();\r\n  currentGame.setupPhase(_constants_js__WEBPACK_IMPORTED_MODULE_4__.GAMEMODES.COMPUTER).then(() => {\r\n    console.log(\"Set up done. Game start!\");\r\n    \r\n    // Next step is to do the attacks\r\n    currentGame.attackPhase().then(() => {\r\n      console.log(`Woohoo!`);\r\n    });\r\n  });\r\n}\r\n\r\nrender();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nclass Player {\r\n  constructor(name, shipArray) {\r\n    this._name = name;\r\n    this._board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\r\n    this._ships = [];\r\n    this._isDefeated = false;\r\n    this._opponent = undefined;\r\n  }\r\n\r\n  // Getter & Setter\r\n  get name() {\r\n    return this._name;\r\n  }\r\n  get board() {\r\n    return this._board;\r\n  }\r\n  get ships() {\r\n    return this._ships;\r\n  }\r\n  get isDefeated() {\r\n    return this._isDefeated;\r\n  }\r\n  set isDefeated(value) {\r\n    this._isDefeated = value;\r\n  }\r\n  get opponent() {\r\n    return this._opponent;\r\n  }\r\n  set opponent(value) {\r\n    this._opponent = value;\r\n  }\r\n  // Functions\r\n  addBattleship(newShip) {\r\n    this.ships.forEach((ship) => {\r\n      if (ship.name === newShip.name) {\r\n        // console.log(`${ship.name} already exists`);\r\n        return false;\r\n      }\r\n    });\r\n\r\n    if (this.board.placeBattleship(newShip)) {\r\n      // console.log(`${newShip.name} placed`);\r\n      this._ships.push(newShip);\r\n    } else {\r\n      // console.log(`Can't place ${newShip.name}`);\r\n      return false;\r\n    }\r\n  }\r\n  attack(x, y) {\r\n    console.log(`==${this.name}'s Attack==`);\r\n    console.log(\r\n      `⚔️ ${this.name} attacked ${this.opponent.name} at (${x},${y})`\r\n    );\r\n    let shot = this.opponent.board.receiveHit(x, y);\r\n    if (shot == false) {\r\n      console.log(`Shot missed by ${this.name} at ${x},${y}`);\r\n      return shot;\r\n    } else {\r\n      if (shot.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.HIT) {\r\n        this.opponent.ships.forEach((ship) => {\r\n          let hitRes = ship.getHit(x, y);\r\n          this.opponent.updateStatus()\r\n          console.log(`Hit Result: ${hitRes}`);\r\n        });\r\n      }\r\n      return shot;\r\n    }\r\n  }\r\n  updateStatus() {\r\n    if (this.ships.every((ship) => ship.isSunk === true)) {\r\n      this.isDefeated = true\r\n    };\r\n  }\r\n  showGame() {\r\n    console.log(`==-==`);\r\n    console.log(`Player ${this.name}`);\r\n    console.log(`==-==`);\r\n    this.ships.forEach((ship) => {\r\n      console.log(\r\n        `${this.name}'s ${ship.name} status is ${\r\n          ship.isSunk ? \"sunk\" : \"afloat\"\r\n        }`\r\n      );\r\n    });\r\n    this.board.renderBoard();\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ui/player_ui.js":
/*!*****************************!*\
  !*** ./src/ui/player_ui.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerUI: () => (/* binding */ playerUI)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nfunction playerUI(screen, player) {\r\n  // Maybe turn this into a class\r\n  return {\r\n    cellEmoji(mark, player = _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYERS.PLAYER) {\r\n      if (player === _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYERS.PLAYER) {\r\n        switch (mark) {\r\n          case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.FREE:\r\n            return \"🌊\";\r\n          case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.MARKED:\r\n            return \"❌\";\r\n          case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP:\r\n            return \"⛵\";\r\n          case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.HIT:\r\n            return \"💀\";\r\n          default:\r\n            break;\r\n        }\r\n      } else if (player === _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYERS.OPPONENT) {\r\n        if (mark == _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.HIT) return \"💥\";\r\n        if (mark == _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.MARKED) return \"❌\";\r\n        if (mark == _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP) return \"⛵\";\r\n        else return \"🌊\"\r\n      }\r\n    },\r\n    createPlayerContainer(user) {\r\n      let playerContainer = document.createElement(\"div\");\r\n      playerContainer.classList.add('player-container');\r\n      playerContainer.innerHTML = `<div class='player-name'><h2>${user.name}</h2></div>`\r\n      return playerContainer;\r\n    },\r\n    renderHeader() {\r\n      let header = document.createElement('div');\r\n      header.innerHTML = `<h1 class='title'>Battleship</h1>`;\r\n      return header\r\n    },\r\n    renderShips(user) {\r\n      let shipGroup = document.createElement(\"div\");\r\n      shipGroup.classList.add('ship-list')\r\n      user.ships.forEach((ship) => {\r\n        let shipIcon = document.createElement(\"div\");\r\n        shipIcon.innerHTML = ship.isSunk ? `💀` : `🚢`;\r\n        shipIcon.classList.add(\"ship-icon\")\r\n        shipGroup.appendChild(shipIcon); \r\n      })\r\n      return shipGroup;\r\n    },\r\n    renderPlayerBoard() {\r\n      // Creating container tags\r\n      let playerContainer = this.createPlayerContainer(player);\r\n      let boardContainer = document.createElement(\"div\");\r\n      let playerShips = this.renderShips(player);\r\n      let playerUIBoard = document.createElement(\"div\");\r\n      let playerGrid = player.board.board;\r\n\r\n      boardContainer.classList.add(\"board-container\")\r\n      playerUIBoard.classList.add(\"board\"); \r\n      playerUIBoard.classList.add(\"player-board\");\r\n\r\n      // Creating grid\r\n      playerGrid.forEach((row) => {\r\n        let gridRow = document.createElement(\"div\");\r\n        gridRow.classList.add(\"board-row\");\r\n        row.forEach((coord) => {\r\n          let gridCoordinate = document.createElement(\"div\");\r\n          gridCoordinate.classList.add(\"coordinate\");\r\n          gridCoordinate.classList.add(\"player-coord\");\r\n          gridCoordinate.classList.add(\"opponent-coord\");\r\n          gridCoordinate.setAttribute(\"data-x\", `${coord.x}`);\r\n          gridCoordinate.setAttribute(\"data-y\", `${coord.y}`);\r\n          gridCoordinate.innerHTML = this.cellEmoji(coord.mark);\r\n          gridRow.appendChild(gridCoordinate);\r\n        });\r\n        playerUIBoard.appendChild(gridRow);\r\n      });\r\n\r\n      boardContainer.appendChild(playerShips);\r\n      boardContainer.appendChild(playerUIBoard);\r\n      playerContainer.appendChild(boardContainer);\r\n      return playerContainer;\r\n    },\r\n    renderOpponentBoard() {\r\n      // Creating container tags\r\n      let playerContainer = this.createPlayerContainer(player.opponent)\r\n      let boardContainer = document.createElement(\"div\");\r\n      let opponentShips = this.renderShips(player.opponent)\r\n      let opponentUIBoard = document.createElement(\"div\");\r\n      let opponentGrid = player.opponent.board.board;\r\n\r\n      boardContainer.classList.add(\"board-container\")\r\n      opponentUIBoard.classList.add(\"board\");\r\n      opponentUIBoard.classList.add(\"opponent-board\");\r\n\r\n      // Creating grid\r\n      opponentGrid.forEach((row) => {\r\n        let gridRow = document.createElement(\"div\");\r\n        gridRow.classList.add(\"board-row\");\r\n        row.forEach((coord) => {\r\n          let gridCoordinate = document.createElement(\"div\");\r\n          gridCoordinate.classList.add(\"coordinate\");\r\n          gridCoordinate.setAttribute(\"data-x\", `${coord.x}`);\r\n          gridCoordinate.setAttribute(\"data-y\", `${coord.y}`);\r\n\r\n          gridCoordinate.innerHTML = this.cellEmoji(coord.mark, _constants__WEBPACK_IMPORTED_MODULE_0__.PLAYERS.OPPONENT);\r\n          gridRow.appendChild(gridCoordinate);\r\n        });\r\n        opponentUIBoard.appendChild(gridRow);\r\n      });\r\n\r\n      boardContainer.appendChild(opponentShips);\r\n      boardContainer.appendChild(opponentUIBoard);\r\n      playerContainer.appendChild(boardContainer);\r\n      return playerContainer;\r\n    },\r\n    renderPrompt(message){\r\n      let prompt = document.querySelector('.prompt');\r\n      if (prompt === null) {\r\n        prompt = document.createElement('div');\r\n        prompt.classList.add('prompt')\r\n        screen.appendChild(prompt)\r\n      }\r\n      prompt.innerHTML = \"\";\r\n      prompt.innerHTML = `${message}`;\r\n    },\r\n    renderUI() {\r\n      screen.innerHTML = \"\";\r\n\r\n      let testBtn = document.createElement('button');\r\n\r\n      let playerUI = document.createElement(\"div\");\r\n      let header = this.renderHeader();\r\n      let gameContainer = document.createElement(\"div\");\r\n      let playerBoard = this.renderPlayerBoard();\r\n      let oppBoard = this.renderOpponentBoard();\r\n\r\n      playerUI.classList.add(\"player-ui\");\r\n      gameContainer.classList.add(\"game-container\");\r\n\r\n      gameContainer.appendChild(playerBoard);\r\n      gameContainer.appendChild(oppBoard);\r\n      screen.appendChild(header);\r\n      playerUI.appendChild(gameContainer);\r\n      screen.appendChild(playerUI);\r\n      screen.appendChild(testBtn);\r\n\r\n\r\n      testBtn.addEventListener('click', () => {\r\n        player.showGame();\r\n        player.opponent.showGame();\r\n        \r\n      })\r\n    },\r\n  };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/player_ui.js?");

/***/ }),

/***/ "./src/assets/1714629714395561.jpg":
/*!*****************************************!*\
  !*** ./src/assets/1714629714395561.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b69e53d433c81ee11a7.jpg\";\n\n//# sourceURL=webpack://battleship/./src/assets/1714629714395561.jpg?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;