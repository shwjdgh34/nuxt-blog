import axios from 'axios'
export const actions = {
  nuxtServerInit({ commit }) {
    return axios.get(`${process.env.BASE_URL}/posts.json`).then(({ data }) => {
      let postArray = []
      for (const key in data) {
        postArray.push({ ...data[key], id: key })
      }
      commit('post/setPosts', postArray)
    })
  }
}
