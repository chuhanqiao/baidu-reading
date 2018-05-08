import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import billboard from '@/components/billboard/billboard'
import institutional from '@/components/institutional/institutional'
import worker from '@/components/worker/worker'
import client from '@/components/client/client'
import shelf from '@/components/shelf/shelf'
Vue.use(Router)
Vue.use(Resource)
export default new Router({
  routes: [
    {
      path:"/",
      name:"Home",
      component:home
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path:"/client",
      name:"Client",
      component:client
    },
    {
      path:"/billboard",
      name:"Billboard",
      component:billboard
    },
    {
      path:"/classify",
      name:"Classify",
      component:classify
    },
    {
      path:"/institutional",
      name:"Institutional",
      component:institutional
    },
    {
      path:"/worker",
      name:"Worker",
      component:worker
    },
    {
      path:"/shelf",
      name:"Shelf",
      component:shelf
    }
  ]
})
