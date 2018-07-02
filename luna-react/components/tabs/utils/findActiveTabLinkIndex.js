"use strict";

exports.__esModule = true;
var findActiveTabLinkIndex = function findActiveTabLinkIndex(children) {
  var index = void 0;
  children.forEach(function (tab, tabIndex) {
    if (tab.props && tab.props.active) {
      index = tabIndex;
    }
  });

  return index;
};

exports.default = findActiveTabLinkIndex;