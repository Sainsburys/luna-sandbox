'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../inputs/components/Select');

var _Select2 = _interopRequireDefault(_Select);

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

var SelectField = function SelectField(_ref) {
  var className = _ref.className,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      optional = _ref.optional,
      optionalLabel = _ref.optionalLabel,
      validationFirst = _ref.validationFirst,
      label = _ref.label,
      hideLabel = _ref.hideLabel,
      error = _ref.error,
      warning = _ref.warning,
      info = _ref.info,
      props = _objectWithoutProperties(_ref, ['className', 'required', 'requiredLabel', 'optional', 'optionalLabel', 'validationFirst', 'label', 'hideLabel', 'error', 'warning', 'info']);

  var requiredFlag = (0, _getRequiredFlag2.default)(required, optional);
  var describedBy = (0, _getDescribedByIds2.default)({
    name: props.name, info: info, warning: warning, error: error
  });

  return _react2.default.createElement(
    _FormGroup2.default,
    {
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
    _react2.default.createElement(_Select2.default, _extends({
      required: requiredFlag,
      invalid: error !== undefined ? !!error : undefined,
      'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined
    }, props))
  );
};

SelectField.propTypes = _fieldPropTypes2.default;

SelectField.displayName = 'SelectField';

exports.default = SelectField;