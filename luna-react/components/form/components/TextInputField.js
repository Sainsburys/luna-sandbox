'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextInput = require('../../inputs/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _fieldPropTypes = require('../utils/fieldPropTypes');

var _fieldPropTypes2 = _interopRequireDefault(_fieldPropTypes);

var _getRequiredFlag = require('../utils/getRequiredFlag');

var _getRequiredFlag2 = _interopRequireDefault(_getRequiredFlag);

var _getDescribedByIds = require('../utils/getDescribedByIds');

var _getDescribedByIds2 = _interopRequireDefault(_getDescribedByIds);

var _InputGroup = require('../../inputs/components/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputIcon = require('../../inputs/components/InputIcon');

var _InputIcon2 = _interopRequireDefault(_InputIcon);

var _InputControl = require('../../inputs/components/InputControl');

var _InputControl2 = _interopRequireDefault(_InputControl);

var _InputAction = require('../../inputs/components/InputAction');

var _InputAction2 = _interopRequireDefault(_InputAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextInputField = function TextInputField(_ref) {
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
      labelElement = _ref.labelElement,
      hasButton = _ref.hasButton,
      icon = _ref.icon,
      action = _ref.action,
      actionFirst = _ref.actionFirst,
      element = _ref.element,
      props = _objectWithoutProperties(_ref, ['className', 'required', 'requiredLabel', 'optional', 'optionalLabel', 'validationFirst', 'label', 'hideLabel', 'error', 'warning', 'info', 'labelElement', 'hasButton', 'icon', 'action', 'actionFirst', 'element']);

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
      validationFirst: validationFirst,
      labelElement: labelElement,
      element: element
    },
    _react2.default.createElement(
      _InputGroup2.default,
      { hasButton: hasButton },
      icon && _react2.default.createElement(
        _InputIcon2.default,
        null,
        icon
      ),
      action && actionFirst && _react2.default.createElement(
        _InputAction2.default,
        null,
        action
      ),
      _react2.default.createElement(
        _InputControl2.default,
        null,
        _react2.default.createElement(_TextInput2.default, _extends({
          required: requiredFlag,
          invalid: error !== undefined ? !!error : undefined,
          'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined
        }, (0, _filterProps2.default)(props, ['setValue', 'clearValue', 'setRef', 'hasAction'])))
      ),
      action && !actionFirst && _react2.default.createElement(
        _InputAction2.default,
        null,
        action
      )
    )
  );
};

TextInputField.propTypes = _extends({}, _fieldPropTypes2.default, {
  icon: _propTypes2.default.node,
  action: _propTypes2.default.node,
  hasButton: _propTypes2.default.bool,
  actionFirst: _propTypes2.default.bool
});

TextInputField.defaultProps = {
  icon: undefined,
  action: undefined,
  hasButton: false,
  actionFirst: false
};

TextInputField.displayName = 'TextInputField';

exports.default = TextInputField;