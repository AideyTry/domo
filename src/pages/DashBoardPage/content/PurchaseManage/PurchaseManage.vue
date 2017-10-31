<style lang="less">
.fittingWrap {
  background-color: #fff;
  .vcode-item {
    display: inline-block;
    background: url("../../../../assets/images/invalid-name.jpg") no-repeat;
    width: 24px;
    height: 12px;
  }
  .select-wrap {
    // width: 405px;
    // position: relative;
    // ._box{
    //     width: 303px;
    //     border:1px solid #ccc;
    //     padding:0px;
    //     position: absolute;
    //     top:34px;
    //     ul li{
    //         padding-left:5px;
    //     }
    // }
  }
  #box{
      width:405px;
      position:relative;
      #pop{
        width:303px;
        border:1px solid #ccc;
        padding:0px;
        position: absolute;
        top:34px;
        ul li{
            padding-left:5px;
            padding-top:5px;
        }
        ul li:hover{
            background-color: #ccc;
        }
      }
  }
}
ul{
    list-style:none
}
li {
    list-style:none;
    display:block;
    // float:none;
}
.selectSearch{
    ul li{
        padding-left:5px;
        padding-top:5px;
        width:15%;
    }
}
.current{
    background-color: #ccc;
}
</style>
<template>
    <div class="fittingWrap">
        <Input v-model="value" placeholder="请输入..." style="width: 300px" @on-change="onChange" @on-blur="Onblur"></Input>
        <h1 style="color: red">{{timers}}</h1>
        <br>
        <br>
        <Button type="primary" @click="selectCode">
            <span v-if="showCode === false">获取验证码</span>
            <span v-if="showCode">{{currentTime}}秒后重试</span>
        </Button>
        <!-- <h2 style="color: blue">{{currentTime}}</h2> -->
        <Row>
            <Col span="24">
            <span v-if="messageTest" style="color:red;">{{message}}</span>
            </Col>
        </Row>
        <!-- <input v-model="vcode" placeholder="请输入验证码" -->
        <!-- :type="hideCode?'password':'text'"> -->
        <div class="vcode-item" @click="hideCodes"></div>
        <!-- <v-select style="width: 30%" :options="options"></v-select> -->
        <br>
        <br>
        <br>
        <br>
        <div class="select-wrap" ref="wrap" id="box">
            <!-- <Input class="txtSelect"> -->
            <!-- <Input v-model="value" class="txtSelect" placeholder="请输入..." style="width: 30%" @on-keyup="txtSelects"></Input> -->
            <input type="text" v-model="value" class="txtSelect" placeholder="请输入..." style="width: 30%" @input="txtSelects">
            <!-- <Input type="button" value="搜索" class="btnSearch"> -->
            <!-- <div ref="box" class="_box" id="pop">

            </div> -->
        </div>
        <br>
        <br>    
        <br>
        <br>
        <input type="text" v-model="value" placeholder="请输入..." @input="inputSelect"
        @keydown="inputKeySelect($event)">
        <div class="selectSearch">
            <ul>
                <li v-for="(item, index) in options" :key="index" @click="selectChanges(item)"
                @keydown="keySelect($event)"
                :class = "{current:(currentIndex === index)}"
                @mouseenter="mouseEnter(index)">{{item}}</li>
            </ul>
        </div>   
        <!-- <span>下面</span> -->
        <!-- <vselect v-model="selected"
        placeholder="请输入..."
        :options="options"
        :on-search="selectChange"
        :on-change="consoleCallback"
        style="width:30%"
        label="a"
        ></vselect> -->
        <!-- <span>下面的</span>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul> -->
        <!-- <button @click="hideCodes">哈哈哈</button> -->
    </div>
