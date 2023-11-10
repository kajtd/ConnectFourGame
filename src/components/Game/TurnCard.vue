<script setup lang="ts">
import { watch, computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { timerId, startTimer } = gameStore;
const { firstPlayerTurn, timeLeft } = storeToRefs(gameStore)

const playerNumber = computed(() => firstPlayerTurn.value ? 1 : 2)

watch(() => firstPlayerTurn.value, () => {
  clearTimeout(timerId!);
  startTimer();
});

onUnmounted(() => {
  if (timerId) {
    clearTimeout(timerId);
  }
});

onMounted(startTimer);

</script>

<template>
    <div 
        class="bg-contain bg-center pt-8 h-[150px] bg-no-repeat flex flex-col text-center items-center z-10 absolute left-0 right-0 mx-auto -bottom-[136px] lg:-bottom-[106px]"
        :class="{'bg-turn-card-red text-white': playerNumber === 1, 'bg-turn-card-yellow text-black': playerNumber === 2}"
    >
        <h3 class="text-xs font-bold">PLAYER {{ playerNumber }}’S TURN</h3>
        <div class="text-l font-bold">{{ timeLeft }}s</div>
    </div>
</template>