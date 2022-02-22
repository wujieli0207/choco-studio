import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
