'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Like = function Like(props) {
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
        d: 'M5 10H2.294a.294.294 0 0 0-.294.294v9.412c0 .162.132.294.294.294H5V10zM2.294 8H7v14H2.294A2.294 2.294 0 0 1 0 19.706v-9.412A2.294 2.294 0 0 1 2.294 8z'
      }),
      _react2.default.createElement('path', {
        d: 'M7 9.183v11.04c3.83.933 7.084 1.118 9.756.57 1.736-.356 2.63-1.14 3.02-2.29.21-.62.256-1.203.231-2.126A11.605 11.605 0 0 1 20 16v-6c0-.443-.788-1-1.7-1H13a1 1 0 0 1-1-1V3.553a.294.294 0 0 0-.207-.28l-1.14-.356a1.277 1.277 0 0 0-1.574.767L7 9.183zM18.3 7c1.898 0 3.7 1.275 3.7 3v6c0 .066 0 .09.007.324.03 1.143-.03 1.92-.338 2.823-.619 1.824-2.082 3.107-4.511 3.605-3.179.652-6.982.384-11.413-.785A1 1 0 0 1 5 21V9a1 1 0 0 1 .065-.354l2.143-5.669a3.277 3.277 0 0 1 4.041-1.97l1.14.356A2.294 2.294 0 0 1 14 3.553V7h4.3z'
      })
    )
  );
};

Like.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Like;
exports.default = (0, _hoc2.default)(Like);