'use strict';

exports.__esModule = true;
exports.setFieldGroupElement = exports.getClearActionProps = exports.onChangeHandler = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _CancelButton = require('../../button/components/CancelButton');

var _CancelButton2 = _interopRequireDefault(_CancelButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChangeHandler = exports.onChangeHandler = function onChangeHandler(_ref) {
  var onChange = _ref.onChange,
      setValue = _ref.setValue;
  return function (e) {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
  };
};

var getClearActionProps = exports.getClearActionProps = function getClearActionProps(value, clearValue) {
  return value.length > 0 ? { hasAction: true, action: _react2.default.createElement(_CancelButton2.default, { onClick: clearValue, 'aria-label': 'Clear the field' }) } : { hasAction: false, action: undefined };
};

var setFieldGroupElement = exports.setFieldGroupElement = function setFieldGroupElement(_ref2) {
  var setRef = _ref2.setRef;
  return {
    // eslint-disable-next-line react/prop-types,react/display-name
    element: function element(_ref3) {
      var children = _ref3.children,
          className = _ref3.className;
      return _react2.default.createElement(
        'div',
        { ref: setRef, className: className },
        children
      );
    }
  };
};

var withClear = function withClear(WrappedField) {
  /* istanbul ignore next */
  var WithClear = (0, _recompose.compose)((0, _recompose.setDisplayName)('WithClear'), (0, _recompose.withState)('value', 'setValue', function (_ref4) {
    var defaultValue = _ref4.defaultValue,
        _ref4$value = _ref4.value,
        value = _ref4$value === undefined ? '' : _ref4$value;
    return defaultValue || value;
  }), (0, _recompose.withHandlers)(function () {
    var input = void 0;

    return {
      onChange: onChangeHandler,
      clearValue: function clearValue(_ref5) {
        var setValue = _ref5.setValue;
        return function () {
          setValue('');
          if (input) {
            input.focus();
          }
        };
      },
      setRef: function setRef() {
        return function (field) {
          if (field) {
            input = field.querySelector('input');
          }
        };
      }
    };
  }), (0, _recompose.withProps)(function (_ref6) {
    var value = _ref6.value,
        clearValue = _ref6.clearValue;
    return _extends({}, getClearActionProps(value, clearValue));
  }), (0, _recompose.withPropsOnChange)(function () {
    return false;
  }, setFieldGroupElement))(WrappedField);

  return WithClear;
};

exports.default = withClear;