<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS, addNewMarker } = gameStore;
const { currentColumn, board } = storeToRefs(gameStore)

const handleMarkerMousemove = (col: number) => {
    currentColumn.value = col
}

</script>

<template>
    <div class="w-[632px] h-[584px] p-5 pb-[60px] flex flex-col gap-6 bg-white border-[3px] border-black rounded-[40px]">
        <div v-for="i in NUMBER_OF_ROWS" :key="i" class="flex gap-6 items-center">
            <div 
                v-for="j in NUMBER_OF_COLUMNS" 
                :key="j" 
                class="w-16 h-16 bg-royal-purple border-black border-[3px] rounded-full cursor-pointer"
                :class="{ '!bg-salmon-pink': board[j-1][i-1] === 'red', '!bg-mustard-yellow': board[j-1][i-1] === 'yellow' }"
                @mousemove="handleMarkerMousemove(j)"
                @click="addNewMarker"
            >
            </div>
        </div>
    </div>
</template>