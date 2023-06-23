<template>
    <v-app>
        <v-app-bar :elevation="1">
            <v-app-bar-nav-icon
                app
                variant="text"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer app permanent v-model="drawer" location="left">
            <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);

const items = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Photos", icon: "mdi-image" },
    { title: "About", icon: "mdi-help-box" },
];
</script>
