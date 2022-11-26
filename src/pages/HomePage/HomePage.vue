<template>
  <h1>Главная страница</h1>

  <p>
    {{ returnText() }}
    <button @click="btnHandler" class="button"> {{visibleText? "Скрыть": "Показать"}}</button>
  </p>

  <EditableText />
</template>

<script>
import EditableText from '../../components/EditableText/EditableText.vue';

export default {
  components: { EditableText },
  data() {
    return {
      visibleText: false,
      maxSymbol: 200,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis blanditiis magni esse aliquid necessitatibus corrupti, quam aspernatur amet, possimus praesentium velit ad dolorum, similique ducimus consequuntur sit excepturi eos placeat distinctio explicabo? Nulla dignissimos veritatis, soluta distinctio aliquam quasi minus ullam repudiandae exercitationem repellat incidunt ratione recusandae. Corporis fugiat perferendis eos in officia excepturi dolore doloribus et consequuntur! Natus placeat officia ducimus dolore delectus maiores, facere sit hic totam exercitationem ipsum eos laborum aut quisquam ratione voluptatibus? Incidunt temporibus, asperiores fugiat reprehenderit quam eum quia facere alias doloribus molestiae nostrum quasi porro dignissimos tempora veritatis vero rerum expedita sit magni officiis. Laboriosam modi, fugit qui libero numquam quo sint architecto praesentium. Cum nihil sit illo placeat vero quasi enim assumenda a voluptates similique magni neque incidunt sed odio, temporibus minima iste tempora. Corporis nam quae, rem magni enim aliquid! Laboriosam corrupti necessitatibus veniam, perferendis dignissimos mollitia nemo nisi, placeat molestias blanditiis, voluptates provident alias ducimus? Maiores cupiditate dolor est aliquam dolorum omnis ducimus nulla porro quam explicabo accusantium totam molestiae error repellendus corrupti neque eligendi, saepe minus consequatur ut dicta quaerat ratione! Consequatur pariatur eveniet delectus, natus minus at optio suscipit deserunt quo alias aliquid ea assumenda illo quas in. Animi nulla sapiente eveniet! Amet eaque accusamus veritatis earum. Nobis amet rerum numquam excepturi tempore earum dicta eum nulla aliquid optio! Laborum expedita dolorum explicabo facilis error ipsa vero excepturi suscipit tenetur nesciunt! Ex, sequi! Odit totam exercitationem, consequatur dolorem illum soluta ullam rerum iste quaerat vel voluptates. Ipsum, dolorum! Nemo, ipsam necessitatibus! Corporis inventore explicabo cupiditate facere debitis, modi aspernatur soluta in officia porro, eveniet similique omnis aliquid, commodi facilis ex culpa. Voluptas illum, qui repellat blanditiis cumque atque fugiat quasi perferendis aperiam provident a modi vero obcaecati, libero commodi rerum inventore omnis non dolore quidem. Minima non id ex itaque ut, harum facere velit numquam voluptas. Quo, quidem nihil quas totam deleniti repellat at illo laborum quasi commodi soluta eius ullam officia tempore? Doloremque veritatis voluptatum debitis ratione accusamus nesciunt quaerat commodi aut. Deleniti nisi ea repellat obcaecati? Quaerat accusamus odio sit eligendi illum molestias debitis vitae corrupti placeat. Magnam voluptatibus pariatur excepturi dolores quos dolor illo! Nisi distinctio odio laborum dignissimos consectetur ex dolorem, nemo sequi eius, libero, expedita repellendus aliquid consequatur eveniet maiores dolorum velit explicabo. Saepe, explicabo alias. Sint voluptatum aliquam autem nesciunt ipsum dolorum tenetur rerum veritatis sapiente quos molestiae aut, debitis enim aspernatur natus dolorem vitae iure! Expedita, veritatis nostrum maiores magnam porro eaque tempore quibusdam debitis mollitia id rem, deserunt velit ducimus quod, consectetur ea fugit aperiam! Eveniet culpa obcaecati ipsa dignissimos facere dolor et id animi inventore excepturi necessitatibus ullam deleniti, quidem labore cum mollitia. Unde, quod alias. Magni repellendus eius, reprehenderit ducimus consequatur expedita error, tenetur beatae similique dolore, iure sapiente. Repudiandae iste iusto neque sequi. Nostrum deserunt quas recusandae iure atque necessitatibus nam eum. Dolorum fugit ea molestiae saepe quam ex non architecto deserunt officiis? Dicta voluptates molestiae, beatae soluta nisi ex eveniet? Esse dignissimos reiciendis iste harum ut?',
    };
  },
  methods: {
    returnText() {
      if (this.visibleText) {
        return this.text;
      }
      return this.text.slice(0, this.maxSymbol);
    },
    btnHandler() {
      this.visibleText = !this.visibleText;
    },
  },
};
</script>

<style scoped>
  .button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 0;
    color: #42b983;
  }

</style>
