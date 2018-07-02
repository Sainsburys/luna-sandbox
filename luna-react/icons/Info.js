'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(props) {
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
        d: 'M8 21a1 1 0 0 0 0 2h9c1.333 0 1.333-2 0-2h-4.5l1 1V10a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h3.5v10H8z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('circle', {
        cx: '12',
        cy: '4',
        r: '2'
      })
    )
  );
};

Info.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Info;
exports.default = (0, _hoc2.default)(Info);