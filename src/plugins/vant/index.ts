import { Button, Toast } from "vant";
import { App, Component } from "vue";

const components = [Button];

const plugins = [Toast];

function useVant(app: App) {
  components.forEach((component: Component) => {
    if (component.name) {
      app.component(component.name, component);
    }
    plugins.forEach((plugin) => {
      app.use(plugin);
    });
  });
}

export function setupVant(app: App<Element>) {
  app.use(useVant);
}
