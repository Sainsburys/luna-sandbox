'use strict';

exports.__esModule = true;
exports.Breadcrumbs = undefined;

var _BreadcrumbsWrapper = require('./components/BreadcrumbsWrapper');

var _BreadcrumbsWrapper2 = _interopRequireDefault(_BreadcrumbsWrapper);

var _BreadcrumbsItem = require('./components/BreadcrumbsItem');

var _BreadcrumbsItem2 = _interopRequireDefault(_BreadcrumbsItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = {
  Wrapper: _BreadcrumbsWrapper2.default,
  Item: _BreadcrumbsItem2.default
};

exports.Breadcrumbs = Breadcrumbs;