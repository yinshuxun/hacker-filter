import Vue from 'vue'
import Router from 'vue-router'
// import routes from './routes'
import module from './routes/base'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: module
})
