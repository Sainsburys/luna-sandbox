'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Search = require('../../../icons/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _PrimaryButton = require('./PrimaryButton');

var _PrimaryButton2 = _interopRequireDefault(_PrimaryButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SearchButton = function SearchButton(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      inputAction = _ref.inputAction,
      rest = _objectWithoutProperties(_ref, ['icon', 'text', 'inputAction']);

  var ButtonElement = inputAction ? _Button2.default : _PrimaryButton2.default;

  return _react2.default.createElement(
    ButtonElement,
    _extends({ type: 'submit', className: 'ln-u-hard-ends' }, rest),
    icon,
    _react2.default.createElement(
      'span',
      { className: 'ln-u-visually-hidden' },
      text
    )
  );
};

SearchButton.propTypes = {
  icon: _propTypes2.default.node,
  text: _propTypes2.default.string,
  inputAction: _propTypes2.default.bool
};

SearchButton.defaultProps = {
  icon: _react2.default.createElement(_Search2.default, null),
  text: 'Search',
  inputAction: false
};

SearchButton.displayName = 'SearchButton';

exports.default = SearchButton;