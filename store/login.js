export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}
export const actions = {
  authenticateUser({ commit, dispatch }, authData) {
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
        console.log('nono- getTime()', new Date().getTime())
        console.log('nono- date()', new Date())
        commit('setToken', res.idToken)
        localStorage.setItem('token', res.idToken)
        localStorage.setItem(
          'tokenExipration',
          new Date().getTime() + res.expiresIn * 1000
        )
        dispatch('setLogOutTimer', res.expiresIn * 1000)
      })
      .catch(console.log)
  },
  setLogOutTimer({ commit }, duration) {
    setTimeout(() => {
      commit('clearToken')
    }, duration)
  },
  initAuth({ commit, dispatch }) {
    const token = localStorage.getItem('token')
    // it may convert expirationDate type to strig. So reconvert to number by adding + front of exiprationta
    const expirationDate = localStorage.getItem('tokenExipration')
    if (new Date().getTime() > +expirationDate || !token) {
      return
    }
    dispatch('setLogOutTimer', +expirationDate - new Date().getTime())
    commit('setToken', token)
  }
}
export const getters = {
  isAuthenticated(state) {
    return state.token != null
  }
}
