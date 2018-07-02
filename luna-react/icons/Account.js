'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Account = function Account(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 9c1.658 0 3-1.342 3-3s-1.342-3-3-3-3 1.342-3 3 1.342 3 3 3zm0 2a5 5 0 0 1-5-5c0-2.763 2.238-5 5-5s5 2.237 5 5a5 5 0 0 1-5 5zm0 4c-4.652 0-9 2.5-9 5.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5c0-3-4.348-5.5-9-5.5zm0-2c4.59 0 11 2.512 11 7.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 20.5C1 15.512 7.41 13 12 13z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

Account.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Account;
exports.default = (0, _hoc2.default)(Account);