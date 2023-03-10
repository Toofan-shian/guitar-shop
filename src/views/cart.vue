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

        <v-row
          no-gutters
          v-if="showPlaceHolder"
          class="text-h6 text-md-h5 ma-0 pink--text text--darken-4"
        >
          <v-col cols="12" xl="8" offset-xl="2" class="d-flex flex-column justify-center align-center">
            <div>There Is No Product In Your Cart</div>
            <v-btn
              outlined
              color="primary"
              class="mt-4"
              to="/store"
            >
              Explore Products
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class=" justify-center"
          v-if="showProgress"
        >
          <v-progress-circular
            indeterminate
            color="#454545"
            size="38"
          >
          </v-progress-circular>
          <div
            class=" ml-4 text-h6 text-md-h5"
            style="height: fit-content;"
          >
            Getting Cart Items...
          </div>
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

        <orderSummary :total="totalPrice" :productAdded="products.length > 0"/>
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
      showProgress: true,
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
    },
    async setCartProducts() {
      await this.$store.dispatch('retrieveAllProducts')
        .then(() => this.$store.dispatch('retrieveCartItems'))
        .then(() => this.getCartProducts)
        .then((products) => this.products = products)
        .then(() => this.getCartItems)
        .then((items) => this.cartItems = items)
    },
    async setPrice() {
      let total = this.cartItems.reduce((prev, current) => {
        let currentProduct = this.products.find(p => p.id == current.itemId)
        let currentPrice = currentProduct.price * current.quantity;
        return prev + currentPrice;
      }, 0)
      total = Math.round(total * 100)
      total = Math.trunc(total)
      total = total / 100
      this.totalPrice = total;
      return
    }
  },
  computed: {
    ...mapGetters(['getCartItems', 'getCartProducts']),
    showPlaceHolder() {
      return (this.products.length == 0 && this.showProgress == false);

    }
  },
  mounted() {
    this.setCartProducts()
      .then(() => this.showProgress = false)
  },
  watch: {
    cartItems() {
      this.setPrice()
    }
  },
}
</script>