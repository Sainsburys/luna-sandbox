'use strict';

exports.__esModule = true;

var _recompose = require('recompose');

var _FormOptionField = require('./FormOptionField');

var _FormOptionField2 = _interopRequireDefault(_FormOptionField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('CheckboxField'), (0, _recompose.withProps)({ optionType: 'checkbox' }))(_FormOptionField2.default);