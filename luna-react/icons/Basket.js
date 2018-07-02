'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Basket = function Basket(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'nonzero'
      },
      _react2.default.createElement('path', {
        d: 'M4.505 9a1.444 1.444 0 0 0-1.425 1.68l1.5 9.11c.115.698.718 1.21 1.425 1.21h11.99c.707 0 1.31-.512 1.425-1.21l1.5-9.11A1.444 1.444 0 0 0 19.496 9H4.505zm0-2h14.99a3.444 3.444 0 0 1 3.399 4.004l-1.5 9.111a3.444 3.444 0 0 1-3.4 2.885H6.006a3.444 3.444 0 0 1-3.398-2.885l-1.5-9.11A3.444 3.444 0 0 1 4.504 7z'
      }),
      _react2.default.createElement('path', {
        d: 'M17.831 6.915L15.82 1.262a1 1 0 1 0-1.884.67l2.01 5.653a1 1 0 1 0 1.885-.67zm-9.778.67l2.011-5.653a1 1 0 1 0-1.884-.67L6.169 6.915a1 1 0 0 0 1.884.67z'
      })
    )
  );
};

Basket.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Basket;
exports.default = (0, _hoc2.default)(Basket);