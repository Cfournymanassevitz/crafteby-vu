import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import AccountView from '../views/AcountView.vue'
import DetailProduct from '../views/DetailProductView.vue'
import OrderView from '../views/OrderView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView

    },
    {
      path: '/account',
      name: 'account',
      component: AccountView

    },
    {
      path: '/register',
      name: 'register',
      component: AccountView

    },
    {
      path: '/product/:id',
      name: 'detail',
      component: DetailProduct

    },
    {
      path: '/order',
      name: 'order',
      component: OrderView

    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationView

    },


  ]
})

export default router
