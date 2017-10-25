import React from 'react'
import { StatusBar, View, Alert } from 'react-native'
import { NativeRouter, AndroidBackButton } from 'react-router-native'
import styled from 'styled-components/native'
import { Provider } from 'mobx-react'
import RootRoute from './src/routes'

import userStore from './src/stores/userStore'

const stores = {
  userStore
}

const RootContainer = styled.View`
  flex: 1;
`

export default class App extends React.Component {
  render () {
    return (
      <Provider {...stores}>
        <NativeRouter>
          <RootContainer>
            <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.1)'}/>
            <AndroidBackButton/>
            <RootRoute/>
          </RootContainer>
        </NativeRouter>
      </Provider>
    )
  }
}

// BackHandler.addEventListener('hardwareBackPress', () => { Alert.alert('back'); return true })
