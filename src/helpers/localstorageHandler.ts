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

export const saveToken = ( value = '' ) => {
    localStorage.setItem( `${APPLICATION_NAME.APP_NAME_SECURITY}-token-information`, JSON.stringify(value) );
}

export const saveCurrentUser = (value: any) => {
    localStorage.setItem(`${APPLICATION_NAME.APP_NAME_SECURITY}-user-information`, JSON.stringify(value));
}

export const getCurrentUser = () => {

    return localStorage.getItem(`${APPLICATION_NAME.APP_NAME_SECURITY}-user-information`)
    
}