import type { RouteRecordRaw } from 'vue-router'
import App from '@/views/App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: App,
  },
  // This catches every other path and redirects it to the home page
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export default routes
