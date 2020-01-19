import axios from 'axios'
export const actions = {
  nuxtServerInit({ commit }) {
    return axios
      .get('https://nuxt-blog-50ca9.firebaseio.com/posts.json')
      .then(({ data }) => {
        let postArray = []
        for (const key in data) {
          console.log('nono', key)
          postArray.push({ ...data[key], id: key })
        }
        commit('post/setPosts', postArray)
      })
  }
}
