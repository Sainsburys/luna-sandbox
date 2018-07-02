'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDown = function ArrowDown(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 14.586L4.707 7.293a1 1 0 0 0-1.414 1.414l8 8a1 1 0 0 0 1.414 0l8-8a1 1 0 1 0-1.414-1.414L12 14.586z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

ArrowDown.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = ArrowDown;
exports.default = (0, _hoc2.default)(ArrowDown);