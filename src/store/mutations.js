import * as types from './mutation-types'
// mock数据后续需要清理
import acessRole from '../mock/m_assignRole'
const mutations = {
    [types.logout] (state, userInfo) {
        state.userInfo = userInfo
    },
    [types.offlineRole] (state, offlineRole) {
        state.offlineRole = offlineRole
    },
    [types.initUserInfo] (state, info) {
        state.userInfo = info
        if (info) {
            state.offlineRole = acessRole(info.role)
        }
    },
    [types.fetchLoading] (state, fetchLoading) {
        state.fetchLoading = fetchLoading
    },
    [types.changeOptions] (state, changeOptions) {
        state.changeOptions = changeOptions
    }
}
export default mutations