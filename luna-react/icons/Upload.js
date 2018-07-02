'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Upload = function Upload(props) {
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
        d: 'M11 3v14a1 1 0 0 0 2 0V3a1 1 0 0 0-2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M12 3.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L12 3.414zM3 22h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z'
      })
    )
  );
};

Upload.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Upload;
exports.default = (0, _hoc2.default)(Upload);