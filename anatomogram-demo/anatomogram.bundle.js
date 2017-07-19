var anatomogram =
webpackJsonp_name_([0],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AnatomogramContainer = __webpack_require__(193);

var _AnatomogramContainer2 = _interopRequireDefault(_AnatomogramContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AnatomogramContainer2.default;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _urijs = __webpack_require__(34);

var _urijs2 = _interopRequireDefault(_urijs);

var _Switcher = __webpack_require__(196);

var _Switcher2 = _interopRequireDefault(_Switcher);

var _Anatomogram = __webpack_require__(202);

var _Anatomogram2 = _interopRequireDefault(_Anatomogram);

var _svgs = __webpack_require__(96);

var _svgs2 = _interopRequireDefault(_svgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnatomogramContainer = function (_React$Component) {
  _inherits(AnatomogramContainer, _React$Component);

  function AnatomogramContainer(props) {
    _classCallCheck(this, AnatomogramContainer);

    var _this = _possibleConstructorReturn(this, (AnatomogramContainer.__proto__ || Object.getPrototypeOf(AnatomogramContainer)).call(this, props));

    _this.state = {
      selectedAnatomogramType: _svgs2.default[_this.props.species][0] || ''
    };

    _this._switchAnatomogramType = _this._switchAnatomogramType.bind(_this);
    return _this;
  }

  _createClass(AnatomogramContainer, [{
    key: '_switchAnatomogramType',
    value: function _switchAnatomogramType(anatomogramType) {
      this.setState({
        selectedAnatomogramType: anatomogramType
      });
    }

    // Not strictly necessary but it makes it work with the demo and switch species

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.species !== nextProps.species) {
        this.setState({
          selectedAnatomogramType: _svgs2.default[nextProps.species][0] || ''
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var svgFilename = this.props.species + this.state.selectedAnatomogramType + '.svg';
      var urlToResources = (0, _urijs2.default)(this.props.pathToResources, this.props.atlasUrl).toString();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Switcher2.default, { urlToResources: urlToResources,
          anatomogramTypes: _svgs2.default[this.props.species],
          selectedType: this.state.selectedAnatomogramType,
          onClick: this._switchAnatomogramType,
          style: { float: 'left' } }),
        _react2.default.createElement(_Anatomogram2.default, { urlToResources: urlToResources,
          filename: svgFilename,
          showIds: this.props.showIds,
          highlightIds: this.props.highlightIds,
          selectIds: this.props.selectIds,
          width: this.props.width,
          style: { float: 'left' } })
      );
    }
  }]);

  return AnatomogramContainer;
}(_react2.default.Component);

AnatomogramContainer.propTypes = {
  atlasUrl: _propTypes2.default.string.isRequired,
  pathToResources: _propTypes2.default.string.isRequired,
  species: _propTypes2.default.string.isRequired,
  showIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  highlightIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  selectIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  width: _propTypes2.default.number
};

AnatomogramContainer.defaultProps = {
  width: 500
};

exports.default = AnatomogramContainer;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _urijs = __webpack_require__(34);

var _urijs2 = _interopRequireDefault(_urijs);

__webpack_require__(197);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolveUrlToIcon = function resolveUrlToIcon(urlToResources, selectedType, anatomogramType) {
  return (0, _urijs2.default)('img/' + (selectedType === anatomogramType ? '' : 'un') + 'selected' + anatomogramType + '.png', urlToResources).toString();
};

var Switcher = function Switcher(props) {
  return _react2.default.createElement(
    'div',
    { style: props.style },
    props.anatomogramTypes.map(function (anatomogramType) {
      return _react2.default.createElement('img', { key: anatomogramType,
        className: 'gxa-selection-icon',
        onClick: function onClick() {
          props.onClick(anatomogramType);
        },
        src: resolveUrlToIcon(props.urlToResources, props.selectedType, anatomogramType) });
    })
  );
};

Switcher.propTypes = {
  anatomogramTypes: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  selectedType: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  urlToResources: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
};

exports.default = Switcher;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(200)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./Switcher.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./Switcher.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(199)(undefined);
// imports


// module
exports.push([module.i, ".gxa-selection-icon {\n  display: block;\n  position: relative;\n  padding: 0;\n  line-height: normal;\n  margin-right: .1em;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  overflow: visible;\n  border: 1px solid #ccc;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n}\n.gxa-selection-icon:hover {\n  border: 1px solid #fbcb09;\n  background: #fdf5ce 50% 50% repeat-x;\n  font-weight: bold;\n  color: #c77405;\n}\n.jquery-ui-like-button {\n  display: block;\n  position: relative;\n  padding: 0;\n  line-height: normal;\n  margin-right: .1em;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  overflow: visible;\n}\n.rounded-corners {\n  border: 1px solid #ccc;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.right-dimensions {\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(201);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 201:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSvg = __webpack_require__(203);

var _reactSvg2 = _interopRequireDefault(_reactSvg);

var _urijs = __webpack_require__(34);

var _urijs2 = _interopRequireDefault(_urijs);

var _svgsMetadata = __webpack_require__(95);

var _svgsMetadata2 = _interopRequireDefault(_svgsMetadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Anatomogram = function (_React$Component) {
  _inherits(Anatomogram, _React$Component);

  function Anatomogram(props) {
    _classCallCheck(this, Anatomogram);

    var _this = _possibleConstructorReturn(this, (Anatomogram.__proto__ || Object.getPrototypeOf(Anatomogram)).call(this, props));

    _this._attachListeners = _this._attachListeners.bind(_this);
    _this._getSvgElementById = _this._getSvgElementById.bind(_this);
    _this._getEfoLayerGroup = _this._getEfoLayerGroup.bind(_this);
    return _this;
  }

  _createClass(Anatomogram, [{
    key: '_paintIds',
    value: function _paintIds(ids, colour, opacity) {
      var _this2 = this;

      ids.forEach(function (id) {
        var e = _this2._getSvgElementById(id);

        // We might be showing an ID which is not part of the displayed anatomogram (e.g. heart in brain)
        if (e) {
          e.style.fill = colour;
          e.style.opacity = opacity;
        }
      });
    }
  }, {
    key: '_attachMouseOverMouseOutListeners',
    value: function _attachMouseOverMouseOutListeners(ids, mouseOverColour, mouseOverOpacity) {
      var _this3 = this;

      ids.forEach(function (id) {
        var e = _this3._getSvgElementById(id);

        if (e) {
          e.addEventListener('mouseover', function () {
            e.style.fill = mouseOverColour;
            e.style.opacity = mouseOverOpacity;
          });

          var originalColour = e.style.fill;
          var originalOpacity = e.style.opacity;
          e.addEventListener('mouseout', function () {
            e.style.fill = originalColour;
            e.style.opacity = originalOpacity;
          });
        }
      });
    }
  }, {
    key: '_getSvgElementById',
    value: function _getSvgElementById(id) {
      var efoLayerGroup = this._getEfoLayerGroup();

      if (efoLayerGroup) {
        for (var i = 0; i < efoLayerGroup.children.length; i++) {
          if (efoLayerGroup.children[i].id === id) {
            if (efoLayerGroup.children[i].attributes['xlink:href']) {
              return this._getSvgElementById(efoLayerGroup.children[i].attributes['xlink:href'].value.substring(1));
            } else {
              return efoLayerGroup.children[i];
            }
          }
        }
      }

      return undefined;
    }
  }, {
    key: '_getEfoLayerGroup',
    value: function _getEfoLayerGroup() {
      var svgGroups = _reactDom2.default.findDOMNode(this.svgRef).getElementsByTagName('g');
      for (var i = 0; i < svgGroups.length; i++) {
        if (svgGroups[i].id === 'LAYER_EFO') {
          return svgGroups[i];
        }
      }

      return undefined;
    }
  }, {
    key: '_attachListeners',
    value: function _attachListeners() {
      var _props = this.props,
          showIds = _props.showIds,
          showColour = _props.showColour,
          showOpacity = _props.showOpacity,
          highlightIds = _props.highlightIds,
          highlightColour = _props.highlightColour,
          highlightOpacity = _props.highlightOpacity,
          selectIds = _props.selectIds,
          selectColour = _props.selectColour,
          selectOpacity = _props.selectOpacity;


      this._paintIds(showIds, showColour, showOpacity);
      this._paintIds(highlightIds, highlightColour, highlightOpacity);
      this._paintIds(selectIds, selectColour, selectOpacity);

      this._attachMouseOverMouseOutListeners([].concat(_toConsumableArray(showIds), _toConsumableArray(highlightIds)), selectColour, selectOpacity);
      this._attachMouseOverMouseOutListeners(selectIds, selectColour, selectOpacity + 0.1);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._attachListeners();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._attachListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var aspectRatio = _svgsMetadata2.default[this.props.filename].width / _svgsMetadata2.default[this.props.filename].height;
      var _props2 = this.props,
          height = _props2.height,
          width = _props2.width;


      var sizeStyle = {};
      if (height && width) {
        sizeStyle.width = width;
        sizeStyle.height = height;
      } else if (height) {
        sizeStyle.height = height;
        sizeStyle.width = height * aspectRatio;
      } else {
        // if (width)
        sizeStyle.width = width;
        sizeStyle.height = width / aspectRatio;
      }
      return _react2.default.createElement(
        'div',
        { style: this.props.style },
        _react2.default.createElement(_reactSvg2.default, {
          ref: function ref(svgRef) {
            _this4.svgRef = svgRef;
          },
          path: (0, _urijs2.default)('svg/' + this.props.filename, this.props.urlToResources).toString(),

          style: sizeStyle
        })
      );
    }
  }]);

  return Anatomogram;
}(_react2.default.Component);

Anatomogram.propTypes = {
  urlToResources: _propTypes2.default.string.isRequired,
  filename: _propTypes2.default.string.isRequired,
  showIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  highlightIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  selectIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  showColour: _propTypes2.default.string,
  highlightColour: _propTypes2.default.string,
  selectColour: _propTypes2.default.string,
  showOpacity: _propTypes2.default.number,
  highlightOpacity: _propTypes2.default.number,
  selectOpacity: _propTypes2.default.number,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  style: _propTypes2.default.object
};

Anatomogram.defaultProps = {
  showColour: 'grey',
  highlightColour: 'red',
  selectColour: 'purple',
  showOpacity: 0.4,
  highlightOpacity: 0.5,
  selectOpacity: 0.6
};

exports.default = Anatomogram;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = __webpack_require__(204);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// See: https://github.com/webpack/react-starter/issues/37
var isBrowser = typeof window !== 'undefined';
var SVGInjector = isBrowser ? __webpack_require__(208) : undefined;

var ReactSVG = function (_Component) {
  _inherits(ReactSVG, _Component);

  function ReactSVG() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactSVG);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactSVG.__proto__ || Object.getPrototypeOf(ReactSVG)).call.apply(_ref, [this].concat(args))), _this), _this.refCallback = function (container) {
      if (!container) {
        _this.removeSVG();
        return;
      }

      _this.container = container;
      _this.renderSVG();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactSVG, [{
    key: 'renderSVG',
    value: function renderSVG() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var each = props.callback,
          className = props.className,
          evalScripts = props.evalScripts,
          path = props.path,
          style = props.style;


      var div = document.createElement('div');
      div.innerHTML = _server2.default.renderToStaticMarkup(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          className: className,
          'data-src': path,
          style: style
        })
      ));

      var wrapper = this.container.appendChild(div.firstChild);

      SVGInjector(wrapper.firstChild, {
        evalScripts: evalScripts,
        each: each
      });
    }
  }, {
    key: 'removeSVG',
    value: function removeSVG() {
      this.container.removeChild(this.container.firstChild);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.removeSVG();
      this.renderSVG(nextProps);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: this.refCallback });
    }
  }]);

  return ReactSVG;
}(_react.Component);

