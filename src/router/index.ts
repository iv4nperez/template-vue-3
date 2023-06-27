import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

//screen
import LoginScreen from "../modules/login/screens/LoginPage.vue";
import { getTokenInformation } from "@/helpers/localstorageHandler";

const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "Login",
        component: LoginScreen,
        meta: {
            requireAuth: false,
        },
    },
    {
      path: "/",
      name: "Fake",
      component: () => import('../layouts/LayoutDashboard.vue'),
      meta: { requireAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {

    const rutaProtegida = to.matched.some((record) => record.meta.requireAuth);
    const user = getTokenInformation();
    if (rutaProtegida && user === null || (user === null && to.name != "Login")) {
        next({
          name: "Login"
        });
      } else if (!rutaProtegida && user !== null && to.name === "Login") {
        next({
          name: "Home"
        });
      } else {
        next();
      }
    });
  

export default router;
