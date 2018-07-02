'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getComponentName = require('../../../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      hasIcon = _ref.hasIcon,
      hasAction = _ref.hasAction,
      hasButton = _ref.hasButton,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'hasIcon', 'hasAction', 'hasButton']);

  var hasIconClass = hasIcon;
  var hasActionClass = hasAction;

  _react2.default.Children.forEach(children, function (child) {
    if (_react2.default.isValidElement(child)) {
      var componentName = (0, _getComponentName2.default)(child);
      if (componentName === 'InputIcon') {
        hasIconClass = true;
      }

      if (componentName === 'InputAction') {
        hasActionClass = true;
      }
    }
  });

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)('ln-c-input-group', hasIconClass && 'ln-c-input-group--has-icon', hasActionClass && 'ln-c-input-group--has-action', hasButton && 'ln-c-input-group--has-button', className)
    }),
    children
  );
};

InputGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  hasIcon: _propTypes2.default.bool,
  hasAction: _propTypes2.default.bool,
  hasButton: _propTypes2.default.bool
};

InputGroup.defaultProps = {
  children: undefined,
  className: undefined,
  hasIcon: false,
  hasAction: false,
  hasButton: false
};

InputGroup.displayName = 'InputGroup';

exports.default = InputGroup;