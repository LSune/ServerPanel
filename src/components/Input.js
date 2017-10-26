import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, View, TextInput } from 'react-native'

const styles = StyleSheet.create({
  leftIcon: {
    width: 24,
    height: 24,

    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    marginTop: 10,
    marginBottom: 10,

    transform: [{ scale: 0.8 }]
  },
  textInput: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    borderWidth: 0,
    paddingLeft: 10,
    color: '#FFF',
    fontFamily: 'acrom'
  },
  textInputView: {
    display: 'flex',
    flexDirection: 'row',

    height: 56,
    width: 225,

    backgroundColor: 'rgba(255,255,255,0.22)',

    marginLeft: 'auto',
    marginRight: 'auto',

    borderRadius: 12,

    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,

    marginBottom: 20
  }
})

/**
 * @param {*} props
 * @return {React.Component}
 */
export const Input = props =>
  <View style={[styles.textInputView, props.wrapperStyle]}>
    <Image style={styles.leftIcon} source={props.iconSource}/>
    <TextInput
      underlineColorAndroid={'transparent'}
      placeholderTextColor={'rgba(255,255,255,0.6)'}
      {...props}
      style={[styles.textInput, props.style]}
    />
  </View>
Input.propTypes = {
  iconSource: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  wrapperStyle: PropTypes.object
}
Input.defaultProps = {
  placeholder: 'INPUT HERE',
  wrapperStyle: null
}

/**
 * @param {*} props
 * @return {React.Component}
 */
export const LoginInputU = props =>
  Input({
    ...props,
    iconSource: require('../assets/icons/user_white@png.png'),
    placeholder: 'USERNAME'
  })

/**
 * @param {*} props
 * @return {React.Component}
 */
export const LoginInputP = props => {
  return Input({
    ...props,
    iconSource: require('../assets/icons/password_white@png.png'),
    placeholder: 'PASSWORD',
    secureTextEntry: true
  })
}

const SignUpInput = props =>
  Input({
    ...props,
    wrapperStyle: {
      height: 50,

      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#AAAAAA88',

      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 20,

      paddingTop: 1,
      paddingBottom: 1,

      borderRadius: 0
    },
    style: {
      color: '#5e5e5e'
    },
    placeholderTextColor: 'rgba(0,0,0,0.2)'
  })

/**
 * @param {*} props
 * @return {React.Component}
 */
export const SignUpInputU = props =>
  SignUpInput({
    ...props,
    iconSource: require('../assets/icons/user@png.png'),
    placeholder: 'USERNAME'
  })

/**
 * @param {*} props
 * @return {React.Component}
 */
export const SignUpInputE = props => {
  return SignUpInput({
    ...props,
    iconSource: require('../assets/icons/email@png.png'),
    placeholder: 'E-MAIL'
  })
}

/**
 * @param {*} props
 * @return {React.Component}
 */
export const SignUpInputP = props => {
  return SignUpInput({
    ...props,
    iconSource: require('../assets/icons/lock@png.png'),
    placeholder: 'PASSWORD',
    secureTextEntry: true
  })
}
