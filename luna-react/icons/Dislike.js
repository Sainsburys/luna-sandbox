'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dislike = function Dislike(props) {
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
        d: 'M6 14H3.294A.294.294 0 0 1 3 13.706V4.294C3 4.132 3.132 4 3.294 4H6v10zm-2.706 2H8V2H3.294A2.294 2.294 0 0 0 1 4.294v9.412A2.294 2.294 0 0 0 3.294 16z'
      }),
      _react2.default.createElement('path', {
        d: 'M8 14.817V3.777c3.83-.933 7.084-1.118 9.756-.57 1.792.367 2.68 1.059 3.038 2.01.184.489.223.949.199 1.746-.007.238-.009.28-.009.377V13c0 .738-1.043 2-1.684 2H14a1 1 0 0 0-1 1v4.447a.294.294 0 0 1-.207.28l-1.14.356a1.277 1.277 0 0 1-1.574-.767L8 14.817zM15 17h4.3c1.838 0 3.684-2.233 3.684-4V7.34c0-.068.001-.106.008-.317.031-1.041-.025-1.712-.327-2.511-.613-1.628-2.073-2.765-4.507-3.264-3.179-.652-6.982-.384-11.413.785A1 1 0 0 0 6 3v12a1 1 0 0 0 .065.354l2.143 5.669a3.277 3.277 0 0 0 4.041 1.97l1.14-.356A2.294 2.294 0 0 0 15 20.447V17z'
      })
    )
  );
};

Dislike.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Dislike;
exports.default = (0, _hoc2.default)(Dislike);