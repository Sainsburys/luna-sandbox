'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NavigationDropdown = require('./NavigationDropdown');

var _NavigationDropdown2 = _interopRequireDefault(_NavigationDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Navigation = function Navigation(_ref) {
  var items = _ref.items,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['items', 'className']);

  return _react2.default.createElement(
    'ul',
    _extends({}, rest, { className: className.list }),
    items.map(function (Element) {
      if (Element.type === 'li' || Element.type.displayName === _NavigationDropdown2.default.displayName) {
        return Element;
      }

      var key = Element.props.href || Element.props.to || Element.props.label;

      return _react2.default.createElement(
        'li',
        { key: key, className: className.item },
        _react2.default.cloneElement(Element, {
          className: (0, _classnames2.default)(Element.props.className, className.link)
        })
      );
    })
  );
};

Navigation.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.element),
  className: _propTypes2.default.shape({
    list: _propTypes2.default.string,
    item: _propTypes2.default.string,
    link: _propTypes2.default.string
  })
};

Navigation.defaultProps = {
  items: [],
  className: {
    list: 'ln-c-navigation',
    item: 'ln-c-navigation__item',
    link: 'ln-c-navigation__link'
  }
};

Navigation.displayName = 'Navigation';

exports.default = Navigation;