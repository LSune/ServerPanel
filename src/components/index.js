import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import React from 'react'

import {
  Dimensions,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
  Image,
  Animated,
  Button
} from 'react-native'

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
  
  transform: scale(0.8);
`

export const RightInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: props => props.placeholderTextColor || 'rgba(255,255,255,0.6)'
  // selectionColor: 'rgba(255,255,255,0.2)'
})`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  border-width: 0;
  padding-left: ${() => scale(10)};
  color: ${props => props.color || '#FFF'};
  font-family: 'acrom';
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

export const RoundRectButton = styled(class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scale: 1
    }
  }
  render () {
    const { props } = this
    return (
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        elevation={props.elevation}
        style={[
          // compose two styleSheet
          {
            transform: [
              {scale: this.state.scale}
            ]
          },
          props.style
        ]}
        onResponderStart={() => this.setState({ scale: 0.95 })}
        onResponderRelease={() => this.setState({ scale: 1 }, () => props.onPress && props.onPress())}
      >
        <AlignCenterText children={props.text} color={props.color}/>
      </View>
    )
  }
})`
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

const LogoIcon = styled.Image`
  height: ${80};
  width: ${80 * 227 / 216};
`

const LogoText = styled.Text`
  height: ${80};
  text-align-vertical: center;
  font-size: ${50};
  color: #fff;
  font-family: 'acrom';
  margin-left: ${10}
`

export const LogoView = styled(props => (
  <View {...props}>
    <LogoIcon source={require('../assets/icons/Group@png.png')}/>
    <LogoText>Panel</LogoText>
  </View>
))`
  flex-direction: row;
  justify-content: center;
`

export const LogoViewWrapper = FlexView.extend`
  flex-direction: column;
  justify-content: center;
`
