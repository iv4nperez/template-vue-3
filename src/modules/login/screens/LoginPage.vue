<template>
    <LayoutLogin>
        <div class="flex flex-row h-screen">
            <div class="w-[60%]">
                <CarouselLogin />
            </div>
            <div class="w-[40%] p-24 flex flex-col justify-center items-center">
                <FormLogin />
            </div>
        </div>
    </LayoutLogin>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import LayoutLogin from "@/layouts/LayoutLogin.vue";
import { useLogin } from "../composables/useLogin";
import { useLoginStore } from "../store/state";
import FormLogin from "../components/FormLogin.vue";
import CarouselLogin from "../components/CarouselLogin.vue";

const { isLogged } = storeToRefs(useLoginStore());

const { login, loginGoggle } = useLogin();
</script>
