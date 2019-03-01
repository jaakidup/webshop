<template>
  <div class="products">

    <div v-for="product in products" :key="product.id">
        {{product}}
      <br/>
    </div>
  </div>

</template>

<script>
import data from '@/services/data';
export default {
  asyncData(ctx, callback) {
    setTimeout(() => {
      callback(null, { products: data });
    }, 300);
  },
}
</script>

<style>
.products {
  text-align: center;
}

</style>
