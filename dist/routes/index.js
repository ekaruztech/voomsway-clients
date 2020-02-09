"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controller");

var router = (0, _express.Router)();
router.get('/', _controller.AppController.index);
router.get('/vway/*', _controller.AppController.entry);
router.get('/terminals', _controller.AppController.terminals);
router.get('/about', _controller.AppController.about);
router.get('/contact', _controller.AppController.contact);
router.get('/terms', _controller.AppController.terms);
router.get('/receipt', _controller.AppController.receipt);
var _default = router;
exports["default"] = _default;