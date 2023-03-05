<template>
  <v-card class="py-3" elevation="6" >
    <v-img
      :src="imgSrc"
      contain
      width="150"
      height="350"
      class=""
      style="margin: 0 auto;"
    >
    </v-img>

    <v-card-title class="text-subtitle-2 " >
      <div style="height: 50px" class="d-flex align-center">
        {{ product.title }}
      </div>
    </v-card-title>
    <v-card-subtitle>
      ${{ product.price }}
    </v-card-subtitle>

    <v-card-actions class="justify-center">
      <v-btn
        width="95%"
        outlined
        color="primary darken-2"
        @click="viewDetails"
      >
        view details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    viewDetails() {
      this.$router.push(`/products/${this.product.id}`)
    }
  },
  computed: {
    imgSrc() {
      let src = '/guitar-shop/' + this.product.title + '/main/' + this.product.title + '.jpg'
      return src
    },

  }
}
</script>