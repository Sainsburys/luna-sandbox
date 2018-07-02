'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormOption = function FormOption(_ref) {
  var label = _ref.label,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['label', 'className', 'fullWidth', 'type']);

  var id = props.value ? props.name + '-' + props.value : props.name;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('ln-c-form-option', 'ln-c-form-option--' + type, fullWidth && 'ln-c-form-option--full', className)
    },
    _react2.default.createElement(_Input2.default, _extends({
      type: type,
      className: 'ln-c-form-option__input'
    }, props, {
      id: id
    })),
    _react2.default.createElement(
      'label',
      { className: 'ln-c-form-option__label', htmlFor: id },
      label
    )
  );
};

FormOption.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['checkbox', 'radio']),
  label: _propTypes2.default.node,
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  value: _propTypes2.default.string
};

FormOption.defaultProps = {
  type: 'radio',
  label: undefined,
  className: undefined,
  fullWidth: false,
  value: undefined
};

FormOption.displayName = 'FormOption';

exports.default = FormOption;