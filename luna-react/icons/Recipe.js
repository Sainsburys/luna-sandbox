'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recipe = function Recipe(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'nonzero'
      },
      _react2.default.createElement('path', {
        d: 'M4.802 11.942l.198.266v8.542c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-8.299l.319-.296A5.316 5.316 0 0 0 19 8.25C19 5.344 16.723 3 13.929 3c-1.657 0-3.182.828-4.13 2.202l-.39.565-.669-.162a3.738 3.738 0 0 0-.883-.105C5.733 5.5 4 7.284 4 9.5c0 .898.285 1.748.802 2.442zM3 12.854A6.08 6.08 0 0 1 2 9.5c0-3.307 2.616-6 5.857-6 .233 0 .465.014.694.042C9.877 1.949 11.825 1 13.929 1 17.84 1 21 4.252 21 8.25a7.33 7.33 0 0 1-2 5.053v7.447A2.25 2.25 0 0 1 16.75 23H5.25A2.25 2.25 0 0 1 3 20.75v-7.896z'
      }),
      _react2.default.createElement('path', {
        d: 'M8 14v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0zm4 0v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z'
      })
    )
  );
};

Recipe.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Recipe;
exports.default = (0, _hoc2.default)(Recipe);