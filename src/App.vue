<template>
  <div class="main">
    <HeaderComponent />
    <router-view />
  </div>

</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
  },
};

</script>

<!-- scope -->
<style>
@import "./normalize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.main {
  width: 100%;
  max-width: 1200px;
  padding: 25px 50px;
  box-sizing: border-box;
}

/*
#webpack-dev-server-client-overlay {
  display: none;
} */
</style>
