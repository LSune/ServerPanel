import React from 'react'
import { StyleSheet, Alert, Keyboard, Text, Dimensions, View } from 'react-native'

import { LoginContainer } from '../components/Wrapper'
import { LoginButton, SignUpWhiteButton } from '../components/Button'
import { LogoViewWrapper, LogoView } from '../components/Logo'

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
        <View style={{ flexDirection: 'column', height: width * 0.8 }}>
          <SignUpWhiteButton onPress={() => this.props.history.push('/signup')}/>
          <LoginButton onPress={() => this.props.history.push('/login')}/>
        </View>
      </LoginContainer>
    )
  }
}
