<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { endGame, timerId, startTimer } = gameStore;
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
        class="bg-contain bg-center pt-8 h-[150px] bg-no-repeat text-black flex flex-col text-center items-center z-10 absolute left-0 right-0 mx-auto -bottom-28"
        :class="{'bg-turn-card-red': playerNumber === 1, 'bg-turn-card-yellow': playerNumber === 2}"
    >
        <h3 class="text-xs font-bold">PLAYER {{ playerNumber }}’S TURN</h3>
        <div class="text-l font-bold">{{ timeLeft }}s</div>
    </div>
</template>