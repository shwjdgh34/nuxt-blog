export const actions = {
  nuxtServerInit({ commit }, { app }) {
    return app.$axios.$get(`/posts.json`).then(data => {
      let postArray = []
      for (const key in data) {
        postArray.push({ ...data[key], id: key })
      }
      commit('post/setPosts', postArray)
    })
  }
}
