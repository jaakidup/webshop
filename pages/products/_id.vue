<template>
  <section class="single-product">
    {{ product }}
    <h1>{{ product.title }}</h1>
    <div>
      <img class="product-image" :src="product.thumbnail" :alt="product.title">
    </div>
    <p>{{ product.previewText }}</p>
  </section>
</template>


<script>
import productData from "@/services/products";

export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        product: productData.find(el => el.id === context.params.id)
      });
    });
  }
};
</script>



<style scoped>
.single-product {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.product-image {
  width: 100%;
}
</style>
