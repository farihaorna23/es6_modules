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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(id, make, model, year) {\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\n\n\nlet form = document.getElementById(\"submitForm\");\nlet carMake = document.getElementById(\"makeInput\");\nlet carModel = document.getElementById(\"modelInput\");\nlet carYear = document.getElementById(\"yearInput\");\nlet pCarMake = document.getElementById(\"car-make\");\nlet pCarModel = document.getElementById(\"car-model\");\nlet pCarYear = document.getElementById(\"car-year\");\nlet removebtn = document.querySelector(\".removeBtn\");\nlet wishlistul = document.getElementById(\"wishlist-ul\");\n\nlet wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__.WishList();\n\nform.addEventListener(\"submit\", addCar);\nremovebtn.addEventListener(\"click\", removeCar);\n\nfunction showCarDetails(car) {\n  console.log(\"inside showcardetails\");\n  pCarMake.textContent = car.make;\n  pCarModel.textContent = car.model;\n  pCarYear.textContent = car.year;\n  removebtn.disabled = false;\n  removebtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction updateDOMList() {\n  console.log(\"inside updateDomList\");\n  carMake.value = \"\";\n  carModel.value = \"\";\n  carYear.value = \"\";\n  console.log(carMake.value, carModel.value, carYear.value);\n  wishlistul.innerHTML = \"\";\n  for (let i = 0; i < wishlist.list.length; i++) {\n    let newList = document.createElement(\"li\");\n    newList.textContent = `${wishlist.list[i].make} ${wishlist.list[i].model}`;\n    newList.addEventListener(\"click\", () => showCarDetails(wishlist.list[i]));\n    wishlistul.appendChild(newList);\n  }\n}\n\nfunction addCar(e) {\n  e.preventDefault();\n  let getCarMakeVal = carMake.value;\n  let getCarModelVal = carModel.value;\n  let getCarYearVal = carYear.value;\n  wishlist.add(getCarMakeVal, getCarModelVal, getCarYearVal);\n  updateDOMList();\n}\n\nfunction removeCar() {\n  let carId = Number(removebtn.getAttribute(\"data-carId\"));\n  wishlist.remove(carId);\n  updateDOMList();\n  pCarMake.textContent = \"\";\n  pCarModel.textContent = \"\";\n  pCarYear.textContent = \"\";\n  console.log(pCarMake, pCarModel, pCarYear);\n  removebtn.disabled = true;\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WishList\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\nclass WishList {\n  constructor() {\n    (this.list = []), (this.nextId = 0);\n  }\n\n  add(make, model, year) {\n    let newCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__.Car(this.nextId++, make, model, year);\n    this.list.push(newCar);\n  }\n\n  remove(carId) {\n    console.log(this.list, carId);\n    this.list = this.list.filter(car => car.id !== carId);\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;