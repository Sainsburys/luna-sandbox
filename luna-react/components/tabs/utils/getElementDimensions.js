"use strict";

exports.__esModule = true;
var getElementDimensions = function getElementDimensions(element) {
  if (!element.getBoundingClientRect) {
    return {};
  }

  return element.getBoundingClientRect();
};

exports.default = getElementDimensions;