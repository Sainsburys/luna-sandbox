'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabList = require('../components/TabList');

var _TabList2 = _interopRequireDefault(_TabList);

var _getAnimateDistance = require('../utils/getAnimateDistance');

var _getAnimateDistance2 = _interopRequireDefault(_getAnimateDistance);

var _getElementDimensions2 = require('../utils/getElementDimensions');

var _getElementDimensions3 = _interopRequireDefault(_getElementDimensions2);

var _findActiveTabLinkIndex = require('../utils/findActiveTabLinkIndex');

var _findActiveTabLinkIndex2 = _interopRequireDefault(_findActiveTabLinkIndex);

var _arrayIncludes = require('../../../utils/arrayIncludes');

var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ARROW_WIDTH = 50;

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      animateDistance: 0
    };
    _this.tabs = [];
    _this.dimensions = {};

    _this.onArrowClick = _this.onArrowClick.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.onTabLinkFocus = _this.onTabLinkFocus.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.isResponsiveEnabled = _this.isResponsiveEnabled.bind(_this);
    _this.setSelectedTab = _this.setSelectedTab.bind(_this);
    _this.setTabRef = _this.setTabRef.bind(_this);
    _this.setDimensions = _this.setDimensions.bind(_this);
    return _this;
  }

  Tabs.prototype.componentDidMount = function componentDidMount() {
    if (this.isResponsiveEnabled()) {
      this.handleResize();
      window.addEventListener('resize', this.onResize);
    }
  };

  Tabs.prototype.componentWillUnmount = function componentWillUnmount() {
    window.clearTimeout(this.resizeTimer);
    window.removeEventListener('resize', this.onResize);
  };

  Tabs.prototype.onArrowClick = function onArrowClick(next) {
    var modifier = next ? 1 : -1;
    this.setSelectedTab(this.state.selectedIndex + modifier);
  };

  Tabs.prototype.onResize = function onResize() {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this.handleResize, 250);
  };

  Tabs.prototype.onTabLinkFocus = function onTabLinkFocus(e) {
    if (this.state.selectedIndex !== undefined) {
      var _getElementDimensions = (0, _getElementDimensions3.default)(e.target),
          x = _getElementDimensions.x,
          width = _getElementDimensions.width;

      if (x + width >= this.dimensions.wrapper.width) {
        this.setSelectedTab(this.state.selectedIndex + 1);
      } else if (x + width <= this.dimensions.wrapper.x + ARROW_WIDTH) {
        this.setSelectedTab(this.state.selectedIndex - 1);
      }
    }
  };

  Tabs.prototype.setTabRef = function setTabRef(tab) {
    if (tab && !(0, _arrayIncludes2.default)(this.tabs, tab)) {
      this.tabs.push(tab);
    }
  };

  Tabs.prototype.setDimensions = function setDimensions() {
    this.dimensions.wrapper = (0, _getElementDimensions3.default)(this.wrapper);

    if (this.state.selectedIndex === undefined) {
      this.dimensions.lastTab = (0, _getElementDimensions3.default)(this.tabs[this.tabs.length - 1]);
    }
  };

  Tabs.prototype.setSelectedTab = function setSelectedTab(selectedIndex) {
    var _this2 = this;

    var visibleTabs = this.props.visibleTabs;

    var remainingTabs = selectedIndex !== undefined ? this.tabs.length - (selectedIndex + 1) * visibleTabs : undefined;

    this.setState({ selectedIndex: selectedIndex, remainingTabs: remainingTabs }, function () {
      _this2.setState({
        animateDistance: (0, _getAnimateDistance2.default)(selectedIndex, remainingTabs, visibleTabs)
      });
    });
  };

  Tabs.prototype.isResponsiveEnabled = function isResponsiveEnabled() {
    return !this.props.fill && this.tabs.length > this.props.visibleTabs;
  };

  Tabs.prototype.handleResize = function handleResize() {
    this.setDimensions();

    if (this.dimensions.wrapper.right < this.dimensions.lastTab.right) {
      var activeIndex = (0, _findActiveTabLinkIndex2.default)(this.props.children) || 0;
      if (activeIndex > 0) activeIndex = Math.floor(activeIndex / this.props.visibleTabs);
      this.setSelectedTab(activeIndex);
    } else {
      this.setSelectedTab(undefined);
    }
  };

  Tabs.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        selectedIndex = _state.selectedIndex,
        remainingTabs = _state.remainingTabs,
        animateDistance = _state.animateDistance;

    var responsiveProps = {};

    if (this.isResponsiveEnabled()) {
      responsiveProps = {
        showNextArrow: selectedIndex !== undefined && remainingTabs > 0,
        showPrevArrow: selectedIndex !== undefined && selectedIndex > 0,
        animateDistance: animateDistance
      };
    }

    return _react2.default.createElement(
      'div',
      { ref: function ref(wrapper) {
          _this3.wrapper = wrapper;
        } },
      _react2.default.createElement(_TabList2.default, _extends({
        setTabRef: this.setTabRef,
        onArrowClick: this.onArrowClick,
        onTabLinkFocus: this.onTabLinkFocus
      }, responsiveProps, this.props))
    );
  };

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node.isRequired,
  fill: _propTypes2.default.bool,
  visibleTabs: _propTypes2.default.number
};

Tabs.defaultProps = {
  fill: false,
  visibleTabs: 2
};

Tabs.displayName = 'Tabs';

exports.default = Tabs;