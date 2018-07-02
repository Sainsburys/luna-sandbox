'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowUp = function ArrowUp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 9.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 1 1-1.414 1.414L12 9.414z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

ArrowUp.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = ArrowUp;
exports.default = (0, _hoc2.default)(ArrowUp);