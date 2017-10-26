import React from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  circleWrapper: {
    height: width * 0.7,
    overflow: 'hidden'
  },
  circle: {
    position: 'absolute',
    bottom: 0,
    height: 1.5 * width,
    width: 1.5 * width,
    borderRadius: 0.75 * width,
    left: (width - 1.5 * width) / 2
  },
  text: {
    fontFamily: 'acrom',
    fontSize: 36,

    textAlign: 'center',
    color: '#FFFFFF',

    width
  },
  textWrapper: {
    height: width * 0.7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default CircleBackground = props =>
  <View
    style={[styles.circleWrapper, props.style]}
  >
    <LinearGradient
      style={styles.circle}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#36D1DC', '#5B86E5']}
      elevation={20}
    />
    <View style={styles.textWrapper} elevation={21}>
      <Text style={[styles.text, props.textStyle]} children={'Create Your'}/>
      <Text style={[styles.text, props.textStyle]} children={'Account'}/>
    </View>
  </View>
