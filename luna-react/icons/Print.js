'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Print = function Print(props) {
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
        cx: '17',
        cy: '14',
        r: '1'
      }),
      _react2.default.createElement('path', {
        d: 'M9.158 5C8.518 5 8 5.518 8 6.158V9h8V6.158C16 5.518 15.482 5 14.842 5H9.158zm0-2h5.684A3.158 3.158 0 0 1 18 6.158V11H6V6.158A3.158 3.158 0 0 1 9.158 3z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M4.413 16.165a1 1 0 0 1 1.002 1l.003.73.002.316.005.668c0 .205-.068.123.084.12h12.959c.225.004.112.132.112-.115l-.005-.66-.003-.318a121.04 121.04 0 0 1-.003-.741 1 1 0 0 1 1.003-1l1.422.004-.023-3.893c0-.588-.657-1.276-1.319-1.276H4.38C3.7 11 3 11.708 3 12.273l.01 3.896 1.403-.004zm16.162 2.043l.005.667c0 1.313-.73 2.143-2.125 2.125H5.523c-1.355.018-2.098-.881-2.098-2.112 0-.15-.003-.39-.005-.663v-.057l-1.404.004a1 1 0 0 1-1.003-.998L1 12.276C1 10.608 2.592 9 4.38 9h15.272c1.788 0 3.32 1.603 3.32 3.27L23 17.166a1 1 0 0 1-1.003 1.006l-1.423-.004v.04z',
        fillRule: 'nonzero'
      })
    )
  );
};

Print.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Print;
exports.default = (0, _hoc2.default)(Print);