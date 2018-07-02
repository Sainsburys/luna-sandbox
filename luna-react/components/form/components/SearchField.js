'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchInput = require('../../inputs/components/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _flag = require('../../flag');

var _SearchButton = require('../../button/components/SearchButton');

var _SearchButton2 = _interopRequireDefault(_SearchButton);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var excludeProps = ['setValue', 'clearValue', 'setRef'];

var SearchField = function SearchField(_ref) {
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
      button = _ref.button,
      element = _ref.element,
      props = _objectWithoutProperties(_ref, ['className', 'required', 'requiredLabel', 'optional', 'optionalLabel', 'validationFirst', 'label', 'hideLabel', 'error', 'warning', 'info', 'labelElement', 'button', 'element']);

  var requiredFlag = (0, _getRequiredFlag2.default)(required, optional);
  var describedBy = (0, _getDescribedByIds2.default)({
    name: props.name, info: info, warning: warning, error: error
  });

  var inputProps = _extends({}, props, {
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined
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
    props.hasButton ? _react2.default.createElement(
      _flag.Flag.Wrapper,
      null,
      _react2.default.createElement(
        _flag.Flag.Body,
        null,
        _react2.default.createElement(_SearchInput2.default, (0, _filterProps2.default)(inputProps, excludeProps))
      ),
      _react2.default.createElement(
        _flag.Flag.Component,
        null,
        button
      )
    ) : _react2.default.createElement(_SearchInput2.default, (0, _filterProps2.default)(inputProps, excludeProps))
  );
};

SearchField.propTypes = _extends({}, _fieldPropTypes2.default, {
  button: _propTypes2.default.node
});

SearchField.defaultProps = {
  button: _react2.default.createElement(_SearchButton2.default, null)
};

SearchField.displayName = 'SearchField';

exports.default = SearchField;