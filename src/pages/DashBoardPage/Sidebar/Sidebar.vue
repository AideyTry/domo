<style lang="less">
body {
  margin: 0;
  padding: 0;
}
div,
p,
h1 {
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  list-style: none;
}
.siderWrap {
  width: 180px;
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
.sider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow-y: scroll;
  background-color: #ccc;
  .sider-item {
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    height: 300px;
    cursor: pointer;
  }
  .current {
    border-radius: 5%;
    background-color: #00f;
  }
}
</style>
<template>
    <div class="siderWrap">
        <div class="sider">
            <ul>
                <li v-for="(item, index) in datas" :key="index" class="sider-item sider-item1" @click="select(item, index)">
                    <span :class="{current:(currentIndex === index)}">{{item.designation}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            newIndex: 0,
            datas: [
                {
                    name: 'purchase',
                    designation: '采购单管理'
                },
                {
                    name: 'userData',
                    designation: '个人资料'
                },
                {
                    name: 'fitting',
                    designation: '配件管理'
                },
                {
                    name: 'search',
                    designation: '搜索'
                },
                {
                    name: 'flex',
                    designation: 'flex布局'
                }
            ]
        }
    },
    computed: {
        currentIndex () {
            return this.newIndex
        }
    },
    methods: {
        select (item, index) {
            console.log('item===', item)
            this.newIndex = index
            this.$router.push({
                path: `/${item.name}`
            })
        }
    }
}
</script>