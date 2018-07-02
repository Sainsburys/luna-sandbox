'use strict';

exports.__esModule = true;

var _react = require('react');

var hasInnerRef = function hasInnerRef(element) {
  return (0, _react.isValidElement)(element) && !!element.type.propTypes && !!element.type.propTypes.innerRef;
};

exports.default = hasInnerRef;