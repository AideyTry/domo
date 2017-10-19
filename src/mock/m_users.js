// import ajax from '../utils/fetch'
import axios from 'axios'
import Vue from 'vue'
// 查询用户权限,登录接口
export const getToken = (params) => {
  return axios.get('/mock/login', {params: params}).then((res) => {
    return Promise.resolve(res)
    }).catch((err) => {
      console.log(err)
    })
  }

export const delToken = (params) => {
    return axios.get('/mock/logout', {params: params}).then((res) => {
      Vue.cookie.delete('login')
      return Promise.resolve(res)
    }).catch((err) => {
      return Promise.reject(err)
    })
  }