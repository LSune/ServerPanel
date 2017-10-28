import { API_ROOT, HTTP_GET, HTTP_POST, JSON_CONTENT_TYPE } from '../consts/index'
import { observable, action } from 'mobx'
import { fetchErrorHandler } from '../utils'

class ServerStore {
  @observable requesting = false

  @observable fetching = false
}

export default new ServerStore()
