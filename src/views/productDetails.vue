<template>
  <v-container class="">
    <v-row class="justify-center my-6">
      <h2 class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 font-weight-regular text-uppercase text-center">
        {{ product.title }}
      </h2>
    </v-row>

    <v-row class="">
      <v-col xl="8" offset-xl="2" class="">
        <gallery :productTitle="product.title"/>
      </v-col>
    </v-row>

    <v-row
      class="mt-10 mb-5"
    >
      <v-col
        cols="10"
        offset="1"
        sm="8"
        offset-sm="2"
        lg="6"
        offset-lg="3"
      >
        <h3
          class="text-h6 text-md-h5"
        >
          Price: ${{ product.price }}
        </h3>

      </v-col>
    </v-row>

    <v-row class="mb-6 mt-n2">
      <v-col
        cols="10"
        offset="1"
        sm="8"
        offset-sm="2"
        lg="6"
        offset-lg="3"
      >
        <v-btn
          class=""
          width="100%"
          height="170%"
          dark
          color="primary"
          @click="addToCart"
        >
          add to cart
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="10"
        offset="1"
        lg="8"
        offset-lg="2"

      >
        <p class="">{{ product.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import gallery from '@/components/gallery.vue';

export default {
  components: {
    gallery,
  },
  data() {
    return {
      product: {},
    }
  },

  computed: {
    ...mapGetters(['getProductById']),
    // product() {
    //   return this.getProductById(this.$route.params.id)
    // }
  },
  methods: {
    goTop() {
      document.body.scrollTo(0, 0)
    },
    async setProduct() {
      let products = this.$store.state.products;
      if (products.length == 0) {
        this.$store.dispatch('retrieveAllProducts')
          .then(() => this.product = this.getProductById(this.$route.params.id))
      } else {
        this.product = this.getProductById(this.$route.params.id)
      }
      
    },
    async addToCart() {
      this.$store.state.snackbar.show = true;
      let product = {product: {
        itemId: this.product.id,
        quantity: 1
      }}
      let response = await fetch('/1234/cartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(product)
      })
    }
  },
  mounted() {
    this.setProduct()
    this.goTop()
  }
}
</script>