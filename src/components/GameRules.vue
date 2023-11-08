<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../store/game'

const gameStore = useGameStore();

const { areRulesVisible } = storeToRefs(gameStore);
</script>

<template>
    <div class="mx-auto bg-white relative text-black max-w-[480px] p-[30px_20px_60px] rounded-[40px] m-5 md:mx-auto md:border-[3px] md:border-black md:shadow-[0_10px_0_#000]">
        <h2 class="text-center uppercase font-bold text-l">Rules</h2>
        <h3 class="mt-7 mb-4 uppercase text-electric-violet font-bold">Objective</h3>
        <p class="opacity-[0.66] mb-8">Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
        <h3 class="mb-4 uppercase text-electric-violet font-bold">How to play</h3>
        <ol class="opacity-[0.66] list-decimal list-inside marker:text-black marker:opacity-100">
            <li>Red goes first in the first game.</li>
            <li>Players must alternate turns, and only one disc can be dropped in each turn. </li>
            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
            <li>The starter of the previous game goes second on the next game.</li>
        </ol>
        <button 
            class="w-16 h-16 absolute -bottom-8 left-0 right-0 mx-auto"
            @click="areRulesVisible = false"
        >
            <img src="./../assets/images/icon-check.svg" alt="">
        </button>
    </div>
</template>