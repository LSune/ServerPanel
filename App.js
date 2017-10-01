import React from 'react'
import { StatusBar, View, Alert } from 'react-native'
import { NativeRouter, AndroidBackButton } from 'react-router-native'
import styled from 'styled-components/native'

import RootRoute from './src/routes'

const RootContainer = styled.View`
  flex: 1;
`

export default class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <RootContainer>
          <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.1)'}/>
          <AndroidBackButton/>
          <RootRoute/>
        </RootContainer>
      </NativeRouter>
    )
  }
}

// BackHandler.addEventListener('hardwareBackPress', () => { Alert.alert('back'); return true })
