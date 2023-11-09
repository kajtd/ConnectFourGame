<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'

const gameStore = useGameStore()
const { areRulesVisible, isGameOn } = storeToRefs(gameStore)
</script>

<template>
    <div class="mx-auto p-5 w-full h-screen flex flex-col justify-center items-center gap-[30px] bg-electric-violet md:p-[70px_40px_60px] md:h-auto md:max-w-[480px] md:rounded-[40px] md:border-[3px] md:border-black md:shadow-[0_10px_0_#000]">
        <img src="./../assets/images/logo.svg" alt="" class="w-[52px] h-[52px] mb-12">
        <button 
            class="[text-shadow:_0px_4px_4px_rgb(0_0_0_/_25%)] w-full rounded-[20px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-[18.5px] h-[72px] flex items-center justify-between font-bold uppercase border-black border-[3px] shadow-primary bg-mustard-yellow text-black text-m"
            @click="isGameOn = true"
            >
            Play vs Player <img src="./../assets/images/player-vs-player.svg" alt="">
        </button>
        <button 
            class="text-left [text-shadow:_0px_4px_4px_rgb(0_0_0_/_25%)] w-full rounded-[20px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-[18.5px] h-[72px]  uppercase font-bold border-black border-[3px] shadow-primary bg-white text-black text-m"
            @click="areRulesVisible = true" 
        >
            Game Rules
        </button>
    </div>
</template>
