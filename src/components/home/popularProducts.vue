<template>
  <div>
    <!-- <div v-for="product in populars" :key="product.id">
      {{ product.title }}
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  
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
    // this.retrieveAllProducts()
  }
}
</script>