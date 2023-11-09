<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from './store/game'
import MainMenu from './components/MainMenu.vue'
import GameBoard from './components/Game/GameBoard.vue'
import GameRules from './components/GameRules.vue'

const gameStore = useGameStore()
const { areRulesVisible, isGameOn } = storeToRefs(gameStore)
</script>

<template>
  <GameRules v-if="areRulesVisible" />
  <GameBoard v-else-if="isGameOn" />
  <MainMenu v-else />
</template>

<style scoped>

</style>
