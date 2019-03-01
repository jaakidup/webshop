<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Starting Page</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Products</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/recipes">Recipes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(95, 0, 67);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>
