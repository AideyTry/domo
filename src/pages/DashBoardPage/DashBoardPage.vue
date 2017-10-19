<style lang="less">
    body{
        margin:0;
        padding:0;
    }
    div,p{
        margin:0;
        padding:0;
    }
    .hader{
        width: 100%;
        height: 60px;
        background-color: #ccc;
    }
    .content{
        display: flex;
        .sider{
            flex: 0 0 20%;
            height: 600px;
        }
        .main{
            flex: 0 0 80%;
            height: 600px;
            // border: 1px solid #ccc;
            border-left: none;
        }
    }
</style>
<template>
  <div>
      <div class="hader">
        <my-header></my-header>
      </div>
      <div class="content">
          <div class="sider">
            <siderbar></siderbar>
          </div>
          <div class="main">
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>
<script>
import MyHeader from 'pages/DashBoardPage/MyHeader/MyHeader'
import Siderbar from 'pages/DashBoardPage/Sidebar/Sidebar'
export default {
  components: {
      MyHeader,
      Siderbar
  },
  created () {
  }
}
</script>