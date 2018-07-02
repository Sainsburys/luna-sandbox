'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = function Comment(props) {
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
        d: 'M12.071 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.061l1.98 2.67 2.03-2.67zM5 1h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-5.937l-3.042 4-2.967-4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('circle', {
        cx: '8',
        cy: '10',
        r: '1'
      }),
      _react2.default.createElement('circle', {
        cx: '12',
        cy: '10',
        r: '1'
      }),
      _react2.default.createElement('circle', {
        cx: '16',
        cy: '10',
        r: '1'
      })
    )
  );
};

Comment.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Comment;
exports.default = (0, _hoc2.default)(Comment);