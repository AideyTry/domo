<style lang="less">
    *{
        margin:0;
        padding:0;
    }
    body{
        min-height: 100%;
        .loading-wrap{
            position:fixed;
            left:200px;
            top:60px;
            right: 0;
            bottom:0;
            z-index: 99;
            // background-color:#fff;
            background-color:rgba(225,225,225,0.2);
            // opacity: 0.5;
            .loading{
                width:50%;
                height:50%;
                position:absolute;
                left:50%;
                top:50%;
                // transform:translate(-50%);
                transform:translate(-50%,-50%)
            }
        }
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100%;
        width:100%;
        position: relative;
        border: 1px solid #eee;
        border: none;
    }
</style>
<template>
    <div class="loading-wrap">
        <div class="loading">
            <!-- <Row>
                <Col class="demo-spin-col" span="8">
                    <Spin fix>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <p>加载中......</p>
                    </Spin>
                </Col>
            </Row> -->
            <!-- <Row>
                <Col class="demo-spin-col">
                    <Spin fix>
                        <div class="loader">
                            <svg class="circular" viewBox="25 25 50 50">
                                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                            </svg>
                        </div>
                    </Spin>
                </Col>
            </Row> -->
            <div style="color:#0f0">
                <img src="./loading51.gif" alt=""
                style="display:inline-block;width:10%;height:10%">
            </div>
            <br>
            <div>
                <img src="./loading42.gif" alt="" style="display:inline-block;color:#0f0;bacground:#0f0;">
            </div>
            <p style="color:#007fff">加载中......</p>
        </div>
    </div>
</template>
<script>
// import Vue from 'vue'
export default {
  data () {
    return {
    }
  },
  name: 'MyLoading'
//   mounted () {
//       this.$nextTick(() => {
//           this.$refs.wrap.style = `position:absolute;top:${this.scrollTop}px`
//       })
//   }
}
</script>