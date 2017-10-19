import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    // 开启严格模式
    strict: true,
    state,
    getters,
    mutations,
    actions
})