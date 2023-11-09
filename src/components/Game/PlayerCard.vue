<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
    playerNumber: Number,
    playerScore: Number
})

const playerImage = ref('')

onMounted(async () => {
    const module = await (props.playerNumber === 1 ? import('./../../assets/images/player-one.svg') : import('./../../assets/images/player-two.svg'))
    playerImage.value = module.default
})
</script>


<template>
    <div class="bg-white border-[3px] border-black relative text-black rounded-[20px] px-6 pt-9 pb-4 h-[160px]">
        <img :src="playerImage" alt="" class="h-[59px] absolute -top-6 left-0 right-0 mx-auto">
        <div class="relative flex flex-col items-center">
            <h2 class="text-s uppercase font-bold">Player {{ playerNumber }}</h2>
            <h3 class="text-l">{{ playerScore }}</h3>
        </div>
    </div>
</template>