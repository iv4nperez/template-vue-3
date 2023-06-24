<template>
    <div class="">
        <h2 class="text-xl font-medium mb-2">Login</h2>
        <p class="text-base mb-10">
            Use una cuenta local o de directorio activo para acceder.
        </p>

        <v-text-field v-model="user.username" label="Usuario"></v-text-field>
        <v-text-field
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
            <v-btn color="primary" @click="handleLogin" class="w-[70%]"
                >Entrar</v-btn
            >
            <v-btn color="white" class="w-[70%]">Entrar</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "../composables/useLogin";
import { encryptedText } from "@/helpers/cryptoJS";

const accessClassic = ref(false);
const { handleLoginAccess } = useLogin();
const user = ref<UserCredentials>({
    password: "",
    rememberMe: false,
    username: "",
    activeDirectory: false,
    typeCredential: 0,
});

const handleLogin = async () => {
    user.value.typeCredential = accessClassic.value ? 1 : 0;

    const userPrepare = {
        ...user.value,
        password: encryptedText(user.value.password),
    };

    await handleLoginAccess(userPrepare);
};

console.log(user);
</script>
