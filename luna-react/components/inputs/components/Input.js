'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var id = _ref.id,
      name = _ref.name,
      type = _ref.type,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      minLength = _ref.minLength,
      maxLength = _ref.maxLength,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      autoComplete = _ref.autoComplete,
      autoCapitalize = _ref.autoCapitalize,
      required = _ref.required,
      inputMode = _ref.inputMode,
      pattern = _ref.pattern,
      readOnly = _ref.readOnly,
      spellCheck = _ref.spellCheck,
      tabIndex = _ref.tabIndex,
      className = _ref.className,
      invalid = _ref.invalid,
      rest = _objectWithoutProperties(_ref, ['id', 'name', 'type', 'placeholder', 'disabled', 'onBlur', 'onChange', 'onFocus', 'value', 'defaultValue', 'checked', 'defaultChecked', 'minLength', 'maxLength', 'min', 'max', 'step', 'autoComplete', 'autoCapitalize', 'required', 'inputMode', 'pattern', 'readOnly', 'spellCheck', 'tabIndex', 'className', 'invalid']);

  return _react2.default.createElement('input', _extends({}, rest, {
    id: id || name,
    name: name,
    type: type,

    className: className,

    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,

    value: value,
    defaultValue: defaultValue,
    checked: checked,
    defaultChecked: defaultChecked,

    placeholder: placeholder,

    tabIndex: tabIndex,

    autoComplete: autoComplete,
    autoCapitalize: autoCapitalize,

    inputMode: inputMode,
    spellCheck: spellCheck,

    required: required,
    minLength: minLength,
    maxLength: maxLength,
    min: min,
    max: max,
    step: step,
    pattern: pattern,

    readOnly: readOnly,
    disabled: disabled,

    'aria-disabled': disabled || undefined,
    'aria-required': required === false ? required : undefined,
    'aria-invalid': invalid || undefined
  }));
};

Input.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  minLength: _propTypes2.default.number,
  maxLength: _propTypes2.default.number,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  autoComplete: _propTypes2.default.string,
  autoCapitalize: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  inputMode: _propTypes2.default.string,
  pattern: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(RegExp), _propTypes2.default.string]),
  readOnly: _propTypes2.default.bool,
  spellCheck: _propTypes2.default.oneOf(['default', true, false]),
  tabIndex: _propTypes2.default.number,
  className: _propTypes2.default.string,
  invalid: _propTypes2.default.bool
};

Input.defaultProps = {
  id: undefined,
  type: 'text',
  disabled: false,
  placeholder: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  checked: undefined,
  defaultChecked: undefined,
  minLength: undefined,
  maxLength: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  autoComplete: undefined,
  autoCapitalize: undefined,
  required: undefined,
  inputMode: undefined,
  pattern: undefined,
  readOnly: false,
  spellCheck: undefined,
  tabIndex: undefined,
  className: undefined,
  invalid: undefined
};

Input.displayName = 'Input';

exports.default = Input;