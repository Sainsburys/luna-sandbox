'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = require('../../page/components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _PageHeader = require('../../page/components/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _PageBody = require('../../page/components/PageBody');

var _PageBody2 = _interopRequireDefault(_PageBody);

var _PageFooter = require('../../page/components/PageFooter');

var _PageFooter2 = _interopRequireDefault(_PageFooter);

var _getComponentName = require('../../../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _header = require('../../header/');

var _Footer = require('../../footer/components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SiteLayout = function SiteLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'className']);

  var header = void 0;
  var headerBody = void 0;
  var footer = void 0;

  _react2.default.Children.forEach(children, function (child) {
    if (_react2.default.isValidElement(child)) {
      var componentName = (0, _getComponentName2.default)(child);
      if (componentName === (0, _getComponentName2.default)(_header.Header)) {
        header = child;
      }

      if (componentName === (0, _getComponentName2.default)(_header.HeaderBody)) {
        headerBody = child;
      }

      if (componentName === (0, _getComponentName2.default)(_Footer2.default)) {
        footer = child;
      }
    }
  });

  return _react2.default.createElement(
    _Page2.default,
    _extends({ className: className }, rest),
    header && _react2.default.createElement(
      _PageHeader2.default,
      null,
      header
    ),
    _react2.default.createElement(
      _PageBody2.default,
      null,
      headerBody || _react2.default.createElement(
        _header.HeaderBody,
        null,
        _react2.default.Children.map(children, function (child) {
          return child !== header && child !== footer && child;
        })
      )
    ),
    footer && _react2.default.createElement(
      _PageFooter2.default,
      null,
      footer
    )
  );
};

SiteLayout.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

SiteLayout.defaultProps = {
  className: undefined
};

SiteLayout.displayName = 'SiteLayout';

exports.default = SiteLayout;