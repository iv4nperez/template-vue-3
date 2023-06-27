import { APPLICATION_NAME } from "./constants";
import { ref } from "vue";
export const saveRoutes = (routes: any) => {
    localStorage.setItem(
        `routes-${APPLICATION_NAME.APP_NAME_SECURITY}`,
        JSON.stringify(routes)
    );
};

export const deleteRoute = () => {
    localStorage.removeItem(`routes-${APPLICATION_NAME.APP_NAME_SECURITY}`);
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

export const saveToken = (value = "") => {
    localStorage.setItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-token-information`,
        JSON.stringify(value)
    );
};
export const deleteToken = () => {
    localStorage.removeItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-token-information`
    );
};

export const getToken = () => {
    return localStorage.getItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-token-information`
    );
};

export const getTokenInformation = () => {
    const info = ref<any>("");
    info.value = localStorage.getItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-token-information`
    );
    return JSON.parse(info.value);
};

export const saveCurrentUser = (value: any) => {
    localStorage.setItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-user-information`,
        JSON.stringify(value)
    );
};

export const getCurrentUser = () => {
    return localStorage.getItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-user-information`
    );
};

export const deleteCurrentUser = () => {
    localStorage.removeItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-user-information`
    );
};

export const saveRememberMe = (value: any) => {
    localStorage.setItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-remember-me`,
        JSON.stringify(value)
    );
};

export const deleteRememberMe = () => {
    localStorage.removeItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-remember-me`
    );
};

export const getRememberMe = () => {
    return localStorage.getItem(
        `${APPLICATION_NAME.APP_NAME_SECURITY}-remember-me`
    );
};
