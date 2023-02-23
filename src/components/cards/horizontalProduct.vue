<template>
  <v-card class="my-3 pa-2" outlined width="100%">
    <v-row class=" ma-0">
      <v-col class=" d-flex justify-center align-center" cols="4">
        <v-img
          :src="`/guitar-shop/${product.title}/thumbs/face.jpg`"
          width="100"
          height="100"
          max-height="100"
          max-width="100"
        ></v-img>
      </v-col>

      <v-col class=" pa-0 d-flex  flex-column" cols="8">
        <v-card-title class="pa-2 text-sm-subtitle-1 text-md-h6">
          {{ product.title }}
        </v-card-title>

        <v-card-subtitle class="px-2 pb-2 mt-1">
          ${{ product.price }}
        </v-card-subtitle>

        <v-card-actions>
          <v-row class="ma-0 px-3 justify-end">

            <v-btn
              class="pa-0"
              text
              small
              plain
              @click="removeItem"
            >
              remove
            </v-btn>
          </v-row>
        </v-card-actions>

      </v-col>
    </v-row>

   
  </v-card>
</template>

<script>

export default {
  props: {
    product: Object
  },
  date() {
    return {

    }
  },
  methods: {
    async removeItem() {
      let response = await fetch(`/1234/cartItems/${this.product.id}`, {
        method: 'DELETE',
      })
      this.$emit('itemDeleted')
    }
  }
}
</script>