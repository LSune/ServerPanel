import React from 'react'
import { View, Text, Dimensions, Alert } from 'react-native'

import { FlexView } from '../components'

import {
  CircleBackground,
  SignUpHeadline,
  SignUpInputUsername,
  SignUpInputEmail,
  SignUpInputPassword,
  SignUpContainer
} from '../components/SignUp.Components'

export default class SignUp extends React.Component {
  render () {
    return (
      <SignUpContainer>
        <FlexView flexGrow={2}>
          <CircleBackground>
            <SignUpHeadline>
              Create Your Account
            </SignUpHeadline>
          </CircleBackground>
        </FlexView>
        <FlexView flexGrow={3}>
          <SignUpInputUsername/>
          <SignUpInputEmail/>
          <SignUpInputPassword/>
        </FlexView>
      </SignUpContainer>
    )
  }
}
