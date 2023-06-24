<template>
    <div
        :class="[
            {
                'flex-col-reverse justify-center items-center': !modelValue,
                'flex-row justify-between': modelValue,
            },
        ]"
        class="px-4 py-2 flex fixed z-10 bg-[#111827] w-full"
    >
        <img
            v-if="modelValue"
            class="w-36 object-contain"
            :src="`${URL_SERVER_LOGOS}/LogoCotemarHorizontalBlanco.png`"
            alt=""
        />

        <img
            v-else
            class="w-8 object-contain mt-2 mb-2"
            :src="`${URL_SERVER_LOGOS}/LogoCotemarMonogramaBlanco.png`"
            alt=""
        />

        <v-app-bar-nav-icon
            app
            color="white"
            variant="text"
            @click.stop="modelValue = !modelValue"
        ></v-app-bar-nav-icon>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { URL_SERVER_LOGOS } from "../../helpers/constants";

const props = withDefaults(defineProps<{ modelValue: boolean }>(), {
    modelValue: false,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = computed({
    get() {
        return props.modelValue;
    },
    set(text: string) {
        emit("update:modelValue", text);
    },
});
</script>
