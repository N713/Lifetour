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

/***/ "./source/js/components/feedback-slider.js":
/*!*************************************************!*\
  !*** ./source/js/components/feedback-slider.js ***!
  \*************************************************/
/*! exports provided: addFeedbacksHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFeedbacksHandlers\", function() { return addFeedbacksHandlers; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n\n\n\n\nvar feedbackSection = document.body.querySelector(\".feedback\");\nvar nextButton = feedbackSection.querySelector(\".button--right\");\nvar prevButton = feedbackSection.querySelector(\".button--left\");\nvar feedbacks = Array.from(feedbackSection.querySelectorAll(\".feedback__list-item\"));\nvar feedbackList = feedbackSection.querySelector(\".feedback__list\");\nvar currentFirst = 0;\nvar currentLast = currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].step;\n\nvar addMovesAtResolution = function addMovesAtResolution(resolution) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addMoveAtResolution(nextButton, feedbackList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].removeMoveAtResolution(prevButton, feedbackList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n};\n\nvar showNextFeedback = function showNextFeedback() {\n  prevButton.addEventListener(\"click\", hidePrevFeedback);\n  feedbacks[currentFirst].classList.add(\"hide\");\n  currentFirst += _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n  feedbacks[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next].classList.remove(\"hide\");\n  feedbacks[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].step].classList.remove(\"hide\");\n  currentLast += 1;\n\n  if (currentLast === feedbacks.length - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next) {\n    nextButton.removeEventListener(\"click\", showNextFeedback);\n    prevButton.addEventListener(\"click\", hidePrevFeedback);\n  }\n};\n\nvar hidePrevFeedback = function hidePrevFeedback() {\n  nextButton.addEventListener(\"click\", showNextFeedback);\n\n  if (currentFirst !== 0) {\n    feedbacks[currentLast].classList.add(\"hide\");\n    currentLast = currentLast - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    currentFirst = currentFirst - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    feedbacks[currentFirst].classList.remove(\"hide\");\n  }\n\n  if (currentFirst === 0) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].unactiveBack(nextButton, showNextFeedback, prevButton, hidePrevFeedback);\n  }\n};\n\nvar addFeedbacksHandlers = function addFeedbacksHandlers() {\n  if (feedbacks.length > _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addHandlers(nextButton, showNextFeedback, prevButton, hidePrevFeedback);\n  } else if (feedbacks.length <= _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards) {\n    addMovesAtResolution(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  }\n};\n\n_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addClassToElements(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards, feedbacks, \"hide\");\n\n\n//# sourceURL=webpack:///./source/js/components/feedback-slider.js?");

/***/ }),

/***/ "./source/js/components/gallery-slider.js":
/*!************************************************!*\
  !*** ./source/js/components/gallery-slider.js ***!
  \************************************************/
/*! exports provided: addGalleryHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addGalleryHandlers\", function() { return addGalleryHandlers; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n\n\n\n\nvar gallerySection = document.body.querySelector(\".gallery\");\nvar nextButton = gallerySection.querySelector(\".button--right\");\nvar prevButton = gallerySection.querySelector(\".button--left\");\nvar images = Array.from(gallerySection.querySelectorAll(\".gallery__list-wrapper\"));\nvar imagesList = gallerySection.querySelector(\".gallery__wrapper-list\");\nvar currentFirst = 0;\nvar currentLast = currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].step;\n\nvar addMovesAtResolution = function addMovesAtResolution(resolution) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addMoveAtResolution(nextButton, imagesList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].removeMoveAtResolution(prevButton, imagesList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n};\n\nvar showNextImage = function showNextImage() {\n  prevButton.addEventListener(\"click\", hidePrevImage);\n  images[currentFirst].classList.add(\"hide\");\n  currentFirst += _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n  images[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next].classList.remove(\"hide\");\n  images[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].step].classList.remove(\"hide\");\n  currentLast += 1;\n\n  if (currentLast === images.length - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next) {\n    nextButton.removeEventListener(\"click\", showNextImage);\n    prevButton.addEventListener(\"click\", hidePrevImage);\n  }\n};\n\nvar hidePrevImage = function hidePrevImage() {\n  nextButton.addEventListener(\"click\", showNextImage);\n\n  if (currentFirst !== 0) {\n    images[currentLast].classList.add(\"hide\");\n    currentLast = currentLast - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    currentFirst = currentFirst - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    images[currentFirst].classList.remove(\"hide\");\n  }\n\n  if (currentFirst === 0) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].unactiveBack(nextButton, showNextImage, prevButton, hidePrevImage);\n  }\n};\n\nvar addGalleryHandlers = function addGalleryHandlers() {\n  if (images.length > _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addHandlers(nextButton, showNextImage, prevButton, hidePrevImage);\n  } else if (images.length <= _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards) {\n    addMovesAtResolution(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  }\n};\n\n_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addClassToElements(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards, images, \"hide\");\n\n\n//# sourceURL=webpack:///./source/js/components/gallery-slider.js?");

/***/ }),

