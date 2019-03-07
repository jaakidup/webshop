import Axios from 'axios';
import { fireDb } from '../plugins/firebase';


const ProductService = {
  async getProducts() {
    console.log("Get services/products called");

  },

 
  // TODO: Get All Products on load
  getAllProducts() {
    return new Promise((resolve, reject) => {
    });
  },



  postProduct(product) {
    console.log("Post services/products called");
    return new Promise((resolve, reject) => {
      const productsRef = fireDb.collection('products');
      productsRef.add(product).then(docRef => {
        console.log("Product created with ID: ", docRef.id, " and sent to firestore.");
        product.id = docRef.id;
        resolve(product);        
      }).catch(error => {
        reject(error);
      })
    });
  },


  async deleteProduct(product) {
    console.log("Remove services/products called");

    return new Promise((resolve, reject) => {
      fireDb.collection('products').doc(product.id).delete().then(() => {
        resolve(product);
      }).catch(error => {
        console.log(error);
        reject(false);
      });
    });

  }
}

export { ProductService }


