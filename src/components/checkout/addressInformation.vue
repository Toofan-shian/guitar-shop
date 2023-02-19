<template>
  <v-sheet>
    <v-form ref="addressForm" @submit.prevent="nextStep">
      <v-row>
        <v-col cols="12" class="">
          <v-text-field
            label="State"
            v-model="form.state"
            required
            :rules="rules.state"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" class="">
          <v-text-field
            label="City"
            v-model="form.city"
            required
            :rules="rules.city"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="">
          <v-text-field
            label="Street"
            v-model="form.street"
            required
            :rules="rules.street"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="">
          <v-text-field
            label="ZIP"
            v-model="form.zip"
            required
            :rules="rules.zip"
          >
          </v-text-field>
        </v-col>


        <v-col class="d-flex justify-space-between mt-2">
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
            :disabled="!formIsValid"
            min-width="100px"
          >
            Next
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
</template>

<script>

export default {
  props: {
    form: Object,
    nextStep: Function,
    prevStep: Function,
  },
  data() {
    return {
      rules: {
        state: [v => (v || '').length > 0 || 'Please Enter State'],
        state: [v => (v || '').length > 0 || 'Please Enter City'],
        state: [v => (v || '').length > 0 || 'Please Enter Street'],
        state: [v => (v || '').length > 0 || 'ZIP Code Is Required'],
      }
    }
  },
  methods: {

  },
  computed: {
    formIsValid() {
      return (
        this.form.state &&
        this.form.city &&
        this.form.street &&
        this.form.zip
      )
    }
  }
}
</script>