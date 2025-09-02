/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/roomstay-index/block.json":
/*!***************************************!*\
  !*** ./src/roomstay-index/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"roomstay/index","version":"1.0.0","title":"Roomstay Index","category":"widgets","icon":"admin-multisite","description":"Roomstay.io index block for Heyscape","example":{},"supports":{"html":false},"attributes":{"locationId":{"default":null,"type":"string"}},"textdomain":"roomstay","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/roomstay-index/edit.js":
/*!************************************!*\
  !*** ./src/roomstay-index/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/roomstay-index/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    locationId
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true,
          label: "Roomstay Location ID",
          value: locationId,
          onChange: value => setAttributes({
            locationId: value
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
        width: "161",
        height: "33",
        viewBox: "0 0 161 33",
        fill: "none",
        class: "roomstay-logo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M29.1546 22.0625H27.9192V11.1584H33.1407C34.2498 11.1584 35.1392 11.4659 35.8091 12.0808C36.4789 12.6847 36.8138 13.5138 36.8138 14.568C36.8138 15.9296 36.2483 16.8575 35.1173 17.3517C34.7988 17.4944 34.4858 17.5988 34.1784 17.6646L37.0444 22.0625H35.5785L32.943 17.8788H29.1546V22.0625ZM29.1546 16.7093H32.9265C34.0905 16.7093 34.8921 16.3469 35.3314 15.6222C35.4961 15.3476 35.5785 14.9963 35.5785 14.568C35.5785 13.8762 35.3424 13.3326 34.8702 12.9373C34.398 12.531 33.7721 12.3279 32.9924 12.3279H29.1546V16.7093Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M50.369 11.0266C51.9942 11.0266 53.3284 11.5702 54.3716 12.6573C55.3928 13.7115 55.9034 15.0292 55.9034 16.6105C55.9034 18.1917 55.3928 19.5095 54.3716 20.5636C53.3284 21.6508 51.9942 22.1943 50.369 22.1943C48.7438 22.1943 47.4096 21.6508 46.3664 20.5636C45.3452 19.5095 44.8346 18.1917 44.8346 16.6105C44.8346 15.0292 45.3452 13.7115 46.3664 12.6573C47.4096 11.5702 48.7438 11.0266 50.369 11.0266ZM50.369 20.9919C51.6648 20.9919 52.7134 20.5691 53.5151 19.7236C54.2837 18.911 54.6681 17.8733 54.6681 16.6105C54.6681 15.3476 54.2837 14.3099 53.5151 13.4973C52.7134 12.6518 51.6648 12.229 50.369 12.229C49.0732 12.229 48.0245 12.6518 47.2229 13.4973C46.4543 14.3099 46.0699 15.3476 46.0699 16.6105C46.0699 17.8733 46.4543 18.911 47.2229 19.7236C48.0245 20.5691 49.0732 20.9919 50.369 20.9919Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M69.3113 11.0266C70.9365 11.0266 72.2707 11.5702 73.3139 12.6573C74.3351 13.7115 74.8457 15.0292 74.8457 16.6105C74.8457 18.1917 74.3351 19.5095 73.3139 20.5636C72.2707 21.6508 70.9365 22.1943 69.3113 22.1943C67.6861 22.1943 66.3519 21.6508 65.3087 20.5636C64.2875 19.5095 63.7768 18.1917 63.7768 16.6105C63.7768 15.0292 64.2875 13.7115 65.3087 12.6573C66.3519 11.5702 67.6861 11.0266 69.3113 11.0266ZM69.3113 20.9919C70.607 20.9919 71.6557 20.5691 72.4573 19.7236C73.226 18.911 73.6103 17.8733 73.6103 16.6105C73.6103 15.3476 73.226 14.3099 72.4573 13.4973C71.6557 12.6518 70.607 12.229 69.3113 12.229C68.0155 12.229 66.9668 12.6518 66.1652 13.4973C65.3965 14.3099 65.0122 15.3476 65.0122 16.6105C65.0122 17.8733 65.3965 18.911 66.1652 19.7236C66.9668 20.5691 68.0155 20.9919 69.3113 20.9919Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M94.0186 11.1584V22.0625H92.7832V13.0361L88.7477 18.2247L84.6463 13.0361V22.0625H83.4109V11.1584H84.8439L88.7477 16.3304L92.5856 11.1584H94.0186Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M104.522 12.8385C104.313 13.0142 104.171 13.2118 104.094 13.4315C104.028 13.6511 103.995 13.8872 103.995 14.1397C103.995 14.3813 104.099 14.6064 104.308 14.8151C104.527 15.0237 104.813 15.1994 105.164 15.3422C105.516 15.4849 105.916 15.6112 106.367 15.721C106.817 15.8308 107.273 15.9461 107.734 16.0669C108.206 16.1767 108.667 16.3085 109.117 16.4622C109.568 16.605 109.968 16.7917 110.32 17.0223C111.1 17.5164 111.489 18.1917 111.489 19.0483C111.489 20.0695 111.105 20.8491 110.336 21.3872C109.579 21.9253 108.524 22.1943 107.174 22.1943C105.647 22.1943 104.483 21.8759 103.682 21.239C102.968 20.668 102.562 19.8554 102.463 18.8012H103.748C103.792 19.5479 104.154 20.1189 104.835 20.5142C105.428 20.8546 106.213 21.0248 107.19 21.0248C109.233 21.0248 110.254 20.3824 110.254 19.0977C110.254 18.6584 110.067 18.3125 109.694 18.06C109.332 17.8074 108.87 17.5988 108.31 17.434C107.761 17.2693 107.163 17.1156 106.515 16.9728C105.878 16.8301 105.28 16.6489 104.72 16.4293C104.17 16.1987 103.709 15.9022 103.336 15.5398C102.974 15.1665 102.792 14.6668 102.792 14.0409C102.792 13.1514 103.133 12.4267 103.814 11.8667C104.494 11.3066 105.521 11.0266 106.894 11.0266C108.277 11.0266 109.348 11.3451 110.106 11.982C110.798 12.542 111.165 13.2613 111.209 14.1397H109.941C109.831 13.2393 109.249 12.6408 108.195 12.3443C107.822 12.2345 107.355 12.1796 106.795 12.1796C106.246 12.1796 105.779 12.2455 105.395 12.3773C105.022 12.4981 104.731 12.6518 104.522 12.8385Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M127.638 12.3443H123.833V22.0625H122.597V12.3443H118.792V11.1584H127.638V12.3443Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M144.354 22.0625H142.986L141.652 18.9H136.25L134.915 22.0625H133.548L138.177 11.1584H139.725L144.354 22.0625ZM141.175 17.7635L138.951 12.4432L136.727 17.7635H141.175Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M155.633 22.0625H154.398V17.747L149.819 11.1584H151.318L155.007 16.4622L158.697 11.1584H160.196L155.633 17.747V22.0625Z",
          class: "logo-text-color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M0.000976562 20.7454C1.48709 21.5309 3.18114 21.9757 4.97907 21.9757C10.8705 21.9757 15.6464 17.1998 15.6464 11.3084C15.6464 5.41698 10.8705 0.641052 4.97907 0.641052C3.18114 0.641052 1.48709 1.08585 0.000976562 1.87142V20.7454Z",
          fill: "#00D7E1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M0 20.7449C1.48612 21.5305 3.18018 21.9753 4.97812 21.9753C10.8695 21.9753 15.6455 17.1994 15.6455 11.308C15.6455 5.41655 10.8695 0.640625 4.97812 0.640625C3.18018 0.640625 1.48612 1.08543 0 1.87101V20.7449Z",
          fill: "#FF0068"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M16.7518 29.1002L0.000244141 1.87292V18.7751V32.0566C1.59736 32.4384 3.26424 32.6405 4.97834 32.6405C9.33014 32.6405 13.3776 31.3374 16.7518 29.1002Z",
          fill: "#00D7E1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          class: "logo-color",
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M0.000244141 20.7454V18.823V1.92084L11.1359 20.0203C9.39645 21.2519 7.27196 21.9758 4.97842 21.9758C3.18045 21.9758 1.48638 21.531 0.000244141 20.7454Z"
        })]
      }), locationId ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["Room Stay ID `", locationId, "`"]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Set the Room Stay ID for this Cabin"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/roomstay-index/editor.scss":
/*!****************************************!*\
  !*** ./src/roomstay-index/editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/roomstay-index/index.js":
/*!*************************************!*\
  !*** ./src/roomstay-index/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/roomstay-index/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/roomstay-index/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/roomstay-index/block.json");



// import save from './save';

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
  // save,
});

/***/ }),

/***/ "./src/roomstay-index/style.scss":
/*!***************************************!*\
  !*** ./src/roomstay-index/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"roomstay-index/index": 0,
/******/ 			"roomstay-index/style-index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkroomstay"] = globalThis["webpackChunkroomstay"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["roomstay-index/style-index"], () => (__webpack_require__("./src/roomstay-index/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map