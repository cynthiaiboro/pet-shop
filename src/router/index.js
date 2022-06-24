import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      layout: "default-layout",
      requiresAuth: false,
    },
  },
  {
    path: "/customers",
    name: "Customers",
    component: () => import("../views/Customers.vue"),
    meta: { layout: "admin-layout", requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
