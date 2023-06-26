<template>
    <v-app>
        <NavigationDrawer />

        <v-app-bar elevation="1">
            <template v-slot:prepend>
                <h2>System name</h2>
            </template>
            <template v-slot:append>
                <div class="flex gap-4 px-2">
                    <Apps />

                    <BellNotification />

                    <ProfileUser />
                </div>
            </template>
        </v-app-bar>

        <v-main class="bg-[#f1f5f9]">
            <div class="p-10">
                <RouterView />
            </div>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import Apps from "@/components/DashboardLayout/Apps.vue";
import ProfileUser from "@/components/DashboardLayout/ProfileUser.vue";
import BellNotification from "@/components/DashboardLayout/BellNotification.vue";
import NavigationDrawer from "@/components/DashboardLayout/NavigationDrawer.vue";
</script>

<style>
.router-link-active {
    background-color: red;
}
</style>
