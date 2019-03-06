<template>
  <div class="inventory">
    <button class="button" @click="add">Add Product</button>

    <br>

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <h4>{{ product.name }}</h4>

        <p>{{product.description}}</p>
        <p>#{{product.id}} Price: {{product.price}}</p>
        <button class="button" @click="remove(product.id)">Remove Product</button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      fake: 0
    };
  },
  computed: {
    products() {
      // return this.$store.state.products.products;
      return this.$store.state.products.products;
    }
  },

  methods: {
    add() {
      console.log("Let's try adding a product.");
      this.$store.commit("products/ADD", {
        id: this.fake++,
        name: "some test product",
        price: 14323,
        description: "This is a test product to check the store"
      });
    },
    remove(id) {
      this.$dialog.confirm({
        message: "Are you sure you want to delete this product?",
        onConfirm: () => {
          this.$store.commit("products/REMOVE", {
            id: id
          });
          this.$toast.open({ message: "Product deleted", type: "is-success" });
        }
      });
    }
  }
};
</script>

<style scoped>
.inventory {
  text-align: center;
}
.products {
  margin: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.product {
  margin: 1em;
  padding: 1em;
  width: 300px;
  box-sizing: border-box;
  border: thin solid rgb(226, 226, 226);
  border-radius: 0px 16px 0px 16px;
}


</style>
