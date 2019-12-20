import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import MoolngTable2 from '@/components/MoolngTable2'
// import MoolngIndex from '@/components/index'
// import MoolngTabs from '@/components/MoolngTabs'
// import Header from '../components/header'
// import Center from '../components/center'
// import Footer from '../components/footer'

import MoolngIndex from '@/components/MoolngIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'MoolngIndex',
      component: MoolngIndex
    },
    {
      path: '/r1',
      name: 'R1',
      component: ()=> import('@/components/Router01'),
      meta:{
        title:'路由1'
      }
    },
    {
      path: '/r2',
      name: 'R2',
      component: ()=> import('@/components/Router02'),
      meta:{
        title:'路由2'
      }
    },
    {
      path: '/r3',
      name: 'R3',
      component: ()=> import('@/components/Router03'),
      meta:{
        title:'路由3'
      }
    }
    // },
    // {
    //   path: '/list',
    //   components: {
    //     routerDataList: MoolngTable2
    //   }
    // },
    // {
    //   path: '/tabs',
    //   name: 'tabs',
    //   component: MoolngTabs
    // },
    // {
    //   path: '/a1',
    //   components: {
    //     header: Header,
    //     center: Center,
    //     footer: Footer
    //   }
    // }
  ]
})
