<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="d-none d-md-flex align-center toolbar-title" @click="$router.replace('/')">
        <v-img
          src="logoBlackCropped.jpg"
          class="mr-1 d-none d-sm-flex"
          height="36"
          width="160"
          contain
        ></v-img>
        <div class="mb-1 ml-1">
          <v-img
            src="favicon.ico"
            width="33"
            height="36"
            contain
            classs="d-none d-sm-flex"
          ></v-img>
        </div>
      </v-toolbar-title>

      <v-toolbar-title class="d-flex d-md-none align-center toolbar-title" @click="$router.replace('/')">
       <v-img
          src="logoBlackCropped.jpg"
          class="mr-1"
          height="28.8"
          width="128"
          contain
        ></v-img>
        <div class="mb-1 ml-1">
          <v-img
            src="favicon.ico"
            width="26.4"
            height="28.8"
            contain
            classs=""
          ></v-img>
        </div>
      </v-toolbar-title>
      <!-- <span class="ml-4">{{ breakName }}</span> -->

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon v-if="isXs" @click="drawer = !drawer"/>

      <v-toolbar-items v-else>
        <v-btn
          text
          to="/"
        >
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>

        <v-btn
          text
          to="/store"
        >
          <v-icon left>mdi-store</v-icon>
          Store
        </v-btn>

        <v-btn
          text
          to="/cart"
        >
          <v-icon left>mdi-cart</v-icon>
          cart
        </v-btn>
      </v-toolbar-items>
      

      <template v-slot:extension v-if="storePath">
        <v-tabs centered v-model="tab" show-arrows>
          <v-tab
            v-for="item in tabs"
            :key="item"
            class="text-capitalize font-weight-bold text-body-2 text-md-body-1 text-lg-h6"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
    


    <v-navigation-drawer
      app
      disable-resize-watcher
      right
      v-model="drawer"
      style="z-index: 50;"
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          route
          :to="link.path"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
  data() {
    return {
      tab: 0,
      tabs: ['All', 'Electric Guitars', 'Electric Bass', 'Acoustic & Nylon'],
      path: '',
      drawer: false,
      links: [
        {title: 'HOME', path: '/', icon: 'mdi-home'},
        {title: 'STORE', path: '/store', icon: 'mdi-store'},
        {title: 'CART', path: '/cart', icon: 'mdi-cart'},
      ]
    }
  },
  computed: {
    storePath() {
      return this.path == '/store';
    },
    isXs() {
      if (this.$vuetify.breakpoint.name == 'xs') {
        return true;
      } return false;
    },
    breakName() {
      return this.$vuetify.breakpoint.name
    }
  },
  methods: {
    ...mapMutations(['setProductCategory']),
    setCategory() {
      this.setProductCategory(this.tab)
    },
    setPath() {
      this.path = this.$router.currentRoute.path
    },
  },
  mounted() {
    this.setPath()
  },
  watch: {
    $route(){
      this.setPath()
    },
    tab(){
      this.setCategory()
    }
  }
}
</script>

<style>
.toolbar-title {
  cursor: pointer;
}

</style>