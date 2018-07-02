'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('../../card/components/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Fieldset = function Fieldset(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'className']);

  return _react2.default.createElement(
    _Card2.default,
    _extends({}, rest, { className: className }),
    _react2.default.createElement(
      'fieldset',
      null,
      children
    )
  );
};

Fieldset.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

Fieldset.defaultProps = {
  children: undefined,
  className: undefined
};

Fieldset.displayName = 'Fieldset';

exports.default = Fieldset;