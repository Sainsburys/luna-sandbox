'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Search = require('../../../icons/Search');

var _Search2 = _interopRequireDefault(_Search);

var _SearchButton = require('../../button/components/SearchButton');

var _SearchButton2 = _interopRequireDefault(_SearchButton);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputIcon = require('./InputIcon');

var _InputIcon2 = _interopRequireDefault(_InputIcon);

var _InputControl = require('./InputControl');

var _InputControl2 = _interopRequireDefault(_InputControl);

var _InputAction = require('./InputAction');

var _InputAction2 = _interopRequireDefault(_InputAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
      hasIcon = _ref.hasIcon,
      hasAction = _ref.hasAction,
      hasButton = _ref.hasButton,
      icon = _ref.icon,
      action = _ref.action,
      props = _objectWithoutProperties(_ref, ['className', 'hasIcon', 'hasAction', 'hasButton', 'icon', 'action']);

  return _react2.default.createElement(
    _InputGroup2.default,
    { hasButton: hasButton, className: className },
    hasIcon && _react2.default.createElement(
      _InputIcon2.default,
      null,
      icon
    ),
    _react2.default.createElement(
      _InputControl2.default,
      null,
      _react2.default.createElement(_TextInput2.default, _extends({ type: 'search' }, props))
    ),
    hasAction && _react2.default.createElement(
      _InputAction2.default,
      null,
      action
    )
  );
};

SearchInput.propTypes = {
  className: _propTypes2.default.string,
  icon: _propTypes2.default.node,
  action: _propTypes2.default.node,
  hasButton: _propTypes2.default.bool,
  hasAction: _propTypes2.default.bool,
  hasIcon: _propTypes2.default.bool
};

SearchInput.defaultProps = {
  className: undefined,
  icon: _react2.default.createElement(_Search2.default, null),
  action: _react2.default.createElement(_SearchButton2.default, { inputAction: true }),
  hasButton: false,
  hasAction: false,
  hasIcon: false
};

SearchInput.displayName = 'SearchInput';

exports.default = SearchInput;