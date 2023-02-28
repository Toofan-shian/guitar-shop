<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        <v-img
          src="logoBlackCropped.jpg"
        ></v-img>
      </v-toolbar-title>
      <span class="ml-4">{{ breakName }}</span>

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
      
      <!-- TABS -->
      <template v-slot:extension v-if="storePath">
        <v-tabs centered v-model="tab">
          <v-tab
            v-for="item in tabs"
            :key="item"
            class="text-capitalize font-weight-bold"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>




    <!-- Navigation Drawer -->
    <v-navigation-drawer
      absolute
      right
      v-model="drawer"
    >
      <v-list dense>
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