ReactSVG.defaultProps = {
  callback: function callback() {},
  className: '',
  evalScripts: 'once',
  style: {}
};
ReactSVG.propTypes = {
  callback: _propTypes2.default.func,
  className: _propTypes2.default.string,
  evalScripts: _propTypes2.default.oneOf(['always', 'once', 'never']),
  path: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
};
exports.default = ReactSVG;
module.exports = exports['default'];

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(205);


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDefaultInjection = __webpack_require__(63);
var ReactServerRendering = __webpack_require__(206);
var ReactVersion = __webpack_require__(90);

ReactDefaultInjection.inject();

var ReactDOMServer = {
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  version: ReactVersion
};

module.exports = ReactDOMServer;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(3);

var React = __webpack_require__(14);
var ReactDOMContainerInfo = __webpack_require__(88);
var ReactDefaultBatchingStrategy = __webpack_require__(83);
var ReactInstrumentation = __webpack_require__(8);
var ReactMarkupChecksum = __webpack_require__(89);
var ReactReconciler = __webpack_require__(17);
var ReactServerBatchingStrategy = __webpack_require__(207);
var ReactServerRenderingTransaction = __webpack_require__(82);
var ReactUpdates = __webpack_require__(10);

var emptyObject = __webpack_require__(22);
var instantiateReactComponent = __webpack_require__(48);
var invariant = __webpack_require__(1);

