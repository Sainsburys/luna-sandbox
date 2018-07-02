'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function Notification(props) {
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
        d: 'M20.603 17.202C21.368 17.781 20.96 19 20 19H4c-.963 0-1.37-1.227-.597-1.802.042-.031.158-.136.324-.322.302-.337.61-.771.902-1.314.864-1.604 1.39-3.752 1.39-6.527C6.02 5.704 8.706 3 12.023 3c3.317 0 6.004 2.704 6.004 6.035 0 2.777.518 4.927 1.37 6.533.288.542.59.977.888 1.314.164.185.277.29.318.32zm-2.973-.697c-1.007-1.899-1.603-4.37-1.603-7.47 0-2.23-1.795-4.035-4.004-4.035-2.21 0-4.004 1.805-4.004 4.035 0 3.101-.606 5.575-1.629 7.475a10.31 10.31 0 0 1-.28.49h11.8c-.093-.156-.186-.32-.28-.495z'
      }),
      _react2.default.createElement('path', {
        d: 'M8 19a4 4 0 1 0 8 0 1 1 0 0 0-2 0 2 2 0 1 1-4 0 1 1 0 0 0-2 0zm3-17v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z'
      })
    )
  );
};

Notification.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Notification;
exports.default = (0, _hoc2.default)(Notification);