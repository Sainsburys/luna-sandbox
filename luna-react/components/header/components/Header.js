'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

var _TopBar = require('./TopBar');

var _TopBar2 = _interopRequireDefault(_TopBar);

var _MainBar = require('./MainBar');

var _MainBar2 = _interopRequireDefault(_MainBar);

var _container = require('../../container');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = function Header(_ref) {
  var className = _ref.className,
      mainId = _ref.mainId,
      open = _ref.open,
      toggle = _ref.toggle,
      topBar = _ref.topBar,
      logo = _ref.logo,
      iconNav = _ref.iconNav,
      menuItems = _ref.menuItems,
      onSearchSubmit = _ref.onSearchSubmit,
      container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['className', 'mainId', 'open', 'toggle', 'topBar', 'logo', 'iconNav', 'menuItems', 'onSearchSubmit', 'container']);

  var containerProps = _extends({}, container, {
    soft: container.soft !== undefined ? container.soft : true
  });
  return _react2.default.createElement(
    'header',
    _extends({}, (0, _filterProps2.default)(rest, ['onMenuClick']), {
      className: (0, _classnames2.default)('ln-c-header', className, {
        'is-open': open
      })
    }),
    _react2.default.createElement(
      'a',
      { href: '#' + mainId, className: 'ln-u-visually-hidden' },
      'Skip Navigation'
    ),
    _react2.default.createElement('button', {
      className: 'ln-c-header__toggle-overlay js-header-toggle',
      title: 'Toggle Menu',
      'aria-hidden': 'true',
      tabIndex: '-1',
      onClick: toggle
    }),
    _react2.default.createElement(
      'div',
      { className: 'ln-c-header__inner' },
      Object.keys(topBar).length > 0 && _react2.default.createElement(_TopBar2.default, _extends({}, topBar, {
        toggle: toggle,
        hasDivider: iconNav.length > 0 || menuItems.length > 0,
        container: containerProps
      })),
      _react2.default.createElement(_MainBar2.default, {
        logo: logo,
        toggle: toggle,
        menuItems: menuItems,
        iconNav: iconNav,
        onSearchSubmit: onSearchSubmit,
        topBar: topBar,
        container: containerProps
      })
    )
  );
};

Header.propTypes = _extends({
  mainId: _propTypes2.default.string,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  toggle: _propTypes2.default.func.isRequired,
  topBar: _propTypes2.default.shape(_extends({}, _TopBar2.default.propTypes))
}, _MainBar2.default.propTypes, {
  iconNav: _propTypes2.default.arrayOf(_propTypes2.default.element),
  container: _propTypes2.default.shape(_container.Container.propTypes)
});

Header.defaultProps = _extends({
  mainId: 'main-content',
  className: undefined,
  topBar: {}
}, _MainBar2.default.defaultProps, {
  container: _container.Container.defaultProps
});

Header.displayName = 'Header';

exports.default = Header;