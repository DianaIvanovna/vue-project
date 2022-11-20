<template>
  <div class="blog__header">
    <h1>Страница блога</h1>
    <div class="blog__buttons">
      <button
        class="blog__button"
        :class="{ 'blog__button_active': typeView=='card' }"
        @click="btnHandler('card')"
      >Сетка</button>
      <button
        class="blog__button"
        :class="{ 'blog__button_active': typeView=='mini' }"
        @click="btnHandler('mini')"
      >Список</button>
    </div>
  </div>

  <div
  class="article-list"
  :class="{ 'article-list-column': typeView=='card' }"
  >
  <div
  v-for="post in posts"
        :key="post.id"

  >

  <ArticleItem :post="post" :typeView="this.typeView"/>

  </div>

  </div>

</template>

<script>
import articles from '../../dataset/articles';
import ArticleItem from '../../components/ArticleItem/ArticleItem.vue';

export default {
  components: { ArticleItem },
  data() {
    return {
      posts: [],
      typeView: 'card',
    };
  },
  created() {
    this.posts = articles;
  },
  methods: {
    btnHandler(type) {
      this.typeView = type;
    },
  },
};

</script>

<style scoped>

.blog__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.blog__button {
  background: none;
  box-shadow: none;
  border: none;
  font-weight: 600;
}

.blog__button_active {
  color: #42b983;

}

.article-list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr ;
  grid-column-gap: 10px;
   grid-row-gap: 10px;
}
.article-list-column{
  grid-template-columns: 1fr 1fr;
}

</style>
