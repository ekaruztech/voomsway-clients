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
      title: 'Efex Transport'
    });
  },
  contact: function () {
    var _contact = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res, next) {
      var _ref, _ref$data, location, contact_info;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _request["default"].getAccount(process.env.VOOMSWAY_API_KEY);

            case 2:
              _ref = _context.sent;
              _ref$data = _ref.data;
              location = _ref$data.location;
              contact_info = _ref$data.contact_info;

              if (location || contact_info) {
                res.render('contact', {
                  title: 'Efex Transport',
                  location: location,
                  contact_info: contact_info
                });
              } else {
                res.render('contact', {
                  title: 'Efex Transport'
                });
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function contact(_x, _x2, _x3) {
      return _contact.apply(this, arguments);
    }

    return contact;
  }(),
  about: function about(req, res, next) {
    return res.render('about', {
      title: 'Efex Transport'
    });
  },
  terms: function terms(req, res, next) {
    return res.render('terms', {
      title: 'Efex Transport'
    });
  },
  receipt: function receipt(req, res, next) {
    return res.render('receipt', {
      title: 'Efex Transport'
    });
  },
  entry: function () {
    var _entry = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res, next) {
      var _ref2, data;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _request["default"].getAccount(process.env.VOOMSWAY_CLIENT_KEY);

            case 2:
              _ref2 = _context2.sent;
              data = _ref2.data;
              console.log('data :::: ', data);
              res.render('trips', {
                title: 'Efex Transport',
                host: process.env.HOST,
                facebook_app_id: process.env.FACEBOOK_APP_ID,
                google_api_key: process.env.GOOGLE_API_KEY,
                google_client_id: process.env.GOOGLE_CLIENT_ID
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function entry(_x4, _x5, _x6) {
      return _entry.apply(this, arguments);
    }

    return entry;
  }(),
  terminals: function () {
    var _terminals = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(req, res, next) {
      var page, _ref3, _meta, data;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = req.query.page || 1;
              _context3.next = 3;
              return _request["default"].getTerminals({
                page: page
              });

            case 3:
              _ref3 = _context3.sent;
              _meta = _ref3._meta;
              data = _ref3.data;

              if (data) {
                res.render('terminals', {
                  title: 'Efex Transport',
                  terminals: data,
                  pagination: _meta.pagination
                });
              } else {
                res.render('terminals', {
                  title: 'Efex Transport',
                  terminals: [],
                  pagination: null
                });
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function terminals(_x7, _x8, _x9) {
      return _terminals.apply(this, arguments);
    }

    return terminals;
  }()
};
exports.AppController = AppController;