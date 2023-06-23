import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {

  const isLogged = ref<boolean>(false)

  return {
    isLogged
  }

})