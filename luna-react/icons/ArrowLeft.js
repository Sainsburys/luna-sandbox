'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowLeft = function ArrowLeft(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M9.414 12l7.293-7.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 1 0 1.414-1.414L9.414 12z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

ArrowLeft.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = ArrowLeft;
exports.default = (0, _hoc2.default)(ArrowLeft);