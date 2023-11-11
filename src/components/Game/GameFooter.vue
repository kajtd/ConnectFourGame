<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { winner } = storeToRefs(gameStore)

</script>

<template>
    <div 
        class="w-full bg-royal-purple rounded-t-[40px] h-[234px] lg:h-[200px] mt-auto lg:absolute bottom-0 z-0"
        :class="{'!bg-salmon-pink': winner === 'red', '!bg-mustard-yellow text-black': winner === 'yellow'}"
    ></div>
</template>