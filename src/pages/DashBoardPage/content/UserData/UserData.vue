<style lang="less">
.fittingWrap {
  background-color: #fff;
  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
}
.class_ul {
  display: flex;
  // width: 300px;
  .class_li {
    // background-color: #00f;
    flex: 1;
    height: 20px;
    cursor: pointer;
    margin: 0 10px;
  }
}
.current {
  background-color: blue;
}
</style>
<template>
  <div class="fittingWrap">
    <h1>个人资料</h1>
    <Input v-model="value" placeholder="请输入..." style="width: 300px"
    name="phone"
    v-validate="'required|phone'"
    ></Input>
    <span v-show="errors.has('phone')" style="color: red;">{{ errors.first('phone') }}</span>
    <Row>
        <Col class="demo-spin-col" span="8">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>加载中......</div>
            </Spin>
        </Col>
    </Row>
    <ul class="class_ul">
        <li v-for="(item, index) in items" :key="index" class="class_li" @click="changeCurrent(index)"
        :class = "{current:(currentIndexs === index)}"
        >
            {{item}}
        </li>
    </ul>
    <Button type="info" @click="saveInfo">信息按钮</Button>
    <br>
    <br>
    <br>
    <br>
    <Row>
        <Col span="3">
            <Input v-model="userName" placeholder="请输入验证码..."
            v-validate="'required|vcode'"
            name="vcode" type="text"
            ></Input>
            <span v-show="errors.has('vcode')" style="color: red;">{{ errors.first('vcode') }}</span>
        </Col>
        <Col span="5" push="3">
            <Input v-model="passWord" type="password" placeholder="请输入密码..."
            v-validate="'required|passWord'"
            name="passWord"
            ></Input>
            <span v-show="errors.has('passWord')&&(values!== ` &nbsp;`)" style="color: red;">{{ errors.first('passWord') }}</span>
        </Col>
        <!-- <Col span="3">
            <Input v-model="value1" placeholder="请输入用户名..."
            v-validate="'minlength|alpha_dash|min:6'"
            name="userName" type="text"
            ></Input>
            <span v-show="errors.has('userName')" style="color: red;">{{ errors.first('userName') }}</span>
        </Col> -->
        <!-- <Col span="5">
          <validator name="validation">
            <Input v-model="value1" id="value1" placeholder="请输入用户名..."
            v-validate:value1="{minlength: 2, maxlength: 6}"
            ></Input>
            <div>
              <span v-show="$validation.value1.minlength">用户名不得少于2个字符</span>
              <span v-show="$validation.value1.maxlength">用户名不得大于6个字符</span>
            </div>
          </validator>
        </Col> -->
    </Row>
    <!-- <Row>
      <Col span="12">
        <span>{{obj1}}</span>
      </Col>
      <Col span="12">
        <span>{{map1}}</span>
      </Col>
    </Row> -->
  </div>
</template>
<script>
// import validator from '@/utils/validation.js'
export default {
  data () {
    return {
        value: '',
        userName: '',
        passWord: null,
        index: 0,
        items: ['left', 'content', 'right'],
        obj1: null,
        map1: null
    }
  },
  computed: {
    currentIndexs () {
      return this.index
    }
  },
  mounted () {
    this.$nextTick(function () {
      let myMap = new Map()
      myMap.set('name', 'zhangsan')
      myMap.set(1, 6)
      this.map1 = [...myMap]
      console.log('map1=', this.map1)
    })
  },
  methods: {
    changeCurrent (index) {
      this.index = index
    },
    saveInfo () {
      if (
        (this.userName.length < 2 || this.userName.length > 20) &&
        this.userName !== ''
      ) {
        this.$Message.warning('用户名输入格式有误！')
        return
      }
      if (this.passWord.length !== 11 && this.passWord !== '') {
        this.$Message.warning('手机号码输入格式有误！')
        return
      }
      this.$Message.warning('点击了警告！')
    }
  }
}
</script>