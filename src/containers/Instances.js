import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { View, StyleSheet } from 'react-native'

import InstancesOverview from '../components/InstancesOverview'

const styles = StyleSheet.create({
  defaultView: {
    flexGrow: 1
  }
})

export default class Instances extends React.Component {
  render () {
    return (
      <View style={styles.defaultView}>
        <InstancesOverview/>
      </View>
    )
  }
}
