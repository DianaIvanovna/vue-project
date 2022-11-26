<template>
  <div
  class="article"
  :class="{ 'article-card': typeView=='card', 'article-mini': typeView=='mini' }"
  :style="{ backgroundImage: typeView === 'card' ? 'url(' + post.img + ')': 'none' }"
  >
  <div class="article__content">
    <h2 class="article__title">{{post.title}}</h2>
    <p class="article__description">{{post.text}}</p>
    <a class="article__link" :href="post.url" target="_blank"  >Читать полностью</a>

  </div>

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    typeView: {
      type: String,
      required: true,
    },
  },
};

</script>

<style scoped>
.article {
  width: 100%;
  height: 100%;
  min-height: 276px;

}

.article-mini.article{
  min-height: auto;
}
.article-mini .article__description {
display: none;
}
.article-mini .article__link {
text-align: left;
margin-top: 5px;
}

.article__content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background: linear-gradient(90deg,rgba(0, 0, 0, 0.41) 1.85%, rgba(0, 0, 0, 0.369328) 64.68%  );
}

.article__description {
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}

.article__title {
 color: #fff;
 margin: 0;
}

.article__link {
  text-align: end;
 color: #fff;
 margin: 0;
}
</style>
