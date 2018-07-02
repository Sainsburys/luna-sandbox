'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ArrowRight = require('../../../icons/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colours = {
  success: 'green',
  info: 'blue',
  warning: 'amber',
  danger: 'red',
  none: 'transparent'
};

var StatusCard = function StatusCard(_ref) {
  var _classnames;

  var className = _ref.className,
      link = _ref.link,
      onClick = _ref.onClick,
      status = _ref.status,
      children = _ref.children,
      containerElement = _ref.containerElement,
      rest = _objectWithoutProperties(_ref, ['className', 'link', 'onClick', 'status', 'children', 'containerElement']);

  var props = _extends({}, rest, {
    className: (0, _classnames3.default)('ln-c-status-card', className, (_classnames = {
      'ln-c-status-card--link': link || onClick
    }, _classnames['ln-c-status-card--' + colours[status]] = colours[status], _classnames)),
    onClick: onClick
  });

  var body = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'ln-c-status-card__content' },
      children
    ),
    (link || onClick) && _react2.default.createElement(
      'div',
      { className: 'ln-c-status-card__chevron' },
      _react2.default.createElement(_ArrowRight2.default, null)
    )
  );

  return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, props, body) : _react2.default.createElement(onClick ? 'button' : containerElement, props, body);
};

StatusCard.propTypes = {
  className: _propTypes2.default.string,
  link: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  status: _propTypes2.default.oneOf(['success', 'info', 'warning', 'danger', 'none']),
  children: _propTypes2.default.node.isRequired,
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

StatusCard.defaultProps = {
  className: undefined,
  link: false,
  onClick: undefined,
  status: undefined,
  containerElement: 'div'
};

StatusCard.displayName = 'StatusCard';

exports.default = StatusCard;