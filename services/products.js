import Axios from 'axios';

const ProductService = {
  async getProducts() {
    console.log("Get services/products called");
    try {
      const products = await $axios.get("http://localhost:3030/test");
      return products;
    } catch (error) {
      console.log(error);
    }
  },

  postProduct(product) {
    console.log("Post services/products called");
    try {
      Axios.post("http://localhost:3030/test", {product});
    } catch (error) {
      console.log(error);
    }
  },  

  deleteProduct(product) {
    console.log("Post services/products called");
    try {
      Axios.delete("http://localhost:3030/test/"+product.id);
    } catch (error) {
      console.log(error);
    }
  }
}

export { ProductService }


// export default [
//     {
//       id: "1",
//       price: 4,
//       title: 'Drinks',
//       previewText: "Fruity, funky and fresh. Quench your thirst in style.",
//       thumbnail: 'http://res.cloudinary.com/christekh/image/upload/v1515183358/pro3_tqlsyl.png'
//     },
//     {
//       id: "2",
//       price: 3,
//       title: 'Home',
//       previewText: "Decorate you house and turn it into your home.",
//       thumbnail: 'http://res.cloudinary.com/christekh/image/upload/v1515183358/pro2_gpa4su.png'
//     },
//     {
//       id: "3",
//       price: 1,
//       title: 'Stationary',
//       previewText: "For those thoughtful cards for loved ones",
//       thumbnail: 'http://res.cloudinary.com/christekh/image/upload/v1515183358/pro1_m3d9mj.png'
//     },
//     {
//       id: "4",
//       price: 7,
//       title: 'Notebooks',
//       previewText: "The best way to keep track of your daily life",
//       thumbnail: 'http://res.cloudinary.com/christekh/image/upload/v1515183358/pro5_yvsj0v.png'
//     },
//     {
//       id: "5",
//       price: 5,
//       title: 'Coffee',
//       previewText: "We all love a great cup of coffee!",
//       thumbnail: 'http://res.cloudinary.com/christekh/image/upload/v1515183358/pro4_elakwz.png'
//     },
//     {
//       id: "6",
//       price: 6,
//       title: 'Business cards',
//       previewText: "Make a lasting impression on your customers",
//       thumbnail: 'http://res.cloudinary.com/christekh/image/upload/v1515183359/pro6_qivlge.png'
//     }
//   ]