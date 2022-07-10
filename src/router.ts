import { createRouter, createWebHistory } from 'vue-router'
import Login from '~/pages/Login.vue'
import NotFound from '~/pages/NotFound.vue'

const routes = [
  { path: '*', component: NotFound },
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
