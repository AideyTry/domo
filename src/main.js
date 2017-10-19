import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import store from './store'
Vue.config.productionTip = false
Vue.use(iView)

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
      phone: '手机号码',
      passWord: '密码',
      userName: '用户名'
    }
  }
}
Validator.updateDictionary(dictionary)
Validator.extend('carnum', {
  messages: {
    zh_CN: field => field + '车牌号不正确'
  },
  validate: value => {
    return /^[1-9][0-9]{4,14}$/.test(value)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
