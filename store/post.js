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
  addPost({ commit, rootState }, post) {
    const createdPost = {
      ...post,
      updatedAt: new Date()
    }
    return this.$axios
      .$post(`/posts.json?auth=${rootState.login.token}`, createdPost)
      .then(data => commit('addPost', { ...createdPost, id: data.name }))
      .catch(console.log)
  },
  editPost({ commit, rootState }, post) {
    const editedPost = {
      ...post,
      updatedAt: new Date()
    }
    return this.$axios
      .$put(
        `/posts/${editedPost.id}.json?auth=${rootState.login.token}`,
        editedPost
      )
      .then(commit('editPost', { ...editedPost }))
      .catch(console.log)
  }
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}
