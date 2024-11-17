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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ \"./src/errorHandler.js\");\n\n\nasync function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);\n    }\n    return await response.json();\n  } catch (error) {\n    (0,_errorHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('fetchData', error);\n  }\n}\n\n//# sourceURL=webpack://disney/./src/api.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ALT_TEXT_NO_IMAGE: () => (/* binding */ ALT_TEXT_NO_IMAGE),\n/* harmony export */   CLASS_NAMES: () => (/* binding */ CLASS_NAMES),\n/* harmony export */   DEFAULT_TITLE: () => (/* binding */ DEFAULT_TITLE),\n/* harmony export */   ELEMENT_IDS: () => (/* binding */ ELEMENT_IDS),\n/* harmony export */   IMG_SIZE: () => (/* binding */ IMG_SIZE),\n/* harmony export */   ITEM_TYPES: () => (/* binding */ ITEM_TYPES),\n/* harmony export */   KEYS: () => (/* binding */ KEYS),\n/* harmony export */   KONAMI_CODE: () => (/* binding */ KONAMI_CODE),\n/* harmony export */   baseHomeUrl: () => (/* binding */ baseHomeUrl),\n/* harmony export */   baseSetUrl: () => (/* binding */ baseSetUrl)\n/* harmony export */ });\nconst URLS = {\n  API_BASE_URL: 'https://cd-static.bamgrid.com/dp-117731241344',\n  HOME_ENDPOINT: '/home.json',\n  SET_ENDPOINT: '/sets/',\n};\nconst baseHomeUrl = `${URLS.API_BASE_URL}${URLS.HOME_ENDPOINT}`;\nconst baseSetUrl = `${URLS.API_BASE_URL}${URLS.SET_ENDPOINT}`;\n\nconst IMG_SIZE = '1.78';\n\nconst DEFAULT_TITLE = 'Untitled';\nconst ALT_TEXT_NO_IMAGE = 'Image not available';\n\nconst ITEM_TYPES = {\n  DMC_SERIES: 'DmcSeries',\n  DMC_VIDEO: 'DmcVideo',\n  STANDARD_COLLECTION: 'StandardCollection'\n};\n\nconst KEYS = {\n  ARROW_RIGHT: 'ArrowRight',\n  ARROW_LEFT: 'ArrowLeft',\n  ARROW_DOWN: 'ArrowDown',\n  ARROW_UP: 'ArrowUp',\n  ENTER: 'Enter',\n  BACKSPACE: 'Backspace',\n  // there is no 'B' or 'A' on a tv remote. this is for the Disney Magic Easter Egg\n  B: 'b',\n  A: 'a'\n};\n\nconst ELEMENT_IDS = {\n  APP: 'app',\n  ZERO_SLEIGH: 'zero-sleigh'\n};\n\nconst CLASS_NAMES = {\n  ROW_TITLE: 'row-title',\n  THUMBNAIL_ROW: 'thumbnail-row',\n  THUMBNAIL: 'thumbnail',\n  FOCUSED: 'focused',\n  PLACEHOLDER: 'placeholder',\n  MODAL: 'modal',\n  MODAL_CONTENT: 'modal-content',\n};\n\n// for Disney Magic\nconst KONAMI_CODE = [\n  KEYS.ARROW_UP,\n  KEYS.ARROW_UP,\n  KEYS.ARROW_DOWN,\n  KEYS.ARROW_DOWN,\n  KEYS.ARROW_LEFT,\n  KEYS.ARROW_RIGHT,\n  KEYS.ARROW_LEFT,\n  KEYS.ARROW_RIGHT,\n  KEYS.B,\n  KEYS.A\n];\n\n//# sourceURL=webpack://disney/./src/constants.js?");

/***/ }),

