import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  defalutIcon: {
    height: 80,
    width: 80 * 227 / 216
  },
  defalutText: {
    height: 80,
    textAlignVertical: 'center',
    fontSize: 50,
    color: '#fff',
    fontFamily: 'acrom',
    marginLeft: 10
  },
  defalutLogoWrapper: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export const LogoView = props =>
  <View
    {...props}
    style={[styles.default, props.style]}
  >
    <Image source={require('../assets/icons/Group@png.png')} style={[styles.defalutIcon, props.iconStyle]}/>
    <Text style={[styles.defalutText, props.textStyle]} children={'Panel'}/>
  </View>

export const LogoViewWrapper = props =>
  <View {...props} style={[styles.defalutLogoWrapper, props.style]}/>
