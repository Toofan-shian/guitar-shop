<template>
  <div class="carousel">
    <v-row
      class=""
    >
      <v-carousel
        v-model="model"
        :show-arrows="false"
        hide-delimiters
        class=""
        height="100%"
      >
        <v-carousel-item
          v-for="name in imageNames"
          :key="name"
          class=""
        >
          <div class="pa-4 shadow">
            <v-img
              class=""
              :src="`/guitar-shop/${productTitle}/gallery/${name}.jpg`"
            >
            </v-img>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row class="justify-center mt-2">
      <div
        v-for="(name, i) in imageNames"
        :key="name"
        class="mx-4 elevation-1 pa-1"
      >
        <v-img
          :src="`/guitar-shop/${productTitle}/thumbs/${name}.jpg`"
          :width="imgSize"
          :height="imgSize"
          class="cursor"
          @click="model = i"
          
        >
        </v-img>
      </div>
    </v-row>
  </div>
</template>

<script>

export default {
  props: ['productTitle'],
  data() {
    return {
      imageNames: ['front', 'back', 'face'],
      model: 0,
    }
  },
  computed: {
    imgSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 60;
      }
      return 100
    }
  }
}
</script>

<style >
.cursor {
  cursor: pointer;
}
.carousel .shadow {
  box-shadow: 5px 10px #888888;
  /* border: 1px solid black; */
  z-index: 50;
}
</style>