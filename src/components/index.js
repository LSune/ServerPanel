import styled from 'styled-components/native'
import React from 'react'

import { Dimensions, StatusBar, Text, TouchableOpacity, View, Image } from 'react-native'

const { width } = Dimensions.get('window')
const scale = (v) => parseInt(v * width / 360)
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
  text-decoration-line: ${props => props.underline ? 'underline' : 'none'};
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

// 登录的输入框的组件
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

// 一个通用性较高的组件
export const LoginInput = styled(props => (
  <View style={props.style}>
    <LeftIcon source={icons[props.iconName]}/>
    <RightInput
      placeholder={props.placeholder}
      onChangeText={(text) => props.onChangeText && props.onChangeText(text)}
      value={props.value}
      secureTextEntry={props.password}
    />
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
  position: absolute;
  
  border-radius: ${() => scale(10)};
  
  padding-left: ${() => scale(10)};
  padding-top: ${() => scale(5)};
  padding-bottom: ${() => scale(5)};
  padding-right: ${() => scale(10)};
`

export const LoginInputUsername = LoginInput.extend.attrs({
  placeholder: 'USERNAME',
  password: false
})`
  top: ${() => scale(280)};
`
export const LoginInputPassword = LoginInput.extend.attrs({
  placeholder: 'PASSWORD',
  password: true
})`
  top: ${() => scale(352)};
`

// 忘记登录密码
export const LoginForgetPass = styled(props => (
  <TouchableOpacity style={props.style} onPress={() => props.onPress && props.onPress()}>
    <AlignCenterText underline={true} fontSize={14} children={'Forget Password?'}/>
  </TouchableOpacity>
))`
  top: ${() => scale(615)};
  position: absolute;
  width: 100%
`
