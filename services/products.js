import Axios from 'axios';
import { fireDb } from '../plugins/firebase';


const ProductService = {
  postProduct(product) {
    return new Promise((resolve, reject) => {
      const productsRef = fireDb.collection('products');
      productsRef.add(product).then(docRef => {
        product.id = docRef.id;
        resolve(product);        
      }).catch(error => {
        reject(error);
      })
    });
  },


  deleteProduct(product) {
    return new Promise((resolve, reject) => {
      fireDb.collection('products').doc(product.id).delete().then(() => {
        resolve(true);
      }).catch(error => {
        console.log(error);
        reject(false);
      });
    });

  }
}

export { ProductService }


