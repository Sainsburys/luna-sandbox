"use strict";

exports.__esModule = true;
var KEYCODES = {
  ENTER: 13,
  SPACE: 32
};

exports.default = function (callback) {
  return function (e) {
    var charCode = e.charCode != null ? e.charCode : e.keyCode;

    if (charCode === KEYCODES.ENTER || charCode === KEYCODES.SPACE) {
      callback(e);
    }
  };
};