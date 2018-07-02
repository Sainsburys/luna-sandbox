'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _list = require('../../list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NotificationList = function NotificationList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      open = _ref.open,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'open']);

  return _react2.default.createElement(
    _list.List,
    _extends({}, rest, {
      type: 'bare',
      className: (0, _classnames2.default)(className, 'ln-c-activities', {
        'is-open': open
      })
    }),
    children
  );
};

NotificationList.displayName = 'Notification.List';

NotificationList.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool
};

NotificationList.defaultProps = {
  className: undefined,
  open: false
};

exports.default = NotificationList;