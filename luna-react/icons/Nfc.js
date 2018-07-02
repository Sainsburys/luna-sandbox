'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nfc = function Nfc(props) {
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
        d: 'M5.772 16.542c.644-1.137.985-2.4.985-3.724a7.627 7.627 0 0 0-1.26-4.207 1 1 0 0 0-1.669 1.103c.6.908.929 1.987.929 3.104 0 .974-.25 1.899-.725 2.738a1 1 0 1 0 1.74.986zm3.916 2.314c1.026-1.728 1.587-3.826 1.587-6.038 0-2.413-.668-4.714-1.863-6.506a1 1 0 1 0-1.664 1.11c.971 1.456 1.527 3.37 1.527 5.396 0 1.858-.466 3.602-1.307 5.016a1 1 0 1 0 1.72 1.022z'
      }),
      _react2.default.createElement('path', {
        d: 'M13.074 21.291c1.72-2.097 2.718-5.173 2.718-8.473 0-3.55-1.158-6.848-3.106-8.93a1 1 0 1 0-1.46 1.366c1.58 1.69 2.566 4.497 2.566 7.564 0 2.856-.853 5.483-2.265 7.205a1 1 0 1 0 1.547 1.268z'
      }),
      _react2.default.createElement('path', {
        d: 'M17.108 23.362c2.189-2.67 3.465-6.602 3.465-10.824 0-4.544-1.479-8.757-3.957-11.405a1 1 0 0 0-1.46 1.366c2.11 2.256 3.417 5.978 3.417 10.039 0 3.779-1.13 7.26-3.012 9.556a1 1 0 0 0 1.547 1.268z'
      })
    )
  );
};

Nfc.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Nfc;
exports.default = (0, _hoc2.default)(Nfc);