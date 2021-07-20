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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/controls/content-visibility-rss-feed.js":
/*!*****************************************************!*\
  !*** ./src/controls/content-visibility-rss-feed.js ***!
  \*****************************************************/
/*! exports provided: ContentVisibilityRSSFeedControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVisibilityRSSFeedControl", function() { return ContentVisibilityRSSFeedControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_has_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/has-rules */ "./src/helpers/has-rules.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Load WordPress dependencies.
 *
 * Fill           is used as add-ons register their components into a slot provided by the core Content
 *                Visibility Plugin.
 * 
 * Disabled       allows the add-ons controls to be uncontrollable by the user until the prerequisites
 *                have been set. Prereqs are to enable Content Visibility Rules and to choose shown or
 *                hidden.
 * 
 * __             is the way to internationalize text.
 * 
 * registerPlugin is used to integrate this add-on with cContent Visibility
 * addFilter      registers the key for our data
 */




/**
 * Load this add-on's dependencies.
 *
 * PanelBody       is how all content visibility add-ons are added.
 * PanelRow        fits within PanelBody - is a place to put controls.
 * CheckboxControl is the block editor provided Checkbox input.
 */




/*
* For brevity, this add-ons controls are in this file, but it may be more ideal to load them
* in a separate file and import`ing them here.
*/

function ContentVisibilityRSSFeedPanelBodyControl(_ref) {
  var props = _ref.props;
  // Fetch the data from PHP
  var phpData = BlockVisibilityRSSFeed; // You may want to check your data is sent from PHP to JS correctly.
  // console.log( phpData );
  // What data has been persisted in the db?

  var persistedData = props.attributes.contentVisibilityRules; // This variable is merely an example. It is used to store data.

  var dataKey = 'rss'; // If we have persisted data, and it is set to "1" then the checkbox should be checked
  // otherwise we fall back to whatever isChecked is which will change when someone alters the value of the checkbox

  var thisChecked = persistedData.hasOwnProperty('rssFeed') && persistedData.rssFeed.hasOwnProperty(dataKey) && '1' === props.attributes.contentVisibilityRules.rssFeed[dataKey];
  var hasRulesClass = Object(_helpers_has_rules__WEBPACK_IMPORTED_MODULE_6__["default"])(props, 'rssFeed') ? ' has-active-rules' : '';
  /**
   * As it stands, this checkbox will add data to the database such as this, if the content visibility rules
   * are added to a paragraph block (truncated a little for brevity)
   * 
   *
   <!-- wp:paragraph {"contentVisibility":"shown","contentVisibilityRules":{"contentVisibilityRulesEnabled":true,"rssFeed":{"yourDataKey":"1"}}} -->
      <p contentvisibility="shown">This paragraph has the addon starter checkbox checked.</p>
   <!-- /wp:paragraph -->
   */

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('RSS Feed', 'content-visibility-rss-feed'),
    initialOpen: false,
    className: "content-visibility-control-panel content-visibility-rss-feed-controls" + hasRulesClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    label: "RSS Feed",
    checked: thisChecked,
    onChange: function onChange(isChecked) {
      props.setAttributes({
        contentVisibilityRules: _objectSpread(_objectSpread({}, props.attributes.contentVisibilityRules), {}, {
          rssFeed: _objectSpread(_objectSpread({}, props.attributes.contentVisibilityRules.rssFeed), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, dataKey, isChecked ? '1' : '0'))
        })
      });
    }
  }), props.attributes.contentVisibility && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "rss-feed-help-intro content-visibility-help-text"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Checking this box means that for those using RSS Feed readers this block will be ' + props.attributes.contentVisibility + '.', 'content-visibility-rss-feed'))));
} //end ContentVisibilityRSSFeedPanelBodyControl()

/**
 * The component that is exported and loaded and what is displayed to the user.
 * This should be a PanelBodyControl component which contains your controls.
 * @param {object} data The block data 
 */


function ContentVisibilityRSSFeedControl(data) {
  var _data = _objectSpread({}, data),
      props = _data.props; // Does this block have rules enabled and have we selected shown or hidden?


  var rulesEnabled = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
  var contentVisibility = props.attributes.hasOwnProperty('contentVisibility'); // Both need to be set, if not, the controls for this add-on should be disabled.
  // This is done by wrapping our controls in a <Disabled> component.

  if (!rulesEnabled || !contentVisibility) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ContentVisibilityRSSFeedPanelBodyControl, {
      props: props
    }));
  } // This block has rules enabled and the user has selected 'shown' or 'hidden'. Load our controls.


  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ContentVisibilityRSSFeedPanelBodyControl, {
    props: props
  });
} //end ContentVisibilityRSSFeedControl()

/**
 * Render the <ContentVisibilityRSSFeedControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityRSSFeedControl component.
 */

function ContentVisibilityRSSFeedFill() {
  // Do not change the name attribute of this Fill. It is the name provided by the Content Visibility plugin.
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Fill"], {
    name: "content-visibility-extra-controls"
  }, function (fillProps) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ContentVisibilityRSSFeedControl, {
      props: fillProps
    });
  });
} //end ContentVisibilityRSSFeedFill()
// Add our component to the Slot provided by BlockVisibilityControls
// The integer is an attempt to control the order of display of add-ons in the block sidebar. Higher = lower.


Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])('content-visibility-6-rss-feed-fill', {
  render: ContentVisibilityRSSFeedFill
}); // Register our visibility rule with the main plugin

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__["addFilter"])('contentVisibility.defaultContentVisibilityRules', 'content-visibility-rss-feed/block-visibility-rules', registerContentVisibilityRule);
/**
 * Register our data key so that controls for this add-on have a place to store their data.
 * @param {*} defaultRules 
 */

function registerContentVisibilityRule(defaultRules) {
  defaultRules.rssFeed = {};
  return defaultRules;
} //end registerContentVisibilityRule()

/***/ }),

/***/ "./src/helpers/has-rules.js":
/*!**********************************!*\
  !*** ./src/helpers/has-rules.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Determine if the passed block props contain rules of the passed type.
 *
 * @param {object} props The currently selected block's props.
 * @param {string} type The type of the rules i.e. userAuthenticated or specialPage (or ones from add-ons).
 *
 * @return {bool} true if the passed props contain non-empty rules of the passed type. False otherwise.
 */

function hasRules(props, type) {
  if (!props.attributes.contentVisibilityRules) {
    return false;
  }

  if (!props.attributes.contentVisibilityRules[type]) {
    return false;
  } // Default to false. Passed through a filter later.


  var hasRules = false;

  switch (type) {
    case 'rssFeed':
      if (props.attributes.contentVisibilityRules[type] && props.attributes.contentVisibilityRules[type]['rss'] === "1") {
        hasRules = true;
      }

      break;

    default:
      break;
  }

  return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('content-visibility-has-rules', hasRules, props, type);
} // end hasRules()


/* harmony default export */ __webpack_exports__["default"] = (hasRules);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/editor.css */ "./src/styles/editor.css");
/* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls_content_visibility_rss_feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/content-visibility-rss-feed */ "./src/controls/content-visibility-rss-feed.js");
// Import CSS from the src directory. This will be built into /build/index.css by default.



/***/ }),

/***/ "./src/styles/editor.css":
/*!*******************************!*\
  !*** ./src/styles/editor.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map