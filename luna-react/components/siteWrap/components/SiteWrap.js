'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _container = require('../../container');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toSize = function toSize(large, squash) {
  if (large) {
    return 'lg';
  } else if (squash) {
    // Note: "squash" is intentionally mapped to default size
    // And is in effect deprecated.
  }
  return undefined;
};

var SiteWrap = function SiteWrap(_ref) {
  var padded = _ref.padded,
      className = _ref.className,
      children = _ref.children,
      large = _ref.large,
      squash = _ref.squash,
      rest = _objectWithoutProperties(_ref, ['padded', 'className', 'children', 'large', 'squash']);

  return _react2.default.createElement(
    _container.Container,
    _extends({}, rest, {
      soft: padded,
      size: toSize(large, squash),
      className: (0, _classnames2.default)(className),
      clearfix: true
    }),
    children
  );
};

SiteWrap.propTypes = {
  padded: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  large: _propTypes2.default.bool,
  squash: _propTypes2.default.bool
};

SiteWrap.defaultProps = {
  padded: false,
  large: false,
  squash: false,
  className: undefined
};

SiteWrap.displayName = 'SiteWrap';

exports.default = SiteWrap;