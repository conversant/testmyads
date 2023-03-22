/* prebid.js v7.42.0-pre
Updated: 2023-03-21
Modules: fpdModule, adpod, consentManagement, consentManagementGpp, consentManagementUsp, gdprEnforcement, enrichmentFpdModule, gptPreAuction, userId, conversantBidAdapter, conversantAnalyticsAdapter, appnexusBidAdapter, openxBidAdapter, publinkIdSystem, sharedIdSystem, identityLinkIdSystem, dfpAdServerVideo, topicsFpdModule */

if (!window.pbjs || !window.pbjs.libLoaded) {
 (function(){
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": function() { return /* binding */ Renderer; },
/* harmony export */   "executeRenderer": function() { return /* binding */ executeRenderer; },
/* harmony export */   "isRendererRequired": function() { return /* binding */ isRendererRequired; }
/* harmony export */ });
/* harmony import */ var _adloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adloader.js */ "./src/adloader.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");



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
    adUnitCode = options.adUnitCode,
    renderNow = options.renderNow;
  this.url = url;
  this.config = config;
  this.handlers = {};
  this.id = id;

  // a renderer may push to the command queue to delay rendering until the
  // render function is loaded by loadExternalScript, at which point the the command
  // queue will be processed
  this.loaded = loaded;
  this.cmd = [];
  this.push = function (func) {
    if (typeof func !== 'function') {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)('Commands given to Renderer.push must be wrapped in a function');
      return;
    }
    _this.loaded ? func.call() : _this.cmd.push(func);
  };

  // bidders may override this with the `callback` property given to `install`
  this.callback = callback || function () {
    _this.loaded = true;
    _this.process();
  };

  // use a function, not an arrow, in order to be able to pass "arguments" through
  this.render = function () {
    var _this2 = this;
    var renderArgs = arguments;
    var runRender = function runRender() {
      if (_this2._render) {
        _this2._render.apply(_this2, renderArgs);
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn)("No render function was provided, please use .setRender on the renderer");
      }
    };
    if (isRendererPreferredFromAdUnit(adUnitCode)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(adUnitCode));
      runRender();
    } else if (renderNow) {
      runRender();
    } else {
      // we expect to load a renderer url once only so cache the request to load script
      this.cmd.unshift(runRender); // should render run first ?
      (0,_adloader_js__WEBPACK_IMPORTED_MODULE_1__.loadExternalScript)(url, moduleCode, this.callback, this.documentContext);
    }
  }.bind(this); // bind the function to this object to avoid 'this' errors
}

Renderer.install = function (_ref) {
  var url = _ref.url,
    config = _ref.config,
    id = _ref.id,
    callback = _ref.callback,
    loaded = _ref.loaded,
    adUnitCode = _ref.adUnitCode,
    renderNow = _ref.renderNow;
  return new Renderer({
    url: url,
    config: config,
    id: id,
    callback: callback,
    loaded: loaded,
    adUnitCode: adUnitCode,
    renderNow: renderNow
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logMessage)("Prebid Renderer event for id ".concat(id, " type ").concat(eventName));
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)('Error processing Renderer command: ', error);
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
 * @param {Document} doc context document of bid
 */
function executeRenderer(renderer, bid, doc) {
  var docContext = null;
  if (renderer.config && renderer.config.documentResolver) {
    docContext = renderer.config.documentResolver(bid, document, doc); // a user provided callback, which should return a Document, and expect the parameters; bid, sourceDocument, renderDocument
  }

  if (!docContext) {
    docContext = document;
  }
  renderer.documentContext = docContext;
  renderer.render(bid, renderer.documentContext);
}
function isRendererPreferredFromAdUnit(adUnitCode) {
  var adUnits = pbjs.adUnits;
  var adUnit = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.find)(adUnits, function (adUnit) {
    return adUnit.code === adUnitCode;
  });
  if (!adUnit) {
    return false;
  }

  // renderer defined at adUnit level
  var adUnitRenderer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'renderer');
  var hasValidAdUnitRenderer = !!(adUnitRenderer && adUnitRenderer.url && adUnitRenderer.render);

  // renderer defined at adUnit.mediaTypes level
  var mediaTypeRenderer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'mediaTypes.video.renderer');
  var hasValidMediaTypeRenderer = !!(mediaTypeRenderer && mediaTypeRenderer.url && mediaTypeRenderer.render);
  return !!(hasValidAdUnitRenderer && !(adUnitRenderer.backupOnly === true) || hasValidMediaTypeRenderer && !(mediaTypeRenderer.backupOnly === true));
}

/***/ }),

/***/ "./src/adRendering.js":
/*!****************************!*\
  !*** ./src/adRendering.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitAdRenderFail": function() { return /* binding */ emitAdRenderFail; },
/* harmony export */   "emitAdRenderSucceeded": function() { return /* binding */ emitAdRenderSucceeded; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");



var _CONSTANTS$EVENTS = _constants_json__WEBPACK_IMPORTED_MODULE_0__.EVENTS,
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)(message);
  _events_js__WEBPACK_IMPORTED_MODULE_2__.emit(AD_RENDER_FAILED, data);
}

/**
 * Emit the AD_RENDER_SUCCEEDED event.
 * (Note: Invocation of this function indicates that the render function did not generate an error, it does not guarantee that tracking for this event has occurred yet.)
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
  _events_js__WEBPACK_IMPORTED_MODULE_2__.emit(AD_RENDER_SUCCEEDED, data);
}

/***/ }),

/***/ "./src/adUnits.js":
/*!************************!*\
  !*** ./src/adUnits.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adunitCounter": function() { return /* binding */ adunitCounter; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");

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
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(adUnits, "".concat(adunit, ".requestsCounter")) || 0;
}

/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */
function getBidderRequestsCounter(adunit, bidder) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".requestsCounter")) || 0;
}

/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */
function getBidderWinsCounter(adunit, bidder) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".winsCounter")) || 0;
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

/***/ "./src/adapter.js":
/*!************************!*\
  !*** ./src/adapter.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Adapter; }
/* harmony export */ });
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

/***/ "./src/adapterManager.js":
/*!*******************************!*\
  !*** ./src/adapterManager.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coppaDataHandler": function() { return /* binding */ coppaDataHandler; },
/* harmony export */   "gdprDataHandler": function() { return /* binding */ gdprDataHandler; },
/* harmony export */   "getS2SBidderSet": function() { return /* binding */ getS2SBidderSet; },
/* harmony export */   "gppDataHandler": function() { return /* binding */ gppDataHandler; },
/* harmony export */   "uspDataHandler": function() { return /* binding */ uspDataHandler; }
/* harmony export */ });
/* unused harmony exports PARTITIONS, _filterBidsForAdUnit, filterBidsForAdUnit, setupAdUnitMediaTypes, _partitionBidders, partitionBidders */
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _sizeMapping_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sizeMapping.js */ "./src/sizeMapping.js");
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./native.js */ "./src/native.js");
/* harmony import */ var _adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adapters/bidderFactory.js */ "./src/adapters/bidderFactory.js");
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ajax.js */ "./src/ajax.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _adUnits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adUnits.js */ "./src/adUnits.js");
/* harmony import */ var _refererDetection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./refererDetection.js */ "./src/refererDetection.js");
/* harmony import */ var _consentHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consentHandler.js */ "./src/consentHandler.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/** @module adaptermanger */
















var PARTITIONS = {
  CLIENT: 'client',
  SERVER: 'server'
};
var adapterManager = {};
var _bidderRegistry = adapterManager.bidderRegistry = {};
var _aliasRegistry = adapterManager.aliasRegistry = {};
var _s2sConfigs = [];
_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('s2sConfig', function (config) {
  if (config && config.s2sConfig) {
    _s2sConfigs = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(config.s2sConfig) ? config.s2sConfig : [config.s2sConfig];
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
    src = _ref.src,
    metrics = _ref.metrics;
  return adUnits.reduce(function (result, adUnit) {
    var bids = adUnit.bids.filter(function (bid) {
      return bid.bidder === bidderCode;
    });
    if (bidderCode == null && bids.length === 0 && adUnit.s2sBid != null) {
      bids.push({
        bidder: null
      });
    }
    result.push(bids.reduce(function (bids, bid) {
      bid = Object.assign({}, bid, {
        ortb2Imp: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, adUnit.ortb2Imp, bid.ortb2Imp)
      }, (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDefinedParams)(adUnit, ['nativeParams', 'nativeOrtbRequest', 'mediaType', 'renderer']));
      var mediaTypes = bid.mediaTypes == null ? adUnit.mediaTypes : bid.mediaTypes;
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isValidMediaTypes)(mediaTypes)) {
        bid = Object.assign({}, bid, {
          mediaTypes: mediaTypes
        });
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("mediaTypes is not correctly configured for adunit ".concat(adUnit.code));
      }
      bids.push(Object.assign({}, bid, {
        adUnitCode: adUnit.code,
        transactionId: adUnit.transactionId,
        sizes: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaTypes, 'banner.sizes') || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaTypes, 'video.playerSize') || [],
        bidId: bid.bid_id || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getUniqueIdentifierStr)(),
        bidderRequestId: bidderRequestId,
        auctionId: auctionId,
        src: src,
        metrics: metrics,
        bidRequestsCount: _adUnits_js__WEBPACK_IMPORTED_MODULE_4__.adunitCounter.getRequestsCounter(adUnit.code),
        bidderRequestsCount: _adUnits_js__WEBPACK_IMPORTED_MODULE_4__.adunitCounter.getBidderRequestsCounter(adUnit.code, bid.bidder),
        bidderWinsCount: _adUnits_js__WEBPACK_IMPORTED_MODULE_4__.adunitCounter.getBidderWinsCounter(adUnit.code, bid.bidder)
      }));
      return bids;
    }, []));
    return result;
  }, []).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_2__.flatten, []).filter(function (val) {
    return val !== '';
  });
}
var hookedGetBids = (0,_hook_js__WEBPACK_IMPORTED_MODULE_5__.hook)('sync', getBids, 'getBids');

/**
 * Filter an adUnit's  bids for building client and/or server requests
 *
 * @param bids an array of bids as defined in an adUnit
 * @param s2sConfig null if the adUnit is being routed to a client adapter; otherwise the s2s adapter's config
 * @returns the subset of `bids` that are pertinent for the given `s2sConfig`
 */
function _filterBidsForAdUnit(bids, s2sConfig) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref2$getS2SBidders = _ref2.getS2SBidders,
    getS2SBidders = _ref2$getS2SBidders === void 0 ? getS2SBidderSet : _ref2$getS2SBidders;
  if (s2sConfig == null) {
    return bids;
  } else {
    var serverBidders = getS2SBidders(s2sConfig);
    return bids.filter(function (bid) {
      return serverBidders.has(bid.bidder);
    });
  }
}
var filterBidsForAdUnit = (0,_hook_js__WEBPACK_IMPORTED_MODULE_5__.hook)('sync', _filterBidsForAdUnit, 'filterBidsForAdUnit');
function getAdUnitCopyForPrebidServer(adUnits, s2sConfig) {
  var adUnitsCopy = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.deepClone)(adUnits);
  var hasModuleBids = false;
  adUnitsCopy.forEach(function (adUnit) {
    // filter out client side bids
    var s2sBids = adUnit.bids.filter(function (b) {
      var _b$params;
      return b.module === 'pbsBidAdapter' && ((_b$params = b.params) === null || _b$params === void 0 ? void 0 : _b$params.configName) === s2sConfig.configName;
    });
    if (s2sBids.length === 1) {
      adUnit.s2sBid = s2sBids[0];
      hasModuleBids = true;
      adUnit.ortb2Imp = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, adUnit.s2sBid.ortb2Imp, adUnit.ortb2Imp);
    } else if (s2sBids.length > 1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)('Multiple "module" bids for the same s2s configuration; all will be ignored', s2sBids);
    }
    adUnit.bids = filterBidsForAdUnit(adUnit.bids, s2sConfig).map(function (bid) {
      bid.bid_id = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getUniqueIdentifierStr)();
      return bid;
    });
  });

  // don't send empty requests
  adUnitsCopy = adUnitsCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0 || adUnit.s2sBid != null;
  });
  return {
    adUnits: adUnitsCopy,
    hasModuleBids: hasModuleBids
  };
}
function getAdUnitCopyForClientAdapters(adUnits) {
  var adUnitsClientCopy = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.deepClone)(adUnits);
  adUnitsClientCopy.forEach(function (adUnit) {
    adUnit.bids = filterBidsForAdUnit(adUnit.bids, null);
  });

  // don't send empty requests
  adUnitsClientCopy = adUnitsClientCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsClientCopy;
}
var gdprDataHandler = new _consentHandler_js__WEBPACK_IMPORTED_MODULE_6__.GdprConsentHandler();
var uspDataHandler = new _consentHandler_js__WEBPACK_IMPORTED_MODULE_6__.UspConsentHandler();
var gppDataHandler = new _consentHandler_js__WEBPACK_IMPORTED_MODULE_6__.GppConsentHandler();
var coppaDataHandler = {
  getCoppa: function getCoppa() {
    return !!_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('coppa');
  }
};

/**
 * Filter and/or modify media types for ad units based on the given labels.
 *
 * This should return adUnits that are active for the given labels, modified to have their `mediaTypes`
 * conform to size mapping configuration. If different bids for the same adUnit should use different `mediaTypes`,
 * they should be exposed under `adUnit.bids[].mediaTypes`.
 */
var setupAdUnitMediaTypes = (0,_hook_js__WEBPACK_IMPORTED_MODULE_5__.hook)('sync', function (adUnits, labels) {
  return (0,_sizeMapping_js__WEBPACK_IMPORTED_MODULE_7__.processAdUnitsForLabels)(adUnits, labels);
}, 'setupAdUnitMediaTypes');

/**
 * @param {{}|Array<{}>} s2sConfigs
 * @returns {Set<String>} a set of all the bidder codes that should be routed through the S2S adapter(s)
 *                        as defined in `s2sConfigs`
 */
function getS2SBidderSet(s2sConfigs) {
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(s2sConfigs)) s2sConfigs = [s2sConfigs];
  // `null` represents the "no bid bidder" - when an ad unit is meant only for S2S adapters, like stored impressions
  var serverBidders = new Set([null]);
  s2sConfigs.filter(function (s2s) {
    return s2s && s2s.enabled;
  }).flatMap(function (s2s) {
    return s2s.bidders;
  }).forEach(function (bidder) {
    return serverBidders.add(bidder);
  });
  return serverBidders;
}

/**
 * @returns {{[PARTITIONS.CLIENT]: Array<String>, [PARTITIONS.SERVER]: Array<String>}}
 *           All the bidder codes in the given `adUnits`, divided in two arrays -
 *           those that should be routed to client, and server adapters (according to the configuration in `s2sConfigs`).
 */
function _partitionBidders(adUnits, s2sConfigs) {
  var _getBidderCodes$reduc;
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$getS2SBidders = _ref3.getS2SBidders,
    getS2SBidders = _ref3$getS2SBidders === void 0 ? getS2SBidderSet : _ref3$getS2SBidders;
  var serverBidders = getS2SBidders(s2sConfigs);
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBidderCodes)(adUnits).reduce(function (memo, bidder) {
    var partition = serverBidders.has(bidder) ? PARTITIONS.SERVER : PARTITIONS.CLIENT;
    memo[partition].push(bidder);
    return memo;
  }, (_getBidderCodes$reduc = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_getBidderCodes$reduc, PARTITIONS.CLIENT, []), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_getBidderCodes$reduc, PARTITIONS.SERVER, []), _getBidderCodes$reduc));
}
var partitionBidders = (0,_hook_js__WEBPACK_IMPORTED_MODULE_5__.hook)('sync', _partitionBidders, 'partitionBidders');
adapterManager.makeBidRequests = (0,_hook_js__WEBPACK_IMPORTED_MODULE_5__.hook)('sync', function (adUnits, auctionStart, auctionId, cbTimeout, labels) {
  var ortb2Fragments = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var auctionMetrics = arguments.length > 6 ? arguments[6] : undefined;
  auctionMetrics = (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_8__.useMetrics)(auctionMetrics);
  /**
   * emit and pass adunits for external modification
   * @see {@link https://github.com/prebid/Prebid.js/issues/4149|Issue}
   */
  _events_js__WEBPACK_IMPORTED_MODULE_9__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_10__.EVENTS.BEFORE_REQUEST_BIDS, adUnits);
  if (true) {
    (0,_native_js__WEBPACK_IMPORTED_MODULE_11__.decorateAdUnitsWithNativeParams)(adUnits);
  }
  adUnits = setupAdUnitMediaTypes(adUnits, labels);
  var _partitionBidders2 = partitionBidders(adUnits, _s2sConfigs),
    clientBidders = _partitionBidders2[PARTITIONS.CLIENT],
    serverBidders = _partitionBidders2[PARTITIONS.SERVER];
  if (_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('bidderSequence') === _config_js__WEBPACK_IMPORTED_MODULE_1__.RANDOM) {
    clientBidders = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.shuffle)(clientBidders);
  }
  var refererInfo = (0,_refererDetection_js__WEBPACK_IMPORTED_MODULE_12__.getRefererInfo)();
  var bidRequests = [];
  var ortb2 = ortb2Fragments.global || {};
  var bidderOrtb2 = ortb2Fragments.bidder || {};
  function addOrtb2(bidderRequest) {
    var fpd = Object.freeze((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, ortb2, bidderOrtb2[bidderRequest.bidderCode]));
    bidderRequest.ortb2 = fpd;
    bidderRequest.bids.forEach(function (bid) {
      return bid.ortb2 = fpd;
    });
    return bidderRequest;
  }
  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      var _getAdUnitCopyForPreb = getAdUnitCopyForPrebidServer(adUnits, s2sConfig),
        adUnitsS2SCopy = _getAdUnitCopyForPreb.adUnits,
        hasModuleBids = _getAdUnitCopyForPreb.hasModuleBids;

      // uniquePbsTid is so we know which server to send which bids to during the callBids function
      var uniquePbsTid = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateUUID)();
      (serverBidders.length === 0 && hasModuleBids ? [null] : serverBidders).forEach(function (bidderCode) {
        var bidderRequestId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getUniqueIdentifierStr)();
        var metrics = auctionMetrics.fork();
        var bidderRequest = addOrtb2({
          bidderCode: bidderCode,
          auctionId: auctionId,
          bidderRequestId: bidderRequestId,
          uniquePbsTid: uniquePbsTid,
          bids: hookedGetBids({
            bidderCode: bidderCode,
            auctionId: auctionId,
            bidderRequestId: bidderRequestId,
            'adUnits': (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.deepClone)(adUnitsS2SCopy),
            src: _constants_json__WEBPACK_IMPORTED_MODULE_10__.S2S.SRC,
            metrics: metrics
          }),
          auctionStart: auctionStart,
          timeout: s2sConfig.timeout,
          src: _constants_json__WEBPACK_IMPORTED_MODULE_10__.S2S.SRC,
          refererInfo: refererInfo,
          metrics: metrics
        });
        if (bidderRequest.bids.length !== 0) {
          bidRequests.push(bidderRequest);
        }
      });

      // update the s2sAdUnits object and remove all bids that didn't pass sizeConfig/label checks from getBids()
      // this is to keep consistency and only allow bids/adunits that passed the checks to go to pbs
      adUnitsS2SCopy.forEach(function (adUnitCopy) {
        var validBids = adUnitCopy.bids.filter(function (adUnitBid) {
          return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.find)(bidRequests, function (request) {
            return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.find)(request.bids, function (reqBid) {
              return reqBid.bidId === adUnitBid.bid_id;
            });
          });
        });
        adUnitCopy.bids = validBids;
      });
      bidRequests.forEach(function (request) {
        if (request.adUnitsS2SCopy === undefined) {
          request.adUnitsS2SCopy = adUnitsS2SCopy.filter(function (au) {
            return au.bids.length > 0 || au.s2sBid != null;
          });
        }
      });
    }
  });

  // client adapters
  var adUnitsClientCopy = getAdUnitCopyForClientAdapters(adUnits);
  clientBidders.forEach(function (bidderCode) {
    var bidderRequestId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getUniqueIdentifierStr)();
    var metrics = auctionMetrics.fork();
    var bidderRequest = addOrtb2({
      bidderCode: bidderCode,
      auctionId: auctionId,
      bidderRequestId: bidderRequestId,
      bids: hookedGetBids({
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        'adUnits': (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.deepClone)(adUnitsClientCopy),
        labels: labels,
        src: 'client',
        metrics: metrics
      }),
      auctionStart: auctionStart,
      timeout: cbTimeout,
      refererInfo: refererInfo,
      metrics: metrics
    });
    var adapter = _bidderRegistry[bidderCode];
    if (!adapter) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Trying to make a request for bidder that does not exist: ".concat(bidderCode));
    }
    if (adapter && bidderRequest.bids && bidderRequest.bids.length !== 0) {
      bidRequests.push(bidderRequest);
    }
  });
  bidRequests.forEach(function (bidRequest) {
    if (gdprDataHandler.getConsentData()) {
      bidRequest['gdprConsent'] = gdprDataHandler.getConsentData();
    }
    if (uspDataHandler.getConsentData()) {
      bidRequest['uspConsent'] = uspDataHandler.getConsentData();
    }
    if (gppDataHandler.getConsentData()) {
      bidRequest['gppConsent'] = gppDataHandler.getConsentData();
    }
  });
  bidRequests.forEach(function (bidRequest) {
    _config_js__WEBPACK_IMPORTED_MODULE_1__.config.runWithBidder(bidRequest.bidderCode, function () {
      var fledgeEnabledFromConfig = _config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('fledgeEnabled');
      bidRequest['fledgeEnabled'] = navigator.runAdAuction && fledgeEnabledFromConfig;
    });
  });
  return bidRequests;
}, 'makeBidRequests');
adapterManager.callBids = function (adUnits, bidRequests, addBidResponse, doneCb, requestCallbacks, requestBidsTimeout, onTimelyResponse) {
  var ortb2Fragments = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
  if (!bidRequests.length) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
    return;
  }
  var _bidRequests$reduce = bidRequests.reduce(function (partitions, bidRequest) {
      partitions[Number(typeof bidRequest.src !== 'undefined' && bidRequest.src === _constants_json__WEBPACK_IMPORTED_MODULE_10__.S2S.SRC)].push(bidRequest);
      return partitions;
    }, [[], []]),
    _bidRequests$reduce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__["default"])(_bidRequests$reduce, 2),
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
  var counter = 0;
  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && uniqueServerBidRequests[counter] && getS2SBidderSet(s2sConfig).has(uniqueServerBidRequests[counter].bidderCode)) {
      // s2s should get the same client side timeout as other client side requests.
      var s2sAjax = (0,_ajax_js__WEBPACK_IMPORTED_MODULE_15__.ajaxBuilder)(requestBidsTimeout, requestCallbacks ? {
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
          'ad_units': adUnitsS2SCopy,
          s2sConfig: s2sConfig,
          ortb2Fragments: ortb2Fragments
        };
        if (s2sBidRequest.ad_units.length) {
          var doneCbs = uniqueServerRequests.map(function (bidRequest) {
            bidRequest.start = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.timestamp)();
            return doneCb.bind(bidRequest);
          });
          var bidders = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBidderCodes)(s2sBidRequest.ad_units).filter(function (bidder) {
            return adaptersServerSide.includes(bidder);
          });
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(bidders.length > 0 ? bidders.join(', ') : 'No bidder specified, using "ortb2Imp" definition(s) only'));

          // fire BID_REQUESTED event for each s2s bidRequest
          uniqueServerRequests.forEach(function (bidRequest) {
            // add the new sourceTid
            _events_js__WEBPACK_IMPORTED_MODULE_9__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_10__.EVENTS.BID_REQUESTED, _objectSpread(_objectSpread({}, bidRequest), {}, {
              tid: bidRequest.auctionId
            }));
          });

          // make bid requests
          s2sAdapter.callBids(s2sBidRequest, serverBidRequests, addBidResponse, function () {
            return doneCbs.forEach(function (done) {
              return done();
            });
          }, s2sAjax);
        }
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('missing ' + s2sConfig.adapter);
      }
      counter++;
    }
  });

  // handle client adapter requests
  clientBidRequests.forEach(function (bidRequest) {
    bidRequest.start = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.timestamp)();
    // TODO : Do we check for bid in pool from here and skip calling adapter again ?
    var adapter = _bidderRegistry[bidRequest.bidderCode];
    _config_js__WEBPACK_IMPORTED_MODULE_1__.config.runWithBidder(bidRequest.bidderCode, function () {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)("CALLING BIDDER");
      _events_js__WEBPACK_IMPORTED_MODULE_9__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_10__.EVENTS.BID_REQUESTED, bidRequest);
    });
    var ajax = (0,_ajax_js__WEBPACK_IMPORTED_MODULE_15__.ajaxBuilder)(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, bidRequest.bidderCode),
      done: requestCallbacks.done
    } : undefined);
    var adapterDone = doneCb.bind(bidRequest);
    try {
      _config_js__WEBPACK_IMPORTED_MODULE_1__.config.runWithBidder(bidRequest.bidderCode, _utils_js__WEBPACK_IMPORTED_MODULE_2__.bind.call(adapter.callBids, adapter, bidRequest, addBidResponse, adapterDone, ajax, onTimelyResponse, _config_js__WEBPACK_IMPORTED_MODULE_1__.config.callbackWithBidder(bidRequest.bidderCode)));
    } catch (e) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("".concat(bidRequest.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
        e: e,
        bidRequest: bidRequest
      });
      adapterDone();
    }
  });
};
function getSupportedMediaTypes(bidderCode) {
  var supportedMediaTypes = [];
  if ((0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.includes)(adapterManager.videoAdapters, bidderCode)) supportedMediaTypes.push('video');
  if ( true && (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.includes)(_native_js__WEBPACK_IMPORTED_MODULE_11__.nativeAdapters, bidderCode)) supportedMediaTypes.push('native');
  return supportedMediaTypes;
}
adapterManager.videoAdapters = []; // added by adapterLoader for now

adapterManager.registerBidAdapter = function (bidAdapter, bidderCode) {
  var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref4$supportedMediaT = _ref4.supportedMediaTypes,
    supportedMediaTypes = _ref4$supportedMediaT === void 0 ? [] : _ref4$supportedMediaT;
  if (bidAdapter && bidderCode) {
    if (typeof bidAdapter.callBids === 'function') {
      _bidderRegistry[bidderCode] = bidAdapter;
      if ((0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.includes)(supportedMediaTypes, 'video')) {
        adapterManager.videoAdapters.push(bidderCode);
      }
      if ( true && (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.includes)(supportedMediaTypes, 'native')) {
        _native_js__WEBPACK_IMPORTED_MODULE_11__.nativeAdapters.push(bidderCode);
      }
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('Bidder adaptor error for bidder code: ' + bidderCode + 'bidder must implement a callBids() function');
    }
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('bidAdapter or bidderCode not specified');
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
          if (!(s2sConfig && (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.includes)(s2sBidders, alias))) {
            nonS2SAlias.push(bidderCode);
          } else {
            _aliasRegistry[alias] = bidderCode;
          }
        }
      });
      nonS2SAlias.forEach(function (bidderCode) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('bidderCode "' + bidderCode + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
      });
    } else {
      try {
        var newAdapter;
        var supportedMediaTypes = getSupportedMediaTypes(bidderCode);
        // Have kept old code to support backward compatibilitiy.
        // Remove this if loop when all adapters are supporting bidderFactory. i.e When Prebid.js is 1.0
        if (bidAdapter.constructor.prototype != Object.prototype) {
          newAdapter = new bidAdapter.constructor();
          newAdapter.setBidderCode(alias);
        } else {
          var spec = bidAdapter.getSpec();
          var gvlid = options && options.gvlid;
          var skipPbsAliasing = options && options.skipPbsAliasing;
          newAdapter = (0,_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_16__.newBidder)(Object.assign({}, spec, {
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
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(bidderCode + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
      }
    }
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)('alias name "' + alias + '" has been already specified.');
  }
};
adapterManager.registerAnalyticsAdapter = function (_ref5) {
  var adapter = _ref5.adapter,
    code = _ref5.code,
    gvlid = _ref5.gvlid;
  if (adapter && code) {
    if (typeof adapter.enableAnalytics === 'function') {
      adapter.code = code;
      _analyticsRegistry[code] = {
        adapter: adapter,
        gvlid: gvlid
      };
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Prebid Error: Analytics adaptor error for analytics \"".concat(code, "\"\n        analytics adapter must implement an enableAnalytics() function"));
    }
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('Prebid Error: analyticsAdapter or analyticsCode not specified');
  }
};
adapterManager.enableAnalytics = function (config) {
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(config)) {
    config = [config];
  }
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__._each)(config, function (adapterConfig) {
    var entry = _analyticsRegistry[adapterConfig.provider];
    if (entry && entry.adapter) {
      entry.adapter.enableAnalytics(adapterConfig);
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Prebid Error: no analytics adapter found in registry for '".concat(adapterConfig.provider, "'."));
    }
  });
};
adapterManager.getBidAdapter = function (bidder) {
  return _bidderRegistry[bidder];
};
adapterManager.getAnalyticsAdapter = function (code) {
  return _analyticsRegistry[code];
};
function getBidderMethod(bidder, method) {
  var adapter = _bidderRegistry[bidder];
  var spec = (adapter === null || adapter === void 0 ? void 0 : adapter.getSpec) && adapter.getSpec();
  if (spec && spec[method] && typeof spec[method] === 'function') {
    return [spec, spec[method]];
  }
}
function invokeBidderMethod(bidder, method, spec, fn) {
  try {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("Invoking ".concat(bidder, ".").concat(method));
    for (var _len = arguments.length, params = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      params[_key - 4] = arguments[_key];
    }
    _config_js__WEBPACK_IMPORTED_MODULE_1__.config.runWithBidder(bidder, fn.bind.apply(fn, [spec].concat(params)));
  } catch (e) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("Error calling ".concat(method, " of ").concat(bidder));
  }
}
function tryCallBidderMethod(bidder, method, param) {
  var target = getBidderMethod(bidder, method);
  if (target != null) {
    invokeBidderMethod.apply(void 0, [bidder, method].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_17__["default"])(target), [param]));
  }
}
adapterManager.callTimedOutBidders = function (adUnits, timedOutBidders, cbTimeout) {
  timedOutBidders = timedOutBidders.map(function (timedOutBidder) {
    // Adding user configured params & timeout to timeout event data
    timedOutBidder.params = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getUserConfiguredParams)(adUnits, timedOutBidder.adUnitCode, timedOutBidder.bidder);
    timedOutBidder.timeout = cbTimeout;
    return timedOutBidder;
  });
  timedOutBidders = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.groupBy)(timedOutBidders, 'bidder');
  Object.keys(timedOutBidders).forEach(function (bidder) {
    tryCallBidderMethod(bidder, 'onTimeout', timedOutBidders[bidder]);
  });
};
adapterManager.callBidWonBidder = function (bidder, bid, adUnits) {
  // Adding user configured params to bidWon event data
  bid.params = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getUserConfiguredParams)(adUnits, bid.adUnitCode, bid.bidder);
  _adUnits_js__WEBPACK_IMPORTED_MODULE_4__.adunitCounter.incrementBidderWinsCounter(bid.adUnitCode, bid.bidder);
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
function resolveAlias(alias) {
  var seen = new Set();
  while (_aliasRegistry.hasOwnProperty(alias) && !seen.has(alias)) {
    seen.add(alias);
    alias = _aliasRegistry[alias];
  }
  return alias;
}
/**
 * Ask every adapter to delete PII.
 * See https://github.com/prebid/Prebid.js/issues/9081
 */
adapterManager.callDataDeletionRequest = (0,_hook_js__WEBPACK_IMPORTED_MODULE_5__.hook)('sync', function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var method = 'onDataDeletionRequest';
  Object.keys(_bidderRegistry).filter(function (bidder) {
    return !_aliasRegistry.hasOwnProperty(bidder);
  }).forEach(function (bidder) {
    var target = getBidderMethod(bidder, method);
    if (target != null) {
      var bidderRequests = _auctionManager_js__WEBPACK_IMPORTED_MODULE_18__.auctionManager.getBidsRequested().filter(function (br) {
        return resolveAlias(br.bidderCode) === bidder;
      });
      invokeBidderMethod.apply(void 0, [bidder, method].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_17__["default"])(target), [bidderRequests], args));
    }
  });
  Object.entries(_analyticsRegistry).forEach(function (_ref6) {
    var _entry$adapter;
    var _ref7 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__["default"])(_ref6, 2),
      name = _ref7[0],
      entry = _ref7[1];
    var fn = entry === null || entry === void 0 ? void 0 : (_entry$adapter = entry.adapter) === null || _entry$adapter === void 0 ? void 0 : _entry$adapter[method];
    if (typeof fn === 'function') {
      try {
        fn.apply(entry.adapter, args);
      } catch (e) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("error calling ".concat(method, " of ").concat(name), e);
      }
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (adapterManager);

/***/ }),

/***/ "./src/adapters/bidderFactory.js":
/*!***************************************!*\
  !*** ./src/adapters/bidderFactory.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIabSubCategory": function() { return /* binding */ getIabSubCategory; },
/* harmony export */   "newBidder": function() { return /* binding */ newBidder; },
/* harmony export */   "registerBidder": function() { return /* binding */ registerBidder; },
/* harmony export */   "registerSyncInner": function() { return /* binding */ registerSyncInner; }
/* harmony export */ });
/* unused harmony exports storage, processBidderRequests, addComponentAuction, preloadBidderMappingFile, isValid */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _adapter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapter.js */ "./src/adapter.js");
/* harmony import */ var _adapterManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _bidfactory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bidfactory.js */ "./src/bidfactory.js");
/* harmony import */ var _userSync_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../userSync.js */ "./src/userSync.js");
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../native.js */ "./src/native.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../video.js */ "./src/video.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants.json */ "./src/constants.json");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events.js */ "./src/events.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ajax.js */ "./src/ajax.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _mediaTypes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hook.js */ "./src/hook.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _bidderSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bidderSettings.js */ "./src/bidderSettings.js");
/* harmony import */ var _utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/perfMetrics.js */ "./src/utils/perfMetrics.js");




















var storage = (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getCoreStorageManager)('bidderFactory');

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
 * @typedef {object} BidderAuctionResponse An object encapsulating an adapter response for current Auction
 *
 * @property {Array<Bid>} bids Contextual bids returned by this adapter, if any
 * @property {object|null} fledgeAuctionConfigs Optional FLEDGE response, as a map of impid -> auction_config
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
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerBidAdapter(bidder, spec.code, mediaTypes);
  }
  putBidder(spec);
  if (Array.isArray(spec.aliases)) {
    spec.aliases.forEach(function (alias) {
      var aliasCode = alias;
      var gvlid;
      var skipPbsAliasing;
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(alias)) {
        aliasCode = alias.code;
        gvlid = alias.gvlid;
        skipPbsAliasing = alias.skipPbsAliasing;
      }
      _adapterManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].aliasRegistry[aliasCode] = spec.code;
      putBidder(Object.assign({}, spec, {
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
  return Object.assign(new _adapter_js__WEBPACK_IMPORTED_MODULE_3__["default"](spec.code), {
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
        var metrics = (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__.useMetrics)(bid.metrics);
        metrics.checkpoint('addBidResponse');
        adUnitCodesHandled[adUnitCode] = true;
        if (metrics.measureTime('addBidResponse.validate', function () {
          return isValid(adUnitCode, bid);
        })) {
          addBidResponse(adUnitCode, bid);
        } else {
          addBidResponse.reject(adUnitCode, bid, _constants_json__WEBPACK_IMPORTED_MODULE_5__.REJECTION_REASON.INVALID);
        }
      }

      // After all the responses have come back, call done() and
      // register any required usersync pixels.
      var responses = [];
      function afterAllResponses() {
        done();
        _config_js__WEBPACK_IMPORTED_MODULE_6__.config.runWithBidder(spec.code, function () {
          _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_5__.EVENTS.BIDDER_DONE, bidderRequest);
          registerSyncs(responses, bidderRequest.gdprConsent, bidderRequest.uspConsent, bidderRequest.gppConsent);
        });
      }
      var validBidRequests = adapterMetrics(bidderRequest).measureTime('validate', function () {
        return bidderRequest.bids.filter(filterAndWarn);
      });
      if (validBidRequests.length === 0) {
        afterAllResponses();
        return;
      }
      var bidRequestMap = {};
      validBidRequests.forEach(function (bid) {
        bidRequestMap[bid.bidId] = bid;
        // Delete this once we are 1.0
        if (!bid.adUnitCode) {
          bid.adUnitCode = bid.placementCode;
        }
      });
      processBidderRequests(spec, validBidRequests, bidderRequest, ajax, configEnabledCallback, {
        onRequest: function onRequest(requestObject) {
          return _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_5__.EVENTS.BEFORE_BIDDER_HTTP, bidderRequest, requestObject);
        },
        onResponse: function onResponse(resp) {
          onTimelyResponse(spec.code);
          responses.push(resp);
        },
        /** Process eventual BidderAuctionResponse.fledgeAuctionConfig field in response.
         * @param {Array<FledgeAuctionConfig>} fledgeAuctionConfigs
         */
        onFledgeAuctionConfigs: function onFledgeAuctionConfigs(fledgeAuctionConfigs) {
          fledgeAuctionConfigs.forEach(function (fledgeAuctionConfig) {
            var bidRequest = bidRequestMap[fledgeAuctionConfig.bidId];
            if (bidRequest) {
              addComponentAuction(bidRequest, fledgeAuctionConfig);
            }
          });
        },
        // If the server responds with an error, there's not much we can do beside logging.
        onError: function onError(errorMessage, error) {
          onTimelyResponse(spec.code);
          _adapterManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].callBidderError(spec.code, error, bidderRequest);
          _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_5__.EVENTS.BIDDER_ERROR, {
            error: error,
            bidderRequest: bidderRequest
          });
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Server call for ".concat(spec.code, " failed: ").concat(errorMessage, " ").concat(error.status, ". Continuing without bids."));
        },
        onBid: function onBid(bid) {
          var bidRequest = bidRequestMap[bid.requestId];
          if (bidRequest) {
            bid.adapterCode = bidRequest.bidder;
            if (isInvalidAlternateBidder(bid.bidderCode, bidRequest.bidder)) {
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("".concat(bid.bidderCode, " is not a registered partner or known bidder of ").concat(bidRequest.bidder, ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."));
              addBidResponse.reject(bidRequest.adUnitCode, bid, _constants_json__WEBPACK_IMPORTED_MODULE_5__.REJECTION_REASON.BIDDER_DISALLOWED);
              return;
            }
            // creating a copy of original values as cpm and currency are modified later
            bid.originalCpm = bid.cpm;
            bid.originalCurrency = bid.currency;
            bid.meta = bid.meta || Object.assign({}, bid[bidRequest.bidder]);
            var prebidBid = Object.assign((0,_bidfactory_js__WEBPACK_IMPORTED_MODULE_8__.createBid)(_constants_json__WEBPACK_IMPORTED_MODULE_5__.STATUS.GOOD, bidRequest), bid);
            addBidWithCode(bidRequest.adUnitCode, prebidBid);
          } else {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("Bidder ".concat(spec.code, " made bid for unknown request ID: ").concat(bid.requestId, ". Ignoring."));
            addBidResponse.reject(null, bid, _constants_json__WEBPACK_IMPORTED_MODULE_5__.REJECTION_REASON.INVALID_REQUEST_ID);
          }
        },
        onCompletion: afterAllResponses
      });
    }
  });
  function isInvalidAlternateBidder(responseBidder, requestBidder) {
    var allowAlternateBidderCodes = _bidderSettings_js__WEBPACK_IMPORTED_MODULE_9__.bidderSettings.get(requestBidder, 'allowAlternateBidderCodes') || false;
    var alternateBiddersList = _bidderSettings_js__WEBPACK_IMPORTED_MODULE_9__.bidderSettings.get(requestBidder, 'allowedAlternateBidderCodes');
    if (!!responseBidder && !!requestBidder && requestBidder !== responseBidder) {
      alternateBiddersList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(alternateBiddersList) ? alternateBiddersList.map(function (val) {
        return val.trim().toLowerCase();
      }).filter(function (val) {
        return !!val;
      }).filter(_utils_js__WEBPACK_IMPORTED_MODULE_2__.uniques) : alternateBiddersList;
      if (!allowAlternateBidderCodes || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(alternateBiddersList) && alternateBiddersList[0] !== '*' && !alternateBiddersList.includes(responseBidder)) {
        return true;
      }
    }
    return false;
  }
  function registerSyncs(responses, gdprConsent, uspConsent, gppConsent) {
    registerSyncInner(spec, responses, gdprConsent, uspConsent, gppConsent);
  }
  function filterAndWarn(bid) {
    if (!spec.isBidRequestValid(bid)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("Invalid bid sent to bidder ".concat(spec.code, ": ").concat(JSON.stringify(bid)));
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
var processBidderRequests = (0,_hook_js__WEBPACK_IMPORTED_MODULE_10__.hook)('sync', function (spec, bids, bidderRequest, ajax, wrapCallback, _ref) {
  var onRequest = _ref.onRequest,
    onResponse = _ref.onResponse,
    onFledgeAuctionConfigs = _ref.onFledgeAuctionConfigs,
    onError = _ref.onError,
    onBid = _ref.onBid,
    onCompletion = _ref.onCompletion;
  var metrics = adapterMetrics(bidderRequest);
  onCompletion = metrics.startTiming('total').stopBefore(onCompletion);
  var requests = metrics.measureTime('buildRequests', function () {
    return spec.buildRequests(bids, bidderRequest);
  });
  if (!requests || requests.length === 0) {
    onCompletion();
    return;
  }
  if (!Array.isArray(requests)) {
    requests = [requests];
  }
  var requestDone = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.delayExecution)(onCompletion, requests.length);
  requests.forEach(function (request) {
    var requestMetrics = metrics.fork();
    function addBid(bid) {
      if (bid != null) bid.metrics = requestMetrics.fork().renameWith();
      onBid(bid);
    }
    // If the server responds successfully, use the adapter code to unpack the Bids from it.
    // If the adapter code fails, no bids should be added. After all the bids have been added,
    // make sure to call the `requestDone` function so that we're one step closer to calling onCompletion().
    var onSuccess = wrapCallback(function (response, responseObj) {
      networkDone();
      try {
        response = JSON.parse(response);
      } catch (e) {/* response might not be JSON... that's ok. */}

      // Make response headers available for #1742. These are lazy-loaded because most adapters won't need them.
      response = {
        body: response,
        headers: headerParser(responseObj)
      };
      onResponse(response);
      try {
        response = requestMetrics.measureTime('interpretResponse', function () {
          return spec.interpretResponse(response, request);
        });
      } catch (err) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Bidder ".concat(spec.code, " failed to interpret the server's response. Continuing without bids"), null, err);
        requestDone();
        return;
      }
      var bids;
      // Extract additional data from a structured {BidderAuctionResponse} response
      if (response && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(response.fledgeAuctionConfigs)) {
        onFledgeAuctionConfigs(response.fledgeAuctionConfigs);
        bids = response.bids;
      } else {
        bids = response;
      }
      if (bids) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(bids)) {
          bids.forEach(addBid);
        } else {
          addBid(bids);
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
      networkDone();
      onError(errorMessage, error);
      requestDone();
    });
    onRequest(request);
    var networkDone = requestMetrics.startTiming('net');
    switch (request.method) {
      case 'GET':
        ajax("".concat(request.url).concat(formatGetParameters(request.data)), {
          success: onSuccess,
          error: onFailure
        }, undefined, Object.assign({
          method: 'GET',
          withCredentials: true
        }, request.options));
        break;
      case 'POST':
        ajax(request.url, {
          success: onSuccess,
          error: onFailure
        }, typeof request.data === 'string' ? request.data : JSON.stringify(request.data), Object.assign({
          method: 'POST',
          contentType: 'text/plain',
          withCredentials: true
        }, request.options));
        break;
      default:
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("Skipping invalid request from ".concat(spec.code, ". Request type ").concat(request.type, " must be GET or POST"));
        requestDone();
    }
    function formatGetParameters(data) {
      if (data) {
        return "?".concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__["default"])(data) === 'object' ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseQueryStringParameters)(data) : data);
      }
      return '';
    }
  });
}, 'processBidderRequests');
var registerSyncInner = (0,_hook_js__WEBPACK_IMPORTED_MODULE_10__.hook)('async', function (spec, responses, gdprConsent, uspConsent, gppConsent) {
  var aliasSyncEnabled = _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('userSync.aliasSyncEnabled');
  if (spec.getUserSyncs && (aliasSyncEnabled || !_adapterManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].aliasRegistry[spec.code])) {
    var filterConfig = _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('userSync.filterSettings');
    var syncs = spec.getUserSyncs({
      iframeEnabled: !!(filterConfig && (filterConfig.iframe || filterConfig.all)),
      pixelEnabled: !!(filterConfig && (filterConfig.image || filterConfig.all))
    }, responses, gdprConsent, uspConsent, gppConsent);
    if (syncs) {
      if (!Array.isArray(syncs)) {
        syncs = [syncs];
      }
      syncs.forEach(function (sync) {
        _userSync_js__WEBPACK_IMPORTED_MODULE_12__.userSync.registerSync(sync.type, spec.code, sync.url);
      });
    }
  }
}, 'registerSyncs');
var addComponentAuction = (0,_hook_js__WEBPACK_IMPORTED_MODULE_10__.hook)('sync', function (_bidRequest, fledgeAuctionConfig) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("bidderFactory.addComponentAuction", fledgeAuctionConfig);
}, 'addComponentAuction');
function preloadBidderMappingFile(fn, adUnits) {
  if (!_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('adpod.brandCategoryExclusion')) {
    return fn.call(this, adUnits);
  }
  var adPodBidders = adUnits.filter(function (adUnit) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__["default"])(adUnit, 'mediaTypes.video.context') === _mediaTypes_js__WEBPACK_IMPORTED_MODULE_14__.ADPOD;
  }).map(function (adUnit) {
    return adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
  }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_2__.flatten, []).filter(_utils_js__WEBPACK_IMPORTED_MODULE_2__.uniques);
  adPodBidders.forEach(function (bidder) {
    var bidderSpec = _adapterManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].getBidAdapter(bidder);
    if (bidderSpec.getSpec().getMappingFileInfo) {
      var info = bidderSpec.getSpec().getMappingFileInfo();
      var refreshInDays = info.refreshInDays ? info.refreshInDays : DEFAULT_REFRESHIN_DAYS;
      var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getSpec().code;
      var mappingData = storage.getDataFromLocalStorage(key);
      try {
        mappingData = mappingData ? JSON.parse(mappingData) : undefined;
        if (!mappingData || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.timestamp)() > mappingData.lastUpdated + refreshInDays * 24 * 60 * 60 * 1000) {
          (0,_ajax_js__WEBPACK_IMPORTED_MODULE_15__.ajax)(info.url, {
            success: function success(response) {
              try {
                response = JSON.parse(response);
                var mapping = {
                  lastUpdated: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.timestamp)(),
                  mapping: response.mapping
                };
                storage.setDataInLocalStorage(key, JSON.stringify(mapping));
              } catch (error) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Failed to parse ".concat(bidder, " bidder translation mapping file"));
              }
            },
            error: function error() {
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Failed to load ".concat(bidder, " bidder translation file"));
            }
          });
        }
      } catch (error) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Failed to parse ".concat(bidder, " bidder translation mapping file"));
      }
    }
  });
  fn.call(this, adUnits);
}
(0,_hook_js__WEBPACK_IMPORTED_MODULE_10__.getHook)('checkAdUnitSetup').before(preloadBidderMappingFile);

/**
 * Reads the data stored in localstorage and returns iab subcategory
 * @param {string} bidderCode bidderCode
 * @param {string} category bidders category
 */
function getIabSubCategory(bidderCode, category) {
  var bidderSpec = _adapterManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].getBidAdapter(bidderCode);
  if (bidderSpec.getSpec().getMappingFileInfo) {
    var info = bidderSpec.getSpec().getMappingFileInfo();
    var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getBidderCode();
    var data = storage.getDataFromLocalStorage(key);
    if (data) {
      try {
        data = JSON.parse(data);
      } catch (error) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Failed to parse ".concat(bidderCode, " mapping data stored in local storage"));
      }
      return data.mapping[category] ? data.mapping[category] : null;
    }
  }
}

// check that the bid has a width and height set
function validBidSize(adUnitCode, bid) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref2$index = _ref2.index,
    index = _ref2$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_16__.auctionManager.index : _ref2$index;
  if ((bid.width || parseInt(bid.width, 10) === 0) && (bid.height || parseInt(bid.height, 10) === 0)) {
    bid.width = parseInt(bid.width, 10);
    bid.height = parseInt(bid.height, 10);
    return true;
  }
  var bidRequest = index.getBidRequest(bid);
  var mediaTypes = index.getMediaTypes(bid);
  var sizes = bidRequest && bidRequest.sizes || mediaTypes && mediaTypes.banner && mediaTypes.banner.sizes;
  var parsedSizes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseSizesInput)(sizes);

  // if a banner impression has one valid size, we assign that size to any bid
  // response that does not explicitly set width or height
  if (parsedSizes.length === 1) {
    var _parsedSizes$0$split = parsedSizes[0].split('x'),
      _parsedSizes$0$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_parsedSizes$0$split, 2),
      width = _parsedSizes$0$split2[0],
      height = _parsedSizes$0$split2[1];
    bid.width = parseInt(width, 10);
    bid.height = parseInt(height, 10);
    return true;
  }
  return false;
}

// Validate the arguments sent to us by the adapter. If this returns false, the bid should be totally ignored.
function isValid(adUnitCode, bid) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$index = _ref3.index,
    index = _ref3$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_16__.auctionManager.index : _ref3$index;
  function hasValidKeys() {
    var bidKeys = Object.keys(bid);
    return COMMON_BID_RESPONSE_KEYS.every(function (key) {
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_18__.includes)(bidKeys, key) && !(0,_polyfill_js__WEBPACK_IMPORTED_MODULE_18__.includes)([undefined, null], bid[key]);
    });
  }
  function errorMessage(msg) {
    return "Invalid bid from ".concat(bid.bidderCode, ". Ignoring bid: ").concat(msg);
  }
  if (!adUnitCode) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)('No adUnitCode was supplied to addBidResponse.');
    return false;
  }
  if (!bid) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("Some adapter tried to add an undefined bid for ".concat(adUnitCode, "."));
    return false;
  }
  if (!hasValidKeys()) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(errorMessage("Bidder ".concat(bid.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")));
    return false;
  }
  if ( true && bid.mediaType === 'native' && !(0,_native_js__WEBPACK_IMPORTED_MODULE_19__.nativeBidIsValid)(bid, {
    index: index
  })) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(errorMessage('Native bid missing some required properties.'));
    return false;
  }
  if (bid.mediaType === 'video' && !(0,_video_js__WEBPACK_IMPORTED_MODULE_20__.isValidVideoBid)(bid, {
    index: index
  })) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(errorMessage("Video bid does not have required vastUrl or renderer property"));
    return false;
  }
  if (bid.mediaType === 'banner' && !validBidSize(adUnitCode, bid, {
    index: index
  })) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(errorMessage("Banner bids require a width and height"));
    return false;
  }
  return true;
}
function adapterMetrics(bidderRequest) {
  return (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__.useMetrics)(bidderRequest.metrics).renameWith(function (n) {
    return ["adapter.client.".concat(n), "adapters.client.".concat(bidderRequest.bidderCode, ".").concat(n)];
  });
}

/***/ }),

/***/ "./src/adloader.js":
/*!*************************!*\
  !*** ./src/adloader.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadExternalScript": function() { return /* binding */ loadExternalScript; }
/* harmony export */ });
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


var _requestCache = new WeakMap();
// The below list contains modules or vendors whom Prebid allows to load external JS.
var _approvedLoadExternalJSList = ['debugging', 'adloox', 'criteo', 'outstream', 'adagio', 'spotx', 'browsi', 'brandmetrics', 'justtag', 'tncId', 'akamaidap', 'ftrackId', 'inskin', 'hadron', 'medianet', 'improvedigital', 'aaxBlockmeter', 'confiant', 'arcspan'];

/**
 * Loads external javascript. Can only be used if external JS is approved by Prebid. See https://github.com/prebid/prebid-js-external-js-template#policy
 * Each unique URL will be loaded at most 1 time.
 * @param {string} url the url to load
 * @param {string} moduleCode bidderCode or module code of the module requesting this resource
 * @param {function} [callback] callback function to be called after the script is loaded
 * @param {Document} [doc] the context document, in which the script will be loaded, defaults to loaded document
 * @param {object} an object of attributes to be added to the script with setAttribute by [key] and [value]; Only the attributes passed in the first request of a url will be added.
 */
function loadExternalScript(url, moduleCode, callback, doc, attributes) {
  if (!moduleCode || !url) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)('cannot load external script without url and moduleCode');
    return;
  }
  if (!(0,_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.includes)(_approvedLoadExternalJSList, moduleCode)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)("".concat(moduleCode, " not whitelisted for loading external JavaScript"));
    return;
  }
  if (!doc) {
    doc = document; // provide a "valid" key for the WeakMap
  }
  // only load each asset once
  var storedCachedObject = getCacheObject(doc, url);
  if (storedCachedObject) {
    if (callback && typeof callback === 'function') {
      if (storedCachedObject.loaded) {
        // invokeCallbacks immediately
        callback();
      } else {
        // queue the callback
        storedCachedObject.callbacks.push(callback);
      }
    }
    return storedCachedObject.tag;
  }
  var cachedDocObj = _requestCache.get(doc) || {};
  var cacheObject = {
    loaded: false,
    tag: null,
    callbacks: []
  };
  cachedDocObj[url] = cacheObject;
  _requestCache.set(doc, cachedDocObj);
  if (callback && typeof callback === 'function') {
    cacheObject.callbacks.push(callback);
  }
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn)("module ".concat(moduleCode, " is loading external JavaScript"));
  return requestResource(url, function () {
    cacheObject.loaded = true;
    try {
      for (var i = 0; i < cacheObject.callbacks.length; i++) {
        cacheObject.callbacks[i]();
      }
    } catch (e) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)('Error executing callback', 'adloader.js:loadExternalScript', e);
    }
  }, doc, attributes);
  function requestResource(tagSrc, callback, doc, attributes) {
    if (!doc) {
      doc = document;
    }
    var jptScript = doc.createElement('script');
    jptScript.type = 'text/javascript';
    jptScript.async = true;
    var cacheObject = getCacheObject(doc, url);
    if (cacheObject) {
      cacheObject.tag = jptScript;
    }
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
    jptScript.src = tagSrc;
    if (attributes) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setScriptAttributes)(jptScript, attributes);
    }

    // add the new script tag to the page
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.insertElement)(jptScript, doc);
    return jptScript;
  }
  function getCacheObject(doc, url) {
    var cachedDocObj = _requestCache.get(doc);
    if (cachedDocObj && cachedDocObj[url]) {
      return cachedDocObj[url];
    }
    return null; // return new cache object?
  }
}

;

/***/ }),

/***/ "./src/ajax.js":
/*!*********************!*\
  !*** ./src/ajax.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": function() { return /* binding */ ajax; },
/* harmony export */   "ajaxBuilder": function() { return /* binding */ ajaxBuilder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");



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
      var callbacks = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(callback) === 'object' && callback !== null ? callback : {
        success: function success() {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)('xhr success');
        },
        error: function error(e) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('xhr error', null, e);
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
      };

      // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648
      if (!_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('disableAjaxTimeout')) {
        x.ontimeout = function () {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('  xhr timeout after ', x.timeout, 'ms');
        };
      }
      if (method === 'GET' && data) {
        var urlInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(url, options);
        Object.assign(urlInfo.search, data);
        url = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildUrl)(urlInfo);
      }
      x.open(method, url, true);
      // IE needs timeout to be set after open - see #1410
      // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648
      if (!_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('disableAjaxTimeout')) {
        x.timeout = timeout;
      }
      if (options.withCredentials) {
        x.withCredentials = true;
      }
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._each)(options.customHeaders, function (value, header) {
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('xhr construction', error);
      (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(callback) === 'object' && callback !== null && callback.error(error);
    }
  };
}

/***/ }),

/***/ "./src/auction.js":
/*!************************!*\
  !*** ./src/auction.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUCTION_COMPLETED": function() { return /* binding */ AUCTION_COMPLETED; },
/* harmony export */   "AUCTION_IN_PROGRESS": function() { return /* binding */ AUCTION_IN_PROGRESS; },
/* harmony export */   "addBidToAuction": function() { return /* binding */ addBidToAuction; },
/* harmony export */   "callPrebidCache": function() { return /* binding */ callPrebidCache; },
/* harmony export */   "doCallbacksIfTimedout": function() { return /* binding */ doCallbacksIfTimedout; },
/* harmony export */   "getPriceByGranularity": function() { return /* binding */ getPriceByGranularity; },
/* harmony export */   "getPriceGranularity": function() { return /* binding */ getPriceGranularity; },
/* harmony export */   "getStandardBidderSettings": function() { return /* binding */ getStandardBidderSettings; },
/* harmony export */   "newAuction": function() { return /* binding */ newAuction; }
/* harmony export */ });
/* unused harmony exports AUCTION_STARTED, resetAuctionState, addBidResponse, addBidderRequests, bidsBackCallback, auctionCallbacks, batchingCache, getMediaTypeGranularity, getAdvertiserDomain, getPrimaryCatId, getKeyValueTargetingPairs, adjustBids */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _cpmBucketManager_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cpmBucketManager.js */ "./src/cpmBucketManager.js");
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./native.js */ "./src/native.js");
/* harmony import */ var _videoCache_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./videoCache.js */ "./src/videoCache.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _userSync_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userSync.js */ "./src/userSync.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./video.js */ "./src/video.js");
/* harmony import */ var _mediaTypes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bidderSettings.js */ "./src/bidderSettings.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _adapterManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/promise.js */ "./src/utils/promise.js");
/* harmony import */ var _utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _bidfactory_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bidfactory.js */ "./src/bidfactory.js");
/* harmony import */ var _utils_cpm_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/cpm.js */ "./src/utils/cpm.js");


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





















var syncUsers = _userSync_js__WEBPACK_IMPORTED_MODULE_0__.userSync.syncUsers;
var AUCTION_STARTED = 'started';
var AUCTION_IN_PROGRESS = 'inProgress';
var AUCTION_COMPLETED = 'completed';

// register event for bid adjustment
_events_js__WEBPACK_IMPORTED_MODULE_1__.on(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BID_ADJUSTMENT, function (bid) {
  adjustBids(bid);
});
var MAX_REQUESTS_PER_ORIGIN = 4;
var outstandingRequests = {};
var sourceInfo = {};
var queuedCalls = [];

/**
 * Clear global state for tests
 */
function resetAuctionState() {
  queuedCalls.length = 0;
  [outstandingRequests, sourceInfo].forEach(function (ob) {
    return Object.keys(ob).forEach(function (k) {
      delete ob[k];
    });
  });
}

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
  * @param {{global: {}, bidder: {}}} ortb2Fragments first party data, separated into global
  *    (from getConfig('ortb2') + requestBids({ortb2})) and bidder (a map from bidderCode to ortb2)
  * @returns {Auction} auction instance
  */
function newAuction(_ref) {
  var adUnits = _ref.adUnits,
    adUnitCodes = _ref.adUnitCodes,
    callback = _ref.callback,
    cbTimeout = _ref.cbTimeout,
    labels = _ref.labels,
    auctionId = _ref.auctionId,
    ortb2Fragments = _ref.ortb2Fragments,
    metrics = _ref.metrics;
  metrics = (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_3__.useMetrics)(metrics);
  var _adUnits = adUnits;
  var _labels = labels;
  var _adUnitCodes = adUnitCodes;
  var _auctionId = auctionId || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)();
  var _timeout = cbTimeout;
  var _timelyBidders = new Set();
  var _bidsRejected = [];
  var _callback = callback;
  var _bidderRequests = [];
  var _bidsReceived = [];
  var _noBids = [];
  var _winningBids = [];
  var _auctionStart;
  var _auctionEnd;
  var _timer;
  var _auctionStatus;
  var _nonBids = [];
  function addBidRequests(bidderRequests) {
    _bidderRequests = _bidderRequests.concat(bidderRequests);
  }
  function addBidReceived(bidsReceived) {
    _bidsReceived = _bidsReceived.concat(bidsReceived);
  }
  function addBidRejected(bidsRejected) {
    _bidsRejected = _bidsRejected.concat(bidsRejected);
  }
  function addNoBid(noBid) {
    _noBids = _noBids.concat(noBid);
  }
  function addNonBids(seatnonbids) {
    _nonBids = _nonBids.concat(seatnonbids);
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
      bidsRejected: _bidsRejected,
      winningBids: _winningBids,
      timeout: _timeout,
      metrics: metrics,
      seatNonBids: _nonBids
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
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logMessage)("Auction ".concat(_auctionId, " timedOut"));
        timedOutBidders = getTimedOutBids(_bidderRequests, _timelyBidders);
        if (timedOutBidders.length) {
          _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BID_TIMEOUT, timedOutBidders);
        }
      }
      _auctionStatus = AUCTION_COMPLETED;
      _auctionEnd = Date.now();
      metrics.checkpoint('auctionEnd');
      metrics.timeBetween('requestBids', 'auctionEnd', 'requestBids.total');
      metrics.timeBetween('callBids', 'auctionEnd', 'requestBids.callBids');
      _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.AUCTION_END, getProperties());
      bidsBackCallback(_adUnits, function () {
        try {
          if (_callback != null) {
            var _adUnitCodes2 = _adUnitCodes;
            var bids = _bidsReceived.filter(_utils_js__WEBPACK_IMPORTED_MODULE_4__.bind.call(_utils_js__WEBPACK_IMPORTED_MODULE_4__.adUnitsFilter, this, _adUnitCodes2)).reduce(groupByPlacement, {});
            _callback.apply(pbjs, [bids, timedOut, _auctionId]);
            _callback = null;
          }
        } catch (e) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Error executing bidsBackHandler', null, e);
        } finally {
          // Calling timed out bidders
          if (timedOutBidders.length) {
            _adapterManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].callTimedOutBidders(adUnits, timedOutBidders, _timeout);
          }
          // Only automatically sync if the publisher has not chosen to "enableOverride"
          var userSyncConfig = _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('userSync') || {};
          if (!userSyncConfig.enableOverride) {
            // Delay the auto sync by the config delay
            syncUsers(userSyncConfig.syncDelay);
          }
        }
      });
    }
  }
  function auctionDone() {
    _config_js__WEBPACK_IMPORTED_MODULE_6__.config.resetBidder();
    // when all bidders have called done callback atleast once it means auction is complete
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Bids Received for Auction with id: ".concat(_auctionId), _bidsReceived);
    _auctionStatus = AUCTION_COMPLETED;
    executeCallback(false, true);
  }
  function onTimelyResponse(bidderCode) {
    _timelyBidders.add(bidderCode);
  }
  function callBids() {
    _auctionStatus = AUCTION_STARTED;
    _auctionStart = Date.now();
    var bidRequests = metrics.measureTime('requestBids.makeRequests', function () {
      return _adapterManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].makeBidRequests(_adUnits, _auctionStart, _auctionId, _timeout, _labels, ortb2Fragments, metrics);
    });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Bids Requested for Auction with id: ".concat(_auctionId), bidRequests);
    metrics.checkpoint('callBids');
    if (bidRequests.length < 1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)('No valid bid requests returned for auction');
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
        _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.AUCTION_INIT, getProperties());
        var callbacks = auctionCallbacks(auctionDone, _this);
        _adapterManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].callBids(_adUnits, bidRequests, callbacks.addBidResponse, callbacks.adapterDone, {
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
        }, _timeout, onTimelyResponse, ortb2Fragments);
      }
    };
    if (!runIfOriginHasCapacity(call)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)('queueing auction due to limited endpoint capacity');
      queuedCalls.push(call);
    }
    function runIfOriginHasCapacity(call) {
      var hasCapacity = true;
      var maxRequests = _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('maxRequestsPerOrigin') || MAX_REQUESTS_PER_ORIGIN;
      call.bidRequests.some(function (bidRequest) {
        var requests = 1;
        var source = typeof bidRequest.src !== 'undefined' && bidRequest.src === _constants_json__WEBPACK_IMPORTED_MODULE_2__.S2S.SRC ? 's2s' : bidRequest.bidderCode;
        // if we have no previous info on this source just let them through
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
        }
        // return only used for terminating this .some() iteration early if it is determined we don't have capacity
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
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].callBidWonBidder(winningBid.adapterCode || winningBid.bidder, winningBid, adUnits);
  }
  function setBidTargeting(bid) {
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].callSetTargetingBidder(bid.adapterCode || bid.bidder, bid);
  }
  _events_js__WEBPACK_IMPORTED_MODULE_1__.on(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.SEAT_NON_BID, function (event) {
    if (event.auctionId === _auctionId) {
      addNonBids(event.seatnonbid);
    }
  });
  return {
    addBidReceived: addBidReceived,
    addBidRejected: addBidRejected,
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
    },
    getNonBids: function getNonBids() {
      return _nonBids;
    },
    getFPD: function getFPD() {
      return ortb2Fragments;
    },
    getMetrics: function getMetrics() {
      return metrics;
    }
  };
}

/**
 * Hook into this to intercept bids before they are added to an auction.
 *
 * @param adUnitCode
 * @param bid
 * @param {function(String)} reject: a function that, when called, rejects `bid` with the given reason.
 */
var addBidResponse = (0,_hook_js__WEBPACK_IMPORTED_MODULE_7__.hook)('sync', function (adUnitCode, bid, reject) {
  this.dispatch.call(null, adUnitCode, bid);
}, 'addBidResponse');
var addBidderRequests = (0,_hook_js__WEBPACK_IMPORTED_MODULE_7__.hook)('sync', function (bidderRequests) {
  this.dispatch.call(this.context, bidderRequests);
}, 'addBidderRequests');
var bidsBackCallback = (0,_hook_js__WEBPACK_IMPORTED_MODULE_7__.hook)('async', function (adUnits, callback) {
  if (callback) {
    callback();
  }
}, 'bidsBackCallback');
function auctionCallbacks(auctionDone, auctionInstance) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref2$index = _ref2.index,
    index = _ref2$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index : _ref2$index;
  var outstandingBidsAdded = 0;
  var allAdapterCalledDone = false;
  var bidderRequestsDone = new Set();
  var bidResponseMap = {};
  var ready = {};
  function waitFor(requestId, result) {
    if (ready[requestId] == null) {
      ready[requestId] = _utils_promise_js__WEBPACK_IMPORTED_MODULE_9__.GreedyPromise.resolve();
    }
    ready[requestId] = ready[requestId].then(function () {
      return _utils_promise_js__WEBPACK_IMPORTED_MODULE_9__.GreedyPromise.resolve(result).catch(function () {});
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
      _utils_promise_js__WEBPACK_IMPORTED_MODULE_9__.GreedyPromise.race([_utils_promise_js__WEBPACK_IMPORTED_MODULE_9__.GreedyPromise.timeout(timeRemaining), _utils_promise_js__WEBPACK_IMPORTED_MODULE_9__.GreedyPromise.resolve(orphanWait).then(function () {
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
  function handleBidResponse(adUnitCode, bid, handler) {
    bidResponseMap[bid.requestId] = true;
    addCommonResponseProperties(bid, adUnitCode);
    outstandingBidsAdded++;
    return handler(afterBidAdded);
  }
  function acceptBidResponse(adUnitCode, bid) {
    handleBidResponse(adUnitCode, bid, function (done) {
      var bidResponse = getPreparedBidForAuction(bid);
      if (bidResponse.mediaType === _mediaTypes_js__WEBPACK_IMPORTED_MODULE_10__.VIDEO) {
        tryAddVideoBid(auctionInstance, bidResponse, done);
      } else {
        if ( true && bidResponse.native != null && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__["default"])(bidResponse.native) === 'object') {
          // NOTE: augment bidResponse.native even if bidResponse.mediaType !== NATIVE; it's possible
          // to treat banner responses as native
          addLegacyFieldsIfNeeded(bidResponse);
        }
        addBidToAuction(auctionInstance, bidResponse);
        done();
      }
    });
  }
  function rejectBidResponse(adUnitCode, bid, reason) {
    return handleBidResponse(adUnitCode, bid, function (done) {
      var _bid$getIdentifiers;
      // return a "NO_BID" replacement that the caller can decide to continue with
      // TODO: remove this in v8; see https://github.com/prebid/Prebid.js/issues/8956
      var noBid = (0,_bidfactory_js__WEBPACK_IMPORTED_MODULE_12__.createBid)(_constants_json__WEBPACK_IMPORTED_MODULE_2__.STATUS.NO_BID, (_bid$getIdentifiers = bid.getIdentifiers) === null || _bid$getIdentifiers === void 0 ? void 0 : _bid$getIdentifiers.call(bid));
      Object.assign(noBid, Object.fromEntries(Object.entries(bid).filter(function (_ref3) {
        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref3, 1),
          k = _ref4[0];
        return !noBid.hasOwnProperty(k) && !['ad', 'adUrl', 'vastXml', 'vastUrl', 'native'].includes(k);
      })));
      noBid.status = _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.BID_REJECTED;
      noBid.cpm = 0;
      bid.rejectionReason = reason;
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("Bid from ".concat(bid.bidder || 'unknown bidder', " was rejected: ").concat(reason), bid);
      _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BID_REJECTED, bid);
      auctionInstance.addBidRejected(bid);
      done();
      return noBid;
    });
  }
  function _adapterDone() {
    var bidderRequest = this;
    var bidderRequests = auctionInstance.getBidRequests();
    var auctionOptionsConfig = _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('auctionOptions');
    bidderRequestsDone.add(bidderRequest);
    if (auctionOptionsConfig && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(auctionOptionsConfig)) {
      var secondaryBidders = auctionOptionsConfig.secondaryBidders;
      if (secondaryBidders && !bidderRequests.every(function (bidder) {
        return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_14__.includes)(secondaryBidders, bidder.bidderCode);
      })) {
        bidderRequests = bidderRequests.filter(function (request) {
          return !(0,_polyfill_js__WEBPACK_IMPORTED_MODULE_14__.includes)(secondaryBidders, request.bidderCode);
        });
      }
    }
    allAdapterCalledDone = bidderRequests.every(function (bidderRequest) {
      return bidderRequestsDone.has(bidderRequest);
    });
    bidderRequest.bids.forEach(function (bid) {
      if (!bidResponseMap[bid.bidId]) {
        auctionInstance.addNoBid(bid);
        _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.NO_BID, bid);
      }
    });
    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }
  return {
    addBidResponse: function () {
      function addBid(adUnitCode, bid) {
        var bidderRequest = index.getBidderRequest(bid);
        waitFor(bidderRequest && bidderRequest.bidderRequestId || '', addBidResponse.call({
          dispatch: acceptBidResponse
        }, adUnitCode, bid, function () {
          var rejection;
          return function (reason) {
            if (rejection == null) {
              rejection = rejectBidResponse(adUnitCode, bid, reason);
            }
            return rejection;
          };
        }()));
      }
      addBid.reject = rejectBidResponse;
      return addBid;
    }(),
    adapterDone: function adapterDone() {
      guard(this, _adapterDone.bind(this));
    }
  };
}
function doCallbacksIfTimedout(auctionInstance, bidResponse) {
  if (bidResponse.timeToRespond > auctionInstance.getTimeout() + _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('timeoutBuffer')) {
    auctionInstance.executeCallback(true);
  }
}

// Add a bid to the auction.
function addBidToAuction(auctionInstance, bidResponse) {
  setupBidTargeting(bidResponse);
  (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_3__.useMetrics)(bidResponse.metrics).timeSince('addBidResponse', 'addBidResponse.total');
  _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BID_RESPONSE, bidResponse);
  auctionInstance.addBidReceived(bidResponse);
  doCallbacksIfTimedout(auctionInstance, bidResponse);
}

// Video bids may fail if the cache is down, or there's trouble on the network.
function tryAddVideoBid(auctionInstance, bidResponse, afterBidAdded) {
  var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref5$index = _ref5.index,
    index = _ref5$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index : _ref5$index;
  var addBid = true;
  var videoMediaType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"])(index.getMediaTypes({
    requestId: bidResponse.originalRequestId || bidResponse.requestId,
    transactionId: bidResponse.transactionId
  }), 'video');
  var context = videoMediaType && (0,_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"])(videoMediaType, 'context');
  var useCacheKey = videoMediaType && (0,_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"])(videoMediaType, 'useCacheKey');
  if (_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('cache.url') && (useCacheKey || context !== _video_js__WEBPACK_IMPORTED_MODULE_16__.OUTSTREAM)) {
    if (!bidResponse.videoCacheKey || _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('cache.ignoreBidderCacheKey')) {
      addBid = false;
      callPrebidCache(auctionInstance, bidResponse, afterBidAdded, videoMediaType);
    } else if (!bidResponse.vastUrl) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('videoCacheKey specified but not required vastUrl for video bid');
      addBid = false;
    }
  }
  if (addBid) {
    addBidToAuction(auctionInstance, bidResponse);
    afterBidAdded();
  }
}

// Native bid response might be in ortb2 format - adds legacy field for backward compatibility
var addLegacyFieldsIfNeeded = function addLegacyFieldsIfNeeded(bidResponse) {
  var _auctionManager$index, _bidResponse$native;
  var nativeOrtbRequest = (_auctionManager$index = _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index.getAdUnit(bidResponse)) === null || _auctionManager$index === void 0 ? void 0 : _auctionManager$index.nativeOrtbRequest;
  var nativeOrtbResponse = (_bidResponse$native = bidResponse.native) === null || _bidResponse$native === void 0 ? void 0 : _bidResponse$native.ortb;
  if (nativeOrtbRequest && nativeOrtbResponse) {
    var legacyResponse = (0,_native_js__WEBPACK_IMPORTED_MODULE_17__.toLegacyResponse)(nativeOrtbResponse, nativeOrtbRequest);
    Object.assign(bidResponse.native, legacyResponse);
  }
};
var storeInCache = function storeInCache(batch) {
  (0,_videoCache_js__WEBPACK_IMPORTED_MODULE_18__.store)(batch.map(function (entry) {
    return entry.bidResponse;
  }), function (error, cacheIds) {
    cacheIds.forEach(function (cacheId, i) {
      var _batch$i = batch[i],
        auctionInstance = _batch$i.auctionInstance,
        bidResponse = _batch$i.bidResponse,
        afterBidAdded = _batch$i.afterBidAdded;
      if (error) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("Failed to save to the video cache: ".concat(error, ". Video bid must be discarded."));
        doCallbacksIfTimedout(auctionInstance, bidResponse);
      } else {
        if (cacheId.uuid === '') {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.");
          doCallbacksIfTimedout(auctionInstance, bidResponse);
        } else {
          bidResponse.videoCacheKey = cacheId.uuid;
          if (!bidResponse.vastUrl) {
            bidResponse.vastUrl = (0,_videoCache_js__WEBPACK_IMPORTED_MODULE_18__.getCacheUrl)(bidResponse.videoCacheKey);
          }
          addBidToAuction(auctionInstance, bidResponse);
          afterBidAdded();
        }
      }
    });
  });
};
var batchSize, batchTimeout;
_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('cache', function (cacheConfig) {
  batchSize = typeof cacheConfig.cache.batchSize === 'number' && cacheConfig.cache.batchSize > 0 ? cacheConfig.cache.batchSize : 1;
  batchTimeout = typeof cacheConfig.cache.batchTimeout === 'number' && cacheConfig.cache.batchTimeout > 0 ? cacheConfig.cache.batchTimeout : 0;
});
var batchingCache = function batchingCache() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : setTimeout;
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : storeInCache;
  var batches = [[]];
  var debouncing = false;
  var noTimeout = function noTimeout(cb) {
    return cb();
  };
  return function (auctionInstance, bidResponse, afterBidAdded) {
    var batchFunc = batchTimeout > 0 ? timeout : noTimeout;
    if (batches[batches.length - 1].length >= batchSize) {
      batches.push([]);
    }
    batches[batches.length - 1].push({
      auctionInstance: auctionInstance,
      bidResponse: bidResponse,
      afterBidAdded: afterBidAdded
    });
    if (!debouncing) {
      debouncing = true;
      batchFunc(function () {
        batches.forEach(cache);
        batches = [[]];
        debouncing = false;
      }, batchTimeout);
    }
  };
};
var batchAndStore = batchingCache();
var callPrebidCache = (0,_hook_js__WEBPACK_IMPORTED_MODULE_7__.hook)('async', function (auctionInstance, bidResponse, afterBidAdded, videoMediaType) {
  batchAndStore(auctionInstance, bidResponse, afterBidAdded);
}, 'callPrebidCache');

/**
 * Augment `bidResponse` with properties that are common across all bids - including rejected bids.
 *
 */
function addCommonResponseProperties(bidResponse, adUnitCode) {
  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref6$index = _ref6.index,
    index = _ref6$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index : _ref6$index;
  var bidderRequest = index.getBidderRequest(bidResponse);
  var adUnit = index.getAdUnit(bidResponse);
  var start = bidderRequest && bidderRequest.start || bidResponse.requestTimestamp;
  Object.assign(bidResponse, {
    responseTimestamp: bidResponse.responseTimestamp || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.timestamp)(),
    requestTimestamp: bidResponse.requestTimestamp || start,
    cpm: parseFloat(bidResponse.cpm) || 0,
    bidder: bidResponse.bidder || bidResponse.bidderCode,
    adUnitCode: adUnitCode
  });
  if ((adUnit === null || adUnit === void 0 ? void 0 : adUnit.ttlBuffer) != null) {
    bidResponse.ttlBuffer = adUnit.ttlBuffer;
  }
  bidResponse.timeToRespond = bidResponse.responseTimestamp - bidResponse.requestTimestamp;
}

/**
 * Add additional bid response properties that are universal for all _accepted_ bids.
 */
function getPreparedBidForAuction(bid) {
  var _index$getBidRequest;
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref7$index = _ref7.index,
    index = _ref7$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index : _ref7$index;
  // Let listeners know that now is the time to adjust the bid, if they want to.
  //
  // CAREFUL: Publishers rely on certain bid properties to be available (like cpm),
  // but others to not be set yet (like priceStrings). See #1372 and #1389.
  _events_js__WEBPACK_IMPORTED_MODULE_1__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BID_ADJUSTMENT, bid);

  // a publisher-defined renderer can be used to render bids
  var bidRenderer = ((_index$getBidRequest = index.getBidRequest(bid)) === null || _index$getBidRequest === void 0 ? void 0 : _index$getBidRequest.renderer) || index.getAdUnit(bid).renderer;

  // a publisher can also define a renderer for a mediaType
  var bidObjectMediaType = bid.mediaType;
  var mediaTypes = index.getMediaTypes(bid);
  var bidMediaType = mediaTypes && mediaTypes[bidObjectMediaType];
  var mediaTypeRenderer = bidMediaType && bidMediaType.renderer;
  var renderer = null;

  // the renderer for the mediaType takes precendence
  if (mediaTypeRenderer && mediaTypeRenderer.url && mediaTypeRenderer.render && !(mediaTypeRenderer.backupOnly === true && bid.renderer)) {
    renderer = mediaTypeRenderer;
  } else if (bidRenderer && bidRenderer.url && bidRenderer.render && !(bidRenderer.backupOnly === true && bid.renderer)) {
    renderer = bidRenderer;
  }
  if (renderer) {
    // be aware, an adapter could already have installed the bidder, in which case this overwrite's the existing adapter
    bid.renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_19__.Renderer.install({
      url: renderer.url,
      config: renderer.options
    }); // rename options to config, to make it consistent?
    bid.renderer.setRender(renderer.render);
  }

  // Use the config value 'mediaTypeGranularity' if it has been defined for mediaType, else use 'customPriceBucket'
  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, mediaTypes, _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('mediaTypePriceGranularity'));
  var priceStringsObj = (0,_cpmBucketManager_js__WEBPACK_IMPORTED_MODULE_20__.getPriceBucketString)(bid.cpm, (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__["default"])(mediaTypeGranularity) === 'object' ? mediaTypeGranularity : _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('customPriceBucket'), _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('currency.granularityMultiplier'));
  bid.pbLg = priceStringsObj.low;
  bid.pbMg = priceStringsObj.med;
  bid.pbHg = priceStringsObj.high;
  bid.pbAg = priceStringsObj.auto;
  bid.pbDg = priceStringsObj.dense;
  bid.pbCg = priceStringsObj.custom;
  return bid;
}
function setupBidTargeting(bidObject) {
  var keyValues;
  var cpmCheck = _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__.bidderSettings.get(bidObject.bidderCode, 'allowZeroCpmBids') === true ? bidObject.cpm >= 0 : bidObject.cpm > 0;
  if (bidObject.bidderCode && (cpmCheck || bidObject.dealId)) {
    keyValues = getKeyValueTargetingPairs(bidObject.bidderCode, bidObject);
  }

  // use any targeting provided as defaults, otherwise just set from getKeyValueTargetingPairs
  bidObject.adserverTargeting = Object.assign(bidObject.adserverTargeting || {}, keyValues);
}

/**
 * @param {MediaType} mediaType
 * @param mediaTypes media types map from adUnit
 * @param {MediaTypePriceGranularity} [mediaTypePriceGranularity]
 * @returns {(Object|string|undefined)}
 */
function getMediaTypeGranularity(mediaType, mediaTypes, mediaTypePriceGranularity) {
  if (mediaType && mediaTypePriceGranularity) {
    if (mediaType === _mediaTypes_js__WEBPACK_IMPORTED_MODULE_10__.VIDEO) {
      var context = (0,_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"])(mediaTypes, "".concat(_mediaTypes_js__WEBPACK_IMPORTED_MODULE_10__.VIDEO, ".context"), 'instream');
      if (mediaTypePriceGranularity["".concat(_mediaTypes_js__WEBPACK_IMPORTED_MODULE_10__.VIDEO, "-").concat(context)]) {
        return mediaTypePriceGranularity["".concat(_mediaTypes_js__WEBPACK_IMPORTED_MODULE_10__.VIDEO, "-").concat(context)];
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
  var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref8$index = _ref8.index,
    index = _ref8$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index : _ref8$index;
  // Use the config value 'mediaTypeGranularity' if it has been set for mediaType, else use 'priceGranularity'
  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, index.getMediaTypes(bid), _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('mediaTypePriceGranularity'));
  var granularity = typeof bid.mediaType === 'string' && mediaTypeGranularity ? typeof mediaTypeGranularity === 'string' ? mediaTypeGranularity : 'custom' : _config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('priceGranularity');
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
    if (bidGranularity === _constants_json__WEBPACK_IMPORTED_MODULE_2__.GRANULARITY_OPTIONS.AUTO) {
      return bid.pbAg;
    } else if (bidGranularity === _constants_json__WEBPACK_IMPORTED_MODULE_2__.GRANULARITY_OPTIONS.DENSE) {
      return bid.pbDg;
    } else if (bidGranularity === _constants_json__WEBPACK_IMPORTED_MODULE_2__.GRANULARITY_OPTIONS.LOW) {
      return bid.pbLg;
    } else if (bidGranularity === _constants_json__WEBPACK_IMPORTED_MODULE_2__.GRANULARITY_OPTIONS.MEDIUM) {
      return bid.pbMg;
    } else if (bidGranularity === _constants_json__WEBPACK_IMPORTED_MODULE_2__.GRANULARITY_OPTIONS.HIGH) {
      return bid.pbHg;
    } else if (bidGranularity === _constants_json__WEBPACK_IMPORTED_MODULE_2__.GRANULARITY_OPTIONS.CUSTOM) {
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
};

/**
 * This function returns a function to get the primary category id from bid response meta
 * @returns {function}
 */
var getPrimaryCatId = function getPrimaryCatId() {
  return function (bid) {
    return bid.meta && bid.meta.primaryCatId ? bid.meta.primaryCatId : '';
  };
};

// factory for key value objs
function createKeyVal(key, value) {
  return {
    key: key,
    val: typeof value === 'function' ? function (bidResponse, bidReq) {
      return value(bidResponse, bidReq);
    } : function (bidResponse) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getValue)(bidResponse, value);
    }
  };
}
function defaultAdserverTargeting() {
  var TARGETING_KEYS = _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS;
  return [createKeyVal(TARGETING_KEYS.BIDDER, 'bidderCode'), createKeyVal(TARGETING_KEYS.AD_ID, 'adId'), createKeyVal(TARGETING_KEYS.PRICE_BUCKET, getPriceByGranularity()), createKeyVal(TARGETING_KEYS.SIZE, 'size'), createKeyVal(TARGETING_KEYS.DEAL, 'dealId'), createKeyVal(TARGETING_KEYS.SOURCE, 'source'), createKeyVal(TARGETING_KEYS.FORMAT, 'mediaType'), createKeyVal(TARGETING_KEYS.ADOMAIN, getAdvertiserDomain()), createKeyVal(TARGETING_KEYS.ACAT, getPrimaryCatId())];
}

/**
 * @param {string} mediaType
 * @param {string} bidderCode
 * @param {BidRequest} bidReq
 * @returns {*}
 */
function getStandardBidderSettings(mediaType, bidderCode) {
  var TARGETING_KEYS = _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS;
  var standardSettings = Object.assign({}, _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__.bidderSettings.settingsFor(null));
  if (!standardSettings[_constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING]) {
    standardSettings[_constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING] = defaultAdserverTargeting();
  }
  if (mediaType === 'video') {
    var adserverTargeting = standardSettings[_constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING].slice();
    standardSettings[_constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING] = adserverTargeting;

    // Adding hb_uuid + hb_cache_id
    [TARGETING_KEYS.UUID, TARGETING_KEYS.CACHE_ID].forEach(function (targetingKeyVal) {
      if (typeof (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_14__.find)(adserverTargeting, function (kvPair) {
        return kvPair.key === targetingKeyVal;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(targetingKeyVal, 'videoCacheKey'));
      }
    });

    // Adding hb_cache_host
    if (_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('cache.url') && (!bidderCode || _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__.bidderSettings.get(bidderCode, 'sendStandardTargeting') !== false)) {
      var urlInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.parseUrl)(_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('cache.url'));
      if (typeof (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_14__.find)(adserverTargeting, function (targetingKeyVal) {
        return targetingKeyVal.key === TARGETING_KEYS.CACHE_HOST;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(TARGETING_KEYS.CACHE_HOST, function (bidResponse) {
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_15__["default"])(bidResponse, "adserverTargeting.".concat(TARGETING_KEYS.CACHE_HOST)) ? bidResponse.adserverTargeting[TARGETING_KEYS.CACHE_HOST] : urlInfo.hostname;
        }));
      }
    }
  }
  return standardSettings;
}
function getKeyValueTargetingPairs(bidderCode, custBidObj) {
  var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref9$index = _ref9.index,
    index = _ref9$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.index : _ref9$index;
  if (!custBidObj) {
    return {};
  }
  var bidRequest = index.getBidRequest(custBidObj);
  var keyValues = {};

  // 1) set the keys from "standard" setting or from prebid defaults
  // initialize default if not set
  var standardSettings = getStandardBidderSettings(custBidObj.mediaType, bidderCode);
  setKeys(keyValues, standardSettings, custBidObj, bidRequest);

  // 2) set keys from specific bidder setting override if they exist
  if (bidderCode && _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__.bidderSettings.getOwn(bidderCode, _constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING)) {
    setKeys(keyValues, _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__.bidderSettings.ownSettingsFor(bidderCode), custBidObj, bidRequest);
    custBidObj.sendStandardTargeting = _bidderSettings_js__WEBPACK_IMPORTED_MODULE_21__.bidderSettings.get(bidderCode, 'sendStandardTargeting');
  }

  // set native key value targeting
  if ( true && custBidObj['native']) {
    keyValues = Object.assign({}, keyValues, (0,_native_js__WEBPACK_IMPORTED_MODULE_17__.getNativeTargeting)(custBidObj));
  }
  return keyValues;
}
function setKeys(keyValues, bidderSettings, custBidObj, bidReq) {
  var targeting = bidderSettings[_constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING];
  custBidObj.size = custBidObj.getSize();
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__._each)(targeting, function (kvPair) {
    var key = kvPair.key;
    var value = kvPair.val;
    if (keyValues[key]) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)('The key: ' + key + ' is being overwritten');
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isFn)(value)) {
      try {
        value = value(custBidObj, bidReq);
      } catch (e) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('bidmanager', 'ERROR', e);
      }
    }
    if ((typeof bidderSettings.suppressEmptyKeys !== 'undefined' && bidderSettings.suppressEmptyKeys === true || key === _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS.DEAL || key === _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS.ACAT) && (
    // hb_deal & hb_acat are suppressed automatically if not set

    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmptyStr)(value) || value === null || value === undefined)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("suppressing empty key '" + key + "' from adserver targeting");
    } else {
      keyValues[key] = value;
    }
  });
  return keyValues;
}
function adjustBids(bid) {
  var bidPriceAdjusted = (0,_utils_cpm_js__WEBPACK_IMPORTED_MODULE_22__.adjustCpm)(bid.cpm, bid);
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
  }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_4__.flatten, []);
  return timedOutBids;
}

/***/ }),

/***/ "./src/auctionIndex.js":
/*!*****************************!*\
  !*** ./src/auctionIndex.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionIndex": function() { return /* binding */ AuctionIndex; }
/* harmony export */ });
/**
 * Retrieves request-related bid data.
 * All methods are designed to work with Bid (response) objects returned by bid adapters.
 */
function AuctionIndex(getAuctions) {
  Object.assign(this, {
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

/***/ "./src/auctionManager.js":
/*!*******************************!*\
  !*** ./src/auctionManager.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auctionManager": function() { return /* binding */ auctionManager; }
/* harmony export */ });
/* unused harmony export newAuctionManager */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _auction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auction.js */ "./src/auction.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _auctionIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auctionIndex.js */ "./src/auctionIndex.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
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
    var metrics = (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_0__.useMetrics)(bid.metrics);
    metrics.checkpoint('bidWon');
    metrics.timeBetween('auctionEnd', 'bidWon', 'render.pending');
    metrics.timeBetween('requestBids', 'bidWon', 'render.e2e');
    var auction = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.find)(_auctions, function (auction) {
      return auction.getAuctionId() === bid.auctionId;
    });
    if (auction) {
      bid.status = _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.RENDERED;
      auction.addWinningBid(bid);
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logWarn)("Auction not found when adding winning bid");
    }
  };
  auctionManager.getAllWinningBids = function () {
    return _auctions.map(function (auction) {
      return auction.getWinningBids();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []);
  };
  auctionManager.getBidsRequested = function () {
    return _auctions.map(function (auction) {
      return auction.getBidRequests();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []);
  };
  auctionManager.getNoBids = function () {
    return _auctions.map(function (auction) {
      return auction.getNoBids();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []);
  };
  auctionManager.getBidsReceived = function () {
    return _auctions.map(function (auction) {
      if (auction.getAuctionStatus() === _auction_js__WEBPACK_IMPORTED_MODULE_4__.AUCTION_COMPLETED) {
        return auction.getBidsReceived();
      }
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []).filter(function (bid) {
      return bid;
    });
  };
  auctionManager.getAllBidsForAdUnitCode = function (adUnitCode) {
    return _auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []).filter(function (bid) {
      return bid && bid.adUnitCode === adUnitCode;
    });
  };
  auctionManager.getAdUnits = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnits();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []);
  };
  auctionManager.getAdUnitCodes = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnitCodes();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []).filter(_utils_js__WEBPACK_IMPORTED_MODULE_3__.uniques);
  };
  auctionManager.createAuction = function (opts) {
    var auction = (0,_auction_js__WEBPACK_IMPORTED_MODULE_4__.newAuction)(opts);
    _addAuction(auction);
    return auction;
  };
  auctionManager.findBidByAdId = function (adId) {
    return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.find)(_auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_3__.flatten, []), function (bid) {
      return bid.adId === adId;
    });
  };
  auctionManager.getStandardBidderAdServerTargeting = function () {
    return (0,_auction_js__WEBPACK_IMPORTED_MODULE_4__.getStandardBidderSettings)()[_constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING];
  };
  auctionManager.setStatusForBids = function (adId, status) {
    var bid = auctionManager.findBidByAdId(adId);
    if (bid) bid.status = status;
    if (bid && status === _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.BID_TARGETING_SET) {
      var auction = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.find)(_auctions, function (auction) {
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
  auctionManager.index = new _auctionIndex_js__WEBPACK_IMPORTED_MODULE_5__.AuctionIndex(function () {
    return _auctions;
  });
  return auctionManager;
}
var auctionManager = newAuctionManager();

/***/ }),

/***/ "./src/bidderSettings.js":
/*!*******************************!*\
  !*** ./src/bidderSettings.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bidderSettings": function() { return /* binding */ bidderSettings; }
/* harmony export */ });
/* unused harmony export ScopedSettings */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _prebidGlobal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prebidGlobal.js */ "./src/prebidGlobal.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");


function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _resolveScope = /*#__PURE__*/new WeakSet();
var ScopedSettings = /*#__PURE__*/function () {
  function ScopedSettings(getSettings, defaultScope) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScopedSettings);
    _classPrivateMethodInitSpec(this, _resolveScope);
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
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScopedSettings, [{
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
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.getSettings(), "".concat(scope, ".").concat(path));
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
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(scope));
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
  return (0,_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_4__.getGlobal)().bidderSettings || {};
}, _constants_json__WEBPACK_IMPORTED_MODULE_5__.JSON_MAPPING.BD_SETTING_STANDARD);

/***/ }),

/***/ "./src/bidfactory.js":
/*!***************************!*\
  !*** ./src/bidfactory.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBid": function() { return /* binding */ createBid; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


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
  this.adId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getUniqueIdentifierStr)();
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
  };

  // returns the size of the bid creative. Concatenation of width and height by ‘x’.
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
}

// Bid factory function.
function createBid(statusCode, identifiers) {
  return new Bid(statusCode, identifiers);
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RANDOM": function() { return /* binding */ RANDOM; },
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* unused harmony export newConfig */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _cpmBucketManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cpmBucketManager.js */ "./src/cpmBucketManager.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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





var DEFAULT_DEBUG = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)(_constants_json__WEBPACK_IMPORTED_MODULE_2__.DEBUG_MODE).toUpperCase() === 'TRUE';
var DEFAULT_BIDDER_TIMEOUT = 3000;
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
      _publisherDomain: null,
      get publisherDomain() {
        return this._publisherDomain;
      },
      set publisherDomain(val) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('publisherDomain is deprecated and has no effect since v7 - use pageUrl instead');
        this._publisherDomain = val;
      },
      // calls existing function which may be moved after deprecation
      _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,
      set priceGranularity(val) {
        if (validatePriceGranularity(val)) {
          if (typeof val === 'string') {
            this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
          } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val)) {
            this._customPriceBucket = val;
            this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)('Using custom price granularity');
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
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val)) {
              aggregate[item] = val[item];
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Using custom price granularity for ".concat(item));
            }
          } else {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Invalid price granularity for media type: ".concat(item));
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
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Invalid order: ".concat(val, ". Bidder Sequence was not set."));
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
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(Object.keys(GRANULARITY_OPTIONS), function (option) {
        return val === GRANULARITY_OPTIONS[option];
      });
    }
    function validatePriceGranularity(val) {
      if (!val) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Prebid Error: no value passed to `setPriceGranularity()`');
        return false;
      }
      if (typeof val === 'string') {
        if (!hasGranularity(val)) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
        }
      } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val)) {
        if (!(0,_cpmBucketManager_js__WEBPACK_IMPORTED_MODULE_4__.isValidPriceConfig)(val)) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Invalid custom price value passed to `setPriceGranularity()`');
          return false;
        }
      }
      return true;
    }
    function validateauctionOptions(val) {
      if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val)) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Auction Options must be an object');
        return false;
      }
      for (var _i = 0, _Object$keys = Object.keys(val); _i < _Object$keys.length; _i++) {
        var k = _Object$keys[_i];
        if (k !== 'secondaryBidders' && k !== 'suppressStaleRender') {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Auction Options given an incorrect param: ".concat(k));
          return false;
        }
        if (k === 'secondaryBidders') {
          if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(val[k])) {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Auction Options ".concat(k, " must be of type Array"));
            return false;
          } else if (!val[k].every(_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)) {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Auction Options ".concat(k, " must be only string"));
            return false;
          }
        } else if (k === 'suppressStaleRender') {
          if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isBoolean)(val[k])) {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Auction Options ".concat(k, " must be of type boolean"));
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
    if (currBidder && bidderConfig && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(bidderConfig[currBidder])) {
      var currBidderConfig = bidderConfig[currBidder];
      var configTopicSet = new Set(Object.keys(config).concat(Object.keys(currBidderConfig)));
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.arrayFrom)(configTopicSet).reduce(function (memo, topic) {
        if (typeof currBidderConfig[topic] === 'undefined') {
          memo[topic] = config[topic];
        } else if (typeof config[topic] === 'undefined') {
          memo[topic] = currBidderConfig[topic];
        } else {
          if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(currBidderConfig[topic])) {
            memo[topic] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)({}, config[topic], currBidderConfig[topic]);
          } else {
            memo[topic] = currBidderConfig[topic];
          }
        }
        return memo;
      }, {});
    }
    return Object.assign({}, config);
  }
  function _getRestrictedConfig() {
    // This causes reading 'ortb2' to throw an error; with prebid 7, that will almost
    // always be the incorrect way to access FPD configuration (https://github.com/prebid/Prebid.js/issues/7651)
    // code that needs the ortb2 config should explicitly use `getAnyConfig`
    // TODO: this is meant as a temporary tripwire to catch inadvertent use of `getConfig('ortb')` as we transition.
    // It should be removed once the risk of that happening is low enough.
    var conf = _getConfig();
    Object.defineProperty(conf, 'ortb2', {
      get: function get() {
        throw new Error('invalid access to \'orbt2\' config - use request parameters instead');
      }
    });
    return conf;
  }
  var _map = [_getConfig, _getRestrictedConfig].map(function (accessor) {
      /*
       * Returns configuration object if called without parameters,
       * or single configuration property if given a string matching a configuration
       * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
       *
       * If called with callback parameter, or a string and a callback parameter,
       * subscribes to configuration updates. See `subscribe` function for usage.
       */
      return function getConfig() {
        if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
          var option = arguments.length <= 0 ? undefined : arguments[0];
          return option ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__["default"])(accessor(), option) : _getConfig();
        }
        return subscribe.apply(void 0, arguments);
      };
    }),
    _map2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_map, 2),
    getAnyConfig = _map2[0],
    getConfig = _map2[1];
  var _map3 = [getConfig, getAnyConfig].map(function (wrapee) {
      /*
       * Like getConfig, except that it returns a deepClone of the result.
       */
      return function readConfig() {
        var res = wrapee.apply(void 0, arguments);
        if (res && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__["default"])(res) === 'object') {
          res = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.deepClone)(res);
        }
        return res;
      };
    }),
    _map4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_map3, 2),
    readConfig = _map4[0],
    readAnyConfig = _map4[1];

  /**
   * Internal API for modules (such as prebid-server) that might need access to all bidder config
   */
  function getBidderConfig() {
    return bidderConfig;
  }

  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */
  function setConfig(options) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(options)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('setConfig options must be an object');
      return;
    }
    var topics = Object.keys(options);
    var topicalConfig = {};
    topics.forEach(function (topic) {
      var option = options[topic];
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(defaults[topic]) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(option)) {
        option = Object.assign({}, defaults[topic], option);
      }
      try {
        topicalConfig[topic] = config[topic] = option;
      } catch (e) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Cannot set config for property ".concat(topic, " : "), e);
      }
    });
    callSubscribers(topicalConfig);
  }

  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */
  function setDefaults(options) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(defaults)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('defaults must be an object');
      return;
    }
    Object.assign(defaults, options);
    // Add default values to config as well
    Object.assign(config, options);
  }

  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * If `options.init` is true, the listener will be immediately called with the current options.
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
   *
   */
  function subscribe(topic, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = listener;
    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
      options = listener || {};
    }
    if (typeof callback !== 'function') {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('listener must be a function');
      return;
    }
    var nl = {
      topic: topic,
      callback: callback
    };
    listeners.push(nl);
    if (options.init) {
      if (topic === ALL_TOPICS) {
        callback(getConfig());
      } else {
        // eslint-disable-next-line standard/no-callback-literal
        callback((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, topic, getConfig(topic)));
      }
    }

    // save and call this function to remove the listener
    return function unsubscribe() {
      listeners.splice(listeners.indexOf(nl), 1);
    };
  }

  /*
   * Calls listeners that were added by the `subscribe` function
   */
  function callSubscribers(options) {
    var TOPICS = Object.keys(options);

    // call subscribers of a specific topic, passing only that configuration
    listeners.filter(function (listener) {
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(TOPICS, listener.topic);
    }).forEach(function (listener) {
      listener.callback((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, listener.topic, options[listener.topic]));
    });

    // call subscribers that didn't give a topic, passing everything that was set
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
          var option = config.config[topic];
          if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(option)) {
            var func = mergeFlag ? _utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep : Object.assign;
            bidderConfig[bidder][topic] = func({}, bidderConfig[bidder][topic] || {}, option);
          } else {
            bidderConfig[bidder][topic] = option;
          }
        });
      });
    } catch (e) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)(e);
    }
    function check(obj) {
      if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(obj)) {
        throw 'setBidderConfig bidder options must be an object';
      }
      if (!(Array.isArray(obj.bidders) && obj.bidders.length)) {
        throw 'setBidderConfig bidder options must contain a bidders list with at least 1 bidder';
      }
      if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(obj.config)) {
        throw 'setBidderConfig bidder options must contain a config object';
      }
    }
  }
  function mergeConfig(obj) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(obj)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('mergeConfig input must be an object');
      return;
    }
    var mergedConfig = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(_getConfig(), obj);
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
          return runWithBidder(bidder, _utils_js__WEBPACK_IMPORTED_MODULE_1__.bind.call.apply(_utils_js__WEBPACK_IMPORTED_MODULE_1__.bind, [cb, this].concat(args)));
        } else {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('config.callbackWithBidder callback is not a function');
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
    getAnyConfig: getAnyConfig,
    readConfig: readConfig,
    readAnyConfig: readAnyConfig,
    setConfig: setConfig,
    mergeConfig: mergeConfig,
    setDefaults: setDefaults,
    resetConfig: resetConfig,
    runWithBidder: runWithBidder,
    callbackWithBidder: callbackWithBidder,
    setBidderConfig: setBidderConfig,
    getBidderConfig: getBidderConfig,
    mergeBidderConfig: mergeBidderConfig
  };
}
var config = newConfig();

/***/ }),

/***/ "./src/consentHandler.js":
/*!*******************************!*\
  !*** ./src/consentHandler.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GdprConsentHandler": function() { return /* binding */ GdprConsentHandler; },
/* harmony export */   "GppConsentHandler": function() { return /* binding */ GppConsentHandler; },
/* harmony export */   "UspConsentHandler": function() { return /* binding */ UspConsentHandler; },
/* harmony export */   "VENDORLESS_GVLID": function() { return /* binding */ VENDORLESS_GVLID; }
/* harmony export */ });
/* unused harmony export ConsentHandler */
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/promise.js */ "./src/utils/promise.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



/**
 * Placeholder gvlid for when vendor consent is not required. When this value is used as gvlid, the gdpr
 * enforcement module will take it to mean "vendor consent was given".
 *
 * see https://github.com/prebid/Prebid.js/issues/8161
 */
var VENDORLESS_GVLID = Object.freeze({});
var _enabled = /*#__PURE__*/new WeakMap();
var _data = /*#__PURE__*/new WeakMap();
var _defer = /*#__PURE__*/new WeakMap();
var _ready = /*#__PURE__*/new WeakMap();
var _resolve = /*#__PURE__*/new WeakSet();
var ConsentHandler = /*#__PURE__*/function () {
  function ConsentHandler() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ConsentHandler);
    _classPrivateMethodInitSpec(this, _resolve);
    _classPrivateFieldInitSpec(this, _enabled, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _defer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _ready, {
      writable: true,
      value: void 0
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "generatedTime", void 0);
    this.reset();
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ConsentHandler, [{
    key: "reset",
    value:
    /**
     * reset this handler (mainly for tests)
     */
    function reset() {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _defer, (0,_utils_promise_js__WEBPACK_IMPORTED_MODULE_6__.defer)());
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _enabled, false);
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _data, null);
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _ready, false);
      this.generatedTime = null;
    }

    /**
     * Enable this consent handler. This should be called by the relevant consent management module
     * on initialization.
     */
  }, {
    key: "enable",
    value: function enable() {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _enabled, true);
    }

    /**
     * @returns {boolean} true if the related consent management module is enabled.
     */
  }, {
    key: "enabled",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _enabled);
    }

    /**
     * @returns {boolean} true if consent data has been resolved (it may be `null` if the resolution failed).
     */
  }, {
    key: "ready",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _ready);
    }

    /**
     * @returns a promise than resolves to the consent data, or null if no consent data is available
     */
  }, {
    key: "promise",
    get: function get() {
      if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _ready)) {
        return _utils_promise_js__WEBPACK_IMPORTED_MODULE_6__.GreedyPromise.resolve((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _data));
      }
      if (!(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _enabled)) {
        _classPrivateMethodGet(this, _resolve, _resolve2).call(this, null);
      }
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _defer).promise;
    }
  }, {
    key: "setConsentData",
    value: function setConsentData(data) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.timestamp)();
      this.generatedTime = time;
      _classPrivateMethodGet(this, _resolve, _resolve2).call(this, data);
    }
  }, {
    key: "getConsentData",
    value: function getConsentData() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _data);
    }
  }]);
  return ConsentHandler;
}();
function _resolve2(data) {
  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _ready, true);
  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _data, data);
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _defer).resolve(data);
}
var UspConsentHandler = /*#__PURE__*/function (_ConsentHandler) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(UspConsentHandler, _ConsentHandler);
  var _super = _createSuper(UspConsentHandler);
  function UspConsentHandler() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UspConsentHandler);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(UspConsentHandler, [{
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
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(GdprConsentHandler, _ConsentHandler2);
  var _super2 = _createSuper(GdprConsentHandler);
  function GdprConsentHandler() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GdprConsentHandler);
    return _super2.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(GdprConsentHandler, [{
    key: "getConsentMeta",
    value: function getConsentMeta() {
      var consentData = this.getConsentData();
      if (consentData && consentData.vendorData && this.generatedTime) {
        return {
          gdprApplies: consentData.gdprApplies,
          consentStringSize: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.isStr)(consentData.vendorData.tcString) ? consentData.vendorData.tcString.length : 0,
          generatedAt: this.generatedTime,
          apiVersion: consentData.apiVersion
        };
      }
    }
  }]);
  return GdprConsentHandler;
}(ConsentHandler);
var GppConsentHandler = /*#__PURE__*/function (_ConsentHandler3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(GppConsentHandler, _ConsentHandler3);
  var _super3 = _createSuper(GppConsentHandler);
  function GppConsentHandler() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GppConsentHandler);
    return _super3.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(GppConsentHandler, [{
    key: "getConsentMeta",
    value: function getConsentMeta() {
      var consentData = this.getConsentData();
      if (consentData && this.generatedTime) {
        return {
          generatedAt: this.generatedTime
        };
      }
    }
  }]);
  return GppConsentHandler;
}(ConsentHandler);

/***/ }),

/***/ "./src/cpmBucketManager.js":
/*!*********************************!*\
  !*** ./src/cpmBucketManager.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPriceBucketString": function() { return /* binding */ getPriceBucketString; },
/* harmony export */   "isValidPriceConfig": function() { return /* binding */ isValidPriceConfig; }
/* harmony export */ });
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./src/config.js");



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
  var bucket = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_0__.find)(config.buckets, function (bucket) {
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
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(config) || !config.buckets || !Array.isArray(config.buckets)) {
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
  var bucketMin = bucket.min * granularityMultiplier;
  var roundingFunction = Math.floor;
  var customRoundingFunction = _config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('cpmRoundingFunction');
  if (typeof customRoundingFunction === 'function') {
    roundingFunction = customRoundingFunction;
  }

  // start increments at the bucket min and then add bucket min back to arrive at the correct rounding
  // note - we're padding the values to avoid using decimals in the math prior to flooring
  // this is done as JS can return values slightly below the expected mark which would skew the price bucket target
  //   (eg 4.01 / 0.01 = 400.99999999999994)
  // min precison should be 2 to move decimal place over.
  var pow = Math.pow(10, precision + 2);
  var cpmToRound = (cpm * pow - bucketMin * pow) / (increment * pow);
  var cpmTarget;
  var invalidRounding;
  // It is likely that we will be passed {cpmRoundingFunction: roundingFunction()}
  // rather than the expected {cpmRoundingFunction: roundingFunction}. Default back to floor in that case
  try {
    cpmTarget = roundingFunction(cpmToRound) * increment + bucketMin;
  } catch (err) {
    invalidRounding = true;
  }
  if (invalidRounding || typeof cpmTarget !== 'number') {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Invalid rounding function passed in config');
    cpmTarget = Math.floor(cpmToRound) * increment + bucketMin;
  }
  // force to 10 decimal places to deal with imprecise decimal/binary conversions
  //    (for example 0.1 * 3 = 0.30000000000000004)

  cpmTarget = Number(cpmTarget.toFixed(10));
  return cpmTarget.toFixed(precision);
}


/***/ }),

/***/ "./src/debugging.js":
/*!**************************!*\
  !*** ./src/debugging.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSession": function() { return /* binding */ loadSession; }
/* harmony export */ });
/* unused harmony exports DEBUG_KEY, debuggingModuleLoader, debuggingControls, reset */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prebidGlobal.js */ "./src/prebidGlobal.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _bidfactory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bidfactory.js */ "./src/bidfactory.js");
/* harmony import */ var _adloader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adloader.js */ "./src/adloader.js");
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/promise.js */ "./src/utils/promise.js");







var DEBUG_KEY = "__pbjs_debugging__";
function isDebuggingInstalled() {
  return (0,_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__.getGlobal)().installedModules.includes('debugging');
}
function loadScript(url) {
  return new _utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.GreedyPromise(function (resolve) {
    (0,_adloader_js__WEBPACK_IMPORTED_MODULE_2__.loadExternalScript)(url, 'debugging', resolve);
  });
}
function debuggingModuleLoader() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$alreadyInstalled = _ref.alreadyInstalled,
    alreadyInstalled = _ref$alreadyInstalled === void 0 ? isDebuggingInstalled : _ref$alreadyInstalled,
    _ref$script = _ref.script,
    script = _ref$script === void 0 ? loadScript : _ref$script;
  var loading = null;
  return function () {
    if (loading == null) {
      loading = new _utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.GreedyPromise(function (resolve, reject) {
        // run this in a 0-delay timeout to give installedModules time to be populated
        setTimeout(function () {
          if (alreadyInstalled()) {
            resolve();
          } else {
            var url = "/build/dev/debugging-standalone.js";
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logMessage)("Debugging module not installed, loading it from \"".concat(url, "\"..."));
            (0,_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__.getGlobal)()._installDebugging = true;
            script(url).then(function () {
              (0,_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__.getGlobal)()._installDebugging({
                DEBUG_KEY: DEBUG_KEY,
                hook: _hook_js__WEBPACK_IMPORTED_MODULE_4__.hook,
                config: _config_js__WEBPACK_IMPORTED_MODULE_5__.config,
                createBid: _bidfactory_js__WEBPACK_IMPORTED_MODULE_6__.createBid,
                logger: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.prefixLog)('DEBUG:')
              });
            }).then(resolve, reject);
          }
        });
      });
    }
    return loading;
  };
}
function debuggingControls() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$load = _ref2.load,
    load = _ref2$load === void 0 ? debuggingModuleLoader() : _ref2$load,
    _ref2$hook = _ref2.hook,
    hook = _ref2$hook === void 0 ? (0,_hook_js__WEBPACK_IMPORTED_MODULE_4__.getHook)('requestBids') : _ref2$hook;
  var promise = null;
  var enabled = false;
  function waitForDebugging(next) {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return (promise || _utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.GreedyPromise.resolve()).then(function () {
      return next.apply(_this, args);
    });
  }
  function enable() {
    if (!enabled) {
      promise = load();
      // set debugging to high priority so that it has the opportunity to mess with most things
      hook.before(waitForDebugging, 99);
      enabled = true;
    }
  }
  function disable() {
    hook.getHooks({
      hook: waitForDebugging
    }).remove();
    enabled = false;
  }
  function reset() {
    promise = null;
    disable();
  }
  return {
    enable: enable,
    disable: disable,
    reset: reset
  };
}
var ctl = debuggingControls();
var reset = ctl.reset;
function loadSession() {
  var storage = null;
  try {
    storage = window.sessionStorage;
  } catch (e) {}
  if (storage !== null) {
    var debugging = ctl;
    var _config = null;
    try {
      _config = storage.getItem(DEBUG_KEY);
    } catch (e) {}
    if (_config !== null) {
      // just make sure the module runs; it will take care of parsing the config (and disabling itself if necessary)
      debugging.enable();
    }
  }
}
_config_js__WEBPACK_IMPORTED_MODULE_5__.config.getConfig('debugging', function (_ref3) {
  var debugging = _ref3.debugging;
  debugging !== null && debugging !== void 0 && debugging.enabled ? ctl.enable() : ctl.disable();
});

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emit": function() { return /* binding */ emit; },
/* harmony export */   "getEvents": function() { return /* binding */ getEvents; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "on": function() { return /* binding */ on; }
/* harmony export */ });
/* unused harmony exports get, addEvents, clearEvents */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/**
 * events.js
 */


var slice = Array.prototype.slice;
var push = Array.prototype.push;

// define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];
var allEvents = _utils_js__WEBPACK_IMPORTED_MODULE_0__._map(_constants_json__WEBPACK_IMPORTED_MODULE_1__.EVENTS, function (v) {
  return v;
});
var idPaths = _constants_json__WEBPACK_IMPORTED_MODULE_1__.EVENT_ID_PATHS;

// keep a record of all events fired
var eventsFired = [];
var _public = function () {
  var _handlers = {};
  var _public = {};

  /**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */
  function _dispatch(eventString, args) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.logMessage('Emitting event for: ' + eventString);
    var eventPayload = args[0] || {};
    var idPath = idPaths[eventString];
    var key = eventPayload[idPath];
    var event = _handlers[eventString] || {
      que: []
    };
    var eventKeys = _utils_js__WEBPACK_IMPORTED_MODULE_0__._map(event, function (v, k) {
      return k;
    });
    var callbacks = [];

    // record the event:
    eventsFired.push({
      eventType: eventString,
      args: eventPayload,
      id: key,
      elapsedTime: _utils_js__WEBPACK_IMPORTED_MODULE_0__.getPerformanceNow()
    });

    /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */
    if (key && _utils_js__WEBPACK_IMPORTED_MODULE_0__.contains(eventKeys, key)) {
      push.apply(callbacks, event[key].que);
    }

    /** Push each general callback to the `callbacks` array. */
    push.apply(callbacks, event.que);

    /** call each of the callbacks */
    _utils_js__WEBPACK_IMPORTED_MODULE_0__._each(callbacks, function (fn) {
      if (!fn) return;
      try {
        fn.apply(null, args);
      } catch (e) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__.logError('Error executing handler:', 'events.js', e);
      }
    });
  }
  function _checkAvailableEvent(event) {
    return _utils_js__WEBPACK_IMPORTED_MODULE_0__.contains(allEvents, event);
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
      _utils_js__WEBPACK_IMPORTED_MODULE_0__.logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
    }
  };
  _public.emit = function (event) {
    var args = slice.call(arguments, 1);
    _dispatch(event, args);
  };
  _public.off = function (eventString, handler, id) {
    var event = _handlers[eventString];
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty(event) || _utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty(event.que) && _utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty(event[id])) {
      return;
    }
    if (id && (_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty(event[id]) || _utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty(event[id].que))) {
      return;
    }
    if (id) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__._each(event[id].que, function (_handler) {
        var que = event[id].que;
        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    } else {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__._each(event.que, function (_handler) {
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
  _public.addEvents = function (events) {
    allEvents = allEvents.concat(events);
  };

  /**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */
  _public.getEvents = function () {
    var arrayCopy = [];
    _utils_js__WEBPACK_IMPORTED_MODULE_0__._each(eventsFired, function (value) {
      var newProp = Object.assign({}, value);
      arrayCopy.push(newProp);
    });
    return arrayCopy;
  };
  return _public;
}();
_utils_js__WEBPACK_IMPORTED_MODULE_0__._setEventEmitter(_public.emit.bind(_public));
var on = _public.on,
  off = _public.off,
  get = _public.get,
  getEvents = _public.getEvents,
  emit = _public.emit,
  addEvents = _public.addEvents;

function clearEvents() {
  eventsFired.length = 0;
}

/***/ }),

/***/ "./src/fpd/enrichment.js":
/*!*******************************!*\
  !*** ./src/fpd/enrichment.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enrichFPD": function() { return /* binding */ enrichFPD; }
/* harmony export */ });
/* unused harmony export dep */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook.js */ "./src/hook.js");
/* harmony import */ var _refererDetection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../refererDetection.js */ "./src/refererDetection.js");
/* harmony import */ var _rootDomain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootDomain.js */ "./src/fpd/rootDomain.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _libraries_fpd_sua_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libraries/fpd/sua.js */ "./libraries/fpd/sua.js");
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/promise.js */ "./src/utils/promise.js");








var dep = {
  getRefererInfo: _refererDetection_js__WEBPACK_IMPORTED_MODULE_0__.getRefererInfo,
  findRootDomain: _rootDomain_js__WEBPACK_IMPORTED_MODULE_1__.findRootDomain,
  getWindowTop: _utils_js__WEBPACK_IMPORTED_MODULE_2__.getWindowTop,
  getWindowSelf: _utils_js__WEBPACK_IMPORTED_MODULE_2__.getWindowSelf,
  getHighEntropySUA: _libraries_fpd_sua_js__WEBPACK_IMPORTED_MODULE_3__.getHighEntropySUA,
  getLowEntropySUA: _libraries_fpd_sua_js__WEBPACK_IMPORTED_MODULE_3__.getLowEntropySUA
};

/**
 * Enrich an ortb2 object with first party data.
 * @param {Promise[{}]} fpd: a promise to an ortb2 object.
 * @returns: {Promise[{}]}: a promise to an enriched ortb2 object.
 */
var enrichFPD = (0,_hook_js__WEBPACK_IMPORTED_MODULE_4__.hook)('sync', function (fpd) {
  return _utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.all([fpd, getSUA().catch(function () {
    return null;
  })]).then(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, 2),
      ortb2 = _ref2[0],
      sua = _ref2[1];
    Object.entries(ENRICHMENTS).forEach(function (_ref3) {
      var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, 2),
        section = _ref4[0],
        getEnrichments = _ref4[1];
      var data = getEnrichments();
      if (data && Object.keys(data).length > 0) {
        ortb2[section] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, data, ortb2[section]);
      }
    });
    if (sua) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(ortb2, 'device.sua', Object.assign({}, sua, ortb2.device.sua));
    }
    return ortb2;
  });
});
function winFallback(fn) {
  try {
    return fn(dep.getWindowTop());
  } catch (e) {
    return fn(dep.getWindowSelf());
  }
}
function getSUA() {
  var hints = _config_js__WEBPACK_IMPORTED_MODULE_8__.config.getConfig('firstPartyData.uaHints');
  return Array.isArray(hints) && hints.length === 0 ? _utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.resolve(dep.getLowEntropySUA()) : dep.getHighEntropySUA(hints);
}
var ENRICHMENTS = {
  site: function site() {
    var _winFallback, _winFallback$content, _winFallback$content$;
    var ri = dep.getRefererInfo();
    var domain = (0,_refererDetection_js__WEBPACK_IMPORTED_MODULE_0__.parseDomain)(ri.page, {
      noLeadingWww: true
    });
    var keywords = (_winFallback = winFallback(function (win) {
      return win.document.querySelector('meta[name=\'keywords\']');
    })) === null || _winFallback === void 0 ? void 0 : (_winFallback$content = _winFallback.content) === null || _winFallback$content === void 0 ? void 0 : (_winFallback$content$ = _winFallback$content.replace) === null || _winFallback$content$ === void 0 ? void 0 : _winFallback$content$.call(_winFallback$content, /\s/g, '');
    return function (site) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDefinedParams)(site, Object.keys(site));
    }({
      page: ri.page,
      ref: ri.ref,
      domain: domain,
      keywords: keywords,
      publisher: {
        domain: dep.findRootDomain(domain)
      }
    });
  },
  device: function device() {
    return winFallback(function (win) {
      var w = win.innerWidth || win.document.documentElement.clientWidth || win.document.body.clientWidth;
      var h = win.innerHeight || win.document.documentElement.clientHeight || win.document.body.clientHeight;
      return {
        w: w,
        h: h,
        dnt: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDNT)() ? 1 : 0,
        ua: win.navigator.userAgent,
        language: win.navigator.language.split('-').shift()
      };
    });
  },
  regs: function regs() {
    var regs = {};
    if (winFallback(function (win) {
      return win.navigator.globalPrivacyControl;
    })) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(regs, 'ext.gpc', 1);
    }
    var coppa = _config_js__WEBPACK_IMPORTED_MODULE_8__.config.getConfig('coppa');
    if (typeof coppa === 'boolean') {
      regs.coppa = coppa ? 1 : 0;
    }
    return regs;
  }
};

/***/ }),

/***/ "./src/fpd/rootDomain.js":
/*!*******************************!*\
  !*** ./src/fpd/rootDomain.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findRootDomain": function() { return /* binding */ findRootDomain; }
/* harmony export */ });
/* unused harmony export coreStorage */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storageManager.js */ "./src/storageManager.js");


var coreStorage = (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getCoreStorageManager)();

/**
 * Find the root domain by testing for the topmost domain that will allow setting cookies.
 */

var findRootDomain = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.memoize)(function findRootDomain() {
  var fullDomain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.host;
  if (!coreStorage.cookiesAreEnabled()) {
    return fullDomain;
  }
  var domainParts = fullDomain.split('.');
  if (domainParts.length === 2) {
    return fullDomain;
  }
  var rootDomain;
  var continueSearching;
  var startIndex = -2;
  var TEST_COOKIE_NAME = "_rdc".concat(Date.now());
  var TEST_COOKIE_VALUE = 'writeable';
  do {
    rootDomain = domainParts.slice(startIndex).join('.');
    var expirationDate = new Date((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.timestamp)() + 10 * 1000).toUTCString();

    // Write a test cookie
    coreStorage.setCookie(TEST_COOKIE_NAME, TEST_COOKIE_VALUE, expirationDate, 'Lax', rootDomain, undefined);

    // See if the write was successful
    var value = coreStorage.getCookie(TEST_COOKIE_NAME, undefined);
    if (value === TEST_COOKIE_VALUE) {
      continueSearching = false;
      // Delete our test cookie
      coreStorage.setCookie(TEST_COOKIE_NAME, '', 'Thu, 01 Jan 1970 00:00:01 GMT', undefined, rootDomain, undefined);
    } else {
      startIndex += -1;
      continueSearching = Math.abs(startIndex) <= domainParts.length;
    }
  } while (continueSearching);
  return rootDomain;
});

/***/ }),

/***/ "./src/hook.js":
/*!*********************!*\
  !*** ./src/hook.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHook": function() { return /* binding */ getHook; },
/* harmony export */   "hook": function() { return /* binding */ hook; },
/* harmony export */   "module": function() { return /* binding */ module; },
/* harmony export */   "ready": function() { return /* binding */ ready; },
/* harmony export */   "setupBeforeHookFnOnce": function() { return /* binding */ setupBeforeHookFnOnce; },
/* harmony export */   "submodule": function() { return /* binding */ submodule; },
/* harmony export */   "wrapHook": function() { return /* binding */ wrapHook; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun-hooks/no-eval/index.js */ "./node_modules/fun-hooks/no-eval/index.js");
/* harmony import */ var fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/promise.js */ "./src/utils/promise.js");



var hook = fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0___default()({
  ready: (fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0___default().SYNC) | (fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0___default().ASYNC) | (fun_hooks_no_eval_index_js__WEBPACK_IMPORTED_MODULE_0___default().QUEUE)
});
var readyCtl = (0,_utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.defer)();
hook.ready = function () {
  var ready = hook.ready;
  return function () {
    try {
      return ready.apply(hook, arguments);
    } finally {
      readyCtl.resolve();
    }
  };
}();

/**
 * A promise that resolves when hooks are ready.
 * @type {Promise}
 */
var ready = readyCtl.promise;
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
      return install.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(args));
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

/**
 * Copy hook methods (.before, .after, etc) from a given hook to a given wrapper object.
 */
function wrapHook(hook, wrapper) {
  Object.defineProperties(wrapper, Object.fromEntries(['before', 'after', 'getHooks', 'removeAll'].map(function (m) {
    return [m, {
      get: function get() {
        return hook[m];
      }
    }];
  })));
  return wrapper;
}

/***/ }),

/***/ "./src/mediaTypes.js":
/*!***************************!*\
  !*** ./src/mediaTypes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADPOD": function() { return /* binding */ ADPOD; },
/* harmony export */   "BANNER": function() { return /* binding */ BANNER; },
/* harmony export */   "NATIVE": function() { return /* binding */ NATIVE; },
/* harmony export */   "VIDEO": function() { return /* binding */ VIDEO; }
/* harmony export */ });
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

/***/ "./src/native.js":
/*!***********************!*\
  !*** ./src/native.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NATIVE_TARGETING_KEYS": function() { return /* binding */ NATIVE_TARGETING_KEYS; },
/* harmony export */   "convertOrtbRequestToProprietaryNative": function() { return /* binding */ convertOrtbRequestToProprietaryNative; },
/* harmony export */   "decorateAdUnitsWithNativeParams": function() { return /* binding */ decorateAdUnitsWithNativeParams; },
/* harmony export */   "fireNativeTrackers": function() { return /* binding */ fireNativeTrackers; },
/* harmony export */   "getAllAssetsMessage": function() { return /* binding */ getAllAssetsMessage; },
/* harmony export */   "getAssetMessage": function() { return /* binding */ getAssetMessage; },
/* harmony export */   "getNativeTargeting": function() { return /* binding */ getNativeTargeting; },
/* harmony export */   "nativeAdapters": function() { return /* binding */ nativeAdapters; },
/* harmony export */   "nativeBidIsValid": function() { return /* binding */ nativeBidIsValid; },
/* harmony export */   "toLegacyResponse": function() { return /* binding */ toLegacyResponse; }
/* harmony export */ });
/* unused harmony exports IMAGE, processNativeAdUnitParams, isOpenRTBBidRequestValid, nativeAdUnit, nativeBidder, hasNonNativeBidder, isNativeOpenRTBBidValid, fireImpressionTrackers, fireClickTrackers, toOrtbNativeRequest, fromOrtbNativeRequest, legacyPropertiesToOrtbNative, toOrtbNativeResponse */
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mediaTypes.js */ "./src/mediaTypes.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var nativeAdapters = [];
var NATIVE_TARGETING_KEYS = Object.keys(_constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS).map(function (key) {
  return _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS[key];
});
var IMAGE = {
  ortb: {
    ver: '1.2',
    assets: [{
      required: 1,
      id: 1,
      img: {
        type: 3,
        wmin: 100,
        hmin: 100
      }
    }, {
      required: 1,
      id: 2,
      title: {
        len: 140
      }
    }, {
      required: 1,
      id: 3,
      data: {
        type: 1
      }
    }, {
      required: 0,
      id: 4,
      data: {
        type: 2
      }
    }, {
      required: 0,
      id: 5,
      img: {
        type: 1,
        wmin: 20,
        hmin: 20
      }
    }]
  },
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
var NATIVE_ASSET_TYPES = _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_ASSET_TYPES,
  NATIVE_IMAGE_TYPES = _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_IMAGE_TYPES,
  PREBID_NATIVE_DATA_KEYS_TO_ORTB = _constants_json__WEBPACK_IMPORTED_MODULE_1__.PREBID_NATIVE_DATA_KEYS_TO_ORTB,
  NATIVE_KEYS_THAT_ARE_NOT_ASSETS = _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS_THAT_ARE_NOT_ASSETS,
  NATIVE_KEYS = _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS;

// inverse native maps useful for converting to legacy
var PREBID_NATIVE_DATA_KEYS_TO_ORTB_INVERSE = inverse(PREBID_NATIVE_DATA_KEYS_TO_ORTB);
var NATIVE_ASSET_TYPES_INVERSE = inverse(NATIVE_ASSET_TYPES);
var TRACKER_METHODS = {
  img: 1,
  js: 2,
  1: 'img',
  2: 'js'
};
var TRACKER_EVENTS = {
  impression: 1,
  'viewable-mrc50': 2,
  'viewable-mrc100': 3,
  'viewable-video50': 4
};

/**
 * Recieves nativeParams from an adUnit. If the params were not of type 'type',
 * passes them on directly. If they were of type 'type', translate
 * them into the predefined specific asset requests for that type of native ad.
 */
function processNativeAdUnitParams(params) {
  if (params && params.type && typeIsSupported(params.type)) {
    params = SUPPORTED_TYPES[params.type];
  }
  if (params && params.ortb && !isOpenRTBBidRequestValid(params.ortb)) {
    return;
  }
  return params;
}
function decorateAdUnitsWithNativeParams(adUnits) {
  adUnits.forEach(function (adUnit) {
    var nativeParams = adUnit.nativeParams || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, 'mediaTypes.native');
    if (nativeParams) {
      adUnit.nativeParams = processNativeAdUnitParams(nativeParams);
    }
    if (adUnit.nativeParams) {
      adUnit.nativeOrtbRequest = adUnit.nativeParams.ortb || toOrtbNativeRequest(adUnit.nativeParams);
    }
  });
}
function isOpenRTBBidRequestValid(ortb) {
  var assets = ortb.assets;
  if (!Array.isArray(assets) || assets.length === 0) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ", assets);
    return false;
  }

  // validate that ids exist, that they are unique and that they are numbers
  var ids = assets.map(function (asset) {
    return asset.id;
  });
  if (assets.length !== new Set(ids).size || ids.some(function (id) {
    return id !== parseInt(id, 10);
  })) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("each asset object must have 'id' property, it must be unique and it must be an integer");
    return false;
  }
  if (ortb.hasOwnProperty('eventtrackers') && !Array.isArray(ortb.eventtrackers)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)('ortb.eventtrackers is not an array. Eventtrackers: ', ortb.eventtrackers);
    return false;
  }
  return assets.every(function (asset) {
    return isOpenRTBAssetValid(asset);
  });
}
function isOpenRTBAssetValid(asset) {
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(asset)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("asset must be an object. Provided asset: ", asset);
    return false;
  }
  if (asset.img) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.img.w) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.img.wmin)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("for img asset there must be 'w' or 'wmin' property");
      return false;
    }
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.img.h) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.img.hmin)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("for img asset there must be 'h' or 'hmin' property");
      return false;
    }
  } else if (asset.title) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.title.len)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("for title asset there must be 'len' property defined");
      return false;
    }
  } else if (asset.data) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.data.type)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("for data asset 'type' property must be a number");
      return false;
    }
  } else if (asset.video) {
    if (!Array.isArray(asset.video.mimes) || !Array.isArray(asset.video.protocols) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.video.minduration) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(asset.video.maxduration)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)('video asset is not properly configured');
      return false;
    }
  }
  return true;
}

/**
 * Check if the native type specified in the adUnit is supported by Prebid.
 */
function typeIsSupported(type) {
  if (!(type && (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(Object.keys(SUPPORTED_TYPES), type))) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("".concat(type, " nativeParam is not supported"));
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
  var mediaTypes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, 'mediaTypes.native');
  return mediaType || mediaTypes;
};
var nativeBidder = function nativeBidder(bid) {
  return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(nativeAdapters, bid.bidder);
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
  var _bid$native;
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$index = _ref.index,
    index = _ref$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.index : _ref$index;
  var adUnit = index.getAdUnit(bid);
  if (!adUnit) {
    return false;
  }
  var ortbRequest = adUnit.nativeOrtbRequest;
  var ortbResponse = ((_bid$native = bid.native) === null || _bid$native === void 0 ? void 0 : _bid$native.ortb) || toOrtbNativeResponse(bid.native, ortbRequest);
  return isNativeOpenRTBBidValid(ortbResponse, ortbRequest);
}
function isNativeOpenRTBBidValid(bidORTB, bidRequestORTB) {
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(bidORTB, 'link.url')) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("native response doesn't have 'link' property. Ortb response: ", bidORTB);
    return false;
  }
  var requiredAssetIds = bidRequestORTB.assets.filter(function (asset) {
    return asset.required === 1;
  }).map(function (a) {
    return a.id;
  });
  var returnedAssetIds = bidORTB.assets.map(function (asset) {
    return asset.id;
  });
  var match = requiredAssetIds.every(function (assetId) {
    return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(returnedAssetIds, assetId);
  });
  if (!match) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("didn't receive a bid with all required assets. Required ids: ".concat(requiredAssetIds, ", but received ids in response: ").concat(returnedAssetIds));
  }
  return match;
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
function fireNativeTrackers(message, bidResponse) {
  var nativeResponse = bidResponse.native.ortb || legacyPropertiesToOrtbNative(bidResponse.native);
  if (message.action === 'click') {
    fireClickTrackers(nativeResponse, message === null || message === void 0 ? void 0 : message.assetId);
  } else {
    fireImpressionTrackers(nativeResponse);
  }
  return message.action;
}
function fireImpressionTrackers(nativeResponse) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$runMarkup = _ref2.runMarkup,
    runMarkup = _ref2$runMarkup === void 0 ? function (mkup) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.insertHtmlIntoIframe)(mkup);
    } : _ref2$runMarkup,
    _ref2$fetchURL = _ref2.fetchURL,
    fetchURL = _ref2$fetchURL === void 0 ? _utils_js__WEBPACK_IMPORTED_MODULE_3__.triggerPixel : _ref2$fetchURL;
  var impTrackers = (nativeResponse.eventtrackers || []).filter(function (tracker) {
    return tracker.event === TRACKER_EVENTS.impression;
  });
  var _impTrackers$reduce = impTrackers.reduce(function (tally, tracker) {
      if (TRACKER_METHODS.hasOwnProperty(tracker.method)) {
        tally[TRACKER_METHODS[tracker.method]].push(tracker.url);
      }
      return tally;
    }, {
      img: [],
      js: []
    }),
    img = _impTrackers$reduce.img,
    js = _impTrackers$reduce.js;
  if (nativeResponse.imptrackers) {
    img = img.concat(nativeResponse.imptrackers);
  }
  img.forEach(function (url) {
    return fetchURL(url);
  });
  js = js.map(function (url) {
    return "<script async src=\"".concat(url, "\"></script>");
  });
  if (nativeResponse.jstracker) {
    // jstracker is already HTML markup
    js = js.concat([nativeResponse.jstracker]);
  }
  if (js.length) {
    runMarkup(js.join('\n'));
  }
}
function fireClickTrackers(nativeResponse) {
  var assetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$fetchURL = _ref3.fetchURL,
    fetchURL = _ref3$fetchURL === void 0 ? _utils_js__WEBPACK_IMPORTED_MODULE_3__.triggerPixel : _ref3$fetchURL;
  // legacy click tracker
  if (!assetId) {
    var _nativeResponse$link;
    (((_nativeResponse$link = nativeResponse.link) === null || _nativeResponse$link === void 0 ? void 0 : _nativeResponse$link.clicktrackers) || []).forEach(function (url) {
      return fetchURL(url);
    });
  } else {
    var _nativeResponse$link2;
    // ortb click tracker. This will try to call the clicktracker associated with the asset;
    // will fallback to the link if none is found.
    var assetIdLinkMap = (nativeResponse.assets || []).filter(function (a) {
      return a.link;
    }).reduce(function (map, asset) {
      map[asset.id] = asset.link;
      return map;
    }, {});
    var masterClickTrackers = ((_nativeResponse$link2 = nativeResponse.link) === null || _nativeResponse$link2 === void 0 ? void 0 : _nativeResponse$link2.clicktrackers) || [];
    var assetLink = assetIdLinkMap[assetId];
    var clickTrackers = masterClickTrackers;
    if (assetLink) {
      clickTrackers = assetLink.clicktrackers || [];
    }
    clickTrackers.forEach(function (url) {
      return fetchURL(url);
    });
  }
}

/**
 * Gets native targeting key-value pairs
 * @param {Object} bid
 * @return {Object} targeting
 */
function getNativeTargeting(bid) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref4$index = _ref4.index,
    index = _ref4$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.index : _ref4$index;
  var keyValues = {};
  var adUnit = index.getAdUnit(bid);
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, 'nativeParams.rendererUrl')) {
    bid['native']['rendererUrl'] = getAssetValue(adUnit.nativeParams['rendererUrl']);
  } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, 'nativeParams.adTemplate')) {
    bid['native']['adTemplate'] = getAssetValue(adUnit.nativeParams['adTemplate']);
  }
  var globalSendTargetingKeys = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, "nativeParams.sendTargetingKeys") !== false;
  var nativeKeys = getNativeKeys(adUnit);
  var flatBidNativeKeys = _objectSpread(_objectSpread({}, bid.native), bid.native.ext);
  delete flatBidNativeKeys.ext;
  Object.keys(flatBidNativeKeys).forEach(function (asset) {
    var key = nativeKeys[asset];
    var value = getAssetValue(bid.native[asset]) || getAssetValue((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(bid, "native.ext.".concat(asset)));
    if (asset === 'adTemplate' || !key || !value) {
      return;
    }
    var sendPlaceholder = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, "nativeParams.".concat(asset, ".sendId"));
    if (typeof sendPlaceholder !== 'boolean') {
      sendPlaceholder = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, "nativeParams.ext.".concat(asset, ".sendId"));
    }
    if (sendPlaceholder) {
      var placeholder = "".concat(key, ":").concat(bid.adId);
      value = placeholder;
    }
    var assetSendTargetingKeys = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, "nativeParams.".concat(asset, ".sendTargetingKeys"));
    if (typeof assetSendTargetingKeys !== 'boolean') {
      assetSendTargetingKeys = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, "nativeParams.ext.".concat(asset, ".sendTargetingKeys"));
    }
    var sendTargeting = typeof assetSendTargetingKeys === 'boolean' ? assetSendTargetingKeys : globalSendTargetingKeys;
    if (sendTargeting) {
      keyValues[key] = value;
    }
  });
  return keyValues;
}
function assetsMessage(data, adObject, keys) {
  var _adUnit$mediaTypes, _adUnit$mediaTypes$na;
  var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref5$index = _ref5.index,
    index = _ref5$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.index : _ref5$index;
  var message = {
    message: 'assetResponse',
    adId: data.adId
  };
  var adUnit = index.getAdUnit(adObject);
  var nativeResp = adObject.native;
  if (adObject.native.ortb) {
    message.ortb = adObject.native.ortb;
  } else if ((_adUnit$mediaTypes = adUnit.mediaTypes) !== null && _adUnit$mediaTypes !== void 0 && (_adUnit$mediaTypes$na = _adUnit$mediaTypes.native) !== null && _adUnit$mediaTypes$na !== void 0 && _adUnit$mediaTypes$na.ortb) {
    message.ortb = toOrtbNativeResponse(adObject.native, adUnit.nativeOrtbRequest);
  }
  message.assets = [];
  (keys == null ? Object.keys(nativeResp) : keys).forEach(function (key) {
    if (key === 'adTemplate' && nativeResp[key]) {
      message.adTemplate = getAssetValue(nativeResp[key]);
    } else if (key === 'rendererUrl' && nativeResp[key]) {
      message.rendererUrl = getAssetValue(nativeResp[key]);
    } else if (key === 'ext') {
      Object.keys(nativeResp[key]).forEach(function (extKey) {
        if (nativeResp[key][extKey]) {
          var value = getAssetValue(nativeResp[key][extKey]);
          message.assets.push({
            key: extKey,
            value: value
          });
        }
      });
    } else if (nativeResp[key] && _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS.hasOwnProperty(key)) {
      var value = getAssetValue(nativeResp[key]);
      message.assets.push({
        key: key,
        value: value
      });
    }
  });
  return message;
}

/**
 * Constructs a message object containing asset values for each of the
 * requested data keys.
 */
function getAssetMessage(data, adObject) {
  var keys = data.assets.map(function (k) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getKeyByValue)(_constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS, k);
  });
  return assetsMessage(data, adObject, keys);
}
function getAllAssetsMessage(data, adObject) {
  return assetsMessage(data, adObject, null);
}

/**
 * Native assets can be a string or an object with a url prop. Returns the value
 * appropriate for sending in adserver targeting or placeholder replacement.
 */
function getAssetValue(value) {
  return (value === null || value === void 0 ? void 0 : value.url) || value;
}
function getNativeKeys(adUnit) {
  var extraNativeKeys = {};
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(adUnit, 'nativeParams.ext')) {
    Object.keys(adUnit.nativeParams.ext).forEach(function (extKey) {
      extraNativeKeys[extKey] = "hb_native_".concat(extKey);
    });
  }
  return _objectSpread(_objectSpread({}, _constants_json__WEBPACK_IMPORTED_MODULE_1__.NATIVE_KEYS), extraNativeKeys);
}

/**
 * converts Prebid legacy native assets request to OpenRTB format
 * @param {object} legacyNativeAssets an object that describes a native bid request in Prebid proprietary format
 * @returns an OpenRTB format of the same bid request
 */
function toOrtbNativeRequest(legacyNativeAssets) {
  if (!legacyNativeAssets && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(legacyNativeAssets)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)('Native assets object is empty or not an object: ', legacyNativeAssets);
    return;
  }
  var ortb = {
    ver: '1.2',
    assets: []
  };
  for (var key in legacyNativeAssets) {
    // skip conversion for non-asset keys
    if (NATIVE_KEYS_THAT_ARE_NOT_ASSETS.includes(key)) continue;
    if (!NATIVE_KEYS.hasOwnProperty(key)) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("Unrecognized native asset code: ".concat(key, ". Asset will be ignored."));
      continue;
    }
    var asset = legacyNativeAssets[key];
    var required = 0;
    if (asset.required && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isBoolean)(asset.required)) {
      required = Number(asset.required);
    }
    var ortbAsset = {
      id: ortb.assets.length,
      required: required
    };
    // data cases
    if (key in PREBID_NATIVE_DATA_KEYS_TO_ORTB) {
      ortbAsset.data = {
        type: NATIVE_ASSET_TYPES[PREBID_NATIVE_DATA_KEYS_TO_ORTB[key]]
      };
      if (asset.len) {
        ortbAsset.data.len = asset.len;
      }
      // icon or image case
    } else if (key === 'icon' || key === 'image') {
      ortbAsset.img = {
        type: key === 'icon' ? NATIVE_IMAGE_TYPES.ICON : NATIVE_IMAGE_TYPES.MAIN
      };
      // if min_width and min_height are defined in aspect_ratio, they are preferred
      if (asset.aspect_ratios) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(asset.aspect_ratios)) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("image.aspect_ratios was passed, but it's not a an array:", asset.aspect_ratios);
        } else if (!asset.aspect_ratios.length) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)("image.aspect_ratios was passed, but it's empty:", asset.aspect_ratios);
        } else {
          var _asset$aspect_ratios$ = asset.aspect_ratios[0],
            minWidth = _asset$aspect_ratios$.min_width,
            minHeight = _asset$aspect_ratios$.min_height;
          if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isInteger)(minWidth) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isInteger)(minHeight)) {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)('image.aspect_ratios min_width or min_height are invalid: ', minWidth, minHeight);
          } else {
            ortbAsset.img.wmin = minWidth;
            ortbAsset.img.hmin = minHeight;
          }
          var aspectRatios = asset.aspect_ratios.filter(function (ar) {
            return ar.ratio_width && ar.ratio_height;
          }).map(function (ratio) {
            return "".concat(ratio.ratio_width, ":").concat(ratio.ratio_height);
          });
          if (aspectRatios.length > 0) {
            ortbAsset.img.ext = {
              aspectratios: aspectRatios
            };
          }
        }
      }

      // if asset.sizes exist, by OpenRTB spec we should remove wmin and hmin
      if (asset.sizes) {
        if (asset.sizes.length !== 2 || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isInteger)(asset.sizes[0]) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isInteger)(asset.sizes[1])) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.logError)('image.sizes was passed, but its value is not an array of integers:', asset.sizes);
        } else {
          ortbAsset.img.w = asset.sizes[0];
          ortbAsset.img.h = asset.sizes[1];
          delete ortbAsset.img.hmin;
          delete ortbAsset.img.wmin;
        }
      }
      // title case
    } else if (key === 'title') {
      ortbAsset.title = {
        // in openRTB, len is required for titles, while in legacy prebid was not.
        // for this reason, if len is missing in legacy prebid, we're adding a default value of 140.
        len: asset.len || 140
      };
      // all extensions to the native bid request are passed as is
    } else if (key === 'ext') {
      ortbAsset.ext = asset;
      // in `ext` case, required field is not needed
      delete ortbAsset.required;
    }
    ortb.assets.push(ortbAsset);
  }
  return ortb;
}

/**
 * This function converts an OpenRTB native request object to Prebid proprietary
 * format. The purpose of this function is to help adapters to handle the
 * transition phase where publishers may be using OpenRTB objects but the
 *  bidder does not yet support it.
 * @param {object} openRTBRequest an OpenRTB v1.2 request object
 * @returns a Prebid legacy native format request
 */
function fromOrtbNativeRequest(openRTBRequest) {
  if (!isOpenRTBBidRequestValid(openRTBRequest)) {
    return;
  }
  var oldNativeObject = {};
  var _iterator = _createForOfIteratorHelper(openRTBRequest.assets),
    _step;
  try {
    var _loop = function _loop() {
      var asset = _step.value;
      if (asset.title) {
        var title = {
          required: asset.required ? Boolean(asset.required) : false,
          len: asset.title.len
        };
        oldNativeObject.title = title;
      } else if (asset.img) {
        var image = {
          required: asset.required ? Boolean(asset.required) : false
        };
        if (asset.img.w && asset.img.h) {
          image.sizes = [asset.img.w, asset.img.h];
        } else if (asset.img.wmin && asset.img.hmin) {
          image.aspect_ratios = {
            min_width: asset.img.wmin,
            min_height: asset.img.hmin,
            ratio_width: asset.img.wmin,
            ratio_height: asset.img.hmin
          };
        }
        if (asset.img.type === NATIVE_IMAGE_TYPES.MAIN) {
          oldNativeObject.image = image;
        } else {
          oldNativeObject.icon = image;
        }
      } else if (asset.data) {
        var assetType = Object.keys(NATIVE_ASSET_TYPES).find(function (k) {
          return NATIVE_ASSET_TYPES[k] === asset.data.type;
        });
        var prebidAssetName = Object.keys(PREBID_NATIVE_DATA_KEYS_TO_ORTB).find(function (k) {
          return PREBID_NATIVE_DATA_KEYS_TO_ORTB[k] === assetType;
        });
        oldNativeObject[prebidAssetName] = {
          required: asset.required ? Boolean(asset.required) : false
        };
        if (asset.data.len) {
          oldNativeObject[prebidAssetName].len = asset.data.len;
        }
      }
      // video was not supported by old prebid assets
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return oldNativeObject;
}

/**
 * Converts an OpenRTB request to a proprietary Prebid.js format.
 * The proprietary Prebid format has many limitations and will be dropped in
 * the future; adapters are encouraged to stop using it in favour of OpenRTB format.
 * IMPLEMENTATION DETAILS: This function returns the same exact object if no
 * conversion is needed. If a conversion is needed (meaning, at least one
 * bidRequest contains a native.ortb definition), it will return a copy.
 *
 * @param {BidRequest[]} bidRequests an array of valid bid requests
 * @returns an array of valid bid requests where the openRTB bids are converted to proprietary format.
 */
function convertOrtbRequestToProprietaryNative(bidRequests) {
  if (true) {
    if (!bidRequests || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(bidRequests)) return bidRequests;
    // check if a conversion is needed
    if (!bidRequests.some(function (bidRequest) {
      var _NATIVE;
      return (_NATIVE = ((bidRequest === null || bidRequest === void 0 ? void 0 : bidRequest.mediaTypes) || {})[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE]) === null || _NATIVE === void 0 ? void 0 : _NATIVE.ortb;
    })) {
      return bidRequests;
    }
    var bidRequestsCopy = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.deepClone)(bidRequests);
    // convert Native ORTB definition to old-style prebid native definition
    var _iterator2 = _createForOfIteratorHelper(bidRequestsCopy),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var bidRequest = _step2.value;
        if (bidRequest.mediaTypes && bidRequest.mediaTypes[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE] && bidRequest.mediaTypes[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE].ortb) {
          bidRequest.mediaTypes[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE] = Object.assign((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.pick)(bidRequest.mediaTypes[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE], NATIVE_KEYS_THAT_ARE_NOT_ASSETS), fromOrtbNativeRequest(bidRequest.mediaTypes[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE].ortb));
          bidRequest.nativeParams = processNativeAdUnitParams(bidRequest.mediaTypes[_mediaTypes_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE]);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return bidRequestsCopy;
  }
  return bidRequests;
}

/**
 * convert PBJS proprietary native properties that are *not* assets to the ORTB native format.
 *
 * @param legacyNative `bidResponse.native` object as returned by adapters
 */
function legacyPropertiesToOrtbNative(legacyNative) {
  var response = {
    link: {},
    eventtrackers: []
  };
  Object.entries(legacyNative).forEach(function (_ref6) {
    var _ref7 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref6, 2),
      key = _ref7[0],
      value = _ref7[1];
    switch (key) {
      case 'clickUrl':
        response.link.url = value;
        break;
      case 'clickTrackers':
        response.link.clicktrackers = Array.isArray(value) ? value : [value];
        break;
      case 'impressionTrackers':
        (Array.isArray(value) ? value : [value]).forEach(function (url) {
          response.eventtrackers.push({
            event: TRACKER_EVENTS.impression,
            method: TRACKER_METHODS.img,
            url: url
          });
        });
        break;
      case 'javascriptTrackers':
        // jstracker is deprecated, but we need to use it here since 'javascriptTrackers' is markup, not an url
        // TODO: at the time of writing this, core expected javascriptTrackers to be a string (despite the name),
        // but many adapters are passing an array. It's possible that some of them are, in fact, passing URLs and not markup
        // in general, native trackers seem to be neglected and/or broken
        response.jstracker = Array.isArray(value) ? value.join('') : value;
        break;
    }
  });
  return response;
}
function toOrtbNativeResponse(legacyResponse, ortbRequest) {
  var ortbResponse = _objectSpread(_objectSpread({}, legacyPropertiesToOrtbNative(legacyResponse)), {}, {
    assets: []
  });
  function useRequestAsset(predicate, fn) {
    var asset = ortbRequest.assets.find(predicate);
    if (asset != null) {
      asset = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.deepClone)(asset);
      fn(asset);
      ortbResponse.assets.push(asset);
    }
  }
  Object.keys(legacyResponse).filter(function (key) {
    return !!legacyResponse[key];
  }).forEach(function (key) {
    var value = getAssetValue(legacyResponse[key]);
    switch (key) {
      // process titles
      case 'title':
        useRequestAsset(function (asset) {
          return asset.title != null;
        }, function (titleAsset) {
          titleAsset.title = {
            text: value
          };
        });
        break;
      case 'image':
      case 'icon':
        var imageType = key === 'image' ? NATIVE_IMAGE_TYPES.MAIN : NATIVE_IMAGE_TYPES.ICON;
        useRequestAsset(function (asset) {
          return asset.img != null && asset.img.type === imageType;
        }, function (imageAsset) {
          imageAsset.img = {
            url: value
          };
        });
        break;
      default:
        if (key in PREBID_NATIVE_DATA_KEYS_TO_ORTB) {
          useRequestAsset(function (asset) {
            return asset.data != null && asset.data.type === NATIVE_ASSET_TYPES[PREBID_NATIVE_DATA_KEYS_TO_ORTB[key]];
          }, function (dataAsset) {
            dataAsset.data = {
              value: value
            };
          });
        }
        break;
    }
  });
  return ortbResponse;
}

/**
 * Generates a legacy response from an ortb response. Useful during the transition period.
 * @param {*} ortbResponse a standard ortb response object
 * @param {*} ortbRequest the ortb request, useful to match ids.
 * @returns an object containing the response in legacy native format: { title: "this is a title", image: ... }
 */
function toLegacyResponse(ortbResponse, ortbRequest) {
  var legacyResponse = {};
  var requestAssets = (ortbRequest === null || ortbRequest === void 0 ? void 0 : ortbRequest.assets) || [];
  legacyResponse.clickUrl = ortbResponse.link.url;
  legacyResponse.privacyLink = ortbResponse.privacy;
  var _iterator3 = _createForOfIteratorHelper((ortbResponse === null || ortbResponse === void 0 ? void 0 : ortbResponse.assets) || []),
    _step3;
  try {
    var _loop2 = function _loop2() {
      var asset = _step3.value;
      var requestAsset = requestAssets.find(function (reqAsset) {
        return asset.id === reqAsset.id;
      });
      if (asset.title) {
        legacyResponse.title = asset.title.text;
      } else if (asset.img) {
        legacyResponse[requestAsset.img.type === NATIVE_IMAGE_TYPES.MAIN ? 'image' : 'icon'] = asset.img.url;
      } else if (asset.data) {
        legacyResponse[PREBID_NATIVE_DATA_KEYS_TO_ORTB_INVERSE[NATIVE_ASSET_TYPES_INVERSE[requestAsset.data.type]]] = asset.data.value;
      }
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }

    // Handle trackers
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  legacyResponse.impressionTrackers = [];
  var jsTrackers = [];
  if (ortbRequest !== null && ortbRequest !== void 0 && ortbRequest.imptrackers) {
    var _legacyResponse$impre;
    (_legacyResponse$impre = legacyResponse.impressionTrackers).push.apply(_legacyResponse$impre, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(ortbRequest.imptrackers));
  }
  var _iterator4 = _createForOfIteratorHelper((ortbResponse === null || ortbResponse === void 0 ? void 0 : ortbResponse.eventtrackers) || []),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var eventTracker = _step4.value;
      if (eventTracker.event === TRACKER_EVENTS.impression && eventTracker.method === TRACKER_METHODS.img) {
        legacyResponse.impressionTrackers.push(eventTracker.url);
      }
      if (eventTracker.event === TRACKER_EVENTS.impression && eventTracker.method === TRACKER_METHODS.js) {
        jsTrackers.push(eventTracker.url);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  jsTrackers = jsTrackers.map(function (url) {
    return "<script async src=\"".concat(url, "\"></script>");
  });
  if (ortbResponse !== null && ortbResponse !== void 0 && ortbResponse.jstracker) {
    jsTrackers.push(ortbResponse.jstracker);
  }
  if (jsTrackers.length) {
    legacyResponse.javascriptTrackers = jsTrackers.join('\n');
  }
  return legacyResponse;
}

/**
 * Inverts key-values of an object.
 */
function inverse(obj) {
  var retobj = {};
  for (var key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}

/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayFrom": function() { return /* binding */ arrayFrom; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "includes": function() { return /* binding */ includes; }
/* harmony export */ });
/* unused harmony export findIndex */
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

/***/ "./src/prebid.js":
/*!***********************!*\
  !*** ./src/prebid.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAdUnitSetup": function() { return /* binding */ checkAdUnitSetup; }
/* harmony export */ });
/* unused harmony exports adUnitSetupChecks, startAuction, executeCallbacks */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prebidGlobal.js */ "./src/prebidGlobal.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _secureCreatives_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./secureCreatives.js */ "./src/secureCreatives.js");
/* harmony import */ var _userSync_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSync.js */ "./src/userSync.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _targeting_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./targeting.js */ "./src/targeting.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _debugging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugging.js */ "./src/debugging.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _adUnits_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./adUnits.js */ "./src/adUnits.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _bidfactory_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bidfactory.js */ "./src/bidfactory.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _adRendering_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adRendering.js */ "./src/adRendering.js");
/* harmony import */ var _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/promise.js */ "./src/utils/promise.js");
/* harmony import */ var _fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fpd/enrichment.js */ "./src/fpd/enrichment.js");


/** @module pbjs */






















var pbjs = (0,_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__.getGlobal)();
var triggerUserSyncs = _userSync_js__WEBPACK_IMPORTED_MODULE_1__.userSync.triggerUserSyncs;

/* private variables */
var _CONSTANTS$EVENTS = _constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS,
  ADD_AD_UNITS = _CONSTANTS$EVENTS.ADD_AD_UNITS,
  BID_WON = _CONSTANTS$EVENTS.BID_WON,
  REQUEST_BIDS = _CONSTANTS$EVENTS.REQUEST_BIDS,
  SET_TARGETING = _CONSTANTS$EVENTS.SET_TARGETING,
  STALE_RENDER = _CONSTANTS$EVENTS.STALE_RENDER;
var _CONSTANTS$AD_RENDER_ = _constants_json__WEBPACK_IMPORTED_MODULE_2__.AD_RENDER_FAILED_REASON,
  PREVENT_WRITING_ON_MAIN_DOCUMENT = _CONSTANTS$AD_RENDER_.PREVENT_WRITING_ON_MAIN_DOCUMENT,
  NO_AD = _CONSTANTS$AD_RENDER_.NO_AD,
  EXCEPTION = _CONSTANTS$AD_RENDER_.EXCEPTION,
  CANNOT_FIND_AD = _CONSTANTS$AD_RENDER_.CANNOT_FIND_AD,
  MISSING_DOC_OR_ADID = _CONSTANTS$AD_RENDER_.MISSING_DOC_OR_ADID;
var eventValidators = {
  bidWon: checkDefinedPlacement
};

// initialize existing debugging sessions if present
(0,_debugging_js__WEBPACK_IMPORTED_MODULE_3__.loadSession)();

/* Public vars */
pbjs.bidderSettings = pbjs.bidderSettings || {};

// let the world know we are loaded
pbjs.libLoaded = true;

// version auto generated from build
pbjs.version = "v7.42.0-pre";
(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Prebid.js v7.42.0-pre loaded");
pbjs.installedModules = pbjs.installedModules || [];

// create adUnit array
pbjs.adUnits = pbjs.adUnits || [];

// Allow publishers who enable user sync override to trigger their sync
pbjs.triggerUserSyncs = triggerUserSyncs;
function checkDefinedPlacement(id) {
  var adUnitCodes = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getBidsRequested().map(function (bidSet) {
    return bidSet.bids.map(function (bid) {
      return bid.adUnitCode;
    });
  }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_4__.flatten).filter(_utils_js__WEBPACK_IMPORTED_MODULE_4__.uniques);
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.contains)(adUnitCodes, id)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('The "' + id + '" placement is not defined.');
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
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(sizes) && (targLength ? sizes.length === targLength : sizes.length > 0)) {
    // check if an array of arrays or array of numbers
    if (sizes.every(function (sz) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArrayOfNums)(sz, 2);
    })) {
      cleanSizes = sizes;
    } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArrayOfNums)(sizes, 2)) {
      cleanSizes.push(sizes);
    }
  }
  return cleanSizes;
}
function validateBannerMediaType(adUnit) {
  var validatedAdUnit = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.deepClone)(adUnit);
  var banner = validatedAdUnit.mediaTypes.banner;
  var bannerSizes = validateSizes(banner.sizes);
  if (bannerSizes.length > 0) {
    banner.sizes = bannerSizes;
    // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.banner.sizes
    validatedAdUnit.sizes = bannerSizes;
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.');
    delete validatedAdUnit.mediaTypes.banner;
  }
  return validatedAdUnit;
}
function validateVideoMediaType(adUnit) {
  var validatedAdUnit = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.deepClone)(adUnit);
  var video = validatedAdUnit.mediaTypes.video;
  if (video.playerSize) {
    var tarPlayerSizeLen = typeof video.playerSize[0] === 'number' ? 2 : 1;
    var videoSizes = validateSizes(video.playerSize, tarPlayerSizeLen);
    if (videoSizes.length > 0) {
      if (tarPlayerSizeLen === 2) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.');
      }
      video.playerSize = videoSizes;
      // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.video.playerSize
      validatedAdUnit.sizes = videoSizes;
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.');
      delete validatedAdUnit.mediaTypes.video.playerSize;
    }
  }
  return validatedAdUnit;
}
function validateNativeMediaType(adUnit) {
  var validatedAdUnit = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.deepClone)(adUnit);
  var native = validatedAdUnit.mediaTypes.native;
  // if native assets are specified in OpenRTB format, remove legacy assets and print a warn.
  if (native.ortb) {
    var legacyNativeKeys = Object.keys(_constants_json__WEBPACK_IMPORTED_MODULE_2__.NATIVE_KEYS).filter(function (key) {
      return _constants_json__WEBPACK_IMPORTED_MODULE_2__.NATIVE_KEYS[key].includes('hb_native_');
    });
    var nativeKeys = Object.keys(native);
    var intersection = nativeKeys.filter(function (nativeKey) {
      return legacyNativeKeys.includes(nativeKey);
    });
    if (intersection.length > 0) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(intersection, " keys from request."));
      intersection.forEach(function (legacyKey) {
        return delete validatedAdUnit.mediaTypes.native[legacyKey];
      });
    }
  }
  if (native.image && native.image.sizes && !Array.isArray(native.image.sizes)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.');
    delete validatedAdUnit.mediaTypes.native.image.sizes;
  }
  if (native.image && native.image.aspect_ratios && !Array.isArray(native.image.aspect_ratios)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.');
    delete validatedAdUnit.mediaTypes.native.image.aspect_ratios;
  }
  if (native.icon && native.icon.sizes && !Array.isArray(native.icon.sizes)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.');
    delete validatedAdUnit.mediaTypes.native.icon.sizes;
  }
  return validatedAdUnit;
}
function validateAdUnitPos(adUnit, mediaType) {
  var pos = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(adUnit, "mediaTypes.".concat(mediaType, ".pos"));
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isNumber)(pos) || isNaN(pos) || !isFinite(pos)) {
    var warning = "Value of property 'pos' on ad unit ".concat(adUnit.code, " should be of type: Number");
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)(warning);
    _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.AUCTION_DEBUG, {
      type: 'WARNING',
      arguments: warning
    });
    delete adUnit.mediaTypes[mediaType].pos;
  }
  return adUnit;
}
function validateAdUnit(adUnit) {
  var msg = function msg(_msg) {
    return "adUnit.code '".concat(adUnit.code, "' ").concat(_msg);
  };
  var mediaTypes = adUnit.mediaTypes;
  var bids = adUnit.bids;
  if (bids != null && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(bids)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)(msg("defines 'adUnit.bids' that is not an array. Removing adUnit from auction"));
    return null;
  }
  if (bids == null && adUnit.ortb2Imp == null) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)(msg("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"));
    return null;
  }
  if (!mediaTypes || Object.keys(mediaTypes).length === 0) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)(msg("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed."));
    return null;
  }
  if (adUnit.ortb2Imp != null && (bids == null || bids.length === 0)) {
    adUnit.bids = [{
      bidder: null
    }]; // the 'null' bidder is treated as an s2s-only placeholder by adapterManager
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logMessage)(msg("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"));
  }
  return adUnit;
}
var adUnitSetupChecks = {
  validateAdUnit: validateAdUnit,
  validateBannerMediaType: validateBannerMediaType,
  validateVideoMediaType: validateVideoMediaType,
  validateSizes: validateSizes
};
if (true) {
  Object.assign(adUnitSetupChecks, {
    validateNativeMediaType: validateNativeMediaType
  });
}
var checkAdUnitSetup = (0,_hook_js__WEBPACK_IMPORTED_MODULE_8__.hook)('sync', function (adUnits) {
  var validatedAdUnits = [];
  adUnits.forEach(function (adUnit) {
    adUnit = validateAdUnit(adUnit);
    if (adUnit == null) return;
    var mediaTypes = adUnit.mediaTypes;
    var validatedBanner, validatedVideo, validatedNative;
    if (mediaTypes.banner) {
      validatedBanner = validateBannerMediaType(adUnit);
      if (mediaTypes.banner.hasOwnProperty('pos')) validatedBanner = validateAdUnitPos(validatedBanner, 'banner');
    }
    if (mediaTypes.video) {
      validatedVideo = validatedBanner ? validateVideoMediaType(validatedBanner) : validateVideoMediaType(adUnit);
      if (mediaTypes.video.hasOwnProperty('pos')) validatedVideo = validateAdUnitPos(validatedVideo, 'video');
    }
    if ( true && mediaTypes.native) {
      validatedNative = validatedVideo ? validateNativeMediaType(validatedVideo) : validatedBanner ? validateNativeMediaType(validatedBanner) : validateNativeMediaType(adUnit);
    }
    var validatedAdUnit = Object.assign({}, validatedBanner, validatedVideo, validatedNative);
    validatedAdUnits.push(validatedAdUnit);
  });
  return validatedAdUnits;
}, 'checkAdUnitSetup');

/// ///////////////////////////////
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments);

  // call to retrieve bids array
  if (adunitCode) {
    var res = pbjs.getAdserverTargetingForAdUnitCode(adunitCode);
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.transformAdServerTargetingObj)(res);
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logMessage)('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
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
    var bid = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getAllBidsForAdUnitCode(adunitCode).filter(_targeting_js__WEBPACK_IMPORTED_MODULE_9__.isBidUsable);
    return bid.length ? bid.reduce(_utils_js__WEBPACK_IMPORTED_MODULE_4__.getHighestCpm) : {};
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logMessage)('Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode');
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.getAdserverTargeting", arguments);
  return _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.getAllTargeting(adUnitCode);
};

/**
 * returns all consent data
 * @return {Object} Map of consent types and data
 * @alias module:pbjs.getConsentData
 */
function getConsentMetadata() {
  return {
    gdpr: _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__.gdprDataHandler.getConsentMeta(),
    usp: _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__.uspDataHandler.getConsentMeta(),
    gpp: _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__.gppDataHandler.getConsentMeta(),
    coppa: !!_config_js__WEBPACK_IMPORTED_MODULE_11__.config.getConfig('coppa')
  };
}
pbjs.getConsentMetadata = function () {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.getConsentMetadata");
  return getConsentMetadata();
};
function getBids(type) {
  var responses = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager[type]().filter(_utils_js__WEBPACK_IMPORTED_MODULE_4__.bind.call(_utils_js__WEBPACK_IMPORTED_MODULE_4__.adUnitsFilter, this, _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getAdUnitCodes()));

  // find the last auction id to get responses for most recent auction only
  var currentAuctionId = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getLastAuctionId();
  return responses.map(function (bid) {
    return bid.adUnitCode;
  }).filter(_utils_js__WEBPACK_IMPORTED_MODULE_4__.uniques).map(function (adUnitCode) {
    return responses.filter(function (bid) {
      return bid.auctionId === currentAuctionId && bid.adUnitCode === adUnitCode;
    });
  }).filter(function (bids) {
    return bids && bids[0] && bids[0].adUnitCode;
  }).map(function (bids) {
    return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])({}, bids[0].adUnitCode, {
      bids: bids
    });
  }).reduce(function (a, b) {
    return Object.assign(a, b);
  }, {});
}

/**
 * This function returns the bids requests involved in an auction but not bid on
 * @alias module:pbjs.getNoBids
 * @return {Object}            map | object that contains the bidRequests
 */

pbjs.getNoBids = function () {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.getNoBids", arguments);
  return getBids('getNoBids');
};

/**
 * This function returns the bids requests involved in an auction but not bid on or the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getNoBidsForAdUnitCode
 * @return {Object}           bidResponse object
 */

pbjs.getNoBidsForAdUnitCode = function (adUnitCode) {
  var bids = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getNoBids().filter(function (bid) {
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.getBidResponses", arguments);
  return getBids('getBidsReceived');
};

/**
 * Returns bidResponses for the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getBidResponsesForAdUnitCode
 * @return {Object}            bidResponse object
 */

pbjs.getBidResponsesForAdUnitCode = function (adUnitCode) {
  var bids = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getBidsReceived().filter(function (bid) {
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments);
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isGptPubadsDefined)()) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('window.googletag is not defined on the page');
    return;
  }

  // get our ad unit codes
  var targetingSet = _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.getAllTargeting(adUnit);

  // first reset any old targeting
  _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.resetPresetTargeting(adUnit, customSlotMatching);

  // now set new targeting keys
  _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.setTargetingForGPT(targetingSet, customSlotMatching);
  Object.keys(targetingSet).forEach(function (adUnitCode) {
    Object.keys(targetingSet[adUnitCode]).forEach(function (targetingKey) {
      if (targetingKey === 'hb_adid') {
        _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.setStatusForBids(targetingSet[adUnitCode][targetingKey], _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.BID_TARGETING_SET);
      }
    });
  });

  // emit event
  _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(SET_TARGETING, targetingSet);
};

/**
 * Set query string targeting on all AST (AppNexus Seller Tag) ad units. Note that this function has to be called after all ad units on page are defined. For working example code, see [Using Prebid.js with AppNexus Publisher Ad Server](http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html).
 * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
 * @alias module:pbjs.setTargetingForAst
 */
pbjs.setTargetingForAst = function (adUnitCodes) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.setTargetingForAn", arguments);
  if (!_targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.isApntagDefined()) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('window.apntag is not defined on the page');
    return;
  }
  _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.setTargetingForAst(adUnitCodes);

  // emit event
  _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(SET_TARGETING, _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.getAllTargeting());
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
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.insertElement)(node, doc, tagName);
  }
}

/**
 * This function will render the ad (based on params) in the given iframe document passed through.
 * Note that doc SHOULD NOT be the parent document page as we can't doc.write() asynchronously
 * @param  {Document} doc document
 * @param  {string} id bid id to locate the ad
 * @alias module:pbjs.renderAd
 */
pbjs.renderAd = (0,_hook_js__WEBPACK_IMPORTED_MODULE_8__.hook)('async', function (doc, id, options) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.renderAd", arguments);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logMessage)('Calling renderAd with adId :' + id);
  if (!id) {
    var message = "Error trying to write ad Id :".concat(id, " to the page. Missing adId");
    (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderFail)({
      reason: MISSING_DOC_OR_ADID,
      message: message,
      id: id
    });
    return;
  }
  try {
    // lookup ad by ad Id
    var bid = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.findBidByAdId(id);
    if (!bid) {
      var _message = "Error trying to write ad. Cannot find ad by given id : ".concat(id);
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderFail)({
        reason: CANNOT_FIND_AD,
        message: _message,
        id: id
      });
      return;
    }
    if (bid.status === _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.RENDERED) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("Ad id ".concat(bid.adId, " has been rendered before"));
      _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(STALE_RENDER, bid);
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_11__.config.getConfig('auctionOptions'), 'suppressStaleRender')) {
        return;
      }
    }

    // replace macros according to openRTB with price paid = bid.cpm
    bid.ad = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.replaceAuctionPrice)(bid.ad, bid.originalCpm || bid.cpm);
    bid.adUrl = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.replaceAuctionPrice)(bid.adUrl, bid.originalCpm || bid.cpm);
    // replacing clickthrough if submitted
    if (options && options.clickThrough) {
      var clickThrough = options.clickThrough;
      bid.ad = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.replaceClickThrough)(bid.ad, clickThrough);
      bid.adUrl = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.replaceClickThrough)(bid.adUrl, clickThrough);
    }

    // save winning bids
    _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.addWinningBid(bid);

    // emit 'bid won' event here
    _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(BID_WON, bid);
    var height = bid.height,
      width = bid.width,
      ad = bid.ad,
      mediaType = bid.mediaType,
      adUrl = bid.adUrl,
      renderer = bid.renderer;

    // video module
    var adUnitCode = bid.adUnitCode;
    var adUnit = pbjs.adUnits.filter(function (adUnit) {
      return adUnit.code === adUnitCode;
    });
    var videoModule = pbjs.videoModule;
    if (adUnit.video && videoModule) {
      videoModule.renderBid(adUnit.video.divId, bid);
      return;
    }
    if (!doc) {
      var _message2 = "Error trying to write ad Id :".concat(id, " to the page. Missing document");
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderFail)({
        reason: MISSING_DOC_OR_ADID,
        message: _message2,
        id: id
      });
      return;
    }
    var creativeComment = document.createComment("Creative ".concat(bid.creativeId, " served by ").concat(bid.bidder, " Prebid.js Header Bidding"));
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.insertElement)(creativeComment, doc, 'html');
    if ((0,_Renderer_js__WEBPACK_IMPORTED_MODULE_14__.isRendererRequired)(renderer)) {
      (0,_Renderer_js__WEBPACK_IMPORTED_MODULE_14__.executeRenderer)(renderer, bid, doc);
      reinjectNodeIfRemoved(creativeComment, doc, 'html');
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderSucceeded)({
        doc: doc,
        bid: bid,
        id: id
      });
    } else if (doc === document && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.inIframe)() || mediaType === 'video') {
      var _message3 = "Error trying to write ad. Ad render call ad id ".concat(id, " was prevented from writing to the main document.");
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderFail)({
        reason: PREVENT_WRITING_ON_MAIN_DOCUMENT,
        message: _message3,
        bid: bid,
        id: id
      });
    } else if (ad) {
      doc.write(ad);
      doc.close();
      setRenderSize(doc, width, height);
      reinjectNodeIfRemoved(creativeComment, doc, 'html');
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.callBurl)(bid);
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderSucceeded)({
        doc: doc,
        bid: bid,
        id: id
      });
    } else if (adUrl) {
      var iframe = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.createInvisibleIframe)();
      iframe.height = height;
      iframe.width = width;
      iframe.style.display = 'inline';
      iframe.style.overflow = 'hidden';
      iframe.src = adUrl;
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.insertElement)(iframe, doc, 'body');
      setRenderSize(doc, width, height);
      reinjectNodeIfRemoved(creativeComment, doc, 'html');
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.callBurl)(bid);
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderSucceeded)({
        doc: doc,
        bid: bid,
        id: id
      });
    } else {
      var _message4 = "Error trying to write ad. No ad for bid response id: ".concat(id);
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderFail)({
        reason: NO_AD,
        message: _message4,
        bid: bid,
        id: id
      });
    }
  } catch (e) {
    var _message5 = "Error trying to write ad Id :".concat(id, " to the page:").concat(e.message);
    (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_13__.emitAdRenderFail)({
      reason: EXCEPTION,
      message: _message5,
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.removeAdUnit", arguments);
  if (!adUnitCode) {
    pbjs.adUnits = [];
    return;
  }
  var adUnitCodes;
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(adUnitCode)) {
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
pbjs.requestBids = function () {
  var delegate = (0,_hook_js__WEBPACK_IMPORTED_MODULE_8__.hook)('async', function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      bidsBackHandler = _ref2.bidsBackHandler,
      timeout = _ref2.timeout,
      adUnits = _ref2.adUnits,
      adUnitCodes = _ref2.adUnitCodes,
      labels = _ref2.labels,
      auctionId = _ref2.auctionId,
      ttlBuffer = _ref2.ttlBuffer,
      ortb2 = _ref2.ortb2,
      metrics = _ref2.metrics,
      defer = _ref2.defer;
    _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(REQUEST_BIDS);
    var cbTimeout = timeout || _config_js__WEBPACK_IMPORTED_MODULE_11__.config.getConfig('bidderTimeout');
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.requestBids", arguments);
    if (adUnitCodes && adUnitCodes.length) {
      // if specific adUnitCodes supplied filter adUnits for those codes
      adUnits = adUnits.filter(function (unit) {
        return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_15__.includes)(adUnitCodes, unit.code);
      });
    } else {
      // otherwise derive adUnitCodes from adUnits
      adUnitCodes = adUnits && adUnits.map(function (unit) {
        return unit.code;
      });
    }
    var ortb2Fragments = {
      global: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.mergeDeep)({}, _config_js__WEBPACK_IMPORTED_MODULE_11__.config.getAnyConfig('ortb2') || {}, ortb2 || {}),
      bidder: Object.fromEntries(Object.entries(_config_js__WEBPACK_IMPORTED_MODULE_11__.config.getBidderConfig()).map(function (_ref3) {
        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref3, 2),
          bidder = _ref4[0],
          cfg = _ref4[1];
        return [bidder, cfg.ortb2];
      }).filter(function (_ref5) {
        var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref5, 2),
          _ = _ref6[0],
          ortb2 = _ref6[1];
        return ortb2 != null;
      }))
    };
    return (0,_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_17__.enrichFPD)(_utils_promise_js__WEBPACK_IMPORTED_MODULE_18__.GreedyPromise.resolve(ortb2Fragments.global)).then(function (global) {
      ortb2Fragments.global = global;
      return startAuction({
        bidsBackHandler: bidsBackHandler,
        timeout: cbTimeout,
        adUnits: adUnits,
        adUnitCodes: adUnitCodes,
        labels: labels,
        auctionId: auctionId,
        ttlBuffer: ttlBuffer,
        ortb2Fragments: ortb2Fragments,
        metrics: metrics,
        defer: defer
      });
    });
  }, 'requestBids');
  return (0,_hook_js__WEBPACK_IMPORTED_MODULE_8__.wrapHook)(delegate, function requestBids() {
    var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // unlike the main body of `delegate`, this runs before any other hook has a chance to;
    // it's also not restricted in its return value in the way `async` hooks are.

    // if the request does not specify adUnits, clone the global adUnit array;
    // otherwise, if the caller goes on to use addAdUnits/removeAdUnits, any asynchronous logic
    // in any hook might see their effects.
    var adUnits = req.adUnits || pbjs.adUnits;
    req.adUnits = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(adUnits) ? adUnits.slice() : [adUnits];
    req.metrics = (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_19__.newMetrics)();
    req.metrics.checkpoint('requestBids');
    req.defer = (0,_utils_promise_js__WEBPACK_IMPORTED_MODULE_18__.defer)({
      promiseFactory: function promiseFactory(r) {
        return new Promise(r);
      }
    });
    delegate.call(this, req);
    return req.defer.promise;
  });
}();
var startAuction = (0,_hook_js__WEBPACK_IMPORTED_MODULE_8__.hook)('async', function () {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    bidsBackHandler = _ref7.bidsBackHandler,
    cbTimeout = _ref7.timeout,
    adUnits = _ref7.adUnits,
    ttlBuffer = _ref7.ttlBuffer,
    adUnitCodes = _ref7.adUnitCodes,
    labels = _ref7.labels,
    auctionId = _ref7.auctionId,
    ortb2Fragments = _ref7.ortb2Fragments,
    metrics = _ref7.metrics,
    defer = _ref7.defer;
  var s2sBidders = (0,_adapterManager_js__WEBPACK_IMPORTED_MODULE_10__.getS2SBidderSet)(_config_js__WEBPACK_IMPORTED_MODULE_11__.config.getConfig('s2sConfig') || []);
  adUnits = (0,_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_19__.useMetrics)(metrics).measureTime('requestBids.validate', function () {
    return checkAdUnitSetup(adUnits);
  });
  function auctionDone(bids, timedOut, auctionId) {
    if (typeof bidsBackHandler === 'function') {
      try {
        bidsBackHandler(bids, timedOut, auctionId);
      } catch (e) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Error executing bidsBackHandler', null, e);
      }
    }
    defer.resolve({
      bids: bids,
      timedOut: timedOut,
      auctionId: auctionId
    });
  }

  /*
   * for a given adunit which supports a set of mediaTypes
   * and a given bidder which supports a set of mediaTypes
   * a bidder is eligible to participate on the adunit
   * if it supports at least one of the mediaTypes on the adunit
   */
  adUnits.forEach(function (adUnit) {
    var _adUnit$ortb2Imp, _adUnit$ortb2Imp$ext;
    // get the adunit's mediaTypes, defaulting to banner if mediaTypes isn't present
    var adUnitMediaTypes = Object.keys(adUnit.mediaTypes || {
      'banner': 'banner'
    });

    // get the bidder's mediaTypes
    var allBidders = adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
    var bidderRegistry = _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].bidderRegistry;
    var bidders = allBidders.filter(function (bidder) {
      return !s2sBidders.has(bidder);
    });
    var tid = ((_adUnit$ortb2Imp = adUnit.ortb2Imp) === null || _adUnit$ortb2Imp === void 0 ? void 0 : (_adUnit$ortb2Imp$ext = _adUnit$ortb2Imp.ext) === null || _adUnit$ortb2Imp$ext === void 0 ? void 0 : _adUnit$ortb2Imp$ext.tid) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)();
    adUnit.transactionId = tid;
    if (ttlBuffer != null && !adUnit.hasOwnProperty('ttlBuffer')) {
      adUnit.ttlBuffer = ttlBuffer;
    }
    // Populate ortb2Imp.ext.tid with transactionId. Specifying a transaction ID per item in the ortb impression array, lets multiple transaction IDs be transmitted in a single bid request.
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_20__.dset)(adUnit, 'ortb2Imp.ext.tid', tid);
    bidders.forEach(function (bidder) {
      var adapter = bidderRegistry[bidder];
      var spec = adapter && adapter.getSpec && adapter.getSpec();
      // banner is default if not specified in spec
      var bidderMediaTypes = spec && spec.supportedMediaTypes || ['banner'];

      // check if the bidder's mediaTypes are not in the adUnit's mediaTypes
      var bidderEligible = adUnitMediaTypes.some(function (type) {
        return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_15__.includes)(bidderMediaTypes, type);
      });
      if (!bidderEligible) {
        // drop the bidder from the ad unit if it's not compatible
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.unsupportedBidderMessage)(adUnit, bidder));
        adUnit.bids = adUnit.bids.filter(function (bid) {
          return bid.bidder !== bidder;
        });
      } else {
        _adUnits_js__WEBPACK_IMPORTED_MODULE_21__.adunitCounter.incrementBidderRequestsCounter(adUnit.code, bidder);
      }
    });
    _adUnits_js__WEBPACK_IMPORTED_MODULE_21__.adunitCounter.incrementRequestsCounter(adUnit.code);
  });
  if (!adUnits || adUnits.length === 0) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logMessage)('No adUnits configured. No bids requested.');
    auctionDone();
  } else {
    var auction = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.createAuction({
      adUnits: adUnits,
      adUnitCodes: adUnitCodes,
      callback: auctionDone,
      cbTimeout: cbTimeout,
      labels: labels,
      auctionId: auctionId,
      ortb2Fragments: ortb2Fragments,
      metrics: metrics
    });
    var adUnitsLen = adUnits.length;
    if (adUnitsLen > 15) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Current auction ".concat(auction.getAuctionId(), " contains ").concat(adUnitsLen, " adUnits."), adUnits);
    }
    adUnitCodes.forEach(function (code) {
      return _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.setLatestAuctionForAdUnit(code, auction.getAuctionId());
    });
    auction.callBids();
  }
}, 'startAuction');
function executeCallbacks(fn, reqBidsConfigObj) {
  runAll(_storageManager_js__WEBPACK_IMPORTED_MODULE_22__.storageCallbacks);
  runAll(enableAnalyticsCallbacks);
  fn.call(this, reqBidsConfigObj);
  function runAll(queue) {
    var queued;
    while (queued = queue.shift()) {
      queued();
    }
  }
}

// This hook will execute all storage callbacks which were registered before gdpr enforcement hook was added. Some bidders, user id modules use storage functions when module is parsed but gdpr enforcement hook is not added at that stage as setConfig callbacks are yet to be called. Hence for such calls we execute all the stored callbacks just before requestBids. At this hook point we will know for sure that gdprEnforcement module is added or not
pbjs.requestBids.before(executeCallbacks, 49);

/**
 *
 * Add adunit(s)
 * @param {Array|Object} adUnitArr Array of adUnits or single adUnit Object.
 * @alias module:pbjs.addAdUnits
 */
pbjs.addAdUnits = function (adUnitArr) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.addAdUnits", arguments);
  pbjs.adUnits.push.apply(pbjs.adUnits, (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(adUnitArr) ? adUnitArr : [adUnitArr]);
  // emit event
  _events_js__WEBPACK_IMPORTED_MODULE_7__.emit(ADD_AD_UNITS);
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.onEvent", arguments);
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isFn)(handler)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('The event handler provided is not a function and was not set on event "' + event + '".');
    return;
  }
  if (id && !eventValidators[event].call(null, id)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('The id provided is not valid for event "' + event + '" and no handler was set.');
    return;
  }
  _events_js__WEBPACK_IMPORTED_MODULE_7__.on(event, handler, id);
};

/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to remove from the event
 * @param {string} id an identifier in the context of the event (see `$$PREBID_GLOBAL$$.onEvent`)
 * @alias module:pbjs.offEvent
 */
pbjs.offEvent = function (event, handler, id) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.offEvent", arguments);
  if (id && !eventValidators[event].call(null, id)) {
    return;
  }
  _events_js__WEBPACK_IMPORTED_MODULE_7__.off(event, handler, id);
};

/**
 * Return a copy of all events emitted
 *
 * @alias module:pbjs.getEvents
 */
pbjs.getEvents = function () {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.getEvents");
  return _events_js__WEBPACK_IMPORTED_MODULE_7__.getEvents();
};

/*
 * Wrapper to register bidderAdapter externally (adapterManager.registerBidAdapter())
 * @param  {Function} bidderAdaptor [description]
 * @param  {string} bidderCode [description]
 * @alias module:pbjs.registerBidAdapter
 */
pbjs.registerBidAdapter = function (bidderAdaptor, bidderCode) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
  try {
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].registerBidAdapter(bidderAdaptor(), bidderCode);
  } catch (e) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Error registering bidder adapter : ' + e.message);
  }
};

/**
 * Wrapper to register analyticsAdapter externally (adapterManager.registerAnalyticsAdapter())
 * @param  {Object} options [description]
 * @alias module:pbjs.registerAnalyticsAdapter
 */
pbjs.registerAnalyticsAdapter = function (options) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
  try {
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].registerAnalyticsAdapter(options);
  } catch (e) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Error registering analytics adapter : ' + e.message);
  }
};

/**
 * Wrapper to bidfactory.createBid()
 * @param  {string} statusCode [description]
 * @alias module:pbjs.createBid
 * @return {Object} bidResponse [description]
 */
pbjs.createBid = function (statusCode) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.createBid", arguments);
  return (0,_bidfactory_js__WEBPACK_IMPORTED_MODULE_23__.createBid)(statusCode);
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
var enableAnalyticsCb = (0,_hook_js__WEBPACK_IMPORTED_MODULE_8__.hook)('async', function (config) {
  if (config && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(config)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.enableAnalytics for: ", config);
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].enableAnalytics(config);
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)("pbjs.enableAnalytics should be called with option {}");
  }
}, 'enableAnalyticsCb');
pbjs.enableAnalytics = function (config) {
  enableAnalyticsCallbacks.push(enableAnalyticsCb.bind(this, config));
};

/**
 * @alias module:pbjs.aliasBidder
 */
pbjs.aliasBidder = function (bidderCode, alias, options) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logInfo)("Invoking pbjs.aliasBidder", arguments);
  if (bidderCode && alias) {
    _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].aliasBidAdapter(bidderCode, alias, options);
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('bidderCode and alias must be passed as arguments', "pbjs.aliasBidder");
  }
};

/**
 * @alias module:pbjs.aliasRegistry
 */
pbjs.aliasRegistry = _adapterManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].aliasRegistry;
_config_js__WEBPACK_IMPORTED_MODULE_11__.config.getConfig('aliasRegistry', function (config) {
  if (config.aliasRegistry === 'private') delete pbjs.aliasRegistry;
});

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
  return _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getAllWinningBids();
};

/**
 * Get all of the bids that have won their respective auctions.
 * @return {Array<AdapterBidResponse>} A list of bids that have won their respective auctions.
 */
pbjs.getAllPrebidWinningBids = function () {
  return _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getBidsReceived().filter(function (bid) {
    return bid.status === _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.BID_TARGETING_SET;
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
  return _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.getWinningBids(adUnitCode);
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
    bids = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId && bid.adUnitCode === markBidRequest.adUnitCode;
    });
  } else if (markBidRequest.adUnitCode) {
    bids = _targeting_js__WEBPACK_IMPORTED_MODULE_9__.targeting.getWinningBids(markBidRequest.adUnitCode);
  } else if (markBidRequest.adId) {
    bids = _auctionManager_js__WEBPACK_IMPORTED_MODULE_5__.auctionManager.getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId;
    });
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.');
  }
  if (bids.length > 0) {
    bids[0].status = _constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.RENDERED;
  }
};

/**
 * Get Prebid config options
 * @param {Object} options
 * @alias module:pbjs.getConfig
 */
pbjs.getConfig = _config_js__WEBPACK_IMPORTED_MODULE_11__.config.getAnyConfig;
pbjs.readConfig = _config_js__WEBPACK_IMPORTED_MODULE_11__.config.readAnyConfig;
pbjs.mergeConfig = _config_js__WEBPACK_IMPORTED_MODULE_11__.config.mergeConfig;
pbjs.mergeBidderConfig = _config_js__WEBPACK_IMPORTED_MODULE_11__.config.mergeBidderConfig;

/**
 * Set Prebid config options.
 * See https://docs.prebid.org/dev-docs/publisher-api-reference/setConfig.html
 *
 * @param {Object} options Global Prebid configuration object. Must be JSON - no JavaScript functions are allowed.
 */
pbjs.setConfig = _config_js__WEBPACK_IMPORTED_MODULE_11__.config.setConfig;
pbjs.setBidderConfig = _config_js__WEBPACK_IMPORTED_MODULE_11__.config.setBidderConfig;
pbjs.que.push(function () {
  return (0,_secureCreatives_js__WEBPACK_IMPORTED_MODULE_24__.listenMessagesFromCreative)();
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Error processing command :', e.message, e.stack);
    }
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)("Commands written into pbjs.cmd.push must be wrapped in a function");
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
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)('Error processing command :', 'prebid.js', e);
      }
    }
  });
}

/**
 * @alias module:pbjs.processQueue
 */
pbjs.processQueue = function () {
  _hook_js__WEBPACK_IMPORTED_MODULE_8__.hook.ready();
  processQueue(pbjs.que);
  processQueue(pbjs.cmd);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (pbjs);

/***/ }),

/***/ "./src/prebidGlobal.js":
/*!*****************************!*\
  !*** ./src/prebidGlobal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": function() { return /* binding */ getGlobal; }
/* harmony export */ });
// if $$PREBID_GLOBAL$$ already exists in global document scope, use it, if not, create the object
// global defination should happen BEFORE imports to avoid global undefined errors.
window.pbjs = window.pbjs || {};
window.pbjs.cmd = window.pbjs.cmd || [];
window.pbjs.que = window.pbjs.que || [];

// create a pbjs global pointer
window._pbjsGlobals = window._pbjsGlobals || [];
window._pbjsGlobals.push("pbjs");
function getGlobal() {
  return window.pbjs;
}

/***/ }),

/***/ "./src/refererDetection.js":
/*!*********************************!*\
  !*** ./src/refererDetection.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRefererInfo": function() { return /* binding */ getRefererInfo; },
/* harmony export */   "parseDomain": function() { return /* binding */ parseDomain; }
/* harmony export */ });
/* unused harmony exports ensureProtocol, detectReferer */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
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
 * Prepend a URL with the page's protocol (http/https), if necessary.
 */
function ensureProtocol(url) {
  var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  if (!url) return url;
  if (/\w+:\/\//.exec(url)) {
    // url already has protocol
    return url;
  }
  var windowProto = win.location.protocol;
  try {
    windowProto = win.top.location.protocol;
  } catch (e) {}
  if (/^\/\//.exec(url)) {
    // url uses relative protocol ("//example.com")
    return windowProto + url;
  } else {
    return "".concat(windowProto, "//").concat(url);
  }
}

/**
 * Extract the domain portion from a URL.
 * @param url
 * @param noLeadingWww: if true, remove 'www.' appearing at the beginning of the domain.
 * @param noPort: if true, do not include the ':[port]' portion
 */
function parseDomain(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$noLeadingWww = _ref.noLeadingWww,
    noLeadingWww = _ref$noLeadingWww === void 0 ? false : _ref$noLeadingWww,
    _ref$noPort = _ref.noPort,
    noPort = _ref$noPort === void 0 ? false : _ref$noPort;
  try {
    url = new URL(ensureProtocol(url));
  } catch (e) {
    return;
  }
  url = noPort ? url.hostname : url.host;
  if (noLeadingWww && url.startsWith('www.')) {
    url = url.substring(4);
  }
  return url;
}

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
    } catch (e) {
      // Ignore error
    }
  }

  /**
   * This function returns canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   *
   * @param {Object} doc document
   * @returns {string|null}
   */
  function getCanonicalUrl(doc) {
    try {
      var element = doc.querySelector("link[rel='canonical']");
      if (element !== null) {
        return element.href;
      }
    } catch (e) {
      // Ignore error
    }
    return null;
  }

  // TODO: the meaning of "reachedTop" seems to be intentionally ambiguous - best to leave them out of
  // the typedef for now. (for example, unit tests enforce that "reachedTop" should be false in some situations where we
  // happily provide a location for the top).

  /**
   * @typedef {Object} refererInfo
   * @property {string|null} location the browser's location, or null if not available (due to cross-origin restrictions)
   * @property {string|null} canonicalUrl the site's canonical URL as set by the publisher, through setConfig({pageUrl}) or <link rel="canonical" />
   * @property {string|null} page the best candidate for the current page URL: `canonicalUrl`, falling back to `location`
   * @property {string|null} domain the domain portion of `page`
   * @property {string|null} ref the referrer (document.referrer) to the current page, or null if not available (due to cross-origin restrictions)
   * @property {string} topmostLocation of the top-most frame for which we could guess the location. Outside of cross-origin scenarios, this is equivalent to `location`.
   * @property {number} numIframes number of steps between window.self and window.top
   * @property {Array[string|null]} stack our best guess at the location for each frame, in the direction top -> self.
   */

  /**
   * Walk up the windows to get the origin stack and best available referrer, canonical URL, etc.
   *
   * @returns {refererInfo}
   */
  function refererInfo() {
    var stack = [];
    var ancestors = getAncestorOrigins(win);
    var maxNestedIframes = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('maxNestedIframes');
    var currentWindow;
    var bestLocation;
    var bestCanonicalUrl;
    var reachedTop = false;
    var level = 0;
    var valuesFromAmp = false;
    var inAmpFrame = false;
    var hasTopLocation = false;
    do {
      var previousWindow = currentWindow;
      var wasInAmpFrame = inAmpFrame;
      var currentLocation = void 0;
      var crossOrigin = false;
      var foundLocation = null;
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
            foundLocation = context.sourceUrl;
            bestLocation = foundLocation;
            hasTopLocation = true;
            valuesFromAmp = true;
            if (currentWindow === win.top) {
              reachedTop = true;
            }
            if (context.canonicalUrl) {
              bestCanonicalUrl = context.canonicalUrl;
            }
          } catch (e) {/* Do nothing */}
        } else {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Trying to access cross domain iframe. Continuing without referrer and location');
          try {
            // the referrer to an iframe is the parent window
            var referrer = previousWindow.document.referrer;
            if (referrer) {
              foundLocation = referrer;
              if (currentWindow === win.top) {
                reachedTop = true;
              }
            }
          } catch (e) {/* Do nothing */}
          if (!foundLocation && ancestors && ancestors[level - 1]) {
            foundLocation = ancestors[level - 1];
            if (currentWindow === win.top) {
              hasTopLocation = true;
            }
          }
          if (foundLocation && !valuesFromAmp) {
            bestLocation = foundLocation;
          }
        }
      } else {
        if (currentLocation) {
          foundLocation = currentLocation;
          bestLocation = foundLocation;
          valuesFromAmp = false;
          if (currentWindow === win.top) {
            reachedTop = true;
            var _canonicalUrl = getCanonicalUrl(currentWindow.document);
            if (_canonicalUrl) {
              bestCanonicalUrl = _canonicalUrl;
            }
          }
        }
        if (currentWindow.context && currentWindow.context.sourceUrl) {
          inAmpFrame = true;
        }
      }
      stack.push(foundLocation);
      level++;
    } while (currentWindow !== win.top && level < maxNestedIframes);
    stack.reverse();
    var ref;
    try {
      ref = win.top.document.referrer;
    } catch (e) {}
    var location = reachedTop || hasTopLocation ? bestLocation : null;
    var canonicalUrl = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('pageUrl') || bestCanonicalUrl || null;
    var page = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('pageUrl') || location || ensureProtocol(canonicalUrl, win);
    if (location && location.indexOf('?') > -1 && page.indexOf('?') === -1) {
      page = "".concat(page).concat(location.substring(location.indexOf('?')));
    }
    return {
      reachedTop: reachedTop,
      isAmp: valuesFromAmp,
      numIframes: level - 1,
      stack: stack,
      topmostLocation: bestLocation || null,
      location: location,
      canonicalUrl: canonicalUrl,
      page: page,
      domain: parseDomain(page) || null,
      ref: ref || null,
      // TODO: the "legacy" refererInfo object is provided here, for now, to accomodate
      // adapters that decided to just send it verbatim to their backend.
      legacy: {
        reachedTop: reachedTop,
        isAmp: valuesFromAmp,
        numIframes: level - 1,
        stack: stack,
        referer: bestLocation || null,
        canonicalUrl: canonicalUrl
      }
    };
  }
  return refererInfo;
}

/**
 * @type {function(): refererInfo}
 */
var getRefererInfo = detectReferer(window);

/***/ }),

/***/ "./src/secureCreatives.js":
/*!********************************!*\
  !*** ./src/secureCreatives.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenMessagesFromCreative": function() { return /* binding */ listenMessagesFromCreative; }
/* harmony export */ });
/* unused harmony exports getReplier, receiveMessage, _sendAdToCreative */
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./native.js */ "./src/native.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _adRendering_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adRendering.js */ "./src/adRendering.js");
/* Secure Creatives
  Provides support for rendering creatives into cross domain iframes such as SafeFrame to prevent
   access to a publisher page from creative payloads.
 */










var BID_WON = _constants_json__WEBPACK_IMPORTED_MODULE_0__.EVENTS.BID_WON;
var STALE_RENDER = _constants_json__WEBPACK_IMPORTED_MODULE_0__.EVENTS.STALE_RENDER;
var WON_AD_IDS = new WeakSet();
var HANDLER_MAP = {
  'Prebid Request': handleRenderRequest,
  'Prebid Event': handleEventRequest
};
if (true) {
  Object.assign(HANDLER_MAP, {
    'Prebid Native': handleNativeRequest
  });
}
function listenMessagesFromCreative() {
  window.addEventListener('message', receiveMessage, false);
}
function getReplier(ev) {
  if (ev.origin == null && ev.ports.length === 0) {
    return function () {
      var msg = 'Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870';
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)(msg);
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
    var adObject = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.find)(_auctionManager_js__WEBPACK_IMPORTED_MODULE_3__.auctionManager.getBidsReceived(), function (bid) {
      return bid.adId === data.adId;
    });
    if (HANDLER_MAP.hasOwnProperty(data.message)) {
      HANDLER_MAP[data.message](getReplier(ev), data, adObject);
    }
  }
}
function handleRenderRequest(reply, data, adObject) {
  if (adObject == null) {
    (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_4__.emitAdRenderFail)({
      reason: _constants_json__WEBPACK_IMPORTED_MODULE_0__.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
      message: "Cannot find ad '".concat(data.adId, "' for cross-origin render request"),
      id: data.adId
    });
    return;
  }
  if (adObject.status === _constants_json__WEBPACK_IMPORTED_MODULE_0__.BID_STATUS.RENDERED) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Ad id ".concat(adObject.adId, " has been rendered before"));
    _events_js__WEBPACK_IMPORTED_MODULE_5__.emit(STALE_RENDER, adObject);
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_7__.config.getConfig('auctionOptions'), 'suppressStaleRender')) {
      return;
    }
  }
  try {
    _sendAdToCreative(adObject, reply);
  } catch (e) {
    (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_4__.emitAdRenderFail)({
      reason: _constants_json__WEBPACK_IMPORTED_MODULE_0__.AD_RENDER_FAILED_REASON.EXCEPTION,
      message: e.message,
      id: data.adId,
      bid: adObject
    });
    return;
  }

  // save winning bids
  _auctionManager_js__WEBPACK_IMPORTED_MODULE_3__.auctionManager.addWinningBid(adObject);
  _events_js__WEBPACK_IMPORTED_MODULE_5__.emit(BID_WON, adObject);
}
function handleNativeRequest(reply, data, adObject) {
  // handle this script from native template in an ad server
  // window.parent.postMessage(JSON.stringify({
  //   message: 'Prebid Native',
  //   adId: '%%PATTERN:hb_adid%%'
  // }), '*');
  if (adObject == null) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("Cannot find ad '".concat(data.adId, "' for x-origin event request"));
    return;
  }
  if (!WON_AD_IDS.has(adObject)) {
    WON_AD_IDS.add(adObject);
    _auctionManager_js__WEBPACK_IMPORTED_MODULE_3__.auctionManager.addWinningBid(adObject);
    _events_js__WEBPACK_IMPORTED_MODULE_5__.emit(BID_WON, adObject);
  }
  switch (data.action) {
    case 'assetRequest':
      reply((0,_native_js__WEBPACK_IMPORTED_MODULE_8__.getAssetMessage)(data, adObject));
      break;
    case 'allAssetRequest':
      reply((0,_native_js__WEBPACK_IMPORTED_MODULE_8__.getAllAssetsMessage)(data, adObject));
      break;
    case 'resizeNativeHeight':
      adObject.height = data.height;
      adObject.width = data.width;
      resizeRemoteCreative(adObject);
      break;
    default:
      (0,_native_js__WEBPACK_IMPORTED_MODULE_8__.fireNativeTrackers)(data, adObject);
  }
}
function handleEventRequest(reply, data, adObject) {
  if (adObject == null) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("Cannot find ad '".concat(data.adId, "' for x-origin event request"));
    return;
  }
  if (adObject.status !== _constants_json__WEBPACK_IMPORTED_MODULE_0__.BID_STATUS.RENDERED) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(data.adId, "'"));
    return;
  }
  switch (data.event) {
    case _constants_json__WEBPACK_IMPORTED_MODULE_0__.EVENTS.AD_RENDER_FAILED:
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_4__.emitAdRenderFail)({
        bid: adObject,
        id: data.adId,
        reason: data.info.reason,
        message: data.info.message
      });
      break;
    case _constants_json__WEBPACK_IMPORTED_MODULE_0__.EVENTS.AD_RENDER_SUCCEEDED:
      (0,_adRendering_js__WEBPACK_IMPORTED_MODULE_4__.emitAdRenderSucceeded)({
        doc: null,
        bid: adObject,
        id: data.adId
      });
      break;
    default:
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("Received x-origin event request for unsupported event: '".concat(data.event, "' (adId: '").concat(data.adId, "')"));
  }
}
function _sendAdToCreative(adObject, reply) {
  var adId = adObject.adId,
    ad = adObject.ad,
    adUrl = adObject.adUrl,
    width = adObject.width,
    height = adObject.height,
    renderer = adObject.renderer,
    cpm = adObject.cpm,
    originalCpm = adObject.originalCpm;
  // rendering for outstream safeframe
  if ((0,_Renderer_js__WEBPACK_IMPORTED_MODULE_9__.isRendererRequired)(renderer)) {
    (0,_Renderer_js__WEBPACK_IMPORTED_MODULE_9__.executeRenderer)(renderer, adObject);
  } else if (adId) {
    resizeRemoteCreative(adObject);
    reply({
      message: 'Prebid Response',
      ad: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.replaceAuctionPrice)(ad, originalCpm || cpm),
      adUrl: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.replaceAuctionPrice)(adUrl, originalCpm || cpm),
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
      elementStyle.width = width ? width + 'px' : '100%';
      elementStyle.height = height + 'px';
    } else {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Unable to locate matching page element for adUnitCode ".concat(adUnitCode, ".  Can't resize it to ad's dimensions.  Please review setup."));
    }
  });
  function getElementByAdUnit(elmType) {
    var id = getElementIdBasedOnAdServer(adId, adUnitCode);
    var parentDivEle = document.getElementById(id);
    return parentDivEle && parentDivEle.querySelector(elmType);
  }
  function getElementIdBasedOnAdServer(adId, adUnitCode) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isGptPubadsDefined)()) {
      return getDfpElementId(adId);
    } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isApnGetTagDefined)()) {
      return getAstElementId(adUnitCode);
    } else {
      return adUnitCode;
    }
  }
  function getDfpElementId(adId) {
    var slot = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.find)(window.googletag.pubads().getSlots(), function (slot) {
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.find)(slot.getTargetingKeys(), function (key) {
        return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.includes)(slot.getTargeting(key), adId);
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

/***/ "./src/sizeMapping.js":
/*!****************************!*\
  !*** ./src/sizeMapping.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processAdUnitsForLabels": function() { return /* binding */ processAdUnitsForLabels; }
/* harmony export */ });
/* unused harmony exports setSizeConfig, getLabels, sizeSupported, resolveStatus */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _mediaTypes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediaTypes.js */ "./src/mediaTypes.js");





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
_config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('sizeConfig', function (config) {
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
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(mediaTypes)) {
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
  }
  var oldSizes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mediaTypes, 'banner.sizes');
  if (maps.shouldFilter && oldSizes) {
    mediaTypes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.deepClone)(mediaTypes);
    mediaTypes.banner.sizes = oldSizes.filter(function (size) {
      return maps.sizesSupported[size];
    });
  }
  var results = {
    active: !mediaTypes.hasOwnProperty(_mediaTypes_js__WEBPACK_IMPORTED_MODULE_3__.BANNER) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mediaTypes, 'banner.sizes.length') > 0 && (labels.length === 0 || !labelAll && (labels.some(function (label) {
      return maps.labels[label];
    }) || labels.some(function (label) {
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(activeLabels, label);
    })) || labelAll && labels.reduce(function (result, label) {
      return !result ? result : maps.labels[label] || (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(activeLabels, label);
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
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(config) === 'object' && typeof config.mediaQuery === 'string' && config.mediaQuery.length > 0) {
      var ruleMatch = false;
      try {
        ruleMatch = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getWindowTop)().matchMedia(config.mediaQuery).matches;
      } catch (e) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Unfriendly iFrame blocks sizeConfig from being correctly evaluated');
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('sizeConfig rule missing required property "mediaQuery"');
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Size mapping disabled adUnit \"".concat(adUnit.code, "\""));
    } else {
      if (filterResults) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Size mapping filtered adUnit \"".concat(adUnit.code, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
      }
      adUnit.mediaTypes = mediaTypes;
      adUnit.bids = adUnit.bids.reduce(function (bids, bid) {
        var _resolveStatus2 = resolveStatus(getLabels(bid, activeLabels), adUnit.mediaTypes),
          active = _resolveStatus2.active,
          mediaTypes = _resolveStatus2.mediaTypes,
          filterResults = _resolveStatus2.filterResults;
        if (!active) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Size mapping deactivated adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\""));
        } else {
          if (filterResults) {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Size mapping filtered adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
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

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoreStorageManager": function() { return /* binding */ getCoreStorageManager; },
/* harmony export */   "getStorageManager": function() { return /* binding */ getStorageManager; },
/* harmony export */   "storageCallbacks": function() { return /* binding */ storageCallbacks; },
/* harmony export */   "validateStorageEnforcement": function() { return /* binding */ validateStorageEnforcement; }
/* harmony export */ });
/* unused harmony exports newStorageManager, resetData */
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _bidderSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bidderSettings.js */ "./src/bidderSettings.js");
/* harmony import */ var _consentHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consentHandler.js */ "./src/consentHandler.js");




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
    bidderSettings = _ref2$bidderSettings === void 0 ? _bidderSettings_js__WEBPACK_IMPORTED_MODULE_0__.bidderSettings : _ref2$bidderSettings;
  function isBidderAllowed() {
    if (bidderCode == null) {
      return true;
    }
    var storageAllowed = bidderSettings.get(bidderCode, 'storageAllowed');
    return storageAllowed == null ? false : storageAllowed;
  }
  if (moduleTypeWhiteList.includes(moduleType)) {
    gvlid = gvlid || _consentHandler_js__WEBPACK_IMPORTED_MODULE_1__.VENDORLESS_GVLID;
  }
  function isValid(cb) {
    if (!isBidderAllowed()) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("bidderSettings denied access to device storage for bidder '".concat(bidderCode, "'"));
      var result = {
        valid: false
      };
      return cb(result);
    } else {
      var value;
      var hookDetails = {
        hasEnforcementHook: false
      };
      validateStorageEnforcement(gvlid, bidderCode || moduleName, hookDetails, function (result) {
        if (result && result.hasEnforcementHook) {
          value = cb(result);
        } else {
          var _result = {
            hasEnforcementHook: false,
            valid: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasDeviceAccess)()
          };
          value = cb(_result);
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
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.checkCookieSupport)();
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
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('Local storage api disabled');
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
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasDeviceAccess)()) {
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
var validateStorageEnforcement = (0,_hook_js__WEBPACK_IMPORTED_MODULE_3__.hook)('async', function (gvlid, moduleName, hookDetails, callback) {
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
  if (arguments.length > 1 || arguments.length > 0 && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(arguments[0])) {
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

/***/ "./src/targeting.js":
/*!**************************!*\
  !*** ./src/targeting.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBidUsable": function() { return /* binding */ isBidUsable; },
/* harmony export */   "targeting": function() { return /* binding */ targeting; }
/* harmony export */ });
/* unused harmony exports TARGETING_KEYS, filters, getHighestCpmBidsFromBidPool, sortByDealAndPriceBucketOrCpm, newTargeting */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./native.js */ "./src/native.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _mediaTypes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _bidderSettings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bidderSettings.js */ "./src/bidderSettings.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");











var pbTargetingKeys = [];
var MAX_DFP_KEYLENGTH = 20;
var DEFAULT_TTL_BUFFER = 1;
_config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('ttlBuffer', function (cfg) {
  if (typeof cfg.ttlBuffer === 'number') {
    DEFAULT_TTL_BUFFER = cfg.ttlBuffer;
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Invalid value for ttlBuffer', cfg.ttlBuffer);
  }
});
var CFG_ALLOW_TARGETING_KEYS = "targetingControls.allowTargetingKeys";
var CFG_ADD_TARGETING_KEYS = "targetingControls.addTargetingKeys";
var TARGETING_KEY_CONFIGURATION_ERROR_MSG = "Only one of \"".concat(CFG_ALLOW_TARGETING_KEYS, "\" or \"").concat(CFG_ADD_TARGETING_KEYS, "\" can be set");
var TARGETING_KEYS = Object.keys(_constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS).map(function (key) {
  return _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS[key];
});

// return unexpired bids
var isBidNotExpired = function isBidNotExpired(bid) {
  return bid.responseTimestamp + (bid.ttl - (bid.hasOwnProperty('ttlBuffer') ? bid.ttlBuffer : DEFAULT_TTL_BUFFER)) * 1000 > (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.timestamp)();
};

// return bids whose status is not set. Winning bids can only have a status of `rendered`.
var isUnusedBid = function isUnusedBid(bid) {
  return bid && (bid.status && !(0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)([_constants_json__WEBPACK_IMPORTED_MODULE_2__.BID_STATUS.RENDERED], bid.status) || !bid.status);
};
var filters = {
  isActualBid: function isActualBid(bid) {
    return bid.getStatusCode() === _constants_json__WEBPACK_IMPORTED_MODULE_2__.STATUS.GOOD;
  },
  isBidNotExpired: isBidNotExpired,
  isUnusedBid: isUnusedBid
};
function isBidUsable(bid) {
  return !Object.values(filters).some(function (predicate) {
    return !predicate(bid);
  });
}

// If two bids are found for same adUnitCode, we will use the highest one to take part in auction
// This can happen in case of concurrent auctions
// If adUnitBidLimit is set above 0 return top N number of bids
var getHighestCpmBidsFromBidPool = (0,_hook_js__WEBPACK_IMPORTED_MODULE_4__.hook)('sync', function (bidsReceived, highestCpmCallback) {
  var adUnitBidLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var hasModified = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!hasModified) {
    var bids = [];
    var dealPrioritization = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('sendBidsControl.dealPrioritization');
    // bucket by adUnitcode
    var buckets = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupBy)(bidsReceived, 'adUnitCode');
    // filter top bid for each bucket by bidder
    Object.keys(buckets).forEach(function (bucketKey) {
      var bucketBids = [];
      var bidsByBidder = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupBy)(buckets[bucketKey], 'bidderCode');
      Object.keys(bidsByBidder).forEach(function (key) {
        return bucketBids.push(bidsByBidder[key].reduce(highestCpmCallback));
      });
      // if adUnitBidLimit is set, pass top N number bids
      if (adUnitBidLimit > 0) {
        bucketBids = dealPrioritization ? bucketBids.sort(sortByDealAndPriceBucketOrCpm(true)) : bucketBids.sort(function (a, b) {
          return b.cpm - a.cpm;
        });
        bids.push.apply(bids, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(bucketBids.slice(0, adUnitBidLimit)));
      } else {
        bids.push.apply(bids, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(bucketBids));
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
    }

    // assuming both values either have a deal or don't have a deal - sort by the hb_pb param
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
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isGptPubadsDefined)()) {
      var adUnitCodes = getAdUnitCodes(adUnitCode);
      var adUnits = auctionManager.getAdUnits().filter(function (adUnit) {
        return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(adUnitCodes, adUnit.code);
      });
      var unsetKeys = pbTargetingKeys.reduce(function (reducer, key) {
        reducer[key] = null;
        return reducer;
      }, {});
      window.googletag.pubads().getSlots().forEach(function (slot) {
        var customSlotMatchingFunc = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isFn)(customSlotMatching) && customSlotMatching(slot);
        // reset only registered adunits
        adUnits.forEach(function (unit) {
          if (unit.code === slot.getAdUnitPath() || unit.code === slot.getSlotElementId() || (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isFn)(customSlotMatchingFunc) && customSlotMatchingFunc(unit.code)) {
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
          if (!(0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(pbTargetingKeys, key.toLowerCase())) {
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
    return bid.adserverTargeting && adUnitCodes && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(adUnitCodes) && (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(adUnitCodes, bid.adUnitCode) || typeof adUnitCodes === 'string' && bid.adUnitCode === adUnitCodes);
  }
  ;

  /**
   * Returns targeting for any bids which have deals if alwaysIncludeDeals === true
   */
  function getDealBids(adUnitCodes, bidsReceived) {
    if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('targetingControls.alwaysIncludeDeals') === true) {
      var standardKeys =  true ? TARGETING_KEYS.concat(_native_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE_TARGETING_KEYS) : 0;

      // we only want the top bid from bidders who have multiple entries per ad unit code
      var bids = getHighestCpmBidsFromBidPool(bidsReceived, _utils_js__WEBPACK_IMPORTED_MODULE_1__.getHighestCpm);

      // populate targeting keys for the remaining bids if they have a dealId
      return bids.map(function (bid) {
        if (bid.dealId && bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
          return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
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
    var defaultKeyring = Object.assign({}, _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS, _constants_json__WEBPACK_IMPORTED_MODULE_2__.NATIVE_KEYS);
    var defaultKeys = Object.keys(defaultKeyring);
    var keyDispositions = {};
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("allowTargetingKeys - allowed keys [ ".concat(allowedKeys.map(function (k) {
      return defaultKeyring[k];
    }).join(', '), " ]"));
    targeting.map(function (adUnit) {
      var adUnitCode = Object.keys(adUnit)[0];
      var keyring = adUnit[adUnitCode];
      var keys = keyring.filter(function (kvPair) {
        var key = Object.keys(kvPair)[0];
        // check if key is in default keys, if not, it's custom, we won't remove it.
        var isCustom = defaultKeys.filter(function (defaultKey) {
          return key.indexOf(defaultKeyring[defaultKey]) === 0;
        }).length === 0;
        // check if key explicitly allowed, if not, we'll remove it.
        var found = isCustom || (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(allowedKeys, function (allowedKey) {
          var allowedKeyName = defaultKeyring[allowedKey];
          // we're looking to see if the key exactly starts with one of our default keys.
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
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("allowTargetingKeys - removed keys [ ".concat(removedKeys.join(', '), " ]"));
    // remove any empty targeting objects, as they're unnecessary.
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
    var adUnitCodes = getAdUnitCodes(adUnitCode);

    // Get targeting for the winning bid. Add targeting for any bids that have
    // `alwaysUseBid=true`. If sending all bids is enabled, add targeting for losing bids.
    var targeting = getWinningBidTargeting(adUnitCodes, bidsReceived).concat(getCustomBidTargeting(adUnitCodes, bidsReceived)).concat(_config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('enableSendAllBids') ? getBidLandscapeTargeting(adUnitCodes, bidsReceived) : getDealBids(adUnitCodes, bidsReceived)).concat(getAdUnitTargeting(adUnitCodes));

    // store a reference of the targeting keys
    targeting.map(function (adUnitCode) {
      Object.keys(adUnitCode).map(function (key) {
        adUnitCode[key].map(function (targetKey) {
          if (pbTargetingKeys.indexOf(Object.keys(targetKey)[0]) === -1) {
            pbTargetingKeys = Object.keys(targetKey).concat(pbTargetingKeys);
          }
        });
      });
    });
    var defaultKeys = Object.keys(Object.assign({}, _constants_json__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_TARGETING_KEYS, _constants_json__WEBPACK_IMPORTED_MODULE_2__.NATIVE_KEYS));
    var allowedKeys = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig(CFG_ALLOW_TARGETING_KEYS);
    var addedKeys = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig(CFG_ADD_TARGETING_KEYS);
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
    var auctionKeysThreshold = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('targetingControls.auctionKeyMaxChars');
    if (auctionKeysThreshold) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(auctionKeysThreshold, " characters.  Running checks on auction keys..."));
      targeting = filterTargetingKeys(targeting, auctionKeysThreshold);
    }

    // make sure at least there is a entry per adUnit code in the targetingSet so receivers of SET_TARGETING call's can know what ad units are being invoked
    adUnitCodes.forEach(function (code) {
      if (!targeting[code]) {
        targeting[code] = {};
      }
    });
    return targeting;
  };

  // warn about conflicting configuration
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('targetingControls', function (config) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_8__["default"])(config, CFG_ALLOW_TARGETING_KEYS) != null && (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__["default"])(config, CFG_ADD_TARGETING_KEYS) != null) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)(TARGETING_KEY_CONFIGURATION_ERROR_MSG);
    }
  });

  // create an encoded string variant based on the keypairs of the provided object
  //  - note this will encode the characters between the keys (ie = and &)
  function convertKeysToQueryForm(keyMap) {
    return Object.keys(keyMap).reduce(function (queryString, key) {
      var encodedKeyPair = "".concat(key, "%3d").concat(encodeURIComponent(keyMap[key]), "%26");
      return queryString += encodedKeyPair;
    }, '');
  }
  function filterTargetingKeys(targeting, auctionKeysThreshold) {
    // read each targeting.adUnit object and sort the adUnits into a list of adUnitCodes based on priorization setting (eg CPM)
    var targetingCopy = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.deepClone)(targeting);
    var targetingMap = Object.keys(targetingCopy).map(function (adUnitCode) {
      return {
        adUnitCode: adUnitCode,
        adserverTargeting: targetingCopy[adUnitCode]
      };
    }).sort(sortByDealAndPriceBucketOrCpm());

    // iterate through the targeting based on above list and transform the keys into the query-equivalent and count characters
    return targetingMap.reduce(function (accMap, currMap, index, arr) {
      var adUnitQueryString = convertKeysToQueryForm(currMap.adserverTargeting);

      // for the last adUnit - trim last encoded ampersand from the converted query string
      if (index + 1 === arr.length) {
        adUnitQueryString = adUnitQueryString.slice(0, -3);
      }

      // if under running threshold add to result
      var code = currMap.adUnitCode;
      var querySize = adUnitQueryString.length;
      if (querySize <= auctionKeysThreshold) {
        auctionKeysThreshold -= querySize;
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("AdUnit '".concat(code, "' auction keys comprised of ").concat(querySize, " characters.  Deducted from running threshold; new limit is ").concat(auctionKeysThreshold), targetingCopy[code]);
        accMap[code] = targetingCopy[code];
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("The following keys for adUnitCode '".concat(code, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(querySize, ", the current allotted amount was ").concat(auctionKeysThreshold, ".\n"), targetingCopy[code]);
      }
      if (index + 1 === arr.length && Object.keys(accMap).length === 0) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.');
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
      return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, Object.keys(targeting)[0], targeting[Object.keys(targeting)[0]].map(function (target) {
        return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, Object.keys(target)[0], target[Object.keys(target)[0]].join(','));
      }).reduce(function (p, c) {
        return Object.assign(c, p);
      }, {}));
    }).reduce(function (accumulator, targeting) {
      var key = Object.keys(targeting)[0];
      accumulator[key] = Object.assign({}, accumulator[key], targeting[key]);
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
      Object.keys(targetingConfig).filter(customSlotMatching ? customSlotMatching(slot) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isAdUnitCodeMatchingSlot)(slot)).forEach(function (targetId) {
        Object.keys(targetingConfig[targetId]).forEach(function (key) {
          var value = targetingConfig[targetId][key];
          if (typeof value === 'string' && value.indexOf(',') !== -1) {
            // due to the check the array will be formed only if string has ',' else plain string will be assigned as value
            value = value.split(',');
          }
          targetingConfig[targetId][key] = value;
        });
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Attempting to set targeting-map for slot: ".concat(slot.getSlotElementId(), " with targeting-map:"), targetingConfig[targetId]);
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
    } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(adUnitCode)) {
      return adUnitCode;
    }
    return auctionManager.getAdUnitCodes() || [];
  }
  function getBidsReceived() {
    var bidsReceived = auctionManager.getBidsReceived();
    if (!_config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('useBidCache')) {
      // don't use bid cache (i.e. filter out bids not in the latest auction)
      bidsReceived = bidsReceived.filter(function (bid) {
        return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId;
      });
    } else {
      // if custom bid cache filter function exists, run for each bid from
      // previous auctions. If it returns true, include bid in bid pool
      var filterFunction = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('bidCacheFilterFunction');
      if (typeof filterFunction === 'function') {
        bidsReceived = bidsReceived.filter(function (bid) {
          return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId || !!filterFunction(bid);
        });
      }
    }
    bidsReceived = bidsReceived.filter(function (bid) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__["default"])(bid, 'video.context') !== _mediaTypes_js__WEBPACK_IMPORTED_MODULE_9__.ADPOD;
    }).filter(isBidUsable);
    return getHighestCpmBidsFromBidPool(bidsReceived, _utils_js__WEBPACK_IMPORTED_MODULE_1__.getOldestHighestCpmBid);
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
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(adUnitCodes, bid.adUnitCode);
    }).filter(function (bid) {
      return _bidderSettings_js__WEBPACK_IMPORTED_MODULE_10__.bidderSettings.get(bid.bidderCode, 'allowZeroCpmBids') === true ? bid.cpm >= 0 : bid.cpm > 0;
    }).map(function (bid) {
      return bid.adUnitCode;
    }).filter(_utils_js__WEBPACK_IMPORTED_MODULE_1__.uniques).map(function (adUnitCode) {
      return bidsReceived.filter(function (bid) {
        return bid.adUnitCode === adUnitCode ? bid : null;
      }).reduce(_utils_js__WEBPACK_IMPORTED_MODULE_1__.getHighestCpm);
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('unable to reset targeting for AST' + e);
    }
    Object.keys(astTargeting).forEach(function (targetId) {
      return Object.keys(astTargeting[targetId]).forEach(function (key) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Attempting to set targeting for targetId: ".concat(targetId, " key: ").concat(key, " value: ").concat(astTargeting[targetId][key]));
        // setKeywords supports string and array as value
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)(astTargeting[targetId][key]) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(astTargeting[targetId][key])) {
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
      return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, winner.adUnitCode, Object.keys(winner.adserverTargeting).filter(function (key) {
        return typeof winner.sendStandardTargeting === 'undefined' || winner.sendStandardTargeting || standardKeys.indexOf(key) === -1;
      }).reduce(function (acc, key) {
        var targetingValue = [winner.adserverTargeting[key]];
        var targeting = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, key.substring(0, MAX_DFP_KEYLENGTH), targetingValue);
        if (key === _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS.DEAL) {
          var bidderCodeTargetingKey = "".concat(key, "_").concat(winner.bidderCode).substring(0, MAX_DFP_KEYLENGTH);
          var bidderCodeTargeting = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, bidderCodeTargetingKey, targetingValue);
          return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(acc), [targeting, bidderCodeTargeting]);
        }
        return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(acc), [targeting]);
      }, []));
    });
    return winners;
  }
  function getStandardKeys() {
    return auctionManager.getStandardBidderAdServerTargeting() // in case using a custom standard key set
    .map(function (targeting) {
      return targeting.key;
    }).concat(TARGETING_KEYS).filter(_utils_js__WEBPACK_IMPORTED_MODULE_1__.uniques); // standard keys defined in the library.
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
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(currentBidElement.adserverTargeting[key])) {
          currentBidElement.adserverTargeting[key] = [currentBidElement.adserverTargeting[key]];
        }
        currentBidElement.adserverTargeting[key] = currentBidElement.adserverTargeting[key].concat(bid.adserverTargeting[key]).filter(_utils_js__WEBPACK_IMPORTED_MODULE_1__.uniques);
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
    var standardKeys = getStandardKeys();
    if (true) {
      standardKeys = standardKeys.concat(_native_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE_TARGETING_KEYS);
    }
    return function (key) {
      return standardKeys.indexOf(key) === -1;
    };
  }
  function truncateCustomKeys(bid) {
    return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, bid.adUnitCode, Object.keys(bid.adserverTargeting)
    // Get only the non-standard keys of the losing bids, since we
    // don't want to override the standard keys of the winning bid.
    .filter(getCustomKeys()).map(function (key) {
      return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, key.substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    }));
  }

  /**
   * Get custom targeting key value pairs for bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   bids with custom targeting defined in bidderSettings
   */
  function getCustomBidTargeting(adUnitCodes, bidsReceived) {
    return bidsReceived.filter(function (bid) {
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(adUnitCodes, bid.adUnitCode);
    }).map(function (bid) {
      return Object.assign({}, bid);
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
    var standardKeys =  true ? TARGETING_KEYS.concat(_native_js__WEBPACK_IMPORTED_MODULE_6__.NATIVE_TARGETING_KEYS) : 0;
    var adUnitBidLimit = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('sendBidsControl.bidLimit');
    var bids = getHighestCpmBidsFromBidPool(bidsReceived, _utils_js__WEBPACK_IMPORTED_MODULE_1__.getHighestCpm, adUnitBidLimit);
    var allowSendAllBidsTargetingKeys = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('targetingControls.allowSendAllBidsTargetingKeys');
    var allowedSendAllBidTargeting = allowSendAllBidsTargetingKeys ? allowSendAllBidsTargetingKeys.map(function (key) {
      return _constants_json__WEBPACK_IMPORTED_MODULE_2__.TARGETING_KEYS[key];
    }) : standardKeys;

    // populate targeting keys for the remaining bids
    return bids.map(function (bid) {
      if (bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
        return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
          return typeof bid.adserverTargeting[key] !== 'undefined' && allowedSendAllBidTargeting.indexOf(key) !== -1;
        })));
      }
    }).filter(function (bid) {
      return bid;
    }); // removes empty elements in array
  }

  function getTargetingMap(bid, keys) {
    return keys.map(function (key) {
      return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, "".concat(key, "_").concat(bid.bidderCode).substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    });
  }
  function getAdUnitTargeting(adUnitCodes) {
    function getTargetingObj(adUnit) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__["default"])(adUnit, _constants_json__WEBPACK_IMPORTED_MODULE_2__.JSON_MAPPING.ADSERVER_TARGETING);
    }
    function getTargetingValues(adUnit) {
      var aut = getTargetingObj(adUnit);
      return Object.keys(aut).map(function (key) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)(aut[key])) aut[key] = aut[key].split(',').map(function (s) {
          return s.trim();
        });
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(aut[key])) aut[key] = [aut[key]];
        return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, key, aut[key]);
      });
    }
    return auctionManager.getAdUnits().filter(function (adUnit) {
      return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(adUnitCodes, adUnit.code) && getTargetingObj(adUnit);
    }).map(function (adUnit) {
      return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, adUnit.code, getTargetingValues(adUnit));
    });
  }
  targeting.isApntagDefined = function () {
    if (window.apntag && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isFn)(window.apntag.setKeywords)) {
      return true;
    }
  };
  return targeting;
}
var targeting = newTargeting(_auctionManager_js__WEBPACK_IMPORTED_MODULE_11__.auctionManager);

/***/ }),

/***/ "./src/userSync.js":
/*!*************************!*\
  !*** ./src/userSync.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userSync": function() { return /* binding */ userSync; }
/* harmony export */ });
/* unused harmony exports USERSYNC_DEFAULT_CONFIG, newUserSync */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");





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
};

// Set userSync default values
_config_js__WEBPACK_IMPORTED_MODULE_0__.config.setDefaults({
  'userSync': (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.deepClone)(USERSYNC_DEFAULT_CONFIG)
});
var storage = (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_2__.getCoreStorageManager)('usersync');

/**
 * Factory function which creates a new UserSyncPool.
 *
 * @param {UserSyncDependencies} userSyncDependencies Configuration options and dependencies which the
 *   UserSync object needs in order to behave properly.
 */
function newUserSync(userSyncDependencies) {
  var publicApi = {};
  // A queue of user syncs for each adapter
  // Let getDefaultQueue() set the defaults
  var queue = getDefaultQueue();

  // Whether or not user syncs have been trigger on this page load for a specific bidder
  var hasFiredBidder = new Set();
  // How many bids for each adapter
  var numAdapterBids = {};

  // for now - default both to false in case filterSettings config is absent/misconfigured
  var permittedPixels = {
    image: true,
    iframe: false
  };

  // Use what is in config by default
  var usConfig = userSyncDependencies.config;
  // Update if it's (re)set
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('userSync', function (conf) {
    // Added this logic for https://github.com/prebid/Prebid.js/issues/4864
    // if userSync.filterSettings does not contain image/all configs, merge in default image config to ensure image pixels are fired
    if (conf.userSync) {
      var fs = conf.userSync.filterSettings;
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(fs)) {
        if (!fs.image && !fs.all) {
          conf.userSync.filterSettings.image = {
            bidders: '*',
            filter: 'include'
          };
        }
      }
    }
    usConfig = Object.assign(usConfig, conf.userSync);
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
      loadIframes();
      // Image pixels
      fireImagePixels();
    } catch (e) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Error firing user syncs', e);
    }
    // Reset the user sync queue
    queue = getDefaultQueue();
  }
  function forEachFire(queue, fn) {
    // Randomize the order of the pixels before firing
    // This is to avoid giving any bidder who has registered multiple syncs
    // any preferential treatment and balancing them out
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)(queue).forEach(function (sync) {
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
      var _sync = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(sync, 2),
        bidderName = _sync[0],
        trackingPixelUrl = _sync[1];
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Invoking image pixel user sync for bidder: ".concat(bidderName));
      // Create image object and add the src url
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.triggerPixel)(trackingPixelUrl);
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
      var _sync2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(sync, 2),
        bidderName = _sync2[0],
        iframeUrl = _sync2[1];
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)("Invoking iframe user sync for bidder: ".concat(bidderName));
      // Insert iframe into DOM
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.insertUserSyncIframe)(iframeUrl);
      // for a bidder, if iframe sync is present then remove image pixel
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
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logMessage)("already fired syncs for \"".concat(bidder, "\", ignoring registerSync call"));
    }
    if (!usConfig.syncEnabled || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(queue[type])) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("User sync type \"".concat(type, "\" not supported"));
    }
    if (!bidder) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Bidder is required for registering sync");
    }
    if (usConfig.syncsPerBidder !== 0 && Number(numAdapterBids[bidder]) >= usConfig.syncsPerBidder) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Number of user syncs exceeded for \"".concat(bidder, "\""));
    }
    var canBidderRegisterSync = publicApi.canBidderRegisterSync(type, bidder);
    if (!canBidderRegisterSync) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Bidder \"".concat(bidder, "\" not permitted to register their \"").concat(type, "\" userSync pixels."));
    }

    // the bidder's pixel has passed all checks and is allowed to register
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
    var filterConfig = usConfig.filterSettings;

    // apply the filter check if the config object is there (eg filterSettings.iframe exists) and if the config object is properly setup
    if (isFilterConfigValid(filterConfig, type)) {
      permittedPixels[type] = true;
      var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
      var biddersToFilter = activeConfig.bidders === '*' ? [bidder] : activeConfig.bidders;
      var filterType = activeConfig.filter || 'include'; // set default if undefined

      // return true if the bidder is either: not part of the include (ie outside the whitelist) or part of the exclude (ie inside the blacklist)
      var checkForFiltering = {
        'include': function include(bidders, bidder) {
          return !(0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(bidders, bidder);
        },
        'exclude': function exclude(bidders, bidder) {
          return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(bidders, bidder);
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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected presence of the \"filterSettings.all\" and \"filterSettings.".concat(type, "\" in userSync config.  You cannot mix \"all\" with \"iframe/image\" configs; they are mutually exclusive."));
      return false;
    }
    var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
    var activeConfigName = filterConfig.all ? 'all' : type;

    // if current pixel type isn't part of the config's logic, skip rest of the config checks...
    // we return false to skip subsequent filter checks in shouldBidderBeBlocked() function
    if (!activeConfig) {
      return false;
    }
    var filterField = activeConfig.filter;
    var biddersField = activeConfig.bidders;
    if (filterField && filterField !== 'include' && filterField !== 'exclude') {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("UserSync \"filterSettings.".concat(activeConfigName, ".filter\" setting '").concat(filterField, "' is not a valid option; use either 'include' or 'exclude'."));
      return false;
    }
    if (biddersField !== '*' && !(Array.isArray(biddersField) && biddersField.length > 0 && biddersField.every(function (bidderInList) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)(bidderInList) && bidderInList !== '*';
    }))) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected an invalid setup in userSync \"filterSettings.".concat(activeConfigName, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."));
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
var userSync = newUserSync(Object.defineProperties({
  config: _config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('userSync')
}, {
  browserSupportsCookies: {
    get: function get() {
      // call storage lazily to give time for consent data to be available
      return !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSafariBrowser)() && storage.cookiesAreEnabled();
    }
  }
}));

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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_each": function() { return /* binding */ _each; },
/* harmony export */   "_map": function() { return /* binding */ _map; },
/* harmony export */   "_setEventEmitter": function() { return /* binding */ _setEventEmitter; },
/* harmony export */   "adUnitsFilter": function() { return /* binding */ adUnitsFilter; },
/* harmony export */   "bind": function() { return /* binding */ bind; },
/* harmony export */   "buildUrl": function() { return /* binding */ buildUrl; },
/* harmony export */   "callBurl": function() { return /* binding */ callBurl; },
/* harmony export */   "checkCookieSupport": function() { return /* binding */ checkCookieSupport; },
/* harmony export */   "chunk": function() { return /* binding */ chunk; },
/* harmony export */   "compareOn": function() { return /* binding */ compareOn; },
/* harmony export */   "contains": function() { return /* binding */ contains; },
/* harmony export */   "convertCamelToUnderscore": function() { return /* binding */ convertCamelToUnderscore; },
/* harmony export */   "convertTypes": function() { return /* binding */ convertTypes; },
/* harmony export */   "createInvisibleIframe": function() { return /* binding */ createInvisibleIframe; },
/* harmony export */   "createTrackPixelHtml": function() { return /* binding */ createTrackPixelHtml; },
/* harmony export */   "cyrb53Hash": function() { return /* binding */ cyrb53Hash; },
/* harmony export */   "deepClone": function() { return /* binding */ deepClone; },
/* harmony export */   "delayExecution": function() { return /* binding */ delayExecution; },
/* harmony export */   "fill": function() { return /* binding */ fill; },
/* harmony export */   "flatten": function() { return /* binding */ flatten; },
/* harmony export */   "formatQS": function() { return /* binding */ formatQS; },
/* harmony export */   "generateUUID": function() { return /* binding */ generateUUID; },
/* harmony export */   "getBidIdParameter": function() { return /* binding */ getBidIdParameter; },
/* harmony export */   "getBidRequest": function() { return /* binding */ getBidRequest; },
/* harmony export */   "getBidderCodes": function() { return /* binding */ getBidderCodes; },
/* harmony export */   "getDNT": function() { return /* binding */ getDNT; },
/* harmony export */   "getDefinedParams": function() { return /* binding */ getDefinedParams; },
/* harmony export */   "getHighestCpm": function() { return /* binding */ getHighestCpm; },
/* harmony export */   "getKeyByValue": function() { return /* binding */ getKeyByValue; },
/* harmony export */   "getMaxValueFromArray": function() { return /* binding */ getMaxValueFromArray; },
/* harmony export */   "getMinValueFromArray": function() { return /* binding */ getMinValueFromArray; },
/* harmony export */   "getOldestHighestCpmBid": function() { return /* binding */ getOldestHighestCpmBid; },
/* harmony export */   "getParameterByName": function() { return /* binding */ getParameterByName; },
/* harmony export */   "getPerformanceNow": function() { return /* binding */ getPerformanceNow; },
/* harmony export */   "getPrebidInternal": function() { return /* binding */ getPrebidInternal; },
/* harmony export */   "getUniqueIdentifierStr": function() { return /* binding */ getUniqueIdentifierStr; },
/* harmony export */   "getUserConfiguredParams": function() { return /* binding */ getUserConfiguredParams; },
/* harmony export */   "getValue": function() { return /* binding */ getValue; },
/* harmony export */   "getWindowFromDocument": function() { return /* binding */ getWindowFromDocument; },
/* harmony export */   "getWindowSelf": function() { return /* binding */ getWindowSelf; },
/* harmony export */   "getWindowTop": function() { return /* binding */ getWindowTop; },
/* harmony export */   "groupBy": function() { return /* binding */ groupBy; },
/* harmony export */   "hasDeviceAccess": function() { return /* binding */ hasDeviceAccess; },
/* harmony export */   "inIframe": function() { return /* binding */ inIframe; },
/* harmony export */   "insertElement": function() { return /* binding */ insertElement; },
/* harmony export */   "insertHtmlIntoIframe": function() { return /* binding */ insertHtmlIntoIframe; },
/* harmony export */   "insertUserSyncIframe": function() { return /* binding */ insertUserSyncIframe; },
/* harmony export */   "isAdUnitCodeMatchingSlot": function() { return /* binding */ isAdUnitCodeMatchingSlot; },
/* harmony export */   "isApnGetTagDefined": function() { return /* binding */ isApnGetTagDefined; },
/* harmony export */   "isArray": function() { return /* binding */ isArray; },
/* harmony export */   "isArrayOfNums": function() { return /* binding */ isArrayOfNums; },
/* harmony export */   "isBoolean": function() { return /* binding */ isBoolean; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "isEmptyStr": function() { return /* binding */ isEmptyStr; },
/* harmony export */   "isFn": function() { return /* binding */ isFn; },
/* harmony export */   "isGptPubadsDefined": function() { return /* binding */ isGptPubadsDefined; },
/* harmony export */   "isInteger": function() { return /* binding */ isInteger; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isSafariBrowser": function() { return /* binding */ isSafariBrowser; },
/* harmony export */   "isStr": function() { return /* binding */ isStr; },
/* harmony export */   "isValidMediaTypes": function() { return /* binding */ isValidMediaTypes; },
/* harmony export */   "logError": function() { return /* binding */ logError; },
/* harmony export */   "logInfo": function() { return /* binding */ logInfo; },
/* harmony export */   "logMessage": function() { return /* binding */ logMessage; },
/* harmony export */   "logWarn": function() { return /* binding */ logWarn; },
/* harmony export */   "memoize": function() { return /* binding */ memoize; },
/* harmony export */   "mergeDeep": function() { return /* binding */ mergeDeep; },
/* harmony export */   "parseQueryStringParameters": function() { return /* binding */ parseQueryStringParameters; },
/* harmony export */   "parseSizesInput": function() { return /* binding */ parseSizesInput; },
/* harmony export */   "parseUrl": function() { return /* binding */ parseUrl; },
/* harmony export */   "pick": function() { return /* binding */ pick; },
/* harmony export */   "prefixLog": function() { return /* binding */ prefixLog; },
/* harmony export */   "replaceAuctionPrice": function() { return /* binding */ replaceAuctionPrice; },
/* harmony export */   "replaceClickThrough": function() { return /* binding */ replaceClickThrough; },
/* harmony export */   "safeJSONParse": function() { return /* binding */ safeJSONParse; },
/* harmony export */   "setScriptAttributes": function() { return /* binding */ setScriptAttributes; },
/* harmony export */   "shuffle": function() { return /* binding */ shuffle; },
/* harmony export */   "timestamp": function() { return /* binding */ timestamp; },
/* harmony export */   "transformAdServerTargetingObj": function() { return /* binding */ transformAdServerTargetingObj; },
/* harmony export */   "transformBidderParamKeywords": function() { return /* binding */ transformBidderParamKeywords; },
/* harmony export */   "triggerPixel": function() { return /* binding */ triggerPixel; },
/* harmony export */   "uniques": function() { return /* binding */ uniques; },
/* harmony export */   "unsupportedBidderMessage": function() { return /* binding */ unsupportedBidderMessage; }
/* harmony export */ });
/* unused harmony exports internal, tryAppendQueryString, getAdUnitSizes, parseGPTSingleSizeArray, parseGPTSingleSizeArrayToRtbSize, getWindowLocation, hasConsoleLogger, debugTurnedOn, isA, hasOwn, waitForElementToLoad, createTrackPixelIframeHtml, getValueString, getKeys, getLatestHighestCpmBid, isSlotMatchingAdUnitCode, getGptSlotForAdUnitCode, getGptSlotInfoForAdUnitCode, cleanObj, parseQS, deepEqual, escapeUnsafeChars */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-clone */ "./node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _constants_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.json */ "./src/constants.json");
/* harmony import */ var _utils_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/promise.js */ "./src/utils/promise.js");











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
var eventEmitter;
function _setEventEmitter(emitFn) {
  // called from events.js - this hoop is to avoid circular imports
  eventEmitter = emitFn;
}
function emitEvent() {
  if (eventEmitter != null) {
    eventEmitter.apply(void 0, arguments);
  }
}

// this allows stubbing of utility functions that are used internally by other utility functions
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
}();

// generate a random string (to be used as a dynamic JSONP callback)
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
}

// parse a query string object passed in bid params
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
}

// transform an AdServer targeting bids into a query string to send to the adserver
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
    }
    // TODO - remove this else block when we're ready to deprecate adUnit.sizes for bidders
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
  var parsedSizes = [];

  // if a string for now we can assume it is a single size, like "300x250"
  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(',');

    // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line
    var sizeRegex = /^(\d)+x(\d)+$/i;
    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(sizeObj) === 'object') {
    var sizeArrayLength = sizeObj.length;

    // don't process empty array
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
}

// Parse a GPT style single size array, (i.e [300, 250])
// into an AppNexus style string, (i.e. 300x250)
function parseGPTSingleSizeArray(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return singleSize[0] + 'x' + singleSize[1];
  }
}

// Parse a GPT style single size array, (i.e [300, 250])
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
    // eslint-disable-next-line no-console
    console.log.apply(console, decorateLog(arguments, 'MESSAGE:'));
  }
}
function logInfo() {
  if (debugTurnedOn() && consoleInfoExists) {
    // eslint-disable-next-line no-console
    console.info.apply(console, decorateLog(arguments, 'INFO:'));
  }
}
function logWarn() {
  if (debugTurnedOn() && consoleWarnExists) {
    // eslint-disable-next-line no-console
    console.warn.apply(console, decorateLog(arguments, 'WARNING:'));
  }
  emitEvent(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.AUCTION_DEBUG, {
    type: 'WARNING',
    arguments: arguments
  });
}
function logError() {
  if (debugTurnedOn() && consoleErrorExists) {
    // eslint-disable-next-line no-console
    console.error.apply(console, decorateLog(arguments, 'ERROR:'));
  }
  emitEvent(_constants_json__WEBPACK_IMPORTED_MODULE_2__.EVENTS.AUCTION_DEBUG, {
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
  var bidder = _config_js__WEBPACK_IMPORTED_MODULE_3__.config.getCurrentBidder();
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
  return !!_config_js__WEBPACK_IMPORTED_MODULE_3__.config.getConfig('debug');
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
* @return {HTML Element}
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
  return new _utils_promise_js__WEBPACK_IMPORTED_MODULE_4__.GreedyPromise(function (resolve) {
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
  if (source === _constants_json__WEBPACK_IMPORTED_MODULE_2__.S2S.SRC && burl) {
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
    var result = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.find)(bidderRequest.bids, function (bid) {
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
  }).reduce(flatten, []).filter(function (bidder) {
    return typeof bidder !== 'undefined';
  }).filter(uniques);
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
}

// This function will get highest cpm value bid, in case of tie it will return the bid with lowest timeToRespond
var getHighestCpm = getHighestCpmCallback('timeToRespond', function (previous, current) {
  return previous > current;
});

// This function will get the oldest hightest cpm value bid, in case of tie it will return the bid which came in first
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2448
var getOldestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous > current;
});

// This function will get the latest hightest cpm value bid, in case of tie it will return the bid which came in last
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
  var counter = array.length;

  // while there are elements in the array
  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter);

    // decrease counter by 1
    counter--;

    // and swap the last element with it
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
function adUnitsFilter(filter, bid) {
  return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.includes)(filter, bid && bid.adUnitCode);
}
function deepClone(obj) {
  return just_clone__WEBPACK_IMPORTED_MODULE_0___default()(obj);
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
  return _config_js__WEBPACK_IMPORTED_MODULE_3__.config.getConfig('deviceAccess') !== false;
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
    return Object.assign(bid, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, param, object[param]));
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
    return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.includes)(SUPPORTED_MEDIA_TYPES, type);
  })) {
    return false;
  }
  if (mediaTypes.video && mediaTypes.video.context) {
    return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.includes)(SUPPORTED_STREAM_TYPES, mediaTypes.video.context);
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
 * @summary Uses the adUnit's code in order to find a matching gpt slot object on the page
 */
function getGptSlotForAdUnitCode(adUnitCode) {
  var matchingSlot;
  if (isGptPubadsDefined()) {
    // find the first matching gpt slot on the page
    matchingSlot = (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.find)(window.googletag.pubads().getSlots(), isSlotMatchingAdUnitCode(adUnitCode));
  }
  return matchingSlot;
}
;

/**
 * @summary Uses the adUnit's code in order to find a matching gptSlot on the page
 */
function getGptSlotInfoForAdUnitCode(adUnitCode) {
  var matchingSlot = getGptSlotForAdUnitCode(adUnitCode);
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
  if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) !== 'object') {
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
      }

      // don't send invalid values
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
  return Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(array));
}
function getMaxValueFromArray(array) {
  return Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(array));
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
      _criteria$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_criteria$split, 2),
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
  }
  // in window.location 'search' is string, not object
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
  if (obj1 === obj2) return true;else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(obj1) === 'object' && obj1 !== null && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(obj2) === 'object' && obj2 !== null && (!checkTypes || obj1.constructor === obj2.constructor)) {
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
        if (!target[key]) Object.assign(target, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else if (isArray(source[key])) {
        if (!target[key]) {
          Object.assign(target, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(source[key])));
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
        Object.assign(target, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key, source[key]));
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
      var result = (opA & 0x003fffff) * opB;
      // 2. We can remove an integer coersion from the statement above because:
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

/**
 * returns a window object, which holds the provided document or null
 * @param {Document} doc
 * @returns {Window}
 */
function getWindowFromDocument(doc) {
  return doc ? doc.defaultView : null;
}

/**
 * returns the result of `JSON.parse(data)`, or undefined if that throws an error.
 * @param data
 * @returns {any}
 */
function safeJSONParse(data) {
  try {
    return JSON.parse(data);
  } catch (e) {}
}

/**
 * Returns a memoized version of `fn`.
 *
 * @param fn
 * @param key cache key generator, invoked with the same arguments passed to `fn`.
 *        By default, the first argument is used as key.
 * @return {function(): any}
 */
function memoize(fn) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (arg) {
    return arg;
  };
  var cache = new Map();
  var memoized = function memoized() {
    var cacheKey = key.apply(this, arguments);
    if (!cache.has(cacheKey)) {
      cache.set(cacheKey, fn.apply(this, arguments));
    }
    return cache.get(cacheKey);
  };
  memoized.clear = cache.clear.bind(cache);
  return memoized;
}

/**
 * Sets dataset attributes on a script
 * @param {Script} script
 * @param {object} attributes
 */
function setScriptAttributes(script, attributes) {
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      script.setAttribute(key, attributes[key]);
    }
  }
}

/**
 * Encode a string for inclusion in HTML.
 * See https://pragmaticwebsecurity.com/articles/spasecurity/json-stringify-xss.html and
 * https://codeql.github.com/codeql-query-help/javascript/js-bad-code-sanitization/
 * @return {string}
 */
var escapeUnsafeChars = function () {
  var escapes = {
    '<': "\\u003C",
    '>': "\\u003E",
    '/': "\\u002F",
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  return function (str) {
    return str.replace(/[<>\b\f\n\r\t\0\u2028\u2029\\]/g, function (x) {
      return escapes[x];
    });
  };
}();

/***/ }),

/***/ "./src/utils/cpm.js":
/*!**************************!*\
  !*** ./src/utils/cpm.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustCpm": function() { return /* binding */ adjustCpm; }
/* harmony export */ });
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _bidderSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bidderSettings.js */ "./src/bidderSettings.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



function adjustCpm(cpm, bidResponse, bidRequest) {
  var _bidRequest;
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref$index = _ref.index,
    index = _ref$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_0__.auctionManager.index : _ref$index,
    _ref$bs = _ref.bs,
    bs = _ref$bs === void 0 ? _bidderSettings_js__WEBPACK_IMPORTED_MODULE_1__.bidderSettings : _ref$bs;
  bidRequest = bidRequest || index.getBidRequest(bidResponse);
  var bidCpmAdjustment = bs.get((bidResponse === null || bidResponse === void 0 ? void 0 : bidResponse.bidderCode) || ((_bidRequest = bidRequest) === null || _bidRequest === void 0 ? void 0 : _bidRequest.bidder), 'bidCpmAdjustment');
  if (bidCpmAdjustment && typeof bidCpmAdjustment === 'function') {
    try {
      return bidCpmAdjustment(cpm, Object.assign({}, bidResponse), bidRequest);
    } catch (e) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('Error during bid adjustment', e);
    }
  }
  return cpm;
}

/***/ }),

/***/ "./src/utils/perfMetrics.js":
/*!**********************************!*\
  !*** ./src/utils/perfMetrics.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newMetrics": function() { return /* binding */ newMetrics; },
/* harmony export */   "timedAuctionHook": function() { return /* binding */ timedAuctionHook; },
/* harmony export */   "useMetrics": function() { return /* binding */ useMetrics; }
/* harmony export */ });
/* unused harmony exports CONFIG_TOGGLE, metricsFactory, hookTimer, timedBidResponseHook */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./src/config.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CONFIG_TOGGLE = 'performanceMetrics';
var getTime = window.performance && window.performance.now ? function () {
  return window.performance.now();
} : function () {
  return Date.now();
};
var NODES = new WeakMap();
function metricsFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$now = _ref.now,
    now = _ref$now === void 0 ? getTime : _ref$now,
    _ref$mkNode = _ref.mkNode,
    mkNode = _ref$mkNode === void 0 ? makeNode : _ref$mkNode,
    _ref$mkTimer = _ref.mkTimer,
    mkTimer = _ref$mkTimer === void 0 ? makeTimer : _ref$mkTimer,
    _ref$mkRenamer = _ref.mkRenamer,
    mkRenamer = _ref$mkRenamer === void 0 ? function (rename) {
      return rename;
    } : _ref$mkRenamer,
    _ref$nodes = _ref.nodes,
    nodes = _ref$nodes === void 0 ? NODES : _ref$nodes;
  return function newMetrics() {
    function makeMetrics(self) {
      var rename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (n) {
        return {
          forEach: function forEach(fn) {
            fn(n);
          }
        };
      };
      rename = mkRenamer(rename);
      function accessor(slot) {
        return function (name) {
          return self.dfWalk({
            visit: function visit(edge, node) {
              var obj = node[slot];
              if (obj.hasOwnProperty(name)) {
                return obj[name];
              }
            }
          });
        };
      }
      var getTimestamp = accessor('timestamps');

      /**
       * Register a metric.
       *
       * @param name metric name
       * @param value metric valiue
       */
      function setMetric(name, value) {
        var names = rename(name);
        self.dfWalk({
          follow: function follow(inEdge, outEdge) {
            return outEdge.propagate && (!inEdge || !inEdge.stopPropagation);
          },
          visit: function visit(edge, node) {
            names.forEach(function (name) {
              if (edge == null) {
                node.metrics[name] = value;
              } else {
                if (!node.groups.hasOwnProperty(name)) {
                  node.groups[name] = [];
                }
                node.groups[name].push(value);
              }
            });
          }
        });
      }

      /**
       * Mark the current time as a checkpoint with the given name, to be referenced later
       * by `timeSince` or `timeBetween`.
       *
       * @param name checkpoint name
       */
      function checkpoint(name) {
        self.timestamps[name] = now();
      }

      /**
       * Get the tame passed since `checkpoint`, and optionally save it as a metric.
       *
       * @param checkpoint checkpoint name
       * @param metric? metric name
       * @return {number} time between now and `checkpoint`
       */
      function timeSince(checkpoint, metric) {
        var ts = getTimestamp(checkpoint);
        var elapsed = ts != null ? now() - ts : null;
        if (metric != null) {
          setMetric(metric, elapsed);
        }
        return elapsed;
      }

      /**
       * Get the time passed between `startCheckpoint` and `endCheckpoint`, optionally saving it as a metric.
       *
       * @param startCheckpoint begin checkpoint
       * @param endCheckpoint end checkpoint
       * @param metric? metric name
       * @return {number} time passed between `startCheckpoint` and `endCheckpoint`
       */
      function timeBetween(startCheckpoint, endCheckpoint, metric) {
        var start = getTimestamp(startCheckpoint);
        var end = getTimestamp(endCheckpoint);
        var elapsed = start != null && end != null ? end - start : null;
        if (metric != null) {
          setMetric(metric, elapsed);
        }
        return elapsed;
      }

      /**
       * A function that, when called, stops a time measure and saves it as a metric.
       *
       * @typedef {function(): void} MetricsTimer
       * @template {function} F
       * @property {function(F): F} stopBefore returns a wrapper around the given function that begins by
       *   stopping this time measure.
       * @property {function(F): F} stopAfter returns a wrapper around the given function that ends by
       *   stopping this time measure.
       */

      /**
       * Start measuring a time metric with the given name.
       *
       * @param name metric name
       * @return {MetricsTimer}
       */
      function startTiming(name) {
        return mkTimer(now, function (val) {
          return setMetric(name, val);
        });
      }

      /**
       * Run fn and measure the time spent in it.
       *
       * @template T
       * @param name the name to use for the measured time metric
       * @param {function(): T} fn
       * @return {T} the return value of `fn`
       */
      function measureTime(name, fn) {
        return startTiming(name).stopAfter(fn)();
      }

      /**
       * @typedef {function: T} HookFn
       * @property {function(T): void} bail
       *
       * @template T
       * @typedef {T: HookFn} TimedHookFn
       * @property {function(): void} stopTiming
       * @property {T} untimed
       */

      /**
       * Convenience method for measuring time spent in a `.before` or `.after` hook.
       *
       * @template T
       * @param name metric name
       * @param {HookFn} next the hook's `next` (first) argument
       * @param {function(TimedHookFn): T} fn a function that will be run immediately; it takes `next`,
       *    where both `next` and `next.bail` automatically
       *    call `stopTiming` before continuing with the original hook.
       * @return {T} fn's return value
       */
      function measureHookTime(name, next, fn) {
        var stopTiming = startTiming(name);
        return fn(function (orig) {
          var next = stopTiming.stopBefore(orig);
          next.bail = orig.bail && stopTiming.stopBefore(orig.bail);
          next.stopTiming = stopTiming;
          next.untimed = orig;
          return next;
        }(next));
      }

      /**
       * Get all registered metrics.
       * @return {{}}
       */
      function getMetrics() {
        var result = {};
        self.dfWalk({
          visit: function visit(edge, node) {
            result = Object.assign({}, !edge || edge.includeGroups ? node.groups : null, node.metrics, result);
          }
        });
        return result;
      }

      /**
       * Create and return a new metrics object that starts as a view on all metrics registered here,
       * and - by default - also propagates all new metrics here.
       *
       * Propagated metrics are grouped together, and intended for repeated operations. For example, with the following:
       *
       * ```
       * const metrics = newMetrics();
       * const requests = metrics.measureTime('buildRequests', buildRequests)
       * requests.forEach((req) => {
       *   const requestMetrics = metrics.fork();
       *   requestMetrics.measureTime('processRequest', () => processRequest(req);
       * })
       * ```
       *
       * if `buildRequests` takes 10ms and returns 3 objects, which respectively take 100, 200, and 300ms in `processRequest`, then
       * the final `metrics.getMetrics()` would be:
       *
       * ```
       * {
       *    buildRequests: 10,
       *    processRequest: [100, 200, 300]
       * }
       * ```
       *
       * while the inner `requestMetrics.getMetrics()` would be:
       *
       * ```
       * {
       *   buildRequests: 10,
       *   processRequest: 100 // or 200 for the 2nd loop, etc
       * }
       * ```
       *
       *
       * @param propagate if false, the forked metrics will not be propagated here
       * @param stopPropagation if true, propagation from the new metrics is stopped here - instead of
       *   continuing up the chain (if for example these metrics were themselves created through `.fork()`)
       * @param includeGroups if true, the forked metrics will also replicate metrics that were propagated
       *   here from elsewhere. For example:
       *   ```
       *   const metrics = newMetrics();
       *   const op1 = metrics.fork();
       *   const withoutGroups = metrics.fork();
       *   const withGroups = metrics.fork({includeGroups: true});
       *   op1.setMetric('foo', 'bar');
       *   withoutGroups.getMetrics() // {}
       *   withGroups.getMetrics() // {foo: ['bar']}
       *   ```
       */
      function fork() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$propagate = _ref2.propagate,
          propagate = _ref2$propagate === void 0 ? true : _ref2$propagate,
          _ref2$stopPropagation = _ref2.stopPropagation,
          stopPropagation = _ref2$stopPropagation === void 0 ? false : _ref2$stopPropagation,
          _ref2$includeGroups = _ref2.includeGroups,
          includeGroups = _ref2$includeGroups === void 0 ? false : _ref2$includeGroups;
        return makeMetrics(mkNode([[self, {
          propagate: propagate,
          stopPropagation: stopPropagation,
          includeGroups: includeGroups
        }]]), rename);
      }

      /**
       * Join `otherMetrics` with these; all metrics from `otherMetrics` will (by default) be propagated here,
       * and all metrics from here will be included in `otherMetrics`.
       *
       * `propagate`, `stopPropagation` and `includeGroups` have the same semantics as in `.fork()`.
       */
      function join(otherMetrics) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$propagate = _ref3.propagate,
          propagate = _ref3$propagate === void 0 ? true : _ref3$propagate,
          _ref3$stopPropagation = _ref3.stopPropagation,
          stopPropagation = _ref3$stopPropagation === void 0 ? false : _ref3$stopPropagation,
          _ref3$includeGroups = _ref3.includeGroups,
          includeGroups = _ref3$includeGroups === void 0 ? false : _ref3$includeGroups;
        var other = nodes.get(otherMetrics);
        if (other != null) {
          other.addParent(self, {
            propagate: propagate,
            stopPropagation: stopPropagation,
            includeGroups: includeGroups
          });
        }
      }

      /**
       * return a version of these metrics where all new metrics are renamed according to `renameFn`.
       *
       * @param {function(String): Array[String]} renameFn
       */
      function renameWith(renameFn) {
        return makeMetrics(self, renameFn);
      }

      /**
       * Create a new metrics object that uses the same propagation and renaming rules as this one.
       */
      function newMetrics() {
        return makeMetrics(self.newSibling(), rename);
      }
      var metrics = {
        startTiming: startTiming,
        measureTime: measureTime,
        measureHookTime: measureHookTime,
        checkpoint: checkpoint,
        timeSince: timeSince,
        timeBetween: timeBetween,
        setMetric: setMetric,
        getMetrics: getMetrics,
        fork: fork,
        join: join,
        newMetrics: newMetrics,
        renameWith: renameWith,
        toJSON: function toJSON() {
          return getMetrics();
        }
      };
      nodes.set(metrics, self);
      return metrics;
    }
    return makeMetrics(mkNode([]));
  };
}
function wrapFn(fn, before, after) {
  return function () {
    before && before();
    try {
      return fn.apply(this, arguments);
    } finally {
      after && after();
    }
  };
}
function makeTimer(now, cb) {
  var start = now();
  var done = false;
  function stopTiming() {
    if (!done) {
      // eslint-disable-next-line standard/no-callback-literal
      cb(now() - start);
      done = true;
    }
  }
  stopTiming.stopBefore = function (fn) {
    return wrapFn(fn, stopTiming);
  };
  stopTiming.stopAfter = function (fn) {
    return wrapFn(fn, null, stopTiming);
  };
  return stopTiming;
}
function makeNode(parents) {
  return {
    metrics: {},
    timestamps: {},
    groups: {},
    addParent: function addParent(node, edge) {
      parents.push([node, edge]);
    },
    newSibling: function newSibling() {
      return makeNode(parents.slice());
    },
    dfWalk: function dfWalk() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        visit = _ref4.visit,
        _ref4$follow = _ref4.follow,
        follow = _ref4$follow === void 0 ? function () {
          return true;
        } : _ref4$follow,
        _ref4$visited = _ref4.visited,
        visited = _ref4$visited === void 0 ? new Set() : _ref4$visited,
        inEdge = _ref4.inEdge;
      var res;
      if (!visited.has(this)) {
        visited.add(this);
        res = visit(inEdge, this);
        if (res != null) return res;
        var _iterator = _createForOfIteratorHelper(parents),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),
              parent = _step$value[0],
              outEdge = _step$value[1];
            if (follow(inEdge, outEdge)) {
              res = parent.dfWalk({
                visit: visit,
                follow: follow,
                visited: visited,
                inEdge: outEdge
              });
              if (res != null) return res;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  };
}
var nullMetrics = function () {
  var nop = function nop() {};
  var empty = function empty() {
    return {};
  };
  var none = {
    forEach: nop
  };
  var nullTimer = function nullTimer() {
    return null;
  };
  nullTimer.stopBefore = function (fn) {
    return fn;
  };
  nullTimer.stopAfter = function (fn) {
    return fn;
  };
  var nullNode = Object.defineProperties({
    dfWalk: nop,
    newSibling: function newSibling() {
      return nullNode;
    },
    addParent: nop
  }, Object.fromEntries(['metrics', 'timestamps', 'groups'].map(function (prop) {
    return [prop, {
      get: empty
    }];
  })));
  return metricsFactory({
    now: function now() {
      return 0;
    },
    mkNode: function mkNode() {
      return nullNode;
    },
    mkRenamer: function mkRenamer() {
      return function () {
        return none;
      };
    },
    mkTimer: function mkTimer() {
      return nullTimer;
    },
    nodes: {
      get: nop,
      set: nop
    }
  })();
}();
var enabled = true;
_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig(CONFIG_TOGGLE, function (cfg) {
  enabled = !!cfg[CONFIG_TOGGLE];
});

/**
 * convenience fallback function for metrics that may be undefined, especially during tests.
 */
function useMetrics(metrics) {
  return enabled && metrics || nullMetrics;
}
var newMetrics = function () {
  var makeMetrics = metricsFactory();
  return function () {
    return enabled ? makeMetrics() : nullMetrics;
  };
}();
function hookTimer(prefix, getMetrics) {
  return function (name, hookFn) {
    return function (next) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var that = this;
      return useMetrics(getMetrics.apply(that, args)).measureHookTime(prefix + name, next, function (next) {
        return hookFn.call.apply(hookFn, [that, next].concat(args));
      });
    };
  };
}
var timedAuctionHook = hookTimer('requestBids.', function (req) {
  return req.metrics;
});
var timedBidResponseHook = hookTimer('addBidResponse.', function (_, bid) {
  return bid.metrics;
});

/***/ }),

/***/ "./src/utils/promise.js":
/*!******************************!*\
  !*** ./src/utils/promise.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreedyPromise": function() { return /* binding */ GreedyPromise; },
/* harmony export */   "defer": function() { return /* binding */ defer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
var SUCCESS = 0;
var FAIL = 1;

/**
 * A version of Promise that runs callbacks synchronously when it can (i.e. after it's been fulfilled or rejected).
 */
var _result = /*#__PURE__*/new WeakMap();
var _callbacks = /*#__PURE__*/new WeakMap();
var GreedyPromise = /*#__PURE__*/function () {
  function GreedyPromise(resolver) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GreedyPromise);
    _classPrivateFieldInitSpec(this, _result, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _callbacks, {
      writable: true,
      value: void 0
    });
    if (typeof resolver !== 'function') {
      throw new Error('resolver not a function');
    }
    var result = [];
    var callbacks = [];
    var _map = [SUCCESS, FAIL].map(function (type) {
        return function (value) {
          if (type === SUCCESS && typeof (value === null || value === void 0 ? void 0 : value.then) === 'function') {
            value.then(resolve, reject);
          } else if (!result.length) {
            result.push(type, value);
            while (callbacks.length) {
              callbacks.shift()();
            }
          }
        };
      }),
      _map2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_map, 2),
      resolve = _map2[0],
      reject = _map2[1];
    try {
      resolver(resolve, reject);
    } catch (e) {
      reject(e);
    }
    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _result, result);
    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _callbacks, callbacks);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GreedyPromise, [{
    key: "then",
    value: function then(onSuccess, onError) {
      var _this = this;
      var result = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _result);
      return new this.constructor(function (resolve, reject) {
        var continuation = function continuation() {
          var value = result[1];
          var _ref = result[0] === SUCCESS ? [onSuccess, resolve] : [onError, reject],
            _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            handler = _ref2[0],
            resolveFn = _ref2[1];
          if (typeof handler === 'function') {
            try {
              value = handler(value);
            } catch (e) {
              reject(e);
              return;
            }
            resolveFn = resolve;
          }
          resolveFn(value);
        };
        result.length ? continuation() : (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _callbacks).push(continuation);
      });
    }
  }, {
    key: "catch",
    value: function _catch(onError) {
      return this.then(null, onError);
    }
  }, {
    key: "finally",
    value: function _finally(onFinally) {
      var _this2 = this;
      var val;
      return this.then(function (v) {
        val = v;
        return onFinally();
      }, function (e) {
        val = _this2.constructor.reject(e);
        return onFinally();
      }).then(function () {
        return val;
      });
    }
  }], [{
    key: "timeout",
    value:
    /**
     * Convenience wrapper for setTimeout; takes care of returning an already fulfilled GreedyPromise when the delay is zero.
     *
     * @param {Number} delayMs delay in milliseconds
     * @returns {GreedyPromise} a promise that resolves (to undefined) in `delayMs` milliseconds
     */
    function timeout() {
      var delayMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new GreedyPromise(function (resolve) {
        delayMs === 0 ? resolve() : setTimeout(resolve, delayMs);
      });
    }
  }, {
    key: "race",
    value: function race(promises) {
      var _this3 = this;
      return new this(function (resolve, reject) {
        _classStaticPrivateMethodGet(_this3, GreedyPromise, _collect).call(_this3, promises, function (success, result) {
          return success ? resolve(result) : reject(result);
        });
      });
    }
  }, {
    key: "all",
    value: function all(promises) {
      var _this4 = this;
      return new this(function (resolve, reject) {
        var res = [];
        _classStaticPrivateMethodGet(_this4, GreedyPromise, _collect).call(_this4, promises, function (success, val, i) {
          return success ? res[i] = val : reject(val);
        }, function () {
          return resolve(res);
        });
      });
    }
  }, {
    key: "allSettled",
    value: function allSettled(promises) {
      var _this5 = this;
      return new this(function (resolve) {
        var res = [];
        _classStaticPrivateMethodGet(_this5, GreedyPromise, _collect).call(_this5, promises, function (success, val, i) {
          return res[i] = success ? {
            status: 'fulfilled',
            value: val
          } : {
            status: 'rejected',
            reason: val
          };
        }, function () {
          return resolve(res);
        });
      });
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      return new this(function (resolve) {
        return resolve(value);
      });
    }
  }, {
    key: "reject",
    value: function reject(error) {
      return new this(function (resolve, reject) {
        return reject(error);
      });
    }
  }]);
  return GreedyPromise;
}();

/**
 * @returns a {promise, resolve, reject} trio where `promise` is resolved by calling `resolve` or `reject`.
 */
function _collect(promises, collector, done) {
  var _this6 = this;
  var cnt = promises.length;
  function clt() {
    collector.apply(this, arguments);
    if (--cnt <= 0 && done) done();
  }
  promises.length === 0 && done ? done() : promises.forEach(function (p, i) {
    return _this6.resolve(p).then(function (val) {
      return clt(true, val, i);
    }, function (err) {
      return clt(false, err, i);
    });
  });
}
function defer() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$promiseFactory = _ref3.promiseFactory,
    promiseFactory = _ref3$promiseFactory === void 0 ? function (resolver) {
      return new GreedyPromise(resolver);
    } : _ref3$promiseFactory;
  function invoker(delegate) {
    return function (val) {
      return delegate(val);
    };
  }
  var resolveFn, rejectFn;
  return {
    promise: promiseFactory(function (resolve, reject) {
      resolveFn = resolve;
      rejectFn = reject;
    }),
    resolve: invoker(resolveFn),
    reject: invoker(rejectFn)
  };
}

/***/ }),

/***/ "./src/video.js":
/*!**********************!*\
  !*** ./src/video.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INSTREAM": function() { return /* binding */ INSTREAM; },
/* harmony export */   "OUTSTREAM": function() { return /* binding */ OUTSTREAM; },
/* harmony export */   "checkVideoBidSetup": function() { return /* binding */ checkVideoBidSetup; },
/* harmony export */   "isValidVideoBid": function() { return /* binding */ isValidVideoBid; }
/* harmony export */ });
/* unused harmony exports videoAdUnit, videoBidder, hasNonVideoBidder */
/* harmony import */ var _adapterManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");






var VIDEO_MEDIA_TYPE = 'video';
var OUTSTREAM = 'outstream';
var INSTREAM = 'instream';

/**
 * Helper functions for working with video-enabled adUnits
 */
var videoAdUnit = function videoAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === VIDEO_MEDIA_TYPE;
  var mediaTypes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(adUnit, 'mediaTypes.video');
  return mediaType || mediaTypes;
};
var videoBidder = function videoBidder(bid) {
  return (0,_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.includes)(_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].videoAdapters, bid.bidder);
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
    index = _ref$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_3__.auctionManager.index : _ref$index;
  var videoMediaType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(index.getMediaTypes(bid), 'video');
  var context = videoMediaType && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(videoMediaType, 'context');
  var useCacheKey = videoMediaType && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(videoMediaType, 'useCacheKey');
  var adUnit = index.getAdUnit(bid);

  // if context not defined assume default 'instream' for video bids
  // instream bids require a vast url or vast xml content
  return checkVideoBidSetup(bid, adUnit, videoMediaType, context, useCacheKey);
}
var checkVideoBidSetup = (0,_hook_js__WEBPACK_IMPORTED_MODULE_4__.hook)('sync', function (bid, adUnit, videoMediaType, context, useCacheKey) {
  if (videoMediaType && (useCacheKey || context !== OUTSTREAM)) {
    // xml-only video bids require a prebid cache url
    if (!_src_config_js__WEBPACK_IMPORTED_MODULE_5__.config.getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.logError)("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: \"...\"} });\n      ");
      return false;
    }
    return !!(bid.vastUrl || bid.vastXml);
  }

  // outstream bids require a renderer on the bid or pub-defined on adunit
  if (context === OUTSTREAM && !useCacheKey) {
    return !!(bid.renderer || adUnit && adUnit.renderer || videoMediaType.renderer);
  }
  return true;
}, 'checkVideoBidSetup');

/***/ }),

/***/ "./src/videoCache.js":
/*!***************************!*\
  !*** ./src/videoCache.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheUrl": function() { return /* binding */ getCacheUrl; },
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax.js */ "./src/ajax.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _auctionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auctionManager.js */ "./src/auctionManager.js");
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
 * Might be useful to be configurable in the future
 * Depending on publisher needs
 */
var ttlBufferInSeconds = 15;

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
    index = _ref$index === void 0 ? _auctionManager_js__WEBPACK_IMPORTED_MODULE_0__.auctionManager.index : _ref$index;
  var vastValue = bid.vastXml ? bid.vastXml : wrapURI(bid.vastUrl, bid.vastImpUrl);
  var auction = index.getAuction(bid);
  var ttlWithBuffer = Number(bid.ttl) + ttlBufferInSeconds;
  var payload = {
    type: 'xml',
    value: vastValue,
    ttlseconds: ttlWithBuffer
  };
  if (_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('cache.vasttrack')) {
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
  var getAjax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _ajax_js__WEBPACK_IMPORTED_MODULE_2__.ajaxBuilder;
  var requestData = {
    puts: bids.map(toStorageRequest)
  };
  var ajax = getAjax(_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('cache.timeout'));
  ajax(_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('cache.url'), shimStorageCallback(done), JSON.stringify(requestData), {
    contentType: 'text/plain',
    withCredentials: true
  });
}
function getCacheUrl(id) {
  return "".concat(_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('cache.url'), "?uuid=").concat(id);
}

/***/ }),

/***/ "./node_modules/dlv/index.js":
/*!***********************************!*\
  !*** ./node_modules/dlv/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ dlv; }
/* harmony export */ });
function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	for (p = 0; p < key.length; p++) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
}


/***/ }),

/***/ "./node_modules/fun-hooks/no-eval/index.js":
/*!*************************************************!*\
  !*** ./node_modules/fun-hooks/no-eval/index.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "./node_modules/just-clone/index.js":
/*!******************************************!*\
  !*** ./node_modules/just-clone/index.js ***!
  \******************************************/
/***/ (function(module) {

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classApplyDescriptorGet; }
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classApplyDescriptorSet; }
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classExtractFieldDescriptor; }
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classPrivateFieldGet; }
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classPrivateFieldSet; }
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/dset/dist/index.mjs":
/*!******************************************!*\
  !*** ./node_modules/dset/dist/index.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dset": function() { return /* binding */ dset; }
/* harmony export */ });
function dset(obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x, k;
	while (i < l) {
		k = keys[i++];
		if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
		t = t[k] = (i === l) ? val : (typeof(x=t[k])===typeof(keys)) ? x : (keys[i]*0 !== 0 || !!~(''+keys[i]).indexOf('.')) ? {} : [];
	}
}


/***/ }),

/***/ "./src/constants.json":
/*!****************************!*\
  !*** ./src/constants.json ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"JSON_MAPPING":{"ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_REJECTED":"bidRejected","NO_BID":"noBid","SEAT_NON_BID":"seatNonBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain","ACAT":"hb_acat"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"S2S":{"SRC":"s2s"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"},"REJECTION_REASON":{"INVALID":"Bid has missing or invalid properties","INVALID_REQUEST_ID":"Invalid request ID","BIDDER_DISALLOWED":"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes"},"PREBID_NATIVE_DATA_KEYS_TO_ORTB":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"NATIVE_ASSET_TYPES":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"NATIVE_IMAGE_TYPES":{"ICON":1,"MAIN":3},"NATIVE_KEYS_THAT_ARE_NOT_ASSETS":["privacyLink","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"]}');

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"prebid-core": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["pbjsChunk"] = self["pbjsChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["fpd"], function() { return __webpack_require__("./src/prebid.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["fpd"],{

/***/ "./libraries/fpd/sua.js":
/*!******************************!*\
  !*** ./libraries/fpd/sua.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHighEntropySUA": function() { return /* binding */ getHighEntropySUA; },
/* harmony export */   "getLowEntropySUA": function() { return /* binding */ getLowEntropySUA; }
/* harmony export */ });
/* unused harmony exports SUA_SOURCE_UNKNOWN, SUA_SOURCE_LOW_ENTROPY, SUA_SOURCE_HIGH_ENTROPY, SUA_SOURCE_UA_HEADER, HIGH_ENTROPY_HINTS, lowEntropySUAAccessor, highEntropySUAAccessor, uaDataToSUA */
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/promise.js */ "./src/utils/promise.js");


var SUA_SOURCE_UNKNOWN = 0;
var SUA_SOURCE_LOW_ENTROPY = 1;
var SUA_SOURCE_HIGH_ENTROPY = 2;
var SUA_SOURCE_UA_HEADER = 3;

// "high entropy" (i.e. privacy-sensitive) fields that can be requested from the navigator.
var HIGH_ENTROPY_HINTS = ['architecture', 'bitness', 'model', 'platformVersion', 'fullVersionList'];

/**
 * Returns low entropy UA client hints encoded as an ortb2.6 device.sua object; or null if no UA client hints are available.
 */
var getLowEntropySUA = lowEntropySUAAccessor();

/**
 * Returns a promise to high entropy UA client hints encoded as an ortb2.6 device.sua object, or null if no UA client hints are available.
 *
 * Note that the return value is a promise because the underlying browser API returns a promise; this
 * seems to plan for additional controls (such as alerts / permission request prompts to the user); it's unclear
 * at the moment if this means that asking for more hints would result in slower / more expensive calls.
 *
 * @param {Array[String]} hints hints to request, defaults to all (HIGH_ENTROPY_HINTS).
 */
var getHighEntropySUA = highEntropySUAAccessor();
function lowEntropySUAAccessor() {
  var _window$navigator;
  var uaData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : _window$navigator.userAgentData;
  var sua = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(uaData) ? null : Object.freeze(uaDataToSUA(SUA_SOURCE_LOW_ENTROPY, uaData));
  return function () {
    return sua;
  };
}
function highEntropySUAAccessor() {
  var _window$navigator2;
  var uaData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_window$navigator2 = window.navigator) === null || _window$navigator2 === void 0 ? void 0 : _window$navigator2.userAgentData;
  var cache = {};
  var keys = new WeakMap();
  return function () {
    var hints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HIGH_ENTROPY_HINTS;
    if (!keys.has(hints)) {
      var sorted = Array.from(hints);
      sorted.sort();
      keys.set(hints, sorted.join('|'));
    }
    var key = keys.get(hints);
    if (!cache.hasOwnProperty(key)) {
      try {
        cache[key] = uaData.getHighEntropyValues(hints).then(function (result) {
          return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(result) ? null : Object.freeze(uaDataToSUA(SUA_SOURCE_HIGH_ENTROPY, result));
        }).catch(function () {
          return null;
        });
      } catch (e) {
        cache[key] = _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.GreedyPromise.resolve(null);
      }
    }
    return cache[key];
  };
}

/**
 * Convert a User Agent client hints object to an ORTB 2.6 device.sua fragment
 * https://iabtechlab.com/wp-content/uploads/2022/04/OpenRTB-2-6_FINAL.pdf
 *
 * @param source source of the UAData object (0 to 3)
 * @param uaData https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/
 * @return {{}}
 */
function uaDataToSUA(source, uaData) {
  function toBrandVersion(brand, version) {
    var bv = {
      brand: brand
    };
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStr)(version) && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmptyStr)(version)) {
      bv.version = version.split('.');
    }
    return bv;
  }
  var sua = {
    source: source
  };
  if (uaData.platform) {
    sua.platform = toBrandVersion(uaData.platform, uaData.platformVersion);
  }
  if (uaData.fullVersionList || uaData.brands) {
    sua.browsers = (uaData.fullVersionList || uaData.brands).map(function (_ref) {
      var brand = _ref.brand,
        version = _ref.version;
      return toBrandVersion(brand, version);
    });
  }
  if (uaData.hasOwnProperty('mobile')) {
    sua.mobile = uaData.mobile ? 1 : 0;
  }
  ['model', 'bitness', 'architecture'].forEach(function (prop) {
    var value = uaData[prop];
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStr)(value)) {
      sua[prop] = value;
    }
  });
  return sua;
}

/***/ })

}]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["analyticsAdapter"],{

/***/ "./libraries/analyticsAdapter/AnalyticsAdapter.js":
/*!********************************************************!*\
  !*** ./libraries/analyticsAdapter/AnalyticsAdapter.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AnalyticsAdapter; }
/* harmony export */ });
/* unused harmony exports _internal, DEFAULT_INCLUDE_EVENTS, setDebounceDelay */
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _src_constants_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/constants.json */ "./src/constants.json");
/* harmony import */ var _src_ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/ajax.js */ "./src/ajax.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/events.js */ "./src/events.js");






var _internal = {
  ajax: _src_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax
};
var ENDPOINT = 'endpoint';
var BUNDLE = 'bundle';
var DEFAULT_INCLUDE_EVENTS = Object.values(_src_constants_json__WEBPACK_IMPORTED_MODULE_1__.EVENTS).filter(function (ev) {
  return ev !== _src_constants_json__WEBPACK_IMPORTED_MODULE_1__.EVENTS.AUCTION_DEBUG;
});
var debounceDelay = 100;
function setDebounceDelay(delay) {
  debounceDelay = delay;
}
function AnalyticsAdapter(_ref) {
  var url = _ref.url,
    analyticsType = _ref.analyticsType,
    global = _ref.global,
    handler = _ref.handler;
  var queue = [];
  var handlers;
  var enabled = false;
  var sampled = true;
  var provider;
  var emptyQueue = function () {
    var running = false;
    var timer;
    var clearQueue = function clearQueue() {
      if (!running) {
        running = true; // needed to avoid recursive re-processing when analytics event handlers trigger other events
        try {
          var i = 0;
          var notDecreasing = 0;
          while (queue.length > 0) {
            i++;
            var len = queue.length;
            queue.shift()();
            if (queue.length >= len) {
              notDecreasing++;
            } else {
              notDecreasing = 0;
            }
            if (notDecreasing >= 10) {
              (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('Detected probable infinite loop, discarding events', queue);
              queue.length = 0;
              return;
            }
          }
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)("".concat(provider, " analytics: processed ").concat(i, " events"));
        } finally {
          running = false;
        }
      }
    };
    return function () {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
      debounceDelay === 0 ? clearQueue() : timer = setTimeout(clearQueue, debounceDelay);
    };
  }();
  return Object.defineProperties({
    track: _track,
    enqueue: _enqueue,
    enableAnalytics: _enable,
    disableAnalytics: _disable,
    getAdapterType: function getAdapterType() {
      return analyticsType;
    },
    getGlobal: function getGlobal() {
      return global;
    },
    getHandler: function getHandler() {
      return handler;
    },
    getUrl: function getUrl() {
      return url;
    }
  }, {
    enabled: {
      get: function get() {
        return enabled;
      }
    }
  });
  function _track(_ref2) {
    var eventType = _ref2.eventType,
      args = _ref2.args;
    if (this.getAdapterType() === BUNDLE) {
      window[global](handler, eventType, args);
    }
    if (this.getAdapterType() === ENDPOINT) {
      _callEndpoint.apply(void 0, arguments);
    }
  }
  function _callEndpoint(_ref3) {
    var eventType = _ref3.eventType,
      args = _ref3.args,
      callback = _ref3.callback;
    _internal.ajax(url, callback, JSON.stringify({
      eventType: eventType,
      args: args
    }));
  }
  function _enqueue(_ref4) {
    var _this2 = this;
    var eventType = _ref4.eventType,
      args = _ref4.args;
    queue.push(function () {
      _this2.track({
        eventType: eventType,
        args: args
      });
    });
    emptyQueue();
  }
  function _enable(config) {
    var _this3 = this;
    provider = config === null || config === void 0 ? void 0 : config.provider;
    var _this = this;
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) === 'object' && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config.options) === 'object') {
      sampled = typeof config.options.sampling === 'undefined' || Math.random() < parseFloat(config.options.sampling);
    } else {
      sampled = true;
    }
    if (sampled) {
      var trackedEvents = function () {
        var _ref5 = config || {},
          _ref5$includeEvents = _ref5.includeEvents,
          includeEvents = _ref5$includeEvents === void 0 ? DEFAULT_INCLUDE_EVENTS : _ref5$includeEvents,
          _ref5$excludeEvents = _ref5.excludeEvents,
          excludeEvents = _ref5$excludeEvents === void 0 ? [] : _ref5$excludeEvents;
        return new Set(Object.values(_src_constants_json__WEBPACK_IMPORTED_MODULE_1__.EVENTS).filter(function (ev) {
          return includeEvents.includes(ev);
        }).filter(function (ev) {
          return !excludeEvents.includes(ev);
        }));
      }();

      // first send all events fired before enableAnalytics called
      _src_events_js__WEBPACK_IMPORTED_MODULE_4__.getEvents().forEach(function (event) {
        if (!event || !trackedEvents.has(event.eventType)) {
          return;
        }
        var eventType = event.eventType,
          args = event.args;
        _enqueue.call(_this, {
          eventType: eventType,
          args: args
        });
      });

      // Next register event listeners to send data immediately
      handlers = Object.fromEntries(Array.from(trackedEvents).map(function (ev) {
        var handler = ev === _src_constants_json__WEBPACK_IMPORTED_MODULE_1__.EVENTS.AUCTION_INIT ? function (args) {
          // TODO: remove this special case in v8
          args.config = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) === 'object' ? config.options || {} : {};
          _this3.enqueue({
            eventType: ev,
            args: args
          });
        } : function (args) {
          return _this3.enqueue({
            eventType: ev,
            args: args
          });
        };
        _src_events_js__WEBPACK_IMPORTED_MODULE_4__.on(ev, handler);
        return [ev, handler];
      }));
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)("Analytics adapter for \"".concat(global, "\" disabled by sampling"));
    }

    // finally set this function to return log message, prevents multiple adapter listeners
    this._oldEnable = this.enableAnalytics;
    this.enableAnalytics = function _enable() {
      return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)("Analytics adapter for \"".concat(global, "\" already enabled, unnecessary call to `enableAnalytics`."));
    };
    enabled = true;
  }
  function _disable() {
    Object.entries(handlers || {}).forEach(function (_ref6) {
      var _ref7 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref6, 2),
        event = _ref7[0],
        handler = _ref7[1];
      _src_events_js__WEBPACK_IMPORTED_MODULE_4__.off(event, handler);
    });
    this.enableAnalytics = this._oldEnable ? this._oldEnable : _enable;
    enabled = false;
  }
}

/***/ })

}]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["adpod"],{

/***/ "./modules/adpod.js":
/*!**************************!*\
  !*** ./modules/adpod.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports callPrebidCacheHook, checkAdUnitSetupHook, checkVideoBidSetupHook, adpodSetConfig, callPrebidCacheAfterAuction, sortByPricePerSecond, getTargeting */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_auction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/auction.js */ "./src/auction.js");
/* harmony import */ var _src_prebid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/prebid.js */ "./src/prebid.js");
/* harmony import */ var _src_video_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/video.js */ "./src/video.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_videoCache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/videoCache.js */ "./src/videoCache.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_auctionManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _src_constants_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/constants.json */ "./src/constants.json");



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
    registry[auctionId].initialCacheKey = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateUUID)();
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
        registry[bid.auctionId].initialCacheKey = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateUUID)();
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
  var prioritizeDeals = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.prioritizeDeals');
  if (prioritizeDeals && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.dealTier')) {
    var adpodDealPrefix = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig("adpod.dealTier.".concat(bid.bidderCode, ".prefix"));
    pricePart = adpodDealPrefix ? adpodDealPrefix + (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.dealTier') : (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.dealTier');
  } else {
    var granularity = (0,_src_auction_js__WEBPACK_IMPORTED_MODULE_4__.getPriceGranularity)(bid);
    pricePart = (0,_src_auction_js__WEBPACK_IMPORTED_MODULE_4__.getPriceByGranularity)(granularity)(bid);
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
  var duration = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.durationBucket');
  var pricePart = getPricePartForAdpodKey(bid);
  var pcd;
  if (brandCategoryExclusion) {
    var category = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'meta.adServerCatId');
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
    var bidListArr = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.arrayFrom)(bidListIter);
    var callDispatcher = bidCacheRegistry.getQueueDispatcher(bidResponse);
    var killQueue = !!(auctionInstance.getAuctionStatus() !== _src_auction_js__WEBPACK_IMPORTED_MODULE_4__.AUCTION_IN_PROGRESS);
    callDispatcher(auctionInstance, bidListArr, afterBidAdded, killQueue);
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Attempted to cache a bid from an unknown auction. Bid:', bidResponse);
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
  (0,_src_videoCache_js__WEBPACK_IMPORTED_MODULE_6__.store)(bidList, function (error, cacheIds) {
    if (error) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Failed to save to the video cache: ".concat(error, ". Video bid(s) must be discarded."));
      for (var i = 0; i < bidList.length; i++) {
        (0,_src_auction_js__WEBPACK_IMPORTED_MODULE_4__.doCallbacksIfTimedout)(auctionInstance, bidList[i]);
      }
    } else {
      for (var _i = 0; _i < cacheIds.length; _i++) {
        // when uuid in response is empty string then the key already existed, so this bid wasn't cached
        if (cacheIds[_i].uuid !== '') {
          (0,_src_auction_js__WEBPACK_IMPORTED_MODULE_4__.addBidToAuction)(auctionInstance, bidList[_i]);
        } else {
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(bidList[_i].customCacheKey, ". Bid was: "), bidList[_i]);
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
  if (videoConfig && videoConfig.context === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__.ADPOD) {
    var brandCategoryExclusion = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.brandCategoryExclusion');
    var adServerCatId = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bidResponse, 'meta.adServerCatId');
    if (!adServerCatId && brandCategoryExclusion) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:', bidResponse);
      afterBidAdded();
    } else {
      if (_src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.deferCaching') === false) {
        bidCacheRegistry.addBid(bidResponse);
        attachPriceIndustryDurationKeyToBid(bidResponse, brandCategoryExclusion);
        updateBidQueue(auctionInstance, bidResponse, afterBidAdded);
      } else {
        // generate targeting keys for bid
        bidCacheRegistry.setupInitialCacheKey(bidResponse);
        attachPriceIndustryDurationKeyToBid(bidResponse, brandCategoryExclusion);

        // add bid to auction
        (0,_src_auction_js__WEBPACK_IMPORTED_MODULE_4__.addBidToAuction)(auctionInstance, bidResponse);
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
    var mediaTypes = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'mediaTypes');
    var videoConfig = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaTypes, 'video');
    if (videoConfig && videoConfig.context === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__.ADPOD) {
      // run check to see if other mediaTypes are defined (ie multi-format); reject adUnit if so
      if (Object.keys(mediaTypes).length > 1) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected more than one mediaType in adUnitCode: ".concat(adUnit.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction."));
        return false;
      }
      var errMsg = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(adUnit.code, ".  This adUnit will be removed from the auction.");
      var playerSize = !!(videoConfig.playerSize && ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArrayOfNums)(videoConfig.playerSize, 2) || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(videoConfig.playerSize) && videoConfig.playerSize.every(function (sz) {
        return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArrayOfNums)(sz, 2);
      })) || videoConfig.sizeConfig);
      var adPodDurationSec = !!(videoConfig.adPodDurationSec && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(videoConfig.adPodDurationSec) && videoConfig.adPodDurationSec > 0);
      var durationRangeSec = !!(videoConfig.durationRangeSec && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArrayOfNums)(videoConfig.durationRangeSec) && videoConfig.durationRangeSec.every(function (range) {
        return range > 0;
      }));
      if (!playerSize || !adPodDurationSec || !durationRangeSec) {
        errMsg += !playerSize ? '\nmediaTypes.video.playerSize' : '';
        errMsg += !adPodDurationSec ? '\nmediaTypes.video.adPodDurationSec' : '';
        errMsg += !durationRangeSec ? '\nmediaTypes.video.durationRangeSec' : '';
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)(errMsg);
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
  var bidDuration = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bidResponse, 'video.durationSeconds');
  var adUnitRanges = videoMediaType.durationRangeSec;
  adUnitRanges.sort(function (a, b) {
    return a - b;
  }); // ensure the ranges are sorted in numeric order

  if (!videoMediaType.requireExactDuration) {
    var max = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(adUnitRanges));
    if (bidDuration <= max + buffer) {
      var nextHighestRange = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.find)(adUnitRanges, function (range) {
        return range + buffer >= bidDuration;
      });
      bidResponse.video.durationBucket = nextHighestRange;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", bidResponse);
      return false;
    }
  } else {
    if ((0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_5__.find)(adUnitRanges, function (range) {
      return range === bidDuration;
    })) {
      bidResponse.video.durationBucket = bidDuration;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", bidResponse);
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
  if (context === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__.ADPOD) {
    var result = true;
    var brandCategoryExclusion = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.brandCategoryExclusion');
    if (brandCategoryExclusion && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'meta.primaryCatId')) {
      result = false;
    }
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video')) {
      if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.context') || bid.video.context !== _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__.ADPOD) {
        result = false;
      }
      if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.durationSeconds') || bid.video.durationSeconds <= 0) {
        result = false;
      } else {
        var isBidGood = checkBidDuration(videoMediaType, bid);
        if (!isBidGood) result = false;
      }
    }
    if (!_src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: \"...\"} });\n      ");
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
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(queueTimeDelay));
    }
  }
  if (config.bidQueueSizeLimit !== undefined) {
    if (typeof config.bidQueueSizeLimit === 'number' && config.bidQueueSizeLimit > 0) {
      queueSizeLimit = config.bidQueueSizeLimit;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(queueSizeLimit));
    }
  }
}
_src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod', function (config) {
  return adpodSetConfig(config.adpod);
});

/**
 * This function initializes the adpod module's hooks.  This is called by the corresponding adserver video module.
 */
function initAdpodHooks() {
  (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_9__.setupBeforeHookFnOnce)(_src_auction_js__WEBPACK_IMPORTED_MODULE_4__.callPrebidCache, callPrebidCacheHook);
  (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_9__.setupBeforeHookFnOnce)(_src_prebid_js__WEBPACK_IMPORTED_MODULE_0__.checkAdUnitSetup, checkAdUnitSetupHook);
  (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_9__.setupBeforeHookFnOnce)(_src_video_js__WEBPACK_IMPORTED_MODULE_10__.checkVideoBidSetup, checkVideoBidSetupHook);
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
  (0,_src_videoCache_js__WEBPACK_IMPORTED_MODULE_6__.store)(bids, function (error, cacheIds) {
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
  if (a.adserverTargeting[_src_constants_json__WEBPACK_IMPORTED_MODULE_11__.TARGETING_KEYS.PRICE_BUCKET] / a.video.durationBucket < b.adserverTargeting[_src_constants_json__WEBPACK_IMPORTED_MODULE_11__.TARGETING_KEYS.PRICE_BUCKET] / b.video.durationBucket) {
    return 1;
  }
  if (a.adserverTargeting[_src_constants_json__WEBPACK_IMPORTED_MODULE_11__.TARGETING_KEYS.PRICE_BUCKET] / a.video.durationBucket > b.adserverTargeting[_src_constants_json__WEBPACK_IMPORTED_MODULE_11__.TARGETING_KEYS.PRICE_BUCKET] / b.video.durationBucket) {
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
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('No callback function was defined in the getTargeting call.  Aborting getTargeting().');
    return;
  }
  codes = codes || [];
  var adPodAdUnits = getAdPodAdUnits(codes);
  var bidsReceived = _src_auctionManager_js__WEBPACK_IMPORTED_MODULE_12__.auctionManager.getBidsReceived();
  var competiveExclusionEnabled = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.brandCategoryExclusion');
  var deferCachingSetting = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.deferCaching');
  var deferCachingEnabled = typeof deferCachingSetting === 'boolean' ? deferCachingSetting : true;
  var bids = getBidsForAdpod(bidsReceived, adPodAdUnits);
  bids = competiveExclusionEnabled || deferCachingEnabled ? getExclusiveBids(bids) : bids;
  var prioritizeDeals = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('adpod.prioritizeDeals');
  if (prioritizeDeals) {
    var _bids$reduce = bids.reduce(function (partitions, bid) {
        var bidDealTier = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'video.dealTier');
        var minDealTier = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig("adpod.dealTier.".concat(bid.bidderCode, ".minDealTier"));
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
      _bids$reduce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__["default"])(_bids$reduce, 2),
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
      var adPodDurationSeconds = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'mediaTypes.video.adPodDurationSec');
      bids.filter(function (bid) {
        return bid.adUnitCode === adUnit.code;
      }).forEach(function (bid, index, arr) {
        if (bid.video.durationBucket <= adPodDurationSeconds) {
          adPodTargeting.push((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])({}, TARGETING_KEY_PB_CAT_DUR, bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR]));
          adPodDurationSeconds -= bid.video.durationBucket;
        }
        if (index === arr.length - 1 && adPodTargeting.length > 0) {
          adPodTargeting.push((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])({}, TARGETING_KEY_CACHE_ID, bid.adserverTargeting[TARGETING_KEY_CACHE_ID]));
        }
      });
      targeting[adUnit.code] = adPodTargeting;
    });
    callback(null, targeting);
  } else {
    var bidsToCache = [];
    adPodAdUnits.forEach(function (adUnit) {
      var adPodDurationSeconds = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'mediaTypes.video.adPodDurationSec');
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
        var groupedBids = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupBy)(bidsSuccessfullyCached, 'adUnitCode');
        Object.keys(groupedBids).forEach(function (adUnitCode) {
          var adPodTargeting = [];
          groupedBids[adUnitCode].forEach(function (bid, index, arr) {
            adPodTargeting.push((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])({}, TARGETING_KEY_PB_CAT_DUR, bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR]));
            if (index === arr.length - 1 && adPodTargeting.length > 0) {
              adPodTargeting.push((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])({}, TARGETING_KEY_CACHE_ID, bid.adserverTargeting[TARGETING_KEY_CACHE_ID]));
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
  return _src_auctionManager_js__WEBPACK_IMPORTED_MODULE_12__.auctionManager.getAdUnits().filter(function (adUnit) {
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'mediaTypes.video.context') === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__.ADPOD;
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
    return Object.assign({}, bid, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])({}, TARGETING_KEY_PB_CAT_DUR, bid.adserverTargeting[TARGETING_KEY_PB_CAT_DUR]));
  });
  bids = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupBy)(bids, TARGETING_KEY_PB_CAT_DUR);
  var filteredBids = [];
  Object.keys(bids).forEach(function (targetingKey) {
    bids[targetingKey].sort((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.compareOn)('responseTimestamp'));
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
    return adUnitCodes.indexOf(bid.adUnitCode) != -1 && bid.video && bid.video.context === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_7__.ADPOD;
  });
}
var sharedMethods = {
  TARGETING_KEY_PB_CAT_DUR: TARGETING_KEY_PB_CAT_DUR,
  TARGETING_KEY_CACHE_ID: TARGETING_KEY_CACHE_ID,
  'getTargeting': getTargeting
};
Object.freeze(sharedMethods);
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_9__.module)('adpod', function shareAdpodUtilities() {
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(arguments.length <= 0 ? undefined : arguments[0])) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Adpod module needs plain object to share methods with submodule');
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

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/adpod.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["appnexusBidAdapter"],{

/***/ "./modules/appnexusBidAdapter.js":
/*!***************************************!*\
  !*** ./modules/appnexusBidAdapter.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export spec */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_Renderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/adapters/bidderFactory.js */ "./src/adapters/bidderFactory.js");
/* harmony import */ var _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _src_auctionManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_video_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/video.js */ "./src/video.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _src_bidderSettings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/bidderSettings.js */ "./src/bidderSettings.js");
/* harmony import */ var _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/utils/gpdr.js */ "./src/utils/gpdr.js");
/* harmony import */ var _src_native_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/native.js */ "./src/native.js");














var BIDDER_CODE = 'appnexus';
var URL = 'https://ib.adnxs.com/ut/v3/prebid';
var URL_SIMPLE = 'https://ib.adnxs-simple.com/ut/v3/prebid';
var VIDEO_TARGETING = ['id', 'minduration', 'maxduration', 'skippable', 'playback_method', 'frameworks', 'context', 'skipoffset'];
var VIDEO_RTB_TARGETING = ['minduration', 'maxduration', 'skip', 'skipafter', 'playbackmethod', 'api', 'startdelay'];
var USER_PARAMS = ['age', 'externalUid', 'external_uid', 'segments', 'gender', 'dnt', 'language'];
var APP_DEVICE_PARAMS = ['geo', 'device_id']; // appid is collected separately
var DEBUG_PARAMS = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
var DEBUG_QUERY_PARAM_MAP = {
  'apn_debug_dongle': 'dongle',
  'apn_debug_member_id': 'member_id',
  'apn_debug_timeout': 'debug_timeout'
};
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
var storage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getStorageManager)({
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
    code: 'adasta'
  }, {
    code: 'beintoo',
    gvlid: 618
  }],
  supportedMediaTypes: [_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.BANNER, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE],
  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.placementId || bid.params.placement_id || bid.params.member && (bid.params.invCode || bid.params.inv_code));
  },
  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var _bidderRequest$ortb, _bidderRequest$ortb$r;
    // convert Native ORTB definition to old-style prebid native definition
    bidRequests = (0,_src_native_js__WEBPACK_IMPORTED_MODULE_2__.convertOrtbRequestToProprietaryNative)(bidRequests);
    var tags = bidRequests.map(bidToTag);
    var userObjBid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasUserInfo);
    var userObj = {};
    if (_src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('coppa') === true) {
      userObj = {
        'coppa': true
      };
    }
    if (userObjBid) {
      Object.keys(userObjBid.params.user).filter(function (param) {
        return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(USER_PARAMS, param);
      }).forEach(function (param) {
        var uparam = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.convertCamelToUnderscore)(param);
        if (param === 'segments' && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(userObjBid.params.user[param])) {
          var segs = [];
          userObjBid.params.user[param].forEach(function (val) {
            if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(val)) {
              segs.push({
                'id': val
              });
            } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject)(val)) {
              segs.push(val);
            }
          });
          userObj[uparam] = segs;
        } else if (param !== 'segments') {
          userObj[uparam] = userObjBid.params.user[param];
        }
      });
    }
    var appDeviceObjBid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasAppDeviceInfo);
    var appDeviceObj;
    if (appDeviceObjBid && appDeviceObjBid.params && appDeviceObjBid.params.app) {
      appDeviceObj = {};
      Object.keys(appDeviceObjBid.params.app).filter(function (param) {
        return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(APP_DEVICE_PARAMS, param);
      }).forEach(function (param) {
        return appDeviceObj[param] = appDeviceObjBid.params.app[param];
      });
    }
    var appIdObjBid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasAppId);
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
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logError)('AppNexus Debug Auction Cookie Error:\n\n' + e);
      }
    } else {
      Object.keys(DEBUG_QUERY_PARAM_MAP).forEach(function (qparam) {
        var qval = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getParameterByName)(qparam);
        if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(qval) && qval !== '') {
          debugObj[DEBUG_QUERY_PARAM_MAP[qparam]] = qval;
          debugObj.enabled = true;
        }
      });
      debugObj = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.convertTypes)({
        'member_id': 'number',
        'debug_timeout': 'number'
      }, debugObj);
      var debugBidRequest = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasDebug);
      if (debugBidRequest && debugBidRequest.debug) {
        debugObj = debugBidRequest.debug;
      }
    }
    if (debugObj && debugObj.enabled) {
      Object.keys(debugObj).filter(function (param) {
        return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(DEBUG_PARAMS, param);
      }).forEach(function (param) {
        debugObjParams[param] = debugObj[param];
      });
    }
    var memberIdBid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasMemberId);
    var member = memberIdBid ? parseInt(memberIdBid.params.member, 10) : 0;
    var schain = bidRequests[0].schain;
    var omidSupport = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasOmidSupport);
    var payload = {
      tags: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(tags),
      user: userObj,
      sdk: {
        source: SOURCE,
        version: "7.42.0-pre"
      },
      schain: schain
    };
    if (omidSupport) {
      payload['iab_support'] = {
        omidpn: 'Appnexus',
        omidpv: "7.42.0-pre"
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
    function grabOrtb2Keywords(ortb2Obj) {
      var fields = ['site.keywords', 'site.content.keywords', 'user.keywords', 'app.keywords', 'app.content.keywords'];
      var result = [];
      fields.forEach(function (path) {
        var keyStr = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(ortb2Obj, path);
        if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(keyStr)) result.push(keyStr);
      });
      return result;
    }

    // grab the ortb2 keyword data (if it exists) and convert from the comma list string format to object format
    var ortb2 = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.deepClone)(bidderRequest && bidderRequest.ortb2);
    var ortb2KeywordsObjList = grabOrtb2Keywords(ortb2).map(function (keyStr) {
      return convertStringToKeywordsObj(keyStr);
    });
    var anAuctionKeywords = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.deepClone)(_src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('appnexusAuctionKeywords')) || {};
    // need to convert the string values into array of strings, to properly merge values with other existing keys later
    Object.keys(anAuctionKeywords).forEach(function (k) {
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(anAuctionKeywords[k]) || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(anAuctionKeywords[k])) anAuctionKeywords[k] = [anAuctionKeywords[k]];
    });
    // combine all sources of keywords (converted from string comma list to object format) into one object (that combines the values for shared keys)
    var mergedAuctionKeywords = _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.mergeDeep.apply(void 0, [{}, anAuctionKeywords].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(ortb2KeywordsObjList)));

    // convert to final format used by adserver
    var auctionKeywords = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.transformBidderParamKeywords)(mergedAuctionKeywords);
    if (auctionKeywords.length > 0) {
      auctionKeywords.forEach(deleteValues);
      payload.keywords = auctionKeywords;
    }
    if (_src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('adpod.brandCategoryExclusion')) {
      payload.brand_category_uniqueness = true;
    }
    if (debugObjParams.enabled) {
      payload.debug = debugObjParams;
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logInfo)('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(debugObjParams, null, 4));
    }
    if (bidderRequest && bidderRequest.gdprConsent) {
      // note - objects for impbus use underscore instead of camelCase
      payload.gdpr_consent = {
        consent_string: bidderRequest.gdprConsent.consentString,
        consent_required: bidderRequest.gdprConsent.gdprApplies
      };
      if (bidderRequest.gdprConsent.addtlConsent && bidderRequest.gdprConsent.addtlConsent.indexOf('~') !== -1) {
        var ac = bidderRequest.gdprConsent.addtlConsent;
        // pull only the ids from the string (after the ~) and convert them to an array of ints
        var acStr = ac.substring(ac.indexOf('~') + 1);
        payload.gdpr_consent.addtl_consent = acStr.split('.').map(function (id) {
          return parseInt(id, 10);
        });
      }
    }
    if (bidderRequest && bidderRequest.uspConsent) {
      payload.us_privacy = bidderRequest.uspConsent;
    }
    if (bidderRequest !== null && bidderRequest !== void 0 && bidderRequest.gppConsent) {
      payload.privacy = {
        gpp: bidderRequest.gppConsent.gppString,
        gpp_sid: bidderRequest.gppConsent.applicableSections
      };
    } else if (bidderRequest !== null && bidderRequest !== void 0 && (_bidderRequest$ortb = bidderRequest.ortb2) !== null && _bidderRequest$ortb !== void 0 && (_bidderRequest$ortb$r = _bidderRequest$ortb.regs) !== null && _bidderRequest$ortb$r !== void 0 && _bidderRequest$ortb$r.gpp) {
      payload.privacy = {
        gpp: bidderRequest.ortb2.regs.gpp,
        gpp_sid: bidderRequest.ortb2.regs.gpp_sid
      };
    }
    if (bidderRequest && bidderRequest.refererInfo) {
      var refererinfo = {
        // TODO: are these the correct referer values?
        rd_ref: encodeURIComponent(bidderRequest.refererInfo.topmostLocation),
        rd_top: bidderRequest.refererInfo.reachedTop,
        rd_ifs: bidderRequest.refererInfo.numIframes,
        rd_stk: bidderRequest.refererInfo.stack.map(function (url) {
          return encodeURIComponent(url);
        }).join(',')
      };
      var pubPageUrl = bidderRequest.refererInfo.canonicalUrl;
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(pubPageUrl) && pubPageUrl !== '') {
        refererinfo.rd_can = pubPageUrl;
      }
      payload.referrer_detection = refererinfo;
    }
    var hasAdPodBid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidRequests, hasAdPod);
    if (hasAdPodBid) {
      bidRequests.filter(hasAdPod).forEach(function (adPodBid) {
        var adPodTags = createAdPodRequest(tags, adPodBid);
        // don't need the original adpod placement because it's in adPodTags
        var nonPodTags = payload.tags.filter(function (tag) {
          return tag.uuid !== adPodBid.bidId;
        });
        payload.tags = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(nonPodTags), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(adPodTags));
      });
    }
    if (bidRequests[0].userId) {
      var eids = [];
      bidRequests[0].userIdAsEids.forEach(function (eid) {
        if (!eid || !eid.uids || eid.uids.length < 1) {
          return;
        }
        eid.uids.forEach(function (uid) {
          var tmp = {
            'source': eid.source,
            'id': uid.id
          };
          if (eid.source == 'adserver.org') {
            tmp.rti_partner = 'TDID';
          } else if (eid.source == 'uidapi.com') {
            tmp.rti_partner = 'UID2';
          }
          eids.push(tmp);
        });
      });
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
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logError)(errorMessage);
      return bids;
    }
    if (serverResponse.tags) {
      serverResponse.tags.forEach(function (serverBid) {
        var rtbBid = getRtbBid(serverBid);
        if (rtbBid) {
          var cpmCheck = _src_bidderSettings_js__WEBPACK_IMPORTED_MODULE_8__.bidderSettings.get(bidderRequest.bidderCode, 'allowZeroCpmBids') === true ? rtbBid.cpm >= 0 : rtbBid.cpm > 0;
          if (cpmCheck && (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(_this.supportedMediaTypes, rtbBid.ad_type)) {
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
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logMessage)('https://console.appnexus.com/docs/understanding-the-debug-auction');
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logMessage)(debugText);
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
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent, gppConsent) {
    function checkGppStatus(gppConsent) {
      // this is a temporary measure to supress usersync in US-based GPP regions
      // this logic will be revised when proper signals (akin to purpose1 from TCF2) can be determined for US GPP
      if (gppConsent && Array.isArray(gppConsent.applicableSections)) {
        return gppConsent.applicableSections.every(function (sec) {
          return typeof sec === 'number' && sec <= 5;
        });
      }
      return true;
    }
    if (syncOptions.iframeEnabled && (0,_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_9__.hasPurpose1Consent)(gdprConsent) && checkGppStatus(gppConsent)) {
      return [{
        type: 'iframe',
        url: 'https://acdn.adnxs.com/dmp/async_usersync.html'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb, adUnit, bidRequests) {
    var conversionFn = _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.transformBidderParamKeywords;
    if (isOpenRtb === true) {
      var s2sEndpointUrl = null;
      var s2sConfig = _src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('s2sConfig');
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject)(s2sConfig)) {
        s2sEndpointUrl = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(s2sConfig, 'endpoint.p1Consent');
      } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(s2sConfig)) {
        s2sConfig.forEach(function (s2sCfg) {
          if ((0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(s2sCfg.bidders, adUnit.bids[0].bidder)) {
            s2sEndpointUrl = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(s2sCfg, 'endpoint.p1Consent');
          }
        });
      }
      if (s2sEndpointUrl && s2sEndpointUrl.match('/openrtb2/prebid')) {
        conversionFn = convertKeywordsToString;
      }
    }
    params = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.convertTypes)({
      'member': 'string',
      'invCode': 'string',
      'placementId': 'number',
      'keywords': conversionFn,
      'publisherId': 'number'
    }, params);
    if (isOpenRtb) {
      if (isPopulatedArray(params.keywords)) {
        params.keywords.forEach(deleteValues);
      }
      Object.keys(params).forEach(function (paramKey) {
        var convertedKey = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.convertCamelToUnderscore)(paramKey);
        if (convertedKey !== paramKey) {
          params[convertedKey] = params[paramKey];
          delete params[paramKey];
        }
      });
      params.use_pmt_rule = typeof params.use_payment_rule === 'boolean' ? params.use_payment_rule : false;
      if (params.use_payment_rule) {
        delete params.use_payment_rule;
      }
    }
    return params;
  }
};
function isPopulatedArray(arr) {
  return !!((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(arr) && arr.length > 0);
}
function deleteValues(keyPairObj) {
  if (isPopulatedArray(keyPairObj.value) && keyPairObj.value[0] === '') {
    delete keyPairObj.value;
  }
}
function strIsAppnexusViewabilityScript(str) {
  if (!str || str === '') return false;
  var regexMatchUrlStart = str.match(VIEWABILITY_URL_START);
  var viewUrlStartInStr = regexMatchUrlStart != null && regexMatchUrlStart.length >= 1;
  var regexMatchFileName = str.match(VIEWABILITY_FILE_NAME);
  var fileNameInStr = regexMatchFileName != null && regexMatchFileName.length >= 1;
  return str.startsWith(SCRIPT_TAG_START) && fileNameInStr && viewUrlStartInStr;
}
function formatRequest(payload, bidderRequest) {
  var request = [];
  var options = {
    withCredentials: true
  };
  var endpointUrl = URL;
  if (!(0,_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_9__.hasPurpose1Consent)(bidderRequest === null || bidderRequest === void 0 ? void 0 : bidderRequest.gdprConsent)) {
    endpointUrl = URL_SIMPLE;
  }
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getParameterByName)('apn_test').toUpperCase() === 'TRUE' || _src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('apn_test') === true) {
    options.customHeaders = {
      'X-Is-Test': 1
    };
  }
  if (payload.tags.length > MAX_IMPS_PER_REQUEST) {
    var clonedPayload = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.deepClone)(payload);
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.chunk)(payload.tags, MAX_IMPS_PER_REQUEST).forEach(function (tags) {
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
  var renderer = _src_Renderer_js__WEBPACK_IMPORTED_MODULE_10__.Renderer.install({
    id: rtbBid.renderer_id,
    url: rtbBid.renderer_url,
    config: rendererOptions,
    loaded: false,
    adUnitCode: adUnitCode
  });
  try {
    renderer.setRender(outstreamRender);
  } catch (err) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)('Prebid Error calling setRender on renderer', err);
  }
  renderer.setEventHandlers({
    impression: function impression() {
      return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logMessage)('AppNexus outstream video impression event');
    },
    loaded: function loaded() {
      return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logMessage)('AppNexus outstream video loaded event');
    },
    ended: function ended() {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logMessage)('AppNexus outstream renderer video event');
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
  var bidRequest = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getBidRequest)(serverBid.uuid, [bidderRequest]);
  var adId = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getUniqueIdentifierStr)();
  var bid = {
    adId: adId,
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
  };
  if (rtbBid.adomain) {
    bid.meta = Object.assign({}, bid.meta, {
      advertiserDomains: [rtbBid.adomain]
    });
  }
  if (rtbBid.advertiser_id) {
    bid.meta = Object.assign({}, bid.meta, {
      advertiserId: rtbBid.advertiser_id
    });
  }

  // temporary function; may remove at later date if/when adserver fully supports dchain
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
    bid.meta = Object.assign({}, bid.meta, {
      dchain: setupDChain(rtbBid)
    });
  }
  if (rtbBid.brand_id) {
    bid.meta = Object.assign({}, bid.meta, {
      brandId: rtbBid.brand_id
    });
  }
  if (rtbBid.rtb.video) {
    // shared video properties used for all 3 contexts
    Object.assign(bid, {
      width: rtbBid.rtb.video.player_width,
      height: rtbBid.rtb.video.player_height,
      vastImpUrl: rtbBid.notify_url,
      ttl: 3600
    });
    var videoContext = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bidRequest, 'mediaTypes.video.context');
    switch (videoContext) {
      case _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.ADPOD:
        var primaryCatId = (0,_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__.getIabSubCategory)(bidRequest.bidder, rtbBid.brand_category_id);
        bid.meta = Object.assign({}, bid.meta, {
          primaryCatId: primaryCatId
        });
        var dealTier = rtbBid.deal_priority;
        bid.video = {
          context: _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.ADPOD,
          durationSeconds: Math.floor(rtbBid.rtb.video.duration_ms / 1000),
          dealTier: dealTier
        };
        bid.vastUrl = rtbBid.rtb.video.asset_url;
        break;
      case _src_video_js__WEBPACK_IMPORTED_MODULE_12__.OUTSTREAM:
        bid.adResponse = serverBid;
        bid.adResponse.ad = bid.adResponse.ads[0];
        bid.adResponse.ad.video = bid.adResponse.ad.rtb.video;
        bid.vastXml = rtbBid.rtb.video.content;
        if (rtbBid.renderer_url) {
          var videoBid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(bidderRequest.bids, function (bid) {
            return bid.bidId === serverBid.uuid;
          });
          var rendererOptions = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(videoBid, 'mediaTypes.video.renderer.options'); // mediaType definition has preference (shouldn't options be .config?)
          if (!rendererOptions) {
            rendererOptions = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(videoBid, 'renderer.options'); // second the adUnit definition has preference (shouldn't options be .config?)
          }

          bid.renderer = newRenderer(bid.adUnitCode, rtbBid, rendererOptions);
        }
        break;
      case _src_video_js__WEBPACK_IMPORTED_MODULE_12__.INSTREAM:
        bid.vastUrl = rtbBid.notify_url + '&redir=' + encodeURIComponent(rtbBid.rtb.video.asset_url);
        break;
    }
  } else if ( true && rtbBid.rtb[_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE]) {
    var nativeAd = rtbBid.rtb[_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE];
    var viewScript;
    if (strIsAppnexusViewabilityScript(rtbBid.viewability.config)) {
      var prebidParams = 'pbjs_adid=' + adId + ';pbjs_auc=' + bidRequest.adUnitCode;
      viewScript = rtbBid.viewability.config.replace('dom_id=%native_dom_id%', prebidParams);
    }
    var jsTrackers = nativeAd.javascript_trackers;
    if (jsTrackers == undefined) {
      jsTrackers = viewScript;
    } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(jsTrackers)) {
      jsTrackers = [jsTrackers, viewScript];
    } else {
      jsTrackers.push(viewScript);
    }
    bid[_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE] = {
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
      video: nativeAd.video,
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
    Object.assign(bid, {
      width: rtbBid.rtb.banner.width,
      height: rtbBid.rtb.banner.height,
      ad: rtbBid.rtb.banner.content
    });
    try {
      if (rtbBid.rtb.trackers) {
        for (var i = 0; i < rtbBid.rtb.trackers[0].impression_urls.length; i++) {
          var url = rtbBid.rtb.trackers[0].impression_urls[i];
          var tracker = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.createTrackPixelHtml)(url);
          bid.ad += tracker;
        }
      }
    } catch (error) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logError)('Error appending tracking pixel', error);
    }
  }
  return bid;
}
function bidToTag(bid) {
  var tag = {};
  Object.keys(bid.params).forEach(function (paramKey) {
    var convertedKey = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.convertCamelToUnderscore)(paramKey);
    if (convertedKey !== paramKey) {
      bid.params[convertedKey] = bid.params[paramKey];
      delete bid.params[paramKey];
    }
  });
  tag.sizes = transformSizes(bid.sizes);
  tag.primary_size = tag.sizes[0];
  tag.ad_types = [];
  tag.uuid = bid.bidId;
  if (bid.params.placement_id) {
    tag.id = parseInt(bid.params.placement_id, 10);
  } else {
    tag.code = bid.params.inv_code;
  }
  tag.allow_smaller_sizes = bid.params.allow_smaller_sizes || false;
  tag.use_pmt_rule = typeof bid.params.use_payment_rule === 'boolean' ? bid.params.use_payment_rule : typeof bid.params.use_pmt_rule === 'boolean' ? bid.params.use_pmt_rule : false;
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
  } else {
    var mediaTypePos = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, "mediaTypes.banner.pos") || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, "mediaTypes.video.pos");
    // only support unknown, atf, and btf values for position at this time
    if (mediaTypePos === 0 || mediaTypePos === 1 || mediaTypePos === 3) {
      // ortb spec treats btf === 3, but our system interprets btf === 2; so converting the ortb value here for consistency
      tag.position = mediaTypePos === 3 ? 2 : mediaTypePos;
    }
  }
  if (bid.params.traffic_source_code) {
    tag.traffic_source_code = bid.params.traffic_source_code;
  }
  if (bid.params.private_sizes) {
    tag.private_sizes = transformSizes(bid.params.private_sizes);
  }
  if (bid.params.supply_type) {
    tag.supply_type = bid.params.supply_type;
  }
  if (bid.params.pub_click) {
    tag.pubclick = bid.params.pub_click;
  }
  if (bid.params.ext_inv_code) {
    tag.ext_inv_code = bid.params.ext_inv_code;
  }
  if (bid.params.publisher_id) {
    tag.publisher_id = parseInt(bid.params.publisher_id, 10);
  }
  if (bid.params.external_imp_id) {
    tag.external_imp_id = bid.params.external_imp_id;
  }
  var ortb2ImpKwStr = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, 'ortb2Imp.ext.data.keywords');
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(ortb2ImpKwStr) && ortb2ImpKwStr !== '' || !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(bid.params.keywords)) {
    // convert ortb2 from comma list string format to bid param object format
    var ortb2ImpKwObj = convertStringToKeywordsObj(ortb2ImpKwStr);
    var bidParamsKwObj = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject)(bid.params.keywords) ? (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.deepClone)(bid.params.keywords) : {};
    // need to convert the string values into an array of strings, to properly merge values with other existing keys later
    Object.keys(bidParamsKwObj).forEach(function (k) {
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(bidParamsKwObj[k]) || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(bidParamsKwObj[k])) bidParamsKwObj[k] = [bidParamsKwObj[k]];
    });

    // combine both sources of keywords into one merged object (that combines the values for shared keys)
    var keywordsObj = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.mergeDeep)({}, bidParamsKwObj, ortb2ImpKwObj);

    // convert to final format used by adserver
    var keywordsUt = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.transformBidderParamKeywords)(keywordsObj);
    if (keywordsUt.length > 0) {
      keywordsUt.forEach(deleteValues);
      tag.keywords = keywordsUt;
    }
  }
  var gpid = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, 'ortb2Imp.ext.data.pbadslot');
  if (gpid) {
    tag.gpid = gpid;
  }
  if ( true && (bid.mediaType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, "mediaTypes.".concat(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE)))) {
    tag.ad_types.push(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE);
    if (tag.sizes.length === 0) {
      tag.sizes = transformSizes([1, 1]);
    }
    if (bid.nativeParams) {
      var nativeRequest = buildNativeRequest(bid.nativeParams);
      tag[_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE] = {
        layouts: [nativeRequest]
      };
    }
  }
  var videoMediaType = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, "mediaTypes.".concat(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO));
  var context = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])(bid, 'mediaTypes.video.context');
  if (videoMediaType && context === 'adpod') {
    tag.hb_source = 7;
  } else {
    tag.hb_source = 1;
  }
  if (bid.mediaType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO || videoMediaType) {
    tag.ad_types.push(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO);
  }

  // instream gets vastUrl, outstream gets vastXml
  if (bid.mediaType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO || videoMediaType && context !== 'outstream') {
    tag.require_asset_url = true;
  }
  if (bid.params.video) {
    tag.video = {};
    // place any valid video params on the tag
    Object.keys(bid.params.video).filter(function (param) {
      return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(VIDEO_TARGETING, param);
    }).forEach(function (param) {
      switch (param) {
        case 'context':
        case 'playback_method':
          var type = bid.params.video[param];
          type = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(type) ? type[0] : type;
          tag.video[param] = VIDEO_MAPPING[param][type];
          break;
        // Deprecating tags[].video.frameworks in favor of tags[].video_frameworks
        case 'frameworks':
          break;
        default:
          tag.video[param] = bid.params.video[param];
      }
    });
    if (bid.params.video.frameworks && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(bid.params.video.frameworks)) {
      tag['video_frameworks'] = bid.params.video.frameworks;
    }
  }

  // use IAB ORTB values if the corresponding values weren't already set by bid.params.video
  if (videoMediaType) {
    tag.video = tag.video || {};
    Object.keys(videoMediaType).filter(function (param) {
      return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(VIDEO_RTB_TARGETING, param);
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
            type = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(type) ? type[0] : type;

            // we only support iab's options 1-4 at this time.
            if (type >= 1 && type <= 4) {
              tag.video['playback_method'] = type;
            }
          }
          break;
        case 'api':
          if (!tag['video_frameworks'] && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(videoMediaType[param])) {
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
        case 'startdelay':
        case 'placement':
          var contextKey = 'context';
          if (typeof tag.video[contextKey] !== 'number') {
            var placement = videoMediaType['placement'];
            var startdelay = videoMediaType['startdelay'];
            var _context = getContextFromPlacement(placement) || getContextFromStartDelay(startdelay);
            tag.video[contextKey] = VIDEO_MAPPING[contextKey][_context];
          }
          break;
      }
    });
  }
  if (bid.renderer) {
    tag.video = Object.assign({}, tag.video, {
      custom_renderer_present: true
    });
  }
  if (bid.params.frameworks && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(bid.params.frameworks)) {
    tag['banner_frameworks'] = bid.params.frameworks;
  }
  var adUnit = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(_src_auctionManager_js__WEBPACK_IMPORTED_MODULE_13__.auctionManager.getAdUnits(), function (au) {
    return bid.transactionId === au.transactionId;
  });
  if (adUnit && adUnit.mediaTypes && adUnit.mediaTypes.banner) {
    tag.ad_types.push(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.BANNER);
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
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(requestSizes) && requestSizes.length === 2 && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(requestSizes[0])) {
    sizeObj.width = parseInt(requestSizes[0], 10);
    sizeObj.height = parseInt(requestSizes[1], 10);
    sizes.push(sizeObj);
  } else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__["default"])(requestSizes) === 'object') {
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
function getContextFromPlacement(ortbPlacement) {
  if (!ortbPlacement) {
    return;
  }
  if (ortbPlacement === 2) {
    return 'in-banner';
  } else if (ortbPlacement > 2) {
    return 'outstream';
  }
}
function getContextFromStartDelay(ortbStartDelay) {
  if (!ortbStartDelay) {
    return;
  }
  if (ortbStartDelay === 0) {
    return 'pre_roll';
  } else if (ortbStartDelay === -1) {
    return 'mid_roll';
  } else if (ortbStartDelay === -2) {
    return 'post_roll';
  }
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
  return bid.mediaTypes && bid.mediaTypes.video && bid.mediaTypes.video.context === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.ADPOD;
}
function hasOmidSupport(bid) {
  var hasOmid = false;
  var bidderParams = bid.params;
  var videoParams = bid.params.video;
  if (bidderParams.frameworks && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(bidderParams.frameworks)) {
    hasOmid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(bid.params.frameworks, 6);
  }
  if (!hasOmid && videoParams && videoParams.frameworks && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(videoParams.frameworks)) {
    hasOmid = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(bid.params.video.frameworks, 6);
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
  var maxDuration = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getMaxValueFromArray)(durationRangeSec);
  var tagToDuplicate = tags.filter(function (tag) {
    return tag.uuid === adPodBid.bidId;
  });
  var request = _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.fill.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(tagToDuplicate).concat([numberOfPlacements]));
  if (requireExactDuration) {
    var divider = Math.ceil(numberOfPlacements / durationRangeSec.length);
    var chunked = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.chunk)(request, divider);

    // each configured duration is set as min/maxduration for a subset of requests
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
  var minAllowedDuration = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getMinValueFromArray)(durationRangeSec);
  var numberOfPlacements = Math.floor(adPodDurationSec / minAllowedDuration);
  return requireExactDuration ? Math.max(numberOfPlacements, durationRangeSec.length) : numberOfPlacements;
}
function setVideoProperty(tag, key, value) {
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(tag.video)) {
    tag.video = {};
  }
  tag.video[key] = value;
}
function getRtbBid(tag) {
  return tag && tag.ads && tag.ads.length && (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.find)(tag.ads, function (ad) {
    return ad.rtb;
  });
}
function buildNativeRequest(params) {
  var request = {};

  // map standard prebid native asset identifier to /ut parameters
  // e.g., tag specifies `body` but /ut only knows `description`.
  // mapping may be in form {tag: '<server name>'} or
  // {tag: {serverName: '<server name>', requiredParams: {...}}}
  Object.keys(params).forEach(function (key) {
    // check if one of the <server name> forms is used, otherwise
    // a mapping wasn't specified so pass the key straight through
    var requestKey = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].serverName || NATIVE_MAPPING[key] || key;

    // required params are always passed on request
    var requiredParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].requiredParams;
    request[requestKey] = Object.assign({}, requiredParams, params[key]);

    // convert the sizes of image/icon assets to proper format (if needed)
    var isImageAsset = !!(requestKey === NATIVE_MAPPING.image.serverName || requestKey === NATIVE_MAPPING.icon.serverName);
    if (isImageAsset && request[requestKey].sizes) {
      var sizes = request[requestKey].sizes;
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArrayOfNums)(sizes) || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(sizes) && sizes.length > 0 && sizes.every(function (sz) {
        return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArrayOfNums)(sz);
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
  try {
    var el = document.getElementById(elementId).querySelectorAll("div[id^='google_ads']");
    if (el[0]) {
      el[0].style.setProperty('display', 'none');
    }
  } catch (e) {
    // element not found!
  }
}
function hideSASIframe(elementId) {
  try {
    // find script tag with id 'sas_script'. This ensures it only works if you're using Smart Ad Server.
    var el = document.getElementById(elementId).querySelectorAll("script[id^='sas_script']");
    if (el[0].nextSibling && el[0].nextSibling.localName === 'iframe') {
      el[0].nextSibling.style.setProperty('display', 'none');
    }
  } catch (e) {
    // element not found!
  }
}
function outstreamRender(bid, doc) {
  hidedfpContainer(bid.adUnitCode);
  hideSASIframe(bid.adUnitCode);
  // push to render queue because ANOutstreamVideo may not be loaded yet
  bid.renderer.push(function () {
    var win = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getWindowFromDocument)(doc) || window;
    win.ANOutstreamVideo.renderAd({
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
  if (adType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO) {
    return _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO;
  } else if (adType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE) {
    return _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.NATIVE;
  } else {
    return _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.BANNER;
  }
}
function getBidFloor(bid) {
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isFn)(bid.getFloor)) {
    return bid.params.reserve ? bid.params.reserve : null;
  }
  var floor = bid.getFloor({
    currency: 'USD',
    mediaType: '*',
    size: '*'
  });
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isPlainObject)(floor) && !isNaN(floor.floor) && floor.currency === 'USD') {
    return floor.floor;
  }
  return null;
}

// keywords: { 'genre': ['rock', 'pop'], 'pets': ['dog'] } goes to 'genre=rock,genre=pop,pets=dog'
function convertKeywordsToString(keywords) {
  var result = '';
  Object.keys(keywords).forEach(function (key) {
    // if 'text' or ''
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(keywords[key])) {
      if (keywords[key] !== '') {
        result += "".concat(key, "=").concat(keywords[key], ",");
      } else {
        result += "".concat(key, ",");
      }
    } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(keywords[key])) {
      if (keywords[key][0] === '') {
        result += "".concat(key, ",");
      } else {
        keywords[key].forEach(function (val) {
          result += "".concat(key, "=").concat(val, ",");
        });
      }
    }
  });

  // remove last trailing comma
  result = result.substring(0, result.length - 1);
  return result;
}

// converts a comma separated list of keywords into the standard keyword object format used in appnexus bid params
// 'genre=rock,genre=pop,pets=dog,music' goes to { 'genre': ['rock', 'pop'], 'pets': ['dog'], 'music': [''] }
function convertStringToKeywordsObj(keyStr) {
  var result = {};
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isStr)(keyStr) && keyStr !== '') {
    // will split based on commas and will eat white space before/after the comma
    var keywordList = keyStr.split(/\s*(?:,)\s*/);
    keywordList.forEach(function (kw) {
      // if = exists, then split
      if (kw.indexOf('=') !== -1) {
        var kwPair = kw.split('=');
        var key = kwPair[0];
        var val = kwPair[1];

        // then check for existing key in result > if so add value to the array > if not, add new key and create value array
        if (result.hasOwnProperty(key)) {
          result[key].push(val);
        } else {
          result[key] = [val];
        }
      } else {
        // make a key with '' value; if key already exists > don't add
        if (!result.hasOwnProperty(kw)) {
          result[kw] = [''];
        }
      }
    });
  }
  return result;
}
(0,_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__.registerBidder)(spec);
window.pbjs.installedModules.push('appnexusBidAdapter');

/***/ }),

/***/ "./src/utils/gpdr.js":
/*!***************************!*\
  !*** ./src/utils/gpdr.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasPurpose1Consent": function() { return /* binding */ hasPurpose1Consent; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/dlv/index.js");


/**
 * Check if GDPR purpose 1 consent was given.
 *
 * @param gdprConsent GDPR consent data
 * @returns {boolean} true if the gdprConsent is null-y; or GDPR does not apply; or if purpose 1 consent was given.
 */
function hasPurpose1Consent(gdprConsent) {
  if (gdprConsent !== null && gdprConsent !== void 0 && gdprConsent.gdprApplies) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(gdprConsent, 'vendorData.purpose.consents.1') === true;
  }
  return true;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/appnexusBidAdapter.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["consentManagement"],{

/***/ "./modules/consentManagement.js":
/*!**************************************!*\
  !*** ./modules/consentManagement.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports userCMP, consentTimeout, gdprScope, staticConsentData, requestBidsHook, resetConsentData, setConsentConfig, enrichFPDHook, setOrtbAdditionalConsent */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _src_pbjsORTB_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/pbjsORTB.js */ "./src/pbjsORTB.js");
/* harmony import */ var _src_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/fpd/enrichment.js */ "./src/fpd/enrichment.js");


/**
 * This module adds GDPR consentManagement support to prebid.js.  It interacts with
 * supported CMPs (Consent Management Platforms) to grab the user's consent information
 * and make it available for any GDPR supported adapters to read/pass this information to
 * their system.
 */







var DEFAULT_CMP = 'iab';
var DEFAULT_CONSENT_TIMEOUT = 10000;
var CMP_VERSION = 2;
var userCMP;
var consentTimeout;
var gdprScope;
var staticConsentData;
var actionTimeout;
var consentData;
var addedConsentHook = false;

// add new CMPs here, with their dedicated lookup function
var cmpCallMap = {
  'iab': lookupIabConsent,
  'static': lookupStaticConsentData
};

/**
 * This function reads the consent string from the config to obtain the consent information of the user.
 * @param {function({})} onSuccess acts as a success callback when the value is read from config; pass along consentObject from CMP
 */
function lookupStaticConsentData(_ref) {
  var onSuccess = _ref.onSuccess,
    onError = _ref.onError;
  processCmpData(staticConsentData, {
    onSuccess: onSuccess,
    onError: onError
  });
}

/**
 * This function handles interacting with an IAB compliant CMP to obtain the consent information of the user.
 * Given the async nature of the CMP's API, we pass in acting success/error callback functions to exit this function
 * based on the appropriate result.
 * @param {function({})} onSuccess acts as a success callback when CMP returns a value; pass along consentObjectfrom CMP
 * @param {function(string, ...{}?)} cmpError acts as an error callback while interacting with CMP; pass along an error message (string) and any extra error arguments (purely for logging)
 */
function lookupIabConsent(_ref2) {
  var onSuccess = _ref2.onSuccess,
    onError = _ref2.onError,
    onEvent = _ref2.onEvent;
  function findCMP() {
    var f = window;
    var cmpFrame;
    var cmpFunction;
    while (true) {
      try {
        if (typeof f.__tcfapi === 'function') {
          cmpFunction = f.__tcfapi;
          cmpFrame = f;
          break;
        }
      } catch (e) {}

      // need separate try/catch blocks due to the exception errors thrown when trying to check for a frame that doesn't exist in 3rd party env
      try {
        if (f.frames['__tcfapiLocator']) {
          cmpFrame = f;
          break;
        }
      } catch (e) {}
      if (f === window.top) break;
      f = f.parent;
    }
    return {
      cmpFrame: cmpFrame,
      cmpFunction: cmpFunction
    };
  }
  function cmpResponseCallback(tcfData, success) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)('Received a response from CMP', tcfData);
    if (success) {
      onEvent(tcfData);
      if (tcfData.gdprApplies === false || tcfData.eventStatus === 'tcloaded' || tcfData.eventStatus === 'useractioncomplete') {
        processCmpData(tcfData, {
          onSuccess: onSuccess,
          onError: onError
        });
      }
    } else {
      onError('CMP unable to register callback function.  Please check CMP setup.');
    }
  }
  var cmpCallbacks = {};
  var _findCMP = findCMP(),
    cmpFrame = _findCMP.cmpFrame,
    cmpFunction = _findCMP.cmpFunction;
  if (!cmpFrame) {
    return onError('TCF2 CMP not found.');
  }
  // to collect the consent information from the user, we perform two calls to the CMP in parallel:
  // first to collect the user's consent choices represented in an encoded string (via getConsentData)
  // second to collect the user's full unparsed consent information (via getVendorConsents)

  // the following code also determines where the CMP is located and uses the proper workflow to communicate with it:
  // check to see if CMP is found on the same window level as prebid and call it directly if so
  // check to see if prebid is in a safeframe (with CMP support)
  // else assume prebid may be inside an iframe and use the IAB CMP locator code to see if CMP's located in a higher parent window. this works in cross domain iframes
  // if the CMP is not found, the iframe function will call the cmpError exit callback to abort the rest of the CMP workflow

  if (typeof cmpFunction === 'function') {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)('Detected CMP API is directly accessible, calling it now...');
    cmpFunction('addEventListener', CMP_VERSION, cmpResponseCallback);
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)('Detected CMP is outside the current iframe where Prebid.js is located, calling it now...');
    callCmpWhileInIframe('addEventListener', cmpFrame, cmpResponseCallback);
  }
  function callCmpWhileInIframe(commandName, cmpFrame, moduleCallback) {
    var apiName = '__tcfapi';
    var callName = "".concat(apiName, "Call");

    /* Setup up a __cmp function to do the postMessage and stash the callback.
    This function behaves (from the caller's perspective identicially to the in-frame __cmp call */
    window[apiName] = function (cmd, cmpVersion, callback, arg) {
      var callId = Math.random() + '';
      var msg = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, callName, {
        command: cmd,
        version: cmpVersion,
        parameter: arg,
        callId: callId
      });
      cmpCallbacks[callId] = callback;
      cmpFrame.postMessage(msg, '*');
    };

    /** when we get the return message, call the stashed callback */
    window.addEventListener('message', readPostMessageResponse, false);

    // call CMP
    window[apiName](commandName, CMP_VERSION, moduleCallback);
    function readPostMessageResponse(event) {
      var cmpDataPkgName = "".concat(apiName, "Return");
      var json = typeof event.data === 'string' && (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.includes)(event.data, cmpDataPkgName) ? JSON.parse(event.data) : event.data;
      if (json[cmpDataPkgName] && json[cmpDataPkgName].callId) {
        var payload = json[cmpDataPkgName];
        // TODO - clean up this logic (move listeners?); we have duplicate messages responses because 2 eventlisteners are active from the 2 cmp requests running in parallel
        if (cmpCallbacks.hasOwnProperty(payload.callId)) {
          cmpCallbacks[payload.callId](payload.returnValue, payload.success);
        }
      }
    }
  }
}

/**
 * Look up consent data and store it in the `consentData` global as well as `adapterManager.js`' gdprDataHandler.
 *
 * @param cb A callback that takes: a boolean that is true if the auction should be canceled; an error message and extra
 * error arguments that will be undefined if there's no error.
 */
function loadConsentData(cb) {
  var isDone = false;
  var timer = null;
  var onTimeout, provisionalConsent;
  var cmpLoaded = false;
  function resetTimeout(timeout) {
    if (timer != null) {
      clearTimeout(timer);
    }
    if (!isDone && timeout != null) {
      if (timeout === 0) {
        onTimeout();
      } else {
        timer = setTimeout(onTimeout, timeout);
      }
    }
  }
  function done(consentData, shouldCancelAuction, errMsg) {
    resetTimeout(null);
    isDone = true;
    _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__.gdprDataHandler.setConsentData(consentData);
    if (typeof cb === 'function') {
      for (var _len = arguments.length, extraArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        extraArgs[_key - 3] = arguments[_key];
      }
      cb.apply(void 0, [shouldCancelAuction, errMsg].concat(extraArgs));
    }
  }
  if (!(0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_2__.includes)(Object.keys(cmpCallMap), userCMP)) {
    done(null, false, "CMP framework (".concat(userCMP, ") is not a supported framework.  Aborting consentManagement module and resuming auction."));
    return;
  }
  var callbacks = {
    onSuccess: function onSuccess(data) {
      return done(data, false);
    },
    onError: function onError(msg) {
      for (var _len2 = arguments.length, extraArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        extraArgs[_key2 - 1] = arguments[_key2];
      }
      done.apply(void 0, [null, true, msg].concat(extraArgs));
    },
    onEvent: function onEvent(consentData) {
      provisionalConsent = consentData;
      if (cmpLoaded) return;
      cmpLoaded = true;
      if (actionTimeout != null) {
        resetTimeout(actionTimeout);
      }
    }
  };
  onTimeout = function onTimeout() {
    var continueToAuction = function continueToAuction(data) {
      done(data, false, "".concat(cmpLoaded ? 'Timeout waiting for user action on CMP' : 'CMP did not load', ", continuing auction..."));
    };
    processCmpData(provisionalConsent, {
      onSuccess: continueToAuction,
      onError: function onError() {
        return continueToAuction(storeConsentData(undefined));
      }
    });
  };
  cmpCallMap[userCMP](callbacks);
  if (!(actionTimeout != null && cmpLoaded)) {
    resetTimeout(consentTimeout);
  }
}

/**
 * Like `loadConsentData`, but cache and re-use previously loaded data.
 * @param cb
 */
function loadIfMissing(cb) {
  if (consentData) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)('User consent information already known.  Pulling internally stored information...');
    // eslint-disable-next-line standard/no-callback-literal
    cb(false);
  } else {
    loadConsentData(cb);
  }
}

/**
 * If consentManagement module is enabled (ie included in setConfig), this hook function will attempt to fetch the
 * user's encoded consent string from the supported CMP.  Once obtained, the module will store this
 * data as part of a gdprConsent object which gets transferred to adapterManager's gdprDataHandler object.
 * This information is later added into the bidRequest object for any supported adapters to read/pass along to their system.
 * @param {object} reqBidsConfigObj required; This is the same param that's used in pbjs.requestBids.
 * @param {function} fn required; The next function in the chain, used by hook.js
 */
var requestBidsHook = (0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__.timedAuctionHook)('gdpr', function requestBidsHook(fn, reqBidsConfigObj) {
  loadIfMissing(function (shouldCancelAuction, errMsg) {
    if (errMsg) {
      var log = _src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn;
      if (shouldCancelAuction) {
        log = _src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError;
        errMsg = "".concat(errMsg, " Canceling auction as per consentManagement config.");
      }
      for (var _len3 = arguments.length, extraArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        extraArgs[_key3 - 2] = arguments[_key3];
      }
      log.apply(void 0, [errMsg].concat(extraArgs));
    }
    if (shouldCancelAuction) {
      fn.stopTiming();
      if (typeof reqBidsConfigObj.bidsBackHandler === 'function') {
        reqBidsConfigObj.bidsBackHandler();
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)('Error executing bidsBackHandler');
      }
    } else {
      fn.call(this, reqBidsConfigObj);
    }
  });
});

/**
 * This function checks the consent data provided by CMP to ensure it's in an expected state.
 * If it's bad, we call `onError`
 * If it's good, then we store the value and call `onSuccess`
 */
function processCmpData(consentObject, _ref3) {
  var onSuccess = _ref3.onSuccess,
    onError = _ref3.onError;
  function checkData() {
    // if CMP does not respond with a gdprApplies boolean, use defaultGdprScope (gdprScope)
    var gdprApplies = consentObject && typeof consentObject.gdprApplies === 'boolean' ? consentObject.gdprApplies : gdprScope;
    var tcString = consentObject && consentObject.tcString;
    return !!(typeof gdprApplies !== 'boolean' || gdprApplies === true && (!tcString || !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStr)(tcString)));
  }
  if (checkData()) {
    onError("CMP returned unexpected value during lookup process.", consentObject);
  } else {
    onSuccess(storeConsentData(consentObject));
  }
}

/**
 * Stores CMP data locally in module to make information available in adaptermanager.js for later in the auction
 * @param {object} cmpConsentObject required; an object representing user's consent choices (can be undefined in certain use-cases for this function only)
 */
function storeConsentData(cmpConsentObject) {
  consentData = {
    consentString: cmpConsentObject ? cmpConsentObject.tcString : undefined,
    vendorData: cmpConsentObject || undefined,
    gdprApplies: cmpConsentObject && typeof cmpConsentObject.gdprApplies === 'boolean' ? cmpConsentObject.gdprApplies : gdprScope
  };
  if (cmpConsentObject && cmpConsentObject.addtlConsent && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStr)(cmpConsentObject.addtlConsent)) {
    consentData.addtlConsent = cmpConsentObject.addtlConsent;
  }
  consentData.apiVersion = CMP_VERSION;
  return consentData;
}

/**
 * Simply resets the module's consentData variable back to undefined, mainly for testing purposes
 */
function resetConsentData() {
  consentData = undefined;
  userCMP = undefined;
  consentTimeout = undefined;
  _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__.gdprDataHandler.reset();
}

/**
 * A configuration function that initializes some module variables, as well as add a hook into the requestBids function
 * @param {{cmp:string, timeout:number, allowAuctionWithoutConsent:boolean, defaultGdprScope:boolean}} config required; consentManagement module config settings; cmp (string), timeout (int), allowAuctionWithoutConsent (boolean)
 */
function setConsentConfig(config) {
  // if `config.gdpr`, `config.usp` or `config.gpp` exist, assume new config format.
  // else for backward compatability, just use `config`
  config = config && (config.gdpr || config.usp || config.gpp ? config.gdpr : config);
  if (!config || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(config) !== 'object') {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn)('consentManagement (gdpr) config not defined, exiting consent manager');
    return;
  }
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStr)(config.cmpApi)) {
    userCMP = config.cmpApi;
  } else {
    userCMP = DEFAULT_CMP;
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat(DEFAULT_CMP, ")."));
  }
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(config.timeout)) {
    consentTimeout = config.timeout;
  } else {
    consentTimeout = DEFAULT_CONSENT_TIMEOUT;
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(DEFAULT_CONSENT_TIMEOUT, ")."));
  }
  actionTimeout = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(config.actionTimeout) ? config.actionTimeout : null;

  // if true, then gdprApplies should be set to true
  gdprScope = config.defaultGdprScope === true;
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)('consentManagement module has been activated...');
  if (userCMP === 'static') {
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(config.consentData)) {
      var _staticConsentData;
      staticConsentData = config.consentData;
      if (((_staticConsentData = staticConsentData) === null || _staticConsentData === void 0 ? void 0 : _staticConsentData.getTCData) != null) {
        // accept static config with or without `getTCData` - see https://github.com/prebid/Prebid.js/issues/9581
        staticConsentData = staticConsentData.getTCData;
      }
      consentTimeout = 0;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.");
    }
  }
  if (!addedConsentHook) {
    pbjs.requestBids.before(requestBidsHook, 50);
  }
  addedConsentHook = true;
  _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__.gdprDataHandler.enable();
  loadConsentData(); // immediately look up consent data to make it available without requiring an auction
}

_src_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('consentManagement', function (config) {
  return setConsentConfig(config.consentManagement);
});
function enrichFPDHook(next, fpd) {
  return next(fpd.then(function (ortb2) {
    var consent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__.gdprDataHandler.getConsentData();
    if (consent) {
      if (typeof consent.gdprApplies === 'boolean') {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(ortb2, 'regs.ext.gdpr', consent.gdprApplies ? 1 : 0);
      }
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(ortb2, 'user.ext.consent', consent.consentString);
    }
    return ortb2;
  }));
}
_src_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_8__.enrichFPD.before(enrichFPDHook);
function setOrtbAdditionalConsent(ortbRequest, bidderRequest) {
  var _bidderRequest$gdprCo;
  // this is not a standardized name for addtlConsent, so keep this as an ORTB library processor rather than an FPD enrichment
  var addtl = (_bidderRequest$gdprCo = bidderRequest.gdprConsent) === null || _bidderRequest$gdprCo === void 0 ? void 0 : _bidderRequest$gdprCo.addtlConsent;
  if (addtl && typeof addtl === 'string') {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(ortbRequest, 'user.ext.ConsentedProvidersSettings.consented_providers', addtl);
  }
}
(0,_src_pbjsORTB_js__WEBPACK_IMPORTED_MODULE_9__.registerOrtbProcessor)({
  type: _src_pbjsORTB_js__WEBPACK_IMPORTED_MODULE_9__.REQUEST,
  name: 'gdprAddtlConsent',
  fn: setOrtbAdditionalConsent
});
window.pbjs.installedModules.push('consentManagement');

/***/ }),

/***/ "./src/pbjsORTB.js":
/*!*************************!*\
  !*** ./src/pbjsORTB.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST": function() { return /* binding */ REQUEST; },
/* harmony export */   "registerOrtbProcessor": function() { return /* binding */ registerOrtbProcessor; }
/* harmony export */ });
/* unused harmony exports PROCESSOR_TYPES, PROCESSOR_DIALECTS, IMP, BID_RESPONSE, RESPONSE, DEFAULT, PBS, processorRegistry, getProcessors */
var PROCESSOR_TYPES = ['request', 'imp', 'bidResponse', 'response'];
var PROCESSOR_DIALECTS = ['default', 'pbs'];
var REQUEST = PROCESSOR_TYPES[0],
  IMP = PROCESSOR_TYPES[1],
  BID_RESPONSE = PROCESSOR_TYPES[2],
  RESPONSE = PROCESSOR_TYPES[3];

var DEFAULT = PROCESSOR_DIALECTS[0],
  PBS = PROCESSOR_DIALECTS[1];

var types = new Set(PROCESSOR_TYPES);
function processorRegistry() {
  var processors = {};
  return {
    registerOrtbProcessor: function registerOrtbProcessor(_ref) {
      var type = _ref.type,
        name = _ref.name,
        fn = _ref.fn,
        _ref$priority = _ref.priority,
        priority = _ref$priority === void 0 ? 0 : _ref$priority,
        _ref$dialects = _ref.dialects,
        dialects = _ref$dialects === void 0 ? [DEFAULT] : _ref$dialects;
      if (!types.has(type)) {
        throw new Error("ORTB processor type must be one of: ".concat(PROCESSOR_TYPES.join(', ')));
      }
      dialects.forEach(function (dialect) {
        if (!processors.hasOwnProperty(dialect)) {
          processors[dialect] = {};
        }
        if (!processors[dialect].hasOwnProperty(type)) {
          processors[dialect][type] = {};
        }
        processors[dialect][type][name] = {
          priority: priority,
          fn: fn
        };
      });
    },
    getProcessors: function getProcessors(dialect) {
      return processors[dialect] || {};
    }
  };
}
var _processorRegistry = processorRegistry(),
  registerOrtbProcessor = _processorRegistry.registerOrtbProcessor,
  getProcessors = _processorRegistry.getProcessors;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/consentManagement.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["consentManagementGpp"],{

/***/ "./modules/consentManagementGpp.js":
/*!*****************************************!*\
  !*** ./modules/consentManagementGpp.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports userCMP, consentTimeout, staticConsentData, requestBidsHook, resetConsentData, setConsentConfig, enrichFPDHook */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _src_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/fpd/enrichment.js */ "./src/fpd/enrichment.js");


/**
 * This module adds GPP consentManagement support to prebid.js.  It interacts with
 * supported CMPs (Consent Management Platforms) to grab the user's consent information
 * and make it available for any GPP supported adapters to read/pass this information to
 * their system and for various other features/modules in Prebid.js.
 */






var DEFAULT_CMP = 'iab';
var DEFAULT_CONSENT_TIMEOUT = 10000;
var CMP_VERSION = 1;
var userCMP;
var consentTimeout;
var staticConsentData;
var consentData;
var addedConsentHook = false;

// add new CMPs here, with their dedicated lookup function
var cmpCallMap = {
  'iab': lookupIabConsent,
  'static': lookupStaticConsentData
};

/**
 * This function checks the state of the IAB gppData's applicableSection field (to ensure it's populated and has a valid value).
 * section === 0 represents a CMP's default value when CMP is loading, it shoud not be used a real user's section.
 *
 * TODO --- The initial version of the GPP CMP API spec used this naming convention, but it was later changed as an update to the spec.
 * CMPs should adjust their logic to use the new format (applicableSecctions), but that may not be the case with the initial release.
 * Added support just in case for this transition period, can likely be removed at a later date...
 * @param gppData represents the IAB gppData object
 * @returns true|false
 */
function checkApplicableSectionIsReady(gppData) {
  return gppData && Array.isArray(gppData.applicableSection) && gppData.applicableSection.length > 0 && gppData.applicableSection[0] !== 0;
}

/**
 * This function checks the state of the IAB gppData's applicableSections field (to ensure it's populated and has a valid value).
 * section === 0 represents a CMP's default value when CMP is loading, it shoud not be used a real user's section.
 * @param gppData represents the IAB gppData object
 * @returns true|false
 */
function checkApplicableSectionsIsReady(gppData) {
  return gppData && Array.isArray(gppData.applicableSections) && gppData.applicableSections.length > 0 && gppData.applicableSections[0] !== 0;
}

/**
 * This function reads the consent string from the config to obtain the consent information of the user.
 * @param {function({})} onSuccess acts as a success callback when the value is read from config; pass along consentObject from CMP
 */
function lookupStaticConsentData(_ref) {
  var onSuccess = _ref.onSuccess,
    onError = _ref.onError;
  processCmpData(staticConsentData, {
    onSuccess: onSuccess,
    onError: onError
  });
}

/**
 * This function handles interacting with an IAB compliant CMP to obtain the consent information of the user.
 * Given the async nature of the CMP's API, we pass in acting success/error callback functions to exit this function
 * based on the appropriate result.
 * @param {function({})} onSuccess acts as a success callback when CMP returns a value; pass along consentObjectfrom CMP
 * @param {function(string, ...{}?)} cmpError acts as an error callback while interacting with CMP; pass along an error message (string) and any extra error arguments (purely for logging)
 */
function lookupIabConsent(_ref2) {
  var onSuccess = _ref2.onSuccess,
    onError = _ref2.onError;
  var cmpApiName = '__gpp';
  var cmpCallbacks = {};
  var registeredPostMessageResponseListener = false;
  function findCMP() {
    var f = window;
    var cmpFrame;
    var cmpDirectAccess = false;
    while (true) {
      try {
        if (typeof f[cmpApiName] === 'function') {
          cmpFrame = f;
          cmpDirectAccess = true;
          break;
        }
      } catch (e) {}

      // need separate try/catch blocks due to the exception errors thrown when trying to check for a frame that doesn't exist in 3rd party env
      try {
        if (f.frames['__gppLocator']) {
          cmpFrame = f;
          break;
        }
      } catch (e) {}
      if (f === window.top) break;
      f = f.parent;
    }
    return {
      cmpFrame: cmpFrame,
      cmpDirectAccess: cmpDirectAccess
    };
  }
  var _findCMP = findCMP(),
    cmpFrame = _findCMP.cmpFrame,
    cmpDirectAccess = _findCMP.cmpDirectAccess;
  if (!cmpFrame) {
    return onError('GPP CMP not found.');
  }
  var invokeCMP = cmpDirectAccess ? invokeCMPDirect : invokeCMPFrame;
  function invokeCMPDirect(_ref3, resultCb) {
    var command = _ref3.command,
      callback = _ref3.callback,
      parameter = _ref3.parameter,
      _ref3$version = _ref3.version,
      version = _ref3$version === void 0 ? CMP_VERSION : _ref3$version;
    if (typeof resultCb === 'function') {
      resultCb(cmpFrame[cmpApiName](command, callback, parameter, version));
    } else {
      cmpFrame[cmpApiName](command, callback, parameter, version);
    }
  }
  function invokeCMPFrame(_ref4, resultCb) {
    var command = _ref4.command,
      callback = _ref4.callback,
      parameter = _ref4.parameter,
      _ref4$version = _ref4.version,
      version = _ref4$version === void 0 ? CMP_VERSION : _ref4$version;
    var callName = "".concat(cmpApiName, "Call");
    if (!registeredPostMessageResponseListener) {
      // when we get the return message, call the stashed callback;
      window.addEventListener('message', readPostMessageResponse, false);
      registeredPostMessageResponseListener = true;
    }

    // call CMP via postMessage
    var callId = Math.random().toString();
    var msg = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, callName, {
      command: command,
      parameter: parameter,
      version: version,
      callId: callId
    });

    // TODO? - add logic to check if random was already used in the same session, and roll another if so?
    cmpCallbacks[callId] = typeof callback === 'function' ? callback : resultCb;
    cmpFrame.postMessage(msg, '*');
    function readPostMessageResponse(event) {
      var cmpDataPkgName = "".concat(cmpApiName, "Return");
      var json = typeof event.data === 'string' && event.data.includes(cmpDataPkgName) ? JSON.parse(event.data) : event.data;
      if (json[cmpDataPkgName] && json[cmpDataPkgName].callId) {
        var payload = json[cmpDataPkgName];
        if (cmpCallbacks.hasOwnProperty(payload.callId)) {
          cmpCallbacks[payload.callId](payload.returnValue);
        }
      }
    }
  }
  var startupMsg = cmpDirectAccess ? 'Detected GPP CMP API is directly accessible, calling it now...' : 'Detected GPP CMP is outside the current iframe where Prebid.js is located, calling it now...';
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)(startupMsg);
  invokeCMP({
    command: 'addEventListener',
    callback: function callback(evt) {
      if (evt) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Received a ".concat(cmpDirectAccess ? 'direct' : 'postmsg', " response from GPP CMP for event"), evt);
        if (evt.eventName === 'sectionChange' || evt.pingData.cmpStatus === 'loaded') {
          invokeCMP({
            command: 'getGPPData'
          }, function (gppData) {
            (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("Received a ".concat(cmpDirectAccess ? 'direct' : 'postmsg', " response from GPP CMP for getGPPData"), gppData);
            processCmpData(gppData, {
              onSuccess: onSuccess,
              onError: onError
            });
          });
        } else if (evt.pingData.cmpStatus === 'error') {
          onError('CMP returned with a cmpStatus:error response.  Please check CMP setup.');
        }
      }
    }
  });
}

/**
 * Look up consent data and store it in the `consentData` global as well as `adapterManager.js`' gdprDataHandler.
 *
 * @param cb A callback that takes: a boolean that is true if the auction should be canceled; an error message and extra
 * error arguments that will be undefined if there's no error.
 */
function loadConsentData(cb) {
  var isDone = false;
  var timer = null;
  function done(consentData, shouldCancelAuction, errMsg) {
    if (timer != null) {
      clearTimeout(timer);
    }
    isDone = true;
    _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gppDataHandler.setConsentData(consentData);
    if (typeof cb === 'function') {
      for (var _len = arguments.length, extraArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        extraArgs[_key - 3] = arguments[_key];
      }
      cb.apply(void 0, [shouldCancelAuction, errMsg].concat(extraArgs));
    }
  }
  if (!(0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_3__.includes)(Object.keys(cmpCallMap), userCMP)) {
    done(null, false, "GPP CMP framework (".concat(userCMP, ") is not a supported framework.  Aborting consentManagement module and resuming auction."));
    return;
  }
  var callbacks = {
    onSuccess: function onSuccess(data) {
      return done(data, false);
    },
    onError: function onError(msg) {
      for (var _len2 = arguments.length, extraArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        extraArgs[_key2 - 1] = arguments[_key2];
      }
      done.apply(void 0, [null, true, msg].concat(extraArgs));
    }
  };
  cmpCallMap[userCMP](callbacks);
  if (!isDone) {
    var onTimeout = function onTimeout() {
      var continueToAuction = function continueToAuction(data) {
        done(data, false, 'GPP CMP did not load, continuing auction...');
      };
      processCmpData(consentData, {
        onSuccess: continueToAuction,
        onError: function onError() {
          return continueToAuction(storeConsentData(undefined));
        }
      });
    };
    if (consentTimeout === 0) {
      onTimeout();
    } else {
      timer = setTimeout(onTimeout, consentTimeout);
    }
  }
}

/**
 * Like `loadConsentData`, but cache and re-use previously loaded data.
 * @param cb
 */
function loadIfMissing(cb) {
  if (consentData) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)('User consent information already known.  Pulling internally stored information...');
    // eslint-disable-next-line standard/no-callback-literal
    cb(false);
  } else {
    loadConsentData(cb);
  }
}

/**
 * If consentManagement module is enabled (ie included in setConfig), this hook function will attempt to fetch the
 * user's encoded consent string from the supported CMP.  Once obtained, the module will store this
 * data as part of a gppConsent object which gets transferred to adapterManager's gppDataHandler object.
 * This information is later added into the bidRequest object for any supported adapters to read/pass along to their system.
 * @param {object} reqBidsConfigObj required; This is the same param that's used in pbjs.requestBids.
 * @param {function} fn required; The next function in the chain, used by hook.js
 */
var requestBidsHook = (0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_4__.timedAuctionHook)('gpp', function requestBidsHook(fn, reqBidsConfigObj) {
  loadIfMissing(function (shouldCancelAuction, errMsg) {
    if (errMsg) {
      var log = _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn;
      if (shouldCancelAuction) {
        log = _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError;
        errMsg = "".concat(errMsg, " Canceling auction as per consentManagement config.");
      }
      for (var _len3 = arguments.length, extraArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        extraArgs[_key3 - 2] = arguments[_key3];
      }
      log.apply(void 0, [errMsg].concat(extraArgs));
    }
    if (shouldCancelAuction) {
      fn.stopTiming();
      if (typeof reqBidsConfigObj.bidsBackHandler === 'function') {
        reqBidsConfigObj.bidsBackHandler();
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Error executing bidsBackHandler');
      }
    } else {
      fn.call(this, reqBidsConfigObj);
    }
  });
});

/**
 * This function checks the consent data provided by CMP to ensure it's in an expected state.
 * If it's bad, we call `onError`
 * If it's good, then we store the value and call `onSuccess`
 */
function processCmpData(consentObject, _ref5) {
  var onSuccess = _ref5.onSuccess,
    onError = _ref5.onError;
  function checkData() {
    var gppString = consentObject && consentObject.gppString;
    var gppSection = checkApplicableSectionsIsReady(consentObject) ? consentObject.applicableSections : checkApplicableSectionIsReady(consentObject) ? consentObject.applicableSection : [];
    return !!(!Array.isArray(gppSection) || Array.isArray(gppSection) && (!gppString || !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)(gppString)));
  }
  if (checkData()) {
    onError("CMP returned unexpected value during lookup process.", consentObject);
  } else {
    onSuccess(storeConsentData(consentObject));
  }
}

/**
 * Stores CMP data locally in module to make information available in adaptermanager.js for later in the auction
 * @param {object} cmpConsentObject required; an object representing user's consent choices (can be undefined in certain use-cases for this function only)
 */
function storeConsentData(cmpConsentObject) {
  consentData = {
    gppString: cmpConsentObject ? cmpConsentObject.gppString : undefined,
    fullGppData: cmpConsentObject || undefined
  };
  consentData.applicableSections = checkApplicableSectionsIsReady(cmpConsentObject) ? cmpConsentObject.applicableSections : checkApplicableSectionIsReady(cmpConsentObject) ? cmpConsentObject.applicableSection : [];
  consentData.apiVersion = CMP_VERSION;
  return consentData;
}

/**
 * Simply resets the module's consentData variable back to undefined, mainly for testing purposes
 */
function resetConsentData() {
  consentData = undefined;
  userCMP = undefined;
  consentTimeout = undefined;
  _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gppDataHandler.reset();
}

/**
 * A configuration function that initializes some module variables, as well as add a hook into the requestBids function
 * @param {{cmp:string, timeout:number, allowAuctionWithoutConsent:boolean, defaultGdprScope:boolean}} config required; consentManagement module config settings; cmp (string), timeout (int), allowAuctionWithoutConsent (boolean)
 */
function setConsentConfig(config) {
  config = config && config.gpp;
  if (!config || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(config) !== 'object') {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('consentManagement.gpp config not defined, exiting consent manager module');
    return;
  }
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)(config.cmpApi)) {
    userCMP = config.cmpApi;
  } else {
    userCMP = DEFAULT_CMP;
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("consentManagement.gpp config did not specify cmp.  Using system default setting (".concat(DEFAULT_CMP, ")."));
  }
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(config.timeout)) {
    consentTimeout = config.timeout;
  } else {
    consentTimeout = DEFAULT_CONSENT_TIMEOUT;
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("consentManagement.gpp config did not specify timeout.  Using system default setting (".concat(DEFAULT_CONSENT_TIMEOUT, ")."));
  }
  if (userCMP === 'static') {
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(config.consentData)) {
      staticConsentData = config.consentData;
      consentTimeout = 0;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("consentManagement.gpp config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.");
    }
  }
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)('consentManagement.gpp module has been activated...');
  if (!addedConsentHook) {
    pbjs.requestBids.before(requestBidsHook, 50);
  }
  addedConsentHook = true;
  _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gppDataHandler.enable();
  loadConsentData(); // immediately look up consent data to make it available without requiring an auction
}

_src_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('consentManagement', function (config) {
  return setConsentConfig(config.consentManagement);
});
function enrichFPDHook(next, fpd) {
  return next(fpd.then(function (ortb2) {
    var consent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gppDataHandler.getConsentData();
    if (consent) {
      if (Array.isArray(consent.applicableSections)) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(ortb2, 'regs.gpp_sid', consent.applicableSections);
      }
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.dset)(ortb2, 'regs.gpp', consent.gppString);
    }
    return ortb2;
  }));
}
_src_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_8__.enrichFPD.before(enrichFPDHook);
window.pbjs.installedModules.push('consentManagementGpp');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/consentManagementGpp.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["consentManagementUsp"],{

/***/ "./modules/consentManagementUsp.js":
/*!*****************************************!*\
  !*** ./modules/consentManagementUsp.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports consentAPI, consentTimeout, staticConsentData, requestBidsHook, resetConsentData, setConsentConfig, enrichFPDHook */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/fpd/enrichment.js */ "./src/fpd/enrichment.js");

/**
 * This module adds USPAPI (CCPA) consentManagement support to prebid.js. It
 * interacts with supported USP Consent APIs to grab the user's consent
 * information and make it available for any USP (CCPA) supported adapters to
 * read/pass this information to their system.
 */






var DEFAULT_CONSENT_API = 'iab';
var DEFAULT_CONSENT_TIMEOUT = 50;
var USPAPI_VERSION = 1;
var consentAPI = DEFAULT_CONSENT_API;
var consentTimeout = DEFAULT_CONSENT_TIMEOUT;
var staticConsentData;
var consentData;
var enabled = false;

// consent APIs
var uspCallMap = {
  'iab': lookupUspConsent,
  'static': lookupStaticConsentData
};

/**
 * This function reads the consent string from the config to obtain the consent information of the user.
 */
function lookupStaticConsentData(_ref) {
  var onSuccess = _ref.onSuccess,
    onError = _ref.onError;
  processUspData(staticConsentData, {
    onSuccess: onSuccess,
    onError: onError
  });
}

/**
 * This function handles interacting with an USP compliant consent manager to obtain the consent information of the user.
 * Given the async nature of the USP's API, we pass in acting success/error callback functions to exit this function
 * based on the appropriate result.
 */
function lookupUspConsent(_ref2) {
  var onSuccess = _ref2.onSuccess,
    onError = _ref2.onError;
  function findUsp() {
    var f = window;
    var uspapiFrame;
    var uspapiFunction;
    while (true) {
      try {
        if (typeof f.__uspapi === 'function') {
          uspapiFunction = f.__uspapi;
          uspapiFrame = f;
          break;
        }
      } catch (e) {}
      try {
        if (f.frames['__uspapiLocator']) {
          uspapiFrame = f;
          break;
        }
      } catch (e) {}
      if (f === window.top) break;
      f = f.parent;
    }
    return {
      uspapiFrame: uspapiFrame,
      uspapiFunction: uspapiFunction
    };
  }
  function handleUspApiResponseCallbacks() {
    var uspResponse = {};
    function afterEach() {
      if (uspResponse.usPrivacy) {
        processUspData(uspResponse, {
          onSuccess: onSuccess,
          onError: onError
        });
      } else {
        onError('Unable to get USP consent string.');
      }
    }
    return {
      consentDataCallback: function consentDataCallback(consentResponse, success) {
        if (success && consentResponse.uspString) {
          uspResponse.usPrivacy = consentResponse.uspString;
        }
        afterEach();
      }
    };
  }
  var callbackHandler = handleUspApiResponseCallbacks();
  var uspapiCallbacks = {};
  var _findUsp = findUsp(),
    uspapiFrame = _findUsp.uspapiFrame,
    uspapiFunction = _findUsp.uspapiFunction;
  if (!uspapiFrame) {
    return onError('USP CMP not found.');
  }
  function registerDataDelHandler(invoker, arg2) {
    try {
      invoker('registerDeletion', arg2, _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].callDataDeletionRequest);
    } catch (e) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('Error invoking CMP `registerDeletion`:', e);
    }
  }

  // to collect the consent information from the user, we perform a call to USPAPI
  // to collect the user's consent choices represented as a string (via getUSPData)

  // the following code also determines where the USPAPI is located and uses the proper workflow to communicate with it:
  // - use the USPAPI locator code to see if USP's located in the current window or an ancestor window.
  // - else assume prebid is in an iframe, and use the locator to see if the CMP is located in a higher parent window. This works in cross domain iframes.
  // - if USPAPI is not found, the iframe function will call the uspError exit callback to abort the rest of the USPAPI workflow

  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isFn)(uspapiFunction)) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)('Detected USP CMP is directly accessible, calling it now...');
    uspapiFunction('getUSPData', USPAPI_VERSION, callbackHandler.consentDataCallback);
    registerDataDelHandler(uspapiFunction, USPAPI_VERSION);
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)('Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...');
    callUspApiWhileInIframe('getUSPData', uspapiFrame, callbackHandler.consentDataCallback);
    registerDataDelHandler(callUspApiWhileInIframe, uspapiFrame);
  }
  var listening = false;
  function callUspApiWhileInIframe(commandName, uspapiFrame, moduleCallback) {
    function callUsp(cmd, ver, callback) {
      var callId = Math.random() + '';
      var msg = {
        __uspapiCall: {
          command: cmd,
          version: ver,
          callId: callId
        }
      };
      uspapiCallbacks[callId] = callback;
      uspapiFrame.postMessage(msg, '*');
    }
    ;

    /** when we get the return message, call the stashed callback */
    if (!listening) {
      window.addEventListener('message', readPostMessageResponse, false);
      listening = true;
    }

    // call uspapi
    callUsp(commandName, USPAPI_VERSION, moduleCallback);
    function readPostMessageResponse(event) {
      var res = event && event.data && event.data.__uspapiReturn;
      if (res && res.callId) {
        if (uspapiCallbacks.hasOwnProperty(res.callId)) {
          uspapiCallbacks[res.callId](res.returnValue, res.success);
          delete uspapiCallbacks[res.callId];
        }
      }
    }
  }
}

/**
 * Lookup consent data and store it in the `consentData` global as well as `adapterManager.js`' uspDataHanlder.
 *
 * @param cb a callback that takes an error message and extra error arguments; all args will be undefined if consent
 * data was retrieved successfully.
 */
function loadConsentData(cb) {
  var timer = null;
  var isDone = false;
  function done(consentData, errMsg) {
    if (timer != null) {
      clearTimeout(timer);
    }
    isDone = true;
    _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_0__.uspDataHandler.setConsentData(consentData);
    if (cb != null) {
      for (var _len = arguments.length, extraArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        extraArgs[_key - 2] = arguments[_key];
      }
      cb.apply(void 0, [errMsg].concat(extraArgs));
    }
  }
  if (!uspCallMap[consentAPI]) {
    done(null, "USP framework (".concat(consentAPI, ") is not a supported framework. Aborting consentManagement module and resuming auction."));
    return;
  }
  var callbacks = {
    onSuccess: done,
    onError: function onError(errMsg) {
      for (var _len2 = arguments.length, extraArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        extraArgs[_key2 - 1] = arguments[_key2];
      }
      done.apply(void 0, [null, "".concat(errMsg, " Resuming auction without consent data as per consentManagement config.")].concat(extraArgs));
    }
  };
  uspCallMap[consentAPI](callbacks);
  if (!isDone) {
    if (consentTimeout === 0) {
      processUspData(undefined, callbacks);
    } else {
      timer = setTimeout(callbacks.onError.bind(null, 'USPAPI workflow exceeded timeout threshold.'), consentTimeout);
    }
  }
}

/**
 * If consentManagementUSP module is enabled (ie included in setConfig), this hook function will attempt to fetch the
 * user's encoded consent string from the supported USPAPI. Once obtained, the module will store this
 * data as part of a uspConsent object which gets transferred to adapterManager's uspDataHandler object.
 * This information is later added into the bidRequest object for any supported adapters to read/pass along to their system.
 * @param {object} reqBidsConfigObj required; This is the same param that's used in pbjs.requestBids.
 * @param {function} fn required; The next function in the chain, used by hook.js
 */
var requestBidsHook = (0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_2__.timedAuctionHook)('usp', function requestBidsHook(fn, reqBidsConfigObj) {
  var _this = this;
  if (!enabled) {
    enableConsentManagement();
  }
  loadConsentData(function (errMsg) {
    if (errMsg != null) {
      for (var _len3 = arguments.length, extraArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        extraArgs[_key3 - 1] = arguments[_key3];
      }
      _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn.apply(void 0, [errMsg].concat(extraArgs));
    }
    fn.call(_this, reqBidsConfigObj);
  });
});

/**
 * This function checks the consent data provided by USPAPI to ensure it's in an expected state.
 * If it's bad, we exit the module depending on config settings.
 * If it's good, then we store the value and exits the module.
 * @param {object} consentObject required; object returned by USPAPI that contains user's consent choices
 * @param {function(string)} onSuccess callback accepting the resolved consent USP consent string
 * @param {function(string, ...{}?)} onError callback accepting error message and any extra error arguments (used purely for logging)
 */
function processUspData(consentObject, _ref3) {
  var onSuccess = _ref3.onSuccess,
    onError = _ref3.onError;
  var valid = !!(consentObject && consentObject.usPrivacy);
  if (!valid) {
    onError("USPAPI returned unexpected value during lookup process.", consentObject);
    return;
  }
  storeUspConsentData(consentObject);
  onSuccess(consentData);
}

/**
 * Stores USP data locally in module and then invokes uspDataHandler.setConsentData() to make information available in adaptermanger.js for later in the auction
 * @param {object} consentObject required; an object representing user's consent choices (can be undefined in certain use-cases for this function only)
 */
function storeUspConsentData(consentObject) {
  if (consentObject && consentObject.usPrivacy) {
    consentData = consentObject.usPrivacy;
  }
}

/**
 * Simply resets the module's consentData variable back to undefined, mainly for testing purposes
 */
function resetConsentData() {
  consentData = undefined;
  consentAPI = undefined;
  consentTimeout = undefined;
  _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_0__.uspDataHandler.reset();
  enabled = false;
}

/**
 * A configuration function that initializes some module variables, as well as add a hook into the requestBids function
 * @param {object} config required; consentManagementUSP module config settings; usp (string), timeout (int), allowAuctionWithoutConsent (boolean)
 */
function setConsentConfig(config) {
  config = config && config.usp;
  if (!config || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) !== 'object') {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)('consentManagement.usp config not defined, using defaults');
  }
  if (config && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStr)(config.cmpApi)) {
    consentAPI = config.cmpApi;
  } else {
    consentAPI = DEFAULT_CONSENT_API;
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(DEFAULT_CONSENT_API, ")."));
  }
  if (config && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(config.timeout)) {
    consentTimeout = config.timeout;
  } else {
    consentTimeout = DEFAULT_CONSENT_TIMEOUT;
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(DEFAULT_CONSENT_TIMEOUT, ")."));
  }
  if (consentAPI === 'static') {
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(config.consentData) && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(config.consentData.getUSPData)) {
      if (config.consentData.getUSPData.uspString) staticConsentData = {
        usPrivacy: config.consentData.getUSPData.uspString
      };
      consentTimeout = 0;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.");
    }
  }
  enableConsentManagement(true);
}
function enableConsentManagement() {
  var configFromUser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (!enabled) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo)("USPAPI consentManagement module has been activated".concat(configFromUser ? '' : " using default values (api: '".concat(consentAPI, "', timeout: ").concat(consentTimeout, "ms)")));
    enabled = true;
    _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_0__.uspDataHandler.enable();
  }
  loadConsentData(); // immediately look up consent data to make it available without requiring an auction
}

_src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('consentManagement', function (config) {
  return setConsentConfig(config.consentManagement);
});
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_5__.getHook)('requestBids').before(requestBidsHook, 50);
function enrichFPDHook(next, fpd) {
  return next(fpd.then(function (ortb2) {
    var consent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_0__.uspDataHandler.getConsentData();
    if (consent) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_6__.dset)(ortb2, 'regs.ext.us_privacy', consent);
    }
    return ortb2;
  }));
}
_src_fpd_enrichment_js__WEBPACK_IMPORTED_MODULE_7__.enrichFPD.before(enrichFPDHook);
window.pbjs.installedModules.push('consentManagementUsp');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/consentManagementUsp.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["conversantAnalyticsAdapter"],{

/***/ "./modules/conversantAnalyticsAdapter.js":
/*!***********************************************!*\
  !*** ./modules/conversantAnalyticsAdapter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports CNVR_CONSTANTS, cnvrHelper */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _src_ajax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/ajax.js */ "./src/ajax.js");
/* harmony import */ var _libraries_analyticsAdapter_AnalyticsAdapter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libraries/analyticsAdapter/AnalyticsAdapter.js */ "./libraries/analyticsAdapter/AnalyticsAdapter.js");
/* harmony import */ var _src_constants_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/constants.json */ "./src/constants.json");
/* harmony import */ var _src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/prebidGlobal.js */ "./src/prebidGlobal.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/refererDetection.js */ "./src/refererDetection.js");









var _CONSTANTS$EVENTS = _src_constants_json__WEBPACK_IMPORTED_MODULE_0__.EVENTS,
  AUCTION_END = _CONSTANTS$EVENTS.AUCTION_END,
  AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED,
  BID_TIMEOUT = _CONSTANTS$EVENTS.BID_TIMEOUT,
  BID_WON = _CONSTANTS$EVENTS.BID_WON,
  BIDDER_ERROR = _CONSTANTS$EVENTS.BIDDER_ERROR;
// STALE_RENDER, TCF2_ENFORCEMENT would need to add extra calls for these as they likely occur after AUCTION_END?
var GVLID = 24;
var ANALYTICS_TYPE = 'endpoint';

// for local testing set domain to 127.0.0.1:8290
var DOMAIN = 'https://web.hb.ad.cpe.dotomi.com/';
var ANALYTICS_URL = DOMAIN + 'cvx/event/prebidanalytics';
var ERROR_URL = DOMAIN + 'cvx/event/prebidanalyticerrors';
var ANALYTICS_CODE = 'conversant';
var CNVR_CONSTANTS = {
  LOG_PREFIX: 'Conversant analytics adapter: ',
  ERROR_MISSING_DATA_PREFIX: 'Parsing method failed because of missing data: ',
  // Maximum time to keep an item in the cache before it gets purged
  MAX_MILLISECONDS_IN_CACHE: 30000,
  // How often cache cleanup will run
  CACHE_CLEANUP_TIME_IN_MILLIS: 30000,
  // Should be float from 0-1, 0 is turned off, 1 is sample every instance
  DEFAULT_SAMPLE_RATE: 1,
  // BID STATUS CODES
  WIN: 10,
  BID: 20,
  NO_BID: 30,
  TIMEOUT: 40,
  RENDER_FAILED: 50
};

// Saves passed in options from the bid adapter
var initOptions = {};

// Simple flag to help handle any tear down needed on disable
var conversantAnalyticsEnabled = false;
var cnvrHelper = {
  // Turns on sampling for an instance of prebid analytics.
  doSample: true,
  doSendErrorData: false,
  /**
   * Used to hold data for RENDER FAILED events so we can send a payload back that will match our original auction data.
   * Contains the following key/value data:
   * <adId> => {
   *     'bidderCode': <bidderCode>,
   *     'adUnitCode': <adUnitCode>,
   *     'auctionId': <auctionId>,
   *     'timeReceived': Date.now()  //For cache cleaning
   * }
   */
  adIdLookup: {},
  /**
   * Time out events happen before AUCTION END so we can save them in a cache and report them at the same time as the
   * AUCTION END event.  Has the following data and key is based off of auctionId, adUnitCode, bidderCode from
   * keyStr = getLookupKey(auctionId, adUnitCode, bidderCode);
   * <keyStr> => {
   *     timeReceived: Date.now() //so cache can be purged in case it doesn't get cleaned out at auctionEnd
   * }
   */
  timeoutCache: {},
  /**
   * Lookup of auction IDs to auction start timestamps
   */
  auctionIdTimestampCache: {},
  /**
   * Capture any bidder errors and bundle them with AUCTION_END
   */
  bidderErrorCache: {}
};

/**
 * Cleanup timer for the adIdLookup and timeoutCache caches. If all works properly then the caches are self-cleaning
 * but in case something goes sideways we poll periodically to cleanup old values to prevent a memory leak
 */
var cacheCleanupInterval;
var conversantAnalytics = Object.assign((0,_libraries_analyticsAdapter_AnalyticsAdapter_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
  URL: ANALYTICS_URL,
  ANALYTICS_TYPE: ANALYTICS_TYPE
}), {
  track: function track(_ref) {
    var eventType = _ref.eventType,
      args = _ref.args;
    try {
      if (cnvrHelper.doSample) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)(CNVR_CONSTANTS.LOG_PREFIX + ' track(): ' + eventType, args);
        switch (eventType) {
          case AUCTION_END:
            onAuctionEnd(args);
            break;
          case AD_RENDER_FAILED:
            onAdRenderFailed(args);
            break;
          case BID_WON:
            onBidWon(args);
            break;
          case BID_TIMEOUT:
            onBidTimeout(args);
            break;
          case BIDDER_ERROR:
            onBidderError(args);
        } // END switch
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)(CNVR_CONSTANTS.LOG_PREFIX + ' - ' + eventType + ': skipped due to sampling');
      } // END IF(cnvrHelper.doSample)
    } catch (e) {
      // e = {stack:"...",message:"..."}
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(CNVR_CONSTANTS.LOG_PREFIX + 'Caught error in handling ' + eventType + ' event: ' + e.message);
      cnvrHelper.sendErrorData(eventType, e);
    }
  } // END track()
});

// ================================================== EVENT HANDLERS ===================================================

/**
 * Handler for BIDDER_ERROR events, tries to capture as much data, save it in cache which is then picked up by
 * AUCTION_END event and included in that payload. Was not able to see an easy way to get adUnitCode in this event
 * so not including it for now.
 * https://docs.prebid.org/dev-docs/bidder-adaptor.html#registering-on-bidder-error
 * Trigger when the HTTP response status code is not between 200-299 and not equal to 304.
 {
    error: XMLHttpRequest,  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    bidderRequest: {  https://docs.prebid.org/dev-docs/bidder-adaptor.html#registering-on-bidder-error
        {
            auctionId: "b06c5141-fe8f-4cdf-9d7d-54415490a917",
            auctionStart: 1579746300522,
            bidderCode: "myBidderCode",
            bidderRequestId: "15246a574e859f",
            bids: [{...}],
            gdprConsent: {consentString: "BOtmiBKOtmiBKABABAENAFAAAAACeAAA", vendorData: {...}, gdprApplies: true},
            refererInfo: {
                canonicalUrl: null,
                page: "http://mypage.org?pbjs_debug=true",
                domain: "mypage.org",
                ref: null,
                numIframes: 0,
                reachedTop: true,
                isAmp: false,
                stack: ["http://mypage.org?pbjs_debug=true"]
            }
        }
    }
}
 */
function onBidderError(args) {
  if (!cnvrHelper.doSendErrorData) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(CNVR_CONSTANTS.LOG_PREFIX + 'Skipping bidder error parsing due to config disabling error logging, bidder error status = ' + args.error.status + ', Message = ' + args.error.statusText);
    return;
  }
  var error = args.error;
  var bidRequest = args.bidderRequest;
  var auctionId = bidRequest.auctionId;
  var bidderCode = bidRequest.bidderCode;
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(CNVR_CONSTANTS.LOG_PREFIX + 'onBidderError(): error received from bidder ' + bidderCode + '. Status = ' + error.status + ', Message = ' + error.statusText);
  var errorObj = {
    status: error.status,
    message: error.statusText,
    bidderCode: bidderCode,
    url: cnvrHelper.getPageUrl()
  };
  if (cnvrHelper.bidderErrorCache[auctionId]) {
    cnvrHelper.bidderErrorCache[auctionId]['errors'].push(errorObj);
  } else {
    cnvrHelper.bidderErrorCache[auctionId] = {
      errors: [errorObj],
      timeReceived: Date.now()
    };
  }
}

/**
 * We get the list of timeouts before the endAution, cache them temporarily in a global cache and the endAuction event
 * will pick them up.  Uses getLookupKey() to create the key to the entry from auctionId, adUnitCode and bidderCode.
 * Saves a single value of timeReceived so we can do cache purging periodically.
 *
 * Current assumption is that the timeout will always be an array even if it is just one object in the array.
 * @param args  [{
    "bidId": "80882409358b8a8",
    "bidder": "conversant",
    "adUnitCode": "MedRect",
    "auctionId": "afbd6e0b-e45b-46ab-87bf-c0bac0cb8881"
  }, {
    "bidId": "9da4c107a6f24c8",
    "bidder": "conversant",
    "adUnitCode": "Leaderboard",
    "auctionId": "afbd6e0b-e45b-46ab-87bf-c0bac0cb8881"
  }
 ]
 */
function onBidTimeout(args) {
  args.forEach(function (timedOutBid) {
    var timeoutCacheKey = cnvrHelper.getLookupKey(timedOutBid.auctionId, timedOutBid.adUnitCode, timedOutBid.bidder);
    cnvrHelper.timeoutCache[timeoutCacheKey] = {
      timeReceived: Date.now()
    };
  });
}

/**
 * Bid won occurs after auctionEnd so we need to send this separately. We also save an entry in the adIdLookup cache
 * so that if the render fails we can match up important data so we can send a valid RENDER FAILED event back.
 * @param args bidWon args
 */
function onBidWon(args) {
  var bidderCode = args.bidderCode;
  var adUnitCode = args.adUnitCode;
  var auctionId = args.auctionId;
  var timestamp = args.requestTimestamp ? args.requestTimestamp : Date.now();

  // Make sure we have all the data we need
  if (!bidderCode || !adUnitCode || !auctionId) {
    var errorReason = 'auction id';
    if (!bidderCode) {
      errorReason = 'bidder code';
    } else if (!adUnitCode) {
      errorReason = 'ad unit code';
    }
    throw new Error(CNVR_CONSTANTS.ERROR_MISSING_DATA_PREFIX + errorReason);
  }
  if (cnvrHelper.auctionIdTimestampCache[auctionId]) {
    timestamp = cnvrHelper.auctionIdTimestampCache[auctionId].timeReceived; // Don't delete, could be multiple winners/auction, allow cleanup to handle
  }

  var bidWonPayload = cnvrHelper.createPayload('bid_won', auctionId, timestamp);
  var adUnitPayload = cnvrHelper.createAdUnit();
  bidWonPayload.adUnits[adUnitCode] = adUnitPayload;
  var bidPayload = cnvrHelper.createBid(CNVR_CONSTANTS.WIN, args.timeToRespond);
  bidPayload.adSize = cnvrHelper.createAdSize(args.width, args.height);
  bidPayload.cpm = args.cpm;
  bidPayload.originalCpm = args.originalCpm;
  bidPayload.currency = args.currency;
  bidPayload.mediaType = args.mediaType;
  adUnitPayload.bids[bidderCode] = [bidPayload];
  if (!cnvrHelper.adIdLookup[args.adId]) {
    cnvrHelper.adIdLookup[args.adId] = {
      'bidderCode': bidderCode,
      'adUnitCode': adUnitCode,
      'auctionId': auctionId,
      'timeReceived': Date.now() // For cache cleaning
    };
  }

  sendData(bidWonPayload);
}

/**
 * RENDER FAILED occurs after AUCTION END and BID WON, the payload does not have all the data we need so we use
 * adIdLookup to pull data from a BID WON event to populate our payload
 * @param args = {
 *  reason: <value>
 *  message: <value>
 *  adId: <value> --optional
 *  bid: {object?} --optional: unsure what this looks like but guessing it is {bidder: <value>, params: {object}}
 *    }
 */
function onAdRenderFailed(args) {
  var adId = args.adId;
  // Make sure we have all the data we need, adId is optional so it's not guaranteed, without that we can't match it up
  // to our adIdLookup data.
  if (!adId || !cnvrHelper.adIdLookup[adId]) {
    var errorMsg = 'ad id';
    if (adId) {
      errorMsg = 'no lookup data for ad id';
    }
    // Either no adId to match against a bidWon event, or no data saved from a bidWon event that matches the adId
    throw new Error(CNVR_CONSTANTS.ERROR_MISSING_DATA_PREFIX + errorMsg);
  }
  var adIdObj = cnvrHelper.adIdLookup[adId];
  var adUnitCode = adIdObj['adUnitCode'];
  var bidderCode = adIdObj['bidderCode'];
  var auctionId = adIdObj['auctionId'];
  delete cnvrHelper.adIdLookup[adId]; // cleanup our cache

  if (!bidderCode || !adUnitCode || !auctionId) {
    var errorReason = 'auction id';
    if (!bidderCode) {
      errorReason = 'bidder code';
    } else if (!adUnitCode) {
      errorReason = 'ad unit code';
    }
    throw new Error(CNVR_CONSTANTS.ERROR_MISSING_DATA_PREFIX + errorReason);
  }
  var timestamp = Date.now();
  if (cnvrHelper.auctionIdTimestampCache[auctionId]) {
    timestamp = cnvrHelper.auctionIdTimestampCache[auctionId].timeReceived; // Don't delete, could be multiple winners/auction, allow cleanup to handle
  }

  var renderFailedPayload = cnvrHelper.createPayload('render_failed', auctionId, timestamp);
  var adUnitPayload = cnvrHelper.createAdUnit();
  adUnitPayload.bids[bidderCode] = [cnvrHelper.createBid(CNVR_CONSTANTS.RENDER_FAILED, 0)];
  adUnitPayload.bids[bidderCode][0].message = 'REASON: ' + args.reason + '. MESSAGE: ' + args.message;
  renderFailedPayload.adUnits[adUnitCode] = adUnitPayload;
  sendData(renderFailedPayload);
}

/**
 * AUCTION END contains bid and no bid info and all of the auction info we need. This sends the bulk of the information
 * about the auction back to the servers.  It will also check the timeoutCache for any matching bids, if any are found
 * then they will be removed from the cache and send back with this payload.
 * @param args AUCTION END payload, fairly large data structure, main objects are 'adUnits[]', 'bidderRequests[]',
 * 'noBids[]', 'bidsReceived[]'... 'winningBids[]' seems to be always blank.
 */
function onAuctionEnd(args) {
  var auctionId = args.auctionId;
  if (!auctionId) {
    throw new Error(CNVR_CONSTANTS.ERROR_MISSING_DATA_PREFIX + 'auction id');
  }
  var auctionTimestamp = args.timestamp ? args.timestamp : Date.now();
  cnvrHelper.auctionIdTimestampCache[auctionId] = {
    timeReceived: auctionTimestamp
  };
  var auctionEndPayload = cnvrHelper.createPayload('auction_end', auctionId, auctionTimestamp);
  // Get bid request information from adUnits
  if (!Array.isArray(args.adUnits)) {
    throw new Error(CNVR_CONSTANTS.ERROR_MISSING_DATA_PREFIX + 'no adUnits in event args');
  }

  // Write out any bid errors
  if (cnvrHelper.bidderErrorCache[auctionId]) {
    auctionEndPayload.bidderErrors = cnvrHelper.bidderErrorCache[auctionId].errors;
    delete cnvrHelper.bidderErrorCache[auctionId];
  }
  args.adUnits.forEach(function (adUnit) {
    var cnvrAdUnit = cnvrHelper.createAdUnit();
    // Initialize bids with bidderCode
    adUnit.bids.forEach(function (bid) {
      cnvrAdUnit.bids[bid.bidder] = []; // support multiple bids from a bidder for different sizes/media types //cnvrHelper.initializeBidDefaults();

      // Check for cached timeout responses
      var timeoutKey = cnvrHelper.getLookupKey(auctionId, adUnit.code, bid.bidder);
      if (cnvrHelper.timeoutCache[timeoutKey]) {
        cnvrAdUnit.bids[bid.bidder].push(cnvrHelper.createBid(CNVR_CONSTANTS.TIMEOUT, args.timeout));
        delete cnvrHelper.timeoutCache[timeoutKey];
      }
    });

    // Ad media types for the ad slot
    if (cnvrHelper.keyExistsAndIsObject(adUnit, 'mediaTypes')) {
      Object.entries(adUnit.mediaTypes).forEach(function (_ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, 1),
          mediaTypeName = _ref3[0];
        cnvrAdUnit.mediaTypes.push(mediaTypeName);
      });
    }

    // Ad sizes listed under the size key
    if (Array.isArray(adUnit.sizes) && adUnit.sizes.length >= 1) {
      adUnit.sizes.forEach(function (size) {
        if (!Array.isArray(size) || size.length !== 2) {
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)(CNVR_CONSTANTS.LOG_PREFIX + 'Unknown object while retrieving adUnit sizes.', adUnit);
          return; // skips to next item
        }

        cnvrAdUnit.sizes.push(cnvrHelper.createAdSize(size[0], size[1]));
      });
    }

    // If the Ad Slot is not unique then ad sizes and media types merge them together
    if (auctionEndPayload.adUnits[adUnit.code]) {
      // Merge ad sizes
      Array.prototype.push.apply(auctionEndPayload.adUnits[adUnit.code].sizes, cnvrAdUnit.sizes);
      // Merge mediaTypes
      Array.prototype.push.apply(auctionEndPayload.adUnits[adUnit.code].mediaTypes, cnvrAdUnit.mediaTypes);
    } else {
      auctionEndPayload.adUnits[adUnit.code] = cnvrAdUnit;
    }
  });
  if (Array.isArray(args.noBids)) {
    args.noBids.forEach(function (noBid) {
      var bidPayloadArray = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__["default"])(auctionEndPayload, 'adUnits.' + noBid.adUnitCode + '.bids.' + noBid.bidder);
      if (bidPayloadArray) {
        bidPayloadArray.push(cnvrHelper.createBid(CNVR_CONSTANTS.NO_BID, 0)); // no time to respond info for this, would have to capture event and save it there
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)(CNVR_CONSTANTS.LOG_PREFIX + 'Unable to locate bid object via adUnitCode/bidderCode in payload for noBid reply in END_AUCTION', Object.assign({}, noBid));
      }
    });
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(CNVR_CONSTANTS.LOG_PREFIX + 'onAuctionEnd(): noBids not defined in arguments.');
  }

  // Get bid data from bids sent
  if (Array.isArray(args.bidsReceived)) {
    args.bidsReceived.forEach(function (bid) {
      var bidPayloadArray = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__["default"])(auctionEndPayload, 'adUnits.' + bid.adUnitCode + '.bids.' + bid.bidderCode);
      if (bidPayloadArray) {
        var bidPayload = cnvrHelper.createBid(CNVR_CONSTANTS.BID, bid.timeToRespond);
        bidPayload.originalCpm = bid.originalCpm;
        bidPayload.cpm = bid.cpm;
        bidPayload.currency = bid.currency;
        bidPayload.mediaType = bid.mediaType;
        bidPayload.adSize = {
          'w': bid.width,
          'h': bid.height
        };
        bidPayloadArray.push(bidPayload);
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logMessage)(CNVR_CONSTANTS.LOG_PREFIX + 'Unable to locate bid object via adUnitCode/bidderCode in payload for bid reply in END_AUCTION', Object.assign({}, bid));
      }
    });
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(CNVR_CONSTANTS.LOG_PREFIX + 'onAuctionEnd(): bidsReceived not defined in arguments.');
  }
  // We need to remove any duplicate ad sizes from merging ad-slots or overlap in different media types and also
  // media-types from merged ad-slots in twin bids.
  Object.keys(auctionEndPayload.adUnits).forEach(function (adCode) {
    auctionEndPayload.adUnits[adCode].sizes = cnvrHelper.deduplicateArray(auctionEndPayload.adUnits[adCode].sizes);
    auctionEndPayload.adUnits[adCode].mediaTypes = cnvrHelper.deduplicateArray(auctionEndPayload.adUnits[adCode].mediaTypes);
  });
  sendData(auctionEndPayload);
}

// =============================================== START OF HELPERS ===================================================

/**
 * Helper to verify a key exists and is a data type of Object (not a function, or array)
 * @param parent The parent that we want to check the key for
 * @param key The key which we want to check
 * @returns {boolean} True if it's an object and exists, false otherwise (null, array, primitive, function)
 */
cnvrHelper.keyExistsAndIsObject = function (parent, key) {
  if (!parent.hasOwnProperty(key)) {
    return false;
  }
  return (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(parent[key]) === 'object' && !Array.isArray(parent[key]) && parent[key] !== null;
};

/**
 * De-duplicate an array that could contain primitives or objects/associative arrays.
 * A temporary array is used to store a string representation of each object that we look at.  If an object matches
 * one found in the temp array then it is ignored.
 * @param array An array
 * @returns {*} A de-duplicated array.
 */
cnvrHelper.deduplicateArray = function (array) {
  if (!array || !Array.isArray(array)) {
    return array;
  }
  var tmpArray = [];
  return array.filter(function (tmpObj) {
    if (tmpArray.indexOf(JSON.stringify(tmpObj)) < 0) {
      tmpArray.push(JSON.stringify(tmpObj));
      return tmpObj;
    }
  });
};

/**
 * Generic method to look at each key/value pair of a cache object and looks at the 'timeReceived' key, if more than
 * the max wait time has passed then just delete the key.
 * @param cacheObj one of our cache objects [adIdLookup or timeoutCache]
 * @param currTime the current timestamp at the start of the most recent timer execution.
 */
cnvrHelper.cleanCache = function (cacheObj, currTime) {
  Object.keys(cacheObj).forEach(function (key) {
    var timeInCache = currTime - cacheObj[key].timeReceived;
    if (timeInCache >= CNVR_CONSTANTS.MAX_MILLISECONDS_IN_CACHE) {
      delete cacheObj[key];
    }
  });
};

/**
 * Helper to create an object lookup key for our timeoutCache
 * @param auctionId id of the auction
 * @param adUnitCode ad unit code
 * @param bidderCode bidder code
 * @returns string concatenation of all the params into a string key for timeoutCache
 */
cnvrHelper.getLookupKey = function (auctionId, adUnitCode, bidderCode) {
  return auctionId + '-' + adUnitCode + '-' + bidderCode;
};

/**
 * Creates our root payload object that gets sent back to the server
 * @param payloadType string type of payload (AUCTION_END, BID_WON, RENDER_FAILED)
 * @param auctionId id for the auction
 * @param timestamp timestamp in milliseconds of auction start time.
 * @returns
 *  {{
 *    requestType: *,
 *    adUnits: {},
 *    auction: {
 *      auctionId: *,
 *      preBidVersion: *,
 *      sid: *}
 * }}  Basic structure of our object that we return to the server.
 */
cnvrHelper.createPayload = function (payloadType, auctionId, timestamp) {
  return {
    requestType: payloadType,
    globalSampleRate: initOptions.global_sample_rate,
    cnvrSampleRate: initOptions.cnvr_sample_rate,
    auction: {
      auctionId: auctionId,
      preBidVersion: (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_6__.getGlobal)().version,
      sid: initOptions.site_id,
      auctionTimestamp: timestamp
    },
    adUnits: {},
    bidderErrors: []
  };
};

/**
 * Helper to create an adSize object, if the value passed in is not an int then set it to -1
 * @param width in pixels (must be an int)
 * @param height in peixl (must be an int)
 * @returns {{w: *, h: *}} a fully valid adSize object
 */
cnvrHelper.createAdSize = function (width, height) {
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isInteger)(width)) {
    width = -1;
  }
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isInteger)(height)) {
    height = -1;
  }
  return {
    'w': width,
    'h': height
  };
};

/**
 * Helper to create the basic structure of our adUnit payload
 * @returns {{sizes: [], bids: {}}} Basic adUnit payload structure as follows
 */
cnvrHelper.createAdUnit = function () {
  return {
    sizes: [],
    mediaTypes: [],
    bids: {}
  };
};

/**
 * Helper to create a basic bid payload object.
 */
cnvrHelper.createBid = function (eventCode, timeToRespond) {
  return {
    'eventCodes': [eventCode],
    'timeToRespond': timeToRespond
  };
};

/**
 * Helper to get the sampling rates from an object and validate the result.
 * @param parentObj Parent object that has the sampling property
 * @param propNm Name of the sampling property
 * @param defaultSampleRate A default value to apply if there is a problem
 * @returns {number} returns a float number from 0 (always off) to 1 (always on)
 */
cnvrHelper.getSampleRate = function (parentObj, propNm, defaultSampleRate) {
  var sampleRate = defaultSampleRate;
  if (parentObj && typeof parentObj[propNm] !== 'undefined') {
    sampleRate = parseFloat(parentObj[propNm]);
    if (Number.isNaN(sampleRate) || sampleRate > 1) {
      sampleRate = defaultSampleRate;
    } else if (sampleRate < 0) {
      sampleRate = 0;
    }
  }
  return sampleRate;
};

/**
 * Helper to encapsulate logic for getting best known page url. Small but helpful in debugging/testing and if we ever want
 * to add more logic to this.
 *
 * From getRefererInfo(): page = the best candidate for the current page URL: `canonicalUrl`, falling back to `location`
 * @returns {*} Best guess at top URL based on logic from RefererInfo.
 */
cnvrHelper.getPageUrl = function () {
  return (0,_src_refererDetection_js__WEBPACK_IMPORTED_MODULE_7__.getRefererInfo)().page;
};

/**
 * Packages up an error that occured in analytics handling and sends it back to our servers for logging
 * @param eventType = original event that was fired
 * @param exception = {stack:"...",message:"..."}, exception that was triggered
 */
cnvrHelper.sendErrorData = function (eventType, exception) {
  if (!cnvrHelper.doSendErrorData) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(CNVR_CONSTANTS.LOG_PREFIX + 'Skipping sending error data due to config disabling error logging, error thrown = ' + exception);
    return;
  }
  var error = {
    event: eventType,
    siteId: initOptions.site_id,
    message: exception.message,
    stack: exception.stack,
    prebidVersion: "prebid_prebid_7.42.0-pre",
    // testing val sample: prebid_prebid_7.27.0-pre'
    userAgent: navigator.userAgent,
    url: cnvrHelper.getPageUrl()
  };

  // eslint-disable-next-line no-undef
  (0,_src_ajax_js__WEBPACK_IMPORTED_MODULE_8__.ajax)(ERROR_URL, function () {}, JSON.stringify(error), {
    contentType: 'text/plain'
  });
};

/**
 * Helper function to send data back to server.  Need to make sure we don't trigger a CORS preflight by not adding
 * extra header params.
 * @param payload our JSON payload from either AUCTION END, BID WIN, RENDER FAILED
 */
function sendData(payload) {
  (0,_src_ajax_js__WEBPACK_IMPORTED_MODULE_8__.ajax)(ANALYTICS_URL, function () {}, JSON.stringify(payload), {
    contentType: 'text/plain'
  });
}

// =============================== BOILERPLATE FOR PRE-BID ANALYTICS SETUP  ============================================
// save the base class function
conversantAnalytics.originEnableAnalytics = conversantAnalytics.enableAnalytics;
conversantAnalytics.originDisableAnalytics = conversantAnalytics.disableAnalytics;

// override enableAnalytics so we can get access to the config passed in from the page
conversantAnalytics.enableAnalytics = function (config) {
  if (!config || !config.options || !config.options.site_id) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(CNVR_CONSTANTS.LOG_PREFIX + 'siteId is required.');
    return;
  }
  cacheCleanupInterval = setInterval(function () {
    var currTime = Date.now();
    cnvrHelper.cleanCache(cnvrHelper.adIdLookup, currTime);
    cnvrHelper.cleanCache(cnvrHelper.timeoutCache, currTime);
    cnvrHelper.cleanCache(cnvrHelper.auctionIdTimestampCache, currTime);
    cnvrHelper.cleanCache(cnvrHelper.bidderErrorCache, currTime);
  }, CNVR_CONSTANTS.CACHE_CLEANUP_TIME_IN_MILLIS);
  Object.assign(initOptions, config.options);
  initOptions.global_sample_rate = cnvrHelper.getSampleRate(initOptions, 'sampling', 1);
  initOptions.cnvr_sample_rate = cnvrHelper.getSampleRate(initOptions, 'cnvr_sampling', CNVR_CONSTANTS.DEFAULT_SAMPLE_RATE);
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)(CNVR_CONSTANTS.LOG_PREFIX + 'Conversant sample rate set to ' + initOptions.cnvr_sample_rate);
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)(CNVR_CONSTANTS.LOG_PREFIX + 'Global sample rate set to ' + initOptions.global_sample_rate);
  // Math.random() pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
  cnvrHelper.doSample = Math.random() < initOptions.cnvr_sample_rate;
  if (initOptions.send_error_data !== undefined && initOptions.send_error_data !== null) {
    cnvrHelper.doSendErrorData = !!initOptions.send_error_data; // Forces data into boolean type
  }

  conversantAnalyticsEnabled = true;
  conversantAnalytics.originEnableAnalytics(config); // call the base class function
};

/**
 * Cleanup code for any timers and caches.
 */
conversantAnalytics.disableAnalytics = function () {
  if (!conversantAnalyticsEnabled) {
    return;
  }

  // Cleanup our caches and disable our timer
  clearInterval(cacheCleanupInterval);
  cnvrHelper.timeoutCache = {};
  cnvrHelper.adIdLookup = {};
  cnvrHelper.auctionIdTimestampCache = {};
  cnvrHelper.bidderErrorCache = {};
  conversantAnalyticsEnabled = false;
  conversantAnalytics.originDisableAnalytics();
};
_src_adapterManager_js__WEBPACK_IMPORTED_MODULE_9__["default"].registerAnalyticsAdapter({
  adapter: conversantAnalytics,
  code: ANALYTICS_CODE,
  gvlid: GVLID
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (conversantAnalytics);
window.pbjs.installedModules.push('conversantAnalyticsAdapter');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["analyticsAdapter","fpd"], function() { return __webpack_exec__("./modules/conversantAnalyticsAdapter.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["conversantBidAdapter"],{

/***/ "./modules/conversantBidAdapter.js":
/*!*****************************************!*\
  !*** ./modules/conversantBidAdapter.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports storage, spec */
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/adapters/bidderFactory.js */ "./src/adapters/bidderFactory.js");
/* harmony import */ var _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");





var GVLID = 24;
var BIDDER_CODE = 'conversant';
var storage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getStorageManager)({
  gvlid: GVLID,
  bidderCode: BIDDER_CODE
});
var URL = 'https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25';
var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  aliases: ['cnvr'],
  // short code
  supportedMediaTypes: [_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.BANNER, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_1__.VIDEO],
  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {BidRequest} bid - The bid params to validate.
   * @return {boolean} True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (!bid || !bid.params) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(BIDDER_CODE + ': Missing bid parameters');
      return false;
    }
    if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isStr)(bid.params.site_id)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(BIDDER_CODE + ': site_id must be specified as a string');
      return false;
    }
    if (isVideoRequest(bid)) {
      var mimes = bid.params.mimes || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'mediaTypes.video.mimes');
      if (!mimes) {
        // Give a warning but let it pass
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(BIDDER_CODE + ': mimes should be specified for videos');
      } else if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(mimes) || !mimes.every(function (s) {
        return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isStr)(s);
      })) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)(BIDDER_CODE + ': mimes must be an array of strings');
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
    var page = bidderRequest && bidderRequest.refererInfo ? bidderRequest.refererInfo.page : '';
    var siteId = '';
    var requestId = '';
    var pubcid = null;
    var pubcidName = '_pubcid';
    var bidurl = URL;
    var conversantImps = validBidRequests.map(function (bid) {
      var bidfloor = getBidFloor(bid);
      siteId = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBidIdParameter)('site_id', bid.params) || siteId;
      pubcidName = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBidIdParameter)('pubcid_name', bid.params) || pubcidName;
      requestId = bid.auctionId;
      var imp = {
        id: bid.bidId,
        secure: 1,
        bidfloor: bidfloor || 0,
        displaymanager: 'Prebid.js',
        displaymanagerver: "7.42.0-pre"
      };
      if (bid.ortb2Imp) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)(imp, bid.ortb2Imp);
      }
      copyOptProperty(bid.params.tag_id, imp, 'tagid');
      if (isVideoRequest(bid)) {
        var videoData = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'mediaTypes.video') || {};
        var format = convertSizes(videoData.playerSize || bid.sizes);
        var video = {};
        if (format && format[0]) {
          copyOptProperty(format[0].w, video, 'w');
          copyOptProperty(format[0].h, video, 'h');
        }
        copyOptProperty(bid.params.position || videoData.pos, video, 'pos');
        copyOptProperty(bid.params.mimes || videoData.mimes, video, 'mimes');
        copyOptProperty(bid.params.maxduration || videoData.maxduration, video, 'maxduration');
        copyOptProperty(bid.params.protocols || videoData.protocols, video, 'protocols');
        copyOptProperty(bid.params.api || videoData.api, video, 'api');
        imp.video = video;
      } else {
        var bannerData = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'mediaTypes.banner') || {};
        var _format = convertSizes(bannerData.sizes || bid.sizes);
        var banner = {
          format: _format
        };
        copyOptProperty(bid.params.position || bannerData.pos, banner, 'pos');
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

    // pass schain object if it is present
    var schain = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(validBidRequests, '0.schain');
    if (schain) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.dset)(payload, 'source.ext.schain', schain);
    }
    if (bidderRequest) {
      if (bidderRequest.timeout) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.dset)(payload, 'tmax', bidderRequest.timeout);
      }

      // Add GDPR flag and consent string
      if (bidderRequest.gdprConsent) {
        userExt.consent = bidderRequest.gdprConsent.consentString;
        if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.dset)(payload, 'regs.ext.gdpr', bidderRequest.gdprConsent.gdprApplies ? 1 : 0);
        }
      }
      if (bidderRequest.uspConsent) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.dset)(payload, 'regs.ext.us_privacy', bidderRequest.uspConsent);
      }
    }
    if (!pubcid) {
      pubcid = readStoredValue(pubcidName);
    }

    // Add common id if available
    if (pubcid) {
      userExt.fpc = pubcid;
    }

    // Add Eids if available
    var eids = collectEids(validBidRequests);
    if (eids.length > 0) {
      userExt.eids = eids;
    }

    // Only add the user object if it's not empty
    if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(userExt)) {
      payload.user = {
        ext: userExt
      };
    }
    var firstPartyData = bidderRequest.ortb2 || {};
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)(payload, firstPartyData);
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
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__._each)(bidRequest.data.imp, function (imp) {
        return requestMap[imp.id] = imp;
      });
    }
    if (serverResponse && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(serverResponse.seatbid)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__._each)(serverResponse.seatbid, function (bidList) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__._each)(bidList.bid, function (conversantBid) {
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
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.convertTypes)({
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
    var syncs = [];

    // Attaching GDPR Consent Params in UserSync url
    if (gdprConsent) {
      params.gdpr = gdprConsent.gdprApplies ? 1 : 0;
      params.gdpr_consent = encodeURIComponent(gdprConsent.consentString || '');
    }

    // CCPA
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
          var urlInfo = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(endpoint);
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)(urlInfo.search, params);
          if (Object.keys(urlInfo.search).length === 0) {
            delete urlInfo.search; // empty search object causes buildUrl to add a trailing ? to the url
          }

          return {
            type: entry.type,
            url: (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.buildUrl)(urlInfo)
          };
        }).reduce(function (x, y) {
          return x.concat(y);
        }, []);
      }).reduce(function (x, y) {
        return x.concat(y);
      }, []);
      syncs.push.apply(syncs, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(pixels));
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
      format = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__._map)(bidSizes, function (d) {
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
  return bid.mediaType === 'video' || !!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(bid, 'mediaTypes.video');
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
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(request.userIdAsEids) && request.userIdAsEids.length > 0) {
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
    }

    // deserialize JSON if needed
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isStr)(storedValue) && storedValue.charAt(0) === '{') {
      storedValue = JSON.parse(storedValue);
    }
  } catch (e) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(e);
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
  var floor = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBidIdParameter)('bidfloor', bid.params);
  if (!floor && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isFn)(bid.getFloor)) {
    var floorObj = bid.getFloor({
      currency: 'USD',
      mediaType: '*',
      size: '*'
    });
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(floorObj) && !isNaN(floorObj.floor) && floorObj.currency === 'USD') {
      floor = floorObj.floor;
    }
  }
  return floor;
}
(0,_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_6__.registerBidder)(spec);
window.pbjs.installedModules.push('conversantBidAdapter');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/conversantBidAdapter.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["dfpAdServerVideo"],{

/***/ "./modules/dfpAdServerVideo.js":
/*!*************************************!*\
  !*** ./modules/dfpAdServerVideo.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports adpodUtils, dep, buildDfpVideoUrl, notifyTranslationModule, buildAdpodVideoUrl */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _src_adServerManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/adServerManager.js */ "./src/adServerManager.js");
/* harmony import */ var _src_targeting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/targeting.js */ "./src/targeting.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_auctionManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/auctionManager.js */ "./src/auctionManager.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_events_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/events.js */ "./src/events.js");
/* harmony import */ var _src_constants_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/constants.json */ "./src/constants.json");
/* harmony import */ var _src_adserver_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/adserver.js */ "./src/adserver.js");
/* harmony import */ var _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/refererDetection.js */ "./src/refererDetection.js");

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
var dep = {
  ri: _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_0__.getRefererInfo
};

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
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl");
    return;
  }
  var adUnit = options.adUnit;
  var bid = options.bid || _src_targeting_js__WEBPACK_IMPORTED_MODULE_2__.targeting.getWinningBids(adUnit.code)[0];
  var urlComponents = {};
  if (options.url) {
    // when both `url` and `params` are given, parsed url will be overwriten
    // with any matching param components
    urlComponents = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(options.url, {
      noDecodeWholeURL: true
    });
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(options.params)) {
      return buildUrlFromAdserverUrlComponents(urlComponents, bid, options);
    }
  }
  var derivedParams = {
    correlator: Date.now(),
    sz: (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseSizesInput)((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit, 'mediaTypes.video.playerSize')).join('|'),
    url: encodeURIComponent(location.href)
  };
  var urlSearchComponent = urlComponents.search;
  var urlSzParam = urlSearchComponent && urlSearchComponent.sz;
  if (urlSzParam) {
    derivedParams.sz = urlSzParam + '|' + derivedParams.sz;
  }
  var encodedCustomParams = getCustParams(bid, options, urlSearchComponent && urlSearchComponent.cust_params);
  var queryParams = Object.assign({}, defaultParamConstants, urlComponents.search, derivedParams, options.params, {
    cust_params: encodedCustomParams
  });
  var descriptionUrl = getDescriptionUrl(bid, options, 'params');
  if (descriptionUrl) {
    queryParams.description_url = descriptionUrl;
  }
  var gdprConsent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_4__.gdprDataHandler.getConsentData();
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
  var uspConsent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_4__.uspDataHandler.getConsentData();
  if (uspConsent) {
    queryParams.us_privacy = uspConsent;
  }
  var gppConsent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_4__.gppDataHandler.getConsentData();
  if (gppConsent) {
    // TODO - need to know what to set here for queryParams...
  }
  if (!queryParams.ppid) {
    var ppid = (0,_src_adserver_js__WEBPACK_IMPORTED_MODULE_5__.getPPID)();
    if (ppid != null) {
      queryParams.ppid = ppid;
    }
  }
  return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildUrl)(Object.assign({
    protocol: 'https',
    host: 'securepubads.g.doubleclick.net',
    pathname: '/gampad/ads'
  }, urlComponents, {
    search: queryParams
  }));
}
function notifyTranslationModule(fn) {
  fn.call(this, 'dfp');
}
if (_src_config_js__WEBPACK_IMPORTED_MODULE_6__.config.getConfig('brandCategoryTranslation.translationFile')) {
  (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_7__.getHook)('registerAdserver').before(notifyTranslationModule);
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
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");
    return;
  }
  var derivedParams = {
    correlator: Date.now(),
    sz: getSizeForAdUnit(code),
    url: encodeURIComponent(location.href)
  };
  function getSizeForAdUnit(code) {
    var adUnit = _src_auctionManager_js__WEBPACK_IMPORTED_MODULE_8__.auctionManager.getAdUnits().filter(function (adUnit) {
      return adUnit.code === code;
    });
    var sizes = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(adUnit[0], 'mediaTypes.video.playerSize');
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseSizesInput)(sizes).join('|');
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
    var initialValue = (_initialValue = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_initialValue, adpodUtils.TARGETING_KEY_PB_CAT_DUR, undefined), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_initialValue, adpodUtils.TARGETING_KEY_CACHE_ID, undefined), _initialValue);
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
    var encodedCustomParams = encodeURIComponent((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.formatQS)(customParams));
    var queryParams = Object.assign({}, defaultParamConstants, derivedParams, params, {
      cust_params: encodedCustomParams
    });
    var gdprConsent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_4__.gdprDataHandler.getConsentData();
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
    var uspConsent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_4__.uspDataHandler.getConsentData();
    if (uspConsent) {
      queryParams.us_privacy = uspConsent;
    }
    var masterTag = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildUrl)({
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
  components.search.cust_params = getCustParams(bid, options, components.search.cust_params);
  return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildUrl)(components);
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
  return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(components, "".concat(prop, ".description_url")) || dep.ri().page;
}

/**
 * Returns the encoded `cust_params` from the bid.adserverTargeting and adds the `hb_uuid`, and `hb_cache_id`. Optionally the options.params.cust_params
 * @param {AdapterBidResponse} bid
 * @param {Object} options this is the options passed in from the `buildDfpVideoUrl` function
 * @return {Object} Encoded key value pairs for cust_params
 */
function getCustParams(bid, options, urlCustParams) {
  var adserverTargeting = bid && bid.adserverTargeting || {};
  var allTargetingData = {};
  var adUnit = options && options.adUnit;
  if (adUnit) {
    var allTargeting = _src_targeting_js__WEBPACK_IMPORTED_MODULE_2__.targeting.getAllTargeting(adUnit.code);
    allTargetingData = allTargeting ? allTargeting[adUnit.code] : {};
  }
  var prebidTargetingSet = Object.assign({},
  // Why are we adding standard keys here ? Refer https://github.com/prebid/Prebid.js/issues/3664
  {
    hb_uuid: bid && bid.videoCacheKey
  },
  // hb_cache_id became optional in prebid 5.0 after 4.x enabled the concept of optional keys. Discussion led to reversing the prior expectation of deprecating hb_uuid
  {
    hb_cache_id: bid && bid.videoCacheKey
  }, allTargetingData, adserverTargeting);

  // TODO: WTF is this? just firing random events, guessing at the argument, hoping noone notices?
  _src_events_js__WEBPACK_IMPORTED_MODULE_10__.emit(_src_constants_json__WEBPACK_IMPORTED_MODULE_11__.EVENTS.SET_TARGETING, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, adUnit.code, prebidTargetingSet));

  // merge the prebid + publisher targeting sets
  var publisherTargetingSet = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options, 'params.cust_params');
  var targetingSet = Object.assign({}, prebidTargetingSet, publisherTargetingSet);
  var encodedParams = encodeURIComponent((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.formatQS)(targetingSet));
  if (urlCustParams) {
    encodedParams = urlCustParams + '%26' + encodedParams;
  }
  return encodedParams;
}
(0,_src_adServerManager_js__WEBPACK_IMPORTED_MODULE_12__.registerVideoSupport)('dfp', {
  buildVideoUrl: buildDfpVideoUrl,
  buildAdpodVideoUrl: buildAdpodVideoUrl,
  getAdpodTargeting: function getAdpodTargeting(args) {
    return adpodUtils.getTargeting(args);
  }
});
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_7__.submodule)('adpod', adpodUtils);
window.pbjs.installedModules.push('dfpAdServerVideo');

/***/ }),

/***/ "./src/adServerManager.js":
/*!********************************!*\
  !*** ./src/adServerManager.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerVideoSupport": function() { return /* binding */ registerVideoSupport; }
/* harmony export */ });
/* harmony import */ var _prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prebidGlobal.js */ "./src/prebidGlobal.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


var prebid = (0,_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_0__.getGlobal)();

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
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.logWarn)("Attempting to add an already registered function property ".concat(key, " for AdServer ").concat(name, "."));
      return;
    }
    prebid.adServers[name][key] = videoSupport[key];
  });
}

/***/ }),

/***/ "./src/adserver.js":
/*!*************************!*\
  !*** ./src/adserver.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPPID": function() { return /* binding */ getPPID; }
/* harmony export */ });
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");


/**
 * return the GAM PPID, if available (eid for the userID configured with `userSync.ppidSource`)
 */
var getPPID = (0,_hook_js__WEBPACK_IMPORTED_MODULE_0__.hook)('sync', function () {
  return undefined;
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/dfpAdServerVideo.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["enrichmentFpdModule"],{

/***/ "./modules/enrichmentFpdModule.js":
/*!****************************************!*\
  !*** ./modules/enrichmentFpdModule.js ***!
  \****************************************/
/***/ (function() {

// Logic from this module was moved into core since approx. 7.27
// TODO: remove this in v8
window.pbjs.installedModules.push('enrichmentFpdModule');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/enrichmentFpdModule.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["fpdModule"],{

/***/ "./modules/fpdModule/index.js":
/*!************************************!*\
  !*** ./modules/fpdModule/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports registerSubmodules, reset, processFpd, startAuctionHook */
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/config.js */ "./src/config.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/promise.js */ "./src/utils/promise.js");
/* harmony import */ var _src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/**
 * This module sets default values and validates ortb2 first part data
 * @module modules/firstPartyData
 */





var submodules = [];
function registerSubmodules(submodule) {
  submodules.push(submodule);
}
function reset() {
  submodules.length = 0;
}
function processFpd() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$global = _ref.global,
    global = _ref$global === void 0 ? {} : _ref$global,
    _ref$bidder = _ref.bidder,
    bidder = _ref$bidder === void 0 ? {} : _ref$bidder;
  var modConf = _src_config_js__WEBPACK_IMPORTED_MODULE_0__.config.getConfig('firstPartyData') || {};
  var result = _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.GreedyPromise.resolve({
    global: global,
    bidder: bidder
  });
  submodules.sort(function (a, b) {
    return (a.queue || 1) - (b.queue || 1);
  }).forEach(function (submodule) {
    result = result.then(function (_ref2) {
      var global = _ref2.global,
        bidder = _ref2.bidder;
      return _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_1__.GreedyPromise.resolve(submodule.processFpd(modConf, {
        global: global,
        bidder: bidder
      })).catch(function (err) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Error in FPD module ".concat(submodule.name), err);
        return {};
      }).then(function (result) {
        return {
          global: result.global || global,
          bidder: result.bidder || bidder
        };
      });
    });
  });
  return result;
}
var startAuctionHook = (0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_3__.timedAuctionHook)('fpd', function startAuctionHook(fn, req) {
  var _this = this;
  processFpd(req.ortb2Fragments).then(function (ortb2Fragments) {
    Object.assign(req.ortb2Fragments, ortb2Fragments);
    fn.call(_this, req);
  });
});
function setupHook() {
  (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_4__.getHook)('startAuction').before(startAuctionHook, 10);
}
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_4__.module)('firstPartyData', registerSubmodules);

// Runs setupHook on initial load
setupHook();
window.pbjs.installedModules.push('fpdModule');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/fpdModule/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["gdprEnforcement"],{

/***/ "./modules/gdprEnforcement.js":
/*!************************************!*\
  !*** ./modules/gdprEnforcement.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports STRICT_STORAGE_ENFORCEMENT, purpose1Rule, purpose2Rule, purpose7Rule, enforcementRules, internal, getGvlid, shouldEnforce, validateRules, deviceAccessHook, userSyncHook, userIdHook, makeBidRequestsHook, enableAnalyticsHook, setEnforcementConfig, uninstall */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/adapters/bidderFactory.js */ "./src/adapters/bidderFactory.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _src_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/events.js */ "./src/events.js");
/* harmony import */ var _src_constants_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/constants.json */ "./src/constants.json");
/* harmony import */ var _src_consentHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/consentHandler.js */ "./src/consentHandler.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * This module gives publishers extra set of features to enforce individual purposes of TCF v2
 */











var STRICT_STORAGE_ENFORCEMENT = 'strictStorageEnforcement';
var TCF2 = {
  'purpose1': {
    id: 1,
    name: 'storage'
  },
  'purpose2': {
    id: 2,
    name: 'basicAds'
  },
  'purpose7': {
    id: 7,
    name: 'measurement'
  }
};

/*
  These rules would be used if `consentManagement.gdpr.rules` is undefined by the publisher.
*/
var DEFAULT_RULES = [{
  purpose: 'storage',
  enforcePurpose: true,
  enforceVendor: true,
  vendorExceptions: []
}, {
  purpose: 'basicAds',
  enforcePurpose: true,
  enforceVendor: true,
  vendorExceptions: []
}];
var purpose1Rule;
var purpose2Rule;
var purpose7Rule;
var enforcementRules;
var storageBlocked = [];
var biddersBlocked = [];
var analyticsBlocked = [];
var hooksAdded = false;
var strictStorageEnforcement = false;

// Helps in stubbing these functions in unit tests.
var internal = {
  getGvlidForBidAdapter: getGvlidForBidAdapter,
  getGvlidForUserIdModule: getGvlidForUserIdModule,
  getGvlidForAnalyticsAdapter: getGvlidForAnalyticsAdapter
};

/**
 * Returns GVL ID for a Bid adapter / an USERID submodule / an Analytics adapter.
 * If modules of different types have the same moduleCode: For example, 'appnexus' is the code for both Bid adapter and Analytics adapter,
 * then, we assume that their GVL IDs are same. This function first checks if GVL ID is defined for a Bid adapter, if not found, tries to find User ID
 * submodule's GVL ID, if not found, tries to find Analytics adapter's GVL ID. In this process, as soon as it finds a GVL ID, it returns it
 * without going to the next check.
 * @param {{string|Object}} - module
 * @return {number} - GVL ID
 */
function getGvlid(module) {
  var gvlid = null;
  if (module) {
    // Check user defined GVL Mapping in pbjs.setConfig()
    var gvlMapping = _src_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('gvlMapping');

    // For USER ID Module, we pass the submodule object itself as the "module" parameter, this check is required to grab the module code
    var moduleCode = typeof module === 'string' ? module : module.name;

    // Return GVL ID from user defined gvlMapping
    if (gvlMapping && gvlMapping[moduleCode]) {
      gvlid = gvlMapping[moduleCode];
      return gvlid;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    gvlid = internal.getGvlidForBidAdapter(moduleCode) || internal.getGvlidForUserIdModule(module) || internal.getGvlidForAnalyticsAdapter.apply(internal, [moduleCode].concat(args));
  }
  return gvlid;
}

/**
 * Returns GVL ID for a bid adapter. If the adapter does not have an associated GVL ID, it returns 'null'.
 * @param  {string=} bidderCode - The 'code' property of the Bidder spec.
 * @return {number} GVL ID
 */
function getGvlidForBidAdapter(bidderCode) {
  var gvlid = null;
  bidderCode = bidderCode || _src_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getCurrentBidder();
  if (bidderCode) {
    var bidder = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].getBidAdapter(bidderCode);
    if (bidder && bidder.getSpec) {
      gvlid = bidder.getSpec().gvlid;
    }
  }
  return gvlid;
}

/**
 * Returns GVL ID for an userId submodule. If an userId submodules does not have an associated GVL ID, it returns 'null'.
 * @param {Object} userIdModule
 * @return {number} GVL ID
 */
function getGvlidForUserIdModule(userIdModule) {
  return (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(userIdModule) === 'object' ? userIdModule.gvlid : null;
}

/**
 * Returns GVL ID for an analytics adapter. If an analytics adapter does not have an associated GVL ID, it returns 'null'.
 * @param {string} code - 'provider' property on the analytics adapter config
 * @param {{}} config - analytics configuration object
 * @return {number} GVL ID
 */
function getGvlidForAnalyticsAdapter(code, config) {
  var _adapter$adapter;
  var adapter = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].getAnalyticsAdapter(code);
  return (adapter === null || adapter === void 0 ? void 0 : adapter.gvlid) || function (gvlid) {
    if (typeof gvlid !== 'function') return gvlid;
    try {
      return gvlid.call(adapter.adapter, config);
    } catch (e) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logError)("Error invoking ".concat(code, " adapter.gvlid()"), e);
    }
  }(adapter === null || adapter === void 0 ? void 0 : (_adapter$adapter = adapter.adapter) === null || _adapter$adapter === void 0 ? void 0 : _adapter$adapter.gvlid);
}
function shouldEnforce(consentData, purpose, name) {
  if (consentData == null && _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gdprDataHandler.enabled) {
    // there is no consent data, but the GDPR module has been installed and configured
    // NOTE: this check is not foolproof, as when Prebid first loads, enforcement hooks have not been attached yet
    // This piece of code would not run at all, and `gdprDataHandler.enabled` would be false, until the first
    // `setConfig({consentManagement})`
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("Attempting operation that requires purpose ".concat(purpose, " consent while consent data is not available").concat(name ? " (module: ".concat(name, ")") : '', ". Assuming no consent was given."));
    return true;
  }
  return consentData && consentData.gdprApplies;
}

/**
 * This function takes in a rule and consentData and validates against the consentData provided. Depending on what it returns,
 * the caller may decide to suppress a TCF-sensitive activity.
 * @param {Object} rule - enforcement rules set in config
 * @param {Object} consentData - gdpr consent data
 * @param {string=} currentModule - Bidder code of the current module
 * @param {number=} gvlId - GVL ID for the module
 * @returns {boolean}
 */
function validateRules(rule, consentData, currentModule, gvlId) {
  var purposeId = TCF2[Object.keys(TCF2).filter(function (purposeName) {
    return TCF2[purposeName].name === rule.purpose;
  })[0]].id;

  // return 'true' if vendor present in 'vendorExceptions'
  if ((rule.vendorExceptions || []).includes(currentModule)) {
    return true;
  }
  var vendorConsentRequred = !(gvlId === _src_consentHandler_js__WEBPACK_IMPORTED_MODULE_5__.VENDORLESS_GVLID || (rule.softVendorExceptions || []).includes(currentModule));

  // get data from the consent string
  var purposeConsent = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(consentData, "vendorData.purpose.consents.".concat(purposeId));
  var vendorConsent = vendorConsentRequred ? (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(consentData, "vendorData.vendor.consents.".concat(gvlId)) : true;
  var liTransparency = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(consentData, "vendorData.purpose.legitimateInterests.".concat(purposeId));

  /*
    Since vendor exceptions have already been handled, the purpose as a whole is allowed if it's not being enforced
    or the user has consented. Similar with vendors.
  */
  var purposeAllowed = rule.enforcePurpose === false || purposeConsent === true;
  var vendorAllowed = rule.enforceVendor === false || vendorConsent === true;

  /*
    Few if any vendors should be declaring Legitimate Interest for Device Access (Purpose 1), but some are claiming
    LI for Basic Ads (Purpose 2). Prebid.js can't check to see who's declaring what legal basis, so if LI has been
    established for Purpose 2, allow the auction to take place and let the server sort out the legal basis calculation.
  */
  if (purposeId === 2) {
    return purposeAllowed && vendorAllowed || liTransparency === true;
  }
  return purposeAllowed && vendorAllowed;
}

/**
 * This hook checks whether module has permission to access device or not. Device access include cookie and local storage
 * @param {Function} fn reference to original function (used by hook logic)
 * @param {Number=} gvlid gvlid of the module
 * @param {string=} moduleName name of the module
 * @param result
 */
function deviceAccessHook(fn, gvlid, moduleName, result) {
  var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
    _ref$validate = _ref.validate,
    validate = _ref$validate === void 0 ? validateRules : _ref$validate;
  result = Object.assign({}, {
    hasEnforcementHook: true
  });
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.hasDeviceAccess)()) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)('Device access is disabled by Publisher');
    result.valid = false;
  } else if (gvlid === _src_consentHandler_js__WEBPACK_IMPORTED_MODULE_5__.VENDORLESS_GVLID && !strictStorageEnforcement) {
    // for vendorless (core) storage, do not enforce rules unless strictStorageEnforcement is set
    result.valid = true;
  } else {
    var consentData = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gdprDataHandler.getConsentData();
    if (shouldEnforce(consentData, 1, moduleName)) {
      var curBidder = _src_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getCurrentBidder();
      // Bidders have a copy of storage object with bidder code binded. Aliases will also pass the same bidder code when invoking storage functions and hence if alias tries to access device we will try to grab the gvl id for alias instead of original bidder
      if (curBidder && curBidder !== moduleName && _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].aliasRegistry[curBidder] === moduleName) {
        gvlid = getGvlid(curBidder);
      } else {
        gvlid = getGvlid(moduleName) || gvlid;
      }
      var curModule = moduleName || curBidder;
      var isAllowed = validate(purpose1Rule, consentData, curModule, gvlid);
      if (isAllowed) {
        result.valid = true;
      } else {
        curModule && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("TCF2 denied device access for ".concat(curModule));
        result.valid = false;
        storageBlocked.push(curModule);
      }
    } else {
      result.valid = true;
    }
  }
  fn.call(this, gvlid, moduleName, result);
}

/**
 * This hook checks if a bidder has consent for user sync or not
 * @param {Function} fn reference to original function (used by hook logic)
 * @param  {...any} args args
 */
function userSyncHook(fn) {
  var consentData = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gdprDataHandler.getConsentData();
  var curBidder = _src_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getCurrentBidder();
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (shouldEnforce(consentData, 1, curBidder)) {
    var gvlid = getGvlid(curBidder);
    var isAllowed = validateRules(purpose1Rule, consentData, curBidder, gvlid);
    if (isAllowed) {
      fn.call.apply(fn, [this].concat(args));
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("User sync not allowed for ".concat(curBidder));
      storageBlocked.push(curBidder);
    }
  } else {
    fn.call.apply(fn, [this].concat(args));
  }
}

/**
 * This hook checks if user id module is given consent or not
 * @param {Function} fn reference to original function (used by hook logic)
 * @param  {Submodule[]} submodules Array of user id submodules
 * @param {Object} consentData GDPR consent data
 */
function userIdHook(fn, submodules, consentData) {
  if (shouldEnforce(consentData, 1, 'User ID')) {
    var userIdModules = submodules.map(function (submodule) {
      var gvlid = getGvlid(submodule.submodule);
      var moduleName = submodule.submodule.name;
      var isAllowed = validateRules(purpose1Rule, consentData, moduleName, gvlid);
      if (isAllowed) {
        return submodule;
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("User denied permission to fetch user id for ".concat(moduleName, " User id module"));
        storageBlocked.push(moduleName);
      }
      return undefined;
    }).filter(function (module) {
      return module;
    });
    fn.call(this, userIdModules, _objectSpread(_objectSpread({}, consentData), {}, {
      hasValidated: true
    }));
  } else {
    fn.call(this, submodules, consentData);
  }
}

/**
 * Checks if bidders are allowed in the auction.
 * Enforces "purpose 2 (Basic Ads)" of TCF v2.0 spec
 * @param {Function} fn - Function reference to the original function.
 * @param {Array<adUnits>} adUnits
 */
function makeBidRequestsHook(fn, adUnits) {
  var consentData = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gdprDataHandler.getConsentData();
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }
  if (shouldEnforce(consentData, 2)) {
    adUnits.forEach(function (adUnit) {
      adUnit.bids = adUnit.bids.filter(function (bid) {
        var currBidder = bid.bidder;
        var gvlId = getGvlid(currBidder);
        if ((0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.includes)(biddersBlocked, currBidder)) return false;
        var isAllowed = !!validateRules(purpose2Rule, consentData, currBidder, gvlId);
        if (!isAllowed) {
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("TCF2 blocked auction for ".concat(currBidder));
          biddersBlocked.push(currBidder);
        }
        return isAllowed;
      });
    });
    fn.call.apply(fn, [this, adUnits].concat(args));
  } else {
    fn.call.apply(fn, [this, adUnits].concat(args));
  }
}

/**
 * Checks if Analytics adapters are allowed to send data to their servers for furhter processing.
 * Enforces "purpose 7 (Measurement)" of TCF v2.0 spec
 * @param {Function} fn - Function reference to the original function.
 * @param {Array<AnalyticsAdapterConfig>} config - Configuration object passed to pbjs.enableAnalytics()
 */
function enableAnalyticsHook(fn, config) {
  var consentData = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.gdprDataHandler.getConsentData();
  if (shouldEnforce(consentData, 7, 'Analytics')) {
    if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(config)) {
      config = [config];
    }
    config = config.filter(function (conf) {
      var analyticsAdapterCode = conf.provider;
      var gvlid = getGvlid(analyticsAdapterCode, conf);
      var isAllowed = !!validateRules(purpose7Rule, consentData, analyticsAdapterCode, gvlid);
      if (!isAllowed) {
        analyticsBlocked.push(analyticsAdapterCode);
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)("TCF2 blocked analytics adapter ".concat(conf.provider));
      }
      return isAllowed;
    });
    fn.call(this, config);
  } else {
    fn.call(this, config);
  }
}

/**
 * Compiles the TCF2.0 enforcement results into an object, which is emitted as an event payload to "tcf2Enforcement" event.
 */
function emitTCF2FinalResults() {
  // remove null and duplicate values
  var formatArray = function formatArray(arr) {
    return arr.filter(function (i, k) {
      return i !== null && arr.indexOf(i) === k;
    });
  };
  var tcf2FinalResults = {
    storageBlocked: formatArray(storageBlocked),
    biddersBlocked: formatArray(biddersBlocked),
    analyticsBlocked: formatArray(analyticsBlocked)
  };
  _src_events_js__WEBPACK_IMPORTED_MODULE_8__.emit(_src_constants_json__WEBPACK_IMPORTED_MODULE_9__.EVENTS.TCF2_ENFORCEMENT, tcf2FinalResults);
}
_src_events_js__WEBPACK_IMPORTED_MODULE_8__.on(_src_constants_json__WEBPACK_IMPORTED_MODULE_9__.EVENTS.AUCTION_END, emitTCF2FinalResults);

/*
  Set of callback functions used to detect presence of a TCF rule, passed as the second argument to find().
*/
var hasPurpose1 = function hasPurpose1(rule) {
  return rule.purpose === TCF2.purpose1.name;
};
var hasPurpose2 = function hasPurpose2(rule) {
  return rule.purpose === TCF2.purpose2.name;
};
var hasPurpose7 = function hasPurpose7(rule) {
  return rule.purpose === TCF2.purpose7.name;
};

/**
 * A configuration function that initializes some module variables, as well as adds hooks
 * @param {Object} config - GDPR enforcement config object
 */
function setEnforcementConfig(config) {
  var rules = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config, 'gdpr.rules');
  if (!rules) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_4__.logWarn)('TCF2: enforcing P1 and P2 by default');
    enforcementRules = DEFAULT_RULES;
  } else {
    enforcementRules = rules;
  }
  strictStorageEnforcement = !!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config, STRICT_STORAGE_ENFORCEMENT);
  purpose1Rule = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.find)(enforcementRules, hasPurpose1);
  purpose2Rule = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.find)(enforcementRules, hasPurpose2);
  purpose7Rule = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.find)(enforcementRules, hasPurpose7);
  if (!purpose1Rule) {
    purpose1Rule = DEFAULT_RULES[0];
  }
  if (!purpose2Rule) {
    purpose2Rule = DEFAULT_RULES[1];
  }
  if (!hooksAdded) {
    if (purpose1Rule) {
      hooksAdded = true;
      _src_storageManager_js__WEBPACK_IMPORTED_MODULE_10__.validateStorageEnforcement.before(deviceAccessHook, 49);
      _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__.registerSyncInner.before(userSyncHook, 48);
      // Using getHook as user id and gdprEnforcement are both optional modules. Using import will auto include the file in build
      (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_12__.getHook)('validateGdprEnforcement').before(userIdHook, 47);
    }
    if (purpose2Rule) {
      (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_12__.getHook)('makeBidRequests').before(makeBidRequestsHook);
    }
    if (purpose7Rule) {
      (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_12__.getHook)('enableAnalyticsCb').before(enableAnalyticsHook);
    }
  }
}
function uninstall() {
  [_src_storageManager_js__WEBPACK_IMPORTED_MODULE_10__.validateStorageEnforcement.getHooks({
    hook: deviceAccessHook
  }), _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__.registerSyncInner.getHooks({
    hook: userSyncHook
  }), (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_12__.getHook)('validateGdprEnforcement').getHooks({
    hook: userIdHook
  }), (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_12__.getHook)('makeBidRequests').getHooks({
    hook: makeBidRequestsHook
  }), (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_12__.getHook)('enableAnalyticsCb').getHooks({
    hook: enableAnalyticsHook
  })].forEach(function (hook) {
    return hook.remove();
  });
  hooksAdded = false;
}
_src_config_js__WEBPACK_IMPORTED_MODULE_1__.config.getConfig('consentManagement', function (config) {
  return setEnforcementConfig(config.consentManagement);
});
window.pbjs.installedModules.push('gdprEnforcement');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/gdprEnforcement.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["gptPreAuction"],{

/***/ "./modules/gptPreAuction.js":
/*!**********************************!*\
  !*** ./modules/gptPreAuction.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports _currentConfig, appendGptSlots, appendPbAdSlot, makeBidRequestsHook */
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
var _this = undefined;




var MODULE_NAME = 'GPT Pre-Auction';
var _currentConfig = {};
var hooksAdded = false;
var appendGptSlots = function appendGptSlots(adUnits) {
  var _currentConfig2 = _currentConfig,
    customGptSlotMatching = _currentConfig2.customGptSlotMatching;
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isGptPubadsDefined)()) {
    return;
  }
  var adUnitMap = adUnits.reduce(function (acc, adUnit) {
    acc[adUnit.code] = adUnit;
    return acc;
  }, {});
  window.googletag.pubads().getSlots().forEach(function (slot) {
    var matchingAdUnitCode = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_1__.find)(Object.keys(adUnitMap), customGptSlotMatching ? customGptSlotMatching(slot) : (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isAdUnitCodeMatchingSlot)(slot));
    if (matchingAdUnitCode) {
      var adUnit = adUnitMap[matchingAdUnitCode];
      adUnit.ortb2Imp = adUnit.ortb2Imp || {};
      adUnit.ortb2Imp.ext = adUnit.ortb2Imp.ext || {};
      adUnit.ortb2Imp.ext.data = adUnit.ortb2Imp.ext.data || {};
      var context = adUnit.ortb2Imp.ext.data;
      context.adserver = context.adserver || {};
      context.adserver.name = 'gam';
      context.adserver.adslot = sanitizeSlotPath(slot.getAdUnitPath());
    }
  });
};
var sanitizeSlotPath = function sanitizeSlotPath(path) {
  var gptConfig = _src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('gptPreAuction') || {};
  if (gptConfig.mcmEnabled) {
    return path.replace(/(^\/\d*),\d*\//, '$1/');
  }
  return path;
};
var defaultPreAuction = function defaultPreAuction(adUnit, adServerAdSlot) {
  var context = adUnit.ortb2Imp.ext.data;

  // use pbadslot if supplied
  if (context.pbadslot) {
    return context.pbadslot;
  }

  // confirm that GPT is set up
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isGptPubadsDefined)()) {
    return;
  }

  // find all GPT slots with this name
  var gptSlots = window.googletag.pubads().getSlots().filter(function (slot) {
    return slot.getAdUnitPath() === adServerAdSlot;
  });
  if (gptSlots.length === 0) {
    return; // should never happen
  }

  if (gptSlots.length === 1) {
    return adServerAdSlot;
  }

  // else the adunit code must be div id. append it.
  return "".concat(adServerAdSlot, "#").concat(adUnit.code);
};
var appendPbAdSlot = function appendPbAdSlot(adUnit) {
  var context = adUnit.ortb2Imp.ext.data;
  var _currentConfig3 = _currentConfig,
    customPbAdSlot = _currentConfig3.customPbAdSlot;

  // use context.pbAdSlot if set (if someone set it already, it will take precedence over others)
  if (context.pbadslot) {
    return;
  }
  if (customPbAdSlot) {
    context.pbadslot = customPbAdSlot(adUnit.code, (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, 'adserver.adslot'));
    return;
  }

  // use data attribute 'data-adslotid' if set
  try {
    var adUnitCodeDiv = document.getElementById(adUnit.code);
    if (adUnitCodeDiv.dataset.adslotid) {
      context.pbadslot = adUnitCodeDiv.dataset.adslotid;
      return;
    }
  } catch (e) {}
  // banner adUnit, use GPT adunit if defined
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, 'adserver.adslot')) {
    context.pbadslot = context.adserver.adslot;
    return;
  }
  context.pbadslot = adUnit.code;
  return true;
};
var makeBidRequestsHook = function makeBidRequestsHook(fn, adUnits) {
  appendGptSlots(adUnits);
  var _currentConfig4 = _currentConfig,
    useDefaultPreAuction = _currentConfig4.useDefaultPreAuction,
    customPreAuction = _currentConfig4.customPreAuction;
  adUnits.forEach(function (adUnit) {
    // init the ortb2Imp if not done yet
    adUnit.ortb2Imp = adUnit.ortb2Imp || {};
    adUnit.ortb2Imp.ext = adUnit.ortb2Imp.ext || {};
    adUnit.ortb2Imp.ext.data = adUnit.ortb2Imp.ext.data || {};
    var context = adUnit.ortb2Imp.ext;

    // if neither new confs set do old stuff
    if (!customPreAuction && !useDefaultPreAuction) {
      var usedAdUnitCode = appendPbAdSlot(adUnit);
      // gpid should be set to itself if already set, or to what pbadslot was (as long as it was not adUnit code)
      if (!context.gpid && !usedAdUnitCode) {
        context.gpid = context.data.pbadslot;
      }
    } else {
      var adserverSlot = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, 'data.adserver.adslot');
      var result;
      if (customPreAuction) {
        result = customPreAuction(adUnit, adserverSlot);
      } else if (useDefaultPreAuction) {
        result = defaultPreAuction(adUnit, adserverSlot);
      }
      if (result) {
        context.gpid = context.data.pbadslot = result;
      }
    }
  });
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  return fn.call.apply(fn, [_this, adUnits].concat(args));
};
var handleSetGptConfig = function handleSetGptConfig(moduleConfig) {
  _currentConfig = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.pick)(moduleConfig, ['enabled', function (enabled) {
    return enabled !== false;
  }, 'customGptSlotMatching', function (customGptSlotMatching) {
    return typeof customGptSlotMatching === 'function' && customGptSlotMatching;
  }, 'customPbAdSlot', function (customPbAdSlot) {
    return typeof customPbAdSlot === 'function' && customPbAdSlot;
  }, 'customPreAuction', function (customPreAuction) {
    return typeof customPreAuction === 'function' && customPreAuction;
  }, 'useDefaultPreAuction', function (useDefaultPreAuction) {
    return useDefaultPreAuction === true;
  }]);
  if (_currentConfig.enabled) {
    if (!hooksAdded) {
      (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_4__.getHook)('makeBidRequests').before(makeBidRequestsHook);
      hooksAdded = true;
    }
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)("".concat(MODULE_NAME, ": Turning off module"));
    _currentConfig = {};
    (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_4__.getHook)('makeBidRequests').getHooks({
      hook: makeBidRequestsHook
    }).remove();
    hooksAdded = false;
  }
};
_src_config_js__WEBPACK_IMPORTED_MODULE_2__.config.getConfig('gptPreAuction', function (config) {
  return handleSetGptConfig(config.gptPreAuction);
});
handleSetGptConfig({});
window.pbjs.installedModules.push('gptPreAuction');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/gptPreAuction.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["identityLinkIdSystem"],{

/***/ "./modules/identityLinkIdSystem.js":
/*!*****************************************!*\
  !*** ./modules/identityLinkIdSystem.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports storage, identityLinkSubmodule */
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_ajax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/ajax.js */ "./src/ajax.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");
/**
 * This module adds IdentityLink to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/identityLinkSubmodule
 * @requires module:modules/userId
 */





var storage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getStorageManager)();

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
      _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError('identityLink: requires partner id to be defined');
      return;
    }
    var hasGdpr = consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies ? 1 : 0;
    var gdprConsentString = hasGdpr ? consentData.consentString : '';
    var tcfPolicyV2 = _src_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"](consentData, 'vendorData.tcfPolicyVersion') === 2;
    // use protocol relative urls for http or https
    if (hasGdpr && (!gdprConsentString || gdprConsentString === '')) {
      _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo('identityLink: Consent string is required to call envelope API.');
      return;
    }
    var url = "https://api.rlcdn.com/api/identity/envelope?pid=".concat(configParams.pid).concat(hasGdpr ? (tcfPolicyV2 ? '&ct=4&cv=' : '&ct=1&cv=') + gdprConsentString : '');
    var resp;
    resp = function resp(callback) {
      // Check ats during callback so it has a chance to initialise.
      // If ats library is available, use it to retrieve envelope. If not use standard third party endpoint
      if (window.ats) {
        _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo('identityLink: ATS exists!');
        window.ats.retrieveEnvelope(function (envelope) {
          if (envelope) {
            _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo('identityLink: An envelope can be retrieved from ATS!');
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
};
// return envelope from third party endpoint
function getEnvelope(url, callback, configParams) {
  var callbacks = {
    success: function success(response) {
      var responseObj;
      if (response) {
        try {
          responseObj = JSON.parse(response);
        } catch (error) {
          _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo(error);
        }
      }
      callback(responseObj && responseObj.envelope ? responseObj.envelope : '');
    },
    error: function error(_error) {
      _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo("identityLink: identityLink: ID fetch encountered an error", _error);
      callback();
    }
  };
  if (!configParams.notUse3P && !storage.getCookie('_lr_retry_request')) {
    setRetryCookie();
    _src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logInfo('identityLink: A 3P retrieval is attempted!');
    setEnvelopeSource(false);
    (0,_src_ajax_js__WEBPACK_IMPORTED_MODULE_3__.ajax)(url, callbacks, undefined, {
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
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_4__.submodule)('userId', identityLinkSubmodule);
window.pbjs.installedModules.push('identityLinkIdSystem');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/identityLinkIdSystem.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["openxBidAdapter"],{

/***/ "./modules/openxBidAdapter.js":
/*!************************************!*\
  !*** ./modules/openxBidAdapter.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports USER_ID_CODE_TO_QUERY_ARG, spec */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/adapters/bidderFactory.js */ "./src/adapters/bidderFactory.js");
/* harmony import */ var _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/mediaTypes.js */ "./src/mediaTypes.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");







var SUPPORTED_AD_TYPES = [_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.BANNER, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO];
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
  hadronId: 'audigentid',
  // Hadron ID from Audigent
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
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bidRequest, 'mediaTypes.banner') && hasDelDomainOrPlatform) {
      return !!bidRequest.params.unit || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bidRequest, 'mediaTypes.banner.sizes.length') > 0;
    }
    return !!(bidRequest.params.unit && hasDelDomainOrPlatform);
  },
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    if (bidRequests.length === 0) {
      return [];
    }
    var requests = [];
    var _partitionByVideoBids = partitionByVideoBids(bidRequests),
      _partitionByVideoBids2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_partitionByVideoBids, 2),
      videoBids = _partitionByVideoBids2[0],
      bannerBids = _partitionByVideoBids2[1];

    // build banner requests
    if (bannerBids.length > 0) {
      requests.push(buildOXBannerRequest(bannerBids, bidderRequest));
    }
    // build video requests
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
    return mediaType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO ? createVideoBidResponses(oxResponseObj, serverRequest.payload) : createBannerBidResponses(oxResponseObj, serverRequest.payload);
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    if (syncOptions.iframeEnabled || syncOptions.pixelEnabled) {
      var pixelType = syncOptions.iframeEnabled ? 'iframe' : 'image';
      var url = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(responses, '0.body.ads.pixels') || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(responses, '0.body.pixels') || generateDefaultSyncUrl(gdprConsent, uspConsent);
      return [{
        type: pixelType,
        url: url
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.convertTypes)({
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
  }

  // CCPA
  if (uspConsent) {
    queryParamStrings.push('us_privacy=' + encodeURIComponent(uspConsent));
  }
  return "".concat(url).concat(queryParamStrings.length > 0 ? '?' + queryParamStrings.join('&') : '');
}
function isVideoRequest(bidRequest) {
  return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bidRequest, 'mediaTypes.video') && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bidRequest, 'mediaTypes.banner') || bidRequest.mediaType === _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO;
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
    }
    // default 5 mins
    bidResponse.ttl = 300;
    // true is net, false is gross
    bidResponse.netRevenue = true;
    bidResponse.currency = adUnit.currency;

    // additional fields to add
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
    body = tDoc.body;
    width = tWin.innerWidth || docEl.clientWidth || body.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight || body.clientHeight;
  } else {
    width = tWin.innerWidth || docEl.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight;
  }
  return "".concat(width, "x").concat(height);
}
function formatCustomParms(customKey, customParams) {
  var value = customParams[customKey];
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(value)) {
    // if value is an array, join them with commas first
    value = value.join(',');
  }
  // return customKey=customValue format, escaping + to . and / to _
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
  return /avjp$/.test(serverRequest.url) ? _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO : _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.BANNER;
}
function buildCommonQueryParamsFromBids(bids, bidderRequest) {
  var isInIframe = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.inIframe)();
  var defaultParams;
  defaultParams = {
    ju: bidderRequest.refererInfo.page,
    ch: document.charSet || document.characterSet,
    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
    ifr: isInIframe,
    tz: new Date().getTimezoneOffset(),
    tws: getViewportDimensions(isInIframe),
    be: 1,
    bc: bids[0].params.bc || "".concat(BIDDER_CONFIG, "_").concat(BIDDER_VERSION),
    dddid: (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._map)(bids, function (bid) {
      return bid.transactionId;
    }).join(','),
    nocache: new Date().getTime()
  };
  var userAgentClientHints = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bidderRequest, 'ortb2.device.sua');
  if (userAgentClientHints) {
    defaultParams.sua = JSON.stringify(userAgentClientHints);
  }
  var userDataSegments = buildFpdQueryParams('user.data', bidderRequest.ortb2);
  if (userDataSegments.length > 0) {
    defaultParams.sm = userDataSegments;
  }
  var siteContentDataSegments = buildFpdQueryParams('site.content.data', bidderRequest.ortb2);
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
    if (_src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('consentManagement.cmpApi') === 'iab') {
      defaultParams.x_gdpr_f = 1;
    }
  }
  if (bidderRequest && bidderRequest.uspConsent) {
    defaultParams.us_privacy = bidderRequest.uspConsent;
  }

  // normalize publisher common id
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bids[0], 'crumbs.pubcid')) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_5__.dset)(bids[0], 'userId.pubcid', (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bids[0], 'crumbs.pubcid'));
  }
  defaultParams = appendUserIdsToQueryParams(defaultParams, bids[0].userId);

  // supply chain support
  if (bids[0].schain) {
    defaultParams.schain = serializeSupplyChain(bids[0].schain);
  }
  return defaultParams;
}
function buildFpdQueryParams(fpdPath, ortb2) {
  var firstPartyData = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ortb2, fpdPath);
  if (!Array.isArray(firstPartyData) || !firstPartyData.length) {
    return '';
  }
  var fpd = firstPartyData.filter(function (data) {
    return Array.isArray(data.segment) && data.segment.length > 0 && data.name !== undefined && data.name.length > 0;
  }).reduce(function (acc, data) {
    var name = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(data.ext) === 'object' && data.ext.segtax ? "".concat(data.name, "/").concat(data.ext.segtax) : data.name;
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
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._each)(userIds, function (userIdObjectOrValue, userIdProviderKey) {
    var key = USER_ID_CODE_TO_QUERY_ARG[userIdProviderKey];
    if (USER_ID_CODE_TO_QUERY_ARG.hasOwnProperty(userIdProviderKey)) {
      switch (userIdProviderKey) {
        case 'merkleId':
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
  var auids = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._map)(bids, function (bid) {
    return bid.params.unit;
  });
  queryParams.aus = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._map)(bids, function (bid) {
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseSizesInput)(bid.mediaTypes.banner.sizes).join(',');
  }).join('|');
  queryParams.divids = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._map)(bids, function (bid) {
    return encodeURIComponent(bid.adUnitCode);
  }).join(',');
  // gpid
  queryParams.aucs = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._map)(bids, function (bid) {
    var gpid = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bid, 'ortb2Imp.ext.data.pbadslot');
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
  if (_src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('coppa') === true || bids.some(function (bid) {
    return bid.params.coppa;
  })) {
    queryParams.tfcd = 1;
  }
  bids.forEach(function (bid) {
    if (bid.params.customParams) {
      var customParamsForBid = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__._map)(Object.keys(bid.params.customParams), function (customKey) {
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
  enrichQueryWithFloors(queryParams, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.BANNER, bids);
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
  var videoMediaType = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bid, "mediaTypes.video");
  var queryParams = buildCommonQueryParamsFromBids([bid], bidderRequest);
  var oxVideoConfig = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bid, 'params.video') || {};
  var context = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bid, 'mediaTypes.video.context');
  var playerSize = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bid, 'mediaTypes.video.playerSize');
  var width;
  var height;

  // normalize config for video size
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(bid.sizes) && bid.sizes.length === 2 && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(bid.sizes[0])) {
    width = parseInt(bid.sizes[0], 10);
    height = parseInt(bid.sizes[1], 10);
  } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(bid.sizes) && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(bid.sizes[0]) && bid.sizes[0].length === 2) {
    width = parseInt(bid.sizes[0][0], 10);
    height = parseInt(bid.sizes[0][1], 10);
  } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(playerSize) && playerSize.length === 2) {
    width = parseInt(playerSize[0], 10);
    height = parseInt(playerSize[1], 10);
  }
  var openRtbParams = {
    w: width,
    h: height
  };

  // legacy openrtb params could be in video, openrtb, or video.openrtb
  var legacyParams = bid.params.video || bid.params.openrtb || {};
  if (legacyParams.openrtb) {
    legacyParams = legacyParams.openrtb;
  }
  // support for video object or full openrtb object
  if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(legacyParams.imp)) {
    legacyParams = legacyParams.imp[0].video;
  }
  Object.keys(legacyParams).filter(function (param) {
    return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.includes)(VIDEO_TARGETING, param);
  }).forEach(function (param) {
    return openRtbParams[param] = legacyParams[param];
  });

  // 5.0 openrtb video params
  Object.keys(videoMediaType).filter(function (param) {
    return (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.includes)(VIDEO_TARGETING, param);
  }).forEach(function (param) {
    return openRtbParams[param] = videoMediaType[param];
  });
  var openRtbReq = {
    imp: [{
      video: openRtbParams
    }]
  };
  queryParams['openrtb'] = JSON.stringify(openRtbReq);
  queryParams.auid = bid.params.unit;
  // override prebid config with openx config if available
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
  var gpid = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bid, 'ortb2Imp.ext.data.pbadslot');
  if (gpid) {
    queryParams.aucs = encodeURIComponent(gpid);
  }

  // each video bid makes a separate request
  enrichQueryWithFloors(queryParams, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO, [bid]);
  return queryParams;
}
function createVideoBidResponses(response, _ref3) {
  var bid = _ref3.bid,
    startTime = _ref3.startTime;
  var bidResponses = [];
  if (response !== undefined && response.vastUrl !== '' && response.pub_rev > 0) {
    var vastQueryParams = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(response.vastUrl).search || {};
    var bidResponse = {};
    bidResponse.requestId = bid.bidId;
    if (response.deal_id) {
      bidResponse.dealId = response.deal_id;
    }
    // default 5 mins
    bidResponse.ttl = 300;
    // true is net, false is gross
    bidResponse.netRevenue = true;
    bidResponse.currency = response.currency;
    bidResponse.cpm = parseInt(response.pub_rev, 10) / 1000;
    bidResponse.width = parseInt(response.width, 10);
    bidResponse.height = parseInt(response.height, 10);
    bidResponse.creativeId = response.adid;
    bidResponse.vastUrl = response.vastUrl;
    bidResponse.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO;

    // enrich adunit with vast parameters
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
  var currency = _src_config_js__WEBPACK_IMPORTED_MODULE_4__.config.getConfig('currency.adServerCurrency') || DEFAULT_CURRENCY;
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

(0,_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__.registerBidder)(spec);
window.pbjs.installedModules.push('openxBidAdapter');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/openxBidAdapter.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["publinkIdSystem"],{

/***/ "./modules/publinkIdSystem.js":
/*!************************************!*\
  !*** ./modules/publinkIdSystem.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports storage, publinkIdSubmodule */
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _src_ajax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/ajax.js */ "./src/ajax.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
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
var storage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getStorageManager)({
  gvlid: GVLID
});
function isHex(s) {
  return /^[A-F0-9]+$/i.test(s);
}
function publinkIdUrl(params, consentData) {
  var url = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseUrl)('https://proc.ad.cpe.dotomi.com/cvx/client/sync/publink');
  url.search = {
    deh: params.e,
    mpn: 'Prebid.js',
    mpv: "7.42.0-pre"
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
  var usPrivacyString = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_2__.uspDataHandler.getConsentData();
  if (usPrivacyString && typeof usPrivacyString === 'string') {
    url.search.us_privacy = usPrivacyString;
  }
  return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.buildUrl)(url);
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
        (0,_src_ajax_js__WEBPACK_IMPORTED_MODULE_3__.ajax)(publinkIdUrl(config.params, consentData), handleResponse, undefined, options);
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)('params.e must be a hex string');
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
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.logError)(e);
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
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_4__.submodule)('userId', publinkIdSubmodule);
window.pbjs.installedModules.push('publinkIdSystem');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/publinkIdSystem.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["sharedIdSystem"],{

/***/ "./modules/sharedIdSystem.js":
/*!***********************************!*\
  !*** ./modules/sharedIdSystem.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports storage, sharedIdSystemSubmodule */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _src_consentHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/consentHandler.js */ "./src/consentHandler.js");

/**
 * This module adds SharedId to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/sharedIdSystem
 * @requires module:modules/userId
 */






var storage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getStorageManager)({
  moduleName: 'pubCommonId',
  gvlid: _src_consentHandler_js__WEBPACK_IMPORTED_MODULE_1__.VENDORLESS_GVLID
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
  }

  // Use pubcid as a cache buster
  var urlInfo = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(pixelUrl);
  urlInfo.search.id = encodeURIComponent('pubcid:' + id);
  var targetUrl = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.buildUrl)(urlInfo);
  return function () {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.triggerPixel)(targetUrl);
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
  gvlid: _src_consentHandler_js__WEBPACK_IMPORTED_MODULE_1__.VENDORLESS_GVLID,
  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} value
   * @param {SubmoduleConfig} config
   * @returns {{pubcid:string}}
   */
  decode: function decode(value, config) {
    if (hasOptedOut()) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)('PubCommonId decode: Has opted-out');
      return undefined;
    }
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)(' Decoded value PubCommonId ' + value);
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
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)('PubCommonId: Has opted-out');
      return;
    }
    var coppa = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__.coppaDataHandler.getCoppa();
    if (coppa) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)('PubCommonId: IDs not provided for coppa requests, exiting PubCommonId');
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
        if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(window[PUB_COMMON_ID]) === 'object') {
          // If the page includes its own pubcid module, then save a copy of id.
          newId = window[PUB_COMMON_ID].getId();
        }
      } catch (e) {}
      if (!newId) newId = create && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasDeviceAccess)() ? (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateUUID)() : undefined;
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
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)('PubCommonId: Has opted-out');
      return {
        id: undefined
      };
    }
    var coppa = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_3__.coppaDataHandler.getCoppa();
    if (coppa) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)('PubCommonId: IDs not provided for coppa requests, exiting PubCommonId');
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
      var nextDomain = domainElements.slice(i).join('.');

      // write test cookie
      storage.setCookie(cookieName, '1', undefined, undefined, nextDomain);

      // read test cookie to verify domain was valid
      testCookie = storage.getCookie(cookieName);

      // delete test cookie
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
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_5__.submodule)('userId', sharedIdSystemSubmodule);
window.pbjs.installedModules.push('sharedIdSystem');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/sharedIdSystem.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["topicsFpdModule"],{

/***/ "./modules/topicsFpdModule.js":
/*!************************************!*\
  !*** ./modules/topicsFpdModule.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports coreStorage, topicStorageName, lastUpdated, getTopicsData, getTopics, processFpd, getCachedTopics, receiveMessage, storeInLocalStorage, hasGDPRConsent */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/refererDetection.js */ "./src/refererDetection.js");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/hook.js */ "./src/hook.js");
/* harmony import */ var _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils/promise.js */ "./src/utils/promise.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/config.js */ "./src/config.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/adapterManager.js */ "./src/adapterManager.js");











var MODULE_NAME = 'topicsFpd';
var DEFAULT_EXPIRATION_DAYS = 21;
var TCF_REQUIRED_PURPOSES = ['1', '2', '3', '4'];
var HAS_GDPR_CONSENT = true;
var LOAD_TOPICS_INITIALISE = false;
var HAS_DEVICE_ACCESS = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasDeviceAccess)();
var bidderIframeList = {
  maxTopicCaller: 1,
  bidders: [{
    bidder: 'pubmatic',
    iframeURL: 'https://ads.pubmatic.com/AdServer/js/topics/topics_frame.html'
  }]
};
var coreStorage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.getCoreStorageManager)(MODULE_NAME);
var topicStorageName = 'prebid:topics';
var lastUpdated = 'lastUpdated';
var iframeLoadedURL = [];
var TAXONOMIES = {
  // map from topic taxonomyVersion to IAB segment taxonomy
  '1': 600
};
function partitionBy(field, items) {
  return items.reduce(function (partitions, item) {
    var key = item[field];
    if (!partitions.hasOwnProperty(key)) partitions[key] = [];
    partitions[key].push(item);
    return partitions;
  }, {});
}

/**
 * function to get list of loaded Iframes calling Topics API
 */
function getLoadedIframeURL() {
  return iframeLoadedURL;
}

/**
 * function to set/push iframe in the list which is loaded to called topics API.
 */
function setLoadedIframeURL(url) {
  return iframeLoadedURL.push(url);
}
function getTopicsData(name, topics) {
  var taxonomies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TAXONOMIES;
  return Object.entries(partitionBy('taxonomyVersion', topics)).filter(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
      taxonomyVersion = _ref2[0];
    if (!taxonomies.hasOwnProperty(taxonomyVersion)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn)("Unrecognized taxonomyVersion from Topics API: \"".concat(taxonomyVersion, "\"; topic will be ignored"));
      return false;
    }
    return true;
  }).flatMap(function (_ref3) {
    var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 2),
      taxonomyVersion = _ref4[0],
      topics = _ref4[1];
    return Object.entries(partitionBy('modelVersion', topics)).map(function (_ref5) {
      var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, 2),
        modelVersion = _ref6[0],
        topics = _ref6[1];
      var datum = {
        ext: {
          segtax: taxonomies[taxonomyVersion],
          segclass: modelVersion
        },
        segment: topics.map(function (topic) {
          return {
            id: topic.topic.toString()
          };
        })
      };
      if (name != null) {
        datum.name = name;
      }
      return datum;
    });
  });
}
function getTopics() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var topics = null;
  try {
    if ('browsingTopics' in doc && doc.featurePolicy.allowsFeature('browsing-topics')) {
      topics = _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_3__.GreedyPromise.resolve(doc.browsingTopics());
    }
  } catch (e) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logError)('Could not call topics API', e);
  }
  if (topics == null) {
    topics = _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_3__.GreedyPromise.resolve([]);
  }
  return topics;
}
var topicsData = getTopics().then(function (topics) {
  return getTopicsData((0,_src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__.getRefererInfo)().domain, topics);
});
function processFpd(config, _ref7) {
  var global = _ref7.global;
  var _ref8 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref8$data = _ref8.data,
    data = _ref8$data === void 0 ? topicsData : _ref8$data;
  if (!LOAD_TOPICS_INITIALISE) {
    loadTopicsForBidders();
    LOAD_TOPICS_INITIALISE = true;
  }
  return data.then(function (data) {
    data = [].concat(data, getCachedTopics()); // Add cached data in FPD data.
    if (data.length) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)(global, {
        user: {
          data: data
        }
      });
    }
    return {
      global: global
    };
  });
}

/**
 * function to fetch the cached topic data from storage for bidders and return it
 */
function getCachedTopics() {
  var cachedTopicData = [];
  if (!HAS_GDPR_CONSENT || !HAS_DEVICE_ACCESS) {
    return cachedTopicData;
  }
  var topics = _src_config_js__WEBPACK_IMPORTED_MODULE_5__.config.getConfig('userSync.topics') || bidderIframeList;
  var bidderList = topics.bidders || [];
  var storedSegments = new Map((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.safeJSONParse)(coreStorage.getDataFromLocalStorage(topicStorageName)));
  storedSegments && storedSegments.forEach(function (value, cachedBidder) {
    // Check bidder exist in config for cached bidder data and then only retrieve the cached data
    var bidderConfigObj = bidderList.find(function (_ref9) {
      var bidder = _ref9.bidder;
      return cachedBidder == bidder;
    });
    if (bidderConfigObj) {
      if (!isCachedDataExpired(value[lastUpdated], (bidderConfigObj === null || bidderConfigObj === void 0 ? void 0 : bidderConfigObj.expiry) || DEFAULT_EXPIRATION_DAYS)) {
        Object.keys(value).forEach(function (segData) {
          segData != lastUpdated && cachedTopicData.push(value[segData]);
        });
      } else {
        // delete the specific bidder map from the store and store the updated maps
        storedSegments.delete(cachedBidder);
        coreStorage.setDataInLocalStorage(topicStorageName, JSON.stringify((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(storedSegments)));
      }
    }
  });
  return cachedTopicData;
}

/**
 * Recieve messages from iframe loaded for bidders to fetch topic
 * @param {MessageEvent} evt
 */
function receiveMessage(evt) {
  if (evt && evt.data) {
    try {
      var data = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.safeJSONParse)(evt.data);
      if ((0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_7__.includes)(getLoadedIframeURL(), evt.origin) && data && data.segment && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(data.segment.topics)) {
        var _data$segment = data.segment,
          domain = _data$segment.domain,
          topics = _data$segment.topics,
          bidder = _data$segment.bidder;
        var iframeTopicsData = getTopicsData(domain, topics)[0];
        iframeTopicsData && storeInLocalStorage(bidder, iframeTopicsData);
      }
    } catch (err) {}
  }
}

/**
Function to store Topics data recieved from iframe in storage(name: "prebid:topics")
* @param {Topics} topics
*/
function storeInLocalStorage(bidder, topics) {
  var storedSegments = new Map((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.safeJSONParse)(coreStorage.getDataFromLocalStorage(topicStorageName)));
  if (storedSegments.has(bidder)) {
    storedSegments.get(bidder)[topics['ext']['segclass']] = topics;
    storedSegments.get(bidder)[lastUpdated] = new Date().getTime();
    storedSegments.set(bidder, storedSegments.get(bidder));
  } else {
    var _storedSegments$set;
    storedSegments.set(bidder, (_storedSegments$set = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_storedSegments$set, topics.ext.segclass, topics), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_storedSegments$set, lastUpdated, new Date().getTime()), _storedSegments$set));
  }
  coreStorage.setDataInLocalStorage(topicStorageName, JSON.stringify((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(storedSegments)));
}
function isCachedDataExpired(storedTime, cacheTime) {
  var _MS_PER_DAY = 1000 * 60 * 60 * 24;
  var currentTime = new Date().getTime();
  var daysDifference = Math.ceil((currentTime - storedTime) / _MS_PER_DAY);
  return daysDifference > cacheTime;
}

/**
* Function to get random bidders based on count passed with array of bidders
**/
function getRandomBidders(arr, count) {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(arr).sort(function () {
    return 0.5 - Math.random();
  }).slice(0, count);
}

/**
 * function to add listener for message receiving from IFRAME
 */
function listenMessagesFromTopicIframe() {
  window.addEventListener('message', receiveMessage, false);
}
function checkTCFv2(vendorData) {
  var requiredPurposes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TCF_REQUIRED_PURPOSES;
  var gdprApplies = vendorData.gdprApplies,
    purpose = vendorData.purpose;
  if (!gdprApplies || !purpose) {
    return true;
  }
  return requiredPurposes.map(function (purposeNo) {
    var purposeConsent = purpose.consents ? purpose.consents[purposeNo] : false;
    if (purposeConsent) {
      return true;
    }
    return false;
  }).reduce(function (a, b) {
    return a && b;
  }, true);
}
function hasGDPRConsent() {
  // Check for GDPR consent for purpose 1,2,3,4 and return false if consent has not been given
  var gdprConsent = _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_9__.gdprDataHandler.getConsentData();
  var hasGdpr = gdprConsent && typeof gdprConsent.gdprApplies === 'boolean' && gdprConsent.gdprApplies ? 1 : 0;
  var gdprConsentString = hasGdpr ? gdprConsent.consentString : '';
  if (hasGdpr) {
    if (!gdprConsentString || gdprConsentString === '' || !gdprConsent.vendorData) {
      return false;
    }
    return checkTCFv2(gdprConsent.vendorData);
  }
  return true;
}

/**
 * function to load the iframes of the bidder to load the topics data
 */
function loadTopicsForBidders() {
  HAS_GDPR_CONSENT = hasGDPRConsent();
  if (!HAS_GDPR_CONSENT || !HAS_DEVICE_ACCESS) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logInfo)('Topics Module : Consent string is required to fetch the topics from third party domains.');
    return;
  }
  var topics = _src_config_js__WEBPACK_IMPORTED_MODULE_5__.config.getConfig('userSync.topics') || bidderIframeList;
  if (topics) {
    listenMessagesFromTopicIframe();
    var randomBidders = getRandomBidders(topics.bidders || [], topics.maxTopicCaller || 1);
    randomBidders && randomBidders.forEach(function (_ref10) {
      var bidder = _ref10.bidder,
        iframeURL = _ref10.iframeURL;
      if (bidder && iframeURL) {
        var ifrm = document.createElement('iframe');
        ifrm.name = 'ifrm_'.concat(bidder);
        ifrm.src = ''.concat(iframeURL, '?bidder=').concat(bidder);
        ifrm.style.display = 'none';
        setLoadedIframeURL(new URL(iframeURL).origin);
        iframeURL && window.document.documentElement.appendChild(ifrm);
      }
    });
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.logWarn)("Topics config not defined under userSync Object");
  }
}
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_10__.submodule)('firstPartyData', {
  name: 'topics',
  queue: 1,
  processFpd: processFpd
});
window.pbjs.installedModules.push('topicsFpdModule');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/topicsFpdModule.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

"use strict";
(self["pbjsChunk"] = self["pbjsChunk"] || []).push([["userId"],{

/***/ "./modules/userId/eids.js":
/*!********************************!*\
  !*** ./modules/userId/eids.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_IDS_CONFIG": function() { return /* binding */ USER_IDS_CONFIG; },
/* harmony export */   "buildEidPermissions": function() { return /* binding */ buildEidPermissions; },
/* harmony export */   "createEidsArray": function() { return /* binding */ createEidsArray; }
/* harmony export */ });
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils.js */ "./node_modules/dlv/index.js");


// Each user-id sub-module is expected to mention respective config here
var USER_IDS_CONFIG = {
  // key-name : {config}

  // GrowthCode
  'growthCodeId': {
    getValue: function getValue(data) {
      return data.gc_id;
    },
    source: 'growthcode.io',
    atype: 1,
    getUidExt: function getUidExt(data) {
      var extendedData = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.pick)(data, ['h1', 'h2', 'h3']);
      if (Object.keys(extendedData).length) {
        return extendedData;
      }
    }
  },
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
  // ftrack
  'ftrackId': {
    source: 'flashtalking.com',
    atype: 1,
    getValue: function getValue(data) {
      var value = '';
      if (data && data.ext && data.ext.DeviceID) {
        value = data.ext.DeviceID;
      }
      return value;
    },
    getUidExt: function getUidExt(data) {
      return data && data.ext;
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
      var extendedData = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.pick)(parrableId, ['ibaOptout', 'ccpaOptout']);
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
    atype: 3,
    getSource: function getSource(data) {
      var _data$ext;
      if (data !== null && data !== void 0 && (_data$ext = data.ext) !== null && _data$ext !== void 0 && _data$ext.ssp) {
        return "".concat(data.ext.ssp, ".merkleinc.com");
      }
      return 'merkleinc.com';
    },
    getValue: function getValue(data) {
      return data.id;
    },
    getUidExt: function getUidExt(data) {
      if (data.keyID) {
        return {
          keyID: data.keyID
        };
      }
      if (data.ext) {
        return data.ext;
      }
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
  // quantcastId
  'quantcastId': {
    source: 'quantcast.com',
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
      if (data.snowflake.id === undefined) {
        return data.snowflake;
      }
      return data.snowflake.id;
    },
    source: 'novatiq.com'
  },
  'uid2': {
    source: 'uidapi.com',
    atype: 3,
    getValue: function getValue(data) {
      return data.id;
    }
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
    source: 'amxdt.net',
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
  'imppid': {
    source: 'ppid.intimatemerger.com',
    atype: 1
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
  },
  // DAC ID
  'dacId': {
    source: 'impact-ad.jp',
    atype: 1
  },
  // 33across ID
  '33acrossId': {
    source: '33across.com',
    atype: 1,
    getValue: function getValue(data) {
      return data.envelope;
    }
  },
  // tncId
  'tncid': {
    source: 'thenewco.it',
    atype: 3
  },
  // Gravito MP ID
  'gravitompId': {
    source: 'gravito.net',
    atype: 1
  },
  // czechAdId
  'czechAdId': {
    source: 'czechadid.cz',
    atype: 1
  },
  // OneKey Data
  'oneKeyData': {
    getValue: function getValue(data) {
      if (data && Array.isArray(data.identifiers) && data.identifiers[0]) {
        return data.identifiers[0].value;
      }
    },
    source: 'paf',
    atype: 1,
    getEidExt: function getEidExt(data) {
      if (data && data.preferences) {
        return {
          preferences: data.preferences
        };
      }
    },
    getUidExt: function getUidExt(data) {
      if (data && Array.isArray(data.identifiers) && data.identifiers[0]) {
        var id = data.identifiers[0];
        return {
          version: id.version,
          type: id.type,
          source: id.source
        };
      }
    }
  }
};

// this function will create an eid object for the given UserId sub-module
function createEidObject(userIdData, subModuleKey) {
  var conf = USER_IDS_CONFIG[subModuleKey];
  if (conf && userIdData) {
    var eid = {};
    eid.source = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isFn)(conf['getSource']) ? conf['getSource'](userIdData) : conf['source'];
    var value = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isFn)(conf['getValue']) ? conf['getValue'](userIdData) : userIdData;
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStr)(value)) {
      var uid = {
        id: value,
        atype: conf['atype']
      };
      // getUidExt
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isFn)(conf['getUidExt'])) {
        var uidExt = conf['getUidExt'](userIdData);
        if (uidExt) {
          uid.ext = uidExt;
        }
      }
      eid.uids = [uid];
      // getEidExt
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isFn)(conf['getEidExt'])) {
        var eidExt = conf['getEidExt'](userIdData);
        if (eidExt) {
          eid.ext = eidExt;
        }
      }
      return eid;
    }
  }
  return null;
}

// this function will generate eids array for all available IDs in bidRequest.userId
// this function will be called by userId module
// if any adapter does not want any particular userId to be passed then adapter can use Array.filter(e => e.source != 'tdid')
function createEidsArray(bidRequestUserId) {
  var eids = [];
  var _loop = function _loop(subModuleKey) {
    if (bidRequestUserId.hasOwnProperty(subModuleKey)) {
      if (subModuleKey === 'pubProvidedId') {
        eids = eids.concat(bidRequestUserId['pubProvidedId']);
      } else if (Array.isArray(bidRequestUserId[subModuleKey])) {
        bidRequestUserId[subModuleKey].forEach(function (config, index, arr) {
          var eid = createEidObject(config, subModuleKey);
          if (eid) {
            eids.push(eid);
          }
        });
      } else {
        var eid = createEidObject(bidRequestUserId[subModuleKey], subModuleKey);
        if (eid) {
          eids.push(eid);
        }
      }
    }
  };
  for (var subModuleKey in bidRequestUserId) {
    _loop(subModuleKey);
  }
  return eids;
}

/**
 * @param {SubmoduleContainer[]} submodules
 */
function buildEidPermissions(submodules) {
  var eidPermissions = [];
  submodules.filter(function (i) {
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(i.idObj) && Object.keys(i.idObj).length;
  }).forEach(function (i) {
    Object.keys(i.idObj).forEach(function (key) {
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i, 'config.bidders') && Array.isArray(i.config.bidders) && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])(USER_IDS_CONFIG, key + '.source')) {
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

/***/ "./modules/userId/index.js":
/*!*********************************!*\
  !*** ./modules/userId/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports PBJS_USER_ID_OPTOUT_NAME, coreStorage, syncDelay, auctionDelay, setSubmoduleRegistry, setStoredValue, deleteStoredValue, setStoredConsentData, requestBidsHook, validateGdprEnforcement, requestDataDeletion, attachIdSystem, init, setOrtbUserExtEids */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _src_polyfill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/polyfill.js */ "./src/polyfill.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/config.js */ "./src/config.js");
/* harmony import */ var _src_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/events.js */ "./src/events.js");
/* harmony import */ var _src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/prebidGlobal.js */ "./src/prebidGlobal.js");
/* harmony import */ var _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/adapterManager.js */ "./src/adapterManager.js");
/* harmony import */ var _src_constants_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/constants.json */ "./src/constants.json");
/* harmony import */ var _src_hook_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/hook.js */ "./src/hook.js");
/* harmony import */ var _eids_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eids.js */ "./modules/userId/eids.js");
/* harmony import */ var _src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/utils.js */ "./src/utils.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/utils.js */ "./node_modules/dlv/index.js");
/* harmony import */ var _src_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/utils.js */ "./node_modules/dset/dist/index.mjs");
/* harmony import */ var _src_adserver_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/adserver.js */ "./src/adserver.js");
/* harmony import */ var _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/utils/promise.js */ "./src/utils/promise.js");
/* harmony import */ var _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/utils/gpdr.js */ "./src/utils/gpdr.js");
/* harmony import */ var _src_pbjsORTB_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/pbjsORTB.js */ "./src/pbjsORTB.js");
/* harmony import */ var _src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/perfMetrics.js */ "./src/utils/perfMetrics.js");
/* harmony import */ var _src_fpd_rootDomain_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/fpd/rootDomain.js */ "./src/fpd/rootDomain.js");

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
var coreStorage = (0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_0__.getCoreStorageManager)('userid');

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
var configListener;
var uidMetrics = function () {
  var metrics;
  return function () {
    if (metrics == null) {
      metrics = (0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_1__.newMetrics)();
    }
    return metrics;
  };
}();
function submoduleMetrics(moduleName) {
  return uidMetrics().fork().renameWith(function (n) {
    return ["userId.mod.".concat(n), "userId.mods.".concat(moduleName, ".").concat(n)];
  });
}

/** @param {Submodule[]} submodules */
function setSubmoduleRegistry(submodules) {
  submoduleRegistry = submodules;
}
function cookieSetter(submodule) {
  var domainOverride = typeof submodule.submodule.domainOverride === 'function' ? submodule.submodule.domainOverride() : null;
  var name = submodule.config.storage.name;
  return function setCookie(suffix, value, expiration) {
    coreStorage.setCookie(name + (suffix || ''), value, expiration, 'Lax', domainOverride);
  };
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
  try {
    var expiresStr = new Date(Date.now() + storage.expires * (60 * 60 * 24 * 1000)).toUTCString();
    var valueStr = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(value) ? JSON.stringify(value) : value;
    if (storage.type === COOKIE) {
      var setCookie = cookieSetter(submodule);
      setCookie(null, valueStr, expiresStr);
      if (typeof storage.refreshInSeconds === 'number') {
        setCookie('_last', new Date().toUTCString(), expiresStr);
      }
    } else if (storage.type === LOCAL_STORAGE) {
      coreStorage.setDataInLocalStorage("".concat(storage.name, "_exp"), expiresStr);
      coreStorage.setDataInLocalStorage(storage.name, encodeURIComponent(valueStr));
      if (typeof storage.refreshInSeconds === 'number') {
        coreStorage.setDataInLocalStorage("".concat(storage.name, "_last"), new Date().toUTCString());
      }
    }
  } catch (error) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(error);
  }
}
function deleteStoredValue(submodule) {
  var _submodule$config, _submodule$config$sto;
  var deleter, suffixes;
  switch ((_submodule$config = submodule.config) === null || _submodule$config === void 0 ? void 0 : (_submodule$config$sto = _submodule$config.storage) === null || _submodule$config$sto === void 0 ? void 0 : _submodule$config$sto.type) {
    case COOKIE:
      var setCookie = cookieSetter(submodule);
      var expiry = new Date(Date.now() - 1000 * 60 * 60 * 24).toUTCString();
      deleter = function deleter(suffix) {
        return setCookie(suffix, '', expiry);
      };
      suffixes = ['', '_last'];
      break;
    case LOCAL_STORAGE:
      deleter = function deleter(suffix) {
        return coreStorage.removeDataFromLocalStorage(submodule.config.storage.name + suffix);
      };
      suffixes = ['', '_last', '_exp'];
      break;
  }
  if (deleter) {
    suffixes.forEach(function (suffix) {
      try {
        deleter(suffix);
      } catch (e) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(e);
      }
    });
  }
}
function setPrebidServerEidPermissions(initializedSubmodules) {
  var setEidPermissions = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.getPrebidInternal)().setEidPermissions;
  if (typeof setEidPermissions === 'function' && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(initializedSubmodules)) {
    setEidPermissions((0,_eids_js__WEBPACK_IMPORTED_MODULE_3__.buildEidPermissions)(initializedSubmodules));
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
      var storedValueExp = coreStorage.getDataFromLocalStorage("".concat(storage.name, "_exp"));
      // empty string means no expiration set
      if (storedValueExp === '') {
        storedValue = coreStorage.getDataFromLocalStorage(storedKey);
      } else if (storedValueExp) {
        if (new Date(storedValueExp).getTime() - Date.now() > 0) {
          storedValue = decodeURIComponent(coreStorage.getDataFromLocalStorage(storedKey));
        }
      }
    }
    // support storing a string or a stringified object
    if (typeof storedValue === 'string' && storedValue.trim().charAt(0) === '{') {
      storedValue = JSON.parse(storedValue);
    }
  } catch (e) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(e);
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
  return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.cyrb53Hash)(JSON.stringify(storedConsentData));
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
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(error);
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
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)(e);
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
 * @param {SubmoduleContainer[]} submodules
 * @param {function} cb - callback for after processing is done.
 */
function processSubmoduleCallbacks(submodules, cb) {
  cb = uidMetrics().fork().startTiming('userId.callbacks.total').stopBefore(cb);
  var done = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.delayExecution)(function () {
    clearTimeout(timeoutID);
    cb();
  }, submodules.length);
  submodules.forEach(function (submodule) {
    var moduleDone = submoduleMetrics(submodule.submodule.name).startTiming('callback').stopBefore(done);
    function callbackCompleted(idObj) {
      // if valid, id data should be saved to cookie/html storage
      if (idObj) {
        if (submodule.config.storage) {
          setStoredValue(submodule, idObj);
        }
        // cache decoded value (this is copied to every adUnit bid)
        submodule.idObj = submodule.submodule.decode(idObj, submodule.config);
        updatePPID(submodule.idObj);
      } else {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, ": ").concat(submodule.submodule.name, " - request id responded with an empty value"));
      }
      moduleDone();
    }
    try {
      submodule.callback(callbackCompleted);
    } catch (e) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Error in userID module '".concat(submodule.submodule.name, "':"), e);
      moduleDone();
    }
    // clear callback, this prop is used to test if all submodule callbacks are complete below
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
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(i.idObj) && Object.keys(i.idObj).length;
  }).reduce(function (carry, i) {
    Object.keys(i.idObj).forEach(function (key) {
      carry[key] = i.idObj[key];
    });
    return carry;
  }, {});
  return combinedSubmoduleIds;
}

/**
 * This function will return a submodule ID object for particular source name
 * @param {SubmoduleContainer[]} submodules
 * @param {string} sourceName
 */
function getSubmoduleId(submodules, sourceName) {
  if (!Array.isArray(submodules) || !submodules.length) {
    return {};
  }
  var submodule = submodules.filter(function (sub) {
    var _USER_IDS_CONFIG$Obje;
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(sub.idObj) && Object.keys(sub.idObj).length && ((_USER_IDS_CONFIG$Obje = _eids_js__WEBPACK_IMPORTED_MODULE_3__.USER_IDS_CONFIG[Object.keys(sub.idObj)[0]]) === null || _USER_IDS_CONFIG$Obje === void 0 ? void 0 : _USER_IDS_CONFIG$Obje.source) === sourceName;
  });
  return !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(submodule) ? submodule[0].idObj : [];
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
    return !i.config.bidders || !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(i.config.bidders) || (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.includes)(i.config.bidders, bidder);
  }).filter(function (i) {
    return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(i.idObj) && Object.keys(i.idObj).length;
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
    if (adUnit.bids && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(adUnit.bids)) {
      adUnit.bids.forEach(function (bid) {
        var combinedSubmoduleIds = getCombinedSubmoduleIdsForBidder(submodules, bid.bidder);
        if (Object.keys(combinedSubmoduleIds).length) {
          // create a User ID object on the bid,
          bid.userId = combinedSubmoduleIds;
          bid.userIdAsEids = (0,_eids_js__WEBPACK_IMPORTED_MODULE_3__.createEidsArray)(combinedSubmoduleIds);
        }
      });
    }
  });
}
var INIT_CANCELED = {};
function idSystemInitializer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.timeout : _ref$delay;
  var startInit = (0,_src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.defer)();
  var startCallbacks = (0,_src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.defer)();
  var cancel;
  var initialized = false;
  var initMetrics;
  function cancelAndTry(promise) {
    initMetrics = uidMetrics().fork();
    if (cancel != null) {
      cancel.reject(INIT_CANCELED);
    }
    cancel = (0,_src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.defer)();
    return _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.race([promise, cancel.promise]).finally(initMetrics.startTiming('userId.total'));
  }

  // grab a reference to global vars so that the promise chains remain isolated;
  // multiple calls to `init` (from tests) might otherwise cause them to interfere with each other
  var initModules = initializedSubmodules;
  var allModules = submodules;
  function checkRefs(fn) {
    // unfortunately tests have their own global state that needs to be guarded, so even if we keep ours tidy,
    // we cannot let things like submodule callbacks run (they pollute things like the global `server` XHR mock)
    return function () {
      if (initModules === initializedSubmodules && allModules === submodules) {
        return fn.apply(void 0, arguments);
      }
    };
  }
  function timeGdpr() {
    return _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_6__.gdprDataHandler.promise["finally"](initMetrics.startTiming('userId.init.gdpr'));
  }
  var done = cancelAndTry(_src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.all([_src_hook_js__WEBPACK_IMPORTED_MODULE_7__.ready, startInit.promise]).then(timeGdpr).then(checkRefs(function (consentData) {
    initSubmodules(initModules, allModules, consentData);
  })).then(function () {
    return startCallbacks.promise.finally(initMetrics.startTiming('userId.callbacks.pending'));
  }).then(checkRefs(function () {
    var modWithCb = initModules.filter(function (item) {
      return (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isFn)(item.callback);
    });
    if (modWithCb.length) {
      return new _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise(function (resolve) {
        return processSubmoduleCallbacks(modWithCb, resolve);
      });
    }
  })));

  /**
   * with `ready` = true, starts initialization; with `refresh` = true, reinitialize submodules (optionally
   * filtered by `submoduleNames`).
   */
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$refresh = _ref2.refresh,
      refresh = _ref2$refresh === void 0 ? false : _ref2$refresh,
      _ref2$submoduleNames = _ref2.submoduleNames,
      submoduleNames = _ref2$submoduleNames === void 0 ? null : _ref2$submoduleNames,
      _ref2$ready = _ref2.ready,
      ready = _ref2$ready === void 0 ? false : _ref2$ready;
    if (ready && !initialized) {
      initialized = true;
      startInit.resolve();
      // submodule callbacks should run immediately if `auctionDelay` > 0, or `syncDelay` ms after the
      // auction ends otherwise
      if (auctionDelay > 0) {
        startCallbacks.resolve();
      } else {
        _src_events_js__WEBPACK_IMPORTED_MODULE_8__.on(_src_constants_json__WEBPACK_IMPORTED_MODULE_9__.EVENTS.AUCTION_END, function auctionEndHandler() {
          _src_events_js__WEBPACK_IMPORTED_MODULE_8__.off(_src_constants_json__WEBPACK_IMPORTED_MODULE_9__.EVENTS.AUCTION_END, auctionEndHandler);
          delay(syncDelay).then(startCallbacks.resolve);
        });
      }
    }
    if (refresh && initialized) {
      done = cancelAndTry(done.catch(function () {
        return null;
      }).then(timeGdpr) // fetch again in case a refresh was forced before this was resolved
      .then(checkRefs(function (consentData) {
        var cbModules = initSubmodules(initModules, allModules.filter(function (sm) {
          return submoduleNames == null || submoduleNames.includes(sm.submodule.name);
        }), consentData, true).filter(function (sm) {
          return sm.callback != null;
        });
        if (cbModules.length) {
          return new _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise(function (resolve) {
            return processSubmoduleCallbacks(cbModules, resolve);
          });
        }
      })));
    }
    return done;
  };
}
var initIdSystem;
function getPPID() {
  var eids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserIdsAsEids() || [];
  // userSync.ppid should be one of the 'source' values in getUserIdsAsEids() eg pubcid.org or id5-sync.com
  var matchingUserId = ppidSource && eids.find(function (userID) {
    return userID.source === ppidSource;
  });
  if (matchingUserId && typeof (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__["default"])(matchingUserId, 'uids.0.id') === 'string') {
    var ppidValue = matchingUserId.uids[0].id.replace(/[\W_]/g, '');
    if (ppidValue.length >= 32 && ppidValue.length <= 150) {
      return ppidValue;
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("User ID - Googletag Publisher Provided ID for ".concat(ppidSource, " is not between 32 and 150 characters - ").concat(ppidValue));
    }
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
var requestBidsHook = (0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_1__.timedAuctionHook)('userId', function requestBidsHook(fn, reqBidsConfigObj) {
  var _this = this;
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$delay = _ref3.delay,
    delay = _ref3$delay === void 0 ? _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.timeout : _ref3$delay,
    _ref3$getIds = _ref3.getIds,
    getIds = _ref3$getIds === void 0 ? getUserIdsAsync : _ref3$getIds;
  _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.race([getIds().catch(function () {
    return null;
  }), delay(auctionDelay)]).then(function () {
    // pass available user id data to bid adapters
    addIdDataToAdUnitBids(reqBidsConfigObj.adUnits || (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().adUnits, initializedSubmodules);
    uidMetrics().join((0,_src_utils_perfMetrics_js__WEBPACK_IMPORTED_MODULE_1__.useMetrics)(reqBidsConfigObj.metrics), {
      propagate: false,
      includeGroups: true
    });
    // calling fn allows prebid to continue processing
    fn.call(_this, reqBidsConfigObj);
  });
});

/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */
function getUserIds() {
  return getCombinedSubmoduleIds(initializedSubmodules);
}

/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */
function getUserIdsAsEids() {
  return (0,_eids_js__WEBPACK_IMPORTED_MODULE_3__.createEidsArray)(getUserIds());
}

/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */

function getUserIdsAsEidBySource(sourceName) {
  return (0,_eids_js__WEBPACK_IMPORTED_MODULE_3__.createEidsArray)(getSubmoduleId(initializedSubmodules, sourceName))[0];
}

/**
 * This function will be exposed in global-name-space so that userIds for a source can be exposed
 * Sample use case is exposing this function to ESP
 */
function getEncryptedEidsForSource(source, encrypt, customFunction) {
  return initIdSystem().then(function () {
    var eidsSignals = {};
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isFn)(customFunction)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, " - Getting encrypted signal from custom function : ").concat(customFunction.name, " & source : ").concat(source, " "));
      // Publishers are expected to define a common function which will be proxy for signal function.
      var customSignals = customFunction(source);
      eidsSignals[source] = customSignals ? encryptSignals(customSignals) : null; // by default encrypt using base64 to avoid JSON errors
    } else {
      // initialize signal with eids by default
      var eid = getUserIdsAsEidBySource(source);
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, " - Getting encrypted signal for eids :").concat(JSON.stringify(eid)));
      if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(eid)) {
        eidsSignals[eid.source] = encrypt === true ? encryptSignals(eid) : eid.uids[0].id; // If encryption is enabled append version (1||) and encrypt entire object
      }
    }

    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, " - Fetching encrypted eids: ").concat(eidsSignals[source]));
    return eidsSignals[source];
  });
}
function encryptSignals(signals) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var encryptedSig = '';
  switch (version) {
    case 1:
      // Base64 Encryption
      encryptedSig = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__["default"])(signals) === 'object' ? window.btoa(JSON.stringify(signals)) : window.btoa(signals); // Test encryption. To be replaced with better algo
      break;
    default:
      break;
  }
  return "".concat(version, "||").concat(encryptedSig);
}

/**
* This function will be exposed in the global-name-space so that publisher can register the signals-ESP.
*/
function registerSignalSources() {
  if (!(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isGptPubadsDefined)()) {
    return;
  }
  window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [];
  var encryptedSignalSources = _src_config_js__WEBPACK_IMPORTED_MODULE_13__.config.getConfig('userSync.encryptedSignalSources');
  if (encryptedSignalSources) {
    var registerDelay = encryptedSignalSources.registerDelay || 0;
    setTimeout(function () {
      encryptedSignalSources['sources'] && encryptedSignalSources['sources'].forEach(function (_ref4) {
        var source = _ref4.source,
          encrypt = _ref4.encrypt,
          customFunc = _ref4.customFunc;
        source.forEach(function (src) {
          window.googletag.encryptedSignalProviders.push({
            id: src,
            collectorFunction: function collectorFunction() {
              return getEncryptedEidsForSource(src, encrypt, customFunc);
            }
          });
        });
      });
    }, registerDelay);
  } else {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("".concat(MODULE_NAME, " - ESP : encryptedSignalSources config not defined under userSync Object"));
  }
}

/**
 * Force (re)initialization of ID submodules.
 *
 * This will force a refresh of the specified ID submodules regardless of `auctionDelay` / `syncDelay` settings, and
 * return a promise that resolves to the same value as `getUserIds()` when the refresh is complete.
 * If a refresh is already in progress, it will be canceled (rejecting promises returned by previous calls to `refreshUserIds`).
 *
 * @param submoduleNames? submodules to refresh. If omitted, refresh all submodules.
 * @param callback? called when the refresh is complete
 */
function refreshUserIds() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    submoduleNames = _ref5.submoduleNames;
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  return initIdSystem({
    refresh: true,
    submoduleNames: submoduleNames
  }).then(function () {
    if (callback && (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isFn)(callback)) {
      callback();
    }
    return getUserIds();
  });
}

/**
 * @returns a promise that resolves to the same value as `getUserIds()`, but only once all ID submodules have completed
 * initialization. This can also be used to synchronize calls to other ID accessors, e.g.
 *
 * ```
 * pbjs.getUserIdsAsync().then(() => {
 *   const eids = pbjs.getUserIdsAsEids(); // guaranteed to be completely initialized at this point
 * });
 * ```
 */

function getUserIdsAsync() {
  return initIdSystem().then(function () {
    return getUserIds();
  }, function (e) {
    if (e === INIT_CANCELED) {
      // there's a pending refresh - because GreedyPromise runs this synchronously, we are now in the middle
      // of canceling the previous init, before the refresh logic has had a chance to run.
      // Use a "normal" Promise to clear the stack and let it complete (or this will just recurse infinitely)
      return Promise.resolve().then(getUserIdsAsync);
    } else {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)('Error initializing userId', e);
      return _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.reject(e);
    }
  });
}

/**
 * This hook returns updated list of submodules which are allowed to do get user id based on TCF 2 enforcement rules configured
 */
var validateGdprEnforcement = (0,_src_hook_js__WEBPACK_IMPORTED_MODULE_7__.hook)('sync', function (submodules, consentData) {
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
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(response)) {
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
    if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(_response)) {
      if (typeof _response.callback === 'function') {
        submodule.callback = _response.callback;
      }
      if (_response.id) {
        submodule.idObj = submodule.submodule.decode(_response.id, submodule.config);
      }
    }
  }
  updatePPID(submodule.idObj);
}
function updatePPID() {
  var userIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserIds();
  if (userIds && ppidSource) {
    var ppid = getPPID((0,_eids_js__WEBPACK_IMPORTED_MODULE_3__.createEidsArray)(userIds));
    if (ppid) {
      if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isGptPubadsDefined)()) {
        window.googletag.pubads().setPublisherProvidedId(ppid);
      } else {
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(function () {
          window.googletag.pubads().setPublisherProvidedId(ppid);
        });
      }
    }
  }
}
function initSubmodules(dest, submodules, consentData) {
  var forceRefresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return uidMetrics().fork().measureTime('userId.init.modules', function () {
    if (!submodules.length) return []; // to simplify log messages from here on

    // filter out submodules whose storage type is not enabled
    // this needs to be done here (after consent data has loaded) so that enforcement may disable storage globally
    var storageTypes = getActiveStorageTypes();
    submodules = submodules.filter(function (submod) {
      return !submod.config.storage || storageTypes.has(submod.config.storage.type);
    });
    if (!submodules.length) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("".concat(MODULE_NAME, " - no ID module is configured for one of the available storage types:"), Array.from(storageTypes));
      return [];
    }

    // another consent check, this time each module is checked for consent with its own gvlid
    var _validateGdprEnforcem = validateGdprEnforcement(submodules, consentData),
      userIdModules = _validateGdprEnforcem.userIdModules,
      hasValidated = _validateGdprEnforcem.hasValidated;
    if (!hasValidated && !(0,_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_14__.hasPurpose1Consent)(consentData)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logWarn)("".concat(MODULE_NAME, " - gdpr permission not valid for local storage or cookies, exit module"));
      return [];
    }

    // we always want the latest consentData stored, even if we don't execute any submodules
    var storedConsentData = getStoredConsentData();
    setStoredConsentData(consentData);
    var initialized = userIdModules.reduce(function (carry, submodule) {
      return submoduleMetrics(submodule.submodule.name).measureTime('init', function () {
        try {
          populateSubmoduleId(submodule, consentData, storedConsentData, forceRefresh);
          carry.push(submodule);
        } catch (e) {
          (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Error in userID module '".concat(submodule.submodule.name, "':"), e);
        }
        return carry;
      });
    }, []);
    if (initialized.length) {
      setPrebidServerEidPermissions(initialized);
    }
    initialized.forEach(updateInitializedSubmodules.bind(null, dest));
    return initialized;
  });
}
function updateInitializedSubmodules(dest, submodule) {
  var updated = false;
  for (var i = 0; i < dest.length; i++) {
    if (submodule.config.name.toLowerCase() === dest[i].config.name.toLowerCase()) {
      updated = true;
      dest[i] = submodule;
      break;
    }
  }
  if (!updated) {
    dest.push(submodule);
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
function getValidSubmoduleConfigs(configRegistry, submoduleRegistry) {
  if (!Array.isArray(configRegistry)) {
    return [];
  }
  return configRegistry.reduce(function (carry, config) {
    // every submodule config obj must contain a valid 'name'
    if (!config || (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyStr)(config.name)) {
      return carry;
    }
    // Validate storage config contains 'type' and 'name' properties with non-empty string values
    // 'type' must be one of html5, cookies
    if (config.storage && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyStr)(config.storage.type) && !(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyStr)(config.storage.name) && ALL_STORAGE_TYPES.has(config.storage.type)) {
      carry.push(config);
    } else if ((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(config.value)) {
      carry.push(config);
    } else if (!config.storage && !config.value) {
      carry.push(config);
    }
    return carry;
  }, []);
}
var ALL_STORAGE_TYPES = new Set([LOCAL_STORAGE, COOKIE]);
function getActiveStorageTypes() {
  var storageTypes = [];
  var disabled = false;
  if (coreStorage.localStorageIsEnabled()) {
    storageTypes.push(LOCAL_STORAGE);
    if (coreStorage.getDataFromLocalStorage(PBJS_USER_ID_OPTOUT_NAME)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, " - opt-out localStorage found, storage disabled"));
      disabled = true;
    }
  }
  if (coreStorage.cookiesAreEnabled()) {
    storageTypes.push(COOKIE);
    if (coreStorage.getCookie(PBJS_USER_ID_OPTOUT_NAME)) {
      (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, " - opt-out cookie found, storage disabled"));
      disabled = true;
    }
  }
  return new Set(disabled ? [] : storageTypes);
}

/**
 * update submodules by validating against existing configs and storage types
 */
function updateSubmodules() {
  var configs = getValidSubmoduleConfigs(configRegistry, submoduleRegistry);
  if (!configs.length) {
    return;
  }
  // do this to avoid reprocessing submodules
  // TODO: the logic does not match the comment - addedSubmodules is always a copy of submoduleRegistry
  // (if it did it would not be correct - it's not enough to find new modules, as others may have been removed or changed)
  var addedSubmodules = submoduleRegistry.filter(function (i) {
    return !(0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.find)(submodules, function (j) {
      return j.name === i.name;
    });
  });
  submodules.splice(0, submodules.length);
  // find submodule and the matching configuration, if found create and append a SubmoduleContainer
  addedSubmodules.map(function (i) {
    var submoduleConfig = (0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.find)(configs, function (j) {
      return j.name && (j.name.toLowerCase() === i.name.toLowerCase() || i.aliasName && j.name.toLowerCase() === i.aliasName.toLowerCase());
    });
    if (submoduleConfig && i.name !== submoduleConfig.name) submoduleConfig.name = i.name;
    i.findRootDomain = _src_fpd_rootDomain_js__WEBPACK_IMPORTED_MODULE_15__.findRootDomain;
    return submoduleConfig ? {
      submodule: i,
      config: submoduleConfig,
      callback: undefined,
      idObj: undefined
    } : null;
  }).filter(function (submodule) {
    return submodule !== null;
  }).forEach(function (sm) {
    return submodules.push(sm);
  });
  if (!addedUserIdHook && submodules.length) {
    // priority value 40 will load after consentManagement with a priority of 50
    (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().requestBids.before(requestBidsHook, 40);
    _src_adapterManager_js__WEBPACK_IMPORTED_MODULE_6__["default"].callDataDeletionRequest.before(requestDataDeletion);
    _src_adserver_js__WEBPACK_IMPORTED_MODULE_16__.getPPID.after(function (next) {
      return next(getPPID());
    });
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)("".concat(MODULE_NAME, " - usersync config updated for ").concat(submodules.length, " submodules: "), submodules.map(function (a) {
      return a.submodule.name;
    }));
    addedUserIdHook = true;
  }
}
function requestDataDeletion(next) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logInfo)('UserID: received data deletion request; deleting all stored IDs...');
  submodules.forEach(function (submodule) {
    if (typeof submodule.submodule.onDataDeletionRequest === 'function') {
      try {
        var _submodule$submodule;
        (_submodule$submodule = submodule.submodule).onDataDeletionRequest.apply(_submodule$submodule, [submodule.config, submodule.idObj].concat(args));
      } catch (e) {
        (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.logError)("Error calling onDataDeletionRequest for ID submodule ".concat(submodule.submodule.name), e);
      }
    }
    deleteStoredValue(submodule);
  });
  next.apply(this, args);
}

/**
 * enable submodule in User ID
 * @param {Submodule} submodule
 */
function attachIdSystem(submodule) {
  if (!(0,_src_polyfill_js__WEBPACK_IMPORTED_MODULE_4__.find)(submoduleRegistry, function (i) {
    return i.name === submodule.name;
  })) {
    submoduleRegistry.push(submodule);
    updateSubmodules();
    // TODO: a test case wants this to work even if called after init (the setConfig({userId}))
    // so we trigger a refresh. But is that even possible outside of tests?
    initIdSystem({
      refresh: true,
      submoduleNames: [submodule.name]
    });
  }
}
function normalizePromise(fn) {
  // for public methods that return promises, make sure we return a "normal" one - to avoid
  // exposing confusing stack traces
  return function () {
    return Promise.resolve(fn.apply(this, arguments));
  };
}

/**
 * test browser support for storage config types (local storage or cookie), initializes submodules but consentManagement is required,
 * so a callback is added to fire after the consentManagement module.
 * @param {{getConfig:function}} config
 */
function init(config) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref6$delay = _ref6.delay,
    delay = _ref6$delay === void 0 ? _src_utils_promise_js__WEBPACK_IMPORTED_MODULE_5__.GreedyPromise.timeout : _ref6$delay;
  ppidSource = undefined;
  submodules = [];
  configRegistry = [];
  addedUserIdHook = false;
  initializedSubmodules = [];
  initIdSystem = idSystemInitializer({
    delay: delay
  });
  if (configListener != null) {
    configListener();
  }
  submoduleRegistry = [];

  // listen for config userSyncs to be set
  configListener = config.getConfig('userSync', function (conf) {
    // Note: support for 'usersync' was dropped as part of Prebid.js 4.0
    var userSync = conf.userSync;
    ppidSource = userSync.ppid;
    if (userSync && userSync.userIds) {
      configRegistry = userSync.userIds;
      syncDelay = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(userSync.syncDelay) ? userSync.syncDelay : DEFAULT_SYNC_DELAY;
      auctionDelay = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(userSync.auctionDelay) ? userSync.auctionDelay : NO_AUCTION_DELAY;
      updateSubmodules();
      initIdSystem({
        ready: true
      });
    }
  });

  // exposing getUserIds function in global-name-space so that userIds stored in Prebid can be used by external codes.
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().getUserIds = getUserIds;
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().getUserIdsAsEids = getUserIdsAsEids;
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().getEncryptedEidsForSource = normalizePromise(getEncryptedEidsForSource);
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().registerSignalSources = registerSignalSources;
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().refreshUserIds = normalizePromise(refreshUserIds);
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().getUserIdsAsync = normalizePromise(getUserIdsAsync);
  (0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_11__.getGlobal)().getUserIdsAsEidBySource = getUserIdsAsEidBySource;
}

// init config update listener to start the application
init(_src_config_js__WEBPACK_IMPORTED_MODULE_13__.config);
(0,_src_hook_js__WEBPACK_IMPORTED_MODULE_7__.module)('userId', attachIdSystem);
function setOrtbUserExtEids(ortbRequest, bidderRequest, context) {
  var eids = (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_10__["default"])(context, 'bidRequests.0.userIdAsEids');
  if (eids) {
    (0,_src_utils_js__WEBPACK_IMPORTED_MODULE_17__.dset)(ortbRequest, 'user.ext.eids', eids);
  }
}
(0,_src_pbjsORTB_js__WEBPACK_IMPORTED_MODULE_18__.registerOrtbProcessor)({
  type: _src_pbjsORTB_js__WEBPACK_IMPORTED_MODULE_18__.REQUEST,
  name: 'userExtEids',
  fn: setOrtbUserExtEids
});
window.pbjs.installedModules.push('userId');

/***/ }),

/***/ "./src/adserver.js":
/*!*************************!*\
  !*** ./src/adserver.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPPID": function() { return /* binding */ getPPID; }
/* harmony export */ });
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook.js */ "./src/hook.js");


/**
 * return the GAM PPID, if available (eid for the userID configured with `userSync.ppidSource`)
 */
var getPPID = (0,_hook_js__WEBPACK_IMPORTED_MODULE_0__.hook)('sync', function () {
  return undefined;
});

/***/ }),

/***/ "./src/pbjsORTB.js":
/*!*************************!*\
  !*** ./src/pbjsORTB.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST": function() { return /* binding */ REQUEST; },
/* harmony export */   "registerOrtbProcessor": function() { return /* binding */ registerOrtbProcessor; }
/* harmony export */ });
/* unused harmony exports PROCESSOR_TYPES, PROCESSOR_DIALECTS, IMP, BID_RESPONSE, RESPONSE, DEFAULT, PBS, processorRegistry, getProcessors */
var PROCESSOR_TYPES = ['request', 'imp', 'bidResponse', 'response'];
var PROCESSOR_DIALECTS = ['default', 'pbs'];
var REQUEST = PROCESSOR_TYPES[0],
  IMP = PROCESSOR_TYPES[1],
  BID_RESPONSE = PROCESSOR_TYPES[2],
  RESPONSE = PROCESSOR_TYPES[3];

var DEFAULT = PROCESSOR_DIALECTS[0],
  PBS = PROCESSOR_DIALECTS[1];

var types = new Set(PROCESSOR_TYPES);
function processorRegistry() {
  var processors = {};
  return {
    registerOrtbProcessor: function registerOrtbProcessor(_ref) {
      var type = _ref.type,
        name = _ref.name,
        fn = _ref.fn,
        _ref$priority = _ref.priority,
        priority = _ref$priority === void 0 ? 0 : _ref$priority,
        _ref$dialects = _ref.dialects,
        dialects = _ref$dialects === void 0 ? [DEFAULT] : _ref$dialects;
      if (!types.has(type)) {
        throw new Error("ORTB processor type must be one of: ".concat(PROCESSOR_TYPES.join(', ')));
      }
      dialects.forEach(function (dialect) {
        if (!processors.hasOwnProperty(dialect)) {
          processors[dialect] = {};
        }
        if (!processors[dialect].hasOwnProperty(type)) {
          processors[dialect][type] = {};
        }
        processors[dialect][type][name] = {
          priority: priority,
          fn: fn
        };
      });
    },
    getProcessors: function getProcessors(dialect) {
      return processors[dialect] || {};
    }
  };
}
var _processorRegistry = processorRegistry(),
  registerOrtbProcessor = _processorRegistry.registerOrtbProcessor,
  getProcessors = _processorRegistry.getProcessors;


/***/ }),

/***/ "./src/utils/gpdr.js":
/*!***************************!*\
  !*** ./src/utils/gpdr.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasPurpose1Consent": function() { return /* binding */ hasPurpose1Consent; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/dlv/index.js");


/**
 * Check if GDPR purpose 1 consent was given.
 *
 * @param gdprConsent GDPR consent data
 * @returns {boolean} true if the gdprConsent is null-y; or GDPR does not apply; or if purpose 1 consent was given.
 */
function hasPurpose1Consent(gdprConsent) {
  if (gdprConsent !== null && gdprConsent !== void 0 && gdprConsent.gdprApplies) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"])(gdprConsent, 'vendorData.purpose.consents.1') === true;
  }
  return true;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["fpd"], function() { return __webpack_exec__("./modules/userId/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

})()
 
   pbjs.processQueue();
 
} else {
 try {
  if(window.pbjs.getConfig('debug')) {
    console.warn('Attempted to load a copy of Prebid.js that clashes with the existing \'pbjs\' instance. Load aborted.');
  }
 } catch (e) {}
}

//# sourceMappingURL=prebid.js.map
