'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tick = function Tick(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M3.285 15.51l3.505 3.58a2.6 2.6 0 0 0 3.927-.243L20.796 5.606a1 1 0 0 0-1.592-1.212L9.126 17.636a.6.6 0 0 1-.906.056L4.715 14.11a1 1 0 1 0-1.43 1.4z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

Tick.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Tick;
exports.default = (0, _hoc2.default)(Tick);