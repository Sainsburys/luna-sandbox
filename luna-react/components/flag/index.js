'use strict';

exports.__esModule = true;
exports.Flag = undefined;

var _FlagWrapper = require('./components/FlagWrapper');

var _FlagWrapper2 = _interopRequireDefault(_FlagWrapper);

var _FlagBody = require('./components/FlagBody');

var _FlagBody2 = _interopRequireDefault(_FlagBody);

var _FlagComponent = require('./components/FlagComponent');

var _FlagComponent2 = _interopRequireDefault(_FlagComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = {
  Wrapper: _FlagWrapper2.default,
  Body: _FlagBody2.default,
  Component: _FlagComponent2.default
};

exports.Flag = Flag;