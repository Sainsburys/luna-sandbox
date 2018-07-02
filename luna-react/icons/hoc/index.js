'use strict';

exports.__esModule = true;
exports.addLunaClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = require('recompose');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addLunaClass = function addLunaClass(props) {
  return _extends({}, props, {
    className: (0, _classnames2.default)(props.className, 'ln-c-icon')
  });
};

exports.addLunaClass = addLunaClass;

exports.default = /* istanbul ignore next */function (Component) {
  return (
    /* istanbul ignore next */(0, _recompose.compose)((0, _recompose.setDisplayName)(Component.displayName || Component.name || 'Icon'), (0, _recompose.mapProps)(addLunaClass))(Component)
  );
};