'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreLocation10 = function StoreLocation10(props) {
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
        d: 'M13.687 22.994a2.111 2.111 0 0 1-3.374 0C5.448 16.53 3 11.69 3 8.332 3 3.14 6.72 0 12 0c5.28 0 9 3.14 9 8.332 0 3.357-2.448 8.197-7.313 14.662zM19 8.332C19 4.327 16.243 2 12 2S5 4.327 5 8.332c0 2.79 2.293 7.323 6.911 13.46a.111.111 0 0 0 .156.022C16.707 15.654 19 11.12 19 8.332z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement(
        'text',
        {
          fontFamily: 'MaryAnn-ExtraBold, Mary Ann',
          fontSize: '10',
          fontWeight: '600'
        },
        _react2.default.createElement(
          'tspan',
          {
            x: '6.91',
            y: '12'
          },
          '10'
        )
      )
    )
  );
};

StoreLocation10.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = StoreLocation10;
exports.default = (0, _hoc2.default)(StoreLocation10);