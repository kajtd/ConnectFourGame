<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS, addNewCounter } = gameStore;
const { currentColumn, board, firstPlayerTurn } = storeToRefs(gameStore)

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
        class="bg-contain bg-center bg-no-repeat absolute -top-8 left-0 h-8 w-10"
        :style="`left: ${markerPosition}px;`"
        :class="{'bg-marker-red': playerNumber === 1, 'bg-marker-yellow': playerNumber === 2}"
    >
    </div>
    <div ref="boardRef" class="w-[632px] h-[584px] pb-10 px-1 grid grid-cols-1 grid-rows-6 bg-white border-[3px] border-black rounded-[40px]">
        <div v-for="i in NUMBER_OF_ROWS" :key="i" class="grid grid-cols-7 h-[97px]">
            <div 
                v-for="j in NUMBER_OF_COLUMNS" 
                :key="j" 
                class="grid place-items-center"
                @mousemove="handleCounterMousemove(j)"
                @click="addNewCounter"
            >
                <div 
                    class="w-16 h-16 bg-royal-purple border-black border-[3px] rounded-full cursor-pointer"
                    :class="{ '!bg-salmon-pink': board[j-1][i-1] === 'red', '!bg-mustard-yellow': board[j-1][i-1] === 'yellow' }"
                >
                </div>
            </div>
        </div>
    </div>
</template>