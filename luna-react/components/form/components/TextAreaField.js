'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextArea = require('../../inputs/components/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _fieldPropTypes = require('../utils/fieldPropTypes');

var _fieldPropTypes2 = _interopRequireDefault(_fieldPropTypes);

var _getRequiredFlag = require('../utils/getRequiredFlag');

var _getRequiredFlag2 = _interopRequireDefault(_getRequiredFlag);

var _getDescribedByIds = require('../utils/getDescribedByIds');

var _getDescribedByIds2 = _interopRequireDefault(_getDescribedByIds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAreaField = function (_Component) {
  _inherits(TextAreaField, _Component);

  function TextAreaField(props) {
    _classCallCheck(this, TextAreaField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { value: props.value || props.defaultValue || '' };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  TextAreaField.prototype.handleChange = function handleChange(event) {
    this.setState({ value: event.target.value });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  TextAreaField.prototype.render = function render() {
    var _props = this.props,
        characterCount = _props.characterCount,
        className = _props.className,
        required = _props.required,
        requiredLabel = _props.requiredLabel,
        optional = _props.optional,
        optionalLabel = _props.optionalLabel,
        validationFirst = _props.validationFirst,
        label = _props.label,
        hideLabel = _props.hideLabel,
        error = _props.error,
        warning = _props.warning,
        info = _props.info,
        props = _objectWithoutProperties(_props, ['characterCount', 'className', 'required', 'requiredLabel', 'optional', 'optionalLabel', 'validationFirst', 'label', 'hideLabel', 'error', 'warning', 'info']);

    var counterId = props.name + 'Counter';

    var requiredFlag = (0, _getRequiredFlag2.default)(required, optional);
    var describedBy = (0, _getDescribedByIds2.default)({
      name: props.name,
      info: info,
      warning: warning,
      error: error
    }).concat([counterId]);

    return _react2.default.createElement(
      _FormGroup2.default,
      {
        name: props.name,
        required: required,
        optional: optional,
        label: label,
        hideLabel: hideLabel,
        error: error,
        warning: warning,
        info: info,
        className: className,
        validationFirst: validationFirst
      },
      _react2.default.createElement(_TextArea2.default, _extends({
        required: requiredFlag,
        invalid: error !== undefined ? !!error : undefined,
        'aria-describedby': describedBy.join(' ')
      }, props, {
        onChange: this.handleChange,
        value: this.state.value
      })),
      characterCount && props.maxLength && _react2.default.createElement(
        'p',
        { id: counterId, 'aria-live': 'polite', 'aria-atomic': 'true' },
        this.state.value.length,
        _react2.default.createElement(
          'span',
          { className: 'ln-u-visually-hidden' },
          ' out of '
        ),
        _react2.default.createElement(
          'span',
          { 'aria-hidden': 'true' },
          ' / '
        ),
        props.maxLength
      )
    );
  };

  return TextAreaField;
}(_react.Component);

TextAreaField.propTypes = _extends({}, _fieldPropTypes2.default, {
  characterCount: _propTypes2.default.bool
});

TextAreaField.defaultProps = {
  characterCount: false
};

TextAreaField.displayName = 'TextAreaField';

exports.default = TextAreaField;