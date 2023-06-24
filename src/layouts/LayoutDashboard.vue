<template>
    <v-app>
        <v-navigation-drawer
            permanent
            location="left"
            :width="!drawer ? 75 : 280"
            color="#111827"
        >
            <HeaderDrawer v-model="drawer" />
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <div class="flex gap-4 bg-[#29303d] px-4 py-2 rounded-lg">
                        <v-icon color="#b8babf">{{ item.icon }}</v-icon>
                        <v-list-item-title class="text-[#b8babf]">
                            {{ item.title }}</v-list-item-title
                        >
                    </div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :elevation="1"> </v-app-bar>

        <v-main class="p-28 bg-[#f1f5f9]">
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderDrawer from "../components/DashboardLayout/HeaderDrawer.vue";
const drawer = ref(false);

const items = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Photos", icon: "mdi-image" },
    { title: "About", icon: "mdi-help-box" },
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Photos", icon: "mdi-image" },
    { title: "About", icon: "mdi-help-box" },
];
</script>
