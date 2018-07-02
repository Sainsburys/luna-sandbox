'use strict';

exports.__esModule = true;
exports.icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VoiceSearch = function VoiceSearch(props) {
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
        d: 'M12 3a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm0-2a4 4 0 0 1 4 4v6a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4z'
      }),
      _react2.default.createElement('path', {
        d: 'M4 12c0 3.903 3.613 7 8 7 4.387 0 8-3.097 8-7a1 1 0 0 0-2 0c0 2.724-2.655 5-6 5s-6-2.276-6-5a1 1 0 0 0-2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M13 23v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M9 24h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z'
      })
    )
  );
};

VoiceSearch.defaultProps = {
  viewBox: '0 0 24 24'
};
exports.icon = VoiceSearch;
exports.default = (0, _hoc2.default)(VoiceSearch);