'use strict';

exports.__esModule = true;

var _recompose = require('recompose');

var _NavigationDropdown = require('../components/NavigationDropdown');

var _NavigationDropdown2 = _interopRequireDefault(_NavigationDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)(_NavigationDropdown2.default.displayName), (0, _recompose.withState)('isOpen', 'setOpen', false), (0, _recompose.withHandlers)({
  toggleOpen: function toggleOpen(_ref) {
    var isOpen = _ref.isOpen,
        setOpen = _ref.setOpen;
    return function () {
      return setOpen(!isOpen);
    };
  }
}))(_NavigationDropdown2.default);