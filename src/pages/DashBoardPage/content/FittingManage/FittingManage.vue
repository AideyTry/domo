<style lang="less">
.fittingWrap {
    background-color: #fff;
    .pagenation {
        position: fixed;
        bottom: 0;
        right: 10%;
    }
}
.ivu-col-span-24 {
    display: block;
    width: 100%;
    text-align: right;
}
</style>
<template>
    <div class="fittingWrap">
        <Table :columns="columns" :data="tableData"></Table>
        <Row>
            <Col span="24">
                <!-- <Button v-if="offlineRole.ADMIN" type="primary" shape="circle">保存修改</Button> -->
                <Button type="primary" shape="circle">保存修改</Button>
            </Col>
        </Row>
        <input type="text" disabled="disabled">
        <div class="pagenation">
            <Page :total="totals"   :page-size="pageSize" :current.sync="pageNum" size="small" :show-elevator="true"  :show-total="true" @on-change="changePage"></Page>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            columns: [],
            tableData: [],
            totals: 0,
            pageNum: 1,
            pageSize: 10
        }
    },
    computed: {
        offlineRole () {
            return this.$store.getters.offlineRole
        }
    },
    methods: {
        loadingPage (pageNum) {
            axios.get('/mock/getPage', {
                params: {
                    pageNum: pageNum || 1
                }
            }).then((res) => {
                this.columns = res.data.columns
                let render = (h, params) => {
                    return h('Input', {
                        props: {
                            value: params.row.price
                        },
                        on: {
                            input: val => {
                                params.row.price = val
                            }
                        }
                    })
                }
                this.columns.map((v, i) => {
                    if (v.key === 'price') {
                        v.render = render
                    }
                    // console.log('v=', v)
                })
                this.totals = res.data.total
                this.tableData = res.data.data
            })
        },
        changePage (pageNum) {
            this.pageNums = pageNum
            this.loadingPage(this.pageNum)
        }
    },
    created () {
        this.loadingPage()
    }
}
</script>
