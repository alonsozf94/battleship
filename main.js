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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\nbody {\r\n  height: 100vh;\r\n  background-color: lightblue;\r\n}\r\n\r\n/* Player Screen */\r\n.player-ui {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.boards-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n/* Create Player Pop-Up */\r\n\r\n/* Board */\r\n.board {\r\n  border: 1px solid black;\r\n}\r\n.board-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/* Coordinates */\r\n.coordinate {\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid black;\r\n  cursor: pointer;\r\n}\r\n.coordinate:hover {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Battleship: () => (/* binding */ Battleship)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinate */ \"./src/coordinate.js\");\n\r\n\r\n\r\nclass Battleship {\r\n  constructor(type, startPos, direction = _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.HORIZONTAL) {\r\n    this._name = type.name;\r\n    this._startPos = new _coordinate__WEBPACK_IMPORTED_MODULE_1__.Coordinate(startPos.x, startPos.y);\r\n    this._length = type.length;\r\n    this._direction = direction;\r\n    this._coordinates = [];\r\n    this._hitPoints = type.length;\r\n    this._isSunk = false;\r\n  }\r\n\r\n  // Getters and Setters\r\n  get name() {\r\n    return this._name;\r\n  }\r\n  get startPos() {\r\n    return this._startPos;\r\n  }\r\n  get length() {\r\n    return this._length;\r\n  }\r\n  get direction() {\r\n    return this._direction;\r\n  }\r\n  get coordinates() {\r\n    return this._coordinates;\r\n  }\r\n  get hitPoints() {\r\n    return this._hitPoints;\r\n  }\r\n  set hitPoints(value) {\r\n    this._hitPoints = value;\r\n  }\r\n  get isSunk() {\r\n    return this._isSunk;\r\n  }\r\n  set isSunk(value) {\r\n    this._isSunk = value;\r\n  }\r\n\r\n  // Actions\r\n  shipInfo() {\r\n    console.log(\r\n      `Ship: ${this.name} | Size: ${this.length} | HP: ${\r\n        this.hitPoints\r\n      } Coords: ${JSON.stringify(this.coordinates)} | Status: ${\r\n        this.isSunk ? \"Sunk\" : \"Floating\"\r\n      }`\r\n    );\r\n  }\r\n  generateCoordinates() {    \r\n    for (let i = 0; i < this.length; i++) {\r\n      if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.HORIZONTAL) {\r\n        this._coordinates.push(\r\n          new _coordinate__WEBPACK_IMPORTED_MODULE_1__.Coordinate(this.startPos.x, this.startPos.y + i, _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP)\r\n        );\r\n      } else if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.VERTICAL) {\r\n        this._coordinates.push(\r\n          new _coordinate__WEBPACK_IMPORTED_MODULE_1__.Coordinate(this.startPos.x + i, this.startPos.y, _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP)\r\n        );\r\n      }\r\n    }    \r\n  }\r\n  getHit(x, y) {\r\n    this.coordinates.forEach((coord) => {\r\n      if (coord.x == x && coord.y == y) {\r\n        this.hitPoints = this.hitPoints - 1;\r\n        coord.mark = _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.HIT;\r\n        if (this.hitPoints <= 0)\r\n          this.isSunk = true;\r\n        console.log(this);\r\n        return true;\r\n      } else return false;\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DIRECTIONS: () => (/* binding */ DIRECTIONS),\n/* harmony export */   MARKS: () => (/* binding */ MARKS),\n/* harmony export */   SHIPS: () => (/* binding */ SHIPS)\n/* harmony export */ });\nconst MARKS = (() => {\r\n  return {\r\n    FREE: 'F',\r\n    SHIP: 'S',\r\n    MARKED: 'M',\r\n    HIT: 'H'\r\n  }\r\n})();\r\n\r\nconst DIRECTIONS = (() => {\r\n  return {\r\n    VERTICAL: 'vertical',\r\n    HORIZONTAL: 'horizontal'\r\n  }\r\n})();\r\n\r\nconst SHIPS = (() => {\r\n  return {\r\n    CARRIER: {name: 'Carrier', length: 5},\r\n    BATTLESHIP: {name: 'Battleship', length: 4},\r\n    CRUISER: {name: 'Cruiser', length: 3},\r\n    SUBMARINE: {name: 'Submarine', length: 2},\r\n    DESTROYER: {name: 'Destroyer', length: 1},\r\n  }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/constants.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ui_player_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/player_ui */ \"./src/ui/player_ui.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Game(player1, player2, container) {\r\n  // Creates player and sets up properties\r\n  let playerScreen = (0,_ui_player_ui__WEBPACK_IMPORTED_MODULE_0__.playerUI)(container, player1);\r\n  return {\r\n    initializePlayers() {\r\n    player1.opponent = player2;\r\n    player2.opponent = player1;\r\n    },\r\n    positionShips(player) {\r\n      // Adds ships to players\r\n      // Sets up UI first\r\n      let playerScreen = (0,_ui_player_ui__WEBPACK_IMPORTED_MODULE_0__.playerUI)(container, player1);\r\n      playerScreen.renderUI();\r\n      this.attachCoordinateListeners(player, playerScreen);\r\n    },\r\n    attachCoordinateListeners(player, playerScreen) {\r\n      let board = container.querySelector('.player-board');\r\n      let coordinateList = board.querySelectorAll(\".coordinate\");\r\n      // console.log(coordinateList);\r\n      coordinateList.forEach((coord) => {\r\n        coord.addEventListener(\"click\", () => {\r\n          if (player.ships.length <= 4) {\r\n            console.log(\"LENGTH\");\r\n            console.log(player.ships.length);\r\n            \r\n            let shipToAdd = Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__.SHIPS)[player1.ships.length];\r\n            let newShip = new _battleship__WEBPACK_IMPORTED_MODULE_2__.Battleship(\r\n              shipToAdd,\r\n              { x: coord.dataset.x, y: coord.dataset.y },\r\n              _constants__WEBPACK_IMPORTED_MODULE_3__.DIRECTIONS.VERTICAL\r\n            );\r\n            player.addBattleship(newShip);\r\n            playerScreen.renderUI();\r\n            this.attachCoordinateListeners(player, playerScreen);\r\n          } else console.log(\"All ships have been placed\");\r\n        });\r\n      });\r\n    },\r\n    playTurn(player) {\r\n      this.positionShips(player, container);\r\n    },\r\n  };\r\n}\r\n\r\n\r\n/*\r\n\r\ngame starts\r\n\r\nyou get the ship positions\r\n\r\nYou add attack function\r\nThen you create new function for computer enemy and the computer shoots by itself\r\nAdd timer function\r\neverytime turn ends check status of player\r\n-- To be continued\r\n\r\nplayer 1 spawns [DONE]\r\nplayer 2 spawns [DONE]\r\neach get ships [DONE]\r\n\r\n{\r\nplayer 1 attacks [DONE]\r\nplayer 2 attacks [TODO]\r\n} repeat\r\n\r\none player loses all ships [TODO]\r\ngame over [TODO]\r\n\r\n*/\r\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ \"./src/coordinate.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n    this._board = this.buildBoard();\r\n  }\r\n\r\n  get board() {\r\n    return this._board;\r\n  }\r\n\r\n  buildBoard() {\r\n    let board = [];\r\n    for (let i = 0; i < 10; i++) {\r\n      board.push([]);\r\n      for (let j = 0; j < 10; j++) {\r\n        board[i].push(new _coordinate__WEBPACK_IMPORTED_MODULE_0__.Coordinate(i, j));\r\n      }\r\n    }\r\n    return board;\r\n  }\r\n\r\n  placeBattleship(ship) {\r\n    let startX = parseInt(ship.startPos.x);\r\n    let startY = parseInt(ship.startPos.y);\r\n    // if (startX + ship.length > 9 || startY + ship.length > 9) {\r\n    //   console.log(\"Out of bounds!\");\r\n    //   return false;\r\n    // }\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (ship.direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.HORIZONTAL) {\r\n        if (startY + ship.length > 9) {\r\n          console.log(\"Out of bounds!\");\r\n          return false;\r\n        } else if (this.verifyIfFree(startX, startY + i, ship.length - i, ship.direction, ship.name))\r\n          this._board[startX][startY + i].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP;\r\n        else {\r\n          return false\r\n        }\r\n      } else if (ship.direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.VERTICAL) {\r\n        if (startX + ship.length > 9) {\r\n          console.log(`Out of bounds! ${startX + ship.length}`);\r\n          return false;\r\n        } else if (this.verifyIfFree(startX + i, startY, ship.length - i, ship.direction, ship.name))\r\n          this._board[startX + i][startY].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP;\r\n        else {\r\n          return false\r\n        }\r\n      }\r\n    }\r\n    ship.generateCoordinates();\r\n    return true;\r\n  }\r\n\r\n  receiveHit(x, y) {\r\n    let target = this._board[x][y];\r\n    if (target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.FREE) {\r\n      // If hits open square\r\n      console.log(\"No ship! Marked!\");\r\n      this._board[x][y].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.MARKED;\r\n    } else if (target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP) {\r\n      // If it hits a ship\r\n      // Add hit logic here\r\n      console.log(\"Ship hit!\");\r\n      this._board[x][y].mark = _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.HIT;\r\n      return this._board[x][y];\r\n    } else if (target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.HIT || target.mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.MARKED) {\r\n      // If hits square alredy hit\r\n      console.log(\"Already marked\");\r\n      return false;\r\n    }\r\n  }\r\n\r\n  renderBoard() {\r\n    this._board.forEach((row) => {\r\n      let rowString = \"| \";\r\n      for (let i = 0; i < row.length; i++) {\r\n        rowString += `${row[i].mark} | `;\r\n      }\r\n      console.log(rowString);\r\n      console.log('- - - - - - - - - - - - - - - - - - - - -')\r\n    });\r\n  }\r\n\r\n  // Validators\r\n  verifyIfFree(x, y, length, direction, name = 'ship') {\r\n    for (let j = 0; j < length; j++) {\r\n      if (direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.HORIZONTAL) {\r\n        if (this._board[x][y + j].mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP) {\r\n          return false;\r\n        }\r\n      } else if (direction == _constants__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.VERTICAL) {\r\n        if (this._board[x + j][y].mark === _constants__WEBPACK_IMPORTED_MODULE_1__.MARKS.SHIP) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ \"./src/battleship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n// const player = new Player('Yudai');\r\n// const enemy = new Player('Alonso');\r\n\r\n// player.opponent = enemy;\r\n// enemy.opponent = player;\r\n\r\n// const cruiser1 = new Battleship(SHIPS.CRUISER, { x: 0, y: 0 }, DIRECTIONS.HORIZONTAL);\r\n// const cruiser2 = new Battleship(SHIPS.CRUISER, { x: 2, y: 5 }, DIRECTIONS.HORIZONTAL);\r\n\r\n// player.addBattleship(cruiser1)\r\n// enemy.addBattleship(cruiser2)\r\n\r\nfunction render() {\r\n\r\n  const playerYudai = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Yudai');\r\n  const playerAlonso = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Alonso');\r\n\r\n  let currentGame = (0,_game_js__WEBPACK_IMPORTED_MODULE_3__.Game)(playerYudai, playerAlonso, document.querySelector('body'));\r\n  currentGame.initializePlayers();\r\n  currentGame.playTurn(playerYudai);\r\n\r\n  // UI\r\n  // let playerScreen = playerUI(document.querySelector('body'), player);\r\n  // playerScreen.renderUI();\r\n}\r\n\r\nrender()\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nclass Player {\r\n  constructor(name, shipArray) {\r\n    this._name = name;\r\n    console.log(`Setting ${name}'s board...`);\r\n    this._board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\r\n    if (shipArray != null) {\r\n      this._ships = shipArray.forEach((ship) => {\r\n        this.addBattleship(ship);\r\n      });\r\n    } else this._ships = [];\r\n    this._isDefeated = false;\r\n    this._opponent = undefined;\r\n  }\r\n\r\n  // Getter & Setter\r\n  get name() {\r\n    return this._name;\r\n  }\r\n  get board() {\r\n    return this._board;\r\n  }\r\n  get ships() {\r\n    return this._ships;\r\n  }\r\n  get isDefeated() {\r\n    return this._isDefeated;\r\n  }\r\n  set isDefeated(value) {\r\n    this._isDefeated = value;\r\n  }\r\n  get opponent() {\r\n    return this._opponent;\r\n  }\r\n  set opponent(value) {\r\n    this._opponent = value;\r\n  }\r\n  // Functions\r\n  addBattleship(newShip) {\r\n    this.ships.forEach((ship) => {\r\n      if (ship.name === newShip.name) {\r\n        console.log(`${ship.name} already exists`);\r\n        return false;\r\n      }\r\n    });\r\n\r\n    if (this.board.placeBattleship(newShip)) {\r\n      console.log(`${newShip.name} placed`);\r\n      this._ships.push(newShip);\r\n    } else {\r\n      console.log(`Can't place ${newShip.name}`);\r\n      return false;\r\n    }\r\n  }\r\n\r\n  attack(x, y) {\r\n    console.log(`====================================================`);\r\n    console.log(\r\n      `Player ${this.name} is attacking player ${this.opponent.name} at position (${x},${y})`\r\n    );\r\n    if (this.opponent.board.receiveHit(x, y) != false) {\r\n      this.opponent.ships.forEach((ship) => {\r\n        ship.getHit(x, y);\r\n      });\r\n    }\r\n  }\r\n\r\n  checkStatus() {\r\n    if (this.ships.every((ship) => ship.isSunk == true)) {\r\n      console.log(`${this.name} lost`);\r\n    } else {\r\n      console.log(`${this.name} is on the game`);\r\n    }\r\n  }\r\n\r\n  showGame() {\r\n    console.log(`====================================================`);\r\n    console.log(`Player ${this.name}`);\r\n    console.log(`====================================================`);\r\n    this.ships.forEach((ship) => {\r\n      console.log(\r\n        `${this.name}'s ${ship.name} status is ${\r\n          ship.isSunk ? \"sunk\" : \"afloat\"\r\n        }`\r\n      );\r\n    });\r\n    this.board.renderBoard();\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ui/player_ui.js":
/*!*****************************!*\
  !*** ./src/ui/player_ui.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerUI: () => (/* binding */ playerUI)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nfunction playerUI(screen, player) {\r\n  // Maybe turn this into a class\r\n  return {\r\n    cellEmoji(mark) {\r\n      switch (mark) {\r\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.FREE:\r\n          return \"🌊\";\r\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.MARKED:\r\n          return \"❌\";\r\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.SHIP:\r\n          return \"⛵\";\r\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.MARKS.HIT:\r\n          return \"💥\";\r\n        default:\r\n          break;\r\n      }\r\n    },\r\n    renderShips() {\r\n      let shipGroup = document.createElement(\"div\");\r\n      return shipGroup;\r\n    },\r\n    renderPlayerBoard() {\r\n      // Creating container tags\r\n      let playerUIBoard = document.createElement(\"div\");\r\n      let playerGrid = player.board.board;\r\n\r\n      playerUIBoard.classList.add('board');\r\n      playerUIBoard.classList.add('player-board');\r\n\r\n      // Creating grid\r\n      playerGrid.forEach((row) => {\r\n        let gridRow = document.createElement(\"div\");\r\n        gridRow.classList.add(\"board-row\");\r\n        row.forEach((coord) => {\r\n          let gridCoordinate = document.createElement(\"div\");\r\n          gridCoordinate.classList.add(\"coordinate\");\r\n          gridCoordinate.classList.add(\"player-coord\");\r\n          gridCoordinate.classList.add(\"opponent-coord\");\r\n          gridCoordinate.setAttribute('data-x',`${coord.x}`);\r\n          gridCoordinate.setAttribute('data-y',`${coord.y}`);\r\n          gridCoordinate.innerHTML = this.cellEmoji(coord.mark);\r\n          gridRow.appendChild(gridCoordinate);\r\n        });\r\n        playerUIBoard.appendChild(gridRow);\r\n      });\r\n\r\n      return playerUIBoard;\r\n    },\r\n    renderOpponentBoard() {\r\n      // Creating container tags\r\n      let opponentUIBoard = document.createElement(\"div\");\r\n      let opponentGrid = player.opponent.board.board;\r\n\r\n      opponentUIBoard.classList.add('board');\r\n      opponentUIBoard.classList.add('opponent-board');\r\n\r\n      // Creating grid\r\n      opponentGrid.forEach((row) => {\r\n        let gridRow = document.createElement(\"div\");\r\n        gridRow.classList.add(\"board-row\");\r\n        row.forEach((coord) => {\r\n          let gridCoordinate = document.createElement(\"div\");\r\n          gridCoordinate.classList.add(\"coordinate\");\r\n          gridCoordinate.setAttribute('data-x',`${coord.x}`);\r\n          gridCoordinate.setAttribute('data-y',`${coord.y}`);\r\n          gridCoordinate.innerHTML = this.cellEmoji(coord.mark);\r\n          gridRow.appendChild(gridCoordinate);\r\n        });\r\n        opponentUIBoard.appendChild(gridRow);\r\n      });\r\n\r\n      return opponentUIBoard;\r\n    },\r\n    renderUI() {\r\n      screen.innerHTML = '';\r\n      \r\n      let playerUI = document.createElement(\"div\");\r\n      let boardsContainer = document.createElement(\"div\");\r\n      let playerShips = this.renderShips();\r\n      let playerBoard = this.renderPlayerBoard();\r\n      let oppBoard = this.renderOpponentBoard();\r\n\r\n      playerUI.classList.add('player-ui');\r\n      boardsContainer.classList.add('boards-container');\r\n\r\n      playerUI.appendChild(playerShips);\r\n      boardsContainer.appendChild(playerBoard);\r\n      boardsContainer.appendChild(oppBoard);\r\n      playerUI.appendChild(boardsContainer)\r\n      screen.appendChild(playerUI);\r\n    },\r\n  };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/ui/player_ui.js?");

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