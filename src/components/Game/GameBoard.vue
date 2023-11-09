<script setup lang="ts">
import GameHeader from './GameHeader.vue';
import PlayerCard from './PlayerCard.vue';
import TurnCard from './TurnCard.vue';
import TheBoard from './TheBoard.vue';

</script>

<template>
    <div class="w-full mx-auto bg-electric-violet">
        <div class="max-w-5xl flex flex-col gap-6 mx-auto h-full min-h-screen">
            <GameHeader />
            <div class="mt-8 flex justify-between items-center relative">
                <PlayerCard 
                    :player-number="2" 
                    :player-score="2" 
                />
                <TheBoard />
                <PlayerCard 
                    :player-number="2" 
                    :player-score="12" 
                />
                <TurnCard />
            </div>
        </div>
    </div>
</template>