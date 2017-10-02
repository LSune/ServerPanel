import React from 'react'
import { StyleSheet, Alert, Keyboard, Text, Dimensions } from 'react-native'

import {
  LoginContainer,
  LoginButton
} from '../components/Login.Components'

import { FlexView, ViewWithSize, LogoViewWrapper, LogoView } from '../components'
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
        <LogoViewWrapper><LogoView/></LogoViewWrapper>
        <ViewWithSize height={width * 0.8} style={{ flexDirection: 'column' }}>
          <WhiteRegButton onPress={() => this.props.history.push('/signup')}/>
          <LoginButton onPress={() => this.props.history.push('/login')}/>
        </ViewWithSize>
      </LoginContainer>
    )
  }
}
