import React from 'react'
import { StyleSheet, StatusBar, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  loginContainer: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column'
  }
})

export const LoginContainer = props =>
  <LinearGradient
    start={{x: 0, y: 1}}
    end={{x: 1, y: 0}}
    colors={['#36D1DC', '#5B86E5']}
    style={styles.loginContainer}
    children={props.children}
  />

export class LoginControlsWrapper extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    initHeight: PropTypes.number.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      heightAnim: new Animated.Value(props.initHeight)
    }
  }
  render () {
    return (
      <Animated.View
        style={[
          {
            height: this.state.heightAnim
            // height: this.props.height
          },
          this.props.style
        ]}
      >
        {this.props.children || null}
      </Animated.View>
    )
  }
  componentDidMount () {
    Animated.timing(
      this.state.heightAnim,
      {
        toValue: this.props.height,
        duration: 200
      }
    ).start()
  }
  componentWillReceiveProps (nextProps) {
    // this.setState(state, callback)
    this.setState({
      heightAnim: new Animated.Value(this.props.height)
    }, () => {
      Animated.timing(
        this.state.heightAnim,
        {
          toValue: nextProps.height,
          duration: 200
        }
      ).start()
    })
  }
}
