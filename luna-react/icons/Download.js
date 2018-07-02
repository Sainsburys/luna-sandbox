'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(props) {
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
        d: 'M11 2v14a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M6.707 10.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L12 15.586l-5.293-5.293zM3 22h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z'
      })
    )
  );
};

Download.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Download;
exports.default = (0, _hoc2.default)(Download);