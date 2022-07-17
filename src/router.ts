import { createRouter, createWebHistory } from 'vue-router'
import Login from '~/pages/Login.vue'
import NotFound from '~/pages/NotFound.vue'
import Feed from '~/pages/Feed.vue'
import { getSessionUser } from '~/api/user'

const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/login', component: Login },
  { path: '/feed', component: Feed },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

function isUserAuthenticated() {
  return getSessionUser()
    .then(() => true)
    .catch(() => false)
}

router.beforeEach(async (to, _from) => {
  const isAuthenticated = await isUserAuthenticated()

  if (to.path === '/')
    return isAuthenticated ? '/feed' : '/login'

  if (isAuthenticated && to.path === '/login')
    return '/feed'

  if (!isAuthenticated && to.path !== '/login')
    return '/login'
})

export default router
