<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton type="button" @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
      <AppButton type="button" @click="onLogOut">Log Out</AppButton>
    </section>
    <section class="existing-posts">
      <h1>existing posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    ...mapState('post', ['loadedPosts'])
  },
  methods: {
    onLogOut() {
      this.$store.dispatch('login/logOut')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
