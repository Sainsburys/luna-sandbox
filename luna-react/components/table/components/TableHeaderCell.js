'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TableHeaderCell = function TableHeaderCell(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      onSort = _ref.onSort,
      sortDirection = _ref.sortDirection,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'align', 'onSort', 'sortDirection']);

  return _react2.default.createElement(
    'th',
    _extends({}, rest, {
      className: (0, _classnames3.default)('ln-c-table__header-cell', className, (_classnames = {
        'ln-c-table__header-cell--sortable': !!onSort
      }, _classnames['ln-c-table__header-cell--text-align-' + align] = align, _classnames))
    }),
    onSort ? _react2.default.createElement(
      'button',
      {
        className: (0, _classnames3.default)('ln-c-table__sort-button', {
          'is-active': !!sortDirection,
          'is-ascending': sortDirection === 'ascending'
        }),
        onClick: function onClick() {
          return onSort(sortDirection === 'ascending');
        }
      },
      _react2.default.createElement(
        'span',
        { className: 'ln-c-table__sort-text', 'aria-label': 'Sort by' },
        children
      )
    ) : children
  );
};

TableHeaderCell.propTypes = {
  children: _propTypes2.default.node,
  onSort: _propTypes2.default.func,
  sortDirection: _propTypes2.default.oneOf(['ascending', 'descending']),
  className: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'right', 'center'])
};

TableHeaderCell.defaultProps = {
  children: undefined,
  onSort: undefined,
  sortDirection: undefined,
  className: undefined,
  align: undefined
};

TableHeaderCell.displayName = 'TableHeaderCell';

exports.default = TableHeaderCell;