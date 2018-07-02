'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 16.944C8 14.887 9.377 13 12 13c2.624 0 4 1.883 4 3.944V21h2.244C19.23 21 20 20.256 20 19.368v-8.481c0-.436-.311-1.161-.645-1.484l-6.092-5.901a1.84 1.84 0 0 0-2.526 0l-6.092 5.9C4.308 9.73 4 10.447 4 10.888v8.481C4 20.26 4.767 21 5.756 21H8v-4.056zM5.756 23C3.68 23 2 21.382 2 19.368v-8.481c0-.987.53-2.22 1.253-2.92l6.092-5.902c1.467-1.42 3.843-1.42 5.31 0l6.092 5.901c.721.699 1.253 1.942 1.253 2.92v8.482C22 21.376 20.321 23 18.244 23H14v-6.056c0-.671-.351-1.944-2-1.944s-2 1.28-2 1.944V23H5.756z',
      stroke: 'none',
      fillRule: 'nonzero'
    })
  );
};

Home.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Home;
exports.default = (0, _hoc2.default)(Home);