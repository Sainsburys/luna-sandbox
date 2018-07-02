'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Favourites = function Favourites(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 7.402L9.906 5.34c-1.81-1.785-4.756-1.787-6.565-.004a4.472 4.472 0 0 0 .003 6.392l8.21 8.094a.642.642 0 0 0 .888 0l8.21-8.094a4.47 4.47 0 0 0 .003-6.392c-1.806-1.78-4.756-1.78-6.565.004L12 7.402zm.687-3.487c2.588-2.55 6.789-2.551 9.374-.003a6.47 6.47 0 0 1-.004 9.24l-8.21 8.094a2.642 2.642 0 0 1-3.696 0l-8.21-8.094a6.472 6.472 0 0 1-.003-9.24c2.588-2.55 6.785-2.549 9.373.003l.688.678.688-.678z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

Favourites.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Favourites;
exports.default = (0, _hoc2.default)(Favourites);