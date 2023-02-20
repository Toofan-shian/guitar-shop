<template>
  <v-app>
    <navBar/>
    <v-main>
      <router-view/>
    </v-main>
    <footerBar/>


    <v-snackbar
      v-model="$store.state.snackbar.show"
      timeout="6000"
      :color="$store.state.snackbar.color"
      top
      right
      class="ma-2"
      
    >
      <v-row class="justify-space-between align-center ma-0">
        <span>
          {{ $store.state.snackbar.massage }}
        </span>

        <v-btn
          icon
          class="ma-0 pa-0 mr-n4"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-snackbar>
  </v-app>
</template>

<script>
import navBar from './components/navBar.vue';
import footerBar from './components/footer.vue';

export default {
  components: {navBar, footerBar},
  name: 'App',

  data: () => ({
    
  }),
};
</script>

<style>
.border {
  border: 1px solid red;
}
.border-b {
  border: 1px solid blue;
}
</style>
