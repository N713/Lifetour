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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar NEXT = 1;\nvar STEP = 2;\nvar SHOWED_CARDS = 3;\nvar MAX_DESKTOP_WIDTH = 1096;\nvar toursSection = document.body.querySelector(\".tours\");\nvar nextButton = toursSection.querySelector(\".button--right\");\nvar prevButton = toursSection.querySelector(\".button--left\");\nvar tours = Array.from(toursSection.querySelectorAll(\".tours__list-item\"));\nvar toursList = toursSection.querySelector(\".tours__list\");\nvar currentFirst = 0;\nvar currentLast = currentFirst + STEP;\n\nfor (var i = SHOWED_CARDS; i < tours.length; i++) {\n  tours[i].classList.add(\"hide\");\n}\n\nfor (var _i = 0; _i < SHOWED_CARDS; _i++) {\n  tours[_i].classList.add(\"show\");\n}\n\nvar addMovesAtResolution = function addMovesAtResolution(resolution) {\n  nextButton.addEventListener(\"click\", function () {\n    if (window.innerWidth < resolution) {\n      toursList.classList.add(\"move-right\");\n    }\n  });\n  prevButton.addEventListener(\"click\", function () {\n    if (window.innerWidth < resolution) {\n      toursList.classList.remove(\"move-right\");\n    }\n  });\n};\n\nvar showNextTour = function showNextTour() {\n  prevButton.addEventListener(\"click\", hidePrevTour);\n  tours[currentFirst].classList.remove(\"show\");\n  tours[currentFirst].classList.add(\"hide\");\n  currentFirst += NEXT;\n  tours[currentFirst + NEXT].classList.remove(\"hide\");\n  tours[currentFirst + NEXT].classList.add(\"show\");\n  tours[currentFirst + STEP].classList.remove(\"hide\");\n  tours[currentFirst + STEP].classList.add(\"show\");\n  currentLast += 1;\n\n  if (currentLast === tours.length - NEXT) {\n    nextButton.removeEventListener(\"click\", showNextTour);\n    prevButton.addEventListener(\"click\", hidePrevTour);\n  }\n};\n\nvar hidePrevTour = function hidePrevTour() {\n  nextButton.addEventListener(\"click\", showNextTour);\n\n  if (currentFirst !== 0) {\n    tours[currentLast].classList.remove(\"show\");\n    tours[currentLast].classList.add(\"hide\");\n    currentLast = currentLast - NEXT;\n    currentFirst = currentFirst - NEXT;\n    tours[currentFirst].classList.remove(\"hide\");\n    tours[currentFirst].classList.add(\"show\");\n  }\n\n  if (currentFirst === 0) {\n    prevButton.removeEventListener(\"click\", hidePrevTour);\n    nextButton.addEventListener(\"click\", showNextTour);\n  }\n};\n\nif (tours.length > SHOWED_CARDS) {\n  nextButton.addEventListener(\"click\", showNextTour);\n  prevButton.addEventListener(\"click\", hidePrevTour);\n} else if (tours.length <= SHOWED_CARDS) {\n  addMovesAtResolution(MAX_DESKTOP_WIDTH);\n}\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });