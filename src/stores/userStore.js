import { API_ROOT, HTTP_GET, HTTP_POST, JSON_CONTENT_TYPE } from '../consts/index'
import { observable, action } from 'mobx'

class UserStore {
  @observable inProgress = false

  @observable username = undefined
  @observable token = undefined

  @observable loginValues = {
    username: '',
    password: ''
  }

  @action setLoginUsername (username) {
    this.loginValues.username = username
  }

  @action setLoginPassword (password) {
    this.loginValues.password = password
  }

  @observable regValues = {
    username: '',
    password: '',
    email: ''
  }

  @action setRegUsername (username) {
    this.regValues.username = username
  }

  @action setRegEmail (email) {
    this.regValues.email = email
  }

  @action setRegPassword (password) {
    this.regValues.password = password
  }

  @action reset () {
    this.regValues.username = ''
    this.regValues.email = ''
    this.regValues.password = ''
  }

  @action register () {
    this.inProgress = true
    fetch(`${API_ROOT}/user/register`, {
      method: HTTP_POST,
      headers: {
        'Content-Type': JSON_CONTENT_TYPE
      },
      body: JSON.stringify(this.regValues)
    }).then(e => {
      this.inProgress = false
      console.log(e)
    })
  }

  @action login () {
    this.inProgress = true
    fetch(`${API_ROOT}/user/login`, {
      method: HTTP_POST,
      headers: {
        'Content-Type': JSON_CONTENT_TYPE
      },
      body: JSON.stringify(this.loginValues)
    }).then(e => {
      this.inProgress = false
      console.log(e)
    })
  }
}

export default new UserStore()
