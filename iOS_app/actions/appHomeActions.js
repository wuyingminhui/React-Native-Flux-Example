import appDispatcher from '../dispatchers/appDispatcher'
import AppHomeConstants from '../constants/appHomeConstants'

var appHomeActions = {
  pressUnclickButton: function () {
    var payload = {
      actionType: AppHomeConstants.APP_BUTTON_UNCLCICK
    }
    appDispatcher.handleViewAction(payload)
  },
  pressClickButton: function () {
    var payload = {
      actionType: AppHomeConstants.APP_BUTTON_CLICK
    }
    appDispatcher.handleViewAction(payload)
  }
}

module.exports = appHomeActions
