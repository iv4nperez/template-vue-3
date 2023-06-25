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
                    :class="[{ 'w-10 h-10': !drawer }, { 'w-24 h-24': drawer }]"
                    class="rounded-full mx-auto mb-4 object-cover"
                    src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
                    alt=""
                />

                <h2 class="text-white text-sm">
                    {{ drawer ? "Armando Ivan Perez" : "AP" }}
                </h2>
                <p v-if="drawer" class="text-[13px] text-[#94a3b8]">
                    ivan.perez.chan@hotmail.com
                </p>
            </div>

            <h2>MODULES</h2>

            <v-list class="mt-10">
                <v-list-item v-for="(item, i) in routes" :key="i">
                    <v-menu location="end" open-on-hover offset="18" rounded>
                        <template v-slot:activator="{ props, isActive }">
                            <router-link
                                v-if="!item.hasChildren"
                                :to="item.path"
                                v-slot="{ isExactActive }"
                            >
                                <div
                                    v-bind="props"
                                    :class="[
                                        { 'justify-center': !drawer },
                                        { 'justify-start': drawer },
                                        { 'bg-[#29303d]': isExactActive },
                                    ]"
                                    class="flex gap-4 px-4 py-2 rounded-lg hover:bg-[#29303d] hover:bg-opacity-80 group"
                                >
                                    <v-icon
                                        :class="[
                                            { 'text-white': isExactActive },
                                        ]"
                                        class="text-[#b8babf]"
                                        >{{ item.icon }}</v-icon
                                    >
                                    <v-list-item-title
                                        v-if="drawer"
                                        :class="[
                                            { 'text-white': isExactActive },
                                        ]"
                                        class="text-[#b8babf]"
                                    >
                                        {{ item.name }}</v-list-item-title
                                    >
                                </div>
                            </router-link>
                            <div
                                v-else
                                v-bind="props"
                                :class="[
                                    { 'justify-center': !drawer },
                                    { 'justify-start': drawer },
                                    {
                                        'bg-[#29303d] bg-opacity-80':
                                            isActive ||
                                            thisRouteIsSelected(
                                                item,
                                                $route.path
                                            ),
                                    },
                                ]"
                                class="flex cursor-default gap-4 px-4 py-2 rounded-lg hover:bg-[#29303d] hover:bg-opacity-80 group"
                            >
                                <div
                                    :class="[{ 'w-full': drawer }]"
                                    class="flex gap-4"
                                >
                                    <v-icon
                                        :class="[
                                            {
                                                'text-white':
                                                    thisRouteIsSelected(
                                                        item,
                                                        $route.path
                                                    ),
                                            },
                                        ]"
                                        class="text-[#b8babf]"
                                        >{{ item.icon }}</v-icon
                                    >
                                    <v-list-item-title
                                        v-if="drawer"
                                        :class="[
                                            {
                                                'text-white':
                                                    thisRouteIsSelected(
                                                        item,
                                                        $route.path
                                                    ),
                                            },
                                        ]"
                                        class="text-[#b8babf]"
                                    >
                                        {{ item.name }}
                                    </v-list-item-title>
                                </div>

                                <v-icon v-if="drawer" color="#b8babf"
                                    >mdi-menu</v-icon
                                >
                            </div>
                        </template>

                        <v-card
                            elevation="0"
                            v-if="item.hasChildren"
                            min-width="250"
                            class="border"
                        >
                            <v-list>
                                <v-list-item
                                    v-for="(childRoute, i) in item.children"
                                    :key="i"
                                    @click="() => {}"
                                    class="flex gap-4 px-4 py-2 rounded-lg"
                                    :to="childRoute.path"
                                    :prepend-icon="childRoute.icon"
                                    :title="childRoute.name"
                                >
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-menu>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar elevation="1">
            <template v-slot:prepend>
                <h2>Modulo X</h2>
            </template>
            <template v-slot:append>
                <div class="flex items-center">
                    <!-- <div class="flex flex-col items-end">
                        <h3 class="text-xs">Armando Ivan Perez Chan</h3>
                        <p class="text-xs font-semibold">
                            Admin, Supervisor,Admin, Supervisor
                        </p>
                    </div> -->
                    <v-menu
                        location="bottom center"
                        open-on-hover
                        offset="15"
                        v-model="menu"
                        :close-on-content-click="false"
                    >
                        <template v-slot:activator="{ props }">
                            <!-- <button v-bind="props">
                                
                            </button> -->
                            <img
                                v-bind="props"
                                class="rounded-full w-10 h-10 mx-auto object-cover cursor-pointer"
                                src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
                                alt=""
                            />
                        </template>

                        <div
                            class="bg-white px-6 p-4 rounded-3xl border w-[300px] flex flex-col items-start justify-start"
                        >
                            <div
                                class="flex items-center justify-start gap-3 mb-2"
                            >
                                <img
                                    class="rounded-full w-12 h-12 mx-auto object-cover cursor-pointer"
                                    src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
                                    alt=""
                                />

                                <div class="text-xs">
                                    <p>Armando Ivan Perez Chan</p>
                                    <p>ivan.perez.chan@hotmail.com</p>
                                </div>
                            </div>

                            <div class="text-xs">
                                <p>Mis roles:</p>
                                <p class="font-semibold">
                                    Admin, Supervisor, Admin, Supervisor,
                                    Supervisor, Admin, Supervisor, Admin,
                                </p>
                            </div>

                            <div class="border-t w-full my-4"></div>

                            <div class="w-full">
                                <button
                                    @click="menu = false"
                                    class="text-xs flex gap-4 items-center cursor-pointer hover:bg-slate-100 w-full rounded-lg py-2 px-4"
                                >
                                    <v-icon size="24">mdi-logout</v-icon>
                                    <p class="font-semibold">Cerrar sesión</p>
                                </button>
                            </div>
                        </div>
                    </v-menu>
                </div>
            </template>
        </v-app-bar>

        <v-main class="bg-[#f1f5f9]">
            <div class="p-10">
                <slot />
            </div>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
export interface Route {
    name: string;
    icon: string;
    importPath?: string;
    path: string;
    hasChildren: boolean;
    meta: Meta;
    children?: Child[];
}

export interface Child {
    name: string;
    icon: string;
    importPath: string;
    path: string;
    tooltip: string;
}

export interface Meta {
    requireAuth: boolean;
}

import { ref } from "vue";
import HeaderDrawer from "../components/DashboardLayout/HeaderDrawer.vue";
import { useTemplateUI } from "../store/templateUI";
import { storeToRefs } from "pinia";

const menu = ref(false);
const { drawer } = storeToRefs(useTemplateUI());

const routes: Route[] = JSON.parse(localStorage.getItem("routes") || "[]");

const thisRouteIsSelected = (item: Route, path: string) => {
    return item?.children?.some((child) => child.path === path);
};
</script>

<style>
.router-link-active {
    background-color: red;
}
</style>
