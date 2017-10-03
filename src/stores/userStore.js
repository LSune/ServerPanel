import { observable, action } from 'mobx'

class UserStore {
  @observable username
  @action register () {
    fetch('http://')
  }
}
