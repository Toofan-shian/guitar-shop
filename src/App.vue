<template>
  <v-app>
    <navBar/>
    <v-main>
      <router-view/>
    </v-main>
    <footerBar/>
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
