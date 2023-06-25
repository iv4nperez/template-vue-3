import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

//screen
import LoginScreen from "../modules/login/screens/LoginPage.vue";
// import HomeScreen from "../modules/home/screens/HomeScreen.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "Login",
        component: LoginScreen,
        meta: {
            requireAuth: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

// router.beforeEach((to, from, next)=>{
//     const routeProtected = to.matched.some((record) => record.meta.requireAuth);
//     const isLogged: boolean = localStorage.getItem('token') ? true : false;

//     if (routeProtected && !isLogged ){
//         next({ name: 'Login' })
//     } else if (to.name === 'Login' && isLogged) {
//         next({ name: 'Home' })
//     }else{
//         next()
//     }
//   })

export default router;
