'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navigation = require('../../navigation');

var _container = require('../../container');

var _IconNavigation = require('./IconNavigation');

var _IconNavigation2 = _interopRequireDefault(_IconNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MainBar = function MainBar(_ref) {
  var logo = _ref.logo,
      toggle = _ref.toggle,
      menuItems = _ref.menuItems,
      iconNav = _ref.iconNav,
      onSearchSubmit = _ref.onSearchSubmit,
      className = _ref.className,
      topBar = _ref.topBar,
      container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['logo', 'toggle', 'menuItems', 'iconNav', 'onSearchSubmit', 'className', 'topBar', 'container']);

  var showIconNav = iconNav.length > 0 || onSearchSubmit;
  var showNavList = menuItems.length > 0;

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
    _navigation.Navigation.Wrapper,
    _extends({}, rest, {
      title: logo,
      button: iconNav.length > 0 || menuItems.length > 0 || Object.keys(topBar).length > 0 ? _react2.default.createElement(_navigation.MenuButton, { className: 'ln-c-header__toggle', onClick: toggle }) : undefined,
      container: container,
      className: className
    }),
    (showIconNav || showNavList) && [showIconNav && _react2.default.createElement(_IconNavigation2.default, {
      key: 'iconNav',
      items: iconNav.map(addOnClickHandler),
      onSearchSubmit: onSearchSubmit
    }), showNavList > 0 && _react2.default.createElement(_navigation.Navigation.List, { key: 'mainNav', items: menuItems.map(addOnClickHandler) })]
  );
};

MainBar.propTypes = {
  logo: _propTypes2.default.node.isRequired,
  toggle: _propTypes2.default.func.isRequired,
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  className: _propTypes2.default.string,
  topBar: _propTypes2.default.shape({}),
  iconNav: _IconNavigation2.default.propTypes.items,
  onSearchSubmit: _IconNavigation2.default.propTypes.onSearchSubmit,
  container: _propTypes2.default.shape(_container.Container.propTypes)
};

MainBar.defaultProps = {
  menuItems: [],
  className: undefined,
  topBar: {},
  iconNav: _IconNavigation2.default.defaultProps.items,
  onSearchSubmit: _IconNavigation2.default.defaultProps.onSearchSubmit,
  container: undefined
};

MainBar.displayName = 'MainBar';

exports.default = MainBar;