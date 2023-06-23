<template>
    <div class="">
        <h2 class="text-xl font-medium mb-2">Login</h2>
        <p class="text-base mb-10">
            Use una cuenta local o de directorio activo para acceder.
        </p>

        <v-text-field label="Usuario"></v-text-field>
        <v-text-field label="Contraseña"></v-text-field>

        <div class="flex justify-between">
            <div>
                <v-switch label="Acceso clasico"></v-switch>
            </div>
            <div>
                <v-checkbox label="Recordarme"></v-checkbox>
            </div>
        </div>

        <div class="flex flex-col items-end gap-4">
            <v-btn color="primary" class="w-[70%]">Entrar</v-btn>
            <v-btn color="white" class="w-[70%]">Entrar</v-btn>
        </div>
    </div>
</template>
