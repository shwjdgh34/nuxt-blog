<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import PostList from '@/components/Posts/PostList.vue'
export default {
  components: {
    PostList
  },
  computed: {
    ...mapState('post', ['loadedPosts'])
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