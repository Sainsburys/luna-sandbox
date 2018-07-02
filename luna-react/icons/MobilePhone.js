'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobilePhone = function MobilePhone(props) {
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
        d: 'M7 3.993v16.014c0 .548.446.993.995.993h8.01a1 1 0 0 0 .995-.993V3.993A.995.995 0 0 0 16.005 3h-8.01A1 1 0 0 0 7 3.993zm-2 0A3 3 0 0 1 7.995 1h8.01A2.995 2.995 0 0 1 19 3.993v16.014A3 3 0 0 1 16.005 23h-8.01A2.995 2.995 0 0 1 5 20.007V3.993z'
      }),
      _react2.default.createElement('path', {
        d: 'M5 7h14V5H5zm0 11h14v-2H5z'
      })
    )
  );
};

MobilePhone.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = MobilePhone;
exports.default = (0, _hoc2.default)(MobilePhone);