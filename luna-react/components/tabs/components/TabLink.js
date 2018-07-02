'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _hasInnerRef = require('../utils/hasInnerRef');

var _hasInnerRef2 = _interopRequireDefault(_hasInnerRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabLink = function TabLink(_ref) {
  var _extends2;

  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      containerElement = _ref.containerElement,
      onClick = _ref.onClick,
      setRef = _ref.setRef,
      onFocus = _ref.onFocus,
      rest = _objectWithoutProperties(_ref, ['active', 'children', 'className', 'containerElement', 'onClick', 'setRef', 'onFocus']);

  var props = _extends({}, rest, (_extends2 = {
    className: (0, _classnames2.default)('ln-c-tabs__link', className, {
      'is-active': active
    }),
    role: 'tab',
    'aria-selected': active,
    onClick: onClick
  }, _extends2[(0, _hasInnerRef2.default)(containerElement) ? 'innerRef' : 'ref'] = setRef ? function (tabLink) {
    setRef(tabLink);
  } : undefined, _extends2.onFocus = onFocus, _extends2));

  return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, props, children) : _react2.default.createElement(containerElement, props, children);
};

TabLink.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  onClick: _propTypes2.default.func,
  setRef: _propTypes2.default.func,
  onFocus: _propTypes2.default.func
};

TabLink.defaultProps = {
  active: false,
  className: undefined,
  containerElement: 'button',
  onClick: undefined,
  setRef: undefined,
  onFocus: undefined
};

TabLink.displayName = 'TabLink';

exports.default = TabLink;