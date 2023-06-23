<template>
    <div class="relative">
        <v-carousel
            cycle
            :show-arrows="false"
            height="100vh"
            hide-delimiters
            interval="4000"
            class="transition-all duration-150 ease-in-out"
        >
            <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
                class="transition-all duration-150 ease-in-out delay-150"
                :src="image"
                cover
            ></v-carousel-item>
        </v-carousel>

        <div
            class="absolute top-0 bottom-0 left-48 w-80 bg-[#1A237E] bg-opacity-40"
        >
            <div class="flex justify-center mt-20 mb-5">
                <img class="w-52" :src="logoCotemar" alt="logo cotemar" />
            </div>

            <div class="px-5">
                <h2 class="text-white text-center mb-6 font-semibold">
                    Exportador de Documentos
                </h2>

                <p class="text-white text-center">
                    Más de {{ currentYear - 1979 }} años de trayectoria y
                    experiencia respaldan todas nuestras operaciones, el
                    liderazgo de la compañía y la visión de negocio que tenemos.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const images = [
    `${import.meta.env.VITE_URL_SERVER_LOGOS}/Carrusel1.jpg`,
    `${import.meta.env.VITE_URL_SERVER_LOGOS}/Carrusel2.jpg`,
    `${import.meta.env.VITE_URL_SERVER_LOGOS}/Carrusel3.jpg`,
];

const logoCotemar = `${
    import.meta.env.VITE_URL_SERVER_LOGOS
}/LogoCotemarCentradoBlanco.png`;
</script>
