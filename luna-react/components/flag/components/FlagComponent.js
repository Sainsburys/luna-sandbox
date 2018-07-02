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

var FlagComponent = function FlagComponent(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      alignment = _ref.alignment,
      nowrap = _ref.nowrap,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'alignment', 'nowrap']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames3.default)(className, 'ln-o-flag__component', (_classnames = {}, _classnames['ln-o-flag__component--' + alignment] = alignment, _classnames['ln-o-flag__component--nowrap'] = nowrap, _classnames))
    }),
    children
  );
};

FlagComponent.displayName = 'Flag.Component';

FlagComponent.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  alignment: _propTypes2.default.oneOf(['top', 'bottom']),
  nowrap: _propTypes2.default.bool
};

FlagComponent.defaultProps = {
  className: undefined,
  alignment: undefined,
  nowrap: false
};

exports.default = FlagComponent;