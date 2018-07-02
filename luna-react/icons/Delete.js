'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Delete = function Delete(props) {
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
        d: 'M8 11v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0zm6 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M3.062 10.992l-.06 7.498A4.474 4.474 0 0 0 7.439 23h9.086A4.474 4.474 0 0 0 21 18.526l-.035-7.53a1 1 0 0 0-2 .009l.035 7.51A2.476 2.476 0 0 1 16.525 21h-9.05a2.478 2.478 0 0 1-2.474-2.494l.06-7.498a1 1 0 0 0-2-.016zM2 8h20a1 1 0 0 0 0-2H2a1 1 0 1 0 0 2z'
      }),
      _react2.default.createElement('path', {
        d: 'M8 6V5h1v1H8zm0 1a1 1 0 0 1-1-1l.002-2h.128a4.001 4.001 0 0 1 3.872-2.998L13.017 1a4 4 0 0 1 4 4v.075l-.018.944a1 1 0 1 1-2-.038l.018-.944V5a2 2 0 0 0-1.998-2l-2.016.002a2 2 0 0 0-2 1.999v1A1.005 1.005 0 0 1 7.998 7z'
      })
    )
  );
};

Delete.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Delete;
exports.default = (0, _hoc2.default)(Delete);