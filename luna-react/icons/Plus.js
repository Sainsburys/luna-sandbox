'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plus = function Plus(props) {
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
        d: 'M11 2v20a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M2 13h20a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2z'
      })
    )
  );
};

Plus.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Plus;
exports.default = (0, _hoc2.default)(Plus);