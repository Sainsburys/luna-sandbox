'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewWindow = function NewWindow(props) {
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
        d: 'M12.707 13.707l8-8a1 1 0 1 0-1.414-1.414l-8 8a1 1 0 0 0 1.414 1.414z'
      }),
      _react2.default.createElement('path', {
        d: 'M15 5h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2zm3 10.667v3.666c0 .92-.746 1.667-1.667 1.667H5.667C4.747 21 4 20.254 4 19.333V8.667C4 7.747 4.746 7 5.667 7h3.666a1 1 0 0 0 0-2H5.667A3.667 3.667 0 0 0 2 8.667v10.666A3.667 3.667 0 0 0 5.667 23h10.666A3.667 3.667 0 0 0 20 19.333v-3.666a1 1 0 1 0-2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M20 4v6a1 1 0 0 0 2 0V4a1 1 0 0 0-2 0z'
      })
    )
  );
};

NewWindow.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = NewWindow;
exports.default = (0, _hoc2.default)(NewWindow);