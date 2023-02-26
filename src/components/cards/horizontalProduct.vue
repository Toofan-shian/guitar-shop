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
        <v-card-title class="px-2 pt-1 pb-0 text-sm-subtitle-1 text-md-h6">
          {{ product.title }}
        </v-card-title>

        <v-card-subtitle class="px-2 pb-1 mt-1">
          ${{ product.price }}
        </v-card-subtitle>

        
        <v-row class=" ma-0 mt-2 justify-space-between">
          
          <v-col
            cols="5"
          >
          <v-select
            style=""
            class="py-0 my-0"
            label="Quantity"
            v-model="quantity"
            :items="quantitys"
            dense
            hide-details
          ></v-select>
          </v-col>

          <v-col
            cols="7"
            class="d-flex justify-end"
          >
          <v-btn
            class="pa-0"
            text
            small
            plain
            @click="removeItem"
          >
            remove
          </v-btn>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

   
  </v-card>
</template>

<script>

export default {
  props: {
    product: Object
  },
  data() {
    return {
      quantity: '1',
      quantitys: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  },
  methods: {
    async removeItem() {
      let response = await fetch(`/1234/cartItems/${this.product.id}`, {
        method: 'DELETE',
      })
      this.$emit('itemDeleted')
    }
  },
  watch: {
    quantity() {
      this.$emit('quantityChange', {id: this.product.id, quantity: this.quantity})
    }
  }
}
</script>