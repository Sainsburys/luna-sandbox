'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandlinePhone = function LandlinePhone(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M11.485 20.029s-1.933-1.815-4.002-5.399c1.846 3.198 4.002 5.399 4.002 5.399 1.311 1.386 3.406 1.911 5.853.498l2.803-1.618c.562-.325.764-1.03.459-1.56l-1.616-2.798c-.31-.537-1.027-.7-1.593-.374l-3.266 1.885s-.891-.462-2.737-3.66c-1.846-3.197-1.79-4.18-1.79-4.18l3.266-1.885c.566-.326.783-1.03.473-1.567l-1.617-2.8c-.306-.53-1.018-.707-1.58-.383l-2.802 1.62c-2.447 1.412-3.04 3.49-2.495 5.318 0 0 .793 2.907 2.64 6.105-2.07-3.584-2.64-6.105-2.64-6.105',
      strokeWidth: '2',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
};

LandlinePhone.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = LandlinePhone;
exports.default = (0, _hoc2.default)(LandlinePhone);