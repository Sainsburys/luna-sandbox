'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClickAndColleck = function ClickAndColleck(props) {
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
        d: 'M13.152 21h-6.91c-.769 0-1.587-.751-1.737-1.665L3.024 10.34C2.892 9.541 3.3 9 3.924 9h16.15c.628 0 1.034.536.902 1.339l-.6 2.545a1 1 0 1 0 1.947.457l.613-2.611C23.274 8.693 21.993 7 20.075 7H3.925C2.008 7 .727 8.7 1.05 10.665l1.482 8.995C2.836 21.508 4.459 23 6.242 23h6.91a1 1 0 0 0 0-2z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M16.563 14.997l3.48 1.042a1.222 1.222 0 0 1 .257 2.231l-.173.099-1.682 1.748-.113.213a1.222 1.222 0 0 1-2.253-.234l-1.04-3.588a1.222 1.222 0 0 1 1.524-1.511z'
      }),
      _react2.default.createElement('path', {
        d: 'M17.4 18.762l3.667 3.706a1 1 0 1 0 1.422-1.407l-3.667-3.706a1 1 0 1 0-1.422 1.407zm.431-11.847L15.82 1.262a1 1 0 1 0-1.884.67l2.01 5.653a1 1 0 1 0 1.885-.67zm-9.778.67l2.011-5.653a1 1 0 1 0-1.884-.67L6.169 6.915a1 1 0 0 0 1.884.67z',
        fillRule: 'nonzero'
      })
    )
  );
};

ClickAndColleck.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = ClickAndColleck;
exports.default = (0, _hoc2.default)(ClickAndColleck);