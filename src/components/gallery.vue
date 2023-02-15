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
        :height="carouselHeight ? carouselHeight : 'auto'"
      >
        <v-carousel-item
          v-for="name in imageNames"
          :key="name"
          class=""
        >
          <div class="pa-4 img-div">
            <v-img
              ref="img"
              class=""
              :src="`/guitar-shop/${productTitle}/gallery/${name}.jpg`"

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
      carouselHeight: false,
    }
  },
  computed: {
    height() {
      let img = this.$refs.img
      console.log(img)
    },
    imgSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 60;
      }
      return 100
    }
  },
  methods: {
    // setCarouselHeight () {
    //   var item = document.getElementsByClassName('v-image__image--cover')
    //   console.log(item[0].clientHeight)
    //   this.carouselHeight = item[0].clientHeight + 'px'
    // }
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