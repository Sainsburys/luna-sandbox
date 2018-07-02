'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../../button');

var _setHasOverlay = require('../../../utils/setHasOverlay');

var _setHasOverlay2 = _interopRequireDefault(_setHasOverlay);

var _handleActionKeyPress = require('../utils/handleActionKeyPress');

var _handleActionKeyPress2 = _interopRequireDefault(_handleActionKeyPress);

var _hasParent = require('../utils/hasParent');

var _hasParent2 = _interopRequireDefault(_hasParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SELECTORS = {
  CLOSE_BUTTON: '.ln-c-dismiss',
  MODAL_BODY: '.ln-c-modal__body'
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      open = _ref.open,
      handleClose = _ref.handleClose,
      closeContainerElement = _ref.closeContainerElement,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'open', 'handleClose', 'closeContainerElement']);

  var modalBodyEl = void 0;
  var closeButtonEl = void 0;

  if (open) (0, _setHasOverlay2.default)(true);

  var onClose = function onClose(e) {
    if (e.target === closeButtonEl || (0, _hasParent2.default)(e.target, SELECTORS.CLOSE_BUTTON) || e.target !== modalBodyEl && !(0, _hasParent2.default)(e.target, SELECTORS.MODAL_BODY)) {
      (0, _setHasOverlay2.default)(false);

      if (handleClose) {
        handleClose(e);
      }

      if (closeContainerElement && closeContainerElement.onClick) {
        closeContainerElement.onClick(e);
      }

      e.stopPropagation();
    }
  };

  var overlayProps = open ? {
    tabIndex: 0,
    role: 'button',
    onClick: onClose,
    onKeyDown: (0, _handleActionKeyPress2.default)(onClose)
  } : {};

  return _react2.default.createElement(
    'div',
    _extends({}, rest, {
      className: (0, _classnames2.default)(className, 'ln-c-modal', {
        'is-open': open
      })
    }, overlayProps),
    _react2.default.createElement(
      'div',
      { className: 'ln-c-modal__body', ref: function ref(el) {
          modalBodyEl = el;
        } },
      _react2.default.createElement(_button.CloseButton, {
        onClick: onClose,
        containerElement: closeContainerElement,
        buttonRef: function buttonRef(el) {
          closeButtonEl = el;
        }
      }),
      children
    )
  );
};

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  handleClose: _propTypes2.default.func,
  closeContainerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

Modal.defaultProps = {
  className: undefined,
  open: false,
  handleClose: undefined,
  closeContainerElement: undefined
};

Modal.displayName = 'Modal';

exports.default = Modal;