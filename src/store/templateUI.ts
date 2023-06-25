import { ref } from "vue";
import { defineStore } from "pinia";

export const useTemplateUI = defineStore("templateUI", () => {
    const drawer = ref<boolean>(true);

    return {
        drawer,
    };
});
