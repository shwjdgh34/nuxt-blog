<template>
  <section class="posts-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
    />
    <!-- <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="post 1"
      descript="this is the first post"
      thumbnail="https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/f87ba14f24b231dec02134f7f9577cbb.jpg"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="post 2"
      descript="this is the second post"
      thumbnail="https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/b1426e1a5cc005b19ba22962482931b0.jpg"
    />-->
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      posts: [
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
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
