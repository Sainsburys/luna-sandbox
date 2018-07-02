'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ClickAway = require('../containers/ClickAway');

var _ClickAway2 = _interopRequireDefault(_ClickAway);

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavigationDropdown = function NavigationDropdown(_ref) {
  var toggleOpen = _ref.toggleOpen,
      isOpen = _ref.isOpen,
      label = _ref.label,
      items = _ref.items,
      setOpen = _ref.setOpen,
      Element = _ref.Element,
      rest = _objectWithoutProperties(_ref, ['toggleOpen', 'isOpen', 'label', 'items', 'setOpen', 'Element']);

  return _react2.default.createElement(
    'li',
    _extends({
      className: 'ln-c-navigation__item ln-c-navigation__item--has-dropdown',
      key: label + '-dropdown'
    }, (0, _filterProps2.default)(rest, ['activeClassName'])),
    _react2.default.createElement(
      _ClickAway2.default,
      { onClickAway: function onClickAway() {
          return setOpen(false);
        } },
      _react2.default.cloneElement(Element, {
        className: (0, _classnames2.default)('ln-c-navigation__link ln-c-navigation__dropdown-toggle', isOpen && 'is-open', Element.props.className),
        onClick: function onClick(e) {
          e.stopPropagation();
          toggleOpen();
        }
      }, _react2.default.createElement(
        _react.Fragment,
        null,
        label,
        _react2.default.createElement('span', { className: 'ln-c-navigation__dropdown-icon' })
      ))
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('ln-c-navigation__dropdown', isOpen && 'is-open') },
      _react2.default.createElement(_Navigation2.default, { items: items })
    )
  );
};

NavigationDropdown.propTypes = {
  toggleOpen: _propTypes2.default.func.isRequired,
  setOpen: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string.isRequired,
  items: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  Element: _propTypes2.default.node
};

NavigationDropdown.defaultProps = {
  Element: _react2.default.createElement('button', null)
};

NavigationDropdown.displayName = 'NavigationDropdown';

exports.default = NavigationDropdown;