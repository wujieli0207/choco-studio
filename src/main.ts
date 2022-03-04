import "/@/styles/index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import setupVant from "/@/plugins/vant";
import { setupRouter } from "/@/router";

function bootstrap() {
  const app = createApp(App);

  setupRouter(app);
  setupVant(app);

  app.mount("#app");
}

bootstrap();
