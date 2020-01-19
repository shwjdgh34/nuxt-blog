<template>
  <div class="single-post-page">
    <section class="posts">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">{{loadedPost.updatedAt}}</div>
        <div class="post-detail">{{loadedPost.author}}</div>
      </div>
      <p class="post-content">{{loadedPost.detailContent}}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:nossi8128@gmail.com"
        >nossi8128@gmail.com</a>
      </p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context, callback) {
    console.log(context.route.params)
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: `post ${context.route.params.id}`,
          author: 'jeongho no',
          updatedAt: new Date(),
          previewText: 'this is the first post nono',
          detailContent: 'detailed content nono',
          thumbnail:
            'https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/f87ba14f24b231dec02134f7f9577cbb.jpg'
        }
      })
    }, 1000)
  }
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>