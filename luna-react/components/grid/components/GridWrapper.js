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

var GridWrapper = function GridWrapper(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      matrix = _ref.matrix,
      reverse = _ref.reverse,
      equalHeight = _ref.equalHeight,
      gutterSize = _ref.gutterSize,
      verticalAlign = _ref.verticalAlign,
      horizontalAlign = _ref.horizontalAlign,
      element = _ref.element,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'matrix', 'reverse', 'equalHeight', 'gutterSize', 'verticalAlign', 'horizontalAlign', 'element']);

  var Element = element;
  return _react2.default.createElement(
    Element,
    _extends({}, rest, {
      className: (0, _classnames3.default)(className, 'ln-o-grid', (_classnames = {
        'ln-o-grid--matrix': matrix,
        'ln-o-grid--reverse': reverse,
        'ln-o-grid--equal-height': equalHeight
      }, _classnames['ln-o-grid--gutter-' + gutterSize] = gutterSize, _classnames['ln-o-grid--' + verticalAlign] = verticalAlign, _classnames['ln-u-text-align-' + horizontalAlign] = horizontalAlign, _classnames))
    }),
    children
  );
};

GridWrapper.displayName = 'Grid.Wrapper';

GridWrapper.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  matrix: _propTypes2.default.bool,
  gutterSize: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  equalHeight: _propTypes2.default.bool,
  verticalAlign: _propTypes2.default.oneOf(['middle', 'bottom']),
  horizontalAlign: _propTypes2.default.oneOf(['center', 'right']),
  element: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string])
};

GridWrapper.defaultProps = {
  className: undefined,
  matrix: false,
  gutterSize: undefined,
  reverse: false,
  equalHeight: false,
  verticalAlign: undefined,
  horizontalAlign: undefined,
  element: 'div'
};

exports.default = GridWrapper;