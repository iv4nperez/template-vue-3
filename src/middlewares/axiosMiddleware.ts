// import { useLogin } from './../composables/useLogin';
import { getToken } from "@/helpers/localstorageHandler";
import axios from "axios";

// const { verifyExpiration } = useLogin()
axios.defaults.baseURL = `${
    import.meta.env.MODE === "production"
        ? import.meta.env.VITE_URL_API
        : import.meta.env.VITE_URL_API_LOCALHOST
}`;
axios.interceptors.request.use(
    function (config) {
        if (getToken()) {
            config.headers["Authorization"] = `Bearer ${getToken()}`;
        }

        // const isValidToken = verifyExpiration();

        // if (!isValidToken) {
        //     localStorage.removeItem('token');
        //     localStorage.removeItem('expirationDate');
        //     router.push('/login');
        // }
        // config.headers['x-token'] = `${localStorage.getItem('token')}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
