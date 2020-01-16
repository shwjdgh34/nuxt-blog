<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PostList from '@/components/Posts/PostList.vue'
export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
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
          ]
        })
        reject(new Error())
      }, 1500)
    })
      .then(data => {
        return data
      })
      .catch(e => context.error(e))
  },
  created() {
    this.$store.dispatch('post/setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>