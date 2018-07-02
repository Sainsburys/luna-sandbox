"use strict";

exports.__esModule = true;

exports.default = function (required, optional) {
  return required !== undefined || optional !== undefined ? !!required : undefined;
};