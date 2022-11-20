<template>
  <header class="header">
    <router-link to="/" class="header__link">Главная</router-link> |
    <router-link to="/about" class="header__link">Товары</router-link> |
    <router-link to="/blog" class="header__link">Блог</router-link>

  </header>
</template>

<script>
</script>

<style scoped>
.header {
  width: 100%;
  margin-bottom: 20px;
}
.header__link {
  font-weight: bold;
  color: #2c3e50;
}

.header__link.router-link-exact-active {
  color: #42b983;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
/*
#webpack-dev-server-client-overlay {
  display: none;
} */
</style>
