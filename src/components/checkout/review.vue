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
      v-model="infoCheck"
      label="My Information Is Correct"
      hide-details
      class="ml-2"
    >
    </v-checkbox>
    <v-checkbox
      v-model="fakeCheck"
      label="I Understand That This Is A Fake Website"
      class="ml-2"
    >
    </v-checkbox>


    <v-row no-gutters justify="space-between mt-2">
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
      >
        Pay
      </v-btn>
    </v-row>

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
      infoCheck: false,
      fakeCheck: false,
    }
  },
  computed: {
    infoAndTermsChecked() {
      return this.infoCheck && this.fakeCheck
    }
  }
}
</script>