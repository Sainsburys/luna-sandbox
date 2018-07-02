'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AwardWinning = function AwardWinning(props) {
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
        d: 'M17.048 10V4.014c0-.005-.47-.01-1.41-.014H7.016C7.01 4 7.005 6 7 10c-.052 3.462 2.336 6 5.024 6 2.573 0 5.026-2.479 5.024-6zm-5.024 8C8.098 18 4.933 14.47 5 10l.001-5.986C5.001 2.902 5.903 2 7.015 2h10.019c1.112 0 2.014.902 2.014 2.014V10c.002 4.63-3.174 8-7.024 8z'
      }),
      _react2.default.createElement('path', {
        d: 'M4.843 4C2.708 4 1 5.803 1 8s1.708 4 3.843 4a3.71 3.71 0 0 0 1.583-.354 1 1 0 0 0-.852-1.81 1.707 1.707 0 0 1-.731.164C3.837 10 3 9.116 3 8s.837-2 1.843-2a1 1 0 1 0 0-2zm12.717 7.623a3.668 3.668 0 0 0 1.62.377C21.304 12 23 10.196 23 8c0-2.196-1.696-4-3.82-4a1 1 0 1 0 0 2c.99 0 1.82.882 1.82 2 0 1.118-.83 2-1.82 2-.259 0-.509-.059-.74-.172-.495-.244-.197.676-.44 1.172-.243.496-.936.38-.44.623zM13 22v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M9 23h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z'
      })
    )
  );
};

AwardWinning.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = AwardWinning;
exports.default = (0, _hoc2.default)(AwardWinning);