<template>
  <div class="wrap">
      <select-search @search="receiveData" :placeholder="placeholder" ref="selectSearch"
     @matching="selectChange" :options="options" @query="querys"></select-search>
      <div class="hotSearch" v-if="(options.length===0)">
          <h1 class="title" >热门搜索</h1>
          <ul>
              <li class="hotSearch-item" v-for="(item, index) in hotKey" :key="index" @click="addQuery(item)">{{item}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import selectSearch from '@/components/selectSearch'
export default {
    components: {
        'select-search': selectSearch
    },
    data () {
        return {
            placeholder: '请输入车型......',
            query: '',
            options: [],
            hotKey: ['宝马', 'a', 'b', 'c', '君威', '路虎', '比亚迪']
        }
    },
    methods: {
        addQuery (query) {
            this.$refs.selectSearch.setQuery(query)
        },
        newOptions (newOptions) {
            this.options = newOptions
            console.log('options====', this.options)
        },
        receiveData (res) {
            console.log('res=====', res)
            console.log('query=====', res)
            console.log('params====', res.params)
        },
        selectChange (query) {
            if (query === 'a') {
                this.options = ['a', 'ab', 'ac', 'aaa']
            }
            if (query === 'b') {
                this.options = ['b', 'bb', 'abc', 'bbd']
            }
            if (query === '宝马') {
                this.options = ['宝马X', '宝马Y', '宝马Z', '宝马CC', '宝马X8', '宝马472']
            }
        },
        querys (query) {
            if (query === '') {
                this.options = []
            }
        }
    }
}
</script>

<style lang="less">
.wrap{
    margin: 0 auto;
    .hotSearch{
        .title{
            font-size:18px;
        }
        .hotSearch-item{
            padding-right:10px;
            box-sizing:border-box;
            cursor: pointer;
        }
    }
}
</style>
