<template>
  <v-container class="mb-5 pa-3">
    <v-row
      class=""
    >
      <v-col
        class=""
        cols="10"
        offset="1"
        offset-md="0"
        md="3"
        xl="2"
        offset-xl="2"
      >
        <h3 class="text-h4 my-8 font-weight-light hidden-sm-and-down">Filter Price</h3>
        <v-card class="hidden-sm-and-down">
          <v-card-text>
            <v-radio-group v-model="priceRange">
              <v-radio
                v-for="(item, i) in radioItems"
                :key="item"
                :value="i"
                :label="item"
              >
              </v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>


        <v-expansion-panels class="hidden-md-and-up mt-4">
          <v-expansion-panel >
            <v-expansion-panel-header>
              <h4>Filter Price</h4>
            </v-expansion-panel-header>
  
            <v-expansion-panel-content>
              <v-card outlined>
                <v-card-text class="">
                  <v-radio-group v-model="priceRange" row class="ma-0 pa-0" hide-details>
                    <v-radio
                      v-for="(item, i) in radioItems"
                      :key="item"
                      :value="i"
                      :label="item"
                      class="my-2"
                    >
                    </v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>




      <v-col
        class=""
        cols="10"
        offset="1"
        offset-md="0"
        md="9"
        xl="6"
      >
        <h3 class="text-h4 mb-8 mt-2 mt-md-8 font-weight-light">{{ category }}</h3>
        <v-row v-if="!showPlaceHolder">
          <v-col
            v-for="product in products"
            :key="product.id"
            cols="12"
            md="4"
            sm="6"
          >
            <verticalProduct :product="product"/>
          </v-col>
        </v-row>

        <v-row
          v-else
          class="text-center justify-center text-h6 text-md-h5 ma-0 pa-6 pink--text text--darken-4"
          >
          {{ productsPlaceHolder }}
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import verticalProduct from '@/components/cards/verticalProduct.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    verticalProduct,
  },
  data() {
    return {
      showPlaceHolder: false,
      products: [],
      category: 'All Products',
      priceRange: 0,
      radioItems: [
        'All',
        'Below $500',
        '$500 To $1000',
        '$1000 To $2000',
        'Above $2000'
      ]
    }
  },
  methods: {
    ...mapActions(['retrieveAllProducts']),
    checkProductsLenght() {
      if (this.products.length == 0) {
        this.showPlaceHolder = true;
      } else this.showPlaceHolder = false
    },
    filterPrice() {
      switch(this.priceRange) {
        case 0: {
          this.products = this.getProductsByCategory(this.category)
          break
        }
        case 1: {
          this.products = this.getProductsByCategory(this.category)
            .filter(p => p.price <= 500)
          break
        }
        case 2: {
          this.products = this.getProductsByCategory(this.category)
            .filter(p => p.price >= 500 && p.price <= 1000)
          break
        }
        case 3: {
          this.products = this.getProductsByCategory(this.category)
            .filter(p => p.price >= 1000 && p.price <= 2000)
          break
        }
        case 4: {
          this.products = this.getProductsByCategory(this.category)
            .filter(p => p.price >= 2000)
          break
        }
      }
      this.checkProductsLenght()
    }
  },
  computed: {
    ...mapGetters(['getProductsByCategory']),
    productCat() {
      return this.$store.state.productCategory
    },
    productsPlaceHolder() {
      return `No ${this.category} Was Found With Price ${this.radioItems[this.priceRange]}`
    }
  },
  watch: {
    productCat() {
      this.category = this.productCat;
      this.products = this.getProductsByCategory(this.productCat);
      this.filterPrice()
    },
    priceRange() {
      this.filterPrice()
    }
  },
  beforeMount() {
    this.retrieveAllProducts().then(() => {
      this.products = this.getProductsByCategory(this.category)
    })
  },
  mounted() {
  }
}
</script>