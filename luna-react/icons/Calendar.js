'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function Calendar(props) {
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
        d: 'M4 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4zm0-2h16a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z'
      }),
      _react2.default.createElement('path', {
        d: 'M7 1v5a1 1 0 1 0 2 0V1a1 1 0 1 0-2 0zm8 0v5a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0zm-4.866 15.5a1 1 0 0 0 1.732 1l4.046-7a1 1 0 0 0-.866-1.5H9a1 1 0 1 0 0 2h4.313l-3.179 5.5z'
      })
    )
  );
};

Calendar.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Calendar;
exports.default = (0, _hoc2.default)(Calendar);