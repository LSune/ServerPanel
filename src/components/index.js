import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { Dimensions, StatusBar, Text, TouchableOpacity, View, Image, Animated } from 'react-native'

const { width } = Dimensions.get('window')
const scale = (v) => parseInt(v * width / 360)
const icons = {
  person: require('../assets/icons/ic_person_white_48dp.png'),
  lock: require('../assets/icons/ic_lock_outline_white_48dp.png')
}

// 居中的Text
export const AlignCenterText = styled.Text`
  text-align: center;
  color: ${props => props.color || '#ffffff'};
  font-size: ${props => scale(props.fontSize || 20)};
  font-weight: 200;
  font-family: 'acrom-light';
  text-decoration-line: ${props => props.underline ? 'underline' : 'none'};
`

export const LeftIcon = styled.Image`
  width: ${() => scale(24)};
  height: ${() => scale(24)};
  
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: ${() => scale(10)};
  margin-bottom: ${() => scale(10)};
`

export const RightInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: 'rgba(255,255,255,0.6)'
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

// flex-box 的组件
export const FlexView = styled.View`
  flex-grow: ${props => props.flexGrow || 1};
  flex-shrink: ${props => props.flexShrink || 0};
`
FlexView.propTypes = {
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number
}

// View with size
export const ViewWithSize = styled.View`
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
`
ViewWithSize.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

export const SignUpHeadline = styled.Text`
  font-family: 'acrom';
  font-size: ${() => scale(36)};
  
  text-align: center;
  color: #FFFFFF;
  
  bottom: ${() => scale(80)};
  left: ${() => scale((490 - 360) / 2)};
  position: absolute;
  
  width: ${() => scale(360)}
`

export const SignUpInput = styled(props => (
  <View style={props.style}>
    <LeftIcon source={icons[props.iconName]}/>
    <RightInput
      placeholder={props.placeholder}
      onChangeText={(text) => props.onChangeText && props.onChangeText(text)}
      value={props.value}
      secureTextEntry={props.password}
    />
  </View>
))`
  display: flex;
  flex-direction: row;
  height: ${() => scale(48)};
  width: ${() => scale(200)};
  border-bottom-width: ${1};
  border-bottom-color: #AAAAAA88;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
`

export const SignUpInputUsername = SignUpInput.extend`

`

export const RoundRectButton = styled(props => (
  <TouchableOpacity style={props.style} onPress={() => props.onPress && props.onPress()}>
    <AlignCenterText children={props.text} color={props.color}/>
  </TouchableOpacity>
))`
  width: ${() => scale(172)};
  height: ${() => scale(53)};
  
  border-radius: ${() => scale(53 / 2)};
  border: solid 1px #fff;
  
  background-color: ${props => props.backgroundColor};
  
  margin-left: auto;
  margin-right: auto;
  margin-top: ${() => width * 0.1};
  
  display: flex;
  flex-direction: column;
  justify-content: center;  
`
RoundRectButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string
}
RoundRectButton.defaultProps = {
  backgroundColor: 'transparent',
  color: '#FFF',
  onPress: () => {}
}
