import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: () => import("/@/views/Home.vue"),
    meta: {
      name: "主页",
    },
  },
];
