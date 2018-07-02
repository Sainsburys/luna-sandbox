'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tu = function Tu(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      {
        id: 'tu-title'
      },
      'Tu'
    ),
    _react2.default.createElement('path', {
      d: 'M41.097 0H0v8.732h15.697v40.72h9.74V8.731h15.66V0zm9.884 24.512v10.194c-.015 2.339-.699 3.699-1.502 4.555-.825.847-1.89 1.33-3.38 1.345-1.497-.015-2.562-.498-3.384-1.345-.808-.856-1.487-2.213-1.502-4.555V21.638h-9.016v13.068c-.018 4.238 1.405 8.091 3.998 10.792 2.578 2.719 6.21 4.152 9.905 4.138 3.735 0 7.333-1.436 9.899-4.138 2.594-2.7 4.014-6.554 4-10.792v-15.91c-4.885 4.168-6.541 1.69-8.422 4.05-.2.261-.526.819-.596 1.666z',
      fill: '#000',
      fillRule: 'evenodd'
    })
  );
};

Tu.defaultProps = {
  viewBox: '0 0 60 50',
  role: 'img',
  'aria-labelledby': 'tu-title'
};
exports.default = Tu;