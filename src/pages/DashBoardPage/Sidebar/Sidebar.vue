<style lang="less">
    body{
        margin:0;
        padding:0;
    }
    div,p,h1{
        margin:0;
        padding:0;
    }
    li{
       list-style: none; 
    }
    .sider{
        background-color: #fff;
        border: 1px solid #ccc;
        .sider-item{
            margin-bottom:10px;
            width:100%;
            height: 30px;
            line-height: 30px;
            text-align:center;
            cursor: pointer;
        }
        .current{
            border-radius: 5%;
            background-color: #00f;
        }
    }
</style>
<template>
    <div class="sider">
        <ul>
            <li  v-for = "(item, index) in datas" :key = "index"  class="sider-item sider-item1" @click = "select(item, index)">
                <span :class = "{current:(currentIndex === index)}">{{item.designation}}</span>
            </li>
        </ul>
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
                name: 'fitting',
                designation: '配件管理'
            },
            {
                name: 'userData',
                designation: '个人资料'
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
          this.newIndex = index
          this.$router.push({
              path: `/${item.name}`
          })
      }
  }
}
</script>