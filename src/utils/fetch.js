import axios from 'axios'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
// import { Loading } from 'iview'
import store from '../store'
import mainEntry from '../main'
// import {baseUrl} from '../config/env'
Vue.use(VueCookie)
// import Loading from '../components/init/loading'
// const loading = Vue.extend(Loading)
let ajax = axios.create({
  // baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 100000,
  transformRequest: [function (data) {
    if (data instanceof FormData) {
      // console.log(data)
      return data
    }
    // console.log(data)
    return data
  }]
})

// 拦截请求
ajax.interceptors.request.use((config) => {
  console.log('mainEntry=', mainEntry)
  store.dispatch('fetchLoading', true)
  // mainEntry.handleSpinCustom()
  // Loading.service({ fullscreen: true })
  console.log('config=', config)
  config.headers.token = Vue.cookie.get('login')
  return config
}, error => {
  return Promise.reject(error)
})

// 拦截响应
ajax.interceptors.response.use(response => {
  setTimeout(function () {
    store.dispatch('fetchLoading', false)
  }, 20)
  return response
}, error => {
  return error.response
})

export default ajax