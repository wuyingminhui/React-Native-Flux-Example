import appDispatcher from '../dispatchers/appDispatcher'
import { EventEmitter } from 'events'
import AppHomeConstants from '../constants/appHomeConstants'
import assign from 'object-assign'

var CHANGE_EVENT = 'change'

var appHomeStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    if (this.addListener) {
      this.addListener(CHANGE_EVENT, callback)
    }
  },
  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
  dispatcherIndex: appDispatcher.register(function (payload) {
    var action = payload.action
    switch (action.actionType) {
      case AppHomeConstants.APP_BUTTON_CLICK:
        appHomeStore.emitChange()
        break
      case AppHomeConstants.APP_BUTTON_UNCLCICK:
        appHomeStore.emitChange()
        break
      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true // No errors. Needed by promise in Dispatcher.
  })

})

module.exports = appHomeStore
