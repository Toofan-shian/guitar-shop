<template>  
  <div>
    <v-img
      src="/guitar-shop/bannercopy.jpg"
      max-height="500"
      
    >
      <v-container fill-height fluid v-if="this.$vuetify.breakpoint.name != 'xs'">
        <v-row
          class=" ma-0"
          height="100%"
          float
        >
          <v-col
            class=""
            cols="4 text-center"
          >
            <h3
              class="
                text-uppercase
                mb-1 mb-sm-3 mb-md-8 
                text-sm-h5 text-md-h4 text-lg-h3 text-xl-h2
              "
              style="text-shadow: 1px 1px 5px rgba(255, 15, 15, 0.21)"
            >
              find your first fender
            </h3>
            <div
              class="text-caption text-sm-body-1 text-lg-subtitle-1 text-xl-h6"
            >We've made it easier than ever to get started.</div>
          </v-col>
        </v-row>
      </v-container>
    <template v-slot:placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
    </v-img>
  </div>
</template>

<script>

export default {
  
}
</script>