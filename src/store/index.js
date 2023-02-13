import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setAllProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async retrieveAllProducts(context) {
      try {
        const response = await fetch('products/all');
        const products = await response.json();
        context.commit('setAllProducts', products);
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    populars(state) {
      const pops = state.products.filter(p => p.popular == true)
      return pops;
    },
    getProductById: (state) => (id) => {

      console.log(state.products)
      const product = state.products.find(p => p.id == id);
      console.log(product)
      return product;
    }
  },
  modules: {
  }
})
