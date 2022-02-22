import type { AppRouteRecordRaw } from "./types";

const routes: AppRouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/appoint",
    name: "appoint",
    component: () => import("../views/appoint/Appoint.vue"),
    meta: {
      title: "课程预约",
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine/Mine.vue"),
    meta: {
      title: "我的",
    },
  },
];

export default routes;
