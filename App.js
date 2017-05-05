import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import BouncyHeartButton from './examples/BouncyHeartButton'
import HorizontalParallaxScrollView from './examples/HorizontalParallaxScrollView'
import FAB from './examples/FAB'
import SwipeAwayModal from './examples/SwipeAwayModal'
import ExpoPush from './examples/ExpoPush'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ExpoPush />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
