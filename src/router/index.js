import Vue from 'vue'
import Router from 'vue-router'
import shangpin from '@/components/body/shangpin'
import pinglun from '@/components/body/pinglun'
import shangjia from '@/components/body/shangjia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shangpin',
      name: 'base',
      component: shangpin
    },
    {
      path: '/pinglun',
      name: 'base',
      component: pinglun
    },
    {
      path: '/shangjia',
      name: 'base',
      component: shangjia
    }
  ]
})
