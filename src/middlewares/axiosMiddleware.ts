// import { useLogin } from './../composables/useLogin';
import { getToken } from "@/helpers/localstorageHandler";
import {
    verifyExpirationTokenAndRefresh,
    logOff,
} from "../modules/login/helpers/verifyToken";
import axios from "axios";

// const { verifyExpiration } = useLogin()
axios.defaults.baseURL = `${
    import.meta.env.MODE === "production"
        ? import.meta.env.VITE_URL_API
        : import.meta.env.VITE_URL_API_LOCALHOST
}`;
axios.interceptors.request.use(
    async (config) => {
        const token = getToken();
        if (token) {
            logOff();
            const tokenVerifyed = await verifyExpirationTokenAndRefresh();
            config.headers["Authorization"] = `Bearer ${tokenVerifyed}`;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);
