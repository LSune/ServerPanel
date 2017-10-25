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
import { observer, inject } from 'mobx-react'
import { LoginTransparentButton } from '../components/Button'

const { width } = Dimensions.get('window')
console.log(LoginTransparentButton)

@inject('userStore')
@observer
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    // 这些状态是在我接触mobx之前写的，不是
    // 很优雅，但是我想把他们放在这里起提醒作用
    this.state = this.initialState = {
      wrapperHeight: width * 1,
      showLogo: true
    }
  }

  handleUsernameChange = v => this.props.userStore.setLoginUsername(v)
  handlePasswordChange = v => this.props.userStore.setLoginPassword(v)

  render () {
    const { loginValues, inProgress } = this.props.userStore
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
            value={loginValues.username}
            onChangeText={this.handleUsernameChange}
            onFocus={() => this.setState({showLogo: false})}
          />
          <LoginInputPassword
            value={loginValues.password}
            onChangeText={this.handlePasswordChange}
            onFocus={() => this.setState({showLogo: false})}
          />
          <LoginButton
            onPress={() => this.props.userStore.login()}
            isLoading={inProgress}
            disabled={inProgress}
          />
          <LoginForgetPass/>
        </LoginControlsWrapper>
      </LoginContainer>
    )
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
