'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scan = function Scan(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M5 9v6a1 1 0 0 0 2 0V9a1 1 0 1 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0zM2 5h3a1 1 0 1 0 0-2H1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5zm20 0h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V5zM2 19h3a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3zm20 0h-3a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v3z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

Scan.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Scan;
exports.default = (0, _hoc2.default)(Scan);