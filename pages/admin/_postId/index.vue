<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  // layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return context.$axios
      .$get(`/posts/${context.route.params.postId}.json`)
      .then(data => {
        return { loadedPost: { ...data, id: context.params.postId } }
      })
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store
        .dispatch('post/editPost', editedPost)
        .then(() => this.$router.push('/admin'))
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
