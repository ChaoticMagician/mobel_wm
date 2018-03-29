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
      name: 'shangpin',
      component: shangpin
    },
    {
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun
    },
    {
      path: '/shangjia/:id',
      name: 'shangjia',
      component: shangjia
    }
  ]
})
