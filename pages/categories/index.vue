<template>
  <div class="categories">
    <Category
      v-for="category in categories"
      :key="category.id"
      :id="category.id"
      :title="category.title"
      :thumbnail="category.thumbnail"
      :previewText="category.previewText"
    ></Category>
  </div>
</template>

<script>
import Category from "@/components/Category";
import categoryData from "@/services/categories";

export default {
  components: {
    Category
  },
  asyncData(ctx, callback) {
    setTimeout(() => {
      callback(null, { categories: categoryData });
    }, 0);
  }
};
</script>

<style>
.categories {
  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: flex-start;
}
</style>
