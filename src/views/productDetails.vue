<template>
  <v-container>
    <v-row class="justify-center my-6">
      <h2 class="text-h5 text-md-h4 text-lg-h3 font-weight-regular text-uppercase">
        {{ product.title }}
      </h2>
    </v-row>

    <v-row class="justify-center border">
      <gallery/>  
    </v-row>

    <v-row class="my-6">
      <v-col
        cols="10"
        offset="1"
        sm="8"
        offset-sm="2"
        lg="6"
        offset-lg="3"
      >
        <v-btn
          width="100%"
          dark
          color="primary"
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
        <p class="text-center">{{ product.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import gallery from '@/components/gallery.vue';

export default {
  components: {
    gallery,
  },
  data() {
    return {

    }
  },

  computed: {
    ...mapGetters(['getProductById']),
    product() {
      return this.getProductById(this.$route.params.id)
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>