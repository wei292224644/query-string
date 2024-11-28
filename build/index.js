'use strict';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return [decodeURIComponent(components.join(''))];
  } catch (_unused) {
    // Do nothing
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;

  // Split the array in 2 parts
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode$1(input) {
  try {
    return decodeURIComponent(input);
  } catch (_unused2) {
    var tokens = input.match(singleMatcher) || [];
    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  var replaceMap = {
    '%FE%FF': "\uFFFD\uFFFD",
    '%FF%FE': "\uFFFD\uFFFD"
  };
  var match = multiMatcher.exec(input);
  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (_unused3) {
      var result = decode$1(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }

  // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
  replaceMap['%C2'] = "\uFFFD";
  var entries = Object.keys(replaceMap);
  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var key = _entries[_i];
    // Replace all decoded components
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }
  return input;
}
function decodeUriComponent(encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + _typeof(encodedURI) + '`');
  }
  try {
    // Try the built in decoder first
    return decodeURIComponent(encodedURI);
  } catch (_unused4) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
}

function includeKeys(object, predicate) {
  var result = {};
  if (Array.isArray(predicate)) {
    var _iterator = _createForOfIteratorHelper(predicate),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var descriptor = Object.getOwnPropertyDescriptor(object, key);
        if (descriptor !== null && descriptor !== void 0 && descriptor.enumerable) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    // `Reflect.ownKeys()` is required to retrieve symbol properties
    var _iterator2 = _createForOfIteratorHelper(Reflect.ownKeys(object)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _key = _step2.value;
        var _descriptor = Object.getOwnPropertyDescriptor(object, _key);
        if (_descriptor.enumerable) {
          var value = object[_key];
          if (predicate(_key, value, object)) {
            Object.defineProperty(result, _key, _descriptor);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}

function splitOnFirst(string, separator) {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }
  if (string === '' || separator === '') {
    return [];
  }
  var separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [];
  }
  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
}

var isNullOrUndefined = function isNullOrUndefined(value) {
  return value === null || value === undefined;
};

// eslint-disable-next-line unicorn/prefer-code-point
var strictUriEncode = function strictUriEncode(string) {
  return encodeURIComponent(string).replaceAll(/[!'()*]/g, function (x) {
    return "%".concat(x.charCodeAt(0).toString(16).toUpperCase());
  });
};
var encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');
function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      {
        return function (key) {
          return function (result, value) {
            var index = result.length;
            if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
              return result;
            }
            if (value === null) {
              return [].concat(_toConsumableArray(result), [[encode(key, options), '[', index, ']'].join('')]);
            }
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
          };
        };
      }
    case 'bracket':
      {
        return function (key) {
          return function (result, value) {
            if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
              return result;
            }
            if (value === null) {
              return [].concat(_toConsumableArray(result), [[encode(key, options), '[]'].join('')]);
            }
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[]=', encode(value, options)].join('')]);
          };
        };
      }
    case 'colon-list-separator':
      {
        return function (key) {
          return function (result, value) {
            if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
              return result;
            }
            if (value === null) {
              return [].concat(_toConsumableArray(result), [[encode(key, options), ':list='].join('')]);
            }
            return [].concat(_toConsumableArray(result), [[encode(key, options), ':list=', encode(value, options)].join('')]);
          };
        };
      }
    case 'comma':
    case 'separator':
    case 'bracket-separator':
      {
        var keyValueSeparator = options.arrayFormat === 'bracket-separator' ? '[]=' : '=';
        return function (key) {
          return function (result, value) {
            if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
              return result;
            }

            // Translate null to an empty string so that it doesn't serialize as 'null'
            value = value === null ? '' : value;
            if (result.length === 0) {
              return [[encode(key, options), keyValueSeparator, encode(value, options)].join('')];
            }
            return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
          };
        };
      }
    default:
      {
        return function (key) {
          return function (result, value) {
            if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
              return result;
            }
            if (value === null) {
              return [].concat(_toConsumableArray(result), [encode(key, options)]);
            }
            return [].concat(_toConsumableArray(result), [[encode(key, options), '=', encode(value, options)].join('')]);
          };
        };
      }
  }
}
function parserForArrayFormat(options) {
  var result;
  switch (options.arrayFormat) {
    case 'index':
      {
        return function (key, value, accumulator) {
          result = /\[(\d*)]$/.exec(key);
          key = key.replace(/\[\d*]$/, '');
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === undefined) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      }
    case 'bracket':
      {
        return function (key, value, accumulator) {
          result = /(\[])$/.exec(key);
          key = key.replace(/\[]$/, '');
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(_toConsumableArray(accumulator[key]), [value]);
        };
      }
    case 'colon-list-separator':
      {
        return function (key, value, accumulator) {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, '');
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(_toConsumableArray(accumulator[key]), [value]);
        };
      }
    case 'comma':
    case 'separator':
      {
        return function (key, value, accumulator) {
          var isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
          var isEncodedArray = typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode(value, options) : value;
          var newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(function (item) {
            return decode(item, options);
          }) : value === null ? value : decode(value, options);
          accumulator[key] = newValue;
        };
      }
    case 'bracket-separator':
      {
        return function (key, value, accumulator) {
          var isArray = /(\[])$/.test(key);
          key = key.replace(/\[]$/, '');
          if (!isArray) {
            accumulator[key] = value ? decode(value, options) : value;
            return;
          }
          var arrayValue = value === null ? [] : decode(value, options).split(options.arrayFormatSeparator);
          if (accumulator[key] === undefined) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(_toConsumableArray(accumulator[key]), _toConsumableArray(arrayValue));
        };
      }
    default:
      {
        return function (key, value, accumulator) {
          if (accumulator[key] === undefined) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(_toConsumableArray([accumulator[key]].flat()), [value]);
        };
      }
  }
}
function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}
function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }
  return value;
}
function decode(value, options) {
  if (options.decode) {
    return decodeUriComponent(value);
  }
  return value;
}
function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }
  if (_typeof(input) === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }
  return input;
}
function removeHash(input) {
  var hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }
  return input;
}
function getHash(url) {
  var hash = '';
  var hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }
  return hash;
}
function parseValue(value, options, type) {
  if (type === 'string' && typeof value === 'string') {
    return value;
  }
  if (typeof type === 'function' && typeof value === 'string') {
    return type(value);
  }
  if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    return value.toLowerCase() === 'true';
  }
  if (type === 'number' && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    return Number(value);
  }
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    return Number(value);
  }
  return value;
}
function extract(input) {
  input = removeHash(input);
  var queryStart = input.indexOf('?');
  if (queryStart === -1) {
    return '';
  }
  return input.slice(queryStart + 1);
}
function parse(query, options) {
  options = _objectSpread2({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false,
    types: Object.create(null)
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  var formatter = parserForArrayFormat(options);

  // Create an object with no prototype
  var returnValue = Object.create(null);
  if (typeof query !== 'string') {
    return returnValue;
  }
  query = query.trim().replace(/^[?#&]/, '');
  if (!query) {
    return returnValue;
  }
  var _iterator = _createForOfIteratorHelper(query.split('&')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var parameter = _step.value;
      if (parameter === '') {
        continue;
      }
      var parameter_ = options.decode ? parameter.replaceAll('+', ' ') : parameter;
      var _splitOnFirst = splitOnFirst(parameter_, '='),
        _splitOnFirst2 = _slicedToArray(_splitOnFirst, 2),
        _key = _splitOnFirst2[0],
        _value = _splitOnFirst2[1];
      if (_key === undefined) {
        _key = parameter_;
      }

      // Missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      _value = _value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? _value : decode(_value, options);
      formatter(decode(_key, options), _value, returnValue);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var _i = 0, _Object$entries = Object.entries(returnValue); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (_typeof(value) === 'object' && value !== null && options.types[key] !== 'string') {
      for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key2 = _Object$entries2$_i[0],
          value2 = _Object$entries2$_i[1];
        var type = options.types[key] ? options.types[key].replace('[]', '') : undefined;
        value[key2] = parseValue(value2, options, type);
      }
    } else if (_typeof(value) === 'object' && value !== null && options.types[key] === 'string') {
      returnValue[key] = Object.values(value).join(options.arrayFormatSeparator);
    } else {
      returnValue[key] = parseValue(value, options, options.types[key]);
    }
  }
  if (options.sort === false) {
    return returnValue;
  }

  // TODO: Remove the use of `reduce`.
  // eslint-disable-next-line unicorn/no-array-reduce
  return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce(function (result, key) {
    var value = returnValue[key];
    result[key] = Boolean(value) && _typeof(value) === 'object' && !Array.isArray(value) ? keysSorter(value) : value;
    return result;
  }, Object.create(null));
}
function stringify(object, options) {
  if (!object) {
    return '';
  }
  options = _objectSpread2({
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ','
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  var shouldFilter = function shouldFilter(key) {
    return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
  };
  var formatter = encoderForArrayFormat(options);
  var objectCopy = {};
  for (var _i3 = 0, _Object$entries3 = Object.entries(object); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
      key = _Object$entries3$_i[0],
      value = _Object$entries3$_i[1];
    if (!shouldFilter(key)) {
      objectCopy[key] = value;
    }
  }
  var keys = Object.keys(objectCopy);
  if (options.sort !== false) {
    keys.sort(options.sort);
  }
  return keys.map(function (key) {
    var value = object[key];
    if (value === undefined) {
      return '';
    }
    if (value === null) {
      return encode(key, options);
    }
    if (Array.isArray(value)) {
      if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
        return encode(key, options) + '[]';
      }
      return value.reduce(formatter(key), []).join('&');
    }
    return encode(key, options) + '=' + encode(value, options);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&');
}
function parseUrl(url, options) {
  var _url_$split$, _url_;
  options = _objectSpread2({
    decode: true
  }, options);
  var _splitOnFirst3 = splitOnFirst(url, '#'),
    _splitOnFirst4 = _slicedToArray(_splitOnFirst3, 2),
    url_ = _splitOnFirst4[0],
    hash = _splitOnFirst4[1];
  if (url_ === undefined) {
    url_ = url;
  }
  return _objectSpread2({
    url: (_url_$split$ = (_url_ = url_) === null || _url_ === void 0 || (_url_ = _url_.split('?')) === null || _url_ === void 0 ? void 0 : _url_[0]) !== null && _url_$split$ !== void 0 ? _url_$split$ : '',
    query: parse(extract(url), options)
  }, options && options.parseFragmentIdentifier && hash ? {
    fragmentIdentifier: decode(hash, options)
  } : {});
}
function stringifyUrl(object, options) {
  options = _objectSpread2(_defineProperty({
    encode: true,
    strict: true
  }, encodeFragmentIdentifier, true), options);
  var url = removeHash(object.url).split('?')[0] || '';
  var queryFromUrl = extract(object.url);
  var query = _objectSpread2(_objectSpread2({}, parse(queryFromUrl, {
    sort: false
  })), object.query);
  var queryString = stringify(query, options);
  queryString && (queryString = "?".concat(queryString));
  var hash = getHash(object.url);
  if (typeof object.fragmentIdentifier === 'string') {
    var urlObjectForFragmentEncode = new URL(url);
    urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
    hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : "#".concat(object.fragmentIdentifier);
  }
  return "".concat(url).concat(queryString).concat(hash);
}
function pick(input, filter, options) {
  options = _objectSpread2(_defineProperty({
    parseFragmentIdentifier: true
  }, encodeFragmentIdentifier, false), options);
  var _parseUrl = parseUrl(input, options),
    url = _parseUrl.url,
    query = _parseUrl.query,
    fragmentIdentifier = _parseUrl.fragmentIdentifier;
  return stringifyUrl({
    url: url,
    query: includeKeys(query, filter),
    fragmentIdentifier: fragmentIdentifier
  }, options);
}
function exclude(input, filter, options) {
  var exclusionFilter = Array.isArray(filter) ? function (key) {
    return !filter.includes(key);
  } : function (key, value) {
    return !filter(key, value);
  };
  return pick(input, exclusionFilter, options);
}

var base = /*#__PURE__*/Object.freeze({
  __proto__: null,
  exclude: exclude,
  extract: extract,
  parse: parse,
  parseUrl: parseUrl,
  pick: pick,
  stringify: stringify,
  stringifyUrl: stringifyUrl
});

exports.queryString = base;
