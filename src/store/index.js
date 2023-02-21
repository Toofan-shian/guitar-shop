import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productCategory: 'All Products',
    products: [],
    snackbar: {
      show: false,
      color: 'success',
      massage: 'Item Added To Cart Successfully'
    }
  },
  mutations: {
    setProductCategory(state, num) {
      let catName;
      switch (num) {
        case 0: catName = 'All Products'; break;
        case 1: catName = 'Electric Guitar'; break;
        case 2: catName = 'Electric Bass'; break;
        case 3: catName = 'Acoustic Guitar'; break;
        default: catName = 'All Products'
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
    getProductsByCategory: (state) => (cat) => {
      if(cat == 'All Products') return state.products;
      let products = state.products.filter(p => p.type == cat)
      return products;
    },
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
