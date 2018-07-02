'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../../button/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputControl = require('./InputControl');

var _InputControl2 = _interopRequireDefault(_InputControl);

var _InputAction = require('./InputAction');

var _InputAction2 = _interopRequireDefault(_InputAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Password = function Password(_ref) {
  var hasToggle = _ref.hasToggle,
      setTextVisibility = _ref.setTextVisibility,
      showText = _ref.showText,
      props = _objectWithoutProperties(_ref, ['hasToggle', 'setTextVisibility', 'showText']);

  return _react2.default.createElement(
    _InputGroup2.default,
    null,
    _react2.default.createElement(
      _InputControl2.default,
      null,
      _react2.default.createElement(_TextInput2.default, _extends({}, props, { type: showText ? 'text' : 'password' }))
    ),
    hasToggle && setTextVisibility && _react2.default.createElement(
      _InputAction2.default,
      null,
      _react2.default.createElement(
        _Button2.default,
        {
          onClick: function onClick() {
            return setTextVisibility(!showText);
          }
        },
        showText ? 'Hide' : 'Show',
        _react2.default.createElement(
          'span',
          { className: 'ln-u-visually-hidden' },
          'password'
        )
      )
    )
  );
};

Password.propTypes = {
  showText: _propTypes2.default.bool,
  hasToggle: _propTypes2.default.bool,
  setTextVisibility: _propTypes2.default.func
};

Password.defaultProps = {
  showText: false,
  hasToggle: false,
  setTextVisibility: undefined
};

Password.displayName = 'Password';

exports.default = Password;