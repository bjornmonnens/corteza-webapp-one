import Vue from 'vue'
import Vuex from 'vuex'

// init vuex
Vue.use(Vuex)

// initial state and default value
const state = null

// mutations
const mutations = {
  connectUser: (state, userInfo) => {
    state.user = {
      id: '01234567891',
      has_notifications: false,
      username: 'BetaUser',
      avatar: 'data:image/png;base64,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',
    }
  },
}

// export created elements
export default {
  namespaced: true,
  state,
  mutations,
}
