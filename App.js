import React from 'react'
import { StatusBar, View, Alert } from 'react-native'
import { NativeRouter, AndroidBackButton } from 'react-router-native'
import { Provider } from 'mobx-react'
import RootRoute from './src/routes'

import userStore from './src/stores/userStore'

const stores = {
  userStore
}

export default class App extends React.Component {
  render () {
    return (
      <Provider {...stores}>
        <NativeRouter>
          <View style={{ flexGrow: 1 }}>
            <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.1)'}/>
            <AndroidBackButton/>
            <RootRoute/>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}

// BackHandler.addEventListener('hardwareBackPress', () => { Alert.alert('back'); return true })
