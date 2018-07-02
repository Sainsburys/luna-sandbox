'use strict';

exports.__esModule = true;
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector;
}

exports.default = function (element, selector) {
  var hasParent = false;

  for (var parent = element.parentNode; parent && parent !== document; parent = parent.parentNode) {
    if (parent.matches(selector)) {
      hasParent = true;
      break;
    }
  }

  return hasParent;
};