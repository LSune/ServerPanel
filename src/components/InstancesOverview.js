import React from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  defaultOverview: {
    height: width * 0.6
  }
})

export const InstancesOverview = props =>
  <LinearGradien
    start={{x: 0, y: 1}}
    end={{x: 1, y: 0}}
    colors={['#FF5B86E5', '#FF36D1DC']}
    {...props}
    style={[styles.defaultOverview, props.style]}
  >
    
  </LinearGradient>
