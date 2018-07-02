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

var FieldInfo = function FieldInfo(_ref) {
  var id = _ref.id,
      children = _ref.children,
      error = _ref.error,
      warning = _ref.warning,
      className = _ref.className,
      displayFirst = _ref.displayFirst,
      rest = _objectWithoutProperties(_ref, ['id', 'children', 'error', 'warning', 'className', 'displayFirst']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      id: id,
      className: (0, _classnames2.default)(className, 'ln-c-field-info', {
        'ln-c-field-info--validation-first': displayFirst,
        'ln-c-field-info--error': error || warning,
        'ln-c-field-info--extra': !error && !warning
      }),
      role: error || warning ? 'alert' : undefined
    }),
    children
  );
};

FieldInfo.propTypes = {
  id: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  error: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  displayFirst: _propTypes2.default.bool
};

FieldInfo.defaultProps = {
  id: undefined,
  error: false,
  warning: false,
  className: undefined,
  displayFirst: false
};

FieldInfo.displayName = 'FieldInfo';

exports.default = FieldInfo;