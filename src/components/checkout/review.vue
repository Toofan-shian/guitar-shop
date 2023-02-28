<template>
  <v-sheet class="pt-3">
    <v-row
      v-for="(val, key) in form"
      :key="key"
      class="mb-4 ml-2"
      no-gutters
    >
      <v-col
        cols="3"
      >
      <span class="text-capitalize">{{ key }} :</span>
      </v-col>

      <v-col
        cols="7"
      >
      <span class="ml-5"> {{ val }}</span>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-checkbox
      v-model="fakeCheck"
      label="I Understand That This Is A Fake Website"
      class="ml-2"
    >
    </v-checkbox>


    <v-row no-gutters class="justify-space-between mt-2">
      <v-btn
        text
        @click="prevStep"
      >
        Go back
      </v-btn>

      <v-btn
        outlined
        color="primary"
        type="submit"
        :disabled="!infoAndTermsChecked"
        min-width="100px"
        @click="showOverLay"
      >
        Pay
      </v-btn>
    </v-row>


    <v-overlay
      v-model="overlay"
      opacity="0.75"
    >
      <div v-if="progress" class="d-flex">
        <v-progress-circular
          indeterminate
          size="35"
          class="mr-3"
        ></v-progress-circular>
        <div class="ml-3 text-h5">Order Proccessing...</div>
      </div>

      <v-card
        class="mx-6"
        v-if="thankYou"
        rounded="lg"
        elevation="10"
      >
        <v-row class="justify-space-between">
          <v-card-title class="text-lg-h5 text-capitalize ml-5 mr-8">
            Thanks for checking out this website
          </v-card-title>

          <v-card-actions class="mr-5">
            <v-btn
              icon
              @click="closeOverLay"
            >
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-row>

      </v-card>
    </v-overlay>
  </v-sheet>
</template>

<script>

export default {
  props: {
    form: Object,
    prevStep: Function,
  },
  data() {
    return {
      fakeCheck: false,
      overlay: false,
      progress: false,
      thankYou: false,
    }
  },
  computed: {
    infoAndTermsChecked() {
      return this.fakeCheck
    }
  },
  methods: {
    showOverLay() {
      this.overlay = true;
      this.progress = true;
      setTimeout(() => {
        this.progress = false;
        this.thankYou = true;
      }, 2000)
      setTimeout(() => {
        this.overlay = false;
        this.thankYou = false;
      }, 4321)
    },
    closeOverLay() {
      this.overlay = false;
      this.thankYou = false;
    }
  },

}
</script>