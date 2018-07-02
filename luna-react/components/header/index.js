'use strict';

exports.__esModule = true;

var _HeaderWrapper = require('./containers/HeaderWrapper');

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderWrapper).default;
  }
});

var _HeaderBody = require('./components/HeaderBody');

Object.defineProperty(exports, 'HeaderBody', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderBody).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }