import Vue from 'vue'
import Router from 'vue-router'
import StreamEvents from '../components/StreamEvents'
import ErrorComponent from '../components/ErrorComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/:userId/alerts',
      name: 'alerts',
      component: StreamEvents
    },
    {
      path: '/',
      name: 'error',
      component: ErrorComponent
    },
    {
      path: '*',
      redirect: 'error'

    }
  ]
})
