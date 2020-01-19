export const actions = {
  nuxtServerInit({ commit }, context) {
    commit('post/setPosts', [
      {
        id: '1',
        title: 'post 1',
        previewText: 'this is the first post',
        thumbnail:
          'https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/f87ba14f24b231dec02134f7f9577cbb.jpg'
      },
      {
        id: '2',
        title: 'post 2',
        previewText: 'this is the second post',
        thumbnail:
          'https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/b1426e1a5cc005b19ba22962482931b0.jpg'
      }
    ])
  }
}
