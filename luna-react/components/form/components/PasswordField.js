'use strict';

exports.__esModule = true;
exports.getLevel = exports.defaultLevels = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Password = require('../../inputs/containers/Password');

var _Password2 = _interopRequireDefault(_Password);

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

var DEFAULT_LEVELS = {
  0: {
    className: '',
    caption: 'Too short',
    test: function test() {
      return true;
    }
  },
  1: {
    className: 'is-level-1',
    caption: 'Bad',
    test: function test(value) {
      return value.length > 7;
    }
  },
  2: {
    className: 'is-level-2',
    caption: 'Ok',
    test: function test(value) {
      return value.length > 9;
    }
  },
  3: {
    className: 'is-level-3',
    caption: 'Good',
    test: function test(value) {
      return value.length > 11;
    }
  },
  4: {
    className: 'is-level-4',
    caption: 'Great',
    test: function test(value) {
      return value.length > 13;
    }
  }
};

var getLevel = function getLevel(value, levelMap) {
  var levels = Object.keys(levelMap);
  var reversedLevels = levels.reverse();

  if (value !== undefined) {
    for (var i = 0; i < levels.length; i += 1) {
      if (levelMap[reversedLevels[i]].test(value)) {
        return levelMap[reversedLevels[i]];
      }
    }
  }

  return levelMap[levels[0]];
};

var PasswordField = function (_Component) {
  _inherits(PasswordField, _Component);

  function PasswordField(props) {
    _classCallCheck(this, PasswordField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { value: props.value || props.defaultValue || '' };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  PasswordField.prototype.handleChange = function handleChange(event) {
    this.setState({ value: event.target.value });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  PasswordField.prototype.render = function render() {
    var _props = this.props,
        levels = _props.levels,
        strengthIndicator = _props.strengthIndicator,
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
        props = _objectWithoutProperties(_props, ['levels', 'strengthIndicator', 'className', 'required', 'requiredLabel', 'optional', 'optionalLabel', 'validationFirst', 'label', 'hideLabel', 'error', 'warning', 'info']);

    var strengthIndicatorId = props.name + 'StrengthIndicator';

    var requiredFlag = (0, _getRequiredFlag2.default)(required, optional);
    var describedBy = (0, _getDescribedByIds2.default)({
      name: props.name,
      info: info,
      warning: warning,
      error: error
    }).concat([strengthIndicatorId]);
    var level = getLevel(this.state.value, levels);

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
      _react2.default.createElement(_Password2.default, _extends({
        required: requiredFlag,
        invalid: error !== undefined ? !!error : undefined,
        'aria-describedby': describedBy.join(' ')
      }, props, {
        value: this.state.value,
        onChange: this.handleChange
      })),
      strengthIndicator && _react2.default.createElement(
        'div',
        { className: 'ln-c-password-strength-meter ' + level.className },
        _react2.default.createElement(
          'p',
          {
            id: strengthIndicatorId,
            className: 'ln-c-password-strength-meter__label',
            'aria-live': 'polite',
            'aria-atomic': 'true'
          },
          'Strength:',
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'ln-c-password-strength-meter__value' },
            level.caption
          )
        )
      )
    );
  };

  return PasswordField;
}(_react.Component);

PasswordField.propTypes = _extends({}, _fieldPropTypes2.default, {
  levels: _propTypes2.default.shape({}),
  strengthIndicator: _propTypes2.default.bool
});

PasswordField.defaultProps = {
  levels: DEFAULT_LEVELS,
  strengthIndicator: false
};

PasswordField.displayName = 'PasswordField';

exports.defaultLevels = DEFAULT_LEVELS;
exports.getLevel = getLevel;
exports.default = PasswordField;