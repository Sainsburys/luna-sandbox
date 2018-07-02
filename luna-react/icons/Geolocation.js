'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Geolocation = function Geolocation(props) {
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
        d: 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('circle', {
        cx: '12',
        cy: '12',
        r: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M11 20v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zm0-18v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm-7 9H2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm18 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z',
        fillRule: 'nonzero'
      })
    )
  );
};

Geolocation.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Geolocation;
exports.default = (0, _hoc2.default)(Geolocation);