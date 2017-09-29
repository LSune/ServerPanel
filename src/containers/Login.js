import React from 'react'
import { StyleSheet, TouchableOpacity, Alert, Text } from 'react-native'
import { Link } from 'react-router-native'
import LinearGradient from 'react-native-linear-gradient'

import {
  FullscreenContainer,
  LoginButton,
  LoginInputUsername,
  LoginInputPassword,
  LoginForgetPass
} from '../components'

// using LinearGradient as a component to styled it
const LoginContainer = FullscreenContainer.withComponent(LinearGradient)

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  render () {
    return (
      <LoginContainer
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#36D1DC', '#5B86E5']}
      >
        <LoginInputUsername
          iconName={'person'}
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <LoginInputPassword
          iconName={'lock'}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <LoginButton onPress={() => Alert.alert('LOGIN TAPPED!', [this.state.username, this.state.password].join(' '))}/>
        <Link to={'/signup'}>
          <Text>aaaaaa</Text>
        </Link>
      </LoginContainer>
    )
  }
}
