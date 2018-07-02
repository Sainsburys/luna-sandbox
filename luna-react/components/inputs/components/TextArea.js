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

var TextArea = function TextArea(_ref) {
  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      minLength = _ref.minLength,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      autoCapitalize = _ref.autoCapitalize,
      required = _ref.required,
      readOnly = _ref.readOnly,
      spellCheck = _ref.spellCheck,
      tabIndex = _ref.tabIndex,
      className = _ref.className,
      invalid = _ref.invalid,
      cols = _ref.cols,
      rows = _ref.rows,
      wrap = _ref.wrap,
      rest = _objectWithoutProperties(_ref, ['id', 'name', 'placeholder', 'disabled', 'onBlur', 'onChange', 'onFocus', 'value', 'defaultValue', 'minLength', 'maxLength', 'autoComplete', 'autoCapitalize', 'required', 'readOnly', 'spellCheck', 'tabIndex', 'className', 'invalid', 'cols', 'rows', 'wrap']);

  return _react2.default.createElement('textarea', _extends({}, rest, {
    id: id || name,
    name: name,

    className: (0, _classnames2.default)('ln-c-text-input ln-c-text-input--textarea', className),

    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,

    value: value,
    defaultValue: defaultValue,

    placeholder: placeholder,

    tabIndex: tabIndex,

    autoComplete: autoComplete,
    autoCapitalize: autoCapitalize,

    spellCheck: spellCheck,

    required: required,
    minLength: minLength,
    maxLength: maxLength,

    readOnly: readOnly,
    disabled: disabled,

    'aria-disabled': disabled || undefined,
    'aria-required': required === false ? required : undefined,
    'aria-invalid': invalid || undefined,

    cols: cols,
    rows: rows,
    wrap: wrap
  }));
};

TextArea.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
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
  autoComplete: _propTypes2.default.string,
  autoCapitalize: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  spellCheck: _propTypes2.default.oneOf(['default', true, false]),
  tabIndex: _propTypes2.default.number,
  className: _propTypes2.default.string,
  invalid: _propTypes2.default.bool,
  rows: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  wrap: _propTypes2.default.string
};

TextArea.defaultProps = {
  id: undefined,
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
  autoComplete: undefined,
  autoCapitalize: undefined,
  required: undefined,
  readOnly: false,
  spellCheck: undefined,
  tabIndex: undefined,
  className: undefined,
  invalid: undefined,
  rows: undefined,
  cols: undefined,
  wrap: undefined
};

TextArea.displayName = 'TextArea';

exports.default = TextArea;