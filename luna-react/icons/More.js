'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var More = function More(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('circle', {
        transform: 'rotate(90 6 12)',
        cx: '6',
        cy: '12',
        r: '2'
      }),
      _react2.default.createElement('circle', {
        transform: 'rotate(90 12 12)',
        cx: '12',
        cy: '12',
        r: '2'
      }),
      _react2.default.createElement('circle', {
        transform: 'rotate(90 18 12)',
        cx: '18',
        cy: '12',
        r: '2'
      })
    )
  );
};

More.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = More;
exports.default = (0, _hoc2.default)(More);