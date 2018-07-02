'use strict';

exports.__esModule = true;

var _recompose = require('recompose');

var _Password = require('../components/Password');

var _Password2 = _interopRequireDefault(_Password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Password'), (0, _recompose.withState)('showText', 'setTextVisibility', false))(_Password2.default);