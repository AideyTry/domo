<style lang="less">
    .fittingWrap{
        background-color: #fff;
    }
</style>
<template>
  <div class="fittingWrap">
      <Input v-model="value" placeholder="请输入..." style="width: 300px" @on-change="onChange" @on-blur="Onblur"></Input>
    <Row>
        <Col span="24">
            <span v-if="messageTest" style="color:red;">{{message}}</span>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
    data () {
        return {
            value: '',
            message: '请输入17位数字+字母',
            messageTest: false
        }
    },
    methods: {
        onChange (event) {
            this.value = this.value.toUpperCase()
            if (/[0-9A-Z]{17}$/.test(this.value)) {
                if (this.value.length === 17) {
                    this.messageTest = false
                } else {
                    this.messageTest = true
                }
            } else {
                this.messageTest = true
            }
        },
        Onblur () {
            if (/[0-9A-Z]{17}$/.test(this.value)) {
                if (this.value.length === 17) {
                    this.messageTest = false
                } else {
                    this.messageTest = true
                }
            } else {
                this.messageTest = true
            }
        }
    }
}
</script>