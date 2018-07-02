'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Time = function Time(props) {
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
        d: 'M13 6.5a1 1 0 0 0-2 0v6l4.8 3.6a1 1 0 0 0 1.2-1.6l-4-3v-5z'
      }),
      _react2.default.createElement('path', {
        d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z'
      })
    )
  );
};

Time.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Time;
exports.default = (0, _hoc2.default)(Time);