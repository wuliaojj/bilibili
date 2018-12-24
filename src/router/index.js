import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BiliIndex from '../views/BiliIndex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BiliIndex',
      component: BiliIndex
    }
  ]
})
