<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        Guitar-Shop
      </v-toolbar-title>
      <span class="ml-4">{{ breakName }}</span>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon v-if="isXs" @click="drawer = !drawer"/>

      <v-toolbar-items v-else>
        <v-btn
          text
          to="home"
        >
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>

        <v-btn
          text
          to="store"
        >
          <v-icon left>mdi-store</v-icon>
          Store
        </v-btn>

        <v-btn
          text
          to="cart"
        >
          <v-icon left>mdi-cart</v-icon>
          cart
        </v-btn>
      </v-toolbar-items>

      <template v-slot:extension v-if="homePath">
        <v-tabs align-center >
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

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

export default {
  data() {
    return {
      drawer: false,
      links: [
        {title: 'HOME', path: '/', icon: 'mdi-home'},
        {title: 'STORE', path: '/store', icon: 'mdi-store'},
        {title: 'CART', path: '/cart', icon: 'mdi-cart'},
      ]
    }
  },
  computed: {
    homePath() {
      return this.$router.currentRoute.path == '/home';
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
  mounted() {
    console.log(this.homePath)
  }
}
</script>