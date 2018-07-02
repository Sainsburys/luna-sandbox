'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

var _TableCaption = require('./TableCaption');

var _TableCaption2 = _interopRequireDefault(_TableCaption);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableHeaderRow = require('./TableHeaderRow');

var _TableHeaderRow2 = _interopRequireDefault(_TableHeaderRow);

var _TableHeaderCell = require('./TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_CELL_DATA_PROPERTY = 'value';

var buildAccessor = function buildAccessor(accessor) {
  if (typeof accessor === 'function') {
    return accessor;
  }

  if (typeof accessor === 'string') {
    return function (row) {
      var _ref;

      return _ref = {}, _ref[DEFAULT_CELL_DATA_PROPERTY] = row[accessor], _ref;
    };
  }

  return function (row) {
    return row;
  };
};

var buildAccessors = function buildAccessors(columns) {
  return columns.reduce(function (acc, curr) {
    acc[curr.name] = buildAccessor(curr.accessor);
    return acc;
  }, {});
};

var buildColClassName = function buildColClassName(columns) {
  return columns.reduce(function (classNames, column) {
    var _extends2;

    return _extends({}, classNames, (_extends2 = {}, _extends2[column.name] = _typeof(column.className) === 'object' ? column.className : { th: column.className, td: column.className }, _extends2));
  }, {});
};

var Table = function Table(_ref2) {
  var _classnames;

  var columns = _ref2.columns,
      data = _ref2.data,
      className = _ref2.className,
      responsive = _ref2.responsive,
      labels = _ref2.labels,
      sortable = _ref2.sortable,
      sortData = _ref2.sortData,
      sorted = _ref2.sorted,
      caption = _ref2.caption,
      visuallyHiddenCaption = _ref2.visuallyHiddenCaption,
      fixed = _ref2.fixed,
      rest = _objectWithoutProperties(_ref2, ['columns', 'data', 'className', 'responsive', 'labels', 'sortable', 'sortData', 'sorted', 'caption', 'visuallyHiddenCaption', 'fixed']);

  var accessors = buildAccessors(columns);
  var colClassNames = buildColClassName(columns);
  var isSortable = sortable || columns.filter(function (c) {
    return c.sortable;
  }).length > 0;

  return _react2.default.createElement(
    'div',
    _extends({}, (0, _filterProps2.default)(rest, ['setSorted']), {
      className: 'ln-c-table-container'
    }),
    _react2.default.createElement(
      'table',
      {
        className: (0, _classnames3.default)(className, 'ln-c-table', (_classnames = {}, _classnames['ln-c-table--responsive@' + responsive] = typeof responsive === 'string', _classnames['ln-c-table--responsive@md'] = typeof responsive !== 'string' && responsive, _classnames['ln-c-table--no-labels'] = !labels, _classnames['ln-c-table--sorted'] = isSortable, _classnames['ln-c-table--fixed'] = fixed, _classnames))
      },
      caption && _react2.default.createElement(
        _TableCaption2.default,
        { visuallyHidden: visuallyHiddenCaption },
        caption
      ),
      _react2.default.createElement(
        _TableHeader2.default,
        { sortLabel: responsive && isSortable },
        _react2.default.createElement(
          _TableHeaderRow2.default,
          null,
          columns.map(function (column) {
            var sortDirection = void 0;
            if (sorted.column === column.name) {
              sortDirection = sorted.ascending ? 'ascending' : 'descending';
            }

            return _react2.default.createElement(
              _TableHeaderCell2.default,
              {
                key: column.name,
                sortDirection: sortDirection,
                onSort: column.sortable || column.sortable === undefined && sortable ? function (ascendingActive) {
                  return sortData({
                    column: column.name,
                    accessor: accessors[column.name],
                    ascending: !ascendingActive,
                    sortValue: column.sort || DEFAULT_CELL_DATA_PROPERTY
                  });
                } : undefined,
                align: column.align,
                className: colClassNames[column.name].th
              },
              column.renderHead === undefined ? column.name : column.renderHead
            );
          })
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (row) {
          return _react2.default.createElement(
            _TableRow2.default,
            { key: JSON.stringify(row) },
            columns.map(function (column) {
              var cellData = accessors[column.name](row);

              return _react2.default.createElement(
                _TableCell2.default,
                {
                  key: column.name,
                  align: column.align,
                  className: colClassNames[column.name].td,
                  label: responsive && labels && !column.hideLabel ? column.name : undefined
                },
                column.render ? column.render(cellData) : cellData[DEFAULT_CELL_DATA_PROPERTY]
              );
            })
          );
        })
      )
    )
  );
};

Table.propTypes = {
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    renderHead: _propTypes2.default.node,
    accessor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    sort: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    sortable: _propTypes2.default.bool,
    render: _propTypes2.default.func
  })).isRequired,
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  className: _propTypes2.default.string,
  responsive: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  labels: _propTypes2.default.bool,
  sortable: _propTypes2.default.bool,
  sortData: _propTypes2.default.func,
  sorted: _propTypes2.default.shape({
    column: _propTypes2.default.string,
    property: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    ascending: _propTypes2.default.bool
  }),
  caption: _propTypes2.default.node,
  visuallyHiddenCaption: _propTypes2.default.bool,
  fixed: _propTypes2.default.bool
};

Table.defaultProps = {
  className: undefined,
  responsive: false,
  labels: true,
  sortable: false,
  sortData: undefined,
  sorted: {},
  caption: undefined,
  visuallyHiddenCaption: false,
  fixed: false
};

Table.displayName = 'Table';

exports.default = Table;