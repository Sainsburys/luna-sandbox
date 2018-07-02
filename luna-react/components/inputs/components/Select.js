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

var DEFAULT_PLACEHOLDER = 'Please select';

var Select = function Select(_ref) {
  var name = _ref.name,
      options = _ref.options,
      required = _ref.required,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      readOnly = _ref.readOnly,
      tabIndex = _ref.tabIndex,
      invalid = _ref.invalid,
      rest = _objectWithoutProperties(_ref, ['name', 'options', 'required', 'disabled', 'onBlur', 'onChange', 'onFocus', 'value', 'className', 'placeholder', 'defaultValue', 'readOnly', 'tabIndex', 'invalid']);

  return _react2.default.createElement(
    'select',
    _extends({}, rest, {
      id: name,
      name: name,

      className: (0, _classnames2.default)('ln-c-select', className),

      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,

      value: value,
      defaultValue: defaultValue,

      required: required,

      tabIndex: tabIndex,

      disabled: disabled,
      readOnly: readOnly,

      'aria-disabled': disabled || undefined,
      'aria-required': required === false ? required : undefined,
      'aria-invalid': invalid || undefined
    }),
    placeholder && _react2.default.createElement(
      'option',
      { value: '' },
      typeof placeholder === 'string' ? placeholder : DEFAULT_PLACEHOLDER
    ),
    options.map(function (option) {
      return _react2.default.createElement(
        'option',
        { key: name + '-' + option.value, value: option.value },
        option.label
      );
    })
  );
};

Select.propTypes = {
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  disabled: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  defaultValue: _propTypes2.default.string,
  className: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  invalid: _propTypes2.default.bool
};

Select.defaultProps = {
  disabled: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  placeholder: DEFAULT_PLACEHOLDER,
  className: undefined,
  required: undefined,
  readOnly: false,
  tabIndex: undefined,
  invalid: undefined
};

Select.displayName = 'Select';

exports.default = Select;