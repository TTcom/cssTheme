<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const setColor = (e)=>{
  console.log(e.target.className)
  let str = e.target.className.match(/bg-(\S*)-200/)[1];
  document.querySelector('html').className = str
}
</script>

<template>
  <div 
  text-custom p-custom  
  purple="text-purple-200" 
  red="text-red-200"
  indigo="text-indigo-200"
  orange="text-orange-200"
  green="text-green-200"
  blue="text-blue-200"
  >{{ msg }}</div>
  <div flex gap-2 mt-3 @click="setColor($event)">
    <div class="rounded-full w-8 h-8 bg-indigo-200"></div>
    <div class="rounded-full w-8 h-8 bg-red-200"></div>
    <div class="rounded-full w-8 h-8 bg-orange-200"></div>
    <div class="rounded-full w-8 h-8 bg-green-200"></div>
    <div class="rounded-full w-8 h-8 bg-blue-200"></div>
    <div class="rounded-full w-8 h-8 bg-purple-200"></div>
    <div class="rounded-full w-8 h-8 bg-gray-200"></div>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
