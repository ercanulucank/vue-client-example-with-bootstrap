import Vue from 'vue'
import Router from 'vue-router'
import Anasayfa from '@/views/Anasayfa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Anasayfa',
      component: Anasayfa
    },
    {
      path: '/giris_yap',
      name: 'GirisYap',
      component: () => import('@/views/GirisYap.vue')
    }
  ]
})