</template>
<script>
// import vselect from 'vue-select'
// import vselect from '../../../../components/Select'
export default {
    // components: {
    //     vselect
    // },
    data () {
        return {
            a: 'vue-select',
            value: '',
            message: '请输入17位数字+字母',
            messageTest: false,
            timers: null,
            currentTime: 60,
            vcode: null,
            showCode: false,
            hideCode: true,
            selected: null,
            // options: ['a', 'b', 'c', 'aa', '1aa', 'bbc'],
            currentIndex: null,
            options: [],
            arr: [],
            datas: ['a', 'abc', 'abbbb', 'abxxxx', 'xyz', 'abcdef', 'abzzzz', 'axxx', 'aaabbb', 'fjj', '我是中国人', '我爱中国']
        }
    },
    methods: {
        onChange (event) {
            alert(22222)
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
        },
        selectCode () {
            this.showCode = true
            if (this.showCode && this.currentTime === 60) {
                alert(1111)
            }
        },
        // computed: {
        //     countTime () {
        //         return this.initTime - 1
        //     }
        // },
        getTime () {
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            let hour = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()
            if (month < 10) {
                month = `0${month}`
            }
            if (day < 10) {
                day = `0${day}`
            }
            if (hour < 10) {
                hour = `0${hour}`
            }
            if (minute < 10) {
                minute = `0${minute}`
            }
            if (second < 10) {
                second = `0${second}`
            }
            let str = `${year}-${month}-${day} ${hour}:${minute}:${second}`
            return str
        },
        countTime () {
            let timer = this.currentTime - 1
            return timer
        },
        hideCodes () {
            this.hideCode = !this.hideCode
        },
        txtSelects (event) {
            let arr = []
            // for (let i = 0; i < this.datas.length; i++) {
            //     if (this.datas[i].indexOf(this.value) !== -1) {
            //         arr.push(this.datas[i])
            //     }
            // }
            // console.log('arr===', arr)
            // console.log('this.$refs.wrap', this.$refs.wrap)
            // 如果发现存在一个id叫pop的div的话就删除它
            let box = document.querySelector('#box')
            let pop = document.querySelector('#pop')
            if (pop) {
                // 如果存在删除
                box.removeChild(pop)
            }

            // if (arr.length === 0) {
            //     return
            // }
            if (this.value === '') {
                return
            }
            if (this.value === 'a') {
                arr = ['a', 'ab', 'ac', 'aaa']
            }
            if (this.value === '宝马') {
                arr = ['宝马X', '宝马Y', '宝马450', '宝马Y80', '宝马ZZZ']
            }
            if (arr.length > 0) {
                // 动态生成div添加到wrap后
                let div = document.createElement('div')
                div.id = 'pop'
                box.appendChild(div)
                // 创建ul添加到div
                let ul = document.createElement('ul')
                div.appendChild(ul)
                // 根据数组长度创建li添加到ul
                for (let i = 0; i < arr.length; i++) {
                    let li = document.createElement('li')
                    li.innerHTML = arr[i]
                    ul.appendChild(li)
                }
            }
        },
        selectChange (str) {
            // alert(111)
            // alert(str)
            if (str === 'a') {
                this.options = ['a', 'ab', 'ac', 'aaa']
            }
            if (str === 'b') {
                this.options = ['b', 'bb', 'abc', 'bbd']
            }
            if (str === '宝马') {
                this.options = ['宝马X', '宝马Y', '宝马Z', '宝马CC', '宝马X8', '宝马472']
            }
        },
        consoleCallback (str) {
            console.log('str===', str)
            this.$Message.success(str)
        },
        // 组件式的
        inputSelect () {
            this.options = []
            this.currentIndex = null
            if (this.value === 'a') {
                this.$nextTick(function () {
                    this.options = ['a', 'ab', 'ac', 'aaa']
                })
            }
            if (this.value === 'b') {
                this.options = ['b', 'bb', 'abc', 'bbd']
            }
            if (this.value === '宝马') {
                this.options = ['宝马X', '宝马Y', '宝马Z', '宝马CC', '宝马X8', '宝马472']
            }
        },
        selectChanges (item) {
            this.value = item
            this.options = []
        },
        mouseEnter (index) {
            // alert(index)
            this.currentIndex = index
        },
        inputKeySelect (event) {
            if (event.keyCode === 40) {
                if (this.currentIndex === null) {
                    this.currentIndex = 0
                    return
                }
                if (this.currentIndex < this.options.length - 1) {
                     this.currentIndex++
                } else {
                    this.currentIndex = this.options.length - 1
                }
            }
            if (event.keyCode === 38) {
                if (this.currentIndex > 0) {
                    this.currentIndex--
                } else {
                    this.currentIndex = 0
                }
            }
            if (event.keyCode === 13) {
                // index,options
                this.value = this.options[this.currentIndex]
                this.options = []
            }
        },
        keySelect (event) {
            console.log('event===', event)
        }
    },
    mounted () {
        this.$nextTick(() => {
            setInterval(() => {
                this.timers = this.getTime()
                if (!this.showCode) {
                    return
                }
                if (this.currentTime > 0) {
                    this.currentTime = this.countTime()
                    if (this.currentTime === 0) {
                        setTimeout(() => {
                            this.showCode = false
                            this.currentTime = 60
                        }, 1000)
                    }
                }
            }, 1000)
        })
        console.log('this.timers', this.timers)
    },
    updated () {
        // console.log('this.vcode=', this.vcode)
    }
}
</script>