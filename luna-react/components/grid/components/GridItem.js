'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var GridItem = function GridItem(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      offsetLeft = _ref.offsetLeft,
      offsetRight = _ref.offsetRight,
      element = _ref.element,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'size', 'offsetLeft', 'offsetRight', 'element']);

  var Element = element;
  var sizeClass = (typeof size === 'undefined' ? 'undefined' : _typeof(size)) === 'object' ? Object.keys(size).map(function (breakpoint) {
    return breakpoint !== 'default' ? 'ln-u-' + size[breakpoint] + '@' + breakpoint : 'ln-u-' + size[breakpoint];
  }) : 'ln-u-' + size;

  return _react2.default.createElement(
    Element,
    _extends({}, rest, {
      className: (0, _classnames3.default)(className, 'ln-o-grid__item', sizeClass, (_classnames = {}, _classnames['ln-u-pull-' + offsetLeft] = offsetLeft, _classnames['ln-u-push-' + offsetRight] = offsetRight, _classnames))
    }),
    children
  );
};

GridItem.displayName = 'Grid.Item';

GridItem.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  offsetLeft: _propTypes2.default.string,
  offsetRight: _propTypes2.default.string,
  element: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string])
};

GridItem.defaultProps = {
  className: undefined,
  offsetLeft: undefined,
  offsetRight: undefined,
  element: 'div'
};

exports.default = GridItem;