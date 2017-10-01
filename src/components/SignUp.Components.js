import React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import {
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated
} from 'react-native'

import {
  LeftIcon,
  RightInput, RoundRectButton,
  ViewWithSize
} from './index'
import { LoginControlsWrapper } from './Login.Components'

const { width } = Dimensions.get('window')
const scale = v => parseInt(v * width / 360)
const icons = {
  person: require('../assets/icons/user@png.png'),
  lock: require('../assets/icons/lock@png.png'),
  email: require('../assets/icons/email@png.png')
}

export const SignUpContainer = styled.View`
  padding-top: 0;
  flex: 1;
`

export const CircleBackground = styled(LinearGradient).attrs({
  start: {x: 0, y: 0.5},
  end: {x: 1, y: 0.5},
  colors: ['#36D1DC', '#5B86E5'],
  shadowColor: '#60CFFF',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 1,
  shadowRadius: 20,
  elevation: 20
})`
  width: ${() => scale(490)};
  height: ${() => scale(490)};
  
  background-color: aqua;
  
  border-radius: ${() => scale(490 / 2)};

  position: absolute;
  left: ${() => scale((360 - 490) / 2)};
  bottom: ${0};
`

export const SignUpHeadline = styled.Text`
  font-family: 'acrom';
  font-size: ${() => 36};
  
  text-align: center;
  color: #FFFFFF;
  
  bottom: ${() => 80};
  left: ${() => (490 - 360) / 2};
  position: absolute;
  
  width: ${() => 360}
`

export const SignUpInput = styled(props => (
  <View style={props.style}>
    <LeftIcon source={icons[props.iconName]}/>
    <RightInput
      placeholder={props.placeholder}
      onChangeText={(text) => props.onChangeText && props.onChangeText(text)}
      value={props.value}
      secureTextEntry={props.password}
      placeholderTextColor={'rgba(0,0,0,0.2)'}
      color={'#5e5e5e'}
    />
  </View>
))`
  display: flex;
  flex-direction: row;
  
  height: ${() => 48};
  width: ${() => 200};
  
  border-bottom-width: ${1};
  border-bottom-color: #AAAAAA88;
  
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${16};
`

export const SignUpInputUsername = SignUpInput.extend.attrs({
  placeholder: 'USERNAME',
  iconName: 'person'
})``
export const SignUpInputEmail = SignUpInput.extend.attrs({
  placeholder: 'E-MAIL',
  iconName: 'email'
})``
export const SignUpInputPassword = SignUpInput.extend.attrs({
  placeholder: 'PASSWORD',
  iconName: 'lock',
  password: true
})``

export const SignUpControlWrapper = styled(LoginControlsWrapper)`
  padding-top: ${48};
`

export const SignUpBlueButton = styled(props => {
  return <RoundRectButton {...props} text={'SIGN UP'}/>
}).attrs({
  elevation: 4
})`
  shadow-color: 'rgba(99,205,255,0.61)';
  shadow-opacity: 1;
  shadow-radius: 6;
  
  border-width: 0;
  background-color: #33b5e5;
`
