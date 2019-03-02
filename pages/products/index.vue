<template>
  <div class="products">

    <div v-for="product in products" :key="product.id">
        {{product}}
      <br/>
    </div>
  </div>

</template>

<script>
import productData from '@/services/products';
export default {
  asyncData(ctx, callback) {
    setTimeout(() => {
      callback(null, { products: productData });
    }, 300);
  },
}
</script>

<style>
.products {
  text-align: center;
}

</style>
