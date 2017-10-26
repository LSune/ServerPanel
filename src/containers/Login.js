import React from 'react'
import { StyleSheet, Alert, Keyboard, Text, Dimensions } from 'react-native'

import { LogoViewWrapper, LogoView } from '../components/Logo'

import { LoginInputU, LoginInputP } from '../components/Input'
import { LoginContainer, LoginControlsWrapper } from '../components/Wrapper'

import autobind from 'autobind-decorator'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'
import { LoginButton, LoginForgetPass } from '../components/Button'

const { width } = Dimensions.get('window')

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

  disposeErrorHandler = null

  handleUsernameChange = v => this.props.userStore.setLoginUsername(v)
  handlePasswordChange = v => this.props.userStore.setLoginPassword(v)

  render () {
    const { loginValues, inProgress } = this.props.userStore
    return (
      <LoginContainer>
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
          <LoginInputU
            value={loginValues.username}
            onChangeText={this.handleUsernameChange}
            onFocus={() => this.setState({showLogo: false})}
          />
          <LoginInputP
            value={loginValues.password}
            onChangeText={this.handlePasswordChange}
            onFocus={() => this.setState({showLogo: false})}
          />
          <LoginButton
            onPress={
              () => this.props.userStore.login()
                .then(() => this.props.history.push('/main/instances'))
            }
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
    this.disposeErrorHandler = autorun(() => {
      this.props.userStore.errors &&
        Alert.alert('登录失败！', this.props.userStore.errors.message)
      // this.props.userStore.clearErrors()
    })
  }
  componentWillUnmount () {
    Keyboard.removeListener('keyboardDidShow', this.handleKeyboardShow)
    Keyboard.removeListener('keyboardDidHide', this.handleKeyboardHide)
    this.disposeErrorHandler()
    this.props.userStore.clearErrors()
  }
}
