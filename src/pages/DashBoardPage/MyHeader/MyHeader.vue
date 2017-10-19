<style lang="less">
    body{
        margin:0;
        padding:0;
    }
    div,h1{
        margin:0;
        padding:0;
    }
    .header{
        background-color: #09f;
        width:100%;
        height:60px;
        .left{
            width: 20%;
            height: 100%;
            border-right:2px solid #aaa;
        }
        // .head{
        //     text-align:center;
        //     vertical-align: middle;
        // }
    }
</style>
<template>
    <div class="header">
        <!-- <div class="left">
            <h1 class="head">达欧白希特</h1>
        </div> -->
        <Button type="primary" @click="logout">退出</Button>
    </div>
</template>
<script>
import { delToken } from '../../../mock/m_users'
export default {
    data () {
        return {
            out: -2
        }
    },
    methods: {
        logout () {
            let params = {code: this.out}
            delToken(params).then((res) => {
                 window.location.reload()
                // console.log('res=', res)
            })
            // console.log(1)
            // console.log(this.$store)
            // let vm = this
            // this.$store.commit('logout', 2132)
            // this.$store.dispatch('logout')
            // setTimeout(function () {
            //     console.log('userInfo==', vm.$store.getters)
            // }, 1000)
        }
    }
}
</script>