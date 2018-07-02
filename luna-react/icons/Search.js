'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(props) {
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
        d: 'M23.207 21.793l-7.5-7.5a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414z'
      }),
      _react2.default.createElement('path', {
        d: 'M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z'
      })
    )
  );
};

Search.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Search;
exports.default = (0, _hoc2.default)(Search);