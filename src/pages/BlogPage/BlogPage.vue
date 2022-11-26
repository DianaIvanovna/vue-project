<template>
  <div class="blog__header">
    <h1>Страница блога</h1>
    <SearchInput :posts='newPosts' :inputHandler='inputHandler'/>
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
      v-for="post in newPosts"
            :key="post.id"

      >
      <ArticleItem :post="post" :typeView="this.typeView"/>
      </div>

    </div>

</template>

<script>
import SearchInput from '../../components/SearchInput/SearchInput.vue';
import articles from '../../dataset/articles';
import ArticleItem from '../../components/ArticleItem/ArticleItem.vue';

export default {
  components: { ArticleItem, SearchInput },
  data() {
    return {
      posts: [],
      newPosts: [],
      typeView: 'card',
    };
  },
  created() {
    this.posts = articles;
    this.newPosts = this.posts;
  },
  methods: {
    btnHandler(type) {
      this.typeView = type;
    },
    inputHandler(event) {
      const searchValue = event.target.value;
      if (!searchValue) {
        this.newPosts = this.posts;
        return;
      }
      this.newPosts = this.posts.filter((item) => item.title.split(' ').join('').toLowerCase().includes(searchValue.split(' ').join('').toLowerCase()));
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
