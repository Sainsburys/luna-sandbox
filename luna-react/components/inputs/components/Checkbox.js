'use strict';

exports.__esModule = true;

var _recompose = require('recompose');

var _FormOption = require('./FormOption');

var _FormOption2 = _interopRequireDefault(_FormOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Checkbox'), (0, _recompose.withProps)({ type: 'checkbox' }))(_FormOption2.default);