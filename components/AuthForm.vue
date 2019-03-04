<template>
  <section>
    <div class="signin container">
      <h2>{{ header }}</h2>

      <b-field v-if="create">
        <b-input id="username" placeholder="Username" type="text" icon="face" v-model="username"></b-input>
      </b-field>

      <b-field>
        <b-input id="email" placeholder="Email" type="email" icon="email" v-model="email"></b-input>
      </b-field>

      <b-field>
        <b-input id="password" placeholder="Password" type="password" v-model="password"></b-input>
      </b-field>

      <b-field v-if="create">
        <b-checkbox id="agree" v-model="agree">I agree to the terms and conditions.</b-checkbox>
      </b-field>

      <div class="buttons has-addons is-centered">
        <button class="button" v-if="create" type="submit">Sign Up</button>
        <button class="button" v-if="!create" type="submit">Sign In</button>
        <button class="button" v-on:click="reset">Reset</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["header", "create", "loading"],

  data: function() {
      return {
        username: "",
        password: "",
        email: "",
        agree: false
      }
  },
  methods: {
    reset() {
      this.username = "";
      this.password = "";
      this.email = "";
      this.agree = false;
    }
  }
};
</script>

<style>
.signin {
  text-align: center;
  align-content: center;
}
.container {
  width: 400px;
}
</style>
