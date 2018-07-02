'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trolley = function Trolley(props) {
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
        cx: '18',
        cy: '21',
        r: '2'
      }),
      _react2.default.createElement('circle', {
        cx: '8',
        cy: '21',
        r: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M4.304 6.57l1.907 8.309A1.445 1.445 0 0 0 7.62 16h10.567c.673 0 1.257-.465 1.408-1.12l1.16-5.046a2.667 2.667 0 0 0-2.598-3.264H4.304zm0 0h-1.26a1 1 0 0 1 0-2h15.112a4.667 4.667 0 0 1 4.548 5.713l-1.16 5.045A3.444 3.444 0 0 1 18.185 18H7.62a3.444 3.444 0 0 1-3.357-2.674L1.025 1.224a1 1 0 0 1 1.95-.448l1.33 5.794z',
        fillRule: 'nonzero'
      })
    )
  );
};

Trolley.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Trolley;
exports.default = (0, _hoc2.default)(Trolley);