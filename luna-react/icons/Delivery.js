'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Delivery = function Delivery(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M21 12.733l-4.169-4.377a1 1 0 0 1 1.449-1.379L23 11.933v2.845A3.222 3.222 0 0 1 19.778 18H4.222A3.222 3.222 0 0 1 1 14.778V5.222A3.222 3.222 0 0 1 4.222 2H12a3.222 3.222 0 0 1 3.222 3.222v7.111a1 1 0 1 1-2 0v-7.11C13.222 4.546 12.675 4 12 4H4.222C3.547 4 3 4.547 3 5.222v9.556C3 15.453 3.547 16 4.222 16h15.556c.675 0 1.222-.547 1.222-1.222v-2.045z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('circle', {
        cx: '18',
        cy: '21',
        r: '2'
      }),
      _react2.default.createElement('circle', {
        cx: '6',
        cy: '21',
        r: '2'
      })
    )
  );
};

Delivery.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Delivery;
exports.default = (0, _hoc2.default)(Delivery);