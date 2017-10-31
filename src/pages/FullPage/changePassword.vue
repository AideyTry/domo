<template>
  <div class="Login">
    <div class="signbox">
      <div class="close" v-goto="'登录'"><img src="../../assets/images/close-icon.png" alt=""></div>
      <strong>忘记密码</strong>
      <div class="sign" @keydown.enter="Signin">
        <div class="phone"><input type="text" placeholder="请输入登录账号（登录账号为手机号）" v-model="phoneNumber"></div>
        <div class="modify"><input type="text" placeholder="请输入验证码" v-model="vcode">
          <button class="Send" @click="selectCode()">
            <span v-if="(showCode === false)">发送验证码</span>
            <span v-if="showCode">{{currentTime}}s</span>
          </button>
        </div>
        <div class="lock"><input type="password" placeholder="请输入6-25个字符" v-model="password">
          <span class="eye closeEye"></span>
        </div>
        <button class="signbtn" @click="updateEnd">完成修改</button>
        <Alert type="error" show-icon v-show="err" style="margin:20px auto;z-index:999;">
          <span slot="desc" style="font-size:20px;color:Red;">
            {{errmsg}}
          </span>
        </Alert>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken, sendVcode, vcodeLogin } from '../../api/users'
import md5 from 'js-md5'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      vcode: '',
      err: false,
      errmsg: '',
      phoneNumber: null,
      currentTime: 60,
      showCode: false
    }
  },
  methods: {
    selectCode () {
      this.showCode = true
      let params = {
        phone: this.phoneNumber
      }
      sendVcode(JSON.stringify(params)).then((res) => {
        console.log('res=', res)
      })
    },
    getTime () {
      return this.currentTime - 1
    },
    updateEnd () {
      let params = {
        phone: this.phoneNumber,
        vcode: this.vcode
      }
      vcodeLogin(JSON.stringify(params)).then((res) => {
        console.log('res===', res)
      })
    },
    Signin () {
      let params = { acc: this.username, pwd: md5(this.password) }
      if (this.username === '') {
        this.err = true
        this.errmsg = '请输入用户名'
        return false
      }
      getToken(JSON.stringify(params)).then((res) => {
        if (res.data.result === 0) {
          let cook = res.data.data
          this.$cookie.set('login', cook)
          this.$router.push({ path: '/Home' })
        } else {
          this.err = true
          this.errmsg = '账号或密码错误!'
          if (this.err === true) {
            setTimeout(() => {
              this.err = false
            }, 2000)
          }
        }
      }, (error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    // if (this.showCode) {
    this.$nextTick(() => {
      setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime = this.getTime()
        }
      }, 1000)
    })
  // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import "../../assets/css/public.less";
@base: pink;
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: @base;
}

table {
  margin: 0 auto;
}

.errors {
  width: 350px;
  height: 200px;
  margin: 0 auto;
}

.Login {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/loginbg.png");
  background-position: 50% 50% center;
  background-size: cover;
  position: relative;
}

.signbox {
  width: 485px;
  height: 542px;
  border-radius: 10px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: -271px;
}

strong {
  width: 335px;
  height: 50px;
  line-height: 50px;
  display: block;
  margin: 70px auto 0;
  font-size: 41px;
  color: #90bdd0;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
}

.sign {
  width: 335px;
  margin: 70px auto 0;
}

.phone {
  width: 335px;
  height: 40px;
  background: #e7f0f4;
  margin-bottom: 15px;
}

.code {
  width: 335px;
  height: 40px;
  background: #e7f0f4;
  margin-top:20px;
}
.lock {
  width: 335px;
  height: 40px;
  background: #e7f0f4;
  margin-top: 20px;
  position: relative;
}

input {
  width: 100%;
  height: 100%;
  background: #e7f0f4;
  border: none;
  display: block;
  text-indent: 60px;
  font-size: 14px;
  color: #999999;
}
.close {
  cursor: pointer;
}
.modify {
  width: 235px;
  height: 40px;
  background: #e7f0f4;
  margin-top: 20px;
  position: relative;
}
.modify button {
  margin-left:10px;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: #f3a340;
  position: absolute;
  border:none;
  outline:none;
  top: 0;
  right: -100px;
}
.eye {
  cursor: pointer;
  position: absolute;
  top: 15%;
  right: 5%;
  width: 30px;
  height: 30px;
  background: url("../../assets/images/invalid-name.jpg") center no-repeat;
}
.closeEye {
  cursor: pointer;
  position: absolute;
  top: 15%;
  right: 5%;
  width: 30px;
  height: 30px;
  background: url("../../assets/images/close-icon.png") center no-repeat;
}
.phone input {
  background: url("../../assets/images/phone-icon.png") center left no-repeat;
  background-position:4% 66.66666%;
}

.lock input {
  background: url("../../assets/images/phone-icon.png") center left no-repeat;
  background-position:4% 66.66666%;
}
.modify input {
  background: url("../../assets/images/phone-icon.png") center left no-repeat;
  background-position:5.8% 66.66666%;
}

.signbtn {
  width: 335px;
  height: 45px;
  border-radius: 5px;
  background: #f3a340;
  color: white;
  border: none;
  margin-top:35px;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}
.fpwd {
  text-align: right;
  line-height: 62px;
  color: #90bdd0;
}
</style>
