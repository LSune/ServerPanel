import React from 'react'
import { StyleSheet, Alert, Keyboard, Text, Dimensions } from 'react-native'

import {
  LoginContainer,
  LoginButton
} from '../components/Login.Components'

import { FlexView, ViewWithSize } from '../components'
import { WhiteRegButton } from '../components/Entry.Components'

const { width } = Dimensions.get('window')

export default class Entry extends React.Component {
  render () {
    return (
      <LoginContainer
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#36D1DC', '#5B86E5']}
      >
        <FlexView/>
        <ViewWithSize height={width * 1.2} style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <WhiteRegButton onPress={() => this.props.history.push('/signup')}/>
          <LoginButton onPress={() => this.props.history.push('/login')}/>
        </ViewWithSize>
      </LoginContainer>
    )
  }
}
