export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}
export const actions = {
  authenticateUser({ commit }, authData) {
    let authURL =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWW3ukXZJkSsm6Vr08zjxZRveCEwSJhl4'
    if (!authData.isLogin) {
      authURL =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWW3ukXZJkSsm6Vr08zjxZRveCEwSJhl4'
    }
    return this.$axios
      .$post(authURL, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('setToken', res.idToken)
      })
      .catch(console.log)
  }
}
export const getters = {
  isAuthenticated(state) {
    return state.token != null
  }
}
