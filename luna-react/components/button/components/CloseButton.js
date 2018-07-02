'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CancelButton = require('./CancelButton');

var _CancelButton2 = _interopRequireDefault(_CancelButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CloseButton = function CloseButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ['className', 'onClick', 'title']);

  return _react2.default.createElement(_CancelButton2.default, _extends({}, rest, {
    className: (0, _classnames2.default)(className, 'ln-c-dismiss'),
    onClick: onClick,
    title: title
  }));
};

CloseButton.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string
};

CloseButton.defaultProps = {
  className: undefined,
  title: 'Close'
};

CloseButton.displayName = 'CloseButton';

exports.default = CloseButton;