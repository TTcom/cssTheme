<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// import colorMode from './components/colorMode.vue'
// import cssVar from './components/cssVar.vue'
</script>

<template>
  <div class="picker">
    <div c-white p-qqqa class="bg-myset">picker-theme-myset#d43131</div>
    <div w-mywidth>picker宽度42px</div>
  </div>

  <div class="dark">
    <div class="contentc">contentc</div>
  </div>
  <div class="night">
    <div class="contentc">contentc</div>
  </div>
  <!-- <div class="atank">
    <div c-white p-qqqa class="bg-myset">picker-theme-myset#d43131</div>
    <div w-qqqa>qqqa宽度42px</div>
  </div> -->
  <!-- <div> -->
    <!-- <colorMode></colorMode> -->
    <!-- <cssVar></cssVar> -->
  <!-- </div>
  <HelloWorld/> -->
</template>

<style>
 .dark{
  --color: rgb(237, 4, 77);
 }
 .night{
  --color: rgb(25, 233, 25);
 }
 .contentc{
  color: var(--color);
 }
</style>
