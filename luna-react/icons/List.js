'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
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
        d: 'M7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7zm0-2h10a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z'
      }),
      _react2.default.createElement('path', {
        d: 'M8 9h8a1 1 0 0 0 0-2H8a1 1 0 1 0 0 2zm0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z'
      })
    )
  );
};

List.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = List;
exports.default = (0, _hoc2.default)(List);