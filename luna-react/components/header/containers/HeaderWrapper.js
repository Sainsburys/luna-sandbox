'use strict';

exports.__esModule = true;
exports.toggle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _setHasOverlay = require('../../../utils/setHasOverlay');

var _setHasOverlay2 = _interopRequireDefault(_setHasOverlay);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggle = function toggle(_ref) {
  var onMenuClick = _ref.onMenuClick,
      open = _ref.open;
  return function (forceState) {
    var newState = typeof forceState === 'boolean' ? forceState : !open;

    (0, _setHasOverlay2.default)(newState);
    return onMenuClick(newState);
  };
};

exports.toggle = toggle;
exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(_extends({}, _Header2.default.propTypes, {
  open: _propTypes2.default.bool,
  toggle: _propTypes2.default.func
})), (0, _recompose.setDisplayName)('Header'), (0, _recompose.withState)('open', 'onMenuClick', false), (0, _recompose.withHandlers)({
  toggle: toggle
}))(_Header2.default);