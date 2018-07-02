'use strict';

exports.__esModule = true;
exports.handleSubmit = exports.handleChange = exports.toggle = undefined;

var _recompose = require('recompose');

var _Search = require('../components/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggle = function toggle(_ref) {
  var onExpandClick = _ref.onExpandClick,
      open = _ref.open;
  return function () {
    return onExpandClick(!open);
  };
};

var handleChange = function handleChange(_ref2) {
  var onChange = _ref2.onChange,
      changeValue = _ref2.changeValue;
  return function (e) {
    changeValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };
};

var handleSubmit = function handleSubmit(_ref3) {
  var onSubmit = _ref3.onSubmit,
      value = _ref3.value;
  return function (e) {
    onSubmit(value);
    e.preventDefault();
  };
};

exports.toggle = toggle;
exports.handleChange = handleChange;
exports.handleSubmit = handleSubmit;
exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Search'), (0, _recompose.withState)('value', 'changeValue', ''), (0, _recompose.withState)('open', 'onExpandClick', false), (0, _recompose.withHandlers)({
  toggle: toggle,
  handleChange: handleChange,
  handleSubmit: handleSubmit
}))(_Search2.default);