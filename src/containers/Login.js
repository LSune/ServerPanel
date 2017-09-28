import React from 'react'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

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
  render () {
    return (
      <LoginContainer
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#36D1DC', '#5B86E5']}
      >
        <LoginInputUsername iconName={'person'}/>
        <LoginInputPassword iconName={'lock'}/>
        <LoginButton onPress={() => Alert.alert('LOGIN TAPPED!')}/>
        <LoginForgetPass/>
      </LoginContainer>
    )
  }
}
