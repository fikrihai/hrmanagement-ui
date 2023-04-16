import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Index.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
     {
      path: "/create",
      name: "create",
      component: () => import("../views/CreateView.vue"),
    },
     {
      path: "/edit",
      name: "edit",
      component: () => import("../views/EditView.vue"),
    },
  ]
})

export default router
