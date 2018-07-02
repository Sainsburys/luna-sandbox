"use strict";

exports.__esModule = true;

exports.default = function (_ref) {
  var name = _ref.name,
      info = _ref.info,
      error = _ref.error,
      warning = _ref.warning;
  return [info !== undefined && name + "Info", (error !== undefined || warning !== undefined) && name + "Validation"].filter(function (id) {
    return !!id;
  });
};