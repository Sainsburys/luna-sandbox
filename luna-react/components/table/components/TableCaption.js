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

var TableCaption = function TableCaption(_ref) {
  var children = _ref.children,
      className = _ref.className,
      visuallyHidden = _ref.visuallyHidden,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'visuallyHidden']);

  return _react2.default.createElement(
    'caption',
    _extends({}, rest, {
      className: (0, _classnames2.default)('ln-c-table__caption', className, visuallyHidden && 'ln-u-visually-hidden')
    }),
    children
  );
};

TableCaption.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  visuallyHidden: _propTypes2.default.bool
};

TableCaption.defaultProps = {
  className: undefined,
  visuallyHidden: false
};

TableCaption.displayName = 'TableCaption';

exports.default = TableCaption;