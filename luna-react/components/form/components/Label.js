'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LabelInfo = require('./LabelInfo');

var _LabelInfo2 = _interopRequireDefault(_LabelInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_REQUIRED_INDICATOR = '';
var DEFAULT_OPTIONAL_INDICATOR = '(optional)';

var Label = function Label(_ref) {
  var element = _ref.element,
      htmlFor = _ref.htmlFor,
      requiredLabel = _ref.requiredLabel,
      optionalLabel = _ref.optionalLabel,
      children = _ref.children,
      className = _ref.className,
      hidden = _ref.hidden,
      rest = _objectWithoutProperties(_ref, ['element', 'htmlFor', 'requiredLabel', 'optionalLabel', 'children', 'className', 'hidden']);

  var Element = element;
  var indicator = void 0;

  if (optionalLabel !== undefined) {
    indicator = optionalLabel === true ? DEFAULT_OPTIONAL_INDICATOR : optionalLabel;
  }

  if (requiredLabel !== undefined) {
    indicator = requiredLabel === true ? DEFAULT_REQUIRED_INDICATOR : requiredLabel;
  }

  return _react2.default.createElement(
    Element,
    _extends({}, rest, {
      htmlFor: htmlFor,
      className: (0, _classnames2.default)(className, 'ln-c-label', hidden && 'ln-u-visually-hidden')
    }),
    children,
    indicator && _react2.default.createElement(
      _LabelInfo2.default,
      null,
      ' ',
      indicator
    )
  );
};

Label.propTypes = {
  element: _propTypes2.default.oneOf(['label', 'legend']),
  htmlFor: _propTypes2.default.string.isRequired,
  requiredLabel: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool]),
  optionalLabel: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool]),
  hidden: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

Label.defaultProps = {
  element: 'label',
  requiredLabel: undefined,
  optionalLabel: undefined,
  hidden: false,
  className: undefined
};

Label.displayName = 'Label';

exports.default = Label;