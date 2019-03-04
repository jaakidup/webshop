<template>
  <div class="products">
    <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :thumbnail="product.thumbnail"
      :previewText="product.previewText"
    ></Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import productData from "@/services/products";

export default {
  components: {
    Product
  },
  asyncData(ctx, callback) {
    setTimeout(() => {
      callback(null, { products: productData });
    }, 0);
  }
};
</script>

<style>
.products {
  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: flex-start;
}
</style>
