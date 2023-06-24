<template>
    <v-app>
        <v-navigation-drawer
            permanent
            location="left"
            :width="!drawer ? 75 : 280"
            color="#111827"
        >
            <HeaderDrawer v-model="drawer" />

            <div class="mt-28 flex flex-col items-center">
                <img
                    class="rounded-full w-24 h-24 mx-auto mb-4"
                    src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
                    alt=""
                />

                <h2 class="text-white">Armando Ivan Perez Chan</h2>
                <p class="text-white">ivan.perez.chan@hotmail.com</p>
            </div>

            <v-list class="mt-10">
                <v-list-item
                    @click="() => {}"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-menu location="end" open-on-hover offset="18" rounded>
                        <template v-slot:activator="{ props }">
                            <div
                                v-bind="props"
                                :class="[
                                    { 'justify-center': !drawer },
                                    { 'justify-start': drawer },
                                ]"
                                class="flex gap-4 px-4 py-2 rounded-lg"
                            >
                                <v-icon color="#b8babf">{{ item.icon }}</v-icon>
                                <v-list-item-title
                                    v-if="drawer"
                                    class="text-[#b8babf]"
                                >
                                    {{ item.title }}</v-list-item-title
                                >
                            </div>
                        </template>

                        <v-card
                            elevation="0"
                            v-if="!drawer"
                            min-width="250"
                            class="border"
                        >
                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in items.slice(0, 5)"
                                    :key="i"
                                    @click="() => {}"
                                    class="flex gap-4 px-4 py-2 rounded-lg"
                                >
                                    <v-list-item-icon>
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>
                                        {{ item.title }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-menu>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar elevation="1"> </v-app-bar>

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
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Photos", icon: "mdi-image" },
    { title: "About", icon: "mdi-help-box" },
];
</script>
