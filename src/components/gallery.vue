<template>
  <div class="carousel">
    <v-row
      class=""
    >
      <v-carousel
        v-model="model"
        :show-arrows="false"
        hide-delimiters
        class="my-lg-5"
        :height="height"
      >
        <v-carousel-item
          v-for="name in imageNames"
          :key="name"
          class=""
          height="100%"
        >
          <v-img
            ref="img"
            class=""
            :src="`/guitar-shop/${productTitle}/gallery/${name}.jpg`"
            height="100%"
            contain
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                >
                </v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row class="justify-center mt-7 mt-lg-2">
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
      carouselHeight: false,
    }
  },
  computed: {
    height() {
      switch(this.$vuetify.breakpoint.name) {
        case 'xs': return 118;
        case 'sm': return 200;
        case 'md': return 300;
        case 'lg': return 333;
        case 'xl': return 360;
      }
    },
    imgSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 55;
        case 'sm': return 80;
      }
      return 100
    }
  },
  methods: {

  },
  mounted() {

  },
  updated() {

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