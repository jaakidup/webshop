<template>
  <div class="inventory">
    <button class="button" @click="add">Add Product</button>

    <br>

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <h4>{{ product.name }}</h4>

        <p>{{product.description}}</p>
        <p>#{{product.id}} Price: {{product.price}}</p>
        <button class="button" @click="removeProduct(product)">Remove Product</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fake: 0
    };
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    }
  },

  methods: {
    add() {
      const newProduct = {
        name: "some test product",
        price: 14323,
        description: "This is a test product to check the store"
      };

      console.log("Let's try adding a product.");

      this.$store.dispatch("products/ADD_PRODUCT", newProduct);

    },

    removeProduct(product) {
      this.$dialog.confirm({
        message: "Are you sure you want to delete this product?",
        onConfirm: () => {
          if(this.$store.dispatch("products/DELETE_PRODUCT", product)) {
            this.$toast.open({ message: "Product deleted", type: "is-success" });
          } else {
            this.$toast.open({ message: "Product wasn't deleted", type: "is-failure" });
          }
        }
      });
    },
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