/***/ "./source/js/components/instructors-slider.js":
/*!****************************************************!*\
  !*** ./source/js/components/instructors-slider.js ***!
  \****************************************************/
/*! exports provided: addTrainersHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTrainersHandlers\", function() { return addTrainersHandlers; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n\n\n\n\nvar STEP = 4;\nvar SHOWED_CARDS = 5;\nvar trainingSection = document.body.querySelector(\".training\");\nvar nextButton = trainingSection.querySelector(\".button--right\");\nvar prevButton = trainingSection.querySelector(\".button--left\");\nvar trainers = Array.from(trainingSection.querySelectorAll(\".training__instructors-list-item\"));\nvar trainersList = trainingSection.querySelector(\".training__instructors-list\");\nvar currentFirst = 0;\nvar currentLast = currentFirst + STEP;\n\nvar addMovesAtResolution = function addMovesAtResolution(resolution) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addMoveAtResolution(nextButton, trainersList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].removeMoveAtResolution(prevButton, trainersList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n};\n\nvar showNextTrainer = function showNextTrainer() {\n  prevButton.addEventListener(\"click\", hidePrevTrainer);\n  trainers[currentFirst].classList.add(\"hide\");\n  currentFirst += _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n  trainers[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next].classList.remove(\"hide\");\n  trainers[currentFirst + STEP].classList.remove(\"hide\");\n  currentLast += 1;\n\n  if (currentLast === trainers.length - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next) {\n    nextButton.removeEventListener(\"click\", showNextTrainer);\n    prevButton.addEventListener(\"click\", hidePrevTrainer);\n  }\n};\n\nvar hidePrevTrainer = function hidePrevTrainer() {\n  nextButton.addEventListener(\"click\", showNextTrainer);\n\n  if (currentFirst !== 0) {\n    trainers[currentLast].classList.add(\"hide\");\n    currentLast = currentLast - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    currentFirst = currentFirst - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    trainers[currentFirst].classList.remove(\"hide\");\n  }\n\n  if (currentFirst === 0) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].unactiveBack(nextButton, showNextTrainer, prevButton, hidePrevTrainer);\n  }\n};\n\nvar addTrainersHandlers = function addTrainersHandlers() {\n  if (trainers.length > SHOWED_CARDS) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addHandlers(nextButton, showNextTrainer, prevButton, hidePrevTrainer);\n  } else if (trainers.length <= SHOWED_CARDS) {\n    addMovesAtResolution(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  }\n};\n\n_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addClassToElements(SHOWED_CARDS, trainers, \"hide\");\n\n\n//# sourceURL=webpack:///./source/js/components/instructors-slider.js?");

/***/ }),

/***/ "./source/js/components/tours-slider.js":
/*!**********************************************!*\
  !*** ./source/js/components/tours-slider.js ***!
  \**********************************************/
