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

// const routesIdm: Screen[] = [
//     {
//         screenId: 3633,
//         screenName: "Home",
//         icon: "mdi-view-dashboard-outline",
//         order: 1,
//         actionUrl: "home/screens/HomeScreen",
//         parentScreen: "",
//         parentIcon: "",
//         parentOrder: "0",
//         tooltip: "Home",
//         parentdId: 0,
//     },
//     {
//         screenId: 3633,
//         screenName: "Mantenimiento",
//         icon: "mdi-view-dashboard-outline",
//         order: 1,
//         actionUrl: "home/screens/HomeScreen",
//         parentScreen: "",
//         parentIcon: "",
//         parentOrder: "0",
//         tooltip: "Home",
//         parentdId: 0,
//     },
//     {
//         screenId: 3634,
//         screenName: "Exportador de Documentos",
//         icon: "mdi-application",
//         order: 1,
//         actionUrl: "carga/screens/DescargaScreen",
//         parentScreen: "Exportador",
//         parentIcon: "mdi-checkbox-multiple-blank",
//         parentOrder: "2",
//         tooltip: "Exportador de Documentos",
//         parentdId: 0,
//     },
//     {
//         screenId: 3634,
//         screenName: "otros de Documentos",
//         icon: "mdi-application",
//         order: 1,
//         actionUrl: "carga/screens/DescargaScreen",
//         parentScreen: "Exportador",
//         parentIcon: "mdi-checkbox-multiple-blank",
//         parentOrder: "2",
//         tooltip: "Exportador de Documentos",
//         parentdId: 0,
//     },
// ];

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);
// buildRoute(routesIdm);
app.use(pinia).use(router).use(VueCryptojs).mount("#app");

printWaterMark();

console.log("here");
