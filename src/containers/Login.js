import React from 'react'
import { StyleSheet, Alert, Keyboard, Text, Dimensions } from 'react-native'

import {
  LoginContainer,
  LoginButton,
  LoginInputUsername,
  LoginInputPassword,
  LoginForgetPass,
  LoginControlsWrapper
} from '../components/Login.Components'

import { FlexView } from '../components/index'

const { width } = Dimensions.get('window')

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.initialState = {
      username: '',
      password: '',
      wrapperHeight: width * 1
    }
  }
  render () {
    return (
      <LoginContainer
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#36D1DC', '#5B86E5']}
      >
        <FlexView/>
        <LoginControlsWrapper height={this.state.wrapperHeight}>
          <LoginInputUsername
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <LoginInputPassword
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <LoginButton onPress={() => Alert.alert('LOGIN TAPPED!', [this.state.username, this.state.password].join(' '))}/>
          <LoginForgetPass/>
        </LoginControlsWrapper>
      </LoginContainer>
    )
  }
  componentDidMount () {
    // 响应键盘的动作。
    Keyboard.addListener('keyboardDidShow', () => this.setState({ wrapperHeight: width * 0.85 }))
    Keyboard.addListener('keyboardDidHide', () => this.setState({ wrapperHeight: this.initialState.wrapperHeight }))
  }
}
