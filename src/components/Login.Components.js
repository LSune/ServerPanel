/**
 * 登录相关的组件，使用styled components装饰各个组件
 */
import React from 'react'
import PropTypes from 'prop-types'
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
  RightInput,
  RoundRectButton,
  AlignCenterText
} from './index'

const { width } = Dimensions.get('window')
const scale = v => parseInt(v * width / 360)
const icons = {
  person: require('../assets/icons/user_white@png.png'),
  lock: require('../assets/icons/password_white@png.png')
}

// ============================================================================================
// 登陆的最外层容器
export const LoginContainer = styled.View`
  flex: 1;
  padding-top: ${() => StatusBar.currentHeight};
  flex-direction: column;
`.withComponent(LinearGradient)

// ============================================================================================
// 登录的按钮组件
export const LoginButton = props => <RoundRectButton {...props} text={'LOG IN'}/>

// ============================================================================================
// 登录控件的包裹曾
export class LoginControlsWrapper extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    initHeight: PropTypes.number.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      heightAnim: new Animated.Value(props.initHeight)
    }
  }
  render () {
    return (
      <Animated.View
        style={[
          {
            height: this.state.heightAnim
            // height: this.props.height
          },
          this.props.style
        ]}
      >
        {this.props.children || null}
      </Animated.View>
    )
  }
  componentDidMount () {
    Animated.timing(
      this.state.heightAnim,
      {
        toValue: this.props.height,
        duration: 200
      }
    ).start()
  }
  componentWillReceiveProps (nextProps) {
    // this.setState(state, callback)
    this.setState({
      heightAnim: new Animated.Value(this.props.height)
    }, () => {
      Animated.timing(
        this.state.heightAnim,
        {
          toValue: nextProps.height,
          duration: 200
        }
      ).start()
    })
  }
}

// ============================================================================================
// 登录界面的输入框组件
export const LoginInput = styled(props => (
  <View style={props.style}>
    <LeftIcon source={icons[props.iconName]}/>
    <RightInput
      placeholder={props.placeholder}
      onChangeText={text => props.onChangeText && props.onChangeText(text)}
      onFocus={() => props.onFocus && props.onFocus()}
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
  
  margin-left: auto;
  margin-right: auto;
  
  border-radius: ${() => scale(12)};
  
  padding-left: ${() => scale(10)};
  padding-top: ${() => scale(5)};
  padding-bottom: ${() => scale(5)};
  padding-right: ${() => scale(10)};
  
  margin-bottom: ${() => scale(20)};
`

export const LoginInputUsername = LoginInput.extend.attrs({
  placeholder: 'USERNAME',
  password: false,
  iconName: 'person'
})``
export const LoginInputPassword = LoginInput.extend.attrs({
  placeholder: 'PASSWORD',
  password: true,
  iconName: 'lock'
})``
LoginInputUsername.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func
}
LoginInputPassword.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func
}

// ============================================================================================
// 忘记登录密码
export const LoginForgetPass = styled(props => (
  <TouchableOpacity style={props.style} onPress={() => props.onPress && props.onPress()}>
    <AlignCenterText underline={true} fontSize={14} children={'Forget Password?'}/>
  </TouchableOpacity>
))`
  bottom: ${10};
  position: absolute;
  
  width: 100%
`
