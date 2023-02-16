<template>
  <v-container class="">
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
        <h4
          class="
            text-h4
            text-sm-h5
            text-md-h4
            my-8
            text-center
          "
        >
          Cart Items
        </h4>

        <v-row
          class=""
          v-for="product in products"
          :key="product.id"
        >
          <horizontalProduct
            :product="product"
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
        <h4
          class="
            text-h4
            text-sm-h5
            text-md-h4
            my-8
            text-center
          "
        >
          Order Summary
        </h4>
        <orderSummary/>
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

  },
  computed: {
    ...mapGetters(['getProductsByCategory'])
  },
  mounted() {
    this.$store.dispatch('retrieveAllProducts')
      .then(() => this.products = this.getProductsByCategory('All Products'))
  }
}
</script>