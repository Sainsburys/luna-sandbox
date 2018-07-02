'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _navigation = require('../../navigation');

var _container = require('../../container');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var navigationClasses = {
  list: 'ln-c-topbar__list',
  item: 'ln-c-topbar__item',
  link: 'ln-o-bare-link ln-c-topbar__text'
};

var TopBar = function TopBar(_ref) {
  var logo = _ref.logo,
      items = _ref.items,
      meta = _ref.meta,
      className = _ref.className,
      toggle = _ref.toggle,
      hasDivider = _ref.hasDivider,
      container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['logo', 'items', 'meta', 'className', 'toggle', 'hasDivider', 'container']);

  var createOnClickHandle = function createOnClickHandle(onClick) {
    return function (e) {
      toggle(false);

      if (onClick) {
        onClick(e);
      }
    };
  };

  var addOnClickHandler = function addOnClickHandler(menuItem) {
    return (0, _react.cloneElement)(menuItem, { onClick: createOnClickHandle(menuItem.props.onClick) });
  };

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)(className, 'ln-c-topbar', !hasDivider && 'ln-c-topbar--hide-divider')
    }),
    _react2.default.createElement(
      _container.Container,
      _extends({}, container, { clearfix: true }),
      _react2.default.createElement(
        'div',
        { className: 'ln-o-flag' },
        _react2.default.createElement(
          'div',
          { className: 'ln-o-flag__body' },
          _react2.default.createElement(_navigation.Navigation.List, {
            className: navigationClasses,
            items: logo ? [_react2.default.createElement(
              'li',
              { key: 'logo', className: 'ln-c-topbar__item ln-c-topbar__item--logo' },
              logo
            )].concat(items.map(addOnClickHandler)) : items.map(addOnClickHandler)
          })
        ),
        meta && _react2.default.createElement(
          'div',
          { className: 'ln-o-flag__component' },
          _react2.default.createElement(
            'div',
            { className: 'ln-c-topbar__text' },
            meta
          )
        )
      )
    )
  );
};

TopBar.propTypes = {
  logo: _propTypes2.default.node,
  items: _propTypes2.default.arrayOf(_propTypes2.default.node),
  meta: _propTypes2.default.node,
  className: _propTypes2.default.string,
  toggle: _propTypes2.default.func.isRequired,
  hasDivider: _propTypes2.default.bool,
  container: _propTypes2.default.shape(_container.Container.propTypes)
};

TopBar.defaultProps = {
  logo: undefined,
  items: [],
  meta: undefined,
  className: undefined,
  hasDivider: true,
  container: undefined
};

TopBar.displayName = 'TopBar';

exports.default = TopBar;