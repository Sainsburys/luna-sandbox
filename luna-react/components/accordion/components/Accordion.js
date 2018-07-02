'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ArrowDown = require('../../../icons/ArrowDown');

var _ArrowDown2 = _interopRequireDefault(_ArrowDown);

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      titleElement = _ref.titleElement,
      open = _ref.open,
      standalone = _ref.standalone,
      ids = _ref.ids,
      handleClick = _ref.handleClick,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'title', 'titleElement', 'open', 'standalone', 'ids', 'handleClick']);

  var Heading = titleElement;

  return _react2.default.createElement(
    'div',
    _extends({}, (0, _filterProps2.default)(rest, ['setOpenState', 'defaultOpen']), {
      className: (0, _classnames2.default)('ln-c-accordion', className, open && 'is-open', standalone && 'ln-c-accordion--standalone')
    }),
    _react2.default.createElement(
      'div',
      { className: 'ln-c-accordion__head' },
      _react2.default.createElement(
        'button',
        {
          className: 'ln-c-accordion__toggle',
          type: 'button',
          onClick: function onClick() {
            return handleClick(open);
          },
          'aria-controls': ids.section,
          'aria-expanded': open,
          'aria-labelledby': ids.title
        },
        _react2.default.createElement(_ArrowDown2.default, { className: 'ln-c-accordion__icon' })
      ),
      _react2.default.createElement(
        Heading,
        { className: 'ln-c-accordion__title', id: ids.title },
        title
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'ln-c-accordion__body',
        role: 'region',
        'aria-labelledby': ids.title,
        id: ids.section
      },
      open && children
    )
  );
};

Accordion.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  title: _propTypes2.default.node.isRequired,
  titleElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),
  open: _propTypes2.default.bool,
  standalone: _propTypes2.default.bool,
  ids: _propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    section: _propTypes2.default.string.isRequired
  }).isRequired,
  handleClick: _propTypes2.default.func.isRequired
};

Accordion.defaultProps = {
  className: undefined,
  titleElement: 'h4',
  open: false,
  standalone: false
};

Accordion.displayName = 'Accordion';

exports.default = Accordion;