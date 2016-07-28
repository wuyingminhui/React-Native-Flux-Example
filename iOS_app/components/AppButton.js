import React, { PropTypes } from 'react'
import appHomeActions from '../actions/appHomeActions'
import appHomeStore from '../stores/appHomeStore'
import Dimensions from 'Dimensions'

// 屏幕宽度
var { width } = Dimensions.get('window')

import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

var AppButton = React.createClass({
  getInitialState: function () {
    return {
      color: 'red'
    }
  },

  componentDidMount: function () {
    appHomeStore.addChangeListener(this._handleUpdate)
  },
  componentWillUnmount: function () {
    appHomeStore.removeChangeListener(this._handleUpdate)
  },
  render: function () {
    return (
      <TouchableHighlight id='appBT' onPress={this._handlePress.bind(this, null)} style={[styles.mubutton, {backgroundColor: this.state.color}]}>
        <Text>Press Me To Change Color!</Text>
      </TouchableHighlight>
    )
  },
  _handlePress () {
    if (this.props.onAction) {
      console.log('\nonAction')
      this.props.onAction()
    }
    console.log('Pressed!')
    appHomeActions.pressClickButton()
  },
  _handleUpdate () {
    if (this.state.color === 'red') {
      this.setState({color: 'green'})
    } else {
      this.setState({color: 'red'})
    }
  }
})

var styles = StyleSheet.create({
  mubutton: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  }
})

AppButton.propTypes = {
  onAction: PropTypes.func
}

module.exports = AppButton
