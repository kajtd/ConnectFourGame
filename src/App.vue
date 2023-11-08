<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from './store/game'
import MainMenu from './components/MainMenu.vue'
import GameRules from './components/GameRules.vue'

const gameStore = useGameStore()
const { areRulesVisible } = storeToRefs(gameStore)
</script>

<template>
  <GameRules v-if="areRulesVisible" />
  <MainMenu v-else />
</template>

<style scoped>

</style>
