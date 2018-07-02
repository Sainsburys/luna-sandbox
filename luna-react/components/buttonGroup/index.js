'use strict';

exports.__esModule = true;
exports.ButtonGroup = undefined;

var _ButtonGroupWrapper = require('./components/ButtonGroupWrapper');

var _ButtonGroupWrapper2 = _interopRequireDefault(_ButtonGroupWrapper);

var _ButtonGroupPrimary = require('./components/ButtonGroupPrimary');

var _ButtonGroupPrimary2 = _interopRequireDefault(_ButtonGroupPrimary);

var _ButtonGroupSecondary = require('./components/ButtonGroupSecondary');

var _ButtonGroupSecondary2 = _interopRequireDefault(_ButtonGroupSecondary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = {
  Wrapper: _ButtonGroupWrapper2.default,
  Primary: _ButtonGroupPrimary2.default,
  Secondary: _ButtonGroupSecondary2.default
};

exports.ButtonGroup = ButtonGroup;