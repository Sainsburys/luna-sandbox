'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _FieldInfo = require('./FieldInfo');

var _FieldInfo2 = _interopRequireDefault(_FieldInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormGroup = function FormGroup(_ref) {
  var element = _ref.element,
      labelElement = _ref.labelElement,
      name = _ref.name,
      required = _ref.required,
      optional = _ref.optional,
      label = _ref.label,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      children = _ref.children,
      className = _ref.className,
      validationFirst = _ref.validationFirst,
      hideLabel = _ref.hideLabel,
      rest = _objectWithoutProperties(_ref, ['element', 'labelElement', 'name', 'required', 'optional', 'label', 'error', 'warning', 'info', 'children', 'className', 'validationFirst', 'hideLabel']);

  var Element = element;

  var hasError = !!error;
  var hasWarning = !!warning;

  return _react2.default.createElement(
    Element,
    _extends({}, rest, {
      className: (0, _classnames2.default)(className, 'ln-c-form-group', {
        'has-error': hasError,
        'has-warning': hasWarning
      })
    }),
    !!label && _react2.default.createElement(
      _Label2.default,
      {
        element: labelElement,
        htmlFor: name,
        requiredLabel: required,
        optionalLabel: optional,
        hidden: hideLabel
      },
      label
    ),
    !!info && _react2.default.createElement(
      _FieldInfo2.default,
      { id: name + 'Info' },
      info
    ),
    (hasError || hasWarning) && _react2.default.createElement(
      _FieldInfo2.default,
      {
        id: name + 'Validation',
        displayFirst: validationFirst,
        error: hasError,
        warning: hasWarning
      },
      error || warning
    ),
    children
  );
};

FormGroup.propTypes = {
  element: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  labelElement: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  required: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool]),
  optional: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool]),
  label: _propTypes2.default.node,
  hideLabel: _propTypes2.default.bool,
  error: _propTypes2.default.node,
  warning: _propTypes2.default.node,
  info: _propTypes2.default.node,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  validationFirst: _propTypes2.default.bool
};

FormGroup.defaultProps = {
  element: 'div',
  labelElement: undefined,
  required: undefined,
  optional: undefined,
  label: undefined,
  hideLabel: false,
  info: undefined,
  warning: undefined,
  error: undefined,
  className: undefined,
  validationFirst: false
};

FormGroup.displayName = 'FormGroup';

exports.default = FormGroup;