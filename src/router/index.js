import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Star',
    component: ()=>import('../components/Star.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '',
    redirect:"/star",
    // component: ()=>import('../components/Star.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../components/Order.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/Cart.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('../components/Pay.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../components/Search.vue'),
    meta:{
      footer:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes
})

export default router