var pendingTransactions = 0;

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToStringImpl(element, makeStaticMarkup) {
  var transaction;
  try {
    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);

    pendingTransactions++;

    return transaction.perform(function () {
      var componentInstance = instantiateReactComponent(element, true);
      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
      );
      if (process.env.NODE_ENV !== 'production') {
        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
      }
      if (!makeStaticMarkup) {
        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
      }
      return markup;
    }, null);
  } finally {
    pendingTransactions--;
    ReactServerRenderingTransaction.release(transaction);
    // Revert to the DOM batching strategy since these two renderers
    // currently share these stateful modules.
    if (!pendingTransactions) {
      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    }
  }
}

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
 */
function renderToString(element) {
  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
  return renderToStringImpl(element, false);
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
  return renderToStringImpl(element, true);
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactServerBatchingStrategy = {
  isBatchingUpdates: false,
  batchedUpdates: function (callback) {
    // Don't do anything here. During the server rendering we don't want to
    // schedule any updates. We will simply ignore them.
  }
};

module.exports = ReactServerBatchingStrategy;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 */

(function (window, document) {

  'use strict';

  // Environment
  var isLocal = window.location.protocol === 'file:';
  var hasSvgSupport = document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');

  function uniqueClasses(list) {
    list = list.split(' ');

    var hash = {};
    var i = list.length;
    var out = [];

    while (i--) {
      if (!hash.hasOwnProperty(list[i])) {
        hash[list[i]] = 1;
        out.unshift(list[i]);
      }
    }

    return out.join(' ');
  }

  /**
   * cache (or polyfill for <= IE8) Array.forEach()
   * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  var forEach = Array.prototype.forEach || function (fn, scope) {
    if (this === void 0 || this === null || typeof fn !== 'function') {
      throw new TypeError();
    }

    /* jshint bitwise: false */
    var i, len = this.length >>> 0;
    /* jshint bitwise: true */

    for (i = 0; i < len; ++i) {
      if (i in this) {
        fn.call(scope, this[i], i, this);
      }
    }
  };

  // SVG Cache
  var svgCache = {};

  var injectCount = 0;
  var injectedElements = [];

  // Request Queue
  var requestQueue = [];

  // Script running status
  var ranScripts = {};

  var cloneSvg = function (sourceSvg) {
    return sourceSvg.cloneNode(true);
  };

  var queueRequest = function (url, callback) {
    requestQueue[url] = requestQueue[url] || [];
    requestQueue[url].push(callback);
  };

  var processRequestQueue = function (url) {
    for (var i = 0, len = requestQueue[url].length; i < len; i++) {
      // Make these calls async so we avoid blocking the page/renderer
      /* jshint loopfunc: true */
      (function (index) {
        setTimeout(function () {
          requestQueue[url][index](cloneSvg(svgCache[url]));
        }, 0);
      })(i);
      /* jshint loopfunc: false */
    }
  };

  var loadSvg = function (url, callback) {
    if (svgCache[url] !== undefined) {
      if (svgCache[url] instanceof SVGSVGElement) {
        // We already have it in cache, so use it
        callback(cloneSvg(svgCache[url]));
      }
      else {
        // We don't have it in cache yet, but we are loading it, so queue this request
        queueRequest(url, callback);
      }
    }
    else {

      if (!window.XMLHttpRequest) {
        callback('Browser does not support XMLHttpRequest');
        return false;
      }

      // Seed the cache to indicate we are loading this URL already
      svgCache[url] = {};
      queueRequest(url, callback);

      var httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = function () {
        // readyState 4 = complete
        if (httpRequest.readyState === 4) {

          // Handle status
          if (httpRequest.status === 404 || httpRequest.responseXML === null) {
            callback('Unable to load SVG file: ' + url);

            if (isLocal) callback('Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.');

            callback();
            return false;
          }

          // 200 success from server, or 0 when using file:// protocol locally
          if (httpRequest.status === 200 || (isLocal && httpRequest.status === 0)) {

            /* globals Document */
            if (httpRequest.responseXML instanceof Document) {
              // Cache it
              svgCache[url] = httpRequest.responseXML.documentElement;
            }
            /* globals -Document */

            // IE9 doesn't create a responseXML Document object from loaded SVG,
            // and throws a "DOM Exception: HIERARCHY_REQUEST_ERR (3)" error when injected.
            //
            // So, we'll just create our own manually via the DOMParser using
            // the the raw XML responseText.
            //
            // :NOTE: IE8 and older doesn't have DOMParser, but they can't do SVG either, so...
            else if (DOMParser && (DOMParser instanceof Function)) {
              var xmlDoc;
              try {
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(httpRequest.responseText, 'text/xml');
              }
              catch (e) {
                xmlDoc = undefined;
              }

              if (!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) {
                callback('Unable to parse SVG file: ' + url);
                return false;
              }
              else {
                // Cache it
                svgCache[url] = xmlDoc.documentElement;
              }
            }

            // We've loaded a new asset, so process any requests waiting for it
            processRequestQueue(url);
          }
          else {
            callback('There was a problem injecting the SVG: ' + httpRequest.status + ' ' + httpRequest.statusText);
            return false;
          }
        }
      };

      httpRequest.open('GET', url);

      // Treat and parse the response as XML, even if the
      // server sends us a different mimetype
      if (httpRequest.overrideMimeType) httpRequest.overrideMimeType('text/xml');

      httpRequest.send();
    }
  };

  // Inject a single element
  var injectElement = function (el, evalScripts, pngFallback, callback) {

    // Grab the src or data-src attribute
    var imgUrl = el.getAttribute('data-src') || el.getAttribute('src');

    // We can only inject SVG
    if (!(/\.svg/i).test(imgUrl)) {
      callback('Attempted to inject a file with a non-svg extension: ' + imgUrl);
      return;
    }

    // If we don't have SVG support try to fall back to a png,
    // either defined per-element via data-fallback or data-png,
    // or globally via the pngFallback directory setting
    if (!hasSvgSupport) {
      var perElementFallback = el.getAttribute('data-fallback') || el.getAttribute('data-png');

      // Per-element specific PNG fallback defined, so use that
      if (perElementFallback) {
        el.setAttribute('src', perElementFallback);
        callback(null);
      }
      // Global PNG fallback directoriy defined, use the same-named PNG
      else if (pngFallback) {
        el.setAttribute('src', pngFallback + '/' + imgUrl.split('/').pop().replace('.svg', '.png'));
        callback(null);
      }
      // um...
      else {
        callback('This browser does not support SVG and no PNG fallback was defined.');
      }

      return;
    }

    // Make sure we aren't already in the process of injecting this element to
    // avoid a race condition if multiple injections for the same element are run.
    // :NOTE: Using indexOf() only _after_ we check for SVG support and bail,
    // so no need for IE8 indexOf() polyfill
    if (injectedElements.indexOf(el) !== -1) {
      return;
    }

    // Remember the request to inject this element, in case other injection
    // calls are also trying to replace this element before we finish
    injectedElements.push(el);

    // Try to avoid loading the orginal image src if possible.
    el.setAttribute('src', '');

    // Load it up
    loadSvg(imgUrl, function (svg) {

      if (typeof svg === 'undefined' || typeof svg === 'string') {
        callback(svg);
        return false;
      }

      var imgId = el.getAttribute('id');
      if (imgId) {
        svg.setAttribute('id', imgId);
      }

      var imgTitle = el.getAttribute('title');
      if (imgTitle) {
        svg.setAttribute('title', imgTitle);
      }

      // Concat the SVG classes + 'injected-svg' + the img classes
      var classMerge = [].concat(svg.getAttribute('class') || [], 'injected-svg', el.getAttribute('class') || []).join(' ');
      svg.setAttribute('class', uniqueClasses(classMerge));

      var imgStyle = el.getAttribute('style');
      if (imgStyle) {
        svg.setAttribute('style', imgStyle);
      }

      // Copy all the data elements to the svg
      var imgData = [].filter.call(el.attributes, function (at) {
        return (/^data-\w[\w\-]*$/).test(at.name);
      });
      forEach.call(imgData, function (dataAttr) {
        if (dataAttr.name && dataAttr.value) {
          svg.setAttribute(dataAttr.name, dataAttr.value);
        }
      });

      // Make sure any internally referenced clipPath ids and their
      // clip-path references are unique.
      //
      // This addresses the issue of having multiple instances of the
      // same SVG on a page and only the first clipPath id is referenced.
      //
      // Browsers often shortcut the SVG Spec and don't use clipPaths
      // contained in parent elements that are hidden, so if you hide the first
      // SVG instance on the page, then all other instances lose their clipping.
      // Reference: https://bugzilla.mozilla.org/show_bug.cgi?id=376027

      // Handle all defs elements that have iri capable attributes as defined by w3c: http://www.w3.org/TR/SVG/linking.html#processingIRI
      // Mapping IRI addressable elements to the properties that can reference them:
      var iriElementsAndProperties = {
        'clipPath': ['clip-path'],
        'color-profile': ['color-profile'],
        'cursor': ['cursor'],
        'filter': ['filter'],
        'linearGradient': ['fill', 'stroke'],
        'marker': ['marker', 'marker-start', 'marker-mid', 'marker-end'],
        'mask': ['mask'],
        'pattern': ['fill', 'stroke'],
        'radialGradient': ['fill', 'stroke']
      };

      var element, elementDefs, properties, currentId, newId;
      Object.keys(iriElementsAndProperties).forEach(function (key) {
        element = key;
        properties = iriElementsAndProperties[key];

        elementDefs = svg.querySelectorAll('defs ' + element + '[id]');
        for (var i = 0, elementsLen = elementDefs.length; i < elementsLen; i++) {
          currentId = elementDefs[i].id;
          newId = currentId + '-' + injectCount;

          // All of the properties that can reference this element type
          var referencingElements;
          forEach.call(properties, function (property) {
            // :NOTE: using a substring match attr selector here to deal with IE "adding extra quotes in url() attrs"
            referencingElements = svg.querySelectorAll('[' + property + '*="' + currentId + '"]');
            for (var j = 0, referencingElementLen = referencingElements.length; j < referencingElementLen; j++) {
              referencingElements[j].setAttribute(property, 'url(#' + newId + ')');
            }
          });

          elementDefs[i].id = newId;
        }
      });

      // Remove any unwanted/invalid namespaces that might have been added by SVG editing tools
      svg.removeAttribute('xmlns:a');

      // Post page load injected SVGs don't automatically have their script
      // elements run, so we'll need to make that happen, if requested

      // Find then prune the scripts
      var scripts = svg.querySelectorAll('script');
      var scriptsToEval = [];
      var script, scriptType;

      for (var k = 0, scriptsLen = scripts.length; k < scriptsLen; k++) {
        scriptType = scripts[k].getAttribute('type');

        // Only process javascript types.
        // SVG defaults to 'application/ecmascript' for unset types
        if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {

          // innerText for IE, textContent for other browsers
          script = scripts[k].innerText || scripts[k].textContent;

          // Stash
          scriptsToEval.push(script);

          // Tidy up and remove the script element since we don't need it anymore
          svg.removeChild(scripts[k]);
        }
      }

      // Run/Eval the scripts if needed
      if (scriptsToEval.length > 0 && (evalScripts === 'always' || (evalScripts === 'once' && !ranScripts[imgUrl]))) {
        for (var l = 0, scriptsToEvalLen = scriptsToEval.length; l < scriptsToEvalLen; l++) {

          // :NOTE: Yup, this is a form of eval, but it is being used to eval code
          // the caller has explictely asked to be loaded, and the code is in a caller
          // defined SVG file... not raw user input.
          //
          // Also, the code is evaluated in a closure and not in the global scope.
          // If you need to put something in global scope, use 'window'
          new Function(scriptsToEval[l])(window); // jshint ignore:line
        }

        // Remember we already ran scripts for this svg
        ranScripts[imgUrl] = true;
      }

      // :WORKAROUND:
      // IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
      // This trick will trigger IE to read and use any existing SVG <style> tags.
      //
      // Reference: https://github.com/iconic/SVGInjector/issues/23
      var styleTags = svg.querySelectorAll('style');
      forEach.call(styleTags, function (styleTag) {
        styleTag.textContent += '';
      });

      // Replace the image with the svg
      el.parentNode.replaceChild(svg, el);

      // Now that we no longer need it, drop references
      // to the original element so it can be GC'd
      delete injectedElements[injectedElements.indexOf(el)];
      el = null;

      // Increment the injected count
      injectCount++;

      callback(svg);
    });
  };

  /**
   * SVGInjector
   *
   * Replace the given elements with their full inline SVG DOM elements.
   *
   * :NOTE: We are using get/setAttribute with SVG because the SVG DOM spec differs from HTML DOM and
   * can return other unexpected object types when trying to directly access svg properties.
   * ex: "className" returns a SVGAnimatedString with the class value found in the "baseVal" property,
   * instead of simple string like with HTML Elements.
   *
   * @param {mixes} Array of or single DOM element
   * @param {object} options
   * @param {function} callback
   * @return {object} Instance of SVGInjector
   */
  var SVGInjector = function (elements, options, done) {

    // Options & defaults
    options = options || {};

    // Should we run the scripts blocks found in the SVG
    // 'always' - Run them every time
    // 'once' - Only run scripts once for each SVG
    // [false|'never'] - Ignore scripts
    var evalScripts = options.evalScripts || 'always';

    // Location of fallback pngs, if desired
    var pngFallback = options.pngFallback || false;

    // Callback to run during each SVG injection, returning the SVG injected
    var eachCallback = options.each;

    // Do the injection...
    if (elements.length !== undefined) {
      var elementsLoaded = 0;
      forEach.call(elements, function (element) {
        injectElement(element, evalScripts, pngFallback, function (svg) {
          if (eachCallback && typeof eachCallback === 'function') eachCallback(svg);
          if (done && elements.length === ++elementsLoaded) done(elementsLoaded);
        });
      });
    }
    else {
      if (elements) {
        injectElement(elements, evalScripts, pngFallback, function (svg) {
          if (eachCallback && typeof eachCallback === 'function') eachCallback(svg);
          if (done) done(1);
          elements = null;
        });
      }
      else {
        if (done) done(0);
      }
    }
  };

  /* global module, exports: true, define */
  // Node.js or CommonJS
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = exports = SVGInjector;
  }
  // AMD support
  else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return SVGInjector;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Otherwise, attach to window as global
  else if (typeof window === 'object') {
    window.SVGInjector = SVGInjector;
  }
  /* global -module, -exports, -define */

}(window, document));


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = {
	"anolis_carolinensis.svg": {
		"width": 129.00903,
		"height": 56.242912,
		"ids": [
			"UBERON_0000955",
			"UBERON_0000948",
			"UBERON_0002113",
			"UBERON_0014892"
		]
	},
	"arabidopsis_thaliana.svg": {
		"width": 91.01709,
		"height": 161.43347,
		"ids": [
			"PO_0025034",
			"PO_0009005",
			"PO_0009046",
			"PO_0009001"
		]
	},
	"bos_taurus.svg": {
		"width": 108.98891,
		"height": 60.884159,
		"ids": [
			"UBERON_0001013",
			"UBERON_0014892",
			"UBERON_0002114",
			"UBERON_0000955",
			"UBERON_0002113",
			"UBERON_0002048",
			"UBERON_0001155",
			"UBERON_0000948",
			"UBERON_0002107",
			"UBERON_0002016",
			"UBERON_0001898"
		]
	},
	"brachypodium_distachyon_flower_parts.svg": {
		"width": 127.44675,
		"height": 158.60735,
		"ids": [
			"PO_0009066",
			"PO_0009030",
			"PO_0009001",
			"PO_0009009",
			"PO_0009089"
		]
	},
	"brachypodium_distachyon_whole_plant.svg": {
		"width": 81.542793,
		"height": 177.13345,
		"ids": [
			"PO_0009010",
			"PO_0009049",
			"PO_0025034"
		]
	},
	"gallus_gallus.svg": {
		"width": 118.43517,
		"height": 137.11394,
		"ids": [
			"UBERON_0000955",
			"UBERON_0000948",
			"UBERON_0002113",
			"UBERON_0002107",
			"UBERON_0001155",
			"UBERON_0002106",
			"UBERON_0002048",
			"UBERON_0014892"
		]
	},
	"homo_sapiens_brain.svg": {
		"width": 143.50569,
		"height": 121.65815,
		"ids": [
			"UBERON_0002148",
			"UBERON_0001894",
			"UBERON_0001896",
			"UBERON_0002771",
			"UBERON_0002702",
			"UBERON_0002021",
			"UBERON_0001905",
			"UBERON_0001897",
			"UBERON_0001898",
			"UBERON_0002421",
			"UBERON_0003027",
			"UBERON_0001876",
			"UBERON_0001870",
			"UBERON_0001871",
			"UBERON_0001882",
			"UBERON_0002285",
			"UBERON_0001873",
			"UBERON_0001872",
			"UBERON_0002038",
			"UBERON_0001874",
			"UBERON_0001875",
			"UBERON_0002360",
			"UBERON_0000451",
			"UBERON_0000956",
			"UBERON_0002037",
			"UBERON_0002363",
			"UBERON_0001954",
			"UBERON_0002245"
		]
	},
	"homo_sapiens_female.svg": {
		"width": 105.43713,
		"height": 194.70567,
		"ids": [
			"UBERON_0001981",
			"UBERON_0000178",
			"UBERON_0001637",
			"CL_0000236",
			"CL_0000084",
			"CL_0000623",
			"CL_0000576",
			"CL_0000233",
			"UBERON_0000966",
			"UBERON_0001831",
			"UBERON_0001013",
			"UBERON_0000948",
			"UBERON_0001135",
			"UBERON_0000955",
			"UBERON_0000310",
			"UBERON_0002369",
			"UBERON_0000029",
			"UBERON_0001134",
			"UBERON_0000992",
			"CL_0000738",
			"UBERON_0001044",
			"UBERON_0003889",
			"UBERON_0000995",
			"UBERON_0000002",
			"UBERON_0001021",
			"UBERON_0006618",
			"UBERON_0012249",
			"UBERON_0002421",
			"UBERON_0000977",
			"UBERON_0002185",
			"UBERON_0003126",
			"UBERON_0002048",
			"UBERON_0002372",
			"UBERON_0000970",
			"UBERON_0001876",
			"UBERON_0001736",
			"UBERON_0001264",
			"UBERON_0002107",
			"UBERON_0001155",
			"UBERON_0002371",
			"UBERON_0001255",
			"UBERON_0000945",
			"UBERON_0002114",
			"UBERON_0001043",
			"UBERON_0002110",
			"UBERON_0002106",
			"UBERON_0002108",
			"UBERON_0001987",
			"UBERON_0001295",
			"UBERON_0000996",
			"UBERON_0000947",
			"UBERON_0000007",
			"UBERON_0007650",
			"UBERON_0001153",
			"UBERON_0001154",
			"UBERON_0002116",
			"UBERON_0002079",
			"UBERON_0002084",
			"UBERON_0002146",
			"UBERON_0002135",
			"UBERON_0001103",
			"UBERON_0002481",
			"UBERON_0007844",
			"UBERON_0000341",
			"UBERON_0001052",
			"UBERON_0001706",
			"UBERON_0001728",
			"UBERON_0002037",
			"UBERON_0002245",
			"UBERON_0000451",
			"UBERON_0001870",
			"UBERON_0000004",
			"UBERON_0001871",
			"UBERON_0000956",
			"UBERON_0002113",
			"UBERON_0001225",
			"UBERON_0001621",
			"UBERON_0002134",
			"UBERON_0002046",
			"UBERON_0000014",
			"UBERON_0000167",
			"UBERON_0001723"
		]
	},
	"homo_sapiens_male.svg": {
		"width": 106.00675,
		"height": 195.36273,
		"ids": [
			"UBERON_0000956",
			"UBERON_0000977",
			"UBERON_0000955",
			"UBERON_0000948",
			"UBERON_0000310",
			"UBERON_0002369",
			"UBERON_0000029",
			"UBERON_0001013",
			"UBERON_0001134",
			"CL_0000738",
			"UBERON_0001871",
			"UBERON_0006618",
			"UBERON_0001621",
			"UBERON_0002421",
			"UBERON_0001000",
			"UBERON_0000998",
			"UBERON_0000473",
			"UBERON_0001301",
			"UBERON_0000970",
			"UBERON_0002372",
			"UBERON_0002048",
			"UBERON_0001876",
			"UBERON_0003126",
			"UBERON_0002185",
			"UBERON_0001021",
			"UBERON_0002037",
			"UBERON_0002245",
			"UBERON_0002113",
			"UBERON_0001225",
			"UBERON_0002046",
			"UBERON_0002371",
			"UBERON_0001870",
			"UBERON_0000451",
			"UBERON_0000007",
			"UBERON_0000947",
			"UBERON_0007650",
			"UBERON_0002084",
			"UBERON_0001153",
			"UBERON_0002116",
			"UBERON_0001052",
			"UBERON_0000004",
			"UBERON_0001723",
			"UBERON_0002079",
			"UBERON_0002146",
			"UBERON_0002135",
			"UBERON_0000989",
			"UBERON_0001728",
			"UBERON_0002240",
			"UBERON_0000341",
			"UBERON_0002134",
			"UBERON_0001103",
			"UBERON_0002107",
			"UBERON_0000945",
			"UBERON_0002106",
			"UBERON_0002114",
			"UBERON_0002110",
			"UBERON_0001264",
			"UBERON_0001155",
			"UBERON_0002108",
			"UBERON_0001154",
			"UBERON_0001135",
			"UBERON_0001255",
			"UBERON_00024818",
			"UBERON_0007844",
			"UBERON_0001043",
			"UBERON_0001044",
			"UBERON_0001831",
			"UBERON_0001736",
			"UBERON_0000014",
			"UBERON_0000178",
			"UBERON_0001981",
			"UBERON_0001637",
			"CL_0000236",
			"CL_0000084",
			"CL_0000623",
			"CL_0000576",
			"CL_0000233",
			"UBERON_0001954",
			"UBERON_0000966",
			"UBERON_0001706",
			"UBERON_0000167",
			"UBERON_0002367"
		]
	},
	"hordeum_vulgare_flower_parts.svg": {
		"width": 138.40977,
		"height": 145.59451,
		"ids": [
			"PO_0009001",
			"PO_0009030",
			"PO_0009073",
			"PO_0009072",
			"PO_0009009",
			"PO_0009066"
		]
	},
	"hordeum_vulgare_whole_plant.svg": {
		"width": 23.929974,
		"height": 45.215504,
		"ids": [
			"PO_0020142",
			"PO_0009005",
			"PO_0009006",
			"PO_0009049",
			"PO_0025034"
		]
	},
	"macaca_mulatta.svg": {
		"width": 33.433189,
		"height": 27.061121,
		"ids": [
			"UBERON_0000955",
			"UBERON_0000451",
			"UBERON_0002037",
			"UBERON_0000948",
			"UBERON_0002113",
			"UBERON_0002107",
			"UBERON_0000473"
		]
	},
	"monodelphis_domestica.svg": {
		"width": 127.79726,
		"height": 59.702709,
		"ids": [
			"UBERON_0000955",
			"UBERON_0002037",
			"UBERON_0000948",
			"UBERON_0002113",
			"UBERON_0002107",
			"UBERON_0000473"
		]
	},
	"mus_musculus_brain.svg": {
		"width": 142.0164,
		"height": 81.638588,
		"ids": [
			"UBERON_0001896",
			"UBERON_0000956",
			"UBERON_0000369",
			"UBERON_0001894",
			"UBERON_0000007",
			"UBERON_0002037",
			"UBERON_0002298",
			"UBERON_0001891",
			"UBERON_0001897",
			"UBERON_0001898",
			"UBERON_0000004",
			"UBERON_0002259",
			"EFO_0000530"
		]
	},
	"mus_musculus_female.svg": {
		"width": 82.377632,
		"height": 156.22629,
		"ids": [
			"UBERON_0000947",
			"UBERON_0001009",
			"UBERON_0001348",
			"UBERON_0001347",
			"UBERON_0000945",
			"UBERON_0002114",
			"UBERON_0001264",
			"UBERON_0002106",
			"UBERON_0002369",
			"UBERON_0002113",
			"UBERON_0001155",
			"UBERON_0002108",
			"UBERON_0001153",
			"UBERON_0002115",
			"UBERON_0002116",
			"UBERON_0001043",
			"UBERON_0002110",
			"UBERON_0000996",
			"UBERON_0000995",
			"UBERON_0001255",
			"UBERON_0001831",
			"UBERON_0001736",
			"UBERON_0001723",
			"UBERON_0001211",
			"UBERON_0000981",
			"UBERON_0002371",
			"UBERON_0007844",
			"UBERON_0001377",
			"UBERON_0014892",
			"UBERON_0002240",
			"UBERON_0001103",
			"UBERON_0002103",
			"UBERON_0001645",
			"UBERON_0000970",
			"UBERON_0001242",
			"UBERON_0000955",
			"UBERON_0000948",
			"UBERON_0002107",
			"UBERON_0001322",
			"UBERON_0001981",
			"UBERON_0000014",
			"UBERON_0001911",
			"UBERON_0003134",
			"UBERON_0000990",
			"UBERON_0000029",
			"UBERON_0001132",
			"UBERON_0002370",
			"UBERON_0002046",
			"UBERON_0002048",
			"UBERON_0000010",
			"UBERON_0003126"
		]
	},
	"mus_musculus_male.svg": {
		"width": 81.136559,
		"height": 156.68759,
		"ids": [
			"UBERON_0000947",
			"UBERON_0001348",
			"UBERON_0001347",
			"UBERON_0000945",
			"UBERON_0002114",
			"UBERON_0001264",
			"UBERON_0002106",
			"UBERON_0002369",
			"UBERON_0002113",
			"UBERON_0001155",
			"UBERON_0002108",
			"UBERON_0001153",
			"UBERON_0002115",
			"UBERON_0002116",
			"UBERON_0001043",
			"UBERON_0002110",
			"UBERON_0001831",
			"UBERON_0001736",
			"UBERON_0000029",
			"UBERON_0000998",
			"UBERON_0000989",
			"UBERON_0000981",
			"UBERON_0002371",
			"UBERON_0007844",
			"UBERON_0001377",
			"UBERON_0002240",
			"UBERON_0002048",
			"UBERON_0001103",
			"UBERON_0003126",
			"UBERON_0002103",
			"UBERON_0001645",
			"UBERON_0001322",
			"UBERON_0001242",
			"UBERON_0002107",
			"UBERON_0000948",
			"UBERON_0000955",
			"UBERON_0014892",
			"UBERON_0001009",
			"UBERON_0001981",
			"UBERON_0000014",
			"UBERON_0001132",
			"UBERON_0001211",
			"UBERON_0002367",
			"UBERON_0001000",
			"UBERON_0001301",
			"UBERON_0000473",
			"UBERON_0001255",
			"UBERON_0002370",
			"UBERON_0000010",
			"UBERON_0000970",
			"UBERON_0001723"
		]
	},
	"oryza_sativa_flower_parts.svg": {
		"width": 120.96103,
		"height": 139.71811,
		"ids": [
			"PO_0009010",
			"PO_0009009",
			"PO_0009089",
			"PO_0009030",
			"PO_0009066"
		]
	},
	"oryza_sativa_whole_plant.svg": {
		"width": 95.575813,
		"height": 151.60188,
		"ids": [
			"PO_0025034",
			"PO_0009005",
			"PO_0009049",
			"PO_0009006",
			"PO_0005052"
		]
	},
	"papio_anubis.svg": {
		"width": 144.21588,
		"height": 122.64954,
		"ids": [
			"UBERON_0000948",
			"UBERON_0002107",
			"UBERON_0000945",
			"UBERON_0001155",
			"UBERON_0002371",
			"UBERON_0002113",
			"UBERON_0002106",
			"UBERON_0014892",
			"UBERON_0002370",
			"UBERON_0000955",
			"UBERON_0001871",
			"UBERON_0001870",
			"UBERON_0000007",
			"UBERON_0002048",
			"UBERON_0000029",
			"UBERON_0002037"
		]
	},
	"rattus_norvegicus.svg": {
		"width": 123.11169,
		"height": 89.384377,
		"ids": [
			"UBERON_0000955",
			"UBERON_0002113",
			"CL_0000336",
			"UBERON_0001388",
			"UBERON_0000948",
			"UBERON_0002107",
			"UBERON_0002048",
			"UBERON_0002106",
			"UBERON_0002370",
			"UBERON_0000995",
			"UBERON_0000473",
			"UBERON_0001155"
		]
	},
	"solanum_lycopersicum_flower_parts.svg": {
		"width": 140.86603,
		"height": 110.25008,
		"ids": [
			"PO_0009084",
			"PO_0009030",
			"PO_0009072",
			"PO_0009073",
			"PO_0009074",
			"PO_0009066",
			"PO_0009010"
		]
	},
	"solanum_lycopersicum_whole_plant.svg": {
		"width": 93.723885,
		"height": 157.46359,
		"ids": [
			"PO_0025034",
			"PO_0000056",
			"PO_0009046",
			"PO_0009001",
			"PO_0009005"
		]
	},
	"solanum_tuberosum.svg": {
		"width": 254.74318,
		"height": 403.44812,
		"ids": []
	},
	"sorghum_bicolor_flower_parts.svg": {
		"width": 136.8109,
		"height": 131.06259,
		"ids": [
			"PO_0009049",
			"PO_0009051",
			"PO_0009001",
			"PO_0009009",
			"PO_0009089",
			"PO_0009066",
			"PO_0009030"
		]
	},
	"sorghum_bicolor_whole_plant.svg": {
		"width": 122.55083,
		"height": 159.40355,
		"ids": [
			"PO_0009006",
			"PO_0006079",
			"PO_0009047",
			"PO_0000230",
			"PO_0009049",
			"PO_0025034",
			"PO_0009005"
		]
	},
	"tetraodon_nigroviridis.svg": {
		"width": 122.26315,
		"height": 47.05262,
		"ids": [
			"UBERON_0000955",
			"UBERON_0000948",
			"UBERON_0002113",
			"UBERON_0014892"
		]
	},
	"triticum_aestivum_flower_parts.svg": {
		"width": 132.27861,
		"height": 154.28635,
		"ids": [
			"PO_0020033",
			"PO_0020031",
			"PO_0009089",
			"PO_0009085",
			"PO_0009086",
			"PO_0009084",
			"PO_0009009",
			"PO_0009001",
			"PO_0009088",
			"PO_0009030",
			"PO_0009066"
		]
	},
	"triticum_aestivum_whole_plant.svg": {
		"width": 78.069733,
		"height": 158.28831,
		"ids": [
			"PO_0009047",
			"PO_0009005",
			"PO_0009049",
			"PO_0025034"
		]
	},
	"xenopus_tropicalis.svg": {
		"width": 122.72871,
		"height": 107.09201,
		"ids": [
			"UBERON_0000955",
			"UBERON_0002113",
			"UBERON_0014892",
			"UBERON_0000948",
			"UBERON_0002107"
		]
	},
	"zea_mays_flower_parts.svg": {
		"width": 140.97224,
		"height": 156.4857,
		"ids": [
			"PO_0009001",
			"PO_0020033",
			"PO_0020031",
			"PO_0020136",
			"PO_0025597",
			"PO_0009066",
			"PO_0009009",
			"PO_0009089",
			"PO_0009084"
		]
	},
	"zea_mays_whole_plant.svg": {
		"width": 81.500832,
		"height": 155.09863,
		"ids": [
			"PO_0020126",
			"PO_0020136",
			"PO_0020142",
			"PO_0020127",
			"PO_0009005",
			"PO_0009074",
			"PO_0025034"
		]
	}
};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = {
	"anolis_carolinensis": [],
	"arabidopsis_thaliana": [],
	"bos_taurus": [],
	"brachypodium_distachyon": [
		"_flower_parts",
		"_whole_plant"
	],
	"gallus_gallus": [],
	"homo_sapiens": [
		"_brain",
		"_female",
		"_male"
	],
	"hordeum_vulgare": [
		"_flower_parts",
		"_whole_plant"
	],
	"macaca_mulatta": [],
	"monodelphis_domestica": [],
	"mus_musculus": [
		"_brain",
		"_female",
		"_male"
	],
	"oryza_sativa": [
		"_flower_parts",
		"_whole_plant"
	],
	"papio_anubis": [],
	"rattus_norvegicus": [],
	"solanum_lycopersicum": [
		"_flower_parts",
		"_whole_plant"
	],
	"solanum_tuberosum": [],
	"sorghum_bicolor": [
		"_flower_parts",
		"_whole_plant"
	],
	"tetraodon_nigroviridis": [],
	"triticum_aestivum": [
		"_flower_parts",
		"_whole_plant"
	],
	"xenopus_tropicalis": [],
	"zea_mays": [
		"_flower_parts",
		"_whole_plant"
	]
};

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__(192);

