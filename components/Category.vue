<template>
  <nuxt-link :to="'/categories/'+id">
    <article class="category">
      <div class="thumbnail" :style="{backgroundImage: 'url('+ thumbnail +')'}"></div>
      <h1>{{ title }}</h1>
      <p>{{ previewText }}</p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: ["id", "thumbnail", "title", "previewText"]
};
</script>

<style scoped>

h1 {
  margin-top: 0.5em;
}
p {
  margin-top: 0.5em;
}

.category {
  box-sizing: border-box;
  width: 280px;
  padding: 10px;
  margin: 10px;
  height: 100%;

}
.category:hover {
  box-sizing: border-box;
  /* box-shadow: 0 2px 2px rgb(190, 190, 190); */
  width: 280px;
  padding: 10px;
  /* border-top: 2px solid rgb(224, 224, 224);
  border-radius: 10px; */
  margin: 10px;
}

.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}

a {
  text-decoration: none;
  color: black;
}
p {
  color: grey;
}
</style>
