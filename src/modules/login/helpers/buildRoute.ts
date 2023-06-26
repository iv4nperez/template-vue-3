import { removeAccents } from "@/helpers/tools";
import { Screen } from "../interfaces/ScreenIDM";
import router from "@/router";
import dashboardLayout from "../../../layouts/LayoutDashboard.vue";
import { RouteRecordRaw } from "vue-router";
import { saveRoutes } from "@/helpers/localstorageHandler";

export const buildRoute = (screen: Screen[], returnData: boolean = false) => {
    const routesBase: any[] = [];

    screen.forEach((screen) => {
        if (screen.parentScreen === "") {
            routesBase.push({
                name: screen.screenName,
                icon: screen.icon,
                component: createImport(screen?.actionUrl),
                importPath: screen?.actionUrl,
                path: removeAccents(
                    "/" +
                        screen
                            .screenName!.split(" ")
                            .join("")
                            .toLocaleLowerCase()
                ),
                hasChildren: false,
                meta: {
                    requireAuth: true,
                },
            });
        } else {
            if (
                routesBase.filter(
                    (route: any) => route.name === screen.parentScreen
                ).length > 0
            )
                return;

            routesBase.push({
                name: screen!.parentScreen,
                icon: screen!.parentIcon,
                hasChildren: true,
                path: removeAccents(
                    "/" +
                        screen
                            .parentScreen!.split(" ")
                            .join("")
                            .toLocaleLowerCase()
                ),
                meta: {
                    requireAuth: true,
                },
            });
        }
    });

    routesBase.forEach((route: any) => {
        if (route.hasChildren) {
            route.children = screen
                .filter((screen) => screen.parentScreen === route.name)
                .map((screen) => {
                    return {
                        name: screen.screenName,
                        icon: screen.icon,
                        component: createImport(screen.actionUrl),
                        importPath: screen.actionUrl,
                        path: removeAccents(
                            "/" +
                                screen
                                    .screenName!.split(" ")
                                    .join("")
                                    .toLocaleLowerCase()
                        ),
                        tooltip: screen.tooltip,
                    };
                });
        }
    });

    const layoutRoute: RouteRecordRaw = {
        path: "/",
        name: "Home",
        component: dashboardLayout,
        meta: {
            requireAuth: false,
        },
        children: routesBase,
    };

    router.addRoute(layoutRoute);

    if (!returnData) {
        saveRoutes(screen);
    } else {
        return routesBase;
    }
};

const createImport = (importPath: string | null) => {
    if (!importPath) return null;
    const path = importPath.split("/");
    return () =>
        import(`../../../modules/${path[0]}/${path[1]}/${path[2]}.vue`);
};
