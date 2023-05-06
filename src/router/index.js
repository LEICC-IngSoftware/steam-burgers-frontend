import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '@/components/PaginaInicio.vue'
import PaginaMenu from '@/components/PaginaMenu.vue'
import PaginaCarrito from '@/components/PaginaCarrito.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaInicio
  },
  {
    path: '/menu',
    name: 'menu',
    component: PaginaMenu
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: PaginaCarrito
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
