<template>
    <LayoutLogin>
        <v-response>
            <v-row>
                <v-col md="7" lg="6">
                    <img
                        src="https://cdnlogos.blob.core.windows.net/logos/General/Carrusel1.jpg"
                        alt=""
                    />
                </v-col>
                <v-col md="7" lg="6"> jndjn </v-col>
            </v-row>
        </v-response>
    </LayoutLogin>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import LayoutLogin from "@/layouts/LayoutLogin.vue";
import { useLogin } from "../composables/useLogin";
import { useLoginStore } from "../store/state";

const { isLogged } = storeToRefs(useLoginStore());
const { login } = useLogin();
</script>

<style scoped></style>
