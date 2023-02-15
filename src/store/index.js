import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productCategory: 'all',
    products: []
  },
  mutations: {
    setProductCategory(state, num) {
      let catName;
      switch (num) {
        case 0: catName = 'all'; break;
        case 1: catName = 'electric'; break;
        case 2: catName = 'bass'; break;
        case 3: catName = 'acoustic'; break;
        default: catName = 'all'
      }
      state.productCategory = catName;
    },
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
      const product = state.products.find(p => p.id == id);
      return product;
    }
  },
  modules: {
  }
})
