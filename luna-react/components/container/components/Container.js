'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Container = function Container(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      fluid = _ref.fluid,
      free = _ref.free,
      size = _ref.size,
      soft = _ref.soft,
      clearfix = _ref.clearfix,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'fluid', 'free', 'size', 'soft', 'clearfix']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames3.default)('ln-o-container', (_classnames = {}, _classnames['ln-o-container--' + size] = size, _classnames['ln-o-container--soft'] = typeof soft === 'boolean' && soft, _classnames['ln-o-container--soft-' + soft] = typeof soft === 'string', _classnames['ln-o-container--fluid'] = fluid, _classnames['ln-o-container--free'] = free, _classnames['ln-o-clearfix'] = clearfix, _classnames), className)
    }),
    children
  );
};

Container.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  soft: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  fluid: _propTypes2.default.bool,
  free: _propTypes2.default.bool,
  clearfix: _propTypes2.default.bool
};

Container.defaultProps = {
  children: undefined,
  className: undefined,
  size: undefined,
  soft: undefined,
  fluid: false,
  free: false,
  clearfix: false
};

Container.displayName = 'Container';

exports.default = Container;