/***/ "./src/disneyMagic.js":
/*!****************************!*\
  !*** ./src/disneyMagic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setupDisneyMagic)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n// as a massive fan of Nightmare Before Christmas (which technically is a Disney property!), and because the holidays are\n// approaching, I wanted to show Jack Skellington and Zero flying across the sky delivering presents as an Easter Egg.\n// to show this, input the Nintendo Contra code into the keyboard to show the animation:\n// Up Up Down Down Left Right Left Right B A\nfunction setupDisneyMagic() {\n  let userInputSequence = [];\n  \n  document.addEventListener('keydown', (event) => {\n    const key = event.key;\n    userInputSequence.push(key);\n    \n    // keep the array length the same as the Konami Code\n    if (userInputSequence.length > _constants__WEBPACK_IMPORTED_MODULE_0__.KONAMI_CODE.length) {\n      userInputSequence.shift();\n    }\n    \n    // trigger Disney Magic if the Konami Code is entered, and reset the sequence\n    if (userInputSequence.join(',') === _constants__WEBPACK_IMPORTED_MODULE_0__.KONAMI_CODE.join(',')) {\n      animateSleigh();\n      userInputSequence = [];\n    }\n  });\n}\n\nfunction animateSleigh() {\n  const sleigh = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__.ELEMENT_IDS.ZERO_SLEIGH);\n  if (!sleigh) {\n    console.error('Sleigh element not found!');\n    return;\n  }\n  \n  // start animation, with 5 seconds to complete, and the linear keyword for a constant speed\n  sleigh.style.display = 'block';\n  sleigh.style.animation = 'scrollSleigh 5s linear';\n  \n  // end animation\n  sleigh.addEventListener('animationend', () => {\n    sleigh.style.display = 'none';\n    sleigh.style.animation = '';\n  });\n}\n\n//# sourceURL=webpack://disney/./src/disneyMagic.js?");

/***/ }),

