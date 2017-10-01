import React from 'react'
import styled from 'styled-components/native'
import { View, Text, Dimensions, Alert } from 'react-native'

import {
  FullscreenContainer,
  CircleBackground,
  FlexView,
  SignUpHeadline,
  SignUpInputUsername
} from '../components/index'

const SignUpContainer = styled.View`
  padding-top: 0;
`

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
          <SignUpInputUsername iconName={'person'}/>
        </FlexView>
      </SignUpContainer>
    )
  }
}

Dimensions.addEventListener('change', e => { Alert.alert('Viewport Size Changed!', e.toString()) })
