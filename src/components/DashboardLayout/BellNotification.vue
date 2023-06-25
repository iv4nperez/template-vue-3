<template>
    <v-menu location="bottom center" offset="15">
        <template v-slot:activator="{ props }">
            <button v-bind="props">
                <v-icon>mdi-bell-outline</v-icon>
            </button>
        </template>

        <div
            class="bg-white p-6 rounded-lg border w-[500px] h-[500px] overflow-y-auto flex flex-col items-start justify-start"
        >
            <div class="h-full w-full">
                <div class="mb-4">
                    <h2 class="font-semibold text-lg">Notificaciones</h2>
                </div>

                <div
                    :class="[
                        {
                            'h-full w-full flex items-center justify-center':
                                isLoading,
                        },
                    ]"
                >
                    <v-progress-circular
                        v-if="isLoading"
                        :size="50"
                        width="2"
                        color="primary"
                        indeterminate
                    ></v-progress-circular>

                    <div
                        v-else
                        v-for="n in 10"
                        :key="n"
                        class="flex gap-2 hover:bg-slate-100 p-3 rounded-lg cursor-default hover:transition-all hover:duration-300 hover:ease-in-out"
                    >
                        <img
                            class="rounded-full w-10 h-10 mx-auto object-cover cursor-pointer"
                            src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
                            alt=""
                        />

                        <div class="flex flex-col gap-1">
                            <p class="text-xs font-semibold">
                                Armando Ivan Perez Chan
                            </p>
                            <p class="text-xs">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aliquam, repellat nobis quas
                                nostrum quia alias ratione tempore impedit
                                officia culpa quidem reiciendis labore voluptas
                                in architecto, ipsam, consequatur mollitia
                                illum.
                            </p>
                            <div class="flex justify-end">
                                <p class="text-[10px] font-semibold">
                                    Hace {{ n + 1 }} horas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(true);
setTimeout(() => {
    isLoading.value = false;
}, 5000);
</script>
