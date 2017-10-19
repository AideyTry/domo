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
    v-validate="'required|numeric|max:11|min:11'"
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
        :class = "{current:(currentIndex === index)}"
        >
            {{item}}
        </li>
    </ul>
    <Button type="info" @click="saveInfo">信息按钮</Button>
    <Row>
        <Col span="3">
            <Input v-model="value1" placeholder="请输入用户名..."
            v-validate="'required|alpha_dash|min:6'"
            name="userName" type="text"
            ></Input>
            <span v-show="errors.has('userName')" style="color: red;">{{ errors.first('userName') }}</span>
        </Col>
        <Col span="5">
            <Input v-model="value2" placeholder="请输入密码..."
            v-validate="'required|min:6|alpha_num'"
            name="密码"
            ></Input>
            <span v-show="errors.has('密码')&&value2&&(values!== ` &nbsp;`)" style="color: red;">{{ errors.first('密码') }}</span>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
        value: '',
        value1: '',
        value2: null,
        index: 0,
        items: ['left', 'content', 'right']
    }
  },
  computed: {
    currentIndex () {
      return this.index
    }
  },
  methods: {
    changeCurrent (index) {
      this.index = index
    },
    saveInfo () {
      if (
        (this.value1.length < 2 || this.value1.length > 20) &&
        this.value1 !== ''
      ) {
        this.$Message.warning('用户名输入格式有误！')
        return
      }
      if (this.value2.length !== 11 && this.value2 !== '') {
        this.$Message.warning('手机号码输入格式有误！')
        return
      }
      this.$Message.warning('点击了警告！')
    }
  }
}
</script>