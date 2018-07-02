"use strict";

exports.__esModule = true;
var getAnimateDistance = function getAnimateDistance(selectedPageIndex, remainingTabs, tabsPerPage) {
  if (selectedPageIndex === undefined) {
    return 0;
  }

  var animateDistance = selectedPageIndex * -100;

  if (remainingTabs < 0) {
    animateDistance += remainingTabs * -1 * (100 / tabsPerPage);
  }

  return animateDistance;
};

exports.default = getAnimateDistance;