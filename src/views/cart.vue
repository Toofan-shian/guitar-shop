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
            @itemDeleted="setProducts"
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
      products: [],
    }
  },
  methods: {
    setProducts() {
      this.$store.dispatch('retrieveCartItems')
      .then(() => this.products = this.getCartItems)
    }
  },
  computed: {
    ...mapGetters(['getCartItems']),
    totalPrice() {
      let total = this.products.reduce((prev, current) => prev + current.price, 0)
      total = Math.round(total * 100)
      total = Math.trunc(total)
      total = total / 100
      return total
    }
  },
  mounted() {
    this.setProducts()
  }
}
</script>