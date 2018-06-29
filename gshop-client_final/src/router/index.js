/*
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/MSite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Shop',
      component: Shop,
      children: [
        {
          path: '/Shop/goods',
          component: ShopGoods
        },
        {
          path: '/Shop/info',
          component: ShopInfo
        },
        {
          path: '/Shop/ratings',
          component: ShopRatings
        },
        {
          path: '',
          redirect: '/Shop/goods'
        }
      ]
    }
  ]
})
