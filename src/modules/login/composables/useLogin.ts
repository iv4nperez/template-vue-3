import { storeToRefs } from "pinia";
import { useLoginStore } from "@/modules/login/store/state";
import { ref } from "vue";

export const useLogin = () => {
    const { isLogged } = storeToRefs(useLoginStore());

    const login = () => {
        isLogged.value = true;

        setTimeout(() => {
            isLogged.value = false;
        }, 5000);
    };

    const loginGoggle = () => {};

    return {
        login,
        loginGoggle,
    };
};
