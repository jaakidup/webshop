<template>
  <section class="single-category">
    <h1>{{ category.title }}</h1>
    <div>
      <img class="category-image" :src="category.thumbnail" :alt="category.title">
    </div>
    <p>{{ category.previewText }}</p>
  </section>
</template>


<script>
import categoryData from "@/services/categories";

export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        product: categoryData.find(el => el.id === context.params.id)
      });
    });
  }
};
</script>



<style scoped>
.single-category {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.category-image {
  width: 100%;
}
</style>
