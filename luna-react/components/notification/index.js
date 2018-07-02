'use strict';

exports.__esModule = true;
exports.Notification = undefined;

var _NotificationList = require('./components/NotificationList');

var _NotificationList2 = _interopRequireDefault(_NotificationList);

var _NotificationItem = require('./components/NotificationItem');

var _NotificationItem2 = _interopRequireDefault(_NotificationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = {
  List: _NotificationList2.default,
  Item: _NotificationItem2.default
};

exports.Notification = Notification;