var _index2 = _interopRequireDefault(_index);

var _svgs = __webpack_require__(96);

var _svgs2 = _interopRequireDefault(_svgs);

var _svgsMetadata = __webpack_require__(95);

var _svgsMetadata2 = _interopRequireDefault(_svgsMetadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onlyUnique = function onlyUnique(e, i, arr) {
  return arr.indexOf(e) === i;
};

var AnatomogramDemo = function (_React$Component) {
  _inherits(AnatomogramDemo, _React$Component);

  function AnatomogramDemo(props) {
    _classCallCheck(this, AnatomogramDemo);

    var _this = _possibleConstructorReturn(this, (AnatomogramDemo.__proto__ || Object.getPrototypeOf(AnatomogramDemo)).call(this, props));

    _this.state = {
      selectedSpecies: Object.keys(_svgs2.default)[0],
      showIds: [],
      selectIds: [],
      highlightIds: []
    };

    _this._handleChange = _this._handleChange.bind(_this);

    _this._handleShowCheckboxOnChange = _this._handleShowCheckboxOnChange.bind(_this);
    _this._handleShowAllOnClick = _this._handleShowAllOnClick.bind(_this);
    _this._handleHideAllOnClick = _this._handleHideAllOnClick.bind(_this);

    _this._handleSelectCheckboxOnChange = _this._handleSelectCheckboxOnChange.bind(_this);
    _this._handleSelectAllOnClick = _this._handleSelectAllOnClick.bind(_this);
    _this._handleUnselectAllOnClick = _this._handleUnselectAllOnClick.bind(_this);

    _this._handleCheckboxOnMouseOver = _this._handleCheckboxOnMouseOver.bind(_this);
    return _this;
  }

  _createClass(AnatomogramDemo, [{
    key: '_handleChange',
    value: function _handleChange(event) {
      this.setState({
        selectedSpecies: event.target.value
      });
    }
  }, {
    key: '_handleShowCheckboxOnChange',
    value: function _handleShowCheckboxOnChange(event) {
      var checked = event.target.checked;
      var newShowIds = checked ? this.state.showIds.concat(event.target.value) : this.state.showIds.filter(function (id) {
        return id !== event.target.value;
      });

      this.setState({
        showIds: newShowIds
      });
    }
  }, {
    key: '_handleSelectCheckboxOnChange',
    value: function _handleSelectCheckboxOnChange(event) {
      var checked = event.target.checked;
      var newSelectIds = checked ? this.state.selectIds.concat(event.target.value) : this.state.selectIds.filter(function (id) {
        return id !== event.target.value;
      });

      this.setState({
        selectIds: newSelectIds
      });
    }
  }, {
    key: '_handleShowAllOnClick',
    value: function _handleShowAllOnClick() {
      var _this2 = this;

      var allIds = Object.keys(_svgsMetadata2.default).filter(function (svgFilename) {
        return svgFilename.startsWith(_this2.state.selectedSpecies);
      }).reduce(function (acc, svgFilename) {
        return acc.concat(_svgsMetadata2.default[svgFilename].ids);
      }, []).filter(onlyUnique).sort();

      this.setState({
        showIds: allIds
      });
    }
  }, {
    key: '_handleHideAllOnClick',
    value: function _handleHideAllOnClick() {
      this.setState({
        showIds: []
      });
    }
  }, {
    key: '_handleSelectAllOnClick',
    value: function _handleSelectAllOnClick() {
      var _this3 = this;

      var allIds = Object.keys(_svgsMetadata2.default).filter(function (svgFilename) {
        return svgFilename.startsWith(_this3.state.selectedSpecies);
      }).reduce(function (acc, svgFilename) {
        return acc.concat(_svgsMetadata2.default[svgFilename].ids);
      }, []).filter(onlyUnique).sort();

      this.setState({
        selectIds: allIds
      });
    }
  }, {
    key: '_handleUnselectAllOnClick',
    value: function _handleUnselectAllOnClick() {
      this.setState({
        selectIds: []
      });
    }
  }, {
    key: '_handleCheckboxOnMouseOver',
    value: function _handleCheckboxOnMouseOver(id) {
      this.setState({
        highlightIds: [id]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var allIds = Object.keys(_svgsMetadata2.default).filter(function (svgFilename) {
        return svgFilename.startsWith(_this4.state.selectedSpecies);
      }).reduce(function (acc, svgFilename) {
        return acc.concat(_svgsMetadata2.default[svgFilename].ids);
      }, []).filter(onlyUnique).sort();

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'small-3 small-centered columns' },
            _react2.default.createElement(
              'select',
              { value: this.state.selectedSpecies, onChange: this._handleChange },
              Object.keys(_svgs2.default).map(function (species) {
                return _react2.default.createElement(
                  'option',
                  { key: species },
                  species
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'small-4 columns', id: 'anatomogramContainer' },
            _react2.default.createElement(_index2.default, _extends({}, this.props, {
              width: 300,
              species: this.state.selectedSpecies,
              showIds: this.state.showIds,
              highlightIds: this.state.highlightIds,
              selectIds: this.state.selectIds }))
          ),
          _react2.default.createElement(
            'div',
            { className: 'small-8 columns' },
            _react2.default.createElement(
              'div',
              { className: 'row column' },
              _react2.default.createElement(
                'button',
                { className: 'button margin-right-small', onClick: this._handleShowAllOnClick },
                'Show all'
              ),
              _react2.default.createElement(
                'button',
                { className: 'button', onClick: this._handleHideAllOnClick },
                'Hide all'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row column' },
              _react2.default.createElement(
                'button',
                { className: 'button margin-right-small', onClick: this._handleSelectAllOnClick },
                'Select all'
              ),
              _react2.default.createElement(
                'button',
                { className: 'button', onClick: this._handleUnselectAllOnClick },
                'Unselect all'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row column' },
              _react2.default.createElement(
                'p',
                null,
                'Click on the first checkbox to show the tissue, on the second to select it, hover to higlight'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row column' },
              allIds.map(function (id) {
                return _react2.default.createElement(
                  'div',
                  { key: id, style: { display: 'inline-block' } },
                  _react2.default.createElement('input', { type: 'checkbox',
                    name: 'showIds', value: id,
                    onChange: _this4._handleShowCheckboxOnChange,
                    checked: _this4.state.showIds.includes(id) }),
                  _react2.default.createElement('input', { type: 'checkbox',
                    name: 'selectIds', value: id,
                    onChange: _this4._handleSelectCheckboxOnChange,
                    checked: _this4.state.selectIds.includes(id) }),
                  _react2.default.createElement(
                    'label',
                    { onMouseOver: function onMouseOver() {
                        _this4._handleCheckboxOnMouseOver(id);
                      }, onMouseOut: function onMouseOut() {
                        _this4._handleCheckboxOnMouseOver();
                      } },
                    id
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return AnatomogramDemo;
}(_react2.default.Component);

AnatomogramDemo.propTypes = {
  atlasUrl: _propTypes2.default.string.isRequired,
  pathToResources: _propTypes2.default.string.isRequired
};

var render = function render(options, target) {
  _reactDom2.default.render(_react2.default.createElement(AnatomogramDemo, options), document.getElementById(target));
};

exports.render = render;

/***/ })

},[97]);