import { ref } from "vue";
import { defineStore } from "pinia";
import { UserResponse } from "@/interfaces/User";

export const useLoginStore = defineStore("login", () => {
    const isLogged = ref<boolean>(false);
    const user = ref<UserResponse>();

    return {
        isLogged,
        user,
    };
});
