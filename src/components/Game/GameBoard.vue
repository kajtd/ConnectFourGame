<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../../store/game'

import GameHeader from './GameHeader.vue';
import GameFooter from './GameFooter.vue';
import PlayerCard from './PlayerCard.vue';
import TurnCard from './TurnCard.vue';
import TheBoard from './TheBoard.vue';

const gameStore = useGameStore()
const { playerOneScore, playerTwoScore } = storeToRefs(gameStore)

</script>

<template>
    <div class="w-full mx-auto bg-electric-violet">
        <div class="flex flex-col mx-auto h-full min-h-screen">
            <GameHeader />
            <div class="mx-auto max-w-[335px] md:max-w-[632px] lg:max-w-5xl mt-12 lg:mt-5 grid grid-rows-[auto_auto] grid-cols-2 gap-x-10 lg:flex lg:justify-between lg:items-center">
                <PlayerCard 
                    :player-number="1" 
                    :player-score="playerOneScore"
                    class="col-start-1 row-start-1"
                />
                <div class="z-[2] relative col-start-1 col-end-3 row-start-2 mt-8 lg:mt-5">
                    <div class="flex justify-center">
                        <TheBoard />
                    </div>
                    <TurnCard />
                </div>
                <PlayerCard 
                    :player-number="2"
                    :player-score="playerTwoScore"
                    class="col-start-2 row-start-1"
                />
            </div>
            <GameFooter />
        </div>
    </div>
</template>