import ajax from '../utils/fetch'
import Vue from 'vue'
// 查询用户权限,登录接口
export const getToken = params => {
  return ajax.post('/user/login', params)
}

// 注销接口
export const delToken = params => {
  Vue.cookie.delete('login')
  return ajax.post('/user/logout', params)
}

// 获取验证码
export const sendVcode = params => {
  return ajax.post('/user/sendVcode', params)
}

// 验证码登录
export const vcodeLogin = params => {
  return ajax.post('/user/vcodeLogin', params)
}
