<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="search">
    <form class="form"  >
     <input
       @input="inputHandler"
       class="input"
       type="text"
       name="newText"
       autocomplete="off"
       placeholder="Поиск"
     />
   </form>

  </div>
 </template>

<script>
export default {
  data() {
    return {
      newPosts: [],
      showBlock: false,
      idTimeout: 0,
    };
  },
  props: {
    posts: {
      type: Object,
      required: true,
    },
    inputHandler: {
      type: Function,
      required: true,
    },
  },
};

</script>

 <style scoped>
 .search {
    flex-grow: 1;
    padding: 0 10px;
    position: relative;

 }
 .form {
    width: 100%;

  }
  .input {
    width: 100%;
    background-color: rgba(66, 185, 131,  0.3);
    padding: 5px;
    box-sizing: border-box;
    height: 30px;
    border: none;
    border-radius: 5px;
    }

 </style>
