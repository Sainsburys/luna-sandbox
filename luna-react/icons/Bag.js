'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bag = function Bag(props) {
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
        d: 'M4.52 18.79c.115.698.718 1.21 1.425 1.21h11.99c.707 0 1.31-.512 1.425-1.21L21.137 8H2.743L4.52 18.79zM1.565 6h20.75a1 1 0 0 1 .987 1.162l-1.969 11.953A3.444 3.444 0 0 1 17.935 22H5.945a3.444 3.444 0 0 1-3.398-2.885L.578 7.162A1 1 0 0 1 1.565 6z'
      }),
      _react2.default.createElement('path', {
        d: 'M17 6A5 5 0 0 0 7 6a1 1 0 1 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0z'
      })
    )
  );
};

Bag.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Bag;
exports.default = (0, _hoc2.default)(Bag);