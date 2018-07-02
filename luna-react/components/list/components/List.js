'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _arrayIncludes = require('../../../utils/arrayIncludes');

var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var List = function List(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      spaced = _ref.spaced,
      items = _ref.items,
      ordered = _ref.ordered,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'type', 'spaced', 'items', 'ordered']);

  var ListElement = ordered ? 'ol' : 'ul';
  var keys = [];

  return _react2.default.createElement(
    ListElement,
    _extends({}, rest, {
      className: (0, _classnames3.default)(className, (_classnames = {}, _classnames['ln-o-' + type + '-list'] = type, _classnames['ln-o-' + type + '-list--spaced'] = type && spaced, _classnames))
    }),
    items ? items.map(function (item, index) {
      var key = 'listItem-' + (!(0, _arrayIncludes2.default)(keys, item.toString()) ? item : index);
      keys.push(item.toString());

      return _react2.default.createElement(
        _ListItem2.default,
        {
          key: key,
          type: type
        },
        item
      );
    }) : children
  );
};

List.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  items: _propTypes2.default.arrayOf(_propTypes2.default.node),
  type: _propTypes2.default.oneOf(['bare', 'inline', 'matrix']),
  spaced: _propTypes2.default.bool,
  ordered: _propTypes2.default.bool
};

List.defaultProps = {
  className: undefined,
  children: false,
  items: undefined,
  type: undefined,
  spaced: false,
  ordered: false
};

List.displayName = 'List';

exports.default = List;