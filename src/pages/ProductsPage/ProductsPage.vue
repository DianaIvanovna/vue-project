<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="product-page">
    <h1>Страница Продуктов</h1>

    <div
      class="products"
      >
        <div

        v-for="product in products"
              :key="product.id"

        >
        <div
          class="product"
          @click="addProduct($event,product)"
        >
          <h3 class="product__name">{{product.name}}</h3>
          <p class="product__price">{{product.price}} p.</p>
        </div>

        </div>

    </div>

    <div class="score">
      <p class="score__text">Стоимость: <span>{{score}} p.</span></p>
    </div>
  </div>

</template>

<script>
import products from '../../dataset/products';

export default {
  components: { },
  data() {
    return {
      products: [],
      score: 0,
    };
  },
  created() {
    this.products = products;
  },
  methods: {
    addProduct(event, product) {
      if (event.currentTarget.classList.contains('product_active')) {
        event.currentTarget.classList.remove('product_active');
        this.score -= product.price;
      } else {
        event.currentTarget.classList.add('product_active');
        this.score += product.price;
      }
    },
  },
};
</script>

<style scoped>
.product-page {
  position: relative;
}

.products {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product {
  width: 300px;
  border: 1px solid #42b983;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.product_active {
  background-color: #ccc;
  border: 1px solid #ccc;
}

.product:hover {
  background-color: rgba(66, 185, 131, 0.3);
  cursor: pointer;
}

.product__name {
  margin: 0;
  margin-bottom: 20px;
}
.product__price {
  margin: 0;
  text-align: end;
}

.score {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;

  background-color: #42b983;
  color: white;
}

.score__text {
  margin: 0;
}
</style>
