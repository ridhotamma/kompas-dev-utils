export const state = () => ({
  isAuthenticated: false,
  accessToken: '',
  userDetail: {},
})

export const getters = {
  getUserDetail(state) {
    return state.userDetail
  },

  getAccessToken(state) {
    return state.accessToken
  },
}

export const mutations = {
  SET_USER_DETAIL(state, payload) {
    state.userDetail = payload
  },

  SET_AUTH_TOKEN(state, payload) {
    state.accessToken = payload
  },

  SET_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload
  },

  SET_USER_LOGOUT(state) {
    state.isAuthenticated = false
    state.accessToken = false
    state.userDetail = {}
  }
}

export const actions = {
  async initializeUserData(
    { commit },
    { userData, accessToken, isAuthenticated }
  ) {
    commit('SET_USER_DETAIL', userData)
    commit('SET_AUTH_TOKEN', accessToken)
    commit('SET_IS_AUTHENTICATED', isAuthenticated)
  },

  logoutUser({ commit }) {
    commit('SET_USER_LOGOUT')
  }
}
