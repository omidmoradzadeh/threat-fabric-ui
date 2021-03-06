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
    path: "/deviceDetail/:id",
    name: "deviceDetail",
    component: () => import("../views/DeviceDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
