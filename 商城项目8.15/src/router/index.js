import Vue from 'vue'
import Router from 'vue-router'
import Hearder from '../assets/css/header.css'
import reset from '../assets/css/reset.css'


Vue.use(Router)


import Shop from '../views/shop'
import Home from '../views/home'
import Myphone from '../views/myPhone'
import Pageone from '../views/page-one'
import Pagetwo from '../views/page-two'
import Pagethree from '../views/page-three'
import Pagefour from '../views/page-four'
import Pagefive from '../views/page-five'
import Item from '../views/item'
import Cart from '../views/cart'
import Checkout from '../views/checkout'
import Payment from '../views/payment'
import Account from '../views/account'
import Order from '../views/account/order'

export default new Router({
  routes: [
    { path : '/', component : Home},
    { path : '/Home', component : Home},
    { path : '/Shop', component : Shop},
    { path : '/Myphone', component : Myphone},
    { path : '/Pageone', component : Pageone},
    { path : '/Pagetwo', component : Pagetwo},
    { path : '/Pagethree', component : Pagethree},
    { path : '/Pagefour', component : Pagefour},
    {path : '/Pagefive', component : Pagefive},
    {path :'/Item', name: 'Item', component : Item},
    {path :'/Cart',component : Cart},
     {path :'/Checkout',component : Checkout},  
     {path :'/Payment',name: 'Payment',component : Payment},

     {
      path :'/Account',
     
     component : Account,
     children: [{
        path :'',
        name: 'Account',
        component : Order,
     }]
   },    
    
  ]
})
