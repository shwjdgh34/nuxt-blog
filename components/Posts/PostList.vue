<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      title="post 1"
      descript="this is the first post"
      thumbnail="https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/f87ba14f24b231dec02134f7f9577cbb.jpg"
    />
    <PostPreview
      id="2"
      title="post 2"
      descript="this is the second post"
      thumbnail="https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/b1426e1a5cc005b19ba22962482931b0.jpg"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
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
