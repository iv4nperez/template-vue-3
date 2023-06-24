import { storeToRefs } from "pinia";
import { useLoginStore } from "@/modules/login/store/state";
import { ref } from "vue";
import axios from "axios";
import { API_FAKTOR } from "@/helpers/constants";
import router from "@/router";

export const useLogin = () => {
    const { isLogged } = storeToRefs(useLoginStore());

    const handleLoginAccess = async (user: UserCredentials) => {
        const { username, password, typeCredential } = user;

        const data = await axios({
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
            },
        });

        router.push({ name: "Home" });
    };

    const loginGoggle = () => {};

    return {
        handleLoginAccess,
        loginGoggle,
    };
};
