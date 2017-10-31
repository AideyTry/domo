// import Vue from 'vue'
// import { Validator } from 'vee-validate'
// Vue.use(Validator)
// // 自定义验证器
// // 添加一个简单的手机号验证
// // 匹配0-9之间的数字,并且长度是11位
// Vue.validator('tel', function (val) {
//  return /^[0-9]{11}$/.test(val)
// })
// // 添加一个密码验证
// // 匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
// Vue.validator('passw', function (val) {
//  return /^(\w){6,20}$/.test(val)
// })
export const phoneConfig = {
    messages: {
        zh_CN: field => field + '请正确输入11位数字的手机号码'
    },
    validate: value => {
        return value.length === 11 && /[0-9]{11}$/.test(value)
    }
}
export const vcodeConfig = {
    messages: {
        zh_CN: field => field + '请输入正确的验证码'
    },
    validate: value => {
        return value.length === 6 && /[0-9]$/.test(value)
    }
}
export const passWordConfig = {
    messages: {
        zh_CN: field => field + '格式错误，请输入6-25位字符'
      },
    validate: value => {
        return value.length > 5 && value.length < 26 && /[a-zA-Z0-9._!@#$%^&~`(){}*]{5,26}$/.test(value)
    }
}