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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Cell {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.state = 0;\n    this.nextState = 0;\n  }\n\n  getNode() {\n    return document.querySelector(`#x${this.x}_y${this.y}`);\n  }\n\n  createNode() {\n    let cell = document.createElement(\"div\");\n    cell.className = \"dead\";\n    cell.id = `x${this.x}_y${this.y}`;\n    cell.addEventListener(\"click\", () => {\n      if (cell.className == \"dead\") {\n        cell.className = \"live\";\n        this.state = 1;\n      } else {\n        cell.className = \"dead\";\n        this.state = 0;\n      }\n    });\n    return cell;\n  }\n\n  numNeighbor() {\n    let numNeighbor = 0;\n    let neighbors = [[this.x - 1, this.y], [this.x - 1, this.y - 1], [this.x - 1, this.y + 1], [this.x, this.y - 1], [this.x, this.y + 1], [this.x + 1, this.y + 1], [this.x + 1, this.y - 1], [this.x + 1, this.y]];\n    neighbors.forEach(cell => {\n      let neighbor = document.querySelector(`#x${cell[0]}_y${cell[1]}`) || 0;\n      neighbor && neighbor.classList.contains(\"live\") ? numNeighbor += 1 : \"\";\n    });\n    return numNeighbor;\n  }\n\n  nextGen() {\n    let numNeighbor = this.numNeighbor();\n\n    if (numNeighbor == 3) {\n      this.nextState = 1;\n    } else if (numNeighbor < 2 || numNeighbor > 3) {\n      this.nextState = 0;\n    } else if (numNeighbor == 2) {\n      this.nextState = this.state;\n    }\n  }\n\n  goNext() {\n    this.state = this.nextState;\n    this.nextState = 0;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/Cell.js\");\n\n\nclass Game {\n  constructor() {\n    this.board = [];\n    this.fillBoard();\n    this.playing = false;\n    this.manageBtn();\n  }\n\n  manageBtn() {\n    let btnPlay = document.querySelector(\"#play\");\n    btnPlay.addEventListener(\"click\", () => {\n      if (this.playing) {\n        btnPlay.innerHTML = \"Run\";\n      } else {\n        btnPlay.innerHTML = \"Pause\";\n      }\n\n      this.playing = !this.playing;\n      if (this.playing) this.play();\n    });\n  }\n\n  fillBoard() {\n    for (let x = 0; x < 60; x++) {\n      let row = document.createElement(\"section\");\n\n      for (let y = 0; y < 30; y++) {\n        let cell = new _Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y);\n        this.board.push(cell);\n        row.appendChild(cell.createNode());\n      }\n\n      let main = document.querySelector(\"main\");\n      main.appendChild(row);\n    }\n  }\n\n  nextGen() {\n    this.board.forEach(cell => cell.nextGen());\n  }\n\n  play() {\n    setInterval(() => {\n      if (this.playing == false) return false;\n      this.nextGen();\n      this.board.forEach(cell => {\n        if (cell.nextState == 1) {\n          cell.getNode().className = \"live\";\n        } else if (cell.nextState == 0) {\n          cell.getNode().className = \"dead\";\n        }\n\n        cell.goNext();\n      });\n    }, 10);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\nlet game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngame.play();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });