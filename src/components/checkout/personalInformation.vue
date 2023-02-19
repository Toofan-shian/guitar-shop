<template>
  <v-sheet>
    <v-form ref="informationForm" @submit.prevent="nextStep">
      <v-row>
        <v-col cols="12" class="">
          <v-text-field
            label="First Name"
            v-model="form['First Name']"
            required
            :rules="rules.first"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="">
          <v-text-field
            label="Last Name"
            v-model="form['Last Name']"
            required
            :rules="rules.last"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="">
          <v-text-field
            label="Email"
            v-model="form.email"
            required
            :rules="rules.email"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="">
          <v-text-field
            label="Phone Number"
            v-model="form.phone"
            required
            :rules="rules.phone"
          >
          </v-text-field>
        </v-col>

        <v-col class="d-flex justify-space-between mt-2">
          <v-btn
            text
            @click="cancelCheckout"
          >
            cancel
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
  },
  data() {
    return {
      rules: {
        first: [value => (value || '').length > 0 || 'Please Enter Your Name'],
        last: [value => (value || '').length > 0 || 'Please Enter Your Last Name'],
        email: [value => (value || '').length > 0 || 'Please Enter Your Email'],
        phone: [
          value => value.length >= 10 || 'At Least 10 Digits'
        ]
      }
    }
  },
  computed: {
    formIsValid() {
      return (
        this.form['First Name'] &&
        this.form['Last Name'] &&
        this.form.email &&
        this.form.phone && this.form.phone.length >= 10
      )
    }
  },
  methods: {
    cancelCheckout() {
      this.$refs.informationForm.reset();
      this.$router.push('/cart')

    }
  },
  mounted() {

  }
}
</script>