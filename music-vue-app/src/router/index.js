import Vue from 'vue'
import Router from 'vue-router'
import Rank from '/components/rank/rank'
import Recommend from '/components/rank/recommend'
import Search from '/components/rank/search'
import Singer from '/components/rank/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
