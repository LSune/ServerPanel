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

const { width } = Dimensions.get('window')

export default class SignUp extends React.Component {
  render () {
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
          <SignUpInputUsername/>
          <SignUpInputEmail/>
          <SignUpInputPassword/>
          <SignUpBlueButton/>
        </SignUpControlWrapper>
      </SignUpContainer>
    )
  }
}
