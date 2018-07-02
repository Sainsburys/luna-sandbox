'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowUpDown = function ArrowUpDown(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12.178 20.946l-6.219-6.293a.98.98 0 0 0-1.398 0 1.008 1.008 0 0 0 0 1.414l6.918 7a.98.98 0 0 0 1.398 0l6.917-7a1.008 1.008 0 0 0 0-1.414.98.98 0 0 0-1.397 0l-6.22 6.293zm0-18.172L5.959 9.067a.98.98 0 0 1-1.398 0 1.008 1.008 0 0 1 0-1.414l6.918-7a.98.98 0 0 1 1.398 0l6.917 7c.386.39.386 1.024 0 1.414a.98.98 0 0 1-1.397 0l-6.22-6.293z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

ArrowUpDown.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = ArrowUpDown;
exports.default = (0, _hoc2.default)(ArrowUpDown);