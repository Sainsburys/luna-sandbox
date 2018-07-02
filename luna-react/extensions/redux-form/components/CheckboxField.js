'use strict';

exports.__esModule = true;
exports.modifyProps = exports.handleBlur = exports.handleChange = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CheckboxField = require('../../../components/form/components/CheckboxField');

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

var _hoc = require('../hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleChange = function handleChange(props) {
  return function (e) {
    var _e$target = e.target,
        checked = _e$target.checked,
        value = _e$target.value;

    var selected = [].concat(props.input.value);

    if (checked) {
      selected.push(value);
    } else {
      selected.splice(selected.indexOf(value), 1);
    }

    props.input.onChange(selected);
  };
};

var handleBlur = function handleBlur() {
  return function () {
    // noop to prevent redux-form resetting value to boolean
  };
};

var modifyProps = function modifyProps(props) {
  return _extends({}, props, {
    options: props.options.map(function (option) {
      return _extends({}, option, {
        checked: props.input.value.includes(option.value)
      });
    }),
    value: props.input.value ? props.input.value : []
  });
};

exports.handleChange = handleChange;
exports.handleBlur = handleBlur;
exports.modifyProps = modifyProps;
exports.default = (0, _hoc2.default)(_CheckboxField2.default, {
  handleChange: handleChange,
  handleBlur: handleBlur,
  modifyProps: modifyProps
});