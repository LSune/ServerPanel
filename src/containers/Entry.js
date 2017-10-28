import React from 'react'
import { Alert, Text, Dimensions, View, AsyncStorage } from 'react-native'

import { LoginContainer } from '../components/Wrapper'
import { LoginButton, SignUpWhiteButton } from '../components/Button'
import { LogoViewWrapper, LogoView } from '../components/Logo'

import userStore from '../stores/userStore'

const { width } = Dimensions.get('window')

export default class Entry extends React.Component {
  state = { checkingLoginStatus: true }

  render () {
    return (
      // avoid flash
      !this.state.checkingLoginStatus &&
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

  async componentWillMount () {
    // Alert.alert('aaaa', (await AsyncStorage.getAllKeys()).join(' '))
    this.setState({ checkingLoginStatus: true })
    if (await userStore.loggedIn) {
      this.props.history.replace('/main/instances')
    } else {
      this.setState({ checkingLoginStatus: true })
    }
  }
}
