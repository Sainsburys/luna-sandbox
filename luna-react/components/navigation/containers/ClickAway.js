'use strict';

exports.__esModule = true;

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickAway = function (_Component) {
  _inherits(ClickAway, _Component);

  function ClickAway(props) {
    _classCallCheck(this, ClickAway);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.mounted = false;
    _this.selfNode = null;

    _this.handleClickAway = _this.handleClickAway.bind(_this);
    return _this;
  }

  ClickAway.prototype.componentDidMount = function componentDidMount() {
    this.selfNode = _reactDom2.default.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    this.mounted = true;
    document.addEventListener('click', this.handleClickAway);
  };

  ClickAway.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleClickAway);
  };

  ClickAway.prototype.handleClickAway = function handleClickAway(event) {
    var mounted = this.mounted,
        selfNode = this.selfNode;

    if (!mounted || !selfNode) {
      return;
    }

    if (document.documentElement && document.documentElement.contains(event.target) && !selfNode.contains(event.target)) {
      this.props.onClickAway(event);
    }
  };

  ClickAway.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return ClickAway;
}(_react.Component);

ClickAway.propTypes = {
  onClickAway: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
};

ClickAway.displayName = 'ClickAway';

exports.default = ClickAway;