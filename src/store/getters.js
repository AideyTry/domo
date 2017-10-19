const userInfo = (state) => {
    return state.userInfo
}
const offlineRole = (state) => {
    return state.offlineRole
}
const getters = {
    offlineRole: offlineRole,
    userInfo: userInfo
}

export default getters