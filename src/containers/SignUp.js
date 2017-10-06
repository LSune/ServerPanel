import React from 'react'
import { View, Text, Dimensions, Alert } from 'react-native'

import { FlexView } from '../components'

import {
  CircleBackground,
  SignUpHeadline,
  SignUpInputUsername,
  SignUpInputEmail,
  SignUpInputPassword,
  SignUpContainer,
  SignUpControlWrapper,
  SignUpBlueButton
} from '../components/SignUp.Components'

import userStore from '../stores/userStore'
import { observer, inject } from 'mobx-react'

const { width } = Dimensions.get('window')

@inject('userStore')
@observer
export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    // todo
    console.log(props)
  }

  handleUsernameChange = v => this.props.userStore.setRegUsername(v)
  handleEmailChange = v => this.props.userStore.setRegEmail(v)
  handlePasswordChange = v => this.props.userStore.setRegPassword(v)

  render () {
    const { regValues, inProgress } = this.props.userStore
    return (
      <SignUpContainer>
        <FlexView>
          <CircleBackground>
            <SignUpHeadline>
              Create Your Account
            </SignUpHeadline>
          </CircleBackground>
        </FlexView>
        <SignUpControlWrapper height={width * 1.1} initHeight={width * 1.1}>
          <SignUpInputUsername
            onChangeText={this.handleUsernameChange}
            value={regValues.username}
          />

          <SignUpInputEmail
            onChangeText={this.handleEmailChange}
            value={regValues.email}
          />

          <SignUpInputPassword
            onChangeText={this.handlePasswordChange}
            value={regValues.password}
          />

          <SignUpBlueButton
            isLoading={inProgress}
            disabled={inProgress}
            onPress={this.props.userStore.register()}
          />
        </SignUpControlWrapper>
      </SignUpContainer>
    )
  }
}