/*! exports provided: addToursHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToursHandlers\", function() { return addToursHandlers; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n\n\n\n\nvar toursSection = document.body.querySelector(\".tours\");\nvar nextButton = toursSection.querySelector(\".button--right\");\nvar prevButton = toursSection.querySelector(\".button--left\");\nvar tours = Array.from(toursSection.querySelectorAll(\".tours__list-item\"));\nvar toursList = toursSection.querySelector(\".tours__list\");\nvar currentFirst = 0;\nvar currentLast = currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].step;\n\nvar addMovesAtResolution = function addMovesAtResolution(resolution) {\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addMoveAtResolution(nextButton, toursList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].removeMoveAtResolution(prevButton, toursList, _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n};\n\nvar showNextTour = function showNextTour() {\n  prevButton.addEventListener(\"click\", hidePrevTour);\n  tours[currentFirst].classList.add(\"hide\");\n  currentFirst += _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n  tours[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next].classList.remove(\"hide\");\n  tours[currentFirst + _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].step].classList.remove(\"hide\");\n  currentLast += 1;\n\n  if (currentLast === tours.length - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next) {\n    nextButton.removeEventListener(\"click\", showNextTour);\n    prevButton.addEventListener(\"click\", hidePrevTour);\n  }\n};\n\nvar hidePrevTour = function hidePrevTour() {\n  nextButton.addEventListener(\"click\", showNextTour);\n\n  if (currentFirst !== 0) {\n    tours[currentLast].classList.add(\"hide\");\n    currentLast = currentLast - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    currentFirst = currentFirst - _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].next;\n    tours[currentFirst].classList.remove(\"hide\");\n  }\n\n  if (currentFirst === 0) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].unactiveBack(nextButton, showNextTour, prevButton, hidePrevTour);\n  }\n};\n\nvar addToursHandlers = function addToursHandlers() {\n  if (tours.length > _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addHandlers(nextButton, showNextTour, prevButton, hidePrevTour);\n  } else if (tours.length <= _utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards) {\n    addMovesAtResolution(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].max_desktop_width);\n  }\n};\n\n_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].addClassToElements(_utils__WEBPACK_IMPORTED_MODULE_0__[\"params\"].showed_cards, tours, \"hide\");\n\n\n//# sourceURL=webpack:///./source/js/components/tours-slider.js?");

/***/ }),

/***/ "./source/js/components/utils.js":
/*!***************************************!*\
  !*** ./source/js/components/utils.js ***!
  \***************************************/
/*! exports provided: params, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"params\", function() { return params; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\n\n\nvar params = {\n  next: 1,\n  step: 2,\n  showed_cards: 3,\n  max_desktop_width: 1096\n};\nvar utils = {\n  addClassToElements: function addClassToElements(startElement, elements, nameOfClass) {\n    for (var i = startElement; i < elements.length; i++) {\n      elements[i].classList.add(\"\".concat(nameOfClass));\n    }\n  },\n  addMove: function addMove(element, nameOfClass) {\n    element.classList.add(\"\".concat(nameOfClass));\n  },\n  removeMove: function removeMove(element, nameOfClass) {\n    element.classList.remove(\"\".concat(nameOfClass));\n  },\n  addMoveAtResolution: function addMoveAtResolution(button, element, resolution) {\n    button.addEventListener(\"click\", function () {\n      if (window.innerWidth < resolution) {\n        utils.addMove(element, \"move-right\");\n      }\n    });\n  },\n  removeMoveAtResolution: function removeMoveAtResolution(button, element, resolution) {\n    button.addEventListener(\"click\", function () {\n      if (window.innerWidth < resolution) {\n        utils.removeMove(element, \"move-right\");\n      }\n    });\n  },\n  addHandlers: function addHandlers(nextButton, nextHandler, prevButton, prevHandler) {\n    nextButton.addEventListener(\"click\", nextHandler);\n    prevButton.addEventListener(\"click\", prevHandler);\n  }\n};\n\n\n//# sourceURL=webpack:///./source/js/components/utils.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tours_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tours-slider */ \"./source/js/components/tours-slider.js\");\n/* harmony import */ var _components_feedback_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feedback-slider */ \"./source/js/components/feedback-slider.js\");\n/* harmony import */ var _components_gallery_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gallery-slider */ \"./source/js/components/gallery-slider.js\");\n/* harmony import */ var _components_instructors_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/instructors-slider */ \"./source/js/components/instructors-slider.js\");\n\n\n\n\nObject(_components_tours_slider__WEBPACK_IMPORTED_MODULE_0__[\"addToursHandlers\"])();\nObject(_components_feedback_slider__WEBPACK_IMPORTED_MODULE_1__[\"addFeedbacksHandlers\"])();\nObject(_components_gallery_slider__WEBPACK_IMPORTED_MODULE_2__[\"addGalleryHandlers\"])();\nObject(_components_instructors_slider__WEBPACK_IMPORTED_MODULE_3__[\"addTrainersHandlers\"])();\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });