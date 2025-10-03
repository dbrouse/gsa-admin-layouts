import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// Option A: Global registration (all components available as UiButton, UiModal, etc.)
import GsaUi from "@gsa/vue-ui";

const app = createApp(App);
app.use(GsaUi);
app.mount("#app");
