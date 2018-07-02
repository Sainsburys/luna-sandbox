'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _container = require('../../container');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavigationWrapper = function NavigationWrapper(_ref) {
  var children = _ref.children,
      title = _ref.title,
      button = _ref.button,
      container = _ref.container,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'title', 'button', 'container', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)(className, 'ln-c-navigation-wrapper')
    }),
    _react2.default.createElement(
      _container.Container,
      _extends({}, container, {
        className: (0, _classnames2.default)(container.className, 'ln-u-hard-right'),
        clearfix: true
      }),
      button,
      !!title && _react2.default.createElement(
        'h1',
        { className: 'ln-c-navigation-wrapper__title' },
        title
      ),
      !!children && _react2.default.createElement(
        'nav',
        { className: 'ln-c-navigation-wrapper__inner' },
        children
      )
    )
  );
};

NavigationWrapper.propTypes = {
  children: _propTypes2.default.node.isRequired,
  button: _propTypes2.default.element,
  title: _propTypes2.default.node,
  container: _propTypes2.default.shape(_container.Container.propTypes),
  className: _propTypes2.default.string
};

NavigationWrapper.defaultProps = {
  button: undefined,
  title: undefined,
  container: _container.Container.defaultProps,
  className: undefined
};

NavigationWrapper.displayName = 'NavigationWrapper';

exports.default = NavigationWrapper;