<template>
  <v-card class="border" outlined>
    <v-card-text>
      
      <v-row class="ma-0 my-2 text-uppercase justify-space-between text-subtitle-1">
        <span>Total</span>
        <span>$2400</span>
      </v-row>
      
      <v-divider></v-divider>
      
      <v-row class="ma-0 my-2 text-uppercase justify-space-between text-subtitle-1">
        <span>Shipping</span>
        <span>$0.00</span>
      </v-row>
      
      <v-divider></v-divider>
      
      <v-row class="ma-0 my-2 text-uppercase justify-space-between text-subtitle-1">
        <span>TAX</span>
        <span>$0.00</span>
      </v-row>

      <v-divider></v-divider>

      <v-row class="ma-0 my-2 text-uppercase justify-space-between text-sm-subtitle-1 font-weight-bold">
        <span>Subtotal</span>
        <span>$2400.00</span>
      </v-row>

    </v-card-text>

    <v-card-actions class="justify-center mb-2">
      <v-btn
        width="95%"
        color="primary"
        to="/checkout"
      >
        checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  
}
</script>