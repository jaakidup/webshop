<template>
  <div class="products-listing">
    <!-- <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :thumbnail="product.thumbnail"
      :previewText="product.previewText"
    ></Product> -->

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <h4>{{ product.name }}</h4>

        <p>{{product.description}}</p>
        <p>#{{product.id}} Price: {{product.price}}</p>
        <!-- <button class="button" @click="remove(product.id)">Remove Product</button> -->
      </div>
    </div>


  </div>
</template>

<script>
import Product from "@/components/Product";
// import productData from "@/services/products";

import { mapMutations } from "vuex";

export default {
  components: {
    Product
  },
  computed: {
    products() {
      // return this.$store.state.products.products;
      return this.$store.state.products.products;
    }
  },
  // asyncData(ctx, callback) {
  //   setTimeout(() => {
  //     callback(null, { products: productData });
  //   }, 0);
  // }
};
</script>

<style>
.products-listing {
  text-align: center;
}
.products {
  margin: 3em;
  display: flex;
  flex-wrap: wrap;  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.product {
  margin: 1em;
  padding: 1em;
  width: 300px;
  box-sizing: border-box;
  border: thin solid rgb(226, 226, 226);
  border-radius: 0px 16px 0px 16px;
}

</style>
