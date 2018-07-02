'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Measurement = function Measurement(props) {
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
        d: 'M16.234 2.612L3.007 15.839l4.773 4.773L21.007 7.385l-4.773-4.773zM16.94.49l6.187 6.187a1 1 0 0 1 0 1.414L8.487 22.733a1 1 0 0 1-1.414 0L.885 16.546a1 1 0 0 1 0-1.414L15.527.49a1 1 0 0 1 1.414 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M8.716 8.716l1.767 1.767a1 1 0 1 0 1.415-1.414L10.13 7.302a1 1 0 1 0-1.414 1.414zM5.18 12.251l2.652 2.652a1 1 0 0 0 1.414-1.414l-2.652-2.652a1 1 0 1 0-1.414 1.414zm7.071-7.071l2.652 2.652a1 1 0 0 0 1.414-1.414l-2.652-2.652a1 1 0 1 0-1.414 1.414z'
      })
    )
  );
};

Measurement.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Measurement;
exports.default = (0, _hoc2.default)(Measurement);