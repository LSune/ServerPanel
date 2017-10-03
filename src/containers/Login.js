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

import { LogoViewWrapper, LogoView } from '../components/index'

import autobind from 'autobind-decorator'

const { width } = Dimensions.get('window')

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.initialState = {
      username: '',
      password: '',
      wrapperHeight: width * 1,
      showLogo: true,
      loginButtonDisabled: false,
      loginButtonLoading: false
    }
  }
  render () {
    return (
      <LoginContainer
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#36D1DC', '#5B86E5']}
      >
        <LogoViewWrapper>
          {
            this.state.showLogo &&
            <LogoView/>
          }
        </LogoViewWrapper>
        <LoginControlsWrapper
          height={this.state.wrapperHeight}
          initHeight={this.state.wrapperHeight}
        >
          <LoginInputUsername
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            onFocus={() => this.setState({showLogo: false})}
          />
          <LoginInputPassword
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            onFocus={() => this.setState({showLogo: false})}
          />
          <LoginButton
            onPress={this.loginButtonOnPress}
            isLoading={this.state.loginButtonLoading}
            disabled={this.state.loginButtonDisabled}
          />
          <LoginForgetPass/>
        </LoginControlsWrapper>
      </LoginContainer>
    )
  }
  @autobind async loginButtonOnPress () {
    this.setState({ loginButtonLoading: true, loginButtonDisabled: true })
    await new Promise(resolve => setTimeout(resolve, 2000))
    this.setState({ loginButtonLoading: false, loginButtonDisabled: false })
  }
  @autobind handleKeyboardShow () {
    this.setState({ wrapperHeight: width * 0.85, showLogo: false })
  }
  @autobind handleKeyboardHide () {
    this.setState({ wrapperHeight: this.initialState.wrapperHeight, showLogo: true })
  }
  componentDidMount () {
    // 响应键盘的动作。
    Keyboard.addListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.addListener('keyboardDidHide', this.handleKeyboardHide)
  }
  componentWillUnmount () {
    Keyboard.removeListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.removeListener('keyboardDidHide', this.handleKeyboardHide)
  }
}
