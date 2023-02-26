<template>
  <v-container class="mb-4">
    <v-row
      class="px-4 px-md-0"
    >
      <v-col
        class=""
        cols="12"
        sm="7"
        md="6"
        offset-md="1"
        xl="5"
        offset-xl="2"
      >
        <v-row
          no-gutters
          justify="center"
          class="py-8 my-0"
        >
          <h4
            class="
              text-h4
              text-sm-h5
              text-md-h4
              text-center
            "
          >
            Your Cart
            <span class="ml-2 text-subtitle-2">{{ products.length }} Item{{ products.length > 1 ? 's' : ''}}</span>
          </h4>
        </v-row>

        <v-row
          class="my-0"
          v-for="product in products"
          :key="product.id"
        >
          <horizontalProduct
            :product="product"
            @quantityChange="quantityChange"
            @itemDeleted="itemDeleted"
          />
        </v-row>
      </v-col>

      <v-col
        class=""
        sm="5"
        md="4"
        xl="3"
        order="first"
        order-sm="last"
      >
        <v-row
          no-gutters
          justify="center"
          class="py-8 my-0 mb-3"
        >
          <h4
            class="
              text-h4
              text-sm-h5
              text-md-h4
              text-center
            "
          >
            Order Summary
          </h4>
        </v-row>

        <orderSummary :total="totalPrice"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import horizontalProduct from '@/components/cards/horizontalProduct.vue';
import orderSummary from '@/components/cards/orderSummary.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    horizontalProduct,
    orderSummary
  },
  data() {
    return {
      totalPrice: 0,
      products: [],
      cartItems: [],
    }
  },
  methods: {
    itemDeleted() {
      this.setCartProducts()
    },
    async quantityChange({id, quantity}) {
      let product = {product: {itemId : id, quantity}}

      let response = await fetch('/1234/cartItems', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(product)
      })

      this.setCartProducts()
        .then(this.setPrice())
    },
    async setCartProducts() {
      this.$store.dispatch('retrieveAllProducts')
        .then(() => this.$store.dispatch('retrieveCartItems'))
        .then(() => this.getCartProducts)
        .then((products) => this.products = products)
        .then(() => this.getCartItems)
        .then((items) => this.cartItems = items)
        // .then(() => console.log(this.cartItems))
    },
    setPrice() {
      console.log(this.cartItems)
      let total = this.cartItems.reduce((prev, current) => {
        let currentProduct = this.products.find(p => p.id == current.itemId)
        let currentPrice = currentProduct.price * current.quantity;
        return prev + currentPrice;
      }, 0)
      total = Math.round(total * 100)
      total = Math.trunc(total)
      total = total / 100

      this.totalPrice = total;
    }
  },
  computed: {
    ...mapGetters(['getCartItems', 'getCartProducts']),
  },
  mounted() {
    this.setCartProducts()
      .then(() => this.setPrice())
  },
  watch: {
    cartItems() {
      this.setPrice()
    }
  },
}
</script>