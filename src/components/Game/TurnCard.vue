<script setup lang="ts">
import { watch, computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { timerId, startTimer, playAgain } = gameStore;
const { firstPlayerTurn, timeLeft, winner } = storeToRefs(gameStore)

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
      v-if="winner"
      class="shadow-[0_10px_0_black] mx-auto left-0 right-0 w-full bg-white rounded-[20px] border-[3px] border-black text-black text-center py-4 max-w-[285px] absolute -bottom-[170px] md:-bottom-36 lg:-bottom-24"
    >
        <h3 class="text-xs font-bold">PLAYER {{ winner === 'yellow' ? '2' : '1' }}</h3>
        <div class="text-l font-bold uppercase">Wins</div>
        <button 
          class="bg-royal-purple hover:bg-salmon-pink transition-colors rounded-[20px] text-white uppercase py-[10px] px-5"
          @click="playAgain"
        >
          Play Again
        </button>
    </div>
    <div
      v-else
      class="bg-contain bg-center pt-8 h-[150px] bg-no-repeat flex flex-col text-center items-center z-10 absolute left-0 right-0 mx-auto -bottom-[136px] lg:-bottom-[106px]"
      :class="{'bg-turn-card-red text-white': playerNumber === 1, 'bg-turn-card-yellow text-black': playerNumber === 2}"
    >
        <h3 class="text-xs font-bold">PLAYER {{ playerNumber }}’S TURN</h3>
        <div class="text-l font-bold">{{ timeLeft }}s</div>
    </div>
</template>