/***/ "./src/errorHandler.js":
/*!*****************************!*\
  !*** ./src/errorHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleError)\n/* harmony export */ });\nfunction handleError(context, error) {\n  // wrap context in brackets to make the context easier to find in logs\n  console.error(`[${context}]`, error.message, error.stack);\n  throw error;\n}\n\n//# sourceURL=webpack://disney/./src/errorHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorHandler */ \"./src/errorHandler.js\");\n\n\n\n\n\n\n\nasync function loadHomePage() {\n  try {\n    let homeData = await (0,_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_constants__WEBPACK_IMPORTED_MODULE_0__.baseHomeUrl);\n    \n    let containers = homeData?.data?.StandardCollection?.containers;\n    if (!containers) {\n      throw new Error('No homeData containers found');\n    }\n    \n    let contentPromises = containers.map(async container => {\n      const containerSet = container?.set;\n      if (!containerSet) {\n        throw new Error('No containerSet found');\n      }\n      \n      const refId = containerSet?.refId;\n      if (refId) {\n        let refData = await (0,_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${_constants__WEBPACK_IMPORTED_MODULE_0__.baseSetUrl}${refId}.json`);\n        const refDataSet = refData?.data?.CuratedSet || refData?.data?.PersonalizedCuratedSet || refData?.data?.TrendingSet;\n        if (!refDataSet) {\n          throw new Error('No refDataSet found in refData');\n        }\n        \n        // the text property was not copied over because some sets like 'Because You Watched Gordon Ramsay' will return a content for something different, like 'New to Disney+'.\n        const refItemData = {\n          items: refDataSet?.items,\n          meta: refDataSet?.meta,\n          setId: refDataSet?.setId,\n          type: refDataSet?.type\n        }\n        \n        // release refData references for garbage collection\n        refData = null;\n        \n        return {\n          ...container,\n          set: {\n            ...containerSet,\n            ...refItemData\n          }\n        };\n      } else {\n        return container;\n      }\n    });\n    \n    const content = await Promise.all(contentPromises);\n    \n    (0,_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    (0,_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    \n    // release data references for garbage collection\n    homeData = null;\n    containers = null;\n    contentPromises = null;\n  } catch (error) {\n    (0,_errorHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('loadHomePage', error);\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', loadHomePage);\n\n//# sourceURL=webpack://disney/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addModal: () => (/* binding */ addModal),\n/* harmony export */   removeModal: () => (/* binding */ removeModal)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n// press Enter upon highlighting a tile to show the modal\n// it should display the following if available:\n// title, release date, rating and a hero_tile or hero_collection image\nfunction addModal(item) {\n  let modal = document.querySelector(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.MODAL}`);\n  \n  if (!modal) {\n    modal = document.createElement('div');\n    modal.className = _constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.MODAL;\n    \n    const modalContent = document.createElement('div');\n    modalContent.className = _constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.MODAL_CONTENT;\n    \n    if (item.dataset.title) {\n      const title = document.createElement('h1');\n      title.innerText = item.dataset.title;\n      modalContent.append(title);\n    }\n    \n    if (item.dataset.releaseDate) {\n      const releaseDate = document.createElement('p');\n      releaseDate.innerText = item.dataset.releaseDate;\n      modalContent.append(releaseDate);\n    }\n    \n    if (item.dataset.ratings) {\n      const ratings = document.createElement('p');\n      ratings.innerText = item.dataset.ratings;\n      modalContent.append(ratings);\n    }\n    \n    if (item.dataset.modalImg) {\n      // preload the image so that it is fully loaded before adding it to the DOM.\n      const modalImg = new Image();\n      modalImg.src = item.dataset.modalImg;\n      modalImg.alt = item.dataset.modalImgAlt;\n      \n      modalImg.onerror = () => {\n        modalImg.remove();\n      };\n      \n      // show modal content only after the image has been loaded so that the text and image appears at the same time\n      modalImg.onload = () => {\n        modalContent.append(modalImg);\n        modal.append(modalContent);\n      };\n    } else {\n      modal.append(modalContent);\n    }\n    \n    document.body.append(modal);\n  }\n}\n\n// press Backspace to remove the modal\nfunction removeModal() {\n  const modal = document.querySelector(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.MODAL}`);\n  \n  if (modal) {\n    modal.remove();\n  }\n}\n\n//# sourceURL=webpack://disney/./src/modal.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setupNavigation)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _disneyMagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disneyMagic */ \"./src/disneyMagic.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\nfunction setupNavigation() {\n  let currentRowIndex = 0;\n  let currentItemIndex = 0;\n  \n  // default initial focused tile to the first item in the first row\n  const firstRow = document.querySelector(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL_ROW}`);\n  const firstItem = firstRow.querySelector(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL}`);\n  firstItem?.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.FOCUSED);\n  \n  document.addEventListener('keydown', (event) => {\n    const rows = document.querySelectorAll(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL_ROW}`);\n    if (rows.length === 0) return;\n    \n    let currentRow = rows[currentRowIndex];\n    let items = currentRow.querySelectorAll(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL}`); // Select thumbnails in the current row\n    \n    if (items.length === 0) return;\n    \n    items[currentItemIndex]?.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.FOCUSED);\n    \n    switch (event.key) {\n      case _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.ARROW_RIGHT:\n        currentItemIndex = (currentItemIndex + 1) % items.length;\n        break;\n      case _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.ARROW_LEFT:\n        currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;\n        break;\n      case _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.ARROW_DOWN:\n        currentRowIndex = currentRowIndex + 1 === rows.length ? 0 : currentRowIndex + 1;\n        currentItemIndex = 0;\n        break;\n      case _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.ARROW_UP:\n        currentRowIndex = currentRowIndex - 1 < 0 ? rows.length - 1 : currentRowIndex - 1;\n        currentItemIndex = 0;\n        break;\n      case _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.ENTER:\n        (0,_modal__WEBPACK_IMPORTED_MODULE_2__.addModal)(items[currentItemIndex]);\n        break;\n      case _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS.BACKSPACE:\n        (0,_modal__WEBPACK_IMPORTED_MODULE_2__.removeModal)();\n        break;\n    }\n    \n    // the list of items will change if a new row was navigated to\n    currentRow = rows[currentRowIndex];\n    items = currentRow.querySelectorAll(`.${_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL}`);\n    \n    items[currentItemIndex]?.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.FOCUSED);\n    \n    // when navigating, center the highlighted tile in view\n    items[currentItemIndex]?.scrollIntoView({\n      behavior: 'smooth',\n      block: 'center',    // vertical alignment\n      inline: 'center'    // horizontal alignment\n    });\n  });\n  \n  (0,_disneyMagic__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://disney/./src/navigation.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderContent)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nfunction renderContent(content) {\n  const app = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__.ELEMENT_IDS.APP);\n  \n  content.forEach(rowData => {\n    const rowTitle = document.createElement('h1');\n    rowTitle.className = _constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.ROW_TITLE;\n    rowTitle.innerText = rowData?.set?.text?.title?.full?.set?.default?.content ?? _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TITLE;\n    app.append(rowTitle);\n    \n    const thumbnailRow = document.createElement('section');\n    thumbnailRow.className = _constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL_ROW;\n    \n    rowData?.set?.items.forEach(item => {\n      const thumbnail = document.createElement('div');\n      thumbnail.className = _constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.THUMBNAIL;\n      \n      const img = new Image();\n      const itemType = item?.type;\n      \n      const {title, tileImage, modalImage, imageAlt} = getImageAndThumbnailData(itemType, item);\n      \n      img.src = tileImage;\n      img.alt = imageAlt;\n      \n      // create a placeholder div and remove the Image for images which cannot be retrieved (like The Mandalorian)\n      img.onerror = () => {\n        const placeholder = document.createElement('div');\n        placeholder.className = _constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.PLACEHOLDER;\n        placeholder.innerText = img.alt || _constants__WEBPACK_IMPORTED_MODULE_0__.ALT_TEXT_NO_IMAGE;\n        \n        thumbnail.append(placeholder);\n        img.remove();\n      };\n      \n      thumbnail.dataset.title = title;\n      thumbnail.dataset.modalImg = modalImage;\n      thumbnail.dataset.modalImgAlt = imageAlt;\n      \n      const ratings = item?.ratings?.[0]?.value;\n      if (ratings) {\n        thumbnail.dataset.ratings = ratings;\n      }\n      \n      const releaseDate = item?.releases?.[0]?.releaseDate;\n      if (releaseDate) {\n        thumbnail.dataset.releaseDate = releaseDate;\n      }\n      \n      thumbnail.append(img);\n      thumbnailRow.append(thumbnail);\n    });\n    \n    app.append(thumbnailRow);\n  });\n}\n\nfunction getImageAndThumbnailData(itemType, item) {\n  let title;\n  let tileImage;\n  let modalImage;\n  \n  if (itemType === _constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_TYPES.DMC_SERIES) {\n    title = item?.text?.title?.full?.series?.default?.content;\n    tileImage = item?.image?.tile?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.series?.default?.url;\n    modalImage = item?.image?.hero_tile?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.series?.default?.url;\n  } else if (itemType === _constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_TYPES.DMC_VIDEO) {\n    title = item?.text?.title?.full?.program?.default?.content;\n    tileImage = item?.image?.tile?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.program?.default?.url;\n    modalImage = item?.image?.hero_tile?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.program?.default?.url;\n  } else if (itemType === _constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_TYPES.STANDARD_COLLECTION) {\n    title = item?.text?.title?.full?.collection?.default?.content;\n    tileImage = item?.image?.tile?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.default?.default?.url;\n    \n    // sometimes hero_tile does not exist in Standard Collection so use hero_collection instead\n    modalImage = item?.image?.hero_tile?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.default?.default?.url ||\n      item?.image?.hero_collection?.[_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_SIZE]?.default?.default?.url;\n  }\n  \n  const imageAlt = title || _constants__WEBPACK_IMPORTED_MODULE_0__.ALT_TEXT_NO_IMAGE;\n  \n  return {\n    title,\n    tileImage,\n    modalImage,\n    imageAlt\n  }\n}\n\n//# sourceURL=webpack://disney/./src/render.js?");

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