<template>
  <v-container class="my-4">
    <v-row
      class=""
    >
      <v-col
        cols="8"
        offset="2"
        class=""
        sm="10"
        offset-sm="1"
        xl="8"
        offset-xl="2"
      >
        <h3
          class="text-h5 text-sm-h4"
        >
          Popular Products
          <v-btn
            small
            text
            color="primary"
            to="store"
          >
            view all
          </v-btn>
        </h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="8"
        offset="2"
        sm="10"
        offset-sm="1"
        xl="8"
        offset-xl="2"
        class=""
      >
        <v-row justify="center">
          <v-col
            v-for="product in populars"
            :key="product.id"
            cols="12"
            sm="6"
            md="4"
          >
            <verticalProduct
              :product="product"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import verticalProduct from '../cards/verticalProduct.vue';
import { mapActions, mapGetters } from 'vuex';


export default {
  components: {
    verticalProduct,
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['retrieveAllProducts'])
  },
  computed: {
    ...mapGetters(['populars'])
  },
  created() {

  },
  mounted() {
    this.retrieveAllProducts()
  }
}
</script>