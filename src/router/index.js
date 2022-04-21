import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/device",
    name: "device",
    component: () => import("../views/DeviceView.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/MenuView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
