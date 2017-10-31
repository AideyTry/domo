<!--
使用方法:例如
<select-search @matching="selectChange" @search="finalSearch" @query="querys"
:placeholder="placeholder" :options="options"></select-search>

方法:
    matching: 输入框输入字符之后去匹配对应的字段  例如输入“宝马”之后调用后台接口匹配与“宝马”相关的所有字段;
            返回值:当前输入的字符.
            selectChange (query) {
                this.options = (将query作为参数传递给后端，拿到值赋值给options)
            }
    search: 匹配好字段后，选中某个字段去调用后台接口搜索具体数据;  返回值:匹配好之后选中的某个字段.
            finalSearch (query) {
                拿到选中的某个字段，向后端发送请求调用后端搜索具体详细数据
            }
    query: 监听输入框的值;  返回值:监听到的实时的输入框的内容 作用是为了提供给父组件去做一些其他的操作.

    所有方法的返回值名称都可以语义化自定义
属性:
  placeholder: 输入框在没有输入内容的情况下显示的默认值.
  options:  是数组，用来动态的显示匹配的数据字段.
-->
<template>
    <div class="wrap">
        <input type="text" v-model="query" :placeholder="placeholder" @input="inputSelect" @keydown="inputKeySelect($event)">
        <div class="selectSearch">
            <ul class="ulStyle">
                <li v-for="(item, index) in option" :key="index" @click="selectChange(item)" @keydown="keyEnter($event)" @mouseenter="mouseEnter(index)"
                :class="{current:(currentIndex === index)}">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '请输入'
        },
        options: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            query: '',
            option: this.options,
            currentIndex: null
        }
    },
    methods: {
        // 在输入框输入内容时去调用后端接口匹配数据
        inputSelect () {
            this.option = []
            this.currentIndex = null
            if (this.query.trim() === '') {
                return
            }
            this.$emit('matching', this.query)
        },
        // 鼠标经过匹配后的某个字段时，该字段高亮显示
        mouseEnter (index) {
            this.currentIndex = index
        },
        // 鼠标点击某个字段时，去调用后端接口，查询该字段的所有信息
        selectChange (item) {
            this.query = item
            this.option = []
            this.$emit('search', this.query)
        },
        // 键盘按下键、上键去选中匹配后的某个字段，按回车键去调用后端接口，查询被选中字段的所有信息
        inputKeySelect (event) {
            if (event.keyCode === 40) {
                if (this.currentIndex === null) {
                    this.currentIndex = 0
                    return
                }
                if (this.currentIndex < this.option.length - 1) {
                    this.currentIndex++
                }
            }
            if (event.keyCode === 38) {
                if (this.currentIndex > 0) {
                    this.currentIndex--
                }
            }
            if (event.keyCode === 13) {
                this.query = this.option[this.currentIndex]
                this.option = []
                this.$emit('search', this.query)
            }
        },
        // 附加功能，此方法是为了提供给父组件由于不同的业务需求情况父组件需要去修改输入框的值时去使用。
        setQuery (query) {
            this.query = query
        }
    },
    watch: {
        query () {
            this.$emit('query', this.query)
        },
        options: function (val, oldVal) {
            this.option = val
        }
    }
}
</script>

<style lang="less">
.wrap {
  .selectSearch {
    .ulStyle {
      list-style: none;
      li {
        list-style: none;
        display: block;
        padding-left: 5px;
        padding-top: 5px;
        width: 15%;
      }
      .current {
        background-color: #ccc;
      }
    }
  }
}
</style>
