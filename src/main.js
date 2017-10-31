import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import vSelect from 'vue-select'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import {phoneConfig, vcodeConfig, passWordConfig} from './utils/validation'
import store from './store'
// import ajax from './utils/fetch'
import Loading from './components/init/loading.vue'
Vue.config.productionTip = false
Vue.use(iView)
// Vue.use(vSelect)
// install: function(Vue){
//   Vue.component('Loading', MyLoading)
// }
// const loading = {
//   install: function (Vue) {
//     Vue.component('Loading', Loading)
//   }
// }
Vue.use(Loading)
Validator.addLocale(zh)
const config = {
  locale: 'zh_CN'
}
Vue.use(VeeValidate, config)
const dictionary = {
  zh_CN: {
    messages: {
      carnum: () => '车牌号不正确',
      required: (field) => '请输入' + field
    },
    attributes: {
      carnum: '车牌号',
      phone: '手机号码:',
      vcode: '验证码：',
      passWord: '密码:',
      userName: '用户名'
    }
  }
}
// Vue.validator('tel', function (val) {
//   return /^[0-9]{11}$/.test(val)
//  })
Validator.updateDictionary(dictionary)
Validator.extend('carnum', {
  messages: {
    zh_CN: field => field + '车牌号不正确'
  },
  validate: value => {
    return /^[1-9][0-9]{4,14}$/.test(value)
  }
})

Validator.extend('phone', phoneConfig)

Validator.extend('vcode', vcodeConfig)

Validator.extend('passWord', passWordConfig)
// const AppComponent = Vue.extend(Loading)
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  // loading,
  render: h => h(App)
})

export default app
