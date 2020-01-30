import Cookie from 'js-cookie'
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
  logOut({ commit }) {
    commit('clearToken')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExipration')
    }
  },
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
        commit('setToken', res.idToken)
        // res.expiresIn = 3600ms = 3.6second
        // res.expiresIn*1000 = one hour
        // firebase disconnect after 3600second
        localStorage.setItem('token', res.idToken)
        localStorage.setItem(
          'tokenExipration',
          new Date().getTime() + Number.parseInt(res.expiresIn * 1000)
        )
        Cookie.set('jwt', res.idToken)
        Cookie.set(
          'tokenExipration',
          new Date().getTime() + Number.parseInt(res.expiresIn * 1000)
        )
        return this.$axios.$post('http://localhost:3000/api/track-data', {
          data: 'Authenticated!'
        })
      })
      .catch(console.log)
  },
  initAuth({ commit, dispatch }, req) {
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) return
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) return
      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('tokenExipration'))
        .split('=')[1]
    } else {
      token = localStorage.getItem('token')
      // it may convert expirationDate type to strig. So reconvert to number by adding + front of exiprationta
      expirationDate = localStorage.getItem('tokenExipration')
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log('No token or invalid token')
      dispatch('logOut')
      return
    }
    commit('setToken', token)
  }
}
export const getters = {
  isAuthenticated(state) {
    return state.token != null
  }
}
