// import { storeToRefs } from "pinia";
// import { useLoginStore } from "@/modules/login/store/state";
// import { ref } from "vue";
import axios from "axios";
import { API_FAKTOR } from "@/helpers/constants";
import router from "@/router";
import { buildRoute } from "../helpers/buildRoute";

export const useLogin = () => {
    // const { user } = storeToRefs(useLoginStore());

    const handleLoginAccess = async (user: UserCredentials) => {
        const { username, password, typeCredential } = user;

        const { data } = await axios({
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
            method: "POST",
            baseURL: API_FAKTOR,
            url: "Account/Login",
            data: {
                TypeCredential: typeCredential,
                password: password,
                username: username,
                email: "",
                token: "",
            },
        });

        buildRoute(data.screen);

        router.push("/home");

        // const userA = {
        //     user: {
        //         email: "lfchanb@cotemar.com.mx",
        //         firstName: "",
        //         lastName: "",
        //         lastNameSecond: "",
        //         fullName: "",
        //         userName: "lfchanb",
        //         idPersona: "100",
        //         hasImage: false,
        //     },
        //     roles: ["Admin", "User", "Guest"],
        //     authentication: {
        //         token: "token",
        //         refreshToken: "refreshToken",
        //         tokenExpiration: "tokeneExpiration",
        //     },
        // };
    };

    const loginGoggle = () => {};

    return {
        handleLoginAccess,
        loginGoggle,
    };
};
