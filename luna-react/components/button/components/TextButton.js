'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextButton = function TextButton(props) {
  return _react2.default.createElement(
    _Button2.default,
    _extends({}, props, {
      className: (0, _classnames2.default)('ln-c-button--text-only', props.className)
    }),
    props.children
  );
};

TextButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

TextButton.defaultProps = {
  className: undefined
};

TextButton.displayName = 'TextButton';

exports.default = TextButton;