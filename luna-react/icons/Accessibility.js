'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accessibility = function Accessibility(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M16.082 16.32l2.12 2.119a.96.96 0 0 0 1.357-1.358l-2.4-2.4a.96.96 0 0 0-.679-.281h-3.987l-1.306-7.838a.96.96 0 0 0-1.894.316l1.44 8.64a.96.96 0 0 0 .947.802h4.402z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('circle', {
        cx: '10.72',
        cy: '1.92',
        r: '1.92'
      }),
      _react2.default.createElement('path', {
        d: 'M11.2 11.52h3.36a.96.96 0 1 0 0-1.92H11.2a.96.96 0 1 0 0 1.92zm-3.465.073C5.492 12.52 4 14.68 4 17.113c0 3.313 2.737 5.99 6.103 5.99 2.577 0 4.853-1.584 5.73-3.924a.96.96 0 1 0-1.798-.673c-.596 1.591-2.157 2.676-3.932 2.676-2.315 0-4.183-1.826-4.183-4.068 0-1.645 1.014-3.112 2.548-3.747a.96.96 0 0 0-.733-1.774z',
        fillRule: 'nonzero'
      })
    )
  );
};

Accessibility.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Accessibility;
exports.default = (0, _hoc2.default)(Accessibility);