'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Freshness = function Freshness(props) {
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
        d: 'M2.946 2.838a.96.96 0 0 1 1.377-.98c.138.068.412.195.808.366a41.207 41.207 0 0 0 5.9 2.003c.47.12.95.236 1.503.364l.72.165.697.158c3.657.83 5.113 1.389 6.32 2.796 2.86 3.338 1.472 8.866-2.31 11.734-3.443 2.612-8.386 1.464-11.139-2.212a5.91 5.91 0 0 1-.25-.363c-.884-1.386-1.649-3.697-2.334-6.714a79.299 79.299 0 0 1-.96-5.038 87.194 87.194 0 0 1-.332-2.279zM5.092 4.29l.082.526c.266 1.67.58 3.345.936 4.914.64 2.812 1.35 4.962 2.08 6.107.057.09.114.17.169.245 2.155 2.879 5.914 3.751 8.443 1.833 2.982-2.261 4.061-6.562 2.01-8.954-.832-.972-2.05-1.439-5.286-2.174l-.697-.158-.729-.166a68.13 68.13 0 0 1-1.546-.375A43.12 43.12 0 0 1 5.092 4.29z'
      }),
      _react2.default.createElement('path', {
        d: 'M11.684 12.427c1.295 3.044 4.614 5.284 10.566 5.825a.96.96 0 0 0 .174-1.912c-5.273-.48-7.966-2.297-8.973-4.665a.96.96 0 1 0-1.767.752z'
      })
    )
  );
};

Freshness.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = Freshness;
exports.default = (0, _hoc2.default)(Freshness);