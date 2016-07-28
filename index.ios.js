/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import AppButton from './iOS_app/components/AppButton'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

class HiLive extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AppButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('HiLive', () => HiLive)

