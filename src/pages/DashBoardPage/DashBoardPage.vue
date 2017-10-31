<style lang="less">
body {
  margin: 0;
  padding: 0;
}
div,
p {
  margin: 0;
  padding: 0;
}
.hader {
  width: 100%;
  height: 60px;
  background-color: #ccc;
}
.main {
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  border-left: none;
  position: absolute;
}
// }
</style>
<template>
    <div>
        <div class="hader">
            <my-header></my-header>
        </div>
        <!-- <div class="content"> -->
        <siderbar></siderbar>
        <div class="main">
            <loading v-show="fetchLoading" ref="_loading"></loading>
            <router-view></router-view>
        </div>
        <!-- </div> -->
    </div>
</template>
<script>
import MyHeader from 'pages/DashBoardPage/MyHeader/MyHeader'
import Siderbar from 'pages/DashBoardPage/Sidebar/Sidebar'
import Loading from '../../components/init/loading'
export default {
    //   data () {
    //       return {
    //           scrollTop: document.body.scrollTop
    //       }
    //   },
    //   watch: {
    //       scrollTop: function () {

    //       }
    //   },
    components: {
        MyHeader,
        Siderbar,
        Loading
    },
    computed: {
        scrollTop () {
            return document.body.scrollTop
        },
        fetchLoading () {
            console.log('document.body.scrollTop===', document.body.scrollTop)
            return this.$store.getters.fetchLoading
        }
    }
    //   directives: {
    //       scroll: {
    //           bind: function (el, binding) {
    //               window.addEventListener('scroll', function () {
    //                   el.offsetTop = document.body.scrollTop
    //                   binding.value = document.body.scrollTop
    //               })
    //           }
    //       }
    //   },
    //   mounted () {
    //     //   this.$nextTick(() => {
    //     //     //   let scrollTop = document.body.scrollTop
    //     //       this.$refs._loading.style = `position:absolute;top:${this.scrollTop}px`
    //     //   })
    //   }
}
</script>