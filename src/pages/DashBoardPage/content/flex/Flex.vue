<template>
<div>
  <div class="flex-wrap1">
      <div class="flex-wrap1-item">项目一</div>
      <div class="flex-wrap1-item">项目二</div>
      <div class="flex-wrap1-item">项目三</div>
  </div>
  <br>
  <br>
  <br>
  <h3>左侧固定，右侧自适应《传统布局》</h3>
  <div class="wrap2">
      <div class="wrap2-item1">项目一</div>
      <div class="wrap2-item2">项目二</div>
  </div>
  <br>
  <h3>左侧固定，右侧自适应《flex》</h3>
  <div class="flex-wrap2">
      <div class="flex-wrap2-item1">项目一</div>
      <div class="flex-wrap2-item2">项目二</div>
  </div>
  <br>
  <br>
  <br>
  <h3>两侧固定，中间自适应《传统布局》</h3>
  <div class="wrap3">
      <div class="wrap3-left-item1">左边</div>
      <div class="wrap3-right-item2">右边</div>
      <div class="wrap3-content-item3">中间</div>
  </div>
    <br>
  <h3>两侧固定，中间自适应《flex布局》</h3>
  <div class="flex-wrap3">
      <div class="flex-wrap3-left-item1">左边</div>
      <div class="flex-wrap3-content-item3">中间</div>
      <div class="flex-wrap3-right-item2">右边</div>
  </div>
  <br>
  <br>
  <br>
  <h3>中间固定，两侧自适应《传统布局》</h3>
  <div class="wrap4">
      <div class="wrap4-left-item1">左边</div>
      <div class="wrap4-right-item2">右边</div>
      <div class="wrap4-content-item3">中间</div>
  </div>
  <br>
  <h3>中间固定，两侧自适应《flex布局》</h3>
  <div class="flex-wrap4">
      <div class="flex-wrap4-left-item1">左边</div>
      <div class="flex-wrap4-content-item3">中间</div>
      <div class="flex-wrap4-right-item2">右边</div>
  </div>
  <br>
  <br>
  <br>
  <div class="flex-wrap5">
      <ul class="flex-wrap5-left">
          <li class="flex-wrap5-item" v-for="(item, index) in navs" :key="index"
          @click="changeNav(item, index)">
             <span :class="{current:(currentIndex === index)}">{{item.value}}</span>
          </li>
      </ul>
      <div class="flex-wrap5-right">
        <router-view/>
      </div>
  </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            newIndex: 0,
            navs: [
                {
                    name: 'navflex1',
                    value: '导航1'
                },
                {
                    name: 'navflex2',
                    value: '导航2'
                },
                {
                    name: 'navflex3',
                    value: '导航3'
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
        changeNav (item, index) {
            this.newIndex = index
            this.$router.push({path: `/flex/${item.name}`})
        }
    }
}
</script>

<style lang="less">
// 普通布局
// .flex-wrap{
//     background-color: #ccc;
//     .flex-wrap-item{
//         float:left;
//         width:29.3333%;
//         height: 200px;
//         margin:0 2%;
//         background-color: #00f;
//         color:#0f0;
//     }
// }
.flex-wrap1{
    display:flex;
    background-color: #ccc;
    .flex-wrap1-item{
        flex:1;// flex: 1 1 auto;
        // flex:auto;
        height: 200px;
        margin:10px;
        background-color: #00f;
        color:#0f0;
    }
}
.wrap2{
    height: 200px;
    .wrap2-item1{
        width:150px;
        height: 200px;
        float:left;
        background-color: #0f0;
    }
    .wrap2-item2{
        height: 200px;
        margin-left:150px;
        background-color: #00f;
    }
}
.flex-wrap2{
    display:flex;
    .flex-wrap2-item1{
        flex:0 0 150px;
        height:200px;
        background-color: #0f0;
    }
    .flex-wrap2-item2{
        flex:1 1 auto;
        height:200px;
        background-color: #00f;;
    }
}
.wrap3{
    .wrap3-left-item1{
        width:100px;
        height: 200px;
        float: left;
        background-color: #0f0;
    }
    .wrap3-right-item2{
        width:100px;
        height: 200px;
        float: right;
        background-color: #00f;
    }
    .wrap3-content-item3{
        height: 200px;
        margin:0 100px;
        background-color: #f00;
    }
}
.flex-wrap3{
    display:flex;
    .flex-wrap3-left-item1{
        flex:0 0 100px;
        height:200px;
        background-color: #0f0;
    }
    .flex-wrap3-content-item3{
        flex:1 1 auto;
        height: 200px;
        background-color: #f00;;
    }
    .flex-wrap3-right-item2{
        flex:0 0 100px;
        height: 200px;
        background-color: #00f;
    }
}
.wrap4{
    .wrap4-left-item1{
        width:50%;
        height: 200px;
        float:left;
        padding-right:150px;
        box-sizing: border-box;
        background-color: #0f0;
    }
    .wrap4-right-item2{
        width:50%;
        height: 200px;
        float: right;
        padding-left:150px;
        box-sizing: border-box;
        background-color: #00f;
    }
    .wrap4-content-item3{
        width:300px;
        height:200px;
        margin:0 auto;
        position: relative;
        background-color: #f00;
    }
}
.flex-wrap4{
    display:flex;
    .flex-wrap4-left-item1{
        flex:1 1 auto;
        height:200px;
        background-color: #0f0;
    }
    .flex-wrap4-content-item3{
        flex:0 0 300px;
        height:200px;
        background-color: #f00;
    }
    .flex-wrap4-right-item2{
        flex:1 1 auto;
        height: 200px;
        background-color: #00f;
    }
}
.flex-wrap5{
    display:flex;
    .flex-wrap5-left{
        width:30%;
        height:200px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        .flex-wrap5-item{
            flex:1;
            margin:10px;
            background-color: #888;
            cursor: pointer;
        }
    }
    .flex-wrap5-right{
        flex:1 1 auto;
        // width:70%;
        height:200px;
        background-color: #00f;
    }
}
.current{
    background-color: #0f0;
}
</style>
