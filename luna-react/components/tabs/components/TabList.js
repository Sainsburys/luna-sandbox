'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

var _ArrowLeft = require('../../../icons/ArrowLeft');

var _ArrowLeft2 = _interopRequireDefault(_ArrowLeft);

var _ArrowRight = require('../../../icons/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

var _TabLink = require('./TabLink');

var _TabLink2 = _interopRequireDefault(_TabLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabList = function TabList(_ref) {
  var className = _ref.className,
      children = _ref.children,
      fill = _ref.fill,
      deep = _ref.deep,
      showPrevArrow = _ref.showPrevArrow,
      showNextArrow = _ref.showNextArrow,
      animateDistance = _ref.animateDistance,
      setTabRef = _ref.setTabRef,
      onArrowClick = _ref.onArrowClick,
      onTabLinkFocus = _ref.onTabLinkFocus,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'fill', 'deep', 'showPrevArrow', 'showNextArrow', 'animateDistance', 'setTabRef', 'onArrowClick', 'onTabLinkFocus']);

  var isResponsive = !fill && _react2.default.Children.count(children) > 1 && onArrowClick;
  var transform = isResponsive && animateDistance ? 'translateX(' + animateDistance + '%)' : undefined;

  return _react2.default.createElement(
    'nav',
    _extends({}, (0, _filterProps2.default)(rest, ['visibleTabs']), {
      className: (0, _classnames2.default)('ln-c-tabs', className, {
        'ln-c-tabs--fill': fill,
        'ln-c-tabs--deep': deep,
        'has-prev-arrow': showPrevArrow,
        'has-next-arrow': showNextArrow
      })
    }),
    _react2.default.createElement(
      'div',
      { className: 'ln-c-tabs__list-wrap' },
      _react2.default.createElement(
        'div',
        {
          className: 'ln-c-tabs__list',
          role: 'tablist',
          style: { transform: transform }
        },
        isResponsive ? _react2.default.Children.map(children, function (child, index) {
          /* eslint-disable react/prop-types */
          var props = {
            key: index
          };

          if (child.type === _TabLink2.default) {
            props.onFocus = onTabLinkFocus;
            props.setRef = setTabRef;
          }

          return _react2.default.cloneElement(child, props);
          /* eslint-enable react/prop-types */
        }) : children
      ),
      isResponsive && [_react2.default.createElement(
        'button',
        {
          key: 'arrowPrev',
          className: 'ln-c-tabs__link ln-c-tabs__link--arrow ln-c-tabs__link--arrow-prev',
          tabIndex: '-1',
          onClick: function onClick() {
            return onArrowClick(false);
          }
        },
        _react2.default.createElement(_ArrowLeft2.default, null)
      ), _react2.default.createElement(
        'button',
        {
          key: 'arrowNext',
          className: 'ln-c-tabs__link ln-c-tabs__link--arrow ln-c-tabs__link--arrow-next',
          tabIndex: '-1',
          onClick: function onClick() {
            return onArrowClick(true);
          }
        },
        _react2.default.createElement(_ArrowRight2.default, null)
      )]
    )
  );
};

TabList.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  fill: _propTypes2.default.bool,
  deep: _propTypes2.default.bool,
  showPrevArrow: _propTypes2.default.bool,
  showNextArrow: _propTypes2.default.bool,
  animateDistance: _propTypes2.default.number,
  setTabRef: _propTypes2.default.func,
  onArrowClick: _propTypes2.default.func,
  onTabLinkFocus: _propTypes2.default.func
};

TabList.defaultProps = {
  className: undefined,
  fill: false,
  deep: false,
  showPrevArrow: false,
  showNextArrow: false,
  animateDistance: 0,
  setTabRef: undefined,
  onArrowClick: undefined,
  onTabLinkFocus: undefined
};

TabList.displayName = 'TabList';

exports.default = TabList;