<template>
  <v-app>
    <navBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/navBar.vue';

export default {
  components: {navBar},
  name: 'App',

  data: () => ({
    
  }),
};
</script>
