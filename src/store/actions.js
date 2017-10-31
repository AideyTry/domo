import * as types from './mutation-types'
export default {
    // logout ({commit}) {
    //     console.log('userInfo=====', 111)
    //     commit(types.logout, 12)
    //   }
    // 请求数据的loading
    async fetchLoading ({commit}, res) {
        commit(types.fetchLoading, res)
    }
}