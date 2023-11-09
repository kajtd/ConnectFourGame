<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { firstPlayerTurn } = storeToRefs(gameStore)

const playerNumber = computed(() => firstPlayerTurn.value ? 1 : 2)
</script>

<template>
    <div 
        class="bg-contain bg-center pt-8 h-[150px] bg-no-repeat text-black flex flex-col text-center items-center z-10 absolute left-0 right-0 mx-auto -bottom-28"
        :class="{'bg-turn-card-red': playerNumber === 1, 'bg-turn-card-yellow': playerNumber === 2}"
    >
        <h3 class="text-xs font-bold">PLAYER {{ playerNumber }}’S TURN</h3>
        <div class="text-l font-bold">14s</div>
    </div>
</template>