<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
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
