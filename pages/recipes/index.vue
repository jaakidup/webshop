<template>
  <section class="recipes">

    <Recipe v-for="recipe in recipes"
      :key="recipe.id"
      :id="recipe.id"
      :title="recipe.title"
      :thumbnail="recipe.thumbnail"
      :previewText="recipe.previewText"
    > 
    </Recipe>

  </section>

</template>

<script>
import Recipe from "@/components/Recipe";
import recipeData from "@/services/recipes"

export default {
  components: {
    Recipe
  },
  data: function() {
    return {
      recipes: Object
    }
  },

  asyncData() {

    return { recipes: recipeData }

}
};
</script>


<style scoped>
.recipes {
  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: flex-start;
}
</style>
