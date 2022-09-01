/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["pbjsChunk"];
/******/ 	window["pbjsChunk"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		412: 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 883);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal", function() { return internal; });
/* harmony export (immutable) */ __webpack_exports__["getPrebidInternal"] = getPrebidInternal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (immutable) */ __webpack_exports__["getUniqueIdentifierStr"] = getUniqueIdentifierStr;
/* harmony export (immutable) */ __webpack_exports__["generateUUID"] = generateUUID;
/* harmony export (immutable) */ __webpack_exports__["getBidIdParameter"] = getBidIdParameter;
/* harmony export (immutable) */ __webpack_exports__["tryAppendQueryString"] = tryAppendQueryString;
/* harmony export (immutable) */ __webpack_exports__["parseQueryStringParameters"] = parseQueryStringParameters;
/* harmony export (immutable) */ __webpack_exports__["transformAdServerTargetingObj"] = transformAdServerTargetingObj;
/* harmony export (immutable) */ __webpack_exports__["getAdUnitSizes"] = getAdUnitSizes;
/* harmony export (immutable) */ __webpack_exports__["parseSizesInput"] = parseSizesInput;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArray"] = parseGPTSingleSizeArray;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArrayToRtbSize"] = parseGPTSingleSizeArrayToRtbSize;
/* harmony export (immutable) */ __webpack_exports__["getWindowTop"] = getWindowTop;
/* harmony export (immutable) */ __webpack_exports__["getWindowSelf"] = getWindowSelf;
/* harmony export (immutable) */ __webpack_exports__["getWindowLocation"] = getWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["logMessage"] = logMessage;
/* harmony export (immutable) */ __webpack_exports__["logInfo"] = logInfo;
/* harmony export (immutable) */ __webpack_exports__["logWarn"] = logWarn;
/* harmony export (immutable) */ __webpack_exports__["logError"] = logError;
/* harmony export (immutable) */ __webpack_exports__["prefixLog"] = prefixLog;
/* harmony export (immutable) */ __webpack_exports__["hasConsoleLogger"] = hasConsoleLogger;
/* harmony export (immutable) */ __webpack_exports__["debugTurnedOn"] = debugTurnedOn;
/* harmony export (immutable) */ __webpack_exports__["createInvisibleIframe"] = createInvisibleIframe;
/* harmony export (immutable) */ __webpack_exports__["getParameterByName"] = getParameterByName;
/* harmony export (immutable) */ __webpack_exports__["isA"] = isA;
/* harmony export (immutable) */ __webpack_exports__["isFn"] = isFn;
/* harmony export (immutable) */ __webpack_exports__["isStr"] = isStr;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["isPlainObject"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["isEmptyStr"] = isEmptyStr;
/* harmony export (immutable) */ __webpack_exports__["_each"] = _each;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;
/* harmony export (immutable) */ __webpack_exports__["_map"] = _map;
/* harmony export (immutable) */ __webpack_exports__["hasOwn"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["insertElement"] = insertElement;
/* harmony export (immutable) */ __webpack_exports__["waitForElementToLoad"] = waitForElementToLoad;
/* harmony export (immutable) */ __webpack_exports__["triggerPixel"] = triggerPixel;
/* harmony export (immutable) */ __webpack_exports__["callBurl"] = callBurl;
/* harmony export (immutable) */ __webpack_exports__["insertHtmlIntoIframe"] = insertHtmlIntoIframe;
/* harmony export (immutable) */ __webpack_exports__["insertUserSyncIframe"] = insertUserSyncIframe;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelHtml"] = createTrackPixelHtml;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelIframeHtml"] = createTrackPixelIframeHtml;
/* harmony export (immutable) */ __webpack_exports__["getValueString"] = getValueString;
/* harmony export (immutable) */ __webpack_exports__["uniques"] = uniques;
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["getBidRequest"] = getBidRequest;
/* harmony export (immutable) */ __webpack_exports__["getKeys"] = getKeys;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["getKeyByValue"] = getKeyByValue;
/* harmony export (immutable) */ __webpack_exports__["getBidderCodes"] = getBidderCodes;
/* harmony export (immutable) */ __webpack_exports__["isGptPubadsDefined"] = isGptPubadsDefined;
/* harmony export (immutable) */ __webpack_exports__["isApnGetTagDefined"] = isApnGetTagDefined;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighestCpm", function() { return getHighestCpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldestHighestCpmBid", function() { return getOldestHighestCpmBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestHighestCpmBid", function() { return getLatestHighestCpmBid; });
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["adUnitsFilter"] = adUnitsFilter;
/* harmony export (immutable) */ __webpack_exports__["deepClone"] = deepClone;
/* harmony export (immutable) */ __webpack_exports__["inIframe"] = inIframe;
/* harmony export (immutable) */ __webpack_exports__["isSafariBrowser"] = isSafariBrowser;
/* harmony export (immutable) */ __webpack_exports__["replaceAuctionPrice"] = replaceAuctionPrice;
/* harmony export (immutable) */ __webpack_exports__["replaceClickThrough"] = replaceClickThrough;
/* harmony export (immutable) */ __webpack_exports__["timestamp"] = timestamp;
/* harmony export (immutable) */ __webpack_exports__["getPerformanceNow"] = getPerformanceNow;
/* harmony export (immutable) */ __webpack_exports__["hasDeviceAccess"] = hasDeviceAccess;
/* harmony export (immutable) */ __webpack_exports__["checkCookieSupport"] = checkCookieSupport;
/* harmony export (immutable) */ __webpack_exports__["delayExecution"] = delayExecution;
/* harmony export (immutable) */ __webpack_exports__["groupBy"] = groupBy;
/* harmony export (immutable) */ __webpack_exports__["getDefinedParams"] = getDefinedParams;
/* harmony export (immutable) */ __webpack_exports__["isValidMediaTypes"] = isValidMediaTypes;
/* harmony export (immutable) */ __webpack_exports__["getUserConfiguredParams"] = getUserConfiguredParams;
/* harmony export (immutable) */ __webpack_exports__["getOrigin"] = getOrigin;
/* harmony export (immutable) */ __webpack_exports__["getDNT"] = getDNT;
/* harmony export (immutable) */ __webpack_exports__["isAdUnitCodeMatchingSlot"] = isAdUnitCodeMatchingSlot;
/* harmony export (immutable) */ __webpack_exports__["isSlotMatchingAdUnitCode"] = isSlotMatchingAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["getGptSlotInfoForAdUnitCode"] = getGptSlotInfoForAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["unsupportedBidderMessage"] = unsupportedBidderMessage;
/* harmony export (immutable) */ __webpack_exports__["isInteger"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["convertCamelToUnderscore"] = convertCamelToUnderscore;
/* harmony export (immutable) */ __webpack_exports__["cleanObj"] = cleanObj;
/* harmony export (immutable) */ __webpack_exports__["pick"] = pick;
/* harmony export (immutable) */ __webpack_exports__["transformBidderParamKeywords"] = transformBidderParamKeywords;
/* harmony export (immutable) */ __webpack_exports__["convertTypes"] = convertTypes;
/* harmony export (immutable) */ __webpack_exports__["isArrayOfNums"] = isArrayOfNums;
/* harmony export (immutable) */ __webpack_exports__["fill"] = fill;
/* harmony export (immutable) */ __webpack_exports__["chunk"] = chunk;
/* harmony export (immutable) */ __webpack_exports__["getMinValueFromArray"] = getMinValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["getMaxValueFromArray"] = getMaxValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["compareOn"] = compareOn;
/* harmony export (immutable) */ __webpack_exports__["parseQS"] = parseQS;
/* harmony export (immutable) */ __webpack_exports__["formatQS"] = formatQS;
/* harmony export (immutable) */ __webpack_exports__["parseUrl"] = parseUrl;
/* harmony export (immutable) */ __webpack_exports__["buildUrl"] = buildUrl;
/* harmony export (immutable) */ __webpack_exports__["deepEqual"] = deepEqual;
/* harmony export (immutable) */ __webpack_exports__["mergeDeep"] = mergeDeep;
/* harmony export (immutable) */ __webpack_exports__["cyrb53Hash"] = cyrb53Hash;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_just_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dlv_index_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepAccess", function() { return __WEBPACK_IMPORTED_MODULE_3_dlv_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dset__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepSetValue", function() { return __WEBPACK_IMPORTED_MODULE_4_dset__["a"]; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-console */




var CONSTANTS = __webpack_require__(5);



var tArr = 'Array';
var tStr = 'String';
var tFn = 'Function';
var tNumb = 'Number';
var tObject = 'Object';
var tBoolean = 'Boolean';
var toString = Object.prototype.toString;
var consoleExists = Boolean(window.console);
var consoleLogExists = Boolean(consoleExists && window.console.log);
var consoleInfoExists = Boolean(consoleExists && window.console.info);
var consoleWarnExists = Boolean(consoleExists && window.console.warn);
var consoleErrorExists = Boolean(consoleExists && window.console.error);

var emitEvent = function () {
  // lazy load events to avoid circular import
  var ev;
  return function () {
    if (ev == null) {
      ev = __webpack_require__(11);
    }

    return ev.emit.apply(ev, arguments);
  };
}(); // this allows stubbing of utility functions that are used internally by other utility functions


var internal = {
  checkCookieSupport: checkCookieSupport,
  createTrackPixelIframeHtml: createTrackPixelIframeHtml,
  getWindowSelf: getWindowSelf,
  getWindowTop: getWindowTop,
  getWindowLocation: getWindowLocation,
  insertUserSyncIframe: insertUserSyncIframe,
  insertElement: insertElement,
  isFn: isFn,
  triggerPixel: triggerPixel,
  logError: logError,
  logWarn: logWarn,
  logMessage: logMessage,
  logInfo: logInfo,
  parseQS: parseQS,
  formatQS: formatQS,
  deepEqual: deepEqual
};
var prebidInternal = {};
/**
 * Returns object that is used as internal prebid namespace
 */

function getPrebidInternal() {
  return prebidInternal;
}
var uniqueRef = {};
var bind = function (a, b) {
  return b;
}.bind(null, 1, uniqueRef)() === uniqueRef ? Function.prototype.bind : function (bind) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return self.apply(bind, args.concat(Array.prototype.slice.call(arguments)));
  };
};
/* utility method to get incremental integer starting from 1 */

var getIncrementalInteger = function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}(); // generate a random string (to be used as a dynamic JSONP callback)


function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}
/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * https://gist.github.com/jed/982883 via node-uuid
 */

function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
}
/**
 * Returns random data using the Crypto API if available and Math.random if not
 * Method is from https://gist.github.com/jed/982883 like generateUUID, direct link https://gist.github.com/jed/982883#gistcomment-45104
 */

function _getRandomData() {
  if (window && window.crypto && window.crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint8Array(1))[0] % 16;
  } else {
    return Math.random() * 16;
  }
}

function getBidIdParameter(key, paramsObj) {
  if (paramsObj && paramsObj[key]) {
    return paramsObj[key];
  }

  return '';
}
function tryAppendQueryString(existingUrl, key, value) {
  if (value) {
    return existingUrl + key + '=' + encodeURIComponent(value) + '&';
  }

  return existingUrl;
} // parse a query string object passed in bid params
// bid params should be an object such as {key: "value", key1 : "value1"}
// aliases to formatQS

function parseQueryStringParameters(queryObj) {
  var result = '';

  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) {
      result += k + '=' + encodeURIComponent(queryObj[k]) + '&';
    }
  }

  result = result.replace(/&$/, '');
  return result;
} // transform an AdServer targeting bids into a query string to send to the adserver

function transformAdServerTargetingObj(targeting) {
  // we expect to receive targeting for a single slot at a time
  if (targeting && Object.getOwnPropertyNames(targeting).length > 0) {
    return getKeys(targeting).map(function (key) {
      return "".concat(key, "=").concat(encodeURIComponent(getValue(targeting, key)));
    }).join('&');
  } else {
    return '';
  }
}
/**
 * Read an adUnit object and return the sizes used in an [[728, 90]] format (even if they had [728, 90] defined)
 * Preference is given to the `adUnit.mediaTypes.banner.sizes` object over the `adUnit.sizes`
 * @param {object} adUnit one adUnit object from the normal list of adUnits
 * @returns {Array.<number[]>} array of arrays containing numeric sizes
 */

function getAdUnitSizes(adUnit) {
  if (!adUnit) {
    return;
  }

  var sizes = [];

  if (adUnit.mediaTypes && adUnit.mediaTypes.banner && Array.isArray(adUnit.mediaTypes.banner.sizes)) {
    var bannerSizes = adUnit.mediaTypes.banner.sizes;

    if (Array.isArray(bannerSizes[0])) {
      sizes = bannerSizes;
    } else {
      sizes.push(bannerSizes);
    } // TODO - remove this else block when we're ready to deprecate adUnit.sizes for bidders

  } else if (Array.isArray(adUnit.sizes)) {
    if (Array.isArray(adUnit.sizes[0])) {
      sizes = adUnit.sizes;
    } else {
      sizes.push(adUnit.sizes);
    }
  }

  return sizes;
}
/**
 * Parse a GPT-Style general size Array like `[[300, 250]]` or `"300x250,970x90"` into an array of sizes `["300x250"]` or '['300x250', '970x90']'
 * @param  {(Array.<number[]>|Array.<number>)} sizeObj Input array or double array [300,250] or [[300,250], [728,90]]
 * @return {Array.<string>}  Array of strings like `["300x250"]` or `["300x250", "728x90"]`
 */

function parseSizesInput(sizeObj) {
  var parsedSizes = []; // if a string for now we can assume it is a single size, like "300x250"

  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(','); // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line

    var sizeRegex = /^(\d)+x(\d)+$/i;

    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if (_typeof(sizeObj) === 'object') {
    var sizeArrayLength = sizeObj.length; // don't process empty array

    if (sizeArrayLength > 0) {
      // if we are a 2 item array of 2 numbers, we must be a SingleSize array
      if (sizeArrayLength === 2 && typeof sizeObj[0] === 'number' && typeof sizeObj[1] === 'number') {
        parsedSizes.push(parseGPTSingleSizeArray(sizeObj));
      } else {
        // otherwise, we must be a MultiSize array
        for (var i = 0; i < sizeArrayLength; i++) {
          parsedSizes.push(parseGPTSingleSizeArray(sizeObj[i]));
        }
      }
    }
  }

  return parsedSizes;
} // Parse a GPT style single size array, (i.e [300, 250])
// into an AppNexus style string, (i.e. 300x250)

function parseGPTSingleSizeArray(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return singleSize[0] + 'x' + singleSize[1];
  }
} // Parse a GPT style single size array, (i.e [300, 250])
// into OpenRTB-compatible (imp.banner.w/h, imp.banner.format.w/h, imp.video.w/h) object(i.e. {w:300, h:250})

function parseGPTSingleSizeArrayToRtbSize(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return {
      w: singleSize[0],
      h: singleSize[1]
    };
  }
}

function isValidGPTSingleSize(singleSize) {
  // if we aren't exactly 2 items in this array, it is invalid
  return isArray(singleSize) && singleSize.length === 2 && !isNaN(singleSize[0]) && !isNaN(singleSize[1]);
}

function getWindowTop() {
  return window.top;
}
function getWindowSelf() {
  return window.self;
}
function getWindowLocation() {
  return window.location;
}
/**
 * Wrappers to console.(log | info | warn | error). Takes N arguments, the same as the native methods
 */

function logMessage() {
  if (debugTurnedOn() && consoleLogExists) {
    console.log.apply(console, decorateLog(arguments, 'MESSAGE:'));
  }
}
function logInfo() {
  if (debugTurnedOn() && consoleInfoExists) {
    console.info.apply(console, decorateLog(arguments, 'INFO:'));
  }
}
function logWarn() {
  if (debugTurnedOn() && consoleWarnExists) {
    console.warn.apply(console, decorateLog(arguments, 'WARNING:'));
  }

  emitEvent(CONSTANTS.EVENTS.AUCTION_DEBUG, {
    type: 'WARNING',
    arguments: arguments
  });
}
function logError() {
  if (debugTurnedOn() && consoleErrorExists) {
    console.error.apply(console, decorateLog(arguments, 'ERROR:'));
  }

  emitEvent(CONSTANTS.EVENTS.AUCTION_DEBUG, {
    type: 'ERROR',
    arguments: arguments
  });
}
function prefixLog(prefix) {
  function decorate(fn) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(void 0, [prefix].concat(args));
    };
  }

  return {
    logError: decorate(logError),
    logWarn: decorate(logWarn),
    logMessage: decorate(logMessage),
    logInfo: decorate(logInfo)
  };
}

function decorateLog(args, prefix) {
  args = [].slice.call(args);
  var bidder = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getCurrentBidder();
  prefix && args.unshift(prefix);

  if (bidder) {
    args.unshift(label('#aaa'));
  }

  args.unshift(label('#3b88c3'));
  args.unshift('%cPrebid' + (bidder ? "%c".concat(bidder) : ''));
  return args;

  function label(color) {
    return "display: inline-block; color: #fff; background: ".concat(color, "; padding: 1px 4px; border-radius: 3px;");
  }
}

function hasConsoleLogger() {
  return consoleLogExists;
}
function debugTurnedOn() {
  return !!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('debug');
}
function createInvisibleIframe() {
  var f = document.createElement('iframe');
  f.id = getUniqueIdentifierStr();
  f.height = 0;
  f.width = 0;
  f.border = '0px';
  f.hspace = '0';
  f.vspace = '0';
  f.marginWidth = '0';
  f.marginHeight = '0';
  f.style.border = '0';
  f.scrolling = 'no';
  f.frameBorder = '0';
  f.src = 'about:blank';
  f.style.display = 'none';
  return f;
}
/*
 *   Check if a given parameter name exists in query string
 *   and if it does return the value
 */

function getParameterByName(name) {
  return parseQS(getWindowLocation().search)[name] || '';
}
/**
 * Return if the object is of the
 * given type.
 * @param {*} object to test
 * @param {String} _t type string (e.g., Array)
 * @return {Boolean} if object is of type _t
 */

function isA(object, _t) {
  return toString.call(object) === '[object ' + _t + ']';
}
function isFn(object) {
  return isA(object, tFn);
}
function isStr(object) {
  return isA(object, tStr);
}
function isArray(object) {
  return isA(object, tArr);
}
function isNumber(object) {
  return isA(object, tNumb);
}
function isPlainObject(object) {
  return isA(object, tObject);
}
function isBoolean(object) {
  return isA(object, tBoolean);
}
/**
 * Return if the object is "empty";
 * this includes falsey, no keys, or no items at indices
 * @param {*} object object to test
 * @return {Boolean} if object is empty
 */

function isEmpty(object) {
  if (!object) return true;

  if (isArray(object) || isStr(object)) {
    return !(object.length > 0);
  }

  for (var k in object) {
    if (hasOwnProperty.call(object, k)) return false;
  }

  return true;
}
/**
 * Return if string is empty, null, or undefined
 * @param str string to test
 * @returns {boolean} if string is empty
 */

function isEmptyStr(str) {
  return isStr(str) && (!str || str.length === 0);
}
/**
 * Iterate object with the function
 * falls back to es5 `forEach`
 * @param {Array|Object} object
 * @param {Function(value, key, object)} fn
 */

function _each(object, fn) {
  if (isEmpty(object)) return;
  if (isFn(object.forEach)) return object.forEach(fn, this);
  var k = 0;
  var l = object.length;

  if (l > 0) {
    for (; k < l; k++) {
      fn(object[k], k, object);
    }
  } else {
    for (k in object) {
      if (hasOwnProperty.call(object, k)) fn.call(this, object[k], k);
    }
  }
}
function contains(a, obj) {
  if (isEmpty(a)) {
    return false;
  }

  if (isFn(a.indexOf)) {
    return a.indexOf(obj) !== -1;
  }

  var i = a.length;

  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }

  return false;
}
/**
 * Map an array or object into another array
 * given a function
 * @param {Array|Object} object
 * @param {Function(value, key, object)} callback
 * @return {Array}
 */

function _map(object, callback) {
  if (isEmpty(object)) return [];
  if (isFn(object.map)) return object.map(callback);
  var output = [];

  _each(object, function (value, key) {
    output.push(callback(value, key, object));
  });

  return output;
}
function hasOwn(objectToCheck, propertyToCheckFor) {
  if (objectToCheck.hasOwnProperty) {
    return objectToCheck.hasOwnProperty(propertyToCheckFor);
  } else {
    return typeof objectToCheck[propertyToCheckFor] !== 'undefined' && objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor];
  }
}
;
/*
* Inserts an element(elm) as targets child, by default as first child
* @param {HTMLElement} elm
* @param {HTMLElement} [doc]
* @param {HTMLElement} [target]
* @param {Boolean} [asLastChildChild]
* @return {HTMLElement}
*/

function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  var parentEl;

  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }

  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');

    if (parentEl.length) {
      parentEl = parentEl[0];
      var insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}
/**
 * Returns a promise that completes when the given element triggers a 'load' or 'error' DOM event, or when
 * `timeout` milliseconds have elapsed.
 *
 * @param {HTMLElement} element
 * @param {Number} [timeout]
 * @returns {Promise}
 */

function waitForElementToLoad(element, timeout) {
  var timer = null;
  return new Promise(function (resolve) {
    var onLoad = function onLoad() {
      element.removeEventListener('load', onLoad);
      element.removeEventListener('error', onLoad);

      if (timer != null) {
        window.clearTimeout(timer);
      }

      resolve();
    };

    element.addEventListener('load', onLoad);
    element.addEventListener('error', onLoad);

    if (timeout != null) {
      timer = window.setTimeout(onLoad, timeout);
    }
  });
}
/**
 * Inserts an image pixel with the specified `url` for cookie sync
 * @param {string} url URL string of the image pixel to load
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 * @param  {Number} [timeout] an optional timeout in milliseconds for the image to load before calling `done`
 */

function triggerPixel(url, done, timeout) {
  var img = new Image();

  if (done && internal.isFn(done)) {
    waitForElementToLoad(img, timeout).then(done);
  }

  img.src = url;
}
function callBurl(_ref) {
  var source = _ref.source,
      burl = _ref.burl;

  if (source === CONSTANTS.S2S.SRC && burl) {
    internal.triggerPixel(burl);
  }
}
/**
 * Inserts an empty iframe with the specified `html`, primarily used for tracking purposes
 * (though could be for other purposes)
 * @param {string} htmlCode snippet of HTML code used for tracking purposes
 */

function insertHtmlIntoIframe(htmlCode) {
  if (!htmlCode) {
    return;
  }

  var iframe = document.createElement('iframe');
  iframe.id = getUniqueIdentifierStr();
  iframe.width = 0;
  iframe.height = 0;
  iframe.hspace = '0';
  iframe.vspace = '0';
  iframe.marginWidth = '0';
  iframe.marginHeight = '0';
  iframe.style.display = 'none';
  iframe.style.height = '0px';
  iframe.style.width = '0px';
  iframe.scrolling = 'no';
  iframe.frameBorder = '0';
  iframe.allowtransparency = 'true';
  internal.insertElement(iframe, document, 'body');
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(htmlCode);
  iframe.contentWindow.document.close();
}
/**
 * Inserts empty iframe with the specified `url` for cookie sync
 * @param  {string} url URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 * @param  {Number} [timeout] an optional timeout in milliseconds for the iframe to load before calling `done`
 */

function insertUserSyncIframe(url, done, timeout) {
  var iframeHtml = internal.createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;

  if (done && internal.isFn(done)) {
    waitForElementToLoad(iframe, timeout).then(done);
  }

  internal.insertElement(iframe, document, 'html', true);
}
/**
 * Creates a snippet of HTML that retrieves the specified `url`
 * @param  {string} url URL to be requested
 * @return {string}     HTML snippet that contains the img src = set to `url`
 */

function createTrackPixelHtml(url) {
  if (!url) {
    return '';
  }

  var escapedUrl = encodeURI(url);
  var img = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
  img += '<img src="' + escapedUrl + '"></div>';
  return img;
}
;
/**
 * Creates a snippet of Iframe HTML that retrieves the specified `url`
 * @param  {string} url plain URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {string} sandbox string if provided the sandbox attribute will be included with the given value
 * @return {string}     HTML snippet that contains the iframe src = set to `url`
 */

function createTrackPixelIframeHtml(url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }

  if (encodeUri) {
    url = encodeURI(url);
  }

  if (sandbox) {
    sandbox = "sandbox=\"".concat(sandbox, "\"");
  }

  return "<iframe ".concat(sandbox, " id=\"").concat(getUniqueIdentifierStr(), "\"\n      frameborder=\"0\"\n      allowtransparency=\"true\"\n      marginheight=\"0\" marginwidth=\"0\"\n      width=\"0\" hspace=\"0\" vspace=\"0\" height=\"0\"\n      style=\"height:0px;width:0px;display:none;\"\n      scrolling=\"no\"\n      src=\"").concat(url, "\">\n    </iframe>");
}
function getValueString(param, val, defaultValue) {
  if (val === undefined || val === null) {
    return defaultValue;
  }

  if (isStr(val)) {
    return val;
  }

  if (isNumber(val)) {
    return val.toString();
  }

  internal.logWarn('Unsuported type for param: ' + param + ' required type: String');
}
function uniques(value, index, arry) {
  return arry.indexOf(value) === index;
}
function flatten(a, b) {
  return a.concat(b);
}
function getBidRequest(id, bidderRequests) {
  if (!id) {
    return;
  }

  var bidRequest;
  bidderRequests.some(function (bidderRequest) {
    var result = Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["b" /* find */])(bidderRequest.bids, function (bid) {
      return ['bidId', 'adId', 'bid_id'].some(function (type) {
        return bid[type] === id;
      });
    });

    if (result) {
      bidRequest = result;
    }

    return result;
  });
  return bidRequest;
}
function getKeys(obj) {
  return Object.keys(obj);
}
function getValue(obj, key) {
  return obj[key];
}
/**
 * Get the key of an object for a given value
 */

function getKeyByValue(obj, value) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
}
function getBidderCodes() {
  var adUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pbjs.adUnits;
  // this could memoize adUnits
  return adUnits.map(function (unit) {
    return unit.bids.map(function (bid) {
      return bid.bidder;
    }).reduce(flatten, []);
  }).reduce(flatten, []).filter(uniques);
}
function isGptPubadsDefined() {
  if (window.googletag && isFn(window.googletag.pubads) && isFn(window.googletag.pubads().getSlots)) {
    return true;
  }
}
function isApnGetTagDefined() {
  if (window.apntag && isFn(window.apntag.getTag)) {
    return true;
  }
} // This function will get highest cpm value bid, in case of tie it will return the bid with lowest timeToRespond

var getHighestCpm = getHighestCpmCallback('timeToRespond', function (previous, current) {
  return previous > current;
}); // This function will get the oldest hightest cpm value bid, in case of tie it will return the bid which came in first
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2448

var getOldestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous > current;
}); // This function will get the latest hightest cpm value bid, in case of tie it will return the bid which came in last
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2539

var getLatestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous < current;
});

function getHighestCpmCallback(useTieBreakerProperty, tieBreakerCallback) {
  return function (previous, current) {
    if (previous.cpm === current.cpm) {
      return tieBreakerCallback(previous[useTieBreakerProperty], current[useTieBreakerProperty]) ? current : previous;
    }

    return previous.cpm < current.cpm ? current : previous;
  };
}
/**
 * Fisher–Yates shuffle
 * http://stackoverflow.com/a/6274398
 * https://bost.ocks.org/mike/shuffle/
 * istanbul ignore next
 */


function shuffle(array) {
  var counter = array.length; // while there are elements in the array

  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter); // decrease counter by 1

    counter--; // and swap the last element with it

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
function adUnitsFilter(filter, bid) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(filter, bid && bid.adUnitCode);
}
function deepClone(obj) {
  return __WEBPACK_IMPORTED_MODULE_1_just_clone___default()(obj);
}
function inIframe() {
  try {
    return internal.getWindowSelf() !== internal.getWindowTop();
  } catch (e) {
    return true;
  }
}
function isSafariBrowser() {
  return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
}
function replaceAuctionPrice(str, cpm) {
  if (!str) return;
  return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
}
function replaceClickThrough(str, clicktag) {
  if (!str || !clicktag || typeof clicktag !== 'string') return;
  return str.replace(/\${CLICKTHROUGH}/g, clicktag);
}
function timestamp() {
  return new Date().getTime();
}
/**
 * The returned value represents the time elapsed since the time origin. @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 * @returns {number}
 */

function getPerformanceNow() {
  return window.performance && window.performance.now && window.performance.now() || 0;
}
/**
 * When the deviceAccess flag config option is false, no cookies should be read or set
 * @returns {boolean}
 */

function hasDeviceAccess() {
  return __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('deviceAccess') !== false;
}
/**
 * @returns {(boolean|undefined)}
 */

function checkCookieSupport() {
  if (window.navigator.cookieEnabled || !!document.cookie.length) {
    return true;
  }
}
/**
 * Given a function, return a function which only executes the original after
 * it's been called numRequiredCalls times.
 *
 * Note that the arguments from the previous calls will *not* be forwarded to the original function.
 * Only the final call's arguments matter.
 *
 * @param {function} func The function which should be executed, once the returned function has been executed
 *   numRequiredCalls times.
 * @param {int} numRequiredCalls The number of times which the returned function needs to be called before
 *   func is.
 */

function delayExecution(func, numRequiredCalls) {
  if (numRequiredCalls < 1) {
    throw new Error("numRequiredCalls must be a positive number. Got ".concat(numRequiredCalls));
  }

  var numCalls = 0;
  return function () {
    numCalls++;

    if (numCalls === numRequiredCalls) {
      func.apply(this, arguments);
    }
  };
}
/**
 * https://stackoverflow.com/a/34890276/428704
 * @export
 * @param {array} xs
 * @param {string} key
 * @returns {Object} {${key_value}: ${groupByArray}, key_value: {groupByArray}}
 */

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
/**
 * Build an object consisting of only defined parameters to avoid creating an
 * object with defined keys and undefined values.
 * @param {Object} object The object to pick defined params out of
 * @param {string[]} params An array of strings representing properties to look for in the object
 * @returns {Object} An object containing all the specified values that are defined
 */

function getDefinedParams(object, params) {
  return params.filter(function (param) {
    return object[param];
  }).reduce(function (bid, param) {
    return _extends(bid, _defineProperty({}, param, object[param]));
  }, {});
}
/**
 * @typedef {Object} MediaTypes
 * @property {Object} banner banner configuration
 * @property {Object} native native configuration
 * @property {Object} video video configuration
 */

/**
 * Validates an adunit's `mediaTypes` parameter
 * @param {MediaTypes} mediaTypes mediaTypes parameter to validate
 * @return {boolean} If object is valid
 */

function isValidMediaTypes(mediaTypes) {
  var SUPPORTED_MEDIA_TYPES = ['banner', 'native', 'video'];
  var SUPPORTED_STREAM_TYPES = ['instream', 'outstream', 'adpod'];
  var types = Object.keys(mediaTypes);

  if (!types.every(function (type) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(SUPPORTED_MEDIA_TYPES, type);
  })) {
    return false;
  }

  if (mediaTypes.video && mediaTypes.video.context) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(SUPPORTED_STREAM_TYPES, mediaTypes.video.context);
  }

  return true;
}
/**
 * Returns user configured bidder params from adunit
 * @param {Object} adUnits
 * @param {string} adUnitCode code
 * @param {string} bidder code
 * @return {Array} user configured param for the given bidder adunit configuration
 */

function getUserConfiguredParams(adUnits, adUnitCode, bidder) {
  return adUnits.filter(function (adUnit) {
    return adUnit.code === adUnitCode;
  }).map(function (adUnit) {
    return adUnit.bids;
  }).reduce(flatten, []).filter(function (bidderData) {
    return bidderData.bidder === bidder;
  }).map(function (bidderData) {
    return bidderData.params || {};
  });
}
/**
 * Returns the origin
 */

function getOrigin() {
  // IE10 does not have this property. https://gist.github.com/hbogs/7908703
  if (!window.location.origin) {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  } else {
    return window.location.origin;
  }
}
/**
 * Returns Do Not Track state
 */

function getDNT() {
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1' || navigator.doNotTrack === 'yes';
}

var compareCodeAndSlot = function compareCodeAndSlot(slot, adUnitCode) {
  return slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;
};
/**
 * Returns filter function to match adUnitCode in slot
 * @param {Object} slot GoogleTag slot
 * @return {function} filter function
 */


function isAdUnitCodeMatchingSlot(slot) {
  return function (adUnitCode) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Returns filter function to match adUnitCode in slot
 * @param {string} adUnitCode AdUnit code
 * @return {function} filter function
 */

function isSlotMatchingAdUnitCode(adUnitCode) {
  return function (slot) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * @summary Uses the adUnit's code in order to find a matching gptSlot on the page
 */

function getGptSlotInfoForAdUnitCode(adUnitCode) {
  var matchingSlot;

  if (isGptPubadsDefined()) {
    // find the first matching gpt slot on the page
    matchingSlot = Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["b" /* find */])(window.googletag.pubads().getSlots(), isSlotMatchingAdUnitCode(adUnitCode));
  }

  if (matchingSlot) {
    return {
      gptSlot: matchingSlot.getAdUnitPath(),
      divId: matchingSlot.getSlotElementId()
    };
  }

  return {};
}
;
/**
 * Constructs warning message for when unsupported bidders are dropped from an adunit
 * @param {Object} adUnit ad unit from which the bidder is being dropped
 * @param {string} bidder bidder code that is not compatible with the adUnit
 * @return {string} warning message to display when condition is met
 */

function unsupportedBidderMessage(adUnit, bidder) {
  var mediaType = Object.keys(adUnit.mediaTypes || {
    'banner': 'banner'
  }).join(', ');
  return "\n    ".concat(adUnit.code, " is a ").concat(mediaType, " ad unit\n    containing bidders that don't support ").concat(mediaType, ": ").concat(bidder, ".\n    This bidder won't fetch demand.\n  ");
}
/**
 * Checks input is integer or not
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value
 */

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }
}
/**
 * Converts a string value in camel-case to underscore eg 'placementId' becomes 'placement_id'
 * @param {string} value string value to convert
 */

function convertCamelToUnderscore(value) {
  return value.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
    return '_' + y.toLowerCase();
  }).replace(/^_/, '');
}
/**
 * Returns a new object with undefined properties removed from given object
 * @param obj the object to clean
 */

function cleanObj(obj) {
  return Object.keys(obj).reduce(function (newObj, key) {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
}
/**
 * Create a new object with selected properties.  Also allows property renaming and transform functions.
 * @param obj the original object
 * @param properties An array of desired properties
 */

function pick(obj, properties) {
  if (_typeof(obj) !== 'object') {
    return {};
  }

  return properties.reduce(function (newObj, prop, i) {
    if (typeof prop === 'function') {
      return newObj;
    }

    var newProp = prop;
    var match = prop.match(/^(.+?)\sas\s(.+?)$/i);

    if (match) {
      prop = match[1];
      newProp = match[2];
    }

    var value = obj[prop];

    if (typeof properties[i + 1] === 'function') {
      value = properties[i + 1](value, newObj);
    }

    if (typeof value !== 'undefined') {
      newObj[newProp] = value;
    }

    return newObj;
  }, {});
}
/**
 * Converts an object of arrays (either strings or numbers) into an array of objects containing key and value properties
 * normally read from bidder params
 * eg { foo: ['bar', 'baz'], fizz: ['buzz'] }
 * becomes [{ key: 'foo', value: ['bar', 'baz']}, {key: 'fizz', value: ['buzz']}]
 * @param {Object} keywords object of arrays representing keyvalue pairs
 * @param {string} paramName name of parent object (eg 'keywords') containing keyword data, used in error handling
 */

function transformBidderParamKeywords(keywords) {
  var paramName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keywords';
  var arrs = [];

  _each(keywords, function (v, k) {
    if (isArray(v)) {
      var values = [];

      _each(v, function (val) {
        val = getValueString(paramName + '.' + k, val);

        if (val || val === '') {
          values.push(val);
        }
      });

      v = values;
    } else {
      v = getValueString(paramName + '.' + k, v);

      if (isStr(v)) {
        v = [v];
      } else {
        return;
      } // unsuported types - don't send a key

    }

    arrs.push({
      key: k,
      value: v
    });
  });

  return arrs;
}
/**
 * Try to convert a value to a type.
 * If it can't be done, the value will be returned.
 *
 * @param {string} typeToConvert The target type. e.g. "string", "number", etc.
 * @param {*} value The value to be converted into typeToConvert.
 */

function tryConvertType(typeToConvert, value) {
  if (typeToConvert === 'string') {
    return value && value.toString();
  } else if (typeToConvert === 'number') {
    return Number(value);
  } else {
    return value;
  }
}

function convertTypes(types, params) {
  Object.keys(types).forEach(function (key) {
    if (params[key]) {
      if (isFn(types[key])) {
        params[key] = types[key](params[key]);
      } else {
        params[key] = tryConvertType(types[key], params[key]);
      } // don't send invalid values


      if (isNaN(params[key])) {
        delete params.key;
      }
    }
  });
  return params;
}
function isArrayOfNums(val, size) {
  return isArray(val) && (size ? val.length === size : true) && val.every(function (v) {
    return isInteger(v);
  });
}
/**
 * Creates an array of n length and fills each item with the given value
 */

function fill(value, length) {
  var newArray = [];

  for (var i = 0; i < length; i++) {
    var valueToPush = isPlainObject(value) ? deepClone(value) : value;
    newArray.push(valueToPush);
  }

  return newArray;
}
/**
 * http://npm.im/chunk
 * Returns an array with *size* chunks from given array
 *
 * Example:
 * ['a', 'b', 'c', 'd', 'e'] chunked by 2 =>
 * [['a', 'b'], ['c', 'd'], ['e']]
 */

function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    var start = i * size;
    var end = start + size;
    newArray.push(array.slice(start, end));
  }

  return newArray;
}
function getMinValueFromArray(array) {
  return Math.min.apply(Math, _toConsumableArray(array));
}
function getMaxValueFromArray(array) {
  return Math.max.apply(Math, _toConsumableArray(array));
}
/**
 * This function will create compare function to sort on object property
 * @param {string} property
 * @returns {function} compare function to be used in sorting
 */

function compareOn(property) {
  return function compare(a, b) {
    if (a[property] < b[property]) {
      return 1;
    }

    if (a[property] > b[property]) {
      return -1;
    }

    return 0;
  };
}
function parseQS(query) {
  return !query ? {} : query.replace(/^\?/, '').split('&').reduce(function (acc, criteria) {
    var _criteria$split = criteria.split('='),
        _criteria$split2 = _slicedToArray(_criteria$split, 2),
        k = _criteria$split2[0],
        v = _criteria$split2[1];

    if (/\[\]$/.test(k)) {
      k = k.replace('[]', '');
      acc[k] = acc[k] || [];
      acc[k].push(v);
    } else {
      acc[k] = v || '';
    }

    return acc;
  }, {});
}
function formatQS(query) {
  return Object.keys(query).map(function (k) {
    return Array.isArray(query[k]) ? query[k].map(function (v) {
      return "".concat(k, "[]=").concat(v);
    }).join('&') : "".concat(k, "=").concat(query[k]);
  }).join('&');
}
function parseUrl(url, options) {
  var parsed = document.createElement('a');

  if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
    parsed.href = url;
  } else {
    parsed.href = decodeURIComponent(url);
  } // in window.location 'search' is string, not object


  var qsAsString = options && 'decodeSearchAsString' in options && options.decodeSearchAsString;
  return {
    href: parsed.href,
    protocol: (parsed.protocol || '').replace(/:$/, ''),
    hostname: parsed.hostname,
    port: +parsed.port,
    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
    search: qsAsString ? parsed.search : internal.parseQS(parsed.search || ''),
    hash: (parsed.hash || '').replace(/^#/, ''),
    host: parsed.host || window.location.host
  };
}
function buildUrl(obj) {
  return (obj.protocol || 'http') + '://' + (obj.host || obj.hostname + (obj.port ? ":".concat(obj.port) : '')) + (obj.pathname || '') + (obj.search ? "?".concat(internal.formatQS(obj.search || '')) : '') + (obj.hash ? "#".concat(obj.hash) : '');
}
/**
 * This function deeply compares two objects checking for their equivalence.
 * @param {Object} obj1
 * @param {Object} obj2
 * @param checkTypes {boolean} if set, two objects with identical properties but different constructors will *not*
 * be considered equivalent.
 * @returns {boolean}
 */

function deepEqual(obj1, obj2) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$checkTypes = _ref2.checkTypes,
      checkTypes = _ref2$checkTypes === void 0 ? false : _ref2$checkTypes;

  if (obj1 === obj2) return true;else if (_typeof(obj1) === 'object' && obj1 !== null && _typeof(obj2) === 'object' && obj2 !== null && (!checkTypes || obj1.constructor === obj2.constructor)) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (var prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        if (!deepEqual(obj1[prop], obj2[prop], {
          checkTypes: checkTypes
        })) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}
function mergeDeep(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isPlainObject(target) && isPlainObject(source)) {
    var _loop = function _loop(key) {
      if (isPlainObject(source[key])) {
        if (!target[key]) _extends(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else if (isArray(source[key])) {
        if (!target[key]) {
          _extends(target, _defineProperty({}, key, _toConsumableArray(source[key])));
        } else if (isArray(target[key])) {
          source[key].forEach(function (obj) {
            var addItFlag = 1;

            for (var i = 0; i < target[key].length; i++) {
              if (deepEqual(target[key][i], obj)) {
                addItFlag = 0;
                break;
              }
            }

            if (addItFlag) {
              target[key].push(obj);
            }
          });
        }
      } else {
        _extends(target, _defineProperty({}, key, source[key]));
      }
    };

    for (var key in source) {
      _loop(key);
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}
/**
 * returns a hash of a string using a fast algorithm
 * source: https://stackoverflow.com/a/52171480/845390
 * @param str
 * @param seed (optional)
 * @returns {string}
 */

function cyrb53Hash(str) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // IE doesn't support imul
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill
  var imul = function imul(opA, opB) {
    if (isFn(Math.imul)) {
      return Math.imul(opA, opB);
    } else {
      opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
      // floating points give us 53 bits of precision to work with plus 1 sign bit
      // automatically handled for our convienence:
      // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
      //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/

      var result = (opA & 0x003fffff) * opB; // 2. We can remove an integer coersion from the statement above because:
      //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
      //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/

      if (opA & 0xffc00000) result += (opA & 0xffc00000) * opB | 0;
      return result | 0;
    }
  };

  var h1 = 0xdeadbeef ^ seed;
  var h2 = 0x41c6ce57 ^ seed;

  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = imul(h1 ^ ch, 2654435761);
    h2 = imul(h2 ^ ch, 1597334677);
  }

  h1 = imul(h1 ^ h1 >>> 16, 2246822507) ^ imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = imul(h2 ^ h2 >>> 16, 2246822507) ^ imul(h1 ^ h1 >>> 13, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString();
}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (immutable) */ __webpack_exports__["registerBidder"] = registerBidder;
/* harmony export (immutable) */ __webpack_exports__["newBidder"] = newBidder;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processBidderRequests", function() { return processBidderRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSyncInner", function() { return registerSyncInner; });
/* harmony export (immutable) */ __webpack_exports__["preloadBidderMappingFile"] = preloadBidderMappingFile;
/* harmony export (immutable) */ __webpack_exports__["getIabSubCategory"] = getIabSubCategory;
/* harmony export (immutable) */ __webpack_exports__["isValid"] = isValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bidfactory_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userSync_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__native_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__storageManager_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auctionManager_js__ = __webpack_require__(15);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















var storage = Object(__WEBPACK_IMPORTED_MODULE_14__storageManager_js__["a" /* getCoreStorageManager */])('bidderFactory');
/**
 * This file aims to support Adapters during the Prebid 0.x -> 1.x transition.
 *
 * Prebid 1.x and Prebid 0.x will be in separate branches--perhaps for a long time.
 * This function defines an API for adapter construction which is compatible with both versions.
 * Adapters which use it can maintain their code in master, and only this file will need to change
 * in the 1.x branch.
 *
 * Typical usage looks something like:
 *
 * const adapter = registerBidder({
 *   code: 'myBidderCode',
 *   aliases: ['alias1', 'alias2'],
 *   supportedMediaTypes: ['video', 'native'],
 *   isBidRequestValid: function(paramsObject) { return true/false },
 *   buildRequests: function(bidRequests, bidderRequest) { return some ServerRequest(s) },
 *   interpretResponse: function(oneServerResponse) { return some Bids, or throw an error. }
 * });
 *
 * @see BidderSpec for the full API and more thorough descriptions.
 *
 */

/**
 * @typedef {object} BidderSpec An object containing the adapter-specific functions needed to
 * make a Bidder.
 *
 * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
 *   one as is used in the call to registerBidAdapter
 * @property {string[]} [aliases] A list of aliases which should also resolve to this bidder.
 * @property {MediaType[]} [supportedMediaTypes]: A list of Media Types which the adapter supports.
 * @property {function(object): boolean} isBidRequestValid Determines whether or not the given bid has all the params
 *   needed to make a valid request.
 * @property {function(BidRequest[], bidderRequest): ServerRequest|ServerRequest[]} buildRequests Build the request to the Server
 *   which requests Bids for the given array of Requests. Each BidRequest in the argument array is guaranteed to have
 *   passed the isBidRequestValid() test.
 * @property {function(ServerResponse, BidRequest): Bid[]} interpretResponse Given a successful response from the Server,
 *   interpret it and return the Bid objects. This function will be run inside a try/catch.
 *   If it throws any errors, your bids will be discarded.
 * @property {function(SyncOptions, ServerResponse[]): UserSync[]} [getUserSyncs] Given an array of all the responses
 *   from the server, determine which user syncs should occur. The argument array will contain every element
 *   which has been sent through to interpretResponse. The order of syncs in this array matters. The most
 *   important ones should come first, since publishers may limit how many are dropped on their page.
 * @property {function(object): object} transformBidParams Updates bid params before creating bid request
 }}
 */

/**
 * @typedef {object} BidRequest
 *
 * @property {string} bidId A string which uniquely identifies this BidRequest in the current Auction.
 * @property {object} params Any bidder-specific params which the publisher used in their bid request.
 */

/**
 * @typedef {object} ServerRequest
 *
 * @property {('GET'|'POST')} method The type of request which this is.
 * @property {string} url The endpoint for the request. For example, "//bids.example.com".
 * @property {string|object} data Data to be sent in the request.
 * @property {object} options Content-Type set in the header of the bid request, overrides default 'text/plain'.
 *   If this is a GET request, they'll become query params. If it's a POST request, they'll be added to the body.
 *   Strings will be added as-is. Objects will be unpacked into query params based on key/value mappings, or
 *   JSON-serialized into the Request body.
 */

/**
 * @typedef {object} ServerResponse
 *
 * @property {*} body The response body. If this is legal JSON, then it will be parsed. Otherwise it'll be a
 *   string with the body's content.
 * @property {{get: function(string): string} headers The response headers.
 *   Call this like `ServerResponse.headers.get("Content-Type")`
 */

/**
 * @typedef {object} Bid
 *
 * @property {string} requestId The specific BidRequest which this bid is aimed at.
 *   This should match the BidRequest.bidId which this Bid targets.
 * @property {string} ad A URL which can be used to load this ad, if it's chosen by the publisher.
 * @property {string} currency The currency code for the cpm value
 * @property {number} cpm The bid price, in US cents per thousand impressions.
 * @property {number} ttl Time-to-live - how long (in seconds) Prebid can use this bid.
 * @property {boolean} netRevenue Boolean defining whether the bid is Net or Gross.  The default is true (Net).
 * @property {number} height The height of the ad, in pixels.
 * @property {number} width The width of the ad, in pixels.
 *
 * @property {object} [native] Object for storing native creative assets
 * @property {object} [video] Object for storing video response data
 * @property {object} [meta] Object for storing bid meta data
 * @property {string} [meta.primaryCatId] The IAB primary category ID
 * @property [Renderer] renderer A Renderer which can be used as a default for this bid,
 *   if the publisher doesn't override it. This is only relevant for Outstream Video bids.
 */

/**
 * @typedef {Object} SyncOptions
 *
 * An object containing information about usersyncs which the adapter should obey.
 *
 * @property {boolean} iframeEnabled True if iframe usersyncs are allowed, and false otherwise
 * @property {boolean} pixelEnabled True if image usersyncs are allowed, and false otherwise
 */

/**
 * TODO: Move this to the UserSync module after that PR is merged.
 *
 * @typedef {object} UserSync
 *
 * @property {('image'|'iframe')} type The type of user sync to be done.
 * @property {string} url The URL which makes the sync happen.
 */
// common params for all mediaTypes

var COMMON_BID_RESPONSE_KEYS = ['cpm', 'ttl', 'creativeId', 'netRevenue', 'currency'];
var DEFAULT_REFRESHIN_DAYS = 1;
/**
 * Register a bidder with prebid, using the given spec.
 *
 * If possible, Adapter modules should use this function instead of adapterManager.registerBidAdapter().
 *
 * @param {BidderSpec} spec An object containing the bare-bones functions we need to make a Bidder.
 */

function registerBidder(spec) {
  var mediaTypes = Array.isArray(spec.supportedMediaTypes) ? {
    supportedMediaTypes: spec.supportedMediaTypes
  } : undefined;

  function putBidder(spec) {
    var bidder = newBidder(spec);
    __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].registerBidAdapter(bidder, spec.code, mediaTypes);
  }

  putBidder(spec);

  if (Array.isArray(spec.aliases)) {
    spec.aliases.forEach(function (alias) {
      var aliasCode = alias;
      var gvlid;
      var skipPbsAliasing;

      if (Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["isPlainObject"])(alias)) {
        aliasCode = alias.code;
        gvlid = alias.gvlid;
        skipPbsAliasing = alias.skipPbsAliasing;
      }

      __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].aliasRegistry[aliasCode] = spec.code;
      putBidder(_extends({}, spec, {
        code: aliasCode,
        gvlid: gvlid,
        skipPbsAliasing: skipPbsAliasing
      }));
    });
  }
}
/**
 * Make a new bidder from the given spec. This is exported mainly for testing.
 * Adapters will probably find it more convenient to use registerBidder instead.
 *
 * @param {BidderSpec} spec
 */

function newBidder(spec) {
  return _extends(new __WEBPACK_IMPORTED_MODULE_0__adapter_js__["a" /* default */](spec.code), {
    getSpec: function getSpec() {
      return Object.freeze(spec);
    },
    registerSyncs: registerSyncs,
    callBids: function callBids(bidderRequest, addBidResponse, done, ajax, onTimelyResponse, configEnabledCallback) {
      if (!Array.isArray(bidderRequest.bids)) {
        return;
      }

      var adUnitCodesHandled = {};

      function addBidWithCode(adUnitCode, bid) {
        adUnitCodesHandled[adUnitCode] = true;

        if (isValid(adUnitCode, bid)) {
          addBidResponse(adUnitCode, bid);
        }
      } // After all the responses have come back, call done() and
      // register any required usersync pixels.


      var responses = [];

      function afterAllResponses() {
        done();
        __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].runWithBidder(spec.code, function () {
          __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BIDDER_DONE, bidderRequest);
          registerSyncs(responses, bidderRequest.gdprConsent, bidderRequest.uspConsent);
        });
      }

      var validBidRequests = bidderRequest.bids.filter(filterAndWarn);

      if (validBidRequests.length === 0) {
        afterAllResponses();
        return;
      }

      var bidRequestMap = {};
      validBidRequests.forEach(function (bid) {
        bidRequestMap[bid.bidId] = bid; // Delete this once we are 1.0

        if (!bid.adUnitCode) {
          bid.adUnitCode = bid.placementCode;
        }
      });
      processBidderRequests(spec, validBidRequests, bidderRequest, ajax, configEnabledCallback, {
        onRequest: function onRequest(requestObject) {
          return __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BEFORE_BIDDER_HTTP, bidderRequest, requestObject);
        },
        onResponse: function onResponse(resp) {
          onTimelyResponse(spec.code);
          responses.push(resp);
        },
        // If the server responds with an error, there's not much we can do beside logging.
        onError: function onError(errorMessage, error) {
          onTimelyResponse(spec.code);
          __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].callBidderError(spec.code, error, bidderRequest);
          __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BIDDER_ERROR, {
            error: error,
            bidderRequest: bidderRequest
          });
          Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Server call for ".concat(spec.code, " failed: ").concat(errorMessage, " ").concat(error.status, ". Continuing without bids."));
        },
        onBid: function onBid(bid) {
          var bidRequest = bidRequestMap[bid.requestId];

          if (bidRequest) {
            // creating a copy of original values as cpm and currency are modified later
            bid.originalCpm = bid.cpm;
            bid.originalCurrency = bid.currency;
            bid.meta = bid.meta || _extends({}, bid[bidRequest.bidder]);

            var prebidBid = _extends(Object(__WEBPACK_IMPORTED_MODULE_3__bidfactory_js__["a" /* createBid */])(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.STATUS.GOOD, bidRequest), bid);

            addBidWithCode(bidRequest.adUnitCode, prebidBid);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Bidder ".concat(spec.code, " made bid for unknown request ID: ").concat(bid.requestId, ". Ignoring."));
          }
        },
        onCompletion: afterAllResponses
      });
    }
  });

  function registerSyncs(responses, gdprConsent, uspConsent) {
    registerSyncInner(spec, responses, gdprConsent, uspConsent);
  }

  function filterAndWarn(bid) {
    if (!spec.isBidRequestValid(bid)) {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Invalid bid sent to bidder ".concat(spec.code, ": ").concat(JSON.stringify(bid)));
      return false;
    }

    return true;
  }
}
/**
 * Run a set of bid requests - that entails converting them to HTTP requests, sending
 * them over the network, and parsing the responses.
 *
 * @param spec bid adapter spec
 * @param bids bid requests to run
 * @param bidderRequest the bid request object that `bids` is connected to
 * @param ajax ajax method to use
 * @param wrapCallback {function(callback)} a function used to wrap every callback (for the purpose of `config.currentBidder`)
 * @param onRequest {function({})} invoked once for each HTTP request built by the adapter - with the raw request
 * @param onResponse {function({})} invoked once on each successful HTTP response - with the raw response
 * @param onError {function(String, {})} invoked once for each HTTP error - with status code and response
 * @param onBid {function({})} invoked once for each bid in the response - with the bid as returned by interpretResponse
 * @param onCompletion {function()} invoked once when all bid requests have been processed
 */

var processBidderRequests = Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["b" /* hook */])('sync', function (spec, bids, bidderRequest, ajax, wrapCallback, _ref) {
  var onRequest = _ref.onRequest,
      onResponse = _ref.onResponse,
      onError = _ref.onError,
      onBid = _ref.onBid,
      onCompletion = _ref.onCompletion;
  var requests = spec.buildRequests(bids, bidderRequest);

  if (!requests || requests.length === 0) {
    onCompletion();
    return;
  }

  if (!Array.isArray(requests)) {
    requests = [requests];
  }

  var requestDone = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["delayExecution"])(onCompletion, requests.length);
  requests.forEach(function (request) {
    // If the server responds successfully, use the adapter code to unpack the Bids from it.
    // If the adapter code fails, no bids should be added. After all the bids have been added,
    // make sure to call the `requestDone` function so that we're one step closer to calling onCompletion().
    var onSuccess = wrapCallback(function (response, responseObj) {
      try {
        response = JSON.parse(response);
      } catch (e) {
        /* response might not be JSON... that's ok. */
      } // Make response headers available for #1742. These are lazy-loaded because most adapters won't need them.


      response = {
        body: response,
        headers: headerParser(responseObj)
      };
      onResponse(response);
      var bids;

      try {
        bids = spec.interpretResponse(response, request);
      } catch (err) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Bidder ".concat(spec.code, " failed to interpret the server's response. Continuing without bids"), null, err);
        requestDone();
        return;
      }

      if (bids) {
        if (Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["isArray"])(bids)) {
          bids.forEach(onBid);
        } else {
          onBid(bids);
        }
      }

      requestDone();

      function headerParser(xmlHttpResponse) {
        return {
          get: responseObj.getResponseHeader.bind(responseObj)
        };
      }
    });
    var onFailure = wrapCallback(function (errorMessage, error) {
      onError(errorMessage, error);
      requestDone();
    });
    onRequest(request);

    switch (request.method) {
      case 'GET':
        ajax("".concat(request.url).concat(formatGetParameters(request.data)), {
          success: onSuccess,
          error: onFailure
        }, undefined, _extends({
          method: 'GET',
          withCredentials: true
        }, request.options));
        break;

      case 'POST':
        ajax(request.url, {
          success: onSuccess,
          error: onFailure
        }, typeof request.data === 'string' ? request.data : JSON.stringify(request.data), _extends({
          method: 'POST',
          contentType: 'text/plain',
          withCredentials: true
        }, request.options));
        break;

      default:
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Skipping invalid request from ".concat(spec.code, ". Request type ").concat(request.type, " must be GET or POST"));
        requestDone();
    }

    function formatGetParameters(data) {
      if (data) {
        return "?".concat(_typeof(data) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["parseQueryStringParameters"])(data) : data);
      }

      return '';
    }
  });
}, 'processBidderRequests');
var registerSyncInner = Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["b" /* hook */])('async', function (spec, responses, gdprConsent, uspConsent) {
  var aliasSyncEnabled = __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('userSync.aliasSyncEnabled');

  if (spec.getUserSyncs && (aliasSyncEnabled || !__WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].aliasRegistry[spec.code])) {
    var filterConfig = __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('userSync.filterSettings');
    var syncs = spec.getUserSyncs({
      iframeEnabled: !!(filterConfig && (filterConfig.iframe || filterConfig.all)),
      pixelEnabled: !!(filterConfig && (filterConfig.image || filterConfig.all))
    }, responses, gdprConsent, uspConsent);

    if (syncs) {
      if (!Array.isArray(syncs)) {
        syncs = [syncs];
      }

      syncs.forEach(function (sync) {
        __WEBPACK_IMPORTED_MODULE_4__userSync_js__["a" /* userSync */].registerSync(sync.type, spec.code, sync.url);
      });
    }
  }
}, 'registerSyncs');
function preloadBidderMappingFile(fn, adUnits) {
  if (!__WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion')) {
    return fn.call(this, adUnits);
  }

  var adPodBidders = adUnits.filter(function (adUnit) {
    return Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.context') === __WEBPACK_IMPORTED_MODULE_12__mediaTypes_js__["a" /* ADPOD */];
  }).map(function (adUnit) {
    return adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_11__utils_js__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_11__utils_js__["uniques"]);
  adPodBidders.forEach(function (bidder) {
    var bidderSpec = __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].getBidAdapter(bidder);

    if (bidderSpec.getSpec().getMappingFileInfo) {
      var info = bidderSpec.getSpec().getMappingFileInfo();
      var refreshInDays = info.refreshInDays ? info.refreshInDays : DEFAULT_REFRESHIN_DAYS;
      var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getSpec().code;
      var mappingData = storage.getDataFromLocalStorage(key);

      try {
        mappingData = mappingData ? JSON.parse(mappingData) : undefined;

        if (!mappingData || Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["timestamp"])() > mappingData.lastUpdated + refreshInDays * 24 * 60 * 60 * 1000) {
          Object(__WEBPACK_IMPORTED_MODULE_10__ajax_js__["a" /* ajax */])(info.url, {
            success: function success(response) {
              try {
                response = JSON.parse(response);
                var mapping = {
                  lastUpdated: Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["timestamp"])(),
                  mapping: response.mapping
                };
                storage.setDataInLocalStorage(key, JSON.stringify(mapping));
              } catch (error) {
                Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidder, " bidder translation mapping file"));
              }
            },
            error: function error() {
              Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to load ".concat(bidder, " bidder translation file"));
            }
          });
        }
      } catch (error) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidder, " bidder translation mapping file"));
      }
    }
  });
  fn.call(this, adUnits);
}
Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["a" /* getHook */])('checkAdUnitSetup').before(preloadBidderMappingFile);
/**
 * Reads the data stored in localstorage and returns iab subcategory
 * @param {string} bidderCode bidderCode
 * @param {string} category bidders category
 */

function getIabSubCategory(bidderCode, category) {
  var bidderSpec = __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].getBidAdapter(bidderCode);

  if (bidderSpec.getSpec().getMappingFileInfo) {
    var info = bidderSpec.getSpec().getMappingFileInfo();
    var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getBidderCode();
    var data = storage.getDataFromLocalStorage(key);

    if (data) {
      try {
        data = JSON.parse(data);
      } catch (error) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidderCode, " mapping data stored in local storage"));
      }

      return data.mapping[category] ? data.mapping[category] : null;
    }
  }
} // check that the bid has a width and height set

function validBidSize(adUnitCode, bid) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? __WEBPACK_IMPORTED_MODULE_15__auctionManager_js__["a" /* auctionManager */].index : _ref2$index;

  if ((bid.width || parseInt(bid.width, 10) === 0) && (bid.height || parseInt(bid.height, 10) === 0)) {
    bid.width = parseInt(bid.width, 10);
    bid.height = parseInt(bid.height, 10);
    return true;
  }

  var bidRequest = index.getBidRequest(bid);
  var mediaTypes = index.getMediaTypes(bid);
  var sizes = bidRequest && bidRequest.sizes || mediaTypes && mediaTypes.banner && mediaTypes.banner.sizes;
  var parsedSizes = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["parseSizesInput"])(sizes); // if a banner impression has one valid size, we assign that size to any bid
  // response that does not explicitly set width or height

  if (parsedSizes.length === 1) {
    var _parsedSizes$0$split = parsedSizes[0].split('x'),
        _parsedSizes$0$split2 = _slicedToArray(_parsedSizes$0$split, 2),
        width = _parsedSizes$0$split2[0],
        height = _parsedSizes$0$split2[1];

    bid.width = parseInt(width, 10);
    bid.height = parseInt(height, 10);
    return true;
  }

  return false;
} // Validate the arguments sent to us by the adapter. If this returns false, the bid should be totally ignored.


function isValid(adUnitCode, bid) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$index = _ref3.index,
      index = _ref3$index === void 0 ? __WEBPACK_IMPORTED_MODULE_15__auctionManager_js__["a" /* auctionManager */].index : _ref3$index;

  function hasValidKeys() {
    var bidKeys = Object.keys(bid);
    return COMMON_BID_RESPONSE_KEYS.every(function (key) {
      return Object(__WEBPACK_IMPORTED_MODULE_9__polyfill_js__["d" /* includes */])(bidKeys, key) && !Object(__WEBPACK_IMPORTED_MODULE_9__polyfill_js__["d" /* includes */])([undefined, null], bid[key]);
    });
  }

  function errorMessage(msg) {
    return "Invalid bid from ".concat(bid.bidderCode, ". Ignoring bid: ").concat(msg);
  }

  if (!adUnitCode) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])('No adUnitCode was supplied to addBidResponse.');
    return false;
  }

  if (!bid) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Some adapter tried to add an undefined bid for ".concat(adUnitCode, "."));
    return false;
  }

  if (!hasValidKeys()) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Bidder ".concat(bid.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")));
    return false;
  }

  if (bid.mediaType === 'native' && !Object(__WEBPACK_IMPORTED_MODULE_5__native_js__["h" /* nativeBidIsValid */])(bid, {
    index: index
  })) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage('Native bid missing some required properties.'));
    return false;
  }

  if (bid.mediaType === 'video' && !Object(__WEBPACK_IMPORTED_MODULE_6__video_js__["d" /* isValidVideoBid */])(bid, {
    index: index
  })) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Video bid does not have required vastUrl or renderer property"));
    return false;
  }

  if (bid.mediaType === 'banner' && !validBidSize(adUnitCode, bid, {
    index: index
  })) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Banner bids require a width and height"));
    return false;
  }

  return true;
}

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gdprDataHandler", function() { return gdprDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uspDataHandler", function() { return uspDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coppaDataHandler", function() { return coppaDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientTestAdapters", function() { return clientTestAdapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allS2SBidders", function() { return allS2SBidders; });
/* harmony export (immutable) */ __webpack_exports__["getAllS2SBidders"] = getAllS2SBidders;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupAdUnitMediaTypes", function() { return setupAdUnitMediaTypes; });
/* harmony export (immutable) */ __webpack_exports__["setS2STestingModule"] = setS2STestingModule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adUnits_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__refererDetection_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__consentHandler_js__ = __webpack_require__(49);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module adaptermanger */












var CONSTANTS = __webpack_require__(5);

var events = __webpack_require__(11);

var s2sTestingModule; // store s2sTesting module if it's loaded

var adapterManager = {};

var _bidderRegistry = adapterManager.bidderRegistry = {};

var _aliasRegistry = adapterManager.aliasRegistry = {};

var _s2sConfigs = [];
__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('s2sConfig', function (config) {
  if (config && config.s2sConfig) {
    _s2sConfigs = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(config.s2sConfig) ? config.s2sConfig : [config.s2sConfig];
  }
});
var _analyticsRegistry = {};
/**
 * @typedef {object} LabelDescriptor
 * @property {boolean} labelAll describes whether or not this object expects all labels to match, or any label to match
 * @property {Array<string>} labels the labels listed on the bidder or adUnit
 * @property {Array<string>} activeLabels the labels specified as being active by requestBids
 */

function getBids(_ref) {
  var bidderCode = _ref.bidderCode,
      auctionId = _ref.auctionId,
      bidderRequestId = _ref.bidderRequestId,
      adUnits = _ref.adUnits,
      src = _ref.src;
  return adUnits.reduce(function (result, adUnit) {
    result.push(adUnit.bids.filter(function (bid) {
      return bid.bidder === bidderCode;
    }).reduce(function (bids, bid) {
      bid = _extends({}, bid, Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getDefinedParams"])(adUnit, ['nativeParams', 'ortb2Imp', 'mediaType', 'renderer', 'storedAuctionResponse']));
      var mediaTypes = bid.mediaTypes == null ? adUnit.mediaTypes : bid.mediaTypes;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isValidMediaTypes"])(mediaTypes)) {
        bid = _extends({}, bid, {
          mediaTypes: mediaTypes
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("mediaTypes is not correctly configured for adunit ".concat(adUnit.code));
      }

      bids.push(_extends({}, bid, {
        adUnitCode: adUnit.code,
        transactionId: adUnit.transactionId,
        sizes: Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes') || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(mediaTypes, 'video.playerSize') || [],
        bidId: bid.bid_id || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])(),
        bidderRequestId: bidderRequestId,
        auctionId: auctionId,
        src: src,
        bidRequestsCount: __WEBPACK_IMPORTED_MODULE_8__adUnits_js__["a" /* adunitCounter */].getRequestsCounter(adUnit.code),
        bidderRequestsCount: __WEBPACK_IMPORTED_MODULE_8__adUnits_js__["a" /* adunitCounter */].getBidderRequestsCounter(adUnit.code, bid.bidder),
        bidderWinsCount: __WEBPACK_IMPORTED_MODULE_8__adUnits_js__["a" /* adunitCounter */].getBidderWinsCounter(adUnit.code, bid.bidder)
      }));
      return bids;
    }, []));
    return result;
  }, []).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (val) {
    return val !== '';
  });
}

var hookedGetBids = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', getBids, 'getBids');

function getAdUnitCopyForPrebidServer(adUnits, s2sConfig) {
  var adaptersServerSide = s2sConfig.bidders;
  var adUnitsCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnits);
  adUnitsCopy.forEach(function (adUnit) {
    // filter out client side bids
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(adaptersServerSide, bid.bidder) && (!doingS2STesting(s2sConfig) || bid.finalSource !== s2sTestingModule.CLIENT);
    }).map(function (bid) {
      bid.bid_id = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
      return bid;
    });
  }); // don't send empty requests

  adUnitsCopy = adUnitsCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsCopy;
}

function getAdUnitCopyForClientAdapters(adUnits) {
  var adUnitsClientCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnits); // filter out s2s bids

  adUnitsClientCopy.forEach(function (adUnit) {
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return !clientTestAdapters.length || bid.finalSource !== s2sTestingModule.SERVER;
    });
  }); // don't send empty requests

  adUnitsClientCopy = adUnitsClientCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsClientCopy;
}

var gdprDataHandler = new __WEBPACK_IMPORTED_MODULE_10__consentHandler_js__["a" /* GdprConsentHandler */]();
var uspDataHandler = new __WEBPACK_IMPORTED_MODULE_10__consentHandler_js__["b" /* UspConsentHandler */]();
var coppaDataHandler = {
  getCoppa: function getCoppa() {
    return !!__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('coppa');
  }
}; // export for testing

var clientTestAdapters = [];
var allS2SBidders = [];
function getAllS2SBidders() {
  adapterManager.s2STestingEnabled = false;

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      if (s2sConfig.bidders && s2sConfig.bidders.length) {
        allS2SBidders.push.apply(allS2SBidders, _toConsumableArray(s2sConfig.bidders));
      }
    }
  });
}
/**
 * Filter and/or modify media types for ad units based on the given labels.
 *
 * This should return adUnits that are active for the given labels, modified to have their `mediaTypes`
 * conform to size mapping configuration. If different bids for the same adUnit should use different `mediaTypes`,
 * they should be exposed under `adUnit.bids[].mediaTypes`.
 */

var setupAdUnitMediaTypes = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', function (adUnits, labels) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["a" /* processAdUnitsForLabels */])(adUnits, labels);
}, 'setupAdUnitMediaTypes');
adapterManager.makeBidRequests = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', function (adUnits, auctionStart, auctionId, cbTimeout, labels) {
  /**
   * emit and pass adunits for external modification
   * @see {@link https://github.com/prebid/Prebid.js/issues/4149|Issue}
   */
  events.emit(CONSTANTS.EVENTS.BEFORE_REQUEST_BIDS, adUnits);
  Object(__WEBPACK_IMPORTED_MODULE_2__native_js__["b" /* decorateAdUnitsWithNativeParams */])(adUnits);
  adUnits = setupAdUnitMediaTypes(adUnits, labels);
  var bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getBidderCodes"])(adUnits);

  if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('bidderSequence') === __WEBPACK_IMPORTED_MODULE_5__config_js__["a" /* RANDOM */]) {
    bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["shuffle"])(bidderCodes);
  }

  var refererInfo = Object(__WEBPACK_IMPORTED_MODULE_9__refererDetection_js__["a" /* getRefererInfo */])();
  var clientBidderCodes = bidderCodes;
  var bidRequests = [];

  if (allS2SBidders.length === 0) {
    getAllS2SBidders();
  }

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      if (doingS2STesting(s2sConfig)) {
        s2sTestingModule.calculateBidSources(s2sConfig);
        var bidderMap = s2sTestingModule.getSourceBidderMap(adUnits, allS2SBidders); // get all adapters doing client testing

        bidderMap[s2sTestingModule.CLIENT].forEach(function (bidder) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(clientTestAdapters, bidder)) {
            clientTestAdapters.push(bidder);
          }
        });
      }
    }
  }); // don't call these client side (unless client request is needed for testing)


  clientBidderCodes = bidderCodes.filter(function (bidderCode) {
    return !Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(allS2SBidders, bidderCode) || Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(clientTestAdapters, bidderCode);
  }); // these are called on the s2s adapter

  var adaptersServerSide = allS2SBidders;

  var adUnitsContainServerRequests = function adUnitsContainServerRequests(adUnits, s2sConfig) {
    return Boolean(Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["b" /* find */])(adUnits, function (adUnit) {
      return Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["b" /* find */])(adUnit.bids, function (bid) {
        return (bid.bidSource || s2sConfig.bidderControl && s2sConfig.bidderControl[bid.bidder]) && bid.finalSource === s2sTestingModule.SERVER;
      });
    }));
  };

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      if (isTestingServerOnly(s2sConfig) && adUnitsContainServerRequests(adUnits, s2sConfig)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('testServerOnly: True.  All client requests will be suppressed.');
        clientBidderCodes.length = 0;
      }

      var adUnitsS2SCopy = getAdUnitCopyForPrebidServer(adUnits, s2sConfig); // uniquePbsTid is so we know which server to send which bids to during the callBids function

      var uniquePbsTid = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["generateUUID"])();
      adaptersServerSide.forEach(function (bidderCode) {
        var bidderRequestId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
        var bidderRequest = {
          bidderCode: bidderCode,
          auctionId: auctionId,
          bidderRequestId: bidderRequestId,
          uniquePbsTid: uniquePbsTid,
          bids: hookedGetBids({
            bidderCode: bidderCode,
            auctionId: auctionId,
            bidderRequestId: bidderRequestId,
            'adUnits': Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnitsS2SCopy),
            src: CONSTANTS.S2S.SRC
          }),
          auctionStart: auctionStart,
          timeout: s2sConfig.timeout,
          src: CONSTANTS.S2S.SRC,
          refererInfo: refererInfo
        };

        if (bidderRequest.bids.length !== 0) {
          bidRequests.push(bidderRequest);
        }
      }); // update the s2sAdUnits object and remove all bids that didn't pass sizeConfig/label checks from getBids()
      // this is to keep consistency and only allow bids/adunits that passed the checks to go to pbs

      adUnitsS2SCopy.forEach(function (adUnitCopy) {
        var validBids = adUnitCopy.bids.filter(function (adUnitBid) {
          return Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["b" /* find */])(bidRequests, function (request) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["b" /* find */])(request.bids, function (reqBid) {
              return reqBid.bidId === adUnitBid.bid_id;
            });
          });
        });
        adUnitCopy.bids = validBids;
      });
      bidRequests.forEach(function (request) {
        if (request.adUnitsS2SCopy === undefined) {
          request.adUnitsS2SCopy = adUnitsS2SCopy.filter(function (adUnitCopy) {
            return adUnitCopy.bids.length > 0;
          });
        }
      });
    }
  }); // client adapters


  var adUnitsClientCopy = getAdUnitCopyForClientAdapters(adUnits);
  clientBidderCodes.forEach(function (bidderCode) {
    var bidderRequestId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
    var bidderRequest = {
      bidderCode: bidderCode,
      auctionId: auctionId,
      bidderRequestId: bidderRequestId,
      bids: hookedGetBids({
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        'adUnits': Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnitsClientCopy),
        labels: labels,
        src: 'client'
      }),
      auctionStart: auctionStart,
      timeout: cbTimeout,
      refererInfo: refererInfo
    };
    var adapter = _bidderRegistry[bidderCode];

    if (!adapter) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("Trying to make a request for bidder that does not exist: ".concat(bidderCode));
    }

    if (adapter && bidderRequest.bids && bidderRequest.bids.length !== 0) {
      bidRequests.push(bidderRequest);
    }
  });

  if (gdprDataHandler.getConsentData()) {
    bidRequests.forEach(function (bidRequest) {
      bidRequest['gdprConsent'] = gdprDataHandler.getConsentData();
    });
  }

  if (uspDataHandler.getConsentData()) {
    bidRequests.forEach(function (bidRequest) {
      bidRequest['uspConsent'] = uspDataHandler.getConsentData();
    });
  }

  return bidRequests;
}, 'makeBidRequests');

adapterManager.callBids = function (adUnits, bidRequests, addBidResponse, doneCb, requestCallbacks, requestBidsTimeout, onTimelyResponse) {
  if (!bidRequests.length) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
    return;
  }

  var _bidRequests$reduce = bidRequests.reduce(function (partitions, bidRequest) {
    partitions[Number(typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC)].push(bidRequest);
    return partitions;
  }, [[], []]),
      _bidRequests$reduce2 = _slicedToArray(_bidRequests$reduce, 2),
      clientBidRequests = _bidRequests$reduce2[0],
      serverBidRequests = _bidRequests$reduce2[1];

  var uniqueServerBidRequests = [];
  serverBidRequests.forEach(function (serverBidRequest) {
    var index = -1;

    for (var i = 0; i < uniqueServerBidRequests.length; ++i) {
      if (serverBidRequest.uniquePbsTid === uniqueServerBidRequests[i].uniquePbsTid) {
        index = i;
        break;
      }
    }

    if (index <= -1) {
      uniqueServerBidRequests.push(serverBidRequest);
    }
  });
  var counter = 0; // $.source.tid MUST be a unique UUID and also THE SAME between all PBS Requests for a given Auction

  var sourceTid = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["generateUUID"])();

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && uniqueServerBidRequests[counter] && Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(s2sConfig.bidders, uniqueServerBidRequests[counter].bidderCode)) {
      // s2s should get the same client side timeout as other client side requests.
      var s2sAjax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax_js__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
        request: requestCallbacks.request.bind(null, 's2s'),
        done: requestCallbacks.done
      } : undefined);
      var adaptersServerSide = s2sConfig.bidders;
      var s2sAdapter = _bidderRegistry[s2sConfig.adapter];
      var uniquePbsTid = uniqueServerBidRequests[counter].uniquePbsTid;
      var adUnitsS2SCopy = uniqueServerBidRequests[counter].adUnitsS2SCopy;
      var uniqueServerRequests = serverBidRequests.filter(function (serverBidRequest) {
        return serverBidRequest.uniquePbsTid === uniquePbsTid;
      });

      if (s2sAdapter) {
        var s2sBidRequest = {
          tid: sourceTid,
          'ad_units': adUnitsS2SCopy,
          s2sConfig: s2sConfig
        };

        if (s2sBidRequest.ad_units.length) {
          var doneCbs = uniqueServerRequests.map(function (bidRequest) {
            bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
            return doneCb.bind(bidRequest);
          }); // only log adapters that actually have adUnit bids

          var allBidders = s2sBidRequest.ad_units.reduce(function (adapters, adUnit) {
            return adapters.concat((adUnit.bids || []).reduce(function (adapters, bid) {
              return adapters.concat(bid.bidder);
            }, []));
          }, []);
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("CALLING S2S HEADER BIDDERS ==== ".concat(adaptersServerSide.filter(function (adapter) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(allBidders, adapter);
          }).join(','))); // fire BID_REQUESTED event for each s2s bidRequest

          uniqueServerRequests.forEach(function (bidRequest) {
            // add the new sourceTid
            events.emit(CONSTANTS.EVENTS.BID_REQUESTED, _objectSpread(_objectSpread({}, bidRequest), {}, {
              tid: sourceTid
            }));
          }); // make bid requests

          s2sAdapter.callBids(s2sBidRequest, serverBidRequests, addBidResponse, function () {
            return doneCbs.forEach(function (done) {
              return done();
            });
          }, s2sAjax);
        }
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('missing ' + s2sConfig.adapter);
      }

      counter++;
    }
  }); // handle client adapter requests


  clientBidRequests.forEach(function (bidRequest) {
    bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])(); // TODO : Do we check for bid in pool from here and skip calling adapter again ?

    var adapter = _bidderRegistry[bidRequest.bidderCode];
    __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidRequest.bidderCode, function () {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("CALLING BIDDER");
      events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
    });
    var ajax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax_js__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, bidRequest.bidderCode),
      done: requestCallbacks.done
    } : undefined);
    var adapterDone = doneCb.bind(bidRequest);

    try {
      __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidRequest.bidderCode, __WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(adapter.callBids, adapter, bidRequest, addBidResponse, adapterDone, ajax, onTimelyResponse, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].callbackWithBidder(bidRequest.bidderCode)));
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("".concat(bidRequest.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
        e: e,
        bidRequest: bidRequest
      });
      adapterDone();
    }
  });
};

function doingS2STesting(s2sConfig) {
  return s2sConfig && s2sConfig.enabled && s2sConfig.testing && s2sTestingModule;
}

function isTestingServerOnly(s2sConfig) {
  return Boolean(doingS2STesting(s2sConfig) && s2sConfig.testServerOnly);
}

;

function getSupportedMediaTypes(bidderCode) {
  var supportedMediaTypes = [];
  if (Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(adapterManager.videoAdapters, bidderCode)) supportedMediaTypes.push('video');
  if (Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(__WEBPACK_IMPORTED_MODULE_2__native_js__["g" /* nativeAdapters */], bidderCode)) supportedMediaTypes.push('native');
  return supportedMediaTypes;
}

adapterManager.videoAdapters = []; // added by adapterLoader for now

adapterManager.registerBidAdapter = function (bidAdapter, bidderCode) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$supportedMediaT = _ref2.supportedMediaTypes,
      supportedMediaTypes = _ref2$supportedMediaT === void 0 ? [] : _ref2$supportedMediaT;

  if (bidAdapter && bidderCode) {
    if (typeof bidAdapter.callBids === 'function') {
      _bidderRegistry[bidderCode] = bidAdapter;

      if (Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(supportedMediaTypes, 'video')) {
        adapterManager.videoAdapters.push(bidderCode);
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(supportedMediaTypes, 'native')) {
        __WEBPACK_IMPORTED_MODULE_2__native_js__["g" /* nativeAdapters */].push(bidderCode);
      }
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Bidder adaptor error for bidder code: ' + bidderCode + 'bidder must implement a callBids() function');
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('bidAdapter or bidderCode not specified');
  }
};

adapterManager.aliasBidAdapter = function (bidderCode, alias, options) {
  var existingAlias = _bidderRegistry[alias];

  if (typeof existingAlias === 'undefined') {
    var bidAdapter = _bidderRegistry[bidderCode];

    if (typeof bidAdapter === 'undefined') {
      // check if alias is part of s2sConfig and allow them to register if so (as base bidder may be s2s-only)
      var nonS2SAlias = [];

      _s2sConfigs.forEach(function (s2sConfig) {
        if (s2sConfig.bidders && s2sConfig.bidders.length) {
          var s2sBidders = s2sConfig && s2sConfig.bidders;

          if (!(s2sConfig && Object(__WEBPACK_IMPORTED_MODULE_7__polyfill_js__["d" /* includes */])(s2sBidders, alias))) {
            nonS2SAlias.push(bidderCode);
          } else {
            _aliasRegistry[alias] = bidderCode;
          }
        }
      });

      nonS2SAlias.forEach(function (bidderCode) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('bidderCode "' + bidderCode + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
      });
    } else {
      try {
        var newAdapter;
        var supportedMediaTypes = getSupportedMediaTypes(bidderCode); // Have kept old code to support backward compatibilitiy.
        // Remove this if loop when all adapters are supporting bidderFactory. i.e When Prebid.js is 1.0

        if (bidAdapter.constructor.prototype != Object.prototype) {
          newAdapter = new bidAdapter.constructor();
          newAdapter.setBidderCode(alias);
        } else {
          var spec = bidAdapter.getSpec();
          var gvlid = options && options.gvlid;
          var skipPbsAliasing = options && options.skipPbsAliasing;
          newAdapter = Object(__WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory_js__["newBidder"])(_extends({}, spec, {
            code: alias,
            gvlid: gvlid,
            skipPbsAliasing: skipPbsAliasing
          }));
          _aliasRegistry[alias] = bidderCode;
        }

        adapterManager.registerBidAdapter(newAdapter, alias, {
          supportedMediaTypes: supportedMediaTypes
        });
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])(bidderCode + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
      }
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])('alias name "' + alias + '" has been already specified.');
  }
};

adapterManager.registerAnalyticsAdapter = function (_ref3) {
  var adapter = _ref3.adapter,
      code = _ref3.code,
      gvlid = _ref3.gvlid;

  if (adapter && code) {
    if (typeof adapter.enableAnalytics === 'function') {
      adapter.code = code;
      _analyticsRegistry[code] = {
        adapter: adapter,
        gvlid: gvlid
      };
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("Prebid Error: Analytics adaptor error for analytics \"".concat(code, "\"\n        analytics adapter must implement an enableAnalytics() function"));
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Prebid Error: analyticsAdapter or analyticsCode not specified');
  }
};

adapterManager.enableAnalytics = function (config) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(config)) {
    config = [config];
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["_each"])(config, function (adapterConfig) {
    var adapter = _analyticsRegistry[adapterConfig.provider].adapter;

    if (adapter) {
      adapter.enableAnalytics(adapterConfig);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("Prebid Error: no analytics adapter found in registry for\n        ".concat(adapterConfig.provider, "."));
    }
  });
};

adapterManager.getBidAdapter = function (bidder) {
  return _bidderRegistry[bidder];
};

adapterManager.getAnalyticsAdapter = function (code) {
  return _analyticsRegistry[code];
}; // the s2sTesting module is injected when it's loaded rather than being imported
// importing it causes the packager to include it even when it's not explicitly included in the build


function setS2STestingModule(module) {
  s2sTestingModule = module;
}

function tryCallBidderMethod(bidder, method, param) {
  try {
    var adapter = _bidderRegistry[bidder];
    var spec = adapter.getSpec();

    if (spec && spec[method] && typeof spec[method] === 'function') {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Invoking ".concat(bidder, ".").concat(method));
      __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidder, __WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(spec[method], spec, param));
    }
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Error calling ".concat(method, " of ").concat(bidder));
  }
}

adapterManager.callTimedOutBidders = function (adUnits, timedOutBidders, cbTimeout) {
  timedOutBidders = timedOutBidders.map(function (timedOutBidder) {
    // Adding user configured params & timeout to timeout event data
    timedOutBidder.params = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUserConfiguredParams"])(adUnits, timedOutBidder.adUnitCode, timedOutBidder.bidder);
    timedOutBidder.timeout = cbTimeout;
    return timedOutBidder;
  });
  timedOutBidders = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(timedOutBidders, 'bidder');
  Object.keys(timedOutBidders).forEach(function (bidder) {
    tryCallBidderMethod(bidder, 'onTimeout', timedOutBidders[bidder]);
  });
};

adapterManager.callBidWonBidder = function (bidder, bid, adUnits) {
  // Adding user configured params to bidWon event data
  bid.params = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUserConfiguredParams"])(adUnits, bid.adUnitCode, bid.bidder);
  __WEBPACK_IMPORTED_MODULE_8__adUnits_js__["a" /* adunitCounter */].incrementBidderWinsCounter(bid.adUnitCode, bid.bidder);
  tryCallBidderMethod(bidder, 'onBidWon', bid);
};

adapterManager.callSetTargetingBidder = function (bidder, bid) {
  tryCallBidderMethod(bidder, 'onSetTargeting', bid);
};

adapterManager.callBidViewableBidder = function (bidder, bid) {
  tryCallBidderMethod(bidder, 'onBidViewable', bid);
};

adapterManager.callBidderError = function (bidder, error, bidderRequest) {
  var param = {
    error: error,
    bidderRequest: bidderRequest
  };
  tryCallBidderMethod(bidder, 'onBidderError', param);
};

/* harmony default export */ __webpack_exports__["default"] = (adapterManager);

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listenMessagesFromCreative;
/* unused harmony export getReplier */
/* unused harmony export receiveMessage */
/* unused harmony export _sendAdToCreative */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Renderer_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adRendering_js__ = __webpack_require__(39);
/* Secure Creatives
  Provides support for rendering creatives into cross domain iframes such as SafeFrame to prevent
   access to a publisher page from creative payloads.
 */









var BID_WON = __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.BID_WON;
var STALE_RENDER = __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.STALE_RENDER;
var HANDLER_MAP = {
  'Prebid Request': handleRenderRequest,
  'Prebid Native': handleNativeRequest,
  'Prebid Event': handleEventRequest
};
function listenMessagesFromCreative() {
  window.addEventListener('message', receiveMessage, false);
}
function getReplier(ev) {
  if (ev.origin == null && ev.ports.length === 0) {
    return function () {
      var msg = 'Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870';
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])(msg);
      throw new Error(msg);
    };
  } else if (ev.ports.length > 0) {
    return function (message) {
      ev.ports[0].postMessage(JSON.stringify(message));
    };
  } else {
    return function (message) {
      ev.source.postMessage(JSON.stringify(message), ev.origin);
    };
  }
}
function receiveMessage(ev) {
  var key = ev.message ? 'message' : 'data';
  var data = {};

  try {
    data = JSON.parse(ev[key]);
  } catch (e) {
    return;
  }

  if (data && data.adId && data.message) {
    var adObject = Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_js__["b" /* find */])(__WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].getBidsReceived(), function (bid) {
      return bid.adId === data.adId;
    });

    if (HANDLER_MAP.hasOwnProperty(data.message)) {
      HANDLER_MAP[data.message](getReplier(ev), data, adObject);
    }
  }
}

function handleRenderRequest(reply, data, adObject) {
  if (adObject == null) {
    Object(__WEBPACK_IMPORTED_MODULE_8__adRendering_js__["a" /* emitAdRenderFail */])({
      reason: __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
      message: "Cannot find ad '".concat(data.adId, "' for cross-origin render request"),
      id: data.adId
    });
    return;
  }

  if (adObject.status === __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.BID_STATUS.RENDERED) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Ad id ".concat(adObject.adId, " has been rendered before"));
    __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(STALE_RENDER, adObject);

    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["deepAccess"])(__WEBPACK_IMPORTED_MODULE_7__config_js__["b" /* config */].getConfig('auctionOptions'), 'suppressStaleRender')) {
      return;
    }
  }

  try {
    _sendAdToCreative(adObject, reply);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_8__adRendering_js__["a" /* emitAdRenderFail */])({
      reason: __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.AD_RENDER_FAILED_REASON.EXCEPTION,
      message: e.message,
      id: data.adId,
      bid: adObject
    });
    return;
  } // save winning bids


  __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].addWinningBid(adObject);
  __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(BID_WON, adObject);
}

function handleNativeRequest(reply, data, adObject) {
  // handle this script from native template in an ad server
  // window.parent.postMessage(JSON.stringify({
  //   message: 'Prebid Native',
  //   adId: '%%PATTERN:hb_adid%%'
  // }), '*');
  if (adObject == null) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])("Cannot find ad '".concat(data.adId, "' for x-origin event request"));
    return;
  }

  switch (data.action) {
    case 'assetRequest':
      reply(Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["e" /* getAssetMessage */])(data, adObject));
      break;

    case 'allAssetRequest':
      reply(Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["d" /* getAllAssetsMessage */])(data, adObject));
      break;

    case 'resizeNativeHeight':
      adObject.height = data.height;
      adObject.width = data.width;
      resizeRemoteCreative(adObject);
      break;

    default:
      var trackerType = Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["c" /* fireNativeTrackers */])(data, adObject);

      if (trackerType === 'click') {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].addWinningBid(adObject);
      __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(BID_WON, adObject);
  }
}

function handleEventRequest(reply, data, adObject) {
  if (adObject == null) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])("Cannot find ad '".concat(data.adId, "' for x-origin event request"));
    return;
  }

  if (adObject.status !== __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.BID_STATUS.RENDERED) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Received x-origin event request without corresponding render request for ad '".concat(data.adId, "'"));
    return;
  }

  switch (data.event) {
    case __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.AD_RENDER_FAILED:
      Object(__WEBPACK_IMPORTED_MODULE_8__adRendering_js__["a" /* emitAdRenderFail */])({
        bid: adObject,
        id: data.adId,
        reason: data.info.reason,
        message: data.info.message
      });
      break;

    case __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.AD_RENDER_SUCCEEDED:
      Object(__WEBPACK_IMPORTED_MODULE_8__adRendering_js__["b" /* emitAdRenderSucceeded */])({
        doc: null,
        bid: adObject,
        id: data.adId
      });
      break;

    default:
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])("Received x-origin event request for unsupported event: '".concat(data.event, "' (adId: '").concat(data.adId, "')"));
  }
}

function _sendAdToCreative(adObject, reply) {
  var adId = adObject.adId,
      ad = adObject.ad,
      adUrl = adObject.adUrl,
      width = adObject.width,
      height = adObject.height,
      renderer = adObject.renderer,
      cpm = adObject.cpm; // rendering for outstream safeframe

  if (Object(__WEBPACK_IMPORTED_MODULE_6__Renderer_js__["c" /* isRendererRequired */])(renderer)) {
    Object(__WEBPACK_IMPORTED_MODULE_6__Renderer_js__["b" /* executeRenderer */])(renderer, adObject);
  } else if (adId) {
    resizeRemoteCreative(adObject);
    reply({
      message: 'Prebid Response',
      ad: Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["replaceAuctionPrice"])(ad, cpm),
      adUrl: Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["replaceAuctionPrice"])(adUrl, cpm),
      adId: adId,
      width: width,
      height: height
    });
  }
}

function resizeRemoteCreative(_ref) {
  var adId = _ref.adId,
      adUnitCode = _ref.adUnitCode,
      width = _ref.width,
      height = _ref.height;
  // resize both container div + iframe
  ['div', 'iframe'].forEach(function (elmType) {
    // not select element that gets removed after dfp render
    var element = getElementByAdUnit(elmType + ':not([style*="display: none"])');

    if (element) {
      var elementStyle = element.style;
      elementStyle.width = width + 'px';
      elementStyle.height = height + 'px';
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Unable to locate matching page element for adUnitCode ".concat(adUnitCode, ".  Can't resize it to ad's dimensions.  Please review setup."));
    }
  });

  function getElementByAdUnit(elmType) {
    var id = getElementIdBasedOnAdServer(adId, adUnitCode);
    var parentDivEle = document.getElementById(id);
    return parentDivEle && parentDivEle.querySelector(elmType);
  }

  function getElementIdBasedOnAdServer(adId, adUnitCode) {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["isGptPubadsDefined"])()) {
      return getDfpElementId(adId);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["isApnGetTagDefined"])()) {
      return getAstElementId(adUnitCode);
    } else {
      return adUnitCode;
    }
  }

  function getDfpElementId(adId) {
    var slot = Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_js__["b" /* find */])(window.googletag.pubads().getSlots(), function (slot) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_js__["b" /* find */])(slot.getTargetingKeys(), function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_js__["d" /* includes */])(slot.getTargeting(key), adId);
      });
    });
    return slot ? slot.getSlotElementId() : null;
  }

  function getAstElementId(adUnitCode) {
    var astTag = window.apntag.getTag(adUnitCode);
    return astTag && astTag.targetId;
  }
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * events.js
 */
var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(5);

var slice = Array.prototype.slice;
var push = Array.prototype.push; // define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];

var allEvents = utils._map(CONSTANTS.EVENTS, function (v) {
  return v;
});

var idPaths = CONSTANTS.EVENT_ID_PATHS; // keep a record of all events fired

var eventsFired = [];

module.exports = function () {
  var _handlers = {};
  var _public = {};
  /**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */

  function _dispatch(eventString, args) {
    utils.logMessage('Emitting event for: ' + eventString);
    var eventPayload = args[0] || {};
    var idPath = idPaths[eventString];
    var key = eventPayload[idPath];
    var event = _handlers[eventString] || {
      que: []
    };

    var eventKeys = utils._map(event, function (v, k) {
      return k;
    });

    var callbacks = []; // record the event:

    eventsFired.push({
      eventType: eventString,
      args: eventPayload,
      id: key,
      elapsedTime: utils.getPerformanceNow()
    });
    /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */

    if (key && utils.contains(eventKeys, key)) {
      push.apply(callbacks, event[key].que);
    }
    /** Push each general callback to the `callbacks` array. */


    push.apply(callbacks, event.que);
    /** call each of the callbacks */

    utils._each(callbacks, function (fn) {
      if (!fn) return;

      try {
        fn.apply(null, args);
      } catch (e) {
        utils.logError('Error executing handler:', 'events.js', e);
      }
    });
  }

  function _checkAvailableEvent(event) {
    return utils.contains(allEvents, event);
  }

  _public.on = function (eventString, handler, id) {
    // check whether available event or not
    if (_checkAvailableEvent(eventString)) {
      var event = _handlers[eventString] || {
        que: []
      };

      if (id) {
        event[id] = event[id] || {
          que: []
        };
        event[id].que.push(handler);
      } else {
        event.que.push(handler);
      }

      _handlers[eventString] = event;
    } else {
      utils.logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
    }
  };

  _public.emit = function (event) {
    var args = slice.call(arguments, 1);

    _dispatch(event, args);
  };

  _public.off = function (eventString, handler, id) {
    var event = _handlers[eventString];

    if (utils.isEmpty(event) || utils.isEmpty(event.que) && utils.isEmpty(event[id])) {
      return;
    }

    if (id && (utils.isEmpty(event[id]) || utils.isEmpty(event[id].que))) {
      return;
    }

    if (id) {
      utils._each(event[id].que, function (_handler) {
        var que = event[id].que;

        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    } else {
      utils._each(event.que, function (_handler) {
        var que = event.que;

        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    }

    _handlers[eventString] = event;
  };

  _public.get = function () {
    return _handlers;
  };
  /**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */


  _public.getEvents = function () {
    var arrayCopy = [];

    utils._each(eventsFired, function (value) {
      var newProp = _extends({}, value);

      arrayCopy.push(newProp);
    });

    return arrayCopy;
  };

  return _public;
}();

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderer;
/* harmony export (immutable) */ __webpack_exports__["c"] = isRendererRequired;
/* harmony export (immutable) */ __webpack_exports__["b"] = executeRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adloader_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill_js__ = __webpack_require__(6);



var moduleCode = 'outstream';
/**
 * @typedef {object} Renderer
 *
 * A Renderer stores some functions which are used to render a particular Bid.
 * These are used in Outstream Video Bids, returned on the Bid by the adapter, and will
 * be used to render that bid unless the Publisher overrides them.
 */

function Renderer(options) {
  var _this = this;

  var url = options.url,
      config = options.config,
      id = options.id,
      callback = options.callback,
      loaded = options.loaded,
      adUnitCode = options.adUnitCode;
  this.url = url;
  this.config = config;
  this.handlers = {};
  this.id = id; // a renderer may push to the command queue to delay rendering until the
  // render function is loaded by loadExternalScript, at which point the the command
  // queue will be processed

  this.loaded = loaded;
  this.cmd = [];

  this.push = function (func) {
    if (typeof func !== 'function') {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Commands given to Renderer.push must be wrapped in a function');
      return;
    }

    _this.loaded ? func.call() : _this.cmd.push(func);
  }; // bidders may override this with the `callback` property given to `install`


  this.callback = callback || function () {
    _this.loaded = true;

    _this.process();
  }; // use a function, not an arrow, in order to be able to pass "arguments" through


  this.render = function () {
    var _this2 = this;

    var renderArgs = arguments;

    var runRender = function runRender() {
      if (_this2._render) {
        _this2._render.apply(_this2, renderArgs);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("No render function was provided, please use .setRender on the renderer");
      }
    };

    if (!isRendererPreferredFromAdUnit(adUnitCode)) {
      // we expect to load a renderer url once only so cache the request to load script
      this.cmd.unshift(runRender); // should render run first ?

      Object(__WEBPACK_IMPORTED_MODULE_0__adloader_js__["a" /* loadExternalScript */])(url, moduleCode, this.callback);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(adUnitCode));
      runRender();
    }
  }.bind(this); // bind the function to this object to avoid 'this' errors

}

Renderer.install = function (_ref) {
  var url = _ref.url,
      config = _ref.config,
      id = _ref.id,
      callback = _ref.callback,
      loaded = _ref.loaded,
      adUnitCode = _ref.adUnitCode;
  return new Renderer({
    url: url,
    config: config,
    id: id,
    callback: callback,
    loaded: loaded,
    adUnitCode: adUnitCode
  });
};

Renderer.prototype.getConfig = function () {
  return this.config;
};

Renderer.prototype.setRender = function (fn) {
  this._render = fn;
};

Renderer.prototype.setEventHandlers = function (handlers) {
  this.handlers = handlers;
};

Renderer.prototype.handleVideoEvent = function (_ref2) {
  var id = _ref2.id,
      eventName = _ref2.eventName;

  if (typeof this.handlers[eventName] === 'function') {
    this.handlers[eventName]();
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])("Prebid Renderer event for id ".concat(id, " type ").concat(eventName));
};
/*
 * Calls functions that were pushed to the command queue before the
 * renderer was loaded by `loadExternalScript`
 */


Renderer.prototype.process = function () {
  while (this.cmd.length > 0) {
    try {
      this.cmd.shift().call();
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error processing Renderer command: ', error);
    }
  }
};
/**
 * Checks whether creative rendering should be done by Renderer or not.
 * @param {Object} renderer Renderer object installed by adapter
 * @returns {Boolean}
 */


function isRendererRequired(renderer) {
  return !!(renderer && renderer.url);
}
/**
 * Render the bid returned by the adapter
 * @param {Object} renderer Renderer object installed by adapter
 * @param {Object} bid Bid response
 */

function executeRenderer(renderer, bid) {
  renderer.render(bid);
}

function isRendererPreferredFromAdUnit(adUnitCode) {
  var adUnits = pbjs.adUnits;
  var adUnit = Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["b" /* find */])(adUnits, function (adUnit) {
    return adUnit.code === adUnitCode;
  });

  if (!adUnit) {
    return false;
  } // renderer defined at adUnit level


  var adUnitRenderer = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'renderer');
  var hasValidAdUnitRenderer = !!(adUnitRenderer && adUnitRenderer.url && adUnitRenderer.render); // renderer defined at adUnit.mediaTypes level

  var mediaTypeRenderer = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.renderer');
  var hasValidMediaTypeRenderer = !!(mediaTypeRenderer && mediaTypeRenderer.url && mediaTypeRenderer.render);
  return !!(hasValidAdUnitRenderer && !(adUnitRenderer.backupOnly === true) || hasValidMediaTypeRenderer && !(mediaTypeRenderer.backupOnly === true));
}

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getGlobal;
// if $$PREBID_GLOBAL$$ already exists in global document scope, use it, if not, create the object
// global defination should happen BEFORE imports to avoid global undefined errors.
window.pbjs = window.pbjs || {};
window.pbjs.cmd = window.pbjs.cmd || [];
window.pbjs.que = window.pbjs.que || []; // create a pbjs global pointer

window._pbjsGlobals = window._pbjsGlobals || [];

window._pbjsGlobals.push("pbjs");

function getGlobal() {
  return window.pbjs;
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export newAuctionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auctionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auction_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auctionIndex_js__ = __webpack_require__(48);
/**
 * AuctionManager modules is responsible for creating auction instances.
 * This module is the gateway for Prebid core to access auctions.
 * It stores all created instances of auction and can be used to get consolidated values from auction.
 */

/**
 * @typedef {Object} AuctionManager
 *
 * @property {function(): Array} getBidsRequested - returns consolidated bid requests
 * @property {function(): Array} getBidsReceived - returns consolidated bid received
 * @property {function(): Array} getAllBidsForAdUnitCode - returns consolidated bid received for a given adUnit
 * @property {function(): Array} getAdUnits - returns consolidated adUnits
 * @property {function(): Array} getAdUnitCodes - returns consolidated adUnitCodes
 * @property {function(): Object} createAuction - creates auction instance and stores it for future reference
 * @property {function(): Object} findBidByAdId - find bid received by adId. This function will be called by $$PREBID_GLOBAL$$.renderAd
 * @property {function(): Object} getStandardBidderAdServerTargeting - returns standard bidder targeting for all the adapters. Refer http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.bidderSettings for more details
 * @property {function(Object): void} addWinningBid - add a winning bid to an auction based on auctionId
 * @property {function(): void} clearAllAuctions - clear all auctions for testing
 */





var CONSTANTS = __webpack_require__(5);
/**
 * Creates new instance of auctionManager. There will only be one instance of auctionManager but
 * a factory is created to assist in testing.
 *
 * @returns {AuctionManager} auctionManagerInstance
 */


function newAuctionManager() {
  var _auctions = [];
  var auctionManager = {};

  auctionManager.addWinningBid = function (bid) {
    var auction = Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["b" /* find */])(_auctions, function (auction) {
      return auction.getAuctionId() === bid.auctionId;
    });

    if (auction) {
      bid.status = CONSTANTS.BID_STATUS.RENDERED;
      auction.addWinningBid(bid);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Auction not found when adding winning bid");
    }
  };

  auctionManager.getAllWinningBids = function () {
    return _auctions.map(function (auction) {
      return auction.getWinningBids();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getBidsRequested = function () {
    return _auctions.map(function (auction) {
      return auction.getBidRequests();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getNoBids = function () {
    return _auctions.map(function (auction) {
      return auction.getNoBids();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getBidsReceived = function () {
    return _auctions.map(function (auction) {
      if (auction.getAuctionStatus() === __WEBPACK_IMPORTED_MODULE_1__auction_js__["a" /* AUCTION_COMPLETED */]) {
        return auction.getBidsReceived();
      }
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (bid) {
      return bid;
    });
  };

  auctionManager.getAllBidsForAdUnitCode = function (adUnitCode) {
    return _auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (bid) {
      return bid && bid.adUnitCode === adUnitCode;
    });
  };

  auctionManager.getAdUnits = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnits();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getAdUnitCodes = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnitCodes();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]);
  };

  auctionManager.createAuction = function (_ref) {
    var adUnits = _ref.adUnits,
        adUnitCodes = _ref.adUnitCodes,
        callback = _ref.callback,
        cbTimeout = _ref.cbTimeout,
        labels = _ref.labels,
        auctionId = _ref.auctionId;
    var auction = Object(__WEBPACK_IMPORTED_MODULE_1__auction_js__["k" /* newAuction */])({
      adUnits: adUnits,
      adUnitCodes: adUnitCodes,
      callback: callback,
      cbTimeout: cbTimeout,
      labels: labels,
      auctionId: auctionId
    });

    _addAuction(auction);

    return auction;
  };

  auctionManager.findBidByAdId = function (adId) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["b" /* find */])(_auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []), function (bid) {
      return bid.adId === adId;
    });
  };

  auctionManager.getStandardBidderAdServerTargeting = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__auction_js__["j" /* getStandardBidderSettings */])()[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  };

  auctionManager.setStatusForBids = function (adId, status) {
    var bid = auctionManager.findBidByAdId(adId);
    if (bid) bid.status = status;

    if (bid && status === CONSTANTS.BID_STATUS.BID_TARGETING_SET) {
      var auction = Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["b" /* find */])(_auctions, function (auction) {
        return auction.getAuctionId() === bid.auctionId;
      });
      if (auction) auction.setBidTargeting(bid);
    }
  };

  auctionManager.getLastAuctionId = function () {
    return _auctions.length && _auctions[_auctions.length - 1].getAuctionId();
  };

  auctionManager.clearAllAuctions = function () {
    _auctions.length = 0;
  };

  function _addAuction(auction) {
    _auctions.push(auction);
  }

  auctionManager.index = new __WEBPACK_IMPORTED_MODULE_3__auctionIndex_js__["a" /* AuctionIndex */](function () {
    return _auctions;
  });
  return auctionManager;
}
var auctionManager = newAuctionManager();

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OUTSTREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INSTREAM; });
/* unused harmony export videoAdUnit */
/* unused harmony export videoBidder */
/* unused harmony export hasNonVideoBidder */
/* harmony export (immutable) */ __webpack_exports__["d"] = isValidVideoBid;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkVideoBidSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapterManager_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__ = __webpack_require__(15);






var VIDEO_MEDIA_TYPE = 'video';
var OUTSTREAM = 'outstream';
var INSTREAM = 'instream';
/**
 * Helper functions for working with video-enabled adUnits
 */

var videoAdUnit = function videoAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === VIDEO_MEDIA_TYPE;
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video');
  return mediaType || mediaTypes;
};
var videoBidder = function videoBidder(bid) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__polyfill_js__["d" /* includes */])(__WEBPACK_IMPORTED_MODULE_0__adapterManager_js__["default"].videoAdapters, bid.bidder);
};
var hasNonVideoBidder = function hasNonVideoBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !videoBidder(bid);
  }).length;
};
/**
 * @typedef {object} VideoBid
 * @property {string} adId id of the bid
 */

/**
 * Validate that the assets required for video context are present on the bid
 * @param {VideoBid} bid Video bid to validate
 * @param index
 * @return {Boolean} If object is valid
 */

function isValidVideoBid(bid) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].index : _ref$index;

  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(index.getMediaTypes(bid), 'video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(videoMediaType, 'context');
  var adUnit = index.getAdUnit(bid); // if context not defined assume default 'instream' for video bids
  // instream bids require a vast url or vast xml content

  return checkVideoBidSetup(bid, adUnit, videoMediaType, context);
}
var checkVideoBidSetup = Object(__WEBPACK_IMPORTED_MODULE_4__hook_js__["b" /* hook */])('sync', function (bid, adUnit, videoMediaType, context) {
  if (videoMediaType && context !== OUTSTREAM) {
    // xml-only video bids require a prebid cache url
    if (!__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: \"...\"} });\n      ");
      return false;
    }

    return !!(bid.vastUrl || bid.vastXml);
  } // outstream bids require a renderer on the bid or pub-defined on adunit


  if (context === OUTSTREAM) {
    return !!(bid.renderer || adUnit && adUnit.renderer || videoMediaType.renderer);
  }

  return true;
}, 'checkVideoBidSetup');

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export detectReferer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRefererInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/**
 * The referer detection module attempts to gather referer information from the current page that prebid.js resides in.
 * The information that it tries to collect includes:
 * The detected top url in the nav bar,
 * Whether it was able to reach the top most window (if for example it was embedded in several iframes),
 * The number of iframes it was embedded in if applicable (by default max ten iframes),
 * A list of the domains of each embedded window if applicable.
 * Canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
 */


/**
 * @param {Window} win Window
 * @returns {Function}
 */

function detectReferer(win) {
  /**
   * This function would return a read-only array of hostnames for all the parent frames.
   * win.location.ancestorOrigins is only supported in webkit browsers. For non-webkit browsers it will return undefined.
   *
   * @param {Window} win Window object
   * @returns {(undefined|Array)} Ancestor origins or undefined
   */
  function getAncestorOrigins(win) {
    try {
      if (!win.location.ancestorOrigins) {
        return;
      }

      return win.location.ancestorOrigins;
    } catch (e) {// Ignore error
    }
  }
  /**
   * This function returns canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   *
   * @param {Object} doc document
   * @returns {string|null}
   */


  function getCanonicalUrl(doc) {
    var pageURL = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('pageUrl');
    if (pageURL) return pageURL;

    try {
      var element = doc.querySelector("link[rel='canonical']");

      if (element !== null) {
        return element.href;
      }
    } catch (e) {// Ignore error
    }

    return null;
  }
  /**
   * Referer info
   * @typedef {Object} refererInfo
   * @property {string} referer detected top url
   * @property {boolean} reachedTop whether prebid was able to walk upto top window or not
   * @property {number} numIframes number of iframes
   * @property {string} stack comma separated urls of all origins
   * @property {string} canonicalUrl canonical URL refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   */

  /**
   * Walk up the windows to get the origin stack and best available referrer, canonical URL, etc.
   *
   * @returns {refererInfo}
   */


  function refererInfo() {
    var stack = [];
    var ancestors = getAncestorOrigins(win);
    var maxNestedIframes = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('maxNestedIframes');
    var currentWindow;
    var bestReferrer;
    var bestCanonicalUrl;
    var reachedTop = false;
    var level = 0;
    var valuesFromAmp = false;
    var inAmpFrame = false;

    do {
      var previousWindow = currentWindow;
      var wasInAmpFrame = inAmpFrame;
      var currentLocation = void 0;
      var crossOrigin = false;
      var foundReferrer = null;
      inAmpFrame = false;
      currentWindow = currentWindow ? currentWindow.parent : win;

      try {
        currentLocation = currentWindow.location.href || null;
      } catch (e) {
        crossOrigin = true;
      }

      if (crossOrigin) {
        if (wasInAmpFrame) {
          var context = previousWindow.context;

          try {
            foundReferrer = context.sourceUrl;
            bestReferrer = foundReferrer;
            valuesFromAmp = true;

            if (currentWindow === win.top) {
              reachedTop = true;
            }

            if (context.canonicalUrl) {
              bestCanonicalUrl = context.canonicalUrl;
            }
          } catch (e) {
            /* Do nothing */
          }
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Trying to access cross domain iframe. Continuing without referrer and location');

          try {
            var referrer = previousWindow.document.referrer;

            if (referrer) {
              foundReferrer = referrer;

              if (currentWindow === win.top) {
                reachedTop = true;
              }
            }
          } catch (e) {
            /* Do nothing */
          }

          if (!foundReferrer && ancestors && ancestors[level - 1]) {
            foundReferrer = ancestors[level - 1];
          }

          if (foundReferrer && !valuesFromAmp) {
            bestReferrer = foundReferrer;
          }
        }
      } else {
        if (currentLocation) {
          foundReferrer = currentLocation;
          bestReferrer = foundReferrer;
          valuesFromAmp = false;

          if (currentWindow === win.top) {
            reachedTop = true;
            var canonicalUrl = getCanonicalUrl(currentWindow.document);

            if (canonicalUrl) {
              bestCanonicalUrl = canonicalUrl;
            }
          }
        }

        if (currentWindow.context && currentWindow.context.sourceUrl) {
          inAmpFrame = true;
        }
      }

      stack.push(foundReferrer);
      level++;
    } while (currentWindow !== win.top && level < maxNestedIframes);

    stack.reverse();
    return {
      referer: bestReferrer || null,
      reachedTop: reachedTop,
      isAmp: valuesFromAmp,
      numIframes: level - 1,
      stack: stack,
      canonicalUrl: bestCanonicalUrl || null
    };
  }

  return refererInfo;
}
var getRefererInfo = detectReferer(window);

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUCTION_STARTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUCTION_IN_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUCTION_COMPLETED; });
/* harmony export (immutable) */ __webpack_exports__["k"] = newAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _addBidResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addBidderRequests; });
/* unused harmony export bidsBackCallback */
/* unused harmony export auctionCallbacks */
/* harmony export (immutable) */ __webpack_exports__["g"] = doCallbacksIfTimedout;
/* harmony export (immutable) */ __webpack_exports__["d"] = addBidToAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return callPrebidCache; });
/* unused harmony export getMediaTypeGranularity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPriceGranularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPriceByGranularity; });
/* unused harmony export getAdvertiserDomain */
/* harmony export (immutable) */ __webpack_exports__["j"] = getStandardBidderSettings;
/* unused harmony export getKeyValueTargetingPairs */
/* unused harmony export adjustBids */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cpmBucketManager_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videoCache_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Renderer_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userSync_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__ = __webpack_require__(22);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Module for auction instances.
 *
 * In Prebid 0.x, $$PREBID_GLOBAL$$ had _bidsRequested and _bidsReceived as public properties.
 * Starting 1.0, Prebid will support concurrent auctions. Each auction instance will store private properties, bidsRequested and bidsReceived.
 *
 * AuctionManager will create instance of auction and will store all the auctions.
 *
 */

/**
  * @typedef {Object} AdUnit An object containing the adUnit configuration.
  *
  * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
  *   one as is used in the call to registerBidAdapter
  * @property {Array.<size>} sizes A list of size for adUnit.
  * @property {object} params Any bidder-specific params which the publisher used in their bid request.
  *   This is guaranteed to have passed the spec.areParamsValid() test.
  */

/**
 * @typedef {Array.<number>} size
 */

/**
 * @typedef {Array.<string>} AdUnitCode
 */

/**
 * @typedef {Object} BidderRequest
 *
 * @property {string} bidderCode - adUnit bidder
 * @property {number} auctionId - random UUID
 * @property {string} bidderRequestId - random string, unique key set on all bidRequest.bids[]
 * @property {Array.<Bid>} bids
 * @property {number} auctionStart - Date.now() at auction start
 * @property {number} timeout - callback timeout
 * @property {refererInfo} refererInfo - referer info object
 * @property {string} [tid] - random UUID (used for s2s)
 * @property {string} [src] - s2s or client (used for s2s)
 */

/**
 * @typedef {Object} BidReceived
 * //TODO add all properties
 */

/**
 * @typedef {Object} Auction
 *
 * @property {function(): string} getAuctionStatus - returns the auction status which can be any one of 'started', 'in progress' or 'completed'
 * @property {function(): AdUnit[]} getAdUnits - return the adUnits for this auction instance
 * @property {function(): AdUnitCode[]} getAdUnitCodes - return the adUnitCodes for this auction instance
 * @property {function(): BidRequest[]} getBidRequests - get all bid requests for this auction instance
 * @property {function(): BidReceived[]} getBidsReceived - get all bid received for this auction instance
 * @property {function(): void} startAuctionTimer - sets the bidsBackHandler callback and starts the timer for auction
 * @property {function(): void} callBids - sends requests to all adapters for bids
 */













var syncUsers = __WEBPACK_IMPORTED_MODULE_6__userSync_js__["a" /* userSync */].syncUsers;

var adapterManager = __webpack_require__(10).default;

var events = __webpack_require__(11);

var CONSTANTS = __webpack_require__(5);

var AUCTION_STARTED = 'started';
var AUCTION_IN_PROGRESS = 'inProgress';
var AUCTION_COMPLETED = 'completed'; // register event for bid adjustment

events.on(CONSTANTS.EVENTS.BID_ADJUSTMENT, function (bid) {
  adjustBids(bid);
});
var MAX_REQUESTS_PER_ORIGIN = 4;
var outstandingRequests = {};
var sourceInfo = {};
var queuedCalls = [];
/**
  * Creates new auction instance
  *
  * @param {Object} requestConfig
  * @param {AdUnit} requestConfig.adUnits
  * @param {AdUnitCode} requestConfig.adUnitCodes
  * @param {function():void} requestConfig.callback
  * @param {number} requestConfig.cbTimeout
  * @param {Array.<string>} requestConfig.labels
  * @param {string} requestConfig.auctionId
  *
  * @returns {Auction} auction instance
  */

function newAuction(_ref) {
  var adUnits = _ref.adUnits,
      adUnitCodes = _ref.adUnitCodes,
      callback = _ref.callback,
      cbTimeout = _ref.cbTimeout,
      labels = _ref.labels,
      auctionId = _ref.auctionId;
  var _adUnits = adUnits;
  var _labels = labels;
  var _adUnitCodes = adUnitCodes;
  var _bidderRequests = [];
  var _bidsReceived = [];
  var _noBids = [];

  var _auctionStart;

  var _auctionEnd;

  var _auctionId = auctionId || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["generateUUID"])();

  var _auctionStatus;

  var _callback = callback;

  var _timer;

  var _timeout = cbTimeout;
  var _winningBids = [];

  var _timelyBidders = new Set();

  function addBidRequests(bidderRequests) {
    _bidderRequests = _bidderRequests.concat(bidderRequests);
  }

  function addBidReceived(bidsReceived) {
    _bidsReceived = _bidsReceived.concat(bidsReceived);
  }

  function addNoBid(noBid) {
    _noBids = _noBids.concat(noBid);
  }

  function getProperties() {
    return {
      auctionId: _auctionId,
      timestamp: _auctionStart,
      auctionEnd: _auctionEnd,
      auctionStatus: _auctionStatus,
      adUnits: _adUnits,
      adUnitCodes: _adUnitCodes,
      labels: _labels,
      bidderRequests: _bidderRequests,
      noBids: _noBids,
      bidsReceived: _bidsReceived,
      winningBids: _winningBids,
      timeout: _timeout
    };
  }

  function startAuctionTimer() {
    var timedOut = true;
    var timeoutCallback = executeCallback.bind(null, timedOut);
    var timer = setTimeout(timeoutCallback, _timeout);
    _timer = timer;
  }

  function executeCallback(timedOut, cleartimer) {
    // clear timer when done calls executeCallback
    if (cleartimer) {
      clearTimeout(_timer);
    }

    if (_auctionEnd === undefined) {
      var timedOutBidders = [];

      if (timedOut) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Auction ".concat(_auctionId, " timedOut"));
        timedOutBidders = getTimedOutBids(_bidderRequests, _timelyBidders);

        if (timedOutBidders.length) {
          events.emit(CONSTANTS.EVENTS.BID_TIMEOUT, timedOutBidders);
        }
      }

      _auctionStatus = AUCTION_COMPLETED;
      _auctionEnd = Date.now();
      events.emit(CONSTANTS.EVENTS.AUCTION_END, getProperties());
      bidsBackCallback(_adUnits, function () {
        try {
          if (_callback != null) {
            var _adUnitCodes2 = _adUnitCodes;

            var bids = _bidsReceived.filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(__WEBPACK_IMPORTED_MODULE_0__utils_js__["adUnitsFilter"], this, _adUnitCodes2)).reduce(groupByPlacement, {});

            _callback.apply(pbjs, [bids, timedOut, _auctionId]);

            _callback = null;
          }
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Error executing bidsBackHandler', null, e);
        } finally {
          // Calling timed out bidders
          if (timedOutBidders.length) {
            adapterManager.callTimedOutBidders(adUnits, timedOutBidders, _timeout);
          } // Only automatically sync if the publisher has not chosen to "enableOverride"


          var userSyncConfig = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('userSync') || {};

          if (!userSyncConfig.enableOverride) {
            // Delay the auto sync by the config delay
            syncUsers(userSyncConfig.syncDelay);
          }
        }
      });
    }
  }

  function auctionDone() {
    __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].resetBidder(); // when all bidders have called done callback atleast once it means auction is complete

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Bids Received for Auction with id: ".concat(_auctionId), _bidsReceived);
    _auctionStatus = AUCTION_COMPLETED;
    executeCallback(false, true);
  }

  function onTimelyResponse(bidderCode) {
    _timelyBidders.add(bidderCode);
  }

  function callBids() {
    _auctionStatus = AUCTION_STARTED;
    _auctionStart = Date.now();
    var bidRequests = adapterManager.makeBidRequests(_adUnits, _auctionStart, _auctionId, _timeout, _labels);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Bids Requested for Auction with id: ".concat(_auctionId), bidRequests);

    if (bidRequests.length < 1) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('No valid bid requests returned for auction');
      auctionDone();
    } else {
      addBidderRequests.call({
        dispatch: addBidderRequestsCallback,
        context: this
      }, bidRequests);
    }
  }
  /**
   * callback executed after addBidderRequests completes
   * @param {BidRequest[]} bidRequests
   */


  function addBidderRequestsCallback(bidRequests) {
    var _this = this;

    bidRequests.forEach(function (bidRequest) {
      addBidRequests(bidRequest);
    });
    var requests = {};
    var call = {
      bidRequests: bidRequests,
      run: function run() {
        startAuctionTimer();
        _auctionStatus = AUCTION_IN_PROGRESS;
        events.emit(CONSTANTS.EVENTS.AUCTION_INIT, getProperties());
        var callbacks = auctionCallbacks(auctionDone, _this);
        adapterManager.callBids(_adUnits, bidRequests, callbacks.addBidResponse, callbacks.adapterDone, {
          request: function request(source, origin) {
            increment(outstandingRequests, origin);
            increment(requests, source);

            if (!sourceInfo[source]) {
              sourceInfo[source] = {
                SRA: true,
                origin: origin
              };
            }

            if (requests[source] > 1) {
              sourceInfo[source].SRA = false;
            }
          },
          done: function done(origin) {
            outstandingRequests[origin]--;

            if (queuedCalls[0]) {
              if (runIfOriginHasCapacity(queuedCalls[0])) {
                queuedCalls.shift();
              }
            }
          }
        }, _timeout, onTimelyResponse);
      }
    };

    if (!runIfOriginHasCapacity(call)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('queueing auction due to limited endpoint capacity');
      queuedCalls.push(call);
    }

    function runIfOriginHasCapacity(call) {
      var hasCapacity = true;
      var maxRequests = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('maxRequestsPerOrigin') || MAX_REQUESTS_PER_ORIGIN;
      call.bidRequests.some(function (bidRequest) {
        var requests = 1;
        var source = typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC ? 's2s' : bidRequest.bidderCode; // if we have no previous info on this source just let them through

        if (sourceInfo[source]) {
          if (sourceInfo[source].SRA === false) {
            // some bidders might use more than the MAX_REQUESTS_PER_ORIGIN in a single auction.  In those cases
            // set their request count to MAX_REQUESTS_PER_ORIGIN so the auction isn't permanently queued waiting
            // for capacity for that bidder
            requests = Math.min(bidRequest.bids.length, maxRequests);
          }

          if (outstandingRequests[sourceInfo[source].origin] + requests > maxRequests) {
            hasCapacity = false;
          }
        } // return only used for terminating this .some() iteration early if it is determined we don't have capacity


        return !hasCapacity;
      });

      if (hasCapacity) {
        call.run();
      }

      return hasCapacity;
    }

    function increment(obj, prop) {
      if (typeof obj[prop] === 'undefined') {
        obj[prop] = 1;
      } else {
        obj[prop]++;
      }
    }
  }

  function addWinningBid(winningBid) {
    _winningBids = _winningBids.concat(winningBid);
    adapterManager.callBidWonBidder(winningBid.bidder, winningBid, adUnits);
  }

  function setBidTargeting(bid) {
    adapterManager.callSetTargetingBidder(bid.bidder, bid);
  }

  return {
    addBidReceived: addBidReceived,
    addNoBid: addNoBid,
    executeCallback: executeCallback,
    callBids: callBids,
    addWinningBid: addWinningBid,
    setBidTargeting: setBidTargeting,
    getWinningBids: function getWinningBids() {
      return _winningBids;
    },
    getAuctionStart: function getAuctionStart() {
      return _auctionStart;
    },
    getTimeout: function getTimeout() {
      return _timeout;
    },
    getAuctionId: function getAuctionId() {
      return _auctionId;
    },
    getAuctionStatus: function getAuctionStatus() {
      return _auctionStatus;
    },
    getAdUnits: function getAdUnits() {
      return _adUnits;
    },
    getAdUnitCodes: function getAdUnitCodes() {
      return _adUnitCodes;
    },
    getBidRequests: function getBidRequests() {
      return _bidderRequests;
    },
    getBidsReceived: function getBidsReceived() {
      return _bidsReceived;
    },
    getNoBids: function getNoBids() {
      return _noBids;
    }
  };
}

var _addBidResponse = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (adUnitCode, bid) {
  this.dispatch.call(null, adUnitCode, bid);
}, 'addBidResponse');


var addBidderRequests = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (bidderRequests) {
  this.dispatch.call(this.context, bidderRequests);
}, 'addBidderRequests');
var bidsBackCallback = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (adUnits, callback) {
  if (callback) {
    callback();
  }
}, 'bidsBackCallback');
function auctionCallbacks(auctionDone, auctionInstance) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? __WEBPACK_IMPORTED_MODULE_11__auctionManager_js__["a" /* auctionManager */].index : _ref2$index;

  var outstandingBidsAdded = 0;
  var allAdapterCalledDone = false;
  var bidderRequestsDone = new Set();
  var bidResponseMap = {};
  var ready = {};

  function waitFor(requestId, result) {
    if (ready[requestId] == null) {
      ready[requestId] = Promise.resolve();
    }

    ready[requestId] = ready[requestId].then(function () {
      return Promise.resolve(result).catch(function () {});
    });
  }

  function guard(bidderRequest, fn) {
    var timeout = bidderRequest.timeout;

    if (timeout == null || timeout > auctionInstance.getTimeout()) {
      timeout = auctionInstance.getTimeout();
    }

    var timeRemaining = auctionInstance.getAuctionStart() + timeout - Date.now();
    var wait = ready[bidderRequest.bidderRequestId];
    var orphanWait = ready['']; // also wait for "orphan" responses that are not associated with any request

    if ((wait != null || orphanWait != null) && timeRemaining > 0) {
      Promise.race([new Promise(function (resolve) {
        return setTimeout(resolve, timeRemaining);
      }), Promise.resolve(orphanWait).then(function () {
        return wait;
      })]).then(fn);
    } else {
      fn();
    }
  }

  function afterBidAdded() {
    outstandingBidsAdded--;

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  function handleBidResponse(adUnitCode, bid) {
    bidResponseMap[bid.requestId] = true;
    outstandingBidsAdded++;
    var auctionId = auctionInstance.getAuctionId();
    var bidResponse = getPreparedBidForAuction({
      adUnitCode: adUnitCode,
      bid: bid,
      auctionId: auctionId
    });

    if (bidResponse.mediaType === 'video') {
      tryAddVideoBid(auctionInstance, bidResponse, afterBidAdded);
    } else {
      addBidToAuction(auctionInstance, bidResponse);
      afterBidAdded();
    }
  }

  function _adapterDone() {
    var bidderRequest = this;
    var bidderRequests = auctionInstance.getBidRequests();
    var auctionOptionsConfig = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('auctionOptions');
    bidderRequestsDone.add(bidderRequest);

    if (auctionOptionsConfig && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isEmpty"])(auctionOptionsConfig)) {
      var secondaryBidders = auctionOptionsConfig.secondaryBidders;

      if (secondaryBidders && !bidderRequests.every(function (bidder) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(secondaryBidders, bidder.bidderCode);
      })) {
        bidderRequests = bidderRequests.filter(function (request) {
          return !Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(secondaryBidders, request.bidderCode);
        });
      }
    }

    allAdapterCalledDone = bidderRequests.every(function (bidderRequest) {
      return bidderRequestsDone.has(bidderRequest);
    });
    bidderRequest.bids.forEach(function (bid) {
      if (!bidResponseMap[bid.bidId]) {
        auctionInstance.addNoBid(bid);
        events.emit(CONSTANTS.EVENTS.NO_BID, bid);
      }
    });

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  return {
    addBidResponse: function addBidResponse(adUnit, bid) {
      var bidderRequest = index.getBidderRequest(bid);
      waitFor(bidderRequest && bidderRequest.bidderRequestId || '', _addBidResponse.call({
        dispatch: handleBidResponse
      }, adUnit, bid));
    },
    adapterDone: function adapterDone() {
      guard(this, _adapterDone.bind(this));
    }
  };
}
function doCallbacksIfTimedout(auctionInstance, bidResponse) {
  if (bidResponse.timeToRespond > auctionInstance.getTimeout() + __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('timeoutBuffer')) {
    auctionInstance.executeCallback(true);
  }
} // Add a bid to the auction.

function addBidToAuction(auctionInstance, bidResponse) {
  setupBidTargeting(bidResponse);
  events.emit(CONSTANTS.EVENTS.BID_RESPONSE, bidResponse);
  auctionInstance.addBidReceived(bidResponse);
  doCallbacksIfTimedout(auctionInstance, bidResponse);
} // Video bids may fail if the cache is down, or there's trouble on the network.

function tryAddVideoBid(auctionInstance, bidResponse, afterBidAdded) {
  var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref3$index = _ref3.index,
      index = _ref3$index === void 0 ? __WEBPACK_IMPORTED_MODULE_11__auctionManager_js__["a" /* auctionManager */].index : _ref3$index;

  var addBid = true;
  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(index.getMediaTypes({
    requestId: bidResponse.originalRequestId || bidResponse.requestId,
    transactionId: bidResponse.transactionId
  }), 'video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(videoMediaType, 'context');

  if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url') && context !== __WEBPACK_IMPORTED_MODULE_9__video_js__["b" /* OUTSTREAM */]) {
    if (!bidResponse.videoCacheKey || __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.ignoreBidderCacheKey')) {
      addBid = false;
      callPrebidCache(auctionInstance, bidResponse, afterBidAdded, videoMediaType);
    } else if (!bidResponse.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('videoCacheKey specified but not required vastUrl for video bid');
      addBid = false;
    }
  }

  if (addBid) {
    addBidToAuction(auctionInstance, bidResponse);
    afterBidAdded();
  }
}

var callPrebidCache = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (auctionInstance, bidResponse, afterBidAdded, videoMediaType) {
  Object(__WEBPACK_IMPORTED_MODULE_3__videoCache_js__["b" /* store */])([bidResponse], function (error, cacheIds) {
    if (error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Failed to save to the video cache: ".concat(error, ". Video bid must be discarded."));
      doCallbacksIfTimedout(auctionInstance, bidResponse);
    } else {
      if (cacheIds[0].uuid === '') {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.");
        doCallbacksIfTimedout(auctionInstance, bidResponse);
      } else {
        bidResponse.videoCacheKey = cacheIds[0].uuid;

        if (!bidResponse.vastUrl) {
          bidResponse.vastUrl = Object(__WEBPACK_IMPORTED_MODULE_3__videoCache_js__["a" /* getCacheUrl */])(bidResponse.videoCacheKey);
        }

        addBidToAuction(auctionInstance, bidResponse);
        afterBidAdded();
      }
    }
  });
}, 'callPrebidCache'); // Postprocess the bids so that all the universal properties exist, no matter which bidder they came from.
// This should be called before addBidToAuction().

function getPreparedBidForAuction(_ref4) {
  var adUnitCode = _ref4.adUnitCode,
      bid = _ref4.bid,
      auctionId = _ref4.auctionId;

  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$index = _ref5.index,
      index = _ref5$index === void 0 ? __WEBPACK_IMPORTED_MODULE_11__auctionManager_js__["a" /* auctionManager */].index : _ref5$index;

  var bidderRequest = index.getBidderRequest(bid);
  var start = bidderRequest && bidderRequest.start || bid.requestTimestamp;

  var bidObject = _extends({}, bid, {
    auctionId: auctionId,
    responseTimestamp: Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])(),
    requestTimestamp: start,
    cpm: parseFloat(bid.cpm) || 0,
    bidder: bid.bidderCode,
    adUnitCode: adUnitCode
  });

  bidObject.timeToRespond = bidObject.responseTimestamp - bidObject.requestTimestamp; // Let listeners know that now is the time to adjust the bid, if they want to.
  //
  // CAREFUL: Publishers rely on certain bid properties to be available (like cpm),
  // but others to not be set yet (like priceStrings). See #1372 and #1389.

  events.emit(CONSTANTS.EVENTS.BID_ADJUSTMENT, bidObject); // a publisher-defined renderer can be used to render bids

  var adUnitRenderer = index.getAdUnit(bidObject).renderer; // a publisher can also define a renderer for a mediaType

  var bidObjectMediaType = bidObject.mediaType;
  var mediaTypes = index.getMediaTypes(bidObject);
  var bidMediaType = mediaTypes && mediaTypes[bidObjectMediaType];
  var mediaTypeRenderer = bidMediaType && bidMediaType.renderer;
  var renderer = null; // the renderer for the mediaType takes precendence

  if (mediaTypeRenderer && mediaTypeRenderer.url && mediaTypeRenderer.render && !(mediaTypeRenderer.backupOnly === true && bid.renderer)) {
    renderer = mediaTypeRenderer;
  } else if (adUnitRenderer && adUnitRenderer.url && adUnitRenderer.render && !(adUnitRenderer.backupOnly === true && bid.renderer)) {
    renderer = adUnitRenderer;
  }

  if (renderer) {
    bidObject.renderer = __WEBPACK_IMPORTED_MODULE_4__Renderer_js__["a" /* Renderer */].install({
      url: renderer.url
    });
    bidObject.renderer.setRender(renderer.render);
  } // Use the config value 'mediaTypeGranularity' if it has been defined for mediaType, else use 'customPriceBucket'


  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, mediaTypes, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('mediaTypePriceGranularity'));
  var priceStringsObj = Object(__WEBPACK_IMPORTED_MODULE_1__cpmBucketManager_js__["a" /* getPriceBucketString */])(bidObject.cpm, _typeof(mediaTypeGranularity) === 'object' ? mediaTypeGranularity : __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('customPriceBucket'), __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('currency.granularityMultiplier'));
  bidObject.pbLg = priceStringsObj.low;
  bidObject.pbMg = priceStringsObj.med;
  bidObject.pbHg = priceStringsObj.high;
  bidObject.pbAg = priceStringsObj.auto;
  bidObject.pbDg = priceStringsObj.dense;
  bidObject.pbCg = priceStringsObj.custom;
  return bidObject;
}

function setupBidTargeting(bidObject) {
  var keyValues;
  var cpmCheck = __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].get(bidObject.bidderCode, 'allowZeroCpmBids') === true ? bidObject.cpm >= 0 : bidObject.cpm > 0;

  if (bidObject.bidderCode && (cpmCheck || bidObject.dealId)) {
    keyValues = getKeyValueTargetingPairs(bidObject.bidderCode, bidObject);
  } // use any targeting provided as defaults, otherwise just set from getKeyValueTargetingPairs


  bidObject.adserverTargeting = _extends(bidObject.adserverTargeting || {}, keyValues);
}
/**
 * @param {MediaType} mediaType
 * @param mediaTypes media types map from adUnit
 * @param {MediaTypePriceGranularity} [mediaTypePriceGranularity]
 * @returns {(Object|string|undefined)}
 */


function getMediaTypeGranularity(mediaType, mediaTypes, mediaTypePriceGranularity) {
  if (mediaType && mediaTypePriceGranularity) {
    if (mediaType === __WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */]) {
      var context = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(mediaTypes, "".concat(__WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */], ".context"), 'instream');

      if (mediaTypePriceGranularity["".concat(__WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */], "-").concat(context)]) {
        return mediaTypePriceGranularity["".concat(__WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */], "-").concat(context)];
      }
    }

    return mediaTypePriceGranularity[mediaType];
  }
}
/**
 * This function returns the price granularity defined. It can be either publisher defined or default value
 * @param bid bid response object
 * @param index
 * @returns {string} granularity
 */

var getPriceGranularity = function getPriceGranularity(bid) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$index = _ref6.index,
      index = _ref6$index === void 0 ? __WEBPACK_IMPORTED_MODULE_11__auctionManager_js__["a" /* auctionManager */].index : _ref6$index;

  // Use the config value 'mediaTypeGranularity' if it has been set for mediaType, else use 'priceGranularity'
  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, index.getMediaTypes(bid), __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('mediaTypePriceGranularity'));
  var granularity = typeof bid.mediaType === 'string' && mediaTypeGranularity ? typeof mediaTypeGranularity === 'string' ? mediaTypeGranularity : 'custom' : __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('priceGranularity');
  return granularity;
};
/**
 * This function returns a function to get bid price by price granularity
 * @param {string} granularity
 * @returns {function}
 */

var getPriceByGranularity = function getPriceByGranularity(granularity) {
  return function (bid) {
    var bidGranularity = granularity || getPriceGranularity(bid);

    if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.AUTO) {
      return bid.pbAg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.DENSE) {
      return bid.pbDg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.LOW) {
      return bid.pbLg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.MEDIUM) {
      return bid.pbMg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.HIGH) {
      return bid.pbHg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.CUSTOM) {
      return bid.pbCg;
    }
  };
};
/**
 * This function returns a function to get first advertiser domain from bid response meta
 * @returns {function}
 */

var getAdvertiserDomain = function getAdvertiserDomain() {
  return function (bid) {
    return bid.meta && bid.meta.advertiserDomains && bid.meta.advertiserDomains.length > 0 ? bid.meta.advertiserDomains[0] : '';
  };
}; // factory for key value objs

function createKeyVal(key, value) {
  return {
    key: key,
    val: typeof value === 'function' ? function (bidResponse, bidReq) {
      return value(bidResponse, bidReq);
    } : function (bidResponse) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getValue"])(bidResponse, value);
    }
  };
}

function defaultAdserverTargeting() {
  var TARGETING_KEYS = CONSTANTS.TARGETING_KEYS;
  return [createKeyVal(TARGETING_KEYS.BIDDER, 'bidderCode'), createKeyVal(TARGETING_KEYS.AD_ID, 'adId'), createKeyVal(TARGETING_KEYS.PRICE_BUCKET, getPriceByGranularity()), createKeyVal(TARGETING_KEYS.SIZE, 'size'), createKeyVal(TARGETING_KEYS.DEAL, 'dealId'), createKeyVal(TARGETING_KEYS.SOURCE, 'source'), createKeyVal(TARGETING_KEYS.FORMAT, 'mediaType'), createKeyVal(TARGETING_KEYS.ADOMAIN, getAdvertiserDomain())];
}
/**
 * @param {string} mediaType
 * @param {string} bidderCode
 * @param {BidRequest} bidReq
 * @returns {*}
 */


function getStandardBidderSettings(mediaType, bidderCode) {
  var TARGETING_KEYS = CONSTANTS.TARGETING_KEYS;

  var standardSettings = _extends({}, __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].settingsFor(null));

  if (!standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
    standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = defaultAdserverTargeting();
  }

  if (mediaType === 'video') {
    var adserverTargeting = standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING].slice();
    standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = adserverTargeting; // Adding hb_uuid + hb_cache_id

    [TARGETING_KEYS.UUID, TARGETING_KEYS.CACHE_ID].forEach(function (targetingKeyVal) {
      if (typeof Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["b" /* find */])(adserverTargeting, function (kvPair) {
        return kvPair.key === targetingKeyVal;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(targetingKeyVal, 'videoCacheKey'));
      }
    }); // Adding hb_cache_host

    if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url') && (!bidderCode || __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].get(bidderCode, 'sendStandardTargeting') !== false)) {
      var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["parseUrl"])(__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url'));

      if (typeof Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["b" /* find */])(adserverTargeting, function (targetingKeyVal) {
        return targetingKeyVal.key === TARGETING_KEYS.CACHE_HOST;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(TARGETING_KEYS.CACHE_HOST, function (bidResponse) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bidResponse, "adserverTargeting.".concat(TARGETING_KEYS.CACHE_HOST)) ? bidResponse.adserverTargeting[TARGETING_KEYS.CACHE_HOST] : urlInfo.hostname;
        }));
      }
    }
  }

  return standardSettings;
}
function getKeyValueTargetingPairs(bidderCode, custBidObj) {
  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref7$index = _ref7.index,
      index = _ref7$index === void 0 ? __WEBPACK_IMPORTED_MODULE_11__auctionManager_js__["a" /* auctionManager */].index : _ref7$index;

  if (!custBidObj) {
    return {};
  }

  var bidRequest = index.getBidRequest(custBidObj);
  var keyValues = {}; // 1) set the keys from "standard" setting or from prebid defaults
  // initialize default if not set

  var standardSettings = getStandardBidderSettings(custBidObj.mediaType, bidderCode);
  setKeys(keyValues, standardSettings, custBidObj, bidRequest); // 2) set keys from specific bidder setting override if they exist

  if (bidderCode && __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].getOwn(bidderCode, CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING)) {
    setKeys(keyValues, __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].ownSettingsFor(bidderCode), custBidObj, bidRequest);
    custBidObj.sendStandardTargeting = __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].get(bidderCode, 'sendStandardTargeting');
  } // set native key value targeting


  if (custBidObj['native']) {
    keyValues = _extends({}, keyValues, Object(__WEBPACK_IMPORTED_MODULE_2__native_js__["f" /* getNativeTargeting */])(custBidObj));
  }

  return keyValues;
}

function setKeys(keyValues, bidderSettings, custBidObj, bidReq) {
  var targeting = bidderSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  custBidObj.size = custBidObj.getSize();

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["_each"])(targeting, function (kvPair) {
    var key = kvPair.key;
    var value = kvPair.val;

    if (keyValues[key]) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('The key: ' + key + ' is being overwritten');
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(value)) {
      try {
        value = value(custBidObj, bidReq);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('bidmanager', 'ERROR', e);
      }
    }

    if ((typeof bidderSettings.suppressEmptyKeys !== 'undefined' && bidderSettings.suppressEmptyKeys === true || key === CONSTANTS.TARGETING_KEYS.DEAL) && ( // hb_deal is suppressed automatically if not set
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isEmptyStr"])(value) || value === null || value === undefined)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("suppressing empty key '" + key + "' from adserver targeting");
    } else {
      keyValues[key] = value;
    }
  });

  return keyValues;
}

function adjustBids(bid) {
  var code = bid.bidderCode;
  var bidPriceAdjusted = bid.cpm;
  var bidCpmAdjustment = __WEBPACK_IMPORTED_MODULE_12__bidderSettings_js__["a" /* bidderSettings */].get(code || null, 'bidCpmAdjustment');

  if (bidCpmAdjustment && typeof bidCpmAdjustment === 'function') {
    try {
      bidPriceAdjusted = bidCpmAdjustment(bid.cpm, _extends({}, bid));
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Error during bid adjustment', 'bidmanager.js', e);
    }
  }

  if (bidPriceAdjusted >= 0) {
    bid.cpm = bidPriceAdjusted;
  }
}
/**
 * groupByPlacement is a reduce function that converts an array of Bid objects
 * to an object with placement codes as keys, with each key representing an object
 * with an array of `Bid` objects for that placement
 * @returns {*} as { [adUnitCode]: { bids: [Bid, Bid, Bid] } }
 */

function groupByPlacement(bidsByPlacement, bid) {
  if (!bidsByPlacement[bid.adUnitCode]) {
    bidsByPlacement[bid.adUnitCode] = {
      bids: []
    };
  }

  bidsByPlacement[bid.adUnitCode].bids.push(bid);
  return bidsByPlacement;
}
/**
 * Returns a list of bids that we haven't received a response yet where the bidder did not call done
 * @param {BidRequest[]} bidderRequests List of bids requested for auction instance
 * @param {Set} timelyBidders Set of bidders which responded in time
 *
 * @typedef {Object} TimedOutBid
 * @property {string} bidId The id representing the bid
 * @property {string} bidder The string name of the bidder
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page
 * @property {string} auctionId The id representing the auction
 *
 * @return {Array<TimedOutBid>} List of bids that Prebid hasn't received a response for
 */


function getTimedOutBids(bidderRequests, timelyBidders) {
  var timedOutBids = bidderRequests.map(function (bid) {
    return (bid.bids || []).filter(function (bid) {
      return !timelyBidders.has(bid.bidder);
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).map(function (bid) {
    return {
      bidId: bid.bidId,
      bidder: bid.bidder,
      adUnitCode: bid.adUnitCode,
      auctionId: bid.auctionId
    };
  });
  return timedOutBids;
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADPOD; });
/**
 * This file contains the valid Media Types in Prebid.
 *
 * All adapters are assumed to support banner ads. Other media types are specified by Adapters when they
 * register themselves with prebid-core.
 */

/**
 * @typedef {('native'|'video'|'banner')} MediaType
 * @typedef {('adpod')} VideoContext
 */

/** @type MediaType */
var NATIVE = 'native';
/** @type MediaType */

var VIDEO = 'video';
/** @type MediaType */

var BANNER = 'banner';
/** @type VideoContext */

var ADPOD = 'adpod';

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadExternalScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var _requestCache = {}; // The below list contains modules or vendors whom Prebid allows to load external JS.

var _approvedLoadExternalJSList = ['adloox', 'criteo', 'outstream', 'adagio', 'browsi', 'brandmetrics', 'justtag'];
/**
 * Loads external javascript. Can only be used if external JS is approved by Prebid. See https://github.com/prebid/prebid-js-external-js-template#policy
 * Each unique URL will be loaded at most 1 time.
 * @param {string} url the url to load
 * @param {string} moduleCode bidderCode or module code of the module requesting this resource
 * @param {function} [callback] callback function to be called after the script is loaded.
 */

function loadExternalScript(url, moduleCode, callback) {
  if (!moduleCode || !url) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('cannot load external script without url and moduleCode');
    return;
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__polyfill_js__["d" /* includes */])(_approvedLoadExternalJSList, moduleCode)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("".concat(moduleCode, " not whitelisted for loading external JavaScript"));
    return;
  } // only load each asset once


  if (_requestCache[url]) {
    if (callback && typeof callback === 'function') {
      if (_requestCache[url].loaded) {
        // invokeCallbacks immediately
        callback();
      } else {
        // queue the callback
        _requestCache[url].callbacks.push(callback);
      }
    }

    return _requestCache[url].tag;
  }

  _requestCache[url] = {
    loaded: false,
    tag: null,
    callbacks: []
  };

  if (callback && typeof callback === 'function') {
    _requestCache[url].callbacks.push(callback);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("module ".concat(moduleCode, " is loading external JavaScript"));
  return requestResource(url, function () {
    _requestCache[url].loaded = true;

    try {
      for (var i = 0; i < _requestCache[url].callbacks.length; i++) {
        _requestCache[url].callbacks[i]();
      }
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error executing callback', 'adloader.js:loadExternalScript', e);
    }
  });

  function requestResource(tagSrc, callback) {
    var jptScript = document.createElement('script');
    jptScript.type = 'text/javascript';
    jptScript.async = true;
    _requestCache[url].tag = jptScript;

    if (jptScript.readyState) {
      jptScript.onreadystatechange = function () {
        if (jptScript.readyState === 'loaded' || jptScript.readyState === 'complete') {
          jptScript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      jptScript.onload = function () {
        callback();
      };
    }

    jptScript.src = tagSrc; // add the new script tag to the page

    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(jptScript);
    return jptScript;
  }
}
;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScopedSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bidderSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prebidGlobal_js__ = __webpack_require__(13);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var CONSTANTS = __webpack_require__(5);

var _resolveScope = /*#__PURE__*/new WeakSet();

var ScopedSettings = /*#__PURE__*/function () {
  function ScopedSettings(getSettings, defaultScope) {
    _classCallCheck(this, ScopedSettings);

    _resolveScope.add(this);

    this.getSettings = getSettings;
    this.defaultScope = defaultScope;
  }
  /**
   * Get setting value at `path` under the given scope, falling back to the default scope if needed.
   * If `scope` is `null`, get the setting's default value.
   * @param scope {String|null}
   * @param path {String}
   * @returns {*}
   */


  _createClass(ScopedSettings, [{
    key: "get",
    value: function get(scope, path) {
      var value = this.getOwn(scope, path);

      if (typeof value === 'undefined') {
        value = this.getOwn(null, path);
      }

      return value;
    }
    /**
     * Get the setting value at `path` *without* falling back to the default value.
     * @param scope {String}
     * @param path {String}
     * @returns {*}
     */

  }, {
    key: "getOwn",
    value: function getOwn(scope, path) {
      scope = _classPrivateMethodGet(this, _resolveScope, _resolveScope2).call(this, scope);
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(this.getSettings(), "".concat(scope, ".").concat(path));
    }
    /**
     * @returns {string[]} all existing scopes except the default one.
     */

  }, {
    key: "getScopes",
    value: function getScopes() {
      var _this = this;

      return Object.keys(this.getSettings()).filter(function (scope) {
        return scope !== _this.defaultScope;
      });
    }
    /**
     * @returns all settings in the given scope, merged with the settings for the default scope.
     */

  }, {
    key: "settingsFor",
    value: function settingsFor(scope) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["mergeDeep"])({}, this.ownSettingsFor(null), this.ownSettingsFor(scope));
    }
    /**
     * @returns all settings in the given scope, *without* any of the default settings.
     */

  }, {
    key: "ownSettingsFor",
    value: function ownSettingsFor(scope) {
      scope = _classPrivateMethodGet(this, _resolveScope, _resolveScope2).call(this, scope);
      return this.getSettings()[scope] || {};
    }
  }]);

  return ScopedSettings;
}();

function _resolveScope2(scope) {
  if (scope == null) {
    return this.defaultScope;
  } else {
    return scope;
  }
}

var bidderSettings = new ScopedSettings(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__prebidGlobal_js__["a" /* getGlobal */])().bidderSettings || {};
}, CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TARGETING_KEYS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHighestCpmBidsFromBidPool; });
/* harmony export (immutable) */ __webpack_exports__["c"] = sortByDealAndPriceBucketOrCpm;
/* unused harmony export newTargeting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return targeting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizeMapping_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bidderSettings_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__polyfill_js__ = __webpack_require__(6);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var CONSTANTS = __webpack_require__(5);

var pbTargetingKeys = [];
var MAX_DFP_KEYLENGTH = 20;
var TTL_BUFFER = 1000;
var CFG_ALLOW_TARGETING_KEYS = "targetingControls.allowTargetingKeys";
var CFG_ADD_TARGETING_KEYS = "targetingControls.addTargetingKeys";
var TARGETING_KEY_CONFIGURATION_ERROR_MSG = "Only one of \"".concat(CFG_ALLOW_TARGETING_KEYS, "\" or \"").concat(CFG_ADD_TARGETING_KEYS, "\" can be set");
var TARGETING_KEYS = Object.keys(CONSTANTS.TARGETING_KEYS).map(function (key) {
  return CONSTANTS.TARGETING_KEYS[key];
}); // return unexpired bids

var isBidNotExpired = function isBidNotExpired(bid) {
  return bid.responseTimestamp + bid.ttl * 1000 - TTL_BUFFER > Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
}; // return bids whose status is not set. Winning bids can only have a status of `rendered`.


var isUnusedBid = function isUnusedBid(bid) {
  return bid && (bid.status && !Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])([CONSTANTS.BID_STATUS.RENDERED], bid.status) || !bid.status);
};

var filters = {
  isBidNotExpired: isBidNotExpired,
  isUnusedBid: isUnusedBid
}; // If two bids are found for same adUnitCode, we will use the highest one to take part in auction
// This can happen in case of concurrent auctions
// If adUnitBidLimit is set above 0 return top N number of bids

var getHighestCpmBidsFromBidPool = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', function (bidsReceived, highestCpmCallback) {
  var adUnitBidLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var hasModified = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!hasModified) {
    var bids = [];
    var dealPrioritization = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('sendBidsControl.dealPrioritization'); // bucket by adUnitcode

    var buckets = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(bidsReceived, 'adUnitCode'); // filter top bid for each bucket by bidder

    Object.keys(buckets).forEach(function (bucketKey) {
      var bucketBids = [];
      var bidsByBidder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(buckets[bucketKey], 'bidderCode');
      Object.keys(bidsByBidder).forEach(function (key) {
        return bucketBids.push(bidsByBidder[key].reduce(highestCpmCallback));
      }); // if adUnitBidLimit is set, pass top N number bids

      if (adUnitBidLimit > 0) {
        bucketBids = dealPrioritization ? bucketBids.sort(sortByDealAndPriceBucketOrCpm(true)) : bucketBids.sort(function (a, b) {
          return b.cpm - a.cpm;
        });
        bids.push.apply(bids, _toConsumableArray(bucketBids.slice(0, adUnitBidLimit)));
      } else {
        bids.push.apply(bids, _toConsumableArray(bucketBids));
      }
    });
    return bids;
  }

  return bidsReceived;
});
/**
* A descending sort function that will sort the list of objects based on the following two dimensions:
*  - bids with a deal are sorted before bids w/o a deal
*  - then sort bids in each grouping based on the hb_pb value
* eg: the following list of bids would be sorted like:
*  [{
*    "hb_adid": "vwx",
*    "hb_pb": "28",
*    "hb_deal": "7747"
*  }, {
*    "hb_adid": "jkl",
*    "hb_pb": "10",
*    "hb_deal": "9234"
*  }, {
*    "hb_adid": "stu",
*    "hb_pb": "50"
*  }, {
*    "hb_adid": "def",
*    "hb_pb": "2"
*  }]
*/

function sortByDealAndPriceBucketOrCpm() {
  var useCpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (a, b) {
    if (a.adserverTargeting.hb_deal !== undefined && b.adserverTargeting.hb_deal === undefined) {
      return -1;
    }

    if (a.adserverTargeting.hb_deal === undefined && b.adserverTargeting.hb_deal !== undefined) {
      return 1;
    } // assuming both values either have a deal or don't have a deal - sort by the hb_pb param


    if (useCpm) {
      return b.cpm - a.cpm;
    }

    return b.adserverTargeting.hb_pb - a.adserverTargeting.hb_pb;
  };
}
/**
 * @typedef {Object.<string,string>} targeting
 * @property {string} targeting_key
 */

/**
 * @typedef {Object.<string,Object.<string,string[]>[]>[]} targetingArray
 */

function newTargeting(auctionManager) {
  var targeting = {};
  var latestAuctionForAdUnit = {};

  targeting.setLatestAuctionForAdUnit = function (adUnitCode, auctionId) {
    latestAuctionForAdUnit[adUnitCode] = auctionId;
  };

  targeting.resetPresetTargeting = function (adUnitCode, customSlotMatching) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isGptPubadsDefined"])()) {
      var adUnitCodes = getAdUnitCodes(adUnitCode);
      var adUnits = auctionManager.getAdUnits().filter(function (adUnit) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(adUnitCodes, adUnit.code);
      });
      var unsetKeys = pbTargetingKeys.reduce(function (reducer, key) {
        reducer[key] = null;
        return reducer;
      }, {});
      window.googletag.pubads().getSlots().forEach(function (slot) {
        var customSlotMatchingFunc = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(customSlotMatching) && customSlotMatching(slot); // reset only registered adunits

        adUnits.forEach(function (unit) {
          if (unit.code === slot.getAdUnitPath() || unit.code === slot.getSlotElementId() || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(customSlotMatchingFunc) && customSlotMatchingFunc(unit.code)) {
            slot.updateTargetingFromMap(unsetKeys);
          }
        });
      });
    }
  };

  targeting.resetPresetTargetingAST = function (adUnitCode) {
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    adUnitCodes.forEach(function (unit) {
      var astTag = window.apntag.getTag(unit);

      if (astTag && astTag.keywords) {
        var currentKeywords = Object.keys(astTag.keywords);
        var newKeywords = {};
        currentKeywords.forEach(function (key) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(pbTargetingKeys, key.toLowerCase())) {
            newKeywords[key] = astTag.keywords[key];
          }
        });
        window.apntag.modifyTag(unit, {
          keywords: newKeywords
        });
      }
    });
  };
  /**
   * checks if bid has targeting set and belongs based on matching ad unit codes
   * @return {boolean} true or false
   */


  function bidShouldBeAddedToTargeting(bid, adUnitCodes) {
    return bid.adserverTargeting && adUnitCodes && (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(adUnitCodes) && Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(adUnitCodes, bid.adUnitCode) || typeof adUnitCodes === 'string' && bid.adUnitCode === adUnitCodes);
  }

  ;
  /**
   * Returns targeting for any bids which have deals if alwaysIncludeDeals === true
   */

  function getDealBids(adUnitCodes, bidsReceived) {
    if (__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.alwaysIncludeDeals') === true) {
      var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]); // we only want the top bid from bidders who have multiple entries per ad unit code

      var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"]); // populate targeting keys for the remaining bids if they have a dealId

      return bids.map(function (bid) {
        if (bid.dealId && bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
          return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
            return typeof bid.adserverTargeting[key] !== 'undefined';
          })));
        }
      }).filter(function (bid) {
        return bid;
      }); // removes empty elements in array
    }

    return [];
  }

  ;
  /**
   * Returns filtered ad server targeting for custom and allowed keys.
   * @param {targetingArray} targeting
   * @param {string[]} allowedKeys
   * @return {targetingArray} filtered targeting
   */

  function getAllowedTargetingKeyValues(targeting, allowedKeys) {
    var defaultKeyring = _extends({}, CONSTANTS.TARGETING_KEYS, CONSTANTS.NATIVE_KEYS);

    var defaultKeys = Object.keys(defaultKeyring);
    var keyDispositions = {};
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("allowTargetingKeys - allowed keys [ ".concat(allowedKeys.map(function (k) {
      return defaultKeyring[k];
    }).join(', '), " ]"));
    targeting.map(function (adUnit) {
      var adUnitCode = Object.keys(adUnit)[0];
      var keyring = adUnit[adUnitCode];
      var keys = keyring.filter(function (kvPair) {
        var key = Object.keys(kvPair)[0]; // check if key is in default keys, if not, it's custom, we won't remove it.

        var isCustom = defaultKeys.filter(function (defaultKey) {
          return key.indexOf(defaultKeyring[defaultKey]) === 0;
        }).length === 0; // check if key explicitly allowed, if not, we'll remove it.

        var found = isCustom || Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["b" /* find */])(allowedKeys, function (allowedKey) {
          var allowedKeyName = defaultKeyring[allowedKey]; // we're looking to see if the key exactly starts with one of our default keys.
          // (which hopefully means it's not custom)

          var found = key.indexOf(allowedKeyName) === 0;
          return found;
        });
        keyDispositions[key] = !found;
        return found;
      });
      adUnit[adUnitCode] = keys;
    });
    var removedKeys = Object.keys(keyDispositions).filter(function (d) {
      return keyDispositions[d];
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("allowTargetingKeys - removed keys [ ".concat(removedKeys.join(', '), " ]")); // remove any empty targeting objects, as they're unnecessary.

    var filteredTargeting = targeting.filter(function (adUnit) {
      var adUnitCode = Object.keys(adUnit)[0];
      var keyring = adUnit[adUnitCode];
      return keyring.length > 0;
    });
    return filteredTargeting;
  }
  /**
   * Returns all ad server targeting for all ad units.
   * @param {string=} adUnitCode
   * @return {Object.<string,targeting>} targeting
   */


  targeting.getAllTargeting = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode); // Get targeting for the winning bid. Add targeting for any bids that have
    // `alwaysUseBid=true`. If sending all bids is enabled, add targeting for losing bids.

    var targeting = getWinningBidTargeting(adUnitCodes, bidsReceived).concat(getCustomBidTargeting(adUnitCodes, bidsReceived)).concat(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('enableSendAllBids') ? getBidLandscapeTargeting(adUnitCodes, bidsReceived) : getDealBids(adUnitCodes, bidsReceived)).concat(getAdUnitTargeting(adUnitCodes)); // store a reference of the targeting keys

    targeting.map(function (adUnitCode) {
      Object.keys(adUnitCode).map(function (key) {
        adUnitCode[key].map(function (targetKey) {
          if (pbTargetingKeys.indexOf(Object.keys(targetKey)[0]) === -1) {
            pbTargetingKeys = Object.keys(targetKey).concat(pbTargetingKeys);
          }
        });
      });
    });
    var defaultKeys = Object.keys(_extends({}, CONSTANTS.DEFAULT_TARGETING_KEYS, CONSTANTS.NATIVE_KEYS));
    var allowedKeys = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig(CFG_ALLOW_TARGETING_KEYS);
    var addedKeys = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig(CFG_ADD_TARGETING_KEYS);

    if (addedKeys != null && allowedKeys != null) {
      throw new Error(TARGETING_KEY_CONFIGURATION_ERROR_MSG);
    } else if (addedKeys != null) {
      allowedKeys = defaultKeys.concat(addedKeys);
    } else {
      allowedKeys = allowedKeys || defaultKeys;
    }

    if (Array.isArray(allowedKeys) && allowedKeys.length > 0) {
      targeting = getAllowedTargetingKeyValues(targeting, allowedKeys);
    }

    targeting = flattenTargeting(targeting);
    var auctionKeysThreshold = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.auctionKeyMaxChars');

    if (auctionKeysThreshold) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(auctionKeysThreshold, " characters.  Running checks on auction keys..."));
      targeting = filterTargetingKeys(targeting, auctionKeysThreshold);
    } // make sure at least there is a entry per adUnit code in the targetingSet so receivers of SET_TARGETING call's can know what ad units are being invoked


    adUnitCodes.forEach(function (code) {
      if (!targeting[code]) {
        targeting[code] = {};
      }
    });
    return targeting;
  }; // warn about conflicting configuration


  __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls', function (config) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(config, CFG_ALLOW_TARGETING_KEYS) != null && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(config, CFG_ADD_TARGETING_KEYS) != null) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])(TARGETING_KEY_CONFIGURATION_ERROR_MSG);
    }
  }); // create an encoded string variant based on the keypairs of the provided object
  //  - note this will encode the characters between the keys (ie = and &)

  function convertKeysToQueryForm(keyMap) {
    return Object.keys(keyMap).reduce(function (queryString, key) {
      var encodedKeyPair = "".concat(key, "%3d").concat(encodeURIComponent(keyMap[key]), "%26");
      return queryString += encodedKeyPair;
    }, '');
  }

  function filterTargetingKeys(targeting, auctionKeysThreshold) {
    // read each targeting.adUnit object and sort the adUnits into a list of adUnitCodes based on priorization setting (eg CPM)
    var targetingCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(targeting);
    var targetingMap = Object.keys(targetingCopy).map(function (adUnitCode) {
      return {
        adUnitCode: adUnitCode,
        adserverTargeting: targetingCopy[adUnitCode]
      };
    }).sort(sortByDealAndPriceBucketOrCpm()); // iterate through the targeting based on above list and transform the keys into the query-equivalent and count characters

    return targetingMap.reduce(function (accMap, currMap, index, arr) {
      var adUnitQueryString = convertKeysToQueryForm(currMap.adserverTargeting); // for the last adUnit - trim last encoded ampersand from the converted query string

      if (index + 1 === arr.length) {
        adUnitQueryString = adUnitQueryString.slice(0, -3);
      } // if under running threshold add to result


      var code = currMap.adUnitCode;
      var querySize = adUnitQueryString.length;

      if (querySize <= auctionKeysThreshold) {
        auctionKeysThreshold -= querySize;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("AdUnit '".concat(code, "' auction keys comprised of ").concat(querySize, " characters.  Deducted from running threshold; new limit is ").concat(auctionKeysThreshold), targetingCopy[code]);
        accMap[code] = targetingCopy[code];
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("The following keys for adUnitCode '".concat(code, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(querySize, ", the current allotted amount was ").concat(auctionKeysThreshold, ".\n"), targetingCopy[code]);
      }

      if (index + 1 === arr.length && Object.keys(accMap).length === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.');
      }

      return accMap;
    }, {});
  }
  /**
   * Converts targeting array and flattens to make it easily iteratable
   * e.g: Sample input to this function
   * ```
   * [
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder": ["appnexusAst"]}]
   *    },
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder_appnexusAs": ["appnexusAst", "other"]}]
   *    }
   * ]
   * ```
   * Resulting array
   * ```
   * {
   *  "div-gpt-ad-1460505748561-0": {
   *    "hb_bidder": "appnexusAst",
   *    "hb_bidder_appnexusAs": "appnexusAst,other"
   *  }
   * }
   * ```
   *
   * @param {targetingArray}  targeting
   * @return {Object.<string,targeting>}  targeting
   */


  function flattenTargeting(targeting) {
    var targetingObj = targeting.map(function (targeting) {
      return _defineProperty({}, Object.keys(targeting)[0], targeting[Object.keys(targeting)[0]].map(function (target) {
        return _defineProperty({}, Object.keys(target)[0], target[Object.keys(target)[0]].join(','));
      }).reduce(function (p, c) {
        return _extends(c, p);
      }, {}));
    }).reduce(function (accumulator, targeting) {
      var key = Object.keys(targeting)[0];
      accumulator[key] = _extends({}, accumulator[key], targeting[key]);
      return accumulator;
    }, {});
    return targetingObj;
  }
  /**
   * Sets targeting for DFP
   * @param {Object.<string,Object.<string,string>>} targetingConfig
   */


  targeting.setTargetingForGPT = function (targetingConfig, customSlotMatching) {
    window.googletag.pubads().getSlots().forEach(function (slot) {
      Object.keys(targetingConfig).filter(customSlotMatching ? customSlotMatching(slot) : Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isAdUnitCodeMatchingSlot"])(slot)).forEach(function (targetId) {
        Object.keys(targetingConfig[targetId]).forEach(function (key) {
          var value = targetingConfig[targetId][key];

          if (typeof value === 'string' && value.indexOf(',') !== -1) {
            // due to the check the array will be formed only if string has ',' else plain string will be assigned as value
            value = value.split(',');
          }

          targetingConfig[targetId][key] = value;
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Attempting to set targeting-map for slot: ".concat(slot.getSlotElementId(), " with targeting-map:"), targetingConfig[targetId]);
        slot.updateTargetingFromMap(targetingConfig[targetId]);
      });
    });
  };
  /**
   * normlizes input to a `adUnit.code` array
   * @param  {(string|string[])} adUnitCode [description]
   * @return {string[]}     AdUnit code array
   */


  function getAdUnitCodes(adUnitCode) {
    if (typeof adUnitCode === 'string') {
      return [adUnitCode];
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(adUnitCode)) {
      return adUnitCode;
    }

    return auctionManager.getAdUnitCodes() || [];
  }

  function getBidsReceived() {
    var bidsReceived = auctionManager.getBidsReceived();

    if (!__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('useBidCache')) {
      // don't use bid cache (i.e. filter out bids not in the latest auction)
      bidsReceived = bidsReceived.filter(function (bid) {
        return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId;
      });
    } else {
      // if custom bid cache filter function exists, run for each bid from
      // previous auctions. If it returns true, include bid in bid pool
      var filterFunction = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('bidCacheFilterFunction');

      if (typeof filterFunction === 'function') {
        bidsReceived = bidsReceived.filter(function (bid) {
          return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId || !!filterFunction(bid);
        });
      }
    }

    bidsReceived = bidsReceived.filter(function (bid) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'video.context') !== __WEBPACK_IMPORTED_MODULE_5__mediaTypes_js__["a" /* ADPOD */];
    }).filter(function (bid) {
      return bid.mediaType !== 'banner' || Object(__WEBPACK_IMPORTED_MODULE_4__sizeMapping_js__["b" /* sizeSupported */])([bid.width, bid.height]);
    }).filter(filters.isUnusedBid).filter(filters.isBidNotExpired);
    return getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getOldestHighestCpmBid"]);
  }
  /**
   * Returns top bids for a given adUnit or set of adUnits.
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * @return {[type]}            [description]
   */


  targeting.getWinningBids = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    return bidsReceived.filter(function (bid) {
      return Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(adUnitCodes, bid.adUnitCode);
    }).filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_7__bidderSettings_js__["a" /* bidderSettings */].get(bid.bidderCode, 'allowZeroCpmBids') === true ? bid.cpm >= 0 : bid.cpm > 0;
    }).map(function (bid) {
      return bid.adUnitCode;
    }).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]).map(function (adUnitCode) {
      return bidsReceived.filter(function (bid) {
        return bid.adUnitCode === adUnitCode ? bid : null;
      }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"]);
    });
  };
  /**
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * Sets targeting for AST
   */


  targeting.setTargetingForAst = function (adUnitCodes) {
    var astTargeting = targeting.getAllTargeting(adUnitCodes);

    try {
      targeting.resetPresetTargetingAST(adUnitCodes);
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('unable to reset targeting for AST' + e);
    }

    Object.keys(astTargeting).forEach(function (targetId) {
      return Object.keys(astTargeting[targetId]).forEach(function (key) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Attempting to set targeting for targetId: ".concat(targetId, " key: ").concat(key, " value: ").concat(astTargeting[targetId][key])); // setKeywords supports string and array as value

        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(astTargeting[targetId][key]) || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(astTargeting[targetId][key])) {
          var keywordsObj = {};
          var regex = /pt[0-9]/;

          if (key.search(regex) < 0) {
            keywordsObj[key.toUpperCase()] = astTargeting[targetId][key];
          } else {
            // pt${n} keys should not be uppercased
            keywordsObj[key] = astTargeting[targetId][key];
          }

          window.apntag.setKeywords(targetId, keywordsObj, {
            overrideKeyValue: true
          });
        }
      });
    });
  };
  /**
   * Get targeting key value pairs for winning bid.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   winning bids targeting
   */


  function getWinningBidTargeting(adUnitCodes, bidsReceived) {
    var winners = targeting.getWinningBids(adUnitCodes, bidsReceived);
    var standardKeys = getStandardKeys();
    winners = winners.map(function (winner) {
      return _defineProperty({}, winner.adUnitCode, Object.keys(winner.adserverTargeting).filter(function (key) {
        return typeof winner.sendStandardTargeting === 'undefined' || winner.sendStandardTargeting || standardKeys.indexOf(key) === -1;
      }).reduce(function (acc, key) {
        var targetingValue = [winner.adserverTargeting[key]];

        var targeting = _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), targetingValue);

        if (key === CONSTANTS.TARGETING_KEYS.DEAL) {
          var bidderCodeTargetingKey = "".concat(key, "_").concat(winner.bidderCode).substring(0, MAX_DFP_KEYLENGTH);

          var bidderCodeTargeting = _defineProperty({}, bidderCodeTargetingKey, targetingValue);

          return [].concat(_toConsumableArray(acc), [targeting, bidderCodeTargeting]);
        }

        return [].concat(_toConsumableArray(acc), [targeting]);
      }, []));
    });
    return winners;
  }

  function getStandardKeys() {
    return auctionManager.getStandardBidderAdServerTargeting() // in case using a custom standard key set
    .map(function (targeting) {
      return targeting.key;
    }).concat(TARGETING_KEYS).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]); // standard keys defined in the library.
  }
  /**
   * Merge custom adserverTargeting with same key name for same adUnitCode.
   * e.g: Appnexus defining custom keyvalue pair foo:bar and Rubicon defining custom keyvalue pair foo:baz will be merged to foo: ['bar','baz']
   *
   * @param {Object[]} acc Accumulator for reducer. It will store updated bidResponse objects
   * @param {Object} bid BidResponse
   * @param {number} index current index
   * @param {Array} arr original array
   */


  function mergeAdServerTargeting(acc, bid, index, arr) {
    function concatTargetingValue(key) {
      return function (currentBidElement) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(currentBidElement.adserverTargeting[key])) {
          currentBidElement.adserverTargeting[key] = [currentBidElement.adserverTargeting[key]];
        }

        currentBidElement.adserverTargeting[key] = currentBidElement.adserverTargeting[key].concat(bid.adserverTargeting[key]).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]);
        delete bid.adserverTargeting[key];
      };
    }

    function hasSameAdunitCodeAndKey(key) {
      return function (currentBidElement) {
        return currentBidElement.adUnitCode === bid.adUnitCode && currentBidElement.adserverTargeting[key];
      };
    }

    Object.keys(bid.adserverTargeting).filter(getCustomKeys()).forEach(function (key) {
      if (acc.length) {
        acc.filter(hasSameAdunitCodeAndKey(key)).forEach(concatTargetingValue(key));
      }
    });
    acc.push(bid);
    return acc;
  }

  function getCustomKeys() {
    var standardKeys = getStandardKeys().concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]);
    return function (key) {
      return standardKeys.indexOf(key) === -1;
    };
  }

  function truncateCustomKeys(bid) {
    return _defineProperty({}, bid.adUnitCode, Object.keys(bid.adserverTargeting) // Get only the non-standard keys of the losing bids, since we
    // don't want to override the standard keys of the winning bid.
    .filter(getCustomKeys()).map(function (key) {
      return _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    }));
  }
  /**
   * Get custom targeting key value pairs for bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   bids with custom targeting defined in bidderSettings
   */


  function getCustomBidTargeting(adUnitCodes, bidsReceived) {
    return bidsReceived.filter(function (bid) {
      return Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(adUnitCodes, bid.adUnitCode);
    }).map(function (bid) {
      return _extends({}, bid);
    }).reduce(mergeAdServerTargeting, []).map(truncateCustomKeys).filter(function (bid) {
      return bid;
    }); // removes empty elements in array;
  }
  /**
   * Get targeting key value pairs for non-winning bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   all non-winning bids targeting
   */


  function getBidLandscapeTargeting(adUnitCodes, bidsReceived) {
    var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]);
    var adUnitBidLimit = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('sendBidsControl.bidLimit');
    var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"], adUnitBidLimit);
    var allowSendAllBidsTargetingKeys = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.allowSendAllBidsTargetingKeys');
    var allowedSendAllBidTargeting = allowSendAllBidsTargetingKeys ? allowSendAllBidsTargetingKeys.map(function (key) {
      return CONSTANTS.TARGETING_KEYS[key];
    }) : standardKeys; // populate targeting keys for the remaining bids

    return bids.map(function (bid) {
      if (bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
        return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
          return typeof bid.adserverTargeting[key] !== 'undefined' && allowedSendAllBidTargeting.indexOf(key) !== -1;
        })));
      }
    }).filter(function (bid) {
      return bid;
    }); // removes empty elements in array
  }

  function getTargetingMap(bid, keys) {
    return keys.map(function (key) {
      return _defineProperty({}, "".concat(key, "_").concat(bid.bidderCode).substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    });
  }

  function getAdUnitTargeting(adUnitCodes) {
    function getTargetingObj(adUnit) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING);
    }

    function getTargetingValues(adUnit) {
      var aut = getTargetingObj(adUnit);
      return Object.keys(aut).map(function (key) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(aut[key])) aut[key] = aut[key].split(',').map(function (s) {
          return s.trim();
        });
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(aut[key])) aut[key] = [aut[key]];
        return _defineProperty({}, key, aut[key]);
      });
    }

    return auctionManager.getAdUnits().filter(function (adUnit) {
      return Object(__WEBPACK_IMPORTED_MODULE_8__polyfill_js__["d" /* includes */])(adUnitCodes, adUnit.code) && getTargetingObj(adUnit);
    }).map(function (adUnit) {
      return _defineProperty({}, adUnit.code, getTargetingValues(adUnit));
    });
  }

  targeting.isApntagDefined = function () {
    if (window.apntag && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(window.apntag.setKeywords)) {
      return true;
    }
  };

  return targeting;
}
var targeting = newTargeting(__WEBPACK_IMPORTED_MODULE_3__auctionManager_js__["a" /* auctionManager */]);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);

/**
 Required paramaters
 bidderCode,
 height,
 width,
 statusCode
 Optional paramaters
 adId,
 cpm,
 ad,
 adUrl,
 dealId,
 priceKeyString;
 */

function Bid(statusCode) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? 'client' : _ref$src,
      _ref$bidder = _ref.bidder,
      bidder = _ref$bidder === void 0 ? '' : _ref$bidder,
      bidId = _ref.bidId,
      transactionId = _ref.transactionId,
      auctionId = _ref.auctionId;

  var _bidSrc = src;

  var _statusCode = statusCode || 0;

  this.bidderCode = bidder;
  this.width = 0;
  this.height = 0;
  this.statusMessage = _getStatus();
  this.adId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
  this.requestId = bidId;
  this.transactionId = transactionId;
  this.auctionId = auctionId;
  this.mediaType = 'banner';
  this.source = _bidSrc;

  function _getStatus() {
    switch (_statusCode) {
      case 0:
        return 'Pending';

      case 1:
        return 'Bid available';

      case 2:
        return 'Bid returned empty or error response';

      case 3:
        return 'Bid timed out';
    }
  }

  this.getStatusCode = function () {
    return _statusCode;
  }; // returns the size of the bid creative. Concatenation of width and height by ‘x’.


  this.getSize = function () {
    return this.width + 'x' + this.height;
  };

  this.getIdentifiers = function () {
    return {
      src: this.source,
      bidder: this.bidderCode,
      bidId: this.requestId,
      transactionId: this.transactionId,
      auctionId: this.auctionId
    };
  };
} // Bid factory function.


function createBid(statusCode, identifiers) {
  return new Bid(statusCode, identifiers);
}

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return nativeAdapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NATIVE_TARGETING_KEYS; });
/* unused harmony export processNativeAdUnitParams */
/* harmony export (immutable) */ __webpack_exports__["b"] = decorateAdUnitsWithNativeParams;
/* unused harmony export nativeAdUnit */
/* unused harmony export nativeBidder */
/* unused harmony export hasNonNativeBidder */
/* harmony export (immutable) */ __webpack_exports__["h"] = nativeBidIsValid;
/* harmony export (immutable) */ __webpack_exports__["c"] = fireNativeTrackers;
/* harmony export (immutable) */ __webpack_exports__["f"] = getNativeTargeting;
/* harmony export (immutable) */ __webpack_exports__["e"] = getAssetMessage;
/* harmony export (immutable) */ __webpack_exports__["d"] = getAllAssetsMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__ = __webpack_require__(15);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CONSTANTS = __webpack_require__(5);

var nativeAdapters = [];
var NATIVE_TARGETING_KEYS = Object.keys(CONSTANTS.NATIVE_KEYS).map(function (key) {
  return CONSTANTS.NATIVE_KEYS[key];
});
var IMAGE = {
  image: {
    required: true
  },
  title: {
    required: true
  },
  sponsoredBy: {
    required: true
  },
  clickUrl: {
    required: true
  },
  body: {
    required: false
  },
  icon: {
    required: false
  }
};
var SUPPORTED_TYPES = {
  image: IMAGE
};
/**
 * Recieves nativeParams from an adUnit. If the params were not of type 'type',
 * passes them on directly. If they were of type 'type', translate
 * them into the predefined specific asset requests for that type of native ad.
 */

function processNativeAdUnitParams(params) {
  if (params && params.type && typeIsSupported(params.type)) {
    return SUPPORTED_TYPES[params.type];
  }

  return params;
}
function decorateAdUnitsWithNativeParams(adUnits) {
  adUnits.forEach(function (adUnit) {
    var nativeParams = adUnit.nativeParams || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'mediaTypes.native');

    if (nativeParams) {
      adUnit.nativeParams = processNativeAdUnitParams(nativeParams);
    }
  });
}
/**
 * Check if the native type specified in the adUnit is supported by Prebid.
 */

function typeIsSupported(type) {
  if (!(type && Object(__WEBPACK_IMPORTED_MODULE_1__polyfill_js__["d" /* includes */])(Object.keys(SUPPORTED_TYPES), type))) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("".concat(type, " nativeParam is not supported"));
    return false;
  }

  return true;
}
/**
 * Helper functions for working with native-enabled adUnits
 * TODO: abstract this and the video helper functions into general
 * adunit validation helper functions
 */


var nativeAdUnit = function nativeAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === 'native';
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'mediaTypes.native');
  return mediaType || mediaTypes;
};
var nativeBidder = function nativeBidder(bid) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__polyfill_js__["d" /* includes */])(nativeAdapters, bid.bidder);
};
var hasNonNativeBidder = function hasNonNativeBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !nativeBidder(bid);
  }).length;
};
/**
 * Validate that the native assets on this bid contain all assets that were
 * marked as required in the adUnit configuration.
 * @param {Bid} bid Native bid to validate
 * @param {BidRequest[]} bidRequests All bid requests for an auction
 * @return {Boolean} If object is valid
 */

function nativeBidIsValid(bid) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__["a" /* auctionManager */].index : _ref$index;

  // all native bid responses must define a landing page url
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.clickUrl')) {
    return false;
  }

  var requestedAssets = index.getAdUnit(bid).nativeParams;

  if (!requestedAssets) {
    return true;
  }

  var requiredAssets = Object.keys(requestedAssets).filter(function (key) {
    return requestedAssets[key].required;
  });
  var returnedAssets = Object.keys(bid['native']).filter(function (key) {
    return bid['native'][key];
  });
  return requiredAssets.every(function (asset) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__polyfill_js__["d" /* includes */])(returnedAssets, asset);
  });
}
/*
 * Native responses may have associated impression or click trackers.
 * This retrieves the appropriate tracker urls for the given ad object and
 * fires them. As a native creatives may be in a cross-origin frame, it may be
 * necessary to invoke this function via postMessage. secureCreatives is
 * configured to fire this function when it receives a `message` of 'Prebid Native'
 * and an `adId` with the value of the `bid.adId`. When a message is posted with
 * these parameters, impression trackers are fired. To fire click trackers, the
 * message should contain an `action` set to 'click'.
 *
 * // Native creative template example usage
 * <a href="%%CLICK_URL_UNESC%%%%PATTERN:hb_native_linkurl%%"
 *    target="_blank"
 *    onclick="fireTrackers('click')">
 *    %%PATTERN:hb_native_title%%
 * </a>
 *
 * <script>
 *   function fireTrackers(action) {
 *     var message = {message: 'Prebid Native', adId: '%%PATTERN:hb_adid%%'};
 *     if (action === 'click') {message.action = 'click';} // fires click trackers
 *     window.parent.postMessage(JSON.stringify(message), '*');
 *   }
 *   fireTrackers(); // fires impressions when creative is loaded
 * </script>
 */

function fireNativeTrackers(message, adObject) {
  var trackers;

  if (message.action === 'click') {
    trackers = adObject['native'] && adObject['native'].clickTrackers;
  } else {
    trackers = adObject['native'] && adObject['native'].impressionTrackers;

    if (adObject['native'] && adObject['native'].javascriptTrackers) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["insertHtmlIntoIframe"])(adObject['native'].javascriptTrackers);
    }
  }

  (trackers || []).forEach(__WEBPACK_IMPORTED_MODULE_0__utils_js__["triggerPixel"]);
  return message.action;
}
/**
 * Gets native targeting key-value pairs
 * @param {Object} bid
 * @return {Object} targeting
 */

function getNativeTargeting(bid) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__["a" /* auctionManager */].index : _ref2$index;

  var keyValues = {};
  var adUnit = index.getAdUnit(bid);

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'nativeParams.rendererUrl')) {
    bid['native']['rendererUrl'] = getAssetValue(adUnit.nativeParams['rendererUrl']);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'nativeParams.adTemplate')) {
    bid['native']['adTemplate'] = getAssetValue(adUnit.nativeParams['adTemplate']);
  }

  var globalSendTargetingKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.sendTargetingKeys") !== false;
  var nativeKeys = getNativeKeys(adUnit);

  var flatBidNativeKeys = _objectSpread(_objectSpread({}, bid.native), bid.native.ext);

  delete flatBidNativeKeys.ext;
  Object.keys(flatBidNativeKeys).forEach(function (asset) {
    var key = nativeKeys[asset];
    var value = getAssetValue(bid.native[asset]) || getAssetValue(Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, "native.ext.".concat(asset)));

    if (asset === 'adTemplate' || !key || !value) {
      return;
    }

    var sendPlaceholder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.".concat(asset, ".sendId"));

    if (typeof sendPlaceholder !== 'boolean') {
      sendPlaceholder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.ext.".concat(asset, ".sendId"));
    }

    if (sendPlaceholder) {
      var placeholder = "".concat(key, ":").concat(bid.adId);
      value = placeholder;
    }

    var assetSendTargetingKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.".concat(asset, ".sendTargetingKeys"));

    if (typeof assetSendTargetingKeys !== 'boolean') {
      assetSendTargetingKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.ext.".concat(asset, ".sendTargetingKeys"));
    }

    var sendTargeting = typeof assetSendTargetingKeys === 'boolean' ? assetSendTargetingKeys : globalSendTargetingKeys;

    if (sendTargeting) {
      keyValues[key] = value;
    }
  });
  return keyValues;
}
/**
 * Constructs a message object containing asset values for each of the
 * requested data keys.
 */

function getAssetMessage(data, adObject) {
  var message = {
    message: 'assetResponse',
    adId: data.adId,
    assets: []
  };

  if (adObject.native.hasOwnProperty('adTemplate')) {
    message.adTemplate = getAssetValue(adObject.native['adTemplate']);
  }

  if (adObject.native.hasOwnProperty('rendererUrl')) {
    message.rendererUrl = getAssetValue(adObject.native['rendererUrl']);
  }

  data.assets.forEach(function (asset) {
    var key = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getKeyByValue"])(CONSTANTS.NATIVE_KEYS, asset);
    var value = getAssetValue(adObject.native[key]);
    message.assets.push({
      key: key,
      value: value
    });
  });
  return message;
}
function getAllAssetsMessage(data, adObject) {
  var message = {
    message: 'assetResponse',
    adId: data.adId,
    assets: []
  };
  Object.keys(adObject.native).forEach(function (key, index) {
    if (key === 'adTemplate' && adObject.native[key]) {
      message.adTemplate = getAssetValue(adObject.native[key]);
    } else if (key === 'rendererUrl' && adObject.native[key]) {
      message.rendererUrl = getAssetValue(adObject.native[key]);
    } else if (key === 'ext') {
      Object.keys(adObject.native[key]).forEach(function (extKey) {
        if (adObject.native[key][extKey]) {
          var value = getAssetValue(adObject.native[key][extKey]);
          message.assets.push({
            key: extKey,
            value: value
          });
        }
      });
    } else if (adObject.native[key] && CONSTANTS.NATIVE_KEYS.hasOwnProperty(key)) {
      var value = getAssetValue(adObject.native[key]);
      message.assets.push({
        key: key,
        value: value
      });
    }
  });
  return message;
}
/**
 * Native assets can be a string or an object with a url prop. Returns the value
 * appropriate for sending in adserver targeting or placeholder replacement.
 */

function getAssetValue(value) {
  if (_typeof(value) === 'object' && value.url) {
    return value.url;
  }

  return value;
}

function getNativeKeys(adUnit) {
  var extraNativeKeys = {};

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'nativeParams.ext')) {
    Object.keys(adUnit.nativeParams.ext).forEach(function (extKey) {
      extraNativeKeys[extKey] = "hb_native_".concat(extKey);
    });
  }

  return _objectSpread(_objectSpread({}, CONSTANTS.NATIVE_KEYS), extraNativeKeys);
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPriceBucketString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isValidPriceConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var _defaultPrecision = 2;
var _lgPriceConfig = {
  'buckets': [{
    'max': 5,
    'increment': 0.5
  }]
};
var _mgPriceConfig = {
  'buckets': [{
    'max': 20,
    'increment': 0.1
  }]
};
var _hgPriceConfig = {
  'buckets': [{
    'max': 20,
    'increment': 0.01
  }]
};
var _densePriceConfig = {
  'buckets': [{
    'max': 3,
    'increment': 0.01
  }, {
    'max': 8,
    'increment': 0.05
  }, {
    'max': 20,
    'increment': 0.5
  }]
};
var _autoPriceConfig = {
  'buckets': [{
    'max': 5,
    'increment': 0.05
  }, {
    'max': 10,
    'increment': 0.1
  }, {
    'max': 20,
    'increment': 0.5
  }]
};

function getPriceBucketString(cpm, customConfig) {
  var granularityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var cpmFloat = parseFloat(cpm);

  if (isNaN(cpmFloat)) {
    cpmFloat = '';
  }

  return {
    low: cpmFloat === '' ? '' : getCpmStringValue(cpm, _lgPriceConfig, granularityMultiplier),
    med: cpmFloat === '' ? '' : getCpmStringValue(cpm, _mgPriceConfig, granularityMultiplier),
    high: cpmFloat === '' ? '' : getCpmStringValue(cpm, _hgPriceConfig, granularityMultiplier),
    auto: cpmFloat === '' ? '' : getCpmStringValue(cpm, _autoPriceConfig, granularityMultiplier),
    dense: cpmFloat === '' ? '' : getCpmStringValue(cpm, _densePriceConfig, granularityMultiplier),
    custom: cpmFloat === '' ? '' : getCpmStringValue(cpm, customConfig, granularityMultiplier)
  };
}

function getCpmStringValue(cpm, config, granularityMultiplier) {
  var cpmStr = '';

  if (!isValidPriceConfig(config)) {
    return cpmStr;
  }

  var cap = config.buckets.reduce(function (prev, curr) {
    if (prev.max > curr.max) {
      return prev;
    }

    return curr;
  }, {
    'max': 0
  });
  var bucketFloor = 0;
  var bucket = Object(__WEBPACK_IMPORTED_MODULE_0__polyfill_js__["b" /* find */])(config.buckets, function (bucket) {
    if (cpm > cap.max * granularityMultiplier) {
      // cpm exceeds cap, just return the cap.
      var precision = bucket.precision;

      if (typeof precision === 'undefined') {
        precision = _defaultPrecision;
      }

      cpmStr = (bucket.max * granularityMultiplier).toFixed(precision);
    } else if (cpm <= bucket.max * granularityMultiplier && cpm >= bucketFloor * granularityMultiplier) {
      bucket.min = bucketFloor;
      return bucket;
    } else {
      bucketFloor = bucket.max;
    }
  });

  if (bucket) {
    cpmStr = getCpmTarget(cpm, bucket, granularityMultiplier);
  }

  return cpmStr;
}

function isValidPriceConfig(config) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isEmpty"])(config) || !config.buckets || !Array.isArray(config.buckets)) {
    return false;
  }

  var isValid = true;
  config.buckets.forEach(function (bucket) {
    if (!bucket.max || !bucket.increment) {
      isValid = false;
    }
  });
  return isValid;
}

function getCpmTarget(cpm, bucket, granularityMultiplier) {
  var precision = typeof bucket.precision !== 'undefined' ? bucket.precision : _defaultPrecision;
  var increment = bucket.increment * granularityMultiplier;
  var bucketMin = bucket.min * granularityMultiplier; // start increments at the bucket min and then add bucket min back to arrive at the correct rounding
  // note - we're padding the values to avoid using decimals in the math prior to flooring
  // this is done as JS can return values slightly below the expected mark which would skew the price bucket target
  //   (eg 4.01 / 0.01 = 400.99999999999994)
  // min precison should be 2 to move decimal place over.

  var pow = Math.pow(10, precision + 2);
  var cpmToFloor = (cpm * pow - bucketMin * pow) / (increment * pow);
  var cpmTarget = Math.floor(cpmToFloor) * increment + bucketMin; // force to 10 decimal places to deal with imprecise decimal/binary conversions
  //    (for example 0.1 * 3 = 0.30000000000000004)

  cpmTarget = Number(cpmTarget.toFixed(10));
  return cpmTarget.toFixed(precision);
}



/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USERSYNC_DEFAULT_CONFIG */
/* unused harmony export newUserSync */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userSync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storageManager_js__ = __webpack_require__(8);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var USERSYNC_DEFAULT_CONFIG = {
  syncEnabled: true,
  filterSettings: {
    image: {
      bidders: '*',
      filter: 'include'
    }
  },
  syncsPerBidder: 5,
  syncDelay: 3000,
  auctionDelay: 0
}; // Set userSync default values

__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].setDefaults({
  'userSync': Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(USERSYNC_DEFAULT_CONFIG)
});
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__storageManager_js__["a" /* getCoreStorageManager */])('usersync');
/**
 * Factory function which creates a new UserSyncPool.
 *
 * @param {UserSyncDependencies} userSyncDependencies Configuration options and dependencies which the
 *   UserSync object needs in order to behave properly.
 */

function newUserSync(userSyncDependencies) {
  var publicApi = {}; // A queue of user syncs for each adapter
  // Let getDefaultQueue() set the defaults

  var queue = getDefaultQueue(); // Whether or not user syncs have been trigger on this page load for a specific bidder

  var hasFiredBidder = new Set(); // How many bids for each adapter

  var numAdapterBids = {}; // for now - default both to false in case filterSettings config is absent/misconfigured

  var permittedPixels = {
    image: true,
    iframe: false
  }; // Use what is in config by default

  var usConfig = userSyncDependencies.config; // Update if it's (re)set

  __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('userSync', function (conf) {
    // Added this logic for https://github.com/prebid/Prebid.js/issues/4864
    // if userSync.filterSettings does not contain image/all configs, merge in default image config to ensure image pixels are fired
    if (conf.userSync) {
      var fs = conf.userSync.filterSettings;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isPlainObject"])(fs)) {
        if (!fs.image && !fs.all) {
          conf.userSync.filterSettings.image = {
            bidders: '*',
            filter: 'include'
          };
        }
      }
    }

    usConfig = _extends(usConfig, conf.userSync);
  });
  /**
   * @function getDefaultQueue
   * @summary Returns the default empty queue
   * @private
   * @return {object} A queue with no syncs
   */

  function getDefaultQueue() {
    return {
      image: [],
      iframe: []
    };
  }
  /**
   * @function fireSyncs
   * @summary Trigger all user syncs in the queue
   * @private
   */


  function fireSyncs() {
    if (!usConfig.syncEnabled || !userSyncDependencies.browserSupportsCookies) {
      return;
    }

    try {
      // Iframe syncs
      loadIframes(); // Image pixels

      fireImagePixels();
    } catch (e) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Error firing user syncs', e);
    } // Reset the user sync queue


    queue = getDefaultQueue();
  }

  function forEachFire(queue, fn) {
    // Randomize the order of the pixels before firing
    // This is to avoid giving any bidder who has registered multiple syncs
    // any preferential treatment and balancing them out
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["shuffle"])(queue).forEach(function (sync) {
      fn(sync);
      hasFiredBidder.add(sync[0]);
    });
  }
  /**
   * @function fireImagePixels
   * @summary Loops through user sync pixels and fires each one
   * @private
   */


  function fireImagePixels() {
    if (!permittedPixels.image) {
      return;
    }

    forEachFire(queue.image, function (sync) {
      var _sync = _slicedToArray(sync, 2),
          bidderName = _sync[0],
          trackingPixelUrl = _sync[1];

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Invoking image pixel user sync for bidder: ".concat(bidderName)); // Create image object and add the src url

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["triggerPixel"])(trackingPixelUrl);
    });
  }
  /**
   * @function loadIframes
   * @summary Loops through iframe syncs and loads an iframe element into the page
   * @private
   */


  function loadIframes() {
    if (!permittedPixels.iframe) {
      return;
    }

    forEachFire(queue.iframe, function (sync) {
      var _sync2 = _slicedToArray(sync, 2),
          bidderName = _sync2[0],
          iframeUrl = _sync2[1];

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Invoking iframe user sync for bidder: ".concat(bidderName)); // Insert iframe into DOM

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["insertUserSyncIframe"])(iframeUrl); // for a bidder, if iframe sync is present then remove image pixel

      removeImagePixelsForBidder(queue, bidderName);
    });
  }

  function removeImagePixelsForBidder(queue, iframeSyncBidderName) {
    queue.image = queue.image.filter(function (imageSync) {
      var imageSyncBidderName = imageSync[0];
      return imageSyncBidderName !== iframeSyncBidderName;
    });
  }
  /**
   * @function incrementAdapterBids
   * @summary Increment the count of user syncs queue for the adapter
   * @private
   * @params {object} numAdapterBids The object contain counts for all adapters
   * @params {string} bidder The name of the bidder adding a sync
   * @returns {object} The updated version of numAdapterBids
   */


  function incrementAdapterBids(numAdapterBids, bidder) {
    if (!numAdapterBids[bidder]) {
      numAdapterBids[bidder] = 1;
    } else {
      numAdapterBids[bidder] += 1;
    }

    return numAdapterBids;
  }
  /**
   * @function registerSync
   * @summary Add sync for this bidder to a queue to be fired later
   * @public
   * @params {string} type The type of the sync including image, iframe
   * @params {string} bidder The name of the adapter. e.g. "rubicon"
   * @params {string} url Either the pixel url or iframe url depending on the type
     * @example <caption>Using Image Sync</caption>
   * // registerSync(type, adapter, pixelUrl)
   * userSync.registerSync('image', 'rubicon', 'http://example.com/pixel')
   */


  publicApi.registerSync = function (type, bidder, url) {
    if (hasFiredBidder.has(bidder)) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("already fired syncs for \"".concat(bidder, "\", ignoring registerSync call"));
    }

    if (!usConfig.syncEnabled || !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(queue[type])) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("User sync type \"".concat(type, "\" not supported"));
    }

    if (!bidder) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Bidder is required for registering sync");
    }

    if (usConfig.syncsPerBidder !== 0 && Number(numAdapterBids[bidder]) >= usConfig.syncsPerBidder) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Number of user syncs exceeded for \"".concat(bidder, "\""));
    }

    var canBidderRegisterSync = publicApi.canBidderRegisterSync(type, bidder);

    if (!canBidderRegisterSync) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Bidder \"".concat(bidder, "\" not permitted to register their \"").concat(type, "\" userSync pixels."));
    } // the bidder's pixel has passed all checks and is allowed to register


    queue[type].push([bidder, url]);
    numAdapterBids = incrementAdapterBids(numAdapterBids, bidder);
  };
  /**
   * @function shouldBidderBeBlocked
   * @summary Check filterSettings logic to determine if the bidder should be prevented from registering their userSync tracker
   * @private
   * @param {string} type The type of the sync; either image or iframe
   * @param {string} bidder The name of the adapter. e.g. "rubicon"
   * @returns {boolean} true => bidder is not allowed to register; false => bidder can register
    */


  function shouldBidderBeBlocked(type, bidder) {
    var filterConfig = usConfig.filterSettings; // apply the filter check if the config object is there (eg filterSettings.iframe exists) and if the config object is properly setup

    if (isFilterConfigValid(filterConfig, type)) {
      permittedPixels[type] = true;
      var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
      var biddersToFilter = activeConfig.bidders === '*' ? [bidder] : activeConfig.bidders;
      var filterType = activeConfig.filter || 'include'; // set default if undefined
      // return true if the bidder is either: not part of the include (ie outside the whitelist) or part of the exclude (ie inside the blacklist)

      var checkForFiltering = {
        'include': function include(bidders, bidder) {
          return !Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(bidders, bidder);
        },
        'exclude': function exclude(bidders, bidder) {
          return Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(bidders, bidder);
        }
      };
      return checkForFiltering[filterType](biddersToFilter, bidder);
    }

    return !permittedPixels[type];
  }
  /**
   * @function isFilterConfigValid
   * @summary Check if the filterSettings object in the userSync config is setup properly
   * @private
   * @param {object} filterConfig sub-config object taken from filterSettings
   * @param {string} type The type of the sync; either image or iframe
   * @returns {boolean} true => config is setup correctly, false => setup incorrectly or filterConfig[type] is not present
   */


  function isFilterConfigValid(filterConfig, type) {
    if (filterConfig.all && filterConfig[type]) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Detected presence of the \"filterSettings.all\" and \"filterSettings.".concat(type, "\" in userSync config.  You cannot mix \"all\" with \"iframe/image\" configs; they are mutually exclusive."));
      return false;
    }

    var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
    var activeConfigName = filterConfig.all ? 'all' : type; // if current pixel type isn't part of the config's logic, skip rest of the config checks...
    // we return false to skip subsequent filter checks in shouldBidderBeBlocked() function

    if (!activeConfig) {
      return false;
    }

    var filterField = activeConfig.filter;
    var biddersField = activeConfig.bidders;

    if (filterField && filterField !== 'include' && filterField !== 'exclude') {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("UserSync \"filterSettings.".concat(activeConfigName, ".filter\" setting '").concat(filterField, "' is not a valid option; use either 'include' or 'exclude'."));
      return false;
    }

    if (biddersField !== '*' && !(Array.isArray(biddersField) && biddersField.length > 0 && biddersField.every(function (bidderInList) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(bidderInList) && bidderInList !== '*';
    }))) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Detected an invalid setup in userSync \"filterSettings.".concat(activeConfigName, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."));
      return false;
    }

    return true;
  }
  /**
   * @function syncUsers
   * @summary Trigger all the user syncs based on publisher-defined timeout
   * @public
   * @params {int} timeout The delay in ms before syncing data - default 0
   */


  publicApi.syncUsers = function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (timeout) {
      return setTimeout(fireSyncs, Number(timeout));
    }

    fireSyncs();
  };
  /**
   * @function triggerUserSyncs
   * @summary A `syncUsers` wrapper for determining if enableOverride has been turned on
   * @public
   */


  publicApi.triggerUserSyncs = function () {
    if (usConfig.enableOverride) {
      publicApi.syncUsers();
    }
  };

  publicApi.canBidderRegisterSync = function (type, bidder) {
    if (usConfig.filterSettings) {
      if (shouldBidderBeBlocked(type, bidder)) {
        return false;
      }
    }

    return true;
  };

  return publicApi;
}
var browserSupportsCookies = !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isSafariBrowser"])() && storage.cookiesAreEnabled();
var userSync = newUserSync({
  config: __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('userSync'),
  browserSupportsCookies: browserSupportsCookies
});
/**
 * @typedef {Object} UserSyncDependencies
 *
 * @property {UserSyncConfig} config
 * @property {boolean} browserSupportsCookies True if the current browser supports cookies, and false otherwise.
 */

/**
 * @typedef {Object} UserSyncConfig
 *
 * @property {boolean} enableOverride
 * @property {boolean} syncEnabled
 * @property {int} syncsPerBidder
 * @property {string[]} enabledBidders
 * @property {Object} filterSettings
 */

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerVideoSupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var prebid = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__["a" /* getGlobal */])();
/**
 * This file defines the plugin points in prebid-core for AdServer-specific functionality.
 *
 * Its main job is to expose functions for AdServer modules to append functionality to the Prebid public API.
 * For a given Ad Server with name "adServerName", these functions will only change the API in the
 * $$PREBID_GLOBAL$$.adServers[adServerName] namespace.
 */

/**
 * @typedef {Object} CachedVideoBid
 *
 * @property {string} videoCacheId The ID which can be used to retrieve this video from prebid-server.
 *   This is the same ID given to the callback in the videoCache's store function.
 */

/**
 * @function VideoAdUrlBuilder
 *
 * @param {CachedVideoBid} bid The winning Bid which the ad server should show, assuming it beats out
 *   the competition.
 *
 * @param {Object} options Options required by the Ad Server to make a valid AdServer URL.
 *   This object will have different properties depending on the specific ad server supported.
 *   For more information, see the docs inside the ad server module you're supporting.
 *
 * @return {string} A URL which can be passed into the Video player to play an ad.
 */

/**
 * @typedef {Object} VideoSupport
 *
 * @function {VideoAdUrlBuilder} buildVideoAdUrl
 */

/**
 * Enable video support for the Ad Server.
 *
 * @property {string} name The identifying name for this adserver.
 * @property {VideoSupport} videoSupport An object with the functions needed to support video in Prebid.
 */

function registerVideoSupport(name, videoSupport) {
  prebid.adServers = prebid.adServers || {};
  prebid.adServers[name] = prebid.adServers[name] || {};
  Object.keys(videoSupport).forEach(function (key) {
    if (prebid.adServers[name][key]) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("Attempting to add an already registered function property ".concat(key, " for AdServer ").concat(name, "."));
      return;
    }

    prebid.adServers[name][key] = videoSupport[key];
  });
}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RANDOM; });
/* unused harmony export newConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cpmBucketManager_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(0);
var _excluded = ["fpd"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Module for getting and setting Prebid configuration.
*/

/**
 * @typedef {Object} MediaTypePriceGranularity
 *
 * @property {(string|Object)} [banner]
 * @property {(string|Object)} [native]
 * @property {(string|Object)} [video]
 * @property {(string|Object)} [video-instream]
 * @property {(string|Object)} [video-outstream]
 */




var CONSTANTS = __webpack_require__(5);

var DEFAULT_DEBUG = Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["getParameterByName"])(CONSTANTS.DEBUG_MODE).toUpperCase() === 'TRUE';
var DEFAULT_BIDDER_TIMEOUT = 3000;
var DEFAULT_PUBLISHER_DOMAIN = window.location.origin;
var DEFAULT_ENABLE_SEND_ALL_BIDS = true;
var DEFAULT_DISABLE_AJAX_TIMEOUT = false;
var DEFAULT_BID_CACHE = false;
var DEFAULT_DEVICE_ACCESS = true;
var DEFAULT_MAX_NESTED_IFRAMES = 10;
var DEFAULT_TIMEOUTBUFFER = 400;
var RANDOM = 'random';
var FIXED = 'fixed';
var VALID_ORDERS = {};
VALID_ORDERS[RANDOM] = true;
VALID_ORDERS[FIXED] = true;
var DEFAULT_BIDDER_SEQUENCE = RANDOM;
var GRANULARITY_OPTIONS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  AUTO: 'auto',
  DENSE: 'dense',
  CUSTOM: 'custom'
};
var ALL_TOPICS = '*';
/**
 * @typedef {object} PrebidConfig
 *
 * @property {string} cache.url Set a url if we should use prebid-cache to store video bids before adding
 *   bids to the auction. **NOTE** This must be set if you want to use the dfpAdServerVideo module.
 */

function newConfig() {
  var listeners = [];
  var defaults;
  var config;
  var bidderConfig;
  var currBidder = null;

  function resetConfig() {
    defaults = {};
    var newConfig = {
      // `debug` is equivalent to legacy `pbjs.logging` property
      _debug: DEFAULT_DEBUG,

      get debug() {
        return this._debug;
      },

      set debug(val) {
        this._debug = val;
      },

      // default timeout for all bids
      _bidderTimeout: DEFAULT_BIDDER_TIMEOUT,

      get bidderTimeout() {
        return this._bidderTimeout;
      },

      set bidderTimeout(val) {
        this._bidderTimeout = val;
      },

      // domain where prebid is running for cross domain iframe communication
      _publisherDomain: DEFAULT_PUBLISHER_DOMAIN,

      get publisherDomain() {
        return this._publisherDomain;
      },

      set publisherDomain(val) {
        this._publisherDomain = val;
      },

      // calls existing function which may be moved after deprecation
      _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,

      set priceGranularity(val) {
        if (validatePriceGranularity(val)) {
          if (typeof val === 'string') {
            this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(val)) {
            this._customPriceBucket = val;
            this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logMessage"])('Using custom price granularity');
          }
        }
      },

      get priceGranularity() {
        return this._priceGranularity;
      },

      _customPriceBucket: {},

      get customPriceBucket() {
        return this._customPriceBucket;
      },

      /**
       * mediaTypePriceGranularity
       * @type {MediaTypePriceGranularity}
       */
      _mediaTypePriceGranularity: {},

      get mediaTypePriceGranularity() {
        return this._mediaTypePriceGranularity;
      },

      set mediaTypePriceGranularity(val) {
        var _this = this;

        this._mediaTypePriceGranularity = Object.keys(val).reduce(function (aggregate, item) {
          if (validatePriceGranularity(val[item])) {
            if (typeof val === 'string') {
              aggregate[item] = hasGranularity(val[item]) ? val[item] : _this._priceGranularity;
            } else if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(val)) {
              aggregate[item] = val[item];
              Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logMessage"])("Using custom price granularity for ".concat(item));
            }
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])("Invalid price granularity for media type: ".concat(item));
          }

          return aggregate;
        }, {});
      },

      _sendAllBids: DEFAULT_ENABLE_SEND_ALL_BIDS,

      get enableSendAllBids() {
        return this._sendAllBids;
      },

      set enableSendAllBids(val) {
        this._sendAllBids = val;
      },

      _useBidCache: DEFAULT_BID_CACHE,

      get useBidCache() {
        return this._useBidCache;
      },

      set useBidCache(val) {
        this._useBidCache = val;
      },

      /**
       * deviceAccess set to false will disable setCookie, getCookie, hasLocalStorage
       * @type {boolean}
       */
      _deviceAccess: DEFAULT_DEVICE_ACCESS,

      get deviceAccess() {
        return this._deviceAccess;
      },

      set deviceAccess(val) {
        this._deviceAccess = val;
      },

      _bidderSequence: DEFAULT_BIDDER_SEQUENCE,

      get bidderSequence() {
        return this._bidderSequence;
      },

      set bidderSequence(val) {
        if (VALID_ORDERS[val]) {
          this._bidderSequence = val;
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])("Invalid order: ".concat(val, ". Bidder Sequence was not set."));
        }
      },

      // timeout buffer to adjust for bidder CDN latency
      _timeoutBuffer: DEFAULT_TIMEOUTBUFFER,

      get timeoutBuffer() {
        return this._timeoutBuffer;
      },

      set timeoutBuffer(val) {
        this._timeoutBuffer = val;
      },

      _disableAjaxTimeout: DEFAULT_DISABLE_AJAX_TIMEOUT,

      get disableAjaxTimeout() {
        return this._disableAjaxTimeout;
      },

      set disableAjaxTimeout(val) {
        this._disableAjaxTimeout = val;
      },

      // default max nested iframes for referer detection
      _maxNestedIframes: DEFAULT_MAX_NESTED_IFRAMES,

      get maxNestedIframes() {
        return this._maxNestedIframes;
      },

      set maxNestedIframes(val) {
        this._maxNestedIframes = val;
      },

      _auctionOptions: {},

      get auctionOptions() {
        return this._auctionOptions;
      },

      set auctionOptions(val) {
        if (validateauctionOptions(val)) {
          this._auctionOptions = val;
        }
      }

    };

    if (config) {
      callSubscribers(Object.keys(config).reduce(function (memo, topic) {
        if (config[topic] !== newConfig[topic]) {
          memo[topic] = newConfig[topic] || {};
        }

        return memo;
      }, {}));
    }

    config = newConfig;
    bidderConfig = {};

    function hasGranularity(val) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__polyfill_js__["b" /* find */])(Object.keys(GRANULARITY_OPTIONS), function (option) {
        return val === GRANULARITY_OPTIONS[option];
      });
    }

    function validatePriceGranularity(val) {
      if (!val) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])('Prebid Error: no value passed to `setPriceGranularity()`');
        return false;
      }

      if (typeof val === 'string') {
        if (!hasGranularity(val)) {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(val)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__cpmBucketManager_js__["b" /* isValidPriceConfig */])(val)) {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])('Invalid custom price value passed to `setPriceGranularity()`');
          return false;
        }
      }

      return true;
    }

    function validateauctionOptions(val) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(val)) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])('Auction Options must be an object');
        return false;
      }

      for (var _i = 0, _Object$keys = Object.keys(val); _i < _Object$keys.length; _i++) {
        var k = _Object$keys[_i];

        if (k !== 'secondaryBidders' && k !== 'suppressStaleRender') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])("Auction Options given an incorrect param: ".concat(k));
          return false;
        }

        if (k === 'secondaryBidders') {
          if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isArray"])(val[k])) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])("Auction Options ".concat(k, " must be of type Array"));
            return false;
          } else if (!val[k].every(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isStr"])) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])("Auction Options ".concat(k, " must be only string"));
            return false;
          }
        } else if (k === 'suppressStaleRender') {
          if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isBoolean"])(val[k])) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])("Auction Options ".concat(k, " must be of type boolean"));
            return false;
          }
        }
      }

      return true;
    }
  }
  /**
   * Returns base config with bidder overrides (if there is currently a bidder)
   * @private
   */


  function _getConfig() {
    if (currBidder && bidderConfig && Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(bidderConfig[currBidder])) {
      var currBidderConfig = bidderConfig[currBidder];
      var configTopicSet = new Set(Object.keys(config).concat(Object.keys(currBidderConfig)));
      return Object(__WEBPACK_IMPORTED_MODULE_1__polyfill_js__["a" /* arrayFrom */])(configTopicSet).reduce(function (memo, topic) {
        if (typeof currBidderConfig[topic] === 'undefined') {
          memo[topic] = config[topic];
        } else if (typeof config[topic] === 'undefined') {
          memo[topic] = currBidderConfig[topic];
        } else {
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(currBidderConfig[topic])) {
            memo[topic] = Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])({}, config[topic], currBidderConfig[topic]);
          } else {
            memo[topic] = currBidderConfig[topic];
          }
        }

        return memo;
      }, {});
    }

    return _extends({}, config);
  }
  /*
   * Returns the configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   *
   * The object returned is a deepClone of the `config` property.
   */


  function readConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      var configClone = Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["deepClone"])(_getConfig());
      return option ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["deepAccess"])(configClone, option) : configClone;
    }

    return subscribe.apply(void 0, arguments);
  }
  /*
   * Returns configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   */


  function getConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      return option ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["deepAccess"])(_getConfig(), option) : _getConfig();
    }

    return subscribe.apply(void 0, arguments);
  }
  /**
   * Internal API for modules (such as prebid-server) that might need access to all bidder config
   */


  function getBidderConfig() {
    return bidderConfig;
  }
  /**
   * Returns backwards compatible FPD data for modules
   */


  function getLegacyFpd(obj) {
    if (_typeof(obj) !== 'object') return;
    var duplicate = {};
    Object.keys(obj).forEach(function (type) {
      var prop = type === 'site' ? 'context' : type;
      duplicate[prop] = prop === 'context' || prop === 'user' ? Object.keys(obj[type]).filter(function (key) {
        return key !== 'data';
      }).reduce(function (result, key) {
        if (key === 'ext') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(result, obj[type][key]);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(result, _defineProperty({}, key, obj[type][key]));
        }

        return result;
      }, {}) : obj[type];
    });
    return duplicate;
  }
  /**
   * Returns backwards compatible FPD data for modules
   */


  function getLegacyImpFpd(obj) {
    if (_typeof(obj) !== 'object') return;
    var duplicate = {};

    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["deepAccess"])(obj, 'ext.data')) {
      Object.keys(obj.ext.data).forEach(function (key) {
        if (key === 'pbadslot') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(duplicate, {
            context: {
              pbAdSlot: obj.ext.data[key]
            }
          });
        } else if (key === 'adserver') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(duplicate, {
            context: {
              adServer: obj.ext.data[key]
            }
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(duplicate, {
            context: {
              data: _defineProperty({}, key, obj.ext.data[key])
            }
          });
        }
      });
    }

    return duplicate;
  }
  /**
   * Copy FPD over to OpenRTB standard format in config
   */


  function convertFpd(opt) {
    var duplicate = {};
    Object.keys(opt).forEach(function (type) {
      var prop = type === 'context' ? 'site' : type;
      duplicate[prop] = prop === 'site' || prop === 'user' ? Object.keys(opt[type]).reduce(function (result, key) {
        if (key === 'data') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(result, {
            ext: {
              data: opt[type][key]
            }
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(result, _defineProperty({}, key, opt[type][key]));
        }

        return result;
      }, {}) : opt[type];
    });
    return duplicate;
  }
  /**
   * Copy Impression FPD over to OpenRTB standard format in config
   * Only accepts bid level context.data values with pbAdSlot and adServer exceptions
   */


  function convertImpFpd(opt) {
    var duplicate = {};
    Object.keys(opt).filter(function (prop) {
      return prop === 'context';
    }).forEach(function (type) {
      Object.keys(opt[type]).forEach(function (key) {
        if (key === 'data') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(duplicate, {
            ext: {
              data: opt[type][key]
            }
          });
        } else {
          if (_typeof(opt[type][key]) === 'object' && !Array.isArray(opt[type][key])) {
            Object.keys(opt[type][key]).forEach(function (data) {
              Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(duplicate, {
                ext: {
                  data: _defineProperty({}, key.toLowerCase(), _defineProperty({}, data.toLowerCase(), opt[type][key][data]))
                }
              });
            });
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(duplicate, {
              ext: {
                data: _defineProperty({}, key.toLowerCase(), opt[type][key])
              }
            });
          }
        }
      });
    });
    return duplicate;
  }
  /**
   * Copy FPD over to OpenRTB standard format in each adunit
   */


  function convertAdUnitFpd(arr) {
    var convert = [];
    arr.forEach(function (adunit) {
      if (adunit.fpd) {
        adunit['ortb2Imp'] ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(adunit['ortb2Imp'], convertImpFpd(adunit.fpd)) : adunit['ortb2Imp'] = convertImpFpd(adunit.fpd);
        convert.push(function (_ref) {
          var fpd = _ref.fpd,
              duplicate = _objectWithoutProperties(_ref, _excluded);

          return duplicate;
        }(adunit));
      } else {
        convert.push(adunit);
      }
    });
    return convert;
  }
  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */


  function setConfig(options) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(options)) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])('setConfig options must be an object');
      return;
    }

    var topics = Object.keys(options);
    var topicalConfig = {};
    topics.forEach(function (topic) {
      var prop = topic === 'fpd' ? 'ortb2' : topic;
      var option = topic === 'fpd' ? convertFpd(options[topic]) : options[topic];

      if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(defaults[prop]) && Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(option)) {
        option = _extends({}, defaults[prop], option);
      }

      topicalConfig[prop] = config[prop] = option;
    });
    callSubscribers(topicalConfig);
  }
  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */


  function setDefaults(options) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(defaults)) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])('defaults must be an object');
      return;
    }

    _extends(defaults, options); // Add default values to config as well


    _extends(config, options);
  }
  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * Returns an `unsubscribe` function for removing the subscriber from the
   * set of listeners
   *
   * Example use:
   * // subscribe to all configuration changes
   * subscribe((config) => console.log('config set:', config));
   *
   * // subscribe to only 'logging' changes
   * subscribe('logging', (config) => console.log('logging set:', config));
   *
   * // unsubscribe
   * const unsubscribe = subscribe(...);
   * unsubscribe(); // no longer listening
   */


  function subscribe(topic, listener) {
    var callback = listener;

    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
    }

    if (typeof callback !== 'function') {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])('listener must be a function');
      return;
    }

    var nl = {
      topic: topic,
      callback: callback
    };
    listeners.push(nl); // save and call this function to remove the listener

    return function unsubscribe() {
      listeners.splice(listeners.indexOf(nl), 1);
    };
  }
  /*
   * Calls listeners that were added by the `subscribe` function
   */


  function callSubscribers(options) {
    var TOPICS = Object.keys(options); // call subscribers of a specific topic, passing only that configuration

    listeners.filter(function (listener) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__polyfill_js__["d" /* includes */])(TOPICS, listener.topic);
    }).forEach(function (listener) {
      listener.callback(_defineProperty({}, listener.topic, options[listener.topic]));
    }); // call subscribers that didn't give a topic, passing everything that was set

    listeners.filter(function (listener) {
      return listener.topic === ALL_TOPICS;
    }).forEach(function (listener) {
      return listener.callback(options);
    });
  }

  function setBidderConfig(config) {
    var mergeFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    try {
      check(config);
      config.bidders.forEach(function (bidder) {
        if (!bidderConfig[bidder]) {
          bidderConfig[bidder] = {};
        }

        Object.keys(config.config).forEach(function (topic) {
          var prop = topic === 'fpd' ? 'ortb2' : topic;
          var option = topic === 'fpd' ? convertFpd(config.config[topic]) : config.config[topic];

          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(option)) {
            var func = mergeFlag ? __WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"] : Object.assign;
            bidderConfig[bidder][prop] = func({}, bidderConfig[bidder][prop] || {}, option);
          } else {
            bidderConfig[bidder][prop] = option;
          }
        });
      });
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])(e);
    }

    function check(obj) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(obj)) {
        throw 'setBidderConfig bidder options must be an object';
      }

      if (!(Array.isArray(obj.bidders) && obj.bidders.length)) {
        throw 'setBidderConfig bidder options must contain a bidders list with at least 1 bidder';
      }

      if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(obj.config)) {
        throw 'setBidderConfig bidder options must contain a config object';
      }
    }
  }

  function mergeConfig(obj) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["isPlainObject"])(obj)) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logError"])('mergeConfig input must be an object');
      return;
    }

    var mergedConfig = Object.keys(obj).reduce(function (accum, key) {
      var prevConf = _getConfig(key)[key] || {};
      accum[key] = Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["mergeDeep"])(prevConf, obj[key]);
      return accum;
    }, {});
    setConfig(_objectSpread({}, mergedConfig));
    return mergedConfig;
  }

  function mergeBidderConfig(obj) {
    return setBidderConfig(obj, true);
  }
  /**
   * Internal functions for core to execute some synchronous code while having an active bidder set.
   */


  function runWithBidder(bidder, fn) {
    currBidder = bidder;

    try {
      return fn();
    } finally {
      resetBidder();
    }
  }

  function callbackWithBidder(bidder) {
    return function (cb) {
      return function () {
        if (typeof cb === 'function') {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return runWithBidder(bidder, __WEBPACK_IMPORTED_MODULE_2__utils_js__["bind"].call.apply(__WEBPACK_IMPORTED_MODULE_2__utils_js__["bind"], [cb, this].concat(args)));
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logWarn"])('config.callbackWithBidder callback is not a function');
        }
      };
    };
  }

  function getCurrentBidder() {
    return currBidder;
  }

  function resetBidder() {
    currBidder = null;
  }

  resetConfig();
  return {
    getCurrentBidder: getCurrentBidder,
    resetBidder: resetBidder,
    getConfig: getConfig,
    readConfig: readConfig,
    setConfig: setConfig,
    mergeConfig: mergeConfig,
    setDefaults: setDefaults,
    resetConfig: resetConfig,
    runWithBidder: runWithBidder,
    callbackWithBidder: callbackWithBidder,
    setBidderConfig: setBidderConfig,
    getBidderConfig: getBidderConfig,
    mergeBidderConfig: mergeBidderConfig,
    convertAdUnitFpd: convertAdUnitFpd,
    getLegacyFpd: getLegacyFpd,
    getLegacyImpFpd: getLegacyImpFpd
  };
}
var config = newConfig();

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adUnitSetupChecks", function() { return adUnitSetupChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAdUnitSetup", function() { return checkAdUnitSetup; });
/* harmony export (immutable) */ __webpack_exports__["executeCallbacks"] = executeCallbacks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secureCreatives_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userSync_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__targeting_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__debugging_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adUnits_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Renderer_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bidfactory_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__storageManager_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__adRendering_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__adapterManager_js__ = __webpack_require__(10);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module pbjs */
















var pbjs = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__["a" /* getGlobal */])();

var CONSTANTS = __webpack_require__(5);

var adapterManager = __webpack_require__(10).default;

var events = __webpack_require__(11);

var triggerUserSyncs = __WEBPACK_IMPORTED_MODULE_3__userSync_js__["a" /* userSync */].triggerUserSyncs;
/* private variables */

var _CONSTANTS$EVENTS = CONSTANTS.EVENTS,
    ADD_AD_UNITS = _CONSTANTS$EVENTS.ADD_AD_UNITS,
    BID_WON = _CONSTANTS$EVENTS.BID_WON,
    REQUEST_BIDS = _CONSTANTS$EVENTS.REQUEST_BIDS,
    SET_TARGETING = _CONSTANTS$EVENTS.SET_TARGETING,
    STALE_RENDER = _CONSTANTS$EVENTS.STALE_RENDER;
var _CONSTANTS$AD_RENDER_ = CONSTANTS.AD_RENDER_FAILED_REASON,
    PREVENT_WRITING_ON_MAIN_DOCUMENT = _CONSTANTS$AD_RENDER_.PREVENT_WRITING_ON_MAIN_DOCUMENT,
    NO_AD = _CONSTANTS$AD_RENDER_.NO_AD,
    EXCEPTION = _CONSTANTS$AD_RENDER_.EXCEPTION,
    CANNOT_FIND_AD = _CONSTANTS$AD_RENDER_.CANNOT_FIND_AD,
    MISSING_DOC_OR_ADID = _CONSTANTS$AD_RENDER_.MISSING_DOC_OR_ADID;
var eventValidators = {
  bidWon: checkDefinedPlacement
}; // initialize existing debugging sessions if present

Object(__WEBPACK_IMPORTED_MODULE_8__debugging_js__["d" /* sessionLoader */])();
/* Public vars */

pbjs.bidderSettings = pbjs.bidderSettings || {}; // let the world know we are loaded

pbjs.libLoaded = true; // version auto generated from build

pbjs.version = "v6.15.0-pre";
Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Prebid.js v6.15.0-pre loaded");
pbjs.installedModules = pbjs.installedModules || []; // create adUnit array

pbjs.adUnits = pbjs.adUnits || []; // Allow publishers who enable user sync override to trigger their sync

pbjs.triggerUserSyncs = triggerUserSyncs;

function checkDefinedPlacement(id) {
  var adUnitCodes = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsRequested().map(function (bidSet) {
    return bidSet.bids.map(function (bid) {
      return bid.adUnitCode;
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_1__utils_js__["flatten"]).filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["uniques"]);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["contains"])(adUnitCodes, id)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('The "' + id + '" placement is not defined.');
    return;
  }

  return true;
}

function setRenderSize(doc, width, height) {
  if (doc.defaultView && doc.defaultView.frameElement) {
    doc.defaultView.frameElement.width = width;
    doc.defaultView.frameElement.height = height;
  }
}

function validateSizes(sizes, targLength) {
  var cleanSizes = [];

  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(sizes) && (targLength ? sizes.length === targLength : sizes.length > 0)) {
    // check if an array of arrays or array of numbers
    if (sizes.every(function (sz) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArrayOfNums"])(sz, 2);
    })) {
      cleanSizes = sizes;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArrayOfNums"])(sizes, 2)) {
      cleanSizes.push(sizes);
    }
  }

  return cleanSizes;
}

function validateBannerMediaType(adUnit) {
  var validatedAdUnit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(adUnit);
  var banner = validatedAdUnit.mediaTypes.banner;
  var bannerSizes = validateSizes(banner.sizes);

  if (bannerSizes.length > 0) {
    banner.sizes = bannerSizes; // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.banner.sizes

    validatedAdUnit.sizes = bannerSizes;
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.');
    delete validatedAdUnit.mediaTypes.banner;
  }

  return validatedAdUnit;
}

function validateVideoMediaType(adUnit) {
  var validatedAdUnit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(adUnit);
  var video = validatedAdUnit.mediaTypes.video;

  if (video.playerSize) {
    var tarPlayerSizeLen = typeof video.playerSize[0] === 'number' ? 2 : 1;
    var videoSizes = validateSizes(video.playerSize, tarPlayerSizeLen);

    if (videoSizes.length > 0) {
      if (tarPlayerSizeLen === 2) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.');
      }

      video.playerSize = videoSizes; // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.video.playerSize

      validatedAdUnit.sizes = videoSizes;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.');
      delete validatedAdUnit.mediaTypes.video.playerSize;
    }
  }

  return validatedAdUnit;
}

function validateNativeMediaType(adUnit) {
  var validatedAdUnit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(adUnit);
  var native = validatedAdUnit.mediaTypes.native;

  if (native.image && native.image.sizes && !Array.isArray(native.image.sizes)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.');
    delete validatedAdUnit.mediaTypes.native.image.sizes;
  }

  if (native.image && native.image.aspect_ratios && !Array.isArray(native.image.aspect_ratios)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.');
    delete validatedAdUnit.mediaTypes.native.image.aspect_ratios;
  }

  if (native.icon && native.icon.sizes && !Array.isArray(native.icon.sizes)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.');
    delete validatedAdUnit.mediaTypes.native.icon.sizes;
  }

  return validatedAdUnit;
}

function validateAdUnitPos(adUnit, mediaType) {
  var pos = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, "mediaTypes.".concat(mediaType, ".pos"));

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isNumber"])(pos) || isNaN(pos) || !isFinite(pos)) {
    var warning = "Value of property 'pos' on ad unit ".concat(adUnit.code, " should be of type: Number");
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])(warning);
    events.emit(CONSTANTS.EVENTS.AUCTION_DEBUG, {
      type: 'WARNING',
      arguments: warning
    });
    delete adUnit.mediaTypes[mediaType].pos;
  }

  return adUnit;
}

var adUnitSetupChecks = {
  validateBannerMediaType: validateBannerMediaType,
  validateVideoMediaType: validateVideoMediaType,
  validateNativeMediaType: validateNativeMediaType,
  validateSizes: validateSizes
};
var checkAdUnitSetup = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (adUnits) {
  var validatedAdUnits = [];
  adUnits.forEach(function (adUnit) {
    var mediaTypes = adUnit.mediaTypes;
    var bids = adUnit.bids;
    var validatedBanner, validatedVideo, validatedNative;

    if (!bids || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(bids)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("Detected adUnit.code '".concat(adUnit.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
      return;
    }

    if (!mediaTypes || Object.keys(mediaTypes).length === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("Detected adUnit.code '".concat(adUnit.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));
      return;
    }

    if (mediaTypes.banner) {
      validatedBanner = validateBannerMediaType(adUnit);
      if (mediaTypes.banner.hasOwnProperty('pos')) validatedBanner = validateAdUnitPos(validatedBanner, 'banner');
    }

    if (mediaTypes.video) {
      validatedVideo = validatedBanner ? validateVideoMediaType(validatedBanner) : validateVideoMediaType(adUnit);
      if (mediaTypes.video.hasOwnProperty('pos')) validatedVideo = validateAdUnitPos(validatedVideo, 'video');
    }

    if (mediaTypes.native) {
      validatedNative = validatedVideo ? validateNativeMediaType(validatedVideo) : validatedBanner ? validateNativeMediaType(validatedBanner) : validateNativeMediaType(adUnit);
    }

    var validatedAdUnit = _extends({}, validatedBanner, validatedVideo, validatedNative);

    validatedAdUnits.push(validatedAdUnit);
  });
  return validatedAdUnits;
}, 'checkAdUnitSetup'); /// ///////////////////////////////
//                              //
//    Start Public APIs         //
//                              //
/// ///////////////////////////////

/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param  {string} [adunitCode] adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCodeStr
 * @return {Array}  returnObj return bids array
 */

pbjs.getAdserverTargetingForAdUnitCodeStr = function (adunitCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments); // call to retrieve bids array

  if (adunitCode) {
    var res = pbjs.getAdserverTargetingForAdUnitCode(adunitCode);
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["transformAdServerTargetingObj"])(res);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
  }
};
/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getHighestUnusedBidResponseForAdUnitCode
 * @returns {Object}  returnObj return bid
 */


pbjs.getHighestUnusedBidResponseForAdUnitCode = function (adunitCode) {
  if (adunitCode) {
    var bid = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAllBidsForAdUnitCode(adunitCode).filter(__WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* filters */].isUnusedBid).filter(__WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* filters */].isBidNotExpired);
    return bid.length ? bid.reduce(__WEBPACK_IMPORTED_MODULE_1__utils_js__["getHighestCpm"]) : {};
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode');
  }
};
/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCode
 * @returns {Object}  returnObj return bids
 */


pbjs.getAdserverTargetingForAdUnitCode = function (adUnitCode) {
  return pbjs.getAdserverTargeting(adUnitCode)[adUnitCode];
};
/**
 * returns all ad server targeting for all ad units
 * @return {Object} Map of adUnitCodes and targeting values []
 * @alias module:pbjs.getAdserverTargeting
 */


pbjs.getAdserverTargeting = function (adUnitCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getAdserverTargeting", arguments);
  return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getAllTargeting(adUnitCode);
};
/**
 * returns all consent data
 * @return {Object} Map of consent types and data
 * @alias module:pbjs.getConsentData
 */


function getConsentMetadata() {
  return {
    gdpr: __WEBPACK_IMPORTED_MODULE_15__adapterManager_js__["gdprDataHandler"].getConsentMeta(),
    usp: __WEBPACK_IMPORTED_MODULE_15__adapterManager_js__["uspDataHandler"].getConsentMeta(),
    coppa: !!__WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('coppa')
  };
}

pbjs.getConsentMetadata = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getConsentMetadata");
  return getConsentMetadata();
};

function getBids(type) {
  var responses = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */][type]().filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["bind"].call(__WEBPACK_IMPORTED_MODULE_1__utils_js__["adUnitsFilter"], this, __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAdUnitCodes())); // find the last auction id to get responses for most recent auction only

  var currentAuctionId = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getLastAuctionId();
  return responses.map(function (bid) {
    return bid.adUnitCode;
  }).filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["uniques"]).map(function (adUnitCode) {
    return responses.filter(function (bid) {
      return bid.auctionId === currentAuctionId && bid.adUnitCode === adUnitCode;
    });
  }).filter(function (bids) {
    return bids && bids[0] && bids[0].adUnitCode;
  }).map(function (bids) {
    return _defineProperty({}, bids[0].adUnitCode, {
      bids: bids
    });
  }).reduce(function (a, b) {
    return _extends(a, b);
  }, {});
}
/**
 * This function returns the bids requests involved in an auction but not bid on
 * @alias module:pbjs.getNoBids
 * @return {Object}            map | object that contains the bidRequests
 */


pbjs.getNoBids = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getNoBids", arguments);
  return getBids('getNoBids');
};
/**
 * This function returns the bids requests involved in an auction but not bid on or the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getNoBidsForAdUnitCode
 * @return {Object}           bidResponse object
 */


pbjs.getNoBidsForAdUnitCode = function (adUnitCode) {
  var bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getNoBids().filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  });
  return {
    bids: bids
  };
};
/**
 * This function returns the bid responses at the given moment.
 * @alias module:pbjs.getBidResponses
 * @return {Object}            map | object that contains the bidResponses
 */


pbjs.getBidResponses = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getBidResponses", arguments);
  return getBids('getBidsReceived');
};
/**
 * Returns bidResponses for the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getBidResponsesForAdUnitCode
 * @return {Object}            bidResponse object
 */


pbjs.getBidResponsesForAdUnitCode = function (adUnitCode) {
  var bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  });
  return {
    bids: bids
  };
};
/**
 * Set query string targeting on one or more GPT ad units.
 * @param {(string|string[])} adUnit a single `adUnit.code` or multiple.
 * @param {function(object)} customSlotMatching gets a GoogleTag slot and returns a filter function for adUnitCode, so you can decide to match on either eg. return slot => { return adUnitCode => { return slot.getSlotElementId() === 'myFavoriteDivId'; } };
 * @alias module:pbjs.setTargetingForGPTAsync
 */


pbjs.setTargetingForGPTAsync = function (adUnit, customSlotMatching) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.setTargetingForGPTAsync", arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isGptPubadsDefined"])()) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('window.googletag is not defined on the page');
    return;
  } // get our ad unit codes


  var targetingSet = __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getAllTargeting(adUnit); // first reset any old targeting

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].resetPresetTargeting(adUnit, customSlotMatching); // now set new targeting keys

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].setTargetingForGPT(targetingSet, customSlotMatching);
  Object.keys(targetingSet).forEach(function (adUnitCode) {
    Object.keys(targetingSet[adUnitCode]).forEach(function (targetingKey) {
      if (targetingKey === 'hb_adid') {
        __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].setStatusForBids(targetingSet[adUnitCode][targetingKey], CONSTANTS.BID_STATUS.BID_TARGETING_SET);
      }
    });
  }); // emit event

  events.emit(SET_TARGETING, targetingSet);
};
/**
 * Set query string targeting on all AST (AppNexus Seller Tag) ad units. Note that this function has to be called after all ad units on page are defined. For working example code, see [Using Prebid.js with AppNexus Publisher Ad Server](http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html).
 * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
 * @alias module:pbjs.setTargetingForAst
 */


pbjs.setTargetingForAst = function (adUnitCodes) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.setTargetingForAn", arguments);

  if (!__WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].isApntagDefined()) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('window.apntag is not defined on the page');
    return;
  }

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].setTargetingForAst(adUnitCodes); // emit event

  events.emit(SET_TARGETING, __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getAllTargeting());
};
/**
 * This function will check for presence of given node in given parent. If not present - will inject it.
 * @param {Node} node node, whose existance is in question
 * @param {Document} doc document element do look in
 * @param {string} tagName tag name to look in
 */


function reinjectNodeIfRemoved(node, doc, tagName) {
  var injectionNode = doc.querySelector(tagName);

  if (!node.parentNode || node.parentNode !== injectionNode) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(node, doc, tagName);
  }
}
/**
 * This function will render the ad (based on params) in the given iframe document passed through.
 * Note that doc SHOULD NOT be the parent document page as we can't doc.write() asynchronously
 * @param  {Document} doc document
 * @param  {string} id bid id to locate the ad
 * @alias module:pbjs.renderAd
 */


pbjs.renderAd = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (doc, id, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.renderAd", arguments);
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('Calling renderAd with adId :' + id);

  if (doc && id) {
    try {
      // lookup ad by ad Id
      var bid = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].findBidByAdId(id);

      if (bid) {
        var shouldRender = true;

        if (bid && bid.status === CONSTANTS.BID_STATUS.RENDERED) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("Ad id ".concat(bid.adId, " has been rendered before"));
          events.emit(STALE_RENDER, bid);

          if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(__WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('auctionOptions'), 'suppressStaleRender')) {
            shouldRender = false;
          }
        }

        if (shouldRender) {
          // replace macros according to openRTB with price paid = bid.cpm
          bid.ad = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceAuctionPrice"])(bid.ad, bid.cpm);
          bid.adUrl = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceAuctionPrice"])(bid.adUrl, bid.cpm); // replacing clickthrough if submitted

          if (options && options.clickThrough) {
            var clickThrough = options.clickThrough;
            bid.ad = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceClickThrough"])(bid.ad, clickThrough);
            bid.adUrl = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceClickThrough"])(bid.adUrl, clickThrough);
          } // save winning bids


          __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].addWinningBid(bid); // emit 'bid won' event here

          events.emit(BID_WON, bid);
          var height = bid.height,
              width = bid.width,
              ad = bid.ad,
              mediaType = bid.mediaType,
              adUrl = bid.adUrl,
              renderer = bid.renderer;
          var creativeComment = document.createComment("Creative ".concat(bid.creativeId, " served by ").concat(bid.bidder, " Prebid.js Header Bidding"));
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(creativeComment, doc, 'html');

          if (Object(__WEBPACK_IMPORTED_MODULE_11__Renderer_js__["c" /* isRendererRequired */])(renderer)) {
            Object(__WEBPACK_IMPORTED_MODULE_11__Renderer_js__["b" /* executeRenderer */])(renderer, bid);
            reinjectNodeIfRemoved(creativeComment, doc, 'html');
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["b" /* emitAdRenderSucceeded */])({
              doc: doc,
              bid: bid,
              id: id
            });
          } else if (doc === document && !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["inIframe"])() || mediaType === 'video') {
            var message = "Error trying to write ad. Ad render call ad id ".concat(id, " was prevented from writing to the main document.");
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
              reason: PREVENT_WRITING_ON_MAIN_DOCUMENT,
              message: message,
              bid: bid,
              id: id
            });
          } else if (ad) {
            // will check if browser is firefox and below version 67, if so execute special doc.open()
            // for details see: https://github.com/prebid/Prebid.js/pull/3524
            // TODO remove this browser specific code at later date (when Firefox < 67 usage is mostly gone)
            if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('firefox/') > -1) {
              var firefoxVerRegx = /firefox\/([\d\.]+)/;
              var firefoxVer = navigator.userAgent.toLowerCase().match(firefoxVerRegx)[1]; // grabs the text in the 1st matching group

              if (firefoxVer && parseInt(firefoxVer, 10) < 67) {
                doc.open('text/html', 'replace');
              }
            }

            doc.write(ad);
            doc.close();
            setRenderSize(doc, width, height);
            reinjectNodeIfRemoved(creativeComment, doc, 'html');
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["callBurl"])(bid);
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["b" /* emitAdRenderSucceeded */])({
              doc: doc,
              bid: bid,
              id: id
            });
          } else if (adUrl) {
            var iframe = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["createInvisibleIframe"])();
            iframe.height = height;
            iframe.width = width;
            iframe.style.display = 'inline';
            iframe.style.overflow = 'hidden';
            iframe.src = adUrl;
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(iframe, doc, 'body');
            setRenderSize(doc, width, height);
            reinjectNodeIfRemoved(creativeComment, doc, 'html');
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["callBurl"])(bid);
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["b" /* emitAdRenderSucceeded */])({
              doc: doc,
              bid: bid,
              id: id
            });
          } else {
            var _message = "Error trying to write ad. No ad for bid response id: ".concat(id);

            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
              reason: NO_AD,
              message: _message,
              bid: bid,
              id: id
            });
          }
        }
      } else {
        var _message2 = "Error trying to write ad. Cannot find ad by given id : ".concat(id);

        Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
          reason: CANNOT_FIND_AD,
          message: _message2,
          id: id
        });
      }
    } catch (e) {
      var _message3 = "Error trying to write ad Id :".concat(id, " to the page:").concat(e.message);

      Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
        reason: EXCEPTION,
        message: _message3,
        id: id
      });
    }
  } else {
    var _message4 = "Error trying to write ad Id :".concat(id, " to the page. Missing document or adId");

    Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
      reason: MISSING_DOC_OR_ADID,
      message: _message4,
      id: id
    });
  }
});
/**
 * Remove adUnit from the $$PREBID_GLOBAL$$ configuration, if there are no addUnitCode(s) it will remove all
 * @param  {string| Array} adUnitCode the adUnitCode(s) to remove
 * @alias module:pbjs.removeAdUnit
 */

pbjs.removeAdUnit = function (adUnitCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.removeAdUnit", arguments);

  if (!adUnitCode) {
    pbjs.adUnits = [];
    return;
  }

  var adUnitCodes;

  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(adUnitCode)) {
    adUnitCodes = adUnitCode;
  } else {
    adUnitCodes = [adUnitCode];
  }

  adUnitCodes.forEach(function (adUnitCode) {
    for (var i = pbjs.adUnits.length - 1; i >= 0; i--) {
      if (pbjs.adUnits[i].code === adUnitCode) {
        pbjs.adUnits.splice(i, 1);
      }
    }
  });
};
/**
 * @param {Object} requestOptions
 * @param {function} requestOptions.bidsBackHandler
 * @param {number} requestOptions.timeout
 * @param {Array} requestOptions.adUnits
 * @param {Array} requestOptions.adUnitCodes
 * @param {Array} requestOptions.labels
 * @param {String} requestOptions.auctionId
 * @alias module:pbjs.requestBids
 */


pbjs.requestBids = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      bidsBackHandler = _ref2.bidsBackHandler,
      timeout = _ref2.timeout,
      adUnits = _ref2.adUnits,
      adUnitCodes = _ref2.adUnitCodes,
      labels = _ref2.labels,
      auctionId = _ref2.auctionId;

  events.emit(REQUEST_BIDS);
  var cbTimeout = timeout || __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('bidderTimeout');
  adUnits = adUnits && __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].convertAdUnitFpd(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(adUnits) ? adUnits : [adUnits]) || pbjs.adUnits;
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.requestBids", arguments);
  var _s2sConfigs = [];
  var s2sBidders = [];
  __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('s2sConfig', function (config) {
    if (config && config.s2sConfig) {
      _s2sConfigs = Array.isArray(config.s2sConfig) ? config.s2sConfig : [config.s2sConfig];
    }
  });

  _s2sConfigs.forEach(function (s2sConfig) {
    s2sBidders.push.apply(s2sBidders, _toConsumableArray(s2sConfig.bidders));
  });

  adUnits = checkAdUnitSetup(adUnits);

  if (adUnitCodes && adUnitCodes.length) {
    // if specific adUnitCodes supplied filter adUnits for those codes
    adUnits = adUnits.filter(function (unit) {
      return Object(__WEBPACK_IMPORTED_MODULE_9__polyfill_js__["d" /* includes */])(adUnitCodes, unit.code);
    });
  } else {
    // otherwise derive adUnitCodes from adUnits
    adUnitCodes = adUnits && adUnits.map(function (unit) {
      return unit.code;
    });
  }
  /*
   * for a given adunit which supports a set of mediaTypes
   * and a given bidder which supports a set of mediaTypes
   * a bidder is eligible to participate on the adunit
   * if it supports at least one of the mediaTypes on the adunit
   */


  adUnits.forEach(function (adUnit) {
    // get the adunit's mediaTypes, defaulting to banner if mediaTypes isn't present
    var adUnitMediaTypes = Object.keys(adUnit.mediaTypes || {
      'banner': 'banner'
    }); // get the bidder's mediaTypes

    var allBidders = adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
    var bidderRegistry = adapterManager.bidderRegistry;
    var bidders = s2sBidders ? allBidders.filter(function (bidder) {
      return !Object(__WEBPACK_IMPORTED_MODULE_9__polyfill_js__["d" /* includes */])(s2sBidders, bidder);
    }) : allBidders;
    adUnit.transactionId = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["generateUUID"])();
    bidders.forEach(function (bidder) {
      var adapter = bidderRegistry[bidder];
      var spec = adapter && adapter.getSpec && adapter.getSpec(); // banner is default if not specified in spec

      var bidderMediaTypes = spec && spec.supportedMediaTypes || ['banner']; // check if the bidder's mediaTypes are not in the adUnit's mediaTypes

      var bidderEligible = adUnitMediaTypes.some(function (type) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__polyfill_js__["d" /* includes */])(bidderMediaTypes, type);
      });

      if (!bidderEligible) {
        // drop the bidder from the ad unit if it's not compatible
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["unsupportedBidderMessage"])(adUnit, bidder));
        adUnit.bids = adUnit.bids.filter(function (bid) {
          return bid.bidder !== bidder;
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_10__adUnits_js__["a" /* adunitCounter */].incrementBidderRequestsCounter(adUnit.code, bidder);
      }
    });
    __WEBPACK_IMPORTED_MODULE_10__adUnits_js__["a" /* adunitCounter */].incrementRequestsCounter(adUnit.code);
  });

  if (!adUnits || adUnits.length === 0) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('No adUnits configured. No bids requested.');

    if (typeof bidsBackHandler === 'function') {
      // executeCallback, this will only be called in case of first request
      try {
        bidsBackHandler();
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error executing bidsBackHandler', null, e);
      }
    }

    return;
  }

  var auction = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].createAuction({
    adUnits: adUnits,
    adUnitCodes: adUnitCodes,
    callback: bidsBackHandler,
    cbTimeout: cbTimeout,
    labels: labels,
    auctionId: auctionId
  });
  var adUnitsLen = adUnits.length;

  if (adUnitsLen > 15) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Current auction ".concat(auction.getAuctionId(), " contains ").concat(adUnitsLen, " adUnits."), adUnits);
  }

  adUnitCodes.forEach(function (code) {
    return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].setLatestAuctionForAdUnit(code, auction.getAuctionId());
  });
  auction.callBids();
});
function executeCallbacks(fn, reqBidsConfigObj) {
  runAll(__WEBPACK_IMPORTED_MODULE_13__storageManager_js__["c" /* storageCallbacks */]);
  runAll(enableAnalyticsCallbacks);
  fn.call(this, reqBidsConfigObj);

  function runAll(queue) {
    var queued;

    while (queued = queue.shift()) {
      queued();
    }
  }
} // This hook will execute all storage callbacks which were registered before gdpr enforcement hook was added. Some bidders, user id modules use storage functions when module is parsed but gdpr enforcement hook is not added at that stage as setConfig callbacks are yet to be called. Hence for such calls we execute all the stored callbacks just before requestBids. At this hook point we will know for sure that gdprEnforcement module is added or not

pbjs.requestBids.before(executeCallbacks, 49);
/**
 *
 * Add adunit(s)
 * @param {Array|Object} adUnitArr Array of adUnits or single adUnit Object.
 * @alias module:pbjs.addAdUnits
 */

pbjs.addAdUnits = function (adUnitArr) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.addAdUnits", arguments);
  pbjs.adUnits.push.apply(pbjs.adUnits, __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].convertAdUnitFpd(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(adUnitArr) ? adUnitArr : [adUnitArr])); // emit event

  events.emit(ADD_AD_UNITS);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to set on event
 * @param {string} id an identifier in the context of the event
 * @alias module:pbjs.onEvent
 *
 * This API call allows you to register a callback to handle a Prebid.js event.
 * An optional `id` parameter provides more finely-grained event callback registration.
 * This makes it possible to register callback events for a specific item in the
 * event context. For example, `bidWon` events will accept an `id` for ad unit code.
 * `bidWon` callbacks registered with an ad unit code id will be called when a bid
 * for that ad unit code wins the auction. Without an `id` this method registers the
 * callback for every `bidWon` event.
 *
 * Currently `bidWon` is the only event that accepts an `id` parameter.
 */


pbjs.onEvent = function (event, handler, id) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.onEvent", arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isFn"])(handler)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('The event handler provided is not a function and was not set on event "' + event + '".');
    return;
  }

  if (id && !eventValidators[event].call(null, id)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('The id provided is not valid for event "' + event + '" and no handler was set.');
    return;
  }

  events.on(event, handler, id);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to remove from the event
 * @param {string} id an identifier in the context of the event (see `$$PREBID_GLOBAL$$.onEvent`)
 * @alias module:pbjs.offEvent
 */


pbjs.offEvent = function (event, handler, id) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.offEvent", arguments);

  if (id && !eventValidators[event].call(null, id)) {
    return;
  }

  events.off(event, handler, id);
};
/**
 * Return a copy of all events emitted
 *
 * @alias module:pbjs.getEvents
 */


pbjs.getEvents = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getEvents");
  return events.getEvents();
};
/*
 * Wrapper to register bidderAdapter externally (adapterManager.registerBidAdapter())
 * @param  {Function} bidderAdaptor [description]
 * @param  {string} bidderCode [description]
 * @alias module:pbjs.registerBidAdapter
 */


pbjs.registerBidAdapter = function (bidderAdaptor, bidderCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.registerBidAdapter", arguments);

  try {
    adapterManager.registerBidAdapter(bidderAdaptor(), bidderCode);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error registering bidder adapter : ' + e.message);
  }
};
/**
 * Wrapper to register analyticsAdapter externally (adapterManager.registerAnalyticsAdapter())
 * @param  {Object} options [description]
 * @alias module:pbjs.registerAnalyticsAdapter
 */


pbjs.registerAnalyticsAdapter = function (options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.registerAnalyticsAdapter", arguments);

  try {
    adapterManager.registerAnalyticsAdapter(options);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error registering analytics adapter : ' + e.message);
  }
};
/**
 * Wrapper to bidfactory.createBid()
 * @param  {string} statusCode [description]
 * @alias module:pbjs.createBid
 * @return {Object} bidResponse [description]
 */


pbjs.createBid = function (statusCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.createBid", arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_12__bidfactory_js__["a" /* createBid */])(statusCode);
};
/**
 * Enable sending analytics data to the analytics provider of your
 * choice.
 *
 * For usage, see [Integrate with the Prebid Analytics
 * API](http://prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html).
 *
 * For a list of analytics adapters, see [Analytics for
 * Prebid](http://prebid.org/overview/analytics.html).
 * @param  {Object} config
 * @param {string} config.provider The name of the provider, e.g., `"ga"` for Google Analytics.
 * @param {Object} config.options The options for this particular analytics adapter.  This will likely vary between adapters.
 * @alias module:pbjs.enableAnalytics
 */
// Stores 'enableAnalytics' callbacks for later execution.


var enableAnalyticsCallbacks = [];
var enableAnalyticsCb = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (config) {
  if (config && !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isEmpty"])(config)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.enableAnalytics for: ", config);
    adapterManager.enableAnalytics(config);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("pbjs.enableAnalytics should be called with option {}");
  }
}, 'enableAnalyticsCb');

pbjs.enableAnalytics = function (config) {
  enableAnalyticsCallbacks.push(enableAnalyticsCb.bind(this, config));
};
/**
 * @alias module:pbjs.aliasBidder
 */


pbjs.aliasBidder = function (bidderCode, alias, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.aliasBidder", arguments);

  if (bidderCode && alias) {
    adapterManager.aliasBidAdapter(bidderCode, alias, options);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('bidderCode and alias must be passed as arguments', "pbjs.aliasBidder");
  }
};
/**
 * The bid response object returned by an external bidder adapter during the auction.
 * @typedef {Object} AdapterBidResponse
 * @property {string} pbAg Auto granularity price bucket; CPM <= 5 ? increment = 0.05 : CPM > 5 && CPM <= 10 ? increment = 0.10 : CPM > 10 && CPM <= 20 ? increment = 0.50 : CPM > 20 ? priceCap = 20.00.  Example: `"0.80"`.
 * @property {string} pbCg Custom price bucket.  For example setup, see {@link setPriceGranularity}.  Example: `"0.84"`.
 * @property {string} pbDg Dense granularity price bucket; CPM <= 3 ? increment = 0.01 : CPM > 3 && CPM <= 8 ? increment = 0.05 : CPM > 8 && CPM <= 20 ? increment = 0.50 : CPM > 20? priceCap = 20.00.  Example: `"0.84"`.
 * @property {string} pbLg Low granularity price bucket; $0.50 increment, capped at $5, floored to two decimal places.  Example: `"0.50"`.
 * @property {string} pbMg Medium granularity price bucket; $0.10 increment, capped at $20, floored to two decimal places.  Example: `"0.80"`.
 * @property {string} pbHg High granularity price bucket; $0.01 increment, capped at $20, floored to two decimal places.  Example: `"0.84"`.
 *
 * @property {string} bidder The string name of the bidder.  This *may* be the same as the `bidderCode`.  For For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 * @property {string} bidderCode The unique string that identifies this bidder.  For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 *
 * @property {string} requestId The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the bid request.
 * @property {number} requestTimestamp The time at which the bid request was sent out, expressed in milliseconds.
 * @property {number} responseTimestamp The time at which the bid response was received, expressed in milliseconds.
 * @property {number} timeToRespond How long it took for the bidder to respond with this bid, expressed in milliseconds.
 *
 * @property {string} size The size of the ad creative, expressed in `"AxB"` format, where A and B are numbers of pixels.  Example: `"320x50"`.
 * @property {string} width The width of the ad creative in pixels.  Example: `"320"`.
 * @property {string} height The height of the ad creative in pixels.  Example: `"50"`.
 *
 * @property {string} ad The actual ad creative content, often HTML with CSS, JavaScript, and/or links to additional content.  Example: `"<div id='beacon_-YQbipJtdxmMCgEPHExLhmqzEm' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://aplus-...'/></div><iframe src=\"http://aax-us-east.amazon-adsystem.com/e/is/8dcfcd..." width=\"728\" height=\"90\" frameborder=\"0\" ...></iframe>",`.
 * @property {number} ad_id The ad ID of the creative, as understood by the bidder's system.  Used by the line item's [creative in the ad server](http://prebid.org/adops/send-all-bids-adops.html#step-3-add-a-creative).
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page.
 *
 * @property {string} statusMessage The status of the bid.  Allowed values: `"Bid available"` or `"Bid returned empty or error response"`.
 * @property {number} cpm The exact bid price from the bidder, expressed to the thousandths place.  Example: `"0.849"`.
 *
 * @property {Object} adserverTargeting An object whose values represent the ad server's targeting on the bid.
 * @property {string} adserverTargeting.hb_adid The ad ID of the creative, as understood by the ad server.
 * @property {string} adserverTargeting.hb_pb The price paid to show the creative, as logged in the ad server.
 * @property {string} adserverTargeting.hb_bidder The winning bidder whose ad creative will be served by the ad server.
 */

/**
 * Get all of the bids that have been rendered.  Useful for [troubleshooting your integration](http://prebid.org/dev-docs/prebid-troubleshooting-guide.html).
 * @return {Array<AdapterBidResponse>} A list of bids that have been rendered.
 */


pbjs.getAllWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAllWinningBids();
};
/**
 * Get all of the bids that have won their respective auctions.
 * @return {Array<AdapterBidResponse>} A list of bids that have won their respective auctions.
 */


pbjs.getAllPrebidWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
    return bid.status === CONSTANTS.BID_STATUS.BID_TARGETING_SET;
  });
};
/**
 * Get array of highest cpm bids for all adUnits, or highest cpm bid
 * object for the given adUnit
 * @param {string} adUnitCode - optional ad unit code
 * @alias module:pbjs.getHighestCpmBids
 * @return {Array} array containing highest cpm bid object(s)
 */


pbjs.getHighestCpmBids = function (adUnitCode) {
  return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getWinningBids(adUnitCode);
};
/**
 * Mark the winning bid as used, should only be used in conjunction with video
 * @typedef {Object} MarkBidRequest
 * @property {string} adUnitCode The ad unit code
 * @property {string} adId The id representing the ad we want to mark
 *
 * @alias module:pbjs.markWinningBidAsUsed
 */


pbjs.markWinningBidAsUsed = function (markBidRequest) {
  var bids = [];

  if (markBidRequest.adUnitCode && markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId && bid.adUnitCode === markBidRequest.adUnitCode;
    });
  } else if (markBidRequest.adUnitCode) {
    bids = __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getWinningBids(markBidRequest.adUnitCode);
  } else if (markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId;
    });
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.');
  }

  if (bids.length > 0) {
    bids[0].status = CONSTANTS.BID_STATUS.RENDERED;
  }
};
/**
 * Get Prebid config options
 * @param {Object} options
 * @alias module:pbjs.getConfig
 */


pbjs.getConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig;
pbjs.readConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].readConfig;
pbjs.mergeConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].mergeConfig;
pbjs.mergeBidderConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].mergeBidderConfig;
/**
 * Set Prebid config options.
 * (Added in version 0.27.0).
 *
 * `setConfig` is designed to allow for advanced configuration while
 * reducing the surface area of the public API.  For more information
 * about the move to `setConfig` (and the resulting deprecations of
 * some other public methods), see [the Prebid 1.0 public API
 * proposal](https://gist.github.com/mkendall07/51ee5f6b9f2df01a89162cf6de7fe5b6).
 *
 * #### Troubleshooting your configuration
 *
 * If you call `pbjs.setConfig` without an object, e.g.,
 *
 * `pbjs.setConfig('debug', 'true'))`
 *
 * then Prebid.js will print an error to the console that says:
 *
 * ```
 * ERROR: setConfig options must be an object
 * ```
 *
 * If you don't see that message, you can assume the config object is valid.
 *
 * @param {Object} options Global Prebid configuration object. Must be JSON - no JavaScript functions are allowed.
 * @param {string} options.bidderSequence The order in which bidders are called.  Example: `pbjs.setConfig({ bidderSequence: "fixed" })`.  Allowed values: `"fixed"` (order defined in `adUnit.bids` array on page), `"random"`.
 * @param {boolean} options.debug Turn debug logging on/off. Example: `pbjs.setConfig({ debug: true })`.
 * @param {string} options.priceGranularity The bid price granularity to use.  Example: `pbjs.setConfig({ priceGranularity: "medium" })`. Allowed values: `"low"` ($0.50), `"medium"` ($0.10), `"high"` ($0.01), `"auto"` (sliding scale), `"dense"` (like `"auto"`, with smaller increments at lower CPMs), or a custom price bucket object, e.g., `{ "buckets" : [{"min" : 0,"max" : 20,"increment" : 0.1,"cap" : true}]}`.
 * @param {boolean} options.enableSendAllBids Turn "send all bids" mode on/off.  Example: `pbjs.setConfig({ enableSendAllBids: true })`.
 * @param {number} options.bidderTimeout Set a global bidder timeout, in milliseconds.  Example: `pbjs.setConfig({ bidderTimeout: 3000 })`.  Note that it's still possible for a bid to get into the auction that responds after this timeout. This is due to how [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) works in JS: it queues the callback in the event loop in an approximate location that should execute after this time but it is not guaranteed.  For more information about the asynchronous event loop and `setTimeout`, see [How JavaScript Timers Work](https://johnresig.com/blog/how-javascript-timers-work/).
 * @param {string} options.publisherDomain The publisher's domain where Prebid is running, for cross-domain iFrame communication.  Example: `pbjs.setConfig({ publisherDomain: "https://www.theverge.com" })`.
 * @param {Object} options.s2sConfig The configuration object for [server-to-server header bidding](http://prebid.org/dev-docs/get-started-with-prebid-server.html).  Example:
 * @alias module:pbjs.setConfig
 * ```
 * pbjs.setConfig({
 *     s2sConfig: {
 *         accountId: '1',
 *         enabled: true,
 *         bidders: ['appnexus', 'pubmatic'],
 *         timeout: 1000,
 *         adapter: 'prebidServer',
 *         endpoint: 'https://prebid.adnxs.com/pbs/v1/auction'
 *     }
 * })
 * ```
 */

pbjs.setConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].setConfig;
pbjs.setBidderConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].setBidderConfig;
pbjs.que.push(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__secureCreatives_js__["a" /* listenMessagesFromCreative */])();
});
/**
 * This queue lets users load Prebid asynchronously, but run functions the same way regardless of whether it gets loaded
 * before or after their script executes. For example, given the code:
 *
 * <script src="url/to/Prebid.js" async></script>
 * <script>
 *   var pbjs = pbjs || {};
 *   pbjs.cmd = pbjs.cmd || [];
 *   pbjs.cmd.push(functionToExecuteOncePrebidLoads);
 * </script>
 *
 * If the page's script runs before prebid loads, then their function gets added to the queue, and executed
 * by prebid once it's done loading. If it runs after prebid loads, then this monkey-patch causes their
 * function to execute immediately.
 *
 * @memberof pbjs
 * @param  {function} command A function which takes no arguments. This is guaranteed to run exactly once, and only after
 *                            the Prebid script has been fully loaded.
 * @alias module:pbjs.cmd.push
 */

pbjs.cmd.push = function (command) {
  if (typeof command === 'function') {
    try {
      command.call();
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error processing command :', e.message, e.stack);
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("Commands written into pbjs.cmd.push must be wrapped in a function");
  }
};

pbjs.que.push = pbjs.cmd.push;

function processQueue(queue) {
  queue.forEach(function (cmd) {
    if (typeof cmd.called === 'undefined') {
      try {
        cmd.call();
        cmd.called = true;
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error processing command :', 'prebid.js', e);
      }
    }
  });
}
/**
 * @alias module:pbjs.processQueue
 */


pbjs.processQueue = function () {
  __WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */].ready();
  processQueue(pbjs.que);
  processQueue(pbjs.cmd);
};

/* harmony default export */ __webpack_exports__["default"] = (pbjs);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Adapter;
function Adapter(code) {
  var bidderCode = code;

  function setBidderCode(code) {
    bidderCode = code;
  }

  function getBidderCode() {
    return bidderCode;
  }

  function callBids() {}

  return {
    callBids: callBids,
    setBidderCode: setBidderCode,
    getBidderCode: getBidderCode
  };
}

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setSizeConfig */
/* unused harmony export getLabels */
/* harmony export (immutable) */ __webpack_exports__["b"] = sizeSupported;
/* unused harmony export resolveStatus */
/* harmony export (immutable) */ __webpack_exports__["a"] = processAdUnitsForLabels;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill_js__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var sizeConfig = [];
/**
 * @typedef {object} SizeConfig
 *
 * @property {string} [mediaQuery] A CSS media query string that will to be interpreted by window.matchMedia.  If the
 *  media query matches then the this config will be active and sizesSupported will filter bid and adUnit sizes.  If
 *  this property is not present then this SizeConfig will only be active if triggered manually by a call to
 *  pbjs.setConfig({labels:['label']) specifying one of the labels present on this SizeConfig.
 * @property {Array<Array>} sizesSupported The sizes to be accepted if this SizeConfig is enabled.
 * @property {Array<string>} labels The active labels to match this SizeConfig to an adUnits and/or bidders.
 */

/**
 *
 * @param {Array<SizeConfig>} config
 */

function setSizeConfig(config) {
  sizeConfig = config;
}
__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('sizeConfig', function (config) {
  return setSizeConfig(config.sizeConfig);
});
/**
 * Returns object describing the status of labels on the adUnit or bidder along with labels passed into requestBids
 * @param bidOrAdUnit the bidder or adUnit to get label info on
 * @param activeLabels the labels passed to requestBids
 * @returns {LabelDescriptor}
 */

function getLabels(bidOrAdUnit, activeLabels) {
  if (bidOrAdUnit.labelAll) {
    return {
      labelAll: true,
      labels: bidOrAdUnit.labelAll,
      activeLabels: activeLabels
    };
  }

  return {
    labelAll: false,
    labels: bidOrAdUnit.labelAny,
    activeLabels: activeLabels
  };
}
/**
 * Determines whether a single size is valid given configured sizes
 * @param {Array} size [width, height]
 * @param {Array<SizeConfig>} configs
 * @returns {boolean}
 */

function sizeSupported(size) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!maps.shouldFilter) {
    return true;
  }

  return !!maps.sizesSupported[size];
}
/**
 * Resolves the unique set of the union of all sizes and labels that are active from a SizeConfig.mediaQuery match
 * @param {Array<string>} labels Labels specified on adUnit or bidder
 * @param {boolean} labelAll if true, all labels must match to be enabled
 * @param {Array<string>} activeLabels Labels passed in through requestBids
 * @param {object} mediaTypes A mediaTypes object describing the various media types (banner, video, native)
 * @param {Array<Array<number>>} sizes Sizes specified on adUnit (deprecated)
 * @param {Array<SizeConfig>} configs
 * @returns {{labels: Array<string>, sizes: Array<Array<number>>}}
 */

function resolveStatus() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$labels = _ref.labels,
      labels = _ref$labels === void 0 ? [] : _ref$labels,
      _ref$labelAll = _ref.labelAll,
      labelAll = _ref$labelAll === void 0 ? false : _ref$labelAll,
      _ref$activeLabels = _ref.activeLabels,
      activeLabels = _ref$activeLabels === void 0 ? [] : _ref$activeLabels;

  var mediaTypes = arguments.length > 1 ? arguments[1] : undefined;
  var sizes = arguments.length > 2 ? arguments[2] : undefined;
  var configs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isPlainObject"])(mediaTypes)) {
    // add support for deprecated adUnit.sizes by creating correct banner mediaTypes if they don't already exist
    if (sizes) {
      mediaTypes = {
        banner: {
          sizes: sizes
        }
      };
    } else {
      mediaTypes = {};
    }
  } else {
    mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(mediaTypes);
  }

  var oldSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes');

  if (maps.shouldFilter && oldSizes) {
    mediaTypes.banner.sizes = oldSizes.filter(function (size) {
      return maps.sizesSupported[size];
    });
  }

  var allMediaTypes = Object.keys(mediaTypes);
  var results = {
    active: allMediaTypes.every(function (type) {
      return type !== 'banner';
    }) || allMediaTypes.some(function (type) {
      return type === 'banner';
    }) && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes.length') > 0 && (labels.length === 0 || !labelAll && (labels.some(function (label) {
      return maps.labels[label];
    }) || labels.some(function (label) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(activeLabels, label);
    })) || labelAll && labels.reduce(function (result, label) {
      return !result ? result : maps.labels[label] || Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(activeLabels, label);
    }, true)),
    mediaTypes: mediaTypes
  };

  if (oldSizes && oldSizes.length !== mediaTypes.banner.sizes.length) {
    results.filterResults = {
      before: oldSizes,
      after: mediaTypes.banner.sizes
    };
  }

  return results;
}

function evaluateSizeConfig(configs) {
  return configs.reduce(function (results, config) {
    if (_typeof(config) === 'object' && typeof config.mediaQuery === 'string' && config.mediaQuery.length > 0) {
      var ruleMatch = false;

      try {
        ruleMatch = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["getWindowTop"])().matchMedia(config.mediaQuery).matches;
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Unfriendly iFrame blocks sizeConfig from being correctly evaluated');
        ruleMatch = matchMedia(config.mediaQuery).matches;
      }

      if (ruleMatch) {
        if (Array.isArray(config.sizesSupported)) {
          results.shouldFilter = true;
        }

        ['labels', 'sizesSupported'].forEach(function (type) {
          return (config[type] || []).forEach(function (thing) {
            return results[type][thing] = true;
          });
        });
      }
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('sizeConfig rule missing required property "mediaQuery"');
    }

    return results;
  }, {
    labels: {},
    sizesSupported: {},
    shouldFilter: false
  });
}

function processAdUnitsForLabels(adUnits, activeLabels) {
  return adUnits.reduce(function (adUnits, adUnit) {
    var _resolveStatus = resolveStatus(getLabels(adUnit, activeLabels), adUnit.mediaTypes, adUnit.sizes),
        active = _resolveStatus.active,
        mediaTypes = _resolveStatus.mediaTypes,
        filterResults = _resolveStatus.filterResults;

    if (!active) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Size mapping disabled adUnit \"".concat(adUnit.code, "\""));
    } else {
      if (filterResults) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Size mapping filtered adUnit \"".concat(adUnit.code, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
      }

      adUnit.mediaTypes = mediaTypes;
      adUnit.bids = adUnit.bids.reduce(function (bids, bid) {
        var _resolveStatus2 = resolveStatus(getLabels(bid, activeLabels), adUnit.mediaTypes),
            active = _resolveStatus2.active,
            mediaTypes = _resolveStatus2.mediaTypes,
            filterResults = _resolveStatus2.filterResults;

        if (!active) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Size mapping deactivated adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\""));
        } else {
          if (filterResults) {
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Size mapping filtered adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
            bid.mediaTypes = mediaTypes;
          }

          bids.push(bid);
        }

        return bids;
      }, []);
      adUnits.push(adUnit);
    }

    return adUnits;
  }, []);
}

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = store;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCacheUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__ = __webpack_require__(15);
/**
 * This module interacts with the server used to cache video ad content to be restored later.
 * At a high level, the expected workflow goes like this:
 *
 *   - Request video ads from Bidders
 *   - Generate IDs for each valid bid, and cache the key/value pair on the server.
 *   - Return these IDs so that publishers can use them to fetch the bids later.
 *
 * This trickery helps integrate with ad servers, which set character limits on request params.
 */



/**
 * @typedef {object} CacheableUrlBid
 * @property {string} vastUrl A URL which loads some valid VAST XML.
 */

/**
 * @typedef {object} CacheablePayloadBid
 * @property {string} vastXml Some VAST XML which loads an ad in a video player.
 */

/**
 * A CacheableBid describes the types which the videoCache can store.
 *
 * @typedef {CacheableUrlBid|CacheablePayloadBid} CacheableBid
 */

/**
 * Function which wraps a URI that serves VAST XML, so that it can be loaded.
 *
 * @param {string} uri The URI where the VAST content can be found.
 * @param {string} impUrl An impression tracker URL for the delivery of the video ad
 * @return A VAST URL which loads XML from the given URI.
 */

function wrapURI(uri, impUrl) {
  // Technically, this is vulnerable to cross-script injection by sketchy vastUrl bids.
  // We could make sure it's a valid URI... but since we're loading VAST XML from the
  // URL they provide anyway, that's probably not a big deal.
  var vastImp = impUrl ? "<![CDATA[".concat(impUrl, "]]>") : "";
  return "<VAST version=\"3.0\">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[".concat(uri, "]]></VASTAdTagURI>\n        <Impression>").concat(vastImp, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>");
}
/**
 * Wraps a bid in the format expected by the prebid-server endpoints, or returns null if
 * the bid can't be converted cleanly.
 *
 * @param {CacheableBid} bid
 * @param index
 */


function toStorageRequest(bid) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__["a" /* auctionManager */].index : _ref$index;

  var vastValue = bid.vastXml ? bid.vastXml : wrapURI(bid.vastUrl, bid.vastImpUrl);
  var auction = index.getAuction(bid);
  var payload = {
    type: 'xml',
    value: vastValue,
    ttlseconds: Number(bid.ttl)
  };

  if (__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('cache.vasttrack')) {
    payload.bidder = bid.bidder;
    payload.bidid = bid.requestId;
    payload.aid = bid.auctionId;
  }

  if (auction != null) {
    payload.timestamp = auction.getAuctionStart();
  }

  if (typeof bid.customCacheKey === 'string' && bid.customCacheKey !== '') {
    payload.key = bid.customCacheKey;
  }

  return payload;
}
/**
 * A function which should be called with the results of the storage operation.
 *
 * @callback videoCacheStoreCallback
 *
 * @param {Error} [error] The error, if one occurred.
 * @param {?string[]} uuids An array of unique IDs. The array will have one element for each bid we were asked
 *   to store. It may include null elements if some of the bids were malformed, or an error occurred.
 *   Each non-null element in this array is a valid input into the retrieve function, which will fetch
 *   some VAST XML which can be used to render this bid's ad.
 */

/**
 * A function which bridges the APIs between the videoCacheStoreCallback and our ajax function's API.
 *
 * @param {videoCacheStoreCallback} done A callback to the "store" function.
 * @return {Function} A callback which interprets the cache server's responses, and makes up the right
 *   arguments for our callback.
 */


function shimStorageCallback(done) {
  return {
    success: function success(responseBody) {
      var ids;

      try {
        ids = JSON.parse(responseBody).responses;
      } catch (e) {
        done(e, []);
        return;
      }

      if (ids) {
        done(null, ids);
      } else {
        done(new Error("The cache server didn't respond with a responses property."), []);
      }
    },
    error: function error(statusText, responseBody) {
      done(new Error("Error storing video ad in the cache: ".concat(statusText, ": ").concat(JSON.stringify(responseBody))), []);
    }
  };
}
/**
 * If the given bid is for a Video ad, generate a unique ID and cache it somewhere server-side.
 *
 * @param {CacheableBid[]} bids A list of bid objects which should be cached.
 * @param {videoCacheStoreCallback} [done] An optional callback which should be executed after
 * the data has been stored in the cache.
 */


function store(bids, done) {
  var requestData = {
    puts: bids.map(toStorageRequest)
  };
  Object(__WEBPACK_IMPORTED_MODULE_0__ajax_js__["a" /* ajax */])(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('cache.url'), shimStorageCallback(done), JSON.stringify(requestData), {
    contentType: 'text/plain',
    withCredentials: true
  });
}
function getCacheUrl(id) {
  return "".concat(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('cache.url'), "?uuid=").concat(id);
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adunitCounter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);

var adUnits = {};

function ensureAdUnit(adunit, bidderCode) {
  var adUnit = adUnits[adunit] = adUnits[adunit] || {
    bidders: {}
  };

  if (bidderCode) {
    return adUnit.bidders[bidderCode] = adUnit.bidders[bidderCode] || {};
  }

  return adUnit;
}

function incrementAdUnitCount(adunit, counter, bidderCode) {
  var adUnit = ensureAdUnit(adunit, bidderCode);
  adUnit[counter] = (adUnit[counter] || 0) + 1;
  return adUnit[counter];
}
/**
 * Increments and returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function incrementRequestsCounter(adunit) {
  return incrementAdUnitCount(adunit, 'requestsCounter');
}
/**
 * Increments and returns current Adunit requests counter for a bidder
 * @param {string} adunit id
 * @param {string} bidderCode code
 * @returns {number} current adunit bidder requests count
 */


function incrementBidderRequestsCounter(adunit, bidderCode) {
  return incrementAdUnitCount(adunit, 'requestsCounter', bidderCode);
}
/**
 * Increments and returns current Adunit wins counter for a bidder
 * @param {string} adunit id
 * @param {string} bidderCode code
 * @returns {number} current adunit bidder requests count
 */


function incrementBidderWinsCounter(adunit, bidderCode) {
  return incrementAdUnitCount(adunit, 'winsCounter', bidderCode);
}
/**
 * Returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function getRequestsCounter(adunit) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".requestsCounter")) || 0;
}
/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */


function getBidderRequestsCounter(adunit, bidder) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".requestsCounter")) || 0;
}
/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */


function getBidderWinsCounter(adunit, bidder) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".winsCounter")) || 0;
}
/**
 * A module which counts how many times an adunit was called
 * @module adunitCounter
 */


var adunitCounter = {
  incrementRequestsCounter: incrementRequestsCounter,
  incrementBidderRequestsCounter: incrementBidderRequestsCounter,
  incrementBidderWinsCounter: incrementBidderWinsCounter,
  getRequestsCounter: getRequestsCounter,
  getBidderRequestsCounter: getBidderRequestsCounter,
  getBidderWinsCounter: getBidderWinsCounter
};


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emitAdRenderFail;
/* harmony export (immutable) */ __webpack_exports__["b"] = emitAdRenderSucceeded;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_json__);



var _CONSTANTS$EVENTS = __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS,
    AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED,
    AD_RENDER_SUCCEEDED = _CONSTANTS$EVENTS.AD_RENDER_SUCCEEDED;
/**
 * Emit the AD_RENDER_FAILED event.
 *
 * @param reason one of the values in CONSTANTS.AD_RENDER_FAILED_REASON
 * @param message failure description
 * @param bid? bid response object that failed to render
 * @param id? adId that failed to render
 */

function emitAdRenderFail(_ref) {
  var reason = _ref.reason,
      message = _ref.message,
      bid = _ref.bid,
      id = _ref.id;
  var data = {
    reason: reason,
    message: message
  };
  if (bid) data.bid = bid;
  if (id) data.adId = id;
  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])(message);
  __WEBPACK_IMPORTED_MODULE_1__events_js___default.a.emit(AD_RENDER_FAILED, data);
}
/**
 * Emit the AD_RENDER_SUCCEEDED event.
 *
 * @param doc document object that was used to `.write` the ad. Should be `null` if unavailable (e.g. for documents in
 * a cross-origin frame).
 * @param bid bid response object for the ad that was rendered
 * @param id adId that was rendered.
 */

function emitAdRenderSucceeded(_ref2) {
  var doc = _ref2.doc,
      bid = _ref2.bid,
      id = _ref2.id;
  var data = {
    doc: doc
  };
  if (bid) data.bid = bid;
  if (id) data.adId = id;
  __WEBPACK_IMPORTED_MODULE_1__events_js___default.a.emit(AD_RENDER_SUCCEEDED, data);
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony export (immutable) */ __webpack_exports__["b"] = ajaxBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var XHR_DONE = 4;
/**
 * Simple IE9+ and cross-browser ajax request function
 * Note: x-domain requests in IE9 do not support the use of cookies
 *
 * @param url string url
 * @param callback {object | function} callback
 * @param data mixed data
 * @param options object
 */

var ajax = ajaxBuilder();
function ajaxBuilder() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      request = _ref.request,
      done = _ref.done;

  return function (url, callback, data) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      var x;
      var method = options.method || (data ? 'POST' : 'GET');
      var parser = document.createElement('a');
      parser.href = url;
      var callbacks = _typeof(callback) === 'object' && callback !== null ? callback : {
        success: function success() {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('xhr success');
        },
        error: function error(e) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('xhr error', null, e);
        }
      };

      if (typeof callback === 'function') {
        callbacks.success = callback;
      }

      x = new window.XMLHttpRequest();

      x.onreadystatechange = function () {
        if (x.readyState === XHR_DONE) {
          if (typeof done === 'function') {
            done(parser.origin);
          }

          var status = x.status;

          if (status >= 200 && status < 300 || status === 304) {
            callbacks.success(x.responseText, x);
          } else {
            callbacks.error(x.statusText, x);
          }
        }
      }; // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648


      if (!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('disableAjaxTimeout')) {
        x.ontimeout = function () {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('  xhr timeout after ', x.timeout, 'ms');
        };
      }

      if (method === 'GET' && data) {
        var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["parseUrl"])(url, options);

        _extends(urlInfo.search, data);

        url = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["buildUrl"])(urlInfo);
      }

      x.open(method, url, true); // IE needs timeout to be set after open - see #1410
      // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648

      if (!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('disableAjaxTimeout')) {
        x.timeout = timeout;
      }

      if (options.withCredentials) {
        x.withCredentials = true;
      }

      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["_each"])(options.customHeaders, function (value, header) {
        x.setRequestHeader(header, value);
      });

      if (options.preflight) {
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      x.setRequestHeader('Content-Type', options.contentType || 'text/plain');

      if (typeof request === 'function') {
        request(parser.origin);
      }

      if (method === 'POST' && data) {
        x.send(data);
      } else {
        x.send();
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('xhr construction', error);
      _typeof(callback) === 'object' && callback !== null && callback.error(error);
    }
  };
}

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addBidResponseBound */
/* unused harmony export addBidderRequestsBound */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onEnableOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onDisableOverrides; });
/* unused harmony export enableOverrides */
/* unused harmony export disableOverrides */
/* unused harmony export bidExcluded */
/* unused harmony export bidderExcluded */
/* unused harmony export applyBidOverrides */
/* unused harmony export addBidResponseHook */
/* unused harmony export addBidderRequestsHook */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveDebuggingConfig; });
/* unused harmony export getConfig */
/* harmony export (immutable) */ __webpack_exports__["d"] = sessionLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auction_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_js__ = __webpack_require__(0);





var _prefixLog = Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["prefixLog"])('DEBUG:'),
    logWarn = _prefixLog.logWarn,
    logMessage = _prefixLog.logMessage;

var OVERRIDE_KEY = "pbjs:debugging";
var addBidResponseBound;
var addBidderRequestsBound;
var onEnableOverrides = [function (overrides) {
  removeHooks();
  addHooks(overrides);
}];
var onDisableOverrides = [removeHooks];

function addHooks(overrides) {
  addBidResponseBound = addBidResponseHook.bind(overrides);
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["c" /* addBidResponse */].before(addBidResponseBound, 5);
  addBidderRequestsBound = addBidderRequestsHook.bind(overrides);
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["e" /* addBidderRequests */].before(addBidderRequestsBound, 5);
}

function removeHooks() {
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["c" /* addBidResponse */].getHooks({
    hook: addBidResponseBound
  }).remove();
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["e" /* addBidderRequests */].getHooks({
    hook: addBidderRequestsBound
  }).remove();
}

function enableOverrides(overrides) {
  var fromSession = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].setConfig({
    'debug': true
  });
  onEnableOverrides.forEach(function (fn) {
    return fn(overrides);
  });
  logMessage("bidder overrides enabled".concat(fromSession ? ' from session' : ''));
}
function disableOverrides() {
  onDisableOverrides.forEach(function (fn) {
    return fn();
  });
  logMessage('bidder overrides disabled');
}
/**
 * @param {{bidder:string, adUnitCode:string}} overrideObj
 * @param {string} bidderCode
 * @param {string} adUnitCode
 * @returns {boolean}
 */

function bidExcluded(overrideObj, bidderCode, adUnitCode) {
  if (overrideObj.bidder && overrideObj.bidder !== bidderCode) {
    return true;
  }

  if (overrideObj.adUnitCode && overrideObj.adUnitCode !== adUnitCode) {
    return true;
  }

  return false;
}
/**
 * @param {string[]} bidders
 * @param {string} bidderCode
 * @returns {boolean}
 */

function bidderExcluded(bidders, bidderCode) {
  return Array.isArray(bidders) && bidders.indexOf(bidderCode) === -1;
}
/**
 * @param {Object} overrideObj
 * @param {Object} bidObj
 * @param {Object} bidType
 * @returns {Object} bidObj with overridden properties
 */

function applyBidOverrides(overrideObj, bidObj, bidType) {
  return Object.keys(overrideObj).filter(function (key) {
    return ['adUnitCode', 'bidder'].indexOf(key) === -1;
  }).reduce(function (result, key) {
    logMessage("bidder overrides changed '".concat(result.adUnitCode, "/").concat(result.bidderCode, "' ").concat(bidType, ".").concat(key, " from '").concat(result[key], ".js' to '").concat(overrideObj[key], "'"));
    result[key] = overrideObj[key];
    result.isDebug = true;
    return result;
  }, bidObj);
}
function addBidResponseHook(next, adUnitCode, bid) {
  var overrides = this;

  if (bidderExcluded(overrides.bidders, bid.bidderCode)) {
    logWarn("bidder '".concat(bid.bidderCode, "' excluded from auction by bidder overrides"));
    return;
  }

  if (Array.isArray(overrides.bids)) {
    overrides.bids.forEach(function (overrideBid) {
      if (!bidExcluded(overrideBid, bid.bidderCode, adUnitCode)) {
        applyBidOverrides(overrideBid, bid, 'bidder');
      }
    });
  }

  next(adUnitCode, bid);
}
function addBidderRequestsHook(next, bidderRequests) {
  var overrides = this;
  var includedBidderRequests = bidderRequests.filter(function (bidderRequest) {
    if (bidderExcluded(overrides.bidders, bidderRequest.bidderCode)) {
      logWarn("bidRequest '".concat(bidderRequest.bidderCode, "' excluded from auction by bidder overrides"));
      return false;
    }

    return true;
  });

  if (Array.isArray(overrides.bidRequests)) {
    includedBidderRequests.forEach(function (bidderRequest) {
      overrides.bidRequests.forEach(function (overrideBid) {
        bidderRequest.bids.forEach(function (bid) {
          if (!bidExcluded(overrideBid, bidderRequest.bidderCode, bid.adUnitCode)) {
            applyBidOverrides(overrideBid, bid, 'bidRequest');
          }
        });
      });
    });
  }

  next(includedBidderRequests);
}
var saveDebuggingConfig = Object(__WEBPACK_IMPORTED_MODULE_2__hook_js__["b" /* hook */])('sync', function (debugConfig) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$sessionStorage = _ref.sessionStorage,
      sessionStorage = _ref$sessionStorage === void 0 ? window.sessionStorage : _ref$sessionStorage;

  if (!debugConfig.enabled) {
    try {
      sessionStorage.removeItem(OVERRIDE_KEY);
    } catch (e) {}
  } else {
    try {
      sessionStorage.setItem(OVERRIDE_KEY, JSON.stringify(debugConfig));
    } catch (e) {}
  }
});
function getConfig(debugging) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$sessionStorage = _ref2.sessionStorage,
      sessionStorage = _ref2$sessionStorage === void 0 ? window.sessionStorage : _ref2$sessionStorage;

  saveDebuggingConfig(debugging, {
    sessionStorage: sessionStorage
  });

  if (!debugging.enabled) {
    disableOverrides();
  } else {
    enableOverrides(debugging);
  }
}
__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('debugging', function (_ref3) {
  var debugging = _ref3.debugging;
  return getConfig(debugging);
});
function sessionLoader(storage) {
  var overrides;

  try {
    storage = storage || window.sessionStorage;
    overrides = JSON.parse(storage.getItem(OVERRIDE_KEY));
  } catch (e) {}

  if (overrides) {
    enableOverrides(overrides, true);
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = clone;

/*
  Identical to `just-extend(true, {}, obj1)`

  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}  
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/

function clone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // include prototype properties
    var value = obj[key];
    if (value && typeof value == 'object') {
      result[key] = clone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dlv;
function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	for (p = 0; p < key.length; p++) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
}


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x;
	for (; i < l; ++i) {
		x = t[keys[i]];
		t = t[keys[i]] = (i === l - 1 ? val : (x != null ? x : (!!~keys[i+1].indexOf('.') || !(+keys[i+1] > -1)) ? {} : []));
	}
});


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

/*
* @license MIT
* Fun Hooks v0.9.10
* (c) @snapwich
*/
create.SYNC = 1;
create.ASYNC = 2;
create.QUEUE = 4;

var packageName = "fun-hooks";

function hasProxy() {
  return !!(typeof Proxy === "function" && Proxy.revocable);
}

var defaults = Object.freeze({
  useProxy: true,
  ready: 0
});

var hookableMap = new WeakMap();

// detect incorrectly implemented reduce and if found use polyfill
// https://github.com/prebid/Prebid.js/issues/3576
// polyfill from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var reduce =
  [1]
    .reduce(function(a, b, c) {
      return [a, b, c];
    }, 2)
    .toString() === "2,1,0"
    ? Array.prototype.reduce
    : function(callback, initial) {
        var o = Object(this);
        var len = o.length >>> 0;
        var k = 0;
        var value;
        if (initial) {
          value = initial;
        } else {
          while (k < len && !(k in o)) {
            k++;
          }
          value = o[k++];
        }
        while (k < len) {
          if (k in o) {
            value = callback(value, o[k], k, o);
          }
          k++;
        }
        return value;
      };

function rest(args, skip) {
  return Array.prototype.slice.call(args, skip);
}

var assign =
  Object.assign ||
  function assign(target) {
    return reduce.call(
      rest(arguments, 1),
      function(target, obj) {
        if (obj) {
          Object.keys(obj).forEach(function(prop) {
            target[prop] = obj[prop];
          });
        }
        return target;
      },
      target
    );
  };

function runAll(queue) {
  var queued;
  // eslint-disable-next-line no-cond-assign
  while ((queued = queue.shift())) {
    queued();
  }
}

function create(config) {
  var hooks = {};
  var postReady = [];

  config = assign({}, defaults, config);

  function dispatch(arg1, arg2) {
    if (typeof arg1 === "function") {
      return hookFn.call(null, "sync", arg1, arg2);
    } else if (typeof arg1 === "string" && typeof arg2 === "function") {
      return hookFn.apply(null, arguments);
    } else if (typeof arg1 === "object") {
      return hookObj.apply(null, arguments);
    }
  }

  var ready;
  if (config.ready) {
    dispatch.ready = function() {
      ready = true;
      runAll(postReady);
    };
  } else {
    ready = true;
  }

  function hookObj(obj, props, objName) {
    var walk = true;
    if (typeof props === "undefined") {
      props = Object.getOwnPropertyNames(obj);
      walk = false;
    }
    var objHooks = {};
    var doNotHook = ["constructor"];
    do {
      props = props.filter(function(prop) {
        return (
          typeof obj[prop] === "function" &&
          !(doNotHook.indexOf(prop) !== -1) &&
          !prop.match(/^_/)
        );
      });
      props.forEach(function(prop) {
        var parts = prop.split(":");
        var name = parts[0];
        var type = parts[1] || "sync";
        if (!objHooks[name]) {
          var fn = obj[name];
          objHooks[name] = obj[name] = hookFn(
            type,
            fn,
            objName ? [objName, name] : undefined
          );
        }
      });
      obj = Object.getPrototypeOf(obj);
    } while (walk && obj);
    return objHooks;
  }

  /**
   * Navigates a string path to return a hookable function.  If not found, creates a placeholder for hooks.
   * @param {(Array<string> | string)} path
   */
  function get(path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return reduce.call(
      parts,
      function(memo, part, i) {
        var item = memo[part];
        var installed = false;
        if (item) {
          return item;
        } else if (i === parts.length - 1) {
          if (!ready) {
            postReady.push(function() {
              if (!installed) {
                // eslint-disable-next-line no-console
                console.warn(
                  packageName +
                    ": referenced '" +
                    path +
                    "' but it was never created"
                );
              }
            });
          }
          return (memo[part] = newHookable(function(fn) {
            memo[part] = fn;
            installed = true;
          }));
        }
        return (memo[part] = {});
      },
      hooks
    );
  }

  function newHookable(onInstall) {
    var before = [];
    var after = [];
    var generateTrap = function() {};

    var api = {
      before: function(hook, priority) {
        return add.call(this, before, "before", hook, priority);
      },
      after: function(hook, priority) {
        return add.call(this, after, "after", hook, priority);
      },
      getHooks: function(match) {
        var hooks = before.concat(after);
        if (typeof match === "object") {
          hooks = hooks.filter(function(entry) {
            return Object.keys(match).every(function(prop) {
              return entry[prop] === match[prop];
            });
          });
        }
        try {
          assign(hooks, {
            remove: function() {
              hooks.forEach(function(entry) {
                entry.remove();
              });
              return this;
            }
          });
        } catch (e) {
          console.error(
            "error adding `remove` to array, did you modify Array.prototype?"
          );
        }
        return hooks;
      },
      removeAll: function() {
        return this.getHooks().remove();
      }
    };

    var meta = {
      install: function(type, fn, generate) {
        this.type = type;
        generateTrap = generate;
        generate(before, after);
        onInstall && onInstall(fn);
      }
    };

    // store meta data related to hookable. use `api.after` since `api` reference is not available on our proxy.
    hookableMap.set(api.after, meta);

    return api;

    function add(store, type, hook, priority) {
      var entry = {
        hook: hook,
        type: type,
        priority: priority || 10,
        remove: function() {
          var index = store.indexOf(entry);
          if (index !== -1) {
            store.splice(index, 1);
            generateTrap(before, after);
          }
        }
      };
      store.push(entry);
      store.sort(function(a, b) {
        return b.priority - a.priority;
      });
      generateTrap(before, after);
      return this;
    }
  }

  function hookFn(type, fn, name) {
    // check if function has already been wrapped
    var meta = fn.after && hookableMap.get(fn.after);
    if (meta) {
      if (meta.type !== type) {
        throw packageName + ": recreated hookable with different type";
      } else {
        return fn;
      }
    }

    var hookable = name ? get(name) : newHookable();

    var trap;
    var hookedFn;
    var handlers = {
      get: function(target, prop) {
        return hookable[prop] || Reflect.get.apply(Reflect, arguments);
      }
    };

    if (!ready) {
      postReady.push(setTrap);
    }

    if (config.useProxy && hasProxy()) {
      hookedFn = new Proxy(fn, handlers);
    } else {
      hookedFn = function() {
        return handlers.apply
          ? handlers.apply(fn, this, rest(arguments))
          : fn.apply(this, arguments);
      };
      assign(hookedFn, hookable);
    }

    hookableMap.get(hookedFn.after).install(type, hookedFn, generateTrap);

    return hookedFn;

    // eslint-disable-next-line no-redeclare
    function generateTrap(before, after) {
      var order = [];
      var targetIndex;
      if (before.length || after.length) {
        before.forEach(addToOrder);
        // placeholder for target function wrapper
        targetIndex = order.push(undefined) - 1;
        after.forEach(addToOrder);
        trap = function(target, thisArg, args) {
          var curr = 0;
          var result;
          var callback =
            type === "async" &&
            typeof args[args.length - 1] === "function" &&
            args.pop();
          function bail(value) {
            if (type === "sync") {
              result = value;
            } else if (callback) {
              callback.apply(null, arguments);
            }
          }
          function next(value) {
            if (order[curr]) {
              var args = rest(arguments);
              next.bail = bail;
              args.unshift(next);
              return order[curr++].apply(thisArg, args);
            }
            if (type === "sync") {
              result = value;
            } else if (callback) {
              callback.apply(null, arguments);
            }
          }
          order[targetIndex] = function() {
            var args = rest(arguments, 1);
            if (type === "async" && callback) {
              delete next.bail;
              args.push(next);
            }
            var result = target.apply(thisArg, args);
            if (type === "sync") {
              next(result);
            }
          };
          next.apply(null, args);
          return result;
        };
      } else {
        trap = undefined;
      }
      setTrap();

      function addToOrder(entry) {
        order.push(entry.hook);
      }
    }

    function setTrap() {
      if (
        ready ||
        (type === "sync" && !(config.ready & create.SYNC)) ||
        (type === "async" && !(config.ready & create.ASYNC))
      ) {
        handlers.apply = trap;
      } else if (type === "sync" || !(config.ready & create.QUEUE)) {
        handlers.apply = function() {
          throw packageName + ": hooked function not ready";
        };
      } else {
        handlers.apply = function() {
          var args = arguments;
          postReady.push(function() {
            hookedFn.apply(args[1], args[2]);
          });
        };
      }
    }
  }

  dispatch.get = get;
  return dispatch;
}

/* global module */
module.exports = create;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AuctionIndex;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Retrieves request-related bid data.
 * All methods are designed to work with Bid (response) objects returned by bid adapters.
 */
function AuctionIndex(getAuctions) {
  _extends(this, {
    /**
     * @param auctionId
     * @returns {*} Auction instance for `auctionId`
     */
    getAuction: function getAuction(_ref) {
      var auctionId = _ref.auctionId;

      if (auctionId != null) {
        return getAuctions().find(function (auction) {
          return auction.getAuctionId() === auctionId;
        });
      }
    },

    /**
     * NOTE: you should prefer {@link #getMediaTypes} for looking up bid media types.
     * @param transactionId
     * @returns adUnit object for `transactionId`
     */
    getAdUnit: function getAdUnit(_ref2) {
      var transactionId = _ref2.transactionId;

      if (transactionId != null) {
        return getAuctions().flatMap(function (a) {
          return a.getAdUnits();
        }).find(function (au) {
          return au.transactionId === transactionId;
        });
      }
    },

    /**
     * @param transactionId
     * @param requestId?
     * @returns {*} mediaTypes object from bidRequest (through requestId) falling back to the adUnit (through transactionId).
     *
     * The bidRequest is given precedence because its mediaTypes can differ from the adUnit's (if bidder-specific labels are in use).
     * Bids that have no associated request do not have labels either, and use the adUnit's mediaTypes.
     */
    getMediaTypes: function getMediaTypes(_ref3) {
      var transactionId = _ref3.transactionId,
          requestId = _ref3.requestId;

      if (requestId != null) {
        var req = this.getBidRequest({
          requestId: requestId
        });

        if (req != null && (transactionId == null || req.transactionId === transactionId)) {
          return req.mediaTypes;
        }
      } else if (transactionId != null) {
        var au = this.getAdUnit({
          transactionId: transactionId
        });

        if (au != null) {
          return au.mediaTypes;
        }
      }
    },

    /**
     * @param requestId?
     * @param bidderRequestId?
     * @returns {*} bidderRequest that matches both requestId and bidderRequestId (if either or both are provided).
     *
     * NOTE: Bid responses are not guaranteed to have a corresponding request.
     */
    getBidderRequest: function getBidderRequest(_ref4) {
      var requestId = _ref4.requestId,
          bidderRequestId = _ref4.bidderRequestId;

      if (requestId != null || bidderRequestId != null) {
        var bers = getAuctions().flatMap(function (a) {
          return a.getBidRequests();
        });

        if (bidderRequestId != null) {
          bers = bers.filter(function (ber) {
            return ber.bidderRequestId === bidderRequestId;
          });
        }

        if (requestId == null) {
          return bers[0];
        } else {
          return bers.find(function (ber) {
            return ber.bids && ber.bids.find(function (br) {
              return br.bidId === requestId;
            }) != null;
          });
        }
      }
    },

    /**
     * @param requestId
     * @returns {*} bidRequest object for requestId
     *
     * NOTE: Bid responses are not guaranteed to have a corresponding request.
     */
    getBidRequest: function getBidRequest(_ref5) {
      var requestId = _ref5.requestId;

      if (requestId != null) {
        return getAuctions().flatMap(function (a) {
          return a.getBidRequests();
        }).flatMap(function (ber) {
          return ber.bids;
        }).find(function (br) {
          return br && br.bidId === requestId;
        });
      }
    }
  });
}

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConsentHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UspConsentHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GdprConsentHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _enabled = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var _promise = /*#__PURE__*/new WeakMap();

var _resolve = /*#__PURE__*/new WeakMap();

var _ready = /*#__PURE__*/new WeakMap();

var ConsentHandler = /*#__PURE__*/function () {
  function ConsentHandler() {
    _classCallCheck(this, ConsentHandler);

    _enabled.set(this, {
      writable: true,
      value: void 0
    });

    _data.set(this, {
      writable: true,
      value: void 0
    });

    _promise.set(this, {
      writable: true,
      value: void 0
    });

    _resolve.set(this, {
      writable: true,
      value: void 0
    });

    _ready.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "generatedTime", void 0);

    this.reset();
  }
  /**
   * reset this handler (mainly for tests)
   */


  _createClass(ConsentHandler, [{
    key: "reset",
    value: function reset() {
      var _this = this;

      _classPrivateFieldSet(this, _promise, new Promise(function (resolve) {
        _classPrivateFieldSet(_this, _resolve, function (data) {
          _classPrivateFieldSet(_this, _ready, true);

          _classPrivateFieldSet(_this, _data, data);

          resolve(data);
        });
      }));

      _classPrivateFieldSet(this, _enabled, false);

      _classPrivateFieldSet(this, _data, null);

      _classPrivateFieldSet(this, _ready, false);

      this.generatedTime = null;
    }
    /**
     * Enable this consent handler. This should be called by the relevant consent management module
     * on initialization.
     */

  }, {
    key: "enable",
    value: function enable() {
      _classPrivateFieldSet(this, _enabled, true);
    }
    /**
     * @returns {boolean} true if the related consent management module is enabled.
     */

  }, {
    key: "enabled",
    get: function get() {
      return _classPrivateFieldGet(this, _enabled);
    }
    /**
     * @returns {boolean} true if consent data has been resolved (it may be `null` if the resolution failed).
     */

  }, {
    key: "ready",
    get: function get() {
      return _classPrivateFieldGet(this, _ready);
    }
    /**
     * @returns a promise than resolves to the consent data, or null if no consent data is available
     */

  }, {
    key: "promise",
    get: function get() {
      if (!_classPrivateFieldGet(this, _enabled)) {
        _classPrivateFieldGet(this, _resolve).call(this, null);
      }

      return _classPrivateFieldGet(this, _promise);
    }
  }, {
    key: "setConsentData",
    value: function setConsentData(data) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
      this.generatedTime = time;

      _classPrivateFieldGet(this, _resolve).call(this, data);
    }
  }, {
    key: "getConsentData",
    value: function getConsentData() {
      return _classPrivateFieldGet(this, _data);
    }
  }]);

  return ConsentHandler;
}();
var UspConsentHandler = /*#__PURE__*/function (_ConsentHandler) {
  _inherits(UspConsentHandler, _ConsentHandler);

  var _super = _createSuper(UspConsentHandler);

  function UspConsentHandler() {
    _classCallCheck(this, UspConsentHandler);

    return _super.apply(this, arguments);
  }

  _createClass(UspConsentHandler, [{
    key: "getConsentMeta",
    value: function getConsentMeta() {
      var consentData = this.getConsentData();

      if (consentData && this.generatedTime) {
        return {
          usp: consentData,
          generatedAt: this.generatedTime
        };
      }
    }
  }]);

  return UspConsentHandler;
}(ConsentHandler);
var GdprConsentHandler = /*#__PURE__*/function (_ConsentHandler2) {
  _inherits(GdprConsentHandler, _ConsentHandler2);

  var _super2 = _createSuper(GdprConsentHandler);

  function GdprConsentHandler() {
    _classCallCheck(this, GdprConsentHandler);

    return _super2.apply(this, arguments);
  }

  _createClass(GdprConsentHandler, [{
    key: "getConsentMeta",
    value: function getConsentMeta() {
      var consentData = this.getConsentData();

      if (consentData && consentData.vendorData && this.generatedTime) {
        return {
          gdprApplies: consentData.gdprApplies,
          consentStringSize: Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(consentData.vendorData.tcString) ? consentData.vendorData.tcString.length : 0,
          generatedAt: this.generatedTime,
          apiVersion: consentData.apiVersion
        };
      }
    }
  }]);

  return GdprConsentHandler;
}(ConsentHandler);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"}}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = includes;
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayFrom;
/* harmony export (immutable) */ __webpack_exports__["b"] = find;
/* harmony export (immutable) */ __webpack_exports__["c"] = findIndex;
// These stubs are here to help transition away from core-js polyfills for browsers we are no longer supporting.
// You should not need these for new code; use stock JS instead!
function includes(target, elem, start) {
  return target && target.includes(elem, start) || false;
}
function arrayFrom() {
  return Array.from.apply(Array, arguments);
}
function find(arr, pred, thisArg) {
  return arr && arr.find(pred, thisArg);
}
function findIndex(arr, pred, thisArg) {
  return arr && arr.findIndex(pred, thisArg);
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return storageCallbacks; });
/* unused harmony export newStorageManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateStorageEnforcement; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getCoreStorageManager;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStorageManager;
/* unused harmony export resetData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bidderSettings_js__ = __webpack_require__(22);




var moduleTypeWhiteList = ['core', 'prebid-module'];
var storageCallbacks = [];
/**
 * Storage options
 * @typedef {Object} storageOptions
 * @property {Number=} gvlid - Vendor id
 * @property {string} moduleName? - Module name
 * @property {string=} bidderCode? - Bidder code
 * @property {string=} moduleType - Module type, value can be anyone of core or prebid-module
 */

/**
 * Returns list of storage related functions with gvlid, module name and module type in its scope.
 * All three argument are optional here. Below shows the usage of of these
 * - GVL Id: Pass GVL id if you are a vendor
 * - Bidder code: All bid adapters need to pass bidderCode
 * - Module name: All other modules need to pass module name
 * - Module type: Some modules may need these functions but are not vendor. e.g prebid core files in src and modules like currency.
 * @param {storageOptions} options
 */

function newStorageManager() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      gvlid = _ref.gvlid,
      moduleName = _ref.moduleName,
      bidderCode = _ref.bidderCode,
      moduleType = _ref.moduleType;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$bidderSettings = _ref2.bidderSettings,
      bidderSettings = _ref2$bidderSettings === void 0 ? __WEBPACK_IMPORTED_MODULE_3__bidderSettings_js__["a" /* bidderSettings */] : _ref2$bidderSettings;

  function isBidderDisallowed() {
    if (bidderCode == null) {
      return false;
    }

    var storageAllowed = bidderSettings.get(bidderCode, 'storageAllowed');
    return storageAllowed == null ? false : !storageAllowed;
  }

  function isValid(cb) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__polyfill_js__["d" /* includes */])(moduleTypeWhiteList, moduleType)) {
      var result = {
        valid: true
      };
      return cb(result);
    } else if (isBidderDisallowed()) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("bidderSettings denied access to device storage for bidder '".concat(bidderCode, "'"));
      var _result = {
        valid: false
      };
      return cb(_result);
    } else {
      var value;
      var hookDetails = {
        hasEnforcementHook: false
      };
      validateStorageEnforcement(gvlid, bidderCode || moduleName, hookDetails, function (result) {
        if (result && result.hasEnforcementHook) {
          value = cb(result);
        } else {
          var _result2 = {
            hasEnforcementHook: false,
            valid: Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["hasDeviceAccess"])()
          };
          value = cb(_result2);
        }
      });
      return value;
    }
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {string} [expires='']
   * @param {string} [sameSite='/']
   * @param {string} [domain] domain (e.g., 'example.com' or 'subdomain.example.com').
   * If not specified, defaults to the host portion of the current document location.
   * If a domain is specified, subdomains are always included.
   * Domain must match the domain of the JavaScript origin. Setting cookies to foreign domains will be silently ignored.
   */


  var setCookie = function setCookie(key, value, expires, sameSite, domain, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var domainPortion = domain && domain !== '' ? " ;domain=".concat(encodeURIComponent(domain)) : '';
        var expiresPortion = expires && expires !== '' ? " ;expires=".concat(expires) : '';
        var isNone = sameSite != null && sameSite.toLowerCase() == 'none';
        var secure = isNone ? '; Secure' : '';
        document.cookie = "".concat(key, "=").concat(encodeURIComponent(value)).concat(expiresPortion, "; path=/").concat(domainPortion).concat(sameSite ? "; SameSite=".concat(sameSite) : '').concat(secure);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} name
   * @returns {(string|null)}
   */


  var getCookie = function getCookie(name, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var m = window.document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]*)\\s*(;|$)');
        return m ? decodeURIComponent(m[2]) : null;
      }

      return null;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var localStorageIsEnabled = function localStorageIsEnabled(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        try {
          localStorage.setItem('prebid.cookieTest', '1');
          return localStorage.getItem('prebid.cookieTest') === '1';
        } catch (error) {} finally {
          try {
            localStorage.removeItem('prebid.cookieTest');
          } catch (error) {}
        }
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var cookiesAreEnabled = function cookiesAreEnabled(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["checkCookieSupport"])()) {
          return true;
        }

        window.document.cookie = 'prebid.cookieTest';
        return window.document.cookie.indexOf('prebid.cookieTest') !== -1;
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   * @param {string} value
   */


  var setDataInLocalStorage = function setDataInLocalStorage(key, value, done) {
    var cb = function cb(result) {
      if (result && result.valid && hasLocalStorage()) {
        window.localStorage.setItem(key, value);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   * @returns {(string|null)}
   */


  var getDataFromLocalStorage = function getDataFromLocalStorage(key, done) {
    var cb = function cb(result) {
      if (result && result.valid && hasLocalStorage()) {
        return window.localStorage.getItem(key);
      }

      return null;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   */


  var removeDataFromLocalStorage = function removeDataFromLocalStorage(key, done) {
    var cb = function cb(result) {
      if (result && result.valid && hasLocalStorage()) {
        window.localStorage.removeItem(key);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var hasLocalStorage = function hasLocalStorage(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        try {
          return !!window.localStorage;
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Local storage api disabled');
        }
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * Returns all cookie values from the jar whose names contain the `keyLike`
   * Needs to exist in `utils.js` as it follows the StorageHandler interface defined in live-connect-js. If that module were to be removed, this function can go as well.
   * @param {string} keyLike
   * @return {[]}
   */


  var findSimilarCookies = function findSimilarCookies(keyLike, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var all = [];

        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["hasDeviceAccess"])()) {
          var cookies = document.cookie.split(';');

          while (cookies.length) {
            var cookie = cookies.pop();
            var separatorIndex = cookie.indexOf('=');
            separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
            var cookieName = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));

            if (cookieName.indexOf(keyLike) >= 0) {
              all.push(decodeURIComponent(cookie.slice(separatorIndex + 1)));
            }
          }
        }

        return all;
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };

  return {
    setCookie: setCookie,
    getCookie: getCookie,
    localStorageIsEnabled: localStorageIsEnabled,
    cookiesAreEnabled: cookiesAreEnabled,
    setDataInLocalStorage: setDataInLocalStorage,
    getDataFromLocalStorage: getDataFromLocalStorage,
    removeDataFromLocalStorage: removeDataFromLocalStorage,
    hasLocalStorage: hasLocalStorage,
    findSimilarCookies: findSimilarCookies
  };
}
/**
 * This hook validates the storage enforcement if gdprEnforcement module is included
 */

var validateStorageEnforcement = Object(__WEBPACK_IMPORTED_MODULE_0__hook_js__["b" /* hook */])('async', function (gvlid, moduleName, hookDetails, callback) {
  callback(hookDetails);
}, 'validateStorageEnforcement');
/**
 * This function returns storage functions to access cookies and localstorage. This function will bypass the gdpr enforcement requirement. Prebid as a software needs to use storage in some scenarios and is not a vendor so GDPR enforcement rules does not apply on Prebid.
 * @param {string} moduleName Module name
 */

function getCoreStorageManager(moduleName) {
  return newStorageManager({
    moduleName: moduleName,
    moduleType: 'core'
  });
}
/**
 * Note: Core modules or Prebid modules like Currency, SizeMapping should use getCoreStorageManager
 * This function returns storage functions to access cookies and localstorage. Bidders and User id modules should import this and use it in their module if needed.
 * Bid adapters should always provide `bidderCode`. GVL ID and Module name are optional param but gvl id is needed for when gdpr enforcement module is used.
 * @param {Number=} gvlid? Vendor id - required for proper GDPR integration
 * @param {string=} bidderCode? - required for bid adapters
 * @param {string=} moduleName? module name
 */

function getStorageManager() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      gvlid = _ref3.gvlid,
      moduleName = _ref3.moduleName,
      bidderCode = _ref3.bidderCode;

  if (arguments.length > 1 || arguments.length > 0 && !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isPlainObject"])(arguments[0])) {
    throw new Error('Invalid invocation for getStorageManager');
  }

  return newStorageManager({
    gvlid: gvlid,
    moduleName: moduleName,
    bidderCode: bidderCode
  });
}
function resetData() {
  storageCallbacks = [];
}

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHook; });
/* harmony export (immutable) */ __webpack_exports__["d"] = setupBeforeHookFnOnce;
/* harmony export (immutable) */ __webpack_exports__["c"] = module;
/* harmony export (immutable) */ __webpack_exports__["e"] = submodule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var hook = __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default()({
  ready: __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.SYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.ASYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.QUEUE
});
var getHook = hook.get;
function setupBeforeHookFnOnce(baseFn, hookFn) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
  var result = baseFn.getHooks({
    hook: hookFn
  });

  if (result.length === 0) {
    baseFn.before(hookFn, priority);
  }
}
var submoduleInstallMap = {};
function module(name, install) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$postInstallAllow = _ref.postInstallAllowed,
      postInstallAllowed = _ref$postInstallAllow === void 0 ? false : _ref$postInstallAllow;

  hook('async', function (submodules) {
    submodules.forEach(function (args) {
      return install.apply(void 0, _toConsumableArray(args));
    });
    if (postInstallAllowed) submoduleInstallMap[name] = install;
  }, name)([]); // will be queued until hook.ready() called in pbjs.processQueue();
}
function submodule(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var install = submoduleInstallMap[name];
  if (install) return install.apply(void 0, args);
  getHook(name).before(function (next, modules) {
    modules.push(args);
    next(modules);
  });
}

/***/ })

/******/ });

pbjsChunk([389],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["callPrebidCacheHook"] = callPrebidCacheHook;
/* harmony export (immutable) */ __webpack_exports__["checkAdUnitSetupHook"] = checkAdUnitSetupHook;
/* harmony export (immutable) */ __webpack_exports__["checkVideoBidSetupHook"] = checkVideoBidSetupHook;
/* harmony export (immutable) */ __webpack_exports__["adpodSetConfig"] = adpodSetConfig;
/* harmony export (immutable) */ __webpack_exports__["callPrebidCacheAfterAuction"] = callPrebidCacheAfterAuction;
/* harmony export (immutable) */ __webpack_exports__["sortByPricePerSecond"] = sortByPricePerSecond;
/* harmony export (immutable) */ __webpack_exports__["getTargeting"] = getTargeting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_auction_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_prebid_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_video_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_videoCache_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__src_constants_json__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This module houses the functionality to evaluate and process adpod adunits/bids.  Specifically there are several hooked functions,
 * that either supplement the base function (ie to check something additional or unique to adpod objects) or to replace the base function
 * entirely when appropriate.
 *
 * Brief outline of each hook:
 * - `callPrebidCacheHook` - for any adpod bids, this function will temporarily hold them in a queue in order to send the bids to Prebid Cache in bulk
 * - `checkAdUnitSetupHook` - evaluates the adUnits to ensure that required fields for adpod adUnits are present.  Invalid adpod adUntis are removed from the array.
 * - `checkVideoBidSetupHook` - evaluates the adpod bid returned from an adaptor/bidder to ensure required fields are populated; also initializes duration bucket field.
 *
 * To initialize the module, there is an `initAdpodHooks()` function that should be imported and executed by a corresponding `...AdServerVideo`
 * module that designed to support adpod video type ads.  This import process allows this module to effectively act as a sub-module.
 */











var TARGETING_KEY_PB_CAT_DUR = 'hb_pb_cat_dur';
var TARGETING_KEY_CACHE_ID = 'hb_cache_id';
var queueTimeDelay = 50;
var queueSizeLimit = 5;
var bidCacheRegistry = createBidCacheRegistry();
/**
 * Create a registry object that stores/manages bids while be held in queue for Prebid Cache.
 * @returns registry object with defined accessor functions
 */

function createBidCacheRegistry() {
  var registry = {};

  function setupRegistrySlot(auctionId) {
    registry[auctionId] = {};
    registry[auctionId].bidStorage = new Set();
    registry[auctionId].queueDispatcher = createDispatcher(queueTimeDelay);
    registry[auctionId].initialCacheKey = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["generateUUID"])();
  }

  return {
    addBid: function addBid(bid) {
      // create parent level object based on auction ID (in case there are concurrent auctions running) to store objects for that auction
      if (!registry[bid.auctionId]) {
        setupRegistrySlot(bid.auctionId);
      }

      registry[bid.auctionId].bidStorage.add(bid);
    },
    removeBid: function removeBid(bid) {
      registry[bid.auctionId].bidStorage.delete(bid);
    },
    getBids: function getBids(bid) {
      return registry[bid.auctionId] && registry[bid.auctionId].bidStorage.values();
    },
    getQueueDispatcher: function getQueueDispatcher(bid) {
      return registry[bid.auctionId] && registry[bid.auctionId].queueDispatcher;
    },
    setupInitialCacheKey: function setupInitialCacheKey(bid) {
      if (!registry[bid.auctionId]) {
        registry[bid.auctionId] = {};
        registry[bid.auctionId].initialCacheKey = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["generateUUID"])();
      }
    },
    getInitialCacheKey: function getInitialCacheKey(bid) {
      return registry[bid.auctionId] && registry[bid.auctionId].initialCacheKey;
    }
  };
}
/**
 * Creates a function that when called updates the bid queue and extends the running timer (when called subsequently).
 * Once the time threshold for the queue (defined by queueSizeLimit) is reached, the queue will be flushed by calling the `firePrebidCacheCall` function.
 * If there is a long enough time between calls (based on timeoutDration), the queue will automatically flush itself.
 * @param {Number} timeoutDuration number of milliseconds to pass before timer expires and current bid queue is flushed
 * @returns {Function}
 */


function createDispatcher(timeoutDuration) {
  var timeout;
  var counter = 1;
  return function (auctionInstance, bidListArr, afterBidAdded, killQueue) {
    var context = this;

    var callbackFn = function callbackFn() {
      firePrebidCacheCall.call(context, auctionInstance, bidListArr, afterBidAdded);
    };

    clearTimeout(timeout);

    if (!killQueue) {
      // want to fire off the queue if either: size limit is reached or time has passed since last call to dispatcher
      if (counter === queueSizeLimit) {
        counter = 1;
        callbackFn();
      } else {
        counter++;
        timeout = setTimeout(callbackFn, timeoutDuration);
      }
    } else {
      counter = 1;
    }
  };
}

function getPricePartForAdpodKey(bid) {
  var pricePart;
  var prioritizeDeals = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.prioritizeDeals');

  if (prioritizeDeals && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.dealTier')) {
    var adpodDealPrefix = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig("adpod.dealTier.".concat(bid.bidderCode, ".prefix"));
    pricePart = adpodDealPrefix ? adpodDealPrefix + Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.dealTier') : Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.dealTier');
  } else {
    var granularity = Object(__WEBPACK_IMPORTED_MODULE_1__src_auction_js__["i" /* getPriceGranularity */])(bid);
    pricePart = Object(__WEBPACK_IMPORTED_MODULE_1__src_auction_js__["h" /* getPriceByGranularity */])(granularity)(bid);
  }

  return pricePart;
}
/**
 * This function reads certain fields from the bid to generate a specific key used for caching the bid in Prebid Cache
 * @param {Object} bid bid object to update
 * @param {Boolean} brandCategoryExclusion value read from setConfig; influences whether category is required or not
 */


function attachPriceIndustryDurationKeyToBid(bid, brandCategoryExclusion) {
  var initialCacheKey = bidCacheRegistry.getInitialCacheKey(bid);
  var duration = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.durationBucket');
  var pricePart = getPricePartForAdpodKey(bid);
  var pcd;

  if (brandCategoryExclusion) {
    var category = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'meta.adServerCatId');
    pcd = "".concat(pricePart, "_").concat(category, "_").concat(duration, "s");
  } else {
    pcd = "".concat(pricePart, "_").concat(duration, "s");
  }

  if (!bid.adserverTargeting) {
    bid.adserverTargeting = {};
  }

  bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR] = pcd;
  bid.adserverTargeting[TARGETING_KEY_CACHE_ID] = initialCacheKey;
  bid.videoCacheKey = initialCacheKey;
  bid.customCacheKey = "".concat(pcd, "_").concat(initialCacheKey);
}
/**
 * Updates the running queue for the associated auction.
 * Does a check to ensure the auction is still running; if it's not - the previously running queue is killed.
 * @param {*} auctionInstance running context of the auction
 * @param {Object} bidResponse bid object being added to queue
 * @param {Function} afterBidAdded callback function used when Prebid Cache responds
 */


function updateBidQueue(auctionInstance, bidResponse, afterBidAdded) {
  var bidListIter = bidCacheRegistry.getBids(bidResponse);

  if (bidListIter) {
    var bidListArr = Object(__WEBPACK_IMPORTED_MODULE_8__src_polyfill_js__["a" /* arrayFrom */])(bidListIter);
    var callDispatcher = bidCacheRegistry.getQueueDispatcher(bidResponse);
    var killQueue = !!(auctionInstance.getAuctionStatus() !== __WEBPACK_IMPORTED_MODULE_1__src_auction_js__["b" /* AUCTION_IN_PROGRESS */]);
    callDispatcher(auctionInstance, bidListArr, afterBidAdded, killQueue);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('Attempted to cache a bid from an unknown auction. Bid:', bidResponse);
  }
}
/**
 * Small helper function to remove bids from internal storage; normally b/c they're about to sent to Prebid Cache for processing.
 * @param {Array[Object]} bidResponses list of bids to remove
 */


function removeBidsFromStorage(bidResponses) {
  for (var i = 0; i < bidResponses.length; i++) {
    bidCacheRegistry.removeBid(bidResponses[i]);
  }
}
/**
 * This function will send a list of bids to Prebid Cache.  It also removes the same bids from the internal bidCacheRegistry
 * to maintain which bids are in queue.
 * If the bids are successfully cached, they will be added to the respective auction.
 * @param {*} auctionInstance running context of the auction
 * @param {Array[Object]} bidList list of bid objects that need to be sent to Prebid Cache
 * @param {Function} afterBidAdded callback function used when Prebid Cache responds
 */


function firePrebidCacheCall(auctionInstance, bidList, afterBidAdded) {
  // remove entries now so other incoming bids won't accidentally have a stale version of the list while PBC is processing the current submitted list
  removeBidsFromStorage(bidList);
  Object(__WEBPACK_IMPORTED_MODULE_5__src_videoCache_js__["b" /* store */])(bidList, function (error, cacheIds) {
    if (error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("Failed to save to the video cache: ".concat(error, ". Video bid(s) must be discarded."));

      for (var i = 0; i < bidList.length; i++) {
        Object(__WEBPACK_IMPORTED_MODULE_1__src_auction_js__["g" /* doCallbacksIfTimedout */])(auctionInstance, bidList[i]);
      }
    } else {
      for (var _i = 0; _i < cacheIds.length; _i++) {
        // when uuid in response is empty string then the key already existed, so this bid wasn't cached
        if (cacheIds[_i].uuid !== '') {
          Object(__WEBPACK_IMPORTED_MODULE_1__src_auction_js__["d" /* addBidToAuction */])(auctionInstance, bidList[_i]);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(bidList[_i].customCacheKey, ". Bid was: "), bidList[_i]);
        }

        afterBidAdded();
      }
    }
  });
}
/**
 * This is the main hook function to handle adpod bids; maintains the logic to temporarily hold bids in a queue in order to send bulk requests to Prebid Cache.
 * @param {Function} fn reference to original function (used by hook logic)
 * @param {*} auctionInstance running context of the auction
 * @param {Object} bidResponse incoming bid; if adpod, will be processed through hook function.  If not adpod, returns to original function.
 * @param {Function} afterBidAdded callback function used when Prebid Cache responds
 * @param {Object} videoConfig mediaTypes.video from the bid's adUnit
 */


function callPrebidCacheHook(fn, auctionInstance, bidResponse, afterBidAdded, videoConfig) {
  if (videoConfig && videoConfig.context === __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__["a" /* ADPOD */]) {
    var brandCategoryExclusion = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion');
    var adServerCatId = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidResponse, 'meta.adServerCatId');

    if (!adServerCatId && brandCategoryExclusion) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:', bidResponse);
      afterBidAdded();
    } else {
      if (__WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.deferCaching') === false) {
        bidCacheRegistry.addBid(bidResponse);
        attachPriceIndustryDurationKeyToBid(bidResponse, brandCategoryExclusion);
        updateBidQueue(auctionInstance, bidResponse, afterBidAdded);
      } else {
        // generate targeting keys for bid
        bidCacheRegistry.setupInitialCacheKey(bidResponse);
        attachPriceIndustryDurationKeyToBid(bidResponse, brandCategoryExclusion); // add bid to auction

        Object(__WEBPACK_IMPORTED_MODULE_1__src_auction_js__["d" /* addBidToAuction */])(auctionInstance, bidResponse);
        afterBidAdded();
      }
    }
  } else {
    fn.call(this, auctionInstance, bidResponse, afterBidAdded, videoConfig);
  }
}
/**
 * This hook function will review the adUnit setup and verify certain required values are present in any adpod adUnits.
 * If the fields are missing or incorrectly setup, the adUnit is removed from the list.
 * @param {Function} fn reference to original function (used by hook logic)
 * @param {Array[Object]} adUnits list of adUnits to be evaluated
 * @returns {Array[Object]} list of adUnits that passed the check
 */

function checkAdUnitSetupHook(fn, adUnits) {
  var goodAdUnits = adUnits.filter(function (adUnit) {
    var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(adUnit, 'mediaTypes');
    var videoConfig = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(mediaTypes, 'video');

    if (videoConfig && videoConfig.context === __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__["a" /* ADPOD */]) {
      // run check to see if other mediaTypes are defined (ie multi-format); reject adUnit if so
      if (Object.keys(mediaTypes).length > 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("Detected more than one mediaType in adUnitCode: ".concat(adUnit.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction."));
        return false;
      }

      var errMsg = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(adUnit.code, ".  This adUnit will be removed from the auction.");
      var playerSize = !!(videoConfig.playerSize && (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(videoConfig.playerSize, 2) || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(videoConfig.playerSize) && videoConfig.playerSize.every(function (sz) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(sz, 2);
      })) || videoConfig.sizeConfig);
      var adPodDurationSec = !!(videoConfig.adPodDurationSec && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"])(videoConfig.adPodDurationSec) && videoConfig.adPodDurationSec > 0);
      var durationRangeSec = !!(videoConfig.durationRangeSec && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(videoConfig.durationRangeSec) && videoConfig.durationRangeSec.every(function (range) {
        return range > 0;
      }));

      if (!playerSize || !adPodDurationSec || !durationRangeSec) {
        errMsg += !playerSize ? '\nmediaTypes.video.playerSize' : '';
        errMsg += !adPodDurationSec ? '\nmediaTypes.video.adPodDurationSec' : '';
        errMsg += !durationRangeSec ? '\nmediaTypes.video.durationRangeSec' : '';
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(errMsg);
        return false;
      }
    }

    return true;
  });
  adUnits = goodAdUnits;
  fn.call(this, adUnits);
}
/**
 * This check evaluates the incoming bid's `video.durationSeconds` field and tests it against specific logic depending on adUnit config.  Summary of logic below:
 * when adUnit.mediaTypes.video.requireExactDuration is true
 *  - only bids that exactly match those listed values are accepted (don't round at all).
 *  - populate the `bid.video.durationBucket` field with the matching duration value
 * when adUnit.mediaTypes.video.requireExactDuration is false
 *  - round the duration to the next highest specified duration value based on adunit.  If the duration is above a range within a set buffer, that bid falls down into that bucket.
 *      (eg if range was [5, 15, 30] -> 2s is rounded to 5s; 17s is rounded back to 15s; 18s is rounded up to 30s)
 *  - if the bid is above the range of the listed durations (and outside the buffer), reject the bid
 *  - set the rounded duration value in the `bid.video.durationBucket` field for accepted bids
 * @param {Object} videoMediaType 'mediaTypes.video' associated to bidResponse
 * @param {Object} bidResponse incoming bidResponse being evaluated by bidderFactory
 * @returns {boolean} return false if bid duration is deemed invalid as per adUnit configuration; return true if fine
*/

function checkBidDuration(videoMediaType, bidResponse) {
  var buffer = 2;
  var bidDuration = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidResponse, 'video.durationSeconds');
  var adUnitRanges = videoMediaType.durationRangeSec;
  adUnitRanges.sort(function (a, b) {
    return a - b;
  }); // ensure the ranges are sorted in numeric order

  if (!videoMediaType.requireExactDuration) {
    var max = Math.max.apply(Math, _toConsumableArray(adUnitRanges));

    if (bidDuration <= max + buffer) {
      var nextHighestRange = Object(__WEBPACK_IMPORTED_MODULE_8__src_polyfill_js__["b" /* find */])(adUnitRanges, function (range) {
        return range + buffer >= bidDuration;
      });
      bidResponse.video.durationBucket = nextHighestRange;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", bidResponse);
      return false;
    }
  } else {
    if (Object(__WEBPACK_IMPORTED_MODULE_8__src_polyfill_js__["b" /* find */])(adUnitRanges, function (range) {
      return range === bidDuration;
    })) {
      bidResponse.video.durationBucket = bidDuration;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", bidResponse);
      return false;
    }
  }

  return true;
}
/**
 * This hooked function evaluates an adpod bid and determines if the required fields are present.
 * If it's found to not be an adpod bid, it will return to original function via hook logic
 * @param {Function} fn reference to original function (used by hook logic)
 * @param {Object} bid incoming bid object
 * @param {Object} adUnit adUnit object of associated bid
 * @param {Object} videoMediaType copy of the `bidRequest.mediaTypes.video` object; used in original function
 * @param {String} context value of the `bidRequest.mediaTypes.video.context` field; used in original function
 * @returns {boolean} this return is only used for adpod bids
 */


function checkVideoBidSetupHook(fn, bid, adUnit, videoMediaType, context) {
  if (context === __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__["a" /* ADPOD */]) {
    var result = true;
    var brandCategoryExclusion = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion');

    if (brandCategoryExclusion && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'meta.primaryCatId')) {
      result = false;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video')) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.context') || bid.video.context !== __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__["a" /* ADPOD */]) {
        result = false;
      }

      if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.durationSeconds') || bid.video.durationSeconds <= 0) {
        result = false;
      } else {
        var isBidGood = checkBidDuration(videoMediaType, bid);
        if (!isBidGood) result = false;
      }
    }

    if (!__WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: \"...\"} });\n      ");
      result = false;
    }

    ;
    fn.bail(result);
  } else {
    fn.call(this, bid, adUnit, videoMediaType, context);
  }
}
/**
 * This function reads the (optional) settings for the adpod as set from the setConfig()
 * @param {Object} config contains the config settings for adpod module
 */

function adpodSetConfig(config) {
  if (config.bidQueueTimeDelay !== undefined) {
    if (typeof config.bidQueueTimeDelay === 'number' && config.bidQueueTimeDelay > 0) {
      queueTimeDelay = config.bidQueueTimeDelay;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(queueTimeDelay));
    }
  }

  if (config.bidQueueSizeLimit !== undefined) {
    if (typeof config.bidQueueSizeLimit === 'number' && config.bidQueueSizeLimit > 0) {
      queueSizeLimit = config.bidQueueSizeLimit;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(queueSizeLimit));
    }
  }
}
__WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod', function (config) {
  return adpodSetConfig(config.adpod);
});
/**
 * This function initializes the adpod module's hooks.  This is called by the corresponding adserver video module.
 */

function initAdpodHooks() {
  Object(__WEBPACK_IMPORTED_MODULE_4__src_hook_js__["d" /* setupBeforeHookFnOnce */])(__WEBPACK_IMPORTED_MODULE_1__src_auction_js__["f" /* callPrebidCache */], callPrebidCacheHook);
  Object(__WEBPACK_IMPORTED_MODULE_4__src_hook_js__["d" /* setupBeforeHookFnOnce */])(__WEBPACK_IMPORTED_MODULE_2__src_prebid_js__["checkAdUnitSetup"], checkAdUnitSetupHook);
  Object(__WEBPACK_IMPORTED_MODULE_4__src_hook_js__["d" /* setupBeforeHookFnOnce */])(__WEBPACK_IMPORTED_MODULE_3__src_video_js__["c" /* checkVideoBidSetup */], checkVideoBidSetupHook);
}

initAdpodHooks();
/**
 *
 * @param {Array[Object]} bids list of 'winning' bids that need to be cached
 * @param {Function} callback send the cached bids (or error) back to adserverVideoModule for further processing
 }}
 */

function callPrebidCacheAfterAuction(bids, callback) {
  // will call PBC here and execute cb param to initialize player code
  Object(__WEBPACK_IMPORTED_MODULE_5__src_videoCache_js__["b" /* store */])(bids, function (error, cacheIds) {
    if (error) {
      callback(error, null);
    } else {
      var successfulCachedBids = [];

      for (var i = 0; i < cacheIds.length; i++) {
        if (cacheIds[i] !== '') {
          successfulCachedBids.push(bids[i]);
        }
      }

      callback(null, successfulCachedBids);
    }
  });
}
/**
 * Compare function to be used in sorting long-form bids. This will compare bids on price per second.
 * @param {Object} bid
 * @param {Object} bid
 */

function sortByPricePerSecond(a, b) {
  if (a.adserverTargeting[__WEBPACK_IMPORTED_MODULE_10__src_constants_json___default.a.TARGETING_KEYS.PRICE_BUCKET] / a.video.durationBucket < b.adserverTargeting[__WEBPACK_IMPORTED_MODULE_10__src_constants_json___default.a.TARGETING_KEYS.PRICE_BUCKET] / b.video.durationBucket) {
    return 1;
  }

  if (a.adserverTargeting[__WEBPACK_IMPORTED_MODULE_10__src_constants_json___default.a.TARGETING_KEYS.PRICE_BUCKET] / a.video.durationBucket > b.adserverTargeting[__WEBPACK_IMPORTED_MODULE_10__src_constants_json___default.a.TARGETING_KEYS.PRICE_BUCKET] / b.video.durationBucket) {
    return -1;
  }

  return 0;
}
/**
 * This function returns targeting keyvalue pairs for long-form adserver modules. Freewheel and GAM are currently supporting Prebid long-form
 * @param {Object} options
 * @param {Array[string]} codes
 * @param {function} callback
 * @returns targeting kvs for adUnitCodes
 */

function getTargeting() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      codes = _ref.codes,
      callback = _ref.callback;

  if (!callback) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('No callback function was defined in the getTargeting call.  Aborting getTargeting().');
    return;
  }

  codes = codes || [];
  var adPodAdUnits = getAdPodAdUnits(codes);
  var bidsReceived = __WEBPACK_IMPORTED_MODULE_9__src_auctionManager_js__["a" /* auctionManager */].getBidsReceived();
  var competiveExclusionEnabled = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion');
  var deferCachingSetting = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.deferCaching');
  var deferCachingEnabled = typeof deferCachingSetting === 'boolean' ? deferCachingSetting : true;
  var bids = getBidsForAdpod(bidsReceived, adPodAdUnits);
  bids = competiveExclusionEnabled || deferCachingEnabled ? getExclusiveBids(bids) : bids;
  var prioritizeDeals = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig('adpod.prioritizeDeals');

  if (prioritizeDeals) {
    var _bids$reduce = bids.reduce(function (partitions, bid) {
      var bidDealTier = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'video.dealTier');
      var minDealTier = __WEBPACK_IMPORTED_MODULE_6__src_config_js__["b" /* config */].getConfig("adpod.dealTier.".concat(bid.bidderCode, ".minDealTier"));

      if (minDealTier && bidDealTier) {
        if (bidDealTier >= minDealTier) {
          partitions[1].push(bid);
        } else {
          partitions[0].push(bid);
        }
      } else if (bidDealTier) {
        partitions[1].push(bid);
      } else {
        partitions[0].push(bid);
      }

      return partitions;
    }, [[], []]),
        _bids$reduce2 = _slicedToArray(_bids$reduce, 2),
        otherBids = _bids$reduce2[0],
        highPriorityDealBids = _bids$reduce2[1];

    highPriorityDealBids.sort(sortByPricePerSecond);
    otherBids.sort(sortByPricePerSecond);
    bids = highPriorityDealBids.concat(otherBids);
  } else {
    bids.sort(sortByPricePerSecond);
  }

  var targeting = {};

  if (deferCachingEnabled === false) {
    adPodAdUnits.forEach(function (adUnit) {
      var adPodTargeting = [];
      var adPodDurationSeconds = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.adPodDurationSec');
      bids.filter(function (bid) {
        return bid.adUnitCode === adUnit.code;
      }).forEach(function (bid, index, arr) {
        if (bid.video.durationBucket <= adPodDurationSeconds) {
          adPodTargeting.push(_defineProperty({}, TARGETING_KEY_PB_CAT_DUR, bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR]));
          adPodDurationSeconds -= bid.video.durationBucket;
        }

        if (index === arr.length - 1 && adPodTargeting.length > 0) {
          adPodTargeting.push(_defineProperty({}, TARGETING_KEY_CACHE_ID, bid.adserverTargeting[TARGETING_KEY_CACHE_ID]));
        }
      });
      targeting[adUnit.code] = adPodTargeting;
    });
    callback(null, targeting);
  } else {
    var bidsToCache = [];
    adPodAdUnits.forEach(function (adUnit) {
      var adPodDurationSeconds = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.adPodDurationSec');
      bids.filter(function (bid) {
        return bid.adUnitCode === adUnit.code;
      }).forEach(function (bid) {
        if (bid.video.durationBucket <= adPodDurationSeconds) {
          bidsToCache.push(bid);
          adPodDurationSeconds -= bid.video.durationBucket;
        }
      });
    });
    callPrebidCacheAfterAuction(bidsToCache, function (error, bidsSuccessfullyCached) {
      if (error) {
        callback(error, null);
      } else {
        var groupedBids = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["groupBy"])(bidsSuccessfullyCached, 'adUnitCode');
        Object.keys(groupedBids).forEach(function (adUnitCode) {
          var adPodTargeting = [];
          groupedBids[adUnitCode].forEach(function (bid, index, arr) {
            adPodTargeting.push(_defineProperty({}, TARGETING_KEY_PB_CAT_DUR, bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR]));

            if (index === arr.length - 1 && adPodTargeting.length > 0) {
              adPodTargeting.push(_defineProperty({}, TARGETING_KEY_CACHE_ID, bid.adserverTargeting[TARGETING_KEY_CACHE_ID]));
            }
          });
          targeting[adUnitCode] = adPodTargeting;
        });
        callback(null, targeting);
      }
    });
  }

  return targeting;
}
/**
 * This function returns the adunit of mediaType adpod
 * @param {Array} codes adUnitCodes
 * @returns {Array[Object]} adunits of mediaType adpod
 */

function getAdPodAdUnits(codes) {
  return __WEBPACK_IMPORTED_MODULE_9__src_auctionManager_js__["a" /* auctionManager */].getAdUnits().filter(function (adUnit) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.context') === __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__["a" /* ADPOD */];
  }).filter(function (adUnit) {
    return codes.length > 0 ? codes.indexOf(adUnit.code) != -1 : true;
  });
}
/**
 * This function removes bids of same category. It will be used when competitive exclusion is enabled.
 * @param {Array[Object]} bidsReceived
 * @returns {Array[Object]} unique category bids
 */


function getExclusiveBids(bidsReceived) {
  var bids = bidsReceived.map(function (bid) {
    return _extends({}, bid, _defineProperty({}, TARGETING_KEY_PB_CAT_DUR, bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR]));
  });
  bids = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["groupBy"])(bids, TARGETING_KEY_PB_CAT_DUR);
  var filteredBids = [];
  Object.keys(bids).forEach(function (targetingKey) {
    bids[targetingKey].sort(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["compareOn"])('responseTimestamp'));
    filteredBids.push(bids[targetingKey][0]);
  });
  return filteredBids;
}
/**
 * This function returns bids for adpod adunits
 * @param {Array[Object]} bidsReceived
 * @param {Array[Object]} adPodAdUnits
 * @returns {Array[Object]} bids of mediaType adpod
 */


function getBidsForAdpod(bidsReceived, adPodAdUnits) {
  var adUnitCodes = adPodAdUnits.map(function (adUnit) {
    return adUnit.code;
  });
  return bidsReceived.filter(function (bid) {
    return adUnitCodes.indexOf(bid.adUnitCode) != -1 && bid.video && bid.video.context === __WEBPACK_IMPORTED_MODULE_7__src_mediaTypes_js__["a" /* ADPOD */];
  });
}

var sharedMethods = {
  TARGETING_KEY_PB_CAT_DUR: TARGETING_KEY_PB_CAT_DUR,
  TARGETING_KEY_CACHE_ID: TARGETING_KEY_CACHE_ID,
  'getTargeting': getTargeting
};
Object.freeze(sharedMethods);
Object(__WEBPACK_IMPORTED_MODULE_4__src_hook_js__["c" /* module */])('adpod', function shareAdpodUtilities() {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(arguments.length <= 0 ? undefined : arguments[0])) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('Adpod module needs plain object to share methods with submodule');
    return;
  }

  function addMethods(object, func) {
    for (var name in func) {
      object[name] = func[name];
    }
  }

  addMethods(arguments.length <= 0 ? undefined : arguments[0], sharedMethods);
});
window.pbjs.installedModules.push('adpod');

/***/ })

},[103]);

pbjsChunk([364],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Renderer_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_video_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_storageManager_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_bidderSettings_js__ = __webpack_require__(22);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var BIDDER_CODE = 'appnexus';
var URL = 'https://ib.adnxs.com/ut/v3/prebid';
var URL_SIMPLE = 'https://ib.adnxs-simple.com/ut/v3/prebid';
var VIDEO_TARGETING = ['id', 'minduration', 'maxduration', 'skippable', 'playback_method', 'frameworks', 'context', 'skipoffset'];
var VIDEO_RTB_TARGETING = ['minduration', 'maxduration', 'skip', 'skipafter', 'playbackmethod', 'api'];
var USER_PARAMS = ['age', 'externalUid', 'segments', 'gender', 'dnt', 'language'];
var APP_DEVICE_PARAMS = ['geo', 'device_id']; // appid is collected separately

var DEBUG_PARAMS = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
var VIDEO_MAPPING = {
  playback_method: {
    'unknown': 0,
    'auto_play_sound_on': 1,
    'auto_play_sound_off': 2,
    'click_to_play': 3,
    'mouse_over': 4,
    'auto_play_sound_unknown': 5
  },
  context: {
    'unknown': 0,
    'pre_roll': 1,
    'mid_roll': 2,
    'post_roll': 3,
    'outstream': 4,
    'in-banner': 5
  }
};
var NATIVE_MAPPING = {
  body: 'description',
  body2: 'desc2',
  cta: 'ctatext',
  image: {
    serverName: 'main_image',
    requiredParams: {
      required: true
    }
  },
  icon: {
    serverName: 'icon',
    requiredParams: {
      required: true
    }
  },
  sponsoredBy: 'sponsored_by',
  privacyLink: 'privacy_link',
  salePrice: 'saleprice',
  displayUrl: 'displayurl'
};
var SOURCE = 'pbjs';
var MAX_IMPS_PER_REQUEST = 15;
var mappingFileUrl = 'https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json';
var SCRIPT_TAG_START = '<script';
var VIEWABILITY_URL_START = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/;
var VIEWABILITY_FILE_NAME = 'trk.js';
var GVLID = 32;
var storage = Object(__WEBPACK_IMPORTED_MODULE_8__src_storageManager_js__["b" /* getStorageManager */])({
  gvlid: GVLID,
  bidderCode: BIDDER_CODE
});
var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  aliases: [{
    code: 'appnexusAst',
    gvlid: 32
  }, {
    code: 'brealtime'
  }, {
    code: 'emxdigital',
    gvlid: 183
  }, {
    code: 'pagescience'
  }, {
    code: 'defymedia'
  }, {
    code: 'gourmetads'
  }, {
    code: 'matomy'
  }, {
    code: 'featureforward'
  }, {
    code: 'oftmedia'
  }, {
    code: 'districtm',
    gvlid: 144
  }, {
    code: 'adasta'
  }, {
    code: 'beintoo',
    gvlid: 618
  }],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.placementId || bid.params.member && bid.params.invCode);
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var tags = bidRequests.map(bidToTag);
    var userObjBid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasUserInfo);
    var userObj = {};

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      userObj = {
        'coppa': true
      };
    }

    if (userObjBid) {
      Object.keys(userObjBid.params.user).filter(function (param) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(USER_PARAMS, param);
      }).forEach(function (param) {
        var uparam = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertCamelToUnderscore"])(param);

        if (param === 'segments' && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(userObjBid.params.user[param])) {
          var segs = [];
          userObjBid.params.user[param].forEach(function (val) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"])(val)) {
              segs.push({
                'id': val
              });
            } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(val)) {
              segs.push(val);
            }
          });
          userObj[uparam] = segs;
        } else if (param !== 'segments') {
          userObj[uparam] = userObjBid.params.user[param];
        }
      });
    }

    var appDeviceObjBid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasAppDeviceInfo);
    var appDeviceObj;

    if (appDeviceObjBid && appDeviceObjBid.params && appDeviceObjBid.params.app) {
      appDeviceObj = {};
      Object.keys(appDeviceObjBid.params.app).filter(function (param) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(APP_DEVICE_PARAMS, param);
      }).forEach(function (param) {
        return appDeviceObj[param] = appDeviceObjBid.params.app[param];
      });
    }

    var appIdObjBid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasAppId);
    var appIdObj;

    if (appIdObjBid && appIdObjBid.params && appDeviceObjBid.params.app && appDeviceObjBid.params.app.id) {
      appIdObj = {
        appid: appIdObjBid.params.app.id
      };
    }

    var debugObj = {};
    var debugObjParams = {};
    var debugCookieName = 'apn_prebid_debug';
    var debugCookie = storage.getCookie(debugCookieName) || null;

    if (debugCookie) {
      try {
        debugObj = JSON.parse(debugCookie);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('AppNexus Debug Auction Cookie Error:\n\n' + e);
      }
    } else {
      var debugBidRequest = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasDebug);

      if (debugBidRequest && debugBidRequest.debug) {
        debugObj = debugBidRequest.debug;
      }
    }

    if (debugObj && debugObj.enabled) {
      Object.keys(debugObj).filter(function (param) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(DEBUG_PARAMS, param);
      }).forEach(function (param) {
        debugObjParams[param] = debugObj[param];
      });
    }

    var memberIdBid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasMemberId);
    var member = memberIdBid ? parseInt(memberIdBid.params.member, 10) : 0;
    var schain = bidRequests[0].schain;
    var omidSupport = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasOmidSupport);
    var payload = {
      tags: _toConsumableArray(tags),
      user: userObj,
      sdk: {
        source: SOURCE,
        version: "6.15.0-pre"
      },
      schain: schain
    };

    if (omidSupport) {
      payload['iab_support'] = {
        omidpn: 'Appnexus',
        omidpv: "6.15.0-pre"
      };
    }

    if (member > 0) {
      payload.member_id = member;
    }

    if (appDeviceObjBid) {
      payload.device = appDeviceObj;
    }

    if (appIdObjBid) {
      payload.app = appIdObj;
    }

    var auctionKeywords = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('appnexusAuctionKeywords');

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(auctionKeywords)) {
      var aucKeywords = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["transformBidderParamKeywords"])(auctionKeywords);

      if (aucKeywords.length > 0) {
        aucKeywords.forEach(deleteValues);
      }

      payload.keywords = aucKeywords;
    }

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion')) {
      payload.brand_category_uniqueness = true;
    }

    if (debugObjParams.enabled) {
      payload.debug = debugObjParams;
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(debugObjParams, null, 4));
    }

    if (bidderRequest && bidderRequest.gdprConsent) {
      // note - objects for impbus use underscore instead of camelCase
      payload.gdpr_consent = {
        consent_string: bidderRequest.gdprConsent.consentString,
        consent_required: bidderRequest.gdprConsent.gdprApplies
      };

      if (bidderRequest.gdprConsent.addtlConsent && bidderRequest.gdprConsent.addtlConsent.indexOf('~') !== -1) {
        var ac = bidderRequest.gdprConsent.addtlConsent; // pull only the ids from the string (after the ~) and convert them to an array of ints

        var acStr = ac.substring(ac.indexOf('~') + 1);
        payload.gdpr_consent.addtl_consent = acStr.split('.').map(function (id) {
          return parseInt(id, 10);
        });
      }
    }

    if (bidderRequest && bidderRequest.uspConsent) {
      payload.us_privacy = bidderRequest.uspConsent;
    }

    if (bidderRequest && bidderRequest.refererInfo) {
      var refererinfo = {
        rd_ref: encodeURIComponent(bidderRequest.refererInfo.referer),
        rd_top: bidderRequest.refererInfo.reachedTop,
        rd_ifs: bidderRequest.refererInfo.numIframes,
        rd_stk: bidderRequest.refererInfo.stack.map(function (url) {
          return encodeURIComponent(url);
        }).join(',')
      };
      payload.referrer_detection = refererinfo;
    }

    var hasAdPodBid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidRequests, hasAdPod);

    if (hasAdPodBid) {
      bidRequests.filter(hasAdPod).forEach(function (adPodBid) {
        var adPodTags = createAdPodRequest(tags, adPodBid); // don't need the original adpod placement because it's in adPodTags

        var nonPodTags = payload.tags.filter(function (tag) {
          return tag.uuid !== adPodBid.bidId;
        });
        payload.tags = [].concat(_toConsumableArray(nonPodTags), _toConsumableArray(adPodTags));
      });
    }

    if (bidRequests[0].userId) {
      var eids = [];
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.flocId.id"), 'chrome.com', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.criteoId"), 'criteo.com', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.netId"), 'netid.de', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.idl_env"), 'liveramp.com', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.tdid"), 'adserver.org', 'TDID');
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.uid2.id"), 'uidapi.com', 'UID2');

      if (bidRequests[0].userId.pubProvidedId) {
        bidRequests[0].userId.pubProvidedId.forEach(function (ppId) {
          ppId.uids.forEach(function (uid) {
            eids.push({
              source: ppId.source,
              id: uid.id
            });
          });
        });
      }

      if (eids.length) {
        payload.eids = eids;
      }
    }

    if (tags[0].publisher_id) {
      payload.publisher_id = tags[0].publisher_id;
    }

    var request = formatRequest(payload, bidderRequest);
    return request;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, _ref) {
    var _this = this;

    var bidderRequest = _ref.bidderRequest;
    serverResponse = serverResponse.body;
    var bids = [];

    if (!serverResponse || serverResponse.error) {
      var errorMessage = "in response for ".concat(bidderRequest.bidderCode, " adapter");

      if (serverResponse && serverResponse.error) {
        errorMessage += ": ".concat(serverResponse.error);
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(errorMessage);
      return bids;
    }

    if (serverResponse.tags) {
      serverResponse.tags.forEach(function (serverBid) {
        var rtbBid = getRtbBid(serverBid);

        if (rtbBid) {
          var cpmCheck = __WEBPACK_IMPORTED_MODULE_9__src_bidderSettings_js__["a" /* bidderSettings */].get(bidderRequest.bidderCode, 'allowZeroCpmBids') === true ? rtbBid.cpm >= 0 : rtbBid.cpm > 0;

          if (cpmCheck && Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(_this.supportedMediaTypes, rtbBid.ad_type)) {
            var bid = newBid(serverBid, rtbBid, bidderRequest);
            bid.mediaType = parseMediaType(rtbBid);
            bids.push(bid);
          }
        }
      });
    }

    if (serverResponse.debug && serverResponse.debug.debug_info) {
      var debugHeader = 'AppNexus Debug Auction for Prebid\n\n';
      var debugText = debugHeader + serverResponse.debug.debug_info;
      debugText = debugText.replace(/(<td>|<th>)/gm, '\t') // Tables
      .replace(/(<\/td>|<\/th>)/gm, '\n') // Tables
      .replace(/^<br>/gm, '') // Remove leading <br>
      .replace(/(<br>\n|<br>)/gm, '\n') // <br>
      .replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n') // Header H1
      .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n') // Headers
      .replace(/(<([^>]+)>)/igm, ''); // Remove any other tags

      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('https://console.appnexus.com/docs/understanding-the-debug-auction');
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])(debugText);
    }

    return bids;
  },

  /**
   * @typedef {Object} mappingFileInfo
   * @property {string} url  mapping file json url
   * @property {number} refreshInDays prebid stores mapping data in localstorage so you can return in how many days you want to update value stored in localstorage.
   * @property {string} localStorageKey unique key to store your mapping json in localstorage
   */

  /**
   * Returns mapping file info. This info will be used by bidderFactory to preload mapping file and store data in local storage
   * @returns {mappingFileInfo}
   */
  getMappingFileInfo: function getMappingFileInfo() {
    return {
      url: mappingFileUrl,
      refreshInDays: 2
    };
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent) {
    if (syncOptions.iframeEnabled && hasPurpose1Consent({
      gdprConsent: gdprConsent
    })) {
      return [{
        type: 'iframe',
        url: 'https://acdn.adnxs.com/dmp/async_usersync.html'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    var conversionFn = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["transformBidderParamKeywords"];

    if (isOpenRtb === true) {
      var s2sConfig = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('s2sConfig');
      var s2sEndpointUrl = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(s2sConfig, 'endpoint.p1Consent');

      if (s2sEndpointUrl && s2sEndpointUrl.match('/openrtb2/prebid')) {
        conversionFn = convertKeywordsToString;
      }
    }

    params = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"])({
      'member': 'string',
      'invCode': 'string',
      'placementId': 'number',
      'keywords': conversionFn,
      'publisherId': 'number'
    }, params);

    if (isOpenRtb) {
      params.use_pmt_rule = typeof params.usePaymentRule === 'boolean' ? params.usePaymentRule : false;

      if (params.usePaymentRule) {
        delete params.usePaymentRule;
      }

      if (isPopulatedArray(params.keywords)) {
        params.keywords.forEach(deleteValues);
      }

      Object.keys(params).forEach(function (paramKey) {
        var convertedKey = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertCamelToUnderscore"])(paramKey);

        if (convertedKey !== paramKey) {
          params[convertedKey] = params[paramKey];
          delete params[paramKey];
        }
      });
    }

    return params;
  },

  /**
   * Add element selector to javascript tracker to improve native viewability
   * @param {Bid} bid
   */
  onBidWon: function onBidWon(bid) {
    if (bid.native) {
      reloadViewabilityScriptWithCorrectParameters(bid);
    }
  }
};

function isPopulatedArray(arr) {
  return !!(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(arr) && arr.length > 0);
}

function deleteValues(keyPairObj) {
  if (isPopulatedArray(keyPairObj.value) && keyPairObj.value[0] === '') {
    delete keyPairObj.value;
  }
}

function reloadViewabilityScriptWithCorrectParameters(bid) {
  var viewJsPayload = getAppnexusViewabilityScriptFromJsTrackers(bid.native.javascriptTrackers);

  if (viewJsPayload) {
    var prebidParams = 'pbjs_adid=' + bid.adId + ';pbjs_auc=' + bid.adUnitCode;
    var jsTrackerSrc = getViewabilityScriptUrlFromPayload(viewJsPayload);
    var newJsTrackerSrc = jsTrackerSrc.replace('dom_id=%native_dom_id%', prebidParams); // find iframe containing script tag

    var frameArray = document.getElementsByTagName('iframe'); // boolean var to modify only one script. That way if there are muliple scripts,
    // they won't all point to the same creative.

    var modifiedAScript = false; // first, loop on all ifames

    for (var i = 0; i < frameArray.length && !modifiedAScript; i++) {
      var currentFrame = frameArray[i];

      try {
        // IE-compatible, see https://stackoverflow.com/a/3999191/2112089
        var nestedDoc = currentFrame.contentDocument || currentFrame.contentWindow.document;

        if (nestedDoc) {
          // if the doc is present, we look for our jstracker
          var scriptArray = nestedDoc.getElementsByTagName('script');

          for (var j = 0; j < scriptArray.length && !modifiedAScript; j++) {
            var currentScript = scriptArray[j];

            if (currentScript.getAttribute('data-src') == jsTrackerSrc) {
              currentScript.setAttribute('src', newJsTrackerSrc);
              currentScript.setAttribute('data-src', '');

              if (currentScript.removeAttribute) {
                currentScript.removeAttribute('data-src');
              }

              modifiedAScript = true;
            }
          }
        }
      } catch (exception) {
        // trying to access a cross-domain iframe raises a SecurityError
        // this is expected and ignored
        if (!(exception instanceof DOMException && exception.name === 'SecurityError')) {
          // all other cases are raised again to be treated by the calling function
          throw exception;
        }
      }
    }
  }
}

function strIsAppnexusViewabilityScript(str) {
  var regexMatchUrlStart = str.match(VIEWABILITY_URL_START);
  var viewUrlStartInStr = regexMatchUrlStart != null && regexMatchUrlStart.length >= 1;
  var regexMatchFileName = str.match(VIEWABILITY_FILE_NAME);
  var fileNameInStr = regexMatchFileName != null && regexMatchFileName.length >= 1;
  return str.startsWith(SCRIPT_TAG_START) && fileNameInStr && viewUrlStartInStr;
}

function getAppnexusViewabilityScriptFromJsTrackers(jsTrackerArray) {
  var viewJsPayload;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(jsTrackerArray) && strIsAppnexusViewabilityScript(jsTrackerArray)) {
    viewJsPayload = jsTrackerArray;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(jsTrackerArray)) {
    for (var i = 0; i < jsTrackerArray.length; i++) {
      var currentJsTracker = jsTrackerArray[i];

      if (strIsAppnexusViewabilityScript(currentJsTracker)) {
        viewJsPayload = currentJsTracker;
      }
    }
  }

  return viewJsPayload;
}

function getViewabilityScriptUrlFromPayload(viewJsPayload) {
  // extracting the content of the src attribute
  // -> substring between src=" and "
  var indexOfFirstQuote = viewJsPayload.indexOf('src="') + 5; // offset of 5: the length of 'src=' + 1

  var indexOfSecondQuote = viewJsPayload.indexOf('"', indexOfFirstQuote);
  var jsTrackerSrc = viewJsPayload.substring(indexOfFirstQuote, indexOfSecondQuote);
  return jsTrackerSrc;
}

function hasPurpose1Consent(bidderRequest) {
  var result = true;

  if (bidderRequest && bidderRequest.gdprConsent) {
    if (bidderRequest.gdprConsent.gdprApplies && bidderRequest.gdprConsent.apiVersion === 2) {
      result = !!(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidderRequest.gdprConsent, 'vendorData.purpose.consents.1') === true);
    }
  }

  return result;
}

function formatRequest(payload, bidderRequest) {
  var request = [];
  var options = {
    withCredentials: true
  };
  var endpointUrl = URL;

  if (!hasPurpose1Consent(bidderRequest)) {
    endpointUrl = URL_SIMPLE;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getParameterByName"])('apn_test').toUpperCase() === 'TRUE' || __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('apn_test') === true) {
    options.customHeaders = {
      'X-Is-Test': 1
    };
  }

  if (payload.tags.length > MAX_IMPS_PER_REQUEST) {
    var clonedPayload = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepClone"])(payload);
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["chunk"])(payload.tags, MAX_IMPS_PER_REQUEST).forEach(function (tags) {
      clonedPayload.tags = tags;
      var payloadString = JSON.stringify(clonedPayload);
      request.push({
        method: 'POST',
        url: endpointUrl,
        data: payloadString,
        bidderRequest: bidderRequest,
        options: options
      });
    });
  } else {
    var payloadString = JSON.stringify(payload);
    request = {
      method: 'POST',
      url: endpointUrl,
      data: payloadString,
      bidderRequest: bidderRequest,
      options: options
    };
  }

  return request;
}

function newRenderer(adUnitCode, rtbBid) {
  var rendererOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var renderer = __WEBPACK_IMPORTED_MODULE_1__src_Renderer_js__["a" /* Renderer */].install({
    id: rtbBid.renderer_id,
    url: rtbBid.renderer_url,
    config: rendererOptions,
    loaded: false,
    adUnitCode: adUnitCode
  });

  try {
    renderer.setRender(outstreamRender);
  } catch (err) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('Prebid Error calling setRender on renderer', err);
  }

  renderer.setEventHandlers({
    impression: function impression() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('AppNexus outstream video impression event');
    },
    loaded: function loaded() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('AppNexus outstream video loaded event');
    },
    ended: function ended() {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('AppNexus outstream renderer video event');
      document.querySelector("#".concat(adUnitCode)).style.display = 'none';
    }
  });
  return renderer;
}
/**
 * Unpack the Server's Bid into a Prebid-compatible one.
 * @param serverBid
 * @param rtbBid
 * @param bidderRequest
 * @return Bid
 */


function newBid(serverBid, rtbBid, bidderRequest) {
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidRequest"])(serverBid.uuid, [bidderRequest]);
  var bid = {
    requestId: serverBid.uuid,
    cpm: rtbBid.cpm,
    creativeId: rtbBid.creative_id,
    dealId: rtbBid.deal_id,
    currency: 'USD',
    netRevenue: true,
    ttl: 300,
    adUnitCode: bidRequest.adUnitCode,
    appnexus: {
      buyerMemberId: rtbBid.buyer_member_id,
      dealPriority: rtbBid.deal_priority,
      dealCode: rtbBid.deal_code
    }
  }; // WE DON'T FULLY SUPPORT THIS ATM - future spot for adomain code; creating a stub for 5.0 compliance

  if (rtbBid.adomain) {
    bid.meta = _extends({}, bid.meta, {
      advertiserDomains: []
    });
  }

  if (rtbBid.advertiser_id) {
    bid.meta = _extends({}, bid.meta, {
      advertiserId: rtbBid.advertiser_id
    });
  } // temporary function; may remove at later date if/when adserver fully supports dchain


  function setupDChain(rtbBid) {
    var dchain = {
      ver: '1.0',
      complete: 0,
      nodes: [{
        bsid: rtbBid.buyer_member_id.toString()
      }]
    };
    return dchain;
  }

  if (rtbBid.buyer_member_id) {
    bid.meta = _extends({}, bid.meta, {
      dchain: setupDChain(rtbBid)
    });
  }

  if (rtbBid.brand_id) {
    bid.meta = _extends({}, bid.meta, {
      brandId: rtbBid.brand_id
    });
  }

  if (rtbBid.rtb.video) {
    // shared video properties used for all 3 contexts
    _extends(bid, {
      width: rtbBid.rtb.video.player_width,
      height: rtbBid.rtb.video.player_height,
      vastImpUrl: rtbBid.notify_url,
      ttl: 3600
    });

    var videoContext = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video.context');

    switch (videoContext) {
      case __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */]:
        var primaryCatId = Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__["getIabSubCategory"])(bidRequest.bidder, rtbBid.brand_category_id);
        bid.meta = _extends({}, bid.meta, {
          primaryCatId: primaryCatId
        });
        var dealTier = rtbBid.deal_priority;
        bid.video = {
          context: __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */],
          durationSeconds: Math.floor(rtbBid.rtb.video.duration_ms / 1000),
          dealTier: dealTier
        };
        bid.vastUrl = rtbBid.rtb.video.asset_url;
        break;

      case __WEBPACK_IMPORTED_MODULE_7__src_video_js__["b" /* OUTSTREAM */]:
        bid.adResponse = serverBid;
        bid.adResponse.ad = bid.adResponse.ads[0];
        bid.adResponse.ad.video = bid.adResponse.ad.rtb.video;
        bid.vastXml = rtbBid.rtb.video.content;

        if (rtbBid.renderer_url) {
          var videoBid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(bidderRequest.bids, function (bid) {
            return bid.bidId === serverBid.uuid;
          });
          var rendererOptions = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(videoBid, 'renderer.options');
          bid.renderer = newRenderer(bid.adUnitCode, rtbBid, rendererOptions);
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_7__src_video_js__["a" /* INSTREAM */]:
        bid.vastUrl = rtbBid.notify_url + '&redir=' + encodeURIComponent(rtbBid.rtb.video.asset_url);
        break;
    }
  } else if (rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]]) {
    var nativeAd = rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]]; // setting up the jsTracker:
    // we put it as a data-src attribute so that the tracker isn't called
    // until we have the adId (see onBidWon)

    var jsTrackerDisarmed = rtbBid.viewability.config.replace('src=', 'data-src=');
    var jsTrackers = nativeAd.javascript_trackers;

    if (jsTrackers == undefined) {
      jsTrackers = jsTrackerDisarmed;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(jsTrackers)) {
      jsTrackers = [jsTrackers, jsTrackerDisarmed];
    } else {
      jsTrackers.push(jsTrackerDisarmed);
    }

    bid[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]] = {
      title: nativeAd.title,
      body: nativeAd.desc,
      body2: nativeAd.desc2,
      cta: nativeAd.ctatext,
      rating: nativeAd.rating,
      sponsoredBy: nativeAd.sponsored,
      privacyLink: nativeAd.privacy_link,
      address: nativeAd.address,
      downloads: nativeAd.downloads,
      likes: nativeAd.likes,
      phone: nativeAd.phone,
      price: nativeAd.price,
      salePrice: nativeAd.saleprice,
      clickUrl: nativeAd.link.url,
      displayUrl: nativeAd.displayurl,
      clickTrackers: nativeAd.link.click_trackers,
      impressionTrackers: nativeAd.impression_trackers,
      javascriptTrackers: jsTrackers
    };

    if (nativeAd.main_img) {
      bid['native'].image = {
        url: nativeAd.main_img.url,
        height: nativeAd.main_img.height,
        width: nativeAd.main_img.width
      };
    }

    if (nativeAd.icon) {
      bid['native'].icon = {
        url: nativeAd.icon.url,
        height: nativeAd.icon.height,
        width: nativeAd.icon.width
      };
    }
  } else {
    _extends(bid, {
      width: rtbBid.rtb.banner.width,
      height: rtbBid.rtb.banner.height,
      ad: rtbBid.rtb.banner.content
    });

    try {
      if (rtbBid.rtb.trackers) {
        for (var i = 0; i < rtbBid.rtb.trackers[0].impression_urls.length; i++) {
          var url = rtbBid.rtb.trackers[0].impression_urls[i];
          var tracker = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["createTrackPixelHtml"])(url);
          bid.ad += tracker;
        }
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('Error appending tracking pixel', error);
    }
  }

  return bid;
}

function bidToTag(bid) {
  var tag = {};
  tag.sizes = transformSizes(bid.sizes);
  tag.primary_size = tag.sizes[0];
  tag.ad_types = [];
  tag.uuid = bid.bidId;

  if (bid.params.placementId) {
    tag.id = parseInt(bid.params.placementId, 10);
  } else {
    tag.code = bid.params.invCode;
  }

  tag.allow_smaller_sizes = bid.params.allowSmallerSizes || false;
  tag.use_pmt_rule = bid.params.usePaymentRule || false;
  tag.prebid = true;
  tag.disable_psa = true;
  var bidFloor = getBidFloor(bid);

  if (bidFloor) {
    tag.reserve = bidFloor;
  }

  if (bid.params.position) {
    tag.position = {
      'above': 1,
      'below': 2
    }[bid.params.position] || 0;
  }

  if (bid.params.trafficSourceCode) {
    tag.traffic_source_code = bid.params.trafficSourceCode;
  }

  if (bid.params.privateSizes) {
    tag.private_sizes = transformSizes(bid.params.privateSizes);
  }

  if (bid.params.supplyType) {
    tag.supply_type = bid.params.supplyType;
  }

  if (bid.params.pubClick) {
    tag.pubclick = bid.params.pubClick;
  }

  if (bid.params.extInvCode) {
    tag.ext_inv_code = bid.params.extInvCode;
  }

  if (bid.params.publisherId) {
    tag.publisher_id = parseInt(bid.params.publisherId, 10);
  }

  if (bid.params.externalImpId) {
    tag.external_imp_id = bid.params.externalImpId;
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(bid.params.keywords)) {
    var keywords = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["transformBidderParamKeywords"])(bid.params.keywords);

    if (keywords.length > 0) {
      keywords.forEach(deleteValues);
    }

    tag.keywords = keywords;
  }

  var gpid = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'ortb2Imp.ext.data.pbadslot');

  if (gpid) {
    tag.gpid = gpid;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */] || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]))) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]);

    if (tag.sizes.length === 0) {
      tag.sizes = transformSizes([1, 1]);
    }

    if (bid.nativeParams) {
      var nativeRequest = buildNativeRequest(bid.nativeParams);
      tag[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]] = {
        layouts: [nativeRequest]
      };
    }
  }

  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]));
  var context = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video.context');

  if (videoMediaType && context === 'adpod') {
    tag.hb_source = 7;
  } else {
    tag.hb_source = 1;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */] || videoMediaType) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]);
  } // instream gets vastUrl, outstream gets vastXml


  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */] || videoMediaType && context !== 'outstream') {
    tag.require_asset_url = true;
  }

  if (bid.params.video) {
    tag.video = {}; // place any valid video params on the tag

    Object.keys(bid.params.video).filter(function (param) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(VIDEO_TARGETING, param);
    }).forEach(function (param) {
      switch (param) {
        case 'context':
        case 'playback_method':
          var type = bid.params.video[param];
          type = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(type) ? type[0] : type;
          tag.video[param] = VIDEO_MAPPING[param][type];
          break;
        // Deprecating tags[].video.frameworks in favor of tags[].video_frameworks

        case 'frameworks':
          break;

        default:
          tag.video[param] = bid.params.video[param];
      }
    });

    if (bid.params.video.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.params.video.frameworks)) {
      tag['video_frameworks'] = bid.params.video.frameworks;
    }
  } // use IAB ORTB values if the corresponding values weren't already set by bid.params.video


  if (videoMediaType) {
    tag.video = tag.video || {};
    Object.keys(videoMediaType).filter(function (param) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(VIDEO_RTB_TARGETING, param);
    }).forEach(function (param) {
      switch (param) {
        case 'minduration':
        case 'maxduration':
          if (typeof tag.video[param] !== 'number') tag.video[param] = videoMediaType[param];
          break;

        case 'skip':
          if (typeof tag.video['skippable'] !== 'boolean') tag.video['skippable'] = videoMediaType[param] === 1;
          break;

        case 'skipafter':
          if (typeof tag.video['skipoffset'] !== 'number') tag.video['skippoffset'] = videoMediaType[param];
          break;

        case 'playbackmethod':
          if (typeof tag.video['playback_method'] !== 'number') {
            var type = videoMediaType[param];
            type = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(type) ? type[0] : type; // we only support iab's options 1-4 at this time.

            if (type >= 1 && type <= 4) {
              tag.video['playback_method'] = type;
            }
          }

          break;

        case 'api':
          if (!tag['video_frameworks'] && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(videoMediaType[param])) {
            // need to read thru array; remove 6 (we don't support it), swap 4 <> 5 if found (to match our adserver mapping for these specific values)
            var apiTmp = videoMediaType[param].map(function (val) {
              var v = val === 4 ? 5 : val === 5 ? 4 : val;

              if (v >= 1 && v <= 5) {
                return v;
              }
            }).filter(function (v) {
              return v;
            });
            tag['video_frameworks'] = apiTmp;
          }

          break;
      }
    });
  }

  if (bid.renderer) {
    tag.video = _extends({}, tag.video, {
      custom_renderer_present: true
    });
  }

  if (bid.params.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.params.frameworks)) {
    tag['banner_frameworks'] = bid.params.frameworks;
  }

  var adUnit = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(__WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__["a" /* auctionManager */].getAdUnits(), function (au) {
    return bid.transactionId === au.transactionId;
  });

  if (adUnit && adUnit.mediaTypes && adUnit.mediaTypes.banner) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */]);
  }

  if (tag.ad_types.length === 0) {
    delete tag.ad_types;
  }

  return tag;
}
/* Turn bid request sizes into ut-compatible format */


function transformSizes(requestSizes) {
  var sizes = [];
  var sizeObj = {};

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(requestSizes) && requestSizes.length === 2 && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(requestSizes[0])) {
    sizeObj.width = parseInt(requestSizes[0], 10);
    sizeObj.height = parseInt(requestSizes[1], 10);
    sizes.push(sizeObj);
  } else if (_typeof(requestSizes) === 'object') {
    for (var i = 0; i < requestSizes.length; i++) {
      var size = requestSizes[i];
      sizeObj = {};
      sizeObj.width = parseInt(size[0], 10);
      sizeObj.height = parseInt(size[1], 10);
      sizes.push(sizeObj);
    }
  }

  return sizes;
}

function hasUserInfo(bid) {
  return !!bid.params.user;
}

function hasMemberId(bid) {
  return !!parseInt(bid.params.member, 10);
}

function hasAppDeviceInfo(bid) {
  if (bid.params) {
    return !!bid.params.app;
  }
}

function hasAppId(bid) {
  if (bid.params && bid.params.app) {
    return !!bid.params.app.id;
  }

  return !!bid.params.app;
}

function hasDebug(bid) {
  return !!bid.debug;
}

function hasAdPod(bid) {
  return bid.mediaTypes && bid.mediaTypes.video && bid.mediaTypes.video.context === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */];
}

function hasOmidSupport(bid) {
  var hasOmid = false;
  var bidderParams = bid.params;
  var videoParams = bid.params.video;

  if (bidderParams.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bidderParams.frameworks)) {
    hasOmid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(bid.params.frameworks, 6);
  }

  if (!hasOmid && videoParams && videoParams.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(videoParams.frameworks)) {
    hasOmid = Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["d" /* includes */])(bid.params.video.frameworks, 6);
  }

  return hasOmid;
}
/**
 * Expand an adpod placement into a set of request objects according to the
 * total adpod duration and the range of duration seconds. Sets minduration/
 * maxduration video property according to requireExactDuration configuration
 */


function createAdPodRequest(tags, adPodBid) {
  var _adPodBid$mediaTypes$ = adPodBid.mediaTypes.video,
      durationRangeSec = _adPodBid$mediaTypes$.durationRangeSec,
      requireExactDuration = _adPodBid$mediaTypes$.requireExactDuration;
  var numberOfPlacements = getAdPodPlacementNumber(adPodBid.mediaTypes.video);
  var maxDuration = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getMaxValueFromArray"])(durationRangeSec);
  var tagToDuplicate = tags.filter(function (tag) {
    return tag.uuid === adPodBid.bidId;
  });
  var request = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["fill"].apply(void 0, _toConsumableArray(tagToDuplicate).concat([numberOfPlacements]));

  if (requireExactDuration) {
    var divider = Math.ceil(numberOfPlacements / durationRangeSec.length);
    var chunked = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["chunk"])(request, divider); // each configured duration is set as min/maxduration for a subset of requests

    durationRangeSec.forEach(function (duration, index) {
      chunked[index].map(function (tag) {
        setVideoProperty(tag, 'minduration', duration);
        setVideoProperty(tag, 'maxduration', duration);
      });
    });
  } else {
    // all maxdurations should be the same
    request.map(function (tag) {
      return setVideoProperty(tag, 'maxduration', maxDuration);
    });
  }

  return request;
}

function getAdPodPlacementNumber(videoParams) {
  var adPodDurationSec = videoParams.adPodDurationSec,
      durationRangeSec = videoParams.durationRangeSec,
      requireExactDuration = videoParams.requireExactDuration;
  var minAllowedDuration = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getMinValueFromArray"])(durationRangeSec);
  var numberOfPlacements = Math.floor(adPodDurationSec / minAllowedDuration);
  return requireExactDuration ? Math.max(numberOfPlacements, durationRangeSec.length) : numberOfPlacements;
}

function setVideoProperty(tag, key, value) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(tag.video)) {
    tag.video = {};
  }

  tag.video[key] = value;
}

function getRtbBid(tag) {
  return tag && tag.ads && tag.ads.length && Object(__WEBPACK_IMPORTED_MODULE_6__src_polyfill_js__["b" /* find */])(tag.ads, function (ad) {
    return ad.rtb;
  });
}

function buildNativeRequest(params) {
  var request = {}; // map standard prebid native asset identifier to /ut parameters
  // e.g., tag specifies `body` but /ut only knows `description`.
  // mapping may be in form {tag: '<server name>'} or
  // {tag: {serverName: '<server name>', requiredParams: {...}}}

  Object.keys(params).forEach(function (key) {
    // check if one of the <server name> forms is used, otherwise
    // a mapping wasn't specified so pass the key straight through
    var requestKey = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].serverName || NATIVE_MAPPING[key] || key; // required params are always passed on request

    var requiredParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].requiredParams;
    request[requestKey] = _extends({}, requiredParams, params[key]); // convert the sizes of image/icon assets to proper format (if needed)

    var isImageAsset = !!(requestKey === NATIVE_MAPPING.image.serverName || requestKey === NATIVE_MAPPING.icon.serverName);

    if (isImageAsset && request[requestKey].sizes) {
      var sizes = request[requestKey].sizes;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(sizes) || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(sizes) && sizes.length > 0 && sizes.every(function (sz) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(sz);
      })) {
        request[requestKey].sizes = transformSizes(request[requestKey].sizes);
      }
    }

    if (requestKey === NATIVE_MAPPING.privacyLink) {
      request.privacy_supported = true;
    }
  });
  return request;
}
/**
 * This function hides google div container for outstream bids to remove unwanted space on page. Appnexus renderer creates a new iframe outside of google iframe to render the outstream creative.
 * @param {string} elementId element id
 */


function hidedfpContainer(elementId) {
  var el = document.getElementById(elementId).querySelectorAll("div[id^='google_ads']");

  if (el[0]) {
    el[0].style.setProperty('display', 'none');
  }
}

function hideSASIframe(elementId) {
  try {
    // find script tag with id 'sas_script'. This ensures it only works if you're using Smart Ad Server.
    var el = document.getElementById(elementId).querySelectorAll("script[id^='sas_script']");

    if (el[0].nextSibling && el[0].nextSibling.localName === 'iframe') {
      el[0].nextSibling.style.setProperty('display', 'none');
    }
  } catch (e) {// element not found!
  }
}

function outstreamRender(bid) {
  hidedfpContainer(bid.adUnitCode);
  hideSASIframe(bid.adUnitCode); // push to render queue because ANOutstreamVideo may not be loaded yet

  bid.renderer.push(function () {
    window.ANOutstreamVideo.renderAd({
      tagId: bid.adResponse.tag_id,
      sizes: [bid.getSize().split('x')],
      targetId: bid.adUnitCode,
      // target div id to render video
      uuid: bid.adResponse.uuid,
      adResponse: bid.adResponse,
      rendererOptions: bid.renderer.getConfig()
    }, handleOutstreamRendererEvents.bind(null, bid));
  });
}

function handleOutstreamRendererEvents(bid, id, eventName) {
  bid.renderer.handleVideoEvent({
    id: id,
    eventName: eventName
  });
}

function parseMediaType(rtbBid) {
  var adType = rtbBid.ad_type;

  if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */];
  } else if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */];
  } else {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */];
  }
}

function addUserId(eids, id, source, rti) {
  if (id) {
    if (rti) {
      eids.push({
        source: source,
        id: id,
        rti_partner: rti
      });
    } else {
      eids.push({
        source: source,
        id: id
      });
    }
  }

  return eids;
}

function getBidFloor(bid) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(bid.getFloor)) {
    return bid.params.reserve ? bid.params.reserve : null;
  }

  var floor = bid.getFloor({
    currency: 'USD',
    mediaType: '*',
    size: '*'
  });

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(floor) && !isNaN(floor.floor) && floor.currency === 'USD') {
    return floor.floor;
  }

  return null;
} // keywords: { 'genre': ['rock', 'pop'], 'pets': ['dog'] } goes to 'genre=rock,genre=pop,pets=dog'


function convertKeywordsToString(keywords) {
  var result = '';
  Object.keys(keywords).forEach(function (key) {
    // if 'text' or ''
    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(keywords[key])) {
      if (keywords[key] !== '') {
        result += "".concat(key, "=").concat(keywords[key], ",");
      } else {
        result += "".concat(key, ",");
      }
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(keywords[key])) {
      if (keywords[key][0] === '') {
        result += "".concat(key, ",");
      } else {
        keywords[key].forEach(function (val) {
          result += "".concat(key, "=").concat(val, ",");
        });
      }
    }
  }); // remove last trailing comma

  result = result.substring(0, result.length - 1);
  return result;
}

Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__["registerBidder"])(spec);
window.pbjs.installedModules.push('appnexusBidAdapter');

/***/ })

},[170]);

pbjsChunk([321],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_config_js__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var GVLID = 24;
var BIDDER_CODE = 'conversant';
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__["b" /* getStorageManager */])({
  gvlid: GVLID,
  bidderCode: BIDDER_CODE
});
var URL = 'http://127.0.0.1:8290/cvx/client/hb/ortb/25'; //'https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25';

var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  aliases: ['cnvr'],
  // short code
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {BidRequest} bid - The bid params to validate.
   * @return {boolean} True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (!bid || !bid.params) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(BIDDER_CODE + ': Missing bid parameters');
      return false;
    }

    if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(bid.params.site_id)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(BIDDER_CODE + ': site_id must be specified as a string');
      return false;
    }

    if (isVideoRequest(bid)) {
      var mimes = bid.params.mimes || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video.mimes');

      if (!mimes) {
        // Give a warning but let it pass
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(BIDDER_CODE + ': mimes should be specified for videos');
      } else if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(mimes) || !mimes.every(function (s) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(s);
      })) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(BIDDER_CODE + ': mimes must be an array of strings');
        return false;
      }
    }

    return true;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} validBidRequests - an array of bids
   * @param bidderRequest
   * @return {ServerRequest} Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var page = bidderRequest && bidderRequest.refererInfo ? bidderRequest.refererInfo.referer : '';
    var siteId = '';
    var requestId = '';
    var pubcid = null;
    var pubcidName = '_pubcid';
    var bidurl = URL;
    var conversantImps = validBidRequests.map(function (bid) {
      var bidfloor = getBidFloor(bid);
      siteId = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"])('site_id', bid.params) || siteId;
      pubcidName = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"])('pubcid_name', bid.params) || pubcidName;
      requestId = bid.auctionId;
      var imp = {
        id: bid.bidId,
        secure: 1,
        bidfloor: bidfloor || 0,
        displaymanager: 'Prebid.js',
        displaymanagerver: "6.15.0-pre"
      };

      if (bid.ortb2Imp) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["mergeDeep"])(imp, bid.ortb2Imp);
      }

      copyOptProperty(bid.params.tag_id, imp, 'tagid');

      if (isVideoRequest(bid)) {
        var videoData = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video') || {};
        var format = convertSizes(videoData.playerSize || bid.sizes);
        var video = {};

        if (format && format[0]) {
          copyOptProperty(format[0].w, video, 'w');
          copyOptProperty(format[0].h, video, 'h');
        }

        copyOptProperty(bid.params.position, video, 'pos');
        copyOptProperty(bid.params.mimes || videoData.mimes, video, 'mimes');
        copyOptProperty(bid.params.maxduration || videoData.maxduration, video, 'maxduration');
        copyOptProperty(bid.params.protocols || videoData.protocols, video, 'protocols');
        copyOptProperty(bid.params.api || videoData.api, video, 'api');
        imp.video = video;
      } else {
        var bannerData = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.banner') || {};

        var _format = convertSizes(bannerData.sizes || bid.sizes);

        var banner = {
          format: _format
        };
        copyOptProperty(bid.params.position, banner, 'pos');
        imp.banner = banner;
      }

      if (bid.userId && bid.userId.pubcid) {
        pubcid = bid.userId.pubcid;
      } else if (bid.crumbs && bid.crumbs.pubcid) {
        pubcid = bid.crumbs.pubcid;
      }

      if (bid.params.white_label_url) {
        bidurl = bid.params.white_label_url;
      }

      return imp;
    });
    var payload = {
      id: requestId,
      imp: conversantImps,
      site: {
        id: siteId,
        mobile: document.querySelector('meta[name="viewport"][content*="width=device-width"]') !== null ? 1 : 0,
        page: page
      },
      device: getDevice(),
      at: 1
    };
    var userExt = {};

    if (bidderRequest) {
      // Add GDPR flag and consent string
      if (bidderRequest.gdprConsent) {
        userExt.consent = bidderRequest.gdprConsent.consentString;

        if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'regs.ext.gdpr', bidderRequest.gdprConsent.gdprApplies ? 1 : 0);
        }
      }

      if (bidderRequest.uspConsent) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'regs.ext.us_privacy', bidderRequest.uspConsent);
      }
    }

    if (!pubcid) {
      pubcid = readStoredValue(pubcidName);
    } // Add common id if available


    if (pubcid) {
      userExt.fpc = pubcid;
    } // Add Eids if available


    var eids = collectEids(validBidRequests);

    if (eids.length > 0) {
      userExt.eids = eids;
    } // Only add the user object if it's not empty


    if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(userExt)) {
      payload.user = {
        ext: userExt
      };
    }

    var firstPartyData = __WEBPACK_IMPORTED_MODULE_4__src_config_js__["b" /* config */].getConfig('ortb2') || {};
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["mergeDeep"])(payload, firstPartyData);
    return {
      method: 'POST',
      url: bidurl,
      data: payload
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @param bidRequest
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, bidRequest) {
    var bidResponses = [];
    var requestMap = {};
    serverResponse = serverResponse.body;

    if (bidRequest && bidRequest.data && bidRequest.data.imp) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"])(bidRequest.data.imp, function (imp) {
        return requestMap[imp.id] = imp;
      });
    }

    if (serverResponse && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(serverResponse.seatbid)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"])(serverResponse.seatbid, function (bidList) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"])(bidList.bid, function (conversantBid) {
          var responseCPM = parseFloat(conversantBid.price);

          if (responseCPM > 0.0 && conversantBid.impid) {
            var responseAd = conversantBid.adm || '';
            var responseNurl = conversantBid.nurl || '';
            var request = requestMap[conversantBid.impid];
            var bid = {
              requestId: conversantBid.impid,
              currency: serverResponse.cur || 'USD',
              cpm: responseCPM,
              creativeId: conversantBid.crid || '',
              ttl: 300,
              netRevenue: true
            };
            bid.meta = {};

            if (conversantBid.adomain && conversantBid.adomain.length > 0) {
              bid.meta.advertiserDomains = conversantBid.adomain;
            }

            if (request.video) {
              if (responseAd.charAt(0) === '<') {
                bid.vastXml = responseAd;
              } else {
                bid.vastUrl = responseAd;
              }

              bid.mediaType = 'video';
              bid.width = request.video.w;
              bid.height = request.video.h;
            } else {
              bid.ad = responseAd + '<img src="' + responseNurl + '" />';
              bid.width = conversantBid.w;
              bid.height = conversantBid.h;
            }

            bidResponses.push(bid);
          }
        });
      });
    }

    return bidResponses;
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"])({
      'site_id': 'string',
      'secure': 'number',
      'mobile': 'number'
    }, params);
  },

  /**
   * Register User Sync.
   */
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    var params = {};
    var syncs = []; // Attaching GDPR Consent Params in UserSync url

    if (gdprConsent) {
      params.gdpr = gdprConsent.gdprApplies ? 1 : 0;
      params.gdpr_consent = encodeURIComponent(gdprConsent.consentString || '');
    } // CCPA


    if (uspConsent) {
      params.us_privacy = encodeURIComponent(uspConsent);
    }

    if (responses && responses.ext) {
      var pixels = [{
        urls: responses.ext.fsyncs,
        type: 'iframe'
      }, {
        urls: responses.ext.psyncs,
        type: 'image'
      }].filter(function (entry) {
        return entry.urls && (entry.type === 'iframe' && syncOptions.iframeEnabled || entry.type === 'image' && syncOptions.pixelEnabled);
      }).map(function (entry) {
        return entry.urls.map(function (endpoint) {
          var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"])(endpoint);
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["mergeDeep"])(urlInfo.search, params);

          if (Object.keys(urlInfo.search).length === 0) {
            delete urlInfo.search; // empty search object causes buildUrl to add a trailing ? to the url
          }

          return {
            type: entry.type,
            url: Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["buildUrl"])(urlInfo)
          };
        }).reduce(function (x, y) {
          return x.concat(y);
        }, []);
      }).reduce(function (x, y) {
        return x.concat(y);
      }, []);
      syncs.push.apply(syncs, _toConsumableArray(pixels));
    }

    return syncs;
  }
};
/**
 * Determine do-not-track state
 *
 * @returns {boolean}
 */

function getDNT() {
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNoTrack === '1' || navigator.doNotTrack === 'yes';
}
/**
 * Return openrtb device object that includes ua, width, and height.
 *
 * @returns {Device} Openrtb device object
 */


function getDevice() {
  var language = navigator.language ? 'language' : 'userLanguage';
  return {
    h: screen.height,
    w: screen.width,
    dnt: getDNT() ? 1 : 0,
    language: navigator[language].split('-')[0],
    make: navigator.vendor ? navigator.vendor : '',
    ua: navigator.userAgent
  };
}
/**
 * Convert arrays of widths and heights to an array of objects with w and h properties.
 *
 * [[300, 250], [300, 600]] => [{w: 300, h: 250}, {w: 300, h: 600}]
 *
 * @param {Array.<Array.<number>>} bidSizes - arrays of widths and heights
 * @returns {object[]} Array of objects with w and h
 */


function convertSizes(bidSizes) {
  var format;

  if (Array.isArray(bidSizes)) {
    if (bidSizes.length === 2 && typeof bidSizes[0] === 'number' && typeof bidSizes[1] === 'number') {
      format = [{
        w: bidSizes[0],
        h: bidSizes[1]
      }];
    } else {
      format = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(bidSizes, function (d) {
        return {
          w: d[0],
          h: d[1]
        };
      });
    }
  }

  return format;
}
/**
 * Check if it's a video bid request
 *
 * @param {BidRequest} bid - Bid request generated from ad slots
 * @returns {boolean} True if it's a video bid
 */


function isVideoRequest(bid) {
  return bid.mediaType === 'video' || !!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video');
}
/**
 * Copy property if exists from src to dst
 *
 * @param {object} src - source object
 * @param {object} dst - destination object
 * @param {string} dstName - destination property name
 */


function copyOptProperty(src, dst, dstName) {
  if (src) {
    dst[dstName] = src;
  }
}
/**
 * Collect IDs from validBidRequests and store them as an extended id array
 * @param bidRequests valid bid requests
 */


function collectEids(bidRequests) {
  var request = bidRequests[0]; // bidRequests have the same userId object

  var eids = [];

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(request.userIdAsEids) && request.userIdAsEids.length > 0) {
    // later following white-list can be converted to block-list if needed
    var requiredSourceValues = {
      'epsilon.com': 1,
      'adserver.org': 1,
      'liveramp.com': 1,
      'criteo.com': 1,
      'id5-sync.com': 1,
      'parrable.com': 1,
      'liveintent.com': 1
    };
    request.userIdAsEids.forEach(function (eid) {
      if (requiredSourceValues.hasOwnProperty(eid.source)) {
        eids.push(eid);
      }
    });
  }

  return eids;
}
/**
 * Look for a stored value from both cookie and local storage and return the first value found.
 * @param key Key for the search
 * @return {string} Stored value
 */


function readStoredValue(key) {
  var storedValue;

  try {
    // check cookies first
    storedValue = storage.getCookie(key);

    if (!storedValue) {
      // check expiration time before reading local storage
      var storedValueExp = storage.getDataFromLocalStorage("".concat(key, "_exp"));

      if (storedValueExp === '' || storedValueExp && new Date(storedValueExp).getTime() - Date.now() > 0) {
        storedValue = storage.getDataFromLocalStorage(key);
        storedValue = storedValue ? decodeURIComponent(storedValue) : storedValue;
      }
    } // deserialize JSON if needed


    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(storedValue) && storedValue.charAt(0) === '{') {
      storedValue = JSON.parse(storedValue);
    }
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(e);
  }

  return storedValue;
}
/**
 * Get the floor price from bid.params for backward compatibility.
 * If not found, then check floor module.
 * @param bid A valid bid object
 * @returns {*|number} floor price
 */


function getBidFloor(bid) {
  var floor = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"])('bidfloor', bid.params);

  if (!floor && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(bid.getFloor)) {
    var floorObj = bid.getFloor({
      currency: 'USD',
      mediaType: '*',
      size: '*'
    });

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(floorObj) && !isNaN(floorObj.floor) && floorObj.currency === 'USD') {
      floor = floorObj.floor;
    }
  }

  return floor;
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);
window.pbjs.installedModules.push('conversantBidAdapter');

/***/ })

},[274]);

pbjsChunk([309],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(307);


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adpodUtils", function() { return adpodUtils; });
/* harmony export (immutable) */ __webpack_exports__["buildDfpVideoUrl"] = buildDfpVideoUrl;
/* harmony export (immutable) */ __webpack_exports__["notifyTranslationModule"] = notifyTranslationModule;
/* harmony export (immutable) */ __webpack_exports__["buildAdpodVideoUrl"] = buildAdpodVideoUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_adServerManager_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_targeting_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_adapterManager_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_events_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__src_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__src_constants_json__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * This module adds [DFP support]{@link https://www.doubleclickbygoogle.com/} for Video to Prebid.
 */









/**
 * @typedef {Object} DfpVideoParams
 *
 * This object contains the params needed to form a URL which hits the
 * [DFP API]{@link https://support.google.com/dfp_premium/answer/1068325?hl=en}.
 *
 * All params (except iu, mentioned below) should be considered optional. This module will choose reasonable
 * defaults for all of the other required params.
 *
 * The cust_params property, if present, must be an object. It will be merged with the rest of the
 * standard Prebid targeting params (hb_adid, hb_bidder, etc).
 *
 * @param {string} iu This param *must* be included, in order for us to create a valid request.
 * @param [string] description_url This field is required if you want Ad Exchange to bid on our ad unit...
 *   but otherwise optional
 */

/**
 * @typedef {Object} DfpVideoOptions
 *
 * @param {Object} adUnit The adUnit which this bid is supposed to help fill.
 * @param [Object] bid The bid which should be considered alongside the rest of the adserver's demand.
 *   If this isn't defined, then we'll use the winning bid for the adUnit.
 *
 * @param {DfpVideoParams} [params] Query params which should be set on the DFP request.
 *   These will override this module's defaults whenever they conflict.
 * @param {string} [url] video adserver url
 */

/** Safe defaults which work on pretty much all video calls. */

var defaultParamConstants = {
  env: 'vp',
  gdfp_req: 1,
  output: 'vast',
  unviewed_position_start: 1
};
var adpodUtils = {};
/**
 * Merge all the bid data and publisher-supplied options into a single URL, and then return it.
 *
 * @see [The DFP API]{@link https://support.google.com/dfp_premium/answer/1068325?hl=en#env} for details.
 *
 * @param {DfpVideoOptions} options Options which should be used to construct the URL.
 *
 * @return {string} A URL which calls DFP, letting options.bid
 *   (or the auction's winning bid for this adUnit, if undefined) compete alongside the rest of the
 *   demand in DFP.
 */

function buildDfpVideoUrl(options) {
  if (!options.params && !options.url) {
    Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["logError"])("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl");
    return;
  }

  var adUnit = options.adUnit;
  var bid = options.bid || __WEBPACK_IMPORTED_MODULE_1__src_targeting_js__["d" /* targeting */].getWinningBids(adUnit.code)[0];
  var urlComponents = {};

  if (options.url) {
    // when both `url` and `params` are given, parsed url will be overwriten
    // with any matching param components
    urlComponents = Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["parseUrl"])(options.url, {
      noDecodeWholeURL: true
    });

    if (Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isEmpty"])(options.params)) {
      return buildUrlFromAdserverUrlComponents(urlComponents, bid, options);
    }
  }

  var derivedParams = {
    correlator: Date.now(),
    sz: Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["parseSizesInput"])(Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.playerSize')).join('|'),
    url: encodeURIComponent(location.href)
  };
  var encodedCustomParams = getCustParams(bid, options);

  var queryParams = _extends({}, defaultParamConstants, urlComponents.search, derivedParams, options.params, {
    cust_params: encodedCustomParams
  });

  var descriptionUrl = getDescriptionUrl(bid, options, 'params');

  if (descriptionUrl) {
    queryParams.description_url = descriptionUrl;
  }

  var gdprConsent = __WEBPACK_IMPORTED_MODULE_6__src_adapterManager_js__["gdprDataHandler"].getConsentData();

  if (gdprConsent) {
    if (typeof gdprConsent.gdprApplies === 'boolean') {
      queryParams.gdpr = Number(gdprConsent.gdprApplies);
    }

    if (gdprConsent.consentString) {
      queryParams.gdpr_consent = gdprConsent.consentString;
    }

    if (gdprConsent.addtlConsent) {
      queryParams.addtl_consent = gdprConsent.addtlConsent;
    }
  }

  var uspConsent = __WEBPACK_IMPORTED_MODULE_6__src_adapterManager_js__["uspDataHandler"].getConsentData();

  if (uspConsent) {
    queryParams.us_privacy = uspConsent;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["buildUrl"])({
    protocol: 'https',
    host: 'securepubads.g.doubleclick.net',
    pathname: '/gampad/ads',
    search: queryParams
  });
}
function notifyTranslationModule(fn) {
  fn.call(this, 'dfp');
}

if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('brandCategoryTranslation.translationFile')) {
  Object(__WEBPACK_IMPORTED_MODULE_4__src_hook_js__["a" /* getHook */])('registerAdserver').before(notifyTranslationModule);
}
/**
 * @typedef {Object} DfpAdpodOptions
 *
 * @param {string} code Ad Unit code
 * @param {Object} params Query params which should be set on the DFP request.
 * These will override this module's defaults whenever they conflict.
 * @param {function} callback Callback function to execute when master tag is ready
 */

/**
 * Creates master tag url for long-form
 * @param {DfpAdpodOptions} options
 * @returns {string} A URL which calls DFP with custom adpod targeting key values to compete with rest of the demand in DFP
 */


function buildAdpodVideoUrl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      code = _ref.code,
      params = _ref.params,
      callback = _ref.callback;

  if (!params || !callback) {
    Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["logError"])("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");
    return;
  }

  var derivedParams = {
    correlator: Date.now(),
    sz: getSizeForAdUnit(code),
    url: encodeURIComponent(location.href)
  };

  function getSizeForAdUnit(code) {
    var adUnit = __WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__["a" /* auctionManager */].getAdUnits().filter(function (adUnit) {
      return adUnit.code === code;
    });
    var sizes = Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"])(adUnit[0], 'mediaTypes.video.playerSize');
    return Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["parseSizesInput"])(sizes).join('|');
  }

  adpodUtils.getTargeting({
    'codes': [code],
    'callback': createMasterTag
  });

  function createMasterTag(err, targeting) {
    var _initialValue;

    if (err) {
      callback(err, null);
      return;
    }

    var initialValue = (_initialValue = {}, _defineProperty(_initialValue, adpodUtils.TARGETING_KEY_PB_CAT_DUR, undefined), _defineProperty(_initialValue, adpodUtils.TARGETING_KEY_CACHE_ID, undefined), _initialValue);
    var customParams = {};

    if (targeting[code]) {
      customParams = targeting[code].reduce(function (acc, curValue) {
        if (Object.keys(curValue)[0] === adpodUtils.TARGETING_KEY_PB_CAT_DUR) {
          acc[adpodUtils.TARGETING_KEY_PB_CAT_DUR] = typeof acc[adpodUtils.TARGETING_KEY_PB_CAT_DUR] !== 'undefined' ? acc[adpodUtils.TARGETING_KEY_PB_CAT_DUR] + ',' + curValue[adpodUtils.TARGETING_KEY_PB_CAT_DUR] : curValue[adpodUtils.TARGETING_KEY_PB_CAT_DUR];
        } else if (Object.keys(curValue)[0] === adpodUtils.TARGETING_KEY_CACHE_ID) {
          acc[adpodUtils.TARGETING_KEY_CACHE_ID] = curValue[adpodUtils.TARGETING_KEY_CACHE_ID];
        }

        return acc;
      }, initialValue);
    }

    var encodedCustomParams = encodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["formatQS"])(customParams));

    var queryParams = _extends({}, defaultParamConstants, derivedParams, params, {
      cust_params: encodedCustomParams
    });

    var gdprConsent = __WEBPACK_IMPORTED_MODULE_6__src_adapterManager_js__["gdprDataHandler"].getConsentData();

    if (gdprConsent) {
      if (typeof gdprConsent.gdprApplies === 'boolean') {
        queryParams.gdpr = Number(gdprConsent.gdprApplies);
      }

      if (gdprConsent.consentString) {
        queryParams.gdpr_consent = gdprConsent.consentString;
      }

      if (gdprConsent.addtlConsent) {
        queryParams.addtl_consent = gdprConsent.addtlConsent;
      }
    }

    var uspConsent = __WEBPACK_IMPORTED_MODULE_6__src_adapterManager_js__["uspDataHandler"].getConsentData();

    if (uspConsent) {
      queryParams.us_privacy = uspConsent;
    }

    var masterTag = Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["buildUrl"])({
      protocol: 'https',
      host: 'securepubads.g.doubleclick.net',
      pathname: '/gampad/ads',
      search: queryParams
    });
    callback(null, masterTag);
  }
}
/**
 * Builds a video url from a base dfp video url and a winning bid, appending
 * Prebid-specific key-values.
 * @param {Object} components base video adserver url parsed into components object
 * @param {AdapterBidResponse} bid winning bid object to append parameters from
 * @param {Object} options Options which should be used to construct the URL (used for custom params).
 * @return {string} video url
 */

function buildUrlFromAdserverUrlComponents(components, bid, options) {
  var descriptionUrl = getDescriptionUrl(bid, components, 'search');

  if (descriptionUrl) {
    components.search.description_url = descriptionUrl;
  }

  var encodedCustomParams = getCustParams(bid, options);
  components.search.cust_params = components.search.cust_params ? components.search.cust_params + '%26' + encodedCustomParams : encodedCustomParams;
  return Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["buildUrl"])(components);
}
/**
 * Returns the encoded vast url if it exists on a bid object, only if prebid-cache
 * is disabled, and description_url is not already set on a given input
 * @param {AdapterBidResponse} bid object to check for vast url
 * @param {Object} components the object to check that description_url is NOT set on
 * @param {string} prop the property of components that would contain description_url
 * @return {string | undefined} The encoded vast url if it exists, or undefined
 */


function getDescriptionUrl(bid, components, prop) {
  if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('cache.url')) {
    return;
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"])(components, "".concat(prop, ".description_url"))) {
    var vastUrl = bid && bid.vastUrl;

    if (vastUrl) {
      return encodeURIComponent(vastUrl);
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["logError"])("input cannnot contain description_url");
  }
}
/**
 * Returns the encoded `cust_params` from the bid.adserverTargeting and adds the `hb_uuid`, and `hb_cache_id`. Optionally the options.params.cust_params
 * @param {AdapterBidResponse} bid
 * @param {Object} options this is the options passed in from the `buildDfpVideoUrl` function
 * @return {Object} Encoded key value pairs for cust_params
 */


function getCustParams(bid, options) {
  var adserverTargeting = bid && bid.adserverTargeting || {};
  var allTargetingData = {};
  var adUnit = options && options.adUnit;

  if (adUnit) {
    var allTargeting = __WEBPACK_IMPORTED_MODULE_1__src_targeting_js__["d" /* targeting */].getAllTargeting(adUnit.code);
    allTargetingData = allTargeting ? allTargeting[adUnit.code] : {};
  }

  var prebidTargetingSet = _extends({}, // Why are we adding standard keys here ? Refer https://github.com/prebid/Prebid.js/issues/3664
  {
    hb_uuid: bid && bid.videoCacheKey
  }, // hb_cache_id became optional in prebid 5.0 after 4.x enabled the concept of optional keys. Discussion led to reversing the prior expectation of deprecating hb_uuid
  {
    hb_cache_id: bid && bid.videoCacheKey
  }, allTargetingData, adserverTargeting);

  __WEBPACK_IMPORTED_MODULE_7__src_events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_8__src_constants_json___default.a.EVENTS.SET_TARGETING, _defineProperty({}, adUnit.code, prebidTargetingSet)); // merge the prebid + publisher targeting sets

  var publisherTargetingSet = Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"])(options, 'params.cust_params');

  var targetingSet = _extends({}, prebidTargetingSet, publisherTargetingSet);

  return encodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["formatQS"])(targetingSet));
}

Object(__WEBPACK_IMPORTED_MODULE_0__src_adServerManager_js__["a" /* registerVideoSupport */])('dfp', {
  buildVideoUrl: buildDfpVideoUrl,
  buildAdpodVideoUrl: buildAdpodVideoUrl,
  getAdpodTargeting: function getAdpodTargeting(args) {
    return adpodUtils.getTargeting(args);
  }
});
Object(__WEBPACK_IMPORTED_MODULE_4__src_hook_js__["e" /* submodule */])('adpod', adpodUtils);
window.pbjs.installedModules.push('dfpAdServerVideo');

/***/ })

},[306]);

pbjsChunk([262],{

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityLinkSubmodule", function() { return identityLinkSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__ = __webpack_require__(8);
/**
 * This module adds IdentityLink to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/identityLinkSubmodule
 * @requires module:modules/userId
 */




var storage = Object(__WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__["b" /* getStorageManager */])();
/** @type {Submodule} */

var identityLinkSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: 'identityLink',

  /**
   * used to specify vendor id
   * @type {number}
   */
  gvlid: 97,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} value
   * @returns {{idl_env:string}}
   */
  decode: function decode(value) {
    return {
      'idl_env': value
    };
  },

  /**
   * performs action to obtain id and return a value in the callback's response argument
   * @function
   * @param {ConsentData} [consentData]
   * @param {SubmoduleConfig} [config]
   * @returns {IdResponse|undefined}
   */
  getId: function getId(config, consentData) {
    var configParams = config && config.params || {};

    if (!configParams || typeof configParams.pid !== 'string') {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('identityLink: requires partner id to be defined');
      return;
    }

    var hasGdpr = consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies ? 1 : 0;
    var gdprConsentString = hasGdpr ? consentData.consentString : '';
    var tcfPolicyV2 = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](consentData, 'vendorData.tcfPolicyVersion') === 2; // use protocol relative urls for http or https

    if (hasGdpr && (!gdprConsentString || gdprConsentString === '')) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: Consent string is required to call envelope API.');
      return;
    }

    var url = "https://api.rlcdn.com/api/identity/envelope?pid=".concat(configParams.pid).concat(hasGdpr ? (tcfPolicyV2 ? '&ct=4&cv=' : '&ct=1&cv=') + gdprConsentString : '');
    var resp;

    resp = function resp(callback) {
      // Check ats during callback so it has a chance to initialise.
      // If ats library is available, use it to retrieve envelope. If not use standard third party endpoint
      if (window.ats) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: ATS exists!');
        window.ats.retrieveEnvelope(function (envelope) {
          if (envelope) {
            __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: An envelope can be retrieved from ATS!');
            setEnvelopeSource(true);
            callback(JSON.parse(envelope).envelope);
          } else {
            getEnvelope(url, callback, configParams);
          }
        });
      } else {
        getEnvelope(url, callback, configParams);
      }
    };

    return {
      callback: resp
    };
  }
}; // return envelope from third party endpoint

function getEnvelope(url, callback, configParams) {
  var callbacks = {
    success: function success(response) {
      var responseObj;

      if (response) {
        try {
          responseObj = JSON.parse(response);
        } catch (error) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"](error);
        }
      }

      callback(responseObj && responseObj.envelope ? responseObj.envelope : '');
    },
    error: function error(_error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]("identityLink: identityLink: ID fetch encountered an error", _error);
      callback();
    }
  };

  if (!configParams.notUse3P && !storage.getCookie('_lr_retry_request')) {
    setRetryCookie();
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: A 3P retrieval is attempted!');
    setEnvelopeSource(false);
    Object(__WEBPACK_IMPORTED_MODULE_1__src_ajax_js__["a" /* ajax */])(url, callbacks, undefined, {
      method: 'GET',
      withCredentials: true
    });
  }
}

function setRetryCookie() {
  var now = new Date();
  now.setTime(now.getTime() + 3600000);
  storage.setCookie('_lr_retry_request', 'true', now.toUTCString());
}

function setEnvelopeSource(src) {
  var now = new Date();
  now.setTime(now.getTime() + 2592000000);
  storage.setCookie('_lr_env_src_ats', src, now.toUTCString());
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_hook_js__["e" /* submodule */])('userId', identityLinkSubmodule);
window.pbjs.installedModules.push('identityLinkIdSystem');

/***/ })

},[408]);

pbjsChunk([192],{

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(586);


/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ID_CODE_TO_QUERY_ARG", function() { return USER_ID_CODE_TO_QUERY_ARG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_polyfill_js__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var SUPPORTED_AD_TYPES = [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]];
var VIDEO_TARGETING = ['startdelay', 'mimes', 'minduration', 'maxduration', 'startdelay', 'skippable', 'playbackmethod', 'api', 'protocols', 'boxingallowed', 'linearity', 'delivery', 'protocol', 'placement', 'minbitrate', 'maxbitrate'];
var BIDDER_CODE = 'openx';
var BIDDER_CONFIG = 'hb_pb';
var BIDDER_VERSION = '3.0.3';
var DEFAULT_CURRENCY = 'USD';
var USER_ID_CODE_TO_QUERY_ARG = {
  britepoolid: 'britepoolid',
  // BritePool ID
  criteoId: 'criteoid',
  // CriteoID
  fabrickId: 'nuestarid',
  // Fabrick ID by Nuestar
  haloId: 'audigentid',
  // Halo ID from Audigent
  id5id: 'id5id',
  // ID5 ID
  idl_env: 'lre',
  // LiveRamp IdentityLink
  IDP: 'zeotapid',
  // zeotapIdPlus ID+
  idxId: 'idxid',
  // idIDx,
  intentIqId: 'intentiqid',
  // IntentIQ ID
  lipb: 'lipbid',
  // LiveIntent ID
  lotamePanoramaId: 'lotameid',
  // Lotame Panorama ID
  merkleId: 'merkleid',
  // Merkle ID
  netId: 'netid',
  // netID
  parrableId: 'parrableid',
  // Parrable ID
  pubcid: 'pubcid',
  // PubCommon ID
  quantcastId: 'quantcastid',
  // Quantcast ID
  tapadId: 'tapadid',
  // Tapad Id
  tdid: 'ttduuid',
  // The Trade Desk Unified ID
  uid2: 'uid2',
  // Unified ID 2.0
  flocId: 'floc',
  // Chrome FLoC,
  admixerId: 'admixerid',
  // AdMixer ID
  deepintentId: 'deepintentid',
  // DeepIntent ID
  dmdId: 'dmdid',
  // DMD Marketing Corp ID
  nextrollId: 'nextrollid',
  // NextRoll ID
  novatiq: 'novatiqid',
  // Novatiq ID
  mwOpenLinkId: 'mwopenlinkid',
  // MediaWallah OpenLink ID
  dapId: 'dapid',
  // Akamai DAP ID
  amxId: 'amxid',
  // AMX RTB ID
  kpuid: 'kpuid',
  // Kinesso ID
  publinkId: 'publinkid',
  // Publisher Link
  naveggId: 'naveggid',
  // Navegg ID
  imuid: 'imuid',
  // IM-UID by Intimate Merger
  adtelligentId: 'adtelligentid' // Adtelligent ID

};
var spec = {
  code: BIDDER_CODE,
  gvlid: 69,
  supportedMediaTypes: SUPPORTED_AD_TYPES,
  isBidRequestValid: function isBidRequestValid(bidRequest) {
    var hasDelDomainOrPlatform = bidRequest.params.delDomain || bidRequest.params.platform;

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.banner') && hasDelDomainOrPlatform) {
      return !!bidRequest.params.unit || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.banner.sizes.length') > 0;
    }

    return !!(bidRequest.params.unit && hasDelDomainOrPlatform);
  },
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    if (bidRequests.length === 0) {
      return [];
    }

    var requests = [];

    var _partitionByVideoBids = partitionByVideoBids(bidRequests),
        _partitionByVideoBids2 = _slicedToArray(_partitionByVideoBids, 2),
        videoBids = _partitionByVideoBids2[0],
        bannerBids = _partitionByVideoBids2[1]; // build banner requests


    if (bannerBids.length > 0) {
      requests.push(buildOXBannerRequest(bannerBids, bidderRequest));
    } // build video requests


    if (videoBids.length > 0) {
      videoBids.forEach(function (videoBid) {
        requests.push(buildOXVideoRequest(videoBid, bidderRequest));
      });
    }

    return requests;
  },
  interpretResponse: function interpretResponse(_ref, serverRequest) {
    var oxResponseObj = _ref.body;
    var mediaType = getMediaTypeFromRequest(serverRequest);
    return mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */] ? createVideoBidResponses(oxResponseObj, serverRequest.payload) : createBannerBidResponses(oxResponseObj, serverRequest.payload);
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    if (syncOptions.iframeEnabled || syncOptions.pixelEnabled) {
      var pixelType = syncOptions.iframeEnabled ? 'iframe' : 'image';
      var url = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(responses, '0.body.ads.pixels') || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(responses, '0.body.pixels') || generateDefaultSyncUrl(gdprConsent, uspConsent);
      return [{
        type: pixelType,
        url: url
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"])({
      'unit': 'string',
      'customFloor': 'number'
    }, params);
  }
};

function generateDefaultSyncUrl(gdprConsent, uspConsent) {
  var url = 'https://u.openx.net/w/1.0/pd';
  var queryParamStrings = [];

  if (gdprConsent) {
    queryParamStrings.push('gdpr=' + (gdprConsent.gdprApplies ? 1 : 0));
    queryParamStrings.push('gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || ''));
  } // CCPA


  if (uspConsent) {
    queryParamStrings.push('us_privacy=' + encodeURIComponent(uspConsent));
  }

  return "".concat(url).concat(queryParamStrings.length > 0 ? '?' + queryParamStrings.join('&') : '');
}

function isVideoRequest(bidRequest) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video') && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.banner') || bidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */];
}

function createBannerBidResponses(oxResponseObj, _ref2) {
  var bids = _ref2.bids,
      startTime = _ref2.startTime;
  var adUnits = oxResponseObj.ads.ad;
  var bidResponses = [];

  for (var i = 0; i < adUnits.length; i++) {
    var adUnit = adUnits[i];
    var adUnitIdx = parseInt(adUnit.idx, 10);
    var bidResponse = {};
    bidResponse.requestId = bids[adUnitIdx].bidId;

    if (adUnit.pub_rev) {
      bidResponse.cpm = Number(adUnit.pub_rev) / 1000;
    } else {
      // No fill, do not add the bidresponse
      continue;
    }

    var creative = adUnit.creative[0];

    if (creative) {
      bidResponse.width = creative.width;
      bidResponse.height = creative.height;
    }

    bidResponse.creativeId = creative.id;
    bidResponse.ad = adUnit.html;

    if (adUnit.deal_id) {
      bidResponse.dealId = adUnit.deal_id;
    } // default 5 mins


    bidResponse.ttl = 300; // true is net, false is gross

    bidResponse.netRevenue = true;
    bidResponse.currency = adUnit.currency; // additional fields to add

    if (adUnit.tbd) {
      bidResponse.tbd = adUnit.tbd;
    }

    bidResponse.ts = adUnit.ts;
    bidResponse.meta = {};

    if (adUnit.brand_id) {
      bidResponse.meta.brandId = adUnit.brand_id;
    }

    if (adUnit.adomain && length(adUnit.adomain) > 0) {
      bidResponse.meta.advertiserDomains = adUnit.adomain;
    } else {
      bidResponse.meta.advertiserDomains = [];
    }

    if (adUnit.adv_id) {
      bidResponse.meta.dspid = adUnit.adv_id;
    }

    bidResponses.push(bidResponse);
  }

  return bidResponses;
}

function getViewportDimensions(isIfr) {
  var width;
  var height;
  var tWin = window;
  var tDoc = document;
  var docEl = tDoc.documentElement;
  var body;

  if (isIfr) {
    try {
      tWin = window.top;
      tDoc = window.top.document;
    } catch (e) {
      return;
    }

    docEl = tDoc.documentElement;
    body = tDoc.body;
    width = tWin.innerWidth || docEl.clientWidth || body.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight || body.clientHeight;
  } else {
    docEl = tDoc.documentElement;
    width = tWin.innerWidth || docEl.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight;
  }

  return "".concat(width, "x").concat(height);
}

function formatCustomParms(customKey, customParams) {
  var value = customParams[customKey];

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(value)) {
    // if value is an array, join them with commas first
    value = value.join(',');
  } // return customKey=customValue format, escaping + to . and / to _


  return (customKey.toLowerCase() + '=' + value.toLowerCase()).replace('+', '.').replace('/', '_');
}

function partitionByVideoBids(bidRequests) {
  return bidRequests.reduce(function (acc, bid) {
    // Fallback to banner ads if nothing specified
    if (isVideoRequest(bid)) {
      acc[0].push(bid);
    } else {
      acc[1].push(bid);
    }

    return acc;
  }, [[], []]);
}

function getMediaTypeFromRequest(serverRequest) {
  return /avjp$/.test(serverRequest.url) ? __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */] : __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */];
}

function buildCommonQueryParamsFromBids(bids, bidderRequest) {
  var isInIframe = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"])();
  var defaultParams;
  defaultParams = {
    ju: __WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('pageUrl') || bidderRequest.refererInfo.referer,
    ch: document.charSet || document.characterSet,
    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
    ifr: isInIframe,
    tz: new Date().getTimezoneOffset(),
    tws: getViewportDimensions(isInIframe),
    be: 1,
    bc: bids[0].params.bc || "".concat(BIDDER_CONFIG, "_").concat(BIDDER_VERSION),
    dddid: Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(bids, function (bid) {
      return bid.transactionId;
    }).join(','),
    nocache: new Date().getTime()
  };
  var userDataSegments = buildFpdQueryParams('ortb2.user.data');

  if (userDataSegments.length > 0) {
    defaultParams.sm = userDataSegments;
  }

  var siteContentDataSegments = buildFpdQueryParams('ortb2.site.content.data');

  if (siteContentDataSegments.length > 0) {
    defaultParams.scsm = siteContentDataSegments;
  }

  if (bids[0].params.platform) {
    defaultParams.ph = bids[0].params.platform;
  }

  if (bidderRequest.gdprConsent) {
    var gdprConsentConfig = bidderRequest.gdprConsent;

    if (gdprConsentConfig.consentString !== undefined) {
      defaultParams.gdpr_consent = gdprConsentConfig.consentString;
    }

    if (gdprConsentConfig.gdprApplies !== undefined) {
      defaultParams.gdpr = gdprConsentConfig.gdprApplies ? 1 : 0;
    }

    if (__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('consentManagement.cmpApi') === 'iab') {
      defaultParams.x_gdpr_f = 1;
    }
  }

  if (bidderRequest && bidderRequest.uspConsent) {
    defaultParams.us_privacy = bidderRequest.uspConsent;
  } // normalize publisher common id


  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bids[0], 'crumbs.pubcid')) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(bids[0], 'userId.pubcid', Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bids[0], 'crumbs.pubcid'));
  }

  defaultParams = appendUserIdsToQueryParams(defaultParams, bids[0].userId); // supply chain support

  if (bids[0].schain) {
    defaultParams.schain = serializeSupplyChain(bids[0].schain);
  }

  return defaultParams;
}

function buildFpdQueryParams(fpdPath) {
  var firstPartyData = __WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig(fpdPath);

  if (!Array.isArray(firstPartyData) || !firstPartyData.length) {
    return '';
  }

  var fpd = firstPartyData.filter(function (data) {
    return Array.isArray(data.segment) && data.segment.length > 0 && data.name !== undefined && data.name.length > 0;
  }).reduce(function (acc, data) {
    var name = _typeof(data.ext) === 'object' && data.ext.segtax ? "".concat(data.name, "/").concat(data.ext.segtax) : data.name;
    acc[name] = (acc[name] || []).concat(data.segment.map(function (seg) {
      return seg.id;
    }));
    return acc;
  }, {});
  return Object.keys(fpd).map(function (name, _) {
    return name + ':' + fpd[name].join('|');
  }).join(',');
}

function appendUserIdsToQueryParams(queryParams, userIds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"])(userIds, function (userIdObjectOrValue, userIdProviderKey) {
    var key = USER_ID_CODE_TO_QUERY_ARG[userIdProviderKey];

    if (USER_ID_CODE_TO_QUERY_ARG.hasOwnProperty(userIdProviderKey)) {
      switch (userIdProviderKey) {
        case 'merkleId':
          queryParams[key] = userIdObjectOrValue.id;
          break;

        case 'flocId':
          queryParams[key] = userIdObjectOrValue.id;
          break;

        case 'uid2':
          queryParams[key] = userIdObjectOrValue.id;
          break;

        case 'lipb':
          queryParams[key] = userIdObjectOrValue.lipbid;

          if (Array.isArray(userIdObjectOrValue.segments) && userIdObjectOrValue.segments.length > 0) {
            var liveIntentSegments = 'liveintent:' + userIdObjectOrValue.segments.join('|');
            queryParams.sm = "".concat(queryParams.sm ? queryParams.sm + ',' : '').concat(liveIntentSegments);
          }

          break;

        case 'parrableId':
          queryParams[key] = userIdObjectOrValue.eid;
          break;

        case 'id5id':
          queryParams[key] = userIdObjectOrValue.uid;
          break;

        case 'novatiq':
          queryParams[key] = userIdObjectOrValue.snowflake;
          break;

        default:
          queryParams[key] = userIdObjectOrValue;
      }
    }
  });

  return queryParams;
}

function serializeSupplyChain(supplyChain) {
  return "".concat(supplyChain.ver, ",").concat(supplyChain.complete, "!").concat(serializeSupplyChainNodes(supplyChain.nodes));
}

function serializeSupplyChainNodes(supplyChainNodes) {
  var supplyChainNodePropertyOrder = ['asi', 'sid', 'hp', 'rid', 'name', 'domain'];
  return supplyChainNodes.map(function (supplyChainNode) {
    return supplyChainNodePropertyOrder.map(function (property) {
      return supplyChainNode[property] || '';
    }).join(',');
  }).join('!');
}

function buildOXBannerRequest(bids, bidderRequest) {
  var customParamsForAllBids = [];
  var hasCustomParam = false;
  var queryParams = buildCommonQueryParamsFromBids(bids, bidderRequest);

  var auids = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(bids, function (bid) {
    return bid.params.unit;
  });

  queryParams.aus = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(bids, function (bid) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseSizesInput"])(bid.mediaTypes.banner.sizes).join(',');
  }).join('|');
  queryParams.divids = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(bids, function (bid) {
    return encodeURIComponent(bid.adUnitCode);
  }).join(','); // gpid

  queryParams.aucs = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(bids, function (bid) {
    var gpid = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'ortb2Imp.ext.data.pbadslot');
    return encodeURIComponent(gpid || '');
  }).join(',');

  if (auids.some(function (auid) {
    return auid;
  })) {
    queryParams.auid = auids.join(',');
  }

  if (bids.some(function (bid) {
    return bid.params.doNotTrack;
  })) {
    queryParams.ns = 1;
  }

  if (__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('coppa') === true || bids.some(function (bid) {
    return bid.params.coppa;
  })) {
    queryParams.tfcd = 1;
  }

  bids.forEach(function (bid) {
    if (bid.params.customParams) {
      var customParamsForBid = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_map"])(Object.keys(bid.params.customParams), function (customKey) {
        return formatCustomParms(customKey, bid.params.customParams);
      });

      var formattedCustomParams = window.btoa(customParamsForBid.join('&'));
      hasCustomParam = true;
      customParamsForAllBids.push(formattedCustomParams);
    } else {
      customParamsForAllBids.push('');
    }
  });

  if (hasCustomParam) {
    queryParams.tps = customParamsForAllBids.join(',');
  }

  enrichQueryWithFloors(queryParams, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */], bids);
  var url = queryParams.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(bids[0].params.delDomain, "/w/1.0/arj");
  return {
    method: 'GET',
    url: url,
    data: queryParams,
    payload: {
      'bids': bids,
      'startTime': new Date()
    }
  };
}

function buildOXVideoRequest(bid, bidderRequest) {
  var oxVideoParams = generateVideoParameters(bid, bidderRequest);
  var url = oxVideoParams.ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(bid.params.delDomain, "/v/1.0/avjp");
  return {
    method: 'GET',
    url: url,
    data: oxVideoParams,
    payload: {
      'bid': bid,
      'startTime': new Date()
    }
  };
}

function generateVideoParameters(bid, bidderRequest) {
  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, "mediaTypes.video");
  var queryParams = buildCommonQueryParamsFromBids([bid], bidderRequest);
  var oxVideoConfig = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'params.video') || {};
  var context = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video.context');
  var playerSize = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video.playerSize');
  var width;
  var height; // normalize config for video size

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.sizes) && bid.sizes.length === 2 && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.sizes[0])) {
    width = parseInt(bid.sizes[0], 10);
    height = parseInt(bid.sizes[1], 10);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.sizes) && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.sizes[0]) && bid.sizes[0].length === 2) {
    width = parseInt(bid.sizes[0][0], 10);
    height = parseInt(bid.sizes[0][1], 10);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(playerSize) && playerSize.length === 2) {
    width = parseInt(playerSize[0], 10);
    height = parseInt(playerSize[1], 10);
  }

  var openRtbParams = {
    w: width,
    h: height
  }; // legacy openrtb params could be in video, openrtb, or video.openrtb

  var legacyParams = bid.params.video || bid.params.openrtb || {};

  if (legacyParams.openrtb) {
    legacyParams = legacyParams.openrtb;
  } // support for video object or full openrtb object


  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(legacyParams.imp)) {
    legacyParams = legacyParams.imp[0].video;
  }

  Object.keys(legacyParams).filter(function (param) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__src_polyfill_js__["d" /* includes */])(VIDEO_TARGETING, param);
  }).forEach(function (param) {
    return openRtbParams[param] = legacyParams[param];
  }); // 5.0 openrtb video params

  Object.keys(videoMediaType).filter(function (param) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__src_polyfill_js__["d" /* includes */])(VIDEO_TARGETING, param);
  }).forEach(function (param) {
    return openRtbParams[param] = videoMediaType[param];
  });
  var openRtbReq = {
    imp: [{
      video: openRtbParams
    }]
  };
  queryParams['openrtb'] = JSON.stringify(openRtbReq);
  queryParams.auid = bid.params.unit; // override prebid config with openx config if available

  queryParams.vwd = width || oxVideoConfig.vwd;
  queryParams.vht = height || oxVideoConfig.vht;

  if (context === 'outstream') {
    queryParams.vos = '101';
  }

  if (oxVideoConfig.mimes) {
    queryParams.vmimes = oxVideoConfig.mimes;
  }

  if (bid.params.test) {
    queryParams.vtest = 1;
  }

  var gpid = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'ortb2Imp.ext.data.pbadslot');

  if (gpid) {
    queryParams.aucs = encodeURIComponent(gpid);
  } // each video bid makes a separate request


  enrichQueryWithFloors(queryParams, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */], [bid]);
  return queryParams;
}

function createVideoBidResponses(response, _ref3) {
  var bid = _ref3.bid,
      startTime = _ref3.startTime;
  var bidResponses = [];

  if (response !== undefined && response.vastUrl !== '' && response.pub_rev > 0) {
    var vastQueryParams = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"])(response.vastUrl).search || {};
    var bidResponse = {};
    bidResponse.requestId = bid.bidId;

    if (response.deal_id) {
      bidResponse.dealId = response.deal_id;
    } // default 5 mins


    bidResponse.ttl = 300; // true is net, false is gross

    bidResponse.netRevenue = true;
    bidResponse.currency = response.currency;
    bidResponse.cpm = parseInt(response.pub_rev, 10) / 1000;
    bidResponse.width = parseInt(response.width, 10);
    bidResponse.height = parseInt(response.height, 10);
    bidResponse.creativeId = response.adid;
    bidResponse.vastUrl = response.vastUrl;
    bidResponse.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]; // enrich adunit with vast parameters

    response.ph = vastQueryParams.ph;
    response.colo = vastQueryParams.colo;
    response.ts = vastQueryParams.ts;
    bidResponses.push(bidResponse);
  }

  return bidResponses;
}

function enrichQueryWithFloors(queryParams, mediaType, bids) {
  var customFloorsForAllBids = [];
  var hasCustomFloor = false;
  bids.forEach(function (bid) {
    var floor = getBidFloor(bid, mediaType);

    if (floor) {
      customFloorsForAllBids.push(floor);
      hasCustomFloor = true;
    } else {
      customFloorsForAllBids.push(0);
    }
  });

  if (hasCustomFloor) {
    queryParams.aumfs = customFloorsForAllBids.join(',');
  }
}

function getBidFloor(bidRequest, mediaType) {
  var floorInfo = {};
  var currency = __WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('currency.adServerCurrency') || DEFAULT_CURRENCY;

  if (typeof bidRequest.getFloor === 'function') {
    floorInfo = bidRequest.getFloor({
      currency: currency,
      mediaType: mediaType,
      size: '*'
    });
  }

  var floor = floorInfo.floor || bidRequest.params.customFloor || 0;
  return Math.round(floor * 1000); // normalize to micro currency
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__["registerBidder"])(spec);
window.pbjs.installedModules.push('openxBidAdapter');

/***/ })

},[585]);

pbjsChunk([174],{

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(627);


/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publinkIdSubmodule", function() { return publinkIdSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_storageManager_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__ = __webpack_require__(10);
/**
 * This module adds the PublinkId to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/publinkIdSystem
 * @requires module:modules/userId
 */





var MODULE_NAME = 'publinkId';
var GVLID = 24;
var PUBLINK_COOKIE = '_publink';
var PUBLINK_S2S_COOKIE = '_publink_srv';
var storage = Object(__WEBPACK_IMPORTED_MODULE_1__src_storageManager_js__["b" /* getStorageManager */])({
  gvlid: GVLID
});

function isHex(s) {
  return /^[A-F0-9]+$/i.test(s);
}

function publinkIdUrl(params, consentData) {
  var url = Object(__WEBPACK_IMPORTED_MODULE_3__src_utils_js__["parseUrl"])('https://proc.ad.cpe.dotomi.com/cvx/client/sync/publink');
  url.search = {
    deh: params.e,
    mpn: 'Prebid.js',
    mpv: "6.15.0-pre"
  };

  if (consentData) {
    url.search.gdpr = consentData.gdprApplies ? 1 : 0;
    url.search.gdpr_consent = consentData.consentString;
  }

  if (params.site_id) {
    url.search.sid = params.site_id;
  }

  if (params.api_key) {
    url.search.apikey = params.api_key;
  }

  var usPrivacyString = __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__["uspDataHandler"].getConsentData();

  if (usPrivacyString && typeof usPrivacyString === 'string') {
    url.search.us_privacy = usPrivacyString;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_3__src_utils_js__["buildUrl"])(url);
}

function makeCallback() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var consentData = arguments.length > 1 ? arguments[1] : undefined;
  return function (prebidCallback) {
    var options = {
      method: 'GET',
      withCredentials: true
    };

    var handleResponse = function handleResponse(responseText, xhr) {
      if (xhr.status === 200) {
        var response = JSON.parse(responseText);

        if (response) {
          prebidCallback(response.publink);
        }
      }
    };

    if (config.params && config.params.e) {
      if (isHex(config.params.e)) {
        Object(__WEBPACK_IMPORTED_MODULE_2__src_ajax_js__["a" /* ajax */])(publinkIdUrl(config.params, consentData), handleResponse, undefined, options);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_3__src_utils_js__["logError"])('params.e must be a hex string');
      }
    }
  };
}

function getlocalValue() {
  var result;

  function getData(key) {
    var value;

    if (storage.hasLocalStorage()) {
      value = storage.getDataFromLocalStorage(key);
    }

    if (!value) {
      value = storage.getCookie(key);
    }

    if (typeof value === 'string') {
      // if it's a json object parse it and return the publink value, otherwise assume the value is the id
      if (value.charAt(0) === '{') {
        try {
          var obj = JSON.parse(value);

          if (obj) {
            return obj.publink;
          }
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_3__src_utils_js__["logError"])(e);
        }
      } else {
        return value;
      }
    }
  }

  result = getData(PUBLINK_S2S_COOKIE);

  if (!result) {
    result = getData(PUBLINK_COOKIE);
  }

  return result;
}
/** @type {Submodule} */


var publinkIdSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: MODULE_NAME,
  gvlid: GVLID,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} publinkId encrypted userid
   * @returns {{publinkId: string} | undefined}
   */
  decode: function decode(publinkId) {
    return {
      publinkId: publinkId
    };
  },

  /**
   * performs action to obtain id
   * Use a publink cookie first if it is present, otherwise use prebids copy, if neither are available callout to get a new id
   * @function
   * @param {SubmoduleConfig} [config] Config object with params and storage properties
   * @param {ConsentData|undefined} consentData GDPR consent
   * @param {(Object|undefined)} storedId Previously cached id
   * @returns {IdResponse}
   */
  getId: function getId(config, consentData, storedId) {
    var localValue = getlocalValue();

    if (localValue) {
      return {
        id: localValue
      };
    }

    if (!storedId) {
      return {
        callback: makeCallback(config, consentData)
      };
    }
  }
};
Object(__WEBPACK_IMPORTED_MODULE_0__src_hook_js__["e" /* submodule */])('userId', publinkIdSubmodule);
window.pbjs.installedModules.push('publinkIdSystem');

/***/ })

},[626]);

pbjsChunk([148],{

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(709);


/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedIdSystemSubmodule", function() { return sharedIdSystemSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__ = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This module adds SharedId to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/sharedIdSystem
 * @requires module:modules/userId
 */




var GVLID = 887;
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__["b" /* getStorageManager */])({
  gvlid: GVLID,
  moduleName: 'pubCommonId'
});
var COOKIE = 'cookie';
var LOCAL_STORAGE = 'html5';
var OPTOUT_NAME = '_pubcid_optout';
var PUB_COMMON_ID = 'PublisherCommonId';
/**
 * Read a value either from cookie or local storage
 * @param {string} name Name of the item
 * @param {string} type storage type override
 * @returns {string|null} a string if item exists
 */

function readValue(name, type) {
  if (type === COOKIE) {
    return storage.getCookie(name);
  } else if (type === LOCAL_STORAGE) {
    if (storage.hasLocalStorage()) {
      var expValue = storage.getDataFromLocalStorage("".concat(name, "_exp"));

      if (!expValue) {
        return storage.getDataFromLocalStorage(name);
      } else if (new Date(expValue).getTime() - Date.now() > 0) {
        return storage.getDataFromLocalStorage(name);
      }
    }
  }
}

function getIdCallback(pubcid, pixelCallback) {
  return function (callback) {
    if (typeof pixelCallback === 'function') {
      pixelCallback();
    }

    callback(pubcid);
  };
}

function queuePixelCallback(pixelUrl) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var callback = arguments.length > 2 ? arguments[2] : undefined;

  if (!pixelUrl) {
    return;
  } // Use pubcid as a cache buster


  var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"])(pixelUrl);
  urlInfo.search.id = encodeURIComponent('pubcid:' + id);
  var targetUrl = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["buildUrl"])(urlInfo);
  return function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["triggerPixel"])(targetUrl);
  };
}

function hasOptedOut() {
  return !!(storage.cookiesAreEnabled() && readValue(OPTOUT_NAME, COOKIE) || storage.hasLocalStorage() && readValue(OPTOUT_NAME, LOCAL_STORAGE));
}

var sharedIdSystemSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: 'sharedId',
  aliasName: 'pubCommonId',

  /**
   * Vendor id of prebid
   * @type {Number}
   */
  gvlid: GVLID,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} value
   * @param {SubmoduleConfig} config
   * @returns {{pubcid:string}}
   */
  decode: function decode(value, config) {
    if (hasOptedOut()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId decode: Has opted-out');
      return undefined;
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(' Decoded value PubCommonId ' + value);
    var idObj = {
      'pubcid': value
    };
    return idObj;
  },

  /**
   * performs action to obtain id
   * @function
   * @param {SubmoduleConfig} [config] Config object with params and storage properties
   * @param {Object} consentData
   * @param {string} storedId Existing pubcommon id
   * @returns {IdResponse}
   */
  getId: function getId() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var consentData = arguments.length > 1 ? arguments[1] : undefined;
    var storedId = arguments.length > 2 ? arguments[2] : undefined;

    if (hasOptedOut()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: Has opted-out');
      return;
    }

    var coppa = __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["coppaDataHandler"].getCoppa();

    if (coppa) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: IDs not provided for coppa requests, exiting PubCommonId');
      return;
    }

    var _config$params = config.params;
    _config$params = _config$params === void 0 ? {} : _config$params;
    var _config$params$create = _config$params.create,
        create = _config$params$create === void 0 ? true : _config$params$create,
        pixelUrl = _config$params.pixelUrl;
    var newId = storedId;

    if (!newId) {
      try {
        if (_typeof(window[PUB_COMMON_ID]) === 'object') {
          // If the page includes its own pubcid module, then save a copy of id.
          newId = window[PUB_COMMON_ID].getId();
        }
      } catch (e) {}

      if (!newId) newId = create && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["hasDeviceAccess"])() ? Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["generateUUID"])() : undefined;
    }

    var pixelCallback = queuePixelCallback(pixelUrl, newId);
    return {
      id: newId,
      callback: getIdCallback(newId, pixelCallback)
    };
  },

  /**
   * performs action to extend an id.  There are generally two ways to extend the expiration time
   * of stored id: using pixelUrl or return the id and let main user id module write it again with
   * the new expiration time.
   *
   * PixelUrl, if defined, should point back to a first party domain endpoint.  On the server
   * side, there is either a plugin, or customized logic to read and write back the pubcid cookie.
   * The extendId function itself should return only the callback, and not the id itself to avoid
   * having the script-side overwriting server-side.  This applies to both pubcid and sharedid.
   *
   * On the other hand, if there is no pixelUrl, then the extendId should return storedId so that
   * its expiration time is updated.
   *
   * @function
   * @param {SubmoduleParams} [config]
   * @param {ConsentData|undefined} consentData
   * @param {Object} storedId existing id
   * @returns {IdResponse|undefined}
   */
  extendId: function extendId() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var consentData = arguments.length > 1 ? arguments[1] : undefined;
    var storedId = arguments.length > 2 ? arguments[2] : undefined;

    if (hasOptedOut()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: Has opted-out');
      return {
        id: undefined
      };
    }

    var coppa = __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["coppaDataHandler"].getCoppa();

    if (coppa) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: IDs not provided for coppa requests, exiting PubCommonId');
      return;
    }

    var _config$params2 = config.params;
    _config$params2 = _config$params2 === void 0 ? {} : _config$params2;
    var _config$params2$exten = _config$params2.extend,
        extend = _config$params2$exten === void 0 ? false : _config$params2$exten,
        pixelUrl = _config$params2.pixelUrl;

    if (extend) {
      if (pixelUrl) {
        var callback = queuePixelCallback(pixelUrl, storedId);
        return {
          callback: callback
        };
      } else {
        return {
          id: storedId
        };
      }
    }
  },
  domainOverride: function domainOverride() {
    var domainElements = document.domain.split('.');
    var cookieName = "_gd".concat(Date.now());

    for (var i = 0, topDomain, testCookie; i < domainElements.length; i++) {
      var nextDomain = domainElements.slice(i).join('.'); // write test cookie

      storage.setCookie(cookieName, '1', undefined, undefined, nextDomain); // read test cookie to verify domain was valid

      testCookie = storage.getCookie(cookieName); // delete test cookie

      storage.setCookie(cookieName, '', 'Thu, 01 Jan 1970 00:00:01 GMT', undefined, nextDomain);

      if (testCookie === '1') {
        // cookie was written successfully using test domain so the topDomain is updated
        topDomain = nextDomain;
      } else {
        // cookie failed to write using test domain so exit by returning the topDomain
        return topDomain;
      }
    }
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_hook_js__["e" /* submodule */])('userId', sharedIdSystemSubmodule);
window.pbjs.installedModules.push('sharedIdSystem');

/***/ })

},[708]);

pbjsChunk([14],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createEidsArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildEidPermissions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
 // Each user-id sub-module is expected to mention respective config here

var USER_IDS_CONFIG = {
  // key-name : {config}
  // trustpid
  'trustpid': {
    source: 'trustpid.com',
    atype: 1,
    getValue: function getValue(data) {
      return data;
    }
  },
  // intentIqId
  'intentIqId': {
    source: 'intentiq.com',
    atype: 1
  },
  // naveggId
  'naveggId': {
    source: 'navegg.com',
    atype: 1
  },
  // justId
  'justId': {
    source: 'justtag.com',
    atype: 1
  },
  // pubCommonId
  'pubcid': {
    source: 'pubcid.org',
    atype: 1
  },
  // unifiedId
  'tdid': {
    source: 'adserver.org',
    atype: 1,
    getUidExt: function getUidExt() {
      return {
        rtiPartner: 'TDID'
      };
    }
  },
  // id5Id
  'id5id': {
    getValue: function getValue(data) {
      return data.uid;
    },
    source: 'id5-sync.com',
    atype: 1,
    getUidExt: function getUidExt(data) {
      if (data.ext) {
        return data.ext;
      }
    }
  },
  // parrableId
  'parrableId': {
    source: 'parrable.com',
    atype: 1,
    getValue: function getValue(parrableId) {
      if (parrableId.eid) {
        return parrableId.eid;
      }

      if (parrableId.ccpaOptout) {
        // If the EID was suppressed due to a non consenting ccpa optout then
        // we still wish to provide this as a reason to the adapters
        return '';
      }

      return null;
    },
    getUidExt: function getUidExt(parrableId) {
      var extendedData = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["pick"])(parrableId, ['ibaOptout', 'ccpaOptout']);

      if (Object.keys(extendedData).length) {
        return extendedData;
      }
    }
  },
  // identityLink
  'idl_env': {
    source: 'liveramp.com',
    atype: 3
  },
  // liveIntentId
  'lipb': {
    getValue: function getValue(data) {
      return data.lipbid;
    },
    source: 'liveintent.com',
    atype: 3,
    getEidExt: function getEidExt(data) {
      if (Array.isArray(data.segments) && data.segments.length) {
        return {
          segments: data.segments
        };
      }
    }
  },
  // britepoolId
  'britepoolid': {
    source: 'britepool.com',
    atype: 3
  },
  // dmdId
  'dmdId': {
    source: 'hcn.health',
    atype: 3
  },
  // lotamePanoramaId
  lotamePanoramaId: {
    source: 'crwdcntrl.net',
    atype: 1
  },
  // criteo
  'criteoId': {
    source: 'criteo.com',
    atype: 1
  },
  // merkleId
  'merkleId': {
    source: 'merkleinc.com',
    atype: 3,
    getValue: function getValue(data) {
      return data.id;
    },
    getUidExt: function getUidExt(data) {
      return data && data.keyID ? {
        keyID: data.keyID
      } : undefined;
    }
  },
  // NetId
  'netId': {
    source: 'netid.de',
    atype: 1
  },
  // zeotapIdPlus
  'IDP': {
    source: 'zeotap.com',
    atype: 1
  },
  // hadronId
  'hadronId': {
    source: 'audigent.com',
    atype: 1
  },
  // haloId (deprecated in 7.0, use hadronId)
  'haloId': {
    source: 'audigent.com',
    atype: 1
  },
  // quantcastId
  'quantcastId': {
    source: 'quantcast.com',
    atype: 1
  },
  // nextroll
  'nextrollId': {
    source: 'nextroll.com',
    atype: 1
  },
  // IDx
  'idx': {
    source: 'idx.lat',
    atype: 1
  },
  // Verizon Media ConnectID
  'connectid': {
    source: 'verizonmedia.com',
    atype: 3
  },
  // Neustar Fabrick
  'fabrickId': {
    source: 'neustar.biz',
    atype: 1
  },
  // MediaWallah OpenLink
  'mwOpenLinkId': {
    source: 'mediawallahscript.com',
    atype: 1
  },
  'tapadId': {
    source: 'tapad.com',
    atype: 1
  },
  // Novatiq Snowflake
  'novatiq': {
    getValue: function getValue(data) {
      return data.snowflake;
    },
    source: 'novatiq.com',
    atype: 1
  },
  'uid2': {
    source: 'uidapi.com',
    atype: 3,
    getValue: function getValue(data) {
      return data.id;
    }
  },
  // Akamai Data Activation Platform (DAP)
  'dapId': {
    source: 'akamai.com',
    atype: 1
  },
  'deepintentId': {
    source: 'deepintent.com',
    atype: 3
  },
  // Admixer Id
  'admixerId': {
    source: 'admixer.net',
    atype: 3
  },
  // Adtelligent Id
  'adtelligentId': {
    source: 'adtelligent.com',
    atype: 3
  },
  amxId: {
    source: 'amxrtb.com',
    atype: 1
  },
  'publinkId': {
    source: 'epsilon.com',
    atype: 3
  },
  'kpuid': {
    source: 'kpuid.com',
    atype: 3
  },
  'imuid': {
    source: 'intimatemerger.com',
    atype: 1
  },
  // Yahoo ConnectID
  'connectId': {
    source: 'yahoo.com',
    atype: 3
  },
  // Adquery ID
  'qid': {
    source: 'adquery.io',
    atype: 1
  }
}; // this function will create an eid object for the given UserId sub-module

function createEidObject(userIdData, subModuleKey) {
  var conf = USER_IDS_CONFIG[subModuleKey];

  if (conf && userIdData) {
    var eid = {};
    eid.source = conf['source'];
    var value = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(conf['getValue']) ? conf['getValue'](userIdData) : userIdData;

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(value)) {
      var uid = {
        id: value,
        atype: conf['atype']
      }; // getUidExt

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(conf['getUidExt'])) {
        var uidExt = conf['getUidExt'](userIdData);

        if (uidExt) {
          uid.ext = uidExt;
        }
      }

      eid.uids = [uid]; // getEidExt

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(conf['getEidExt'])) {
        var eidExt = conf['getEidExt'](userIdData);

        if (eidExt) {
          eid.ext = eidExt;
        }
      }

      return eid;
    }
  }

  return null;
} // this function will generate eids array for all available IDs in bidRequest.userId
// this function will be called by userId module
// if any adapter does not want any particular userId to be passed then adapter can use Array.filter(e => e.source != 'tdid')


function createEidsArray(bidRequestUserId) {
  var eids = [];

  for (var subModuleKey in bidRequestUserId) {
    if (bidRequestUserId.hasOwnProperty(subModuleKey)) {
      if (subModuleKey === 'pubProvidedId') {
        eids = eids.concat(bidRequestUserId['pubProvidedId']);
      } else {
        var eid = createEidObject(bidRequestUserId[subModuleKey], subModuleKey);

        if (eid) {
          eids.push(eid);
        }
      }
    }
  }

  return eids;
}
/**
 * @param {SubmoduleContainer[]} submodules
 */

function buildEidPermissions(submodules) {
  var eidPermissions = [];
  submodules.filter(function (i) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(i.idObj) && Object.keys(i.idObj).length;
  }).forEach(function (i) {
    Object.keys(i.idObj).forEach(function (key) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(i, 'config.bidders') && Array.isArray(i.config.bidders) && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(USER_IDS_CONFIG, key + '.source')) {
        eidPermissions.push({
          source: USER_IDS_CONFIG[key].source,
          bidders: i.config.bidders
        });
      }
    });
  });
  return eidPermissions;
}

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(811);


/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBJS_USER_ID_OPTOUT_NAME", function() { return PBJS_USER_ID_OPTOUT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreStorage", function() { return coreStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDelay", function() { return syncDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auctionDelay", function() { return auctionDelay; });
/* harmony export (immutable) */ __webpack_exports__["setSubmoduleRegistry"] = setSubmoduleRegistry;
/* harmony export (immutable) */ __webpack_exports__["setStoredValue"] = setStoredValue;
/* harmony export (immutable) */ __webpack_exports__["setStoredConsentData"] = setStoredConsentData;
/* harmony export (immutable) */ __webpack_exports__["findRootDomain"] = findRootDomain;
/* harmony export (immutable) */ __webpack_exports__["requestBidsHook"] = requestBidsHook;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGdprEnforcement", function() { return validateGdprEnforcement; });
/* harmony export (immutable) */ __webpack_exports__["attachIdSystem"] = attachIdSystem;
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfill_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_events_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_hook_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eids_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_storageManager_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utils_js__ = __webpack_require__(0);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This module adds User ID support to prebid.js
 * @module modules/userId
 */

/**
 * @interface Submodule
 */

/**
 * @function
 * @summary performs action to obtain id and return a value in the callback's response argument.
 *  If IdResponse#id is defined, then it will be written to the current active storage.
 *  If IdResponse#callback is defined, then it'll called at the end of auction.
 *  It's permissible to return neither, one, or both fields.
 * @name Submodule#getId
 * @param {SubmoduleConfig} config
 * @param {ConsentData|undefined} consentData
 * @param {(Object|undefined)} cacheIdObj
 * @return {(IdResponse|undefined)} A response object that contains id and/or callback.
 */

/**
 * @function
 * @summary Similar to Submodule#getId, this optional method returns response to for id that exists already.
 *  If IdResponse#id is defined, then it will be written to the current active storage even if it exists already.
 *  If IdResponse#callback is defined, then it'll called at the end of auction.
 *  It's permissible to return neither, one, or both fields.
 * @name Submodule#extendId
 * @param {SubmoduleConfig} config
 * @param {ConsentData|undefined} consentData
 * @param {Object} storedId - existing id, if any
 * @return {(IdResponse|function(callback:function))} A response object that contains id and/or callback.
 */

/**
 * @function
 * @summary decode a stored value for passing to bid requests
 * @name Submodule#decode
 * @param {Object|string} value
 * @param {SubmoduleConfig|undefined} config
 * @return {(Object|undefined)}
 */

/**
 * @property
 * @summary used to link submodule with config
 * @name Submodule#name
 * @type {string}
 */

/**
 * @property
 * @summary use a predefined domain override for cookies or provide your own
 * @name Submodule#domainOverride
 * @type {(undefined|function)}
 */

/**
 * @function
 * @summary Returns the root domain
 * @name Submodule#findRootDomain
 * @returns {string}
 */

/**
 * @typedef {Object} SubmoduleConfig
 * @property {string} name - the User ID submodule name (used to link submodule with config)
 * @property {(SubmoduleStorage|undefined)} storage - browser storage config
 * @property {(SubmoduleParams|undefined)} params - params config for use by the submodule.getId function
 * @property {(Object|undefined)} value - if not empty, this value is added to bid requests for access in adapters
 */

/**
 * @typedef {Object} SubmoduleStorage
 * @property {string} type - browser storage type (html5 or cookie)
 * @property {string} name - key name to use when saving/reading to local storage or cookies
 * @property {number} expires - time to live for browser storage in days
 * @property {(number|undefined)} refreshInSeconds - if not empty, this value defines the maximum time span in seconds before refreshing user ID stored in browser
 */

/**
 * @typedef {Object} LiveIntentCollectConfig
 * @property {(string|undefined)} fpiStorageStrategy - defines whether the first party identifiers that LiveConnect creates and updates are stored in a cookie jar, local storage, or not created at all
 * @property {(number|undefined)} fpiExpirationDays - the expiration time of an identifier created and updated by LiveConnect
 * @property {(string|undefined)} collectorUrl - defines where the LiveIntentId signal pixels are pointing to
 * @property {(string|undefined)} appId - the  unique identifier of the application in question
 */

/**
 * @typedef {Object} SubmoduleParams
 * @property {(string|undefined)} partner - partner url param value
 * @property {(string|undefined)} url - webservice request url used to load Id data
 * @property {(string|undefined)} pixelUrl - publisher pixel to extend/modify cookies
 * @property {(boolean|undefined)} create - create id if missing.  default is true.
 * @property {(boolean|undefined)} extend - extend expiration time on each access.  default is false.
 * @property {(string|undefined)} pid - placement id url param value
 * @property {(string|undefined)} publisherId - the unique identifier of the publisher in question
 * @property {(string|undefined)} ajaxTimeout - the number of milliseconds a resolution request can take before automatically being terminated
 * @property {(array|undefined)} identifiersToResolve - the identifiers from either ls|cookie to be attached to the getId query
 * @property {(LiveIntentCollectConfig|undefined)} liCollectConfig - the config for LiveIntent's collect requests
 * @property {(string|undefined)} pd - publisher provided data for reconciling ID5 IDs
 * @property {(string|undefined)} emailHash - if provided, the hashed email address of a user
 * @property {(string|undefined)} notUse3P - use to retrieve envelope from 3p endpoint
 */

/**
 * @typedef {Object} SubmoduleContainer
 * @property {Submodule} submodule
 * @property {SubmoduleConfig} config
 * @property {(Object|undefined)} idObj - cache decoded id value (this is copied to every adUnit bid)
 * @property {(function|undefined)} callback - holds reference to submodule.getId() result if it returned a function. Will be set to undefined after callback executes
 */

/**
 * @typedef {Object} ConsentData
 * @property {(string|undefined)} consentString
 * @property {(Object|undefined)} vendorData
 * @property {(boolean|undefined)} gdprApplies
 */

/**
 * @typedef {Object} IdResponse
 * @property {(Object|undefined)} id - id data
 * @property {(function|undefined)} callback - function that will return an id
 */

/**
  * @typedef {Object} RefreshUserIdsOptions
  * @property {(string[]|undefined)} submoduleNames - submodules to refresh
  */










var MODULE_NAME = 'User ID';
var COOKIE = 'cookie';
var LOCAL_STORAGE = 'html5';
var DEFAULT_SYNC_DELAY = 500;
var NO_AUCTION_DELAY = 0;
var CONSENT_DATA_COOKIE_STORAGE_CONFIG = {
  name: '_pbjs_userid_consent_data',
  expires: 30 // 30 days expiration, which should match how often consent is refreshed by CMPs

};
var PBJS_USER_ID_OPTOUT_NAME = '_pbjs_id_optout';
var coreStorage = Object(__WEBPACK_IMPORTED_MODULE_8__src_storageManager_js__["a" /* getCoreStorageManager */])('userid');
/** @type {string[]} */

var validStorageTypes = [];
/** @type {boolean} */

var addedUserIdHook = false;
/** @type {SubmoduleContainer[]} */

var submodules = [];
/** @type {SubmoduleContainer[]} */

var initializedSubmodules;
/** @type {SubmoduleConfig[]} */

var configRegistry = [];
/** @type {Submodule[]} */

var submoduleRegistry = [];
/** @type {(number|undefined)} */

var timeoutID;
/** @type {(number|undefined)} */

var syncDelay;
/** @type {(number|undefined)} */

var auctionDelay;
/** @type {(string|undefined)} */

var ppidSource;
/** @param {Submodule[]} submodules */

function setSubmoduleRegistry(submodules) {
  submoduleRegistry = submodules;
}
/**
 * @param {SubmoduleContainer} submodule
 * @param {(Object|string)} value
 */

function setStoredValue(submodule, value) {
  /**
   * @type {SubmoduleStorage}
   */
  var storage = submodule.config.storage;
  var domainOverride = typeof submodule.submodule.domainOverride === 'function' ? submodule.submodule.domainOverride() : null;

  try {
    var valueStr = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(value) ? JSON.stringify(value) : value;
    var expiresStr = new Date(Date.now() + storage.expires * (60 * 60 * 24 * 1000)).toUTCString();

    if (storage.type === COOKIE) {
      coreStorage.setCookie(storage.name, valueStr, expiresStr, 'Lax', domainOverride);

      if (typeof storage.refreshInSeconds === 'number') {
        coreStorage.setCookie("".concat(storage.name, "_last"), new Date().toUTCString(), expiresStr, 'Lax', domainOverride);
      }
    } else if (storage.type === LOCAL_STORAGE) {
      coreStorage.setDataInLocalStorage("".concat(storage.name, "_exp"), expiresStr);
      coreStorage.setDataInLocalStorage(storage.name, encodeURIComponent(valueStr));

      if (typeof storage.refreshInSeconds === 'number') {
        coreStorage.setDataInLocalStorage("".concat(storage.name, "_last"), new Date().toUTCString());
      }
    }
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(error);
  }
}

function setPrebidServerEidPermissions(initializedSubmodules) {
  var setEidPermissions = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["getPrebidInternal"])().setEidPermissions;

  if (typeof setEidPermissions === 'function' && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isArray"])(initializedSubmodules)) {
    setEidPermissions(Object(__WEBPACK_IMPORTED_MODULE_7__eids_js__["a" /* buildEidPermissions */])(initializedSubmodules));
  }
}
/**
/**
 * @param {SubmoduleStorage} storage
 * @param {String|undefined} key optional key of the value
 * @returns {string}
 */


function getStoredValue(storage) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var storedKey = key ? "".concat(storage.name, "_").concat(key) : storage.name;
  var storedValue;

  try {
    if (storage.type === COOKIE) {
      storedValue = coreStorage.getCookie(storedKey);
    } else if (storage.type === LOCAL_STORAGE) {
      var storedValueExp = coreStorage.getDataFromLocalStorage("".concat(storage.name, "_exp")); // empty string means no expiration set

      if (storedValueExp === '') {
        storedValue = coreStorage.getDataFromLocalStorage(storedKey);
      } else if (storedValueExp) {
        if (new Date(storedValueExp).getTime() - Date.now() > 0) {
          storedValue = decodeURIComponent(coreStorage.getDataFromLocalStorage(storedKey));
        }
      }
    } // support storing a string or a stringified object


    if (typeof storedValue === 'string' && storedValue.trim().charAt(0) === '{') {
      storedValue = JSON.parse(storedValue);
    }
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(e);
  }

  return storedValue;
}
/**
 * makes an object that can be stored with only the keys we need to check.
 * excluding the vendorConsents object since the consentString is enough to know
 * if consent has changed without needing to have all the details in an object
 * @param consentData
 * @returns {{apiVersion: number, gdprApplies: boolean, consentString: string}}
 */


function makeStoredConsentDataHash(consentData) {
  var storedConsentData = {
    consentString: '',
    gdprApplies: false,
    apiVersion: 0
  };

  if (consentData) {
    storedConsentData.consentString = consentData.consentString;
    storedConsentData.gdprApplies = consentData.gdprApplies;
    storedConsentData.apiVersion = consentData.apiVersion;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["cyrb53Hash"])(JSON.stringify(storedConsentData));
}
/**
 * puts the current consent data into cookie storage
 * @param consentData
 */


function setStoredConsentData(consentData) {
  try {
    var expiresStr = new Date(Date.now() + CONSENT_DATA_COOKIE_STORAGE_CONFIG.expires * (60 * 60 * 24 * 1000)).toUTCString();
    coreStorage.setCookie(CONSENT_DATA_COOKIE_STORAGE_CONFIG.name, makeStoredConsentDataHash(consentData), expiresStr, 'Lax');
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(error);
  }
}
/**
 * get the stored consent data from local storage, if any
 * @returns {string}
 */

function getStoredConsentData() {
  try {
    return coreStorage.getCookie(CONSENT_DATA_COOKIE_STORAGE_CONFIG.name);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(e);
  }
}
/**
 * test if the consent object stored locally matches the current consent data. if they
 * don't match or there is nothing stored locally, it means a refresh of the user id
 * submodule is needed
 * @param storedConsentData
 * @param consentData
 * @returns {boolean}
 */


function storedConsentDataMatchesConsentData(storedConsentData, consentData) {
  return typeof storedConsentData !== 'undefined' && storedConsentData !== null && storedConsentData === makeStoredConsentDataHash(consentData);
}
/**
 * test if consent module is present, applies, and is valid for local storage or cookies (purpose 1)
 * @param {ConsentData} consentData
 * @returns {boolean}
 */


function hasGDPRConsent(consentData) {
  if (consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies) {
    if (!consentData.consentString) {
      return false;
    }

    if (consentData.apiVersion === 1 && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["deepAccess"])(consentData, 'vendorData.purposeConsents.1') === false) {
      return false;
    }

    if (consentData.apiVersion === 2 && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["deepAccess"])(consentData, 'vendorData.purpose.consents.1') === false) {
      return false;
    }
  }

  return true;
}
/**
   * Find the root domain
   * @param {string|undefined} fullDomain
   * @return {string}
   */


function findRootDomain() {
  var fullDomain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hostname;

  if (!coreStorage.cookiesAreEnabled()) {
    return fullDomain;
  }

  var domainParts = fullDomain.split('.');

  if (domainParts.length == 2) {
    return fullDomain;
  }

  var rootDomain;
  var continueSearching;
  var startIndex = -2;
  var TEST_COOKIE_NAME = "_rdc".concat(Date.now());
  var TEST_COOKIE_VALUE = 'writeable';

  do {
    rootDomain = domainParts.slice(startIndex).join('.');
    var expirationDate = new Date(Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["timestamp"])() + 10 * 1000).toUTCString(); // Write a test cookie

    coreStorage.setCookie(TEST_COOKIE_NAME, TEST_COOKIE_VALUE, expirationDate, 'Lax', rootDomain, undefined); // See if the write was successful

    var value = coreStorage.getCookie(TEST_COOKIE_NAME, undefined);

    if (value === TEST_COOKIE_VALUE) {
      continueSearching = false; // Delete our test cookie

      coreStorage.setCookie(TEST_COOKIE_NAME, '', 'Thu, 01 Jan 1970 00:00:01 GMT', undefined, rootDomain, undefined);
    } else {
      startIndex += -1;
      continueSearching = Math.abs(startIndex) <= domainParts.length;
    }
  } while (continueSearching);

  return rootDomain;
}
/**
 * @param {SubmoduleContainer[]} submodules
 * @param {function} cb - callback for after processing is done.
 */

function processSubmoduleCallbacks(submodules, cb) {
  var done = function done() {};

  if (cb) {
    done = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["delayExecution"])(function () {
      clearTimeout(timeoutID);
      cb();
    }, submodules.length);
  }

  submodules.forEach(function (submodule) {
    submodule.callback(function callbackCompleted(idObj) {
      // if valid, id data should be saved to cookie/html storage
      if (idObj) {
        if (submodule.config.storage) {
          setStoredValue(submodule, idObj);
        } // cache decoded value (this is copied to every adUnit bid)


        submodule.idObj = submodule.submodule.decode(idObj, submodule.config);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, ": ").concat(submodule.submodule.name, " - request id responded with an empty value"));
      }

      done();
    }); // clear callback, this prop is used to test if all submodule callbacks are complete below

    submodule.callback = undefined;
  });
}
/**
 * This function will create a combined object for all subModule Ids
 * @param {SubmoduleContainer[]} submodules
 */


function getCombinedSubmoduleIds(submodules) {
  if (!Array.isArray(submodules) || !submodules.length) {
    return {};
  }

  var combinedSubmoduleIds = submodules.filter(function (i) {
    return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(i.idObj) && Object.keys(i.idObj).length;
  }).reduce(function (carry, i) {
    Object.keys(i.idObj).forEach(function (key) {
      carry[key] = i.idObj[key];
    });
    return carry;
  }, {});
  return combinedSubmoduleIds;
}
/**
 * This function will create a combined object for bidder with allowed subModule Ids
 * @param {SubmoduleContainer[]} submodules
 * @param {string} bidder
 */


function getCombinedSubmoduleIdsForBidder(submodules, bidder) {
  if (!Array.isArray(submodules) || !submodules.length || !bidder) {
    return {};
  }

  return submodules.filter(function (i) {
    return !i.config.bidders || !Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isArray"])(i.config.bidders) || Object(__WEBPACK_IMPORTED_MODULE_0__src_polyfill_js__["d" /* includes */])(i.config.bidders, bidder);
  }).filter(function (i) {
    return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(i.idObj) && Object.keys(i.idObj).length;
  }).reduce(function (carry, i) {
    Object.keys(i.idObj).forEach(function (key) {
      carry[key] = i.idObj[key];
    });
    return carry;
  }, {});
}
/**
 * @param {AdUnit[]} adUnits
 * @param {SubmoduleContainer[]} submodules
 */


function addIdDataToAdUnitBids(adUnits, submodules) {
  if ([adUnits].some(function (i) {
    return !Array.isArray(i) || !i.length;
  })) {
    return;
  }

  adUnits.forEach(function (adUnit) {
    if (adUnit.bids && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isArray"])(adUnit.bids)) {
      adUnit.bids.forEach(function (bid) {
        var combinedSubmoduleIds = getCombinedSubmoduleIdsForBidder(submodules, bid.bidder);

        if (Object.keys(combinedSubmoduleIds).length) {
          // create a User ID object on the bid,
          bid.userId = combinedSubmoduleIds;
          bid.userIdAsEids = Object(__WEBPACK_IMPORTED_MODULE_7__eids_js__["b" /* createEidsArray */])(combinedSubmoduleIds);
        }
      });
    }
  });
}
/**
 * This is a common function that will initialize subModules if not already done and it will also execute subModule callbacks
 */


function initializeSubmodulesAndExecuteCallbacks(continueAuction) {
  var delayed = false; // initialize submodules only when undefined

  if (typeof initializedSubmodules === 'undefined') {
    initializedSubmodules = initSubmodules(submodules, __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__["gdprDataHandler"].getConsentData());

    if (initializedSubmodules.length) {
      setPrebidServerEidPermissions(initializedSubmodules); // list of submodules that have callbacks that need to be executed

      var submodulesWithCallbacks = initializedSubmodules.filter(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isFn"])(item.callback);
      });

      if (submodulesWithCallbacks.length) {
        if (continueAuction && auctionDelay > 0) {
          // delay auction until ids are available
          delayed = true;
          var continued = false;

          var continueCallback = function continueCallback() {
            if (!continued) {
              continued = true;
              continueAuction();
            }
          };

          Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - auction delayed by ").concat(auctionDelay, " at most to fetch ids"));
          timeoutID = setTimeout(continueCallback, auctionDelay);
          processSubmoduleCallbacks(submodulesWithCallbacks, continueCallback);
        } else {
          // wait for auction complete before processing submodule callbacks
          __WEBPACK_IMPORTED_MODULE_2__src_events_js___default.a.on(__WEBPACK_IMPORTED_MODULE_5__src_constants_json___default.a.EVENTS.AUCTION_END, function auctionEndHandler() {
            __WEBPACK_IMPORTED_MODULE_2__src_events_js___default.a.off(__WEBPACK_IMPORTED_MODULE_5__src_constants_json___default.a.EVENTS.AUCTION_END, auctionEndHandler); // when syncDelay is zero, process callbacks now, otherwise delay process with a setTimeout

            if (syncDelay > 0) {
              setTimeout(function () {
                processSubmoduleCallbacks(submodulesWithCallbacks);
              }, syncDelay);
            } else {
              processSubmoduleCallbacks(submodulesWithCallbacks);
            }
          });
        }
      }
    }
  }

  if (continueAuction && !delayed) {
    continueAuction();
  }
}
/**
 * Hook is executed before adapters, but after consentManagement. Consent data is requied because
 * this module requires GDPR consent with Purpose #1 to save data locally.
 * The two main actions handled by the hook are:
 * 1. check gdpr consentData and handle submodule initialization.
 * 2. append user id data (loaded from cookied/html or from the getId method) to bids to be accessed in adapters.
 * @param {Object} reqBidsConfigObj required; This is the same param that's used in pbjs.requestBids.
 * @param {function} fn required; The next function in the chain, used by hook.js
 */


function requestBidsHook(fn, reqBidsConfigObj) {
  // initialize submodules only when undefined
  initializeSubmodulesAndExecuteCallbacks(function () {
    // pass available user id data to bid adapters
    addIdDataToAdUnitBids(reqBidsConfigObj.adUnits || Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().adUnits, initializedSubmodules); // userSync.ppid should be one of the 'source' values in getUserIdsAsEids() eg pubcid.org or id5-sync.com

    var matchingUserId = ppidSource && (getUserIdsAsEids() || []).find(function (userID) {
      return userID.source === ppidSource;
    });

    if (matchingUserId && typeof Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["deepAccess"])(matchingUserId, 'uids.0.id') === 'string') {
      var ppidValue = matchingUserId.uids[0].id.replace(/[\W_]/g, '');

      if (ppidValue.length >= 32 && ppidValue.length <= 150) {
        if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isGptPubadsDefined"])()) {
          window.googletag.pubads().setPublisherProvidedId(ppidValue);
        } else {
          window.googletag = window.googletag || {};
          window.googletag.cmd = window.googletag.cmd || [];
          window.googletag.cmd.push(function () {
            window.googletag.pubads().setPublisherProvidedId(ppidValue);
          });
        }
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logWarn"])("User ID - Googletag Publisher Provided ID for ".concat(ppidSource, " is not between 32 and 150 characters - ").concat(ppidValue));
      }
    } // calling fn allows prebid to continue processing


    fn.call(this, reqBidsConfigObj);
  });
}
/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */

function getUserIds() {
  // initialize submodules only when undefined
  initializeSubmodulesAndExecuteCallbacks();
  return getCombinedSubmoduleIds(initializedSubmodules);
}
/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */


function getUserIdsAsEids() {
  // initialize submodules only when undefined
  initializeSubmodulesAndExecuteCallbacks();
  return Object(__WEBPACK_IMPORTED_MODULE_7__eids_js__["b" /* createEidsArray */])(getCombinedSubmoduleIds(initializedSubmodules));
}
/**
* This function will be exposed in the global-name-space so that userIds can be refreshed after initialization.
* @param {RefreshUserIdsOptions} options
*/


function refreshUserIds(options, callback) {
  var submoduleNames = options ? options.submoduleNames : null;

  if (!submoduleNames) {
    submoduleNames = [];
  }

  initializeSubmodulesAndExecuteCallbacks(function () {
    var consentData = __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__["gdprDataHandler"].getConsentData(); // gdpr consent with purpose one is required, otherwise exit immediately

    var _validateGdprEnforcem = validateGdprEnforcement(submodules, consentData),
        userIdModules = _validateGdprEnforcem.userIdModules,
        hasValidated = _validateGdprEnforcem.hasValidated;

    if (!hasValidated && !hasGDPRConsent(consentData)) {
      Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logWarn"])("".concat(MODULE_NAME, " - gdpr permission not valid for local storage or cookies, exit module"));
      return;
    } // we always want the latest consentData stored, even if we don't execute any submodules


    var storedConsentData = getStoredConsentData();
    setStoredConsentData(consentData);
    var callbackSubmodules = [];

    var _iterator = _createForOfIteratorHelper(userIdModules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var submodule = _step.value;

        if (submoduleNames.length > 0 && submoduleNames.indexOf(submodule.submodule.name) === -1) {
          continue;
        }

        Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - refreshing ").concat(submodule.submodule.name));
        populateSubmoduleId(submodule, consentData, storedConsentData, true);
        updateInitializedSubmodules(submodule);

        if (initializedSubmodules.length) {
          setPrebidServerEidPermissions(initializedSubmodules);
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isFn"])(submodule.callback)) {
          callbackSubmodules.push(submodule);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (callbackSubmodules.length > 0) {
      processSubmoduleCallbacks(callbackSubmodules);
    }

    if (callback) {
      callback();
    }
  });
}
/**
 * This hook returns updated list of submodules which are allowed to do get user id based on TCF 2 enforcement rules configured
 */


var validateGdprEnforcement = Object(__WEBPACK_IMPORTED_MODULE_6__src_hook_js__["b" /* hook */])('sync', function (submodules, consentData) {
  return {
    userIdModules: submodules,
    hasValidated: consentData && consentData.hasValidated
  };
}, 'validateGdprEnforcement');

function populateSubmoduleId(submodule, consentData, storedConsentData, forceRefresh) {
  // There are two submodule configuration types to handle: storage or value
  // 1. storage: retrieve user id data from cookie/html storage or with the submodule's getId method
  // 2. value: pass directly to bids
  if (submodule.config.storage) {
    var storedId = getStoredValue(submodule.config.storage);
    var response;
    var refreshNeeded = false;

    if (typeof submodule.config.storage.refreshInSeconds === 'number') {
      var storedDate = new Date(getStoredValue(submodule.config.storage, 'last'));
      refreshNeeded = storedDate && Date.now() - storedDate.getTime() > submodule.config.storage.refreshInSeconds * 1000;
    }

    if (!storedId || refreshNeeded || forceRefresh || !storedConsentDataMatchesConsentData(storedConsentData, consentData)) {
      // No id previously saved, or a refresh is needed, or consent has changed. Request a new id from the submodule.
      response = submodule.submodule.getId(submodule.config, consentData, storedId);
    } else if (typeof submodule.submodule.extendId === 'function') {
      // If the id exists already, give submodule a chance to decide additional actions that need to be taken
      response = submodule.submodule.extendId(submodule.config, consentData, storedId);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(response)) {
      if (response.id) {
        // A getId/extendId result assumed to be valid user id data, which should be saved to users local storage or cookies
        setStoredValue(submodule, response.id);
        storedId = response.id;
      }

      if (typeof response.callback === 'function') {
        // Save async callback to be invoked after auction
        submodule.callback = response.callback;
      }
    }

    if (storedId) {
      // cache decoded value (this is copied to every adUnit bid)
      submodule.idObj = submodule.submodule.decode(storedId, submodule.config);
    }
  } else if (submodule.config.value) {
    // cache decoded value (this is copied to every adUnit bid)
    submodule.idObj = submodule.config.value;
  } else {
    var _response = submodule.submodule.getId(submodule.config, consentData, undefined);

    if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(_response)) {
      if (typeof _response.callback === 'function') {
        submodule.callback = _response.callback;
      }

      if (_response.id) {
        submodule.idObj = submodule.submodule.decode(_response.id, submodule.config);
      }
    }
  }
}
/**
 * @param {SubmoduleContainer[]} submodules
 * @param {ConsentData} consentData
 * @returns {SubmoduleContainer[]} initialized submodules
 */


function initSubmodules(submodules, consentData) {
  // gdpr consent with purpose one is required, otherwise exit immediately
  var _validateGdprEnforcem2 = validateGdprEnforcement(submodules, consentData),
      userIdModules = _validateGdprEnforcem2.userIdModules,
      hasValidated = _validateGdprEnforcem2.hasValidated;

  if (!hasValidated && !hasGDPRConsent(consentData)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logWarn"])("".concat(MODULE_NAME, " - gdpr permission not valid for local storage or cookies, exit module"));
    return [];
  } // we always want the latest consentData stored, even if we don't execute any submodules


  var storedConsentData = getStoredConsentData();
  setStoredConsentData(consentData);
  return userIdModules.reduce(function (carry, submodule) {
    populateSubmoduleId(submodule, consentData, storedConsentData, false);
    carry.push(submodule);
    return carry;
  }, []);
}

function updateInitializedSubmodules(submodule) {
  var updated = false;

  for (var i = 0; i < initializedSubmodules.length; i++) {
    if (submodule.config.name.toLowerCase() === initializedSubmodules[i].config.name.toLowerCase()) {
      updated = true;
      initializedSubmodules[i] = submodule;
      break;
    }
  }

  if (!updated) {
    initializedSubmodules.push(submodule);
  }
}
/**
 * list of submodule configurations with valid 'storage' or 'value' obj definitions
 * * storage config: contains values for storing/retrieving User ID data in browser storage
 * * value config: object properties that are copied to bids (without saving to storage)
 * @param {SubmoduleConfig[]} configRegistry
 * @param {Submodule[]} submoduleRegistry
 * @param {string[]} activeStorageTypes
 * @returns {SubmoduleConfig[]}
 */


function getValidSubmoduleConfigs(configRegistry, submoduleRegistry, activeStorageTypes) {
  if (!Array.isArray(configRegistry)) {
    return [];
  }

  return configRegistry.reduce(function (carry, config) {
    // every submodule config obj must contain a valid 'name'
    if (!config || Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isEmptyStr"])(config.name)) {
      return carry;
    } // Validate storage config contains 'type' and 'name' properties with non-empty string values
    // 'type' must be a value currently enabled in the browser


    if (config.storage && !Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isEmptyStr"])(config.storage.type) && !Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isEmptyStr"])(config.storage.name) && activeStorageTypes.indexOf(config.storage.type) !== -1) {
      carry.push(config);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(config.value)) {
      carry.push(config);
    } else if (!config.storage && !config.value) {
      carry.push(config);
    }

    return carry;
  }, []);
}
/**
 * update submodules by validating against existing configs and storage types
 */


function updateSubmodules() {
  var configs = getValidSubmoduleConfigs(configRegistry, submoduleRegistry, validStorageTypes);

  if (!configs.length) {
    return;
  } // do this to avoid reprocessing submodules


  var addedSubmodules = submoduleRegistry.filter(function (i) {
    return !Object(__WEBPACK_IMPORTED_MODULE_0__src_polyfill_js__["b" /* find */])(submodules, function (j) {
      return j.name === i.name;
    });
  }); // find submodule and the matching configuration, if found create and append a SubmoduleContainer

  submodules = addedSubmodules.map(function (i) {
    var submoduleConfig = Object(__WEBPACK_IMPORTED_MODULE_0__src_polyfill_js__["b" /* find */])(configs, function (j) {
      return j.name && (j.name.toLowerCase() === i.name.toLowerCase() || i.aliasName && j.name.toLowerCase() === i.aliasName.toLowerCase());
    });
    if (submoduleConfig && i.name !== submoduleConfig.name) submoduleConfig.name = i.name;
    i.findRootDomain = findRootDomain;
    return submoduleConfig ? {
      submodule: i,
      config: submoduleConfig,
      callback: undefined,
      idObj: undefined
    } : null;
  }).filter(function (submodule) {
    return submodule !== null;
  });

  if (!addedUserIdHook && submodules.length) {
    // priority value 40 will load after consentManagement with a priority of 50
    Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().requestBids.before(requestBidsHook, 40);
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - usersync config updated for ").concat(submodules.length, " submodules: "), submodules.map(function (a) {
      return a.submodule.name;
    }));
    addedUserIdHook = true;
  }
}
/**
 * enable submodule in User ID
 * @param {Submodule} submodule
 */


function attachIdSystem(submodule) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_polyfill_js__["b" /* find */])(submoduleRegistry, function (i) {
    return i.name === submodule.name;
  })) {
    submoduleRegistry.push(submodule);
    updateSubmodules();
  }
}
/**
 * test browser support for storage config types (local storage or cookie), initializes submodules but consentManagement is required,
 * so a callback is added to fire after the consentManagement module.
 * @param {{getConfig:function}} config
 */

function init(config) {
  ppidSource = undefined;
  submodules = [];
  configRegistry = [];
  addedUserIdHook = false;
  initializedSubmodules = undefined; // list of browser enabled storage types

  validStorageTypes = [coreStorage.localStorageIsEnabled() ? LOCAL_STORAGE : null, coreStorage.cookiesAreEnabled() ? COOKIE : null].filter(function (i) {
    return i !== null;
  }); // exit immediately if opt out cookie or local storage keys exists.

  if (validStorageTypes.indexOf(COOKIE) !== -1 && coreStorage.getCookie(PBJS_USER_ID_OPTOUT_NAME)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - opt-out cookie found, exit module"));
    return;
  }

  if (validStorageTypes.indexOf(LOCAL_STORAGE) !== -1 && coreStorage.getDataFromLocalStorage(PBJS_USER_ID_OPTOUT_NAME)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - opt-out localStorage found, exit module"));
    return;
  } // listen for config userSyncs to be set


  config.getConfig('userSync', function (conf) {
    // Note: support for 'usersync' was dropped as part of Prebid.js 4.0
    var userSync = conf.userSync;
    ppidSource = userSync.ppid;

    if (userSync && userSync.userIds) {
      configRegistry = userSync.userIds;
      syncDelay = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isNumber"])(userSync.syncDelay) ? userSync.syncDelay : DEFAULT_SYNC_DELAY;
      auctionDelay = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isNumber"])(userSync.auctionDelay) ? userSync.auctionDelay : NO_AUCTION_DELAY;
      updateSubmodules();
    }
  }); // exposing getUserIds function in global-name-space so that userIds stored in Prebid can be used by external codes.

  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getUserIds = getUserIds;
  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getUserIdsAsEids = getUserIdsAsEids;
  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().refreshUserIds = refreshUserIds;
} // init config update listener to start the application

init(__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */]);
Object(__WEBPACK_IMPORTED_MODULE_6__src_hook_js__["c" /* module */])('userId', attachIdSystem);
window.pbjs.installedModules.push('userId');

/***/ })

},[810]);

pbjs.processQueue();
//# sourceMappingURL=prebid.js.map
