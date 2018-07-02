'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _form = require('../../form');

var _filterProps = require('../../../utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Search = function Search(_ref) {
  var _classnames, _classnames2;

  var className = _ref.className,
      placeholder = _ref.placeholder,
      handleSubmit = _ref.handleSubmit,
      expandable = _ref.expandable,
      value = _ref.value,
      handleChange = _ref.handleChange,
      open = _ref.open,
      toggle = _ref.toggle,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      allowEmptySubmit = _ref.allowEmptySubmit,
      rest = _objectWithoutProperties(_ref, ['className', 'placeholder', 'handleSubmit', 'expandable', 'value', 'handleChange', 'open', 'toggle', 'onBlur', 'onFocus', 'allowEmptySubmit']);

  return _react2.default.createElement(
    _form.Form,
    _extends({}, (0, _filterProps2.default)(rest, ['changeValue', 'onExpandClick']), {
      onSubmit: handleSubmit,
      className: (0, _classnames4.default)('ln-c-search', (_classnames = {
        'ln-c-search--expandable': expandable,
        'is-open': open
      }, _classnames[className] = typeof className === 'string', _classnames[className.form] = !!className.form, _classnames))
    }),
    _react2.default.createElement('input', {
      type: 'search',
      className: (0, _classnames4.default)('ln-c-search__input', 'ln-c-text-input', (_classnames2 = {}, _classnames2[className.input] = !!className.input, _classnames2)),
      placeholder: placeholder,
      value: value,
      onChange: handleChange,
      onBlur: onBlur,
      onFocus: onFocus
    }),
    _react2.default.createElement(
      'button',
      {
        type: 'submit',
        className: 'ln-c-search__submit',
        disabled: !allowEmptySubmit && !value,
        'aria-disabled': !allowEmptySubmit && (!value || undefined)
      },
      'Submit search query'
    ),
    expandable && _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'ln-c-search--expandable__toggle',
        onClick: toggle
      },
      'Open Search'
    )
  );
};

Search.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    form: _propTypes2.default.string,
    input: _propTypes2.default.string
  })]),
  placeholder: _propTypes2.default.string,
  handleSubmit: _propTypes2.default.func.isRequired,
  expandable: _propTypes2.default.bool,
  value: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  toggle: _propTypes2.default.func,
  allowEmptySubmit: _propTypes2.default.bool
};

Search.defaultProps = {
  className: {},
  placeholder: 'Search',
  expandable: false,
  open: false,
  toggle: undefined,
  onBlur: undefined,
  onFocus: undefined,
  allowEmptySubmit: false
};

Search.displayName = 'Search';

exports.default = Search;