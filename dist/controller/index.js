"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _request = _interopRequireDefault(require("../controller/request"));

var AppController = {
  index: function index(req, res, next) {
    return res.render('index', {
      title: 'ATL Transport'
    });
  },
  contact: function contact(req, res, next) {
    res.render('contact', {
      title: 'ATL Transport'
    });
  },
  about: function about(req, res, next) {
    return res.render('about', {
      title: 'ATL Transport'
    });
  },
  terms: function terms(req, res, next) {
    return res.render('terms', {
      title: 'ATL Transport'
    });
  },
  receipt: function receipt(req, res, next) {
    return res.render('receipt', {
      title: 'ATL Transport'
    });
  },
  entry: function entry(req, res, next) {
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _ref, data;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _request["default"].getAccount(process.env.VOOMSWAY_CLIENT_KEY);

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              // console.log('data :::: ', data);
              res.render('trips', {
                host: process.env.HOST,
                facebook_app_id: process.env.FACEBOOK_APP_ID,
                google_api_key: process.env.GOOGLE_API_KEY,
                google_client_id: process.env.GOOGLE_CLIENT_ID
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  terminals: function terminals(req, res, next) {
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var page, _ref2, _meta, data;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              page = req.query.page || 1;
              _context2.next = 3;
              return _request["default"].getTerminals({
                page: page
              });

            case 3:
              _ref2 = _context2.sent;
              _meta = _ref2._meta;
              data = _ref2.data;

              if (data) {
                res.render('terminals', {
                  title: 'ATL Transport',
                  terminals: data,
                  pagination: _meta.pagination
                });
              } else {
                res.render('terminals', {
                  title: 'ATL Transport',
                  terminals: [],
                  pagination: null
                });
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
exports.AppController = AppController;