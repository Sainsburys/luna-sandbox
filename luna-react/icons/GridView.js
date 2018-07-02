'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridView = function GridView(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('rect', {
        x: '4',
        y: '4',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '10',
        y: '4',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '16',
        y: '4',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '4',
        y: '10',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '10',
        y: '10',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '16',
        y: '10',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '4',
        y: '16',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '10',
        y: '16',
        width: '4',
        height: '4',
        rx: '1'
      }),
      _react2.default.createElement('rect', {
        x: '16',
        y: '16',
        width: '4',
        height: '4',
        rx: '1'
      })
    )
  );
};

GridView.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = GridView;
exports.default = (0, _hoc2.default)(GridView);