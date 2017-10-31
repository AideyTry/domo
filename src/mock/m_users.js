import ajax from '../utils/fetch'
// import axios from 'axios'
import Vue from 'vue'
// 查询用户权限,登录接口
export const getToken = (params) => {
  return ajax.get('/mock/login', {params: params}).then((res) => {
    return Promise.resolve(res)
    }).catch((err) => {
      console.log(err)
    })
  }

// export const getToken = (params) => {
//   return ajax.get('/mock/login', {params: params})
// }

export const delToken = (params) => {
    return ajax.get('/mock/logout', {params: params}).then((res) => {
      Vue.cookie.delete('login')
      // window.location.reload()
      history.go(0)
      return Promise.resolve(res)
    }).catch((err) => {
      return Promise.reject(err)
    })
  }