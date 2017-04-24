import Vue from 'vue'
import Router from 'vue-router'
import mine from '@/components/mine'
import home from '@/components/home'
import rent from '@/components/rent'
import moment from '@/components/moment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    { path: '/mine', 
    	component: mine 
    },
    { path: '/rent', 
    	component: rent 
    },
    { path: '/moment', 
    	component: moment 
    }
  ]
})
