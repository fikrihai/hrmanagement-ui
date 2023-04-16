import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
    children:[
      {
        path: "",
        name: "dasboard",
        component: () => import("../views/Dashboard.vue"),
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
  },
  
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  } 
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;