import  '@/assets/css/reset.css'

import Vue from 'vue'
import Router from 'vue-router'

import Shop from '@/views/shop'
import Item from '@/views/item'
import Cart from '@/views/cart'
import Checkout from '@/views/checkout'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path:'/',
      name:'Shop',
      component:Shop
    },
    {
      path:'/item',
      name:'Item',
      component:Item
    },
     {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
    
  ]
})
