import { ProductService } from "../services/products";

export const state = () => ({
    products: []
})



export const actions = {
    async ADD_PRODUCT(context, product) {
        try {
            const newProduct = await ProductService.postProduct(product);
            context.commit("ADD", newProduct);
            return true;
        } catch (error) {
            console.log("Failed pushing product to database: ", error);
            return false;
        }    
    },
    async DELETE_PRODUCT(context, product) {
        try {
 
            context.commit("DELETE", product);
            await ProductService.deleteProduct(product);

            return true;
        } catch (error) {
            console.log("Failed removing product from database: ", error);
            return false;
        }    
    },
}



export const mutations = {
    ADD(state, product) {
        state.products.push(product);
    },

    DELETE(state, product) {
        let index = state.products.findIndex(item => item.id == product.id);
        if (index != -1) {
            console.log("Removing product at index: ", index);
            state.products.splice(index, 1);
        }
    },
}