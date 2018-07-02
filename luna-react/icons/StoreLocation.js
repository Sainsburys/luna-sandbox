'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreLocation = function StoreLocation(props) {
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
        d: 'M13.438 22.824a2.222 2.222 0 0 1-3.132-.256C5.451 16.85 3 12.368 3 9c0-5.288 3.87-9 9-9s9 3.712 9 9c0 3.369-2.451 7.85-7.306 13.568a2.222 2.222 0 0 1-.256.256zM19 9c0-4.164-2.956-7-7-7-4.044 0-7 2.836-7 7 0 2.758 2.261 6.891 6.83 12.274.08.094.22.105.314.026C16.739 15.89 19 11.758 19 9z'
      }),
      _react2.default.createElement('path', {
        d: 'M12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      })
    )
  );
};

StoreLocation.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = StoreLocation;
exports.default = (0, _hoc2.default)(StoreLocation);