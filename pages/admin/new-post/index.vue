<template>
  <div class="admin-new-post-page">
    <AdminPostForm @submit="onSubmitted" />
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
import axios from 'axios'
export default {
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      axios
        .post('https://nuxt-blog-50ca9.firebaseio.com/posts.json', postData)
        .then(console.log)
        .catch(console.log)
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
