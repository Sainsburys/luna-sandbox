'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edit = function Edit(props) {
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
        d: 'M5.486 21.57L21.35 5.161l-2.877-2.778L2.6 18.798v2.772h2.886zM.6 18.01L17.034.994a2 2 0 0 1 2.828-.049l2.877 2.778a2 2 0 0 1 .05 2.828L6.355 23.568H.601V18.01z'
      }),
      _react2.default.createElement('path', {
        d: 'M14.586 4l4.95 4.95 1.414-1.414L16 2.586z'
      })
    )
  );
};

Edit.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Edit;
exports.default = (0, _hoc2.default)(Edit);