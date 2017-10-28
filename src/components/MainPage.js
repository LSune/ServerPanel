import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  defaultMain: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  defaultViewport: {
    flexGrow: 1
  },
  defaultToolBar: {
    height: 60,
    flexGrow: 0,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 7
  },
  defaultBottomSub: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  activeSub: {},
  activeText: {
    color: '#5AD2FE',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'acrom',
    fontWeight: 'bold'
  },
  normalText: {
    color: '#aaaaaa',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'acrom',
    fontWeight: 'bold'
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // transform: [{ scale: 0.5 }],
    height: 30,
    width: 30
  }
})

const icons = [
  [require('../assets/icons/server@png.png'), require('../assets/icons/server_grey@png.png')],
  [require('../assets/icons/containers@png.png'), require('../assets/icons/containers_grey@png.png')],
  [require('../assets/icons/status@png.png'), require('../assets/icons/status_grey@png.png')],
  [require('../assets/icons/settings@png.png'), require('../assets/icons/settings_grew@png.png')]
]

const MainPage = props =>
  <View style={styles.defaultMain}>
    <View style={styles.defaultViewport}>{props.children}</View>
    <View style={styles.defaultToolBar}>
      {
        ['Instances', 'Dockers', 'Status', 'Settings'].map((text, value) =>
          <View
            elevation={4}
            key={value}
            style={[styles.defaultBottomSub, props.activeSub === value ? styles.activeSub : {}]}
          >
            <Image
              style={styles.image}
              source={icons[value][Number(props.activeSub !== value)]}
            />
            <Text style={props.activeSub === value ? styles.activeText : styles.normalText}>{text}</Text>
          </View>
        )
      }
    </View>
  </View>
MainPage.propTypes = {
  activeSub: PropTypes.number
}
MainPage.defaultProps = {
  activeSub: 0
}
export default MainPage
