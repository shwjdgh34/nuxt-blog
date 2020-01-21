import axios from 'axios'
export const state = () => ({
  loadedPosts: []
})
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },

  editPost(state, editedPost) {
    const postIdx = state.loadedPosts.findIndex(
      post => post.id === editedPost.id
    )
    state.loadedPosts[postIdx] = editedPost
  }
}
export const actions = {
  setPosts({ commit }, posts) {
    commit('setPosts', posts)
  },
  addPost({ commit }, post) {
    const createdPost = {
      ...post,
      updatedAt: new Date()
    }
    return axios
      .post(`${process.env.BASE_URL}/posts.json`, createdPost)
      .then(res => commit('addPost', { ...createdPost, id: res.data.name }))
      .catch(console.log)
  },
  editPost({ commit }, post) {
    const editedPost = {
      ...post,
      updatedAt: new Date()
    }
    return axios
      .put(`${process.env.BASE_URL}/posts/${editedPost.id}.json`, editedPost)
      .then(res => commit('editPost', { ...editedPost }))
      .catch(console.log)
  }
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}
