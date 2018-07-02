'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cancel = function Cancel(props) {
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
        d: 'M4.293 5.707L18.435 19.85a1 1 0 0 0 1.414-1.414L5.707 4.293a1 1 0 0 0-1.414 1.414z'
      }),
      _react2.default.createElement('path', {
        d: 'M18.435 4.293L4.293 18.435a1 1 0 0 0 1.414 1.414L19.85 5.707a1 1 0 1 0-1.414-1.414z'
      })
    )
  );
};

Cancel.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Cancel;
exports.default = (0, _hoc2.default)(Cancel);