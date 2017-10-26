export const fetchErrorHandler = res => {
  if (res.status !== 200) {
    if (res.status === 500) {
      return Promise.reject(new Error('服务端出了不可预知的错误'))
    } else {
      return res.json().then(json => Promise.reject(new Error(json.msg)))
    }
  } else {
    return res.json()
  }
}
