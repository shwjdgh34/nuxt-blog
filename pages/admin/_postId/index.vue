<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-blog-50ca9.firebaseio.com/posts/${context.route.params.postId}.json`
      )
      .then(({ data }) => {
        return { loadedPost: data }
      })
  },
  methods: {
    onSubmitted(editedPost) {
      axios
        .put(
          `https://nuxt-blog-50ca9.firebaseio.com/posts/${this.$route.params.postId}.json`,
          { ...editedPost, updatedAt: new Date() }
        )
        .then(console.log)
        .catch(console.log)
    }
  }
}
</script>

<style scoped>
.admin-post-page {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .admin-post-page {
    width: 500px;
  }
}
</style>
