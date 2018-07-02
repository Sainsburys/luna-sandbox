'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputAction = function InputAction(_ref) {
  var children = _ref.children;

  var element = _react2.default.Children.only(children);

  return _react2.default.cloneElement(element, { className: (0, _classnames2.default)('ln-c-input-group__action', element.props && element.props.className) });
};

InputAction.propTypes = {
  children: _propTypes2.default.node
};

InputAction.defaultProps = {
  children: undefined
};

InputAction.displayName = 'InputAction';

exports.default = InputAction;