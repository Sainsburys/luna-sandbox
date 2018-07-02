'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cancel = require('../../../icons/Cancel');

var _Cancel2 = _interopRequireDefault(_Cancel);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelButton = function CancelButton(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    _react2.default.createElement(_Cancel2.default, null)
  );
};

CancelButton.displayName = 'CancelButton';

exports.default = CancelButton;