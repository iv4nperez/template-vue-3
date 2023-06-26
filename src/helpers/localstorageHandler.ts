import { APPLICATION_NAME } from "./constants";

export const saveRoutes = (routes: any) => {
    localStorage.setItem(
        `routes-${APPLICATION_NAME.APP_NAME_SECURITY}`,
        JSON.stringify(routes)
    );
};

export const getRoutes = () => {
    const routes = localStorage.getItem(
        `routes-${APPLICATION_NAME.APP_NAME_SECURITY}`
    );

    if (routes) {
        const result = JSON.parse(routes);
        return result;
    }

    return [];
};
