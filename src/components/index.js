import styled from 'styled-components/native'
import React from 'react'

import { Dimensions, StatusBar, Text, TouchableOpacity, View, Image } from 'react-native'

const { width, height } = Dimensions.get('window')
const scale = (v) => parseInt(v * width / 360)
const noop = () => {}
const icons = {
  person: require('../assets/icons/ic_person_white_48dp.png'),
  lock: require('../assets/icons/ic_lock_outline_white_48dp.png')
}

// 全屏容器，适用于不同的主路由
export const FullscreenContainer = styled.View`
  flex: 1;
  padding-top: ${() => StatusBar.currentHeight};
`

// 居中的Text
export const AlignCenterText = styled.Text`
  text-align: center;
  color: ${props => props.color || '#ffffff'};
  font-size: ${props => scale(props.fontSize || 20)};
  font-weight: 200;
  font-family: 'acrom-light';
`

// 登录的按钮组件
export const LoginButton = styled(props => (
  <TouchableOpacity style={props.style} onPress={() => props.onPress && props.onPress()}>
    <AlignCenterText children={'LOG IN'}/>
  </TouchableOpacity>
))`
  width: ${() => scale(172)};
  height: ${() => scale(53)};
  
  border-radius: ${() => scale(53 / 2)};
  border: solid 1px #fff;
  
  background-color: transparent;
  
  left: ${() => scale(97)};
  top: ${() => scale(473)};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: absolute;  
`

const LeftIcon = styled.Image`
  width: ${() => scale(24)};
  height: ${() => scale(24)};
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: ${() => scale(10)};
  margin-bottom: ${() => scale(10)};
`

const RightInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: '#FFFFFF'
  // selectionColor: 'rgba(255,255,255,0.2)'
})`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  border-width: 0;
  padding-left: ${() => scale(10)};
  color: #ffffff;
  font-family: 'acrom';
`

export const LoginInputUsername = styled(props => (
  <View style={props.style}>
    <LeftIcon source={icons[props.iconName]}/>
    <RightInput placeholder={props.placeholder}/>
  </View>
)).attrs({
  placeholder: 'USERNAME'
})`
  display: flex;
  flex-direction: row;
  
  height: ${() => scale(56)};
  width: ${() => scale(225)};
  
  background-color: rgba(255,255,255,0.22);
  
  left: ${() => scale(68)};
  top: ${() => scale(280)};
  position: absolute;
  
  border-radius: ${() => scale(10)};
  
  padding-left: ${() => scale(10)};
  padding-top: ${() => scale(5)};
  padding-bottom: ${() => scale(5)};
  padding-right: ${() => scale(10)};
`

export const LoginInputPassword = LoginInputUsername.extend.attrs({
  placeholder: 'PASSWORD'
})`
  top: ${() => scale(352)};
`

const AlignCenterTextUnderline = AlignCenterText.extend`
  text-decoration-line: underline;
`

export const LoginForgetPass = styled(props => (
  <TouchableOpacity style={props.style} onPress={() => props.onPress && props.onPress()}>
    <AlignCenterTextUnderline fontSize={14} children={'Forget Password?'}/>
  </TouchableOpacity>
))`
  bottom: ${5};
  position: absolute;
  width: 100%
`
