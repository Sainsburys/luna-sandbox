'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('../../header');

var _MainSection = require('./MainSection');

var _MainSection2 = _interopRequireDefault(_MainSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ColleagueLayout = function ColleagueLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      mainId = _ref.mainId,
      open = _ref.open,
      toggle = _ref.toggle,
      topBar = _ref.topBar,
      logo = _ref.logo,
      iconNav = _ref.iconNav,
      menuItems = _ref.menuItems,
      onSearchSubmit = _ref.onSearchSubmit,
      container = _ref.container,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'mainId', 'open', 'toggle', 'topBar', 'logo', 'iconNav', 'menuItems', 'onSearchSubmit', 'container']);

  var headerProps = {
    mainId: mainId,
    open: open,
    toggle: toggle,
    topBar: topBar,
    logo: logo,
    iconNav: iconNav,
    menuItems: menuItems,
    onSearchSubmit: onSearchSubmit,
    container: container
  };

  return _react2.default.createElement(
    'div',
    _extends({}, rest, { className: className }),
    _react2.default.createElement(_header.Header, headerProps),
    _react2.default.createElement(
      _MainSection2.default,
      { className: 'ln-u-soft-top' },
      children
    )
  );
};

ColleagueLayout.propTypes = _extends({
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
}, _header.Header.propTypes);

ColleagueLayout.defaultProps = {
  children: undefined,
  className: undefined
};

ColleagueLayout.displayName = 'ColleagueLayout';

exports.default = ColleagueLayout;