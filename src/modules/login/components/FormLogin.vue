<template>
    <CError
        :show="showAlert"
        :titulo="message"
        :color="message === 'REDIRECCIONANDO...' ? 'green' : 'red'"
        :close="() => (showAlert = false)"
    />

    <div class="">
        <h2 class="text-xl font-medium mb-2">Login</h2>
        <p class="text-base mb-10">
            Use una cuenta local o de directorio activo para acceder.
        </p>

        <v-text-field v-model="user.username" label="Usuario"></v-text-field>
        <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            v-model="user!.password"
            label="Contraseña"
        ></v-text-field>

        <div class="flex justify-between">
            <div>
                <v-switch
                    v-model="accessClassic"
                    label="Acceso clasico"
                ></v-switch>
            </div>
            <div>
                <v-checkbox
                    v-model="user.rememberMe"
                    label="Recordarme"
                ></v-checkbox>
            </div>
        </div>

        <div class="flex flex-col items-end gap-4">
            <v-btn
                :loading="isLoading"
                :disabled="isLoading"
                color="primary"
                @click="handleLogin"
                class="w-full xl:w-[70%]"
                >Entrar</v-btn
            >
            <v-btn color="white" class="w-full xl:w-[70%]">Entrar</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "../composables/useLogin";
import { encryptedText } from "@/helpers/cryptoJS";
import { rememberMeGet } from "../helpers/rememberMe";
import { useLoginStore } from "../store/state";
import { storeToRefs } from "pinia";
import { buildRoute } from "../helpers/buildRoute";
import { getRoutes } from "@/helpers/localstorageHandler";
import { UserCredentials } from "@/interfaces/User";
import router from "@/router";

import CError from "../../../components/core/CError.vue";

const { handleLoginAccess } = useLogin();
const { isLogged } = storeToRefs(useLoginStore());

const accessClassic = ref(false);
const isLoading = ref<boolean>(false);
const message = ref<string>("");
const showAlert = ref<boolean>(false);
const showPassword = ref(false);

const user = ref<UserCredentials>({
    password: "",
    rememberMe: false,
    username: "",
    activeDirectory: false,
    typeCredential: 0,
    email: "",
    token: "",
});

const handleLogin = async () => {
    isLoading.value = true;
    user.value.typeCredential = accessClassic.value ? 1 : 0;

    const userPrepare = {
        ...user.value,
        password: encryptedText(user.value.password),
    };

    await handleLoginAccess(userPrepare, user.value.password);
    if (isLogged.value) {
        message.value = "REDIRECCIONANDO...";
        showAlert.value = true;
        const routes = getRoutes();
        const menu = buildRoute(routes, true);
        if (menu && menu[0].hasChildren) {
            setTimeout(() => {
                router.push(menu[0].children[0].path);
                isLoading.value = false;
            }, 2000);
        }
    } else {
        message.value =
            "DATOS INCORRECTOS. POR FAVOR VERIFÍQUELOS O CONTACTE AL ADMINISTRADOR";
        showAlert.value = true;
        isLoading.value = false;
    }
};

const data: {
    cus: string;
    cup: string;
    ctc: number;
} = rememberMeGet();

if (data) {
    user.value.username = data.cus;
    user.value.password = data.cup;
    user.value.rememberMe = true;
    accessClassic.value = data.ctc === 1 ? true : false;
}
</script>
