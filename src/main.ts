import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { registerPlugins } from "@/plugins";
import { printWaterMark } from "./helpers/waterMark";
import { buildRoute } from "./modules/login/helpers/buildRoute";
import { getRoutes } from "./helpers/localstorageHandler";
import { logOff } from "./modules/login/helpers/verifyToken";
import "./middlewares/axiosMiddleware";
import router from "./router";
import VueCryptojs from "vue-cryptojs";
import "./styles/main.css";

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);
const routes = getRoutes();
logOff();
buildRoute(routes);
app.use(pinia).use(router).use(VueCryptojs).mount("#app");

printWaterMark();
