'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      onClick = _ref.onClick,
      type = _ref.type,
      title = _ref.title,
      containerElement = _ref.containerElement,
      buttonRef = _ref.buttonRef,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'disabled', 'fullWidth', 'onClick', 'type', 'title', 'containerElement', 'buttonRef']);

  var props = _extends({}, rest, {
    className: (0, _classnames2.default)('ln-c-button', className, {
      'is-disabled': disabled,
      'ln-c-button--full': fullWidth
    }),
    role: 'button',
    title: title,
    onClick: onClick,
    ref: buttonRef
  });

  if (containerElement === 'button') {
    props = _extends({}, props, {
      disabled: disabled,
      'aria-disabled': disabled || undefined,
      type: type
    });
  }

  return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, props, children) : _react2.default.createElement(containerElement, props, children);
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['button', 'submit']),
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  title: _propTypes2.default.string
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  fullWidth: false,
  type: 'button',
  containerElement: 'button',
  title: undefined
};

Button.displayName = 'Button';

exports.default = Button;