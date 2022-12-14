<script setup>

let colors = {
  "i":"indigo",
  "r":"red",
  "o":"orange",
  "g":"green",
  "b":"blue",
  "p":"purple",
  "wey":"wey",
  "tank":"tank",
}
const setColor = (e)=>{
  console.log(e)
  document.querySelector('html').className = colors[e.target.innerHTML] 
}
</script>

<template>
  <div class="before:content-[quoted:1234]" 
  before:block
 before:bg-red 
  before:absolute 
  before:c-blue
  before:left-0
  relative
  > 
    tyr before text
  </div>
  <!-- unocss-preset-theme示例 -->
  <div class="picker">
      <div text-custom>picker-theme-custom</div>
  </div>
  <div class="atank">
      <div text-custom>atank-theme-custom</div>
  </div>

 <!-- shortcuts示例 -->
  <button weybtn type="button" outline-none my-10px>weybtn</button><br>

 <!-- @iconify-json示例 -->
  <i text-24px icon-btn i-logos-bigpanda></i>

  <!-- unocss-themes示例 -->
  <div 
  purple="text-purple-200 m-20px" 
  red="text-red-200"
  indigo="text-indigo-200"
  orange="text-orange-200"
  green="text-green-200"
  blue="text-blue-200"
 wey-text-gray-200
   wey-m-20px
   tank-p-20px
   tank-text-green
  >unocss + vite + Vue</div>
  <div flex gap-2 mt-3 @click="setColor($event)">
    <div class="rounded-full w-8 h-8 bg-indigo-200" c-white>i</div>
    <div class="rounded-full w-8 h-8 bg-red-200" c-white>r</div>
    <div class="rounded-full w-8 h-8 bg-orange-200" c-white>o</div>
    <div class="rounded-full w-8 h-8 bg-green-200" c-white>g</div>
    <div class="rounded-full w-8 h-8 bg-blue-200" c-white>b</div>
    <div class="rounded-full w-8 h-8 bg-purple-200" c-white>p</div>
    <div class="rounded-full w-8 h-8">wey</div>
    <div class="rounded-full w-8 h-8">tank</div>
  </div>
  
</template>