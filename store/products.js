import { ProductService } from "../services/products";

export const state = () => ({
    products: []
})


export const mutations = {
    ADD(state, product) {
        state.products.push(product);
    },


    REMOVE(state, product) {
        let index = state.products.findIndex(item => item.id == product.id);
        if (index != -1) {
            console.log("Removing product at index: ", index);
            state.products.splice(index, 1);
        }
    },
}