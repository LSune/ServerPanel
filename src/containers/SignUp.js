import React from 'react'
import { View, Text, Dimensions, Alert, KeyboardAvoidingView, Keyboard } from 'react-native'

import { SignUpInputE, SignUpInputP, SignUpInputU } from '../components/Input'
import { SignUpBlueButton } from '../components/Button'
import CircleBackground from '../components/SignUpTitle'

import userStore from '../stores/userStore'
import { observer, inject } from 'mobx-react'

import autobind from 'autobind-decorator'

const { width } = Dimensions.get('window')

@inject('userStore')
@observer
export default class SignUp extends React.Component {
  state = {
    showTitle: true
  }
  handleUsernameChange = v => this.props.userStore.setRegUsername(v)
  handleEmailChange = v => this.props.userStore.setRegEmail(v)
  handlePasswordChange = v => this.props.userStore.setRegPassword(v)

  render () {
    const { regValues, inProgress } = this.props.userStore
    return (
      <View style={{ flex: 1, paddingTop: 0 }}>
        {
          this.state.showTitle &&
            <CircleBackground/>
        }
        <View
          style={{ paddingTop: 50, paddingBottom: 10 }}
        >
          <SignUpInputU
            onChangeText={this.handleUsernameChange}
            value={regValues.username}
          />

          <SignUpInputE
            onChangeText={this.handleEmailChange}
            value={regValues.email}
          />

          <SignUpInputP
            onChangeText={this.handlePasswordChange}
            value={regValues.password}
          />

          <SignUpBlueButton
            isLoading={inProgress}
            disabled={inProgress}
            onPress={() => this.props.userStore.register()}
          />
        </View>
      </View>
    )
  }
  @autobind handleKeyboardShow () {
    this.setState({ showTitle: false })
  }
  @autobind handleKeyboardHide () {
    this.setState({ showTitle: true })
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
