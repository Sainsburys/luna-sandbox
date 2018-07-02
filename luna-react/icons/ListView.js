'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListView = function ListView(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('circle', {
        cx: '5',
        cy: '18',
        r: '2'
      }),
      _react2.default.createElement('circle', {
        cx: '5',
        cy: '12',
        r: '2'
      }),
      _react2.default.createElement('circle', {
        cx: '5',
        cy: '6',
        r: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M10 19h10a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm0-6h10a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm0-6h10a1 1 0 0 0 0-2H10a1 1 0 1 0 0 2z',
        fillRule: 'nonzero'
      })
    )
  );
};

ListView.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = ListView;
exports.default = (0, _hoc2.default)(ListView);