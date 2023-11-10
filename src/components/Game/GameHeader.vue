<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

const gameStore = useGameStore()
const { handleRestart } = gameStore;
const { isGameOn } = storeToRefs(gameStore)
</script>

<template>
    <header class="flex items-center justify-between max-w-[632px] mx-auto w-full mt-12 px-5 md:px-0">
        <button 
            class="bg-royal-purple hover:bg-salmon-pink transition-colors rounded-[20px] text-white uppercase py-[10px] px-5"
            @click="isGameOn = false"
        >
            Menu
        </button>
        <img src="./../../assets/images/logo.svg" alt="">
    <button 
        class="bg-royal-purple hover:bg-salmon-pink transition-colors rounded-[20px] text-white uppercase py-[10px] px-5"
        @click="handleRestart"
    >
        Restart
    </button>
    </header>
</template>