'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messages = function Messages(props) {
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
        d: 'M4.5 5A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 19.5 5h-15zm0-2h15A3.5 3.5 0 0 1 23 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 1 17.5v-11A3.5 3.5 0 0 1 4.5 3z'
      }),
      _react2.default.createElement('path', {
        d: 'M2.53 5.944l6.702 6.943a3.5 3.5 0 0 0 4.949.088c.044-.043.044-.043.087-.088l6.702-6.943a1 1 0 1 0-1.44-1.388l-6.7 6.942-.038.038a1.5 1.5 0 0 1-2.121-.038L3.97 4.556a1 1 0 1 0-1.44 1.388z'
      })
    )
  );
};

Messages.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Messages;
exports.default = (0, _hoc2.default)(Messages);