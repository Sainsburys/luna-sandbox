'use strict';

exports.__esModule = true;
exports.createIds = exports.handleClick = undefined;

var _recompose = require('recompose');

var _getUniqueId = require('../../../utils/getUniqueId');

var _getUniqueId2 = _interopRequireDefault(_getUniqueId);

var _Accordion = require('../components/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleClick = function handleClick(_ref) {
  var setOpenState = _ref.setOpenState;
  return function (currentState) {
    return setOpenState(!currentState);
  };
};

var createIds = function createIds(_ref2) {
  var ids = _ref2.ids;
  return ids || {
    ids: {
      title: (0, _getUniqueId2.default)('ln-accordion-title-'),
      section: (0, _getUniqueId2.default)('ln-accordion-section-')
    }
  };
};

exports.handleClick = handleClick;
exports.createIds = createIds;
exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Accordion'), (0, _recompose.withState)('open', 'setOpenState', function (_ref3) {
  var defaultOpen = _ref3.defaultOpen;
  return !!defaultOpen;
}), (0, _recompose.withHandlers)({ handleClick: handleClick }), (0, _recompose.withPropsOnChange)(function () {
  return false;
}, createIds))(_Accordion2.default);