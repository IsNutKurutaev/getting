import { createRouter, createWebHistory } from 'vue-router'
import AdminView from "@/views/AdminView";
import RegisterView from "@/views/RegisterView";
import LoginView from "@/views/LoginView";

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
