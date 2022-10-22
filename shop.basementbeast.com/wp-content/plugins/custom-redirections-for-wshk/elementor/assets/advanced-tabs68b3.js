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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/advanced-tabs-js.php");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/advanced-tabs-js.php":
/*!**************************************!*\
  !*** ./src/js/view/advanced-tabs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var AdvanceTabHandler = function AdvanceTabHandler($scope, $) {\n  var $currentTab = $scope.find('.wshk-advance-tabs'),\n      $currentTabId = '#' + $currentTab.attr('id').toString();\n  $($currentTabId + ' .wshk-tabs-nav ul li').each(function (index) {\n    if ($(this).hasClass('active-default')) {\n      $($currentTabId + ' .wshk-tabs-nav > ul li').removeClass('active').addClass('inactive');\n      $(this).removeClass('inactive');\n    } else {\n      if (index == 0) {\n        $(this).removeClass('inactive').addClass('active');\n      }\n    }\n  });\n  $($currentTabId + ' .wshk-tabs-content div').each(function (index) {\n    if ($(this).hasClass('active-default')) {\n      $($currentTabId + ' .wshk-tabs-content > div').removeClass('active');\n    } else {\n      if (index == 0) {\n        $(this).removeClass('inactive').addClass('active');\n      }\n    }\n  });\n  $($currentTabId + ' .wshk-tabs-nav ul li').click(function () {\n    var currentTabIndex = $(this).index();\n    var tabsContainer = $(this).closest('.wshk-advance-tabs');\n    var tabsNav = $(tabsContainer).children('.wshk-tabs-nav').children('ul').children('li');\n    var tabsContent = $(tabsContainer).children('.wshk-tabs-content').children('div');\n    $(this).parent('li').addClass('active');\n    $(tabsNav).removeClass('active active-default').addClass('inactive');\n    $(this).addClass('active').removeClass('inactive');\n    $(tabsContent).removeClass('active').addClass('inactive');\n    $(tabsContent).eq(currentTabIndex).addClass('active').removeClass('inactive');\n        $(tabsContent).each(function (index) {\n      $(this).removeClass('active-default');\n    });\n  });\n};\n\njQuery(window).on('elementor/frontend/init', function () {\n  elementorFrontend.hooks.addAction('frontend/element_ready/wshk-adv-tabs.default', AdvanceTabHandler);\n});\n\n//# sourceURL=webpack:///./src/advanced-tabs-js.php?");

/***/ })

/******/ });