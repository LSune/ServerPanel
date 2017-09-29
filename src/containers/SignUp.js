import React from 'react'
import { View, Text } from 'react-native'

import { FullscreenContainer, CircleBackground, FlexView, SignUpHeadline, SignUpInputUsername } from '../components/index'

const SignUpContainer = FullscreenContainer.extend`
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
