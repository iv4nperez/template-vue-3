import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueCryptojs from "vue-cryptojs";
import { registerPlugins } from "@/plugins";
import "./styles/main.css";
import { printWaterMark } from "./helpers/waterMark";
import { buildRoute } from "./modules/login/helpers/buildRoute";
import { Screen } from "./modules/login/interfaces/ScreenIDM";
import { getRoutes } from "./helpers/localstorageHandler";

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);
const routes = getRoutes();
buildRoute(routes);
app.use(pinia).use(router).use(VueCryptojs).mount("#app");

printWaterMark();
// getCurrentUser();

