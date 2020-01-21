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
      .get(`${process.env.BASE_URL}/posts/${context.route.params.postId}.json`)
      .then(res => {
        return { loadedPost: { ...res.data, id: context.params.postId } }
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
