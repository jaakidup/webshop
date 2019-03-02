<template>
  <section class="single-recipe">
    <h1>{{ recipe.title }}</h1>
    <div>
      <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
    </div>
    <p>{{ recipe.descriptionText }}</p>
  </section>
</template>


<script>

import recipeData from '@/services/recipes'

export default {
  asyncData(context) {
    // return axios.get() // return makes it wait for the results
    return new Promise((resolve, reject) => {
        resolve({
          recipe: recipeData.find(el => el.id === context.params.id)
        });
      // setTimeout(() => {
      // }, 0);
    });
  }
};
</script>



<style scoped>
.single-recipe {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.recipe-image {
    width: 100%;
}
</style>
