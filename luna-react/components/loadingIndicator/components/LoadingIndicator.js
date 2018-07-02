'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _flag = require('../../flag');

var _LoadingIcon = require('./LoadingIcon');

var _LoadingIcon2 = _interopRequireDefault(_LoadingIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoadingIndicator = function LoadingIndicator(_ref) {
  var message = _ref.message,
      className = _ref.className,
      inverted = _ref.inverted,
      rest = _objectWithoutProperties(_ref, ['message', 'className', 'inverted']);

  return _react2.default.createElement(
    _flag.Flag.Wrapper,
    _extends({}, rest, { className: className }),
    _react2.default.createElement(
      _flag.Flag.Component,
      null,
      _react2.default.createElement(_LoadingIcon2.default, { inverted: inverted })
    ),
    _react2.default.createElement(
      _flag.Flag.Body,
      null,
      message
    )
  );
};

LoadingIndicator.propTypes = {
  message: _propTypes2.default.string,
  className: _propTypes2.default.string,
  inverted: _propTypes2.default.bool
};

LoadingIndicator.defaultProps = {
  message: 'Please wait, loading...',
  className: undefined,
  inverted: false
};

LoadingIndicator.displayName = 'LoadingIndicator';

exports.default = LoadingIndicator;