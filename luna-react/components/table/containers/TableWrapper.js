'use strict';

exports.__esModule = true;
exports.sort = exports.sortData = undefined;

var _recompose = require('recompose');

var _Table = require('../components/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortData = function sortData(_ref) {
  var setSorted = _ref.setSorted;
  return function (sortOptions) {
    return setSorted(sortOptions);
  };
};

var sortAlphabetically = function sortAlphabetically(accessor, sortValue, ascending) {
  return function (a, b) {
    var valueA = accessor(a)[sortValue];
    var valueB = accessor(b)[sortValue];

    if (valueA < valueB) {
      return ascending ? -1 : 1;
    }
    if (valueA > valueB) {
      return ascending ? 1 : -1;
    }
    return 0;
  };
};

var sort = function sort(_ref2) {
  var data = _ref2.data,
      sorted = _ref2.sorted;

  if (Object.keys(sorted).length > 0) {
    var sortFunction = typeof sorted.sortValue === 'function' ? sorted.sortValue(sorted.accessor, sorted.ascending) : sortAlphabetically(sorted.accessor, sorted.sortValue, sorted.ascending);

    return {
      data: data.sort(sortFunction)
    };
  }
  return {};
};

exports.sortData = sortData;
exports.sort = sort;
exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Table'), (0, _recompose.withState)('sorted', 'setSorted', {}), (0, _recompose.withHandlers)({
  sortData: sortData
}), (0, _recompose.withProps)(sort))(_Table2.default);