'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      active = _ref.active,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'active']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      role: 'tabpanel',
      'aria-hidden': !active,
      className: (0, _classnames2.default)(className, !active && 'ln-u-hidden')
    }),
    children
  );
};

TabPanel.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool
};

TabPanel.defaultProps = {
  children: undefined,
  className: undefined,
  active: true
};

TabPanel.displayName = 'TabPanel';

exports.default = TabPanel;