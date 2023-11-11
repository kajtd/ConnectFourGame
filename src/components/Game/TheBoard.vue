<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS, addNewCounter } = gameStore;
const { currentColumn, board, firstPlayerTurn, winner } = storeToRefs(gameStore)

const markerPosition = ref(0)
const boardRef = ref<HTMLDivElement | null>(null)

const playerNumber = computed(() => firstPlayerTurn.value ? 1 : 2)

const handleCounterMousemove = (col: number) => {
    currentColumn.value = col
    const boardOffsetLeft = boardRef.value?.offsetLeft || 0;
    markerPosition.value = (boardOffsetLeft + 32) + ((currentColumn.value-1) * 88);
}

onMounted(() => {
  // Since the boardRef may not be available immediately, we ensure the component is mounted first.
  // This way we can correctly calculate positions with the actual DOM element's offset.
  handleCounterMousemove(currentColumn.value || 1)
})

</script>

<template>
    <div 
        class="bg-contain bg-center bg-no-repeat absolute -top-8 left-0 h-8 w-10 z-50 hidden lg:block"
        :style="`left: ${markerPosition}px;`"
        :class="{'bg-marker-red': playerNumber === 1, 'bg-marker-yellow': playerNumber === 2}"
    >
    </div>
    <div ref="boardRef" class="w-[335px] h-[310px] md:w-[632px] md:h-[584px] md:pt-5 lg:pt-0 pb-5 lg:pb-10 px-[2px] lg:px-1 grid grid-cols-1 grid-rows-6 bg-white border-[3px] border-black rounded-[20px] md:rounded-[40px]">
        <div v-for="i in NUMBER_OF_ROWS" :key="i" class="grid grid-cols-7 h-[48.5px] lg:h-[97px]">
            <div 
                v-for="j in NUMBER_OF_COLUMNS" 
                :key="j" 
                class="grid place-items-center"
                :class="{'pointer-events-none': winner}"
                @mousemove="handleCounterMousemove(j)"
                @click="addNewCounter"
            >
            <div 
                class="relative w-[34px] h-[34px] md:w-16 md:h-16 bg-royal-purple border-black border-[3px] rounded-full cursor-pointer 
                shadow-counter border-solid text-custom-black"
                :class="{ '!bg-salmon-pink shadow-counter-filled-small md:shadow-counter-filled-large': board[j-1][i-1] === 'red', '!bg-mustard-yellow shadow-counter-filled-small md:shadow-counter-filled-large': board[j-1][i-1] === 'yellow' }"
            >
            </div>
            </div>
        </div>
    </div>
</template>