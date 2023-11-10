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
    <div class="bg-white border-[3px] border-black relative text-black rounded-[20px] p-0 md:px-5 md:pt-4 lg:px-6 lg:pt-9 md:pb-4 h-[100px] lg:h-[160px] flex lg:block">
        <div :class="props.playerNumber === 1 ? 'relative w-full justify-center md:justify-end gap-0 md:gap-5 lg:gap-0 flex flex-col md:flex-row lg:flex-col items-center' : 'gap-0 md:gap-5 lg:gap-0 relative flex w-full justify-center md:justify-end flex-col md:flex-row-reverse lg:flex-col items-center'">
            <img 
                :src="playerImage" 
                alt="" 
                class="h-12 md:h-[59px] absolute lg:-top-16 mx-auto"
                :class="props.playerNumber === 1 ? '-left-6 md:-left-12 lg:left-0 lg:right-0' : '-right-6 md:-right-10 lg:left-0 lg:right-0'"
            >
            <h2 class="text-xs md:text-s uppercase font-bold">Player {{ playerNumber }}</h2>
            <h3 class="text-[32px] md:text-l">{{ playerScore }}</h3>
        </div>
    </div>
</template>
