import React from 'react'
import { View, Text, Dimensions, Alert } from 'react-native'

import { FlexView } from '../components'

import {
  CircleBackground,
  SignUpHeadline,
  SignUpContainer,
  SignUpControlWrapper
} from '../components/SignUp.Components'

import { SignUpInputE, SignUpInputP, SignUpInputU } from '../components/Input'
import { SignUpBlueButton } from '../components/Button'

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
        </SignUpControlWrapper>
      </SignUpContainer>
    )
  }
}
