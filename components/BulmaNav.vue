<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item logo" to="/">Jaakit</nuxt-link>
      <!-- <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>-->
      <a
        role="button"
        class="navbar-burger burger"
        v-bind:class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="hey"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/products">Products</nuxt-link>
        <nuxt-link class="navbar-item" to="/categories">Categories</nuxt-link>
        <nuxt-link class="navbar-item" to="/recipes">Recipes</nuxt-link>
        <!-- <nuxt-link class="navbar-item" to="/profiles">Profiles</nuxt-link> -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Profile</a>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/profiles/signin">SignIn</nuxt-link>
            <nuxt-link class="navbar-item" to="/profiles/signup">SignUp</nuxt-link>
            <nuxt-link class="navbar-item" to="/products/inventory">Inventory</nuxt-link>

            <!-- <a class="navbar-item">
            </a>-->
            <hr class="navbar-divider">
            <a class="navbar-item">Help</a>
          </div>
        </div>

        <!-- <nuxt-link class="navbar-item" to="/about">About</nuxt-link> -->
        <!-- <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>-->
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  methods: {
    hey() {
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    }
  },
  props: ["isActive"]
};
</script>

<style scoped>
.navbar {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: bold;
}
</style>
