const userInfo = (state) => {
    return state.userInfo
}
const offlineRole = (state) => {
    return state.offlineRole
}
const fetchLoading = (state) => {
    return state.fetchLoading
}
const changeOptions = (state) => {
    return state.changeOptions
}
const getters = {
    offlineRole: offlineRole,
    userInfo: userInfo,
    fetchLoading: fetchLoading,
    changeOptions: changeOptions
}

export default getters