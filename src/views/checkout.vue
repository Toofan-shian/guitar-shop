<template>
  <v-container class="pt-6">
    <v-row
      class=""
    >
      <v-col
        sm="10"
        offset-sm="1"
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
        xl="4"
        offset-xl="4"
      >
        <v-stepper v-model="step" alt-labels>
          <v-stepper-header>
            <v-stepper-step
              :complete="step > 1"
              step="1"
            >
              Your Information
            </v-stepper-step>
            
            <v-divider></v-divider>

            <v-stepper-step
              :complete="step > 2"
              step="2"
            >
              Your Adress
            </v-stepper-step>
            
            <v-divider></v-divider>
            
            <v-stepper-step
              step="3"
            >
              Review
            </v-stepper-step>

          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <personalInformation
                :form="form"
                :nextStep="nextStep"
              />
            </v-stepper-content>
            
            <v-stepper-content step="2">
              <addressInformation
                :form="form"
                :prevStep="prevStep"
                :nextStep="nextStep"
              />
            </v-stepper-content>
            
            <v-stepper-content step="3">
              <review
                :form="form"
                :prevStep="prevStep"
              />
            </v-stepper-content>

          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import personalInformation from '@/components/checkout/personalInformation.vue';
import addressInformation from '@/components/checkout/addressInformation.vue';
import review from '@/components/checkout/review.vue';  

export default {
  components: {
    personalInformation,
    addressInformation,
    review,
  },
  data() {
    return {
      step: 1,
      form: {
        "First Name": '',
        "Last Name": '',
        email: '',
        phone: '',
        state: '',
        city: '',
        street: '',
        zip: '',

      }
    }
  },
  methods: {
    prevStep() {
      this.step -= 1;
    },
    nextStep() {
      this.step +=1;
    }
  },
  watch: {
    form() {
      console.log(this.form)
    }
  }
}
</script>