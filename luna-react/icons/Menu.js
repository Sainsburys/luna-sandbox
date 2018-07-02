'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M4 19h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H4a1 1 0 1 0 0 2z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

Menu.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Menu;
exports.default = (0, _hoc2.default)(Menu);