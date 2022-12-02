<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const mode = useColorMode({
  emitAuto: false,
  modes: {
    contrast: 'contrast',
    cafe: 'cafe',
    autoaa: 'autoaa'
  },
})
const changeMode=(status)=>{
    mode.value = status
}
mode.value = 'contrast'
</script>

<template>
    <div>
        <span class="p-4 opacity-50">← Click to change the color mode</span>
    </div>
    <div flex gap-2 justify-center mt-20px>
        <button @click="changeMode('contrast')">
            contrast
        </button>
        <button @click="changeMode('cafe')">
            cafe
        </button>
        <button @click="changeMode('autoaa')">
            autoaa
        </button>
    </div>

  
</template>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
html.contrast {
  filter: contrast(2);
}
</style>