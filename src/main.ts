import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueCryptojs from "vue-cryptojs";
import { registerPlugins } from "@/plugins";
import "./styles/main.css";

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);

app.use(pinia).use(router).use(VueCryptojs).mount("#app");

// const valuePath = 'Example'
// const otherPath = 'example'
// setTimeout(() => {
//     router.addRoute({
//         path: '/example',
//         name: 'Example',
//         component: defineAsyncComponent(() => import(`./modules/${otherPath}/${valuePath}.vue`)),
//     })

//     setTimeout(() => {
//       router.push({ name: 'Example' })
//   }, 3000)
// }, 5000);
