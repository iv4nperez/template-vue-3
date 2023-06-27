import { storeToRefs } from "pinia";
import { useLoginStore } from "@/modules/login/store/state";
// import { ref } from "vue";
import axios from "axios";
import { API_IDM, APPLICATION_NAME } from "@/helpers/constants";
import { buildRoute } from "../helpers/buildRoute";
import {
    deleteRememberMe,
    saveCurrentUser,
    saveToken,
} from "../../../helpers/localstorageHandler";
import { transformUser } from "../helpers/trasnformUser";
import { rememberMeSave } from "../helpers/rememberMe";

export const useLogin = () => {
    const { user: userStore, isLogged } = storeToRefs(useLoginStore());

    const handleLoginAccess = async (
        user: UserCredentials,
        passwordNoEncrypted: string
    ) => {
        try {
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                Authorization: "",
            };

            const { username, password, typeCredential } = user;

            const { data } = await axios({
                headers: headers,
                method: "POST",
                baseURL: API_IDM,
                url: "Authenticate",
                data: {
                    Username: username,
                    Password: password,
                    Grant_type: "password",
                    TypeCredential: typeCredential,
                    AppName: "IDM",
                    AppNameSecurity: APPLICATION_NAME.APP_NAME_SECURITY,
                    IsEncrypted: true,
                },
            });

            if (data) {
                headers.Authorization = `Bearer ` + data.access_token;
                const data_login = await axios({
                    headers: headers,
                    method: "POST",
                    baseURL: API_IDM,
                    url: "/Security/Login",
                    data: {
                        Username: username,
                        Password: password,
                        Grant_type: "password",
                        TypeCredential: typeCredential,
                        AppName: "IDM",
                        AppNameSecurity: APPLICATION_NAME.APP_NAME_SECURITY,
                        IsEncrypted: true,
                    },
                });
                if (data_login.data.IsAuthenticated) {
                    const resourceIMD = await getMenuIDM(
                        data_login.data,
                        headers
                    );
                    buildRoute(resourceIMD.data);
                    const resultToken = await ApiBetweenApi(user, headers);

                    if (resultToken) {
                        //Save the token us
                        saveToken(resultToken);
                    }
                    //create the user to state
                    const userData = transformUser(
                        data_login.data,
                        resultToken
                    );
                    userStore.value = userData;
                    saveCurrentUser(userStore.value);
                    if (user.rememberMe) {
                        rememberMeSave(
                            username,
                            passwordNoEncrypted,
                            typeCredential
                        );
                    } else {
                        deleteRememberMe();
                    }
                    isLogged.value = true;
                }
            }
        } catch (error) {
            isLogged.value = false;
        }
    };

    const getMenuIDM = async (payload: any, headers: any) => {
        const params = {
            UserId: payload.UserId,
            RoleId: 0,
            ApplicationId: payload.ApplicationId,
        };

        const data_menu = await axios({
            headers: headers,
            method: "GET",
            baseURL: API_IDM,
            url: "Screens/GetScreenRetrieveByUserRol/",
            params: params,
        });

        return data_menu;
    };

    const ApiBetweenApi = async (data: any, headers: any) => {
        const responseTokenApi = await axios({
            headers: headers,
            method: "POST",
            baseURL: API_IDM,
            url: "/Authenticate",
            data: {
                Username: data.username,
                Password: data.password,
                Grant_type: "password",
                TypeCredential: data.typeCredential,
                AppName: "IDM",
                AppNameSecurity: APPLICATION_NAME.APP_NAME_SECURITY,
                IsEncrypted: true,
            },
        });
        if (responseTokenApi != null) {
            if (
                responseTokenApi.data != null &&
                responseTokenApi.data.access_token
            ) {
                return responseTokenApi.data;
            }
        }
    };

    const loginGoggle = () => {};

    return {
        handleLoginAccess,
        loginGoggle,
    };
};
