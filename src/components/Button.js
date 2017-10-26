import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Spinner from 'react-native-spinkit'

const styles = StyleSheet.create({
  // default style applied to button views
  default: {
    width: 220,
    height: 60,

    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',

    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  // default style applied to button Text
  defaultText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '200',
    fontFamily: 'acrom-light'
  }
})

class Button extends React.Component {
  // static LoginTransparentButton = class extends React.Component {

  // }
  state = {
    scale: 1
  }
  static propsTypes = {
    elevation: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onPress: PropTypes.func,
    buttonTitle: PropTypes.string.isRequired,
    // style
    textStyle: PropTypes.object,
    spinnerType: PropTypes.oneOf([
      'CircleFlip',
      'Bounce',
      'Wave',
      'WanderingCubes',
      'Pulse',
      'ChasingDots',
      'ThreeBounce',
      'Circle',
      '9CubeGrid',
      'FadingCircle',
      'FadingCircleAlt'
    ])
  }

  static defaultProps = {
    spinnerType: 'ChasingDots',
    onPress: () => {},
    disabled: false,
    isLoading: false,
    textStyle: {}
  }

  render () {
    const { props } = this
    return (
      <View
        style={[
          // compose styleSheets
          styles.default,
          props.style,
          {
            transform: [
              {scale: this.state.scale}
            ]
          }
        ]}
        elevation={props.elevation}
        /** listeners */
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderStart={() => !props.disabled && this.setState({ scale: 0.95 })}
        onResponderRelease={() => !props.disabled && this.setState({ scale: 1 }, () => props.onPress && props.onPress())}
      >
        {
          props.isLoading
            ? <Spinner
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
              isVisible={true}
              size={40}
              type={props.spinnerType}
              color={'#ffffff'}
            />
            : <Text
              style={[props.textStyle, styles.defaultText]}
              children={props.buttonTitle}
            />
        }
      </View>
    )
  }
}

export const LoginButton = props =>
  <Button {...props} buttonTitle={'LOGIN'} style={{ marginTop: 40 }}/>

export const SignUpBlueButton = props =>
  <Button
    {...props}
    buttonTitle={'SIGN UP'}
    style={{ marginTop: 40, backgroundColor: '#33b5e5', borderWidth: 0 }}
    elevation={4}
  />
