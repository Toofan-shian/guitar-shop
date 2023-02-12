import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import store from '../views/store'
import cart from '../views/cart'

Vue.use(VueRouter)

const routes = [
{
  name: 'home',
  path: '/',
  component: home
},
{
  name: 'store',
  path: '/store',
  component: store
},
{
  name: "cart",
  path: "/cart",
  component: cart
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
