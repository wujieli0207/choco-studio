import { App, Component } from "vue";
import { components } from "./components";

function useNut(app: App) {
  components.forEach((component: Component) => {
    if (component.name) {
      app.component(component.name, component);
    }
  });
}

export default function setupNut(app: App<Element>) {
  app.use(useNut);
}
