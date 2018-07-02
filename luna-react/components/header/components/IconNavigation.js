'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navigation = require('../../navigation');

var _search = require('../../search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var navigationClasses = {
  list: 'ln-c-icon-nav',
  item: 'ln-c-icon-nav__item',
  link: 'ln-c-icon-nav__link'
};

var searchClasses = {
  form: 'ln-c-icon-nav__form',
  input: 'ln-c-icon-nav__text-input'
};

var IconNavigation = function IconNavigation(_ref) {
  var onSearchSubmit = _ref.onSearchSubmit,
      items = _ref.items,
      rest = _objectWithoutProperties(_ref, ['onSearchSubmit', 'items']);

  return _react2.default.createElement(_navigation.Navigation.List, _extends({}, rest, {
    className: navigationClasses,
    items: onSearchSubmit ? [_react2.default.createElement(
      'li',
      { key: 'search', className: 'ln-c-icon-nav__item ln-c-icon-nav__item--fixed' },
      _react2.default.createElement(_search.Search, {
        className: searchClasses,
        onSubmit: onSearchSubmit,
        expandable: true
      })
    )].concat(items) : items
  }));
};

IconNavigation.propTypes = {
  onSearchSubmit: _propTypes2.default.func,
  items: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

IconNavigation.defaultProps = {
  onSearchSubmit: undefined,
  items: []
};

IconNavigation.displayName = 'IconNavigation';

exports.default = IconNavigation;