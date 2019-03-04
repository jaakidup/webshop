
export const state = () => ({
    products: []
})




export const mutations = {
    ADD(state, product) {
        state.products.push(product)
    },

    // UNTESTED
    REMOVE(state, product) {
        // const index = state.products.findIndex(i => i.id === product.id);
        // state.products.splice(index);
        // console.log(product.id, typeof product.id)

        let index = state.products.findIndex(item => item.id == product.id);
        console.log(index);

        if (index != -1) {
            console.log("Removing product at index: ", index);
            state.products.splice(index, 1);
        }
    },



}