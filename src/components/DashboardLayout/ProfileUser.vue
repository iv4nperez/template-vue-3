<template>
    <v-menu location="bottom center" open-on-hover offset="15" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <img v-bind="props" class="rounded-full w-10 h-10 mx-auto object-cover cursor-pointer" :src="user?.user.img"
                alt="" />
        </template>

        <div class="bg-white px-6 p-4 rounded-3xl border w-[300px] flex flex-col items-start justify-start">
            <div class="flex items-center justify-start gap-3 mb-2">
                <img class="rounded-full w-12 h-12 mx-auto object-cover cursor-pointer" :src="user?.user.img" alt="" />

                <div class="text-xs">
                    <p>{{ user?.user.fullName }}</p>
                    <p>{{ user?.user.email }}</p>
                </div>
            </div>

            <div class="text-xs">
                <p>Mis roles:</p>
                <p class="font-semibold">
                    {{ user?.roles }}
                </p>
            </div>

            <div class="border-t w-full my-4"></div>

            <div class="w-full">
                <button @click="() => logout()"
                    class="text-xs flex gap-4 items-center cursor-pointer hover:bg-slate-100 w-full rounded-lg py-2 px-4">
                    <v-icon size="24">mdi-logout</v-icon>
                    <p class="font-semibold">Cerrar sesión</p>
                </button>
            </div>
        </div>
    </v-menu>
</template>
<script lang="ts" setup>
import router from "@/router";
import { useLoginStore } from "../../modules/login/store/state";
import { storeToRefs } from "pinia";
import { deleteRoute, deleteToken, deleteCurrentUser } from "@/helpers/localstorageHandler";
const { user } = storeToRefs(useLoginStore());

const logout = async () => {
    deleteToken();
    deleteRoute();
    deleteCurrentUser();
    router.push("/login");
}

</script>
