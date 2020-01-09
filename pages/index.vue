<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link :to="`/posts/${1}`" class="post-preview">
        <article>
          <!--save images to assets-->
          <div
            class="post-thumbnail"
            style="background-image: url('https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/f87ba14f24b231dec02134f7f9577cbb.jpg')"
          ></div>
          <div class="post-content">
            <h1>Post Title</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link :to="`/posts/${2}`" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="background-image: url('https://image.fmkorea.com/files/attach/new/20190916/2063168106/1524368855/2190443186/b1426e1a5cc005b19ba22962482931b0.jpg')"
          ></div>
          <div class="post-content">
            <h1>Post Title</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90vw;
}

a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 180vw;
  background-position: center;
  background-size: cover;
}
@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
  .post-thumbnail {
    height: 800px;
  }
}
.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>