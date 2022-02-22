import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
    meta: {
      name: "主页",
    },
  },
  {
    path: "/appoint",
    name: "appoint",
    component: () => import("../views/appoint/Appoint.vue"),
    meta: {
      name: "课程预约",
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine/Mine.vue"),
    meta: {
      name: "我的",
    },
  },
];
