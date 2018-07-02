'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MenuButton = function MenuButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ['className', 'onClick']);

  return _react2.default.createElement(
    'button',
    _extends({}, rest, {
      className: className,
      'aria-hidden': 'true',
      tabIndex: '-1',
      onClick: onClick
    }),
    _react2.default.createElement(
      'span',
      { className: 'ln-navigation-toggle' },
      _react2.default.createElement('span', { className: 'ln-c-navigation-toggle__item' })
    )
  );
};

MenuButton.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

MenuButton.defaultProps = {
  className: undefined
};

MenuButton.displayName = 'MenuButton';

exports.default = MenuButton;