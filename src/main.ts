import { createApp } from "vue";
import App from "./App.vue";
import setupNut from "/@/plugins/nut";

import { setupRouter } from "/@/router";

function bootstrap() {
  const app = createApp(App);

  setupRouter(app);
  setupNut(app);

  app.mount("#app");
}

bootstrap();
