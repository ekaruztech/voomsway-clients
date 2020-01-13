"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

_dotenv["default"].config();

var defaultOptions = {
  baseURL: process.env.VOOMSWAY_API_HOST,
  headers: {}
};

var instance = _axios["default"].create(defaultOptions);

instance.interceptors.request.use(function (config) {
  config.headers['x-api-key'] = process.env.VOOMSWAY_API_KEY;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error request', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
});
/**
 * Get User by id
 * @param {Object} config The request object
 * @return {Object} res The response object
 */

var createRequest = function createRequest(config) {
  return instance(config);
};

var APPRequest = {
  /**
   * Get Terminals of a company
   * @param {Object} query a company
   * @return {Object} res The response object
   */
  getTerminals: function () {
    var _getTerminals = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(query) {
      var config;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                method: 'get',
                url: '/terminals',
                params: _objectSpread({
                  population: JSON.stringify(['destinations'])
                }, query)
              };
              return _context.abrupt("return", createRequest(config).then(function (response) {
                return response;
              }, function (err) {
                console.log('err >>>>>>>> ', err);
                return {};
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getTerminals(_x) {
      return _getTerminals.apply(this, arguments);
    }

    return getTerminals;
  }(),
  getAccount: function () {
    var _getAccount = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(apiKey) {
      var config;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              config = {
                method: 'get',
                url: "/api/account/".concat(apiKey)
              };
              return _context2.abrupt("return", createRequest(config).then(function (response) {
                return response;
              }, function (err) {
                return {};
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getAccount(_x2) {
      return _getAccount.apply(this, arguments);
    }

    return getAccount;
  }()
};
var _default = APPRequest;
exports["default"] = _default;