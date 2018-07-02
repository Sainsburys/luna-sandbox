'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormOption = require('../../inputs/components/FormOption');

var _FormOption2 = _interopRequireDefault(_FormOption);

var _List = require('../../list/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('../../list/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _fieldPropTypes = require('../utils/fieldPropTypes');

var _fieldPropTypes2 = _interopRequireDefault(_fieldPropTypes);

var _getRequiredFlag = require('../utils/getRequiredFlag');

var _getRequiredFlag2 = _interopRequireDefault(_getRequiredFlag);

var _getDescribedByIds = require('../utils/getDescribedByIds');

var _getDescribedByIds2 = _interopRequireDefault(_getDescribedByIds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getChecked = function getChecked(_ref) {
  var optionGroupValue = _ref.optionGroupValue,
      optionValue = _ref.optionValue,
      optionChecked = _ref.optionChecked;

  var checked = void 0;
  if (optionGroupValue !== undefined) checked = optionValue === optionGroupValue;
  if (optionChecked !== undefined) checked = optionChecked;
  return checked;
};

var FormOptionFieldInput = function FormOptionFieldInput(_ref2) {
  var option = _ref2.option,
      optionGroupValue = _ref2.optionGroupValue,
      props = _objectWithoutProperties(_ref2, ['option', 'optionGroupValue']);

  return _react2.default.createElement(_FormOption2.default, _extends({}, props, {
    label: option.label,
    value: option.value,
    checked: getChecked({
      optionGroupValue: optionGroupValue,
      optionValue: option.value,
      optionChecked: option.checked
    }),
    defaultChecked: option.defaultChecked
  }));
};

FormOptionFieldInput.propTypes = {
  option: _propTypes2.default.shape({
    label: _propTypes2.default.node,
    value: _propTypes2.default.string,
    checked: _propTypes2.default.bool
  }).isRequired,
  optionGroupValue: _propTypes2.default.string
};

FormOptionFieldInput.defaultProps = {
  optionGroupValue: undefined
};

FormOptionFieldInput.displayName = 'FormOptionFieldInput';

var FormOptionField = function FormOptionField(_ref3) {
  var className = _ref3.className,
      required = _ref3.required,
      requiredLabel = _ref3.requiredLabel,
      optional = _ref3.optional,
      optionalLabel = _ref3.optionalLabel,
      validationFirst = _ref3.validationFirst,
      label = _ref3.label,
      hideLabel = _ref3.hideLabel,
      error = _ref3.error,
      warning = _ref3.warning,
      info = _ref3.info,
      options = _ref3.options,
      optionType = _ref3.optionType,
      props = _objectWithoutProperties(_ref3, ['className', 'required', 'requiredLabel', 'optional', 'optionalLabel', 'validationFirst', 'label', 'hideLabel', 'error', 'warning', 'info', 'options', 'optionType']);

  var requiredFlag = (0, _getRequiredFlag2.default)(required, optional);
  var describedBy = (0, _getDescribedByIds2.default)({
    name: props.name, info: info, warning: warning, error: error
  });
  var optionGroupValue = props.value !== undefined ? props.value.toString() : undefined;

  var optionInputProps = _extends({}, props, {
    type: optionType,
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined
  });

  return _react2.default.createElement(
    _FormGroup2.default,
    {
      element: 'fieldset',
      labelElement: 'legend',
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst
    },
    options.length > 1 ? _react2.default.createElement(
      _List2.default,
      { type: 'bare' },
      options.map(function (option) {
        return _react2.default.createElement(
          _ListItem2.default,
          { type: 'bare', key: props.name + '-' + option.value },
          _react2.default.createElement(FormOptionFieldInput, _extends({}, optionInputProps, {
            option: option,
            optionGroupValue: optionGroupValue
          }))
        );
      })
    ) : _react2.default.createElement(FormOptionFieldInput, _extends({}, optionInputProps, {
      option: options[0],
      optionGroupValue: optionGroupValue
    }))
  );
};

FormOptionField.propTypes = _extends({}, _fieldPropTypes2.default, {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  optionType: _propTypes2.default.oneOf(['radio', 'checkbox'])
});

FormOptionField.defaultProps = {
  optionType: 'radio'
};

FormOptionField.displayName = 'FormOptionField';

exports.default = FormOptionField;