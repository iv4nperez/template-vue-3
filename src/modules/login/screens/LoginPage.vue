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
import LayoutLogin from "@/layouts/LayoutLogin.vue";
import FormLogin from "../components/FormLogin.vue";
import CarouselLogin from "../components/CarouselLogin.vue";
</script>
