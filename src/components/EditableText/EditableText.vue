<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
 <div class="editable-text">
  <form class="form" @submit.prevent v-if="showForm" >
    <input
      v-bind:value="newText"
      @input="newText = $event.target.value"
      class="input"
      type="text"
      name="newText"
    />
    <div class="buttons">
      <button class="button" @click="saveHandler">Save changes</button>
      <button class="button" @click="discardHandler">Discard changes</button>
    </div>
  </form>

  <p v-on:dblclick="dblcClickHandler" v-if="!showForm" class="text" >{{text}}</p>
 </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Данный текст можно изменить по двойному клику на него',
      newText: '',
      showForm: false,
    };
  },

  methods: {
    dblcClickHandler() {
      this.newText = this.text;
      this.showForm = true;
    },
    discardHandler() {
      this.showForm = false;
    },
    saveHandler() {
      this.text = this.newText;
      this.showForm = false;
    },
  },
};

</script>

<style scoped>

.editable-text {
  margin-top: 20px;
}
.text {
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  height: 30px;
  background-color: rgba(66, 185, 131,  0.3);
  margin: 0;
}
.form {
  display: flex;
  width: 100%;
  align-items: center;
  height: 30px;
}

.buttons {
  display: flex;
}

.button {
  width: max-content;
  height: 100%;
  border: none;
  background: transparent;
  box-shadow: none;
  border: 1px solid transparent

}

.button:hover {
  border: 1px solid #42b983;
  color: #42b983;
}
.input {
  width: 100%;
  background-color: rgba(66, 185, 131,  0.3);
  padding: 5px;
  box-sizing: border-box;
  height: 30px;
}
</style>
