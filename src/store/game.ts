import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
    const areRulesVisible = ref(false)
  
    return { areRulesVisible }
  })