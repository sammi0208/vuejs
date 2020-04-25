import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import Revenue from '@/views/Revenue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'revenue',
      component: DashboardLayout,
      children: [
        {
          path: '/revenue',
          name: 'revenue',
          component: () => import('./views/Revenue.vue')
        },
        {
          path: '/ranking',
          name: 'ranking',
          component: () => import('./views/Ranking.vue')
        },
        {
          path: '/test',
          name: 'test',
          component: () => import('./views/Test.vue')
        },
        {
          path: '/',
          redirect: 'day_chart',
          component: Revenue,
          children: [
            {
              path: '/day_chart',
              name: 'day_chart',
              component: () => import('./views/Charts/Day_chart.vue')
            },
            {
              path: '/week_chart',
              name: 'week_chart',
              component: () => import('./views/Charts/Week_chart.vue')
            }
          ]
        }
      ]
    }
  ]
})
